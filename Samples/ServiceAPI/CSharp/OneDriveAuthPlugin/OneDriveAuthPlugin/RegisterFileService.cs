﻿using HP.HPTRIM.SDK;
using HP.HPTRIM.Service;
using Microsoft.Identity.Client;
using OneDriveConnector;
using ServiceStack;
using ServiceStack.Logging;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IdentityModel.Tokens;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace OneDriveAuthPlugin
{
	public interface ITrimRequest
	{
		long Uri { get; set; }
	}

	[Route("/RegisterFile", "GET")]
	public class RegisterFile : IReturn<RegisterFileResponse>, ITrimRequest
	{
		public string WebUrl { get; set; }
		public long Uri { get; set; }

		public OperationType Operation { get; set; }

		public bool IsEmail { get; set; }
		public bool GetFile { get; set; }
		public string AttachmentName { get; set; }
	}

	[Route("/DriveFile", "POST")]
	public class DriveFileOperation : IReturn<RegisterFileResponse>, ITrimRequest
	{
		public long Uri { get; set; }
		public string Action { get; set; }
		public string FileName { get; set; }
		public string WebUrl { get; set; }
	}

	public class RegisterdFileResponse
	{
		public string Id { get; set; }
		public long[] Uri { get; set; }
		public OneDriveItem DriveItem { get; set; }
		public IList<MyCommandDef> CommandDefs { get; set; }
		public string RecordType { get; set; }
		public TrimOptions Options { get; set; }

		public Dictionary<string, IList<MyEnumItem>> Enums { get; set; }

		public string EmailPath { get; set; }

	}

	public class RegisterFileResponse : IHasResponseStatus
	{
		public List<RegisterdFileResponse> Results { get; set; }
		public ResponseStatus ResponseStatus { get; set; }
	}

	public class RegisterFileService : BaseOneDriveService
	{


		private static MyCommandDef makeCommand(CommandIds commandId, TrimMainObject fromRecord)
		{

			CommandDef commandDef = new CommandDef(commandId, fromRecord.Database);
			var myCommandDef = new MyCommandDef();
			myCommandDef.CommandId = (HP.HPTRIM.ServiceModel.CommandIds)commandId;
			myCommandDef.MenuEntryString = commandDef.GetMenuEntryString(fromRecord.TrimType);
			myCommandDef.Tooltip = commandDef.GetTooltip(fromRecord.TrimType);
			myCommandDef.StatusBarMessage = commandDef.GetStatusBarMessage(fromRecord.TrimType);

			if (fromRecord is CheckinPlace)
			{
				myCommandDef.IsEnabled = commandDef.IsEnabled((fromRecord as CheckinPlace).CheckinAs);
			}
			else
			{
				myCommandDef.IsEnabled = commandDef.IsEnabled(fromRecord);
			}
			myCommandDef.IsListCommand = commandDef.IsListCommand;
			myCommandDef.NeedsAnObject = commandDef.NeedsAnObject;
			return myCommandDef;
		}

		private static Dictionary<BaseObjectTypes, CommandIds[]> supportedCommandIds;

		public static IList<MyCommandDef> getCommandDefs(TrimMainObject fromRecord)
		{
			if (supportedCommandIds == null)
			{
				supportedCommandIds = new Dictionary<BaseObjectTypes, CommandIds[]>();
				supportedCommandIds[BaseObjectTypes.Record] = new CommandIds[] { CommandIds.Properties, CommandIds.RecCheckIn, CommandIds.RecDocFinal, CommandIds.AddToFavorites, CommandIds.RemoveFromFavorites };
				supportedCommandIds[BaseObjectTypes.CheckinPlace] = new CommandIds[] { CommandIds.New, CommandIds.Remove, CommandIds.Properties };
			}

			var commandDefs = new List<MyCommandDef>();
			foreach (var commandId in supportedCommandIds[fromRecord.TrimType])
			{
				commandDefs.Add(makeCommand(commandId, fromRecord));
			}

			return commandDefs;
		}

		private void updateFromRecord(RegisterdFileResponse fileToUpdate, Record fromRecord)
		{
			fileToUpdate.Uri = new long[] { fromRecord.Uri };
			fileToUpdate.RecordType = fromRecord.RecordType.Name;
			fileToUpdate.CommandDefs = getCommandDefs(fromRecord);

		}

		public async Task<object> Post(DriveFileOperation request)
		{
			string fileName = request.FileName;
			try
			{

				RegisterFileResponse response = new RegisterFileResponse();

				Record record = new Record(this.Database, request.Uri);
				record.Refresh();

				string driveId = record.GetDriveId();

				var registeredFile = new RegisterdFileResponse() { Id = driveId };


				request.Action = request.Action ?? "";

				if (request.Action.IndexOf("AddToFavorites", StringComparison.InvariantCultureIgnoreCase) > -1)
				{
					record.AddToFavorites();
				}

				if (request.Action.IndexOf("RemoveFromFavorites", StringComparison.InvariantCultureIgnoreCase) > -1)
				{
					record.RemoveFromFavorites();
				}

				if (request.Action.IndexOf("checkin", StringComparison.InvariantCultureIgnoreCase) > -1
					&& request.Action.IndexOf("checkin-requst-del", StringComparison.InvariantCultureIgnoreCase) < 1)
				{
					string token = await getToken();
					if (!string.IsNullOrWhiteSpace(request.FileName))
					{




						if (!Path.IsPathRooted(request.FileName))
						{
							fileName = Path.Combine(this.ServiceDefaults.UploadBasePath, request.FileName);
						}

						var inputDocument = new InputDocument(fileName);

						inputDocument.CheckinAs = request.WebUrl;
						record.SetDocument(inputDocument, true, false, "checkin from Word Online");


					}
					else
					{

						string downloadUrl = GraphApiHelper.GetOneDriveItemContentIdUrl(driveId);

						var fileResult = await ODataHelper.GetItem<OneDriveItem>(GraphApiHelper.GetOneDriveItemIdUrl(driveId), token, null);

						string filePath = Path.Combine(TrimApplication.WebServerWorkPath, fileResult.Name);


						await ODataHelper.GetItem<string>(downloadUrl, token, filePath);



						var inputDocument = new InputDocument(filePath);


						inputDocument.CheckinAs = record.SuggestedFileName;
						record.SetDocument(inputDocument, true, false, "checkin from Word Online");
					}
				}

				if (request.Action.IndexOf("request-del", StringComparison.InvariantCultureIgnoreCase) > -1)
				{
					record.SetDeleteNow(!record.GetDeleteNow());
				}

				if (request.Action.IndexOf("delete", StringComparison.InvariantCultureIgnoreCase) > -1)
				{
					string token = await getToken();

					await ODataHelper.DeleteWithToken(GraphApiHelper.GetOneDriveItemIdUrlForDelete(driveId), token);
					record.SetDriveId("");
				}

				if (request.Action.IndexOf("finalize", StringComparison.InvariantCultureIgnoreCase) > -1)
				{

					record.SetAsFinal(false);
				}

				record.Save();

				updateFromRecord(registeredFile, record);

				response.Results = new List<RegisterdFileResponse>() { registeredFile };
				return response;
			}
			finally
			{

				if (!string.IsNullOrWhiteSpace(fileName))
				{
					File.Delete(fileName);
				}

			}
		}


		private async Task<long[]> getEmailLinkUri(string webUrl, string token)
		{
			List<long> recordUris = new List<long>();
			string dbid = "";
			var mailResult = await ODataHelper.GetItem<MailItem>(GraphApiHelper.GetMailItemURL(webUrl), token, null);

			if (mailResult != null && mailResult.SingleValueExtendedProperties != null)
			{
				foreach (var prop in mailResult.SingleValueExtendedProperties)
				{
					if (prop.Id.Equals(GraphApiHelper.IDPropName(), StringComparison.InvariantCultureIgnoreCase))
					{
						string[] idTokens = prop.Value.Split('/');

						dbid = idTokens.First().Split(':').Last();

						foreach (string s in prop.Value.Split(',', ';'))
						{
							long recordUri;
							if (long.TryParse(s.Split('/').Last().Trim(), out recordUri))
							{
								if (!recordUris.Contains(recordUri))
								{
									recordUris.Add(recordUri);
								}
							}
						}





					}

					if (prop.Id.Equals(GraphApiHelper.IDPropNameForMAPIBIID(), StringComparison.InvariantCultureIgnoreCase))
					{
						dbid = prop.Value;
					}

					if (prop.Id.Equals(GraphApiHelper.IDPropNameForMAPIUri(), StringComparison.InvariantCultureIgnoreCase))
					{
						//long.TryParse(prop.Value.Split(',').First().Trim(), out recordUri);

						foreach (string s in prop.Value.Split(','))
						{
							long recordUri;
							if (long.TryParse(s.Trim(), out recordUri))
							{
								if (!recordUris.Contains(recordUri))
								{
									recordUris.Add(recordUri);
								}
							}
						}
					}
				}

				if (dbid.EqualsIgnoreCase(this.Database.Id))
				{
					return recordUris.ToArray();
				}
			}

			return new long[] { };
		}


		public async Task<object> Get(RegisterFile request)
		{
			var log = LogManager.GetLogger(typeof(RegisterFileService));

			log.Debug("GET start");
			RegisterFileResponse response = new RegisterFileResponse();



			log.Debug("getToken");
			string token = await getToken();
			log.Debug("gotToken");

			string driveId = null;

			if (!request.IsEmail)
			{
				driveId = getDriveIdFromTrim(request);
			}
			log.Debug("got Drive ID");
			OneDriveItem fileResult = null;

			long[] recordUris = new long[] { };

			RegisterdFileResponse registeredFile = new RegisterdFileResponse();
			try
			{

				if (request.IsEmail && string.IsNullOrWhiteSpace(request.AttachmentName))
				{
					recordUris = await getEmailLinkUri(request.WebUrl, token);
				}

				if (request.IsEmail && (recordUris.Length == 0 || request.GetFile == true))
				{
					var emailUrl = GraphApiHelper.GetEMLUrl(request.WebUrl);

					string userFolder = Path.Combine("ForUser", this.Database.CurrentUser.Uri.ToString());

					string fullUserFolder = Path.Combine(this.ServiceDefaults.UploadBasePath, userFolder);

					Directory.CreateDirectory(fullUserFolder);
					string fileName = Path.ChangeExtension(request.WebUrl, "eml");

					if (!string.IsNullOrWhiteSpace(request.AttachmentName))
					{
						fileName = request.AttachmentName;
					}

					string filePath = Path.Combine(fullUserFolder, fileName);


					await ODataHelper.GetItem<string>(emailUrl, token, filePath);
					registeredFile.EmailPath = Path.Combine(userFolder, fileName); ;

				}
				else if (!string.IsNullOrWhiteSpace(request.WebUrl) && new string[] { "https://", "http://" }
			  .Any(s => request.WebUrl.StartsWith(s, StringComparison.InvariantCultureIgnoreCase)))
				{
					if (request.WebUrl.StartsWith("http", StringComparison.InvariantCultureIgnoreCase))
					{
						log.Debug("GetItem");
						var fullOneDriveItemsUrl = GraphApiHelper.GetOneDriveShareUrl(request.WebUrl);
						log.Debug("Got URL");
						fileResult = await ODataHelper.GetItem<OneDriveItem>(fullOneDriveItemsUrl, token, null);
						log.Debug("GotItem");
					}
				}
				else if (!string.IsNullOrWhiteSpace(driveId) && !request.IsEmail)
				{
					fileResult = await ODataHelper.GetItem<OneDriveItem>(GraphApiHelper.GetOneDriveItemIdUrl(driveId), token, null);
				}
			}
			catch
			{
				throw;
			}



			//DroppedFilesUserOptions fileOptions = new DroppedFilesUserOptions(this.Database);
			//var options = new TrimOptions();
			//if (fileOptions.UseDefaultRecordTypeInOffice == true)
			//{
			//	options.DefaultDocumentRecordType = fileOptions.RecordType.Uri;
			//}

			//registeredFile.Options = options;

			var enumItems = new List<MyEnumItem>();

			HP.HPTRIM.SDK.Enum relationshipEnum = new HP.HPTRIM.SDK.Enum(AllEnumerations.RecordRelationshipType, this.Database);

			foreach (var relEnum in relationshipEnum.GetItemArray(new int[] { (int)RecordRelationshipType.InSharepointSite, (int)RecordRelationshipType.IsInSeries, (int)RecordRelationshipType.IsRootPart, (int)RecordRelationshipType.IsTempCopy, (int)RecordRelationshipType.IsVersion, (int)RecordRelationshipType.RedactionOf }, true).OrderBy(ei => ei.Caption))
			{
				enumItems.Add(new MyEnumItem() { Name = relEnum.Name, Caption = relEnum.Caption });
			}

			Dictionary<string, IList<MyEnumItem>> enumDetails = new Dictionary<string, IList<MyEnumItem>>();
			enumDetails.Add("RecordRelationshipType", enumItems);

			registeredFile.Enums = enumDetails;

			if (fileResult != null)
			{
				registeredFile.Id = fileResult?.getDriveAndId();
				registeredFile.DriveItem = fileResult;

				TrimMainObjectSearch search = new TrimMainObjectSearch(this.Database, BaseObjectTypes.Record);

				search.AddSearchClause(fileResult.getDriveAndId().GetDriveIdSearchClause(this.Database));

				var uris = search.GetResultAsUriArray(2);

				if (uris.Count == 1)
				{
					registeredFile.Uri = uris;
				}
			}
			else if (request.IsEmail && recordUris.Length > 0)
			{


				registeredFile.Uri = recordUris;

			}
			else if (!string.IsNullOrWhiteSpace(request.WebUrl) && !request.WebUrl.StartsWith("http", StringComparison.InvariantCultureIgnoreCase))
			{
				TrimMainObjectSearch search = new TrimMainObjectSearch(this.Database, BaseObjectTypes.Record);

				search.AddSearchClause(request.WebUrl.GetDriveIdSearchClause(this.Database));

				TrimSearchClause checkedInByClause = new TrimSearchClause(this.Database, BaseObjectTypes.Record, SearchClauseIds.RecordCheckedInBy);
				checkedInByClause.SetCriteriaFromObject(this.Database.CurrentUser);
				search.AddSearchClause(checkedInByClause);
				search.And();

				var uris = search.GetResultAsUriArray(2);

				if (uris.Count == 1)
				{
					registeredFile.Uri = uris;
				}
			}
			response.Results = new List<RegisterdFileResponse>() { registeredFile };

			log.Debug("Finished");
			return response;
		}

		// I am not 100% sure but the OnEndRequest method of Disposing seems to get called before the async services, that is why I am disposing here.
		// If I continue to get Disposal errors I will need to re-think this.
		public override void Dispose()
		{
			this.Database.Dispose();
			base.Dispose();
		}
	}
}
