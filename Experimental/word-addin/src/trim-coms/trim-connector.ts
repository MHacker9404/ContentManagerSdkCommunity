import Axios, { AxiosRequestConfig } from "axios";
import { BaseObjectTypes } from "./trim-baseobjecttypes";
import { CommandIds } from "./trim-command-ids";
import TrimMessages from "./trim-messages";
import { CacheIds } from "./cache-ids";

const config = (global as any).config;

const BASE_URI = config.BASE_URL.endsWith("/")
	? config.BASE_URL
	: config.BASE_URL + "/";

export const SERVICEAPI_BASE_URI = BASE_URI + config.SERVICEAPI_PATH;

export type ITokenCallback = (
	accessToken: string,
	errorMessage: string
) => void;

export interface ITrimProperty {
	StringValue?: string;
}

export interface ITrimString extends ITrimProperty {
	Value: string;
}

export interface ISearchParameters {
	trimType: BaseObjectTypes;
	q: string;
	purpose: number;
	purposeExtra?: number;
	start?: number;
	sortBy?: string;
	filter?: string;
	properties?: string;
	commandFilter?: string;
}

interface IOptionsInterface {
	accessToken: string;
	path: string;
	method: string;
	data: any;
}

export interface IPropertyOrFieldDef {
	Caption: string;
	Id: string;
}

export interface IObjectDetails {
	results: ITrimDetailsObject[];
	propertiesAndFields: IPropertyOrFieldDef[];
}

export interface ISearchResults<T extends ITrimMainObject> {
	hasMoreItems: boolean;
	results: T[];
}

export interface IEnumDetails {
	Name: string;
	Caption: string;
}

export interface IEnums {
	RecordRelationshipType: IEnumDetails[];
}

export interface IDriveInformation {
	Id: string;
	Uris: number[];
	Options: ITrimOptions;
	EmailPath: string;
	URN: string;
	PreservedUris?: number[];
}

export interface IDriveActionInformation {
	Id: string;
	Uris: number[];
	RecordType: string;
	CommandDefs: ICommandDef[];
	Options: ITrimOptions;
	Enums: IEnums;
	EmailPath: string;
	URN: string;
}

export interface IIcon {
	FileType: string;
	Id: string;
}

export interface ITrimMainObject {
	Icon?: IIcon;
	Uri: number;
	NameString?: string;
	CommandDefs?: ICommandDef[];
	PossiblyHasSubordinates?: boolean;
	ToolTip?: string;
	Selected?: boolean;
	TrimType?: BaseObjectTypes;
	DeleteNow?: boolean;
	URN?: string;
}

export interface ITrimBooleanField extends ITrimField {
	Value: boolean;
}

export interface ITrimField {
	StringValue: string;
}

export interface ITrimDetailsObject {
	Uri: number;
	Fields?: { [fieldName: string]: ITrimField };
	[x: string]: any;
}

export interface IRecord extends ITrimMainObject {
	MessageId: ITrimString;
	ESource: ITrimString;
}

export interface ILocation extends ITrimMainObject {
	FullFormattedName: ITrimString;
}

export interface IClassification extends ITrimMainObject {
	Name: ITrimString;
}

export interface IRecordType extends ITrimMainObject {}
export interface ICheckinPlace extends ITrimMainObject {
	CheckinAs: ITrimMainObject;
}
export interface ICommandDef {
	CommandId: string;
	MenuEntryString: string;
	Tooltip: string;
	StatusBarMessage: string;
	IsEnabled: boolean;
	NeedsAnObject: boolean;
}

export interface ITrimOptions {
	DefaultDocumentRecordType: number;
}

export interface IObjectDef {
	Id: string;
	Caption: string;
	CaptionPlural: string;
}

export interface ISearchClauseDef {
	Id: string;
	InternalName: string;
	Caption: string;
	ToolTip: string;
	MethodGroup: string;
	IsBlocked: boolean;
}

export interface ISearchClauseOrFieldDef {
	Caption: string;
	MethodGroup: string;
	ClauseName: string;
	IsRecent: boolean;
	IsFavorite: boolean;
	ParameterFormat: string;
	SearchParameterFormat: string;
	ClauseDef: ISearchClauseDef;
}

