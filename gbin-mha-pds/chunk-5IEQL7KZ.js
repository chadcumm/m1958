import {
  CclServiceWrapperService,
  MockCclService
} from "./chunk-CSMLMOG6.js";
import {
  AppStatusService,
  ChangeDetectionStrategy,
  Component,
  CustomService,
  DefaultValueAccessor,
  FormsModule,
  Injectable,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QRLYRNBZ.js";
import "./chunk-I7D2VZMI.js";

// src/app/ccl-test/services/request-history.service.ts
var RequestHistoryService = class _RequestHistoryService {
  HISTORY_KEY = "mha_pds_service_test_history";
  FORM_STATE_KEY = "mha_pds_service_test_form_state";
  MAX_HISTORY_ITEMS = 50;
  /**
   * Load request history from localStorage
   */
  loadHistory() {
    try {
      const stored = localStorage.getItem(this.HISTORY_KEY);
      if (!stored) {
        return [];
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error("Error loading history from localStorage:", error);
      return [];
    }
  }
  /**
   * Save request history to localStorage
   */
  saveHistory(history) {
    try {
      const trimmedHistory = history.slice(0, this.MAX_HISTORY_ITEMS);
      localStorage.setItem(this.HISTORY_KEY, JSON.stringify(trimmedHistory));
    } catch (error) {
      console.error("Error saving history to localStorage:", error);
      if (error instanceof Error && error.name === "QuotaExceededError") {
        try {
          const reducedHistory = history.slice(0, 10);
          localStorage.setItem(this.HISTORY_KEY, JSON.stringify(reducedHistory));
        } catch (retryError) {
          console.error("Failed to save even reduced history:", retryError);
        }
      }
    }
  }
  /**
   * Add a new item to history
   */
  addHistoryItem(item) {
    const history = this.loadHistory();
    history.unshift(item);
    this.saveHistory(history);
    return history;
  }
  /**
   * Clear all history
   */
  clearHistory() {
    try {
      localStorage.removeItem(this.HISTORY_KEY);
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  }
  /**
   * Remove a single history item by id
   */
  removeHistoryItem(id) {
    const history = this.loadHistory();
    const filtered = history.filter((item) => item.id !== id);
    this.saveHistory(filtered);
    return filtered;
  }
  /**
   * Load form state from localStorage
   */
  loadFormState() {
    try {
      const stored = localStorage.getItem(this.FORM_STATE_KEY);
      if (!stored) {
        return null;
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error("Error loading form state from localStorage:", error);
      return null;
    }
  }
  /**
   * Save form state to localStorage
   */
  saveFormState(state) {
    try {
      localStorage.setItem(this.FORM_STATE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving form state to localStorage:", error);
    }
  }
  /**
   * Clear form state
   */
  clearFormState() {
    try {
      localStorage.removeItem(this.FORM_STATE_KEY);
    } catch (error) {
      console.error("Error clearing form state:", error);
    }
  }
  static \u0275fac = function RequestHistoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestHistoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestHistoryService, factory: _RequestHistoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestHistoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/ccl-test/parsers/response-parsers.ts
function parseMHAPDSConfiguration(response) {
  const parsed = {
    summary: [],
    tables: [],
    metadata: {}
  };
  if (response.updt_dt_tm) {
    parsed.summary.push({ label: "Last Updated", value: response.updt_dt_tm });
  }
  if (response.processing) {
    parsed.summary.push({
      label: "Dummy Mode",
      value: response.processing.enable_dummy_mode ? "Enabled" : "Disabled"
    });
  }
  if (response.submission) {
    parsed.summary.push({
      label: "Batch Size",
      value: response.submission.batch_size
    });
    parsed.summary.push({
      label: "Schedule",
      value: response.submission.schedule_frequency
    });
  }
  if (response.mirth_connect) {
    const mirthHeaders = ["Property", "Value"];
    const mirthRows = [
      ["URL", response.mirth_connect.url || ""],
      ["Username", response.mirth_connect.username || ""],
      ["Timeout (seconds)", response.mirth_connect.timeout_seconds || ""],
      ["Retry Attempts", response.mirth_connect.retry_attempts || ""]
    ];
    parsed.tables?.push({
      title: "Mirth Connect Configuration",
      headers: mirthHeaders,
      rows: mirthRows
    });
  }
  if (response.submission) {
    const submissionHeaders = ["Property", "Value"];
    const submissionRows = [
      ["Batch Size", response.submission.batch_size || ""],
      ["Schedule Frequency", response.submission.schedule_frequency || ""],
      ["Max Retries", response.submission.max_retries || ""],
      ["Retry Delay (minutes)", response.submission.retry_delay_minutes || ""]
    ];
    parsed.tables?.push({
      title: "Submission Configuration",
      headers: submissionHeaders,
      rows: submissionRows
    });
  }
  if (response.processing) {
    const processingHeaders = ["Property", "Value"];
    const processingRows = [
      ["Enable Dummy Mode", response.processing.enable_dummy_mode ? "Yes" : "No"],
      ["Enable Detailed Logging", response.processing.enable_detailed_logging ? "Yes" : "No"],
      ["Enable Error Notifications", response.processing.enable_error_notifications ? "Yes" : "No"]
    ];
    parsed.tables?.push({
      title: "Processing Configuration",
      headers: processingHeaders,
      rows: processingRows
    });
  }
  if (response.mappings && response.mappings.length > 0) {
    const mappingHeaders = ["Internal Code", "MHA PDS Code", "Description"];
    const mappingRows = response.mappings.map((mapping) => [
      mapping.internal_code || "",
      mapping.mha_pds_code || "",
      mapping.description || ""
    ]);
    parsed.tables?.push({
      title: `Functional Centre Mappings (${response.mapping_cnt || response.mappings.length} total)`,
      headers: mappingHeaders,
      rows: mappingRows.slice(0, 20)
      // Show first 20
    });
    if (mappingRows.length > 20) {
      parsed.metadata["mappingsNote"] = `Showing first 20 of ${mappingRows.length} mappings`;
    }
  }
  return parsed;
}
function parseManagerOpsDate(response) {
  return {
    summary: [
      { label: "Found", value: response.found_ind ? "Yes" : "No" },
      {
        label: "Date/Time",
        value: response.manager_ops_dt_tm_formatted || "Never run"
      },
      { label: "Timestamp", value: response.manager_ops_dt_tm || 0 }
    ]
  };
}
function parseGenericResponse(response) {
  const parsed = {
    summary: []
  };
  if (typeof response === "object" && response !== null) {
    Object.keys(response).forEach((key) => {
      const value = response[key];
      if (typeof value !== "object") {
        parsed.summary.push({ label: key, value });
      }
    });
  }
  return parsed;
}

// src/app/ccl-test/configs/mha-pds-service.config.ts
var REQUEST_CONFIGS = [
  {
    requestType: "getMHAPDSConfiguration",
    displayName: "Get MHA PDS Configuration",
    description: "Retrieves the complete MHA PDS configuration from dm_info/long_blob, including Mirth Connect settings, submission configuration, processing options, and functional centre mappings.",
    category: "Configuration",
    exampleData: "",
    responseParser: parseMHAPDSConfiguration
  },
  {
    requestType: "getManagerOpsDate",
    displayName: "Get Manager Operations Date",
    description: "Retrieves the last date/time the manager operations script (gbin_mha_pds_manager) ran. This indicates when episodes and services were last extracted from clinical events.",
    category: "Operations",
    exampleData: "",
    responseParser: parseManagerOpsDate
  },
  {
    requestType: "getLogs",
    displayName: "Get Logs",
    description: "Query MHA PDS operational logs with filtering by log type, status, date range, and related script. Supports pagination.",
    category: "Logs",
    // CCL cnvtjsontorec requires wrapper with record name
    wrapperKey: "log_filter_params",
    exampleData: '{"log_filter_params":{"log_type":"","status":"","start_date":"","end_date":"","related_script":"","days_back":"7","page":"1","page_size":"50"}}',
    inputSchema: [
      {
        name: "log_type",
        label: "Log Type",
        type: "select",
        options: [
          { label: "All Types", value: "" },
          { label: "Manager", value: "MANAGER" },
          { label: "Data Extraction", value: "DATA_EXTRACTION" },
          { label: "Transmission", value: "TRANSMISSION" },
          { label: "Mirth Callback", value: "MIRTH_CALLBACK" }
        ]
      },
      {
        name: "status",
        label: "Status",
        type: "select",
        options: [
          { label: "All Statuses", value: "" },
          { label: "Success", value: "SUCCESS" },
          { label: "Failed", value: "FAILED" },
          { label: "Error", value: "ERROR" },
          { label: "In Progress", value: "IN_PROGRESS" },
          { label: "Partial", value: "PARTIAL" }
        ]
      },
      {
        name: "days_back",
        label: "Days Back",
        type: "number",
        defaultValue: 7,
        placeholder: "Number of days to look back"
      },
      {
        name: "page",
        label: "Page",
        type: "number",
        defaultValue: 1
      },
      {
        name: "page_size",
        label: "Page Size",
        type: "number",
        defaultValue: 50
      }
    ]
  },
  {
    requestType: "getLogDetail",
    displayName: "Get Log Detail",
    description: "Get complete details for a single log entry including audit information and child logs.",
    category: "Logs",
    // CCL cnvtjsontorec requires wrapper with record name
    wrapperKey: "log_detail_params",
    exampleData: '{"log_detail_params":{"log_id":"12345001"}}',
    inputSchema: [
      {
        name: "log_id",
        label: "Log ID",
        type: "number",
        required: true,
        placeholder: "Enter the log ID to retrieve"
      }
    ]
  },
  {
    requestType: "getLogText",
    displayName: "Get Log Payload",
    description: "Retrieve the JSON payload stored for a log entry. This includes request/response data for transmission logs.",
    category: "Logs",
    // CCL cnvtjsontorec requires wrapper with record name
    wrapperKey: "log_text_params",
    exampleData: '{"log_text_params":{"log_id":"12345002"}}',
    inputSchema: [
      {
        name: "log_id",
        label: "Log ID",
        type: "number",
        required: true,
        placeholder: "Enter the log ID to retrieve payload for"
      }
    ]
  },
  {
    requestType: "getPatients",
    displayName: "Get Patients",
    description: "Query MHA PDS patients with filtering by name, MRN, HCN, submission status, date range, functional centre, and program. Supports pagination.",
    category: "Patients",
    // CCL cnvtjsontorec requires wrapper with record name
    wrapperKey: "patient_filter_params",
    exampleData: '{"patient_filter_params":{"search_text":"","submission_status":"","start_date":"","end_date":"","functional_centre":"","program_name":"","page":"1","page_size":"50"}}',
    inputSchema: [
      {
        name: "search_text",
        label: "Search (Name/MRN/HCN)",
        type: "text",
        placeholder: "Search by name, MRN, or HCN"
      },
      {
        name: "submission_status",
        label: "Submission Status",
        type: "select",
        options: [
          { label: "All Statuses", value: "" },
          { label: "Pending", value: "PENDING" },
          { label: "Submitted", value: "SUBMITTED" },
          { label: "Error", value: "ERROR" },
          { label: "Partial", value: "PARTIAL" }
        ]
      },
      {
        name: "functional_centre",
        label: "Functional Centre",
        type: "text",
        placeholder: "Filter by functional centre code"
      },
      {
        name: "program_name",
        label: "Program Name",
        type: "text",
        placeholder: "Filter by program name"
      },
      {
        name: "page",
        label: "Page",
        type: "number",
        defaultValue: 1
      },
      {
        name: "page_size",
        label: "Page Size",
        type: "number",
        defaultValue: 50
      }
    ]
  },
  {
    requestType: "getPatientDetail",
    displayName: "Get Patient Detail",
    description: "Get complete patient details including client demographics (DE01-DE04), episodes (DE05, DE06, DE09), and services (DE07, DE08, DE10).",
    category: "Patients",
    // CCL cnvtjsontorec requires wrapper with record name
    wrapperKey: "patient_detail_params",
    exampleData: '{"patient_detail_params":{"client_id":"12345001"}}',
    inputSchema: [
      {
        name: "client_id",
        label: "Client ID",
        type: "number",
        required: true,
        placeholder: "Enter the client ID to retrieve details for"
      }
    ]
  },
  {
    requestType: "getAvailableLocations",
    displayName: "Get Available Locations",
    description: "Retrieves all unit-level locations (NURSEUNIT and AMBULATORY) from code_value table for MHA configuration. Includes hierarchy info and flags locations already configured.",
    category: "Configuration",
    exampleData: "",
    inputSchema: [
      {
        name: "searchText",
        label: "Search",
        type: "text",
        placeholder: "Filter locations by name (optional)"
      }
    ]
  },
  {
    requestType: "runManager",
    displayName: "Run Manager",
    description: "Execute gbin_mha_pds_manager to extract patient data from Cerner encounters. Use Test Mode (commit_mode=0) to validate without saving, or Commit Mode (commit_mode=1) to save to database.",
    category: "Operations",
    wrapperKey: "run_manager_params",
    exampleData: '{"run_manager_params":{"commit_mode":"0"}}',
    inputSchema: [
      {
        name: "commit_mode",
        label: "Commit Mode",
        type: "select",
        required: true,
        options: [
          { label: "Test Mode (no commits)", value: "0" },
          { label: "Commit Mode (save to database)", value: "1" }
        ]
      }
    ]
  },
  {
    requestType: "getRecentManagerRuns",
    displayName: "Get Recent Manager Runs",
    description: "Retrieves the last N manager execution runs from the log table. Shows timing, status, record counts, and error counts for each run.",
    category: "Operations",
    wrapperKey: "recent_runs_params",
    exampleData: '{"recent_runs_params":{"limit":"20"}}',
    inputSchema: [
      {
        name: "limit",
        label: "Limit",
        type: "number",
        defaultValue: 20,
        placeholder: "Number of recent runs to return (max 100)"
      }
    ]
  }
  // ADD NEW CONFIGURATIONS HERE
  // Example:
  // {
  //   requestType: 'getEpisodesByStatus',
  //   displayName: 'Get Episodes by Status',
  //   description: 'Retrieves episodes filtered by submission status',
  //   category: 'Data',
  //   exampleData: '{"status": "PENDING", "limit": 10}',
  //   inputSchema: [
  //     {
  //       name: 'status',
  //       label: 'Status',
  //       type: 'select',
  //       options: [
  //         { label: 'Pending', value: 'PENDING' },
  //         { label: 'Submitted', value: 'SUBMITTED' },
  //         { label: 'Failed', value: 'FAILED' }
  //       ],
  //       required: true
  //     },
  //     {
  //       name: 'limit',
  //       label: 'Limit',
  //       type: 'number',
  //       defaultValue: 10,
  //       placeholder: 'Maximum number of records'
  //     }
  //   ],
  //   responseParser: parseEpisodesByStatus
  // }
];
function getConfigByRequestType(requestType) {
  return REQUEST_CONFIGS.find((config) => config.requestType === requestType);
}

// src/app/ccl-test/ccl-test.ts
var _forTrack0 = ($index, $item) => $item.requestType;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.value;
var _forTrack3 = ($index, $item) => $item.label;
var _forTrack4 = ($index, $item) => $item.title;
var _forTrack5 = ($index, $item) => $item.id;
function CclTest_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Offline Mode (Mock Data)");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Online Mode (Live CCL)");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, " System detected: Offline ");
    \u0275\u0275elementEnd();
  }
}
function CclTest_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r1 = ctx.$implicit;
    \u0275\u0275property("value", config_r1.requestType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", config_r1.displayName, " (", config_r1.category, ") ");
  }
}
function CclTest_Conditional_30_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 39);
    \u0275\u0275twoWayListener("ngModelChange", function CclTest_Conditional_30_Conditional_11_Conditional_3_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.customInputData, $event) || (ctx_r2.customInputData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customInputData);
  }
}
function CclTest_Conditional_30_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, " This request type does not require additional request data. ");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_30_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label");
    \u0275\u0275text(2, "Request Data (JSON):");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CclTest_Conditional_30_Conditional_11_Conditional_3_Template, 1, 1, "textarea", 38)(4, CclTest_Conditional_30_Conditional_11_Conditional_4_Template, 2, 0, "p", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(config_r5.exampleData.length > 0 ? 3 : 4);
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8.label, " ");
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_4_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const field_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.formInputs()[field_r7.name], $event) || (ctx_r2.formInputs()[field_r7.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_4_For_2_Template, 2, 2, "option", 18, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", field_r7.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formInputs()[field_r7.name]);
    \u0275\u0275advance();
    \u0275\u0275repeater(field_r7.options);
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_5_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const field_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.formInputs()[field_r7.name], $event) || (ctx_r2.formInputs()[field_r7.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", field_r7.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formInputs()[field_r7.name]);
    \u0275\u0275property("placeholder", field_r7.placeholder || "");
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const field_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.formInputs()[field_r7.name], $event) || (ctx_r2.formInputs()[field_r7.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", field_r7.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formInputs()[field_r7.name]);
    \u0275\u0275property("placeholder", field_r7.placeholder || "");
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_7_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const field_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.formInputs()[field_r7.name], $event) || (ctx_r2.formInputs()[field_r7.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", field_r7.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formInputs()[field_r7.name]);
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const field_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.formInputs()[field_r7.name], $event) || (ctx_r2.formInputs()[field_r7.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", field_r7.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formInputs()[field_r7.name]);
    \u0275\u0275property("placeholder", field_r7.placeholder || "");
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r7.helpText);
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Conditional_3_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_4_Template, 3, 2, "select", 43)(5, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_5_Template, 1, 3, "textarea", 44)(6, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_6_Template, 1, 3, "input", 45)(7, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_7_Template, 1, 2, "input", 46)(8, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Case_8_Template, 1, 3, "input", 47);
    \u0275\u0275conditionalCreate(9, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Conditional_9_Template, 2, 1, "small", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const field_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r7.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r7.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r7.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = field_r7.type) === "select" ? 4 : tmp_17_0 === "textarea" ? 5 : tmp_17_0 === "number" ? 6 : tmp_17_0 === "date" ? 7 : 8);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(field_r7.helpText ? 9 : -1);
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, CclTest_Conditional_30_Conditional_12_Conditional_1_For_2_Template, 10, 5, "div", 15, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(config_r5.inputSchema);
  }
}
function CclTest_Conditional_30_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Request Data (JSON):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "textarea", 54);
    \u0275\u0275twoWayListener("ngModelChange", function CclTest_Conditional_30_Conditional_12_Conditional_2_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.customInputData, $event) || (ctx_r2.customInputData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 48);
    \u0275\u0275text(4, " Enter valid JSON. The input will be validated before execution. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customInputData);
  }
}
function CclTest_Conditional_30_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275conditionalCreate(1, CclTest_Conditional_30_Conditional_12_Conditional_1_Template, 3, 0, "div", 40)(2, CclTest_Conditional_30_Conditional_12_Conditional_2_Template, 5, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(config_r5.inputSchema && config_r5.inputSchema.length > 0 ? 1 : 2);
  }
}
function CclTest_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 34)(6, "button", 35);
    \u0275\u0275listener("click", function CclTest_Conditional_30_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInputMode("example"));
    });
    \u0275\u0275text(7, " Example Data ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275listener("click", function CclTest_Conditional_30_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInputMode("custom"));
    });
    \u0275\u0275text(9, " Custom Input ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 36);
    \u0275\u0275conditionalCreate(11, CclTest_Conditional_30_Conditional_11_Template, 5, 1, "div", 37)(12, CclTest_Conditional_30_Conditional_12_Template, 3, 1, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.description);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.inputMode() === "example");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.inputMode() === "custom");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.inputMode() === "example" ? 11 : 12);
  }
}
function CclTest_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Executing...");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Execute Request");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CclTest_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearResults());
    });
    \u0275\u0275text(1, " Clear Results ");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Executing CCL script...");
    \u0275\u0275elementEnd()();
  }
}
function CclTest_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h3");
    \u0275\u0275text(2, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function CclTest_Conditional_43_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "pre", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getRawJson(ctx_r2.rawResponse()));
  }
}
function CclTest_Conditional_43_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "pre", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getFormattedJson(ctx_r2.rawResponse()));
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r16.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r16.value);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "h3");
    \u0275\u0275text(2, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dl", 64);
    \u0275\u0275repeaterCreate(4, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_0_For_5_Template, 5, 2, "div", 65, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parsed_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(parsed_r17.summary);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(header_r18);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r19);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_For_11_For_2_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r20);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "table", 68)(5, "thead")(6, "tr");
    \u0275\u0275repeaterCreate(7, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_For_8_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_For_11_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const table_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r21.title);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(table_r21.headers);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(table_r21.rows);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275repeaterCreate(1, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_For_2_Template, 12, 1, "div", 66, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parsed_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(parsed_r17.tables);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r22 = ctx.$implicit;
    const parsed_r17 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", key_r22, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parsed_r17.metadata[key_r22], " ");
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "h3");
    \u0275\u0275text(2, "Metadata");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_2_For_4_Template, 4, 2, "p", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parsed_r17 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.Object.keys(parsed_r17.metadata));
  }
}
function CclTest_Conditional_43_Case_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_0_Template, 6, 0, "div", 61);
    \u0275\u0275conditionalCreate(1, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_1_Template, 3, 0, "div", 62);
    \u0275\u0275conditionalCreate(2, CclTest_Conditional_43_Case_13_Conditional_1_Conditional_2_Template, 5, 0, "div", 63);
  }
  if (rf & 2) {
    const parsed_r17 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(parsed_r17.summary && parsed_r17.summary.length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(parsed_r17.tables && parsed_r17.tables.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(parsed_r17.metadata && ctx_r2.Object.keys(parsed_r17.metadata).length > 0 ? 2 : -1);
  }
}
function CclTest_Conditional_43_Case_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "No parsed data available");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_43_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275conditionalCreate(1, CclTest_Conditional_43_Case_13_Conditional_1_Template, 3, 3)(2, CclTest_Conditional_43_Case_13_Conditional_2_Template, 2, 0, "p", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.parsedResponse()) ? 1 : 2, tmp_2_0);
  }
}
function CclTest_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 26)(1, "h2");
    \u0275\u0275text(2, "Response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "button", 35);
    \u0275\u0275listener("click", function CclTest_Conditional_43_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setResponseViewMode("raw"));
    });
    \u0275\u0275text(5, " Raw JSON ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 35);
    \u0275\u0275listener("click", function CclTest_Conditional_43_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setResponseViewMode("formatted"));
    });
    \u0275\u0275text(7, " Formatted JSON ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275listener("click", function CclTest_Conditional_43_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setResponseViewMode("parsed"));
    });
    \u0275\u0275text(9, " Parsed View ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 36);
    \u0275\u0275conditionalCreate(11, CclTest_Conditional_43_Case_11_Template, 3, 1, "div", 57)(12, CclTest_Conditional_43_Case_12_Template, 3, 1, "div", 57)(13, CclTest_Conditional_43_Case_13_Template, 3, 1, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.responseViewMode() === "raw");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.responseViewMode() === "formatted");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.responseViewMode() === "parsed");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r2.responseViewMode()) === "raw" ? 11 : tmp_4_0 === "formatted" ? 12 : tmp_4_0 === "parsed" ? 13 : -1);
  }
}
function CclTest_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function CclTest_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearHistory());
    });
    \u0275\u0275text(1, " Clear All ");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "No request history yet. Execute a request to see it here.");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_51_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r25.elapsedTimeSeconds, "s ");
  }
}
function CclTest_Conditional_51_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r25.errorMessage, " ");
  }
}
function CclTest_Conditional_51_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function CclTest_Conditional_51_For_2_Template_div_click_0_listener() {
      const item_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadHistoryItem(item_r25));
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 74);
    \u0275\u0275listener("click", function CclTest_Conditional_51_For_2_Template_button_click_4_listener($event) {
      const item_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeHistoryItem(item_r25.id, $event));
    });
    \u0275\u0275text(5, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75)(7, "span", 76);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 77);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, CclTest_Conditional_51_For_2_Conditional_11_Template, 2, 1, "div", 78);
    \u0275\u0275conditionalCreate(12, CclTest_Conditional_51_For_2_Conditional_12_Template, 2, 1, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r25 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ((tmp_11_0 = ctx_r2.selectedHistoryItem()) == null ? null : tmp_11_0.id) === item_r25.id)("error", item_r25.status === "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r25.requestType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatTimestamp(item_r25.timestamp), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("success", item_r25.status === "success")("error", item_r25.status === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r25.status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r25.elapsedTimeSeconds !== void 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r25.errorMessage ? 12 : -1);
  }
}
function CclTest_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, CclTest_Conditional_51_For_2_Template, 13, 13, "div", 70, _forTrack5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.requestHistory());
  }
}
var CclTest = class _CclTest {
  realService = inject(CustomService);
  mockService = inject(MockCclService);
  wrapperService = inject(CclServiceWrapperService);
  historyService = inject(RequestHistoryService);
  appStatus = inject(AppStatusService);
  /**
   * Manual toggle for offline mode testing
   * UI toggle allows developers to test both modes without restarting the app
   * When true, forces use of MockCclService regardless of app-level offline mode
   * When false, uses live CustomService regardless of app-level offline mode
   */
  useOfflineMode = signal(false, ...ngDevMode ? [{ debugName: "useOfflineMode" }] : []);
  manualOverrideActive = signal(false, ...ngDevMode ? [{ debugName: "manualOverrideActive" }] : []);
  /**
   * Read-only signal for current offline mode status (app-level auto-detection)
   */
  isOfflineMode = computed(() => this.appStatus.offlineMode(), ...ngDevMode ? [{ debugName: "isOfflineMode" }] : []);
  /**
   * Active service based on manual toggle
   * When toggle is ON: Uses MockCclService directly (bypasses wrapper and app-level detection)
   * When toggle is OFF: Uses CustomService directly (bypasses wrapper and app-level detection)
   * This ensures the manual toggle provides a true override of automatic detection
   */
  get activeService() {
    return this.useOfflineMode() ? this.mockService : this.realService;
  }
  // Available request configurations
  REQUEST_CONFIGS = REQUEST_CONFIGS;
  // Expose Object for template
  Object = Object;
  // Request configuration state
  selectedRequestType = signal("getMHAPDSConfiguration", ...ngDevMode ? [{ debugName: "selectedRequestType" }] : []);
  selectedConfig = computed(() => getConfigByRequestType(this.selectedRequestType()), ...ngDevMode ? [{ debugName: "selectedConfig" }] : []);
  inputMode = signal("example", ...ngDevMode ? [{ debugName: "inputMode" }] : []);
  customInputData = signal("", ...ngDevMode ? [{ debugName: "customInputData" }] : []);
  formInputs = signal({}, ...ngDevMode ? [{ debugName: "formInputs" }] : []);
  // Execution state
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Response state
  rawResponse = signal(null, ...ngDevMode ? [{ debugName: "rawResponse" }] : []);
  responseViewMode = signal("formatted", ...ngDevMode ? [{ debugName: "responseViewMode" }] : []);
  parsedResponse = computed(() => {
    const response = this.rawResponse();
    const config = this.selectedConfig();
    if (!response || !config) {
      return null;
    }
    const parser = config.responseParser || parseGenericResponse;
    try {
      return parser(response);
    } catch (e) {
      console.error("Error parsing response:", e);
      return parseGenericResponse(response);
    }
  }, ...ngDevMode ? [{ debugName: "parsedResponse" }] : []);
  // History state
  requestHistory = signal([], ...ngDevMode ? [{ debugName: "requestHistory" }] : []);
  selectedHistoryItem = signal(null, ...ngDevMode ? [{ debugName: "selectedHistoryItem" }] : []);
  constructor() {
    this.requestHistory.set(this.historyService.loadHistory());
    effect(() => {
      const history = this.requestHistory();
      if (history.length > 0) {
        this.historyService.saveHistory(history);
      }
    });
    effect(() => {
      const appOffline = this.appStatus.offlineMode();
      const manualOverride = this.manualOverrideActive();
      if (manualOverride) {
        console.log("[CclTest] Manual override active - keeping developer-selected mode:", this.useOfflineMode());
        return;
      }
      this.useOfflineMode.set(appOffline);
      console.log(`[CclTest] Synced manual toggle with app-level offline mode: ${appOffline}`);
    });
  }
  /**
   * Handle request type selection change
   */
  onRequestTypeChange() {
    const config = this.selectedConfig();
    if (config) {
      this.customInputData.set(config.exampleData || "");
      this.formInputs.set({});
      if (config.inputSchema) {
        const defaults = {};
        config.inputSchema.forEach((field) => {
          defaults[field.name] = field.defaultValue || "";
        });
        this.formInputs.set(defaults);
      }
    }
    this.rawResponse.set(null);
    this.error.set(null);
  }
  /**
   * Switch input mode
   */
  setInputMode(mode) {
    this.inputMode.set(mode);
  }
  /**
   * Switch response view mode
   */
  setResponseViewMode(mode) {
    this.responseViewMode.set(mode);
  }
  /**
   * Build request data based on current input mode
   */
  buildRequestData() {
    const mode = this.inputMode();
    const config = this.selectedConfig();
    if (mode === "example") {
      return this.customInputData() || config?.exampleData || "";
    } else {
      if (config?.inputSchema && config.inputSchema.length > 0) {
        try {
          const formData = this.formInputs();
          const processedData = {};
          config.inputSchema.forEach((field) => {
            const value = formData[field.name];
            if (field.type === "number" && value !== void 0 && value !== "") {
              processedData[field.name] = String(value);
            } else {
              processedData[field.name] = value;
            }
          });
          if (config.wrapperKey) {
            return JSON.stringify({ [config.wrapperKey]: processedData });
          }
          return JSON.stringify(processedData);
        } catch (e) {
          throw new Error("Failed to build JSON from form inputs");
        }
      } else {
        const data = this.customInputData();
        if (data.trim()) {
          try {
            JSON.parse(data);
            return data;
          } catch (e) {
            throw new Error("Invalid JSON in custom input");
          }
        }
        return "";
      }
    }
  }
  /**
   * Execute the selected service request
   */
  executeRequest() {
    const config = this.selectedConfig();
    if (!config) {
      this.error.set("No request type selected");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.rawResponse.set(null);
    const startTime = Date.now();
    const requestId = config.requestType;
    try {
      const requestData = this.buildRequestData();
      this.activeService.load({
        customScript: {
          script: [
            {
              name: "gbin_mha_pds_service:group1",
              run: "pre",
              id: requestId,
              reference: true,
              parameters: {
                requestType: config.requestType,
                requestId: Date.now(),
                requestData
              }
            }
          ],
          clearPatientSource: true
        }
      }, [{ personId: 0, encntrId: 0 }], () => {
        const endTime = Date.now();
        const elapsedSeconds = Math.round((endTime - startTime) / 1e3);
        const response = this.activeService.get(requestId);
        if (response) {
          if (response.error) {
            this.error.set(response.error);
            this.addToHistory({
              id: crypto.randomUUID(),
              timestamp: startTime,
              requestType: config.requestType,
              requestData,
              response,
              status: "error",
              errorMessage: response.error,
              elapsedTimeSeconds: elapsedSeconds
            });
          } else {
            this.rawResponse.set(response);
            this.addToHistory({
              id: crypto.randomUUID(),
              timestamp: startTime,
              requestType: config.requestType,
              requestData,
              response,
              status: "success",
              elapsedTimeSeconds: elapsedSeconds
            });
            this.responseViewMode.set("formatted");
          }
        } else {
          const errorMsg = "No response from CCL script";
          this.error.set(errorMsg);
          this.addToHistory({
            id: crypto.randomUUID(),
            timestamp: startTime,
            requestType: config.requestType,
            requestData,
            response: null,
            status: "error",
            errorMessage: errorMsg,
            elapsedTimeSeconds: elapsedSeconds
          });
        }
        this.loading.set(false);
      });
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : "Unknown error occurred";
      this.error.set(errorMsg);
      this.loading.set(false);
      this.addToHistory({
        id: crypto.randomUUID(),
        timestamp: startTime,
        requestType: config.requestType,
        requestData: "",
        response: null,
        status: "error",
        errorMessage: errorMsg,
        elapsedTimeSeconds: 0
      });
    }
  }
  /**
   * Add item to history
   */
  addToHistory(item) {
    const updatedHistory = this.historyService.addHistoryItem(item);
    this.requestHistory.set(updatedHistory);
  }
  /**
   * Load a history item
   */
  loadHistoryItem(item) {
    this.selectedHistoryItem.set(item);
    this.selectedRequestType.set(item.requestType);
    this.customInputData.set(item.requestData);
    this.rawResponse.set(item.response);
    this.error.set(item.errorMessage || null);
    this.responseViewMode.set("formatted");
  }
  /**
   * Clear all history
   */
  clearHistory() {
    this.historyService.clearHistory();
    this.requestHistory.set([]);
    this.selectedHistoryItem.set(null);
  }
  /**
   * Remove a single history item
   */
  removeHistoryItem(id, event) {
    event.stopPropagation();
    const updatedHistory = this.historyService.removeHistoryItem(id);
    this.requestHistory.set(updatedHistory);
    if (this.selectedHistoryItem()?.id === id) {
      this.selectedHistoryItem.set(null);
    }
  }
  /**
   * Clear current results
   */
  clearResults() {
    this.rawResponse.set(null);
    this.error.set(null);
    this.selectedHistoryItem.set(null);
  }
  /**
   * Reset form to defaults
   */
  resetForm() {
    const config = this.selectedConfig();
    if (config) {
      this.customInputData.set(config.exampleData || "");
      if (config.inputSchema) {
        const defaults = {};
        config.inputSchema.forEach((field) => {
          defaults[field.name] = field.defaultValue || "";
        });
        this.formInputs.set(defaults);
      }
    }
    this.inputMode.set("example");
    this.clearResults();
  }
  /**
   * Format timestamp for display
   */
  formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  /**
   * Get formatted JSON string
   */
  getFormattedJson(obj) {
    try {
      return JSON.stringify(obj, null, 2);
    } catch (e) {
      return "Error formatting JSON";
    }
  }
  /**
   * Get raw JSON string
   */
  getRawJson(obj) {
    try {
      return JSON.stringify(obj);
    } catch (e) {
      return "Error converting to JSON";
    }
  }
  /**
   * Toggle offline mode for testing
   * This provides a manual override that bypasses app-level automatic detection
   */
  toggleOfflineMode() {
    const currentValue = this.useOfflineMode();
    const newValue = !currentValue;
    console.log(`[CclTest] toggleOfflineMode() - Current: ${currentValue}, New: ${newValue}`);
    this.useOfflineMode.set(newValue);
    const appOffline = this.appStatus.offlineMode();
    const overrideActive = newValue !== appOffline;
    this.manualOverrideActive.set(overrideActive);
    console.log(overrideActive ? "[CclTest] Manual offline override enabled - diverging from app-level status" : "[CclTest] Manual offline override cleared - re-syncing with app-level status");
    console.log(newValue ? "[CclTest] Manual offline mode enabled - Will use MockCclService directly" : "[CclTest] Manual offline mode disabled - Will use live CustomService directly");
    console.log(`[CclTest] App-level offline mode status (read-only, not affecting manual toggle): ${this.isOfflineMode()}`);
  }
  static \u0275fac = function CclTest_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CclTest)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CclTest, selectors: [["app-ccl-test"]], decls: 52, vars: 13, consts: [[1, "ccl-test-container"], [1, "page-header"], [1, "header-content"], [1, "page-description"], [1, "mode-toggle"], [1, "toggle-label"], ["type", "checkbox", 1, "toggle-checkbox", 3, "change", "checked"], [1, "toggle-slider"], [1, "toggle-text"], [1, "mode-indicator", "offline"], [1, "mode-indicator", "online"], [1, "mode-hint"], [1, "main-layout"], [1, "left-panel"], [1, "config-section", "card"], [1, "form-group"], ["for", "requestType"], ["id", "requestType", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "execution-section", "card"], [1, "button-group"], [1, "btn", "btn-primary", "btn-large", 3, "click", "disabled"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-secondary"], [1, "status-message", "loading"], [1, "status-message", "error"], [1, "response-section", "card"], [1, "right-panel"], [1, "history-section", "card"], [1, "history-header"], [1, "btn", "btn-danger", "btn-small"], [1, "info-message"], [1, "history-list"], [1, "description-box"], [1, "tabs"], [1, "tab-button", 3, "click"], [1, "tab-content"], [1, "input-section"], ["rows", "6", "placeholder", "Enter JSON request data...", 1, "form-control", "code-input", 3, "ngModel"], ["rows", "6", "placeholder", "Enter JSON request data...", 1, "form-control", "code-input", 3, "ngModelChange", "ngModel"], [1, "form-fields"], [3, "for"], [1, "required"], [1, "form-control", 3, "id", "ngModel"], ["rows", "4", 1, "form-control", 3, "id", "ngModel", "placeholder"], ["type", "number", 1, "form-control", 3, "id", "ngModel", "placeholder"], ["type", "date", 1, "form-control", 3, "id", "ngModel"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "placeholder"], [1, "help-text"], [1, "form-control", 3, "ngModelChange", "id", "ngModel"], ["rows", "4", 1, "form-control", 3, "ngModelChange", "id", "ngModel", "placeholder"], ["type", "number", 1, "form-control", 3, "ngModelChange", "id", "ngModel", "placeholder"], ["type", "date", 1, "form-control", 3, "ngModelChange", "id", "ngModel"], ["type", "text", 1, "form-control", 3, "ngModelChange", "id", "ngModel", "placeholder"], ["rows", "6", "placeholder", "Enter custom JSON request data...", 1, "form-control", "code-input", 3, "ngModelChange", "ngModel"], [1, "spinner-small"], [1, "spinner"], [1, "response-content"], [1, "response-content", "parsed"], [1, "code-block"], [1, "code-block", "formatted"], [1, "parsed-summary"], [1, "parsed-tables"], [1, "parsed-metadata"], [1, "summary-list"], [1, "summary-item"], [1, "table-container"], [1, "table-wrapper"], [1, "data-table"], [1, "btn", "btn-danger", "btn-small", 3, "click"], [1, "history-item", 3, "selected", "error"], [1, "history-item", 3, "click"], [1, "history-item-header"], [1, "history-item-type"], ["title", "Delete", 1, "btn-icon", "btn-delete", 3, "click"], [1, "history-item-meta"], [1, "history-item-time"], [1, "history-item-status"], [1, "history-item-elapsed"], [1, "history-item-error"]], template: function CclTest_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "CCL Service Testing Interface");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, " Developer-friendly testing interface for ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "gbin_mha_pds_service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " backend requests ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "label", 5)(13, "input", 6);
      \u0275\u0275listener("change", function CclTest_Template_input_change_13_listener() {
        return ctx.toggleOfflineMode();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "span", 7);
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275conditionalCreate(16, CclTest_Conditional_16_Template, 2, 0, "span", 9)(17, CclTest_Conditional_17_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, CclTest_Conditional_18_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "section", 14)(22, "h2");
      \u0275\u0275text(23, "Request Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "label", 16);
      \u0275\u0275text(26, "Request Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function CclTest_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedRequestType, $event) || (ctx.selectedRequestType = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CclTest_Template_select_ngModelChange_27_listener() {
        return ctx.onRequestTypeChange();
      });
      \u0275\u0275repeaterCreate(28, CclTest_For_29_Template, 2, 3, "option", 18, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(30, CclTest_Conditional_30_Template, 13, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "section", 19)(32, "h2");
      \u0275\u0275text(33, "Execution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 20)(35, "button", 21);
      \u0275\u0275listener("click", function CclTest_Template_button_click_35_listener() {
        return ctx.executeRequest();
      });
      \u0275\u0275conditionalCreate(36, CclTest_Conditional_36_Template, 3, 0)(37, CclTest_Conditional_37_Template, 2, 0, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 22);
      \u0275\u0275listener("click", function CclTest_Template_button_click_38_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275text(39, " Reset Form ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, CclTest_Conditional_40_Template, 2, 0, "button", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(41, CclTest_Conditional_41_Template, 4, 0, "div", 24);
      \u0275\u0275conditionalCreate(42, CclTest_Conditional_42_Template, 5, 1, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(43, CclTest_Conditional_43_Template, 14, 7, "section", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 27)(45, "section", 28)(46, "div", 29)(47, "h2");
      \u0275\u0275text(48, "Request History");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(49, CclTest_Conditional_49_Template, 2, 0, "button", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(50, CclTest_Conditional_50_Template, 2, 0, "p", 31)(51, CclTest_Conditional_51_Template, 3, 0, "div", 32);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(13);
      \u0275\u0275property("checked", ctx.useOfflineMode());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.useOfflineMode() ? 16 : 17);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isOfflineMode() ? 18 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedRequestType);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.REQUEST_CONFIGS);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_5_0 = ctx.selectedConfig()) ? 30 : -1, tmp_5_0);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.loading() || !ctx.selectedConfig());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 36 : 37);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.rawResponse() || ctx.error() ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.rawResponse() ? 43 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.requestHistory().length > 0 ? 49 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.requestHistory().length === 0 ? 50 : 51);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.ccl-test-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 100%;\n  margin: 0 auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 0 0 10px 0;\n  font-size: 28px;\n  font-weight: 600;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-description[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-description[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n  color: #d73a49;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-end;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .toggle-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 24px;\n  appearance: none;\n  background: #ccc;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .toggle-checkbox[_ngcontent-%COMP%]:checked {\n  background: #f57c00;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .toggle-checkbox[_ngcontent-%COMP%]:not(:checked) {\n  background: #4caf50;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .toggle-checkbox[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.3s;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .toggle-checkbox[_ngcontent-%COMP%]:checked::before {\n  transform: translateX(26px);\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .mode-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .mode-indicator.online[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .mode-indicator.offline[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #e65100;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .mode-hint[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n  font-style: italic;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .main-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 20px;\n}\n@media (max-width: 1200px) {\n  .ccl-test-container[_ngcontent-%COMP%]   .main-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ccl-test-container[_ngcontent-%COMP%]   .main-layout[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n.ccl-test-container[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%], \n.ccl-test-container[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.ccl-test-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #555;\n  margin: 20px 0 10px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #555;\n  font-size: 14px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #d73a49;\n  margin-left: 3px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.code-input[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .description-box[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  padding: 12px;\n  margin-bottom: 20px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .description-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .description-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0 0;\n  color: #666;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 0;\n  border-bottom: 2px solid #dee2e6;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s ease;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #0078d4;\n  background-color: rgba(0, 120, 212, 0.05);\n}\n.ccl-test-container[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  color: #0078d4;\n  border-bottom-color: #0078d4;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .info-message[_ngcontent-%COMP%] {\n  padding: 12px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 4px;\n  color: #0056b3;\n  font-size: 13px;\n  margin: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  color: white;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #005a9e;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-large[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-icon[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background: transparent;\n  color: #6c757d;\n  border: none;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: #333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-icon.btn-delete[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.ccl-test-container[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #b3d9ff;\n  border-top-color: #0056b3;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message.loading[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  color: #0056b3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message.error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message.error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: #721c24;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message.error[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .response-content[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 0;\n  max-height: 600px;\n  overflow: auto;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .response-content[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px;\n  font-family: "Courier New", monospace;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #333;\n  overflow-x: auto;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .response-content[_ngcontent-%COMP%]   .code-block.formatted[_ngcontent-%COMP%] {\n  white-space: pre;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .response-content.parsed[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: none;\n  overflow: visible;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-summary[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-summary[_ngcontent-%COMP%]   .summary-list[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 12px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9ecef;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #555;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-tables[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  color: #333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-metadata[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  border-top: 2px solid #dee2e6;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 13px;\n  color: #555;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .parsed-metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background-color: #fff;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item.selected[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border-color: #0078d4;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item.error[_ngcontent-%COMP%] {\n  border-left: 3px solid #dc3545;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 13px;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-time[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-status[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-status.success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-status.error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-elapsed[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 11px;\n  color: #6c757d;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-error[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding: 6px;\n  background-color: #f8d7da;\n  border-radius: 3px;\n  font-size: 11px;\n  color: #721c24;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --primary-color: #0078d4;\n  --secondary-color: #6c757d;\n  --success-color: #28a745;\n  --danger-color: #dc3545;\n  --warning-color: #ffc107;\n  --info-color: #17a2b8;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CclTest, [{
    type: Component,
    args: [{ selector: "app-ccl-test", imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="ccl-test-container">
  <div class="page-header">
    <div class="header-content">
      <div>
        <h1>CCL Service Testing Interface</h1>
        <p class="page-description">
          Developer-friendly testing interface for <code>gbin_mha_pds_service</code> backend requests
        </p>
      </div>
      <div class="mode-toggle">
        <label class="toggle-label">
          <input
            type="checkbox"
            [checked]="useOfflineMode()"
            (change)="toggleOfflineMode()"
            class="toggle-checkbox" />
          <span class="toggle-slider"></span>
          <span class="toggle-text">
            @if (useOfflineMode()) {
              <span class="mode-indicator offline">Offline Mode (Mock Data)</span>
            } @else {
              <span class="mode-indicator online">Online Mode (Live CCL)</span>
            }
          </span>
        </label>
        @if (isOfflineMode()) {
          <small class="mode-hint">
            System detected: Offline
          </small>
        }
      </div>
    </div>
  </div>

  <div class="main-layout">
    <!-- Left Panel: Configuration & Execution -->
    <div class="left-panel">
      <!-- Request Configuration Section -->
      <section class="config-section card">
        <h2>Request Configuration</h2>

        <!-- Request Type Selector -->
        <div class="form-group">
          <label for="requestType">Request Type:</label>
          <select
            id="requestType"
            [(ngModel)]="selectedRequestType"
            (ngModelChange)="onRequestTypeChange()"
            class="form-control">
            @for (config of REQUEST_CONFIGS; track config.requestType) {
              <option [value]="config.requestType">
                {{ config.displayName }} ({{ config.category }})
              </option>
            }
          </select>
        </div>

        <!-- Description -->
        @if (selectedConfig(); as config) {
          <div class="description-box">
            <strong>Description:</strong>
            <p>{{ config.description }}</p>
          </div>

          <!-- Input Mode Tabs -->
          <div class="tabs">
            <button
              class="tab-button"
              [class.active]="inputMode() === 'example'"
              (click)="setInputMode('example')">
              Example Data
            </button>
            <button
              class="tab-button"
              [class.active]="inputMode() === 'custom'"
              (click)="setInputMode('custom')">
              Custom Input
            </button>
          </div>

          <!-- Input Content -->
          <div class="tab-content">
            @if (inputMode() === 'example') {
              <!-- Example Data Tab -->
              <div class="input-section">
                <label>Request Data (JSON):</label>
                @if (config.exampleData.length > 0) {
                  <textarea
                    [(ngModel)]="customInputData"
                    class="form-control code-input"
                    rows="6"
                    placeholder="Enter JSON request data..."></textarea>
                } @else {
                  <p class="info-message">
                    This request type does not require additional request data.
                  </p>
                }
              </div>
            } @else {
              <!-- Custom Input Tab -->
              <div class="input-section">
                @if (config.inputSchema && config.inputSchema.length > 0) {
                  <!-- Form-based input -->
                  <div class="form-fields">
                    @for (field of config.inputSchema; track field.name) {
                      <div class="form-group">
                        <label [for]="field.name">
                          {{ field.label }}
                          @if (field.required) {
                            <span class="required">*</span>
                          }
                        </label>

                        @switch (field.type) {
                          @case ('select') {
                            <select
                              [id]="field.name"
                              [(ngModel)]="formInputs()[field.name]"
                              class="form-control">
                              @for (option of field.options; track option.value) {
                                <option [value]="option.value">
                                  {{ option.label }}
                                </option>
                              }
                            </select>
                          }
                          @case ('textarea') {
                            <textarea
                              [id]="field.name"
                              [(ngModel)]="formInputs()[field.name]"
                              [placeholder]="field.placeholder || ''"
                              class="form-control"
                              rows="4"></textarea>
                          }
                          @case ('number') {
                            <input
                              type="number"
                              [id]="field.name"
                              [(ngModel)]="formInputs()[field.name]"
                              [placeholder]="field.placeholder || ''"
                              class="form-control" />
                          }
                          @case ('date') {
                            <input
                              type="date"
                              [id]="field.name"
                              [(ngModel)]="formInputs()[field.name]"
                              class="form-control" />
                          }
                          @default {
                            <input
                              type="text"
                              [id]="field.name"
                              [(ngModel)]="formInputs()[field.name]"
                              [placeholder]="field.placeholder || ''"
                              class="form-control" />
                          }
                        }

                        @if (field.helpText) {
                          <small class="help-text">{{ field.helpText }}</small>
                        }
                      </div>
                    }
                  </div>
                } @else {
                  <!-- Textarea fallback for custom JSON -->
                  <label>Request Data (JSON):</label>
                  <textarea
                    [(ngModel)]="customInputData"
                    class="form-control code-input"
                    rows="6"
                    placeholder="Enter custom JSON request data..."></textarea>
                  <small class="help-text">
                    Enter valid JSON. The input will be validated before execution.
                  </small>
                }
              </div>
            }
          </div>
        }
      </section>

      <!-- Execution Section -->
      <section class="execution-section card">
        <h2>Execution</h2>

        <div class="button-group">
          <button
            (click)="executeRequest()"
            [disabled]="loading() || !selectedConfig()"
            class="btn btn-primary btn-large">
            @if (loading()) {
              <span class="spinner-small"></span>
              <span>Executing...</span>
            } @else {
              <span>Execute Request</span>
            }
          </button>

          <button (click)="resetForm()" class="btn btn-secondary">
            Reset Form
          </button>

          @if (rawResponse() || error()) {
            <button (click)="clearResults()" class="btn btn-secondary">
              Clear Results
            </button>
          }
        </div>

        @if (loading()) {
          <div class="status-message loading">
            <div class="spinner"></div>
            <span>Executing CCL script...</span>
          </div>
        }

        @if (error()) {
          <div class="status-message error">
            <h3>Error</h3>
            <pre>{{ error() }}</pre>
          </div>
        }
      </section>

      <!-- Response Section -->
      @if (rawResponse()) {
        <section class="response-section card">
          <h2>Response</h2>

          <!-- Response View Tabs -->
          <div class="tabs">
            <button
              class="tab-button"
              [class.active]="responseViewMode() === 'raw'"
              (click)="setResponseViewMode('raw')">
              Raw JSON
            </button>
            <button
              class="tab-button"
              [class.active]="responseViewMode() === 'formatted'"
              (click)="setResponseViewMode('formatted')">
              Formatted JSON
            </button>
            <button
              class="tab-button"
              [class.active]="responseViewMode() === 'parsed'"
              (click)="setResponseViewMode('parsed')">
              Parsed View
            </button>
          </div>

          <!-- Response Content -->
          <div class="tab-content">
            @switch (responseViewMode()) {
              @case ('raw') {
                <div class="response-content">
                  <pre class="code-block">{{ getRawJson(rawResponse()) }}</pre>
                </div>
              }
              @case ('formatted') {
                <div class="response-content">
                  <pre class="code-block formatted">{{ getFormattedJson(rawResponse()) }}</pre>
                </div>
              }
              @case ('parsed') {
                <div class="response-content parsed">
                  @if (parsedResponse(); as parsed) {
                    <!-- Summary Section -->
                    @if (parsed.summary && parsed.summary.length > 0) {
                      <div class="parsed-summary">
                        <h3>Summary</h3>
                        <dl class="summary-list">
                          @for (item of parsed.summary; track item.label) {
                            <div class="summary-item">
                              <dt>{{ item.label }}:</dt>
                              <dd>{{ item.value }}</dd>
                            </div>
                          }
                        </dl>
                      </div>
                    }

                    <!-- Tables Section -->
                    @if (parsed.tables && parsed.tables.length > 0) {
                      <div class="parsed-tables">
                        @for (table of parsed.tables; track table.title) {
                          <div class="table-container">
                            <h3>{{ table.title }}</h3>
                            <div class="table-wrapper">
                              <table class="data-table">
                                <thead>
                                  <tr>
                                    @for (header of table.headers; track header) {
                                      <th>{{ header }}</th>
                                    }
                                  </tr>
                                </thead>
                                <tbody>
                                  @for (row of table.rows; track $index) {
                                    <tr>
                                      @for (cell of row; track $index) {
                                        <td>{{ cell }}</td>
                                      }
                                    </tr>
                                  }
                                </tbody>
                              </table>
                            </div>
                          </div>
                        }
                      </div>
                    }

                    <!-- Metadata Section -->
                    @if (parsed.metadata && Object.keys(parsed.metadata).length > 0) {
                      <div class="parsed-metadata">
                        <h3>Metadata</h3>
                        @for (key of Object.keys(parsed.metadata); track key) {
                          <p>
                            <strong>{{ key }}:</strong> {{ parsed.metadata[key] }}
                          </p>
                        }
                      </div>
                    }
                  } @else {
                    <p class="info-message">No parsed data available</p>
                  }
                </div>
              }
            }
          </div>
        </section>
      }
    </div>

    <!-- Right Panel: Request History -->
    <div class="right-panel">
      <section class="history-section card">
        <div class="history-header">
          <h2>Request History</h2>
          @if (requestHistory().length > 0) {
            <button (click)="clearHistory()" class="btn btn-danger btn-small">
              Clear All
            </button>
          }
        </div>

        @if (requestHistory().length === 0) {
          <p class="info-message">No request history yet. Execute a request to see it here.</p>
        } @else {
          <div class="history-list">
            @for (item of requestHistory(); track item.id) {
              <div
                class="history-item"
                [class.selected]="selectedHistoryItem()?.id === item.id"
                [class.error]="item.status === 'error'"
                (click)="loadHistoryItem(item)">
                <div class="history-item-header">
                  <span class="history-item-type">{{ item.requestType }}</span>
                  <button
                    (click)="removeHistoryItem(item.id, $event)"
                    class="btn-icon btn-delete"
                    title="Delete">
                    \u2715
                  </button>
                </div>
                <div class="history-item-meta">
                  <span class="history-item-time">
                    {{ formatTimestamp(item.timestamp) }}
                  </span>
                  <span
                    class="history-item-status"
                    [class.success]="item.status === 'success'"
                    [class.error]="item.status === 'error'">
                    {{ item.status }}
                  </span>
                </div>
                @if (item.elapsedTimeSeconds !== undefined) {
                  <div class="history-item-elapsed">
                    {{ item.elapsedTimeSeconds }}s
                  </div>
                }
                @if (item.errorMessage) {
                  <div class="history-item-error">
                    {{ item.errorMessage }}
                  </div>
                }
              </div>
            }
          </div>
        }
      </section>
    </div>
  </div>
</div>
`, styles: ['/* src/app/ccl-test/ccl-test.scss */\n.ccl-test-container {\n  padding: 20px;\n  max-width: 100%;\n  margin: 0 auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.ccl-test-container .page-header {\n  margin-bottom: 30px;\n}\n.ccl-test-container .page-header .header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .ccl-test-container .page-header .header-content {\n    flex-direction: column;\n  }\n}\n.ccl-test-container .page-header h1 {\n  color: #333;\n  margin: 0 0 10px 0;\n  font-size: 28px;\n  font-weight: 600;\n}\n.ccl-test-container .page-header .page-description {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.ccl-test-container .page-header .page-description code {\n  background-color: #f5f5f5;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n  color: #d73a49;\n  font-size: 13px;\n}\n.ccl-test-container .page-header .mode-toggle {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-end;\n}\n.ccl-test-container .page-header .mode-toggle .toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ccl-test-container .page-header .mode-toggle .toggle-checkbox {\n  position: relative;\n  width: 50px;\n  height: 24px;\n  appearance: none;\n  background: #ccc;\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.ccl-test-container .page-header .mode-toggle .toggle-checkbox:checked {\n  background: #f57c00;\n}\n.ccl-test-container .page-header .mode-toggle .toggle-checkbox:not(:checked) {\n  background: #4caf50;\n}\n.ccl-test-container .page-header .mode-toggle .toggle-checkbox::before {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.3s;\n}\n.ccl-test-container .page-header .mode-toggle .toggle-checkbox:checked::before {\n  transform: translateX(26px);\n}\n.ccl-test-container .page-header .mode-toggle .toggle-text {\n  font-size: 14px;\n  font-weight: 500;\n}\n.ccl-test-container .page-header .mode-toggle .mode-indicator {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 13px;\n}\n.ccl-test-container .page-header .mode-toggle .mode-indicator.online {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.ccl-test-container .page-header .mode-toggle .mode-indicator.offline {\n  background-color: #fff3e0;\n  color: #e65100;\n}\n.ccl-test-container .page-header .mode-toggle .mode-hint {\n  color: #666;\n  font-size: 12px;\n  font-style: italic;\n}\n.ccl-test-container .main-layout {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 20px;\n}\n@media (max-width: 1200px) {\n  .ccl-test-container .main-layout {\n    grid-template-columns: 1fr;\n  }\n  .ccl-test-container .main-layout .right-panel {\n    order: -1;\n  }\n}\n.ccl-test-container .left-panel,\n.ccl-test-container .right-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.ccl-test-container .card {\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.ccl-test-container .card h2 {\n  color: #333;\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.ccl-test-container .card h3 {\n  color: #555;\n  margin: 20px 0 10px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.ccl-test-container .card h3:first-child {\n  margin-top: 0;\n}\n.ccl-test-container .form-group {\n  margin-bottom: 15px;\n}\n.ccl-test-container .form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #555;\n  font-size: 14px;\n}\n.ccl-test-container .form-group label .required {\n  color: #d73a49;\n  margin-left: 3px;\n}\n.ccl-test-container .form-group .form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.ccl-test-container .form-group .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.ccl-test-container .form-group .form-control.code-input {\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n}\n.ccl-test-container .form-group .help-text {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.ccl-test-container .description-box {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  padding: 12px;\n  margin-bottom: 20px;\n}\n.ccl-test-container .description-box strong {\n  color: #495057;\n  font-size: 13px;\n}\n.ccl-test-container .description-box p {\n  margin: 6px 0 0 0;\n  color: #666;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.ccl-test-container .tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 0;\n  border-bottom: 2px solid #dee2e6;\n}\n.ccl-test-container .tab-button {\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s ease;\n}\n.ccl-test-container .tab-button:hover {\n  color: #0078d4;\n  background-color: rgba(0, 120, 212, 0.05);\n}\n.ccl-test-container .tab-button.active {\n  color: #0078d4;\n  border-bottom-color: #0078d4;\n}\n.ccl-test-container .tab-content {\n  padding: 20px 0 0 0;\n}\n.ccl-test-container .info-message {\n  padding: 12px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 4px;\n  color: #0056b3;\n  font-size: 13px;\n  margin: 0;\n}\n.ccl-test-container .btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.ccl-test-container .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ccl-test-container .btn.btn-primary {\n  background-color: #0078d4;\n  color: white;\n}\n.ccl-test-container .btn.btn-primary:hover:not(:disabled) {\n  background-color: #005a9e;\n}\n.ccl-test-container .btn.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.ccl-test-container .btn.btn-secondary:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.ccl-test-container .btn.btn-danger {\n  background-color: #dc3545;\n  color: white;\n}\n.ccl-test-container .btn.btn-danger:hover:not(:disabled) {\n  background-color: #c82333;\n}\n.ccl-test-container .btn.btn-large {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n.ccl-test-container .btn.btn-small {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ccl-test-container .btn.btn-icon {\n  padding: 4px 8px;\n  background: transparent;\n  color: #6c757d;\n  border: none;\n}\n.ccl-test-container .btn.btn-icon:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: #333;\n}\n.ccl-test-container .btn.btn-icon.btn-delete {\n  color: #dc3545;\n}\n.ccl-test-container .btn.btn-icon.btn-delete:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.ccl-test-container .button-group {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ccl-test-container .spinner {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #b3d9ff;\n  border-top-color: #0056b3;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.ccl-test-container .spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.ccl-test-container .status-message {\n  padding: 15px;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n.ccl-test-container .status-message.loading {\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  color: #0056b3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ccl-test-container .status-message.error {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n.ccl-test-container .status-message.error h3 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: #721c24;\n}\n.ccl-test-container .status-message.error pre {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n}\n.ccl-test-container .response-content {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 0;\n  max-height: 600px;\n  overflow: auto;\n}\n.ccl-test-container .response-content .code-block {\n  margin: 0;\n  padding: 15px;\n  font-family: "Courier New", monospace;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #333;\n  overflow-x: auto;\n}\n.ccl-test-container .response-content .code-block.formatted {\n  white-space: pre;\n}\n.ccl-test-container .response-content.parsed {\n  padding: 20px;\n  max-height: none;\n  overflow: visible;\n}\n.ccl-test-container .parsed-summary {\n  margin-bottom: 30px;\n}\n.ccl-test-container .parsed-summary .summary-list {\n  margin: 0;\n  display: grid;\n  gap: 12px;\n}\n.ccl-test-container .parsed-summary .summary-item {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9ecef;\n}\n.ccl-test-container .parsed-summary .summary-item:last-child {\n  border-bottom: none;\n}\n.ccl-test-container .parsed-summary .summary-item dt {\n  font-weight: 600;\n  color: #555;\n  font-size: 13px;\n}\n.ccl-test-container .parsed-summary .summary-item dd {\n  margin: 0;\n  color: #333;\n  font-size: 13px;\n}\n.ccl-test-container .parsed-tables {\n  margin-bottom: 20px;\n}\n.ccl-test-container .parsed-tables .table-container {\n  margin-bottom: 30px;\n}\n.ccl-test-container .parsed-tables .table-container:last-child {\n  margin-bottom: 0;\n}\n.ccl-test-container .parsed-tables .table-wrapper {\n  overflow-x: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n}\n.ccl-test-container .parsed-tables .data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ccl-test-container .parsed-tables .data-table thead {\n  background-color: #f8f9fa;\n}\n.ccl-test-container .parsed-tables .data-table thead th {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #555;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.ccl-test-container .parsed-tables .data-table tbody tr {\n  border-bottom: 1px solid #dee2e6;\n}\n.ccl-test-container .parsed-tables .data-table tbody tr:last-child {\n  border-bottom: none;\n}\n.ccl-test-container .parsed-tables .data-table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.ccl-test-container .parsed-tables .data-table tbody td {\n  padding: 8px 12px;\n  color: #333;\n}\n.ccl-test-container .parsed-metadata {\n  padding-top: 20px;\n  border-top: 2px solid #dee2e6;\n}\n.ccl-test-container .parsed-metadata p {\n  margin: 8px 0;\n  font-size: 13px;\n  color: #555;\n}\n.ccl-test-container .parsed-metadata p strong {\n  color: #333;\n}\n.ccl-test-container .history-section .history-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.ccl-test-container .history-section .history-header h2 {\n  margin: 0;\n}\n.ccl-test-container .history-section .history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.ccl-test-container .history-section .history-item {\n  padding: 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background-color: #fff;\n}\n.ccl-test-container .history-section .history-item:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.ccl-test-container .history-section .history-item.selected {\n  background-color: #e7f3ff;\n  border-color: #0078d4;\n}\n.ccl-test-container .history-section .history-item.error {\n  border-left: 3px solid #dc3545;\n}\n.ccl-test-container .history-section .history-item .history-item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.ccl-test-container .history-section .history-item .history-item-type {\n  font-weight: 600;\n  color: #333;\n  font-size: 13px;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ccl-test-container .history-section .history-item .history-item-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.ccl-test-container .history-section .history-item .history-item-time {\n  flex: 1;\n}\n.ccl-test-container .history-section .history-item .history-item-status {\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.ccl-test-container .history-section .history-item .history-item-status.success {\n  background-color: #d4edda;\n  color: #155724;\n}\n.ccl-test-container .history-section .history-item .history-item-status.error {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.ccl-test-container .history-section .history-item .history-item-elapsed {\n  margin-top: 4px;\n  font-size: 11px;\n  color: #6c757d;\n}\n.ccl-test-container .history-section .history-item .history-item-error {\n  margin-top: 6px;\n  padding: 6px;\n  background-color: #f8d7da;\n  border-radius: 3px;\n  font-size: 11px;\n  color: #721c24;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n:root {\n  --primary-color: #0078d4;\n  --secondary-color: #6c757d;\n  --success-color: #28a745;\n  --danger-color: #dc3545;\n  --warning-color: #ffc107;\n  --info-color: #17a2b8;\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CclTest, { className: "CclTest", filePath: "src/app/ccl-test/ccl-test.ts", lineNumber: 35 });
})();
export {
  CclTest
};
