/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "OpenText Content Manager SDK 23.3", "index.html", [
    [ "Welcome to the Content Manager SDK Documentation", "index.html", [
      [ "Overview", "index.html#Overview", null ],
      [ "Important", "index.html#Important", null ],
      [ "Versions", "index.html#Older", null ],
      [ "Help", "index.html#More", null ]
    ] ],
    [ "Supporting Information", "md_doc_02____legal.html", [
      [ "Legal Notices", "md_doc_02____legal.html#legal", [
        [ "Trademark notices", "md_doc_02____legal.html#trademark", null ],
        [ "Copyright Notice", "md_doc_02____legal.html#copyright", null ]
      ] ],
      [ "Support", "md_doc_02____legal.html#support", null ]
    ] ],
    [ "Release Notes", "release_notes.html", [
      [ "Content Manager 23.3", "release_notes.html#rn_233", [
        [ "BREAKING CHANGE - Database.ConnectAs() removed.", "release_notes.html#autotoc_md1", null ],
        [ "BREAKING CHANGE - Extraneous string constructors removed.", "release_notes.html#autotoc_md2", null ]
      ] ],
      [ "Content Manager 10.1", "release_notes.html#rn_101", [
        [ "BREAKING CHANGE - Record Revision Changes", "release_notes.html#autotoc_md3", null ],
        [ "IMPORTANT - Revision count performance", "release_notes.html#autotoc_md4", null ],
        [ "Create Record from OneDrive document", "release_notes.html#autotoc_md5", null ],
        [ "Manage In Place", "release_notes.html#autotoc_md6", null ],
        [ "Provide a fully functional API to manage Record Action Tracking", "release_notes.html#autotoc_md7", null ],
        [ "Use CopyRecordOptions to create new parts", "release_notes.html#autotoc_md8", null ],
        [ "Improve timing of date registered/ date last updated to more closely match real time record creation", "release_notes.html#rn_10_CR_567033", null ],
        [ "Support for multiple storage pools for document stores", "release_notes.html#autotoc_md9", null ],
        [ "Provide meta-variables to substitute for an Alert Subscriber", "release_notes.html#autotoc_md10", null ],
        [ "Cannot make a container inactive even though all the contents are inactive", "release_notes.html#rn_10_CR_567015", null ],
        [ "New file type options methods", "release_notes.html#rn_101_FileTypeOptions", null ],
        [ "Option to Automatically send Reminder Notifications for Overdue Actions", "release_notes.html#autotoc_md11", null ],
        [ "Flag selected issues as being suppressable on Consignments", "release_notes.html#autotoc_md12", null ],
        [ "Option to exclude records that need external confirmation from a consignment", "release_notes.html#autotoc_md13", null ],
        [ "Location delegates may now approve consignments", "release_notes.html#autotoc_md14", null ],
        [ "Introduce a consignment template that can be used for automating the process of creating consignments", "release_notes.html#autotoc_md15", null ],
        [ "New ability to find Offline Records while Database is disconnected", "release_notes.html#autotoc_md16", null ],
        [ "Automatic container creation for Check in Styles", "release_notes.html#autotoc_md17", null ],
        [ "Enhancements to database and workgroup server configuration tools", "release_notes.html#autotoc_md18", null ],
        [ "Improvements to ImportHistory", "release_notes.html#autotoc_md19", [
          [ "Existing event and history methods", "release_notes.html#autotoc_md20", null ],
          [ "Background to changes", "release_notes.html#autotoc_md21", null ],
          [ "Changes to event logging and import history", "release_notes.html#autotoc_md22", null ]
        ] ]
      ] ],
      [ "Content Manager 10.0", "release_notes.html#rn_100", [
        [ "Content Manager SDK assembly and namespace renamed", "release_notes.html#rn_10_SdkRename", null ],
        [ "Deleted methods and properties:", "release_notes.html#autotoc_md23", null ],
        [ "Get the field definition for this word", "release_notes.html#autotoc_md24", null ],
        [ "Create External Link from SDK", "release_notes.html#autotoc_md25", null ],
        [ "Monitor event processor", "release_notes.html#rn_10_EventProcessor", null ],
        [ "Get a string listing all the record types to which this classification is allowed to be attached", "release_notes.html#rn_10_OnlyRecordTypes", null ],
        [ "Get the Location object which is the assignee of the first activity in this workflow", "release_notes.html#rn_10_InitialAssignee", null ],
        [ "A boolean property indicating whether the current user can view all the details of this location", "release_notes.html#rn_10_CanViewAllDetails", null ],
        [ "Gets a number indicating how many times the electronic document attached to this record has been viewed", "release_notes.html#rn_10_ViewCounter", null ],
        [ "Get a string which represents the global default for user preferences for the nominated application", "release_notes.html#rn_10_AppConfig", null ],
        [ "Support aggregated search results", "release_notes.html#rn_10_CR_304037", null ],
        [ "Suppress document extract logging", "release_notes.html#rn_10_CR_321043", null ],
        [ "New search clause to do a raw elastic query", "release_notes.html#rn_10_CR_241863", null ],
        [ "New search clauses to find all ancestors recursively", "release_notes.html#rn_10_CR_243144", null ],
        [ "UserLabel Owner now a modifiable property", "release_notes.html#rn_10_lbl_owner", null ],
        [ "Copy security annotations to email headers", "release_notes.html#rn_10_CR_282059", null ],
        [ "Enhancements to Record recycle and restore", "release_notes.html#rn_10_CR_333019", null ],
        [ "Custom Icons", "release_notes.html#rn_10_CR_343044", null ],
        [ "Add saved search as a filter to Search Form", "release_notes.html#rn_10_CR_345008", null ],
        [ "Superseded by information in Schedule", "release_notes.html#rn_10_Schedule", null ],
        [ "Option to set how to deal with the situation when new contents get added to this container and it has a different scheduled disposal type", "release_notes.html#rn_10_CR_317155", null ],
        [ "Manually delete a single Record from the recycle bin", "release_notes.html#rn_10_CR_324026", null ],
        [ "Attach 'Workflow' template or 'Action Tracking' Procedure to Classification as default to be applied to record when attaching Classification to record", "release_notes.html#rn_10_CR_333029", null ],
        [ "Link non Record objects to a ToDo item", "release_notes.html#rn_10_CR_324012", null ],
        [ "New search method for Location Job Title", "release_notes.html#rn_10_CR_355002", null ],
        [ "Make Icon files available in the SDK", "release_notes.html#rn_10_Icons", null ],
        [ "Find Saved Searches that have not been recently used", "release_notes.html#rn_10_CR_3234339", null ],
        [ "System option to update Record Number on change of Classification", "release_notes.html#rn_10_CLS_UPD", null ],
        [ "Improve display of decimal field values", "release_notes.html#rn_10_CR_358003", null ],
        [ "Search by Edit Status", "release_notes.html#rn_10_CR_356058", null ],
        [ "Workflow Templates provide ability to activate Additional fields per template", "release_notes.html#rn_10_CR_353024", null ],
        [ "Control whether clauses are added to recent search methods", "release_notes.html#rn_10_RecentClauses", null ],
        [ "Get blocked file extensions", "release_notes.html#rn_10_CR_362022", null ],
        [ "Additions to FormDefinition", "release_notes.html#rn_10_CR_373046", null ],
        [ "Include Tags in the metadata options of electronic records", "release_notes.html#rn_10_CR_373007", null ],
        [ "Introduce a UDF that can be updated once disposition is Destroyed", "release_notes.html#rn_10_CR_379030", null ],
        [ "Ability to suppress legal hold designation", "release_notes.html#rn_10_CR_242100", null ],
        [ "Light weight Records", "release_notes.html#rn_10_CR_379045", [
          [ "Example", "release_notes.html#autotoc_md26", null ]
        ] ],
        [ "Indicator on a record when Notes have been added", "release_notes.html#rn_10_CR_384012", null ],
        [ "Provide a version of TransferStorage just for older revisions", "release_notes.html#rn_10_CR_335066", null ],
        [ "New DocumentStoreIncrementalCheckTask", "release_notes.html#rn_10_CR_373041", null ],
        [ "Changes to Consignment processing", "release_notes.html#rn_10_CR_387008", null ],
        [ "Unknown Location type validation", "release_notes.html#autotoc_md27", null ],
        [ "Display Child lists in the .Net SDK", "release_notes.html#autotoc_md28", [
          [ "Sample Code", "release_notes.html#autotoc_md29", null ]
        ] ],
        [ "Provide a way of limiting users from extracting and printing sensitive documents", "release_notes.html#rn_10_CR_339007", null ],
        [ "Make Notes user stamp mandatory", "release_notes.html#rn_10_CR_394004", null ],
        [ "Detect whether a search is using the user's default sort and filters", "release_notes.html#rn_10_CR_401078", null ],
        [ "Improve performance and stability of document integrity check", "release_notes.html#rn_10_CR_421003", null ],
        [ "InputDocument.SetAsAlreadyStoredItem SDK function sets record Date Modified to current date rather than Date Modified from document profile", "release_notes.html#rn_10_CR_398052", null ],
        [ "Allow content index updates of missing Records using the SDK so that users can automate the process", "release_notes.html#rn_10_CR_360002", null ],
        [ "More user-friendly style of displaying record types for selection", "release_notes.html#rn_10_CR_343056", [
          [ "Sample Code", "release_notes.html#autotoc_md30", null ]
        ] ],
        [ "More control on copying a record using Record.CreateNewCopy() method", "release_notes.html#rn_100_CreateNewCopy", null ]
      ] ],
      [ "Content Manager 9.4", "release_notes.html#rn_94", [
        [ "BREAKING CHANGE - History.EventType changed enum type", "release_notes.html#rn_94_History_Event_Type", null ],
        [ "Unrestricted file upload vulnerability", "release_notes.html#rn_94_CR_68008", null ],
        [ "Refine a search to returned the current or latest version of documents", "release_notes.html#rn_94_CR_40696", null ],
        [ "Include more functionality to handle deleted and cancelled record requests and audit all actions", "release_notes.html#rn_94_CR_68155", null ],
        [ "Record Title as column in historical event search", "release_notes.html#rn_94_CR_68162", null ],
        [ "No email notifications for requested records located in Space Management", "release_notes.html#rn_94_235932", null ],
        [ "Online Audit log - The audit history does not include all changes when a person location is associated to a position", "release_notes.html#rn_94_240852", null ],
        [ "Provide a default for the author property for a Document Queue", "release_notes.html#rn_94_242619", null ],
        [ "Automatic Sub folders sort order for Record Types", "release_notes.html#rn_94_243471", null ],
        [ "Search for records has no Hold returns records has Hold", "release_notes.html#rn_94_243890", null ],
        [ "Expose RestartDocumentReview to the SDK", "release_notes.html#rn_94_RestartDocumentReview", null ],
        [ "Searching Browse Via Classification - ability to select a sort method for listed records under Classifications", "release_notes.html#rn_94_243330", null ],
        [ "HasMore property on TrimMainObjectSearch", "release_notes.html#rn_94_244326", null ],
        [ "Expose ChangeMatter and ChangeClient functionality in SDK", "release_notes.html#rn_94_275049", null ],
        [ "Knowledge workers can't request Pickup Requests", "release_notes.html#rn_94_276062", null ],
        [ "Implement a generic origin type for third party applications to use for bulk loading", "release_notes.html#rn_94_281059", null ],
        [ "SDK available as NuGet package", "release_notes.html#rn_94_sdk_nuget", null ],
        [ "Provide a way of doing server side updates in a custom event processor and preserving the lastUpdatedBy (and dateLastUpdated) fields", "release_notes.html#rn_94_254005", null ],
        [ "Expose SDK connection pool configuration", "release_notes.html#rn_94_244672", null ],
        [ "Auto Profiling - provide a per-record option to choose the record title from the document properties or the document file name", "release_notes.html#rn_94_242263", null ],
        [ "Add access control to User Labels", "release_notes.html#rn_94_237243", null ],
        [ "Resolve ambiguities as to who can see a classification", "release_notes.html#rn_94_241217", null ],
        [ "Issues with \"Due Date for completion of review process\" and \"Due Date for the reviewer to complete their work\" fields.", "release_notes.html#rn_94_237708", null ],
        [ "Allocate a custom title to an alert.", "release_notes.html#rn_94_236524", null ],
        [ "Unable to send more than 100 Records at a time to External Link", "release_notes.html#rn_94_237958", null ],
        [ "Specify which record type is allowed to be placed into closed containers", "release_notes.html#rn_94_263031", null ],
        [ "Add Notes to User Labels", "release_notes.html#rn_94_270010", null ],
        [ "Check-in Styles and Document Queues to include additional options", "release_notes.html#rn_94_237525", null ],
        [ "Send to Recycle Bin - Soft delete for Records", "release_notes.html#rn_94_237934", null ],
        [ "Hide custom record types from search response", "release_notes.html#rn_94_CR_68013", null ],
        [ "Folder Synchronization - provide a way of detecting when content is removed from a folder for offline synchronization purposes", "release_notes.html#rn_94_Folder_Sync", null ],
        [ "Provide a data stream capability to avoid delays caused by object cache instantiation", "release_notes.html#rn_94_CR_68152", null ],
        [ "Implement new Record methods for closing (and reopening) containers", "release_notes.html#rn_94_CR_68065", null ],
        [ "Searches to be able to filter / clause based on enum", "release_notes.html#rn_94_CR_43842", null ],
        [ "Need a way to inform SDK applications of object change notifications and other system messages", "release_notes.html#rn_94_notifications", null ]
      ] ],
      [ "Content Manager 9.3", "release_notes.html#rn_93", [
        [ "SDK no longer installed in GAC", "release_notes.html#rn_sdk_GAC", null ],
        [ "Removed properties", "release_notes.html#autotoc_md31", null ],
        [ "Audits - Unable to see the Audit log for the records placed on hold as a group", "release_notes.html#rn_93_audits", null ],
        [ "Record import not working when lookup item additional field is on a record", "release_notes.html#rn_93_lookupset", null ],
        [ "Property on Offline Record object to tell us whether auto checkin has is enabled", "release_notes.html#rn_93_offlinerecord", null ],
        [ "Consignments", "release_notes.html#rn_93_consignment", null ],
        [ "History", "release_notes.html#rn_93_history", null ],
        [ "RecordAction", "release_notes.html#rn_93_recordaction", null ],
        [ "Retention Schedules - provide support for event based scheduling", "release_notes.html#rn_93_archive", null ],
        [ "View Panel - Add the To Do items in record View Panel", "release_notes.html#rn_93_todoitems", null ],
        [ "Record Type", "release_notes.html#rn_93_recordtype", null ],
        [ "Database", "release_notes.html#rn_93_database", null ],
        [ "Request", "release_notes.html#rn_93_request", null ],
        [ "UserLabel", "release_notes.html#rn_93_userlabel", null ],
        [ "DroppedFileUserOptions", "release_notes.html#rn_93_droppedfileuseroptions", null ],
        [ "Ability to manage favourite and recent search clauses in user profile", "release_notes.html#rn_93_favoritesearchmethodsuseroptions", null ],
        [ "Providing a custom sort order specifically for Tray searches", "release_notes.html#rn_93_TraySortAndFilterUserOptions", null ]
      ] ],
      [ "Content Manager 9.2", "release_notes.html#rn_92", [
        [ "Checking for duplicate documents by hash", "release_notes.html#rn_92_hashing", null ],
        [ "Searching for Record types: 'can contain' and 'can be contained in'", "release_notes.html#rn_92_rt_contains_searching", null ],
        [ "Updates to Lookupsets", "release_notes.html#rn_92_lookupsets", null ],
        [ "Issues with constructors", "release_notes.html#rn_92_constructors", null ],
        [ "IsValidFor throws an exception rather than returning false with information", "release_notes.html#rn_92_IsValidFor", null ],
        [ "Promote Revision function that works like the functions inside trim.exe", "release_notes.html#rn_92_PromoteRevision", null ],
        [ "Database pool built into SDK", "release_notes.html#rn_92_DatabasePool", null ],
        [ "Provide a HasPermission function for the TRIM main object", "release_notes.html#rn_92_HasPermission", null ],
        [ "Prevent invalid extensions from interfering with the checkout process", "release_notes.html#rn_92_InvalidExtensions", null ],
        [ "SDK methods to support field sorting", "release_notes.html#rn_92_FieldSorting", null ],
        [ "SDK methods to support blocking of search methods", "release_notes.html#rn_92_BlockedSearchMethods", null ],
        [ "Exposing the Initiating Workflow template concept in the SDK", "release_notes.html#autotoc_md32", null ],
        [ "Provide a way of \"crawling\" the repository without tripping the LastUpdatedOn date", "release_notes.html#autotoc_md33", null ]
      ] ]
    ] ],
    [ "Start here", "start_here.html", [
      [ "Using the Content Manager .NET SDK", "start_here.html#using_the_sdk", [
        [ "Technical Prerequisites and Assumptions", "start_here.html#tech_prereq", null ],
        [ "Binary compatibility", "start_here.html#bin_compat", null ]
      ] ],
      [ "Content Manager .NET SDK", "start_here.html#sdkIntro", null ],
      [ "Using the Content Manager .NET SDK", "start_here.html#usingTheSDK", null ],
      [ "Getting started", "start_here.html#sdkGettingStarted", [
        [ "Creating a reference to the .NET SDK", "start_here.html#createRef", null ],
        [ "Downloading the .NET SDK from NuGet", "start_here.html#autotoc_md34", null ],
        [ "Finding Content Manager libraries at runtime", "start_here.html#findingAssemblies", [
          [ "Code Example (with explicit initialization)", "start_here.html#autotoc_md35", null ],
          [ "Code Example (without explicit initialization)", "start_here.html#autotoc_md36", null ]
        ] ],
        [ "Loading TRIM.SDK.dll assembly dynamically", "start_here.html#dynamicSdkLoading", null ],
        [ "Memory Management", "start_here.html#memory_management", [
          [ "Examples", "start_here.html#autotoc_md37", null ],
          [ "Using statement", "start_here.html#autotoc_md38", null ],
          [ "Try/Finally", "start_here.html#autotoc_md39", null ]
        ] ],
        [ "Leak tracking", "start_here.html#autotoc_md40", null ]
      ] ]
    ] ],
    [ "Open ID Connect Authentication", "oidc.html", [
      [ "Authentication overview", "oidc.html#auth_overview", null ],
      [ "ADFS for Native client", "oidc.html#oidc_adfs_native", [
        [ "Configure ADFS", "oidc.html#autotoc_md41", [
          [ "Log on to your ADFS Server and create an application group.", "oidc.html#autotoc_md42", null ],
          [ "Name the group", "oidc.html#autotoc_md43", null ],
          [ "Configure the group", "oidc.html#autotoc_md44", null ],
          [ "Review the settings and select Next", "oidc.html#autotoc_md45", null ],
          [ "Modify application group properties", "oidc.html#autotoc_md46", null ],
          [ "Add application", "oidc.html#autotoc_md47", null ],
          [ "Select Web API", "oidc.html#autotoc_md48", null ],
          [ "Configure the Web API", "oidc.html#autotoc_md49", null ],
          [ "Select an appropriate Access control Policy", "oidc.html#autotoc_md50", null ],
          [ "Set scopes", "oidc.html#autotoc_md51", null ],
          [ "Review the configuration and select next, then close.", "oidc.html#autotoc_md52", null ],
          [ "Set issuance rules", "oidc.html#autotoc_md53", null ],
          [ "Add rule", "oidc.html#autotoc_md54", null ],
          [ "Map attributes", "oidc.html#autotoc_md55", null ],
          [ "Configure Content Manager", "oidc.html#autotoc_md56", null ],
          [ "Configure OpenId settings", "oidc.html#autotoc_md57", null ]
        ] ]
      ] ],
      [ "ADFS for WebClient and ServiceAPI", "oidc.html#oidc_adfs", [
        [ "Create the AD FS  Application", "oidc.html#autotoc_md58", [
          [ "Examples", "oidc.html#autotoc_md59", [
            [ "New AD FS application", "oidc.html#autotoc_md60", null ],
            [ "Add Redirect URI", "oidc.html#autotoc_md61", null ],
            [ "Generate Secret", "oidc.html#autotoc_md62", null ],
            [ "Specify Web API identifier", "oidc.html#autotoc_md63", null ]
          ] ]
        ] ],
        [ "Add the settings to the Web Client", "oidc.html#autotoc_md64", [
          [ "Example", "oidc.html#autotoc_md65", null ]
        ] ],
        [ "Configure AD FS for Office Integration access", "oidc.html#autotoc_md66", [
          [ "Examples", "oidc.html#autotoc_md67", [
            [ "Add native application", "oidc.html#autotoc_md68", null ],
            [ "Add permissions for native application", "oidc.html#autotoc_md69", null ],
            [ "Specifiy claims to be included in token", "oidc.html#autotoc_md70", null ]
          ] ]
        ] ],
        [ "Add office integration the settings to the Web Client", "oidc.html#autotoc_md71", null ]
      ] ],
      [ "AzureAD for WebClient/Mobile App and ServiceAPI", "oidc.html#oidc_azuread", [
        [ "Create the Azure AD Application", "oidc.html#autotoc_md72", [
          [ "Example", "oidc.html#autotoc_md73", null ]
        ] ],
        [ "Add a secret", "oidc.html#autotoc_md74", [
          [ "Example", "oidc.html#autotoc_md75", null ]
        ] ],
        [ "Configure Tokens", "oidc.html#autotoc_md76", null ],
        [ "Configure permissions", "oidc.html#autotoc_md77", [
          [ "Example", "oidc.html#autotoc_md78", null ]
        ] ],
        [ "Configure for mobile", "oidc.html#oidc_mobile", [
          [ "Add the mobile redirect URI", "oidc.html#autotoc_md79", null ],
          [ "Add the mobile redirect URI to the ServiceAPI", "oidc.html#autotoc_md80", null ]
        ] ],
        [ "Configure authentication in hptrim.config", "oidc.html#autotoc_md81", [
          [ "Example config", "oidc.html#autotoc_md82", null ]
        ] ],
        [ "Enable redirect", "oidc.html#autotoc_md83", null ],
        [ "Allow users (Web Client only)", "oidc.html#autotoc_md84", [
          [ "Example", "oidc.html#autotoc_md85", null ]
        ] ],
        [ "Logout", "oidc.html#autotoc_md86", [
          [ "Example", "oidc.html#autotoc_md87", null ]
        ] ],
        [ "Allow anonymous access in IIS", "oidc.html#autotoc_md88", null ]
      ] ],
      [ "Google authentication for WebClient and ServiceAPI", "oidc.html#oidc_google", [
        [ "Create the Google Credentials", "oidc.html#autotoc_md89", [
          [ "Example", "oidc.html#autotoc_md90", null ]
        ] ],
        [ "Configure authentication in hptrim.config", "oidc.html#autotoc_md91", [
          [ "Example config", "oidc.html#autotoc_md92", null ]
        ] ],
        [ "Enable redirect", "oidc.html#autotoc_md93", null ],
        [ "Logout", "oidc.html#autotoc_md94", [
          [ "Example", "oidc.html#autotoc_md95", null ]
        ] ],
        [ "Allow anonymous access in the IIS", "oidc.html#autotoc_md96", null ]
      ] ],
      [ "AzureAD for Content Manager Desktop", "oidc.html#oidc_azuread_desktop", [
        [ "Create the Azure AD Application", "oidc.html#autotoc_md97", [
          [ "Example", "oidc.html#autotoc_md98", null ]
        ] ],
        [ "Configure permissions", "oidc.html#autotoc_md99", [
          [ "Example", "oidc.html#autotoc_md100", null ]
        ] ],
        [ "Configure authentication in Content Manager Enterprise Studio", "oidc.html#autotoc_md101", [
          [ "Example", "oidc.html#autotoc_md102", null ]
        ] ],
        [ "Configure Azure AD for Office Integration access", "oidc.html#autotoc_md103", [
          [ "Example Config.xml", "oidc.html#autotoc_md104", null ]
        ] ],
        [ "Troubleshooting Azure AD for Office Integration access", "oidc.html#autotoc_md105", [
          [ "Error AADSTS500011: The resource principal named https://MYSERVER/contentmanager/ was not found in the tenant named XXXX-XXXX-XXXXX-XXXXXX.", "oidc.html#autotoc_md106", null ]
        ] ]
      ] ]
    ] ],
    [ "Zero Footprint Office Integration", "zero_office.html", [
      [ "Components", "zero_office.html#autotoc_md107", null ],
      [ "Requirements", "zero_office.html#autotoc_md108", null ],
      [ "ServiceAPI", "zero_office.html#autotoc_md109", [
        [ "ServiceAPI Configuration", "zero_office.html#autotoc_md110", null ],
        [ "ServiceAPI Authentication Permissions", "zero_office.html#autotoc_md112", null ],
        [ "ServiceAPI Authentication Application ID", "zero_office.html#autotoc_md113", null ],
        [ "ServiceAPI Authorized Client Applications", "zero_office.html#autotoc_md114", null ]
      ] ],
      [ "Manifests", "zero_office.html#zero_manifests", null ],
      [ "Browser Cookies", "zero_office.html#autotoc_md115", null ],
      [ "Email Link", "zero_office.html#autotoc_md116", null ]
    ] ],
    [ "Microsoft Teams Integration", "zero_teams.html", [
      [ "Two modes of operation", "zero_teams.html#autotoc_md117", [
        [ "Edit manifest to remove client side mode", "zero_teams.html#autotoc_md118", null ]
      ] ],
      [ "Components", "zero_teams.html#autotoc_md119", null ],
      [ "Requirements", "zero_teams.html#autotoc_md120", null ],
      [ "Server side architecture", "zero_teams.html#autotoc_md121", [
        [ "Check in styles and places", "zero_teams.html#autotoc_md122", null ],
        [ "Creating the check in style and place for Teams", "zero_teams.html#autotoc_md123", null ]
      ] ],
      [ "ServiceAPI", "zero_teams.html#autotoc_md124", null ],
      [ "Setup Script", "zero_teams.html#zero_teams_script", null ],
      [ "Microsoft protected APIs", "zero_teams.html#autotoc_md125", null ],
      [ "Conversation silent interval", "zero_teams.html#autotoc_md126", null ],
      [ "Setup instructions", "zero_teams.html#autotoc_md127", [
        [ "ServiceAPI Authentication Permissions", "zero_teams.html#autotoc_md128", null ],
        [ "ServiceAPI Authentication Application ID", "zero_teams.html#autotoc_md129", null ],
        [ "ServiceAPI Authorized Client Applications", "zero_teams.html#autotoc_md130", null ]
      ] ],
      [ "Teams App Manifest", "zero_teams.html#teams_manifests", null ],
      [ "Browser Cookies", "zero_teams.html#autotoc_md131", null ],
      [ "Email Link", "zero_teams.html#autotoc_md132", null ]
    ] ],
    [ "Mobile App setup", "mobile_setup.html", [
      [ "Components", "mobile_setup.html#autotoc_md133", null ],
      [ "ServiceAPI", "mobile_setup.html#autotoc_md134", null ],
      [ "Setup Script", "mobile_setup.html#autotoc_md135", null ],
      [ "Manual Setup", "mobile_setup.html#autotoc_md136", [
        [ "ServiceAPI Configuration", "mobile_setup.html#autotoc_md137", null ],
        [ "Azure App Configuration", "mobile_setup.html#autotoc_md138", null ]
      ] ]
    ] ],
    [ "Programming in Content Manager", "programming_guide.html", [
      [ "Introduction", "programming_guide.html#programming_in", [
        [ "The main objects", "programming_guide.html#main_objects", null ],
        [ "Using the TrimApplication object", "programming_guide.html#application_object", null ],
        [ "Using the Database object", "programming_guide.html#database_object", [
          [ "Code Example", "programming_guide.html#autotoc_md139", null ]
        ] ],
        [ "Database pooling", "programming_guide.html#database_pooling", [
          [ "Code Example", "programming_guide.html#autotoc_md140", null ]
        ] ]
      ] ],
      [ "Creating and modifying Records", "programming_guide.html#creating_records", [
        [ "Creating new Records", "programming_guide.html#new_record", [
          [ "Code example", "programming_guide.html#autotoc_md141", null ]
        ] ],
        [ "Setting the Container and Classification", "programming_guide.html#creating_records_container", null ],
        [ "Accessing existing records", "programming_guide.html#access_existing_record", null ],
        [ "Getting a record by record number", "programming_guide.html#get_existing_record", [
          [ "Code Example", "programming_guide.html#autotoc_md142", null ]
        ] ],
        [ "Getting a Record by URI", "programming_guide.html#record_by_uri", [
          [ "Code Example", "programming_guide.html#autotoc_md143", null ]
        ] ]
      ] ],
      [ "Reading record data", "programming_guide.html#reading_record_data", [
        [ "Basic properties", "programming_guide.html#reading_basic_properties", [
          [ "Examples of basic readable properties of a record are:", "programming_guide.html#autotoc_md144", null ],
          [ "Code Example", "programming_guide.html#autotoc_md145", null ]
        ] ],
        [ "Accessing related objects", "programming_guide.html#related_objects", [
          [ "Code Example", "programming_guide.html#autotoc_md146", null ]
        ] ],
        [ "Accessing record Location information", "programming_guide.html#record_Location_info", [
          [ "Code Example", "programming_guide.html#autotoc_md147", null ]
        ] ]
      ] ],
      [ "Updating records", "programming_guide.html#updating_records", [
        [ "Modifying properties", "programming_guide.html#modifying_properties", [
          [ "Code Example", "programming_guide.html#autotoc_md148", null ]
        ] ],
        [ "Calling update methods", "programming_guide.html#update_methods", [
          [ "Code Example", "programming_guide.html#autotoc_md149", null ],
          [ "Code Example", "programming_guide.html#autotoc_md150", null ]
        ] ],
        [ "Updating properties using SetProperty", "programming_guide.html#updating_properties", [
          [ "Code Example", "programming_guide.html#autotoc_md151", null ]
        ] ],
        [ "User Defined Fields", "programming_guide.html#update_user_defined_fields", [
          [ "Code Example (GetFieldValue())", "programming_guide.html#autotoc_md152", null ],
          [ "Code Example (SetFieldValue())", "programming_guide.html#autotoc_md153", null ]
        ] ]
      ] ],
      [ "Verifying and error trapping", "programming_guide.html#Verifying_and_error_trapping", [
        [ "The Verify() method", "programming_guide.html#The_Verify_method", [
          [ "Code Example", "programming_guide.html#autotoc_md154", null ]
        ] ],
        [ "The Verified property", "programming_guide.html#The_Verified_property", null ],
        [ "Trapping run-time errors", "programming_guide.html#Trapping_run-time_errors", null ],
        [ "Saving the record to the database", "programming_guide.html#Saving_the_record_to_the_database", null ]
      ] ],
      [ "New records and electronic documents", "programming_guide.html#New_records_and_electronic_documents", [
        [ "Creating a container file", "programming_guide.html#autotoc_md155", null ],
        [ "Creating a record of a given type", "programming_guide.html#Creating_a_record_of_a_given_type", null ],
        [ "Controlled and free text titling", "programming_guide.html#Controlled_and_free_text_titling", [
          [ "Code Example", "programming_guide.html#autotoc_md156", null ]
        ] ],
        [ "Security Levels and Caveats", "programming_guide.html#Security_Levels_and_Caveats", [
          [ "Code Example", "programming_guide.html#autotoc_md157", null ],
          [ "Code Example", "programming_guide.html#autotoc_md158", null ]
        ] ],
        [ "Record Locations", "programming_guide.html#Record_Locations", [
          [ "Code Example", "programming_guide.html#autotoc_md159", null ]
        ] ],
        [ "Record Contacts", "programming_guide.html#Record_Contacts", [
          [ "Code Example", "programming_guide.html#autotoc_md160", null ]
        ] ],
        [ "Creating a Document", "programming_guide.html#Creating_a_Document", null ],
        [ "Titling and numbering", "programming_guide.html#Titling_and_numbering", [
          [ "Code Example", "programming_guide.html#autotoc_md161", null ]
        ] ],
        [ "Assigning to a container", "programming_guide.html#Assigning_to_a_container", [
          [ "Code Example", "programming_guide.html#autotoc_md162", null ]
        ] ],
        [ "Attaching an electronic document", "programming_guide.html#Attaching_an_electronic_document", [
          [ "Code Example", "programming_guide.html#autotoc_md163", null ]
        ] ],
        [ "Document Author", "programming_guide.html#Document_Author", null ]
      ] ],
      [ "Locations", "programming_guide.html#Locations", [
        [ "Working with Locations", "programming_guide.html#Working_with_Locations", null ],
        [ "Finding a Person by Name", "programming_guide.html#Finding_a_Person_by_Name", [
          [ "Code Example", "programming_guide.html#autotoc_md164", null ]
        ] ],
        [ "Creating a new Staff Member", "programming_guide.html#Creating_a_new_Staff_Member", [
          [ "Code Example", "programming_guide.html#autotoc_md165", null ],
          [ "Code Example", "programming_guide.html#autotoc_md166", null ],
          [ "Code Example", "programming_guide.html#autotoc_md167", null ]
        ] ]
      ] ],
      [ "Searching Content Manager using the .NET SDK", "programming_guide.html#Searching_Content_Manager", [
        [ "Searching for Content Manager objects", "programming_guide.html#Searching_for_Records_Manager_objects", [
          [ "Code Example", "programming_guide.html#autotoc_md168", null ]
        ] ],
        [ "Specifying the search criteria", "programming_guide.html#Specifying_the_search_criteria", [
          [ "Code Example", "programming_guide.html#autotoc_md169", null ],
          [ "Code Example", "programming_guide.html#autotoc_md170", null ]
        ] ],
        [ "Retrieving the results of the search", "programming_guide.html#Retrieving_the_results", [
          [ "Code Example", "programming_guide.html#autotoc_md171", null ]
        ] ]
      ] ],
      [ "Other search features", "programming_guide.html#Other_search_features", [
        [ "Return paged results", "programming_guide.html#search_paged_results", null ],
        [ "Filtering/searching by enum value", "programming_guide.html#enum_filtering", null ],
        [ "Purpose filtering", "programming_guide.html#Purpose_filtering", null ],
        [ "Persisting a search", "programming_guide.html#Persisting_a_search", null ],
        [ "Item matching", "programming_guide.html#autotoc_md172", null ],
        [ "Result counts", "programming_guide.html#search_count", null ],
        [ "Sorting by User Defined Fields", "programming_guide.html#sort_by_field", null ]
      ] ],
      [ "Stream searching", "programming_guide.html#stream_search", [
        [ "Example", "programming_guide.html#example_stream_search", null ],
        [ "Sample JSON", "programming_guide.html#example_stream_search_json", null ]
      ] ],
      [ "Document integrity checker", "programming_guide.html#document_integrity_checker", [
        [ "Example: Running Document Store Integrity Check", "programming_guide.html#example_running_document_store_integrity_check", null ]
      ] ],
      [ "Global object change notifications", "programming_guide.html#change_notifications", [
        [ "Example", "programming_guide.html#example_change_notifications", null ]
      ] ],
      [ "Progress notifications while communicating with a workgroup server", "programming_guide.html#wgs_progress_notifications", null ]
    ] ],
    [ "﻿Search Clauses", "sc_using.html", [
      [ "Overview", "sc_using.html#sc_overview", null ],
      [ "Interrogating metadata", "sc_using.html#autotoc_md173", [
        [ "Code Sample", "sc_using.html#autotoc_md174", null ]
      ] ],
      [ "List of search clauses by object type", "sc_using.html#searcg_clauses_by_object_type", [
        [ "ActionDef", "sc_using.html#search_clauses_ActionDef", null ],
        [ "Activity", "sc_using.html#search_clauses_Activity", null ],
        [ "AgendaItem", "sc_using.html#search_clauses_AgendaItem", null ],
        [ "AgendaItemType", "sc_using.html#search_clauses_AgendaItemType", null ],
        [ "Alert", "sc_using.html#search_clauses_Alert", null ],
        [ "ArchiveEvent", "sc_using.html#search_clauses_ArchiveEvent", null ],
        [ "AutoPartRule", "sc_using.html#search_clauses_AutoPartRule", null ],
        [ "Census", "sc_using.html#search_clauses_Census", null ],
        [ "CheckinStyle", "sc_using.html#search_clauses_CheckinStyle", null ],
        [ "Classification", "sc_using.html#search_clauses_Classification", null ],
        [ "Communication", "sc_using.html#search_clauses_Communication", null ],
        [ "Consignment", "sc_using.html#search_clauses_Consignment", null ],
        [ "ConsignmentApprover", "sc_using.html#search_clauses_ConsignmentApprover", null ],
        [ "ConsignmentIssue", "sc_using.html#search_clauses_ConsignmentIssue", null ],
        [ "ConsignmentRejection", "sc_using.html#search_clauses_ConsignmentRejection", null ],
        [ "ConsignmentTemplate", "sc_using.html#search_clauses_ConsignmentTemplate", null ],
        [ "DocumentQueue", "sc_using.html#search_clauses_DocumentQueue", null ],
        [ "ElectronicStore", "sc_using.html#search_clauses_ElectronicStore", null ],
        [ "ExternalIcon", "sc_using.html#search_clauses_ExternalIcon", null ],
        [ "ExternalLink", "sc_using.html#search_clauses_ExternalLink", null ],
        [ "ExternalWorkflow", "sc_using.html#search_clauses_ExternalWorkflow", null ],
        [ "ExternalWorkflowTask", "sc_using.html#search_clauses_ExternalWorkflowTask", null ],
        [ "ExternalWorkflowType", "sc_using.html#search_clauses_ExternalWorkflowType", null ],
        [ "FieldDefinition", "sc_using.html#search_clauses_FieldDefinition", null ],
        [ "History", "sc_using.html#search_clauses_History", null ],
        [ "Hold", "sc_using.html#search_clauses_Hold", null ],
        [ "HtmlLayout", "sc_using.html#search_clauses_HtmlLayout", null ],
        [ "Jurisdiction", "sc_using.html#search_clauses_Jurisdiction", null ],
        [ "Keyword", "sc_using.html#search_clauses_Keyword", null ],
        [ "Location", "sc_using.html#search_clauses_Location", null ],
        [ "LookupSet", "sc_using.html#search_clauses_LookupSet", null ],
        [ "MailTemplate", "sc_using.html#search_clauses_MailTemplate", null ],
        [ "Meeting", "sc_using.html#search_clauses_Meeting", null ],
        [ "MeetingType", "sc_using.html#search_clauses_MeetingType", null ],
        [ "MetadataRule", "sc_using.html#search_clauses_MetadataRule", null ],
        [ "MinuteItem", "sc_using.html#search_clauses_MinuteItem", null ],
        [ "MinuteItemType", "sc_using.html#search_clauses_MinuteItemType", null ],
        [ "OfflineRecord", "sc_using.html#search_clauses_OfflineRecord", null ],
        [ "Origin", "sc_using.html#search_clauses_Origin", null ],
        [ "OriginHistory", "sc_using.html#search_clauses_OriginHistory", null ],
        [ "Record", "sc_using.html#search_clauses_Record", null ],
        [ "RecordAction", "sc_using.html#search_clauses_RecordAction", null ],
        [ "RecordType", "sc_using.html#search_clauses_RecordType", null ],
        [ "Report", "sc_using.html#search_clauses_Report", null ],
        [ "ReportBitmap", "sc_using.html#search_clauses_ReportBitmap", null ],
        [ "Request", "sc_using.html#search_clauses_Request", null ],
        [ "Revision", "sc_using.html#search_clauses_Revision", null ],
        [ "SavedSearch", "sc_using.html#search_clauses_SavedSearch", null ],
        [ "Schedule", "sc_using.html#search_clauses_Schedule", null ],
        [ "ScheduledTask", "sc_using.html#search_clauses_ScheduledTask", null ],
        [ "SearchForm", "sc_using.html#search_clauses_SearchForm", null ],
        [ "SecurityCaveat", "sc_using.html#search_clauses_SecurityCaveat", null ],
        [ "SecurityLevel", "sc_using.html#search_clauses_SecurityLevel", null ],
        [ "SharePointItem", "sc_using.html#search_clauses_SharePointItem", null ],
        [ "Space", "sc_using.html#search_clauses_Space", null ],
        [ "StopWord", "sc_using.html#search_clauses_StopWord", null ],
        [ "StorePool", "sc_using.html#search_clauses_StorePool", null ],
        [ "TodoItem", "sc_using.html#search_clauses_TodoItem", null ],
        [ "UserLabel", "sc_using.html#search_clauses_UserLabel", null ],
        [ "Workflow", "sc_using.html#search_clauses_Workflow", null ],
        [ "WorkflowTemplate", "sc_using.html#search_clauses_WorkflowTemplate", null ],
        [ "ZipCode", "sc_using.html#search_clauses_ZipCode", null ]
      ] ]
    ] ],
    [ "﻿Enum Items", "enum_items.html", [
      [ "Using Enums", "enum_items.html#enums_using", null ],
      [ "Interrogating metadata", "enum_items.html#autotoc_md175", [
        [ "Code Sample", "enum_items.html#autotoc_md176", null ]
      ] ],
      [ "List of enum items by Enum", "enum_items.html#enum_item_by_enum_type_type", [
        [ "Database Type", "enum_items.html#enum_help_databaseTypes", null ],
        [ "User Access Type", "enum_items.html#enum_help_userTypes", null ],
        [ "Generic Usage Purpose", "enum_items.html#enum_help_genericPurposes", null ],
        [ "Access Control Setting", "enum_items.html#enum_help_accessControlSettings", null ],
        [ "Titling Method", "enum_items.html#enum_help_titlingMethods", null ],
        [ "Numbering Method", "enum_items.html#enum_help_numberingMethods", null ],
        [ "Behaviour", "enum_items.html#enum_help_recordBehaviour", null ],
        [ "Record Class", "enum_items.html#enum_help_recordClass", null ],
        [ "Disposition", "enum_items.html#enum_help_recordDisp", null ],
        [ "Schedule trigger", "enum_items.html#enum_help_triggerTypes", null ],
        [ "Document Store Type", "enum_items.html#enum_help_estoreTypes", null ],
        [ "Word Type", "enum_items.html#enum_help_wordTypes", null ],
        [ "Numbering Type", "enum_items.html#enum_help_nbrTypes", null ],
        [ "Methods to Attach thesaurus term", "enum_items.html#enum_help_keywordAttachMethod", null ],
        [ "Record location Type", "enum_items.html#enum_help_recordLocationType", null ],
        [ "Contact Type", "enum_items.html#enum_help_contactType", null ],
        [ "Search contact Type", "enum_items.html#enum_help_searchContactType", null ],
        [ "Thesaurus Term Relationship", "enum_items.html#enum_help_keywordRelationship", null ],
        [ "Record Relationship", "enum_items.html#enum_help_recordRelationshipType", null ],
        [ "Reverse Record Relationship", "enum_items.html#enum_help_revRecRelationship", null ],
        [ "Rendition Type", "enum_items.html#enum_help_renditionType", null ],
        [ "Record Type Filter", "enum_items.html#enum_help_recordTypeFilter", null ],
        [ "Event Process Type", "enum_items.html#enum_help_eventProcessType", null ],
        [ "Tray Type", "enum_items.html#enum_help_trayType", null ],
        [ "Location Type", "enum_items.html#enum_help_locationType", null ],
        [ "Search location Type", "enum_items.html#enum_help_searchLocationType", null ],
        [ "Electronic Address Type", "enum_items.html#enum_help_eAddressType", null ],
        [ "Location Usage Purpose", "enum_items.html#enum_help_locationPurpose", null ],
        [ "Property Format", "enum_items.html#enum_help_propertyFormats", null ],
        [ "Additional Field Format", "enum_items.html#enum_help_userFieldFormats", null ],
        [ "Search Filter", "enum_items.html#enum_help_searchFilterTypes", null ],
        [ "Sort Field", "enum_items.html#enum_help_recordSortFields", null ],
        [ "Barcode userLabels Type", "enum_items.html#enum_help_barcodeLabelType", null ],
        [ "Barcode Control Label", "enum_items.html#enum_help_controlLabelType", null ],
        [ "Barcode Error", "enum_items.html#enum_help_barcodeError", null ],
        [ "String Format", "enum_items.html#enum_help_stringFormat", null ],
        [ "Text Object Type", "enum_items.html#enum_help_textObjectType", null ],
        [ "Record location Sub Types", "enum_items.html#enum_help_recLocSubTypes", null ],
        [ "Date Interval", "enum_items.html#enum_help_dateInterval", null ],
        [ "Document Link Type", "enum_items.html#enum_help_documentLinkType", null ],
        [ "General Error Handling", "enum_items.html#enum_help_generalExceptionHandling", null ],
        [ "Container Security Type", "enum_items.html#enum_help_containerSecurityHandling", null ],
        [ "Barcode Printing Option", "enum_items.html#enum_help_barcodePrintOption", null ],
        [ "Location Default", "enum_items.html#enum_help_locationDefault", null ],
        [ "Uses Store", "enum_items.html#enum_help_useStoreType", null ],
        [ "Address Type", "enum_items.html#enum_help_addressTypes", null ],
        [ "Location Relationship Type", "enum_items.html#enum_help_locRelationshipType", null ],
        [ "Type of PropertiesAsStrings", "enum_items.html#enum_help_propertiesStringType", null ],
        [ "Classification Usage Purpose", "enum_items.html#enum_help_classificationPurpose", null ],
        [ "Hashing Algorithm", "enum_items.html#enum_help_hashingAlgorithms", null ],
        [ "General Access Control", "enum_items.html#enum_help_generalAccess", null ],
        [ "Workflow Access Control", "enum_items.html#enum_help_workflowAccess", null ],
        [ "Record Access Control", "enum_items.html#enum_help_recordAccess", null ],
        [ "Access Transfer Style", "enum_items.html#enum_help_accessReferenceStyle", null ],
        [ "Assignee Default", "enum_items.html#enum_help_currLocDef", null ],
        [ "Flow Control Type", "enum_items.html#enum_help_flowControl", null ],
        [ "Space Level", "enum_items.html#enum_help_spaceLevel", null ],
        [ "Space Purpose", "enum_items.html#enum_help_spacePurposes", null ],
        [ "Space record Selection", "enum_items.html#enum_help_spaceRecordsSelection", null ],
        [ "Space Allocation Method", "enum_items.html#enum_help_spaceAllocation", null ],
        [ "Date Interval Singular", "enum_items.html#enum_help_dateIntervalSing", null ],
        [ "Record Finalized Filter", "enum_items.html#enum_help_finalizedFilter", null ],
        [ "Census record", "enum_items.html#enum_help_censusRecords", null ],
        [ "Workflow Lock Operation", "enum_items.html#enum_help_workflowLockOperation", null ],
        [ "Record Purpose", "enum_items.html#enum_help_recordPurposes", null ],
        [ "Disposition Pending", "enum_items.html#enum_help_recordDispPending", null ],
        [ "Mail Recipient Type", "enum_items.html#enum_help_mailRecipientType", null ],
        [ "XML Document Export Type", "enum_items.html#enum_help_xmlDocumentExportType", null ],
        [ "Dataset availability", "enum_items.html#enum_help_databaseAvailability", null ],
        [ "Layout Purpose", "enum_items.html#enum_help_layoutPurpose", null ],
        [ "Property String Display Type", "enum_items.html#enum_help_stringDisplayType", null ],
        [ "Language", "enum_items.html#enum_help_language", null ],
        [ "Document Store Usage Type", "enum_items.html#enum_help_storeUsageType", null ],
        [ "Review Filter", "enum_items.html#enum_help_pendingEventReviewFilter", null ],
        [ "Less Secure Document Security Type", "enum_items.html#enum_help_documentSecurityHandling", null ],
        [ "Document Queue Type", "enum_items.html#enum_help_queueTypes", null ],
        [ "Statistical Select By", "enum_items.html#enum_help_statTypes", null ],
        [ "Queue Usage Type", "enum_items.html#enum_help_queueUsageType", null ],
        [ "Statistical Grouping", "enum_items.html#enum_help_statGroupByType", null ],
        [ "Queue Item Attribute", "enum_items.html#enum_help_queueItemAttributes", null ],
        [ "Queue Property", "enum_items.html#enum_help_queueCapability", null ],
        [ "Server Message Type", "enum_items.html#enum_help_serverMessageTypes", null ],
        [ "Native Mail Capture Style", "enum_items.html#enum_help_nativeMailStyles", null ],
        [ "Declassify Option", "enum_items.html#enum_help_declassifyType", null ],
        [ "Scheduled Task Status", "enum_items.html#enum_help_taskStatus", null ],
        [ "Security Update Type", "enum_items.html#enum_help_securityUpdateTypes", null ],
        [ "URL Format", "enum_items.html#enum_help_objectURLformats", null ],
        [ "Plugin Page Type", "enum_items.html#enum_help_pluginPageType", null ],
        [ "Notes Update Type", "enum_items.html#enum_help_notesUpdateType", null ],
        [ "Lock Down Type", "enum_items.html#enum_help_lockdownStyles", null ],
        [ "Runtime Environment", "enum_items.html#enum_help_environments", null ],
        [ "Notes Insert Style", "enum_items.html#enum_help_notesInsertStyles", null ],
        [ "Meeting Document Type", "enum_items.html#enum_help_meetingDocumentType", null ],
        [ "Type of Participant", "enum_items.html#enum_help_invitationType", null ],
        [ "Meeting Attendance Type", "enum_items.html#enum_help_attendanceType", null ],
        [ "Lookup Set Type", "enum_items.html#enum_help_lookupSetType", null ],
        [ "Automated Part Type", "enum_items.html#enum_help_aprType", null ],
        [ "Automated Part Rule Trigger", "enum_items.html#enum_help_aprDateTypes", null ],
        [ "Document Selection Type", "enum_items.html#enum_help_documentSelectionType", null ],
        [ "XML Schema Type", "enum_items.html#enum_help_xmlSchemaTypes", null ],
        [ "Alert Type", "enum_items.html#enum_help_alertType", null ],
        [ "Gender", "enum_items.html#enum_help_gender", null ],
        [ "Cache type", "enum_items.html#enum_help_wgsCacheType", null ],
        [ "Property or Field Format", "enum_items.html#enum_help_propertyOrFieldFormat", null ],
        [ "Priority", "enum_items.html#enum_help_priority", null ],
        [ "User Label Type", "enum_items.html#enum_help_userLabelType", null ],
        [ "Physical Storage Action Type", "enum_items.html#enum_help_psoActionType", null ],
        [ "Email Event Type", "enum_items.html#enum_help_mailEventType", null ],
        [ "Communication Medium", "enum_items.html#enum_help_communicationMedium", null ],
        [ "Communication Direction", "enum_items.html#enum_help_communicationDirection", null ],
        [ "Communicator Type", "enum_items.html#enum_help_communicatorType", null ],
        [ "Offline Status", "enum_items.html#enum_help_offlineStatus", null ],
        [ "Address Type Used", "enum_items.html#enum_help_snapAddressType", null ],
        [ "Electronic Storage Action Type", "enum_items.html#enum_help_esoActionType", null ],
        [ "Trigger Rounding Type", "enum_items.html#enum_help_triggerRounding", null ],
        [ "Month", "enum_items.html#enum_help_months", null ],
        [ "Desktop Startup State", "enum_items.html#enum_help_desktopStartStates", null ],
        [ "Day of the Week", "enum_items.html#enum_help_dayOfTheWeek", null ],
        [ "Time Interval", "enum_items.html#enum_help_timeInterval", null ],
        [ "Meeting Access Control", "enum_items.html#enum_help_meetingAccess", null ],
        [ "Email Security Mode", "enum_items.html#enum_help_emailSecurityMode", null ],
        [ "Motion Outcome", "enum_items.html#enum_help_motionOutcome", null ],
        [ "Reference Type", "enum_items.html#enum_help_todoReferenceType", null ],
        [ "Outline Number Type", "enum_items.html#enum_help_outlineNumberType", null ],
        [ "Notification Type", "enum_items.html#enum_help_notificationType", null ],
        [ "Document Usage Type", "enum_items.html#enum_help_activityDocumentUsage", null ],
        [ "Document Placeholder Type", "enum_items.html#enum_help_workflowDocumentPlaceholderType", null ],
        [ "Activity State", "enum_items.html#enum_help_activityStates", null ],
        [ "Initiating Record Behaviour", "enum_items.html#enum_help_initiatingRecordBehavior", null ],
        [ "Automatic Rendition Status", "enum_items.html#enum_help_autoRenditionStatus", null ],
        [ "Auto Rendering Error", "enum_items.html#enum_help_autoRenderError", null ],
        [ "Cached Table Notification Type", "enum_items.html#enum_help_cachedTableNotificationType", null ],
        [ "Agenda Item Access Control", "enum_items.html#enum_help_agendaItemAccess", null ],
        [ "Gender Salutation", "enum_items.html#enum_help_genderSalutation", null ],
        [ "Agenda Print Style", "enum_items.html#enum_help_agendaPrintStyles", null ],
        [ "Command Refresh Type", "enum_items.html#enum_help_commandRefreshTypes", null ],
        [ "Document Action", "enum_items.html#enum_help_activityDocumentAction", null ],
        [ "Document Origin", "enum_items.html#enum_help_activityDocumentOrigin", null ],
        [ "Document Status", "enum_items.html#enum_help_activityDocumentStatus", null ],
        [ "Word Processor Merge Format", "enum_items.html#enum_help_wordProcessorMergeFormats", null ],
        [ "Content Manager Path Type", "enum_items.html#enum_help_trimPathType", null ],
        [ "Alert Condition Type", "enum_items.html#enum_help_alertConditionTypes", null ],
        [ "Favorite Type", "enum_items.html#enum_help_favoriteType", null ],
        [ "Origin Type", "enum_items.html#enum_help_originType", null ],
        [ "Document Update Style", "enum_items.html#enum_help_documentUpdateStyles", null ],
        [ "Email Update Style", "enum_items.html#enum_help_emailUpdateStyles", null ],
        [ "Icon Display Mode", "enum_items.html#enum_help_iconDisplayMode", null ],
        [ "Icon Usage Type", "enum_items.html#enum_help_iconUsage", null ],
        [ "String Display Alignment", "enum_items.html#enum_help_stringDisplayAlignment", null ],
        [ "Property Sort Mode", "enum_items.html#enum_help_propertySortMode", null ],
        [ "Prefetch Style", "enum_items.html#enum_help_prefetchStyles", null ],
        [ "Data Entry Page Type", "enum_items.html#enum_help_dataEntryPageType", null ],
        [ "Search Clause Group", "enum_items.html#enum_help_searchClauseGroup", null ],
        [ "Product String", "enum_items.html#enum_help_productString", null ],
        [ "Action Purpose", "enum_items.html#enum_help_actionPurpose", null ],
        [ "Meeting Purpose", "enum_items.html#enum_help_meetingPurpose", null ],
        [ "Offline Record Purpose", "enum_items.html#enum_help_offlineRecordPurpose", null ],
        [ "Saved Search Purpose", "enum_items.html#enum_help_searchPurposes", null ],
        [ "Document Store Purpose", "enum_items.html#enum_help_storePurposes", null ],
        [ "Special Date String", "enum_items.html#enum_help_specialDates", null ],
        [ "User Label Purpose", "enum_items.html#enum_help_labelPurposes", null ],
        [ "Thesaurus Term Purpose", "enum_items.html#enum_help_keywordPurposes", null ],
        [ "Event Processor Status", "enum_items.html#enum_help_eventProcessorStatus", null ],
        [ "Activity Purpose", "enum_items.html#enum_help_activityPurposes", null ],
        [ "Authentication Method", "enum_items.html#enum_help_authenticationMethod", null ],
        [ "List Item Orginator", "enum_items.html#enum_help_spListItemOriginator", null ],
        [ "Managed List Item Status", "enum_items.html#enum_help_spManagedItemStatus", null ],
        [ "SharePoint Element Type", "enum_items.html#enum_help_spElementType", null ],
        [ "Search Time Period (Singular)", "enum_items.html#enum_help_searchTimePeriodSingular", null ],
        [ "Search Time Period (Plural)", "enum_items.html#enum_help_searchTimePeriodPlural", null ],
        [ "Search Time Tense", "enum_items.html#enum_help_searchTimeTense", null ],
        [ "Search Grammar Item", "enum_items.html#enum_help_searchGrammarItem", null ],
        [ "Search Editor", "enum_items.html#enum_help_searchEditor", null ],
        [ "Reference File Application", "enum_items.html#enum_help_referenceFileApplication", null ],
        [ "Font Style", "enum_items.html#enum_help_fontStyle", null ],
        [ "Location Field Type", "enum_items.html#enum_help_locationFieldType", null ],
        [ "Record Security Declassification Type", "enum_items.html#enum_help_recordDeclassifyTypes", null ],
        [ "Search Starting Point", "enum_items.html#enum_help_searchStartPoint", null ],
        [ "Reporter Font", "enum_items.html#enum_help_reporterFonts", null ],
        [ "Tab Bar Style", "enum_items.html#enum_help_tabBarStyle", null ],
        [ "Skin Style", "enum_items.html#enum_help_skinStyle", null ],
        [ "Frame Type", "enum_items.html#enum_help_windowsFrameType", null ],
        [ "Column Index Type", "enum_items.html#enum_help_columnIndexType", null ],
        [ "Migration Type", "enum_items.html#enum_help_migrationType", null ],
        [ "Microsoft Word File Type", "enum_items.html#enum_help_wordFileTypes", null ],
        [ "Microsoft Excel File Type", "enum_items.html#enum_help_excelFileTypes", null ],
        [ "Microsoft PowerPoint File Type", "enum_items.html#enum_help_powerpointFileTypes", null ],
        [ "Microsoft Project File Type", "enum_items.html#enum_help_projectFileTypes", null ],
        [ "Microsoft Office 2003 Word File Type", "enum_items.html#enum_help_word11FileTypes", null ],
        [ "Microsoft Office 2003 Excel File Type", "enum_items.html#enum_help_excel11FileTypes", null ],
        [ "Microsoft Office 2003 PowerPoint File Type", "enum_items.html#enum_help_powerpoint11FileTypes", null ],
        [ "Microsoft Office 2003 Project File Type", "enum_items.html#enum_help_project11FileTypes", null ],
        [ "Microsoft Open Word File Type", "enum_items.html#enum_help_wordOpenFileTypes", null ],
        [ "Microsoft Open Excel File Type", "enum_items.html#enum_help_excelOpenFileTypes", null ],
        [ "Microsoft Open PowerPoint File Type", "enum_items.html#enum_help_powerpointOpenFileTypes", null ],
        [ "Microsoft Open Project File Type", "enum_items.html#enum_help_projectOpenFileTypes", null ],
        [ "Location Import Type", "enum_items.html#enum_help_locationMatchType", null ],
        [ "Path Type", "enum_items.html#enum_help_pathTypes", null ],
        [ "IDOL Index Type", "enum_items.html#enum_help_idolIndexType", null ],
        [ "Content Index Status", "enum_items.html#enum_help_idolIndexStatus", null ],
        [ "Edit Notes Style", "enum_items.html#enum_help_editNotesStyle", null ],
        [ "Document Store Status", "enum_items.html#enum_help_storeStatus", null ],
        [ "File Size Unit", "enum_items.html#enum_help_fileSizeUnits", null ],
        [ "Media Type", "enum_items.html#enum_help_mediaTypes", null ],
        [ "Statistics Output Type", "enum_items.html#enum_help_statisticsOutputType", null ],
        [ "Database Lock Type", "enum_items.html#enum_help_databaseLockType", null ],
        [ "Search parameter format", "enum_items.html#enum_help_searchParameterFormats", null ],
        [ "Jurisdiction Type", "enum_items.html#enum_help_jurisdictionTypes", null ],
        [ "Record Creation Statistics Primary Grouping", "enum_items.html#enum_help_primaryRecordStatisticsGrouping", null ],
        [ "Record Creation Statistics Location Grouping", "enum_items.html#enum_help_locationGrouping", null ],
        [ "Event Statistics Group", "enum_items.html#enum_help_eventStatisticsGroup", null ],
        [ "Content Manager Event Counter", "enum_items.html#enum_help_trimEventCounters", null ],
        [ "Document Event Counter", "enum_items.html#enum_help_documentEventCounters", null ],
        [ "Workflow Event Counter", "enum_items.html#enum_help_workflowEventCounters", null ],
        [ "Audit Event Counter", "enum_items.html#enum_help_auditEventCounters", null ],
        [ "Record Creation Statistics Date Range Type", "enum_items.html#enum_help_statisticalDateRangeTypes", null ],
        [ "Product Feature", "enum_items.html#enum_help_productFeatures", null ],
        [ "Open Document Status", "enum_items.html#enum_help_openDocumentStatus", null ],
        [ "BulkLoader Document Transfer Mode", "enum_items.html#enum_help_bulkLoaderCopyMode", null ],
        [ "Additional Field Access Control", "enum_items.html#enum_help_fieldAccess", null ],
        [ "Duplicate Email Option", "enum_items.html#enum_help_duplicateEmailOptions", null ],
        [ "License Type", "enum_items.html#enum_help_licenseTypes", null ],
        [ "Feature State", "enum_items.html#enum_help_featureState", null ],
        [ "User License Type", "enum_items.html#enum_help_userLicenseTypes", null ],
        [ "Old Version Purge Style", "enum_items.html#enum_help_oldVersionPurgeOptions", null ],
        [ "Object Capability", "enum_items.html#enum_help_objectCapabilities", null ],
        [ "RM Grammar Item", "enum_items.html#enum_help_rmGrammarItem", null ],
        [ "RM Terminology Type", "enum_items.html#enum_help_rmTerminologyType", null ],
        [ "Tiered Storage Type", "enum_items.html#enum_help_tieredStorageType", null ],
        [ "Request Purpose", "enum_items.html#enum_help_requestPurposes", null ],
        [ "Request Type", "enum_items.html#enum_help_requestTypes", null ],
        [ "Request Priority", "enum_items.html#enum_help_requestPriority", null ],
        [ "Request Status", "enum_items.html#enum_help_requestStatus", null ],
        [ "SQL Error Type", "enum_items.html#enum_help_sqlErrorTypes", null ],
        [ "Retain Option", "enum_items.html#enum_help_retainOptions", null ],
        [ "Disposal Type", "enum_items.html#enum_help_disposalType", null ],
        [ "Disposition Calculation Status", "enum_items.html#enum_help_disposalScheduleStatus", null ],
        [ "Interest Type", "enum_items.html#enum_help_clientMatterInterestTypes", null ],
        [ "Consignment Item Status", "enum_items.html#enum_help_consignmentItemApprovalStatus", null ],
        [ "Consignment Issue Category", "enum_items.html#enum_help_consignmentItemIssueType", null ],
        [ "Consignent Picklist Format", "enum_items.html#enum_help_consignmentPickListFormat", null ],
        [ "Consignment Disposal Type", "enum_items.html#enum_help_consignmentDisposalType", null ],
        [ "Additional Field Purpose Type", "enum_items.html#enum_help_fieldPurposeType", null ],
        [ "Unregistered User Option", "enum_items.html#enum_help_unregisteredUsers", null ],
        [ "Mail Format", "enum_items.html#enum_help_mailFormat", null ],
        [ "Lookup Item Purpose Type", "enum_items.html#enum_help_lookupItemPurposeType", null ],
        [ "Client Server Protocol", "enum_items.html#enum_help_clientServerProtocol", null ],
        [ "Connection Type", "enum_items.html#enum_help_ipConnectionType", null ],
        [ "Startup Pane Type", "enum_items.html#enum_help_startupPaneType", null ],
        [ "Jurisdiction Purpose", "enum_items.html#enum_help_jurisdictionPurposes", null ],
        [ "OAuth Implementation Type", "enum_items.html#enum_help_oauthImplementationType", null ],
        [ "Client Authentication Mechanism", "enum_items.html#enum_help_clientAuthenticationMechanism", null ],
        [ "Frame Appearance", "enum_items.html#enum_help_frameAppearance", null ],
        [ "Physical Inactive Record Selection Date Type", "enum_items.html#enum_help_psoDateType", null ],
        [ "Electronic Inactive Record Selection Date Type", "enum_items.html#enum_help_esoDateType", null ],
        [ "Date Search Type", "enum_items.html#enum_help_dateSearchType", null ],
        [ "Geography Distance Unit", "enum_items.html#enum_help_geographyDistanceUnit", null ],
        [ "Geography Search Type", "enum_items.html#enum_help_geographySearchType", null ],
        [ "Check In Place Type", "enum_items.html#enum_help_checkinPlaceTypes", null ],
        [ "Authorization Method", "enum_items.html#enum_help_authorizationMethods", null ],
        [ "Location Access Control", "enum_items.html#enum_help_locationAccess", null ],
        [ "Document Review State", "enum_items.html#enum_help_documentReviewStates", null ],
        [ "Encryption Algorithm", "enum_items.html#enum_help_encryptionAlgorithm", null ],
        [ "Label Position Change Type", "enum_items.html#enum_help_labelPositionChange", null ],
        [ "ContainmentRule", "enum_items.html#enum_help_containmentRule", null ],
        [ "Double Click Style", "enum_items.html#enum_help_dblClickStyle", null ],
        [ "Double Click Container Style", "enum_items.html#enum_help_dblClickContainerStyle", null ],
        [ "LDAP Attribute Matching Type", "enum_items.html#enum_help_ldapMatchingType", null ],
        [ "LDAP Search Scope", "enum_items.html#enum_help_ldapSearchScope", null ],
        [ "LDAP Authentication Method", "enum_items.html#enum_help_ldapAuthMethod", null ],
        [ "Schedule Usage Purpose", "enum_items.html#enum_help_schedulePurposes", null ],
        [ "Trigger Delay Type", "enum_items.html#enum_help_triggerDelayTypes", null ],
        [ "Cusp Date Display Type", "enum_items.html#enum_help_cuspDateDisplayType", null ],
        [ "Log Level", "enum_items.html#enum_help_logLevels", null ],
        [ "Output Path Type", "enum_items.html#enum_help_outputPathTypes", null ],
        [ "Lookup Item Display Style", "enum_items.html#enum_help_lookupItemFieldStyle", null ],
        [ "Check In Style/Place Purpose", "enum_items.html#enum_help_checkinToolPurposes", null ],
        [ "Generic Permission", "enum_items.html#enum_help_genericPermissions", null ],
        [ "Checkout Style", "enum_items.html#enum_help_checkOutStyles", null ],
        [ "SSL Mode", "enum_items.html#enum_help_sslMode", null ],
        [ "Mail Persistence Style", "enum_items.html#enum_help_mailPersistence", null ],
        [ "Consignment State", "enum_items.html#enum_help_consignmentState", null ],
        [ "View Pane Style", "enum_items.html#enum_help_viewPaneStyle", null ],
        [ "Auto Render Select Option", "enum_items.html#enum_help_autoRenderSelectOption", null ],
        [ "Document Store Integrity Check Counter Type", "enum_items.html#enum_help_documentStoreIntegrityCheckCounter", null ],
        [ "Content Engine Type", "enum_items.html#enum_help_contentEngineType", null ],
        [ "Asynchronous Task Status", "enum_items.html#enum_help_asynchTaskStatus", null ],
        [ "Active Audit Event", "enum_items.html#enum_help_historyPurposes", null ],
        [ "Access Control Custom Add Menu Item", "enum_items.html#enum_help_aclMenuItems", null ],
        [ "Activity Access Control", "enum_items.html#enum_help_activityAccess", null ],
        [ "String Verification Type", "enum_items.html#enum_help_stringVerificationTypes", null ],
        [ "Address History Option", "enum_items.html#enum_help_addressHistoryOption", null ],
        [ "Web Service Cache Setting", "enum_items.html#enum_help_webServiceCacheSettings", null ],
        [ "Event Occurrence Type", "enum_items.html#enum_help_occurrenceTypes", null ],
        [ "Result Post Processing Methods", "enum_items.html#enum_help_resultPostProcessingMethod", null ],
        [ "External Workflow Type Purpose", "enum_items.html#enum_help_externalWorkflowTypePurposes", null ],
        [ "To Do Item Access Control", "enum_items.html#enum_help_todoItemAccess", null ],
        [ "Diagnostic Logging Category", "enum_items.html#enum_help_loggingCategories", null ],
        [ "User Dashboard Item", "enum_items.html#enum_help_userDashboardItem", null ],
        [ "Document Auto Profiling Title Option", "enum_items.html#enum_help_autoProfilingTitleOptions", null ],
        [ "User Label Access Control", "enum_items.html#enum_help_labelAccess", null ],
        [ "Office Integration Menu Caption", "enum_items.html#enum_help_officeIntegrationMenuCaptions", null ],
        [ "Set Author Option", "enum_items.html#enum_help_setAuthorOptions", null ],
        [ "Recycle Reason", "enum_items.html#enum_help_recycleReasons", null ],
        [ "External Link Type", "enum_items.html#enum_help_externalLinkType", null ],
        [ "Date Aggregation Type", "enum_items.html#enum_help_dateAggregationType", null ],
        [ "Aggrehation Sort Order", "enum_items.html#enum_help_aggregationSortOrder", null ],
        [ "External Link Special Parameter", "enum_items.html#enum_help_externalLinkSpecialParameters", null ],
        [ "Copy Relationship", "enum_items.html#enum_help_copyRelationship", null ],
        [ "Explorer Top Level Category", "enum_items.html#enum_help_explorerCategory", null ],
        [ "Icon Size", "enum_items.html#enum_help_iconSizes", null ],
        [ "Stored Procedure", "enum_items.html#enum_help_storedProcedures", null ],
        [ "Stored Function", "enum_items.html#enum_help_storedFunctions", null ],
        [ "Dots per Inch", "enum_items.html#enum_help_dotsPerInch", null ],
        [ "Content Index Document Status", "enum_items.html#enum_help_contentIndexDocumentStatus", null ],
        [ "Document Edit Status", "enum_items.html#enum_help_documentEditStatus", null ],
        [ "Hold Access Control", "enum_items.html#enum_help_holdAccess", null ],
        [ "Consignment Purpose", "enum_items.html#enum_help_consignmentPurposes", null ],
        [ "Export Metadata Format", "enum_items.html#enum_help_exportMetadataFormat", null ],
        [ "Mobile Client Menu Item", "enum_items.html#enum_help_mobileClientMenuItem", null ],
        [ "SQL Server Authentication Type", "enum_items.html#enum_help_sqlServerAuthenticationTypes", null ],
        [ "Suppressable Disposal Issue", "enum_items.html#enum_help_disposalIssue", null ],
        [ "Title Placeholder", "enum_items.html#enum_help_titlePlaceholder", null ],
        [ "Revision Purpose", "enum_items.html#enum_help_revisionPurposes", null ],
        [ "Copy Link URL Style", "enum_items.html#enum_help_copyLinkStyle", null ],
        [ "Consignment Acknowledgment Type", "enum_items.html#enum_help_ackType", null ],
        [ "Text Index Synchronization Type", "enum_items.html#enum_help_textIndexSyncTypes", null ],
        [ "Alert User Property", "enum_items.html#enum_help_alertUserProperties", null ],
        [ "Email Template Purpose", "enum_items.html#enum_help_mailTemplatePurposes", null ],
        [ "Explorer Row Type", "enum_items.html#enum_help_explorerRowType", null ],
        [ "TRIM Object", "enum_items.html#enum_help_baseObjectTypes", null ],
        [ "Selector", "enum_items.html#enum_help_selectors", null ],
        [ "Enumeration", "enum_items.html#enum_help_enumerations", null ],
        [ "Command", "enum_items.html#enum_help_commandIds", null ],
        [ "User Permission", "enum_items.html#enum_help_userPermissions", null ],
        [ "Permission Group", "enum_items.html#enum_help_permissionGroups", null ],
        [ "Property", "enum_items.html#enum_help_propertyIds", null ],
        [ "Icon", "enum_items.html#enum_help_icons", null ],
        [ "Search Clause", "enum_items.html#enum_help_searchClauseIds", null ],
        [ "User Option Set", "enum_items.html#enum_help_userOptionSetIds", null ],
        [ "Menu", "enum_items.html#enum_help_menuIds", null ],
        [ "Menu Item", "enum_items.html#enum_help_menuItemIds", null ],
        [ "Menu Popup", "enum_items.html#enum_help_menuPopupIds", null ],
        [ "Event", "enum_items.html#enum_help_events", null ]
      ] ]
    ] ],
    [ "﻿Object Purposes", "object_purposes.html", [
      [ "About", "object_purposes.html#object_purposes_about", null ],
      [ "Warning", "object_purposes.html#object_purposes_warning", null ],
      [ "Extra information", "object_purposes.html#object_purposes_extra", null ],
      [ "Purpose metadata", "object_purposes.html#object_purposes_metadata", [
        [ "Code sample - searching", "object_purposes.html#autotoc_md177", null ],
        [ "Code sample - post search", "object_purposes.html#autotoc_md178", null ],
        [ "Code sample - object definition", "object_purposes.html#autotoc_md179", null ]
      ] ],
      [ "List of objects with related purpose enum", "object_purposes.html#object_with_purpose_enum", [
        [ "TRIM.SDK.ActionDef", "object_purposes.html#purpose_enum_ActionDef", null ],
        [ "TRIM.SDK.Activity", "object_purposes.html#purpose_enum_Activity", null ],
        [ "TRIM.SDK.AgendaItem", "object_purposes.html#purpose_enum_AgendaItem", null ],
        [ "TRIM.SDK.AgendaItemType", "object_purposes.html#purpose_enum_AgendaItemType", null ],
        [ "TRIM.SDK.AutoPartRule", "object_purposes.html#purpose_enum_AutoPartRule", null ],
        [ "TRIM.SDK.CheckinPlace", "object_purposes.html#purpose_enum_CheckinPlace", null ],
        [ "TRIM.SDK.CheckinStyle", "object_purposes.html#purpose_enum_CheckinStyle", null ],
        [ "TRIM.SDK.Classification", "object_purposes.html#purpose_enum_Classification", null ],
        [ "TRIM.SDK.Consignment", "object_purposes.html#purpose_enum_Consignment", null ],
        [ "TRIM.SDK.ConsignmentTemplate", "object_purposes.html#purpose_enum_ConsignmentTemplate", null ],
        [ "TRIM.SDK.DocumentQueue", "object_purposes.html#purpose_enum_DocumentQueue", null ],
        [ "TRIM.SDK.ElectronicStore", "object_purposes.html#purpose_enum_ElectronicStore", null ],
        [ "TRIM.SDK.ExternalLink", "object_purposes.html#purpose_enum_ExternalLink", null ],
        [ "TRIM.SDK.ExternalWorkflowType", "object_purposes.html#purpose_enum_ExternalWorkflowType", null ],
        [ "TRIM.SDK.FieldDefinition", "object_purposes.html#purpose_enum_FieldDefinition", null ],
        [ "TRIM.SDK.History", "object_purposes.html#purpose_enum_History", null ],
        [ "TRIM.SDK.Hold", "object_purposes.html#purpose_enum_Hold", null ],
        [ "TRIM.SDK.HtmlLayout", "object_purposes.html#purpose_enum_HtmlLayout", null ],
        [ "TRIM.SDK.Jurisdiction", "object_purposes.html#purpose_enum_Jurisdiction", null ],
        [ "TRIM.SDK.Keyword", "object_purposes.html#purpose_enum_Keyword", null ],
        [ "TRIM.SDK.Location", "object_purposes.html#purpose_enum_Location", null ],
        [ "TRIM.SDK.LookupItem", "object_purposes.html#purpose_enum_LookupItem", null ],
        [ "TRIM.SDK.LookupSet", "object_purposes.html#purpose_enum_LookupSet", null ],
        [ "TRIM.SDK.MailTemplate", "object_purposes.html#purpose_enum_MailTemplate", null ],
        [ "TRIM.SDK.Meeting", "object_purposes.html#purpose_enum_Meeting", null ],
        [ "TRIM.SDK.MeetingType", "object_purposes.html#purpose_enum_MeetingType", null ],
        [ "TRIM.SDK.MinuteItemType", "object_purposes.html#purpose_enum_MinuteItemType", null ],
        [ "TRIM.SDK.OfflineRecord", "object_purposes.html#purpose_enum_OfflineRecord", null ],
        [ "TRIM.SDK.Origin", "object_purposes.html#purpose_enum_Origin", null ],
        [ "TRIM.SDK.Record", "object_purposes.html#purpose_enum_Record", null ],
        [ "TRIM.SDK.RecordType", "object_purposes.html#purpose_enum_RecordType", null ],
        [ "TRIM.SDK.Report", "object_purposes.html#purpose_enum_Report", null ],
        [ "TRIM.SDK.Request", "object_purposes.html#purpose_enum_Request", null ],
        [ "TRIM.SDK.Revision", "object_purposes.html#purpose_enum_Revision", null ],
        [ "TRIM.SDK.SavedSearch", "object_purposes.html#purpose_enum_SavedSearch", null ],
        [ "TRIM.SDK.Schedule", "object_purposes.html#purpose_enum_Schedule", null ],
        [ "TRIM.SDK.ScheduledTask", "object_purposes.html#purpose_enum_ScheduledTask", null ],
        [ "TRIM.SDK.SearchForm", "object_purposes.html#purpose_enum_SearchForm", null ],
        [ "TRIM.SDK.SecurityCaveat", "object_purposes.html#purpose_enum_SecurityCaveat", null ],
        [ "TRIM.SDK.SecurityGuide", "object_purposes.html#purpose_enum_SecurityGuide", null ],
        [ "TRIM.SDK.SecurityLevel", "object_purposes.html#purpose_enum_SecurityLevel", null ],
        [ "TRIM.SDK.Space", "object_purposes.html#purpose_enum_Space", null ],
        [ "TRIM.SDK.TodoItem", "object_purposes.html#purpose_enum_TodoItem", null ],
        [ "TRIM.SDK.UserLabel", "object_purposes.html#purpose_enum_UserLabel", null ],
        [ "TRIM.SDK.Workflow", "object_purposes.html#purpose_enum_Workflow", null ],
        [ "TRIM.SDK.WorkflowTemplate", "object_purposes.html#purpose_enum_WorkflowTemplate", null ],
        [ "TRIM.SDK.WorkingCopy", "object_purposes.html#purpose_enum_WorkingCopy", null ]
      ] ]
    ] ],
    [ "﻿Property Definitions", "property_defs.html", [
      [ "Using Property Definitions", "property_defs.html#property_definitions_using", null ],
      [ "List of property definitions by object type", "property_defs.html#property_definitions_by_object_type", [
        [ "ActionDef", "property_defs.html#property_definitions_ActionDef", null ],
        [ "Activity", "property_defs.html#property_definitions_Activity", null ],
        [ "AgendaItem", "property_defs.html#property_definitions_AgendaItem", null ],
        [ "AgendaItemType", "property_defs.html#property_definitions_AgendaItemType", null ],
        [ "Alert", "property_defs.html#property_definitions_Alert", null ],
        [ "ArchiveEvent", "property_defs.html#property_definitions_ArchiveEvent", null ],
        [ "AutoPartRule", "property_defs.html#property_definitions_AutoPartRule", null ],
        [ "Census", "property_defs.html#property_definitions_Census", null ],
        [ "CheckinStyle", "property_defs.html#property_definitions_CheckinStyle", null ],
        [ "Classification", "property_defs.html#property_definitions_Classification", null ],
        [ "Communication", "property_defs.html#property_definitions_Communication", null ],
        [ "Consignment", "property_defs.html#property_definitions_Consignment", null ],
        [ "ConsignmentApprover", "property_defs.html#property_definitions_ConsignmentApprover", null ],
        [ "ConsignmentIssue", "property_defs.html#property_definitions_ConsignmentIssue", null ],
        [ "ConsignmentRejection", "property_defs.html#property_definitions_ConsignmentRejection", null ],
        [ "ConsignmentTemplate", "property_defs.html#property_definitions_ConsignmentTemplate", null ],
        [ "DocumentQueue", "property_defs.html#property_definitions_DocumentQueue", null ],
        [ "ElectronicStore", "property_defs.html#property_definitions_ElectronicStore", null ],
        [ "ExternalIcon", "property_defs.html#property_definitions_ExternalIcon", null ],
        [ "ExternalLink", "property_defs.html#property_definitions_ExternalLink", null ],
        [ "ExternalWorkflow", "property_defs.html#property_definitions_ExternalWorkflow", null ],
        [ "ExternalWorkflowTask", "property_defs.html#property_definitions_ExternalWorkflowTask", null ],
        [ "ExternalWorkflowType", "property_defs.html#property_definitions_ExternalWorkflowType", null ],
        [ "FieldDefinition", "property_defs.html#property_definitions_FieldDefinition", null ],
        [ "History", "property_defs.html#property_definitions_History", null ],
        [ "Hold", "property_defs.html#property_definitions_Hold", null ],
        [ "HtmlLayout", "property_defs.html#property_definitions_HtmlLayout", null ],
        [ "Jurisdiction", "property_defs.html#property_definitions_Jurisdiction", null ],
        [ "Keyword", "property_defs.html#property_definitions_Keyword", null ],
        [ "Location", "property_defs.html#property_definitions_Location", null ],
        [ "LookupSet", "property_defs.html#property_definitions_LookupSet", null ],
        [ "MailTemplate", "property_defs.html#property_definitions_MailTemplate", null ],
        [ "Meeting", "property_defs.html#property_definitions_Meeting", null ],
        [ "MeetingType", "property_defs.html#property_definitions_MeetingType", null ],
        [ "MetadataRule", "property_defs.html#property_definitions_MetadataRule", null ],
        [ "MinuteItem", "property_defs.html#property_definitions_MinuteItem", null ],
        [ "MinuteItemType", "property_defs.html#property_definitions_MinuteItemType", null ],
        [ "OfflineRecord", "property_defs.html#property_definitions_OfflineRecord", null ],
        [ "Origin", "property_defs.html#property_definitions_Origin", null ],
        [ "OriginHistory", "property_defs.html#property_definitions_OriginHistory", null ],
        [ "Record", "property_defs.html#property_definitions_Record", null ],
        [ "RecordAction", "property_defs.html#property_definitions_RecordAction", null ],
        [ "RecordType", "property_defs.html#property_definitions_RecordType", null ],
        [ "Report", "property_defs.html#property_definitions_Report", null ],
        [ "ReportBitmap", "property_defs.html#property_definitions_ReportBitmap", null ],
        [ "Request", "property_defs.html#property_definitions_Request", null ],
        [ "Revision", "property_defs.html#property_definitions_Revision", null ],
        [ "SavedSearch", "property_defs.html#property_definitions_SavedSearch", null ],
        [ "Schedule", "property_defs.html#property_definitions_Schedule", null ],
        [ "ScheduledTask", "property_defs.html#property_definitions_ScheduledTask", null ],
        [ "SearchForm", "property_defs.html#property_definitions_SearchForm", null ],
        [ "SecurityCaveat", "property_defs.html#property_definitions_SecurityCaveat", null ],
        [ "SecurityLevel", "property_defs.html#property_definitions_SecurityLevel", null ],
        [ "SharePointItem", "property_defs.html#property_definitions_SharePointItem", null ],
        [ "Space", "property_defs.html#property_definitions_Space", null ],
        [ "StopWord", "property_defs.html#property_definitions_StopWord", null ],
        [ "StorePool", "property_defs.html#property_definitions_StorePool", null ],
        [ "TodoItem", "property_defs.html#property_definitions_TodoItem", null ],
        [ "UserLabel", "property_defs.html#property_definitions_UserLabel", null ],
        [ "Workflow", "property_defs.html#property_definitions_Workflow", null ],
        [ "WorkflowTemplate", "property_defs.html#property_definitions_WorkflowTemplate", null ],
        [ "ZipCode", "property_defs.html#property_definitions_ZipCode", null ]
      ] ]
    ] ],
    [ "Advanced Topics", "advanced_topics.html", [
      [ "Different ways to fetch a TrimMainObject", "advanced_topics.html#ways_To_Fetch_a_TrimMainObject", [
        [ "Object constructor by Name", "advanced_topics.html#fetch_by_constructorand_name", [
          [ "Code example", "advanced_topics.html#autotoc_md180", null ]
        ] ],
        [ "Object name properties", "advanced_topics.html#object_name_properties", null ],
        [ "Database find methods", "advanced_topics.html#fetch_by_database", [
          [ "Code samples", "advanced_topics.html#autotoc_md181", null ]
        ] ],
        [ "TrimMainObjectSearch", "advanced_topics.html#fetch_by_search", [
          [ "Code sample", "advanced_topics.html#autotoc_md182", null ]
        ] ]
      ] ],
      [ "Document access alternatives", "advanced_topics.html#fetchDoc", [
        [ "Overview", "advanced_topics.html#doc_access_overview", null ],
        [ "Record.GetDocument()", "advanced_topics.html#getDoc", [
          [ "Checkout without getting the document", "advanced_topics.html#autotoc_md184", null ]
        ] ],
        [ "DocumentPathInClientCache", "advanced_topics.html#clientCache", [
          [ "Example", "advanced_topics.html#autotoc_md185", null ]
        ] ],
        [ "DocumentPathInWGSCache", "advanced_topics.html#wgsCache", [
          [ "Example", "advanced_topics.html#autotoc_md186", null ]
        ] ],
        [ "DownloadNotifier", "advanced_topics.html#downloadNotifier", [
          [ "Example", "advanced_topics.html#autotoc_md187", null ]
        ] ],
        [ "Other object types", "advanced_topics.html#dowload_other_object_types", null ]
      ] ],
      [ "Localised strings", "advanced_topics.html#localisedStrings", [
        [ "TrimMessages", "advanced_topics.html#trimMEssages", [
          [ "Code Sample", "advanced_topics.html#autotoc_md188", null ]
        ] ],
        [ "Captions", "advanced_topics.html#objectCaptions", [
          [ "Enum captions", "advanced_topics.html#enumCaptions", null ],
          [ "Property Captions", "advanced_topics.html#propertyCaptions", null ],
          [ "Search Clause Captions", "advanced_topics.html#searchClauseCaptions", null ],
          [ "Menu items", "advanced_topics.html#menuItemCaptions", null ]
        ] ],
        [ "FormDefinition", "advanced_topics.html#formDefinitionCaptions", null ]
      ] ],
      [ "Fetching LookupSet Items", "advanced_topics.html#lookupset_Items", [
        [ "Example: Adding a new LookupItem", "advanced_topics.html#new_lookupitem", null ],
        [ "Example: Fetching lookup items", "advanced_topics.html#fetching_lookup_items", null ]
      ] ],
      [ "Create a Record using manual numbering", "advanced_topics.html#create_record_manual_number", [
        [ "Example: Manual Record Number", "advanced_topics.html#example_manual_record_number", null ]
      ] ]
    ] ],
    [ "Packages", "namespaces.html", [
      [ "Packages", "namespaces.html", "namespaces_dup" ],
      [ "Package Functions", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Enumerations", "namespacemembers_enum.html", "namespacemembers_enum" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Properties", "functions_prop.html", "functions_prop" ],
        [ "Events", "functions_evnt.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"advanced_topics.html",
"class_t_r_i_m_1_1_s_d_k_1_1_agenda_item.html#a0f285ea9be0b9f492a2f26cacd5adc7e",
"class_t_r_i_m_1_1_s_d_k_1_1_base_object_types_list.html#aeee4e393e07e23d2ab21f5da73132cb5",
"class_t_r_i_m_1_1_s_d_k_1_1_classification.html#a5a474e3049599ba4f2e24bad455d9172",
"class_t_r_i_m_1_1_s_d_k_1_1_consignment.html#aac498efc454ae385d82d6b6321858913",
"class_t_r_i_m_1_1_s_d_k_1_1_database.html#a368f03977bee06f7d52dbdc5d0a460e5",
"class_t_r_i_m_1_1_s_d_k_1_1_database_connection_pool.html#acde2a10060b380ec6ecde3d60368a548",
"class_t_r_i_m_1_1_s_d_k_1_1_email_attachment_list.html#aa16f1ae7ea202865824fd1315661f926",
"class_t_r_i_m_1_1_s_d_k_1_1_event_processor_counters_list.html#ab1a03bd3d579feffc10b78988bcf422b",
"class_t_r_i_m_1_1_s_d_k_1_1_extract_document.html#a80b0f59cb23e1e67aa89bcdf1fdf2984",
"class_t_r_i_m_1_1_s_d_k_1_1_i_trim_add_in_base.html#ac88a57294dfdbb7793222186c19db636",
"class_t_r_i_m_1_1_s_d_k_1_1_location.html#aa462070642260cdaeaee79c31eae8af0",
"class_t_r_i_m_1_1_s_d_k_1_1_meeting.html#ae8fca28dca1ba0099348327ba715554b",
"class_t_r_i_m_1_1_s_d_k_1_1_mobile_client_menu_item_list.html#a5c1516a5fe564da97e62a049206dc45a",
"class_t_r_i_m_1_1_s_d_k_1_1_origin_email_capture_spam_rule.html#af269f33c4136eed0029ddacb0111a84f",
"class_t_r_i_m_1_1_s_d_k_1_1_property_or_field_def_list.html#ad4fe684c1b3d80444e6cc118605197d1",
"class_t_r_i_m_1_1_s_d_k_1_1_record.html#a551c1c89b6f5034aeae66a17700f5b74",
"class_t_r_i_m_1_1_s_d_k_1_1_record.html#ae85c16adf1e6d700155314ce1844e42f",
"class_t_r_i_m_1_1_s_d_k_1_1_record_locations.html#a0118923d87e10e0a7d88f161b15ab94d",
"class_t_r_i_m_1_1_s_d_k_1_1_record_type.html#af1666117e9c13acbd5292f880fa4fb53",
"class_t_r_i_m_1_1_s_d_k_1_1_schedule_trigger.html#a83c47d503e827cb5c5f06d7f67ee719c",
"class_t_r_i_m_1_1_s_d_k_1_1_security_guide.html#a3b35f74643b4c9e9c2c5c27d1068a378",
"class_t_r_i_m_1_1_s_d_k_1_1_string_array_1_1_string_array_enumerator.html",
"class_t_r_i_m_1_1_s_d_k_1_1_trim_decimal.html#a640c373c7a266bc1588974cd38ca61b8",
"class_t_r_i_m_1_1_s_d_k_1_1_trim_menu_link_list.html#a1e1d9e61479d7112f13e7fac6f5223b9",
"class_t_r_i_m_1_1_s_d_k_1_1_trim_search_clause_list.html#a8ff85112d80704ed754069cc31151ca4",
"class_t_r_i_m_1_1_s_d_k_1_1_user_label.html#a15acbbccaaa085d35cee3c7c8a13f2b4",
"enum_items.html#enum_help_activityStates",
"enum_items.html#enum_help_searchClauseIds",
"namespace_t_r_i_m_1_1_s_d_k.html#a0193b3b41a16f67d107228cdc4c92739a053b1cba2ef6d155dfde92a04c16c866",
"namespace_t_r_i_m_1_1_s_d_k.html#a0193b3b41a16f67d107228cdc4c92739a6d2c4e6db5c490f3ecc0c7093d333adb",
"namespace_t_r_i_m_1_1_s_d_k.html#a0193b3b41a16f67d107228cdc4c92739ad344a7342c588f593e0411664e2f480a",
"namespace_t_r_i_m_1_1_s_d_k.html#a03fe8e34db7010985558027db56c8650ade12e80d77bda9bb2193137dbedbe81a",
"namespace_t_r_i_m_1_1_s_d_k.html#a125ad95d546df9aadb00d9dbf645f8fcaabf1129fa5d156d4c3e7b910bcac82f6",
"namespace_t_r_i_m_1_1_s_d_k.html#a285875bcd2ff9be3f00a35335ebb4cf8aa9bc50f6ea3b88c289604ba783665aee",
"namespace_t_r_i_m_1_1_s_d_k.html#a293d5a937e60b75738eb2577ffa4c237a8a6ca9741a4dbab46440641d015b3b27",
"namespace_t_r_i_m_1_1_s_d_k.html#a3db095e31c149a840441eaad03e40d0ea7aee11ecb99f5c8a32266be3f4bc1006",
"namespace_t_r_i_m_1_1_s_d_k.html#a4f578c71f97a607da76b575db596228aa856bc35ea522951dafa57394709dd9fd",
"namespace_t_r_i_m_1_1_s_d_k.html#a5764e73bb5dc7b9e7fc7b2ea675bf334acfe4632752ccface7dd7015f92d8dc64",
"namespace_t_r_i_m_1_1_s_d_k.html#a5d3ef5f1ed54efc1530ce7ba740c6cefaf6978b0cd3cf90052b73c4b72c2233c2",
"namespace_t_r_i_m_1_1_s_d_k.html#a71ad85e716d9a192d0c5c21fee0ec486",
"namespace_t_r_i_m_1_1_s_d_k.html#a753711ce2302f9a98b7fbca2c79cb33ba3d2ddae69e064d5e29454c3390dffc25",
"namespace_t_r_i_m_1_1_s_d_k.html#a753711ce2302f9a98b7fbca2c79cb33ba81aec6f68b6bbeaab1b332d8e60aa499",
"namespace_t_r_i_m_1_1_s_d_k.html#a753711ce2302f9a98b7fbca2c79cb33bacaedd7bda82ab7aa4b1fafda9aaa29a2",
"namespace_t_r_i_m_1_1_s_d_k.html#a7cc5fe7e688d988150b95a646766174b",
"namespace_t_r_i_m_1_1_s_d_k.html#a8365d4848a1d591c9d414bdcdf180d3fa6d26357440cbe1d163aad363a63f3021",
"namespace_t_r_i_m_1_1_s_d_k.html#a891d8aba1d504ac2aed68a60dab9da32a30abfa62d5723ae0f1f3443d6fa153b9",
"namespace_t_r_i_m_1_1_s_d_k.html#aaa8df5a15f269e4fc4dec8e213ebba55abe993d105940ea02e5f77696afc02971",
"namespace_t_r_i_m_1_1_s_d_k.html#abe38318eb78eed6dc6344ec3eedf4c0badae8ace18bdcbcc6ae5aece263e14fe8",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a11bce6e1798ba5b92ec4df1c52b7a667",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a2a4ea33389628d2dd43126eef89c2670",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a45a282cd5a68b4e23d980b242de9a904",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a5e314d7775266188b46332887f596e15",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a76f42e29afb717a18ee5847a3e5376e6",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394a925d7cc43033227de24e9325cd1a171c",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394aabc61bf152bee00a85603246d55adbb7",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394ac7945f7df19b42a201d90fbddd3f95e5",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394ae2d6697a692553c4d520d5df8d5211a3",
"namespace_t_r_i_m_1_1_s_d_k.html#ac89cda7c5437633dc79a88c21e468394afcd78cc8181c70686b68c47b68c6a6b2",
"namespace_t_r_i_m_1_1_s_d_k.html#ada387eb541f9c2dddfbd6b2dd7158587a45e23a169652aaf95ce80da844f3df0d",
"namespace_t_r_i_m_1_1_s_d_k.html#af1a7272b070a0747f5db045018538155ace8ae9da5b7cd6c3df2929543a9af92d",
"namespace_t_r_i_m_1_1_s_d_k.html#af7e058b1d73a0123587a52d773c2ad6ba4351cfebe4b61d8aa5efa1d020710005",
"namespace_t_r_i_m_1_1_s_d_k.html#af7e058b1d73a0123587a52d773c2ad6bac50b6527a12e4ac96454d3624e1f1b2f",
"oidc.html#autotoc_md101",
"release_notes.html#autotoc_md26"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';