export interface ISearchOptions {
	StartPointForContainers: string;
	StartPointForLocations: string;
	StartPointRecordDefault: string;
	StartPointDefault: string;
	IncludeAlternateWhenShowingFolderContents: boolean;
	ContentsInReverseDateOrder: boolean;
}

export interface IDatabase {
	CurrencySymbol: string;
	EmailSubjectPrefix: string;
	Id: string;
}

export interface IDataEntryForm {
	NeedsDataEntryForm: Boolean;
	DataEntryFormDefinition: any;
}

export interface ITrimConnector {
	clearCache: () => void;
	cancel: () => void;
	credentialsResolver: (callback: ITokenCallback) => void;
	getMe(): Promise<ILocation>;
	getMessages(): Promise<any>;
	getSearchClauseDefinitions(
		trimType: BaseObjectTypes
	): Promise<ISearchClauseDef[]>;
	getSearchClauseOrFieldDefinitions(
		trimType: BaseObjectTypes
	): Promise<ISearchClauseOrFieldDef[]>;

	getObjectDefinitions(): Promise<IObjectDef[]>;
	getObjectCaption(trimType: BaseObjectTypes): Promise<string>;
	getSearchOptions(): Promise<ISearchOptions>;
	getDatabaseProperties(): Promise<IDatabase>;
	getEnum(enumId: string): Promise<IEnumDetails[]>;
	search<T>(
		options: ISearchParameters
	): Promise<ISearchResults<ITrimMainObject>>;
	getPropertySheetFromStyle(
		checkinStyleUri: number,
		withFile?: string
	): Promise<IDataEntryForm>;
	getPropertySheet(
		trimType: BaseObjectTypes,
		recordTypeUri: number,
		withFile?: string
	): Promise<IDataEntryForm>;
	getPropertySheetForObject(
		trimType: BaseObjectTypes,
		uri: number
	): Promise<any>;
	saveToTrim(
		trimType: BaseObjectTypes,
		properties: any,
		fields?: any
	): Promise<ITrimMainObject>;
	getDriveUrl(recordUri: number): Promise<string>;
	getRecordAsText(recordUri: number): Promise<string>;
	getDriveId(
		webUrl: string,
		isEmail: boolean,
		recordUri: number,
		attachmentName?: string,
		getFile?: boolean
	): Promise<IDriveInformation>;
	getObjectDetails(
		trimType: BaseObjectTypes,
		uri: number
	): Promise<IObjectDetails>;

	runAction(
		commandId: CommandIds,
		uri: number,
		fileName: string,
		webUrl: string
	): Promise<IDriveActionInformation>;

	createRelationship(
		uri: number,
		relatedRecord: number,
		relationshipType: string
	): Promise<void>;

	writeFileSlice(data: number[], fileName: string): Promise<string>;
	makeFriendlySearchQuery(trimType: BaseObjectTypes, query: string): string;

	setLatestClause(trimType: BaseObjectTypes, queryName: string): void;
	getLatestClause(trimType: BaseObjectTypes): string;
	setViewPaneProperties(
		trimObject: ITrimMainObject,
		propertyIds: string[]
	): Promise<IPropertyOrFieldDef[]>;

	getViewPanePropertyDefs(
		trimType: BaseObjectTypes
	): Promise<IPropertyOrFieldDef[]>;

	setGlobalUserOptions(forUserOptionSet: string): Promise<void>;
	getDefaultRecordType(): Promise<IRecordType>;
	isDataEntryFormNeeded(recordTypeUri: number): Promise<Boolean>;
	getMenuItemsForList(trimType: BaseObjectTypes): Promise<ICommandDef[]>;
	getUseCheckinStyles(): Boolean;
	setUseCheckinStyles(use: boolean): void;
	suppressDataEntryForm(suppress?: boolean): boolean;
}

export class TrimConnector implements ITrimConnector {
	private CancelToken = Axios.CancelToken;
	private source = this.CancelToken.source();

	public getUseCheckinStyles(): Boolean {
		const useCheckinStyles = this.getItemFromCache(CacheIds.UseCheckinStyles);
		if (useCheckinStyles === null) {
			this.setCacheItem(CacheIds.UseCheckinStyles, false);
		}
		return this.getItemFromCache(CacheIds.UseCheckinStyles);
	}

