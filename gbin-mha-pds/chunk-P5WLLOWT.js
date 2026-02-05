import {
  CclServiceWrapperService
} from "./chunk-HT5GMJXC.js";
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
} from "./chunk-ZGUDOQOJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  computed,
  inject,
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
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-N6ZQYAD3.js";
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
  page: 1,
  page_size: 50
};
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
      batch_id: log.batch_id ?? log.BATCH_ID ?? "",
      has_payload: log.has_payload ?? log.HAS_PAYLOAD ?? 0,
      record_cnt: log.record_cnt ?? log.RECORD_CNT ?? 0,
      error_cnt: log.error_cnt ?? log.ERROR_CNT ?? 0,
      error_message: log.error_message ?? log.ERROR_MESSAGE ?? "",
      parent_log_id: log.parent_log_id ?? log.PARENT_LOG_ID ?? 0
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
var LogFiltersComponent = class _LogFiltersComponent {
  logsService = inject(LogsService);
  // Filter options
  logTypeOptions = LOG_TYPE_OPTIONS;
  statusOptions = LOG_STATUS_OPTIONS;
  // Current filter values (bound to form)
  selectedLogType = "";
  selectedStatus = "";
  startDate = "";
  endDate = "";
  relatedScript = "";
  daysBack = 7;
  onApplyFilters() {
    const filters = {
      log_type: this.selectedLogType,
      status: this.selectedStatus,
      start_date: this.startDate,
      end_date: this.endDate,
      related_script: this.relatedScript,
      days_back: this.daysBack,
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
    this.logsService.resetFilters();
    this.logsService.loadLogs();
  }
  static \u0275fac = function LogFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogFiltersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogFiltersComponent, selectors: [["app-log-filters"]], decls: 36, vars: 6, consts: [[1, "log-filters"], [1, "filter-row"], [1, "filter-group"], ["for", "logType"], ["id", "logType", "name", "logType", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "status"], ["id", "status", "name", "status", 3, "ngModelChange", "ngModel"], ["for", "daysBack"], ["type", "number", "id", "daysBack", "name", "daysBack", "min", "1", "max", "365", 3, "ngModelChange", "ngModel"], ["for", "startDate"], ["type", "date", "id", "startDate", "name", "startDate", 3, "ngModelChange", "ngModel"], ["for", "endDate"], ["type", "date", "id", "endDate", "name", "endDate", 3, "ngModelChange", "ngModel"], ["for", "relatedScript"], ["type", "text", "id", "relatedScript", "name", "relatedScript", "placeholder", "Script name contains...", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], ["type", "button", 1, "btn-primary", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "click"]], template: function LogFiltersComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 16)(32, "button", 17);
      \u0275\u0275listener("click", function LogFiltersComponent_Template_button_click_32_listener() {
        return ctx.onApplyFilters();
      });
      \u0275\u0275text(33, " Apply Filters ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 18);
      \u0275\u0275listener("click", function LogFiltersComponent_Template_button_click_34_listener() {
        return ctx.onResetFilters();
      });
      \u0275\u0275text(35, " Reset ");
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
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.log-filters[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.filter-row[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 150px;\n  flex: 1;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n  color: #495057;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background: #1a365d;\n  color: white;\n  border: none;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2a4a7f;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #ced4da;\n}\n.filter-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogFiltersComponent, [{
    type: Component,
    args: [{ selector: "app-log-filters", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="log-filters">\n  <div class="filter-row">\n    <div class="filter-group">\n      <label for="logType">Log Type</label>\n      <select id="logType" [(ngModel)]="selectedLogType" name="logType">\n        @for (option of logTypeOptions; track option.value) {\n          <option [value]="option.value">{{ option.label }}</option>\n        }\n      </select>\n    </div>\n\n    <div class="filter-group">\n      <label for="status">Status</label>\n      <select id="status" [(ngModel)]="selectedStatus" name="status">\n        @for (option of statusOptions; track option.value) {\n          <option [value]="option.value">{{ option.label }}</option>\n        }\n      </select>\n    </div>\n\n    <div class="filter-group">\n      <label for="daysBack">Days Back</label>\n      <input\n        type="number"\n        id="daysBack"\n        [(ngModel)]="daysBack"\n        name="daysBack"\n        min="1"\n        max="365"\n      />\n    </div>\n  </div>\n\n  <div class="filter-row">\n    <div class="filter-group">\n      <label for="startDate">Start Date</label>\n      <input\n        type="date"\n        id="startDate"\n        [(ngModel)]="startDate"\n        name="startDate"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label for="endDate">End Date</label>\n      <input\n        type="date"\n        id="endDate"\n        [(ngModel)]="endDate"\n        name="endDate"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label for="relatedScript">Related Script</label>\n      <input\n        type="text"\n        id="relatedScript"\n        [(ngModel)]="relatedScript"\n        name="relatedScript"\n        placeholder="Script name contains..."\n      />\n    </div>\n  </div>\n\n  <div class="filter-actions">\n    <button type="button" class="btn-primary" (click)="onApplyFilters()">\n      Apply Filters\n    </button>\n    <button type="button" class="btn-secondary" (click)="onResetFilters()">\n      Reset\n    </button>\n  </div>\n</div>\n', styles: ["/* src/app/logs/components/log-filters.scss */\n.log-filters {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.filter-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n.filter-row:last-of-type {\n  margin-bottom: 0;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  min-width: 150px;\n  flex: 1;\n}\n.filter-group label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n  color: #495057;\n}\n.filter-group select,\n.filter-group input {\n  padding: 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.filter-group select:focus,\n.filter-group input:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group input[type=number] {\n  max-width: 100px;\n}\n.filter-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.filter-actions button {\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.filter-actions button.btn-primary {\n  background: #1a365d;\n  color: white;\n  border: none;\n}\n.filter-actions button.btn-primary:hover {\n  background: #2a4a7f;\n}\n.filter-actions button.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #ced4da;\n}\n.filter-actions button.btn-secondary:hover {\n  background: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n  }\n  .filter-group {\n    width: 100%;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogFiltersComponent, { className: "LogFiltersComponent", filePath: "src/app/logs/components/log-filters.ts", lineNumber: 17 });
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
function LogTableComponent_Conditional_3_For_24_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const mirthInfo_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mirthInfo_r4.episodeId);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15)(1, "span", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, LogTableComponent_Conditional_3_For_24_Conditional_8_Conditional_5_Template, 2, 1, "span", 28);
    \u0275\u0275domElementEnd();
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
    \u0275\u0275textInterpolate1(" HTTP ", mirthInfo_r4.httpStatus, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(mirthInfo_r4.episodeId ? 5 : -1);
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
function LogTableComponent_Conditional_3_For_24_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const log_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r3.error_cnt);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 23);
    \u0275\u0275text(1, "-");
    \u0275\u0275domElementEnd();
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 25);
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
    \u0275\u0275conditionalCreate(8, LogTableComponent_Conditional_3_For_24_Conditional_8_Template, 6, 5, "span", 15)(9, LogTableComponent_Conditional_3_For_24_Conditional_9_Template, 2, 1, "span", 16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td")(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "td", 18);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 19);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 20);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "td", 21);
    \u0275\u0275conditionalCreate(20, LogTableComponent_Conditional_3_For_24_Conditional_20_Template, 2, 1, "span", 22)(21, LogTableComponent_Conditional_3_For_24_Conditional_21_Template, 2, 0, "span", 23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "td", 24);
    \u0275\u0275conditionalCreate(23, LogTableComponent_Conditional_3_For_24_Conditional_23_Template, 2, 0, "span", 25);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
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
    \u0275\u0275advance(3);
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
    \u0275\u0275conditional(log_r3.error_cnt > 0 ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(log_r3.has_payload ? 23 : -1);
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
    \u0275\u0275repeaterCreate(23, LogTableComponent_Conditional_3_For_24_Template, 24, 16, "tr", 8, \u0275\u0275componentInstance().trackByLogId, true, LogTableComponent_Conditional_3_ForEmpty_25_Template, 3, 0, "tr");
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
   * Expected format: "Mirth callback: HTTP 201 -> ACCEPTED (Episode: EP-xxx, Updated: 3)"
   */
  getMirthCallbackInfo(log) {
    if (!this.isMirthCallback(log) || !log.summary) {
      return null;
    }
    const httpMatch = log.summary.match(/HTTP\s+(\d+)/);
    const statusMatch = log.summary.match(/->\s+(\w+)/);
    const episodeMatch = log.summary.match(/Episode:\s+([^,)]+)/);
    const updatedMatch = log.summary.match(/Updated:\s+(\d+)/);
    return {
      httpStatus: httpMatch ? parseInt(httpMatch[1], 10) : 0,
      submissionStatus: statusMatch ? statusMatch[1] : "UNKNOWN",
      episodeId: episodeMatch ? episodeMatch[1].trim() : "",
      updatedCount: updatedMatch ? parseInt(updatedMatch[1], 10) : 0
    };
  }
  /**
   * Get CSS class for Mirth callback HTTP status
   */
  getMirthStatusClass(info) {
    if (!info)
      return "";
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
  trackByLogId(index, log) {
    return log.log_id;
  }
  static \u0275fac = function LogTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogTableComponent, selectors: [["app-log-table"]], outputs: { logSelected: "logSelected" }, decls: 4, vars: 3, consts: [[1, "log-table-container"], [1, "loading-overlay"], [1, "error-message"], [1, "spinner"], [1, "error-icon"], [1, "table-info"], [1, "table-wrapper"], [1, "log-table"], [1, "log-row", 3, "mirth-callback-row"], [1, "pagination"], [1, "log-row", 3, "click"], [1, "log-type"], [1, "type-badge"], [1, "log-title"], [1, "title"], [1, "mirth-summary"], [1, "summary"], [1, "status-badge"], [1, "log-time"], [1, "log-duration"], [1, "log-count"], [1, "log-errors"], [1, "error-count"], [1, "no-errors"], [1, "log-actions"], ["title", "Has payload", 1, "payload-indicator"], [1, "mirth-status-badge"], [1, "mirth-icon"], ["title", "Episode ID", 1, "mirth-episode"], ["colspan", "8", 1, "no-data"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function LogTableComponent_Template(rf, ctx) {
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
  }, styles: ["\n\n.log-table-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.log-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.log-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.log-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.log-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.log-table[_ngcontent-%COMP%]   .log-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.log-table[_ngcontent-%COMP%]   .log-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.type-badge.type-mirth[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.log-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n}\n.log-title[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.log-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.log-duration[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.log-count[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.log-errors[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.log-errors[_ngcontent-%COMP%]   .error-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 24px;\n  padding: 0.125rem 0.375rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.log-errors[_ngcontent-%COMP%]   .no-errors[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.log-actions[_ngcontent-%COMP%]   .payload-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #1a365d;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  cursor: help;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.mirth-callback-row[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.mirth-callback-row[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff !important;\n}\n.mirth-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.mirth-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.mirth-status-badge[_ngcontent-%COMP%]   .mirth-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.mirth-status-badge.mirth-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.mirth-status-badge.mirth-rejected[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.mirth-status-badge.mirth-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.mirth-status-badge.mirth-unknown[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #546e7a;\n}\n.mirth-episode[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #6c757d;\n  font-family: monospace;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogTableComponent, [{
    type: Component,
    args: [{ selector: "app-log-table", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="log-table-container">\n  @if (loading()) {\n    <div class="loading-overlay">\n      <div class="spinner"></div>\n      <span>Loading logs...</span>\n    </div>\n  }\n\n  @if (error()) {\n    <div class="error-message">\n      <span class="error-icon">!</span>\n      <span>{{ error() }}</span>\n    </div>\n  }\n\n  @if (!loading() && !error()) {\n    <div class="table-info">\n      <span>Showing {{ logs().length }} of {{ totalCount() }} logs</span>\n    </div>\n\n    <div class="table-wrapper">\n      <table class="log-table">\n        <thead>\n          <tr>\n            <th>Type</th>\n            <th>Title</th>\n            <th>Status</th>\n            <th>Start Time</th>\n            <th>Duration</th>\n            <th>Records</th>\n            <th>Errors</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (log of logs(); track trackByLogId($index, log)) {\n            @let mirthInfo = getMirthCallbackInfo(log);\n            <tr (click)="onSelectLog(log)" class="log-row" [class.mirth-callback-row]="isMirthCallback(log)">\n              <td class="log-type">\n                <span class="type-badge" [class.type-mirth]="isMirthCallback(log)">{{ log.log_type }}</span>\n              </td>\n              <td class="log-title">\n                <span class="title">{{ log.title }}</span>\n                @if (isMirthCallback(log) && mirthInfo) {\n                  <span class="mirth-summary">\n                    <span class="mirth-status-badge" [class]="getMirthStatusClass(mirthInfo)">\n                      <span class="mirth-icon">{{ getMirthStatusIcon(mirthInfo) }}</span>\n                      HTTP {{ mirthInfo.httpStatus }}\n                    </span>\n                    @if (mirthInfo.episodeId) {\n                      <span class="mirth-episode" title="Episode ID">{{ mirthInfo.episodeId }}</span>\n                    }\n                  </span>\n                } @else if (log.summary) {\n                  <span class="summary">{{ log.summary }}</span>\n                }\n              </td>\n              <td>\n                <span class="status-badge" [class]="getStatusClass(log.status)">\n                  {{ log.status }}\n                </span>\n              </td>\n              <td class="log-time">{{ log.start_dt_tm_formatted }}</td>\n              <td class="log-duration">{{ formatDuration(log.duration_seconds) }}</td>\n              <td class="log-count">{{ log.record_cnt }}</td>\n              <td class="log-errors">\n                @if (log.error_cnt > 0) {\n                  <span class="error-count">{{ log.error_cnt }}</span>\n                } @else {\n                  <span class="no-errors">-</span>\n                }\n              </td>\n              <td class="log-actions">\n                @if (log.has_payload) {\n                  <span class="payload-indicator" title="Has payload">P</span>\n                }\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan="8" class="no-data">\n                No logs found matching the current filters\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n\n    @if (totalPages() > 1) {\n      <div class="pagination">\n        <button\n          class="page-btn"\n          [disabled]="!hasPrevPage()"\n          (click)="onPrevPage()"\n        >\n          Previous\n        </button>\n        <span class="page-info">\n          Page {{ currentPage() }} of {{ totalPages() }}\n        </span>\n        <button\n          class="page-btn"\n          [disabled]="!hasNextPage()"\n          (click)="onNextPage()"\n        >\n          Next\n        </button>\n      </div>\n    }\n  }\n</div>\n', styles: ["/* src/app/logs/components/log-table.scss */\n.log-table-container {\n  position: relative;\n}\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n}\n.error-message .error-icon {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.log-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.log-table th,\n.log-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.log-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.log-table .log-row {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.log-table .log-row:hover {\n  background: #f8f9fa;\n}\n.type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.type-badge.type-mirth {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.log-title .title {\n  display: block;\n  font-weight: 500;\n}\n.log-title .summary {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.log-time {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.log-duration {\n  font-family: monospace;\n}\n.log-count {\n  text-align: center;\n}\n.log-errors {\n  text-align: center;\n}\n.log-errors .error-count {\n  display: inline-block;\n  min-width: 24px;\n  padding: 0.125rem 0.375rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.log-errors .no-errors {\n  color: #adb5bd;\n}\n.log-actions .payload-indicator {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #1a365d;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  cursor: help;\n}\n.no-data {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.pagination .page-btn {\n  padding: 0.5rem 1rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pagination .page-btn:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.pagination .page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .page-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.mirth-callback-row {\n  background: #fafbff;\n}\n.mirth-callback-row:hover {\n  background: #f0f4ff !important;\n}\n.mirth-summary {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.mirth-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.mirth-status-badge .mirth-icon {\n  font-size: 0.75rem;\n}\n.mirth-status-badge.mirth-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.mirth-status-badge.mirth-rejected {\n  background: #fff3e0;\n  color: #e65100;\n}\n.mirth-status-badge.mirth-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.mirth-status-badge.mirth-unknown {\n  background: #eceff1;\n  color: #546e7a;\n}\n.mirth-episode {\n  font-size: 0.6875rem;\n  color: #6c757d;\n  font-family: monospace;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogTableComponent, { className: "LogTableComponent", filePath: "src/app/logs/components/log-table.ts", lineNumber: 20 });
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
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 44);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onCloseProgramLog());
    });
    \u0275\u0275domElementStart(4, "span", 6);
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(6, "pre", 45);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const pLog_r6 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pLog_r6.created_dt_tm_formatted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pLog_r6.program_log_text);
  }
}
function LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "p", 46);
    \u0275\u0275text(1, "No program log available for this entry.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 47);
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
    \u0275\u0275conditionalCreate(0, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_0_Template, 4, 0, "div", 40)(1, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_1_Template, 8, 2)(2, LogDetailComponent_Conditional_12_Conditional_61_Conditional_4_Conditional_2_Template, 4, 0);
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
    \u0275\u0275domElementStart(0, "div", 50);
    \u0275\u0275domListener("click", function LogDetailComponent_Conditional_12_Conditional_62_For_5_Template_div_click_0_listener() {
      const child_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onViewChildLog(child_r9.log_id));
    });
    \u0275\u0275domElementStart(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 53);
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
    \u0275\u0275domElementStart(3, "div", 48);
    \u0275\u0275repeaterCreate(4, LogDetailComponent_Conditional_12_Conditional_62_For_5_Template, 7, 5, "div", 49, \u0275\u0275componentInstance().trackByLogId, true);
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
    \u0275\u0275domElementEnd()()();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogDetailComponent, selectors: [["app-log-detail"]], outputs: { closed: "closed", viewPayload: "viewPayload" }, decls: 14, vars: 5, consts: [[1, "log-detail-panel"], [1, "panel-header"], [1, "header-actions"], [1, "fullscreen-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Close", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "loading-state"], [1, "panel-content"], [1, "empty-state"], ["points", "4 14 10 14 10 20"], ["points", "20 10 14 10 14 4"], ["x1", "14", "y1", "10", "x2", "21", "y2", "3"], ["x1", "3", "y1", "21", "x2", "10", "y2", "14"], ["points", "15 3 21 3 21 9"], ["points", "9 21 3 21 3 15"], ["x1", "21", "y1", "3", "x2", "14", "y2", "10"], [1, "spinner"], [1, "detail-section", "header-section"], [1, "log-type-status"], [1, "type-badge"], [1, "status-badge"], [1, "log-title"], [1, "log-summary"], [1, "detail-section"], [1, "detail-grid"], [1, "detail-item"], [1, "label"], [1, "value"], [1, "value", "duration"], [1, "detail-item", "full-width"], [1, "value", "code"], [1, "detail-section", "payload-section"], [1, "detail-section", "program-log-section"], [1, "detail-section", "audit-section"], [1, "value", "error-message"], [1, "payload-info"], [1, "view-payload-btn", 3, "click"], [1, "program-log-info"], [1, "view-program-log-btn", 3, "click"], [1, "loading-inline"], [1, "spinner-small"], [1, "program-log-header"], [1, "program-log-timestamp"], ["aria-label", "Close", 1, "close-btn-small", 3, "click"], [1, "program-log-content"], [1, "no-program-log"], [1, "close-btn-text", 3, "click"], [1, "child-logs"], [1, "child-log"], [1, "child-log", 3, "click"], [1, "child-type"], [1, "child-title"], [1, "child-status"]], template: function LogDetailComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(11, LogDetailComponent_Conditional_11_Template, 4, 0, "div", 7)(12, LogDetailComponent_Conditional_12_Template, 79, 25, "div", 8)(13, LogDetailComponent_Conditional_13_Template, 3, 0, "div", 9);
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
  }, styles: ['\n\n.log-detail-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 450px;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.log-detail-panel.fullscreen[_ngcontent-%COMP%] {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  max-width: none;\n  width: 100%;\n  padding: 2rem 4rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.header-section[_ngcontent-%COMP%]   .log-type-status[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.header-section[_ngcontent-%COMP%]   .log-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #212529;\n}\n.header-section[_ngcontent-%COMP%]   .log-summary[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.detail-item[_ngcontent-%COMP%]   .value.code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background: #f8f9fa;\n  padding: 0.125rem 0.25rem;\n  border-radius: 2px;\n}\n.detail-item[_ngcontent-%COMP%]   .value.duration[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-item[_ngcontent-%COMP%]   .value.error-value[_ngcontent-%COMP%] {\n  color: #721c24;\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   .value.error-message[_ngcontent-%COMP%] {\n  color: #721c24;\n  background: #f8d7da;\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.payload-section[_ngcontent-%COMP%]   .payload-info[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.payload-section[_ngcontent-%COMP%]   .view-payload-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.payload-section[_ngcontent-%COMP%]   .view-payload-btn[_ngcontent-%COMP%]:hover {\n  background: #2a4a7f;\n}\n.child-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .child-logs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.child-log[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.child-log[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.child-log[_ngcontent-%COMP%]   .child-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.child-log[_ngcontent-%COMP%]   .child-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.child-log[_ngcontent-%COMP%]   .child-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n}\n.audit-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n  border-radius: 0 0 0 0;\n}\n.fullscreen[_ngcontent-%COMP%]   .audit-section[_ngcontent-%COMP%] {\n  margin: 1.5rem -4rem -2rem -4rem;\n  padding: 1.5rem 4rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-info[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.program-log-section[_ngcontent-%COMP%]   .view-program-log-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #2d3748;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .view-program-log-btn[_ngcontent-%COMP%]:hover {\n  background: #4a5568;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 1.125rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-small[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-content[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  background: #1a202c;\n  color: #e2e8f0;\n  border-radius: 4px;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.fullscreen[_ngcontent-%COMP%]   .program-log-section[_ngcontent-%COMP%]   .program-log-content[_ngcontent-%COMP%] {\n  max-height: 600px;\n  font-size: 0.8125rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .no-program-log[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-text[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-text[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.loading-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  color: #6c757d;\n}\n.loading-inline[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .log-detail-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}'], changeDetection: 0 });
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
                <button class="close-btn-small" (click)="onCloseProgramLog()" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
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
      </section>
    </div>
  } @else {
    <div class="empty-state">
      <p>No log selected</p>
    </div>
  }
