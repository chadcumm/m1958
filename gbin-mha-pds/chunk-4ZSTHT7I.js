import {
  ActivatedRoute
} from "./chunk-PULPMUCJ.js";
import {
  CclServiceWrapperService
} from "./chunk-AVL52C75.js";
import {
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-AY4AZLFK.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OFQI67IQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-I7D2VZMI.js";

// src/app/logs/models/log.model.ts
var DEFAULT_FILTERS = {
  log_type: "",
  status: "",
  start_date: "",
  end_date: "",
  related_script: "",
  days_back: 7,
  search_field: "",
  search_value: "",
  page: 1,
  page_size: 50
};
var SEARCH_FIELD_OPTIONS = [
  { value: "", label: "None" },
  { value: "PERSON_ID", label: "Person ID" },
  { value: "EPISODE_ID", label: "Episode ID" },
  { value: "BATCH_ID", label: "Batch ID" }
];
var LOG_TYPE_OPTIONS = [
  { value: "", label: "All Types" },
  { value: "MANAGER", label: "Manager" },
  { value: "DATA_EXTRACTION", label: "Data Extraction" },
  { value: "TRANSMISSION", label: "Transmission" },
  { value: "MIRTH_CALLBACK", label: "Mirth Callback" },
  { value: "PROGRAM_LOG", label: "Program Log" }
];
var LOG_STATUS_OPTIONS = [
  { value: "", label: "All Statuses" },
  { value: "SUCCESS", label: "Success" },
  { value: "FAILED", label: "Failed" },
  { value: "ERROR", label: "Error" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "PARTIAL", label: "Partial" }
];

// src/app/logs/services/logs.service.ts
var LogsService = class _LogsService {
  cclService = inject(CclServiceWrapperService);
  // State signals
  _logs = signal([], ...ngDevMode ? [{ debugName: "_logs" }] : []);
  _totalCount = signal(0, ...ngDevMode ? [{ debugName: "_totalCount" }] : []);
  _currentPage = signal(1, ...ngDevMode ? [{ debugName: "_currentPage" }] : []);
  _pageSize = signal(50, ...ngDevMode ? [{ debugName: "_pageSize" }] : []);
  _filters = signal(__spreadValues({}, DEFAULT_FILTERS), ...ngDevMode ? [{ debugName: "_filters" }] : []);
  _loadingLogs = signal(false, ...ngDevMode ? [{ debugName: "_loadingLogs" }] : []);
  _loadingDetail = signal(false, ...ngDevMode ? [{ debugName: "_loadingDetail" }] : []);
  _loadingText = signal(false, ...ngDevMode ? [{ debugName: "_loadingText" }] : []);
  _loadingProgramLog = signal(false, ...ngDevMode ? [{ debugName: "_loadingProgramLog" }] : []);
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : []);
  _selectedLog = signal(null, ...ngDevMode ? [{ debugName: "_selectedLog" }] : []);
  _selectedLogText = signal(null, ...ngDevMode ? [{ debugName: "_selectedLogText" }] : []);
  _selectedProgramLog = signal(null, ...ngDevMode ? [{ debugName: "_selectedProgramLog" }] : []);
  // Public readonly accessors
  logs = this._logs.asReadonly();
  totalCount = this._totalCount.asReadonly();
  currentPage = this._currentPage.asReadonly();
  pageSize = this._pageSize.asReadonly();
  filters = this._filters.asReadonly();
  loading = this._loadingLogs.asReadonly();
  loadingDetail = this._loadingDetail.asReadonly();
  loadingText = this._loadingText.asReadonly();
  loadingProgramLog = this._loadingProgramLog.asReadonly();
  error = this._error.asReadonly();
  selectedLog = this._selectedLog.asReadonly();
  selectedLogText = this._selectedLogText.asReadonly();
  selectedProgramLog = this._selectedProgramLog.asReadonly();
  // Computed values
  totalPages = computed(() => Math.ceil(this._totalCount() / this._pageSize()) || 1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  hasNextPage = computed(() => this._currentPage() < this.totalPages(), ...ngDevMode ? [{ debugName: "hasNextPage" }] : []);
  hasPrevPage = computed(() => this._currentPage() > 1, ...ngDevMode ? [{ debugName: "hasPrevPage" }] : []);
  /**
   * Load logs with optional filter updates
   */
  loadLogs(filters) {
    this._loadingLogs.set(true);
    this._error.set(null);
    if (filters) {
      this.updateFilters(filters);
    }
    const currentFilters = this._filters();
    const requestData = JSON.stringify({
      log_filter_params: __spreadProps(__spreadValues({}, currentFilters), {
        page: this._currentPage(),
        page_size: this._pageSize()
      })
    });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getLogs",
          parameters: {
            requestType: "getLogs",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getLogs");
        if (response) {
          const logs = response.logs || response.LOGS || [];
          const totalCount = response.total_count ?? response.TOTAL_COUNT ?? 0;
          const page = response.page ?? response.PAGE ?? 1;
          const pageSize = response.page_size ?? response.PAGE_SIZE ?? 50;
          const normalizedLogs = logs.map((log) => this.normalizeLogEntry(log));
          this._logs.set(normalizedLogs);
          this._totalCount.set(totalCount);
          this._currentPage.set(page);
          this._pageSize.set(pageSize);
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to parse logs response");
      }
      this._loadingLogs.set(false);
    });
  }
  /**
   * Load detailed information for a single log
   */
  loadLogDetail(logId) {
    this._loadingDetail.set(true);
    this._error.set(null);
    const requestData = JSON.stringify({ log_detail_params: { log_id: logId } });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getLogDetail",
          parameters: {
            requestType: "getLogDetail",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getLogDetail");
        const foundInd = response?.found_ind ?? response?.FOUND_IND ?? 0;
        if (response && foundInd) {
          this._selectedLog.set(this.normalizeLogDetailResponse(response));
        } else {
          this._error.set("Log not found");
          this._selectedLog.set(null);
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to load log detail");
      }
      this._loadingDetail.set(false);
    });
  }
  /**
   * Load JSON payload text for a log
   */
  loadLogText(logId) {
    this._loadingText.set(true);
    this._error.set(null);
    const requestData = JSON.stringify({ log_text_params: { log_id: logId } });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getLogText",
          parameters: {
            requestType: "getLogText",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getLogText");
        const foundInd = response?.found_ind ?? response?.FOUND_IND ?? 0;
        if (response && foundInd) {
          this._selectedLogText.set(this.normalizeLogTextResponse(response));
        } else {
          this._selectedLogText.set(null);
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to load log text");
      }
      this._loadingText.set(false);
    });
  }
  /**
   * Update filter values
   */
  updateFilters(filters) {
    this._filters.update((current) => __spreadValues(__spreadValues({}, current), filters));
  }
  /**
   * Reset filters to defaults
   */
  resetFilters() {
    this._filters.set(__spreadValues({}, DEFAULT_FILTERS));
    this._currentPage.set(1);
  }
  /**
   * Navigate to next page
   */
  nextPage() {
    if (this.hasNextPage()) {
      this._currentPage.update((p) => p + 1);
      this.loadLogs();
    }
  }
  /**
   * Navigate to previous page
   */
  prevPage() {
    if (this.hasPrevPage()) {
      this._currentPage.update((p) => p - 1);
      this.loadLogs();
    }
  }
  /**
   * Navigate to specific page
   */
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this._currentPage.set(page);
      this.loadLogs();
    }
  }
  /**
   * Load program log content for a parent log
   */
  loadProgramLog(logId) {
    this._loadingProgramLog.set(true);
    this._error.set(null);
    const requestData = JSON.stringify({ program_log_params: { log_id: logId } });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getProgramLog",
          parameters: {
            requestType: "getProgramLog",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getProgramLog");
        const foundInd = response?.found_ind ?? response?.FOUND_IND ?? 0;
        if (response && foundInd) {
          this._selectedProgramLog.set(this.normalizeProgramLogResponse(response));
        } else {
          this._selectedProgramLog.set(null);
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to load program log");
      }
      this._loadingProgramLog.set(false);
    });
  }
  /**
   * Clear selected log and text
   */
  clearSelectedLog() {
    this._selectedLog.set(null);
    this._selectedLogText.set(null);
    this._selectedProgramLog.set(null);
  }
  /**
   * Normalize log entry from CCL uppercase to TypeScript lowercase property names
   */
  normalizeLogEntry(log) {
    return {
      log_id: log.log_id ?? log.LOG_ID,
      log_type: log.log_type ?? log.LOG_TYPE,
      title: log.title ?? log.TITLE ?? "",
      summary: log.summary ?? log.SUMMARY ?? "",
      related_script: log.related_script ?? log.RELATED_SCRIPT ?? "",
      function_name: log.function_name ?? log.FUNCTION_NAME ?? "",
      start_dt_tm: log.start_dt_tm ?? log.START_DT_TM ?? "",
      start_dt_tm_formatted: log.start_dt_tm_formatted ?? log.START_DT_TM_FORMATTED ?? "",
      stop_dt_tm: log.stop_dt_tm ?? log.STOP_DT_TM ?? "",
      stop_dt_tm_formatted: log.stop_dt_tm_formatted ?? log.STOP_DT_TM_FORMATTED ?? "",
      duration_seconds: log.duration_seconds ?? log.DURATION_SECONDS ?? 0,
      status: log.status ?? log.STATUS,
      person_id: log.person_id ?? log.PERSON_ID ?? 0,
      encntr_id: log.encntr_id ?? log.ENCNTR_ID ?? 0,
      episode_id: log.episode_id ?? log.EPISODE_ID ?? 0,
      service_id: log.service_id ?? log.SERVICE_ID ?? 0,
      service_event_id: log.service_event_id ?? log.SERVICE_EVENT_ID ?? "",
      batch_id: log.batch_id ?? log.BATCH_ID ?? "",
      has_payload: log.has_payload ?? log.HAS_PAYLOAD ?? 0,
      record_cnt: log.record_cnt ?? log.RECORD_CNT ?? 0,
      error_cnt: log.error_cnt ?? log.ERROR_CNT ?? 0,
      error_message: log.error_message ?? log.ERROR_MESSAGE ?? "",
      parent_log_id: log.parent_log_id ?? log.PARENT_LOG_ID ?? 0,
      patient_name: log.patient_name ?? log.PATIENT_NAME ?? "",
      patient_mrn: log.patient_mrn ?? log.PATIENT_MRN ?? "",
      program_code: log.program_code ?? log.PROGRAM_CODE ?? "",
      program_name: log.program_name ?? log.PROGRAM_NAME ?? "",
      ep_submission_status: log.ep_submission_status ?? log.EP_SUBMISSION_STATUS ?? ""
    };
  }
  /**
   * Normalize log detail response from CCL uppercase to TypeScript lowercase
   */
  normalizeLogDetailResponse(response) {
    const log = response.log ?? response.LOG;
    const childLogs = response.child_logs ?? response.CHILD_LOGS ?? [];
    return {
      found_ind: response.found_ind ?? response.FOUND_IND ?? 0,
      log: __spreadProps(__spreadValues({}, this.normalizeLogEntry(log)), {
        long_text_id: log.long_text_id ?? log.LONG_TEXT_ID ?? 0,
        duration_formatted: log.duration_formatted ?? log.DURATION_FORMATTED ?? "",
        active_ind: log.active_ind ?? log.ACTIVE_IND ?? 1,
        create_dt_tm: log.create_dt_tm ?? log.CREATE_DT_TM ?? "",
        create_dt_tm_formatted: log.create_dt_tm_formatted ?? log.CREATE_DT_TM_FORMATTED ?? "",
        create_prsnl_id: log.create_prsnl_id ?? log.CREATE_PRSNL_ID ?? 0,
        create_prsnl_name: log.create_prsnl_name ?? log.CREATE_PRSNL_NAME ?? "",
        updt_dt_tm: log.updt_dt_tm ?? log.UPDT_DT_TM ?? "",
        updt_dt_tm_formatted: log.updt_dt_tm_formatted ?? log.UPDT_DT_TM_FORMATTED ?? "",
        updt_prsnl_id: log.updt_prsnl_id ?? log.UPDT_PRSNL_ID ?? 0,
        updt_prsnl_name: log.updt_prsnl_name ?? log.UPDT_PRSNL_NAME ?? "",
        updt_cnt: log.updt_cnt ?? log.UPDT_CNT ?? 0
      }),
      child_log_cnt: response.child_log_cnt ?? response.CHILD_LOG_CNT ?? 0,
      child_logs: childLogs.map((child) => ({
        log_id: child.log_id ?? child.LOG_ID,
        log_type: child.log_type ?? child.LOG_TYPE,
        title: child.title ?? child.TITLE ?? "",
        status: child.status ?? child.STATUS,
        start_dt_tm_formatted: child.start_dt_tm_formatted ?? child.START_DT_TM_FORMATTED ?? ""
      }))
    };
  }
  /**
   * Normalize log text response from CCL uppercase to TypeScript lowercase
   */
  normalizeLogTextResponse(response) {
    return {
      found_ind: response.found_ind ?? response.FOUND_IND ?? 0,
      log_id: response.log_id ?? response.LOG_ID ?? 0,
      long_text_id: response.long_text_id ?? response.LONG_TEXT_ID ?? 0,
      text_length: response.text_length ?? response.TEXT_LENGTH ?? 0,
      text_content: response.text_content ?? response.TEXT_CONTENT ?? "",
      content_type: response.content_type ?? response.CONTENT_TYPE ?? "",
      is_json: response.is_json ?? response.IS_JSON ?? 0
    };
  }
  /**
   * Normalize program log response from CCL uppercase to TypeScript lowercase
   */
  normalizeProgramLogResponse(response) {
    return {
      found_ind: response.found_ind ?? response.FOUND_IND ?? 0,
      parent_log_id: response.parent_log_id ?? response.PARENT_LOG_ID ?? 0,
      program_log_id: response.program_log_id ?? response.PROGRAM_LOG_ID ?? 0,
      program_log_text: response.program_log_text ?? response.PROGRAM_LOG_TEXT ?? "",
      text_length: response.text_length ?? response.TEXT_LENGTH ?? 0,
      created_dt_tm: response.created_dt_tm ?? response.CREATED_DT_TM ?? "",
      created_dt_tm_formatted: response.created_dt_tm_formatted ?? response.CREATED_DT_TM_FORMATTED ?? ""
    };
  }
  static \u0275fac = function LogsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LogsService, factory: _LogsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/logs/components/log-filters.ts
var _forTrack0 = ($index, $item) => $item.value;
function LogFiltersComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.label);
  }
}
function LogFiltersComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.label);
  }
}
function LogFiltersComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
var LogFiltersComponent = class _LogFiltersComponent {
  logsService = inject(LogsService);
  route = inject(ActivatedRoute);
  // Filter options
  logTypeOptions = LOG_TYPE_OPTIONS;
  statusOptions = LOG_STATUS_OPTIONS;
  searchFieldOptions = SEARCH_FIELD_OPTIONS;
  // Current filter values (bound to form)
  selectedLogType = "";
  selectedStatus = "";
  startDate = "";
  endDate = "";
  relatedScript = "";
  daysBack = 7;
  searchField = "";
  searchValue = "";
  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    if (params["search_field"] && params["search_value"]) {
      this.searchField = params["search_field"];
      this.searchValue = params["search_value"];
      this.daysBack = 30;
    }
  }
  onApplyFilters() {
    const filters = {
      log_type: this.selectedLogType,
      status: this.selectedStatus,
      start_date: this.startDate,
      end_date: this.endDate,
      related_script: this.relatedScript,
      days_back: this.daysBack,
      search_field: this.searchField,
      search_value: this.searchField ? this.searchValue.trim() : "",
      page: 1,
      page_size: 50
    };
    this.logsService.loadLogs(filters);
  }
  onResetFilters() {
    this.selectedLogType = "";
    this.selectedStatus = "";
    this.startDate = "";
    this.endDate = "";
    this.relatedScript = "";
    this.daysBack = 7;
    this.searchField = "";
    this.searchValue = "";
    this.logsService.resetFilters();
    this.logsService.loadLogs();
  }
  static \u0275fac = function LogFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogFiltersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogFiltersComponent, selectors: [["app-log-filters"]], decls: 44, vars: 9, consts: [[1, "log-filters"], [1, "filter-row"], [1, "filter-group"], ["for", "logType"], ["id", "logType", "name", "logType", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "status"], ["id", "status", "name", "status", 3, "ngModelChange", "ngModel"], ["for", "daysBack"], ["type", "number", "id", "daysBack", "name", "daysBack", "min", "1", "max", "365", 3, "ngModelChange", "ngModel"], ["for", "startDate"], ["type", "date", "id", "startDate", "name", "startDate", 3, "ngModelChange", "ngModel"], ["for", "endDate"], ["type", "date", "id", "endDate", "name", "endDate", 3, "ngModelChange", "ngModel"], ["for", "relatedScript"], ["type", "text", "id", "relatedScript", "name", "relatedScript", "placeholder", "Script name contains...", 3, "ngModelChange", "ngModel"], [1, "filter-group", "search-by-group"], ["for", "searchField"], [1, "search-by-row"], ["id", "searchField", "name", "searchField", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "searchValue", "name", "searchValue", "placeholder", "Enter ID...", 3, "ngModelChange", "ngModel", "disabled"], [1, "filter-actions"], ["type", "button", 1, "btn-primary", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "click"]], template: function LogFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "Log Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedLogType, $event) || (ctx.selectedLogType = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(6, LogFiltersComponent_For_7_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 2)(9, "label", 6);
      \u0275\u0275text(10, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(12, LogFiltersComponent_For_13_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 2)(15, "label", 8);
      \u0275\u0275text(16, "Days Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.daysBack, $event) || (ctx.daysBack = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 1)(19, "div", 2)(20, "label", 10);
      \u0275\u0275text(21, "Start Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 2)(24, "label", 12);
      \u0275\u0275text(25, "End Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 2)(28, "label", 14);
      \u0275\u0275text(29, "Related Script");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.relatedScript, $event) || (ctx.relatedScript = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 16)(32, "label", 17);
      \u0275\u0275text(33, "Search By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 18)(35, "select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_select_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchField, $event) || (ctx.searchField = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(36, LogFiltersComponent_For_37_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function LogFiltersComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 21)(40, "button", 22);
      \u0275\u0275listener("click", function LogFiltersComponent_Template_button_click_40_listener() {
        return ctx.onApplyFilters();
      });
      \u0275\u0275text(41, " Apply Filters ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 23);
      \u0275\u0275listener("click", function LogFiltersComponent_Template_button_click_42_listener() {
        return ctx.onResetFilters();
      });
      \u0275\u0275text(43, " Reset ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedLogType);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.logTypeOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.daysBack);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.relatedScript);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchField);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.searchFieldOptions);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchValue);
      \u0275\u0275property("disabled", !ctx.searchField);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.log-filters[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.filter-row[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 150px;\n  flex: 1;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n  color: #495057;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.filter-group.search-by-group[_ngcontent-%COMP%]   .search-by-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.filter-group.search-by-group[_ngcontent-%COMP%]   .search-by-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 120px;\n  flex: 0 0 auto;\n}\n.filter-group.search-by-group[_ngcontent-%COMP%]   .search-by-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100px;\n}\n.filter-group.search-by-group[_ngcontent-%COMP%]   .search-by-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: #e9ecef;\n  cursor: not-allowed;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background: #1a365d;\n  color: white;\n  border: none;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2a4a7f;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #ced4da;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogFiltersComponent, [{
    type: Component,
    args: [{ selector: "app-log-filters", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="log-filters">\n  <div class="filter-row">\n    <div class="filter-group">\n      <label for="logType">Log Type</label>\n      <select id="logType" [(ngModel)]="selectedLogType" name="logType">\n        @for (option of logTypeOptions; track option.value) {\n          <option [value]="option.value">{{ option.label }}</option>\n        }\n      </select>\n    </div>\n\n    <div class="filter-group">\n      <label for="status">Status</label>\n      <select id="status" [(ngModel)]="selectedStatus" name="status">\n        @for (option of statusOptions; track option.value) {\n          <option [value]="option.value">{{ option.label }}</option>\n        }\n      </select>\n    </div>\n\n    <div class="filter-group">\n      <label for="daysBack">Days Back</label>\n      <input\n        type="number"\n        id="daysBack"\n        [(ngModel)]="daysBack"\n        name="daysBack"\n        min="1"\n        max="365"\n      />\n    </div>\n  </div>\n\n  <div class="filter-row">\n    <div class="filter-group">\n      <label for="startDate">Start Date</label>\n      <input\n        type="date"\n        id="startDate"\n        [(ngModel)]="startDate"\n        name="startDate"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label for="endDate">End Date</label>\n      <input\n        type="date"\n        id="endDate"\n        [(ngModel)]="endDate"\n        name="endDate"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label for="relatedScript">Related Script</label>\n      <input\n        type="text"\n        id="relatedScript"\n        [(ngModel)]="relatedScript"\n        name="relatedScript"\n        placeholder="Script name contains..."\n      />\n    </div>\n\n    <div class="filter-group search-by-group">\n      <label for="searchField">Search By</label>\n      <div class="search-by-row">\n        <select id="searchField" [(ngModel)]="searchField" name="searchField">\n          @for (option of searchFieldOptions; track option.value) {\n            <option [value]="option.value">{{ option.label }}</option>\n          }\n        </select>\n        <input\n          type="text"\n          id="searchValue"\n          [(ngModel)]="searchValue"\n          name="searchValue"\n          placeholder="Enter ID..."\n          [disabled]="!searchField"\n        />\n      </div>\n    </div>\n  </div>\n\n  <div class="filter-actions">\n    <button type="button" class="btn-primary" (click)="onApplyFilters()">\n      Apply Filters\n    </button>\n    <button type="button" class="btn-secondary" (click)="onResetFilters()">\n      Reset\n    </button>\n  </div>\n</div>\n', styles: ["/* src/app/logs/components/log-filters.scss */\n.log-filters {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.filter-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.filter-row:last-of-type {\n  margin-bottom: 0;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  min-width: 150px;\n  flex: 1;\n}\n.filter-group label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n  color: #495057;\n}\n.filter-group select,\n.filter-group input {\n  padding: 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.filter-group select:focus,\n.filter-group input:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group input[type=number] {\n  max-width: 100px;\n}\n.filter-group.search-by-group .search-by-row {\n  display: flex;\n  gap: 0.5rem;\n}\n.filter-group.search-by-group .search-by-row select {\n  min-width: 120px;\n  flex: 0 0 auto;\n}\n.filter-group.search-by-group .search-by-row input {\n  flex: 1;\n  min-width: 100px;\n}\n.filter-group.search-by-group .search-by-row input:disabled {\n  background: #e9ecef;\n  cursor: not-allowed;\n}\n.filter-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.filter-actions button {\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.filter-actions button.btn-primary {\n  background: #1a365d;\n  color: white;\n  border: none;\n}\n.filter-actions button.btn-primary:hover {\n  background: #2a4a7f;\n}\n.filter-actions button.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #ced4da;\n}\n.filter-actions button.btn-secondary:hover {\n  background: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .filter-group {\n    width: 100%;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogFiltersComponent, { className: "LogFiltersComponent", filePath: "src/app/logs/components/log-filters.ts", lineNumber: 18 });
})();

// src/app/logs/components/log-table.ts
function LogTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domElement(1, "div", 3);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading logs...");
    \u0275\u0275domElementEnd()();
  }
}
function LogTableComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275text(2, "!");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Validation Error ");
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const mirthInfo_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" HTTP ", mirthInfo_r4.httpStatus, " ");
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15)(1, "span", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, LogTableComponent_Conditional_3_For_24_Conditional_8_Conditional_4_Template, 1, 0)(5, LogTableComponent_Conditional_3_For_24_Conditional_8_Conditional_5_Template, 1, 1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const mirthInfo_r4 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getMirthStatusClass(mirthInfo_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getMirthStatusIcon(mirthInfo_r4));
    \u0275\u0275advance();
    \u0275\u0275conditional(mirthInfo_r4.isValidationError ? 4 : 5);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const log_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r3.summary);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 17);
  }
  if (rf & 2) {
    \u0275\u0275domProperty("innerHTML", ctx, \u0275\u0275sanitizeHtml);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const log_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r3.error_cnt);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 24);
    \u0275\u0275text(1, "-");
    \u0275\u0275domElementEnd();
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 26);
    \u0275\u0275text(1, "P");
    \u0275\u0275domElementEnd();
  }
}
function LogTableComponent_Conditional_3_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "tr", 10);
    \u0275\u0275domListener("click", function LogTableComponent_Conditional_3_For_24_Template_tr_click_1_listener() {
      const log_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectLog(log_r3));
    });
    \u0275\u0275domElementStart(2, "td", 11)(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "td", 13)(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, LogTableComponent_Conditional_3_For_24_Conditional_8_Template, 6, 4, "span", 15)(9, LogTableComponent_Conditional_3_For_24_Conditional_9_Template, 2, 1, "span", 16);
    \u0275\u0275conditionalCreate(10, LogTableComponent_Conditional_3_For_24_Conditional_10_Template, 1, 1, "span", 17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td")(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "td", 19);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "td", 20);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "td", 21);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "td", 22);
    \u0275\u0275conditionalCreate(21, LogTableComponent_Conditional_3_For_24_Conditional_21_Template, 2, 1, "span", 23)(22, LogTableComponent_Conditional_3_For_24_Conditional_22_Template, 2, 0, "span", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "td", 25);
    \u0275\u0275conditionalCreate(24, LogTableComponent_Conditional_3_For_24_Conditional_24_Template, 2, 0, "span", 26);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const log_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    const mirthInfo_r5 = \u0275\u0275storeLet(ctx_r0.getMirthCallbackInfo(log_r3));
    \u0275\u0275advance();
    \u0275\u0275classProp("mirth-callback-row", ctx_r0.isMirthCallback(log_r3));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("type-mirth", ctx_r0.isMirthCallback(log_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r3.log_type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isMirthCallback(log_r3) && mirthInfo_r5 ? 8 : log_r3.summary ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r0.getSubtitle(log_r3)) ? 10 : -1, tmp_17_0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(log_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r3.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r3.start_dt_tm_formatted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(log_r3.duration_seconds));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r3.record_cnt);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(log_r3.error_cnt > 0 ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(log_r3.has_payload ? 24 : -1);
  }
}
function LogTableComponent_Conditional_3_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, " No logs found matching the current filters ");
    \u0275\u0275domElementEnd()();
  }
}
function LogTableComponent_Conditional_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9)(1, "button", 30);
    \u0275\u0275domListener("click", function LogTableComponent_Conditional_3_Conditional_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPrevPage());
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 30);
    \u0275\u0275domListener("click", function LogTableComponent_Conditional_3_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNextPage());
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", !ctx_r0.hasPrevPage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r0.currentPage(), " of ", ctx_r0.totalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", !ctx_r0.hasNextPage());
  }
}
function LogTableComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "div", 6)(4, "table", 7)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Title");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th");
    \u0275\u0275text(14, "Start Time");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th");
    \u0275\u0275text(16, "Duration");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "th");
    \u0275\u0275text(18, "Records");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "th");
    \u0275\u0275text(20, "Errors");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(21, "th");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, LogTableComponent_Conditional_3_For_24_Template, 25, 17, "tr", 8, \u0275\u0275componentInstance().trackByLogId, true, LogTableComponent_Conditional_3_ForEmpty_25_Template, 3, 0, "tr");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(26, LogTableComponent_Conditional_3_Conditional_26_Template, 7, 4, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Showing ", ctx_r0.logs().length, " of ", ctx_r0.totalCount(), " logs");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.logs());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.totalPages() > 1 ? 26 : -1);
  }
}
var LogTableComponent = class _LogTableComponent {
  logsService = inject(LogsService);
  // Expose service signals to template
  logs = this.logsService.logs;
  loading = this.logsService.loading;
  error = this.logsService.error;
  totalCount = this.logsService.totalCount;
  currentPage = this.logsService.currentPage;
  totalPages = this.logsService.totalPages;
  hasNextPage = this.logsService.hasNextPage;
  hasPrevPage = this.logsService.hasPrevPage;
  // Output for row selection
  logSelected = output();
  onSelectLog(log) {
    this.logSelected.emit(log);
    this.logsService.loadLogDetail(log.log_id);
  }
  /**
   * Check if a log entry is a Mirth callback
   */
  isMirthCallback(log) {
    return log.log_type === "MIRTH_CALLBACK";
  }
  /**
   * Parse Mirth callback info from log summary
   * Expected formats:
   * - "Mirth callback: HTTP 201 -> ACCEPTED (Episode: EP-xxx, Updated: 3)"
   * - "Data Validation Error -> REJECTED (Episode: EP-xxx)" (Channel 02 validation errors)
   */
  getMirthCallbackInfo(log) {
    if (!this.isMirthCallback(log) || !log.summary) {
      return null;
    }
    const isValidationError = log.summary.includes("Data Validation Error");
    const httpMatch = log.summary.match(/HTTP\s+(\d+)/);
    const statusMatch = log.summary.match(/->\s+(\w+)/);
    const episodeMatch = log.summary.match(/Episode:\s+([^,)]+)/);
    const updatedMatch = log.summary.match(/Updated:\s+(\d+)/);
    return {
      httpStatus: httpMatch ? parseInt(httpMatch[1], 10) : 0,
      submissionStatus: statusMatch ? statusMatch[1] : "UNKNOWN",
      episodeId: episodeMatch ? episodeMatch[1].trim() : "",
      updatedCount: updatedMatch ? parseInt(updatedMatch[1], 10) : 0,
      isValidationError
    };
  }
  /**
   * Get CSS class for Mirth callback HTTP status
   */
  getMirthStatusClass(info) {
    if (!info)
      return "";
    if (info.isValidationError) {
      return "mirth-rejected";
    }
    if (info.httpStatus >= 200 && info.httpStatus < 300) {
      return "mirth-success";
    } else if (info.httpStatus >= 400 && info.httpStatus < 500) {
      return "mirth-rejected";
    } else if (info.httpStatus >= 500) {
      return "mirth-error";
    }
    return "mirth-unknown";
  }
  /**
   * Get icon for Mirth callback status
   */
  getMirthStatusIcon(info) {
    if (!info)
      return "?";
    if (info.isValidationError) {
      return "\u2717";
    }
    if (info.httpStatus >= 200 && info.httpStatus < 300) {
      return "\u2713";
    } else if (info.httpStatus >= 400) {
      return "\u2717";
    }
    return "?";
  }
  onNextPage() {
    this.logsService.nextPage();
  }
  onPrevPage() {
    this.logsService.prevPage();
  }
  getStatusClass(status) {
    switch (status) {
      case "SUCCESS":
        return "status-success";
      case "FAILED":
      case "ERROR":
        return "status-error";
      case "IN_PROGRESS":
        return "status-progress";
      case "PARTIAL":
        return "status-partial";
      default:
        return "";
    }
  }
  formatDuration(seconds) {
    if (!seconds || seconds === 0) {
      return "-";
    } else if (seconds < 60) {
      return `${seconds}s`;
    } else if (seconds < 3600) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}m ${secs}s`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const mins = Math.floor(seconds % 3600 / 60);
      return `${hours}h ${mins}m`;
    }
  }
  /**
   * Compose a smart subtitle from available log context fields.
   * Returns HTML string or null if no context is available.
   */
  getSubtitle(log) {
    const parts = [];
    if (log.patient_name) {
      let patientPart = `<strong>${log.patient_name}</strong>`;
      if (log.patient_mrn) {
        patientPart += ` (MRN: ${log.patient_mrn})`;
      }
      parts.push(patientPart);
    }
    const contextParts = [];
    if (log.episode_id) {
      contextParts.push(`EP-${log.episode_id}`);
    }
    if (log.service_event_id) {
      contextParts.push(log.service_event_id);
    } else if (log.service_id) {
      contextParts.push(`SRV-${log.service_id}`);
    }
    if (log.program_code) {
      contextParts.push(log.program_code);
    }
    if (log.ep_submission_status) {
      const cssClass = this.getSubmissionStatusClass(log.ep_submission_status);
      contextParts.push(`<span class="${cssClass}">${log.ep_submission_status}</span>`);
    }
    if (contextParts.length > 0) {
      parts.push(contextParts.join(" \xB7 "));
    }
    if (parts.length === 0 && log.log_type === "TRANSMISSION") {
      const batchParts = [];
      if (log.record_cnt > 0) {
        batchParts.push(`${log.record_cnt} episodes`);
      }
      if (log.batch_id) {
        batchParts.push(`Batch ${log.batch_id.substring(0, 13)}`);
      }
      if (batchParts.length > 0) {
        return batchParts.join(" \xB7 ");
      }
    }
    if (parts.length === 0)
      return null;
    return parts.join(" \u2014 ");
  }
  /**
   * Get CSS class for episode submission status color coding.
   */
  getSubmissionStatusClass(status) {
    switch (status?.toUpperCase()) {
      case "SUBMITTED":
      case "ACCEPTED":
        return "sub-success";
      case "ERROR":
      case "REJECTED":
      case "VALIDATION ERROR":
        return "sub-error";
      case "PENDING":
        return "sub-pending";
      default:
        return "";
    }
  }
  trackByLogId(index, log) {
    return log.log_id;
  }
  static \u0275fac = function LogTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogTableComponent, selectors: [["app-log-table"]], outputs: { logSelected: "logSelected" }, decls: 4, vars: 3, consts: [[1, "log-table-container"], [1, "loading-overlay"], [1, "error-message"], [1, "spinner"], [1, "error-icon"], [1, "table-info"], [1, "table-wrapper"], [1, "log-table"], [1, "log-row", 3, "mirth-callback-row"], [1, "pagination"], [1, "log-row", 3, "click"], [1, "log-type"], [1, "type-badge"], [1, "log-title"], [1, "title"], [1, "mirth-summary"], [1, "summary"], [1, "smart-subtitle", 3, "innerHTML"], [1, "status-badge"], [1, "log-time"], [1, "log-duration"], [1, "log-count"], [1, "log-errors"], [1, "error-count"], [1, "no-errors"], [1, "log-actions"], ["title", "Has payload", 1, "payload-indicator"], [1, "mirth-status-badge"], [1, "mirth-icon"], ["colspan", "8", 1, "no-data"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function LogTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, LogTableComponent_Conditional_1_Template, 4, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, LogTableComponent_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, LogTableComponent_Conditional_3_Template, 27, 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 3 : -1);
    }
  }, styles: ["\n\n.log-table-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.log-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.log-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.log-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.log-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.log-table[_ngcontent-%COMP%]   .log-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.log-table[_ngcontent-%COMP%]   .log-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.type-badge.type-mirth[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.log-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n}\n.log-title[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.log-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.log-duration[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.log-count[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.log-errors[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.log-errors[_ngcontent-%COMP%]   .error-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 24px;\n  padding: 0.125rem 0.375rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.log-errors[_ngcontent-%COMP%]   .no-errors[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.log-actions[_ngcontent-%COMP%]   .payload-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #1a365d;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  cursor: help;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.mirth-callback-row[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.mirth-callback-row[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff !important;\n}\n.mirth-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.mirth-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.mirth-status-badge[_ngcontent-%COMP%]   .mirth-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.mirth-status-badge.mirth-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.mirth-status-badge.mirth-rejected[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.mirth-status-badge.mirth-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.mirth-status-badge.mirth-unknown[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #546e7a;\n}\n.mirth-episode[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #6c757d;\n  font-family: monospace;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.smart-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  font-size: 12px;\n  color: #777;\n}\n.smart-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n}\n.smart-subtitle[_ngcontent-%COMP%]   .sub-error[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.smart-subtitle[_ngcontent-%COMP%]   .sub-success[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.smart-subtitle[_ngcontent-%COMP%]   .sub-pending[_ngcontent-%COMP%] {\n  color: #f57f17;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogTableComponent, [{
    type: Component,
    args: [{ selector: "app-log-table", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="log-table-container">\n  @if (loading()) {\n    <div class="loading-overlay">\n      <div class="spinner"></div>\n      <span>Loading logs...</span>\n    </div>\n  }\n\n  @if (error()) {\n    <div class="error-message">\n      <span class="error-icon">!</span>\n      <span>{{ error() }}</span>\n    </div>\n  }\n\n  @if (!loading() && !error()) {\n    <div class="table-info">\n      <span>Showing {{ logs().length }} of {{ totalCount() }} logs</span>\n    </div>\n\n    <div class="table-wrapper">\n      <table class="log-table">\n        <thead>\n          <tr>\n            <th>Type</th>\n            <th>Title</th>\n            <th>Status</th>\n            <th>Start Time</th>\n            <th>Duration</th>\n            <th>Records</th>\n            <th>Errors</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (log of logs(); track trackByLogId($index, log)) {\n            @let mirthInfo = getMirthCallbackInfo(log);\n            <tr (click)="onSelectLog(log)" class="log-row" [class.mirth-callback-row]="isMirthCallback(log)">\n              <td class="log-type">\n                <span class="type-badge" [class.type-mirth]="isMirthCallback(log)">{{ log.log_type }}</span>\n              </td>\n              <td class="log-title">\n                <span class="title">{{ log.title }}</span>\n                @if (isMirthCallback(log) && mirthInfo) {\n                  <span class="mirth-summary">\n                    <span class="mirth-status-badge" [class]="getMirthStatusClass(mirthInfo)">\n                      <span class="mirth-icon">{{ getMirthStatusIcon(mirthInfo) }}</span>\n                      @if (mirthInfo.isValidationError) {\n                        Validation Error\n                      } @else {\n                        HTTP {{ mirthInfo.httpStatus }}\n                      }\n                    </span>\n                  </span>\n                } @else if (log.summary) {\n                  <span class="summary">{{ log.summary }}</span>\n                }\n                @if (getSubtitle(log); as subtitle) {\n                  <span class="smart-subtitle" [innerHTML]="subtitle"></span>\n                }\n              </td>\n              <td>\n                <span class="status-badge" [class]="getStatusClass(log.status)">\n                  {{ log.status }}\n                </span>\n              </td>\n              <td class="log-time">{{ log.start_dt_tm_formatted }}</td>\n              <td class="log-duration">{{ formatDuration(log.duration_seconds) }}</td>\n              <td class="log-count">{{ log.record_cnt }}</td>\n              <td class="log-errors">\n                @if (log.error_cnt > 0) {\n                  <span class="error-count">{{ log.error_cnt }}</span>\n                } @else {\n                  <span class="no-errors">-</span>\n                }\n              </td>\n              <td class="log-actions">\n                @if (log.has_payload) {\n                  <span class="payload-indicator" title="Has payload">P</span>\n                }\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan="8" class="no-data">\n                No logs found matching the current filters\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n\n    @if (totalPages() > 1) {\n      <div class="pagination">\n        <button\n          class="page-btn"\n          [disabled]="!hasPrevPage()"\n          (click)="onPrevPage()"\n        >\n          Previous\n        </button>\n        <span class="page-info">\n          Page {{ currentPage() }} of {{ totalPages() }}\n        </span>\n        <button\n          class="page-btn"\n          [disabled]="!hasNextPage()"\n          (click)="onNextPage()"\n        >\n          Next\n        </button>\n      </div>\n    }\n  }\n</div>\n', styles: ["/* src/app/logs/components/log-table.scss */\n.log-table-container {\n  position: relative;\n}\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n}\n.error-message .error-icon {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.log-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.log-table th,\n.log-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.log-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.log-table .log-row {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.log-table .log-row:hover {\n  background: #f8f9fa;\n}\n.type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.type-badge.type-mirth {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.log-title .title {\n  display: block;\n  font-weight: 500;\n}\n.log-title .summary {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.log-time {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.log-duration {\n  font-family: monospace;\n}\n.log-count {\n  text-align: center;\n}\n.log-errors {\n  text-align: center;\n}\n.log-errors .error-count {\n  display: inline-block;\n  min-width: 24px;\n  padding: 0.125rem 0.375rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.log-errors .no-errors {\n  color: #adb5bd;\n}\n.log-actions .payload-indicator {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #1a365d;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  cursor: help;\n}\n.no-data {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.pagination .page-btn {\n  padding: 0.5rem 1rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pagination .page-btn:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.pagination .page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .page-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.mirth-callback-row {\n  background: #fafbff;\n}\n.mirth-callback-row:hover {\n  background: #f0f4ff !important;\n}\n.mirth-summary {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.mirth-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.mirth-status-badge .mirth-icon {\n  font-size: 0.75rem;\n}\n.mirth-status-badge.mirth-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.mirth-status-badge.mirth-rejected {\n  background: #fff3e0;\n  color: #e65100;\n}\n.mirth-status-badge.mirth-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.mirth-status-badge.mirth-unknown {\n  background: #eceff1;\n  color: #546e7a;\n}\n.mirth-episode {\n  font-size: 0.6875rem;\n  color: #6c757d;\n  font-family: monospace;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.smart-subtitle {\n  display: block;\n  margin-top: 3px;\n  font-size: 12px;\n  color: #777;\n}\n.smart-subtitle strong {\n  font-weight: 600;\n  color: #555;\n}\n.smart-subtitle .sub-error {\n  color: #c62828;\n}\n.smart-subtitle .sub-success {\n  color: #2e7d32;\n}\n.smart-subtitle .sub-pending {\n  color: #f57f17;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogTableComponent, { className: "LogTableComponent", filePath: "src/app/logs/components/log-table.ts", lineNumber: 21 });
})();

// src/app/logs/components/log-detail.ts
function LogDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 4);
    \u0275\u0275domElement(1, "polyline", 10)(2, "polyline", 11)(3, "line", 12)(4, "line", 13);
    \u0275\u0275domElementEnd();
  }
}
function LogDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 4);
    \u0275\u0275domElement(1, "polyline", 14)(2, "polyline", 15)(3, "line", 16)(4, "line", 13);
    \u0275\u0275domElementEnd();
  }
}
function LogDetailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domElement(1, "div", 17);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading log details...");
    \u0275\u0275domElementEnd()();
  }
}
function LogDetailComponent_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(logData_r1.summary);
  }
}
function LogDetailComponent_Conditional_12_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span", 27);
    \u0275\u0275text(2, "Error Message");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.error_message);
  }
}
function LogDetailComponent_Conditional_12_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Batch ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.batch_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_59_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Person ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.person_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_59_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Encounter ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.encntr_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_59_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Episode ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.episode_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_59_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Service ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.service_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 24)(1, "h5");
    \u0275\u0275text(2, "Related Records");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 25);
    \u0275\u0275conditionalCreate(4, LogDetailComponent_Conditional_12_Conditional_59_Conditional_4_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(5, LogDetailComponent_Conditional_12_Conditional_59_Conditional_5_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(6, LogDetailComponent_Conditional_12_Conditional_59_Conditional_6_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(7, LogDetailComponent_Conditional_12_Conditional_59_Conditional_7_Template, 5, 1, "div", 26);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(logData_r1.person_id ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.encntr_id ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.episode_id ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.service_id ? 7 : -1);
  }
}
function LogDetailComponent_Conditional_12_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "section", 32)(1, "h5");
    \u0275\u0275text(2, "Payload");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 36);
    \u0275\u0275text(4, "This log has a stored JSON payload.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 37);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_60_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onViewPayload());
    });
    \u0275\u0275text(6, " View Payload ");
    \u0275\u0275domElementEnd()();
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "p", 38);
    \u0275\u0275text(1, "View detailed console output from script execution.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 39);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_61_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onViewProgramLog());
    });
    \u0275\u0275text(3, " View Program Log ");
    \u0275\u0275domElementEnd();
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 40);
    \u0275\u0275domElement(1, "div", 41);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading program log...");
    \u0275\u0275domElementEnd()();
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 46);
    \u0275\u0275domElement(1, "polyline", 49);
    \u0275\u0275domElementEnd();
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 46);
    \u0275\u0275domElement(1, "rect", 50)(2, "path", 51);
    \u0275\u0275domElementEnd();
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 44)(4, "button", 45);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Template_button_click_4_listener() {
      const pLog_r6 = \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onCopyProgramLog(pLog_r6.program_log_text));
    });
    \u0275\u0275conditionalCreate(5, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Conditional_5_Template, 2, 0, ":svg:svg", 46)(6, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Conditional_6_Template, 3, 0, ":svg:svg", 46);
    \u0275\u0275domElementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "button", 47);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onCloseProgramLog());
    });
    \u0275\u0275domElementStart(10, "span", 6);
    \u0275\u0275text(11, "\xD7");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(12, "pre", 48);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const pLog_r6 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pLog_r6.created_dt_tm_formatted);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r2.copyLabel());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.copyLabel() === "Copied!" ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.copyLabel());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pLog_r6.program_log_text);
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "p", 52);
    \u0275\u0275text(1, "No program log available for this entry.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 53);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onCloseProgramLog());
    });
    \u0275\u0275text(3, "Close");
    \u0275\u0275domElementEnd();
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_0_Template, 4, 0, "div", 40)(1, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Template, 14, 5)(2, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_2_Template, 4, 0);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.loadingProgramLog() ? 0 : (tmp_4_0 = ctx_r2.programLog()) ? 1 : 2, tmp_4_0);
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 33)(1, "h5");
    \u0275\u0275text(2, "Program Execution Log");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, LogDetailComponent_Conditional_12_Conditional_61_Conditional_3_Template, 4, 0)(4, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Template, 3, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.showProgramLog() ? 3 : 4);
  }
}
function LogDetailComponent_Conditional_12_Conditional_62_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 56);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_62_For_5_Template_div_click_0_listener() {
      const child_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onViewChildLog(child_r9.log_id));
    });
    \u0275\u0275domElementStart(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r9.log_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r9.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(child_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r9.status, " ");
  }
}
function LogDetailComponent_Conditional_12_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 24)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 54);
    \u0275\u0275repeaterCreate(4, LogDetailComponent_Conditional_12_Conditional_62_For_5_Template, 7, 5, "div", 55, \u0275\u0275componentInstance().trackByLogId, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Related Logs (", ctx_r2.childLogs().length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.childLogs());
  }
}
function LogDetailComponent_Conditional_12_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Created By");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.create_prsnl_name);
  }
}
function LogDetailComponent_Conditional_12_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Last Updated");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 26)(6, "span", 27);
    \u0275\u0275text(7, "Updates");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.updt_dt_tm_formatted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(logData_r1.updt_cnt);
  }
}
function LogDetailComponent_Conditional_12_Conditional_79_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Person ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.person_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_79_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Encounter ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.encntr_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_79_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Episode ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.episode_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_79_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Service ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.service_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_79_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span", 27);
    \u0275\u0275text(2, "Batch ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.batch_id);
  }
}
function LogDetailComponent_Conditional_12_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h5");
    \u0275\u0275text(1, "Record References");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 25);
    \u0275\u0275conditionalCreate(3, LogDetailComponent_Conditional_12_Conditional_79_Conditional_3_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(4, LogDetailComponent_Conditional_12_Conditional_79_Conditional_4_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(5, LogDetailComponent_Conditional_12_Conditional_79_Conditional_5_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(6, LogDetailComponent_Conditional_12_Conditional_79_Conditional_6_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(7, LogDetailComponent_Conditional_12_Conditional_79_Conditional_7_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const logData_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(logData_r1.person_id ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.encntr_id ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.episode_id ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.service_id ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.batch_id ? 7 : -1);
  }
}
function LogDetailComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "section", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "h4", 22);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, LogDetailComponent_Conditional_12_Conditional_9_Template, 2, 1, "p", 23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "section", 24)(11, "h5");
    \u0275\u0275text(12, "Timing");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 25)(14, "div", 26)(15, "span", 27);
    \u0275\u0275text(16, "Start Time");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "div", 26)(20, "span", 27);
    \u0275\u0275text(21, "End Time");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span", 28);
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div", 26)(25, "span", 27);
    \u0275\u0275text(26, "Duration");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "span", 29);
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(29, "section", 24)(30, "h5");
    \u0275\u0275text(31, "Metrics");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "div", 25)(33, "div", 26)(34, "span", 27);
    \u0275\u0275text(35, "Records Processed");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "span", 28);
    \u0275\u0275text(37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(38, "div", 26)(39, "span", 27);
    \u0275\u0275text(40, "Errors");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "span", 28);
    \u0275\u0275text(42);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(43, LogDetailComponent_Conditional_12_Conditional_43_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "section", 24)(45, "h5");
    \u0275\u0275text(46, "Script Information");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "div", 25)(48, "div", 26)(49, "span", 27);
    \u0275\u0275text(50, "Related Script");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "span", 31);
    \u0275\u0275text(52);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(53, "div", 26)(54, "span", 27);
    \u0275\u0275text(55, "Function");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(56, "span", 31);
    \u0275\u0275text(57);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(58, LogDetailComponent_Conditional_12_Conditional_58_Template, 5, 1, "div", 26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(59, LogDetailComponent_Conditional_12_Conditional_59_Template, 8, 4, "section", 24);
    \u0275\u0275conditionalCreate(60, LogDetailComponent_Conditional_12_Conditional_60_Template, 7, 0, "section", 32);
    \u0275\u0275conditionalCreate(61, LogDetailComponent_Conditional_12_Conditional_61_Template, 5, 1, "section", 33);
    \u0275\u0275conditionalCreate(62, LogDetailComponent_Conditional_12_Conditional_62_Template, 6, 1, "section", 24);
    \u0275\u0275domElementStart(63, "section", 34)(64, "h5");
    \u0275\u0275text(65, "Audit Information");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(66, "div", 25)(67, "div", 26)(68, "span", 27);
    \u0275\u0275text(69, "Log ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "span", 31);
    \u0275\u0275text(71);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(72, "div", 26)(73, "span", 27);
    \u0275\u0275text(74, "Created");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(75, "span", 28);
    \u0275\u0275text(76);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(77, LogDetailComponent_Conditional_12_Conditional_77_Template, 5, 1, "div", 26);
    \u0275\u0275conditionalCreate(78, LogDetailComponent_Conditional_12_Conditional_78_Template, 10, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(79, LogDetailComponent_Conditional_12_Conditional_79_Template, 8, 5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const logData_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(logData_r1.log_type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(logData_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", logData_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(logData_r1.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.summary ? 9 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(logData_r1.start_dt_tm_formatted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(logData_r1.stop_dt_tm_formatted || "In Progress");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(logData_r1.duration_formatted || "-");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(logData_r1.record_cnt);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error-value", logData_r1.error_cnt > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", logData_r1.error_cnt, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.error_message ? 43 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(logData_r1.related_script || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(logData_r1.function_name || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.batch_id ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.person_id || logData_r1.encntr_id || logData_r1.episode_id || logData_r1.service_id ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasPayload() ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canHaveProgramLog() ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.childLogs().length > 0 ? 62 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(logData_r1.log_id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(logData_r1.create_dt_tm_formatted);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.create_prsnl_name ? 77 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.updt_cnt > 0 ? 78 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logData_r1.person_id || logData_r1.encntr_id || logData_r1.episode_id || logData_r1.service_id || logData_r1.batch_id ? 79 : -1);
  }
}
function LogDetailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2, "No log selected");
    \u0275\u0275domElementEnd()();
  }
}
var LogDetailComponent = class _LogDetailComponent {
  logsService = inject(LogsService);
  // Signals from service
  logDetail = this.logsService.selectedLog;
  logText = this.logsService.selectedLogText;
  programLog = this.logsService.selectedProgramLog;
  loading = this.logsService.loadingDetail;
  loadingProgramLog = this.logsService.loadingProgramLog;
  // Local state for program log visibility
  showProgramLog = signal(false, ...ngDevMode ? [{ debugName: "showProgramLog" }] : []);
  // Fullscreen mode
  isFullscreen = signal(false, ...ngDevMode ? [{ debugName: "isFullscreen" }] : []);
  // Copy button state
  copyLabel = signal("Copy", ...ngDevMode ? [{ debugName: "copyLabel" }] : []);
  // Outputs
  closed = output();
  viewPayload = output();
  // Computed values
  log = computed(() => this.logDetail()?.log, ...ngDevMode ? [{ debugName: "log" }] : []);
  childLogs = computed(() => this.logDetail()?.child_logs ?? [], ...ngDevMode ? [{ debugName: "childLogs" }] : []);
  hasPayload = computed(() => {
    const log = this.log();
    return log && log.long_text_id > 0;
  }, ...ngDevMode ? [{ debugName: "hasPayload" }] : []);
  // Check if this is a parent log type that can have program logs
  canHaveProgramLog = computed(() => {
    const log = this.log();
    if (!log)
      return false;
    const parentLogTypes = ["MANAGER", "DATA_EXTRACTION"];
    return parentLogTypes.includes(log.log_type);
  }, ...ngDevMode ? [{ debugName: "canHaveProgramLog" }] : []);
  onClose() {
    this.isFullscreen.set(false);
    this.closed.emit();
  }
  toggleFullscreen() {
    this.isFullscreen.update((v) => !v);
  }
  onViewPayload() {
    const log = this.log();
    if (log && log.log_id) {
      this.logsService.loadLogText(log.log_id);
      this.viewPayload.emit(log.log_id);
    }
  }
  onViewChildLog(childLogId) {
    this.logsService.loadLogDetail(childLogId);
  }
  onViewProgramLog() {
    const log = this.log();
    if (log && log.log_id) {
      this.logsService.loadProgramLog(log.log_id);
      this.showProgramLog.set(true);
    }
  }
  onCloseProgramLog() {
    this.showProgramLog.set(false);
  }
  onCopyProgramLog(text) {
    const trimmed = text.replace(/[^\S\n]+$/gm, "");
    navigator.clipboard.writeText(trimmed).then(() => {
      this.copyLabel.set("Copied!");
      setTimeout(() => this.copyLabel.set("Copy"), 2e3);
    });
  }
  getStatusClass(status) {
    switch (status) {
      case "SUCCESS":
        return "status-success";
      case "FAILED":
      case "ERROR":
        return "status-error";
      case "IN_PROGRESS":
        return "status-progress";
      case "PARTIAL":
        return "status-partial";
      default:
        return "";
    }
  }
  trackByLogId(index, log) {
    return log.log_id;
  }
  static \u0275fac = function LogDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogDetailComponent, selectors: [["app-log-detail"]], outputs: { closed: "closed", viewPayload: "viewPayload" }, decls: 14, vars: 5, consts: [[1, "log-detail-panel"], [1, "panel-header"], [1, "header-actions"], [1, "fullscreen-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Close", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "loading-state"], [1, "panel-content"], [1, "empty-state"], ["points", "4 14 10 14 10 20"], ["points", "20 10 14 10 14 4"], ["x1", "14", "y1", "10", "x2", "21", "y2", "3"], ["x1", "3", "y1", "21", "x2", "10", "y2", "14"], ["points", "15 3 21 3 21 9"], ["points", "9 21 3 21 3 15"], ["x1", "21", "y1", "3", "x2", "14", "y2", "10"], [1, "spinner"], [1, "detail-section", "header-section"], [1, "log-type-status"], [1, "type-badge"], [1, "status-badge"], [1, "log-title"], [1, "log-summary"], [1, "detail-section"], [1, "detail-grid"], [1, "detail-item"], [1, "label"], [1, "value"], [1, "value", "duration"], [1, "detail-item", "full-width"], [1, "value", "code"], [1, "detail-section", "payload-section"], [1, "detail-section", "program-log-section"], [1, "detail-section", "audit-section"], [1, "value", "error-message"], [1, "payload-info"], [1, "view-payload-btn", 3, "click"], [1, "program-log-info"], [1, "view-program-log-btn", 3, "click"], [1, "loading-inline"], [1, "spinner-small"], [1, "program-log-header"], [1, "program-log-timestamp"], [1, "program-log-actions"], [1, "copy-btn-small", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Close", 1, "close-btn-small", 3, "click"], [1, "program-log-content"], ["points", "20 6 9 17 4 12"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [1, "no-program-log"], [1, "close-btn-text", 3, "click"], [1, "child-logs"], [1, "child-log"], [1, "child-log", 3, "click"], [1, "child-type"], [1, "child-title"], [1, "child-status"]], template: function LogDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Log Details");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 2)(5, "button", 3);
      \u0275\u0275domListener("click", function LogDetailComponent_Template_button_click_5_listener() {
        return ctx.toggleFullscreen();
      });
      \u0275\u0275conditionalCreate(6, LogDetailComponent_Conditional_6_Template, 5, 0, ":svg:svg", 4)(7, LogDetailComponent_Conditional_7_Template, 5, 0, ":svg:svg", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "button", 5);
      \u0275\u0275domListener("click", function LogDetailComponent_Template_button_click_8_listener() {
        return ctx.onClose();
      });
      \u0275\u0275domElementStart(9, "span", 6);
      \u0275\u0275text(10, "\xD7");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275conditionalCreate(11, LogDetailComponent_Conditional_11_Template, 4, 0, "div", 7)(12, LogDetailComponent_Conditional_12_Template, 80, 26, "div", 8)(13, LogDetailComponent_Conditional_13_Template, 3, 0, "div", 9);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275classProp("fullscreen", ctx.isFullscreen());
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-label", ctx.isFullscreen() ? "Exit fullscreen" : "Enter fullscreen");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFullscreen() ? 6 : 7);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 11 : (tmp_3_0 = ctx.log()) ? 12 : 13, tmp_3_0);
    }
  }, styles: ['\n\n.log-detail-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 450px;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.log-detail-panel.fullscreen[_ngcontent-%COMP%] {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  max-width: none;\n  width: 100%;\n  padding: 2rem 4rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.header-section[_ngcontent-%COMP%]   .log-type-status[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.header-section[_ngcontent-%COMP%]   .log-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #212529;\n}\n.header-section[_ngcontent-%COMP%]   .log-summary[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.detail-item[_ngcontent-%COMP%]   .value.code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background: #f8f9fa;\n  padding: 0.125rem 0.25rem;\n  border-radius: 2px;\n}\n.detail-item[_ngcontent-%COMP%]   .value.duration[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-item[_ngcontent-%COMP%]   .value.error-value[_ngcontent-%COMP%] {\n  color: #721c24;\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   .value.error-message[_ngcontent-%COMP%] {\n  color: #721c24;\n  background: #f8d7da;\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.payload-section[_ngcontent-%COMP%]   .payload-info[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.payload-section[_ngcontent-%COMP%]   .view-payload-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.payload-section[_ngcontent-%COMP%]   .view-payload-btn[_ngcontent-%COMP%]:hover {\n  background: #2a4a7f;\n}\n.child-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .child-logs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.child-log[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.child-log[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.child-log[_ngcontent-%COMP%]   .child-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.child-log[_ngcontent-%COMP%]   .child-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.child-log[_ngcontent-%COMP%]   .child-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n}\n.audit-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n  border-radius: 0 0 0 0;\n}\n.fullscreen[_ngcontent-%COMP%]   .audit-section[_ngcontent-%COMP%] {\n  margin: 1.5rem -4rem -2rem -4rem;\n  padding: 1.5rem 4rem;\n}\n.audit-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]    + .detail-grid[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.audit-section[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.audit-section[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  word-break: break-all;\n  font-size: 0.75rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-info[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.program-log-section[_ngcontent-%COMP%]   .view-program-log-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #2d3748;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .view-program-log-btn[_ngcontent-%COMP%]:hover {\n  background: #4a5568;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .copy-btn-small[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .copy-btn-small[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section[_ngcontent-%COMP%]   .copy-btn-small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 1.125rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-small[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-content[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  background: #1a202c;\n  color: #e2e8f0;\n  border-radius: 4px;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.fullscreen[_ngcontent-%COMP%]   .program-log-section[_ngcontent-%COMP%]   .program-log-content[_ngcontent-%COMP%] {\n  max-height: 600px;\n  font-size: 0.8125rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .no-program-log[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-text[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-text[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.loading-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  color: #6c757d;\n}\n.loading-inline[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .log-detail-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogDetailComponent, [{
    type: Component,
    args: [{ selector: "app-log-detail", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="log-detail-panel" [class.fullscreen]="isFullscreen()">
  <div class="panel-header">
    <h3>Log Details</h3>
    <div class="header-actions">
      <button class="fullscreen-btn" (click)="toggleFullscreen()" [attr.aria-label]="isFullscreen() ? 'Exit fullscreen' : 'Enter fullscreen'">
        @if (isFullscreen()) {
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 14 10 14 10 20"></polyline>
            <polyline points="20 10 14 10 14 4"></polyline>
            <line x1="14" y1="10" x2="21" y2="3"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        }
      </button>
      <button class="close-btn" (click)="onClose()" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>

  @if (loading()) {
    <div class="loading-state">
      <div class="spinner"></div>
      <span>Loading log details...</span>
    </div>
  } @else if (log(); as logData) {
    <div class="panel-content">
      <!-- Header Section -->
      <section class="detail-section header-section">
        <div class="log-type-status">
          <span class="type-badge">{{ logData.log_type }}</span>
          <span class="status-badge" [class]="getStatusClass(logData.status)">
            {{ logData.status }}
          </span>
        </div>
        <h4 class="log-title">{{ logData.title }}</h4>
        @if (logData.summary) {
          <p class="log-summary">{{ logData.summary }}</p>
        }
      </section>

      <!-- Timing Section -->
      <section class="detail-section">
        <h5>Timing</h5>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="label">Start Time</span>
            <span class="value">{{ logData.start_dt_tm_formatted }}</span>
          </div>
          <div class="detail-item">
            <span class="label">End Time</span>
            <span class="value">{{ logData.stop_dt_tm_formatted || 'In Progress' }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Duration</span>
            <span class="value duration">{{ logData.duration_formatted || '-' }}</span>
          </div>
        </div>
      </section>

      <!-- Metrics Section -->
      <section class="detail-section">
        <h5>Metrics</h5>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="label">Records Processed</span>
            <span class="value">{{ logData.record_cnt }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Errors</span>
            <span class="value" [class.error-value]="logData.error_cnt > 0">
              {{ logData.error_cnt }}
            </span>
          </div>
          @if (logData.error_message) {
            <div class="detail-item full-width">
              <span class="label">Error Message</span>
              <span class="value error-message">{{ logData.error_message }}</span>
            </div>
          }
        </div>
      </section>

      <!-- Script Section -->
      <section class="detail-section">
        <h5>Script Information</h5>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="label">Related Script</span>
            <span class="value code">{{ logData.related_script || '-' }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Function</span>
            <span class="value code">{{ logData.function_name || '-' }}</span>
          </div>
          @if (logData.batch_id) {
            <div class="detail-item">
              <span class="label">Batch ID</span>
              <span class="value code">{{ logData.batch_id }}</span>
            </div>
          }
        </div>
      </section>

      <!-- Context Section (if any IDs) -->
      @if (logData.person_id || logData.encntr_id || logData.episode_id || logData.service_id) {
        <section class="detail-section">
          <h5>Related Records</h5>
          <div class="detail-grid">
            @if (logData.person_id) {
              <div class="detail-item">
                <span class="label">Person ID</span>
                <span class="value code">{{ logData.person_id }}</span>
              </div>
            }
            @if (logData.encntr_id) {
              <div class="detail-item">
                <span class="label">Encounter ID</span>
                <span class="value code">{{ logData.encntr_id }}</span>
              </div>
            }
            @if (logData.episode_id) {
              <div class="detail-item">
                <span class="label">Episode ID</span>
                <span class="value code">{{ logData.episode_id }}</span>
              </div>
            }
            @if (logData.service_id) {
              <div class="detail-item">
                <span class="label">Service ID</span>
                <span class="value code">{{ logData.service_id }}</span>
              </div>
            }
          </div>
        </section>
      }

      <!-- Payload Section -->
      @if (hasPayload()) {
        <section class="detail-section payload-section">
          <h5>Payload</h5>
          <p class="payload-info">This log has a stored JSON payload.</p>
          <button class="view-payload-btn" (click)="onViewPayload()">
            View Payload
          </button>
        </section>
      }

      <!-- Program Log Section -->
      @if (canHaveProgramLog()) {
        <section class="detail-section program-log-section">
          <h5>Program Execution Log</h5>
          @if (!showProgramLog()) {
            <p class="program-log-info">View detailed console output from script execution.</p>
            <button class="view-program-log-btn" (click)="onViewProgramLog()">
              View Program Log
            </button>
          } @else {
            @if (loadingProgramLog()) {
              <div class="loading-inline">
                <div class="spinner-small"></div>
                <span>Loading program log...</span>
              </div>
            } @else if (programLog(); as pLog) {
              <div class="program-log-header">
                <span class="program-log-timestamp">{{ pLog.created_dt_tm_formatted }}</span>
                <div class="program-log-actions">
                  <button class="copy-btn-small" (click)="onCopyProgramLog(pLog.program_log_text)" [attr.aria-label]="copyLabel()">
                    @if (copyLabel() === 'Copied!') {
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    } @else {
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    }
                    <span>{{ copyLabel() }}</span>
                  </button>
                  <button class="close-btn-small" (click)="onCloseProgramLog()" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <pre class="program-log-content">{{ pLog.program_log_text }}</pre>
            } @else {
              <p class="no-program-log">No program log available for this entry.</p>
              <button class="close-btn-text" (click)="onCloseProgramLog()">Close</button>
            }
          }
        </section>
      }

      <!-- Child Logs Section -->
      @if (childLogs().length > 0) {
        <section class="detail-section">
          <h5>Related Logs ({{ childLogs().length }})</h5>
          <div class="child-logs">
            @for (child of childLogs(); track trackByLogId($index, child)) {
              <div class="child-log" (click)="onViewChildLog(child.log_id)">
                <span class="child-type">{{ child.log_type }}</span>
                <span class="child-title">{{ child.title }}</span>
                <span class="child-status" [class]="getStatusClass(child.status)">
                  {{ child.status }}
                </span>
              </div>
            }
          </div>
        </section>
      }

      <!-- Audit Section -->
      <section class="detail-section audit-section">
        <h5>Audit Information</h5>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="label">Log ID</span>
            <span class="value code">{{ logData.log_id }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Created</span>
            <span class="value">{{ logData.create_dt_tm_formatted }}</span>
          </div>
          @if (logData.create_prsnl_name) {
            <div class="detail-item">
              <span class="label">Created By</span>
              <span class="value">{{ logData.create_prsnl_name }}</span>
            </div>
          }
          @if (logData.updt_cnt > 0) {
            <div class="detail-item">
              <span class="label">Last Updated</span>
              <span class="value">{{ logData.updt_dt_tm_formatted }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Updates</span>
              <span class="value">{{ logData.updt_cnt }}</span>
            </div>
          }
        </div>
        @if (logData.person_id || logData.encntr_id || logData.episode_id || logData.service_id || logData.batch_id) {
          <h5>Record References</h5>
          <div class="detail-grid">
            @if (logData.person_id) {
              <div class="detail-item">
                <span class="label">Person ID</span>
                <span class="value code">{{ logData.person_id }}</span>
              </div>
            }
            @if (logData.encntr_id) {
              <div class="detail-item">
                <span class="label">Encounter ID</span>
                <span class="value code">{{ logData.encntr_id }}</span>
              </div>
            }
            @if (logData.episode_id) {
              <div class="detail-item">
                <span class="label">Episode ID</span>
                <span class="value code">{{ logData.episode_id }}</span>
              </div>
            }
            @if (logData.service_id) {
              <div class="detail-item">
                <span class="label">Service ID</span>
                <span class="value code">{{ logData.service_id }}</span>
              </div>
            }
            @if (logData.batch_id) {
              <div class="detail-item full-width">
                <span class="label">Batch ID</span>
                <span class="value code">{{ logData.batch_id }}</span>
              </div>
            }
          </div>
        }
      </section>
    </div>
  } @else {
    <div class="empty-state">
      <p>No log selected</p>
    </div>
  }
</div>
`, styles: ['/* src/app/logs/components/log-detail.scss */\n.log-detail-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 450px;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.log-detail-panel.fullscreen {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header .fullscreen-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .fullscreen-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header .fullscreen-btn svg {\n  display: block;\n}\n.panel-header .close-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen .panel-content {\n  max-width: none;\n  width: 100%;\n  padding: 2rem 4rem;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state .spinner,\n.empty-state .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-section {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-section h5 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.header-section .log-type-status {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.header-section .log-title {\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #212529;\n}\n.header-section .log-summary {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.fullscreen .detail-grid {\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-item .label {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.detail-item .value {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.detail-item .value.code {\n  font-family: monospace;\n  background: #f8f9fa;\n  padding: 0.125rem 0.25rem;\n  border-radius: 2px;\n}\n.detail-item .value.duration {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-item .value.error-value {\n  color: #721c24;\n  font-weight: 600;\n}\n.detail-item .value.error-message {\n  color: #721c24;\n  background: #f8d7da;\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.payload-section .payload-info {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.payload-section .view-payload-btn {\n  padding: 0.5rem 1rem;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.payload-section .view-payload-btn:hover {\n  background: #2a4a7f;\n}\n.child-logs {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.fullscreen .child-logs {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.child-log {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.child-log:hover {\n  background: #e9ecef;\n}\n.child-log .child-type {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.child-log .child-title {\n  flex: 1;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.child-log .child-status {\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n}\n.audit-section {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n  border-radius: 0 0 0 0;\n}\n.fullscreen .audit-section {\n  margin: 1.5rem -4rem -2rem -4rem;\n  padding: 1.5rem 4rem;\n}\n.audit-section h5 + .detail-grid {\n  margin-bottom: 1rem;\n}\n.audit-section .full-width {\n  grid-column: 1/-1;\n}\n.audit-section .full-width .value {\n  word-break: break-all;\n  font-size: 0.75rem;\n}\n.program-log-section .program-log-info {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.program-log-section .view-program-log-btn {\n  padding: 0.5rem 1rem;\n  background: #2d3748;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.program-log-section .view-program-log-btn:hover {\n  background: #4a5568;\n}\n.program-log-section .program-log-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.program-log-section .program-log-timestamp {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.program-log-section .program-log-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.program-log-section .copy-btn-small {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section .copy-btn-small:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section .copy-btn-small svg {\n  display: block;\n}\n.program-log-section .close-btn-small {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 1.125rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section .close-btn-small:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section .program-log-content {\n  margin: 0;\n  padding: 1rem;\n  background: #1a202c;\n  color: #e2e8f0;\n  border-radius: 4px;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.fullscreen .program-log-section .program-log-content {\n  max-height: 600px;\n  font-size: 0.8125rem;\n}\n.program-log-section .no-program-log {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.program-log-section .close-btn-text {\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section .close-btn-text:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.loading-inline {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  color: #6c757d;\n}\n.loading-inline .spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .log-detail-panel {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogDetailComponent, { className: "LogDetailComponent", filePath: "src/app/logs/components/log-detail.ts", lineNumber: 16 });
})();

// src/app/logs/components/payload-viewer.ts
function PayloadViewerComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 17);
    \u0275\u0275text(1, "JSON");
    \u0275\u0275domElementEnd();
  }
}
function PayloadViewerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275conditionalCreate(3, PayloadViewerComponent_Conditional_6_Conditional_3_Template, 2, 0, "span", 17);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const info_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, info_r1.length), " bytes ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(info_r1.isJson ? 3 : -1);
  }
}
function PayloadViewerComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 12);
    \u0275\u0275text(1, "Copied!");
    \u0275\u0275domElementEnd();
  }
}
function PayloadViewerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Copy ");
  }
}
function PayloadViewerComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275domElement(1, "div", 18);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading payload...");
    \u0275\u0275domElementEnd()();
  }
}
function PayloadViewerComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "pre", 19)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("formatted", ctx_r1.viewMode() === "formatted");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.displayContent());
  }
}
function PayloadViewerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "p");
    \u0275\u0275text(2, "No payload content available");
    \u0275\u0275domElementEnd()();
  }
}
var PayloadViewerComponent = class _PayloadViewerComponent {
  logsService = inject(LogsService);
  // Signals from service
  logText = this.logsService.selectedLogText;
  loading = this.logsService.loadingText;
  // Local state
  viewMode = signal("formatted", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  copySuccess = signal(false, ...ngDevMode ? [{ debugName: "copySuccess" }] : []);
  // Outputs
  closed = output();
  // Computed values
  hasContent = computed(() => {
    const text = this.logText();
    return text && text.found_ind && text.text_content;
  }, ...ngDevMode ? [{ debugName: "hasContent" }] : []);
  formattedContent = computed(() => {
    const text = this.logText();
    if (!text || !text.text_content)
      return "";
    if (text.is_json) {
      try {
        const parsed = JSON.parse(text.text_content);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return text.text_content;
      }
    }
    return text.text_content;
  }, ...ngDevMode ? [{ debugName: "formattedContent" }] : []);
  rawContent = computed(() => {
    const text = this.logText();
    return text?.text_content ?? "";
  }, ...ngDevMode ? [{ debugName: "rawContent" }] : []);
  displayContent = computed(() => {
    return this.viewMode() === "formatted" ? this.formattedContent() : this.rawContent();
  }, ...ngDevMode ? [{ debugName: "displayContent" }] : []);
  contentInfo = computed(() => {
    const text = this.logText();
    if (!text)
      return null;
    return {
      length: text.text_length,
      type: text.content_type,
      isJson: text.is_json
    };
  }, ...ngDevMode ? [{ debugName: "contentInfo" }] : []);
  onClose() {
    this.closed.emit();
  }
  setViewMode(mode) {
    this.viewMode.set(mode);
  }
  async copyToClipboard() {
    try {
      await navigator.clipboard.writeText(this.displayContent());
      this.copySuccess.set(true);
      setTimeout(() => this.copySuccess.set(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
  static \u0275fac = function PayloadViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayloadViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayloadViewerComponent, selectors: [["app-payload-viewer"]], outputs: { closed: "closed" }, decls: 24, vars: 7, consts: [[1, "payload-viewer-overlay", 3, "click"], [1, "payload-viewer-modal"], [1, "modal-header"], [1, "header-actions"], [1, "content-info"], ["aria-label", "Close", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "modal-toolbar"], [1, "view-toggle"], [3, "click"], [1, "toolbar-actions"], [1, "copy-btn", 3, "click"], [1, "copy-success"], [1, "modal-content"], [1, "loading-state"], [1, "payload-content", 3, "formatted"], [1, "empty-state"], [1, "json-badge"], [1, "spinner"], [1, "payload-content"]], template: function PayloadViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function PayloadViewerComponent_Template_div_click_0_listener($event) {
        return ctx.onOverlayClick($event);
      });
      \u0275\u0275domElementStart(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "Payload Content");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 3);
      \u0275\u0275conditionalCreate(6, PayloadViewerComponent_Conditional_6_Template, 4, 4, "span", 4);
      \u0275\u0275domElementStart(7, "button", 5);
      \u0275\u0275domListener("click", function PayloadViewerComponent_Template_button_click_7_listener() {
        return ctx.onClose();
      });
      \u0275\u0275domElementStart(8, "span", 6);
      \u0275\u0275text(9, "\xD7");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(10, "div", 7)(11, "div", 8)(12, "button", 9);
      \u0275\u0275domListener("click", function PayloadViewerComponent_Template_button_click_12_listener() {
        return ctx.setViewMode("formatted");
      });
      \u0275\u0275text(13, " Formatted ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "button", 9);
      \u0275\u0275domListener("click", function PayloadViewerComponent_Template_button_click_14_listener() {
        return ctx.setViewMode("raw");
      });
      \u0275\u0275text(15, " Raw ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275domListener("click", function PayloadViewerComponent_Template_button_click_17_listener() {
        return ctx.copyToClipboard();
      });
      \u0275\u0275conditionalCreate(18, PayloadViewerComponent_Conditional_18_Template, 2, 0, "span", 12)(19, PayloadViewerComponent_Conditional_19_Template, 1, 0);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(20, "div", 13);
      \u0275\u0275conditionalCreate(21, PayloadViewerComponent_Conditional_21_Template, 4, 0, "div", 14)(22, PayloadViewerComponent_Conditional_22_Template, 3, 3, "pre", 15)(23, PayloadViewerComponent_Conditional_23_Template, 3, 0, "div", 16);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional((tmp_0_0 = ctx.contentInfo()) ? 6 : -1, tmp_0_0);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.viewMode() === "formatted");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode() === "raw");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.copySuccess() ? 18 : 19);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 21 : ctx.hasContent() ? 22 : 23);
    }
  }, dependencies: [DecimalPipe], styles: ['\n\n.payload-viewer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 2rem;\n}\n.payload-viewer-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.modal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.modal-header[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.modal-header[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%]   .json-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem 0.375rem;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n  font-size: 0.75rem;\n  margin-left: 0.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.modal-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: none;\n  background: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #ced4da;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #1a365d;\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #e9ecef;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 80px;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.copy-btn[_ngcontent-%COMP%]   .copy-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 0;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.payload-content[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1.5rem;\n  background: #1e1e1e;\n  color: #d4d4d4;\n  font-family:\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  overflow: auto;\n  white-space: pre;\n  min-height: 200px;\n}\n.payload-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n@media (max-width: 768px) {\n  .payload-viewer-overlay[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .payload-viewer-modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .modal-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: stretch;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayloadViewerComponent, [{
    type: Component,
    args: [{ selector: "app-payload-viewer", standalone: true, imports: [DecimalPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="payload-viewer-overlay" (click)="onOverlayClick($event)">
  <div class="payload-viewer-modal">
    <div class="modal-header">
      <h3>Payload Content</h3>
      <div class="header-actions">
        @if (contentInfo(); as info) {
          <span class="content-info">
            {{ info.length | number }} bytes
            @if (info.isJson) {
              <span class="json-badge">JSON</span>
            }
          </span>
        }
        <button class="close-btn" (click)="onClose()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div class="modal-toolbar">
      <div class="view-toggle">
        <button
          [class.active]="viewMode() === 'formatted'"
          (click)="setViewMode('formatted')"
        >
          Formatted
        </button>
        <button
          [class.active]="viewMode() === 'raw'"
          (click)="setViewMode('raw')"
        >
          Raw
        </button>
      </div>

      <div class="toolbar-actions">
        <button class="copy-btn" (click)="copyToClipboard()">
          @if (copySuccess()) {
            <span class="copy-success">Copied!</span>
          } @else {
            Copy
          }
        </button>
      </div>
    </div>

    <div class="modal-content">
      @if (loading()) {
        <div class="loading-state">
          <div class="spinner"></div>
          <span>Loading payload...</span>
        </div>
      } @else if (hasContent()) {
        <pre class="payload-content" [class.formatted]="viewMode() === 'formatted'"><code>{{ displayContent() }}</code></pre>
      } @else {
        <div class="empty-state">
          <p>No payload content available</p>
        </div>
      }
    </div>
  </div>
</div>
`, styles: ['/* src/app/logs/components/payload-viewer.scss */\n.payload-viewer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 2rem;\n}\n.payload-viewer-modal {\n  background: white;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.modal-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.modal-header .content-info {\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.modal-header .content-info .json-badge {\n  display: inline-block;\n  padding: 0.125rem 0.375rem;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n  font-size: 0.75rem;\n  margin-left: 0.5rem;\n}\n.modal-header .close-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.modal-header .close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.modal-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.view-toggle button {\n  padding: 0.375rem 0.75rem;\n  border: none;\n  background: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.view-toggle button:not(:last-child) {\n  border-right: 1px solid #ced4da;\n}\n.view-toggle button.active {\n  background: #1a365d;\n  color: white;\n}\n.view-toggle button:hover:not(.active) {\n  background: #e9ecef;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.copy-btn {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 80px;\n}\n.copy-btn:hover {\n  background: #e9ecef;\n}\n.copy-btn .copy-success {\n  color: #155724;\n}\n.modal-content {\n  flex: 1;\n  overflow: auto;\n  padding: 0;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state .spinner,\n.empty-state .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.payload-content {\n  margin: 0;\n  padding: 1.5rem;\n  background: #1e1e1e;\n  color: #d4d4d4;\n  font-family:\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  overflow: auto;\n  white-space: pre;\n  min-height: 200px;\n}\n.payload-content code {\n  font-family: inherit;\n}\n@media (max-width: 768px) {\n  .payload-viewer-overlay {\n    padding: 0;\n  }\n  .payload-viewer-modal {\n    max-width: 100%;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-header {\n    border-radius: 0;\n  }\n  .modal-toolbar {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: stretch;\n  }\n  .view-toggle {\n    width: 100%;\n  }\n  .view-toggle button {\n    flex: 1;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayloadViewerComponent, { className: "PayloadViewerComponent", filePath: "src/app/logs/components/payload-viewer.ts", lineNumber: 16 });
})();

// src/app/logs/models/mirth-callback.model.ts
var MIRTH_CHANNELS = {
  FHIR_TRANSFORMATION: "02 - FHIR Transformation",
  ONTARIO_HEALTH_SUBMISSION: "03 - Ontario Health Submission"
};
var STATUS_CONFIG = {
  SUCCESS: { label: "Success", class: "status-success", icon: "\u2713" },
  PARTIAL: { label: "Partial", class: "status-partial", icon: "\u26A0" },
  REJECTED: { label: "Rejected", class: "status-rejected", icon: "\u2717" },
  ERROR: { label: "Error", class: "status-error", icon: "\u2717" },
  UNKNOWN: { label: "Unknown", class: "status-unknown", icon: "?" }
};

// src/app/logs/utils/mirth-callback-parser.ts
function parseMirthCallback(jsonText) {
  const parseErrors = [];
  if (!jsonText || jsonText.trim().length === 0) {
    return null;
  }
  let raw;
  try {
    const parsed = JSON.parse(jsonText);
    raw = parsed.MIRTH_REQUEST || parsed;
  } catch (e) {
    return null;
  }
  if (raw.requestType !== "logSubmission") {
    return null;
  }
  const status = mapHttpStatusToSubmissionStatus(raw.responseStatusCode);
  const statusConfig = STATUS_CONFIG[status];
  const channelType = determineChannelType(raw.mirthChannelName);
  let submittedBundle = null;
  if (raw.submittedData) {
    try {
      submittedBundle = JSON.parse(raw.submittedData);
    } catch (e) {
      parseErrors.push(`Failed to parse submittedData: ${e}`);
    }
  }
  let responseBundle = null;
  let responseText = null;
  let parsedResponseData = null;
  if (raw.responseData) {
    if (channelType === "FHIR_TRANSFORMATION") {
      responseText = parseChannel02Response(raw.responseData);
    } else {
      try {
        parsedResponseData = JSON.parse(raw.responseData);
        if (parsedResponseData?.["resourceType"] === "Bundle") {
          responseBundle = parsedResponseData;
        }
      } catch (e) {
        parseErrors.push(`Failed to parse responseData: ${e}`);
      }
    }
  }
  const errors = channelType === "FHIR_TRANSFORMATION" ? extractChannel02Errors(responseText, raw.responseStatusCode) : extractErrors(parsedResponseData);
  const summary = buildSummary(
    submittedBundle,
    responseBundle,
    parsedResponseData,
    raw.responseStatusCode,
    channelType
  );
  return {
    raw,
    timestamp: new Date(raw.timestamp),
    status,
    statusLabel: statusConfig.label,
    statusClass: statusConfig.class,
    httpStatus: raw.responseStatusCode,
    httpStatusLine: raw.responseStatusLine,
    channelName: raw.mirthChannelName,
    channelId: raw.mirthChannelId,
    channelType,
    messageId: raw.mirthChannelMessageId,
    submittedBundle,
    responseBundle,
    responseText,
    errors,
    summary,
    parseErrors
  };
}
function mapHttpStatusToSubmissionStatus(statusCode) {
  if (statusCode >= 200 && statusCode < 300) {
    return "SUCCESS";
  } else if (statusCode >= 400 && statusCode < 500) {
    return "REJECTED";
  } else if (statusCode >= 500) {
    return "ERROR";
  }
  return "UNKNOWN";
}
function determineChannelType(channelName) {
  if (channelName?.includes(MIRTH_CHANNELS.FHIR_TRANSFORMATION)) {
    return "FHIR_TRANSFORMATION";
  }
  if (channelName?.includes(MIRTH_CHANNELS.ONTARIO_HEALTH_SUBMISSION)) {
    return "ONTARIO_HEALTH_SUBMISSION";
  }
  return "UNKNOWN";
}
function parseChannel02Response(responseData) {
  if (!responseData) return null;
  try {
    const parsed = JSON.parse(responseData);
    if (typeof parsed === "string") return parsed;
    return responseData;
  } catch {
    return responseData;
  }
}
function extractChannel02Errors(responseText, httpStatus) {
  if (!responseText || httpStatus < 400) return [];
  return [{
    resourceType: "PlainText",
    resourceId: "",
    errorCode: `HTTP_${httpStatus}`,
    errorMessage: responseText,
    severity: "error",
    location: [],
    messageId: ""
  }];
}
function extractPatientInfo(bundle) {
  const result = { mrn: "", name: "" };
  if (!bundle?.entry) {
    return result;
  }
  const patientEntry = bundle.entry.find((e) => e.resource?.resourceType === "Patient");
  if (!patientEntry?.resource) {
    return result;
  }
  const patient = patientEntry.resource;
  const mrnIdentifier = patient.identifier?.find(
    (id) => id.type?.coding?.some((c) => c.code === "MR")
  );
  if (mrnIdentifier?.value) {
    result.mrn = mrnIdentifier.value;
  }
  if (patient.name && patient.name.length > 0) {
    const name = patient.name[0];
    const given = name.given?.join(" ") || "";
    const family = name.family || "";
    result.name = `${family}, ${given}`.trim().replace(/^,\s*|,\s*$/g, "");
  }
  return result;
}
function extractEpisodeId(bundle) {
  if (!bundle?.entry) {
    return "";
  }
  const episodeEntry = bundle.entry.find((e) => e.resource?.resourceType === "EpisodeOfCare");
  if (!episodeEntry?.resource) {
    return "";
  }
  const episodeIdentifier = episodeEntry.resource.identifier?.find(
    (id) => id.system?.includes("episode-of-care")
  );
  return episodeIdentifier?.value || "";
}
function extractBundleId(bundle) {
  if (!bundle) {
    return "";
  }
  return bundle.id || "";
}
function extractTransactionId(bundle) {
  if (!bundle) {
    return "";
  }
  const lobTxTag = bundle.meta?.tag?.find((t) => t.display === "X-LobTxId");
  if (lobTxTag?.code) {
    return lobTxTag.code;
  }
  return "";
}
function extractErrors(responseData) {
  const errors = [];
  if (!responseData) {
    return errors;
  }
  const issueArrays = [];
  if (responseData["resourceType"] === "OperationOutcome") {
    const issues = responseData["issue"];
    if (issues) {
      issueArrays.push({
        issues,
        resourceId: responseData["id"] || ""
      });
    }
  }
  const entries = responseData["entry"];
  if (entries) {
    for (const entry of entries) {
      if (entry.resource?.["resourceType"] === "OperationOutcome") {
        const issues = entry.resource["issue"];
        if (issues) {
          issueArrays.push({
            issues,
            resourceId: entry.resource["id"] || ""
          });
        }
      }
    }
  }
  for (const { issues, resourceId } of issueArrays) {
    for (const issue of issues) {
      const extensions = issue["extension"];
      const messageIdExt = extensions?.find(
        (e) => e.url?.includes("operationoutcome-message-id")
      );
      const location = issue["location"] || [];
      errors.push({
        resourceType: "OperationOutcome",
        resourceId,
        errorCode: issue["code"] || "",
        errorMessage: issue["diagnostics"] || "",
        severity: issue["severity"] || "error",
        location,
        messageId: messageIdExt?.valueString || ""
      });
    }
  }
  return errors;
}
function groupAndDeduplicateIssues(errors) {
  const deduped = /* @__PURE__ */ new Map();
  for (const error of errors) {
    const key = error.errorMessage;
    const existing = deduped.get(key);
    if (existing) {
      existing.count++;
      for (const loc of error.location) {
        if (!existing.locations.includes(loc)) {
          existing.locations.push(loc);
        }
      }
    } else {
      deduped.set(key, {
        errorMessage: error.errorMessage,
        errorCode: error.errorCode,
        messageId: error.messageId,
        severity: error.severity,
        locations: [...error.location],
        count: 1
      });
    }
  }
  const all = Array.from(deduped.values());
  const errorItems = all.filter((i) => i.severity === "error" || i.severity === "fatal");
  const warningItems = all.filter((i) => i.severity === "warning");
  const infoItems = all.filter((i) => i.severity === "information");
  return {
    errors: errorItems,
    warnings: warningItems,
    information: infoItems,
    errorCount: errorItems.length,
    warningCount: warningItems.length,
    infoCount: infoItems.length,
    totalCount: all.length
  };
}
function buildSummary(submittedBundle, responseBundle, parsedResponseData, httpStatus, channelType) {
  if (channelType === "FHIR_TRANSFORMATION") {
    return buildChannel02Summary(submittedBundle, httpStatus);
  }
  const patientInfo = extractPatientInfo(submittedBundle);
  const resourcesSubmitted = submittedBundle?.entry?.length || 0;
  const resourcesAccepted = httpStatus >= 200 && httpStatus < 300 ? responseBundle?.entry?.length || resourcesSubmitted : 0;
  return {
    patientMRN: patientInfo.mrn,
    patientName: patientInfo.name,
    episodeId: extractEpisodeId(submittedBundle),
    resourcesSubmitted,
    resourcesAccepted,
    hasErrors: extractErrors(parsedResponseData).length > 0,
    bundleId: extractBundleId(responseBundle),
    transactionId: extractTransactionId(responseBundle)
  };
}
function buildChannel02Summary(extractionPayload, httpStatus) {
  if (!extractionPayload) {
    return {
      patientMRN: "",
      patientName: "",
      episodeId: "",
      resourcesSubmitted: 0,
      resourcesAccepted: 0,
      hasErrors: httpStatus >= 400,
      bundleId: "",
      transactionId: ""
    };
  }
  const client = extractionPayload["CLIENT"];
  const firstName = client?.["DE01_001_FIRST_NAME"] || "";
  const middleName = client?.["DE01_002_MIDDLE_NAME"] || "";
  const lastName = client?.["DE01_003_LAST_NAME"] || "";
  const patientName = [firstName, middleName, lastName].filter((n) => n.trim().length > 0).join(" ");
  const patientMRN = client?.["DE02_001_CLIENT_IDENTIFIER_MRN"] || "";
  const episodeId = extractionPayload["EPISODE_IDENTIFIER"] || "";
  const submitBundleCount = extractionPayload["SUBMIT_BUNDLE_CNT"] || 0;
  const fieldsCount = extractionPayload["FIELDS_LIST_CNT"] || 0;
  const submitBundles = extractionPayload["SUBMIT_BUNDLE"] || [];
  const totalProfiles = submitBundles.reduce((sum, bundle) => {
    return sum + (bundle["PROFILE_CNT"] || 0);
  }, 0);
  return {
    patientMRN,
    patientName,
    episodeId,
    resourcesSubmitted: totalProfiles,
    resourcesAccepted: httpStatus >= 200 && httpStatus < 300 ? totalProfiles : 0,
    hasErrors: httpStatus >= 400,
    bundleId: "",
    // Not applicable for Channel 02
    transactionId: ""
    // Not applicable for Channel 02
  };
}
function getResourceTypeSummary(bundle) {
  if (!bundle?.entry) {
    return [];
  }
  const typeMap = /* @__PURE__ */ new Map();
  for (const entry of bundle.entry) {
    const type = entry.resource?.resourceType || "Unknown";
    const description = extractResourceDescription(entry.resource);
    if (!typeMap.has(type)) {
      typeMap.set(type, { count: 0, ids: [] });
    }
    const data = typeMap.get(type);
    data.count++;
    if (description) {
      data.ids.push(description);
    }
  }
  return Array.from(typeMap.entries()).map(([type, data]) => ({
    type,
    count: data.count,
    ids: data.ids
  }));
}
function extractResourceDescription(resource) {
  if (!resource) return "";
  const type = resource.resourceType;
  switch (type) {
    case "Patient": {
      const name = resource.name?.[0];
      const nameStr = name ? `${name.family || ""}, ${name.given?.join(" ") || ""}`.trim().replace(/^,\s*/, "") : "";
      const mrn = resource.identifier?.find(
        (id) => id.type?.coding?.some((c) => c.code === "MR")
      )?.value || "";
      return nameStr && mrn ? `${nameStr} (${mrn})` : nameStr || mrn || "";
    }
    case "Organization": {
      return resource.name || "";
    }
    case "Location": {
      const locName = resource.name || "";
      const siteId = resource.identifier?.find(
        (id) => id.system?.includes("ConnexSite")
      )?.value;
      return siteId ? `${locName} (Site: ${siteId})` : locName;
    }
    case "ServiceRequest": {
      const refId = resource.identifier?.find(
        (id) => id.system?.includes("referral")
      )?.value;
      return refId || "";
    }
    case "EpisodeOfCare": {
      const epId = resource.identifier?.find(
        (id) => id.system?.includes("episode-of-care")
      )?.value;
      return epId || "";
    }
    case "HealthcareService": {
      const svcName = resource.name || "";
      const progId = resource.identifier?.find(
        (id) => id.system?.includes("HealthcareService")
      )?.value;
      return progId ? `${svcName} (${progId})` : svcName;
    }
    case "Observation": {
      const codeDisplay = resource.code?.coding?.[0]?.display || "";
      const valueDisplay = resource.valueCodeableConcept?.coding?.[0]?.display || "";
      return valueDisplay ? `${codeDisplay}: ${valueDisplay}` : codeDisplay;
    }
    case "Encounter": {
      const encId = resource.identifier?.find(
        (id) => id.system?.includes("encounter")
      )?.value;
      const status = resource.status || "";
      return encId ? `${encId} (${status})` : status;
    }
    case "Appointment": {
      const apptStatus = resource.status || "";
      const cancelReason = resource.cancelationReason?.coding?.[0]?.display || "";
      return cancelReason ? `${apptStatus} - ${cancelReason}` : apptStatus;
    }
    default:
      const defaultName = resource.name;
      const defaultId = resource.identifier?.[0]?.value;
      return defaultName || defaultId || "";
  }
}
function formatCallbackTimestamp(date) {
  return date.toLocaleString("en-CA", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}
function extractValueAtPath(bundle, rawPath) {
  if (!bundle?.entry || !rawPath) return null;
  const entryMatch = rawPath.match(/^Bundle\.entry\[(\d+)\]/);
  if (!entryMatch) return null;
  const entryIndex = parseInt(entryMatch[1], 10);
  if (entryIndex >= bundle.entry.length) return null;
  const entry = bundle.entry[entryIndex];
  if (!entry?.resource) return null;
  const resourceType = entry.resource.resourceType || "";
  const resourceId = entry.resource.id || "";
  let fieldPath = "";
  const commentPattern = /\.resource\s*\/\*\s*\w+\/[\w-]+\s*\*\/\.?\s*(.*)$/;
  const commentMatch = rawPath.match(commentPattern);
  if (commentMatch) {
    fieldPath = commentMatch[1];
  } else {
    const simplePattern = /\.resource\.(.+)$/;
    const simpleMatch = rawPath.match(simplePattern);
    if (simpleMatch) {
      fieldPath = simpleMatch[1];
    }
  }
  if (!fieldPath) return null;
  const value = navigatePath(entry.resource, fieldPath);
  if (value === void 0) return null;
  return {
    path: rawPath,
    value,
    valueDisplay: formatValueForDisplay(value),
    resourceId,
    resourceType
  };
}
function navigatePath(obj, path) {
  if (!obj || !path) return void 0;
  const segments = [];
  const parts = path.split(".");
  for (const part of parts) {
    const bracketMatch = part.match(/^(\w+)\[(\d+)\]$/);
    if (bracketMatch) {
      segments.push({ key: bracketMatch[1], index: parseInt(bracketMatch[2], 10) });
    } else {
      segments.push({ key: part, index: null });
    }
  }
  let current = obj;
  for (const segment of segments) {
    if (current === null || current === void 0) return void 0;
    if (typeof current !== "object") return void 0;
    current = current[segment.key];
    if (segment.index !== null) {
      if (!Array.isArray(current)) return void 0;
      if (segment.index >= current.length) return void 0;
      current = current[segment.index];
    }
  }
  return current;
}
function formatValueForDisplay(value) {
  if (value === null || value === void 0) return "(empty)";
  if (typeof value === "string") return value || "(empty string)";
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return `[Array with ${value.length} items]`;
    }
  }
  if (typeof value === "object") {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return "[Object]";
    }
  }
  return String(value);
}

// src/app/logs/utils/fhir-path-mapping.ts
var FHIR_PATH_MAPPINGS = [
  // ============================================================
  // PATIENT (DE01 - Client Demographics)
  // ============================================================
  {
    fhirPathPattern: "name[*].given[*]",
    resourceType: "Patient",
    dataElement: "DE01.001/002",
    dataElementName: "Client First/Middle Name",
    tableName: "PERSON",
    columnName: "name_first / name_middle",
    jsonPath: "QUAL[].CLIENT.DE01_001_FIRST_NAME / DE01_002_MIDDLE_NAME",
    fieldDescription: "Patient given name(s) retrieved at runtime from PERSON table"
  },
  {
    fhirPathPattern: "name[*].family",
    resourceType: "Patient",
    dataElement: "DE01.003",
    dataElementName: "Client Last Name",
    tableName: "PERSON",
    columnName: "name_last",
    jsonPath: "QUAL[].CLIENT.DE01_003_LAST_NAME",
    fieldDescription: "Patient family name retrieved at runtime from PERSON table"
  },
  {
    fhirPathPattern: "birthDate",
    resourceType: "Patient",
    dataElement: "DE01.004",
    dataElementName: "Date of Birth",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "date_of_birth_text",
    jsonPath: "QUAL[].CLIENT.DE01_004_DATE_OF_BIRTH",
    fieldDescription: "Patient date of birth (YYYY-MM-DD format)"
  },
  {
    fhirPathPattern: "_birthDate.extension[*].valueBoolean",
    resourceType: "Patient",
    dataElement: "DE01.005",
    dataElementName: "Estimated DOB Flag",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "estimated_dob_flag",
    jsonPath: "QUAL[].CLIENT.DE01_005_ESTIMATED_DOB_FLAG.CODE",
    fieldDescription: "Whether date of birth is estimated (true/false)"
  },
  {
    fhirPathPattern: "_birthDate.extension[*].url",
    resourceType: "Patient",
    dataElement: "DE01.005",
    dataElementName: "Estimated DOB Flag Extension URL",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "estimated_dob_flag",
    jsonPath: "QUAL[].CLIENT.DE01_005_ESTIMATED_DOB_FLAG.CODE_SYSTEM",
    fieldDescription: "Extension URL for birthdate estimated flag"
  },
  {
    fhirPathPattern: "active",
    resourceType: "Patient",
    dataElement: "DE01.006",
    dataElementName: "Active Status",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "client_active_flag",
    jsonPath: "QUAL[].CLIENT.DE01_006_ACTIVE_STATUS.CODE",
    fieldDescription: "Patient active status (true/false)"
  },
  // ============================================================
  // PATIENT (DE02 - Client Identifiers)
  // ============================================================
  {
    fhirPathPattern: "identifier[*].type.coding[*].code",
    resourceType: "Patient",
    dataElement: "DE02.005",
    dataElementName: "Identifier Type",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "identifier_type",
    jsonPath: "QUAL[].CLIENT.DE02_005_IDENTIFIER_TYPE.CODE",
    fieldDescription: "Patient identifier type code (MR, JHN)"
  },
  {
    fhirPathPattern: "identifier[*].type.coding[*].system",
    resourceType: "Patient",
    dataElement: "DE02.005",
    dataElementName: "Identifier Type Code System",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "identifier_type",
    jsonPath: "QUAL[].CLIENT.DE02_005_IDENTIFIER_TYPE.CODE_SYSTEM",
    fieldDescription: "Code system for identifier type (v2-0203)"
  },
  {
    fhirPathPattern: "identifier[*].type",
    resourceType: "Patient",
    dataElement: "DE02.005",
    dataElementName: "Identifier Type",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "identifier_type",
    jsonPath: "QUAL[].CLIENT.DE02_005_IDENTIFIER_TYPE",
    fieldDescription: "Patient identifier type (MR or JHN)"
  },
  {
    fhirPathPattern: "identifier[*].system",
    resourceType: "Patient",
    dataElement: "DE02.002",
    dataElementName: "Vendor Issuing ID / Identifier System",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "vendor_issuing_id",
    jsonPath: "QUAL[].CLIENT.DE02_002_VENDOR_ISSUING_ID",
    fieldDescription: "System/authority that assigned the identifier (NamingSystem URL)"
  },
  // Note: DE02_003 is a nested structure (value, identifier_system, code, label, code_system)
  {
    fhirPathPattern: "identifier[*].value",
    resourceType: "Patient",
    dataElement: "DE02.001/003",
    dataElementName: "Client MRN or Health Card Number",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "client_identifier_mrn / health_card_number",
    jsonPath: "QUAL[].CLIENT.DE02_001_CLIENT_IDENTIFIER_MRN or DE02_003_HEALTH_CARD_NUMBER.VALUE",
    fieldDescription: "Patient identifier value (MRN or JHN depending on identifier type)"
  },
  {
    fhirPathPattern: "identifier[*].extension[*].valueCodeableConcept",
    resourceType: "Patient",
    dataElement: "DE02.004",
    dataElementName: "HCN Issuing Authority",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "hcn_issuing_authority",
    jsonPath: "QUAL[].CLIENT.DE02_004_HCN_ISSUING_AUTHORITY",
    fieldDescription: "Health card number issuing authority (province)"
  },
  {
    fhirPathPattern: "identifier[*].extension[*].url",
    resourceType: "Patient",
    dataElement: "DE02.004",
    dataElementName: "HCN Issuing Authority Extension URL",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "hcn_issuing_authority",
    jsonPath: "QUAL[].CLIENT.DE02_004_HCN_ISSUING_AUTHORITY.EXTENSION_URL",
    fieldDescription: "Extension URL for health card issuing authority"
  },
  // ============================================================
  // PATIENT (DE03 - Client Address)
  // ============================================================
  {
    fhirPathPattern: "address[*].use",
    resourceType: "Patient",
    dataElement: "DE03.001",
    dataElementName: "Address Use",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "address_use",
    jsonPath: "QUAL[].CLIENT.ADDRESS.DE03_001_ADDRESS_USE.CODE",
    fieldDescription: "Address use type (home/work/temp)"
  },
  {
    fhirPathPattern: "address[*].city",
    resourceType: "Patient",
    dataElement: "DE03.002",
    dataElementName: "City",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "city",
    jsonPath: "QUAL[].CLIENT.ADDRESS.DE03_002_CITY",
    fieldDescription: "Patient address city"
  },
  {
    fhirPathPattern: "address[*].state",
    resourceType: "Patient",
    dataElement: "DE03.003",
    dataElementName: "Province",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "province",
    jsonPath: "QUAL[].CLIENT.ADDRESS.DE03_003_PROVINCE.CODE",
    fieldDescription: "Patient address province/state code"
  },
  {
    fhirPathPattern: "address[*].postalCode",
    resourceType: "Patient",
    dataElement: "DE03.004",
    dataElementName: "Postal Code",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "postal_code",
    jsonPath: "QUAL[].CLIENT.ADDRESS.DE03_004_POSTAL_CODE",
    fieldDescription: "Patient address postal code"
  },
  // ============================================================
  // PATIENT (DE04 - Patient-level SDOH fields)
  // ============================================================
  {
    fhirPathPattern: "extension[*].valueCodeableConcept",
    resourceType: "Patient",
    dataElement: "DE04.002/003",
    dataElementName: "Ethnicity / Religion (Patient Extension)",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "ethnicity / religion",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_002_ETHNICITY or DE04_003_RELIGION_SPIRITUAL",
    fieldDescription: "Patient extension value (ethnicity or religion depending on extension URL)"
  },
  {
    fhirPathPattern: "extension[*].url",
    resourceType: "Patient",
    dataElement: "DE04",
    dataElementName: "Patient Extension URL",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(various DE04 fields)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.(field).EXTENSION_URL",
    fieldDescription: "FHIR extension URL for patient-level SDOH data"
  },
  {
    fhirPathPattern: "communication[*].language",
    resourceType: "Patient",
    dataElement: "DE04.004/005/006",
    dataElementName: "Language",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "first_language / preferred_service_language / preferred_official_language",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_004/005/006",
    fieldDescription: "Patient communication language (first, service, or official)"
  },
  {
    fhirPathPattern: "maritalStatus",
    resourceType: "Patient",
    dataElement: "DE04.016",
    dataElementName: "Marital Status",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "marital_status",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_016_MARITAL_STATUS",
    fieldDescription: "Patient marital status"
  },
  {
    fhirPathPattern: "maritalStatus.coding[*]",
    resourceType: "Patient",
    dataElement: "DE04.016",
    dataElementName: "Marital Status Coding",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "marital_status",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_016_MARITAL_STATUS.CODE",
    fieldDescription: "Patient marital status code"
  },
  // ============================================================
  // OBSERVATION (DE04 - SDOH Observation fields)
  // ============================================================
  {
    fhirPathPattern: "code.coding[*].code",
    resourceType: "Observation",
    dataElement: "DE04.xxx",
    dataElementName: "SDOH Observation Code",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(varies by observation)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.(field).OBSERVATION_CODE.CODE",
    fieldDescription: "LOINC/SNOMED observation code identifying the SDOH measure"
  },
  {
    fhirPathPattern: "code.coding[*].system",
    resourceType: "Observation",
    dataElement: "DE04.xxx",
    dataElementName: "SDOH Observation Code System",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(varies by observation)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.(field).OBSERVATION_CODE.CODE_SYSTEM",
    fieldDescription: "Code system for the observation code (LOINC or SNOMED CT)"
  },
  {
    fhirPathPattern: "code",
    resourceType: "Observation",
    dataElement: "DE04.xxx",
    dataElementName: "SDOH Observation Code",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(varies by observation)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.(field).OBSERVATION_CODE",
    fieldDescription: "Observation code identifying the SDOH measure (LOINC/SNOMED)"
  },
  {
    fhirPathPattern: "valueCodeableConcept.coding[*].code",
    resourceType: "Observation",
    dataElement: "DE04.xxx",
    dataElementName: "SDOH Observation Value Code",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(varies by observation)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.(field).CODE",
    fieldDescription: "The coded value for this SDOH observation"
  },
  {
    fhirPathPattern: "valueCodeableConcept.coding[*].system",
    resourceType: "Observation",
    dataElement: "DE04.xxx",
    dataElementName: "SDOH Observation Value Code System",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(varies by observation)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.(field).CODE_SYSTEM",
    fieldDescription: "Code system for the observation value"
  },
  {
    fhirPathPattern: "valueCodeableConcept",
    resourceType: "Observation",
    dataElement: "DE04.xxx",
    dataElementName: "SDOH Observation Value",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(varies by observation)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.(field)",
    fieldDescription: "The coded value for this SDOH observation"
  },
  {
    fhirPathPattern: "valueInteger",
    resourceType: "Observation",
    dataElement: "DE04.019",
    dataElementName: "Number of People Income Supports",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "household_members_supported",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_019_HOUSEHOLD_MEMBERS_SUPPORTED.VALUE",
    fieldDescription: "Number of people supported by household income (integer)"
  },
  {
    fhirPathPattern: "status",
    resourceType: "Observation",
    dataElement: "DE04 (FHIR mandatory)",
    dataElementName: "Observation Status",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(derived)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.OBSERVATION_STATUS",
    fieldDescription: 'Observation status (always "final")'
  },
  {
    fhirPathPattern: "category",
    resourceType: "Observation",
    dataElement: "DE04 (FHIR mandatory)",
    dataElementName: "Observation Category",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "(derived)",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.OBSERVATION_CATEGORY",
    fieldDescription: 'Observation category (always "social-history")'
  },
  {
    fhirPathPattern: "effectiveDateTime",
    resourceType: "Observation",
    dataElement: "DE04.001",
    dataElementName: "SDOH Effective Date",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "sdoh_effective_date",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_001_SDOH_EFFECTIVE_DATE",
    fieldDescription: "Date SDOH data was recorded"
  },
  {
    fhirPathPattern: "subject",
    resourceType: "Observation",
    dataElement: "(reference)",
    dataElementName: "Observation Subject Reference",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Patient)",
    fieldDescription: "Reference to the Patient resource"
  },
  // ============================================================
  // CONDITION (DE04.021)
  // ============================================================
  {
    fhirPathPattern: "code.coding[*]",
    resourceType: "Condition",
    dataElement: "DE04.021",
    dataElementName: "Pre-existing Conditions",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "pre_existing_conditions",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_021_PRE_EXISTING_CONDITIONS",
    fieldDescription: "Pre-existing conditions code"
  },
  {
    fhirPathPattern: "code",
    resourceType: "Condition",
    dataElement: "DE04.021",
    dataElementName: "Pre-existing Conditions",
    tableName: "CUST_GBIN_MHA_PDS_CLIENT",
    columnName: "pre_existing_conditions",
    jsonPath: "QUAL[].CLIENT.SOCIO_DEMOGRAPHICS.DE04_021_PRE_EXISTING_CONDITIONS",
    fieldDescription: "Pre-existing conditions"
  },
  {
    fhirPathPattern: "subject",
    resourceType: "Condition",
    dataElement: "(reference)",
    dataElementName: "Condition Subject Reference",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Patient)",
    fieldDescription: "Reference to the Patient resource"
  },
  // ============================================================
  // SERVICE REQUEST (DE05 - Referral)
  // ============================================================
  {
    fhirPathPattern: "identifier[*].value",
    resourceType: "ServiceRequest",
    dataElement: "DE05.001",
    dataElementName: "Referral ID",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "referral_id",
    jsonPath: "QUAL[].REFERRAL.DE05_001_REFERRAL_ID.CODE",
    fieldDescription: "Referral identifier value"
  },
  {
    fhirPathPattern: "identifier[*].system",
    resourceType: "ServiceRequest",
    dataElement: "DE05.001",
    dataElementName: "Referral ID System",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "referral_id",
    jsonPath: "QUAL[].REFERRAL.DE05_001_REFERRAL_ID.CODE_SYSTEM",
    fieldDescription: "Referral identifier NamingSystem URL"
  },
  {
    fhirPathPattern: "authoredOn",
    resourceType: "ServiceRequest",
    dataElement: "DE05.002",
    dataElementName: "Referral Received Date",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "referral_received_dt_tm",
    jsonPath: "QUAL[].REFERRAL.DE05_002_REFERRAL_RECEIVED_DATE",
    fieldDescription: "Date the referral was received"
  },
  {
    fhirPathPattern: "status",
    resourceType: "ServiceRequest",
    dataElement: "DE05 (FHIR mandatory)",
    dataElementName: "Referral Status",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "(derived)",
    jsonPath: "QUAL[].REFERRAL.DE05_STATUS.CODE",
    fieldDescription: "ServiceRequest status (active/completed/revoked)"
  },
  {
    fhirPathPattern: "intent",
    resourceType: "ServiceRequest",
    dataElement: "DE05 (FHIR mandatory)",
    dataElementName: "Referral Intent",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "(derived)",
    jsonPath: "QUAL[].REFERRAL.DE05_INTENT.CODE",
    fieldDescription: 'ServiceRequest intent (always "order")'
  },
  {
    fhirPathPattern: "extension[*].valueString",
    resourceType: "ServiceRequest",
    dataElement: "DE05.003",
    dataElementName: "Referral Source",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "referral_source",
    jsonPath: "QUAL[].REFERRAL.DE05_003_REFERRAL_SOURCE",
    fieldDescription: "Source of the referral (free text)"
  },
  {
    fhirPathPattern: "extension[*].valueCodeableConcept",
    resourceType: "ServiceRequest",
    dataElement: "DE05.004/005",
    dataElementName: "Referral Source Type / Referral Type",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "referral_source_type_mapped / referral_type_mapped",
    jsonPath: "QUAL[].REFERRAL.DE05_004_REFERRAL_SOURCE_TYPE or DE05_005_REFERRAL_TYPE",
    fieldDescription: "Referral source type or referral type (coded extension)"
  },
  {
    fhirPathPattern: "extension[*].url",
    resourceType: "ServiceRequest",
    dataElement: "DE05.003/004/005",
    dataElementName: "Referral Extension URL",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "(various)",
    jsonPath: "QUAL[].REFERRAL.(field).EXTENSION_URL",
    fieldDescription: "FHIR extension URL for referral source/type"
  },
  {
    fhirPathPattern: "subject",
    resourceType: "ServiceRequest",
    dataElement: "(reference)",
    dataElementName: "ServiceRequest Subject",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Patient)",
    fieldDescription: "Reference to the Patient resource"
  },
  // ============================================================
  // EPISODE OF CARE (DE06 - Episode)
  // ============================================================
  {
    fhirPathPattern: "identifier[*].value",
    resourceType: "EpisodeOfCare",
    dataElement: "DE06.001",
    dataElementName: "Episode of Care ID",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "episode_of_care_id",
    jsonPath: "QUAL[].EPISODE_OF_CARE.DE06_001_EPISODE_OF_CARE_ID.CODE",
    fieldDescription: "Episode of care identifier value"
  },
  {
    fhirPathPattern: "identifier[*].system",
    resourceType: "EpisodeOfCare",
    dataElement: "DE06.001",
    dataElementName: "Episode of Care ID System",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "episode_of_care_id",
    jsonPath: "QUAL[].EPISODE_OF_CARE.DE06_001_EPISODE_OF_CARE_ID.CODE_SYSTEM",
    fieldDescription: "Episode of care identifier NamingSystem URL"
  },
  {
    fhirPathPattern: "status",
    resourceType: "EpisodeOfCare",
    dataElement: "DE06.002",
    dataElementName: "Episode of Care Status",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "episode_of_care_status_mapped",
    jsonPath: "QUAL[].EPISODE_OF_CARE.DE06_002_EPISODE_OF_CARE_STATUS.CODE",
    fieldDescription: "Episode of care status (active/finished/cancelled)"
  },
  {
    fhirPathPattern: "extension[*].valueDate",
    resourceType: "EpisodeOfCare",
    dataElement: "DE06.003-011",
    dataElementName: "Episode Date Extension",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "(various date fields)",
    jsonPath: "QUAL[].EPISODE_OF_CARE.DE06_003 through DE06_010",
    fieldDescription: "Episode of care date extension (first contact, screening, assessment, initiation, enrollment, termination)"
  },
  {
    fhirPathPattern: "extension[*].valueCodeableConcept",
    resourceType: "EpisodeOfCare",
    dataElement: "DE06.011",
    dataElementName: "Service Termination Reason",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "service_termination_reason",
    jsonPath: "QUAL[].EPISODE_OF_CARE.DE06_011_SERVICE_TERMINATION_REASON",
    fieldDescription: "Reason for service termination (coded value)"
  },
  {
    fhirPathPattern: "extension[*].url",
    resourceType: "EpisodeOfCare",
    dataElement: "DE06.003-011",
    dataElementName: "Episode Extension URL",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "(various)",
    jsonPath: "QUAL[].EPISODE_OF_CARE.(field).EXTENSION_URL",
    fieldDescription: "FHIR extension URL for episode of care fields"
  },
  {
    fhirPathPattern: "patient",
    resourceType: "EpisodeOfCare",
    dataElement: "(reference)",
    dataElementName: "Episode Patient Reference",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Patient)",
    fieldDescription: "Reference to the Patient resource"
  },
  {
    fhirPathPattern: "managingOrganization",
    resourceType: "EpisodeOfCare",
    dataElement: "(reference)",
    dataElementName: "Episode Managing Organization",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Organization)",
    fieldDescription: "Reference to the managing Organization resource"
  },
  // ============================================================
  // APPOINTMENT (DE06.006/007)
  // ============================================================
  {
    fhirPathPattern: "start",
    resourceType: "Appointment",
    dataElement: "DE06.006",
    dataElementName: "Scheduled Appointment Date",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "scheduled_appointment_dt_tm",
    jsonPath: "QUAL[].EPISODE_OF_CARE.APPOINTMENT.DE06_006_SCHEDULED_APPOINTMENT_DATE",
    fieldDescription: "Scheduled appointment start date/time"
  },
  {
    fhirPathPattern: "end",
    resourceType: "Appointment",
    dataElement: "DE06.006",
    dataElementName: "Scheduled Appointment End",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "scheduled_appointment_dt_tm",
    jsonPath: "QUAL[].EPISODE_OF_CARE.APPOINTMENT.DE06_006_SCHEDULED_APPOINTMENT_END",
    fieldDescription: "Scheduled appointment end date/time"
  },
  {
    fhirPathPattern: "status",
    resourceType: "Appointment",
    dataElement: "DE06 (FHIR mandatory)",
    dataElementName: "Appointment Status",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "(derived)",
    jsonPath: "QUAL[].EPISODE_OF_CARE.APPOINTMENT.APPOINTMENT_STATUS.CODE",
    fieldDescription: "Appointment status (pending/booked/cancelled/noshow)"
  },
  {
    fhirPathPattern: "cancelationReason",
    resourceType: "Appointment",
    dataElement: "DE06.007",
    dataElementName: "Cancellation Reason",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "appt_reschedule_reason_mapped",
    jsonPath: "QUAL[].EPISODE_OF_CARE.APPOINTMENT.DE06_007_CANCELLATION_REASON",
    fieldDescription: "Reason for appointment cancellation/reschedule"
  },
  {
    fhirPathPattern: "participant",
    resourceType: "Appointment",
    dataElement: "(reference)",
    dataElementName: "Appointment Participant",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Patient)",
    fieldDescription: "Reference to the Patient resource"
  },
  // ============================================================
  // ORGANIZATION (DE07 - Health Service Provider Organization)
  // ============================================================
  {
    fhirPathPattern: "identifier[*].value",
    resourceType: "Organization",
    dataElement: "DE07.001/002",
    dataElementName: "Organization Number / MOH ID",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "hsp_organization_number / moh_organization_id",
    jsonPath: "QUAL[].SERVICES[].HSP_ORGANIZATION.DE07_001 or DE07_002",
    fieldDescription: "Organization identifier (ConnexOrg or OHFS number)"
  },
  {
    fhirPathPattern: "identifier[*].system",
    resourceType: "Organization",
    dataElement: "DE07.001/002",
    dataElementName: "Organization Identifier System",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "hsp_organization_number / moh_organization_id",
    jsonPath: "QUAL[].SERVICES[].HSP_ORGANIZATION.DE07_001/002.CODE_SYSTEM",
    fieldDescription: "Organization identifier NamingSystem (ConnexOrg or OHFS)"
  },
  {
    fhirPathPattern: "name",
    resourceType: "Organization",
    dataElement: "DE07.003",
    dataElementName: "Organization Name",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "hsp_organization_name",
    jsonPath: "QUAL[].SERVICES[].HSP_ORGANIZATION.DE07_003_ORGANIZATION_NAME",
    fieldDescription: "Health service provider organization name"
  },
  {
    fhirPathPattern: "active",
    resourceType: "Organization",
    dataElement: "DE07.004",
    dataElementName: "Organization Active Flag",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "hsp_organization_active_ind",
    jsonPath: "QUAL[].SERVICES[].HSP_ORGANIZATION.DE07_004_ORGANIZATION_ACTIVE_FLAG.CODE",
    fieldDescription: "Whether the organization is active (true/false)"
  },
  // ============================================================
  // LOCATION (DE08 - Health Service Provider Site)
  // ============================================================
  {
    fhirPathPattern: "identifier[*].value",
    resourceType: "Location",
    dataElement: "DE08.001",
    dataElementName: "Site Number",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "hsp_site_number",
    jsonPath: "QUAL[].SERVICES[].HSP_SITE.DE08_001_SITE_NUMBER.CODE",
    fieldDescription: "Health service provider site number (ConnexSite)"
  },
  {
    fhirPathPattern: "identifier[*].system",
    resourceType: "Location",
    dataElement: "DE08.001",
    dataElementName: "Site Number System",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "hsp_site_number",
    jsonPath: "QUAL[].SERVICES[].HSP_SITE.DE08_001_SITE_NUMBER.CODE_SYSTEM",
    fieldDescription: "Site identifier NamingSystem (ConnexSite)"
  },
  {
    fhirPathPattern: "name",
    resourceType: "Location",
    dataElement: "DE08.002",
    dataElementName: "Site Name",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "hsp_site_name",
    jsonPath: "QUAL[].SERVICES[].HSP_SITE.DE08_002_SITE_NAME",
    fieldDescription: "Health service provider site name"
  },
  {
    fhirPathPattern: "managingOrganization",
    resourceType: "Location",
    dataElement: "(reference)",
    dataElementName: "Location Managing Organization",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Organization)",
    fieldDescription: "Reference to the managing Organization resource"
  },
  // ============================================================
  // HEALTHCARE SERVICE (DE09 - Health Program)
  // ============================================================
  {
    fhirPathPattern: "identifier[*].value",
    resourceType: "HealthcareService",
    dataElement: "DE09.001",
    dataElementName: "Program Number",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "program_number",
    jsonPath: "QUAL[].HEALTH_PROGRAM.DE09_001_PROGRAM_NUMBER.CODE",
    fieldDescription: "Health program number"
  },
  {
    fhirPathPattern: "identifier[*].system",
    resourceType: "HealthcareService",
    dataElement: "DE09.001",
    dataElementName: "Program Number System",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "program_number",
    jsonPath: "QUAL[].HEALTH_PROGRAM.DE09_001_PROGRAM_NUMBER.CODE_SYSTEM",
    fieldDescription: "Program identifier NamingSystem URL"
  },
  {
    fhirPathPattern: "name",
    resourceType: "HealthcareService",
    dataElement: "DE09.002",
    dataElementName: "Program Name",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "program_name",
    jsonPath: "QUAL[].HEALTH_PROGRAM.DE09_002_PROGRAM_NAME",
    fieldDescription: "Health program name"
  },
  {
    fhirPathPattern: "extension[*].valueCodeableConcept",
    resourceType: "HealthcareService",
    dataElement: "DE09.003",
    dataElementName: "Functional Centre",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "functional_centre_mapped",
    jsonPath: "QUAL[].HEALTH_PROGRAM.DE09_003_FUNCTIONAL_CENTRE",
    fieldDescription: "Functional centre code for the health program"
  },
  {
    fhirPathPattern: "extension[*].url",
    resourceType: "HealthcareService",
    dataElement: "DE09.003",
    dataElementName: "Functional Centre Extension URL",
    tableName: "CUST_GBIN_MHA_PDS_EPISODE",
    columnName: "functional_centre_mapped",
    jsonPath: "QUAL[].HEALTH_PROGRAM.DE09_003_FUNCTIONAL_CENTRE.EXTENSION_URL",
    fieldDescription: "FHIR extension URL for functional centre code"
  },
  {
    fhirPathPattern: "providedBy",
    resourceType: "HealthcareService",
    dataElement: "(reference)",
    dataElementName: "HealthcareService Provider",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Organization)",
    fieldDescription: "Reference to the providing Organization"
  },
  // ============================================================
  // ENCOUNTER (DE10 - Health Service Event)
  // ============================================================
  {
    fhirPathPattern: "identifier[*].value",
    resourceType: "Encounter",
    dataElement: "DE10.001",
    dataElementName: "Service Event ID",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "service_event_id",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_001_EVENT_ID.CODE",
    fieldDescription: "Health service event identifier"
  },
  {
    fhirPathPattern: "identifier[*].system",
    resourceType: "Encounter",
    dataElement: "DE10.001",
    dataElementName: "Service Event ID System",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "service_event_id",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_001_EVENT_ID.CODE_SYSTEM",
    fieldDescription: "Service event identifier NamingSystem URL"
  },
  {
    fhirPathPattern: "class",
    resourceType: "Encounter",
    dataElement: "DE10 (FHIR mandatory)",
    dataElementName: "Encounter Class",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "(derived)",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_CLASS.CODE",
    fieldDescription: "Encounter class (AMB=ambulatory, VR=virtual)"
  },
  {
    fhirPathPattern: "status",
    resourceType: "Encounter",
    dataElement: "DE10.008",
    dataElementName: "Encounter Status",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "encounter_status_mapped",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_008_ENCOUNTER_STATUS.CODE",
    fieldDescription: "Encounter status (finished/in-progress/cancelled)"
  },
  {
    fhirPathPattern: "period.start",
    resourceType: "Encounter",
    dataElement: "DE10.004",
    dataElementName: "Encounter Date",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "service_event_dt_tm",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_004_ENCOUNTER_DATE",
    fieldDescription: "Date of the service encounter"
  },
  {
    fhirPathPattern: "extension[*].valueCodeableConcept",
    resourceType: "Encounter",
    dataElement: "DE10.002/003",
    dataElementName: "Service Modality / Modality Type",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "service_modality_mapped / service_modality_type_mapped",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_002 or DE10_003",
    fieldDescription: "Service modality or modality type (coded extension)"
  },
  {
    fhirPathPattern: "extension[*].valueString",
    resourceType: "Encounter",
    dataElement: "DE10.005",
    dataElementName: "Group Service ID",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "group_service_id",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_005_GROUP_SERVICE_ID",
    fieldDescription: "Group service session identifier"
  },
  {
    fhirPathPattern: "extension[*].valueInteger",
    resourceType: "Encounter",
    dataElement: "DE10.006/007",
    dataElementName: "Direct/Indirect Service Minutes",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "direct_service_minutes / indirect_service_minutes",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.DE10_006 or DE10_007",
    fieldDescription: "Direct or indirect service minutes (integer extension)"
  },
  {
    fhirPathPattern: "extension[*].url",
    resourceType: "Encounter",
    dataElement: "DE10.002-007",
    dataElementName: "Encounter Extension URL",
    tableName: "CUST_GBIN_MHA_PDS_SERVICE",
    columnName: "(various)",
    jsonPath: "QUAL[].SERVICES[].HEALTH_SERVICE_EVENT.(field).EXTENSION_URL",
    fieldDescription: "FHIR extension URL for encounter fields"
  },
  {
    fhirPathPattern: "subject",
    resourceType: "Encounter",
    dataElement: "(reference)",
    dataElementName: "Encounter Subject",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Patient)",
    fieldDescription: "Reference to the Patient resource"
  },
  {
    fhirPathPattern: "episodeOfCare",
    resourceType: "Encounter",
    dataElement: "(reference)",
    dataElementName: "Encounter Episode Reference",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to EpisodeOfCare)",
    fieldDescription: "Reference to the EpisodeOfCare resource"
  },
  {
    fhirPathPattern: "location",
    resourceType: "Encounter",
    dataElement: "(reference)",
    dataElementName: "Encounter Location",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR reference to Location)",
    fieldDescription: "Reference to the service delivery Location"
  },
  // ============================================================
  // BUNDLE-level meta/profile errors
  // ============================================================
  {
    fhirPathPattern: "meta.profile[*]",
    resourceType: "Bundle",
    dataElement: "(FHIR profile)",
    dataElementName: "Bundle Profile",
    tableName: "",
    columnName: "",
    jsonPath: "(FHIR Bundle metadata)",
    fieldDescription: "FHIR profile URL for MHA PDS Bundle validation"
  }
];
function parseFHIRPath(rawPath) {
  let path = rawPath.trim();
  path = path.replace(/,\s*Line\[\d+\]\s*Col\[\d+\]/, "");
  let entryIndex = null;
  let resourceType = "";
  let resourceId = null;
  let fieldPath = "";
  const bundlePattern = /^Bundle\.entry\[(\d+)\]\.resource\s*\/\*\s*(\w+)\/([\w-]+)\s*\*\/\.?\s*(.*)$/;
  let match = path.match(bundlePattern);
  if (match) {
    entryIndex = parseInt(match[1], 10);
    resourceType = match[2];
    resourceId = match[3];
    fieldPath = match[4] || "";
  }
  if (!resourceType) {
    const simplePattern = /^Bundle\.entry\[(\d+)\]\.resource\.(.+)$/;
    match = path.match(simplePattern);
    if (match) {
      entryIndex = parseInt(match[1], 10);
      fieldPath = match[2] || "";
    }
  }
  if (!resourceType && !entryIndex) {
    const standalonePattern = /^(\w+)\.(.+)$/;
    match = path.match(standalonePattern);
    if (match) {
      resourceType = match[1];
      fieldPath = match[2] || "";
    }
  }
  let cleanPath = "";
  if (resourceType) {
    cleanPath = fieldPath ? `${resourceType}.${fieldPath}` : resourceType;
  } else if (entryIndex !== null) {
    cleanPath = fieldPath ? `entry[${entryIndex}].${fieldPath}` : `entry[${entryIndex}]`;
  } else {
    cleanPath = path;
  }
  return {
    rawPath,
    cleanPath,
    resourceType,
    fieldPath,
    entryIndex,
    resourceId
  };
}
function normalizeFieldPath(fieldPath) {
  return fieldPath.replace(/\[\d+\]/g, "[*]");
}
function calculateMatchScore(normalizedPath, pattern) {
  if (normalizedPath === pattern) return 100;
  if (normalizedPath.startsWith(pattern + ".") || normalizedPath.startsWith(pattern + "[")) {
    return 50 + pattern.length;
  }
  if (normalizedPath === pattern || normalizedPath.endsWith("." + pattern)) {
    return 40 + pattern.length;
  }
  const pathSegments = normalizedPath.split(".");
  const patternSegments = pattern.split(".");
  let pathIdx = 0;
  let matchedSegments = 0;
  for (const pSeg of patternSegments) {
    while (pathIdx < pathSegments.length) {
      if (pathSegments[pathIdx] === pSeg) {
        matchedSegments++;
        pathIdx++;
        break;
      }
      pathIdx++;
    }
  }
  if (matchedSegments === patternSegments.length) {
    return 20 + matchedSegments * 5;
  }
  return 0;
}
function findBestMatch(parsed) {
  if (!parsed.fieldPath && !parsed.resourceType) return null;
  const normalizedPath = normalizeFieldPath(parsed.fieldPath);
  const candidates = parsed.resourceType ? FHIR_PATH_MAPPINGS.filter((m) => m.resourceType === parsed.resourceType) : FHIR_PATH_MAPPINGS;
  let bestMatch = null;
  let bestScore = 0;
  for (const mapping of candidates) {
    const score = calculateMatchScore(normalizedPath, mapping.fhirPathPattern);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = mapping;
    }
  }
  return bestMatch;
}
function formatHumanReadablePath(parsed) {
  if (!parsed.resourceType && !parsed.fieldPath) {
    return parsed.cleanPath;
  }
  const normalizedField = normalizeFieldPath(parsed.fieldPath);
  if (parsed.resourceType) {
    return normalizedField ? `${parsed.resourceType}.${normalizedField}` : parsed.resourceType;
  }
  return normalizedField || parsed.cleanPath;
}

// src/app/logs/utils/fhir-issue-enhancer.ts
function enhanceSingleIssue(issue, submittedBundle) {
  const enrichedLocations = issue.locations.map((rawPath) => {
    const parsed = parseFHIRPath(rawPath);
    const mapping = findBestMatch(parsed);
    const submittedValue = extractValueAtPath(submittedBundle, rawPath);
    const humanReadablePath = formatHumanReadablePath(parsed);
    return {
      rawPath,
      cleanPath: parsed.cleanPath,
      humanReadablePath,
      resourceType: parsed.resourceType,
      dataElement: mapping?.dataElement ?? null,
      dataElementName: mapping?.dataElementName ?? null,
      tableName: mapping?.tableName ?? null,
      columnName: mapping?.columnName ?? null,
      jsonPath: mapping?.jsonPath ?? null,
      fieldDescription: mapping?.fieldDescription ?? null,
      submittedValue
    };
  });
  return __spreadProps(__spreadValues({}, issue), {
    enrichedLocations
  });
}
function enhanceIssues(issues, submittedBundle) {
  return issues.map((issue) => enhanceSingleIssue(issue, submittedBundle));
}
function enhanceGroupedIssues(grouped, submittedBundle) {
  return {
    errors: enhanceIssues(grouped.errors, submittedBundle),
    warnings: enhanceIssues(grouped.warnings, submittedBundle),
    information: enhanceIssues(grouped.information, submittedBundle),
    errorCount: grouped.errorCount,
    warningCount: grouped.warningCount,
    infoCount: grouped.infoCount,
    totalCount: grouped.totalCount
  };
}

// src/app/logs/utils/submission-detail-extractor.ts
function findIdentifierBySystem(resource, systemSubstring) {
  const identifiers = resource["identifier"];
  if (!identifiers) return "";
  const match = identifiers.find((id) => {
    const system = id["system"];
    return system?.includes(systemSubstring);
  });
  return match?.["value"] || "";
}
function findIdentifierByTypeCode(resource, typeCode) {
  const identifiers = resource["identifier"];
  if (!identifiers) return "";
  const match = identifiers.find((id) => {
    const type = id["type"];
    const codings = type?.["coding"];
    return codings?.some((c) => c["code"] === typeCode);
  });
  return match?.["value"] || "";
}
function findExtensionValue(resource, urlSubstring) {
  const extensions = resource["extension"];
  if (!extensions) return "";
  const ext = extensions.find((e) => {
    const url = e["url"];
    return url?.includes(urlSubstring);
  });
  if (!ext) return "";
  if (ext["valueDate"]) return ext["valueDate"];
  if (ext["valueDateTime"]) return ext["valueDateTime"];
  if (ext["valueBoolean"] !== void 0) return String(ext["valueBoolean"]);
  if (ext["valueInteger"] !== void 0) return String(ext["valueInteger"]);
  if (ext["valueString"]) return ext["valueString"];
  if (ext["valueCode"]) return ext["valueCode"];
  if (ext["valueCodeableConcept"]) {
    return formatCodeableConcept(ext["valueCodeableConcept"]);
  }
  return "";
}
function formatCodeableConcept(cc) {
  if (!cc) return "";
  const codings = cc["coding"];
  if (!codings?.length) {
    return cc["text"] || "";
  }
  const first = codings[0];
  const display = first["display"] || "";
  const code = first["code"] || "";
  if (display && code) return `${display} (${code})`;
  return display || code || "";
}
function createField(label, submittedVal, receivedVal) {
  return {
    label,
    submittedValue: submittedVal,
    receivedValue: receivedVal,
    matches: submittedVal === receivedVal
  };
}
function matchResourceByFullUrl(responseBundle, fullUrl) {
  if (!responseBundle?.entry || !fullUrl) return null;
  return responseBundle.entry.find((e) => e.fullUrl === fullUrl) ?? null;
}
function getStr(resource, key) {
  const val = resource[key];
  if (val === null || val === void 0) return "";
  return String(val);
}
function extractPatientCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subNames = sub["name"];
  const recNames = rec?.["name"];
  const subName = subNames?.[0];
  const recName = recNames?.[0];
  const subNameStr = formatPatientName(subName);
  const recNameStr = rec ? formatPatientName(recName) : subNameStr;
  const subMRN = findIdentifierByTypeCode(sub, "MR");
  const recMRN = rec ? findIdentifierByTypeCode(rec, "MR") : subMRN;
  const subHCN = findIdentifierByTypeCode(sub, "JHN");
  const recHCN = rec ? findIdentifierByTypeCode(rec, "JHN") : subHCN;
  const subHCNProv = findHCNProvince(sub);
  const recHCNProv = rec ? findHCNProvince(rec) : subHCNProv;
  const subDOB = getStr(sub, "birthDate");
  const recDOB = rec ? getStr(rec, "birthDate") : subDOB;
  const subDOBEst = findExtensionValue(sub, "patient-birthDateEstimated");
  const recDOBEst = rec ? findExtensionValue(rec, "patient-birthDateEstimated") : subDOBEst;
  const subActive = getStr(sub, "active");
  const recActive = rec ? getStr(rec, "active") : subActive;
  const subAddr = sub["address"]?.[0];
  const recAddr = rec?.["address"]?.[0];
  const subCity = subAddr?.["city"] || "";
  const recCity = rec ? recAddr?.["city"] || "" : subCity;
  const subProvince = subAddr?.["state"] || "";
  const recProvince = rec ? recAddr?.["state"] || "" : subProvince;
  const subPostal = subAddr?.["postalCode"] || "";
  const recPostal = rec ? recAddr?.["postalCode"] || "" : subPostal;
  const subLangComfort = extractCommunicationLanguage(sub, "428996008");
  const recLangComfort = rec ? extractCommunicationLanguage(rec, "428996008") : subLangComfort;
  const subLangOfficial = extractCommunicationLanguage(sub, "OFL");
  const recLangOfficial = rec ? extractCommunicationLanguage(rec, "OFL") : subLangOfficial;
  const fields = [
    createField("Name", subNameStr, recNameStr),
    createField("MRN", subMRN, recMRN),
    createField("HCN", subHCN, recHCN),
    createField("HCN Province", subHCNProv, recHCNProv),
    createField("DOB", subDOB, recDOB),
    createField("DOB Estimated", subDOBEst, recDOBEst),
    createField("Active", subActive, recActive),
    createField("City", subCity, recCity),
    createField("Province", subProvince, recProvince),
    createField("Postal Code", subPostal, recPostal),
    createField("Language of Comfort", subLangComfort, recLangComfort),
    createField("Official Language", subLangOfficial, recLangOfficial)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("Patient", "Patient", "DE01-DE04", submittedEntry.fullUrl, fields, "card-patient");
}
function formatPatientName(name) {
  if (!name) return "";
  const family = name["family"] || "";
  const given = name["given"]?.join(" ") || "";
  if (family && given) return `${family}, ${given}`;
  return family || given || "";
}
function findHCNProvince(resource) {
  const identifiers = resource["identifier"];
  if (!identifiers) return "";
  const hcnId = identifiers.find((id) => {
    const type = id["type"];
    const codings = type?.["coding"];
    return codings?.some((c) => c["code"] === "JHN");
  });
  if (!hcnId) return "";
  const extensions = hcnId["extension"];
  if (extensions?.length) {
    const provExt = extensions.find(
      (e) => e["url"]?.includes("jurisdiction")
    );
    if (provExt) {
      const cc = provExt["valueCodeableConcept"];
      if (cc) return formatCodeableConcept(cc);
    }
  }
  const system = hcnId["system"] || "";
  const provMatch = system.match(/\/([A-Z]{2})$/);
  return provMatch ? provMatch[1] : "";
}
function extractCommunicationLanguage(resource, extensionCode) {
  const communications = resource["communication"];
  if (!communications) return "";
  for (const comm of communications) {
    const extensions = comm["extension"];
    if (!extensions) continue;
    const langUseExt = extensions.find((e) => {
      const url = e["url"];
      return url?.includes("LanguageUse");
    });
    if (!langUseExt) continue;
    const cc = langUseExt["valueCodeableConcept"];
    const codings = cc?.["coding"];
    if (!codings?.some((c) => c["code"] === extensionCode)) continue;
    const langCC = comm["language"];
    return formatCodeableConcept(langCC);
  }
  return "";
}
function extractOrganizationCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subName = getStr(sub, "name");
  const recName = rec ? getStr(rec, "name") : subName;
  const subConnex = findIdentifierBySystem(sub, "ConnexOrg");
  const recConnex = rec ? findIdentifierBySystem(rec, "ConnexOrg") : subConnex;
  const subOHFS = findIdentifierBySystem(sub, "OHFS");
  const recOHFS = rec ? findIdentifierBySystem(rec, "OHFS") : subOHFS;
  const subActive = getStr(sub, "active");
  const recActive = rec ? getStr(rec, "active") : subActive;
  const fields = [
    createField("Name", subName, recName),
    createField("ConnexOrg ID", subConnex, recConnex),
    createField("OHFS ID", subOHFS, recOHFS),
    createField("Active", subActive, recActive)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("Organization", "Organization", "DE07", submittedEntry.fullUrl, fields, "card-organization");
}
function extractLocationCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subName = getStr(sub, "name");
  const recName = rec ? getStr(rec, "name") : subName;
  const subConnexSite = findIdentifierBySystem(sub, "ConnexSite");
  const recConnexSite = rec ? findIdentifierBySystem(rec, "ConnexSite") : subConnexSite;
  const fields = [
    createField("Name", subName, recName),
    createField("ConnexSite ID", subConnexSite, recConnexSite)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("Location", "Location", "DE08", submittedEntry.fullUrl, fields, "card-location");
}
function extractServiceRequestCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subRefId = findIdentifierBySystem(sub, "referral");
  const recRefId = rec ? findIdentifierBySystem(rec, "referral") : subRefId;
  const subStatus = getStr(sub, "status");
  const recStatus = rec ? getStr(rec, "status") : subStatus;
  const subRefSourceType = extractCategoryDisplay(sub);
  const recRefSourceType = rec ? extractCategoryDisplay(rec) : subRefSourceType;
  const subRefType = formatCodeableConcept(sub["code"]);
  const recRefType = rec ? formatCodeableConcept(rec["code"]) : subRefType;
  const subAuthored = getStr(sub, "authoredOn");
  const recAuthored = rec ? getStr(rec, "authoredOn") : subAuthored;
  const fields = [
    createField("Referral ID", subRefId, recRefId),
    createField("Status", subStatus, recStatus),
    createField("Referral Source Type", subRefSourceType, recRefSourceType),
    createField("Referral Type", subRefType, recRefType),
    createField("Authored Date", subAuthored, recAuthored)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("ServiceRequest", "Service Request", "DE05", submittedEntry.fullUrl, fields, "card-service-request");
}
function extractCategoryDisplay(resource) {
  const categories = resource["category"];
  if (!categories?.length) return "";
  return formatCodeableConcept(categories[0]);
}
function extractEpisodeOfCareCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subEpId = findIdentifierBySystem(sub, "episode-of-care");
  const recEpId = rec ? findIdentifierBySystem(rec, "episode-of-care") : subEpId;
  const subStatus = getStr(sub, "status");
  const recStatus = rec ? getStr(rec, "status") : subStatus;
  const subScreenDate = findExtensionValue(sub, "eligibilityScreeningDate");
  const recScreenDate = rec ? findExtensionValue(rec, "eligibilityScreeningDate") : subScreenDate;
  const subInitDate = findExtensionValue(sub, "ServiceInitiationDate");
  const recInitDate = rec ? findExtensionValue(rec, "ServiceInitiationDate") : subInitDate;
  const subPeriod = sub["period"];
  const recPeriod = rec?.["period"];
  const subTermDate = subPeriod?.["end"] || "";
  const recTermDate = rec ? recPeriod?.["end"] || "" : subTermDate;
  const subTermReason = findExtensionValue(sub, "service-termination-reason");
  const recTermReason = rec ? findExtensionValue(rec, "service-termination-reason") : subTermReason;
  const fields = [
    createField("Episode ID", subEpId, recEpId),
    createField("Status", subStatus, recStatus),
    createField("Screening Date", subScreenDate, recScreenDate),
    createField("Service Initiation Date", subInitDate, recInitDate),
    createField("Service Termination Date", subTermDate, recTermDate),
    createField("Termination Reason", subTermReason, recTermReason)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("EpisodeOfCare", "Episode of Care", "DE06", submittedEntry.fullUrl, fields, "card-episode");
}
function extractHealthcareServiceCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subName = getStr(sub, "name");
  const recName = rec ? getStr(rec, "name") : subName;
  const subProgId = findIdentifierBySystem(sub, "HealthcareService");
  const recProgId = rec ? findIdentifierBySystem(rec, "HealthcareService") : subProgId;
  const subFuncCentre = extractFunctionalCentreCode(sub);
  const recFuncCentre = rec ? extractFunctionalCentreCode(rec) : subFuncCentre;
  const fields = [
    createField("Program Name", subName, recName),
    createField("Program ID", subProgId, recProgId),
    createField("Functional Centre Code", subFuncCentre, recFuncCentre)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("HealthcareService", "Healthcare Service", "DE09", submittedEntry.fullUrl, fields, "card-healthcare-service");
}
function extractFunctionalCentreCode(resource) {
  const types = resource["type"];
  if (types?.length) {
    const cc = formatCodeableConcept(types[0]);
    if (cc) return cc;
  }
  const categories = resource["category"];
  if (categories?.length) {
    return formatCodeableConcept(categories[0]);
  }
  return "";
}
function extractEncounterCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subEncId = findIdentifierBySystem(sub, "encounter");
  const recEncId = rec ? findIdentifierBySystem(rec, "encounter") : subEncId;
  const subStatus = getStr(sub, "status");
  const recStatus = rec ? getStr(rec, "status") : subStatus;
  const subClass = formatCoding(sub["class"]);
  const recClass = rec ? formatCoding(rec["class"]) : subClass;
  const subTypes = sub["type"];
  const recTypes = rec?.["type"];
  const subType = subTypes?.length ? formatCodeableConcept(subTypes[0]) : "";
  const recType = rec ? recTypes?.length ? formatCodeableConcept(recTypes[0]) : "" : subType;
  const subDirect = findExtensionValue(sub, "direct-minutes");
  const recDirect = rec ? findExtensionValue(rec, "direct-minutes") : subDirect;
  const subIndirect = findExtensionValue(sub, "indirect-minutes");
  const recIndirect = rec ? findExtensionValue(rec, "indirect-minutes") : subIndirect;
  const subPeriod = sub["period"];
  const recPeriod = rec?.["period"];
  const subServiceDate = subPeriod?.["start"] || "";
  const recServiceDate = rec ? recPeriod?.["start"] || "" : subServiceDate;
  const fields = [
    createField("Service Event ID", subEncId, recEncId),
    createField("Status", subStatus, recStatus),
    createField("Class", subClass, recClass),
    createField("Type", subType, recType),
    createField("Direct Minutes", subDirect, recDirect),
    createField("Indirect Minutes", subIndirect, recIndirect),
    createField("Service Date", subServiceDate, recServiceDate)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("Encounter", "Encounter", "DE10", submittedEntry.fullUrl, fields, "card-encounter");
}
function formatCoding(coding) {
  if (!coding) return "";
  const display = coding["display"] || "";
  const code = coding["code"] || "";
  if (display && code) return `${display} (${code})`;
  return display || code || "";
}
function extractAppointmentCard(submittedEntry, receivedEntry) {
  const sub = submittedEntry.resource;
  const rec = receivedEntry?.resource;
  const subStatus = getStr(sub, "status");
  const recStatus = rec ? getStr(rec, "status") : subStatus;
  const subCancelReason = formatCodeableConcept(sub["cancelationReason"]);
  const recCancelReason = rec ? formatCodeableConcept(rec["cancelationReason"]) : subCancelReason;
  const subStart = getStr(sub, "start");
  const recStart = rec ? getStr(rec, "start") : subStart;
  const subEnd = getStr(sub, "end");
  const recEnd = rec ? getStr(rec, "end") : subEnd;
  const subParticipants = sub["participant"];
  const recParticipants = rec?.["participant"];
  const subPartStatus = subParticipants?.[0]?.["status"] || "";
  const recPartStatus = rec ? recParticipants?.[0]?.["status"] || "" : subPartStatus;
  const fields = [
    createField("Status", subStatus, recStatus),
    createField("Cancellation Reason", subCancelReason, recCancelReason),
    createField("Start", subStart, recStart),
    createField("End", subEnd, recEnd),
    createField("Participant Status", subPartStatus, recPartStatus)
  ].filter((f) => f.submittedValue !== "");
  return buildCard("Appointment", "Appointment", "DE10", submittedEntry.fullUrl, fields, "card-appointment");
}
function extractDemographicsCard(observationEntries) {
  const observations = [];
  for (const entry of observationEntries) {
    const resource = entry.resource;
    const code = resource["code"];
    const codings = code?.["coding"];
    const name = codings?.[0]?.["display"] || "";
    const codeSystem = codings?.[0]?.["system"] || "";
    let value = "";
    const vCC = resource["valueCodeableConcept"];
    if (vCC) {
      value = formatCodeableConcept(vCC);
    } else if (resource["valueString"]) {
      value = resource["valueString"];
    } else if (resource["valueQuantity"]) {
      const qty = resource["valueQuantity"];
      value = `${qty["value"] || ""}${qty["unit"] ? " " + qty["unit"] : ""}`;
    } else if (resource["valueInteger"] !== void 0) {
      value = String(resource["valueInteger"]);
    } else if (resource["valueBoolean"] !== void 0) {
      value = String(resource["valueBoolean"]);
    }
    const effectiveDate = resource["effectiveDateTime"] || "";
    if (name || value) {
      observations.push({ name, value, codeSystem: simplifyCodeSystem(codeSystem), effectiveDate });
    }
    const extensions = resource["extension"];
    if (extensions) {
      const bic = extensions.find((e) => e["url"]?.includes("bornInCanada"));
      if (bic) {
        const bicValue = bic["valueCode"] || formatCodeableConcept(bic["valueCodeableConcept"]);
        if (bicValue) {
          observations.push({ name: "Born in Canada", value: bicValue, codeSystem: "", effectiveDate });
        }
      }
      const yac = extensions.find((e) => e["url"]?.includes("yearArrivedInCanada"));
      if (yac) {
        const yacValue = yac["valueDateTime"] || yac["valueDate"] || "";
        if (yacValue) {
          observations.push({ name: "Year Arrived in Canada", value: yacValue, codeSystem: "", effectiveDate });
        }
      }
    }
  }
  return {
    resourceType: "Demographics",
    displayName: "Demographics",
    deCode: "DE04",
    fullUrl: "demographics",
    observations,
    hasDiffs: false,
    cssClass: "card-demographics",
    id: "demographics"
  };
}
function simplifyCodeSystem(system) {
  if (!system) return "";
  if (system.includes("loinc")) return "LOINC";
  if (system.includes("snomed")) return "SNOMED";
  if (system.includes("fhir")) return "FHIR";
  const parts = system.split("/");
  return parts[parts.length - 1] || system;
}
function buildCard(resourceType, displayName, deCode, fullUrl, fields, cssClass) {
  return {
    resourceType,
    displayName,
    deCode,
    fullUrl,
    fields,
    hasDiffs: fields.some((f) => !f.matches),
    cssClass,
    id: fullUrl || resourceType
  };
}
var RESOURCE_ORDER = {
  "Patient": 0,
  "Organization": 1,
  "Location": 2,
  "ServiceRequest": 3,
  "EpisodeOfCare": 4,
  "HealthcareService": 5,
  "Appointment": 6,
  "Encounter": 7
};
var RESOURCE_EXTRACTORS = {
  "Patient": extractPatientCard,
  "Organization": extractOrganizationCard,
  "Location": extractLocationCard,
  "ServiceRequest": extractServiceRequestCard,
  "EpisodeOfCare": extractEpisodeOfCareCard,
  "HealthcareService": extractHealthcareServiceCard,
  "Appointment": extractAppointmentCard,
  "Encounter": extractEncounterCard
};
function buildSubmissionDetail(submittedBundle, responseBundle, isSuccess) {
  if (!submittedBundle?.entry?.length) return null;
  const cards = [];
  const observationEntries = [];
  const sortedEntries = [...submittedBundle.entry].sort((a, b) => {
    const orderA = RESOURCE_ORDER[a.resource?.resourceType || ""] ?? 99;
    const orderB = RESOURCE_ORDER[b.resource?.resourceType || ""] ?? 99;
    return orderA - orderB;
  });
  for (const entry of sortedEntries) {
    const resourceType = entry.resource?.resourceType;
    if (!resourceType) continue;
    if (resourceType === "Observation") {
      observationEntries.push(entry);
      continue;
    }
    const extractor = RESOURCE_EXTRACTORS[resourceType];
    if (!extractor) continue;
    const receivedEntry = matchResourceByFullUrl(responseBundle, entry.fullUrl);
    cards.push(extractor(entry, receivedEntry));
  }
  if (observationEntries.length > 0) {
    cards.push(extractDemographicsCard(observationEntries));
  }
  const allMatch = cards.every((card) => !card.hasDiffs);
  return { cards, allMatch };
}

// src/app/logs/models/submission-detail.model.ts
function isDemographicsCard(card) {
  return card.resourceType === "Demographics";
}

// src/app/logs/components/mirth-callback-viewer.ts
function _forTrack02($index, $item) {
  return this.trackByLocation($index + 1, $item);
}
function MirthCallbackViewerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "div", 3);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading callback data...");
    \u0275\u0275domElementEnd()();
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "Bundle ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.bundleId) || "N/A");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 13)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3, "Transaction ID (X-LobTxId)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.transactionId) || "N/A");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2192 ", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.resourcesAccepted, " accepted");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorCount());
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 33);
    \u0275\u0275text(1, "changed");
    \u0275\u0275domElementEnd();
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_1_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const obs_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obs_r6.codeSystem);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 41);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_1_For_11_Conditional_5_Template, 2, 1, "span", 42);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "td", 43);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const obs_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obs_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", obs_r6.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(obs_r6.codeSystem ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obs_r6.effectiveDate);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 35)(1, "thead")(2, "tr")(3, "th", 37);
    \u0275\u0275text(4, "Observation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th", 38);
    \u0275\u0275text(6, "Value");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th", 39);
    \u0275\u0275text(8, "Effective Date");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_1_For_11_Template, 8, 4, "tr", null, \u0275\u0275componentInstance().trackByObservation, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275repeater(card_r5.observations);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r7.submittedValue);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 49);
    \u0275\u0275text(4, "\u2192");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r7.submittedValue);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(field_r7.receivedValue);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 45);
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_For_3_Conditional_4_Template, 2, 1, "span", 46)(5, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_For_3_Conditional_5_Template, 7, 2, "span", 47);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(field_r7.matches ? 4 : 5);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 36)(1, "tbody");
    \u0275\u0275repeaterCreate(2, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_For_3_Template, 6, 2, "tr", null, \u0275\u0275componentInstance().trackByFieldLabel, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(card_r5.fields);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 34);
    \u0275\u0275conditionalCreate(1, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_1_Template, 12, 0, "table", 35)(2, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Conditional_2_Template, 4, 0, "table", 36);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isDemographics(card_r5) ? 1 : 2);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 28)(1, "button", 29);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Template_button_click_1_listener() {
      const card_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleCardExpand(card_r5.id));
    });
    \u0275\u0275domElementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_8_Template, 2, 0, "span", 33);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Conditional_9_Template, 3, 1, "div", 34);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(card_r5.cssClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isCardExpanded(card_r5.id) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r5.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r5.deCode);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r5.hasDiffs ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isCardExpanded(card_r5.id) ? 9 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const error_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r8);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Parse Warnings");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "ul", 51);
    \u0275\u0275repeaterCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_Conditional_4_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(parsed_r2.parseErrors);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275repeaterCreate(2, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_For_3_Template, 10, 7, "div", 27, \u0275\u0275componentInstance().trackByCardId, true);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_Conditional_4_Template, 5, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.cards);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.parseErrors) && parsed_r2.parseErrors.length > 0 ? 4 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_For_5_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const id_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(id_r11);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 57);
    \u0275\u0275repeaterCreate(1, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_For_5_Conditional_8_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const resource_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(resource_r10.ids);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 53)(1, "button", 54);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_For_5_Template_button_click_1_listener() {
      const resource_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleResourceExpand(resource_r10.type));
    });
    \u0275\u0275domElementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_For_5_Conditional_8_Template, 3, 0, "ul", 57);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const resource_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isResourceExpanded(resource_r10.type) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r10.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", resource_r10.count, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isResourceExpanded(resource_r10.type) ? 8 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 53)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const resource_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r12.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", resource_r12.count, ")");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Accepted Resources");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 52);
    \u0275\u0275repeaterCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_6_For_4_Template, 5, 2, "div", 53, \u0275\u0275componentInstance().trackByResourceType, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.responseResourceSummary());
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const error_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r13);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Parse Warnings");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "ul", 51);
    \u0275\u0275repeaterCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_7_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(parsed_r2.parseErrors);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "h4");
    \u0275\u0275text(2, "Submitted Resources");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 52);
    \u0275\u0275repeaterCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_For_5_Template, 9, 4, "div", 53, \u0275\u0275componentInstance().trackByResourceType, true);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_6_Template, 5, 0);
    \u0275\u0275conditionalCreate(7, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Conditional_7_Template, 5, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.submittedResourceSummary());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.status) === "SUCCESS" && ctx_r2.responseResourceSummary().length > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.parseErrors) && parsed_r2.parseErrors.length > 0 ? 7 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_0_Template, 5, 1, "div", 25)(1, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_1_Template, 8, 2, "div", 25);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r2.isChannel03() && ctx_r2.submissionDetail()) ? 0 : 1, tmp_4_0);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 21)(1, "div", 58)(2, "button", 59);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_66_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(ctx_r2.formattedSubmittedData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "pre", 60)(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", ctx_r2.copySuccess());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.copySuccess() ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formattedSubmittedData());
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 21)(1, "div", 58)(2, "button", 59);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_67_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(ctx_r2.formattedResponseData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "pre", 60)(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", ctx_r2.copySuccess());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.copySuccess() ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formattedResponseData());
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2, "Data Validation Error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 64);
    \u0275\u0275text(4, "Channel 02");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 65)(6, "h4", 66);
    \u0275\u0275text(7, "FHIR Transformation Error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 67)(9, "div", 68)(10, "div", 69)(11, "span", 70);
    \u0275\u0275text(12, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 71);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 72);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("HTTP ", (tmp_6_0 = ctx_r2.parsedCallback()) == null ? null : tmp_6_0.httpStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.parsedCallback()) == null ? null : tmp_7_0.responseText);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const enhanced_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", enhanced_r16.errorCount, " ", enhanced_r16.errorCount === 1 ? "Error" : "Errors", " ");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const enhanced_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", enhanced_r16.warningCount, " ", enhanced_r16.warningCount === 1 ? "Warning" : "Warnings", " ");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const enhanced_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", enhanced_r16.infoCount, " Info ");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(issue_r17.messageId);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", issue_r17.count, "x");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const location_r19 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(location_r19.dataElement);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "Resource");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const location_r19 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(location_r19.resourceType);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "Database");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const location_r19 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", location_r19.tableName, ".", location_r19.columnName);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "JSON Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const location_r19 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(location_r19.jsonPath);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "Description");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 91);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const location_r19 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(location_r19.fieldDescription);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 88)(1, "div", 82)(2, "span", 31);
    \u0275\u0275text(3, "Cerner Source");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 34)(5, "div", 83)(6, "span", 84);
    \u0275\u0275text(7, "Data Element");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 91)(9, "span", 92);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 93);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(13, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_13_Template, 5, 2, "div", 83);
    \u0275\u0275conditionalCreate(14, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_14_Template, 5, 1, "div", 83);
    \u0275\u0275conditionalCreate(15, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_15_Template, 5, 1, "div", 83);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const location_r19 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(location_r19.dataElement);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(location_r19.dataElementName);
    \u0275\u0275advance();
    \u0275\u0275conditional(location_r19.tableName ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(location_r19.jsonPath ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(location_r19.fieldDescription ? 15 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 96);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const location_r19 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Value contains ", location_r19.submittedValue.valueDisplay.length, " characters ");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 89)(1, "div", 82)(2, "span", 31);
    \u0275\u0275text(3, "Submitted Value");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 34)(5, "div", 94)(6, "pre", 95);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_18_Conditional_8_Template, 2, 1, "div", 96);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const location_r19 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(location_r19.submittedValue.valueDisplay);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isValueTooLong(location_r19.submittedValue.valueDisplay) ? 8 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 98);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const loc_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r20.humanReadablePath || loc_r20.cleanPath);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 90)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_19_For_4_Template, 2, 1, "div", 98, _forTrack02, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r17 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", issue_r17.enrichedLocations.length - 1, " more location(s)");
    \u0275\u0275advance();
    \u0275\u0275repeater(issue_r17.enrichedLocations.slice(1));
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "span", 31);
    \u0275\u0275text(4, "FHIR Location");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 34);
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_6_Template, 5, 1, "div", 83);
    \u0275\u0275domElementStart(7, "div", 83)(8, "span", 84);
    \u0275\u0275text(9, "Field Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 85);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 86)(13, "span", 84);
    \u0275\u0275text(14, "Raw Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 87);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275conditionalCreate(17, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_17_Template, 16, 5, "div", 88);
    \u0275\u0275conditionalCreate(18, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_18_Template, 9, 2, "div", 89);
    \u0275\u0275conditionalCreate(19, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Conditional_19_Template, 5, 1, "div", 90);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const location_r19 = \u0275\u0275readContextLet(0);
    const issue_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275conditional(location_r19.resourceType ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(location_r19.humanReadablePath);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(location_r19.rawPath);
    \u0275\u0275advance();
    \u0275\u0275conditional(location_r19.dataElement ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(location_r19.submittedValue ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r17.enrichedLocations.length > 1 ? 19 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "button", 78);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const issue_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.toggleLocationDetails(issue_r17.errorMessage));
    });
    \u0275\u0275domElementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 79);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_6_Template, 2, 1, "span", 32);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Conditional_7_Template, 20, 6, "div", 80);
  }
  if (rf & 2) {
    const issue_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    const location_r21 = \u0275\u0275storeLet(issue_r17.enrichedLocations[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isLocationExpanded(issue_r17.errorMessage) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(location_r21.humanReadablePath || location_r21.cleanPath);
    \u0275\u0275advance();
    \u0275\u0275conditional(location_r21.dataElement ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLocationExpanded(issue_r17.errorMessage) ? 7 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPrimaryLocation(issue_r17));
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 68)(1, "div", 69)(2, "span", 70);
    \u0275\u0275text(3, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_4_Template, 2, 1, "span", 71);
    \u0275\u0275conditionalCreate(5, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_5_Template, 2, 1, "span", 75);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_8_Template, 8, 5)(9, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Conditional_9_Template, 2, 1, "div", 77);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(issue_r17.messageId ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r17.count > 1 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r17.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r17.enrichedLocations.length > 0 ? 8 : ctx_r2.getPrimaryLocation(issue_r17) ? 9 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 65)(1, "h4", 66);
    \u0275\u0275text(2, "Errors");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 67);
    \u0275\u0275repeaterCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_For_5_Template, 10, 4, "div", 68, \u0275\u0275componentInstance().trackByEnhancedIssue, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const enhanced_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(enhanced_r16.errors);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(issue_r22.messageId);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", issue_r22.count, "x");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(warnLoc_r24.dataElement);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "Resource");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(warnLoc_r24.resourceType);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "Database");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", warnLoc_r24.tableName, ".", warnLoc_r24.columnName);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "JSON Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(warnLoc_r24.jsonPath);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83)(1, "span", 84);
    \u0275\u0275text(2, "Description");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 91);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(warnLoc_r24.fieldDescription);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 88)(1, "div", 82)(2, "span", 31);
    \u0275\u0275text(3, "Cerner Source");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 34)(5, "div", 83)(6, "span", 84);
    \u0275\u0275text(7, "Data Element");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 91)(9, "span", 92);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 93);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(13, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_13_Template, 5, 2, "div", 83);
    \u0275\u0275conditionalCreate(14, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_14_Template, 5, 1, "div", 83);
    \u0275\u0275conditionalCreate(15, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Conditional_15_Template, 5, 1, "div", 83);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(warnLoc_r24.dataElement);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(warnLoc_r24.dataElementName);
    \u0275\u0275advance();
    \u0275\u0275conditional(warnLoc_r24.tableName ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(warnLoc_r24.jsonPath ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(warnLoc_r24.fieldDescription ? 15 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 89)(1, "div", 82)(2, "span", 31);
    \u0275\u0275text(3, "Submitted Value");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 34)(5, "div", 94)(6, "pre", 95);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(warnLoc_r24.submittedValue.valueDisplay);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "span", 31);
    \u0275\u0275text(4, "FHIR Location");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 34);
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_6_Template, 5, 1, "div", 83);
    \u0275\u0275domElementStart(7, "div", 83)(8, "span", 84);
    \u0275\u0275text(9, "Field Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 85);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 86)(13, "span", 84);
    \u0275\u0275text(14, "Raw Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 87);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275conditionalCreate(17, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_17_Template, 16, 5, "div", 88);
    \u0275\u0275conditionalCreate(18, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Conditional_18_Template, 8, 1, "div", 89);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const warnLoc_r24 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(warnLoc_r24.resourceType ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(warnLoc_r24.humanReadablePath);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(warnLoc_r24.rawPath);
    \u0275\u0275advance();
    \u0275\u0275conditional(warnLoc_r24.dataElement ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(warnLoc_r24.submittedValue ? 18 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "button", 78);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const issue_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.toggleLocationDetails("w_" + issue_r22.errorMessage));
    });
    \u0275\u0275domElementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 79);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_6_Template, 2, 1, "span", 32);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Conditional_7_Template, 19, 5, "div", 80);
  }
  if (rf & 2) {
    const issue_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    const warnLoc_r25 = \u0275\u0275storeLet(issue_r22.enrichedLocations[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isLocationExpanded("w_" + issue_r22.errorMessage) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(warnLoc_r25.humanReadablePath || warnLoc_r25.cleanPath);
    \u0275\u0275advance();
    \u0275\u0275conditional(warnLoc_r25.dataElement ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLocationExpanded("w_" + issue_r22.errorMessage) ? 7 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPrimaryLocation(issue_r22));
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 100)(1, "div", 69)(2, "span", 101);
    \u0275\u0275text(3, "warning");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_4_Template, 2, 1, "span", 71);
    \u0275\u0275conditionalCreate(5, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_5_Template, 2, 1, "span", 75);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_8_Template, 8, 5)(9, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Conditional_9_Template, 2, 1, "div", 77);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(issue_r22.messageId ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r22.count > 1 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r22.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r22.enrichedLocations.length > 0 ? 8 : ctx_r2.getPrimaryLocation(issue_r22) ? 9 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 65)(1, "h4", 99);
    \u0275\u0275text(2, "Warnings");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 67);
    \u0275\u0275repeaterCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_For_5_Template, 10, 4, "div", 100, \u0275\u0275componentInstance().trackByEnhancedIssue, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const enhanced_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(enhanced_r16.warnings);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", issue_r27.count, "x");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "span", 31);
    \u0275\u0275text(4, "FHIR Location");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 34)(6, "div", 83)(7, "span", 84);
    \u0275\u0275text(8, "Field Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 85);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 86)(12, "span", 84);
    \u0275\u0275text(13, "Raw Path");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span", 87);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const infoLoc_r29 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(infoLoc_r29.humanReadablePath);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(infoLoc_r29.rawPath);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "button", 78);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r28);
      const issue_r27 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.toggleLocationDetails("i_" + issue_r27.errorMessage));
    });
    \u0275\u0275domElementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 79);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_7_Conditional_6_Template, 16, 2, "div", 80);
  }
  if (rf & 2) {
    const issue_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    const infoLoc_r30 = \u0275\u0275storeLet(issue_r27.enrichedLocations[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isLocationExpanded("i_" + issue_r27.errorMessage) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(infoLoc_r30.humanReadablePath || infoLoc_r30.cleanPath);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLocationExpanded("i_" + issue_r27.errorMessage) ? 6 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPrimaryLocation(issue_r27));
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 104)(1, "div", 69)(2, "span", 105);
    \u0275\u0275text(3, "info");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_4_Template, 2, 1, "span", 75);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 76);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_7_Template, 7, 4)(8, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Conditional_8_Template, 2, 1, "div", 77);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(issue_r27.count > 1 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r27.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r27.enrichedLocations.length > 0 ? 7 : ctx_r2.getPrimaryLocation(issue_r27) ? 8 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67);
    \u0275\u0275repeaterCreate(1, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_For_2_Template, 9, 3, "div", 104, \u0275\u0275componentInstance().trackByEnhancedIssue, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const enhanced_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(enhanced_r16.information);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 65)(1, "button", 102);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleInfoSection());
    });
    \u0275\u0275domElementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h4", 103);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Conditional_6_Template, 3, 0, "div", 67);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const enhanced_r16 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.showInfoSection() ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Information (", enhanced_r16.infoCount, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showInfoSection() ? 6 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "div", 62);
    \u0275\u0275conditionalCreate(2, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_2_Template, 2, 2, "span", 63);
    \u0275\u0275conditionalCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_3_Template, 2, 2, "span", 73);
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_4_Template, 2, 1, "span", 74);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_5_Template, 6, 0, "div", 65);
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_6_Template, 6, 0, "div", 65);
    \u0275\u0275conditionalCreate(7, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Conditional_7_Template, 7, 3, "div", 65);
  }
  if (rf & 2) {
    const enhanced_r31 = \u0275\u0275storeLet(\u0275\u0275nextContext(4).enhancedIssues());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(enhanced_r31.errorCount > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(enhanced_r31.warningCount > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(enhanced_r31.infoCount > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(enhanced_r31.errors.length > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(enhanced_r31.warnings.length > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(enhanced_r31.information.length > 0 ? 7 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_0_Template, 17, 2)(1, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Conditional_1_Template, 8, 7);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.isChannel02() && ((tmp_5_0 = ctx_r2.parsedCallback()) == null ? null : tmp_5_0.responseText) ? 0 : 1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 61)(1, "span", 106);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "No validation issues reported in the response.");
    \u0275\u0275domElementEnd()();
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275conditionalCreate(1, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_1_Template, 2, 1)(2, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Template, 5, 0, "div", 61);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasErrors() ? 1 : 2);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 21)(1, "div", 58)(2, "button", 59);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_69_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(ctx_r2.formattedRawData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "pre", 60)(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", ctx_r2.copySuccess());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.copySuccess() ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formattedRawData());
  }
}
function MirthCallbackViewerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "div", 1)(2, "div", 4)(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 8);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 9);
    \u0275\u0275conditionalCreate(11, MirthCallbackViewerComponent_Conditional_1_Conditional_11_Template, 5, 1, "div", 10);
    \u0275\u0275domElementStart(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14, "Timestamp");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "div", 10)(18, "span", 11);
    \u0275\u0275text(19, "Channel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "span", 12)(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(23, "div", 10)(24, "span", 11);
    \u0275\u0275text(25, "Message ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "span", 12);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(29, MirthCallbackViewerComponent_Conditional_1_Conditional_29_Template, 6, 1, "div", 13);
    \u0275\u0275domElementStart(30, "div", 14)(31, "div", 15)(32, "span", 11);
    \u0275\u0275text(33, "Patient");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "span", 12);
    \u0275\u0275text(35);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(36, "div", 15)(37, "span", 11);
    \u0275\u0275text(38, "MRN");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "span", 12);
    \u0275\u0275text(40);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(41, "div", 15)(42, "span", 11);
    \u0275\u0275text(43, "Episode");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "span", 12);
    \u0275\u0275text(45);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(46, "div", 15)(47, "span", 11);
    \u0275\u0275text(48, "Resources");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "span", 12);
    \u0275\u0275text(50);
    \u0275\u0275conditionalCreate(51, MirthCallbackViewerComponent_Conditional_1_Conditional_51_Template, 2, 1, "span", 16);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(52, "div", 17)(53, "button", 18);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab("summary"));
    });
    \u0275\u0275text(54, " Summary ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(55, "button", 18);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab("submitted"));
    });
    \u0275\u0275text(56, " Submitted Data ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(57, "button", 18);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab("response"));
    });
    \u0275\u0275text(58, " Response Data ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(59, "button", 18);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab("errors"));
    });
    \u0275\u0275text(60, " Validation ");
    \u0275\u0275conditionalCreate(61, MirthCallbackViewerComponent_Conditional_1_Conditional_61_Template, 2, 1, "span", 19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "button", 18);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab("raw"));
    });
    \u0275\u0275text(63, " Raw JSON ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(64, "div", 20);
    \u0275\u0275conditionalCreate(65, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Template, 2, 1);
    \u0275\u0275conditionalCreate(66, MirthCallbackViewerComponent_Conditional_1_Conditional_66_Template, 7, 4, "div", 21);
    \u0275\u0275conditionalCreate(67, MirthCallbackViewerComponent_Conditional_1_Conditional_67_Template, 7, 4, "div", 21);
    \u0275\u0275conditionalCreate(68, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Template, 3, 1, "div", 22);
    \u0275\u0275conditionalCreate(69, MirthCallbackViewerComponent_Conditional_1_Conditional_69_Template, 7, 4, "div", 21);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const parsed_r33 = \u0275\u0275storeLet(ctx_r2.parsedCallback());
    const config_r34 = ctx_r2.statusConfig();
    \u0275\u0275advance(3);
    \u0275\u0275classMap(config_r34.class);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r34.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r34.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("HTTP ", parsed_r33 == null ? null : parsed_r33.httpStatus, " - ", parsed_r33 == null ? null : parsed_r33.httpStatusLine);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isChannel03() ? 11 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r33 == null ? null : parsed_r33.timestamp) ? ctx_r2.formatTimestamp(parsed_r33.timestamp) : "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.channelBadgeClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((parsed_r33 == null ? null : parsed_r33.channelName) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 37, parsed_r33 == null ? null : parsed_r33.messageId));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isChannel03() ? 29 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((parsed_r33 == null ? null : parsed_r33.summary == null ? null : parsed_r33.summary.patientName) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r33 == null ? null : parsed_r33.summary == null ? null : parsed_r33.summary.patientMRN) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r33 == null ? null : parsed_r33.summary == null ? null : parsed_r33.summary.episodeId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", parsed_r33 == null ? null : parsed_r33.summary == null ? null : parsed_r33.summary.resourcesSubmitted, " submitted ");
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r33 == null ? null : parsed_r33.status) === "SUCCESS" ? 51 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "summary");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "submitted");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "response");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "errors")("has-errors", ctx_r2.groupedIssues().errorCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasErrors() ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "raw");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.activeTab() === "summary" ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab() === "submitted" ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab() === "response" ? 67 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab() === "errors" ? 68 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab() === "raw" ? 69 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "No callback data available or content is not a Mirth callback.");
    \u0275\u0275domElementEnd()();
  }
}
var MirthCallbackViewerComponent = class _MirthCallbackViewerComponent {
  logsService = inject(LogsService);
  // Signals from service
  logText = this.logsService.selectedLogText;
  loading = this.logsService.loadingText;
  // Local state
  activeTab = signal("summary", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  copySuccess = signal(false, ...ngDevMode ? [{ debugName: "copySuccess" }] : []);
  expandedResources = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedResources" }] : []);
  // Outputs
  closed = output();
  // Parsed callback data
  parsedCallback = computed(() => {
    const text = this.logText();
    if (!text?.text_content)
      return null;
    return parseMirthCallback(text.text_content);
  }, ...ngDevMode ? [{ debugName: "parsedCallback" }] : []);
  hasContent = computed(() => {
    return this.parsedCallback() !== null;
  }, ...ngDevMode ? [{ debugName: "hasContent" }] : []);
  statusConfig = computed(() => {
    const parsed = this.parsedCallback();
    if (!parsed)
      return STATUS_CONFIG["UNKNOWN"];
    return STATUS_CONFIG[parsed.status];
  }, ...ngDevMode ? [{ debugName: "statusConfig" }] : []);
  isChannel02 = computed(() => {
    return this.parsedCallback()?.channelType === "FHIR_TRANSFORMATION";
  }, ...ngDevMode ? [{ debugName: "isChannel02" }] : []);
  isChannel03 = computed(() => {
    return this.parsedCallback()?.channelType === "ONTARIO_HEALTH_SUBMISSION";
  }, ...ngDevMode ? [{ debugName: "isChannel03" }] : []);
  channelBadgeClass = computed(() => {
    const type = this.parsedCallback()?.channelType;
    if (type === "FHIR_TRANSFORMATION")
      return "channel-badge channel-02";
    if (type === "ONTARIO_HEALTH_SUBMISSION")
      return "channel-badge channel-03";
    return "channel-badge";
  }, ...ngDevMode ? [{ debugName: "channelBadgeClass" }] : []);
  submittedResourceSummary = computed(() => {
    const parsed = this.parsedCallback();
    return getResourceTypeSummary(parsed?.submittedBundle ?? null);
  }, ...ngDevMode ? [{ debugName: "submittedResourceSummary" }] : []);
  responseResourceSummary = computed(() => {
    const parsed = this.parsedCallback();
    return getResourceTypeSummary(parsed?.responseBundle ?? null);
  }, ...ngDevMode ? [{ debugName: "responseResourceSummary" }] : []);
  formattedSubmittedData = computed(() => {
    const parsed = this.parsedCallback();
    if (!parsed?.submittedBundle)
      return "";
    try {
      return JSON.stringify(parsed.submittedBundle, null, 2);
    } catch {
      return parsed.raw.submittedData;
    }
  }, ...ngDevMode ? [{ debugName: "formattedSubmittedData" }] : []);
  formattedResponseData = computed(() => {
    const parsed = this.parsedCallback();
    if (!parsed)
      return "";
    if (parsed.responseText)
      return parsed.responseText;
    if (!parsed.responseBundle)
      return parsed.raw.responseData || "";
    try {
      return JSON.stringify(parsed.responseBundle, null, 2);
    } catch {
      return parsed.raw.responseData;
    }
  }, ...ngDevMode ? [{ debugName: "formattedResponseData" }] : []);
  formattedRawData = computed(() => {
    const text = this.logText();
    if (!text?.text_content)
      return "";
    try {
      const parsed = JSON.parse(text.text_content);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return text.text_content;
    }
  }, ...ngDevMode ? [{ debugName: "formattedRawData" }] : []);
  groupedIssues = computed(() => {
    const parsed = this.parsedCallback();
    if (!parsed?.errors?.length) {
      return {
        errors: [],
        warnings: [],
        information: [],
        errorCount: 0,
        warningCount: 0,
        infoCount: 0,
        totalCount: 0
      };
    }
    return groupAndDeduplicateIssues(parsed.errors);
  }, ...ngDevMode ? [{ debugName: "groupedIssues" }] : []);
  enhancedIssues = computed(() => {
    const grouped = this.groupedIssues();
    const submitted = this.parsedCallback()?.submittedBundle ?? null;
    return enhanceGroupedIssues(grouped, submitted);
  }, ...ngDevMode ? [{ debugName: "enhancedIssues" }] : []);
  hasErrors = computed(() => {
    return this.groupedIssues().totalCount > 0;
  }, ...ngDevMode ? [{ debugName: "hasErrors" }] : []);
  errorCount = computed(() => {
    return this.groupedIssues().errorCount;
  }, ...ngDevMode ? [{ debugName: "errorCount" }] : []);
  showInfoSection = signal(false, ...ngDevMode ? [{ debugName: "showInfoSection" }] : []);
  expandedLocationDetails = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedLocationDetails" }] : []);
  // Enhanced Summary tab: submission detail with field-level cards
  submissionDetail = computed(() => {
    if (!this.isChannel03())
      return null;
    const parsed = this.parsedCallback();
    if (!parsed)
      return null;
    return buildSubmissionDetail(parsed.submittedBundle, parsed.responseBundle, parsed.status === "SUCCESS");
  }, ...ngDevMode ? [{ debugName: "submissionDetail" }] : []);
  expandedCards = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedCards" }] : []);
  cardExpansionInitialized = false;
  formatTimestamp(date) {
    return formatCallbackTimestamp(date);
  }
  onClose() {
    this.closed.emit();
  }
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  async copyToClipboard(content) {
    try {
      await navigator.clipboard.writeText(content);
      this.copySuccess.set(true);
      setTimeout(() => this.copySuccess.set(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }
  toggleResourceExpand(resourceType) {
    const expanded = new Set(this.expandedResources());
    if (expanded.has(resourceType)) {
      expanded.delete(resourceType);
    } else {
      expanded.add(resourceType);
    }
    this.expandedResources.set(expanded);
  }
  isResourceExpanded(resourceType) {
    return this.expandedResources().has(resourceType);
  }
  getSeverityClass(severity) {
    switch (severity) {
      case "error":
      case "fatal":
        return "severity-error";
      case "warning":
        return "severity-warning";
      case "information":
        return "severity-info";
      default:
        return "";
    }
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
  trackByResourceType(_index, item) {
    return item.type;
  }
  trackByErrorIndex(index, _item) {
    return index;
  }
  trackByIssueMessage(index, item) {
    return item.errorMessage;
  }
  toggleInfoSection() {
    this.showInfoSection.update((v) => !v);
  }
  /** Get first FHIR path location, simplified for display */
  getPrimaryLocation(issue) {
    if (!issue.locations.length)
      return "";
    return issue.locations[0].replace(/,\s*Line\[\d+\]\s*Col\[\d+\]/, "");
  }
  /** Toggle expanded state of location details for an issue */
  toggleLocationDetails(issueKey) {
    const expanded = new Set(this.expandedLocationDetails());
    if (expanded.has(issueKey)) {
      expanded.delete(issueKey);
    } else {
      expanded.add(issueKey);
    }
    this.expandedLocationDetails.set(expanded);
  }
  /** Check if location details are expanded for an issue */
  isLocationExpanded(issueKey) {
    return this.expandedLocationDetails().has(issueKey);
  }
  /** Check if a value display string is long enough to warrant a hint */
  isValueTooLong(valueDisplay) {
    return valueDisplay.length > 100;
  }
  // ── Enhanced Summary card methods ──────────────────────────────
  /** Lazily initialize card expansion state based on success/failure */
  initCardExpansionIfNeeded() {
    if (this.cardExpansionInitialized)
      return;
    const detail = this.submissionDetail();
    const parsed = this.parsedCallback();
    if (!detail)
      return;
    this.cardExpansionInitialized = true;
    if (parsed?.status === "SUCCESS") {
      this.expandedCards.set(new Set(detail.cards.map((c) => c.id)));
    } else {
      this.expandedCards.set(/* @__PURE__ */ new Set());
    }
  }
  toggleCardExpand(cardId) {
    this.initCardExpansionIfNeeded();
    const expanded = new Set(this.expandedCards());
    if (expanded.has(cardId)) {
      expanded.delete(cardId);
    } else {
      expanded.add(cardId);
    }
    this.expandedCards.set(expanded);
  }
  isCardExpanded(cardId) {
    this.initCardExpansionIfNeeded();
    return this.expandedCards().has(cardId);
  }
  isDemographics(card) {
    return isDemographicsCard(card);
  }
  trackByCardId(_index, card) {
    return card.id;
  }
  trackByFieldLabel(_index, field) {
    return field.label;
  }
  trackByObservation(_index, obs) {
    return obs.name;
  }
  trackByEnhancedIssue(index, item) {
    return item.errorMessage;
  }
  trackByLocation(index, item) {
    return item.rawPath;
  }
  static \u0275fac = function MirthCallbackViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MirthCallbackViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MirthCallbackViewerComponent, selectors: [["app-mirth-callback-viewer"]], outputs: { closed: "closed" }, decls: 3, vars: 2, consts: [[1, "loading-overlay"], [1, "callback-viewer"], [1, "no-content"], [1, "loading-spinner"], [1, "callback-header"], [1, "status-banner"], [1, "status-icon"], [1, "status-label"], [1, "http-status"], [1, "header-grid"], [1, "header-item"], [1, "label"], [1, "value"], [1, "header-grid", "secondary"], [1, "patient-info"], [1, "info-item"], [1, "accepted"], [1, "tabs"], [1, "tab", 3, "click"], [1, "error-badge"], [1, "tab-content"], [1, "json-content"], [1, "errors-content"], [1, "value", "bundle-id"], [1, "value", "mono"], [1, "summary-content"], [1, "resource-cards"], [1, "resource-card", 3, "class"], [1, "resource-card"], [1, "card-header-btn", 3, "click"], [1, "toggle-icon"], [1, "card-title"], [1, "de-badge"], [1, "diff-indicator"], [1, "card-body"], [1, "field-table", "demographics-table"], [1, "field-table"], [1, "obs-name-col"], [1, "obs-value-col"], [1, "obs-date-col"], [1, "obs-name"], [1, "obs-value"], [1, "code-system"], [1, "obs-date"], [1, "field-label"], [1, "field-value"], [1, "value-match"], [1, "value-diff"], [1, "submitted-value"], [1, "arrow"], [1, "received-value"], [1, "parse-errors"], [1, "resource-list"], [1, "resource-item"], [1, "resource-toggle", 3, "click"], [1, "resource-type"], [1, "resource-count"], [1, "resource-ids"], [1, "content-toolbar"], [1, "copy-btn", 3, "click"], [1, "json-pre"], [1, "no-errors"], [1, "severity-summary"], [1, "severity-chip", "chip-error"], [1, "severity-chip", "chip-channel"], [1, "severity-section"], [1, "section-header", "section-error"], [1, "errors-list"], [1, "error-item", "severity-error"], [1, "error-header"], [1, "severity-badge", "badge-error"], [1, "error-code"], [1, "error-message", "channel-02-error"], [1, "severity-chip", "chip-warning"], [1, "severity-chip", "chip-info"], [1, "occurrence-count"], [1, "error-message"], [1, "error-location"], [1, "location-toggle", 3, "click"], [1, "location-path"], [1, "location-details"], [1, "detail-card", "fhir-location-card"], [1, "card-header"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value", "mono"], [1, "detail-row", "subtle"], [1, "detail-value", "mono", "small"], [1, "detail-card", "cerner-source-card"], [1, "detail-card", "submitted-value-card"], [1, "additional-locations"], [1, "detail-value"], [1, "data-element-code"], [1, "data-element-name"], [1, "value-display"], [1, "value-content"], [1, "value-hint"], [1, "additional-label"], [1, "additional-location-path"], [1, "section-header", "section-warning"], [1, "error-item", "severity-warning"], [1, "severity-badge", "badge-warning"], [1, "section-toggle", 3, "click"], [1, "section-header", "section-info"], [1, "error-item", "severity-info"], [1, "severity-badge", "badge-info"], [1, "success-icon"]], template: function MirthCallbackViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MirthCallbackViewerComponent_Conditional_0_Template, 4, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, MirthCallbackViewerComponent_Conditional_1_Template, 70, 39, "div", 1)(2, MirthCallbackViewerComponent_Conditional_2_Template, 3, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasContent() ? 1 : !ctx.loading() ? 2 : -1);
    }
  }, dependencies: [DecimalPipe], styles: ['\n\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.callback-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.callback-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-rejected[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-banner.status-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner.status-partial[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-unknown[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.status-banner[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.status-banner[_ngcontent-%COMP%]   .http-status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.header-grid.secondary[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .header-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item[_ngcontent-%COMP%]   .value.bundle-id[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.channel-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.channel-badge.channel-02[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.channel-badge.channel-03[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.patient-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .patient-info[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .accepted[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab.has-errors[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.tab[_ngcontent-%COMP%]   .error-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #c62828;\n  color: white;\n  border-radius: 10px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-type[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-count[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.resource-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.resource-card[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  overflow: hidden;\n  background: white;\n}\n.resource-card[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: filter 0.15s;\n}\n.resource-card[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.96);\n}\n.resource-card[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n}\n.resource-card[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.resource-card[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%]   .de-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #7b1fa2;\n  color: white;\n  padding: 0.0625rem 0.4375rem;\n  border-radius: 3px;\n  font-weight: 600;\n  font-size: 0.625rem;\n  letter-spacing: 0.3px;\n  flex-shrink: 0;\n}\n.resource-card[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%]   .diff-indicator[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #c62828;\n  background: #ffcdd2;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.resource-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n  padding: 0;\n}\n.resource-card.card-patient[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #bbdefb 100%);\n  color: #0d47a1;\n}\n.resource-card.card-organization[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3e5f5 0%,\n      #e1bee7 100%);\n  color: #6a1b9a;\n}\n.resource-card.card-location[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffe0b2 100%);\n  color: #e65100;\n}\n.resource-card.card-service-request[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  color: #2e7d32;\n}\n.resource-card.card-episode[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fce4ec 0%,\n      #f8bbd0 100%);\n  color: #ad1457;\n}\n.resource-card.card-healthcare-service[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2f1 0%,\n      #b2dfdb 100%);\n  color: #00695c;\n}\n.resource-card.card-appointment[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8eaf6 0%,\n      #c5cae9 100%);\n  color: #283593;\n}\n.resource-card.card-encounter[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fffde7 0%,\n      #fff9c4 100%);\n  color: #f57f17;\n}\n.resource-card.card-demographics[_ngcontent-%COMP%]   .card-header-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ede7f6 0%,\n      #d1c4e9 100%);\n  color: #4527a0;\n}\n.field-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.field-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.field-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.4375rem 0.875rem;\n  font-size: 0.8125rem;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: top;\n}\n.field-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.field-table[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  width: 35%;\n  font-weight: 600;\n  color: #616161;\n  white-space: nowrap;\n}\n.field-table[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%] {\n  color: #212121;\n  word-break: break-word;\n}\n.value-match[_ngcontent-%COMP%] {\n  color: #212121;\n}\n.value-diff[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.value-diff[_ngcontent-%COMP%]   .submitted-value[_ngcontent-%COMP%] {\n  color: #c62828;\n  text-decoration: line-through;\n}\n.value-diff[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  font-size: 0.75rem;\n}\n.value-diff[_ngcontent-%COMP%]   .received-value[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n  background: #e8f5e9;\n  padding: 0 0.25rem;\n  border-radius: 2px;\n}\n.demographics-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #616161;\n  text-align: left;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  background: #fafafa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.demographics-table[_ngcontent-%COMP%]   .obs-name-col[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.demographics-table[_ngcontent-%COMP%]   .obs-value-col[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.demographics-table[_ngcontent-%COMP%]   .obs-date-col[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.demographics-table[_ngcontent-%COMP%]   .obs-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #424242;\n}\n.demographics-table[_ngcontent-%COMP%]   .obs-value[_ngcontent-%COMP%] {\n  color: #212121;\n  word-break: break-word;\n}\n.demographics-table[_ngcontent-%COMP%]   .obs-date[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 0.75rem;\n  font-family: "Roboto Mono", monospace;\n}\n.code-system[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.375rem;\n  font-size: 0.625rem;\n  font-family: "Roboto Mono", monospace;\n  color: #9e9e9e;\n  background: #f5f5f5;\n  padding: 0 0.25rem;\n  border-radius: 2px;\n}\n.json-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.errors-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.severity-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.severity-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.severity-chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #b71c1c;\n}\n.severity-chip.chip-warning[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.severity-chip.chip-info[_ngcontent-%COMP%] {\n  background: #bbdefb;\n  color: #0d47a1;\n}\n.severity-chip.chip-channel[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.severity-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.severity-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin: 0 0 0.625rem 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 0.375rem;\n  border-bottom: 2px solid;\n}\n.section-header.section-error[_ngcontent-%COMP%] {\n  color: #c62828;\n  border-bottom-color: #c62828;\n}\n.section-header.section-warning[_ngcontent-%COMP%] {\n  color: #e65100;\n  border-bottom-color: #ef6c00;\n}\n.section-header.section-info[_ngcontent-%COMP%] {\n  color: #1565c0;\n  border-bottom-color: #1976d2;\n}\n.section-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n}\n.section-toggle[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.section-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.section-toggle[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.errors-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.error-item[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.75rem;\n  border-radius: 4px;\n  border-left: 4px solid;\n}\n.error-item.severity-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  border-left-color: #c62828;\n}\n.error-item.severity-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ef6c00;\n}\n.error-item.severity-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left-color: #1976d2;\n}\n.error-item[_ngcontent-%COMP%]   .error-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.375rem;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge.badge-error[_ngcontent-%COMP%] {\n  background: #ef9a9a;\n  color: #b71c1c;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge.badge-warning[_ngcontent-%COMP%] {\n  background: #ffcc80;\n  color: #bf360c;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge.badge-info[_ngcontent-%COMP%] {\n  background: #90caf9;\n  color: #0d47a1;\n}\n.error-item[_ngcontent-%COMP%]   .error-code[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  font-family: "Roboto Mono", monospace;\n}\n.error-item[_ngcontent-%COMP%]   .occurrence-count[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--text-secondary, #888);\n  margin-left: auto;\n}\n.error-item[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n  line-height: 1.4;\n}\n.error-item[_ngcontent-%COMP%]   .error-message.channel-02-error[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n.error-item[_ngcontent-%COMP%]   .error-location[_ngcontent-%COMP%] {\n  margin-top: 0.375rem;\n  font-size: 0.6875rem;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary, #888);\n  word-break: break-all;\n}\n.location-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.375rem 0.5rem;\n  margin-top: 0.375rem;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n  text-align: left;\n}\n.location-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.location-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.625rem;\n  flex-shrink: 0;\n}\n.location-toggle[_ngcontent-%COMP%]   .location-path[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n  color: #1565c0;\n  flex: 1;\n  word-break: break-all;\n}\n.location-toggle[_ngcontent-%COMP%]   .de-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #7b1fa2;\n  color: white;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n  font-weight: 600;\n  font-size: 0.625rem;\n  flex-shrink: 0;\n  letter-spacing: 0.3px;\n}\n.location-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  margin-top: 0.5rem;\n  padding: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e8e8e8;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e0e0e0;\n  overflow: hidden;\n}\n.detail-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.detail-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #424242;\n}\n.detail-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n}\n.fhir-location-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #bbdefb 100%);\n  border-bottom-color: #90caf9;\n}\n.fhir-location-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #0d47a1;\n}\n.cerner-source-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f3e5f5 0%,\n      #e1bee7 100%);\n  border-bottom-color: #ce93d8;\n}\n.cerner-source-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #6a1b9a;\n}\n.submitted-value-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffe0b2 100%);\n  border-bottom-color: #ffcc80;\n}\n.submitted-value-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #e65100;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.375rem 0;\n  align-items: flex-start;\n}\n.detail-row[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #f5f5f5;\n}\n.detail-row.subtle[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  min-width: 80px;\n  font-weight: 600;\n  color: #666;\n  font-size: 0.6875rem;\n  flex-shrink: 0;\n  padding-top: 0.0625rem;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.75rem;\n  color: #212121;\n  word-break: break-all;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  background: #f5f5f5;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n}\n.detail-row[_ngcontent-%COMP%]   .detail-value.small[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n}\n.data-element-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #7b1fa2;\n  color: white;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n  font-weight: 600;\n  font-size: 0.625rem;\n  margin-right: 0.375rem;\n}\n.data-element-name[_ngcontent-%COMP%] {\n  color: #424242;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n.value-display[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 0.5rem;\n}\n.value-display[_ngcontent-%COMP%]   .value-content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.6875rem;\n  color: #d32f2f;\n  word-break: break-all;\n  white-space: pre-wrap;\n  line-height: 1.4;\n}\n.value-hint[_ngcontent-%COMP%] {\n  margin-top: 0.375rem;\n  font-size: 0.625rem;\n  color: #888;\n  font-style: italic;\n}\n.additional-locations[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 4px;\n}\n.additional-locations[_ngcontent-%COMP%]   .additional-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #666;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.additional-locations[_ngcontent-%COMP%]   .additional-location-path[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-family: "Roboto Mono", monospace;\n  color: #888;\n  padding: 0.125rem 0;\n  word-break: break-all;\n}\n.no-errors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #2e7d32;\n}\n.no-errors[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n.no-errors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.no-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MirthCallbackViewerComponent, [{
    type: Component,
    args: [{ selector: "app-mirth-callback-viewer", standalone: true, imports: [DecimalPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (loading()) {
  <div class="loading-overlay">
    <div class="loading-spinner"></div>
    <span>Loading callback data...</span>
  </div>
}

@if (hasContent()) {
  @let parsed = parsedCallback();
  @let config = statusConfig();

  <div class="callback-viewer">
    <!-- Header Summary -->
    <div class="callback-header">
      <div class="status-banner" [class]="config.class">
        <span class="status-icon">{{ config.icon }}</span>
        <span class="status-label">{{ config.label }}</span>
        <span class="http-status">HTTP {{ parsed?.httpStatus }} - {{ parsed?.httpStatusLine }}</span>
      </div>

      <div class="header-grid">
        @if (isChannel03()) {
          <div class="header-item">
            <span class="label">Bundle ID</span>
            <span class="value bundle-id">{{ parsed?.summary?.bundleId || 'N/A' }}</span>
          </div>
        }
        <div class="header-item">
          <span class="label">Timestamp</span>
          <span class="value">{{ parsed?.timestamp ? formatTimestamp(parsed!.timestamp) : 'N/A' }}</span>
        </div>
        <div class="header-item">
          <span class="label">Channel</span>
          <span class="value">
            <span [class]="channelBadgeClass()">{{ parsed?.channelName || 'N/A' }}</span>
          </span>
        </div>
        <div class="header-item">
          <span class="label">Message ID</span>
          <span class="value">{{ parsed?.messageId | number }}</span>
        </div>
      </div>
      @if (isChannel03()) {
        <div class="header-grid secondary">
          <div class="header-item">
            <span class="label">Transaction ID (X-LobTxId)</span>
            <span class="value mono">{{ parsed?.summary?.transactionId || 'N/A' }}</span>
          </div>
        </div>
      }

      <div class="patient-info">
        <div class="info-item">
          <span class="label">Patient</span>
          <span class="value">{{ parsed?.summary?.patientName || 'N/A' }}</span>
        </div>
        <div class="info-item">
          <span class="label">MRN</span>
          <span class="value">{{ parsed?.summary?.patientMRN || 'N/A' }}</span>
        </div>
        <div class="info-item">
          <span class="label">Episode</span>
          <span class="value">{{ parsed?.summary?.episodeId || 'N/A' }}</span>
        </div>
        <div class="info-item">
          <span class="label">Resources</span>
          <span class="value">
            {{ parsed?.summary?.resourcesSubmitted }} submitted
            @if (parsed?.status === 'SUCCESS') {
              <span class="accepted">&rarr; {{ parsed?.summary?.resourcesAccepted }} accepted</span>
            }
          </span>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <button
        class="tab"
        [class.active]="activeTab() === 'summary'"
        (click)="setActiveTab('summary')">
        Summary
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'submitted'"
        (click)="setActiveTab('submitted')">
        Submitted Data
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'response'"
        (click)="setActiveTab('response')">
        Response Data
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'errors'"
        [class.has-errors]="groupedIssues().errorCount > 0"
        (click)="setActiveTab('errors')">
        Validation
        @if (hasErrors()) {
          <span class="error-badge">{{ errorCount() }}</span>
        }
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'raw'"
        (click)="setActiveTab('raw')">
        Raw JSON
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Summary Tab -->
      @if (activeTab() === 'summary') {
        @if (isChannel03() && submissionDetail(); as detail) {
          <!-- Enhanced card view for Channel 03 -->
          <div class="summary-content">
            <div class="resource-cards">
              @for (card of detail.cards; track trackByCardId($index, card)) {
                <div class="resource-card" [class]="card.cssClass">
                  <button class="card-header-btn" (click)="toggleCardExpand(card.id)">
                    <span class="toggle-icon">{{ isCardExpanded(card.id) ? '\u25BC' : '\u25B6' }}</span>
                    <span class="card-title">{{ card.displayName }}</span>
                    <span class="de-badge">{{ card.deCode }}</span>
                    @if (card.hasDiffs) {
                      <span class="diff-indicator">changed</span>
                    }
                  </button>
                  @if (isCardExpanded(card.id)) {
                    <div class="card-body">
                      @if (isDemographics(card)) {
                        <!-- Demographics card: observation rows -->
                        <table class="field-table demographics-table">
                          <thead>
                            <tr>
                              <th class="obs-name-col">Observation</th>
                              <th class="obs-value-col">Value</th>
                              <th class="obs-date-col">Effective Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            @for (obs of $any(card).observations; track trackByObservation($index, obs)) {
                              <tr>
                                <td class="obs-name">{{ obs.name }}</td>
                                <td class="obs-value">
                                  {{ obs.value }}
                                  @if (obs.codeSystem) {
                                    <span class="code-system">{{ obs.codeSystem }}</span>
                                  }
                                </td>
                                <td class="obs-date">{{ obs.effectiveDate }}</td>
                              </tr>
                            }
                          </tbody>
                        </table>
                      } @else {
                        <!-- Standard resource card: field key-value pairs -->
                        <table class="field-table">
                          <tbody>
                            @for (field of $any(card).fields; track trackByFieldLabel($index, field)) {
                              <tr>
                                <td class="field-label">{{ field.label }}</td>
                                <td class="field-value">
                                  @if (field.matches) {
                                    <span class="value-match">{{ field.submittedValue }}</span>
                                  } @else {
                                    <span class="value-diff">
                                      <span class="submitted-value">{{ field.submittedValue }}</span>
                                      <span class="arrow">&rarr;</span>
                                      <span class="received-value">{{ field.receivedValue }}</span>
                                    </span>
                                  }
                                </td>
                              </tr>
                            }
                          </tbody>
                        </table>
                      }
                    </div>
                  }
                </div>
              }
            </div>

            @if (parsed?.parseErrors && parsed!.parseErrors.length > 0) {
              <h4>Parse Warnings</h4>
              <ul class="parse-errors">
                @for (error of parsed!.parseErrors; track error) {
                  <li>{{ error }}</li>
                }
              </ul>
            }
          </div>
        } @else {
          <!-- Fallback: legacy resource list for Channel 02 or when no detail available -->
          <div class="summary-content">
            <h4>Submitted Resources</h4>
            <div class="resource-list">
              @for (resource of submittedResourceSummary(); track trackByResourceType($index, resource)) {
                <div class="resource-item">
                  <button
                    class="resource-toggle"
                    (click)="toggleResourceExpand(resource.type)">
                    <span class="toggle-icon">{{ isResourceExpanded(resource.type) ? '\u25BC' : '\u25B6' }}</span>
                    <span class="resource-type">{{ resource.type }}</span>
                    <span class="resource-count">({{ resource.count }})</span>
                  </button>
                  @if (isResourceExpanded(resource.type)) {
                    <ul class="resource-ids">
                      @for (id of resource.ids; track id) {
                        <li>{{ id }}</li>
                      }
                    </ul>
                  }
                </div>
              }
            </div>

            @if (parsed?.status === 'SUCCESS' && responseResourceSummary().length > 0) {
              <h4>Accepted Resources</h4>
              <div class="resource-list">
                @for (resource of responseResourceSummary(); track trackByResourceType($index, resource)) {
                  <div class="resource-item">
                    <span class="resource-type">{{ resource.type }}</span>
                    <span class="resource-count">({{ resource.count }})</span>
                  </div>
                }
              </div>
            }

            @if (parsed?.parseErrors && parsed!.parseErrors.length > 0) {
              <h4>Parse Warnings</h4>
              <ul class="parse-errors">
                @for (error of parsed!.parseErrors; track error) {
                  <li>{{ error }}</li>
                }
              </ul>
            }
          </div>
        }
      }

      <!-- Submitted Data Tab -->
      @if (activeTab() === 'submitted') {
        <div class="json-content">
          <div class="content-toolbar">
            <button
              class="copy-btn"
              (click)="copyToClipboard(formattedSubmittedData())"
              [class.success]="copySuccess()">
              {{ copySuccess() ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <pre class="json-pre"><code>{{ formattedSubmittedData() }}</code></pre>
        </div>
      }

      <!-- Response Data Tab -->
      @if (activeTab() === 'response') {
        <div class="json-content">
          <div class="content-toolbar">
            <button
              class="copy-btn"
              (click)="copyToClipboard(formattedResponseData())"
              [class.success]="copySuccess()">
              {{ copySuccess() ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <pre class="json-pre"><code>{{ formattedResponseData() }}</code></pre>
        </div>
      }

      <!-- Validation Tab -->
      @if (activeTab() === 'errors') {
        <div class="errors-content">
          @if (hasErrors()) {
            @if (isChannel02() && parsedCallback()?.responseText) {
              <!-- Channel 02: Plain text error display -->
              <div class="severity-summary">
                <span class="severity-chip chip-error">Data Validation Error</span>
                <span class="severity-chip chip-channel">Channel 02</span>
              </div>
              <div class="severity-section">
                <h4 class="section-header section-error">FHIR Transformation Error</h4>
                <div class="errors-list">
                  <div class="error-item severity-error">
                    <div class="error-header">
                      <span class="severity-badge badge-error">error</span>
                      <span class="error-code">HTTP {{ parsedCallback()?.httpStatus }}</span>
                    </div>
                    <div class="error-message channel-02-error">{{ parsedCallback()?.responseText }}</div>
                  </div>
                </div>
              </div>
            } @else {
              <!-- Channel 03 / Unknown: OperationOutcome error display -->
              @let enhanced = enhancedIssues();
              <!-- Severity Summary Bar -->
              <div class="severity-summary">
                @if (enhanced.errorCount > 0) {
                  <span class="severity-chip chip-error">
                    {{ enhanced.errorCount }} {{ enhanced.errorCount === 1 ? 'Error' : 'Errors' }}
                  </span>
                }
                @if (enhanced.warningCount > 0) {
                  <span class="severity-chip chip-warning">
                    {{ enhanced.warningCount }} {{ enhanced.warningCount === 1 ? 'Warning' : 'Warnings' }}
                  </span>
                }
                @if (enhanced.infoCount > 0) {
                  <span class="severity-chip chip-info">
                    {{ enhanced.infoCount }} Info
                  </span>
                }
              </div>

              <!-- Errors Section -->
              @if (enhanced.errors.length > 0) {
                <div class="severity-section">
                  <h4 class="section-header section-error">Errors</h4>
                  <div class="errors-list">
                    @for (issue of enhanced.errors; track trackByEnhancedIssue($index, issue)) {
                      <div class="error-item severity-error">
                        <div class="error-header">
                          <span class="severity-badge badge-error">error</span>
                          @if (issue.messageId) {
                            <span class="error-code">{{ issue.messageId }}</span>
                          }
                          @if (issue.count > 1) {
                            <span class="occurrence-count">{{ issue.count }}x</span>
                          }
                        </div>
                        <div class="error-message">{{ issue.errorMessage }}</div>

                        <!-- Enhanced location toggle -->
                        @if (issue.enrichedLocations.length > 0) {
                          @let location = issue.enrichedLocations[0];
                          <button
                            class="location-toggle"
                            (click)="toggleLocationDetails(issue.errorMessage)">
                            <span class="toggle-icon">{{ isLocationExpanded(issue.errorMessage) ? '\u25BC' : '\u25B6' }}</span>
                            <span class="location-path">{{ location.humanReadablePath || location.cleanPath }}</span>
                            @if (location.dataElement) {
                              <span class="de-badge">{{ location.dataElement }}</span>
                            }
                          </button>

                          @if (isLocationExpanded(issue.errorMessage)) {
                            <div class="location-details">
                              <!-- FHIR Location Card -->
                              <div class="detail-card fhir-location-card">
                                <div class="card-header">
                                  <span class="card-title">FHIR Location</span>
                                </div>
                                <div class="card-body">
                                  @if (location.resourceType) {
                                    <div class="detail-row">
                                      <span class="detail-label">Resource</span>
                                      <span class="detail-value mono">{{ location.resourceType }}</span>
                                    </div>
                                  }
                                  <div class="detail-row">
                                    <span class="detail-label">Field Path</span>
                                    <span class="detail-value mono">{{ location.humanReadablePath }}</span>
                                  </div>
                                  <div class="detail-row subtle">
                                    <span class="detail-label">Raw Path</span>
                                    <span class="detail-value mono small">{{ location.rawPath }}</span>
                                  </div>
                                </div>
                              </div>

                              <!-- Cerner Source Card -->
                              @if (location.dataElement) {
                                <div class="detail-card cerner-source-card">
                                  <div class="card-header">
                                    <span class="card-title">Cerner Source</span>
                                  </div>
                                  <div class="card-body">
                                    <div class="detail-row">
                                      <span class="detail-label">Data Element</span>
                                      <span class="detail-value">
                                        <span class="data-element-code">{{ location.dataElement }}</span>
                                        <span class="data-element-name">{{ location.dataElementName }}</span>
                                      </span>
                                    </div>
                                    @if (location.tableName) {
                                      <div class="detail-row">
                                        <span class="detail-label">Database</span>
                                        <span class="detail-value mono">{{ location.tableName }}.{{ location.columnName }}</span>
                                      </div>
                                    }
                                    @if (location.jsonPath) {
                                      <div class="detail-row">
                                        <span class="detail-label">JSON Path</span>
                                        <span class="detail-value mono">{{ location.jsonPath }}</span>
                                      </div>
                                    }
                                    @if (location.fieldDescription) {
                                      <div class="detail-row">
                                        <span class="detail-label">Description</span>
                                        <span class="detail-value">{{ location.fieldDescription }}</span>
                                      </div>
                                    }
                                  </div>
                                </div>
                              }

                              <!-- Submitted Value Card -->
                              @if (location.submittedValue) {
                                <div class="detail-card submitted-value-card">
                                  <div class="card-header">
                                    <span class="card-title">Submitted Value</span>
                                  </div>
                                  <div class="card-body">
                                    <div class="value-display">
                                      <pre class="value-content">{{ location.submittedValue.valueDisplay }}</pre>
                                    </div>
                                    @if (isValueTooLong(location.submittedValue.valueDisplay)) {
                                      <div class="value-hint">
                                        Value contains {{ location.submittedValue.valueDisplay.length }} characters
                                      </div>
                                    }
                                  </div>
                                </div>
                              }

                              <!-- Additional locations -->
                              @if (issue.enrichedLocations.length > 1) {
                                <div class="additional-locations">
                                  <span class="additional-label">+ {{ issue.enrichedLocations.length - 1 }} more location(s)</span>
                                  @for (loc of issue.enrichedLocations.slice(1); track trackByLocation($index + 1, loc)) {
                                    <div class="additional-location-path">{{ loc.humanReadablePath || loc.cleanPath }}</div>
                                  }
                                </div>
                              }
                            </div>
                          }
                        } @else if (getPrimaryLocation(issue)) {
                          <div class="error-location">{{ getPrimaryLocation(issue) }}</div>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Warnings Section -->
              @if (enhanced.warnings.length > 0) {
                <div class="severity-section">
                  <h4 class="section-header section-warning">Warnings</h4>
                  <div class="errors-list">
                    @for (issue of enhanced.warnings; track trackByEnhancedIssue($index, issue)) {
                      <div class="error-item severity-warning">
                        <div class="error-header">
                          <span class="severity-badge badge-warning">warning</span>
                          @if (issue.messageId) {
                            <span class="error-code">{{ issue.messageId }}</span>
                          }
                          @if (issue.count > 1) {
                            <span class="occurrence-count">{{ issue.count }}x</span>
                          }
                        </div>
                        <div class="error-message">{{ issue.errorMessage }}</div>

                        <!-- Enhanced location toggle -->
                        @if (issue.enrichedLocations.length > 0) {
                          @let warnLoc = issue.enrichedLocations[0];
                          <button
                            class="location-toggle"
                            (click)="toggleLocationDetails('w_' + issue.errorMessage)">
                            <span class="toggle-icon">{{ isLocationExpanded('w_' + issue.errorMessage) ? '\u25BC' : '\u25B6' }}</span>
                            <span class="location-path">{{ warnLoc.humanReadablePath || warnLoc.cleanPath }}</span>
                            @if (warnLoc.dataElement) {
                              <span class="de-badge">{{ warnLoc.dataElement }}</span>
                            }
                          </button>

                          @if (isLocationExpanded('w_' + issue.errorMessage)) {
                            <div class="location-details">
                              <div class="detail-card fhir-location-card">
                                <div class="card-header">
                                  <span class="card-title">FHIR Location</span>
                                </div>
                                <div class="card-body">
                                  @if (warnLoc.resourceType) {
                                    <div class="detail-row">
                                      <span class="detail-label">Resource</span>
                                      <span class="detail-value mono">{{ warnLoc.resourceType }}</span>
                                    </div>
                                  }
                                  <div class="detail-row">
                                    <span class="detail-label">Field Path</span>
                                    <span class="detail-value mono">{{ warnLoc.humanReadablePath }}</span>
                                  </div>
                                  <div class="detail-row subtle">
                                    <span class="detail-label">Raw Path</span>
                                    <span class="detail-value mono small">{{ warnLoc.rawPath }}</span>
                                  </div>
                                </div>
                              </div>

                              @if (warnLoc.dataElement) {
                                <div class="detail-card cerner-source-card">
                                  <div class="card-header">
                                    <span class="card-title">Cerner Source</span>
                                  </div>
                                  <div class="card-body">
                                    <div class="detail-row">
                                      <span class="detail-label">Data Element</span>
                                      <span class="detail-value">
                                        <span class="data-element-code">{{ warnLoc.dataElement }}</span>
                                        <span class="data-element-name">{{ warnLoc.dataElementName }}</span>
                                      </span>
                                    </div>
                                    @if (warnLoc.tableName) {
                                      <div class="detail-row">
                                        <span class="detail-label">Database</span>
                                        <span class="detail-value mono">{{ warnLoc.tableName }}.{{ warnLoc.columnName }}</span>
                                      </div>
                                    }
                                    @if (warnLoc.jsonPath) {
                                      <div class="detail-row">
                                        <span class="detail-label">JSON Path</span>
                                        <span class="detail-value mono">{{ warnLoc.jsonPath }}</span>
                                      </div>
                                    }
                                    @if (warnLoc.fieldDescription) {
                                      <div class="detail-row">
                                        <span class="detail-label">Description</span>
                                        <span class="detail-value">{{ warnLoc.fieldDescription }}</span>
                                      </div>
                                    }
                                  </div>
                                </div>
                              }

                              @if (warnLoc.submittedValue) {
                                <div class="detail-card submitted-value-card">
                                  <div class="card-header">
                                    <span class="card-title">Submitted Value</span>
                                  </div>
                                  <div class="card-body">
                                    <div class="value-display">
                                      <pre class="value-content">{{ warnLoc.submittedValue.valueDisplay }}</pre>
                                    </div>
                                  </div>
                                </div>
                              }
                            </div>
                          }
                        } @else if (getPrimaryLocation(issue)) {
                          <div class="error-location">{{ getPrimaryLocation(issue) }}</div>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Information Section (collapsed by default) -->
              @if (enhanced.information.length > 0) {
                <div class="severity-section">
                  <button class="section-toggle" (click)="toggleInfoSection()">
                    <span class="toggle-icon">{{ showInfoSection() ? '\u25BC' : '\u25B6' }}</span>
                    <h4 class="section-header section-info">
                      Information ({{ enhanced.infoCount }})
                    </h4>
                  </button>
                  @if (showInfoSection()) {
                    <div class="errors-list">
                      @for (issue of enhanced.information; track trackByEnhancedIssue($index, issue)) {
                        <div class="error-item severity-info">
                          <div class="error-header">
                            <span class="severity-badge badge-info">info</span>
                            @if (issue.count > 1) {
                              <span class="occurrence-count">{{ issue.count }}x</span>
                            }
                          </div>
                          <div class="error-message">{{ issue.errorMessage }}</div>
                          @if (issue.enrichedLocations.length > 0) {
                            @let infoLoc = issue.enrichedLocations[0];
                            <button
                              class="location-toggle"
                              (click)="toggleLocationDetails('i_' + issue.errorMessage)">
                              <span class="toggle-icon">{{ isLocationExpanded('i_' + issue.errorMessage) ? '\u25BC' : '\u25B6' }}</span>
                              <span class="location-path">{{ infoLoc.humanReadablePath || infoLoc.cleanPath }}</span>
                            </button>

                            @if (isLocationExpanded('i_' + issue.errorMessage)) {
                              <div class="location-details">
                                <div class="detail-card fhir-location-card">
                                  <div class="card-header">
                                    <span class="card-title">FHIR Location</span>
                                  </div>
                                  <div class="card-body">
                                    <div class="detail-row">
                                      <span class="detail-label">Field Path</span>
                                      <span class="detail-value mono">{{ infoLoc.humanReadablePath }}</span>
                                    </div>
                                    <div class="detail-row subtle">
                                      <span class="detail-label">Raw Path</span>
                                      <span class="detail-value mono small">{{ infoLoc.rawPath }}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                          } @else if (getPrimaryLocation(issue)) {
                            <div class="error-location">{{ getPrimaryLocation(issue) }}</div>
                          }
                        </div>
                      }
                    </div>
                  }
                </div>
              }
            }
          } @else {
            <div class="no-errors">
              <span class="success-icon">\u2713</span>
              <p>No validation issues reported in the response.</p>
            </div>
          }
        </div>
      }

      <!-- Raw JSON Tab -->
      @if (activeTab() === 'raw') {
        <div class="json-content">
          <div class="content-toolbar">
            <button
              class="copy-btn"
              (click)="copyToClipboard(formattedRawData())"
              [class.success]="copySuccess()">
              {{ copySuccess() ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <pre class="json-pre"><code>{{ formattedRawData() }}</code></pre>
        </div>
      }
    </div>
  </div>
} @else if (!loading()) {
  <div class="no-content">
    <p>No callback data available or content is not a Mirth callback.</p>
  </div>
}
`, styles: ['/* src/app/logs/components/mirth-callback-viewer.scss */\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.callback-viewer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.callback-header {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-rejected {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-banner.status-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner.status-partial {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-unknown {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner .status-icon {\n  font-size: 1.25rem;\n}\n.status-banner .status-label {\n  font-size: 1rem;\n}\n.status-banner .http-status {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.header-grid.secondary {\n  grid-template-columns: 1fr;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .header-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item .value {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item .value.bundle-id {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.channel-badge {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.channel-badge.channel-02 {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.channel-badge.channel-03 {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.patient-info {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .patient-info {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.patient-info .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.patient-info .info-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.patient-info .info-item .value {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.patient-info .info-item .value .accepted {\n  color: #2e7d32;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab.has-errors {\n  color: #c62828;\n}\n.tab .error-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #c62828;\n  color: white;\n  border-radius: 10px;\n}\n.tab-content {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content {\n  padding: 1rem;\n}\n.summary-content h4 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content h4:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item .resource-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item .resource-toggle:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item .resource-type {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item .resource-count {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item .resource-ids {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item .resource-ids li {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors li {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.resource-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.resource-card {\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  overflow: hidden;\n  background: white;\n}\n.resource-card .card-header-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: filter 0.15s;\n}\n.resource-card .card-header-btn:hover {\n  filter: brightness(0.96);\n}\n.resource-card .card-header-btn .toggle-icon {\n  font-size: 0.625rem;\n  color: rgba(0, 0, 0, 0.5);\n  flex-shrink: 0;\n}\n.resource-card .card-header-btn .card-title {\n  flex: 1;\n}\n.resource-card .card-header-btn .de-badge {\n  display: inline-block;\n  background: #7b1fa2;\n  color: white;\n  padding: 0.0625rem 0.4375rem;\n  border-radius: 3px;\n  font-weight: 600;\n  font-size: 0.625rem;\n  letter-spacing: 0.3px;\n  flex-shrink: 0;\n}\n.resource-card .card-header-btn .diff-indicator {\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #c62828;\n  background: #ffcdd2;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.resource-card .card-body {\n  border-top: 1px solid #e0e0e0;\n  padding: 0;\n}\n.resource-card.card-patient .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #bbdefb 100%);\n  color: #0d47a1;\n}\n.resource-card.card-organization .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #f3e5f5 0%,\n      #e1bee7 100%);\n  color: #6a1b9a;\n}\n.resource-card.card-location .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffe0b2 100%);\n  color: #e65100;\n}\n.resource-card.card-service-request .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  color: #2e7d32;\n}\n.resource-card.card-episode .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #fce4ec 0%,\n      #f8bbd0 100%);\n  color: #ad1457;\n}\n.resource-card.card-healthcare-service .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2f1 0%,\n      #b2dfdb 100%);\n  color: #00695c;\n}\n.resource-card.card-appointment .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #e8eaf6 0%,\n      #c5cae9 100%);\n  color: #283593;\n}\n.resource-card.card-encounter .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #fffde7 0%,\n      #fff9c4 100%);\n  color: #f57f17;\n}\n.resource-card.card-demographics .card-header-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #ede7f6 0%,\n      #d1c4e9 100%);\n  color: #4527a0;\n}\n.field-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.field-table td,\n.field-table th {\n  padding: 0.4375rem 0.875rem;\n  font-size: 0.8125rem;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: top;\n}\n.field-table tr:last-child td {\n  border-bottom: none;\n}\n.field-table .field-label {\n  width: 35%;\n  font-weight: 600;\n  color: #616161;\n  white-space: nowrap;\n}\n.field-table .field-value {\n  color: #212121;\n  word-break: break-word;\n}\n.value-match {\n  color: #212121;\n}\n.value-diff {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.value-diff .submitted-value {\n  color: #c62828;\n  text-decoration: line-through;\n}\n.value-diff .arrow {\n  color: #9e9e9e;\n  font-size: 0.75rem;\n}\n.value-diff .received-value {\n  color: #2e7d32;\n  font-weight: 600;\n  background: #e8f5e9;\n  padding: 0 0.25rem;\n  border-radius: 2px;\n}\n.demographics-table th {\n  font-weight: 600;\n  color: #616161;\n  text-align: left;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  background: #fafafa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.demographics-table .obs-name-col {\n  width: 35%;\n}\n.demographics-table .obs-value-col {\n  width: 40%;\n}\n.demographics-table .obs-date-col {\n  width: 25%;\n}\n.demographics-table .obs-name {\n  font-weight: 500;\n  color: #424242;\n}\n.demographics-table .obs-value {\n  color: #212121;\n  word-break: break-word;\n}\n.demographics-table .obs-date {\n  color: #757575;\n  font-size: 0.75rem;\n  font-family: "Roboto Mono", monospace;\n}\n.code-system {\n  display: inline-block;\n  margin-left: 0.375rem;\n  font-size: 0.625rem;\n  font-family: "Roboto Mono", monospace;\n  color: #9e9e9e;\n  background: #f5f5f5;\n  padding: 0 0.25rem;\n  border-radius: 2px;\n}\n.json-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre code {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.errors-content {\n  padding: 1rem;\n}\n.severity-summary {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.severity-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.severity-chip.chip-error {\n  background: #ffcdd2;\n  color: #b71c1c;\n}\n.severity-chip.chip-warning {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.severity-chip.chip-info {\n  background: #bbdefb;\n  color: #0d47a1;\n}\n.severity-chip.chip-channel {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.severity-section {\n  margin-bottom: 1.25rem;\n}\n.severity-section:last-child {\n  margin-bottom: 0;\n}\n.section-header {\n  margin: 0 0 0.625rem 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 0.375rem;\n  border-bottom: 2px solid;\n}\n.section-header.section-error {\n  color: #c62828;\n  border-bottom-color: #c62828;\n}\n.section-header.section-warning {\n  color: #e65100;\n  border-bottom-color: #ef6c00;\n}\n.section-header.section-info {\n  color: #1565c0;\n  border-bottom-color: #1976d2;\n}\n.section-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n}\n.section-toggle:hover {\n  opacity: 0.8;\n}\n.section-toggle .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.section-toggle .section-header {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.errors-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.error-item {\n  padding: 0.625rem 0.75rem;\n  border-radius: 4px;\n  border-left: 4px solid;\n}\n.error-item.severity-error {\n  background: #ffebee;\n  border-left-color: #c62828;\n}\n.error-item.severity-warning {\n  background: #fff3e0;\n  border-left-color: #ef6c00;\n}\n.error-item.severity-info {\n  background: #e3f2fd;\n  border-left-color: #1976d2;\n}\n.error-item .error-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.375rem;\n}\n.error-item .severity-badge {\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n}\n.error-item .severity-badge.badge-error {\n  background: #ef9a9a;\n  color: #b71c1c;\n}\n.error-item .severity-badge.badge-warning {\n  background: #ffcc80;\n  color: #bf360c;\n}\n.error-item .severity-badge.badge-info {\n  background: #90caf9;\n  color: #0d47a1;\n}\n.error-item .error-code {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  font-family: "Roboto Mono", monospace;\n}\n.error-item .occurrence-count {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--text-secondary, #888);\n  margin-left: auto;\n}\n.error-item .error-message {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n  line-height: 1.4;\n}\n.error-item .error-message.channel-02-error {\n  font-family: "Roboto Mono", monospace;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n.error-item .error-location {\n  margin-top: 0.375rem;\n  font-size: 0.6875rem;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary, #888);\n  word-break: break-all;\n}\n.location-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.375rem 0.5rem;\n  margin-top: 0.375rem;\n  background: rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n  text-align: left;\n}\n.location-toggle:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.location-toggle .toggle-icon {\n  color: #666;\n  font-size: 0.625rem;\n  flex-shrink: 0;\n}\n.location-toggle .location-path {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n  color: #1565c0;\n  flex: 1;\n  word-break: break-all;\n}\n.location-toggle .de-badge {\n  display: inline-block;\n  background: #7b1fa2;\n  color: white;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n  font-weight: 600;\n  font-size: 0.625rem;\n  flex-shrink: 0;\n  letter-spacing: 0.3px;\n}\n.location-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  margin-top: 0.5rem;\n  padding: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e8e8e8;\n}\n.detail-card {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e0e0e0;\n  overflow: hidden;\n}\n.detail-card .card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.detail-card .card-header .card-title {\n  font-weight: 600;\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #424242;\n}\n.detail-card .card-body {\n  padding: 0.5rem 0.75rem;\n}\n.fhir-location-card .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #bbdefb 100%);\n  border-bottom-color: #90caf9;\n}\n.fhir-location-card .card-header .card-title {\n  color: #0d47a1;\n}\n.cerner-source-card .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #f3e5f5 0%,\n      #e1bee7 100%);\n  border-bottom-color: #ce93d8;\n}\n.cerner-source-card .card-header .card-title {\n  color: #6a1b9a;\n}\n.submitted-value-card .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffe0b2 100%);\n  border-bottom-color: #ffcc80;\n}\n.submitted-value-card .card-header .card-title {\n  color: #e65100;\n}\n.detail-row {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.375rem 0;\n  align-items: flex-start;\n}\n.detail-row:not(:last-child) {\n  border-bottom: 1px solid #f5f5f5;\n}\n.detail-row.subtle {\n  opacity: 0.65;\n}\n.detail-row .detail-label {\n  min-width: 80px;\n  font-weight: 600;\n  color: #666;\n  font-size: 0.6875rem;\n  flex-shrink: 0;\n  padding-top: 0.0625rem;\n}\n.detail-row .detail-value {\n  flex: 1;\n  font-size: 0.75rem;\n  color: #212121;\n  word-break: break-all;\n}\n.detail-row .detail-value.mono {\n  font-family: "Roboto Mono", monospace;\n  background: #f5f5f5;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n}\n.detail-row .detail-value.small {\n  font-size: 0.625rem;\n}\n.data-element-code {\n  display: inline-block;\n  background: #7b1fa2;\n  color: white;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n  font-weight: 600;\n  font-size: 0.625rem;\n  margin-right: 0.375rem;\n}\n.data-element-name {\n  color: #424242;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n.value-display {\n  background: #fafafa;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  padding: 0.5rem;\n}\n.value-display .value-content {\n  margin: 0;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.6875rem;\n  color: #d32f2f;\n  word-break: break-all;\n  white-space: pre-wrap;\n  line-height: 1.4;\n}\n.value-hint {\n  margin-top: 0.375rem;\n  font-size: 0.625rem;\n  color: #888;\n  font-style: italic;\n}\n.additional-locations {\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 4px;\n}\n.additional-locations .additional-label {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #666;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.additional-locations .additional-location-path {\n  font-size: 0.625rem;\n  font-family: "Roboto Mono", monospace;\n  color: #888;\n  padding: 0.125rem 0;\n  word-break: break-all;\n}\n.no-errors {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #2e7d32;\n}\n.no-errors .success-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n.no-errors p {\n  margin: 0;\n  font-size: 1rem;\n}\n.no-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content p {\n  margin: 0;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MirthCallbackViewerComponent, { className: "MirthCallbackViewerComponent", filePath: "src/app/logs/components/mirth-callback-viewer.ts", lineNumber: 41 });
})();

// src/app/logs/components/coded-field-card.ts
function CodedFieldCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deCode());
  }
}
function CodedFieldCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "button", 7)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r0.expanded())("aria-label", ctx_r0.expanded() ? "Collapse details" : "Expand details");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.expanded() ? "\u25BC" : "\u25B6");
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cf_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cf_r2.code);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Label");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cf_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cf_r2.label);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Code System");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cf_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cf_r2.codeSystem);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Source");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cf_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cf_r2.codeValueSource);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Value Set");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cf_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cf_r2.valueSetUrl);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Extension URL");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cf_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cf_r2.extensionUrl);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_0_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(1, CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_1_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(2, CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_2_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(3, CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_3_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(4, CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_4_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(5, CodedFieldCardComponent_Conditional_10_Conditional_1_Conditional_5_Template, 5, 1, "div", 11);
  }
  if (rf & 2) {
    const cf_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(cf_r2.code ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cf_r2.label && cf_r2.label !== ctx_r0.displayValue() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cf_r2.codeSystem ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cf_r2.codeValueSource ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cf_r2.valueSetUrl ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cf_r2.extensionUrl ? 5 : -1);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const oc_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(oc_r3.code);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Label");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const oc_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(oc_r3.label);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Code System");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const oc_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(oc_r3.codeSystem);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "div", 17);
    \u0275\u0275text(2, "Observation Code (LOINC)");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, CodedFieldCardComponent_Conditional_10_Conditional_2_Conditional_3_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(4, CodedFieldCardComponent_Conditional_10_Conditional_2_Conditional_4_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(5, CodedFieldCardComponent_Conditional_10_Conditional_2_Conditional_5_Template, 5, 1, "div", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const oc_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(oc_r3.code ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(oc_r3.label ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(oc_r3.codeSystem ? 5 : -1);
  }
}
function CodedFieldCardComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Extension URL");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.extensionUrl());
  }
}
function CodedFieldCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, CodedFieldCardComponent_Conditional_10_Conditional_1_Template, 6, 6);
    \u0275\u0275conditionalCreate(2, CodedFieldCardComponent_Conditional_10_Conditional_2_Template, 6, 3, "div", 10);
    \u0275\u0275conditionalCreate(3, CodedFieldCardComponent_Conditional_10_Conditional_3_Template, 5, 1, "div", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.codedField()) ? 1 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.observationCode()) ? 2 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.extensionUrl() ? 3 : -1);
  }
}
var CodedFieldCardComponent = class _CodedFieldCardComponent {
  /** Display label for the field */
  label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
  /** The primary display value */
  value = input("", ...ngDevMode ? [{ debugName: "value" }] : []);
  /** Optional DE code (e.g., DE04.007) */
  deCode = input("", ...ngDevMode ? [{ debugName: "deCode" }] : []);
  /** Full coded field details */
  codedField = input(...ngDevMode ? [void 0, { debugName: "codedField" }] : []);
  /** Observation code details (LOINC) */
  observationCode = input(...ngDevMode ? [void 0, { debugName: "observationCode" }] : []);
  /** Extension URL (for fields with separate extension URLs) */
  extensionUrl = input("", ...ngDevMode ? [{ debugName: "extensionUrl" }] : []);
  /** Local expanded state */
  expanded = signal(false, ...ngDevMode ? [{ debugName: "expanded" }] : []);
  /** Computed display value - uses label from coded field if value is empty */
  displayValue = computed(() => {
    const val = this.value();
    if (val)
      return val;
    const cf = this.codedField();
    return cf?.label || "";
  }, ...ngDevMode ? [{ debugName: "displayValue" }] : []);
  /** Error codes from CCL sPopulateMHAPDSField lookup failures */
  static ERROR_CODES = [
    "NO_PAIR_MATCH",
    "NO_CT_VALUE",
    "NO_CT_TABLE",
    "NO_CT_CONFIGURED",
    "NO_MAPPING",
    "NO_OBS_CODE",
    "NO_VALUE_METADATA",
    "NO_CONSTANT_PAIR"
  ];
  /** Check if the field value contains an error code or unmapped marker */
  isUnmapped = computed(() => {
    const val = this.displayValue();
    if (val.includes("[unmapped]"))
      return true;
    const cf = this.codedField();
    const codeVal = cf?.code || "";
    return _CodedFieldCardComponent.ERROR_CODES.some((ec) => val === ec || codeVal === ec);
  }, ...ngDevMode ? [{ debugName: "isUnmapped" }] : []);
  /** Check if there are expandable details */
  hasDetails = computed(() => {
    const cf = this.codedField();
    const oc = this.observationCode();
    const ext = this.extensionUrl();
    if (cf && (cf.code || cf.codeSystem || cf.codeValueSource || cf.valueSetUrl || cf.extensionUrl)) {
      return true;
    }
    if (oc && oc.code) {
      return true;
    }
    if (ext) {
      return true;
    }
    return false;
  }, ...ngDevMode ? [{ debugName: "hasDetails" }] : []);
  toggleExpand() {
    if (this.hasDetails()) {
      this.expanded.update((v) => !v);
    }
  }
  static \u0275fac = function CodedFieldCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodedFieldCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodedFieldCardComponent, selectors: [["app-coded-field-card"]], inputs: { label: [1, "label"], value: [1, "value"], deCode: [1, "deCode"], codedField: [1, "codedField"], observationCode: [1, "observationCode"], extensionUrl: [1, "extensionUrl"] }, decls: 11, vars: 13, consts: [[1, "coded-field-card"], [1, "card-header", 3, "click"], [1, "header-content"], [1, "field-label"], [1, "de-code"], [1, "primary-value"], [1, "value-text"], [1, "expand-toggle"], [1, "card-details"], [1, "toggle-icon"], [1, "observation-code-section"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value", "mono"], [1, "detail-value"], [1, "detail-value", "url"], [1, "detail-value", "source"], [1, "section-header"]], template: function CodedFieldCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domListener("click", function CodedFieldCardComponent_Template_div_click_1_listener() {
        return ctx.toggleExpand();
      });
      \u0275\u0275domElementStart(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(5, CodedFieldCardComponent_Conditional_5_Template, 2, 1, "span", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(9, CodedFieldCardComponent_Conditional_9_Template, 3, 3, "button", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(10, CodedFieldCardComponent_Conditional_10_Template, 4, 3, "div", 8);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("expandable", ctx.hasDetails())("expanded", ctx.expanded())("unmapped", ctx.isUnmapped());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.deCode() ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("empty", !ctx.displayValue());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.displayValue() || "N/A");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasDetails() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.expanded() && ctx.hasDetails() ? 10 : -1);
    }
  }, styles: ['\n\n.coded-field-card[_ngcontent-%COMP%] {\n  background: var(--card-bg, #fff);\n  border: 1px solid var(--border-color, #e2e8f0);\n  border-radius: 6px;\n  overflow: hidden;\n  transition: box-shadow 0.15s ease;\n}\n.coded-field-card.expandable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.coded-field-card.expandable[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color, #3b82f6);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.coded-field-card.expanded[_ngcontent-%COMP%] {\n  border-color: var(--primary-color, #3b82f6);\n}\n.coded-field-card.unmapped[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border: 2px solid #f59e0b;\n  border-left: 4px solid #f59e0b;\n  box-shadow: 0 1px 3px rgba(245, 158, 11, 0.15);\n}\n.coded-field-card.unmapped[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  color: #92400e;\n}\n.coded-field-card.unmapped[_ngcontent-%COMP%]   .value-text[_ngcontent-%COMP%] {\n  color: #78350f;\n  font-weight: 600;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--label-color, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.de-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--de-code-color, #94a3b8);\n  background: var(--de-code-bg, #f1f5f9);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.primary-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.value-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--value-color, #1e293b);\n  word-break: break-word;\n}\n.value-text.empty[_ngcontent-%COMP%] {\n  color: var(--empty-color, #94a3b8);\n  font-style: italic;\n}\n.expand-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px 4px;\n  cursor: pointer;\n  color: var(--toggle-color, #64748b);\n  font-size: 10px;\n  flex-shrink: 0;\n}\n.expand-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color, #3b82f6);\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform 0.15s ease;\n}\n.card-details[_ngcontent-%COMP%] {\n  padding: 8px 12px 12px;\n  background: var(--details-bg, #f8fafc);\n  border-top: 1px solid var(--border-color, #e2e8f0);\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 11px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 80px;\n  color: var(--label-color, #64748b);\n  font-weight: 500;\n}\n.detail-value[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--detail-value-color, #475569);\n  word-break: break-word;\n}\n.detail-value.mono[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  color: var(--mono-color, #0369a1);\n}\n.detail-value.url[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 10px;\n  color: var(--url-color, #7c3aed);\n  word-break: break-all;\n}\n.detail-value.source[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--source-color, #059669);\n}\n.observation-code-section[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding-top: 8px;\n  border-top: 1px dashed var(--border-color, #e2e8f0);\n}\n.section-header[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--section-header-color, #94a3b8);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 6px;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodedFieldCardComponent, [{
    type: Component,
    args: [{ selector: "app-coded-field-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="coded-field-card" [class.expandable]="hasDetails()" [class.expanded]="expanded()" [class.unmapped]="isUnmapped()">
      <div class="card-header" (click)="toggleExpand()">
        <div class="header-content">
          <span class="field-label">{{ label() }}</span>
          @if (deCode()) {
            <span class="de-code">{{ deCode() }}</span>
          }
        </div>
        <div class="primary-value">
          <span class="value-text" [class.empty]="!displayValue()">{{ displayValue() || 'N/A' }}</span>
          @if (hasDetails()) {
            <button class="expand-toggle" [attr.aria-expanded]="expanded()" [attr.aria-label]="expanded() ? 'Collapse details' : 'Expand details'">
              <span class="toggle-icon">{{ expanded() ? '\u25BC' : '\u25B6' }}</span>
            </button>
          }
        </div>
      </div>

      @if (expanded() && hasDetails()) {
        <div class="card-details">
          @if (codedField(); as cf) {
            @if (cf.code) {
              <div class="detail-row">
                <span class="detail-label">Code</span>
                <span class="detail-value mono">{{ cf.code }}</span>
              </div>
            }
            @if (cf.label && cf.label !== displayValue()) {
              <div class="detail-row">
                <span class="detail-label">Label</span>
                <span class="detail-value">{{ cf.label }}</span>
              </div>
            }
            @if (cf.codeSystem) {
              <div class="detail-row">
                <span class="detail-label">Code System</span>
                <span class="detail-value url">{{ cf.codeSystem }}</span>
              </div>
            }
            @if (cf.codeValueSource) {
              <div class="detail-row">
                <span class="detail-label">Source</span>
                <span class="detail-value source">{{ cf.codeValueSource }}</span>
              </div>
            }
            @if (cf.valueSetUrl) {
              <div class="detail-row">
                <span class="detail-label">Value Set</span>
                <span class="detail-value url">{{ cf.valueSetUrl }}</span>
              </div>
            }
            @if (cf.extensionUrl) {
              <div class="detail-row">
                <span class="detail-label">Extension URL</span>
                <span class="detail-value url">{{ cf.extensionUrl }}</span>
              </div>
            }
          }

          @if (observationCode(); as oc) {
            <div class="observation-code-section">
              <div class="section-header">Observation Code (LOINC)</div>
              @if (oc.code) {
                <div class="detail-row">
                  <span class="detail-label">Code</span>
                  <span class="detail-value mono">{{ oc.code }}</span>
                </div>
              }
              @if (oc.label) {
                <div class="detail-row">
                  <span class="detail-label">Label</span>
                  <span class="detail-value">{{ oc.label }}</span>
                </div>
              }
              @if (oc.codeSystem) {
                <div class="detail-row">
                  <span class="detail-label">Code System</span>
                  <span class="detail-value url">{{ oc.codeSystem }}</span>
                </div>
              }
            </div>
          }

          @if (extensionUrl()) {
            <div class="detail-row">
              <span class="detail-label">Extension URL</span>
              <span class="detail-value url">{{ extensionUrl() }}</span>
            </div>
          }
        </div>
      }
    </div>
  `, styles: ['/* angular:styles/component:scss;5bf1c51a7ca81d643383c381a821e8397724a05e67c0fa700a33c27e0598be71;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/logs/components/coded-field-card.ts */\n.coded-field-card {\n  background: var(--card-bg, #fff);\n  border: 1px solid var(--border-color, #e2e8f0);\n  border-radius: 6px;\n  overflow: hidden;\n  transition: box-shadow 0.15s ease;\n}\n.coded-field-card.expandable {\n  cursor: pointer;\n}\n.coded-field-card.expandable:hover {\n  border-color: var(--primary-color, #3b82f6);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.coded-field-card.expanded {\n  border-color: var(--primary-color, #3b82f6);\n}\n.coded-field-card.unmapped {\n  background: #fef3c7;\n  border: 2px solid #f59e0b;\n  border-left: 4px solid #f59e0b;\n  box-shadow: 0 1px 3px rgba(245, 158, 11, 0.15);\n}\n.coded-field-card.unmapped .field-label {\n  color: #92400e;\n}\n.coded-field-card.unmapped .value-text {\n  color: #78350f;\n  font-weight: 600;\n}\n.card-header {\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.field-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--label-color, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.de-code {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--de-code-color, #94a3b8);\n  background: var(--de-code-bg, #f1f5f9);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.primary-value {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.value-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--value-color, #1e293b);\n  word-break: break-word;\n}\n.value-text.empty {\n  color: var(--empty-color, #94a3b8);\n  font-style: italic;\n}\n.expand-toggle {\n  background: none;\n  border: none;\n  padding: 2px 4px;\n  cursor: pointer;\n  color: var(--toggle-color, #64748b);\n  font-size: 10px;\n  flex-shrink: 0;\n}\n.expand-toggle:hover {\n  color: var(--primary-color, #3b82f6);\n}\n.toggle-icon {\n  display: inline-block;\n  transition: transform 0.15s ease;\n}\n.card-details {\n  padding: 8px 12px 12px;\n  background: var(--details-bg, #f8fafc);\n  border-top: 1px solid var(--border-color, #e2e8f0);\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 11px;\n}\n.detail-label {\n  flex-shrink: 0;\n  width: 80px;\n  color: var(--label-color, #64748b);\n  font-weight: 500;\n}\n.detail-value {\n  flex: 1;\n  color: var(--detail-value-color, #475569);\n  word-break: break-word;\n}\n.detail-value.mono {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  color: var(--mono-color, #0369a1);\n}\n.detail-value.url {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 10px;\n  color: var(--url-color, #7c3aed);\n  word-break: break-all;\n}\n.detail-value.source {\n  font-size: 10px;\n  color: var(--source-color, #059669);\n}\n.observation-code-section {\n  margin-top: 6px;\n  padding-top: 8px;\n  border-top: 1px dashed var(--border-color, #e2e8f0);\n}\n.section-header {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--section-header-color, #94a3b8);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  margin-bottom: 6px;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodedFieldCardComponent, { className: "CodedFieldCardComponent", filePath: "src/app/logs/components/coded-field-card.ts", lineNumber: 276 });
})();

// src/app/logs/models/extraction-payload.model.ts
var EXTRACTION_STATUS_CONFIG = {
  COMPLETE: { label: "Complete", class: "status-complete", icon: "\u2713" },
  PARTIAL: { label: "Partial", class: "status-partial", icon: "\u26A0" },
  EMPTY: { label: "Empty", class: "status-empty", icon: "\u25CB" },
  INVALID: { label: "Invalid", class: "status-invalid", icon: "\u2717" }
};
var MHA_PDS_DATA_ELEMENTS = {
  "DE01": { name: "Client Name", resourceType: "Patient", description: "Client identifying information" },
  "DE02": { name: "Client Identifiers", resourceType: "Patient", description: "MRN, OHIP numbers" },
  "DE03": { name: "Client Address", resourceType: "Patient", description: "Address and postal code" },
  "DE04": { name: "Client Demographics", resourceType: "Observation", description: "Gender, employment, housing, etc." },
  "DE05": { name: "Referral", resourceType: "ServiceRequest", description: "Referral information" },
  "DE06": { name: "Episode of Care", resourceType: "EpisodeOfCare", description: "Episode tracking" },
  "DE07": { name: "Provider Organization", resourceType: "Organization", description: "Healthcare provider org" },
  "DE08": { name: "Provider Site", resourceType: "Location", description: "Healthcare service site" },
  "DE09": { name: "Health Program", resourceType: "HealthcareService", description: "Program enrollment" },
  "DE10": { name: "Service Events", resourceType: "Encounter", description: "Health service events" }
};

// src/app/logs/utils/extraction-payload-parser.ts
function getCodedValue(obj) {
  if (!obj || typeof obj !== "object") return "";
  return obj.CODE || "";
}
function getCodedLabel(obj) {
  if (!obj || typeof obj !== "object") return "";
  return obj.LABEL || "";
}
function getStr2(obj, key) {
  const val = obj[key];
  if (typeof val === "string") return val;
  return "";
}
function extractCodedFieldDetails(obj) {
  if (!obj || typeof obj !== "object") return void 0;
  const coded = obj;
  if (!coded.CODE && !coded.LABEL) return void 0;
  return {
    code: coded.CODE || "",
    label: coded.LABEL || "",
    codeSystem: coded.CODE_SYSTEM || "",
    codeValueSource: coded.CODE_VALUE_SOURCE || "",
    valueSetUrl: coded.VALUE_SET_URL || "",
    extensionUrl: coded.EXTENSION_URL || void 0
  };
}
function extractObservationCodeDetails(obj) {
  if (!obj || typeof obj !== "object") return void 0;
  const parent = obj;
  const obsCode = parent["OBSERVATION_CODE"];
  if (!obsCode || !obsCode["CODE"]) return void 0;
  return {
    code: obsCode["CODE"] || "",
    label: obsCode["LABEL"] || "",
    codeSystem: obsCode["CODE_SYSTEM"] || ""
  };
}
function parseExtractionPayload(jsonText, episodeIndex = 0) {
  if (!jsonText || jsonText.trim().length === 0) {
    return null;
  }
  let parsed;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object") return null;
  if ("MHA_PDS_SUBMISSION" in parsed) {
    return parseMHAPDSSubmission(parsed, episodeIndex);
  }
  if (parsed["resourceType"] === "Bundle") {
    return parseFHIRBundle(parsed);
  }
  return null;
}
function parseMHAPDSSubmission(raw, episodeIndex) {
  const parseErrors = [];
  const submission = raw.MHA_PDS_SUBMISSION;
  if (!submission || !submission.QUAL || submission.QUAL.length === 0) {
    return null;
  }
  const idx = Math.max(0, Math.min(episodeIndex, submission.QUAL.length - 1));
  const episode = submission.QUAL[idx];
  const episodes = submission.QUAL.map((ep, i) => {
    const client = ep.CLIENT || {};
    const firstName = getStr2(client, "DE01_001_FIRST_NAME");
    const lastName = getStr2(client, "DE01_003_LAST_NAME");
    const name = [lastName, firstName].filter(Boolean).join(", ");
    const program = ep.HEALTH_PROGRAM ? getStr2(ep.HEALTH_PROGRAM, "DE09_002_PROGRAM_NAME") : "";
    const bundles = (ep.SUBMIT_BUNDLE || []).map((b) => ({
      type: b.TYPE || "",
      status: b.STATUS || "",
      profileCount: b.PROFILE_CNT || 0,
      profiles: (b.PROFILE || []).map((p) => p.TYPE || "")
    }));
    return {
      index: i,
      episodeIdentifier: ep.EPISODE_IDENTIFIER || `Episode ${i + 1}`,
      patientName: name || "Unknown",
      programName: program,
      fieldsCount: ep.FIELDS_LIST_CNT || 0,
      servicesCount: ep.SERVICES_CNT || 0,
      bundleCount: ep.SUBMIT_BUNDLE_CNT || 0,
      fieldsList: ep.FIELDS_LIST || [],
      bundles
    };
  });
  const submissionInfo = {
    episodeCount: submission.CNT || submission.QUAL.length,
    executionStart: submission.INFO?.EXECUTION_START_DT_TM || "",
    executionEnd: submission.INFO?.EXECUTION_END_DT_TM || "",
    domain: submission.INFO?.CURDOMAIN || "",
    node: submission.INFO?.CURNODE || "",
    submitFieldsCount: submission.SUBMISSION_METADATA?.SUBMIT_FIELDS_CNT || 0,
    submitFields: submission.SUBMISSION_METADATA?.SUBMIT_FIELDS || []
  };
  const summary = buildMHAPDSSummary(episode, parseErrors);
  const status = determineMHAPDSStatus(episode);
  const statusConfig = EXTRACTION_STATUS_CONFIG[status];
  return {
    format: "mha-pds-submission",
    raw: null,
    rawSubmission: raw,
    status,
    statusLabel: statusConfig.label,
    statusClass: statusConfig.class,
    bundleId: episode.EPISODE_IDENTIFIER || "",
    bundleType: `${submission.CNT} episode${submission.CNT !== 1 ? "s" : ""}`,
    summary,
    parseErrors,
    episodes,
    submissionInfo
  };
}
function determineMHAPDSStatus(episode) {
  if (!episode) return "EMPTY";
  const client = episode.CLIENT;
  const hasName = !!getStr2(client, "DE01_001_FIRST_NAME");
  const hasEpisode = !!episode.EPISODE_IDENTIFIER;
  const hasServices = (episode.SERVICES_CNT || 0) > 0;
  if (hasName && hasEpisode && hasServices) return "COMPLETE";
  if (hasName || hasEpisode) return "PARTIAL";
  return "EMPTY";
}
function buildMHAPDSSummary(episode, parseErrors) {
  const patientInfo = extractMHAPDSPatient(episode);
  const episodeInfo = extractMHAPDSEpisode(episode);
  const referralInfo = extractMHAPDSReferral(episode);
  const providerInfo = extractMHAPDSProvider(episode);
  const programInfo = extractMHAPDSProgram(episode);
  const serviceEvents = extractMHAPDSServiceEvents(episode);
  const observations = extractMHAPDSObservations(episode);
  const dataElements = buildMHAPDSDataElements(episode);
  const totalResources = episode.FIELDS_LIST_CNT || 0;
  return {
    patientInfo,
    episodeInfo,
    referralInfo,
    providerInfo,
    programInfo,
    serviceEvents,
    observations,
    totalResources,
    dataElements
  };
}
function extractMHAPDSPatient(episode) {
  const result = {
    name: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mrn: "",
    ohip: "",
    birthDate: "",
    estimatedDobFlag: "",
    activeStatus: "",
    vendorIssuingId: "",
    hcnIssuingAuthority: "",
    identifierType: "",
    addressUse: "",
    address: "",
    city: "",
    province: "",
    postalCode: ""
  };
  const client = episode.CLIENT;
  if (!client) return result;
  result.firstName = getStr2(client, "DE01_001_FIRST_NAME");
  result.middleName = getStr2(client, "DE01_002_MIDDLE_NAME");
  result.lastName = getStr2(client, "DE01_003_LAST_NAME");
  result.name = [result.lastName, result.firstName].filter(Boolean).join(", ");
  result.mrn = getStr2(client, "DE02_001_CLIENT_IDENTIFIER_MRN");
  const hcnObj = client["DE02_003_HEALTH_CARD_NUMBER"];
  result.ohip = hcnObj ? getStr2(hcnObj, "VALUE") : "";
  result.vendorIssuingId = getStr2(client, "DE02_002_VENDOR_ISSUING_ID");
  result.birthDate = getStr2(client, "DE01_004_DATE_OF_BIRTH");
  result.estimatedDobFlag = getCodedLabel(client["DE01_005_ESTIMATED_DOB_FLAG"]);
  result.estimatedDobFlagCoded = extractCodedFieldDetails(client["DE01_005_ESTIMATED_DOB_FLAG"]);
  result.activeStatus = getCodedLabel(client["DE01_006_ACTIVE_STATUS"]);
  result.activeStatusCoded = extractCodedFieldDetails(client["DE01_006_ACTIVE_STATUS"]);
  result.hcnIssuingAuthority = getCodedLabel(client["DE02_004_HCN_ISSUING_AUTHORITY"]);
  result.hcnIssuingAuthorityCoded = extractCodedFieldDetails(client["DE02_004_HCN_ISSUING_AUTHORITY"]);
  result.identifierType = getCodedLabel(client["DE02_005_IDENTIFIER_TYPE"]);
  result.identifierTypeCoded = extractCodedFieldDetails(client["DE02_005_IDENTIFIER_TYPE"]);
  const address = client["ADDRESS"];
  if (address) {
    result.addressUse = getCodedLabel(address["DE03_001_ADDRESS_USE"]);
    result.addressUseCoded = extractCodedFieldDetails(address["DE03_001_ADDRESS_USE"]);
    result.city = getStr2(address, "DE03_002_CITY");
    result.province = getCodedLabel(address["DE03_003_PROVINCE"]);
    result.provinceCoded = extractCodedFieldDetails(address["DE03_003_PROVINCE"]);
    result.address = [result.city, result.province].filter(Boolean).join(", ");
    result.postalCode = getStr2(address, "DE03_004_POSTAL_CODE");
  }
  return result;
}
function extractMHAPDSEpisode(episode) {
  const result = {
    episodeId: "",
    status: "",
    firstContactDate: "",
    eligibilityScreeningDate: "",
    initialAssessmentDate: "",
    scheduledAppointmentDate: "",
    scheduledAppointmentEnd: "",
    appointmentStatus: "",
    cancellationReason: "",
    serviceInitiationDate: "",
    serviceEnrollmentDate: "",
    serviceTerminationDate: "",
    serviceTerminationReason: ""
  };
  const eoc = episode.EPISODE_OF_CARE;
  if (!eoc) return result;
  result.episodeId = getCodedValue(eoc["DE06_001_EPISODE_OF_CARE_ID"]) || episode.EPISODE_IDENTIFIER || "";
  result.episodeIdCoded = extractCodedFieldDetails(eoc["DE06_001_EPISODE_OF_CARE_ID"]);
  result.status = getCodedLabel(eoc["DE06_002_EPISODE_OF_CARE_STATUS"]);
  result.statusCoded = extractCodedFieldDetails(eoc["DE06_002_EPISODE_OF_CARE_STATUS"]);
  result.firstContactDate = getStr2(eoc, "DE06_003_FIRST_CONTACT_DATE");
  result.firstContactDateExtensionUrl = getStr2(eoc, "DE06_003_FIRST_CONTACT_DATE_EXTENSION_URL");
  result.eligibilityScreeningDate = getStr2(eoc, "DE06_004_ELIGIBILITY_SCREENING_DATE");
  result.eligibilityScreeningDateExtensionUrl = getStr2(eoc, "DE06_004_ELIGIBILITY_SCREENING_DATE_EXTENSION_URL");
  result.initialAssessmentDate = getStr2(eoc, "DE06_005_INITIAL_ASSESSMENT_DATE");
  result.initialAssessmentDateExtensionUrl = getStr2(eoc, "DE06_005_INITIAL_ASSESSMENT_DATE_EXTENSION_URL");
  const appt = eoc["APPOINTMENT"];
  if (appt) {
    result.scheduledAppointmentDate = getStr2(appt, "DE06_006_SCHEDULED_APPOINTMENT_DATE");
    result.scheduledAppointmentEnd = getStr2(appt, "DE06_006_SCHEDULED_APPOINTMENT_END");
    result.appointmentStatus = getCodedLabel(appt["APPOINTMENT_STATUS"]);
    result.appointmentStatusCoded = extractCodedFieldDetails(appt["APPOINTMENT_STATUS"]);
    result.cancellationReason = getCodedLabel(appt["DE06_007_CANCELLATION_REASON"]);
    result.cancellationReasonCoded = extractCodedFieldDetails(appt["DE06_007_CANCELLATION_REASON"]);
  }
  result.serviceInitiationDate = getStr2(eoc, "DE06_008_SERVICE_INITIATION_DATE");
  result.serviceInitiationDateExtensionUrl = getStr2(eoc, "DE06_008_SERVICE_INITIATION_DATE_EXTENSION_URL");
  result.serviceEnrollmentDate = getStr2(eoc, "DE06_009_SERVICE_ENROLLMENT_DATE");
  result.serviceTerminationDate = getStr2(eoc, "DE06_010_SERVICE_TERMINATION_DATE");
  result.serviceTerminationReason = getCodedLabel(eoc["DE06_011_SERVICE_TERMINATION_REASON"]);
  result.serviceTerminationReasonCoded = extractCodedFieldDetails(eoc["DE06_011_SERVICE_TERMINATION_REASON"]);
  return result;
}
function extractMHAPDSReferral(episode) {
  const result = {
    referralId: "",
    referralDate: "",
    referralSource: "",
    referralSourceType: "",
    referralType: "",
    status: "",
    intent: ""
  };
  const ref = episode.REFERRAL;
  if (!ref) return result;
  result.referralId = getCodedValue(ref["DE05_001_REFERRAL_ID"]);
  result.referralIdCoded = extractCodedFieldDetails(ref["DE05_001_REFERRAL_ID"]);
  result.referralDate = getStr2(ref, "DE05_002_REFERRAL_RECEIVED_DATE");
  result.referralSource = getStr2(ref, "DE05_003_REFERRAL_SOURCE");
  result.referralSourceType = getCodedLabel(ref["DE05_004_REFERRAL_SOURCE_TYPE"]);
  result.referralSourceTypeCoded = extractCodedFieldDetails(ref["DE05_004_REFERRAL_SOURCE_TYPE"]);
  result.referralType = getCodedLabel(ref["DE05_005_REFERRAL_TYPE"]);
  result.referralTypeCoded = extractCodedFieldDetails(ref["DE05_005_REFERRAL_TYPE"]);
  result.status = getCodedLabel(ref["DE05_STATUS"]);
  result.statusCoded = extractCodedFieldDetails(ref["DE05_STATUS"]);
  result.intent = getCodedLabel(ref["DE05_INTENT"]);
  result.intentCoded = extractCodedFieldDetails(ref["DE05_INTENT"]);
  return result;
}
function extractMHAPDSProvider(episode) {
  const result = {
    organizationName: "",
    organizationId: "",
    mohOrganizationId: "",
    organizationActiveFlag: "",
    locationName: "",
    locationId: "",
    siteCode: ""
  };
  const services = episode.SERVICES;
  if (!services || services.length === 0) return result;
  const firstService = services[0];
  const org = firstService["HSP_ORGANIZATION"];
  const site = firstService["HSP_SITE"];
  if (org) {
    result.organizationName = getStr2(org, "DE07_003_ORGANIZATION_NAME");
    result.organizationId = getCodedValue(org["DE07_001_ORGANIZATION_NUMBER"]);
    result.organizationIdCoded = extractCodedFieldDetails(org["DE07_001_ORGANIZATION_NUMBER"]);
    result.mohOrganizationId = getCodedValue(org["DE07_002_MOH_ORGANIZATION_ID"]);
    result.mohOrganizationIdCoded = extractCodedFieldDetails(org["DE07_002_MOH_ORGANIZATION_ID"]);
    result.organizationActiveFlag = getCodedLabel(org["DE07_004_ORGANIZATION_ACTIVE_FLAG"]);
    result.organizationActiveFlagCoded = extractCodedFieldDetails(org["DE07_004_ORGANIZATION_ACTIVE_FLAG"]);
  }
  if (site) {
    result.locationName = getStr2(site, "DE08_002_SITE_NAME");
    result.siteCode = getCodedValue(site["DE08_001_SITE_NUMBER"]);
    result.siteCodeCoded = extractCodedFieldDetails(site["DE08_001_SITE_NUMBER"]);
    result.locationId = result.siteCode;
  }
  return result;
}
function extractMHAPDSProgram(episode) {
  const result = {
    programId: "",
    programName: "",
    programCode: ""
  };
  const hp = episode.HEALTH_PROGRAM;
  if (!hp) return result;
  result.programId = getCodedValue(hp["DE09_001_PROGRAM_NUMBER"]);
  result.programIdCoded = extractCodedFieldDetails(hp["DE09_001_PROGRAM_NUMBER"]);
  result.programName = getStr2(hp, "DE09_002_PROGRAM_NAME");
  result.programCode = getCodedValue(hp["DE09_003_FUNCTIONAL_CENTRE"]);
  result.programCodeCoded = extractCodedFieldDetails(hp["DE09_003_FUNCTIONAL_CENTRE"]);
  return result;
}
function extractMHAPDSServiceEvents(episode) {
  const events = [];
  const services = episode.SERVICES;
  if (!services) return events;
  for (const svc of services) {
    const hse = svc["HEALTH_SERVICE_EVENT"];
    if (!hse) continue;
    const eventId = getCodedValue(hse["DE10_001_EVENT_ID"]);
    if (!eventId) continue;
    events.push({
      encounterId: eventId,
      encounterIdCoded: extractCodedFieldDetails(hse["DE10_001_EVENT_ID"]),
      encounterClass: getCodedLabel(hse["DE10_CLASS"]),
      encounterClassCoded: extractCodedFieldDetails(hse["DE10_CLASS"]),
      status: getCodedLabel(hse["DE10_008_ENCOUNTER_STATUS"]),
      statusCoded: extractCodedFieldDetails(hse["DE10_008_ENCOUNTER_STATUS"]),
      startDate: getStr2(hse, "DE10_004_ENCOUNTER_DATE"),
      endDate: "",
      serviceType: getCodedLabel(hse["DE10_002_SERVICE_MODALITY"]),
      serviceTypeCoded: extractCodedFieldDetails(hse["DE10_002_SERVICE_MODALITY"]),
      serviceModalityType: getCodedLabel(hse["DE10_003_SERVICE_MODALITY_TYPE"]),
      serviceModalityTypeCoded: extractCodedFieldDetails(hse["DE10_003_SERVICE_MODALITY_TYPE"]),
      groupServiceId: getStr2(hse, "DE10_005_GROUP_SERVICE_ID"),
      directMinutes: Number(hse["DE10_006_DIRECT_MINUTES"]) || 0,
      directMinutesExtensionUrl: getStr2(hse, "DE10_006_DIRECT_MINUTES_EXTENSION_URL"),
      indirectMinutes: Number(hse["DE10_007_INDIRECT_MINUTES"]) || 0,
      indirectMinutesExtensionUrl: getStr2(hse, "DE10_007_INDIRECT_MINUTES_EXTENSION_URL")
    });
  }
  return events;
}
function extractMHAPDSObservations(episode) {
  const observations = [];
  const client = episode.CLIENT;
  if (!client) return observations;
  const sdoh = client["SOCIO_DEMOGRAPHICS"];
  if (!sdoh) return observations;
  const effectiveDate = getStr2(sdoh, "DE04_001_SDOH_EFFECTIVE_DATE");
  if (effectiveDate) {
    observations.push({
      code: "DE04.001",
      display: "SDOH Effective Date",
      value: effectiveDate,
      valueCode: "",
      system: ""
    });
  }
  const obsStatus = getStr2(sdoh, "OBSERVATION_STATUS");
  const obsCat = sdoh["OBSERVATION_CATEGORY"];
  if (obsStatus || obsCat) {
    const catCoded = extractCodedFieldDetails(obsCat);
    observations.push({
      code: "DE04.META",
      display: "Observation Metadata",
      value: obsStatus ? `Status: ${obsStatus}` : "",
      valueCode: catCoded?.code || "",
      system: catCoded?.codeSystem || "",
      codedField: catCoded
    });
  }
  const obsFields = [
    { key: "DE04_005_PREFERRED_SERVICE_LANGUAGE", deCode: "DE04.005", display: "Preferred Service Language" },
    { key: "DE04_006_PREFERRED_OFFICIAL_LANGUAGE", deCode: "DE04.006", display: "Preferred Official Language" },
    { key: "DE04_007_GENDER_IDENTITY", deCode: "DE04.007", display: "Gender Identity" },
    { key: "DE04_008_SEXUAL_ORIENTATION", deCode: "DE04.008", display: "Sexual Orientation" },
    { key: "DE04_010_BORN_IN_CANADA", deCode: "DE04.010", display: "Born in Canada" },
    { key: "DE04_012_CITIZENSHIP_STATUS", deCode: "DE04.012", display: "Citizenship Status" },
    { key: "DE04_013_HIGHEST_EDUCATION", deCode: "DE04.013", display: "Highest Education" },
    { key: "DE04_014_EMPLOYMENT_STATUS", deCode: "DE04.014", display: "Employment Status" },
    { key: "DE04_015_INCOME_SOURCE", deCode: "DE04.015", display: "Income Source" },
    { key: "DE04_016_MARITAL_STATUS", deCode: "DE04.016", display: "Marital Status" },
    { key: "DE04_017_HOUSING_STATUS", deCode: "DE04.017", display: "Housing Status" },
    { key: "DE04_018_HOUSEHOLD_INCOME", deCode: "DE04.018", display: "Total Household Income" },
    { key: "DE04_020_LEGAL_STATUS", deCode: "DE04.020", display: "Legal Status" },
    { key: "DE04_021_PRE_EXISTING_CONDITIONS", deCode: "DE04.021", display: "Pre-existing Conditions" }
  ];
  for (const field of obsFields) {
    const val = sdoh[field.key];
    if (!val || typeof val !== "object") continue;
    const coded = val;
    const code = coded.CODE || "";
    if (!code) continue;
    let value;
    let system = coded.CODE_SYSTEM || "";
    if (code === "NO_CT_VALUE" || code === "NO_PAIR_MATCH" || code === "NO_CT_TABLE" || code === "NO_CT_CONFIGURED" || code === "NO_MAPPING") {
      const sourceValue = coded.CODE_VALUE_SOURCE || "";
      value = sourceValue ? `${sourceValue} [unmapped]` : "Unmapped value";
      system = "";
    } else {
      value = coded.LABEL || code;
    }
    observations.push({
      code: field.deCode,
      display: field.display,
      value,
      valueCode: code !== "NO_CT_VALUE" ? code : "",
      system,
      codedField: extractCodedFieldDetails(val),
      observationCode: extractObservationCodeDetails(val)
    });
  }
  const yearArrived = getStr2(sdoh, "DE04_009_YEAR_ARRIVED_CANADA");
  if (yearArrived) {
    const parsed = parseCCLYear(yearArrived);
    observations.push({
      code: "DE04.009",
      display: "Year Arrived in Canada",
      value: parsed || yearArrived,
      valueCode: "",
      system: ""
    });
  }
  const members = sdoh["DE04_019_HOUSEHOLD_MEMBERS_SUPPORTED"];
  if (members && typeof members === "object") {
    const val = members["VALUE"];
    if (val !== void 0 && val !== null) {
      observations.push({
        code: "DE04.019",
        display: "People Income Supports",
        value: String(val),
        valueCode: "",
        system: "",
        observationCode: extractObservationCodeDetails(members)
      });
    }
  }
  return observations;
}
function parseCCLYear(raw) {
  if (!raw) return "";
  const parts = raw.split(":");
  if (parts.length >= 2 && parts[1].length >= 4) {
    const year = parts[1].substring(0, 4);
    if (/^\d{4}$/.test(year) && year !== "0000") return year;
  }
  return "";
}
var MHA_PDS_FIELD_NAMES = {
  "DE01_001": "Client First Name",
  "DE01_002": "Client Middle Name",
  "DE01_003": "Client Last Name",
  "DE01_004": "Date of Birth",
  "DE01_005": "Estimated DOB Flag",
  "DE01_006": "Client Active Status",
  "DE02_001": "Client Identifier MRN",
  "DE02_002": "Vendor Issuing ID",
  "DE02_003": "Health Card Number",
  "DE02_004": "HCN Issuing Authority",
  "DE02_005": "Identifier Type",
  "DE03_001": "Address Use",
  "DE03_002": "City",
  "DE03_003": "Province",
  "DE03_004": "Postal Code",
  "DE04_001": "SDOH Effective Date",
  "DE04_002": "Ethnicity",
  "DE04_003": "Religion/Spiritual",
  "DE04_004": "First Language",
  "DE04_005": "Preferred Service Language",
  "DE04_006": "Preferred Official Language",
  "DE04_007": "Gender Identity",
  "DE04_008": "Sexual Orientation",
  "DE04_009": "Year Arrived in Canada",
  "DE04_010": "Born in Canada",
  "DE04_012": "Citizenship Status",
  "DE04_013": "Highest Education Level",
  "DE04_014": "Employment Status",
  "DE04_015": "Personal Income Source",
  "DE04_016": "Marital Status",
  "DE04_017": "Housing Status",
  "DE04_018": "Total Household Income",
  "DE04_019": "Number of People Income Supports",
  "DE04_020": "Legal Status",
  "DE04_021": "Pre-existing Conditions",
  "DE05_001": "Referral ID",
  "DE05_002": "Referral Received Date",
  "DE05_003": "Referral Source",
  "DE05_004": "Referral Type",
  "DE05_005": "Referral Source Type",
  "DE06_001": "Episode of Care ID",
  "DE06_002": "Episode of Care Status",
  "DE06_003": "First Contact Date",
  "DE06_004": "Eligibility Screening Date",
  "DE06_005": "Initial Assessment Date",
  "DE06_006": "Scheduled Appointment Date",
  "DE06_007": "Appointment Cancellation Reason",
  "DE06_008": "Service Initiation Date",
  "DE06_009": "Service Enrollment Date",
  "DE06_010": "Service Termination Date",
  "DE06_011": "Service Termination Reason",
  "DE07_001": "HSP Organization Number",
  "DE07_002": "MOH Organization ID",
  "DE07_003": "HSP Organization Name",
  "DE07_004": "Organization Active Flag",
  "DE08_001": "HSP Site Number",
  "DE08_002": "HSP Site Name",
  "DE09_001": "Health Program Number",
  "DE09_002": "Health Program Name",
  "DE09_003": "Functional Centre Code",
  "DE10_001": "Health Service Event ID",
  "DE10_002": "Service Modality",
  "DE10_003": "Service Modality Type",
  "DE10_004": "Encounter Date",
  "DE10_005": "Health Service Group ID",
  "DE10_006": "Direct Service Minutes",
  "DE10_007": "Indirect Service Minutes",
  "DE10_008": "Encounter Status"
};
function buildMHAPDSDataElements(episode) {
  const summaries = [];
  const fieldsList = episode.FIELDS_LIST || [];
  const deGroups = /* @__PURE__ */ new Map();
  for (const field of fieldsList) {
    const match = field.match(/^(DE\d+)/);
    if (match) {
      const deCode = match[1];
      if (!deGroups.has(deCode)) {
        deGroups.set(deCode, []);
      }
      deGroups.get(deCode).push(field);
    }
  }
  for (const [code, fields] of deGroups) {
    const def = MHA_PDS_DATA_ELEMENTS[code];
    summaries.push({
      code,
      name: def?.name || code,
      resourceType: def?.resourceType || "Unknown",
      count: fields.length,
      description: def?.description || "",
      items: fields.map((f) => {
        const name = MHA_PDS_FIELD_NAMES[f];
        return name ? `${name} (${f})` : f;
      })
    });
  }
  return summaries;
}
function parseFHIRBundle(raw) {
  const parseErrors = [];
  const status = determineFHIRPayloadStatus(raw);
  const statusConfig = EXTRACTION_STATUS_CONFIG[status];
  const summary = buildFHIRBundleSummary(raw, parseErrors);
  return {
    format: "fhir-bundle",
    raw,
    rawSubmission: null,
    status,
    statusLabel: statusConfig.label,
    statusClass: statusConfig.class,
    bundleId: raw.id || "",
    bundleType: raw.type || "collection",
    summary,
    parseErrors,
    episodes: [],
    submissionInfo: null
  };
}
function determineFHIRPayloadStatus(bundle) {
  if (!bundle.entry || bundle.entry.length === 0) {
    return "EMPTY";
  }
  const hasPatient = bundle.entry.some((e) => e.resource?.resourceType === "Patient");
  const hasEpisode = bundle.entry.some((e) => e.resource?.resourceType === "EpisodeOfCare");
  if (hasPatient && hasEpisode) return "COMPLETE";
  if (hasPatient || hasEpisode) return "PARTIAL";
  return "PARTIAL";
}
function buildFHIRBundleSummary(bundle, parseErrors) {
  const patientInfo = extractFHIRPatientInfo(bundle);
  const episodeInfo = extractFHIREpisodeInfo(bundle);
  const referralInfo = extractFHIRReferralInfo(bundle);
  const providerInfo = extractFHIRProviderInfo(bundle);
  const programInfo = extractFHIRProgramInfo(bundle);
  const serviceEvents = extractFHIRServiceEvents(bundle);
  const observations = extractFHIRObservations(bundle);
  const dataElements = buildFHIRDataElementSummary(bundle);
  return {
    patientInfo,
    episodeInfo,
    referralInfo,
    providerInfo,
    programInfo,
    serviceEvents,
    observations,
    totalResources: bundle.entry?.length || 0,
    dataElements
  };
}
function extractFHIRPatientInfo(bundle) {
  const result = {
    name: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mrn: "",
    ohip: "",
    birthDate: "",
    estimatedDobFlag: "",
    activeStatus: "",
    vendorIssuingId: "",
    hcnIssuingAuthority: "",
    identifierType: "",
    addressUse: "",
    address: "",
    city: "",
    province: "",
    postalCode: ""
  };
  if (!bundle?.entry) return result;
  const patientEntry = bundle.entry.find((e) => e.resource?.resourceType === "Patient");
  if (!patientEntry?.resource) return result;
  const patient = patientEntry.resource;
  if (Array.isArray(patient.name) && patient.name.length > 0) {
    const name = patient.name[0];
    const given = name.given?.join(" ") || "";
    const family = name.family || "";
    result.name = `${family}, ${given}`.trim().replace(/^,\s*|,\s*$/g, "");
  }
  const mrnIdentifier = patient.identifier?.find(
    (id) => id.type?.coding?.some((c) => c.code === "MR")
  );
  if (mrnIdentifier?.value) result.mrn = mrnIdentifier.value;
  const ohipIdentifier = patient.identifier?.find(
    (id) => id.type?.coding?.some((c) => c.code === "JHN") || id.system?.includes("healthcard")
  );
  if (ohipIdentifier?.value) result.ohip = ohipIdentifier.value;
  if (patient["birthDate"]) result.birthDate = patient["birthDate"];
  const address = patient["address"]?.[0];
  if (address) {
    const parts = [address.line?.join(", "), address.city, address.state].filter(Boolean);
    result.address = parts.join(", ");
    result.postalCode = address.postalCode || "";
  }
  return result;
}
function extractFHIREpisodeInfo(bundle) {
  const result = {
    episodeId: "",
    status: "",
    firstContactDate: "",
    eligibilityScreeningDate: "",
    initialAssessmentDate: "",
    scheduledAppointmentDate: "",
    scheduledAppointmentEnd: "",
    appointmentStatus: "",
    cancellationReason: "",
    serviceInitiationDate: "",
    serviceEnrollmentDate: "",
    serviceTerminationDate: "",
    serviceTerminationReason: ""
  };
  if (!bundle?.entry) return result;
  const episodeEntry = bundle.entry.find((e) => e.resource?.resourceType === "EpisodeOfCare");
  if (!episodeEntry?.resource) return result;
  const episode = episodeEntry.resource;
  const episodeIdentifier = episode.identifier?.find(
    (id) => id.system?.includes("episode-of-care") || id.system?.includes("EpisodeOfCare")
  );
  result.episodeId = episodeIdentifier?.value || episode.identifier?.[0]?.value || "";
  result.status = episode.status || "";
  if (episode.period) {
    result.firstContactDate = formatDate(episode.period.start);
    result.serviceTerminationDate = formatDate(episode.period.end);
  }
  return result;
}
function extractFHIRReferralInfo(bundle) {
  const result = {
    referralId: "",
    referralDate: "",
    referralSource: "",
    referralSourceType: "",
    referralType: "",
    status: "",
    intent: ""
  };
  if (!bundle?.entry) return result;
  const serviceRequestEntry = bundle.entry.find((e) => e.resource?.resourceType === "ServiceRequest");
  if (!serviceRequestEntry?.resource) return result;
  const sr = serviceRequestEntry.resource;
  result.referralId = sr.identifier?.[0]?.value || "";
  result.status = sr.status || "";
  result.intent = sr.intent || "";
  result.referralDate = formatDate(sr.authoredOn);
  result.referralSource = sr.requester?.display || "";
  return result;
}
function extractFHIRProviderInfo(bundle) {
  const result = {
    organizationName: "",
    organizationId: "",
    mohOrganizationId: "",
    organizationActiveFlag: "",
    locationName: "",
    locationId: "",
    siteCode: ""
  };
  if (!bundle?.entry) return result;
  const orgEntry = bundle.entry.find((e) => e.resource?.resourceType === "Organization");
  if (orgEntry?.resource) {
    const org = orgEntry.resource;
    result.organizationName = (typeof org.name === "string" ? org.name : "") || "";
    result.organizationId = org.identifier?.[0]?.value || "";
  }
  const locEntry = bundle.entry.find((e) => e.resource?.resourceType === "Location");
  if (locEntry?.resource) {
    const loc = locEntry.resource;
    result.locationName = (typeof loc.name === "string" ? loc.name : "") || "";
    const siteId = loc.identifier?.find((id) => id.system?.includes("ConnexSite"));
    result.siteCode = siteId?.value || "";
    result.locationId = loc.identifier?.[0]?.value || "";
  }
  return result;
}
function extractFHIRProgramInfo(bundle) {
  const result = { programId: "", programName: "", programCode: "" };
  if (!bundle?.entry) return result;
  const hsEntry = bundle.entry.find((e) => e.resource?.resourceType === "HealthcareService");
  if (!hsEntry?.resource) return result;
  const hs = hsEntry.resource;
  result.programName = (typeof hs.name === "string" ? hs.name : "") || "";
  result.programId = hs.identifier?.[0]?.value || "";
  result.programCode = hs.type?.[0]?.coding?.[0]?.code || "";
  return result;
}
function extractFHIRServiceEvents(bundle) {
  const events = [];
  if (!bundle?.entry) return events;
  const encounterEntries = bundle.entry.filter((e) => e.resource?.resourceType === "Encounter");
  for (const entry of encounterEntries) {
    const enc = entry.resource;
    events.push({
      encounterId: enc.identifier?.[0]?.value || entry.resource?.id || "",
      encounterClass: "",
      status: enc.status || "",
      startDate: formatDate(enc.period?.start),
      endDate: formatDate(enc.period?.end),
      serviceType: enc.type?.[0]?.coding?.[0]?.display || "",
      serviceModalityType: enc.serviceType?.coding?.[0]?.code || "",
      groupServiceId: "",
      directMinutes: 0,
      indirectMinutes: 0
    });
  }
  return events;
}
function extractFHIRObservations(bundle) {
  const observations = [];
  if (!bundle?.entry) return observations;
  const obsEntries = bundle.entry.filter((e) => e.resource?.resourceType === "Observation");
  for (const entry of obsEntries) {
    const obs = entry.resource;
    const code = obs.code?.coding?.[0];
    let value = "";
    let valueCode = "";
    let system = "";
    if (obs.valueCodeableConcept?.coding?.[0]) {
      value = obs.valueCodeableConcept.coding[0].display || obs.valueCodeableConcept.coding[0].code || "";
      valueCode = obs.valueCodeableConcept.coding[0].code || "";
      system = obs.valueCodeableConcept.coding[0].system || "";
    } else if (obs.valueQuantity) {
      value = `${obs.valueQuantity.value} ${obs.valueQuantity.unit || ""}`.trim();
    } else if (obs.valueString) {
      value = obs.valueString;
    }
    if (code) {
      observations.push({
        code: code.code || "",
        display: code.display || "",
        value,
        valueCode,
        system
      });
    }
  }
  return observations;
}
function buildFHIRDataElementSummary(bundle) {
  const summaries = [];
  if (!bundle?.entry) return summaries;
  const resourceCounts = /* @__PURE__ */ new Map();
  for (const entry of bundle.entry) {
    const type = entry.resource?.resourceType || "Unknown";
    if (!resourceCounts.has(type)) resourceCounts.set(type, { count: 0, items: [] });
    const data = resourceCounts.get(type);
    data.count++;
    const desc = extractFHIRResourceDescription(entry);
    if (desc) data.items.push(desc);
  }
  for (const [code, def] of Object.entries(MHA_PDS_DATA_ELEMENTS)) {
    const resourceData = resourceCounts.get(def.resourceType);
    if (resourceData && resourceData.count > 0) {
      summaries.push({
        code,
        name: def.name,
        resourceType: def.resourceType,
        count: resourceData.count,
        description: def.description,
        items: resourceData.items
      });
    }
  }
  return summaries;
}
function extractFHIRResourceDescription(entry) {
  const resource = entry.resource;
  if (!resource) return "";
  switch (resource.resourceType) {
    case "Patient": {
      const name = resource.name?.[0];
      const nameStr = name ? `${name.family || ""}, ${name.given?.join(" ") || ""}`.trim().replace(/^,\s*/, "") : "";
      const mrn = resource.identifier?.find(
        (id) => id.type?.coding?.some((c) => c.code === "MR")
      )?.value || "";
      return nameStr && mrn ? `${nameStr} (MRN: ${mrn})` : nameStr || mrn || "";
    }
    case "Organization":
      return resource.name || "";
    case "Location": {
      const locName = resource.name || "";
      const siteId = resource.identifier?.find((id) => id.system?.includes("ConnexSite"))?.value;
      return siteId ? `${locName} (Site: ${siteId})` : locName;
    }
    case "ServiceRequest":
      return resource.identifier?.[0]?.value ? `Referral: ${resource.identifier[0].value}` : "";
    case "EpisodeOfCare": {
      const epId = resource.identifier?.find(
        (id) => id.system?.includes("episode-of-care") || id.system?.includes("EpisodeOfCare")
      )?.value;
      const status = resource.status;
      return epId ? `Episode: ${epId} (${status})` : status || "";
    }
    case "HealthcareService": {
      const svcName = resource.name || "";
      const progId = resource.identifier?.[0]?.value;
      return progId ? `${svcName} (${progId})` : svcName;
    }
    case "Observation": {
      const codeDisplay = resource.code?.coding?.[0]?.display || "";
      const valueDisplay = resource.valueCodeableConcept?.coding?.[0]?.display || "";
      return valueDisplay ? `${codeDisplay}: ${valueDisplay}` : codeDisplay;
    }
    case "Encounter": {
      const encStatus = resource.status || "";
      const period = resource.period;
      const startDate = formatDate(period?.start);
      return startDate ? `${startDate} (${encStatus})` : encStatus;
    }
    default:
      return resource.identifier?.[0]?.value || resource.name || "";
  }
}
function getResourceTypeSummary2(bundle) {
  if (!bundle?.entry) return [];
  const typeMap = /* @__PURE__ */ new Map();
  for (const entry of bundle.entry) {
    const type = entry.resource?.resourceType || "Unknown";
    const description = extractFHIRResourceDescription(entry);
    if (!typeMap.has(type)) typeMap.set(type, { count: 0, ids: [] });
    const data = typeMap.get(type);
    data.count++;
    if (description) data.ids.push(description);
  }
  return Array.from(typeMap.entries()).map(([type, data]) => ({
    type,
    count: data.count,
    ids: data.ids
  }));
}
function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  } catch {
    return dateStr;
  }
}
function formatExtractionTimestamp(date) {
  return date.toLocaleString("en-CA", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}
function getObservationDisplayName(loincCode) {
  const loincMap = {
    "76691-5": "Gender Identity",
    "76690-7": "Sexual Orientation",
    "92246-6": "Citizenship Status",
    "82589-3": "Highest Education",
    "74165-2": "Employment Status",
    "63513-6": "Personal Income Source",
    "71802-3": "Housing Status",
    "98744-4": "Total Household Income",
    "63512-8": "People Income Supports",
    "88696-0": "Legal Status"
  };
  return loincMap[loincCode] || loincCode;
}

// src/app/logs/components/extraction-payload-viewer.ts
var _forTrack03 = ($index, $item) => $item.code;
var _forTrack1 = ($index, $item) => $item.type;
function ExtractionPayloadViewerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading extraction data...");
    \u0275\u0275elementEnd()();
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.totalResources, " fields");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.totalResources, " resources");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "Domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span", 24);
    \u0275\u0275text(8, "Episodes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "span", 24);
    \u0275\u0275text(13, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 23)(17, "span", 24);
    \u0275\u0275text(18, "MRN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    const info_r3 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r3.domain);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r3.episodeCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.name) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.mrn) || "N/A");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "Bundle ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span", 24);
    \u0275\u0275text(8, "Bundle Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "span", 24);
    \u0275\u0275text(13, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 23)(17, "span", 24);
    \u0275\u0275text(18, "MRN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.bundleId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.bundleType) || "collection");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.name) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.mrn) || "N/A");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_For_5_Template_button_click_0_listener() {
      const ep_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.selectEpisode(ep_r5.index));
    });
    \u0275\u0275elementStart(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r5.selectedEpisodeIndex() === ep_r5.index);
    \u0275\u0275property("title", ep_r5.episodeIdentifier + " - " + ep_r5.programName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r5.patientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r5.programName);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 27);
    \u0275\u0275text(2, "Episode:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275repeaterCreate(4, ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_For_5_Template, 5, 5, "button", 29, \u0275\u0275componentInstance().trackByEpisode, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r5.episodes());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const de_r7 = ctx.$implicit;
    \u0275\u0275property("title", de_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r7.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r7.count);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r5.patientErrorCount() + " unmapped field(s)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.patientErrorCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r5.episodeErrorCount() + " unmapped field(s)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.episodeErrorCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.serviceEventCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r5.servicesErrorCount() + " unmapped field(s)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.servicesErrorCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.observationCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r5.demographicsErrorCount() + " unmapped field(s)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.demographicsErrorCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_For_13_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(profile_r12);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 55);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_For_13_Conditional_8_For_2_Template, 2, 1, "li", 56, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bundle_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(bundle_r11.profiles);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "button", 51);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_For_13_Template_button_click_1_listener($event) {
      const bundle_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ep_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(4);
      ctx_r5.toggleBundleExpand(ctx_r5.getBundleKey(ep_r9.index, bundle_r11.type));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_For_13_Conditional_8_Template, 3, 0, "ul", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bundle_r11 = ctx.$implicit;
    const ep_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap("bundle-" + bundle_r11.status);
    \u0275\u0275classProp("expanded", ctx_r5.isBundleExpanded(ctx_r5.getBundleKey(ep_r9.index, bundle_r11.type)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bundle_r11.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bundle_r11.profileCount, " profiles");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.isBundleExpanded(ctx_r5.getBundleKey(ep_r9.index, bundle_r11.type)) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isBundleExpanded(ctx_r5.getBundleKey(ep_r9.index, bundle_r11.type)) ? 8 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_Template_div_click_0_listener() {
      const ep_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r5.selectEpisode(ep_r9.index));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45)(7, "span", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 48);
    \u0275\u0275repeaterCreate(12, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_For_13_Template, 9, 8, "div", 49, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 50)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ep_r9 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const info_r3 = \u0275\u0275readContextLet(1);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r5.selectedEpisodeIndex() === ep_r9.index);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ep_r9.episodeIdentifier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ep_r9.fieldsCount, " / ", info_r3.submitFieldsCount, " fields");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ep_r9.patientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r9.programName);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ep_r9.bundles);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ep_r9.servicesCount, " service", ep_r9.servicesCount !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ep_r9.bundleCount, " bundle", ep_r9.bundleCount !== 1 ? "s" : "");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Submission Metadata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 37)(3, "div", 38)(4, "span", 24);
    \u0275\u0275text(5, "Execution Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38)(9, "span", 24);
    \u0275\u0275text(10, "Execution End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38)(14, "span", 24);
    \u0275\u0275text(15, "Domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 25);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 38)(19, "span", 24);
    \u0275\u0275text(20, "Node");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 25);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 38)(24, "span", 24);
    \u0275\u0275text(25, "Submit Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 25);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 38)(29, "span", 24);
    \u0275\u0275text(30, "Total Episodes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 25);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "h4");
    \u0275\u0275text(34, "Episodes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 39);
    \u0275\u0275repeaterCreate(36, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_37_Template, 19, 11, "div", 40, \u0275\u0275componentInstance().trackByEpisode, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const info_r3 = \u0275\u0275readContextLet(1);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(info_r3.executionStart);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r3.executionEnd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r3.domain);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r3.node);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r3.submitFieldsCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(info_r3.episodeCount);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r5.episodes());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_For_6_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r15);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 60);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_For_6_Conditional_10_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const de_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(de_r14.items);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 57);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_For_6_Template_button_click_1_listener() {
      const de_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.toggleDataElementExpand(de_r14.code));
    });
    \u0275\u0275elementStart(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_For_6_Conditional_10_Template, 3, 0, "ul", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const de_r14 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.isDataElementExpanded(de_r14.code) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r14.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", de_r14.count, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isDataElementExpanded(de_r14.code) ? 10 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_For_4_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(id_r18);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 65);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_For_4_Conditional_8_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(resource_r17.ids);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "button", 63);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_For_4_Template_button_click_1_listener() {
      const resource_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r5.toggleResourceExpand(resource_r17.type));
    });
    \u0275\u0275elementStart(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_For_4_Conditional_8_Template, 3, 0, "ul", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r17 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.isResourceExpanded(resource_r17.type) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r17.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", resource_r17.count, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isResourceExpanded(resource_r17.type) ? 8 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Resources by Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275repeaterCreate(3, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_For_4_Template, 9, 4, "div", 62, \u0275\u0275componentInstance().trackByResourceType, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.resourceSummary());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r19);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Parse Warnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 66);
    \u0275\u0275repeaterCreate(3, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_8_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(parsed_r2.parseErrors);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_Template, 38, 6);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "Data Elements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275repeaterCreate(5, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_For_6_Template, 11, 5, "div", 36, \u0275\u0275componentInstance().trackByDataElement, true);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_7_Template, 5, 0);
    \u0275\u0275conditionalCreate(8, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_8_Template, 5, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    const info_r3 = \u0275\u0275readContextLet(1);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isMHAPDS() && info_r3 ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r5.dataElements());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r5.isMHAPDS() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.parseErrors) && parsed_r2.parseErrors.length > 0 ? 8 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 67)(2, "h4");
    \u0275\u0275text(3, "DE01 - Client Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 68);
    \u0275\u0275element(5, "app-coded-field-card", 69)(6, "app-coded-field-card", 70)(7, "app-coded-field-card", 71)(8, "app-coded-field-card", 72)(9, "app-coded-field-card", 73)(10, "app-coded-field-card", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 67)(12, "h4");
    \u0275\u0275text(13, "DE02 - Client Identifiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 68);
    \u0275\u0275element(15, "app-coded-field-card", 75)(16, "app-coded-field-card", 76)(17, "app-coded-field-card", 77)(18, "app-coded-field-card", 78)(19, "app-coded-field-card", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 67)(21, "h4");
    \u0275\u0275text(22, "DE03 - Client Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 68);
    \u0275\u0275element(24, "app-coded-field-card", 80)(25, "app-coded-field-card", 81)(26, "app-coded-field-card", 82)(27, "app-coded-field-card", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.firstName) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.middleName) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.lastName) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.birthDate) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.estimatedDobFlag) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.estimatedDobFlagCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.activeStatus) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.activeStatusCoded);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.mrn) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.vendorIssuingId) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.ohip) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.hcnIssuingAuthority) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.hcnIssuingAuthorityCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.identifierType) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.identifierTypeCoded);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.addressUse) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.addressUseCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.city) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.province) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.provinceCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.postalCode) || "");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-coded-field-card", 97);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.scheduledAppointmentEnd) || "");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-coded-field-card", 99);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.cancellationReason) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.cancellationReasonCoded);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-coded-field-card", 103);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceTerminationReason) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceTerminationReasonCoded);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 67)(2, "h4");
    \u0275\u0275text(3, "DE05 - Referral Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 68);
    \u0275\u0275element(5, "app-coded-field-card", 84)(6, "app-coded-field-card", 85)(7, "app-coded-field-card", 86)(8, "app-coded-field-card", 87)(9, "app-coded-field-card", 88)(10, "app-coded-field-card", 89)(11, "app-coded-field-card", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 67)(13, "h4");
    \u0275\u0275text(14, "DE06 - Episode of Care");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 68);
    \u0275\u0275element(16, "app-coded-field-card", 91)(17, "app-coded-field-card", 92)(18, "app-coded-field-card", 93)(19, "app-coded-field-card", 94)(20, "app-coded-field-card", 95)(21, "app-coded-field-card", 96);
    \u0275\u0275conditionalCreate(22, ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Conditional_22_Template, 1, 1, "app-coded-field-card", 97);
    \u0275\u0275element(23, "app-coded-field-card", 98);
    \u0275\u0275conditionalCreate(24, ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Conditional_24_Template, 1, 2, "app-coded-field-card", 99);
    \u0275\u0275element(25, "app-coded-field-card", 100)(26, "app-coded-field-card", 101)(27, "app-coded-field-card", 102);
    \u0275\u0275conditionalCreate(28, ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Conditional_28_Template, 1, 2, "app-coded-field-card", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 67)(30, "h4");
    \u0275\u0275text(31, "DE07 - Provider Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 68);
    \u0275\u0275element(33, "app-coded-field-card", 104)(34, "app-coded-field-card", 105)(35, "app-coded-field-card", 106)(36, "app-coded-field-card", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 67)(38, "h4");
    \u0275\u0275text(39, "DE08 - Provider Site");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 68);
    \u0275\u0275element(41, "app-coded-field-card", 108)(42, "app-coded-field-card", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 67)(44, "h4");
    \u0275\u0275text(45, "DE09 - Health Program");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 68);
    \u0275\u0275element(47, "app-coded-field-card", 110)(48, "app-coded-field-card", 111)(49, "app-coded-field-card", 112);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralId) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralIdCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralDate) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralSource) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralSourceType) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralSourceTypeCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralType) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralTypeCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.status) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.statusCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.intent) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.intentCoded);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.episodeId) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.episodeIdCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.status) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.statusCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.firstContactDate) || "")("extensionUrl", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.firstContactDateExtensionUrl) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.eligibilityScreeningDate) || "")("extensionUrl", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.eligibilityScreeningDateExtensionUrl) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.initialAssessmentDate) || "")("extensionUrl", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.initialAssessmentDateExtensionUrl) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.scheduledAppointmentDate) || "");
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.scheduledAppointmentEnd) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.appointmentStatus) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.appointmentStatusCoded);
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.cancellationReason) ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceInitiationDate) || "")("extensionUrl", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceInitiationDateExtensionUrl) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceEnrollmentDate) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceTerminationDate) || "");
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceTerminationReason) ? 28 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationId) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationIdCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.mohOrganizationId) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.mohOrganizationIdCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationName) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationActiveFlag) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationActiveFlagCoded);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.siteCode) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.siteCodeCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.locationName) || "");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programId) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programIdCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programName) || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programCode) || "")("codedField", parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programCodeCoded);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_1_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-coded-field-card", 124);
  }
  if (rf & 2) {
    const event_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", event_r20.groupServiceId);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "span", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 118);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 119);
    \u0275\u0275element(7, "app-coded-field-card", 120)(8, "app-coded-field-card", 121)(9, "app-coded-field-card", 122)(10, "app-coded-field-card", 123);
    \u0275\u0275conditionalCreate(11, ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_1_For_2_Conditional_11_Template, 1, 1, "app-coded-field-card", 124);
    \u0275\u0275element(12, "app-coded-field-card", 125)(13, "app-coded-field-card", 126)(14, "app-coded-field-card", 127);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r20 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r20.encounterId || "Unknown");
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + event_r20.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r20.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", event_r20.encounterId || "")("codedField", event_r20.encounterIdCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", event_r20.serviceType || "")("codedField", event_r20.serviceTypeCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", event_r20.serviceModalityType || "")("codedField", event_r20.serviceModalityTypeCoded);
    \u0275\u0275advance();
    \u0275\u0275property("value", event_r20.startDate || "");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r20.groupServiceId ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", event_r20.directMinutes.toString())("extensionUrl", event_r20.directMinutesExtensionUrl || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", event_r20.indirectMinutes.toString())("extensionUrl", event_r20.indirectMinutesExtensionUrl || "");
    \u0275\u0275advance();
    \u0275\u0275property("value", event_r20.status || "")("codedField", event_r20.statusCoded);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_1_For_2_Template, 15, 18, "div", 115, \u0275\u0275componentInstance().trackByServiceEvent, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.serviceEvents());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "span", 128);
    \u0275\u0275text(2, "\u25CB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No service events found in this payload.");
    \u0275\u0275elementEnd()();
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_1_Template, 3, 0, "div", 113)(2, ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Conditional_2_Template, 5, 0, "div", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.hasServiceEvents() ? 1 : 2);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-coded-field-card", 129);
  }
  if (rf & 2) {
    const obs_r21 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", obs_r21.display || ctx_r5.getObservationName(obs_r21.code))("value", obs_r21.value)("deCode", obs_r21.code)("codedField", obs_r21.codedField)("observationCode", obs_r21.observationCode);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Conditional_1_For_2_Template, 1, 5, "app-coded-field-card", 129, \u0275\u0275componentInstance().trackByObservation, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.observations());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "span", 128);
    \u0275\u0275text(2, "\u25CB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No demographic observations found in this payload.");
    \u0275\u0275elementEnd()();
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Conditional_1_Template, 3, 0, "div", 68)(2, ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Conditional_2_Template, 5, 0, "div", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.hasObservations() ? 1 : 2);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 130)(2, "button", 131);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_42_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.copyToClipboard(ctx_r5.formattedRawData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "pre", 132)(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", ctx_r5.copySuccess());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.copySuccess() ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.formattedRawData());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExtractionPayloadViewerComponent_Conditional_1_Conditional_9_Template, 2, 1, "span", 8)(10, ExtractionPayloadViewerComponent_Conditional_1_Conditional_10_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ExtractionPayloadViewerComponent_Conditional_1_Conditional_11_Template, 21, 4, "div", 9)(12, ExtractionPayloadViewerComponent_Conditional_1_Conditional_12_Template, 21, 4, "div", 9);
    \u0275\u0275conditionalCreate(13, ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_Template, 6, 0, "div", 10);
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275repeaterCreate(15, ExtractionPayloadViewerComponent_Conditional_1_For_16_Template, 5, 3, "span", 12, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13)(18, "button", 14);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("summary"));
    });
    \u0275\u0275text(19, " Summary ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("patient"));
    });
    \u0275\u0275text(21, " Patient (DE01-03) ");
    \u0275\u0275conditionalCreate(22, ExtractionPayloadViewerComponent_Conditional_1_Conditional_22_Template, 2, 2, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 14);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("episode"));
    });
    \u0275\u0275text(24, " Episode (DE05-09) ");
    \u0275\u0275conditionalCreate(25, ExtractionPayloadViewerComponent_Conditional_1_Conditional_25_Template, 2, 2, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 14);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("services"));
    });
    \u0275\u0275text(27, " Services (DE10) ");
    \u0275\u0275conditionalCreate(28, ExtractionPayloadViewerComponent_Conditional_1_Conditional_28_Template, 2, 1, "span", 16);
    \u0275\u0275conditionalCreate(29, ExtractionPayloadViewerComponent_Conditional_1_Conditional_29_Template, 2, 2, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 14);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("demographics"));
    });
    \u0275\u0275text(31, " Demographics (DE04) ");
    \u0275\u0275conditionalCreate(32, ExtractionPayloadViewerComponent_Conditional_1_Conditional_32_Template, 2, 1, "span", 16);
    \u0275\u0275conditionalCreate(33, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Template, 2, 2, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 14);
    \u0275\u0275listener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("raw"));
    });
    \u0275\u0275text(35, " Raw JSON ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 17);
    \u0275\u0275conditionalCreate(37, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Template, 9, 3, "div", 18);
    \u0275\u0275conditionalCreate(38, ExtractionPayloadViewerComponent_Conditional_1_Conditional_38_Template, 28, 21, "div", 19);
    \u0275\u0275conditionalCreate(39, ExtractionPayloadViewerComponent_Conditional_1_Conditional_39_Template, 50, 47, "div", 19);
    \u0275\u0275conditionalCreate(40, ExtractionPayloadViewerComponent_Conditional_1_Conditional_40_Template, 3, 1, "div", 20);
    \u0275\u0275conditionalCreate(41, ExtractionPayloadViewerComponent_Conditional_1_Conditional_41_Template, 3, 1, "div", 21);
    \u0275\u0275conditionalCreate(42, ExtractionPayloadViewerComponent_Conditional_1_Conditional_42_Template, 7, 4, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275storeLet(ctx_r5.parsedPayload());
    const config_r23 = ctx_r5.statusConfig();
    \u0275\u0275advance();
    const info_r24 = \u0275\u0275storeLet(ctx_r5.submissionInfo());
    \u0275\u0275advance(3);
    \u0275\u0275classMap(config_r23.class);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r23.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r23.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isMHAPDS() ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.isMHAPDS() && info_r24 ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.hasMultipleEpisodes() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r5.dataElements());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "summary");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "patient");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.patientErrorCount() > 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "episode");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.episodeErrorCount() > 0 ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "services");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.hasServiceEvents() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.servicesErrorCount() > 0 ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "demographics");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.hasObservations() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.demographicsErrorCount() > 0 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "raw");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r5.activeTab() === "summary" ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "patient" ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "episode" ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "services" ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "demographics" ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "raw" ? 42 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "No extraction data available or content could not be parsed.");
    \u0275\u0275elementEnd()();
  }
}
var ExtractionPayloadViewerComponent = class _ExtractionPayloadViewerComponent {
  logsService = inject(LogsService);
  // Signals from service
  logText = this.logsService.selectedLogText;
  loading = this.logsService.loadingText;
  // Local state
  activeTab = signal("summary", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  copySuccess = signal(false, ...ngDevMode ? [{ debugName: "copySuccess" }] : []);
  expandedResources = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedResources" }] : []);
  expandedDataElements = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedDataElements" }] : []);
  expandedBundles = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedBundles" }] : []);
  selectedEpisodeIndex = signal(0, ...ngDevMode ? [{ debugName: "selectedEpisodeIndex" }] : []);
  // Outputs
  closed = output();
  // Parsed payload data — re-parses when episode selection changes
  parsedPayload = computed(() => {
    const text = this.logText();
    if (!text?.text_content)
      return null;
    return parseExtractionPayload(text.text_content, this.selectedEpisodeIndex());
  }, ...ngDevMode ? [{ debugName: "parsedPayload" }] : []);
  hasContent = computed(() => {
    return this.parsedPayload() !== null;
  }, ...ngDevMode ? [{ debugName: "hasContent" }] : []);
  isMHAPDS = computed(() => {
    return this.parsedPayload()?.format === "mha-pds-submission";
  }, ...ngDevMode ? [{ debugName: "isMHAPDS" }] : []);
  statusConfig = computed(() => {
    const parsed = this.parsedPayload();
    if (!parsed)
      return EXTRACTION_STATUS_CONFIG["INVALID"];
    return EXTRACTION_STATUS_CONFIG[parsed.status];
  }, ...ngDevMode ? [{ debugName: "statusConfig" }] : []);
  episodes = computed(() => {
    return this.parsedPayload()?.episodes ?? [];
  }, ...ngDevMode ? [{ debugName: "episodes" }] : []);
  hasMultipleEpisodes = computed(() => {
    return this.episodes().length > 1;
  }, ...ngDevMode ? [{ debugName: "hasMultipleEpisodes" }] : []);
  submissionInfo = computed(() => {
    return this.parsedPayload()?.submissionInfo ?? null;
  }, ...ngDevMode ? [{ debugName: "submissionInfo" }] : []);
  resourceSummary = computed(() => {
    const parsed = this.parsedPayload();
    return getResourceTypeSummary2(parsed?.raw ?? null);
  }, ...ngDevMode ? [{ debugName: "resourceSummary" }] : []);
  dataElements = computed(() => {
    const parsed = this.parsedPayload();
    return parsed?.summary?.dataElements ?? [];
  }, ...ngDevMode ? [{ debugName: "dataElements" }] : []);
  observations = computed(() => {
    const parsed = this.parsedPayload();
    return parsed?.summary?.observations ?? [];
  }, ...ngDevMode ? [{ debugName: "observations" }] : []);
  serviceEvents = computed(() => {
    const parsed = this.parsedPayload();
    return parsed?.summary?.serviceEvents ?? [];
  }, ...ngDevMode ? [{ debugName: "serviceEvents" }] : []);
  formattedRawData = computed(() => {
    const text = this.logText();
    if (!text?.text_content)
      return "";
    try {
      const parsed = JSON.parse(text.text_content);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return text.text_content;
    }
  }, ...ngDevMode ? [{ debugName: "formattedRawData" }] : []);
  hasObservations = computed(() => {
    return this.observations().length > 0;
  }, ...ngDevMode ? [{ debugName: "hasObservations" }] : []);
  hasServiceEvents = computed(() => {
    return this.serviceEvents().length > 0;
  }, ...ngDevMode ? [{ debugName: "hasServiceEvents" }] : []);
  observationCount = computed(() => {
    return this.observations().length;
  }, ...ngDevMode ? [{ debugName: "observationCount" }] : []);
  serviceEventCount = computed(() => {
    return this.serviceEvents().length;
  }, ...ngDevMode ? [{ debugName: "serviceEventCount" }] : []);
  /** Error codes from CCL lookup failures */
  static ERROR_CODES = [
    "NO_PAIR_MATCH",
    "NO_CT_VALUE",
    "NO_CT_TABLE",
    "NO_CT_CONFIGURED",
    "NO_MAPPING",
    "NO_OBS_CODE",
    "NO_VALUE_METADATA",
    "NO_CONSTANT_PAIR"
  ];
  hasFieldError(value, coded) {
    if (value?.includes("[unmapped]"))
      return true;
    const code = coded?.code || "";
    return _ExtractionPayloadViewerComponent.ERROR_CODES.some((ec) => value === ec || code === ec);
  }
  /** Count of unmapped/error fields on Patient tab (DE01-03) */
  patientErrorCount = computed(() => {
    const p = this.parsedPayload()?.summary?.patientInfo;
    if (!p)
      return 0;
    let count = 0;
    if (this.hasFieldError(p.estimatedDobFlag, p.estimatedDobFlagCoded))
      count++;
    if (this.hasFieldError(p.activeStatus, p.activeStatusCoded))
      count++;
    if (this.hasFieldError(p.hcnIssuingAuthority, p.hcnIssuingAuthorityCoded))
      count++;
    if (this.hasFieldError(p.identifierType, p.identifierTypeCoded))
      count++;
    if (this.hasFieldError(p.addressUse, p.addressUseCoded))
      count++;
    if (this.hasFieldError(p.province, p.provinceCoded))
      count++;
    return count;
  }, ...ngDevMode ? [{ debugName: "patientErrorCount" }] : []);
  /** Count of unmapped/error fields on Episode tab (DE05-09) */
  episodeErrorCount = computed(() => {
    const parsed = this.parsedPayload()?.summary;
    if (!parsed)
      return 0;
    let count = 0;
    const r = parsed.referralInfo;
    if (r) {
      if (this.hasFieldError(r.referralId, r.referralIdCoded))
        count++;
      if (this.hasFieldError(r.referralSourceType, r.referralSourceTypeCoded))
        count++;
      if (this.hasFieldError(r.referralType, r.referralTypeCoded))
        count++;
      if (this.hasFieldError(r.status, r.statusCoded))
        count++;
      if (this.hasFieldError(r.intent, r.intentCoded))
        count++;
    }
    const e = parsed.episodeInfo;
    if (e) {
      if (this.hasFieldError(e.episodeId, e.episodeIdCoded))
        count++;
      if (this.hasFieldError(e.status, e.statusCoded))
        count++;
      if (this.hasFieldError(e.appointmentStatus, e.appointmentStatusCoded))
        count++;
      if (this.hasFieldError(e.cancellationReason, e.cancellationReasonCoded))
        count++;
      if (this.hasFieldError(e.serviceTerminationReason, e.serviceTerminationReasonCoded))
        count++;
    }
    const prov = parsed.providerInfo;
    if (prov) {
      if (this.hasFieldError(prov.organizationId, prov.organizationIdCoded))
        count++;
      if (this.hasFieldError(prov.mohOrganizationId, prov.mohOrganizationIdCoded))
        count++;
      if (this.hasFieldError(prov.organizationActiveFlag, prov.organizationActiveFlagCoded))
        count++;
      if (this.hasFieldError(prov.siteCode, prov.siteCodeCoded))
        count++;
    }
    const prog = parsed.programInfo;
    if (prog) {
      if (this.hasFieldError(prog.programId, prog.programIdCoded))
        count++;
      if (this.hasFieldError(prog.programCode, prog.programCodeCoded))
        count++;
    }
    return count;
  }, ...ngDevMode ? [{ debugName: "episodeErrorCount" }] : []);
  /** Count of unmapped/error fields on Services tab (DE10) */
  servicesErrorCount = computed(() => {
    let count = 0;
    for (const svc of this.serviceEvents()) {
      if (this.hasFieldError(svc.encounterId, svc.encounterIdCoded))
        count++;
      if (this.hasFieldError(svc.encounterClass, svc.encounterClassCoded))
        count++;
      if (this.hasFieldError(svc.status, svc.statusCoded))
        count++;
      if (this.hasFieldError(svc.serviceType, svc.serviceTypeCoded))
        count++;
      if (this.hasFieldError(svc.serviceModalityType, svc.serviceModalityTypeCoded))
        count++;
    }
    return count;
  }, ...ngDevMode ? [{ debugName: "servicesErrorCount" }] : []);
  /** Count of unmapped/error fields on Demographics tab (DE04) */
  demographicsErrorCount = computed(() => {
    let count = 0;
    for (const obs of this.observations()) {
      if (this.hasFieldError(obs.value, obs.codedField))
        count++;
    }
    return count;
  }, ...ngDevMode ? [{ debugName: "demographicsErrorCount" }] : []);
  getObservationName(code) {
    return getObservationDisplayName(code);
  }
  formatTimestamp(date) {
    return formatExtractionTimestamp(date);
  }
  onClose() {
    this.closed.emit();
  }
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  selectEpisode(index) {
    this.selectedEpisodeIndex.set(index);
  }
  async copyToClipboard(content) {
    try {
      await navigator.clipboard.writeText(content);
      this.copySuccess.set(true);
      setTimeout(() => this.copySuccess.set(false), 2e3);
    } catch {
    }
  }
  toggleResourceExpand(resourceType) {
    const expanded = new Set(this.expandedResources());
    if (expanded.has(resourceType)) {
      expanded.delete(resourceType);
    } else {
      expanded.add(resourceType);
    }
    this.expandedResources.set(expanded);
  }
  isResourceExpanded(resourceType) {
    return this.expandedResources().has(resourceType);
  }
  toggleDataElementExpand(code) {
    const expanded = new Set(this.expandedDataElements());
    if (expanded.has(code)) {
      expanded.delete(code);
    } else {
      expanded.add(code);
    }
    this.expandedDataElements.set(expanded);
  }
  isDataElementExpanded(code) {
    return this.expandedDataElements().has(code);
  }
  toggleBundleExpand(bundleKey) {
    const expanded = new Set(this.expandedBundles());
    if (expanded.has(bundleKey)) {
      expanded.delete(bundleKey);
    } else {
      expanded.add(bundleKey);
    }
    this.expandedBundles.set(expanded);
  }
  isBundleExpanded(bundleKey) {
    return this.expandedBundles().has(bundleKey);
  }
  getBundleKey(episodeIndex, bundleType) {
    return `${episodeIndex}-${bundleType}`;
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
  trackByResourceType(_index, item) {
    return item.type;
  }
  trackByDataElement(_index, item) {
    return item.code;
  }
  trackByObservation(_index, item) {
    return item.code;
  }
  trackByServiceEvent(index, _item) {
    return index;
  }
  trackByEpisode(_index, item) {
    return item.index;
  }
  static \u0275fac = function ExtractionPayloadViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExtractionPayloadViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExtractionPayloadViewerComponent, selectors: [["app-extraction-payload-viewer"]], outputs: { closed: "closed" }, decls: 3, vars: 2, consts: [[1, "loading-overlay"], [1, "extraction-viewer"], [1, "no-content"], [1, "loading-spinner"], [1, "extraction-header"], [1, "status-banner"], [1, "status-icon"], [1, "status-label"], [1, "resource-count"], [1, "header-grid"], [1, "episode-selector"], [1, "data-element-pills"], [1, "de-pill", 3, "title"], [1, "tabs"], [1, "tab", 3, "click"], [1, "error-badge", 3, "title"], [1, "count-badge"], [1, "tab-content"], [1, "summary-content"], [1, "detail-content"], [1, "services-content"], [1, "demographics-content"], [1, "json-content"], [1, "header-item"], [1, "label"], [1, "value"], [1, "value", "bundle-id"], [1, "episode-selector-label"], [1, "episode-pills"], [1, "episode-pill", 3, "active", "title"], [1, "episode-pill", 3, "click", "title"], [1, "ep-name"], [1, "ep-program"], [1, "de-code"], [1, "de-count"], [1, "de-list"], [1, "de-item"], [1, "detail-grid"], [1, "detail-item"], [1, "episodes-overview"], [1, "episode-overview-card", 3, "active"], [1, "episode-overview-card", 3, "click"], [1, "ep-card-header"], [1, "ep-card-id"], [1, "ep-card-fields"], [1, "ep-card-details"], [1, "ep-card-patient"], [1, "ep-card-program"], [1, "ep-card-bundles"], [1, "bundle-item"], [1, "ep-card-meta"], [1, "bundle-tag", 3, "click"], [1, "bundle-type"], [1, "bundle-profiles"], [1, "bundle-expand-icon"], [1, "bundle-profile-list"], [1, "profile-item"], [1, "de-toggle", 3, "click"], [1, "toggle-icon"], [1, "de-name"], [1, "de-items"], [1, "resource-list"], [1, "resource-item"], [1, "resource-toggle", 3, "click"], [1, "resource-type"], [1, "resource-ids"], [1, "parse-errors"], [1, "detail-section"], [1, "coded-fields-grid"], ["label", "First Name", "deCode", "DE01.001", 3, "value"], ["label", "Middle Name", "deCode", "DE01.002", 3, "value"], ["label", "Last Name", "deCode", "DE01.003", 3, "value"], ["label", "Date of Birth", "deCode", "DE01.004", 3, "value"], ["label", "Estimated DOB Flag", "deCode", "DE01.005", 3, "value", "codedField"], ["label", "Active Status", "deCode", "DE01.006", 3, "value", "codedField"], ["label", "MRN", "deCode", "DE02.001", 3, "value"], ["label", "Vendor Issuing ID", "deCode", "DE02.002", 3, "value"], ["label", "Health Card Number", "deCode", "DE02.003", 3, "value"], ["label", "HCN Issuing Authority", "deCode", "DE02.004", 3, "value", "codedField"], ["label", "Identifier Type", "deCode", "DE02.005", 3, "value", "codedField"], ["label", "Address Use", "deCode", "DE03.001", 3, "value", "codedField"], ["label", "City", "deCode", "DE03.002", 3, "value"], ["label", "Province", "deCode", "DE03.003", 3, "value", "codedField"], ["label", "Postal Code", "deCode", "DE03.004", 3, "value"], ["label", "Referral ID", "deCode", "DE05.001", 3, "value", "codedField"], ["label", "Received Date", "deCode", "DE05.002", 3, "value"], ["label", "Referral Source", "deCode", "DE05.003", 3, "value"], ["label", "Referral Source Type", "deCode", "DE05.004", 3, "value", "codedField"], ["label", "Referral Type", "deCode", "DE05.005", 3, "value", "codedField"], ["label", "Status", "deCode", "DE05.STATUS", 3, "value", "codedField"], ["label", "Intent", "deCode", "DE05.INTENT", 3, "value", "codedField"], ["label", "Episode ID", "deCode", "DE06.001", 3, "value", "codedField"], ["label", "Status", "deCode", "DE06.002", 3, "value", "codedField"], ["label", "First Contact Date", "deCode", "DE06.003", 3, "value", "extensionUrl"], ["label", "Eligibility Screening Date", "deCode", "DE06.004", 3, "value", "extensionUrl"], ["label", "Initial Assessment Date", "deCode", "DE06.005", 3, "value", "extensionUrl"], ["label", "Scheduled Appointment", "deCode", "DE06.006", 3, "value"], ["label", "Appointment End", "deCode", "DE06.006.END", 3, "value"], ["label", "Appointment Status", "deCode", "DE06.APPT", 3, "value", "codedField"], ["label", "Cancellation Reason", "deCode", "DE06.007", 3, "value", "codedField"], ["label", "Service Initiation Date", "deCode", "DE06.008", 3, "value", "extensionUrl"], ["label", "Service Enrollment Date", "deCode", "DE06.009", 3, "value"], ["label", "Service Termination Date", "deCode", "DE06.010", 3, "value"], ["label", "Termination Reason", "deCode", "DE06.011", 3, "value", "codedField"], ["label", "Organization Number", "deCode", "DE07.001", 3, "value", "codedField"], ["label", "MOH Organization ID", "deCode", "DE07.002", 3, "value", "codedField"], ["label", "Organization Name", "deCode", "DE07.003", 3, "value"], ["label", "Organization Active", "deCode", "DE07.004", 3, "value", "codedField"], ["label", "Site Number", "deCode", "DE08.001", 3, "value", "codedField"], ["label", "Site Name", "deCode", "DE08.002", 3, "value"], ["label", "Program Number", "deCode", "DE09.001", 3, "value", "codedField"], ["label", "Program Name", "deCode", "DE09.002", 3, "value"], ["label", "Functional Centre", "deCode", "DE09.003", 3, "value", "codedField"], [1, "service-events-list"], [1, "no-data"], [1, "service-event-card"], [1, "event-header"], [1, "event-id"], [1, "event-status"], [1, "coded-fields-grid", "service-grid"], ["label", "Event ID", "deCode", "DE10.001", 3, "value", "codedField"], ["label", "Service Modality", "deCode", "DE10.002", 3, "value", "codedField"], ["label", "Modality Type", "deCode", "DE10.003", 3, "value", "codedField"], ["label", "Encounter Date", "deCode", "DE10.004", 3, "value"], ["label", "Group Service ID", "deCode", "DE10.005", 3, "value"], ["label", "Direct Minutes", "deCode", "DE10.006", 3, "value", "extensionUrl"], ["label", "Indirect Minutes", "deCode", "DE10.007", 3, "value", "extensionUrl"], ["label", "Encounter Status", "deCode", "DE10.008", 3, "value", "codedField"], [1, "empty-icon"], [3, "label", "value", "deCode", "codedField", "observationCode"], [1, "content-toolbar"], [1, "copy-btn", 3, "click"], [1, "json-pre"]], template: function ExtractionPayloadViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ExtractionPayloadViewerComponent_Conditional_0_Template, 4, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Template, 43, 33, "div", 1)(2, ExtractionPayloadViewerComponent_Conditional_2_Template, 3, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasContent() ? 1 : !ctx.loading() ? 2 : -1);
    }
  }, dependencies: [CodedFieldCardComponent], styles: ['@charset "UTF-8";\n\n\n\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.extraction-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  min-height: 0;\n}\n.extraction-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-complete[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-partial[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-empty[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner.status-invalid[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.status-banner[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.status-banner[_ngcontent-%COMP%]   .resource-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n@media (max-width: 768px) {\n  .header-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item[_ngcontent-%COMP%]   .value.bundle-id[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.episode-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  overflow-x: auto;\n}\n.episode-selector-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.episode-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  flex-wrap: nowrap;\n}\n.episode-pill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  background: var(--surface-color, #fff);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.episode-pill[_ngcontent-%COMP%]:hover {\n  background: #e3f2fd;\n  border-color: #90caf9;\n}\n.episode-pill.active[_ngcontent-%COMP%] {\n  background: #1976d2;\n  border-color: #1976d2;\n  color: #fff;\n}\n.episode-pill.active[_ngcontent-%COMP%]   .ep-name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.episode-pill.active[_ngcontent-%COMP%]   .ep-program[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.episode-pill[_ngcontent-%COMP%]   .ep-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-pill[_ngcontent-%COMP%]   .ep-program[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episodes-overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 0.75rem;\n}\n.episode-overview-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.episode-overview-card[_ngcontent-%COMP%]:hover {\n  border-color: #90caf9;\n  background: #f5f9ff;\n}\n.episode-overview-card.active[_ngcontent-%COMP%] {\n  border-color: #1976d2;\n  background: #e3f2fd;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-id[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-fields[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-patient[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-program[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-bundles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n}\n.bundle-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.bundle-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.625rem;\n  background: #eceff1;\n  color: #546e7a;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.15s ease;\n}\n.bundle-tag[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.95);\n}\n.bundle-tag[_ngcontent-%COMP%]   .bundle-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.5625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.bundle-tag[_ngcontent-%COMP%]   .bundle-profiles[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.bundle-tag[_ngcontent-%COMP%]   .bundle-expand-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.5rem;\n  opacity: 0.6;\n}\n.bundle-tag.expanded[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.bundle-tag.bundle-pending[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.bundle-tag.bundle-submitted[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.bundle-tag.bundle-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.bundle-profile-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0.25rem 0.5rem;\n  background: rgba(0, 0, 0, 0.03);\n  border-radius: 0 0 3px 3px;\n  font-size: 0.5625rem;\n}\n.bundle-profile-list[_ngcontent-%COMP%]   .profile-item[_ngcontent-%COMP%] {\n  padding: 0.125rem 0;\n  color: var(--text-secondary, #666);\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.bundle-profile-list[_ngcontent-%COMP%]   .profile-item[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  color: var(--primary-color, #3b82f6);\n  font-size: 0.5rem;\n}\n.data-element-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n.de-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.625rem;\n  background: var(--surface-color, #fff);\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 12px;\n  font-size: 0.75rem;\n  cursor: default;\n}\n.de-pill[_ngcontent-%COMP%]   .de-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1976d2;\n}\n.de-pill[_ngcontent-%COMP%]   .de-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.125rem;\n  height: 1.125rem;\n  padding: 0 0.25rem;\n  background: #e3f2fd;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #1565c0;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 10px;\n}\n.tab[_ngcontent-%COMP%]   .error-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n  border-radius: 10px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.de-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.de-item[_ngcontent-%COMP%]   .de-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.de-item[_ngcontent-%COMP%]   .de-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.de-item[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.de-item[_ngcontent-%COMP%]   .de-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1976d2;\n  min-width: 3rem;\n}\n.de-item[_ngcontent-%COMP%]   .de-name[_ngcontent-%COMP%] {\n  color: var(--text-primary, #333);\n}\n.de-item[_ngcontent-%COMP%]   .de-count[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  margin-left: auto;\n}\n.de-item[_ngcontent-%COMP%]   .de-items[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.de-item[_ngcontent-%COMP%]   .de-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-type[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-count[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.detail-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.detail-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.detail-item[_ngcontent-%COMP%]   .value.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.services-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.service-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.service-event-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 0.75rem;\n  background: var(--surface-light, #f5f5f5);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.service-event-card[_ngcontent-%COMP%]   .event-id[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-finished[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-in-progress[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-planned[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-cancelled[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.75rem;\n  padding: 0.75rem;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n}\n.coded-fields-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 0.75rem;\n}\n.coded-fields-grid.service-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 0.625rem;\n}\n.demographics-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.observations-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 0.75rem;\n}\n.observation-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n}\n.observation-card.unmapped[_ngcontent-%COMP%] {\n  border-color: #ffcc80;\n  background: #fff8e1;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-de-number[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 500;\n  color: #9e9e9e;\n  white-space: nowrap;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-primary, #333);\n  font-weight: 500;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-value-code[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #1565c0;\n  font-family: "Roboto Mono", monospace;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-system[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n  font-family: monospace;\n  word-break: break-all;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-data[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.5;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.json-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.no-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtractionPayloadViewerComponent, [{
    type: Component,
    args: [{ selector: "app-extraction-payload-viewer", standalone: true, imports: [CodedFieldCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (loading()) {
  <div class="loading-overlay">
    <div class="loading-spinner"></div>
    <span>Loading extraction data...</span>
  </div>
}

@if (hasContent()) {
  @let parsed = parsedPayload();
  @let config = statusConfig();
  @let info = submissionInfo();

  <div class="extraction-viewer">
    <!-- Header Summary -->
    <div class="extraction-header">
      <div class="status-banner" [class]="config.class">
        <span class="status-icon">{{ config.icon }}</span>
        <span class="status-label">{{ config.label }}</span>
        @if (isMHAPDS()) {
          <span class="resource-count">{{ parsed?.summary?.totalResources }} fields</span>
        } @else {
          <span class="resource-count">{{ parsed?.summary?.totalResources }} resources</span>
        }
      </div>

      <!-- Submission Info (MHA PDS format) -->
      @if (isMHAPDS() && info) {
        <div class="header-grid">
          <div class="header-item">
            <span class="label">Domain</span>
            <span class="value">{{ info.domain }}</span>
          </div>
          <div class="header-item">
            <span class="label">Episodes</span>
            <span class="value">{{ info.episodeCount }}</span>
          </div>
          <div class="header-item">
            <span class="label">Patient</span>
            <span class="value">{{ parsed?.summary?.patientInfo?.name || 'N/A' }}</span>
          </div>
          <div class="header-item">
            <span class="label">MRN</span>
            <span class="value">{{ parsed?.summary?.patientInfo?.mrn || 'N/A' }}</span>
          </div>
        </div>
      } @else {
        <!-- FHIR Bundle header -->
        <div class="header-grid">
          <div class="header-item">
            <span class="label">Bundle ID</span>
            <span class="value bundle-id">{{ parsed?.bundleId || 'N/A' }}</span>
          </div>
          <div class="header-item">
            <span class="label">Bundle Type</span>
            <span class="value">{{ parsed?.bundleType || 'collection' }}</span>
          </div>
          <div class="header-item">
            <span class="label">Patient</span>
            <span class="value">{{ parsed?.summary?.patientInfo?.name || 'N/A' }}</span>
          </div>
          <div class="header-item">
            <span class="label">MRN</span>
            <span class="value">{{ parsed?.summary?.patientInfo?.mrn || 'N/A' }}</span>
          </div>
        </div>
      }

      <!-- Episode Selector (MHA PDS with multiple episodes) -->
      @if (hasMultipleEpisodes()) {
        <div class="episode-selector">
          <span class="episode-selector-label">Episode:</span>
          <div class="episode-pills">
            @for (ep of episodes(); track trackByEpisode($index, ep)) {
              <button
                class="episode-pill"
                [class.active]="selectedEpisodeIndex() === ep.index"
                (click)="selectEpisode(ep.index)"
                [title]="ep.episodeIdentifier + ' - ' + ep.programName">
                <span class="ep-name">{{ ep.patientName }}</span>
                <span class="ep-program">{{ ep.programName }}</span>
              </button>
            }
          </div>
        </div>
      }

      <div class="data-element-pills">
        @for (de of dataElements(); track de.code) {
          <span class="de-pill" [title]="de.description">
            <span class="de-code">{{ de.code }}</span>
            <span class="de-count">{{ de.count }}</span>
          </span>
        }
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <button
        class="tab"
        [class.active]="activeTab() === 'summary'"
        (click)="setActiveTab('summary')">
        Summary
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'patient'"
        (click)="setActiveTab('patient')">
        Patient (DE01-03)
        @if (patientErrorCount() > 0) {
          <span class="error-badge" [title]="patientErrorCount() + ' unmapped field(s)'">{{ patientErrorCount() }}</span>
        }
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'episode'"
        (click)="setActiveTab('episode')">
        Episode (DE05-09)
        @if (episodeErrorCount() > 0) {
          <span class="error-badge" [title]="episodeErrorCount() + ' unmapped field(s)'">{{ episodeErrorCount() }}</span>
        }
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'services'"
        (click)="setActiveTab('services')">
        Services (DE10)
        @if (hasServiceEvents()) {
          <span class="count-badge">{{ serviceEventCount() }}</span>
        }
        @if (servicesErrorCount() > 0) {
          <span class="error-badge" [title]="servicesErrorCount() + ' unmapped field(s)'">{{ servicesErrorCount() }}</span>
        }
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'demographics'"
        (click)="setActiveTab('demographics')">
        Demographics (DE04)
        @if (hasObservations()) {
          <span class="count-badge">{{ observationCount() }}</span>
        }
        @if (demographicsErrorCount() > 0) {
          <span class="error-badge" [title]="demographicsErrorCount() + ' unmapped field(s)'">{{ demographicsErrorCount() }}</span>
        }
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'raw'"
        (click)="setActiveTab('raw')">
        Raw JSON
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Summary Tab -->
      @if (activeTab() === 'summary') {
        <div class="summary-content">
          <!-- Submission metadata (MHA PDS only) -->
          @if (isMHAPDS() && info) {
            <h4>Submission Metadata</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Execution Start</span>
                <span class="value">{{ info.executionStart }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Execution End</span>
                <span class="value">{{ info.executionEnd }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Domain</span>
                <span class="value">{{ info.domain }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Node</span>
                <span class="value">{{ info.node }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Submit Fields</span>
                <span class="value">{{ info.submitFieldsCount }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Total Episodes</span>
                <span class="value">{{ info.episodeCount }}</span>
              </div>
            </div>

            <!-- Episode list overview -->
            <h4>Episodes</h4>
            <div class="episodes-overview">
              @for (ep of episodes(); track trackByEpisode($index, ep)) {
                <div
                  class="episode-overview-card"
                  [class.active]="selectedEpisodeIndex() === ep.index"
                  (click)="selectEpisode(ep.index)">
                  <div class="ep-card-header">
                    <span class="ep-card-id">{{ ep.episodeIdentifier }}</span>
                    <span class="ep-card-fields">{{ ep.fieldsCount }} / {{ info.submitFieldsCount }} fields</span>
                  </div>
                  <div class="ep-card-details">
                    <span class="ep-card-patient">{{ ep.patientName }}</span>
                    <span class="ep-card-program">{{ ep.programName }}</span>
                  </div>
                  <div class="ep-card-bundles">
                    @for (bundle of ep.bundles; track bundle.type) {
                      <div class="bundle-item">
                        <button
                          class="bundle-tag"
                          [class]="'bundle-' + bundle.status"
                          [class.expanded]="isBundleExpanded(getBundleKey(ep.index, bundle.type))"
                          (click)="toggleBundleExpand(getBundleKey(ep.index, bundle.type)); $event.stopPropagation()">
                          <span class="bundle-type">{{ bundle.type }}</span>
                          <span class="bundle-profiles">{{ bundle.profileCount }} profiles</span>
                          <span class="bundle-expand-icon">{{ isBundleExpanded(getBundleKey(ep.index, bundle.type)) ? '\u25BC' : '\u25B6' }}</span>
                        </button>
                        @if (isBundleExpanded(getBundleKey(ep.index, bundle.type))) {
                          <ul class="bundle-profile-list">
                            @for (profile of bundle.profiles; track profile) {
                              <li class="profile-item">{{ profile }}</li>
                            }
                          </ul>
                        }
                      </div>
                    }
                  </div>
                  <div class="ep-card-meta">
                    <span>{{ ep.servicesCount }} service{{ ep.servicesCount !== 1 ? 's' : '' }}</span>
                    <span>{{ ep.bundleCount }} bundle{{ ep.bundleCount !== 1 ? 's' : '' }}</span>
                  </div>
                </div>
              }
            </div>
          }

          <h4>Data Elements</h4>
          <div class="de-list">
            @for (de of dataElements(); track trackByDataElement($index, de)) {
              <div class="de-item">
                <button
                  class="de-toggle"
                  (click)="toggleDataElementExpand(de.code)">
                  <span class="toggle-icon">{{ isDataElementExpanded(de.code) ? '\u25BC' : '\u25B6' }}</span>
                  <span class="de-code">{{ de.code }}</span>
                  <span class="de-name">{{ de.name }}</span>
                  <span class="de-count">({{ de.count }})</span>
                </button>
                @if (isDataElementExpanded(de.code)) {
                  <ul class="de-items">
                    @for (item of de.items; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                }
              </div>
            }
          </div>

          <!-- Resources by Type (FHIR Bundle only) -->
          @if (!isMHAPDS()) {
            <h4>Resources by Type</h4>
            <div class="resource-list">
              @for (resource of resourceSummary(); track trackByResourceType($index, resource)) {
                <div class="resource-item">
                  <button
                    class="resource-toggle"
                    (click)="toggleResourceExpand(resource.type)">
                    <span class="toggle-icon">{{ isResourceExpanded(resource.type) ? '\u25BC' : '\u25B6' }}</span>
                    <span class="resource-type">{{ resource.type }}</span>
                    <span class="resource-count">({{ resource.count }})</span>
                  </button>
                  @if (isResourceExpanded(resource.type)) {
                    <ul class="resource-ids">
                      @for (id of resource.ids; track id) {
                        <li>{{ id }}</li>
                      }
                    </ul>
                  }
                </div>
              }
            </div>
          }

          @if (parsed?.parseErrors && parsed!.parseErrors.length > 0) {
            <h4>Parse Warnings</h4>
            <ul class="parse-errors">
              @for (error of parsed!.parseErrors; track error) {
                <li>{{ error }}</li>
              }
            </ul>
          }
        </div>
      }

      <!-- Patient Tab (DE01-03) -->
      @if (activeTab() === 'patient') {
        <div class="detail-content">
          <div class="detail-section">
            <h4>DE01 - Client Information</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="First Name"
                [value]="parsed?.summary?.patientInfo?.firstName || ''"
                deCode="DE01.001"
              />
              <app-coded-field-card
                label="Middle Name"
                [value]="parsed?.summary?.patientInfo?.middleName || ''"
                deCode="DE01.002"
              />
              <app-coded-field-card
                label="Last Name"
                [value]="parsed?.summary?.patientInfo?.lastName || ''"
                deCode="DE01.003"
              />
              <app-coded-field-card
                label="Date of Birth"
                [value]="parsed?.summary?.patientInfo?.birthDate || ''"
                deCode="DE01.004"
              />
              <app-coded-field-card
                label="Estimated DOB Flag"
                [value]="parsed?.summary?.patientInfo?.estimatedDobFlag || ''"
                deCode="DE01.005"
                [codedField]="parsed?.summary?.patientInfo?.estimatedDobFlagCoded"
              />
              <app-coded-field-card
                label="Active Status"
                [value]="parsed?.summary?.patientInfo?.activeStatus || ''"
                deCode="DE01.006"
                [codedField]="parsed?.summary?.patientInfo?.activeStatusCoded"
              />
            </div>
          </div>

          <div class="detail-section">
            <h4>DE02 - Client Identifiers</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="MRN"
                [value]="parsed?.summary?.patientInfo?.mrn || ''"
                deCode="DE02.001"
              />
              <app-coded-field-card
                label="Vendor Issuing ID"
                [value]="parsed?.summary?.patientInfo?.vendorIssuingId || ''"
                deCode="DE02.002"
              />
              <app-coded-field-card
                label="Health Card Number"
                [value]="parsed?.summary?.patientInfo?.ohip || ''"
                deCode="DE02.003"
              />
              <app-coded-field-card
                label="HCN Issuing Authority"
                [value]="parsed?.summary?.patientInfo?.hcnIssuingAuthority || ''"
                deCode="DE02.004"
                [codedField]="parsed?.summary?.patientInfo?.hcnIssuingAuthorityCoded"
              />
              <app-coded-field-card
                label="Identifier Type"
                [value]="parsed?.summary?.patientInfo?.identifierType || ''"
                deCode="DE02.005"
                [codedField]="parsed?.summary?.patientInfo?.identifierTypeCoded"
              />
            </div>
          </div>

          <div class="detail-section">
            <h4>DE03 - Client Address</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="Address Use"
                [value]="parsed?.summary?.patientInfo?.addressUse || ''"
                deCode="DE03.001"
                [codedField]="parsed?.summary?.patientInfo?.addressUseCoded"
              />
              <app-coded-field-card
                label="City"
                [value]="parsed?.summary?.patientInfo?.city || ''"
                deCode="DE03.002"
              />
              <app-coded-field-card
                label="Province"
                [value]="parsed?.summary?.patientInfo?.province || ''"
                deCode="DE03.003"
                [codedField]="parsed?.summary?.patientInfo?.provinceCoded"
              />
              <app-coded-field-card
                label="Postal Code"
                [value]="parsed?.summary?.patientInfo?.postalCode || ''"
                deCode="DE03.004"
              />
            </div>
          </div>
        </div>
      }

      <!-- Episode Tab (DE05-09) -->
      @if (activeTab() === 'episode') {
        <div class="detail-content">
          <div class="detail-section">
            <h4>DE05 - Referral Information</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="Referral ID"
                [value]="parsed?.summary?.referralInfo?.referralId || ''"
                deCode="DE05.001"
                [codedField]="parsed?.summary?.referralInfo?.referralIdCoded"
              />
              <app-coded-field-card
                label="Received Date"
                [value]="parsed?.summary?.referralInfo?.referralDate || ''"
                deCode="DE05.002"
              />
              <app-coded-field-card
                label="Referral Source"
                [value]="parsed?.summary?.referralInfo?.referralSource || ''"
                deCode="DE05.003"
              />
              <app-coded-field-card
                label="Referral Source Type"
                [value]="parsed?.summary?.referralInfo?.referralSourceType || ''"
                deCode="DE05.004"
                [codedField]="parsed?.summary?.referralInfo?.referralSourceTypeCoded"
              />
              <app-coded-field-card
                label="Referral Type"
                [value]="parsed?.summary?.referralInfo?.referralType || ''"
                deCode="DE05.005"
                [codedField]="parsed?.summary?.referralInfo?.referralTypeCoded"
              />
              <app-coded-field-card
                label="Status"
                [value]="parsed?.summary?.referralInfo?.status || ''"
                deCode="DE05.STATUS"
                [codedField]="parsed?.summary?.referralInfo?.statusCoded"
              />
              <app-coded-field-card
                label="Intent"
                [value]="parsed?.summary?.referralInfo?.intent || ''"
                deCode="DE05.INTENT"
                [codedField]="parsed?.summary?.referralInfo?.intentCoded"
              />
            </div>
          </div>

          <div class="detail-section">
            <h4>DE06 - Episode of Care</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="Episode ID"
                [value]="parsed?.summary?.episodeInfo?.episodeId || ''"
                deCode="DE06.001"
                [codedField]="parsed?.summary?.episodeInfo?.episodeIdCoded"
              />
              <app-coded-field-card
                label="Status"
                [value]="parsed?.summary?.episodeInfo?.status || ''"
                deCode="DE06.002"
                [codedField]="parsed?.summary?.episodeInfo?.statusCoded"
              />
              <app-coded-field-card
                label="First Contact Date"
                [value]="parsed?.summary?.episodeInfo?.firstContactDate || ''"
                deCode="DE06.003"
                [extensionUrl]="parsed?.summary?.episodeInfo?.firstContactDateExtensionUrl || ''"
              />
              <app-coded-field-card
                label="Eligibility Screening Date"
                [value]="parsed?.summary?.episodeInfo?.eligibilityScreeningDate || ''"
                deCode="DE06.004"
                [extensionUrl]="parsed?.summary?.episodeInfo?.eligibilityScreeningDateExtensionUrl || ''"
              />
              <app-coded-field-card
                label="Initial Assessment Date"
                [value]="parsed?.summary?.episodeInfo?.initialAssessmentDate || ''"
                deCode="DE06.005"
                [extensionUrl]="parsed?.summary?.episodeInfo?.initialAssessmentDateExtensionUrl || ''"
              />
              <app-coded-field-card
                label="Scheduled Appointment"
                [value]="parsed?.summary?.episodeInfo?.scheduledAppointmentDate || ''"
                deCode="DE06.006"
              />
              @if (parsed?.summary?.episodeInfo?.scheduledAppointmentEnd) {
                <app-coded-field-card
                  label="Appointment End"
                  [value]="parsed?.summary?.episodeInfo?.scheduledAppointmentEnd || ''"
                  deCode="DE06.006.END"
                />
              }
              <app-coded-field-card
                label="Appointment Status"
                [value]="parsed?.summary?.episodeInfo?.appointmentStatus || ''"
                deCode="DE06.APPT"
                [codedField]="parsed?.summary?.episodeInfo?.appointmentStatusCoded"
              />
              @if (parsed?.summary?.episodeInfo?.cancellationReason) {
                <app-coded-field-card
                  label="Cancellation Reason"
                  [value]="parsed?.summary?.episodeInfo?.cancellationReason || ''"
                  deCode="DE06.007"
                  [codedField]="parsed?.summary?.episodeInfo?.cancellationReasonCoded"
                />
              }
              <app-coded-field-card
                label="Service Initiation Date"
                [value]="parsed?.summary?.episodeInfo?.serviceInitiationDate || ''"
                deCode="DE06.008"
                [extensionUrl]="parsed?.summary?.episodeInfo?.serviceInitiationDateExtensionUrl || ''"
              />
              <app-coded-field-card
                label="Service Enrollment Date"
                [value]="parsed?.summary?.episodeInfo?.serviceEnrollmentDate || ''"
                deCode="DE06.009"
              />
              <app-coded-field-card
                label="Service Termination Date"
                [value]="parsed?.summary?.episodeInfo?.serviceTerminationDate || ''"
                deCode="DE06.010"
              />
              @if (parsed?.summary?.episodeInfo?.serviceTerminationReason) {
                <app-coded-field-card
                  label="Termination Reason"
                  [value]="parsed?.summary?.episodeInfo?.serviceTerminationReason || ''"
                  deCode="DE06.011"
                  [codedField]="parsed?.summary?.episodeInfo?.serviceTerminationReasonCoded"
                />
              }
            </div>
          </div>

          <div class="detail-section">
            <h4>DE07 - Provider Organization</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="Organization Number"
                [value]="parsed?.summary?.providerInfo?.organizationId || ''"
                deCode="DE07.001"
                [codedField]="parsed?.summary?.providerInfo?.organizationIdCoded"
              />
              <app-coded-field-card
                label="MOH Organization ID"
                [value]="parsed?.summary?.providerInfo?.mohOrganizationId || ''"
                deCode="DE07.002"
                [codedField]="parsed?.summary?.providerInfo?.mohOrganizationIdCoded"
              />
              <app-coded-field-card
                label="Organization Name"
                [value]="parsed?.summary?.providerInfo?.organizationName || ''"
                deCode="DE07.003"
              />
              <app-coded-field-card
                label="Organization Active"
                [value]="parsed?.summary?.providerInfo?.organizationActiveFlag || ''"
                deCode="DE07.004"
                [codedField]="parsed?.summary?.providerInfo?.organizationActiveFlagCoded"
              />
            </div>
          </div>

          <div class="detail-section">
            <h4>DE08 - Provider Site</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="Site Number"
                [value]="parsed?.summary?.providerInfo?.siteCode || ''"
                deCode="DE08.001"
                [codedField]="parsed?.summary?.providerInfo?.siteCodeCoded"
              />
              <app-coded-field-card
                label="Site Name"
                [value]="parsed?.summary?.providerInfo?.locationName || ''"
                deCode="DE08.002"
              />
            </div>
          </div>

          <div class="detail-section">
            <h4>DE09 - Health Program</h4>
            <div class="coded-fields-grid">
              <app-coded-field-card
                label="Program Number"
                [value]="parsed?.summary?.programInfo?.programId || ''"
                deCode="DE09.001"
                [codedField]="parsed?.summary?.programInfo?.programIdCoded"
              />
              <app-coded-field-card
                label="Program Name"
                [value]="parsed?.summary?.programInfo?.programName || ''"
                deCode="DE09.002"
              />
              <app-coded-field-card
                label="Functional Centre"
                [value]="parsed?.summary?.programInfo?.programCode || ''"
                deCode="DE09.003"
                [codedField]="parsed?.summary?.programInfo?.programCodeCoded"
              />
            </div>
          </div>
        </div>
      }

      <!-- Services Tab (DE10) -->
      @if (activeTab() === 'services') {
        <div class="services-content">
          @if (hasServiceEvents()) {
            <div class="service-events-list">
              @for (event of serviceEvents(); track trackByServiceEvent($index, event)) {
                <div class="service-event-card">
                  <div class="event-header">
                    <span class="event-id">{{ event.encounterId || 'Unknown' }}</span>
                    <span class="event-status" [class]="'status-' + event.status">{{ event.status }}</span>
                  </div>
                  <div class="coded-fields-grid service-grid">
                    <app-coded-field-card
                      label="Event ID"
                      [value]="event.encounterId || ''"
                      deCode="DE10.001"
                      [codedField]="event.encounterIdCoded"
                    />
                    <app-coded-field-card
                      label="Service Modality"
                      [value]="event.serviceType || ''"
                      deCode="DE10.002"
                      [codedField]="event.serviceTypeCoded"
                    />
                    <app-coded-field-card
                      label="Modality Type"
                      [value]="event.serviceModalityType || ''"
                      deCode="DE10.003"
                      [codedField]="event.serviceModalityTypeCoded"
                    />
                    <app-coded-field-card
                      label="Encounter Date"
                      [value]="event.startDate || ''"
                      deCode="DE10.004"
                    />
                    @if (event.groupServiceId) {
                      <app-coded-field-card
                        label="Group Service ID"
                        [value]="event.groupServiceId"
                        deCode="DE10.005"
                      />
                    }
                    <app-coded-field-card
                      label="Direct Minutes"
                      [value]="event.directMinutes.toString()"
                      deCode="DE10.006"
                      [extensionUrl]="event.directMinutesExtensionUrl || ''"
                    />
                    <app-coded-field-card
                      label="Indirect Minutes"
                      [value]="event.indirectMinutes.toString()"
                      deCode="DE10.007"
                      [extensionUrl]="event.indirectMinutesExtensionUrl || ''"
                    />
                    <app-coded-field-card
                      label="Encounter Status"
                      [value]="event.status || ''"
                      deCode="DE10.008"
                      [codedField]="event.statusCoded"
                    />
                  </div>
                </div>
              }
            </div>
          } @else {
            <div class="no-data">
              <span class="empty-icon">\u25CB</span>
              <p>No service events found in this payload.</p>
            </div>
          }
        </div>
      }

      <!-- Demographics Tab (DE04) -->
      @if (activeTab() === 'demographics') {
        <div class="demographics-content">
          @if (hasObservations()) {
            <div class="coded-fields-grid">
              @for (obs of observations(); track trackByObservation($index, obs)) {
                <app-coded-field-card
                  [label]="obs.display || getObservationName(obs.code)"
                  [value]="obs.value"
                  [deCode]="obs.code"
                  [codedField]="obs.codedField"
                  [observationCode]="obs.observationCode"
                />
              }
            </div>
          } @else {
            <div class="no-data">
              <span class="empty-icon">\u25CB</span>
              <p>No demographic observations found in this payload.</p>
            </div>
          }
        </div>
      }

      <!-- Raw JSON Tab -->
      @if (activeTab() === 'raw') {
        <div class="json-content">
          <div class="content-toolbar">
            <button
              class="copy-btn"
              (click)="copyToClipboard(formattedRawData())"
              [class.success]="copySuccess()">
              {{ copySuccess() ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <pre class="json-pre"><code>{{ formattedRawData() }}</code></pre>
        </div>
      }
    </div>
  </div>
} @else if (!loading()) {
  <div class="no-content">
    <p>No extraction data available or content could not be parsed.</p>
  </div>
}
`, styles: ['@charset "UTF-8";\n\n/* src/app/logs/components/extraction-payload-viewer.scss */\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.extraction-viewer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  min-height: 0;\n}\n.extraction-header {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-complete {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-partial {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-empty {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner.status-invalid {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner .status-icon {\n  font-size: 1.25rem;\n}\n.status-banner .status-label {\n  font-size: 1rem;\n}\n.status-banner .resource-count {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n@media (max-width: 768px) {\n  .header-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item .value {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item .value.bundle-id {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.episode-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  overflow-x: auto;\n}\n.episode-selector-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.episode-pills {\n  display: flex;\n  gap: 0.375rem;\n  flex-wrap: nowrap;\n}\n.episode-pill {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  background: var(--surface-color, #fff);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.episode-pill:hover {\n  background: #e3f2fd;\n  border-color: #90caf9;\n}\n.episode-pill.active {\n  background: #1976d2;\n  border-color: #1976d2;\n  color: #fff;\n}\n.episode-pill.active .ep-name {\n  color: #fff;\n}\n.episode-pill.active .ep-program {\n  color: rgba(255, 255, 255, 0.8);\n}\n.episode-pill .ep-name {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-pill .ep-program {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episodes-overview {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 0.75rem;\n}\n.episode-overview-card {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.episode-overview-card:hover {\n  border-color: #90caf9;\n  background: #f5f9ff;\n}\n.episode-overview-card.active {\n  border-color: #1976d2;\n  background: #e3f2fd;\n}\n.episode-overview-card .ep-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card .ep-card-id {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n}\n.episode-overview-card .ep-card-fields {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card .ep-card-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card .ep-card-patient {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-overview-card .ep-card-program {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card .ep-card-bundles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card .ep-card-meta {\n  display: flex;\n  gap: 0.75rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n}\n.bundle-item {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.bundle-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.625rem;\n  background: #eceff1;\n  color: #546e7a;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.15s ease;\n}\n.bundle-tag:hover {\n  filter: brightness(0.95);\n}\n.bundle-tag .bundle-type {\n  font-weight: 600;\n  font-size: 0.5625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.bundle-tag .bundle-profiles {\n  opacity: 0.7;\n}\n.bundle-tag .bundle-expand-icon {\n  margin-left: auto;\n  font-size: 0.5rem;\n  opacity: 0.6;\n}\n.bundle-tag.expanded {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.bundle-tag.bundle-pending {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.bundle-tag.bundle-submitted {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.bundle-tag.bundle-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.bundle-profile-list {\n  list-style: none;\n  margin: 0;\n  padding: 0.25rem 0.5rem;\n  background: rgba(0, 0, 0, 0.03);\n  border-radius: 0 0 3px 3px;\n  font-size: 0.5625rem;\n}\n.bundle-profile-list .profile-item {\n  padding: 0.125rem 0;\n  color: var(--text-secondary, #666);\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.bundle-profile-list .profile-item::before {\n  content: "\\2022";\n  color: var(--primary-color, #3b82f6);\n  font-size: 0.5rem;\n}\n.data-element-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n.de-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.625rem;\n  background: var(--surface-color, #fff);\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 12px;\n  font-size: 0.75rem;\n  cursor: default;\n}\n.de-pill .de-code {\n  font-weight: 600;\n  color: #1976d2;\n}\n.de-pill .de-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.125rem;\n  height: 1.125rem;\n  padding: 0 0.25rem;\n  background: #e3f2fd;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #1565c0;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab .count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 10px;\n}\n.tab .error-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #f59e0b;\n  border-radius: 10px;\n}\n.tab-content {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content {\n  padding: 1rem;\n}\n.summary-content h4 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content h4:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.de-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.de-item .de-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.de-item .de-toggle:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.de-item .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.de-item .de-code {\n  font-weight: 600;\n  color: #1976d2;\n  min-width: 3rem;\n}\n.de-item .de-name {\n  color: var(--text-primary, #333);\n}\n.de-item .de-count {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  margin-left: auto;\n}\n.de-item .de-items {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.de-item .de-items li {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item .resource-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item .resource-toggle:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item .resource-type {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item .resource-count {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item .resource-ids {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item .resource-ids li {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors li {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.detail-content {\n  padding: 1rem;\n}\n.detail-section {\n  margin-bottom: 1.5rem;\n}\n.detail-section:last-child {\n  margin-bottom: 0;\n}\n.detail-section h4 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-item .value {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.detail-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.detail-item .value.status-badge {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.services-content {\n  padding: 1rem;\n}\n.service-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.service-event-card {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.service-event-card .event-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 0.75rem;\n  background: var(--surface-light, #f5f5f5);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.service-event-card .event-id {\n  font-weight: 500;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.service-event-card .event-status {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n}\n.service-event-card .event-status.status-finished {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.service-event-card .event-status.status-in-progress {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.service-event-card .event-status.status-planned {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.service-event-card .event-status.status-cancelled {\n  background: #ffebee;\n  color: #c62828;\n}\n.service-event-card .event-details {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.75rem;\n  padding: 0.75rem;\n}\n.service-event-card .event-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.service-event-card .event-item .label {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n}\n.service-event-card .event-item .value {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n}\n.service-event-card .event-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n}\n.coded-fields-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 0.75rem;\n}\n.coded-fields-grid.service-grid {\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 0.625rem;\n}\n.demographics-content {\n  padding: 1rem;\n}\n.observations-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 0.75rem;\n}\n.observation-card {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n}\n.observation-card.unmapped {\n  border-color: #ffcc80;\n  background: #fff8e1;\n}\n.observation-card .obs-header {\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.observation-card .obs-code {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.observation-card .obs-de-number {\n  font-size: 0.625rem;\n  font-weight: 500;\n  color: #9e9e9e;\n  white-space: nowrap;\n}\n.observation-card .obs-value {\n  font-size: 0.9rem;\n  color: var(--text-primary, #333);\n  font-weight: 500;\n}\n.observation-card .obs-value-code {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #1565c0;\n  font-family: "Roboto Mono", monospace;\n}\n.observation-card .obs-system {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n  font-family: monospace;\n  word-break: break-all;\n}\n.no-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-data .empty-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.5;\n}\n.no-data p {\n  margin: 0;\n  font-size: 1rem;\n}\n.json-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre code {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.no-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content p {\n  margin: 0;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtractionPayloadViewerComponent, { className: "ExtractionPayloadViewerComponent", filePath: "src/app/logs/components/extraction-payload-viewer.ts", lineNumber: 35 });
})();

// src/app/logs/logs.ts
function LogsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-log-detail", 4);
    \u0275\u0275listener("closed", function LogsComponent_Conditional_9_Template_app_log_detail_closed_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCloseDetail());
    })("viewPayload", function LogsComponent_Conditional_9_Template_app_log_detail_viewPayload_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewPayload($event));
    });
    \u0275\u0275elementEnd();
  }
}
function LogsComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function LogsComponent_Conditional_10_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275listener("click", function LogsComponent_Conditional_10_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Mirth Callback Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function LogsComponent_Conditional_10_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "app-mirth-callback-viewer", 11);
    \u0275\u0275listener("closed", function LogsComponent_Conditional_10_Conditional_0_Template_app_mirth_callback_viewer_closed_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementEnd()()();
  }
}
function LogsComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function LogsComponent_Conditional_10_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275listener("click", function LogsComponent_Conditional_10_Conditional_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Extraction Payload Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function LogsComponent_Conditional_10_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "app-extraction-payload-viewer", 11);
    \u0275\u0275listener("closed", function LogsComponent_Conditional_10_Conditional_1_Template_app_extraction_payload_viewer_closed_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementEnd()()();
  }
}
function LogsComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-payload-viewer", 11);
    \u0275\u0275listener("closed", function LogsComponent_Conditional_10_Conditional_2_Template_app_payload_viewer_closed_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementEnd();
  }
}
function LogsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LogsComponent_Conditional_10_Conditional_0_Template, 9, 0, "div", 5)(1, LogsComponent_Conditional_10_Conditional_1_Template, 9, 0, "div", 5)(2, LogsComponent_Conditional_10_Conditional_2_Template, 1, 0, "app-payload-viewer");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isMirthCallback() ? 0 : ctx_r1.isDataExtraction() ? 1 : 2);
  }
}
var LogsComponent = class _LogsComponent {
  logsService = inject(LogsService);
  route = inject(ActivatedRoute);
  // Expose service signals for template
  selectedLog = this.logsService.selectedLog;
  selectedLogText = this.logsService.selectedLogText;
  loading = this.logsService.loading;
  // Local state
  showDetail = signal(false, ...ngDevMode ? [{ debugName: "showDetail" }] : []);
  showPayload = signal(false, ...ngDevMode ? [{ debugName: "showPayload" }] : []);
  // Check if selected log is a Mirth callback type
  isMirthCallback = computed(() => {
    const detail = this.selectedLog();
    return detail?.log?.log_type === "MIRTH_CALLBACK";
  }, ...ngDevMode ? [{ debugName: "isMirthCallback" }] : []);
  // Check if selected log is a data extraction type
  isDataExtraction = computed(() => {
    const detail = this.selectedLog();
    return detail?.log?.log_type === "DATA_EXTRACTION";
  }, ...ngDevMode ? [{ debugName: "isDataExtraction" }] : []);
  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    if (params["search_field"] && params["search_value"]) {
      this.logsService.loadLogs({
        log_type: "",
        status: "",
        start_date: "",
        end_date: "",
        related_script: "",
        days_back: 30,
        search_field: params["search_field"],
        search_value: params["search_value"],
        page: 1,
        page_size: 50
      });
    } else {
      this.logsService.loadLogs();
    }
  }
  onLogSelected(log) {
    this.showDetail.set(true);
  }
  onCloseDetail() {
    this.showDetail.set(false);
    this.logsService.clearSelectedLog();
  }
  onViewPayload(logId) {
    this.showPayload.set(true);
  }
  onClosePayload() {
    this.showPayload.set(false);
  }
  static \u0275fac = function LogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogsComponent, selectors: [["app-logs"]], decls: 11, vars: 2, consts: [[1, "logs-container"], [1, "logs-header"], [1, "logs-content"], [3, "logSelected"], [3, "closed", "viewPayload"], [1, "viewer-overlay"], [1, "viewer-overlay", 3, "click"], [1, "viewer-modal", 3, "click"], [1, "viewer-header"], ["aria-label", "Close", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [3, "closed"]], template: function LogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "MHA PDS Logs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "View and search operational logs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275element(7, "app-log-filters");
      \u0275\u0275elementStart(8, "app-log-table", 3);
      \u0275\u0275listener("logSelected", function LogsComponent_Template_app_log_table_logSelected_8_listener($event) {
        return ctx.onLogSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, LogsComponent_Conditional_9_Template, 1, 0, "app-log-detail");
      \u0275\u0275conditionalCreate(10, LogsComponent_Conditional_10_Template, 3, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.showDetail() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPayload() ? 10 : -1);
    }
  }, dependencies: [
    LogFiltersComponent,
    LogTableComponent,
    LogDetailComponent,
    PayloadViewerComponent,
    MirthCallbackViewerComponent,
    ExtractionPayloadViewerComponent
  ], styles: ["\n\n.logs-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.logs-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.logs-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.logs-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.logs-content[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.viewer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.viewer-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 1200px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n  flex-shrink: 0;\n}\n.viewer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a365d;\n}\n.viewer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n}\n.viewer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\napp-mirth-callback-viewer[_ngcontent-%COMP%], \napp-extraction-payload-viewer[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 768px) {\n  .logs-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .viewer-modal[_ngcontent-%COMP%] {\n    max-height: 95vh;\n    margin: 0.5rem;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogsComponent, [{
    type: Component,
    args: [{ selector: "app-logs", standalone: true, imports: [
      LogFiltersComponent,
      LogTableComponent,
      LogDetailComponent,
      PayloadViewerComponent,
      MirthCallbackViewerComponent,
      ExtractionPayloadViewerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="logs-container">\n  <div class="logs-header">\n    <h2>MHA PDS Logs</h2>\n    <p>View and search operational logs</p>\n  </div>\n\n  <div class="logs-content">\n    <app-log-filters />\n\n    <app-log-table (logSelected)="onLogSelected($event)" />\n\n    @if (showDetail()) {\n      <app-log-detail\n        (closed)="onCloseDetail()"\n        (viewPayload)="onViewPayload($event)"\n      />\n    }\n\n    @if (showPayload()) {\n      @if (isMirthCallback()) {\n        <div class="viewer-overlay" (click)="onClosePayload()">\n          <div class="viewer-modal" (click)="$event.stopPropagation()">\n            <div class="viewer-header">\n              <h3>Mirth Callback Details</h3>\n              <button class="close-btn" (click)="onClosePayload()" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n              </button>\n            </div>\n            <app-mirth-callback-viewer (closed)="onClosePayload()" />\n          </div>\n        </div>\n      } @else if (isDataExtraction()) {\n        <div class="viewer-overlay" (click)="onClosePayload()">\n          <div class="viewer-modal" (click)="$event.stopPropagation()">\n            <div class="viewer-header">\n              <h3>Extraction Payload Details</h3>\n              <button class="close-btn" (click)="onClosePayload()" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n              </button>\n            </div>\n            <app-extraction-payload-viewer (closed)="onClosePayload()" />\n          </div>\n        </div>\n      } @else {\n        <app-payload-viewer (closed)="onClosePayload()" />\n      }\n    }\n  </div>\n</div>\n', styles: ["/* src/app/logs/logs.scss */\n.logs-container {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.logs-header {\n  margin-bottom: 1.5rem;\n}\n.logs-header h2 {\n  margin: 0 0 0.25rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.logs-header p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.logs-content {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.viewer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.viewer-modal {\n  background: white;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 1200px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.viewer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n  flex-shrink: 0;\n}\n.viewer-header h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a365d;\n}\n.viewer-header .close-btn {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n}\n.viewer-header .close-btn:hover {\n  background: #e9ecef;\n  color: #495057;\n}\napp-mirth-callback-viewer,\napp-extraction-payload-viewer {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 768px) {\n  .logs-container {\n    padding: 1rem;\n  }\n  .viewer-modal {\n    max-height: 95vh;\n    margin: 0.5rem;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogsComponent, { className: "LogsComponent", filePath: "src/app/logs/logs.ts", lineNumber: 30 });
})();
export {
  LogsComponent
};