	public setUseCheckinStyles(use: boolean): void {
		this.setCacheItem(CacheIds.UseCheckinStyles, use);
	}

	public suppressDataEntryForm(suppress?: boolean): boolean {
		if (suppress !== undefined) {
			this.setCacheItem(CacheIds.SuppressDataEntryForm, suppress);
		}

		const suppressForm = this.getItemFromCache(CacheIds.SuppressDataEntryForm);
		if (suppressForm === null) {
			this.setCacheItem(CacheIds.SuppressDataEntryForm, true);
		}
		return this.getItemFromCache(CacheIds.SuppressDataEntryForm);
	}

	public cancel(): void {
		this.source.cancel();
	}

	public makeFriendlySearchQuery(
		trimType: BaseObjectTypes,
		query: string
	): string {
		switch (trimType) {
			case BaseObjectTypes.Record:
				return `recAnyWord:${query}* OR recNumber:${query}*`;
			case BaseObjectTypes.Location:
				return `locGivenNames:${query}* OR locSortName:${query}* OR locLogin:${query}*`;
			case BaseObjectTypes.Classification:
				return `plnWord:${query}* OR plnTitle:${query}*`;
			default:
				return `${query}*`;
		}
	}

	public getMenuItemsForList(
		trimType: BaseObjectTypes
	): Promise<ICommandDef[]> {
		if (trimType !== BaseObjectTypes.CheckinPlace) {
			return new Promise((resolve) => {
				resolve([]);
			});
		} else {
			const data = {
				CommandIds: "New",
				TrimType: trimType,
			};
			return this.makeRequest(
				{ path: "CommandDef", method: "get", data },
				(data: any) => {
					const commandDefs = data.CommandDefs.map((cdef: ICommandDef) => {
						return {
							CommandId: cdef.CommandId,
							MenuEntryString: cdef.MenuEntryString,
							Tooltip: cdef.Tooltip,
							StatusBarMessage: cdef.StatusBarMessage,
							IsEnabled: true,
							NeedsAnObject: cdef.NeedsAnObject,
						};
					});

					return commandDefs;
				}
			);
		}
	}

	public isDataEntryFormNeeded(recordTypeUri: number): Promise<Boolean> {
		const data = {
			RecordRecordType: recordTypeUri,
			properties: "RecordNeedsDataEntryForm",
			ByPassSave: true,
			RecordTitle: "test",
		};

		return this.makeRequest(
			{ path: `${BaseObjectTypes.Record}`, method: "post", data },
			(data: any) => {
				return data.Results[0].RecordNeedsDataEntryForm.Value;
			}
		);
	}

	public setLatestClause(trimType: BaseObjectTypes, queryName: string): void {
		const cacheValue = this.getItemFromCache(CacheIds.LatestQuery) || {};
		cacheValue[trimType] = queryName;

		this.setCacheItem(CacheIds.LatestQuery, cacheValue);
	}
	public getLatestClause(trimType: BaseObjectTypes): string {
		return (this.getItemFromCache(CacheIds.LatestQuery) || {})[trimType];
	}

	public getDatabaseProperties(): Promise<IDatabase> {
		const cachedOptions = this.getItemFromCache(CacheIds.DatabaseOptions);
		if (cachedOptions) {
			return new Promise((resolve) => {
				resolve(cachedOptions);
			});
		} else {
			return this.makeRequest(
				{
					path: "Database",
					method: "get",
					data: {
						properties:
							"DatabaseCurrencySymbol,DatabaseEmailSubjectPrefix,DatabaseId",
					},
				},
				(data: any) => {
					const prefix = "Database";
					let databaseProperties = {};
					for (const key in data.Results[0]) {
						if (key.startsWith(prefix)) {
							databaseProperties[key.substring(prefix.length)] =
								data.Results[0][key].Value;
						} else {
							databaseProperties[key as string] = data.Results[0][key].Value;
						}
					}
					this.setCacheItem(CacheIds.DatabaseOptions, databaseProperties);
					return databaseProperties;
				}
			);
		}
	}