</div>
`, styles: ['/* src/app/logs/components/log-detail.scss */\n.log-detail-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 450px;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.log-detail-panel.fullscreen {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header .fullscreen-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .fullscreen-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header .fullscreen-btn svg {\n  display: block;\n}\n.panel-header .close-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen .panel-content {\n  max-width: none;\n  width: 100%;\n  padding: 2rem 4rem;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state .spinner,\n.empty-state .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-section {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-section h5 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.header-section .log-type-status {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.header-section .log-title {\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #212529;\n}\n.header-section .log-summary {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.fullscreen .detail-grid {\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-item .label {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.detail-item .value {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.detail-item .value.code {\n  font-family: monospace;\n  background: #f8f9fa;\n  padding: 0.125rem 0.25rem;\n  border-radius: 2px;\n}\n.detail-item .value.duration {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-item .value.error-value {\n  color: #721c24;\n  font-weight: 600;\n}\n.detail-item .value.error-message {\n  color: #721c24;\n  background: #f8d7da;\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.payload-section .payload-info {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.payload-section .view-payload-btn {\n  padding: 0.5rem 1rem;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.payload-section .view-payload-btn:hover {\n  background: #2a4a7f;\n}\n.child-logs {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.fullscreen .child-logs {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.child-log {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.child-log:hover {\n  background: #e9ecef;\n}\n.child-log .child-type {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.child-log .child-title {\n  flex: 1;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.child-log .child-status {\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n}\n.audit-section {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n  border-radius: 0 0 0 0;\n}\n.fullscreen .audit-section {\n  margin: 1.5rem -4rem -2rem -4rem;\n  padding: 1.5rem 4rem;\n}\n.program-log-section .program-log-info {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.program-log-section .view-program-log-btn {\n  padding: 0.5rem 1rem;\n  background: #2d3748;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.program-log-section .view-program-log-btn:hover {\n  background: #4a5568;\n}\n.program-log-section .program-log-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.program-log-section .program-log-timestamp {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.program-log-section .close-btn-small {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 1.125rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section .close-btn-small:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section .program-log-content {\n  margin: 0;\n  padding: 1rem;\n  background: #1a202c;\n  color: #e2e8f0;\n  border-radius: 4px;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.fullscreen .program-log-section .program-log-content {\n  max-height: 600px;\n  font-size: 0.8125rem;\n}\n.program-log-section .no-program-log {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.program-log-section .close-btn-text {\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section .close-btn-text:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.loading-inline {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  color: #6c757d;\n}\n.loading-inline .spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .log-detail-panel {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n'] }]
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
  const summary = buildSummary(submittedBundle, responseBundle, parsedResponseData, raw.responseStatusCode);
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
function buildSummary(submittedBundle, responseBundle, parsedResponseData, httpStatus) {
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

// src/app/logs/components/mirth-callback-viewer.ts
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
    \u0275\u0275domElementStart(3, "span", 24);
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
    \u0275\u0275domElementStart(4, "span", 25);
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
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_For_5_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const id_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(id_r6);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 32);
    \u0275\u0275repeaterCreate(1, MirthCallbackViewerComponent_Conditional_1_Conditional_65_For_5_Conditional_8_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const resource_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(resource_r5.ids);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_65_For_5_Template_button_click_1_listener() {
      const resource_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleResourceExpand(resource_r5.type));
    });
    \u0275\u0275domElementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_65_For_5_Conditional_8_Template, 3, 0, "ul", 32);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const resource_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isResourceExpanded(resource_r5.type) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", resource_r5.count, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isResourceExpanded(resource_r5.type) ? 8 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 27)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const resource_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r7.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", resource_r7.count, ")");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Accepted Resources");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 26);
    \u0275\u0275repeaterCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_6_For_4_Template, 5, 2, "div", 27, \u0275\u0275componentInstance().trackByResourceType, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.responseResourceSummary());
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_7_For_4_Template(rf, ctx) {
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
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Parse Warnings");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "ul", 33);
    \u0275\u0275repeaterCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_7_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(parsed_r2.parseErrors);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "h4");
    \u0275\u0275text(2, "Submitted Resources");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 26);
    \u0275\u0275repeaterCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_65_For_5_Template, 9, 4, "div", 27, \u0275\u0275componentInstance().trackByResourceType, true);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_6_Template, 5, 0);
    \u0275\u0275conditionalCreate(7, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Conditional_7_Template, 5, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
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
function MirthCallbackViewerComponent_Conditional_1_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 22)(1, "div", 34)(2, "button", 35);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_66_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(ctx_r2.formattedSubmittedData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "pre", 36)(5, "code");
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
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 22)(1, "div", 34)(2, "button", 35);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_67_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(ctx_r2.formattedResponseData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "pre", 36)(5, "code");
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
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2, "Data Validation Error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 40);
    \u0275\u0275text(4, "Channel 02");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 41)(6, "h4", 42);
    \u0275\u0275text(7, "FHIR Transformation Error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 43)(9, "div", 44)(10, "div", 45)(11, "span", 46);
    \u0275\u0275text(12, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 47);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 48);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("HTTP ", (tmp_7_0 = ctx_r2.parsedCallback()) == null ? null : tmp_7_0.httpStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r2.parsedCallback()) == null ? null : tmp_8_0.responseText);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const issues_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", issues_r11.errorCount, " ", issues_r11.errorCount === 1 ? "Error" : "Errors", " ");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const issues_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", issues_r11.warningCount, " ", issues_r11.warningCount === 1 ? "Warning" : "Warnings", " ");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const issues_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", issues_r11.infoCount, " Info ");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(issue_r12.messageId);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", issue_r12.count, "x");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPrimaryLocation(issue_r12));
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 44)(1, "div", 45)(2, "span", 46);
    \u0275\u0275text(3, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Conditional_4_Template, 2, 1, "span", 47);
    \u0275\u0275conditionalCreate(5, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Conditional_5_Template, 2, 1, "span", 51);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 52);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Conditional_8_Template, 2, 1, "div", 53);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(issue_r12.messageId ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r12.count > 1 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r12.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getPrimaryLocation(issue_r12) ? 8 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 41)(1, "h4", 42);
    \u0275\u0275text(2, "Errors");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 43);
    \u0275\u0275repeaterCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_For_5_Template, 9, 4, "div", 44, \u0275\u0275componentInstance().trackByIssueMessage, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const issues_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(issues_r11.errors);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(issue_r13.messageId);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", issue_r13.count, "x");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPrimaryLocation(issue_r13));
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 55)(1, "div", 45)(2, "span", 56);
    \u0275\u0275text(3, "warning");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Conditional_4_Template, 2, 1, "span", 47);
    \u0275\u0275conditionalCreate(5, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Conditional_5_Template, 2, 1, "span", 51);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 52);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Conditional_8_Template, 2, 1, "div", 53);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(issue_r13.messageId ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issue_r13.count > 1 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r13.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getPrimaryLocation(issue_r13) ? 8 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 41)(1, "h4", 54);
    \u0275\u0275text(2, "Warnings");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 43);
    \u0275\u0275repeaterCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_For_5_Template, 9, 4, "div", 55, \u0275\u0275componentInstance().trackByIssueMessage, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const issues_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(issues_r11.warnings);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", issue_r15.count, "x");
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getPrimaryLocation(issue_r15));
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 59)(1, "div", 45)(2, "span", 60);
    \u0275\u0275text(3, "info");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_For_2_Conditional_4_Template, 2, 1, "span", 51);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 52);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_For_2_Conditional_7_Template, 2, 1, "div", 53);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const issue_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(issue_r15.count > 1 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(issue_r15.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getPrimaryLocation(issue_r15) ? 7 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 43);
    \u0275\u0275repeaterCreate(1, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_For_2_Template, 8, 3, "div", 59, \u0275\u0275componentInstance().trackByIssueMessage, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const issues_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(issues_r11.information);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 41)(1, "button", 57);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleInfoSection());
    });
    \u0275\u0275domElementStart(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h4", 58);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Conditional_6_Template, 3, 0, "div", 43);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const issues_r11 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.showInfoSection() ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Information (", issues_r11.infoCount, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showInfoSection() ? 6 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38);
    \u0275\u0275conditionalCreate(1, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_1_Template, 2, 2, "span", 39);
    \u0275\u0275conditionalCreate(2, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_2_Template, 2, 2, "span", 49);
    \u0275\u0275conditionalCreate(3, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_3_Template, 2, 1, "span", 50);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_4_Template, 6, 0, "div", 41);
    \u0275\u0275conditionalCreate(5, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_5_Template, 6, 0, "div", 41);
    \u0275\u0275conditionalCreate(6, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Conditional_6_Template, 7, 3, "div", 41);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const issues_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(issues_r11.errorCount > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issues_r11.warningCount > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issues_r11.infoCount > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issues_r11.errors.length > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issues_r11.warnings.length > 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(issues_r11.information.length > 0 ? 6 : -1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_0_Template, 17, 2)(1, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Conditional_1_Template, 7, 6);
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.isChannel02() && ((tmp_6_0 = ctx_r2.parsedCallback()) == null ? null : tmp_6_0.responseText) ? 0 : 1);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 37)(1, "span", 61);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "No validation issues reported in the response.");
    \u0275\u0275domElementEnd()();
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "div", 23);
    \u0275\u0275conditionalCreate(2, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_2_Template, 2, 1)(3, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Conditional_3_Template, 5, 0, "div", 37);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(ctx_r2.groupedIssues());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasErrors() ? 2 : 3);
  }
}
function MirthCallbackViewerComponent_Conditional_1_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 22)(1, "div", 34)(2, "button", 35);
    \u0275\u0275domListener("click", function MirthCallbackViewerComponent_Conditional_1_Conditional_69_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(ctx_r2.formattedRawData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "pre", 36)(5, "code");
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
    \u0275\u0275conditionalCreate(65, MirthCallbackViewerComponent_Conditional_1_Conditional_65_Template, 8, 2, "div", 21);
    \u0275\u0275conditionalCreate(66, MirthCallbackViewerComponent_Conditional_1_Conditional_66_Template, 7, 4, "div", 22);
    \u0275\u0275conditionalCreate(67, MirthCallbackViewerComponent_Conditional_1_Conditional_67_Template, 7, 4, "div", 22);
    \u0275\u0275conditionalCreate(68, MirthCallbackViewerComponent_Conditional_1_Conditional_68_Template, 4, 2, "div", 23);
    \u0275\u0275conditionalCreate(69, MirthCallbackViewerComponent_Conditional_1_Conditional_69_Template, 7, 4, "div", 22);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const parsed_r17 = \u0275\u0275storeLet(ctx_r2.parsedCallback());
    const config_r18 = ctx_r2.statusConfig();
    \u0275\u0275advance(3);
    \u0275\u0275classMap(config_r18.class);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r18.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r18.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("HTTP ", parsed_r17 == null ? null : parsed_r17.httpStatus, " - ", parsed_r17 == null ? null : parsed_r17.httpStatusLine);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isChannel03() ? 11 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r17 == null ? null : parsed_r17.timestamp) ? ctx_r2.formatTimestamp(parsed_r17.timestamp) : "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.channelBadgeClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((parsed_r17 == null ? null : parsed_r17.channelName) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 37, parsed_r17 == null ? null : parsed_r17.messageId));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isChannel03() ? 29 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((parsed_r17 == null ? null : parsed_r17.summary == null ? null : parsed_r17.summary.patientName) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r17 == null ? null : parsed_r17.summary == null ? null : parsed_r17.summary.patientMRN) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r17 == null ? null : parsed_r17.summary == null ? null : parsed_r17.summary.episodeId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", parsed_r17 == null ? null : parsed_r17.summary == null ? null : parsed_r17.summary.resourcesSubmitted, " submitted ");
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r17 == null ? null : parsed_r17.status) === "SUCCESS" ? 51 : -1);
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
  hasErrors = computed(() => {
    return this.groupedIssues().totalCount > 0;
  }, ...ngDevMode ? [{ debugName: "hasErrors" }] : []);
  errorCount = computed(() => {
    return this.groupedIssues().errorCount;
  }, ...ngDevMode ? [{ debugName: "errorCount" }] : []);
  showInfoSection = signal(false, ...ngDevMode ? [{ debugName: "showInfoSection" }] : []);
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
  static \u0275fac = function MirthCallbackViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MirthCallbackViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MirthCallbackViewerComponent, selectors: [["app-mirth-callback-viewer"]], outputs: { closed: "closed" }, decls: 3, vars: 2, consts: [[1, "loading-overlay"], [1, "callback-viewer"], [1, "no-content"], [1, "loading-spinner"], [1, "callback-header"], [1, "status-banner"], [1, "status-icon"], [1, "status-label"], [1, "http-status"], [1, "header-grid"], [1, "header-item"], [1, "label"], [1, "value"], [1, "header-grid", "secondary"], [1, "patient-info"], [1, "info-item"], [1, "accepted"], [1, "tabs"], [1, "tab", 3, "click"], [1, "error-badge"], [1, "tab-content"], [1, "summary-content"], [1, "json-content"], [1, "errors-content"], [1, "value", "bundle-id"], [1, "value", "mono"], [1, "resource-list"], [1, "resource-item"], [1, "resource-toggle", 3, "click"], [1, "toggle-icon"], [1, "resource-type"], [1, "resource-count"], [1, "resource-ids"], [1, "parse-errors"], [1, "content-toolbar"], [1, "copy-btn", 3, "click"], [1, "json-pre"], [1, "no-errors"], [1, "severity-summary"], [1, "severity-chip", "chip-error"], [1, "severity-chip", "chip-channel"], [1, "severity-section"], [1, "section-header", "section-error"], [1, "errors-list"], [1, "error-item", "severity-error"], [1, "error-header"], [1, "severity-badge", "badge-error"], [1, "error-code"], [1, "error-message", "channel-02-error"], [1, "severity-chip", "chip-warning"], [1, "severity-chip", "chip-info"], [1, "occurrence-count"], [1, "error-message"], [1, "error-location"], [1, "section-header", "section-warning"], [1, "error-item", "severity-warning"], [1, "severity-badge", "badge-warning"], [1, "section-toggle", 3, "click"], [1, "section-header", "section-info"], [1, "error-item", "severity-info"], [1, "severity-badge", "badge-info"], [1, "success-icon"]], template: function MirthCallbackViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MirthCallbackViewerComponent_Conditional_0_Template, 4, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, MirthCallbackViewerComponent_Conditional_1_Template, 70, 39, "div", 1)(2, MirthCallbackViewerComponent_Conditional_2_Template, 3, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasContent() ? 1 : !ctx.loading() ? 2 : -1);
    }
  }, dependencies: [DecimalPipe], styles: ['\n\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.callback-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.callback-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-rejected[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-banner.status-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner.status-partial[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-unknown[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.status-banner[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.status-banner[_ngcontent-%COMP%]   .http-status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.header-grid.secondary[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .header-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item[_ngcontent-%COMP%]   .value.bundle-id[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.channel-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.channel-badge.channel-02[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.channel-badge.channel-03[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.patient-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .patient-info[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.patient-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .accepted[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab.has-errors[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.tab[_ngcontent-%COMP%]   .error-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #c62828;\n  color: white;\n  border-radius: 10px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-type[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-count[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.json-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.errors-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.severity-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.severity-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.severity-chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #b71c1c;\n}\n.severity-chip.chip-warning[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.severity-chip.chip-info[_ngcontent-%COMP%] {\n  background: #bbdefb;\n  color: #0d47a1;\n}\n.severity-chip.chip-channel[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.severity-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.severity-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin: 0 0 0.625rem 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 0.375rem;\n  border-bottom: 2px solid;\n}\n.section-header.section-error[_ngcontent-%COMP%] {\n  color: #c62828;\n  border-bottom-color: #c62828;\n}\n.section-header.section-warning[_ngcontent-%COMP%] {\n  color: #e65100;\n  border-bottom-color: #ef6c00;\n}\n.section-header.section-info[_ngcontent-%COMP%] {\n  color: #1565c0;\n  border-bottom-color: #1976d2;\n}\n.section-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n}\n.section-toggle[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.section-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.section-toggle[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.errors-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.error-item[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.75rem;\n  border-radius: 4px;\n  border-left: 4px solid;\n}\n.error-item.severity-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  border-left-color: #c62828;\n}\n.error-item.severity-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ef6c00;\n}\n.error-item.severity-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left-color: #1976d2;\n}\n.error-item[_ngcontent-%COMP%]   .error-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.375rem;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge.badge-error[_ngcontent-%COMP%] {\n  background: #ef9a9a;\n  color: #b71c1c;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge.badge-warning[_ngcontent-%COMP%] {\n  background: #ffcc80;\n  color: #bf360c;\n}\n.error-item[_ngcontent-%COMP%]   .severity-badge.badge-info[_ngcontent-%COMP%] {\n  background: #90caf9;\n  color: #0d47a1;\n}\n.error-item[_ngcontent-%COMP%]   .error-code[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  font-family: "Roboto Mono", monospace;\n}\n.error-item[_ngcontent-%COMP%]   .occurrence-count[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--text-secondary, #888);\n  margin-left: auto;\n}\n.error-item[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n  line-height: 1.4;\n}\n.error-item[_ngcontent-%COMP%]   .error-message.channel-02-error[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n.error-item[_ngcontent-%COMP%]   .error-location[_ngcontent-%COMP%] {\n  margin-top: 0.375rem;\n  font-size: 0.6875rem;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary, #888);\n  word-break: break-all;\n}\n.no-errors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #2e7d32;\n}\n.no-errors[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n.no-errors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.no-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}'], changeDetection: 0 });
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
        @let issues = groupedIssues();
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
              <!-- Severity Summary Bar -->
              <div class="severity-summary">
                @if (issues.errorCount > 0) {
                  <span class="severity-chip chip-error">
                    {{ issues.errorCount }} {{ issues.errorCount === 1 ? 'Error' : 'Errors' }}
                  </span>
                }
                @if (issues.warningCount > 0) {
                  <span class="severity-chip chip-warning">
                    {{ issues.warningCount }} {{ issues.warningCount === 1 ? 'Warning' : 'Warnings' }}
                  </span>
                }
                @if (issues.infoCount > 0) {
                  <span class="severity-chip chip-info">
                    {{ issues.infoCount }} Info
                  </span>
                }
              </div>

              <!-- Errors Section -->
              @if (issues.errors.length > 0) {
                <div class="severity-section">
                  <h4 class="section-header section-error">Errors</h4>
                  <div class="errors-list">
                    @for (issue of issues.errors; track trackByIssueMessage($index, issue)) {
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
                        @if (getPrimaryLocation(issue)) {
                          <div class="error-location">{{ getPrimaryLocation(issue) }}</div>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Warnings Section -->
              @if (issues.warnings.length > 0) {
                <div class="severity-section">
                  <h4 class="section-header section-warning">Warnings</h4>
                  <div class="errors-list">
                    @for (issue of issues.warnings; track trackByIssueMessage($index, issue)) {
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
                        @if (getPrimaryLocation(issue)) {
                          <div class="error-location">{{ getPrimaryLocation(issue) }}</div>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Information Section (collapsed by default) -->
              @if (issues.information.length > 0) {
                <div class="severity-section">
                  <button class="section-toggle" (click)="toggleInfoSection()">
                    <span class="toggle-icon">{{ showInfoSection() ? '\u25BC' : '\u25B6' }}</span>
                    <h4 class="section-header section-info">
                      Information ({{ issues.infoCount }})
                    </h4>
                  </button>
                  @if (showInfoSection()) {
                    <div class="errors-list">
                      @for (issue of issues.information; track trackByIssueMessage($index, issue)) {
                        <div class="error-item severity-info">
                          <div class="error-header">
                            <span class="severity-badge badge-info">info</span>
                            @if (issue.count > 1) {
                              <span class="occurrence-count">{{ issue.count }}x</span>
                            }
                          </div>
                          <div class="error-message">{{ issue.errorMessage }}</div>
                          @if (getPrimaryLocation(issue)) {
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
`, styles: ['/* src/app/logs/components/mirth-callback-viewer.scss */\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.callback-viewer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.callback-header {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-rejected {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-banner.status-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner.status-partial {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-unknown {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner .status-icon {\n  font-size: 1.25rem;\n}\n.status-banner .status-label {\n  font-size: 1rem;\n}\n.status-banner .http-status {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.header-grid.secondary {\n  grid-template-columns: 1fr;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .header-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item .value {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item .value.bundle-id {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.channel-badge {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.channel-badge.channel-02 {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.channel-badge.channel-03 {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.patient-info {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n@media (max-width: 768px) {\n  .patient-info {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.patient-info .info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.patient-info .info-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.patient-info .info-item .value {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.patient-info .info-item .value .accepted {\n  color: #2e7d32;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab.has-errors {\n  color: #c62828;\n}\n.tab .error-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #c62828;\n  color: white;\n  border-radius: 10px;\n}\n.tab-content {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content {\n  padding: 1rem;\n}\n.summary-content h4 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content h4:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item .resource-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item .resource-toggle:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item .resource-type {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item .resource-count {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item .resource-ids {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item .resource-ids li {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors li {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.json-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre code {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.errors-content {\n  padding: 1rem;\n}\n.severity-summary {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.severity-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.severity-chip.chip-error {\n  background: #ffcdd2;\n  color: #b71c1c;\n}\n.severity-chip.chip-warning {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.severity-chip.chip-info {\n  background: #bbdefb;\n  color: #0d47a1;\n}\n.severity-chip.chip-channel {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.severity-section {\n  margin-bottom: 1.25rem;\n}\n.severity-section:last-child {\n  margin-bottom: 0;\n}\n.section-header {\n  margin: 0 0 0.625rem 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding-bottom: 0.375rem;\n  border-bottom: 2px solid;\n}\n.section-header.section-error {\n  color: #c62828;\n  border-bottom-color: #c62828;\n}\n.section-header.section-warning {\n  color: #e65100;\n  border-bottom-color: #ef6c00;\n}\n.section-header.section-info {\n  color: #1565c0;\n  border-bottom-color: #1976d2;\n}\n.section-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  width: 100%;\n}\n.section-toggle:hover {\n  opacity: 0.8;\n}\n.section-toggle .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.section-toggle .section-header {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.errors-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.error-item {\n  padding: 0.625rem 0.75rem;\n  border-radius: 4px;\n  border-left: 4px solid;\n}\n.error-item.severity-error {\n  background: #ffebee;\n  border-left-color: #c62828;\n}\n.error-item.severity-warning {\n  background: #fff3e0;\n  border-left-color: #ef6c00;\n}\n.error-item.severity-info {\n  background: #e3f2fd;\n  border-left-color: #1976d2;\n}\n.error-item .error-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.375rem;\n}\n.error-item .severity-badge {\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.0625rem 0.375rem;\n  border-radius: 3px;\n}\n.error-item .severity-badge.badge-error {\n  background: #ef9a9a;\n  color: #b71c1c;\n}\n.error-item .severity-badge.badge-warning {\n  background: #ffcc80;\n  color: #bf360c;\n}\n.error-item .severity-badge.badge-info {\n  background: #90caf9;\n  color: #0d47a1;\n}\n.error-item .error-code {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  font-family: "Roboto Mono", monospace;\n}\n.error-item .occurrence-count {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--text-secondary, #888);\n  margin-left: auto;\n}\n.error-item .error-message {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n  line-height: 1.4;\n}\n.error-item .error-message.channel-02-error {\n  font-family: "Roboto Mono", monospace;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n.error-item .error-location {\n  margin-top: 0.375rem;\n  font-size: 0.6875rem;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-secondary, #888);\n  word-break: break-all;\n}\n.no-errors {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #2e7d32;\n}\n.no-errors .success-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n.no-errors p {\n  margin: 0;\n  font-size: 1rem;\n}\n.no-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content p {\n  margin: 0;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MirthCallbackViewerComponent, { className: "MirthCallbackViewerComponent", filePath: "src/app/logs/components/mirth-callback-viewer.ts", lineNumber: 32 });
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
function getStr(obj, key) {
  const val = obj[key];
  if (typeof val === "string") return val;
  return "";
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
    const firstName = getStr(client, "DE01_001_FIRST_NAME");
    const lastName = getStr(client, "DE01_003_LAST_NAME");
    const name = [lastName, firstName].filter(Boolean).join(", ");
    const program = ep.HEALTH_PROGRAM ? getStr(ep.HEALTH_PROGRAM, "DE09_002_PROGRAM_NAME") : "";
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
  const hasName = !!getStr(client, "DE01_001_FIRST_NAME");
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
    postalCode: ""
  };
  const client = episode.CLIENT;
  if (!client) return result;
  const firstName = getStr(client, "DE01_001_FIRST_NAME");
  const lastName = getStr(client, "DE01_003_LAST_NAME");
  result.name = [lastName, firstName].filter(Boolean).join(", ");
  result.mrn = getStr(client, "DE02_001_CLIENT_IDENTIFIER_MRN");
  result.ohip = getStr(client, "DE02_003_HEALTH_CARD_NUMBER");
  result.birthDate = getStr(client, "DE01_004_DATE_OF_BIRTH");
  result.estimatedDobFlag = getCodedLabel(client["DE01_005_ESTIMATED_DOB_FLAG"]);
  result.activeStatus = getCodedLabel(client["DE01_006_ACTIVE_STATUS"]);
  result.vendorIssuingId = getStr(client, "DE02_002_VENDOR_ISSUING_ID");
  result.hcnIssuingAuthority = getCodedLabel(client["DE02_004_HCN_ISSUING_AUTHORITY"]);
  result.identifierType = getCodedLabel(client["DE02_005_IDENTIFIER_TYPE"]);
  const address = client["ADDRESS"];
  if (address) {
    result.addressUse = getCodedLabel(address["DE03_001_ADDRESS_USE"]);
    const city = getStr(address, "DE03_002_CITY");
    const province = getCodedLabel(address["DE03_003_PROVINCE"]);
    result.address = [city, province].filter(Boolean).join(", ");
    result.postalCode = getStr(address, "DE03_004_POSTAL_CODE");
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
  result.status = getCodedLabel(eoc["DE06_002_EPISODE_OF_CARE_STATUS"]);
  result.firstContactDate = getStr(eoc, "DE06_003_FIRST_CONTACT_DATE");
  result.eligibilityScreeningDate = getStr(eoc, "DE06_004_ELIGIBILITY_SCREENING_DATE");
  result.initialAssessmentDate = getStr(eoc, "DE06_005_INITIAL_ASSESSMENT_DATE");
  const appt = eoc["APPOINTMENT"];
  if (appt) {
    result.scheduledAppointmentDate = getStr(appt, "DE06_006_SCHEDULED_APPOINTMENT_DATE");
    result.appointmentStatus = getCodedLabel(appt["APPOINTMENT_STATUS"]);
    result.cancellationReason = getCodedLabel(appt["DE06_007_CANCELLATION_REASON"]);
  }
  result.serviceInitiationDate = getStr(eoc, "DE06_008_SERVICE_INITIATION_DATE");
  result.serviceEnrollmentDate = getStr(eoc, "DE06_009_SERVICE_ENROLLMENT_DATE");
  result.serviceTerminationDate = getStr(eoc, "DE06_010_SERVICE_TERMINATION_DATE");
  result.serviceTerminationReason = getCodedLabel(eoc["DE06_011_SERVICE_TERMINATION_REASON"]);
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
  result.referralDate = getStr(ref, "DE05_002_REFERRAL_RECEIVED_DATE");
  result.referralSource = getStr(ref, "DE05_003_REFERRAL_SOURCE");
  result.referralSourceType = getCodedLabel(ref["DE05_004_REFERRAL_SOURCE_TYPE"]);
  result.referralType = getCodedLabel(ref["DE05_005_REFERRAL_TYPE"]);
  result.status = getCodedLabel(ref["DE05_STATUS"]);
  result.intent = getCodedLabel(ref["DE05_INTENT"]);
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
    result.organizationName = getStr(org, "DE07_003_ORGANIZATION_NAME");
    result.organizationId = getCodedValue(org["DE07_001_ORGANIZATION_NUMBER"]);
    result.mohOrganizationId = getCodedValue(org["DE07_002_MOH_ORGANIZATION_ID"]);
    result.organizationActiveFlag = getCodedLabel(org["DE07_004_ORGANIZATION_ACTIVE_FLAG"]);
  }
  if (site) {
    result.locationName = getStr(site, "DE08_002_SITE_NAME");
    result.siteCode = getCodedValue(site["DE08_001_SITE_NUMBER"]);
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
  result.programName = getStr(hp, "DE09_002_PROGRAM_NAME");
  result.programCode = getCodedValue(hp["DE09_003_FUNCTIONAL_CENTRE"]);
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
      encounterClass: getCodedLabel(hse["DE10_CLASS"]),
      status: getCodedLabel(hse["DE10_008_ENCOUNTER_STATUS"]),
      startDate: getStr(hse, "DE10_004_ENCOUNTER_DATE"),
      endDate: "",
      serviceType: getCodedLabel(hse["DE10_002_SERVICE_MODALITY"]),
      serviceModalityType: getCodedLabel(hse["DE10_003_SERVICE_MODALITY_TYPE"]),
      groupServiceId: getStr(hse, "DE10_005_GROUP_SERVICE_ID"),
      directMinutes: Number(hse["DE10_006_DIRECT_MINUTES"]) || 0,
      indirectMinutes: Number(hse["DE10_007_INDIRECT_MINUTES"]) || 0
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
  const effectiveDate = getStr(sdoh, "DE04_001_SDOH_EFFECTIVE_DATE");
  if (effectiveDate) {
    observations.push({
      code: "DE04.001",
      display: "SDOH Effective Date",
      value: effectiveDate,
      valueCode: "",
      system: ""
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
    if (code === "NO_CT_VALUE") {
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
      system
    });
  }
  const yearArrived = getStr(sdoh, "DE04_009_YEAR_ARRIVED_CANADA");
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
        system: ""
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
var _forTrack02 = ($index, $item) => $item.code;
var _forTrack1 = ($index, $item) => $item.type;
function ExtractionPayloadViewerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "div", 3);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading extraction data...");
    \u0275\u0275domElementEnd()();
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
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
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
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
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "Domain");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 22)(7, "span", 23);
    \u0275\u0275text(8, "Episodes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 22)(12, "span", 23);
    \u0275\u0275text(13, "Patient");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 22)(17, "span", 23);
    \u0275\u0275text(18, "MRN");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "span", 24);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()()();
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
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "Bundle ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 22)(7, "span", 23);
    \u0275\u0275text(8, "Bundle Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 22)(12, "span", 23);
    \u0275\u0275text(13, "Patient");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 22)(17, "span", 23);
    \u0275\u0275text(18, "MRN");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "span", 24);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()()();
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
    \u0275\u0275domElementStart(0, "button", 29);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_For_5_Template_button_click_0_listener() {
      const ep_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.selectEpisode(ep_r5.index));
    });
    \u0275\u0275domElementStart(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ep_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r5.selectedEpisodeIndex() === ep_r5.index);
    \u0275\u0275domProperty("title", ep_r5.episodeIdentifier + " - " + ep_r5.programName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r5.patientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r5.programName);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 26);
    \u0275\u0275text(2, "Episode:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 27);
    \u0275\u0275repeaterCreate(4, ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_For_5_Template, 5, 5, "button", 28, \u0275\u0275componentInstance().trackByEpisode, true);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r5.episodes());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 12)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const de_r7 = ctx.$implicit;
    \u0275\u0275domProperty("title", de_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r7.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r7.count);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.serviceEventCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.observationCount());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_1_For_37_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const bundle_r10 = ctx.$implicit;
    \u0275\u0275classMap("bundle-" + bundle_r10.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bundle_r10.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bundle_r10.profileCount, " profiles");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_1_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 40);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_1_For_37_Template_div_click_0_listener() {
      const ep_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r5.selectEpisode(ep_r9.index));
    });
    \u0275\u0275domElementStart(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 44)(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 47);
    \u0275\u0275repeaterCreate(12, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_1_For_37_For_13_Template, 5, 4, "div", 48, _forTrack1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 49)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()()();
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
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Submission Metadata");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 36)(3, "div", 37)(4, "span", 23);
    \u0275\u0275text(5, "Execution Start");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 37)(9, "span", 23);
    \u0275\u0275text(10, "Execution End");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 37)(14, "span", 23);
    \u0275\u0275text(15, "Domain");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "span", 24);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 37)(19, "span", 23);
    \u0275\u0275text(20, "Node");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "span", 24);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 37)(24, "span", 23);
    \u0275\u0275text(25, "Submit Fields");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "span", 24);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "div", 37)(29, "span", 23);
    \u0275\u0275text(30, "Total Episodes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "span", 24);
    \u0275\u0275text(32);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(33, "h4");
    \u0275\u0275text(34, "Episodes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "div", 38);
    \u0275\u0275repeaterCreate(36, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_1_For_37_Template, 19, 11, "div", 39, \u0275\u0275componentInstance().trackByEpisode, true);
    \u0275\u0275domElementEnd();
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
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_For_6_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r13);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 56);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_For_6_Conditional_10_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const de_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(de_r12.items);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 35)(1, "button", 53);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_For_6_Template_button_click_1_listener() {
      const de_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.toggleDataElementExpand(de_r12.code));
    });
    \u0275\u0275domElementStart(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(10, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_For_6_Conditional_10_Template, 3, 0, "ul", 56);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const de_r12 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.isDataElementExpanded(de_r12.code) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r12.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(de_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", de_r12.count, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isDataElementExpanded(de_r12.code) ? 10 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_For_4_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const id_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(id_r16);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 61);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_For_4_Conditional_8_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const resource_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(resource_r15.ids);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 58)(1, "button", 59);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_For_4_Template_button_click_1_listener() {
      const resource_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r5.toggleResourceExpand(resource_r15.type));
    });
    \u0275\u0275domElementStart(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_For_4_Conditional_8_Template, 3, 0, "ul", 61);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const resource_r15 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.isResourceExpanded(resource_r15.type) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r15.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", resource_r15.count, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isResourceExpanded(resource_r15.type) ? 8 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Resources by Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 57);
    \u0275\u0275repeaterCreate(3, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_For_4_Template, 9, 4, "div", 58, \u0275\u0275componentInstance().trackByResourceType, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.resourceSummary());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const error_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r17);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h4");
    \u0275\u0275text(1, "Parse Warnings");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "ul", 62);
    \u0275\u0275repeaterCreate(3, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_8_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(parsed_r2.parseErrors);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_1_Template, 38, 6);
    \u0275\u0275domElementStart(2, "h4");
    \u0275\u0275text(3, "Data Elements");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 34);
    \u0275\u0275repeaterCreate(5, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_For_6_Template, 11, 5, "div", 35, \u0275\u0275componentInstance().trackByDataElement, true);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_7_Template, 5, 0);
    \u0275\u0275conditionalCreate(8, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Conditional_8_Template, 5, 0);
    \u0275\u0275domElementEnd();
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
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "div", 63)(2, "h4");
    \u0275\u0275text(3, "DE01 - Client Information");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 36)(5, "div", 37)(6, "span", 23);
    \u0275\u0275text(7, "Full Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 37)(11, "span", 23);
    \u0275\u0275text(12, "Date of Birth");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 24);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 37)(16, "span", 23);
    \u0275\u0275text(17, "Estimated DOB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "span", 24);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 37)(21, "span", 23);
    \u0275\u0275text(22, "Active Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span", 24);
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(25, "div", 63)(26, "h4");
    \u0275\u0275text(27, "DE02 - Client Identifiers");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "div", 36)(29, "div", 37)(30, "span", 23);
    \u0275\u0275text(31, "MRN");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "span", 64);
    \u0275\u0275text(33);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 37)(35, "span", 23);
    \u0275\u0275text(36, "Vendor Issuing ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "span", 64);
    \u0275\u0275text(38);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(39, "div", 37)(40, "span", 23);
    \u0275\u0275text(41, "Health Card Number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "span", 64);
    \u0275\u0275text(43);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "div", 37)(45, "span", 23);
    \u0275\u0275text(46, "HCN Issuing Authority");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span", 24);
    \u0275\u0275text(48);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(49, "div", 37)(50, "span", 23);
    \u0275\u0275text(51, "Identifier Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "span", 24);
    \u0275\u0275text(53);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(54, "div", 63)(55, "h4");
    \u0275\u0275text(56, "DE03 - Client Address");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(57, "div", 36)(58, "div", 37)(59, "span", 23);
    \u0275\u0275text(60, "Address Use");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(61, "span", 24);
    \u0275\u0275text(62);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(63, "div", 65)(64, "span", 23);
    \u0275\u0275text(65, "City, Province");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(66, "span", 24);
    \u0275\u0275text(67);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(68, "div", 37)(69, "span", 23);
    \u0275\u0275text(70, "Postal Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(71, "span", 64);
    \u0275\u0275text(72);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.name) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.birthDate) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.estimatedDobFlag) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.activeStatus) || "N/A");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.mrn) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.vendorIssuingId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.ohip) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.hcnIssuingAuthority) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.identifierType) || "N/A");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.addressUse) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.address) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.patientInfo == null ? null : parsed_r2.summary.patientInfo.postalCode) || "N/A");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 37)(1, "span", 23);
    \u0275\u0275text(2, "Appointment Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.appointmentStatus);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 37)(1, "span", 23);
    \u0275\u0275text(2, "Cancellation Reason");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.cancellationReason);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 37)(1, "span", 23);
    \u0275\u0275text(2, "Termination Reason");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceTerminationReason);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "div", 63)(2, "h4");
    \u0275\u0275text(3, "DE05 - Referral Information");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 36)(5, "div", 37)(6, "span", 23);
    \u0275\u0275text(7, "Referral ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 64);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 37)(11, "span", 23);
    \u0275\u0275text(12, "Received Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 24);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 37)(16, "span", 23);
    \u0275\u0275text(17, "Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "span", 66);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 37)(21, "span", 23);
    \u0275\u0275text(22, "Source");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span", 24);
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "div", 37)(26, "span", 23);
    \u0275\u0275text(27, "Source Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "span", 24);
    \u0275\u0275text(29);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(30, "div", 37)(31, "span", 23);
    \u0275\u0275text(32, "Referral Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "span", 24);
    \u0275\u0275text(34);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(35, "div", 63)(36, "h4");
    \u0275\u0275text(37, "DE06 - Episode of Care");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "div", 36)(39, "div", 37)(40, "span", 23);
    \u0275\u0275text(41, "Episode ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "span", 64);
    \u0275\u0275text(43);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "div", 37)(45, "span", 23);
    \u0275\u0275text(46, "Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span", 66);
    \u0275\u0275text(48);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(49, "div", 37)(50, "span", 23);
    \u0275\u0275text(51, "First Contact Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "span", 24);
    \u0275\u0275text(53);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(54, "div", 37)(55, "span", 23);
    \u0275\u0275text(56, "Eligibility Screening");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(57, "span", 24);
    \u0275\u0275text(58);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(59, "div", 37)(60, "span", 23);
    \u0275\u0275text(61, "Initial Assessment");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "span", 24);
    \u0275\u0275text(63);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(64, "div", 37)(65, "span", 23);
    \u0275\u0275text(66, "Scheduled Appointment");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(67, "span", 24);
    \u0275\u0275text(68);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(69, ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Conditional_69_Template, 5, 1, "div", 37);
    \u0275\u0275conditionalCreate(70, ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Conditional_70_Template, 5, 1, "div", 37);
    \u0275\u0275domElementStart(71, "div", 37)(72, "span", 23);
    \u0275\u0275text(73, "Service Initiation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "span", 24);
    \u0275\u0275text(75);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(76, "div", 37)(77, "span", 23);
    \u0275\u0275text(78, "Service Enrollment");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(79, "span", 24);
    \u0275\u0275text(80);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(81, "div", 37)(82, "span", 23);
    \u0275\u0275text(83, "Service Termination");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(84, "span", 24);
    \u0275\u0275text(85);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(86, ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Conditional_86_Template, 5, 1, "div", 37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(87, "div", 63)(88, "h4");
    \u0275\u0275text(89, "DE07/DE08 - Provider Organization & Site");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(90, "div", 36)(91, "div", 37)(92, "span", 23);
    \u0275\u0275text(93, "Organization");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(94, "span", 24);
    \u0275\u0275text(95);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(96, "div", 37)(97, "span", 23);
    \u0275\u0275text(98, "Organization ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(99, "span", 64);
    \u0275\u0275text(100);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(101, "div", 37)(102, "span", 23);
    \u0275\u0275text(103, "MOH Organization ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(104, "span", 64);
    \u0275\u0275text(105);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(106, "div", 37)(107, "span", 23);
    \u0275\u0275text(108, "Active");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(109, "span", 24);
    \u0275\u0275text(110);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(111, "div", 37)(112, "span", 23);
    \u0275\u0275text(113, "Site Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(114, "span", 24);
    \u0275\u0275text(115);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(116, "div", 37)(117, "span", 23);
    \u0275\u0275text(118, "Site Number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(119, "span", 64);
    \u0275\u0275text(120);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(121, "div", 63)(122, "h4");
    \u0275\u0275text(123, "DE09 - Health Program");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(124, "div", 36)(125, "div", 37)(126, "span", 23);
    \u0275\u0275text(127, "Program Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(128, "span", 24);
    \u0275\u0275text(129);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(130, "div", 37)(131, "span", 23);
    \u0275\u0275text(132, "Program ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(133, "span", 64);
    \u0275\u0275text(134);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(135, "div", 37)(136, "span", 23);
    \u0275\u0275text(137, "Functional Centre");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(138, "span", 64);
    \u0275\u0275text(139);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const parsed_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralDate) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.status) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralSource) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralSourceType) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.referralInfo == null ? null : parsed_r2.summary.referralInfo.referralType) || "N/A");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.episodeId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.status) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.firstContactDate) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.eligibilityScreeningDate) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.initialAssessmentDate) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.scheduledAppointmentDate) || "N/A");
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.appointmentStatus) ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.cancellationReason) ? 70 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceInitiationDate) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceEnrollmentDate) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceTerminationDate) || "N/A");
    \u0275\u0275advance();
    \u0275\u0275conditional((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.episodeInfo == null ? null : parsed_r2.summary.episodeInfo.serviceTerminationReason) ? 86 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationName) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.mohOrganizationId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.organizationActiveFlag) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.locationName) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.providerInfo == null ? null : parsed_r2.summary.providerInfo.siteCode) || "N/A");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programName) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programId) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((parsed_r2 == null ? null : parsed_r2.summary == null ? null : parsed_r2.summary.programInfo == null ? null : parsed_r2.summary.programInfo.programCode) || "N/A");
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_1_For_2_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 74)(1, "span", 23);
    \u0275\u0275text(2, "Group Service ID");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const event_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r18.groupServiceId);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 69)(1, "div", 70)(2, "span", 71);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 72);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 73)(7, "div", 74)(8, "span", 23);
    \u0275\u0275text(9, "Encounter Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 74)(13, "span", 23);
    \u0275\u0275text(14, "Encounter Class");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 24);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "div", 74)(18, "span", 23);
    \u0275\u0275text(19, "Service Modality");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "span", 24);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(22, "div", 74)(23, "span", 23);
    \u0275\u0275text(24, "Modality Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "span", 24);
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "div", 74)(28, "span", 23);
    \u0275\u0275text(29, "Direct Minutes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "span", 24);
    \u0275\u0275text(31);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 74)(33, "span", 23);
    \u0275\u0275text(34, "Indirect Minutes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "span", 24);
    \u0275\u0275text(36);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(37, ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_1_For_2_Conditional_37_Template, 5, 1, "div", 74);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const event_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r18.encounterId || "Unknown");
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + event_r18.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r18.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(event_r18.startDate || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r18.encounterClass || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r18.serviceType || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r18.serviceModalityType || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r18.directMinutes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r18.indirectMinutes);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r18.groupServiceId ? 37 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_1_For_2_Template, 38, 11, "div", 69, \u0275\u0275componentInstance().trackByServiceEvent, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.serviceEvents());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 68)(1, "span", 75);
    \u0275\u0275text(2, "\u25CB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "No service events found in this payload.");
    \u0275\u0275domElementEnd()();
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_1_Template, 3, 0, "div", 67)(2, ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Conditional_2_Template, 5, 0, "div", 68);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.hasServiceEvents() ? 1 : 2);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 83);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const obs_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obs_r19.valueCode);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const obs_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obs_r19.system);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 78)(1, "div", 79)(2, "span", 80);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 82);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_2_Conditional_8_Template, 2, 1, "div", 83);
    \u0275\u0275conditionalCreate(9, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_2_Conditional_9_Template, 2, 1, "div", 84);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const obs_r19 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("unmapped", obs_r19.value.endsWith("[unmapped]"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(obs_r19.display || ctx_r5.getObservationName(obs_r19.code));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obs_r19.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obs_r19.value || "Not specified");
    \u0275\u0275advance();
    \u0275\u0275conditional(obs_r19.valueCode ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(obs_r19.system ? 9 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 76);
    \u0275\u0275repeaterCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_For_2_Template, 10, 7, "div", 77, \u0275\u0275componentInstance().trackByObservation, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.observations());
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 68)(1, "span", 75);
    \u0275\u0275text(2, "\u25CB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "No demographic observations found in this payload.");
    \u0275\u0275domElementEnd()();
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_1_Template, 3, 0, "div", 76)(2, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Conditional_2_Template, 5, 0, "div", 68);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.hasObservations() ? 1 : 2);
  }
}
function ExtractionPayloadViewerComponent_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 21)(1, "div", 85)(2, "button", 86);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Conditional_38_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.copyToClipboard(ctx_r5.formattedRawData()));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "pre", 87)(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
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
    \u0275\u0275domElementStart(2, "div", 1)(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, ExtractionPayloadViewerComponent_Conditional_1_Conditional_9_Template, 2, 1, "span", 8)(10, ExtractionPayloadViewerComponent_Conditional_1_Conditional_10_Template, 2, 1, "span", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, ExtractionPayloadViewerComponent_Conditional_1_Conditional_11_Template, 21, 4, "div", 9)(12, ExtractionPayloadViewerComponent_Conditional_1_Conditional_12_Template, 21, 4, "div", 9);
    \u0275\u0275conditionalCreate(13, ExtractionPayloadViewerComponent_Conditional_1_Conditional_13_Template, 6, 0, "div", 10);
    \u0275\u0275domElementStart(14, "div", 11);
    \u0275\u0275repeaterCreate(15, ExtractionPayloadViewerComponent_Conditional_1_For_16_Template, 5, 3, "span", 12, _forTrack02);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "div", 13)(18, "button", 14);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("summary"));
    });
    \u0275\u0275text(19, " Summary ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "button", 14);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("patient"));
    });
    \u0275\u0275text(21, " Patient (DE01-03) ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "button", 14);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("episode"));
    });
    \u0275\u0275text(23, " Episode (DE05-09) ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "button", 14);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("services"));
    });
    \u0275\u0275text(25, " Services (DE10) ");
    \u0275\u0275conditionalCreate(26, ExtractionPayloadViewerComponent_Conditional_1_Conditional_26_Template, 2, 1, "span", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "button", 14);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("demographics"));
    });
    \u0275\u0275text(28, " Demographics (DE04) ");
    \u0275\u0275conditionalCreate(29, ExtractionPayloadViewerComponent_Conditional_1_Conditional_29_Template, 2, 1, "span", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "button", 14);
    \u0275\u0275domListener("click", function ExtractionPayloadViewerComponent_Conditional_1_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActiveTab("raw"));
    });
    \u0275\u0275text(31, " Raw JSON ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 16);
    \u0275\u0275conditionalCreate(33, ExtractionPayloadViewerComponent_Conditional_1_Conditional_33_Template, 9, 3, "div", 17);
    \u0275\u0275conditionalCreate(34, ExtractionPayloadViewerComponent_Conditional_1_Conditional_34_Template, 73, 12, "div", 18);
    \u0275\u0275conditionalCreate(35, ExtractionPayloadViewerComponent_Conditional_1_Conditional_35_Template, 140, 27, "div", 18);
    \u0275\u0275conditionalCreate(36, ExtractionPayloadViewerComponent_Conditional_1_Conditional_36_Template, 3, 1, "div", 19);
    \u0275\u0275conditionalCreate(37, ExtractionPayloadViewerComponent_Conditional_1_Conditional_37_Template, 3, 1, "div", 20);
    \u0275\u0275conditionalCreate(38, ExtractionPayloadViewerComponent_Conditional_1_Conditional_38_Template, 7, 4, "div", 21);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275storeLet(ctx_r5.parsedPayload());
    const config_r21 = ctx_r5.statusConfig();
    \u0275\u0275advance();
    const info_r22 = \u0275\u0275storeLet(ctx_r5.submissionInfo());
    \u0275\u0275advance(3);
    \u0275\u0275classMap(config_r21.class);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r21.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(config_r21.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.isMHAPDS() ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.isMHAPDS() && info_r22 ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.hasMultipleEpisodes() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r5.dataElements());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "summary");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "patient");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "episode");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "services");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.hasServiceEvents() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "demographics");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.hasObservations() ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r5.activeTab() === "raw");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r5.activeTab() === "summary" ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "patient" ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "episode" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "services" ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "demographics" ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.activeTab() === "raw" ? 38 : -1);
  }
}
function ExtractionPayloadViewerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "No extraction data available or content could not be parsed.");
    \u0275\u0275domElementEnd()();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExtractionPayloadViewerComponent, selectors: [["app-extraction-payload-viewer"]], outputs: { closed: "closed" }, decls: 3, vars: 2, consts: [[1, "loading-overlay"], [1, "extraction-viewer"], [1, "no-content"], [1, "loading-spinner"], [1, "extraction-header"], [1, "status-banner"], [1, "status-icon"], [1, "status-label"], [1, "resource-count"], [1, "header-grid"], [1, "episode-selector"], [1, "data-element-pills"], [1, "de-pill", 3, "title"], [1, "tabs"], [1, "tab", 3, "click"], [1, "count-badge"], [1, "tab-content"], [1, "summary-content"], [1, "detail-content"], [1, "services-content"], [1, "demographics-content"], [1, "json-content"], [1, "header-item"], [1, "label"], [1, "value"], [1, "value", "bundle-id"], [1, "episode-selector-label"], [1, "episode-pills"], [1, "episode-pill", 3, "active", "title"], [1, "episode-pill", 3, "click", "title"], [1, "ep-name"], [1, "ep-program"], [1, "de-code"], [1, "de-count"], [1, "de-list"], [1, "de-item"], [1, "detail-grid"], [1, "detail-item"], [1, "episodes-overview"], [1, "episode-overview-card", 3, "active"], [1, "episode-overview-card", 3, "click"], [1, "ep-card-header"], [1, "ep-card-id"], [1, "ep-card-fields"], [1, "ep-card-details"], [1, "ep-card-patient"], [1, "ep-card-program"], [1, "ep-card-bundles"], [1, "bundle-tag", 3, "class"], [1, "ep-card-meta"], [1, "bundle-tag"], [1, "bundle-type"], [1, "bundle-profiles"], [1, "de-toggle", 3, "click"], [1, "toggle-icon"], [1, "de-name"], [1, "de-items"], [1, "resource-list"], [1, "resource-item"], [1, "resource-toggle", 3, "click"], [1, "resource-type"], [1, "resource-ids"], [1, "parse-errors"], [1, "detail-section"], [1, "value", "mono"], [1, "detail-item", "full-width"], [1, "value", "status-badge"], [1, "service-events-list"], [1, "no-data"], [1, "service-event-card"], [1, "event-header"], [1, "event-id"], [1, "event-status"], [1, "event-details"], [1, "event-item"], [1, "empty-icon"], [1, "observations-list"], [1, "observation-card", 3, "unmapped"], [1, "observation-card"], [1, "obs-header"], [1, "obs-code"], [1, "obs-de-number"], [1, "obs-value"], [1, "obs-value-code"], [1, "obs-system"], [1, "content-toolbar"], [1, "copy-btn", 3, "click"], [1, "json-pre"]], template: function ExtractionPayloadViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ExtractionPayloadViewerComponent_Conditional_0_Template, 4, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, ExtractionPayloadViewerComponent_Conditional_1_Template, 39, 29, "div", 1)(2, ExtractionPayloadViewerComponent_Conditional_2_Template, 3, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasContent() ? 1 : !ctx.loading() ? 2 : -1);
    }
  }, styles: ['\n\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.extraction-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  min-height: 0;\n}\n.extraction-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-complete[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-partial[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-empty[_ngcontent-%COMP%] {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner.status-invalid[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.status-banner[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.status-banner[_ngcontent-%COMP%]   .resource-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n@media (max-width: 768px) {\n  .header-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item[_ngcontent-%COMP%]   .value.bundle-id[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.episode-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  overflow-x: auto;\n}\n.episode-selector-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.episode-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  flex-wrap: nowrap;\n}\n.episode-pill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  background: var(--surface-color, #fff);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.episode-pill[_ngcontent-%COMP%]:hover {\n  background: #e3f2fd;\n  border-color: #90caf9;\n}\n.episode-pill.active[_ngcontent-%COMP%] {\n  background: #1976d2;\n  border-color: #1976d2;\n  color: #fff;\n}\n.episode-pill.active[_ngcontent-%COMP%]   .ep-name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.episode-pill.active[_ngcontent-%COMP%]   .ep-program[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.episode-pill[_ngcontent-%COMP%]   .ep-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-pill[_ngcontent-%COMP%]   .ep-program[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episodes-overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 0.75rem;\n}\n.episode-overview-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.episode-overview-card[_ngcontent-%COMP%]:hover {\n  border-color: #90caf9;\n  background: #f5f9ff;\n}\n.episode-overview-card.active[_ngcontent-%COMP%] {\n  border-color: #1976d2;\n  background: #e3f2fd;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-id[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-fields[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-patient[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-program[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-bundles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card[_ngcontent-%COMP%]   .ep-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n}\n.bundle-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.625rem;\n  background: #eceff1;\n  color: #546e7a;\n}\n.bundle-tag[_ngcontent-%COMP%]   .bundle-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.5625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.bundle-tag[_ngcontent-%COMP%]   .bundle-profiles[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.bundle-tag.bundle-pending[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.bundle-tag.bundle-submitted[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.bundle-tag.bundle-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.data-element-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n.de-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.625rem;\n  background: var(--surface-color, #fff);\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 12px;\n  font-size: 0.75rem;\n  cursor: default;\n}\n.de-pill[_ngcontent-%COMP%]   .de-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1976d2;\n}\n.de-pill[_ngcontent-%COMP%]   .de-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.125rem;\n  height: 1.125rem;\n  padding: 0 0.25rem;\n  background: #e3f2fd;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #1565c0;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab[_ngcontent-%COMP%]   .count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 10px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.de-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.de-item[_ngcontent-%COMP%]   .de-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.de-item[_ngcontent-%COMP%]   .de-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.de-item[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.de-item[_ngcontent-%COMP%]   .de-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1976d2;\n  min-width: 3rem;\n}\n.de-item[_ngcontent-%COMP%]   .de-name[_ngcontent-%COMP%] {\n  color: var(--text-primary, #333);\n}\n.de-item[_ngcontent-%COMP%]   .de-count[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  margin-left: auto;\n}\n.de-item[_ngcontent-%COMP%]   .de-items[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.de-item[_ngcontent-%COMP%]   .de-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-type[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item[_ngcontent-%COMP%]   .resource-count[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item[_ngcontent-%COMP%]   .resource-ids[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.detail-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.detail-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.detail-item[_ngcontent-%COMP%]   .value.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.services-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.service-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.service-event-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 0.75rem;\n  background: var(--surface-light, #f5f5f5);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.service-event-card[_ngcontent-%COMP%]   .event-id[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-finished[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-in-progress[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-planned[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-status.status-cancelled[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.75rem;\n  padding: 0.75rem;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n}\n.service-event-card[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .value.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n}\n.demographics-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.observations-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 0.75rem;\n}\n.observation-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n}\n.observation-card.unmapped[_ngcontent-%COMP%] {\n  border-color: #ffcc80;\n  background: #fff8e1;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-de-number[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 500;\n  color: #9e9e9e;\n  white-space: nowrap;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-primary, #333);\n  font-weight: 500;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-value-code[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #1565c0;\n  font-family: "Roboto Mono", monospace;\n}\n.observation-card[_ngcontent-%COMP%]   .obs-system[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n  font-family: monospace;\n  word-break: break-all;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-data[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.5;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.json-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.no-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtractionPayloadViewerComponent, [{
    type: Component,
    args: [{ selector: "app-extraction-payload-viewer", standalone: true, imports: [DecimalPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (loading()) {
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
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'episode'"
        (click)="setActiveTab('episode')">
        Episode (DE05-09)
      </button>
      <button
        class="tab"
        [class.active]="activeTab() === 'services'"
        (click)="setActiveTab('services')">
        Services (DE10)
        @if (hasServiceEvents()) {
          <span class="count-badge">{{ serviceEventCount() }}</span>
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
                      <div class="bundle-tag" [class]="'bundle-' + bundle.status">
                        <span class="bundle-type">{{ bundle.type }}</span>
                        <span class="bundle-profiles">{{ bundle.profileCount }} profiles</span>
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
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Full Name</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.name || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Date of Birth</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.birthDate || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Estimated DOB</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.estimatedDobFlag || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Active Status</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.activeStatus || 'N/A' }}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h4>DE02 - Client Identifiers</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">MRN</span>
                <span class="value mono">{{ parsed?.summary?.patientInfo?.mrn || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Vendor Issuing ID</span>
                <span class="value mono">{{ parsed?.summary?.patientInfo?.vendorIssuingId || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Health Card Number</span>
                <span class="value mono">{{ parsed?.summary?.patientInfo?.ohip || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">HCN Issuing Authority</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.hcnIssuingAuthority || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Identifier Type</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.identifierType || 'N/A' }}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h4>DE03 - Client Address</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Address Use</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.addressUse || 'N/A' }}</span>
              </div>
              <div class="detail-item full-width">
                <span class="label">City, Province</span>
                <span class="value">{{ parsed?.summary?.patientInfo?.address || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Postal Code</span>
                <span class="value mono">{{ parsed?.summary?.patientInfo?.postalCode || 'N/A' }}</span>
              </div>
            </div>
          </div>
        </div>
      }

      <!-- Episode Tab (DE05-09) -->
      @if (activeTab() === 'episode') {
        <div class="detail-content">
          <div class="detail-section">
            <h4>DE05 - Referral Information</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Referral ID</span>
                <span class="value mono">{{ parsed?.summary?.referralInfo?.referralId || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Received Date</span>
                <span class="value">{{ parsed?.summary?.referralInfo?.referralDate || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Status</span>
                <span class="value status-badge">{{ parsed?.summary?.referralInfo?.status || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Source</span>
                <span class="value">{{ parsed?.summary?.referralInfo?.referralSource || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Source Type</span>
                <span class="value">{{ parsed?.summary?.referralInfo?.referralSourceType || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Referral Type</span>
                <span class="value">{{ parsed?.summary?.referralInfo?.referralType || 'N/A' }}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h4>DE06 - Episode of Care</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Episode ID</span>
                <span class="value mono">{{ parsed?.summary?.episodeInfo?.episodeId || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Status</span>
                <span class="value status-badge">{{ parsed?.summary?.episodeInfo?.status || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">First Contact Date</span>
                <span class="value">{{ parsed?.summary?.episodeInfo?.firstContactDate || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Eligibility Screening</span>
                <span class="value">{{ parsed?.summary?.episodeInfo?.eligibilityScreeningDate || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Initial Assessment</span>
                <span class="value">{{ parsed?.summary?.episodeInfo?.initialAssessmentDate || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Scheduled Appointment</span>
                <span class="value">{{ parsed?.summary?.episodeInfo?.scheduledAppointmentDate || 'N/A' }}</span>
              </div>
              @if (parsed?.summary?.episodeInfo?.appointmentStatus) {
                <div class="detail-item">
                  <span class="label">Appointment Status</span>
                  <span class="value status-badge">{{ parsed?.summary?.episodeInfo?.appointmentStatus }}</span>
                </div>
              }
              @if (parsed?.summary?.episodeInfo?.cancellationReason) {
                <div class="detail-item">
                  <span class="label">Cancellation Reason</span>
                  <span class="value">{{ parsed?.summary?.episodeInfo?.cancellationReason }}</span>
                </div>
              }
              <div class="detail-item">
                <span class="label">Service Initiation</span>
                <span class="value">{{ parsed?.summary?.episodeInfo?.serviceInitiationDate || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Service Enrollment</span>
                <span class="value">{{ parsed?.summary?.episodeInfo?.serviceEnrollmentDate || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Service Termination</span>
                <span class="value">{{ parsed?.summary?.episodeInfo?.serviceTerminationDate || 'N/A' }}</span>
              </div>
              @if (parsed?.summary?.episodeInfo?.serviceTerminationReason) {
                <div class="detail-item">
                  <span class="label">Termination Reason</span>
                  <span class="value">{{ parsed?.summary?.episodeInfo?.serviceTerminationReason }}</span>
                </div>
              }
            </div>
          </div>

          <div class="detail-section">
            <h4>DE07/DE08 - Provider Organization & Site</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Organization</span>
                <span class="value">{{ parsed?.summary?.providerInfo?.organizationName || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Organization ID</span>
                <span class="value mono">{{ parsed?.summary?.providerInfo?.organizationId || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">MOH Organization ID</span>
                <span class="value mono">{{ parsed?.summary?.providerInfo?.mohOrganizationId || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Active</span>
                <span class="value">{{ parsed?.summary?.providerInfo?.organizationActiveFlag || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Site Name</span>
                <span class="value">{{ parsed?.summary?.providerInfo?.locationName || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Site Number</span>
                <span class="value mono">{{ parsed?.summary?.providerInfo?.siteCode || 'N/A' }}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h4>DE09 - Health Program</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Program Name</span>
                <span class="value">{{ parsed?.summary?.programInfo?.programName || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Program ID</span>
                <span class="value mono">{{ parsed?.summary?.programInfo?.programId || 'N/A' }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Functional Centre</span>
                <span class="value mono">{{ parsed?.summary?.programInfo?.programCode || 'N/A' }}</span>
              </div>
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
                  <div class="event-details">
                    <div class="event-item">
                      <span class="label">Encounter Date</span>
                      <span class="value">{{ event.startDate || 'N/A' }}</span>
                    </div>
                    <div class="event-item">
                      <span class="label">Encounter Class</span>
                      <span class="value">{{ event.encounterClass || 'N/A' }}</span>
                    </div>
                    <div class="event-item">
                      <span class="label">Service Modality</span>
                      <span class="value">{{ event.serviceType || 'N/A' }}</span>
                    </div>
                    <div class="event-item">
                      <span class="label">Modality Type</span>
                      <span class="value">{{ event.serviceModalityType || 'N/A' }}</span>
                    </div>
                    <div class="event-item">
                      <span class="label">Direct Minutes</span>
                      <span class="value">{{ event.directMinutes }}</span>
                    </div>
                    <div class="event-item">
                      <span class="label">Indirect Minutes</span>
                      <span class="value">{{ event.indirectMinutes }}</span>
                    </div>
                    @if (event.groupServiceId) {
                      <div class="event-item">
                        <span class="label">Group Service ID</span>
                        <span class="value mono">{{ event.groupServiceId }}</span>
                      </div>
                    }
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
            <div class="observations-list">
              @for (obs of observations(); track trackByObservation($index, obs)) {
                <div class="observation-card" [class.unmapped]="obs.value.endsWith('[unmapped]')">
                  <div class="obs-header">
                    <span class="obs-code">{{ obs.display || getObservationName(obs.code) }}</span>
                    <span class="obs-de-number">{{ obs.code }}</span>
                  </div>
                  <div class="obs-value">{{ obs.value || 'Not specified' }}</div>
                  @if (obs.valueCode) {
                    <div class="obs-value-code">{{ obs.valueCode }}</div>
                  }
                  @if (obs.system) {
                    <div class="obs-system">{{ obs.system }}</div>
                  }
                </div>
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
`, styles: ['/* src/app/logs/components/extraction-payload-viewer.scss */\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n  color: var(--text-secondary, #666);\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border-color, #e0e0e0);\n  border-top-color: var(--primary-color, #1976d2);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.extraction-viewer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  min-height: 0;\n}\n.extraction-header {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n}\n.status-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n}\n.status-banner.status-complete {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-banner.status-partial {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.status-banner.status-empty {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status-banner.status-invalid {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-banner .status-icon {\n  font-size: 1.25rem;\n}\n.status-banner .status-label {\n  font-size: 1rem;\n}\n.status-banner .resource-count {\n  margin-left: auto;\n  font-size: 0.875rem;\n  opacity: 0.8;\n}\n.header-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n@media (max-width: 768px) {\n  .header-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.header-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.header-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-item .value {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n  word-break: break-all;\n}\n.header-item .value.bundle-id {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1a365d;\n  font-family: "Roboto Mono", monospace;\n}\n.header-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.episode-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background: var(--surface-light, #fafafa);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  overflow-x: auto;\n}\n.episode-selector-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.episode-pills {\n  display: flex;\n  gap: 0.375rem;\n  flex-wrap: nowrap;\n}\n.episode-pill {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  background: var(--surface-color, #fff);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.episode-pill:hover {\n  background: #e3f2fd;\n  border-color: #90caf9;\n}\n.episode-pill.active {\n  background: #1976d2;\n  border-color: #1976d2;\n  color: #fff;\n}\n.episode-pill.active .ep-name {\n  color: #fff;\n}\n.episode-pill.active .ep-program {\n  color: rgba(255, 255, 255, 0.8);\n}\n.episode-pill .ep-name {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-pill .ep-program {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episodes-overview {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 0.75rem;\n}\n.episode-overview-card {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.episode-overview-card:hover {\n  border-color: #90caf9;\n  background: #f5f9ff;\n}\n.episode-overview-card.active {\n  border-color: #1976d2;\n  background: #e3f2fd;\n}\n.episode-overview-card .ep-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card .ep-card-id {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n}\n.episode-overview-card .ep-card-fields {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card .ep-card-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card .ep-card-patient {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.episode-overview-card .ep-card-program {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n}\n.episode-overview-card .ep-card-bundles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-bottom: 0.375rem;\n}\n.episode-overview-card .ep-card-meta {\n  display: flex;\n  gap: 0.75rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n}\n.bundle-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.625rem;\n  background: #eceff1;\n  color: #546e7a;\n}\n.bundle-tag .bundle-type {\n  font-weight: 600;\n  font-size: 0.5625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.bundle-tag .bundle-profiles {\n  opacity: 0.7;\n}\n.bundle-tag.bundle-pending {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.bundle-tag.bundle-submitted {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.bundle-tag.bundle-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.data-element-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: var(--surface-light, #fafafa);\n}\n.de-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.625rem;\n  background: var(--surface-color, #fff);\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 12px;\n  font-size: 0.75rem;\n  cursor: default;\n}\n.de-pill .de-code {\n  font-weight: 600;\n  color: #1976d2;\n}\n.de-pill .de-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.125rem;\n  height: 1.125rem;\n  padding: 0 0.25rem;\n  background: #e3f2fd;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #1565c0;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--border-color, #e0e0e0);\n  background: var(--surface-color, #fff);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.tab {\n  padding: 0.75rem 1.25rem;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tab:hover {\n  background: var(--surface-hover, #f5f5f5);\n  color: var(--text-primary, #333);\n}\n.tab.active {\n  color: var(--primary-color, #1976d2);\n  font-weight: 500;\n}\n.tab.active::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-color, #1976d2);\n}\n.tab .count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 10px;\n}\n.tab-content {\n  flex: 1;\n  overflow: auto;\n  background: var(--surface-color, #fff);\n}\n.summary-content {\n  padding: 1rem;\n}\n.summary-content h4 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-content h4:not(:first-child) {\n  margin-top: 1.5rem;\n}\n.de-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.de-item .de-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.de-item .de-toggle:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.de-item .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.de-item .de-code {\n  font-weight: 600;\n  color: #1976d2;\n  min-width: 3rem;\n}\n.de-item .de-name {\n  color: var(--text-primary, #333);\n}\n.de-item .de-count {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n  margin-left: auto;\n}\n.de-item .de-items {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.de-item .de-items li {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.resource-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.resource-item .resource-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  border: none;\n  background: var(--surface-light, #f5f5f5);\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n}\n.resource-item .resource-toggle:hover {\n  background: var(--surface-hover, #eeeeee);\n}\n.resource-item .toggle-icon {\n  font-size: 0.625rem;\n  color: var(--text-secondary, #666);\n}\n.resource-item .resource-type {\n  font-weight: 500;\n  color: var(--text-primary, #333);\n}\n.resource-item .resource-count {\n  color: var(--text-secondary, #666);\n  font-size: 0.875rem;\n}\n.resource-item .resource-ids {\n  margin: 0.25rem 0 0 1.5rem;\n  padding: 0.5rem;\n  background: var(--surface-color, #fff);\n  border-radius: 4px;\n  list-style: none;\n}\n.resource-item .resource-ids li {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  padding: 0.25rem 0;\n  word-break: break-all;\n  font-family: monospace;\n}\n.parse-errors {\n  margin: 0;\n  padding: 0 0 0 1.25rem;\n}\n.parse-errors li {\n  font-size: 0.875rem;\n  color: #e65100;\n  padding: 0.25rem 0;\n}\n.detail-content {\n  padding: 1rem;\n}\n.detail-section {\n  margin-bottom: 1.5rem;\n}\n.detail-section:last-child {\n  margin-bottom: 0;\n}\n.detail-section h4 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #333);\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-item .label {\n  font-size: 0.75rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-item .value {\n  font-size: 0.875rem;\n  color: var(--text-primary, #333);\n}\n.detail-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.detail-item .value.status-badge {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  background: #e3f2fd;\n  color: #1565c0;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.services-content {\n  padding: 1rem;\n}\n.service-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.service-event-card {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.service-event-card .event-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 0.75rem;\n  background: var(--surface-light, #f5f5f5);\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n}\n.service-event-card .event-id {\n  font-weight: 500;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8125rem;\n}\n.service-event-card .event-status {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n}\n.service-event-card .event-status.status-finished {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.service-event-card .event-status.status-in-progress {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.service-event-card .event-status.status-planned {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.service-event-card .event-status.status-cancelled {\n  background: #ffebee;\n  color: #c62828;\n}\n.service-event-card .event-details {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.75rem;\n  padding: 0.75rem;\n}\n.service-event-card .event-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.service-event-card .event-item .label {\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #666);\n  text-transform: uppercase;\n}\n.service-event-card .event-item .value {\n  font-size: 0.8125rem;\n  color: var(--text-primary, #333);\n}\n.service-event-card .event-item .value.mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.75rem;\n}\n.demographics-content {\n  padding: 1rem;\n}\n.observations-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 0.75rem;\n}\n.observation-card {\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 6px;\n  padding: 0.75rem;\n  background: var(--surface-light, #fafafa);\n}\n.observation-card.unmapped {\n  border-color: #ffcc80;\n  background: #fff8e1;\n}\n.observation-card .obs-header {\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.observation-card .obs-code {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1976d2;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.observation-card .obs-de-number {\n  font-size: 0.625rem;\n  font-weight: 500;\n  color: #9e9e9e;\n  white-space: nowrap;\n}\n.observation-card .obs-value {\n  font-size: 0.9rem;\n  color: var(--text-primary, #333);\n  font-weight: 500;\n}\n.observation-card .obs-value-code {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: #1565c0;\n  font-family: "Roboto Mono", monospace;\n}\n.observation-card .obs-system {\n  margin-top: 0.25rem;\n  font-size: 0.6875rem;\n  color: var(--text-secondary, #999);\n  font-family: monospace;\n  word-break: break-all;\n}\n.no-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-data .empty-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.5;\n}\n.no-data p {\n  margin: 0;\n  font-size: 1rem;\n}\n.json-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.content-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  background: var(--surface-light, #fafafa);\n}\n.copy-btn {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--border-color, #e0e0e0);\n  border-radius: 4px;\n  background: var(--surface-color, #fff);\n  color: var(--text-primary, #333);\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.copy-btn:hover {\n  background: var(--surface-hover, #f5f5f5);\n}\n.copy-btn.success {\n  background: #e8f5e9;\n  border-color: #4caf50;\n  color: #2e7d32;\n}\n.json-pre {\n  margin: 0;\n  padding: 1rem;\n  overflow: auto;\n  flex: 1;\n  background: #1e1e1e;\n  color: #d4d4d4;\n}\n.json-pre code {\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  white-space: pre;\n}\n.no-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--text-secondary, #666);\n}\n.no-content p {\n  margin: 0;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtractionPayloadViewerComponent, { className: "ExtractionPayloadViewerComponent", filePath: "src/app/logs/components/extraction-payload-viewer.ts", lineNumber: 34 });
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
    this.logsService.loadLogs();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogsComponent, { className: "LogsComponent", filePath: "src/app/logs/logs.ts", lineNumber: 29 });
})();
export {
  LogsComponent
};
