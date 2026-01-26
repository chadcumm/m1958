import {
  CclServiceWrapperService
} from "./chunk-OW7H3GAM.js";
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
} from "./chunk-QDEHJEDS.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UUZPJP4Q.js";
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
function LogTableComponent_Conditional_3_For_24_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const log_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r3.summary);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const log_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r3.error_cnt);
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 22);
    \u0275\u0275text(1, "-");
    \u0275\u0275domElementEnd();
  }
}
function LogTableComponent_Conditional_3_For_24_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 24);
    \u0275\u0275text(1, "P");
    \u0275\u0275domElementEnd();
  }
}
function LogTableComponent_Conditional_3_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 10);
    \u0275\u0275domListener("click", function LogTableComponent_Conditional_3_For_24_Template_tr_click_0_listener() {
      const log_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectLog(log_r3));
    });
    \u0275\u0275domElementStart(1, "td", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td", 13)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, LogTableComponent_Conditional_3_For_24_Conditional_7_Template, 2, 1, "span", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td")(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "td", 17);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 18);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 19);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 20);
    \u0275\u0275conditionalCreate(18, LogTableComponent_Conditional_3_For_24_Conditional_18_Template, 2, 1, "span", 21)(19, LogTableComponent_Conditional_3_For_24_Conditional_19_Template, 2, 0, "span", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "td", 23);
    \u0275\u0275conditionalCreate(21, LogTableComponent_Conditional_3_For_24_Conditional_21_Template, 2, 0, "span", 24);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const log_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r3.log_type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(log_r3.summary ? 7 : -1);
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
    \u0275\u0275conditional(log_r3.error_cnt > 0 ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(log_r3.has_payload ? 21 : -1);
  }
}
function LogTableComponent_Conditional_3_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, " No logs found matching the current filters ");
    \u0275\u0275domElementEnd()();
  }
}
function LogTableComponent_Conditional_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9)(1, "button", 26);
    \u0275\u0275domListener("click", function LogTableComponent_Conditional_3_Conditional_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPrevPage());
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 26);
    \u0275\u0275domListener("click", function LogTableComponent_Conditional_3_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
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
    \u0275\u0275repeaterCreate(23, LogTableComponent_Conditional_3_For_24_Template, 22, 11, "tr", 8, \u0275\u0275componentInstance().trackByLogId, true, LogTableComponent_Conditional_3_ForEmpty_25_Template, 3, 0, "tr");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogTableComponent, selectors: [["app-log-table"]], outputs: { logSelected: "logSelected" }, decls: 4, vars: 3, consts: [[1, "log-table-container"], [1, "loading-overlay"], [1, "error-message"], [1, "spinner"], [1, "error-icon"], [1, "table-info"], [1, "table-wrapper"], [1, "log-table"], [1, "log-row"], [1, "pagination"], [1, "log-row", 3, "click"], [1, "log-type"], [1, "type-badge"], [1, "log-title"], [1, "title"], [1, "summary"], [1, "status-badge"], [1, "log-time"], [1, "log-duration"], [1, "log-count"], [1, "log-errors"], [1, "error-count"], [1, "no-errors"], [1, "log-actions"], ["title", "Has payload", 1, "payload-indicator"], ["colspan", "8", 1, "no-data"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function LogTableComponent_Template(rf, ctx) {
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
  }, styles: ["\n\n.log-table-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.log-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.log-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.log-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.log-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.log-table[_ngcontent-%COMP%]   .log-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.log-table[_ngcontent-%COMP%]   .log-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.log-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n}\n.log-title[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.log-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.log-duration[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.log-count[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.log-errors[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.log-errors[_ngcontent-%COMP%]   .error-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 24px;\n  padding: 0.125rem 0.375rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.log-errors[_ngcontent-%COMP%]   .no-errors[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.log-actions[_ngcontent-%COMP%]   .payload-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #1a365d;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  cursor: help;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogTableComponent, [{
    type: Component,
    args: [{ selector: "app-log-table", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="log-table-container">\n  @if (loading()) {\n    <div class="loading-overlay">\n      <div class="spinner"></div>\n      <span>Loading logs...</span>\n    </div>\n  }\n\n  @if (error()) {\n    <div class="error-message">\n      <span class="error-icon">!</span>\n      <span>{{ error() }}</span>\n    </div>\n  }\n\n  @if (!loading() && !error()) {\n    <div class="table-info">\n      <span>Showing {{ logs().length }} of {{ totalCount() }} logs</span>\n    </div>\n\n    <div class="table-wrapper">\n      <table class="log-table">\n        <thead>\n          <tr>\n            <th>Type</th>\n            <th>Title</th>\n            <th>Status</th>\n            <th>Start Time</th>\n            <th>Duration</th>\n            <th>Records</th>\n            <th>Errors</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (log of logs(); track trackByLogId($index, log)) {\n            <tr (click)="onSelectLog(log)" class="log-row">\n              <td class="log-type">\n                <span class="type-badge">{{ log.log_type }}</span>\n              </td>\n              <td class="log-title">\n                <span class="title">{{ log.title }}</span>\n                @if (log.summary) {\n                  <span class="summary">{{ log.summary }}</span>\n                }\n              </td>\n              <td>\n                <span class="status-badge" [class]="getStatusClass(log.status)">\n                  {{ log.status }}\n                </span>\n              </td>\n              <td class="log-time">{{ log.start_dt_tm_formatted }}</td>\n              <td class="log-duration">{{ formatDuration(log.duration_seconds) }}</td>\n              <td class="log-count">{{ log.record_cnt }}</td>\n              <td class="log-errors">\n                @if (log.error_cnt > 0) {\n                  <span class="error-count">{{ log.error_cnt }}</span>\n                } @else {\n                  <span class="no-errors">-</span>\n                }\n              </td>\n              <td class="log-actions">\n                @if (log.has_payload) {\n                  <span class="payload-indicator" title="Has payload">P</span>\n                }\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan="8" class="no-data">\n                No logs found matching the current filters\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n\n    @if (totalPages() > 1) {\n      <div class="pagination">\n        <button\n          class="page-btn"\n          [disabled]="!hasPrevPage()"\n          (click)="onPrevPage()"\n        >\n          Previous\n        </button>\n        <span class="page-info">\n          Page {{ currentPage() }} of {{ totalPages() }}\n        </span>\n        <button\n          class="page-btn"\n          [disabled]="!hasNextPage()"\n          (click)="onNextPage()"\n        >\n          Next\n        </button>\n      </div>\n    }\n  }\n</div>\n', styles: ["/* src/app/logs/components/log-table.scss */\n.log-table-container {\n  position: relative;\n}\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n}\n.error-message .error-icon {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.log-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.log-table th,\n.log-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.log-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.log-table .log-row {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.log-table .log-row:hover {\n  background: #f8f9fa;\n}\n.type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.log-title .title {\n  display: block;\n  font-weight: 500;\n}\n.log-title .summary {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.log-time {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.log-duration {\n  font-family: monospace;\n}\n.log-count {\n  text-align: center;\n}\n.log-errors {\n  text-align: center;\n}\n.log-errors .error-count {\n  display: inline-block;\n  min-width: 24px;\n  padding: 0.125rem 0.375rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.log-errors .no-errors {\n  color: #adb5bd;\n}\n.log-actions .payload-indicator {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #1a365d;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n  cursor: help;\n}\n.no-data {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n.pagination .page-btn {\n  padding: 0.5rem 1rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pagination .page-btn:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.pagination .page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .page-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogTableComponent, { className: "LogTableComponent", filePath: "src/app/logs/components/log-table.ts", lineNumber: 13 });
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
  }, styles: ['\n\n.log-detail-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 450px;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.log-detail-panel.fullscreen[_ngcontent-%COMP%] {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 3rem;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.header-section[_ngcontent-%COMP%]   .log-type-status[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.header-section[_ngcontent-%COMP%]   .log-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #212529;\n}\n.header-section[_ngcontent-%COMP%]   .log-summary[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.detail-item[_ngcontent-%COMP%]   .value.code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background: #f8f9fa;\n  padding: 0.125rem 0.25rem;\n  border-radius: 2px;\n}\n.detail-item[_ngcontent-%COMP%]   .value.duration[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-item[_ngcontent-%COMP%]   .value.error-value[_ngcontent-%COMP%] {\n  color: #721c24;\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   .value.error-message[_ngcontent-%COMP%] {\n  color: #721c24;\n  background: #f8d7da;\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.payload-section[_ngcontent-%COMP%]   .payload-info[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.payload-section[_ngcontent-%COMP%]   .view-payload-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.payload-section[_ngcontent-%COMP%]   .view-payload-btn[_ngcontent-%COMP%]:hover {\n  background: #2a4a7f;\n}\n.child-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.child-log[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.child-log[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.child-log[_ngcontent-%COMP%]   .child-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.child-log[_ngcontent-%COMP%]   .child-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.child-log[_ngcontent-%COMP%]   .child-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n}\n.audit-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n  border-radius: 0 0 0 0;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-info[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.program-log-section[_ngcontent-%COMP%]   .view-program-log-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #2d3748;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .view-program-log-btn[_ngcontent-%COMP%]:hover {\n  background: #4a5568;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 1.125rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-small[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section[_ngcontent-%COMP%]   .program-log-content[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  background: #1a202c;\n  color: #e2e8f0;\n  border-radius: 4px;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.program-log-section[_ngcontent-%COMP%]   .no-program-log[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-text[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section[_ngcontent-%COMP%]   .close-btn-text[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.loading-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  color: #6c757d;\n}\n.loading-inline[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .log-detail-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}'], changeDetection: 0 });
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
`, styles: ['/* src/app/logs/components/log-detail.scss */\n.log-detail-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 450px;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.log-detail-panel.fullscreen {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header .fullscreen-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .fullscreen-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header .fullscreen-btn svg {\n  display: block;\n}\n.panel-header .close-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen .panel-content {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 3rem;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #6c757d;\n}\n.loading-state .spinner,\n.empty-state .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-section {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-section h5 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.header-section .log-type-status {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.header-section .log-title {\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #212529;\n}\n.header-section .log-summary {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.type-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background: #e9ecef;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.detail-item.full-width {\n  grid-column: 1/-1;\n}\n.detail-item .label {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.detail-item .value {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.detail-item .value.code {\n  font-family: monospace;\n  background: #f8f9fa;\n  padding: 0.125rem 0.25rem;\n  border-radius: 2px;\n}\n.detail-item .value.duration {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-item .value.error-value {\n  color: #721c24;\n  font-weight: 600;\n}\n.detail-item .value.error-message {\n  color: #721c24;\n  background: #f8d7da;\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.payload-section .payload-info {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.payload-section .view-payload-btn {\n  padding: 0.5rem 1rem;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.payload-section .view-payload-btn:hover {\n  background: #2a4a7f;\n}\n.child-logs {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.child-log {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.child-log:hover {\n  background: #e9ecef;\n}\n.child-log .child-type {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.child-log .child-title {\n  flex: 1;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.child-log .child-status {\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 3px;\n}\n.audit-section {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n  border-radius: 0 0 0 0;\n}\n.program-log-section .program-log-info {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.program-log-section .view-program-log-btn {\n  padding: 0.5rem 1rem;\n  background: #2d3748;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.program-log-section .view-program-log-btn:hover {\n  background: #4a5568;\n}\n.program-log-section .program-log-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.program-log-section .program-log-timestamp {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.program-log-section .close-btn-small {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 1.125rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section .close-btn-small:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.program-log-section .program-log-content {\n  margin: 0;\n  padding: 1rem;\n  background: #1a202c;\n  color: #e2e8f0;\n  border-radius: 4px;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.program-log-section .no-program-log {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-style: italic;\n}\n.program-log-section .close-btn-text {\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n  font-size: 0.75rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.program-log-section .close-btn-text:hover {\n  background: #f8f9fa;\n  color: #212529;\n}\n.loading-inline {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  color: #6c757d;\n}\n.loading-inline .spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .log-detail-panel {\n    width: 100%;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n'] }]
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
function LogsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-payload-viewer", 5);
    \u0275\u0275listener("closed", function LogsComponent_Conditional_10_Template_app_payload_viewer_closed_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClosePayload());
    });
    \u0275\u0275elementEnd();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogsComponent, selectors: [["app-logs"]], decls: 11, vars: 2, consts: [[1, "logs-container"], [1, "logs-header"], [1, "logs-content"], [3, "logSelected"], [3, "closed", "viewPayload"], [3, "closed"]], template: function LogsComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(10, LogsComponent_Conditional_10_Template, 1, 0, "app-payload-viewer");
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
    PayloadViewerComponent
  ], styles: ["\n\n.logs-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.logs-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.logs-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.logs-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.logs-content[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .logs-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogsComponent, [{
    type: Component,
    args: [{ selector: "app-logs", standalone: true, imports: [
      LogFiltersComponent,
      LogTableComponent,
      LogDetailComponent,
      PayloadViewerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="logs-container">\n  <div class="logs-header">\n    <h2>MHA PDS Logs</h2>\n    <p>View and search operational logs</p>\n  </div>\n\n  <div class="logs-content">\n    <app-log-filters />\n\n    <app-log-table (logSelected)="onLogSelected($event)" />\n\n    @if (showDetail()) {\n      <app-log-detail\n        (closed)="onCloseDetail()"\n        (viewPayload)="onViewPayload($event)"\n      />\n    }\n\n    @if (showPayload()) {\n      <app-payload-viewer (closed)="onClosePayload()" />\n    }\n  </div>\n</div>\n', styles: ["/* src/app/logs/logs.scss */\n.logs-container {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.logs-header {\n  margin-bottom: 1.5rem;\n}\n.logs-header h2 {\n  margin: 0 0 0.25rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.logs-header p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.logs-content {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .logs-container {\n    padding: 1rem;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogsComponent, { className: "LogsComponent", filePath: "src/app/logs/logs.ts", lineNumber: 25 });
})();
export {
  LogsComponent
};