	public getSearchOptions(): Promise<ISearchOptions> {
		const cachedOptions = this.getItemFromCache(CacheIds.SearchOptions);
		if (cachedOptions) {
			return new Promise((resolve) => {
				resolve(cachedOptions);
			});
		} else {
			return this.makeRequest(
				{ path: "UserOptions/Search", method: "get" },
				(data: any) => {
					const prefix = "SearchUserOptions";
					const searchOptionsCache = {};
					for (let key in data.UserOptions) {
						if (key.startsWith(prefix)) {
							searchOptionsCache[key.substring(prefix.length)] =
								data.UserOptions[key].Value;
						} else {
							searchOptionsCache[key as string] = data.UserOptions[key].Value;
						}
					}
					this.setCacheItem(CacheIds.SearchOptions, searchOptionsCache);
					return searchOptionsCache as ISearchOptions;
				}
			);
		}
	}

	cacheIdsToPersist = [CacheIds.UseCheckinStyles, CacheIds.LatestQuery];

	private getItemFromCache(id: CacheIds): any {
		const cacheItem = localStorage.getItem(id);
		if (cacheItem) {
			return JSON.parse(cacheItem);
		}
		return null;
	}

	private setCacheItem(id: CacheIds, cacheData: any) {
		localStorage.setItem(id, JSON.stringify(cacheData));
	}

	public clearCache(): void {
		for (let counter = 0; counter < localStorage.length; counter++) {
			const key = localStorage.key(counter);
			if (key && !this.cacheIdsToPersist.includes(key as CacheIds)) {
				localStorage.removeItem(key);
			}
		}
	}

	public getObjectCaption(trimType: BaseObjectTypes): Promise<string> {
		return new Promise((resolve) => {
			this.getObjectDefinitions().then((objectDefs) => {
				const objectDef = objectDefs.find((objectDef) => {
					return objectDef.Id == trimType;
				});
				if (objectDef) {
					resolve(objectDef.Caption);
				} else {
					resolve(trimType);
				}
			});
		});
	}

	public getObjectDefinitions(): Promise<IObjectDef[]> {
		const params = {
			ObjectType: "Main",
		};

		let cachedResults = this.getItemFromCache(CacheIds.ObjectDef);

		if (cachedResults) {
			return new Promise((resolve) => {
				resolve(cachedResults);
			});
		} else {
			return this.makeRequest(
				{ path: "ObjectDef", method: "get", data: params },
				(data: any) => {
					cachedResults = data.ObjectDefs;
					this.setCacheItem(CacheIds.ObjectDef, cachedResults);

					return data.ObjectDefs;
				}
			);
		}
	}

	public getEnum(enumId: string): Promise<IEnumDetails[]> {
		const params = {
			Enums: enumId,
			ExcludeUneditedCustomValues: true,
		};

		const cachedResults = this.getItemFromCache(CacheIds.EnumDetails) || {};

		if (cachedResults[enumId]) {
			return new Promise((resolve) => {
				resolve(cachedResults[enumId]);
			});
		} else {
			return this.makeRequest(
				{ path: "EnumItem", method: "get", data: params },
				(data: any) => {
					cachedResults[enumId] = data.EnumItems[enumId];
					this.setCacheItem(CacheIds.EnumDetails, cachedResults);
					return data.EnumItems[enumId];
				}
			);
		}
	}

	public getSearchClauseDefinitions(
		trimType: BaseObjectTypes
	): Promise<ISearchClauseDef[]> {
		const params = {
			TrimType: trimType,
		};

		const cachedResults = this.getItemFromCache(CacheIds.SearchClauses) || {};

		if (cachedResults[trimType]) {
			return new Promise((resolve) => {
				resolve(cachedResults[trimType]);
			});
		} else {
			return this.makeRequest(
				{ path: "SearchClauseDef", method: "get", data: params },
				(data: any) => {
					cachedResults[trimType] = data.SearchClauseDefs;
					this.setCacheItem(CacheIds.SearchClauses, cachedResults);
					//this._searchClauseCache[trimType] = data.SearchClauseDefs;
					return data.SearchClauseDefs;
				}
			);
		}
	}

	public getSearchClauseOrFieldDefinitions(
		trimType: BaseObjectTypes
	): Promise<ISearchClauseOrFieldDef[]> {
		const params = {
			TrimType: trimType,
		};

		const cachedResults =
			this.getItemFromCache(CacheIds.SearchFieldClauses) || {};

		if (cachedResults[trimType]) {
			return new Promise((resolve) => {
				resolve(cachedResults[trimType]);
			});
		} else {
			return this.makeRequest(
				{ path: "SearchClauseOrFieldDef", method: "get", data: params },
				(data: any) => {
					cachedResults[trimType] = data.SearchClauseOrFieldDefs;
					this.setCacheItem(CacheIds.SearchFieldClauses, cachedResults);
					//this._searchClauseCache[trimType] = data.SearchClauseDefs;
					return data.SearchClauseOrFieldDefs;
				}
			);
		}
	}
	public credentialsResolver: (callback: ITokenCallback) => void;

	writeFileSlice(data: number[], fileName: string): Promise<string> {
		return this.makeRequest(
			{ path: "WriteFile", method: "post", data: { data, fileName } },
			(data: any) => {
				return data.FileName;
			}
		);
	}

	public runAction(
		commandId: CommandIds,
		uri: number,
		fileName: string,
		webUrl: string
	): Promise<IDriveActionInformation> {
		const path = "DriveFile";

		const postBodies = {
			[CommandIds.RecCheckIn]: { uri, Action: "checkin", fileName, webUrl },
			[CommandIds.RecCheckInDelete]: {
				uri,
				Action: "checkin-request-del",
				fileName,
				webUrl,
			},
			[CommandIds.RecDocFinal]: {
				Action: "finalize",
				uri,
			},
			[CommandIds.AddToFavorites]: {
				Action: "AddToFavorites",
				uri,
			},
			[CommandIds.RemoveFromFavorites]: {
				Action: "RemoveFromFavorites",
				uri,
			},
		};

		return this.makeRequest(
			{ path, method: "post", data: postBodies[commandId] },
			(data: any) => {
				return data.Results[0];
			}
		);
	}

	public getViewPanePropertyDefs(
		trimType: BaseObjectTypes
	): Promise<IPropertyOrFieldDef[]> {
		const cachedResults =
			this.getItemFromCache(CacheIds.ViewpanePropDefs) || {};

		if (cachedResults[trimType]) {
			return new Promise((resolve) => {
				resolve(cachedResults[trimType]);
			});
		} else {
			const path = "PropertyDef";

			const params = {
				TrimType: trimType,

				Get: "ViewPane",
			};

			return this.makeRequest(
				{ path, method: "get", data: params },
				(data: any) => {
					cachedResults[trimType] = data.PropertiesAndFields;
					this.setCacheItem(CacheIds.ViewpanePropDefs, cachedResults);
					return data.PropertiesAndFields;
				}
			);
		}
	}

	public setViewPaneProperties(
		trimObject: ITrimMainObject,
		propertyIds: string[]
	): Promise<IPropertyOrFieldDef[]> {
		const path = "PropertyDef";

		const postBody = {
			TrimType: trimObject.TrimType,
			ForObject: trimObject.Uri,
			PropertiesAndFields: propertyIds.map((pid) => {
				return { Id: pid };
			}),
			ListType: "Detailed",
		};

		return this.makeRequest(
			{ path, method: "post", data: postBody },
			(data: any) => {
				return data.PropertiesAndFields;
			}
		);
	}

	public createRelationship(
		uri: number,
		relatedRecord: number,
		relationshipType: string
	): Promise<void> {
		const body = {
			Uri: uri,
			ChildRelationships: [
				{
					RecordRelationshipRelationType: `${relationshipType}`,
					RecordRelationshipRelatedRecord: { Uri: relatedRecord },
				},
			],
		};

		return this.makeRequest(
			{ path: "Record", method: "post", data: body },
			(data: any) => {
				return;
			}
		);
	}

	public getObjectDetails(
		trimType: BaseObjectTypes,
		uri: number
	): Promise<IObjectDetails> {
		const params = {
			includePropertyDefs: true,
			propertySets: "Detailed",
			propertyValue: "Both",
			stringDisplayType: "ViewPane",
			properties: "ToolTip,NameString,DeleteNow,CommandDefs",
			descendantProperties: "RecordNumber",
		};

		return this.makeRequest(
			{ path: `${trimType}/${uri}`, method: "get", data: params },
			(data: any) => {
				return {
					propertiesAndFields: data.PropertiesAndFields[trimType],
					results: data.Results,
				};
			}
		);
	}

	public getDriveId(
		webUrl: string,
		isEmail: boolean,
		recordUri: number,
		attachmentName?: string,
		getFile?: boolean
	): Promise<IDriveInformation> {
		return this.makeRequest(
			{
				path: "RegisterFile",
				method: "get",
				data: { webUrl, isEmail, uri: recordUri, attachmentName, getFile },
			},
			(data: any) => {
				const returnData = data.Results
					? data.Results[0]
					: { Id: "", Uri: [], CommandDefs: [] };
				returnData.Uris = returnData.Uri;
				return returnData;
			}
		);
	}

	public getDriveUrl(recordUri: number): Promise<string> {
		return this.makeRequest(
			{ path: `OpenFile/${recordUri}`, method: "get" },
			(data: any) => {
				return JSON.stringify(data);
			}
		);
	}

	public getRecordAsText(recordUri: number): Promise<string> {
		return this.makeRequest(
			{ path: `GetFile`, method: "get", data: { uri: recordUri } },
			(data: any) => {
				return data.File;
			}
		);
	}

	public saveToTrim(
		trimType: BaseObjectTypes,
		properties: any,
		fields: any = null
	): Promise<ITrimMainObject> {
		const body = {
			...properties,
			properties: "CommandDefs,URN",
		};
		if (fields) {
			body["Fields"] = fields;
		}
		return this.makeRequest(
			{ path: `${trimType}`, method: "post", data: body },
			(data: any) => {
				return data.Results[0];
			}
		);
	}

	private getPropertySheetInternal(
		trimType: BaseObjectTypes,
		body: any,
		withFile?: string
	): Promise<IDataEntryForm> {
		body.properties = "DataEntryFormDefinition,NeedsDataEntryForm";
		body.ByPassSave = true;

		if (withFile) {
			body["RecordFilePath"] = withFile;
		}

		return this.makeRequest(
			{ path: `${trimType}`, method: "post", data: body },
			(data: any) => {
				return {
					DataEntryFormDefinition: data.Results[0].DataEntryFormDefinition,
					NeedsDataEntryForm: (data.Results[0].RecordNeedsDataEntryForm || {})
						.Value,
				};
			}
		);
	}

	public getPropertySheetFromStyle(
		checkinStyleUri: number,
		withFile?: string
	): Promise<IDataEntryForm> {
		const body = {
			CreateFromCheckinStyle: checkinStyleUri,
		};

		return this.getPropertySheetInternal(
			BaseObjectTypes.Record,
			body,
			withFile
		);
	}

	public getPropertySheet(
		trimType: BaseObjectTypes,
		recordTypeUri: number,
		withFile?: string
	): Promise<any> {
		const body = {
			[`${trimType}RecordType`]: recordTypeUri,
		};

		return this.getPropertySheetInternal(trimType, body, withFile);
	}

	public getPropertySheetForObject(
		trimType: BaseObjectTypes,
		uri: number
	): Promise<any> {
		const data = {
			properties: "DataEntryFormDefinition",
		};

		return this.makeRequest(
			{ path: `${trimType}/${uri}`, method: "get", data },
			(data: any) => {
				return data.Results[0].DataEntryFormDefinition;
			}
		);
	}

	public getMessages(): Promise<any> {
		const params = {
			MatchMessages: Object.keys(new TrimMessages()).join("|"),
		};

		const messageCache = this.getItemFromCache(CacheIds.Messages);

		if (messageCache) {
			return new Promise((resolve) => {
				resolve(messageCache);
			});
		} else {
			return this.makeRequest(
				{ path: "Localisation", method: "get", data: params },
				(data: any) => {
					// temporary - need to go in TRIM Messages
					data.Messages.web_Register = "Register in Content Manager";
					data.Messages.web_SelectRecordType = "Select a Record Type";
					data.Messages.web_SelectCheckinStyle = "Select Checkin Style";
					data.Messages.web_UseCheckinStyles = "Use Checkin Styles";
					data.Messages.web_UseRecordTypes = "Use Record Types";
					data.Messages.web_Actions = "Actions";
					data.Messages.web_Checkin = "Check In";
					data.Messages.web_Finalize = "Make Final";
					data.Messages.bob_sbMe = "Me";
					data.Messages.web_GoToTextSearch = "Go to text search";
					data.Messages.web_GoToAdvancedSearch = "Go to advanced search";
					data.Messages.web_GoToCM = "Open in Content Manager";
					data.Messages.web_Paste = "Paste";
					data.Messages.web_Paste_Title = "Title";
					data.Messages.web_Paste_Number = "Number";
					data.Messages.web_Paste_Link = "Link";
					data.Messages.web_Please_Select = "Please select a Record";
					data.Messages.web_Show = "Show";
					data.Messages.web_in_Same_Container = "in same container";
					data.Messages.web_with_Same_Contacts = "with same contacts";
					data.Messages.web_Related_To = "related to";
					data.Messages.web_All_Related_To = "all related to";
					data.Messages.web_Search_Content = "Content:";
					data.Messages.web_Add_Relationship = "Add relationship";
					data.Messages.web_Add = "Add";
					data.Messages.web_Add_RelationshipTitle =
						"Add relationship from the open document to the selected record.";
					data.Messages.web_ApplySearchFilter = "Filter search results";
					data.Messages.web_Record_Paste_Link = "Paste link to Record";
					data.Messages.web_Container_Paste_Link = "Paste link to Container";
					data.Messages.web_Remove_From_View_Pane = "Remove from view pane";
					data.Messages.web_Get_Global_View_Pane =
						"Get default properties and fields for view pane";

					data.Messages.web_Properties = "Properties";
					data.Messages.web_Context = "Context";
					data.Messages.web_Menu = "Menu";
					data.Messages.web_Auto_Generate_Folder = "<Auto Create New Folder>";
					data.Messages.web_Select_Folder = "-- Select a Folder --";
					data.Messages.web_RecordTypeRequiresForm =
						"The data entry form for this Record Type requires user interaction which is not supported by linked folders.";
					data.Messages.web_NewLinkedFolder = "New Linked Folder";
					data.Messages.web_EditTrimObject = "Edit";
					data.Messages.web_attachmentName = "Item Name";
					data.Messages.web_fetching = "Fetching";
					data.Messages.web_filing = "Filing";
					data.Messages.web_attachmentsList = "Records related to this item";
					data.Messages.web_noAttachments =
						"There are no attachments on this item.  Please use 'Record' to create or view this item in Content Manager.";
					data.Messages.core_completeEmail = "Complete email ({0})";
					data.Messages.web_fileMore = "File more";
					this.setCacheItem(CacheIds.Messages, data.Messages);

					//this._messageCache = data.Messages;

					return data.Messages;
				}
			);
		}
	}

	public search<T extends ITrimMainObject>(
		options: ISearchParameters
	): Promise<ISearchResults<T>> {
		const {
			q,
			purpose,
			trimType,
			start,
			purposeExtra,
			sortBy,
			filter,
			properties,
			commandFilter,
		} = options;

		const params = {
			pageSize: 30,
			properties:
				trimType === BaseObjectTypes.CheckinPlace
					? "NameString,CheckinAs,Icon"
					: "NameString,PossiblyHasSubordinates,Icon",
			purpose,
			q,
			start,
			ExcludeCount: true,
		};

		params["ApplyDefaults"] = true;
		if (trimType === BaseObjectTypes.RecordType) {
			params["HideCustomRecordTypes"] = true;
		}

		if (sortBy) {
			params["sortBy"] = sortBy;
		}

		if (filter) {
			params["filter"] = filter;
		}

		if (purposeExtra) {
			params["purposeExtra"] = purposeExtra;
		}

		if (trimType === BaseObjectTypes.Classification) {
			params.properties += ",Name";
		}

		if (properties) {
			params.properties += "," + properties;
		}

		if (commandFilter) {
			params["cid_SelectedIds"] = commandFilter;
		}

		if (trimType === BaseObjectTypes.Record) {
			params.properties += ",Tooltip";
		}

		params.start = params.start || 1;

		return this.makeRequest(
			{ path: trimType, method: "get", data: params },
			(data: any) => {
				return {
					hasMoreItems: data.HasMoreItems,
					results: data.Results.map((trimObject: T) => {
						const newObject = {};

						for (const key in trimObject) {
							if (key.startsWith(trimType)) {
								newObject[key.substring(trimType.length)] = trimObject[key];
							} else {
								newObject[key as string] = trimObject[key];
							}
						}

						return newObject;
					}),
				};
			}
		);
	}

	public getMe(): Promise<ILocation> {
		const params = {
			properties: "LocationFullFormattedName",
		};

		return this.makeRequest(
			{ path: "Location/me", method: "get", data: params },
			(data: any) => {
				return {
					FullFormattedName: data.Results[0].LocationFullFormattedName,
					Uri: data.Results[0].Uri,
				};
			}
		);
	}

	public getDefaultRecordType(): Promise<IRecordType> {
		const defaultRecordType = this.getItemFromCache(CacheIds.DefaultRecordType);

		if (defaultRecordType) {
			return new Promise((resolve) => {
				resolve(defaultRecordType);
			});
		} else {
			return this.makeRequest(
				{ path: `UserOptions/DroppedFiles`, method: "get" },
				(data: any) => {
					if (data.UserOptions) {
						const optionsOn =
							data.UserOptions
								.DroppedFilesUserOptionsUseDefaultRecordTypeInOffice;
						if (optionsOn) {
							if (optionsOn.Value === true) {
								const rt = data.UserOptions.DroppedFilesUserOptionsRecordType;
								const newDefault = {
									NameString: rt.RecordTypeName.Value,
									TrimType: BaseObjectTypes.RecordType,
									Uri: rt.Uri,
								};
								this.setCacheItem(CacheIds.DefaultRecordType, newDefault);
								return newDefault;
							}
						}
					}
					this.setCacheItem(CacheIds.DefaultRecordType, null);
					return null;
				}
			);
		}
	}

	public setGlobalUserOptions(forUserOptionSet: string): Promise<void> {
		const body = {
			LoadFromGlobalSetting: true,
		};

		return this.makeRequest(
			{ path: `UserOptions/${forUserOptionSet}`, method: "post", data: body },
			(data: any) => {
				return;
			}
		);
	}

	private makeOptions = (config: IOptionsInterface): AxiosRequestConfig => {
		const headers = { Accept: "application/json", Authorization: "" };

		if (config.accessToken) {
			headers.Authorization = `Bearer ${config.accessToken}`;
		}

		if (config.method === "post") {
			headers["Content-Type"] = "application/json";
		}

		const options = {
			headers,
			method: config.method,
			url: `${SERVICEAPI_BASE_URI}/${config.path}`,
		};

		if (config.method === "post") {
			return { ...options, ...{ data: config.data } };
		} else {
			return { ...options, ...{ params: config.data } };
		}
	};

	private makeRequest<T>(config: any, parseCallback: any): Promise<T> {
		this.source = this.CancelToken.source();

		return new Promise((resolve, reject) => {
			this.credentialsResolver((accessToken, errorMessage) => {
				if (errorMessage) {
					reject({ message: errorMessage });
				}

				const options = this.makeOptions({ ...{ accessToken }, ...config });
				options.cancelToken = this.source.token;
				Axios(options)
					.then((response) => {
						if (
							response.data.CommandDefs ||
							response.data.Messages ||
							response.data.SearchClauseDefs ||
							response.data.EnumItems ||
							response.data.SearchClauseOrFieldDefs ||
							response.data.ObjectDefs ||
							response.data.UserOptions ||
							response.data.WebUrl ||
							response.data.Results ||
							response.data.FileName ||
							response.data.File ||
							response.data.PropertiesAndFields
						) {
							resolve(parseCallback(response.data));
						} else {
							reject({ message: "No results found" }); // needs to come from TrimMessages
						}
					})
					.catch((error) => {
						if (Axios.isCancel(error)) {
						} else {
							if (
								error.response &&
								error.response.data &&
								error.response.data.ResponseStatus
							) {
								reject({
									data: error,
									message:
										error.response.data.ResponseStatus.Message ||
										error.response.data.ResponseStatus.ErrorCode,
								});
							} else {
								reject({
									data: error,
									message: error.message,
								});
							}
						}
					});
			});
		});
	}
}

export default TrimConnector;
