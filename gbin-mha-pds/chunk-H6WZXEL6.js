import {
  MhaPdsConfigurationService
} from "./chunk-YITHQB7Z.js";
import {
  CclServiceWrapperService,
  DefaultValueAccessor,
  FormsModule,
  MpageTableComponent,
  NgControlStatus,
  NgModel,
  RemainingScreenSpaceDirective
} from "./chunk-JHWRIAYJ.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵtextInterpolate2
} from "./chunk-OFQI67IQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-I7D2VZMI.js";

// src/app/reports/services/reports.service.ts
var ReportsService = class _ReportsService {
  cclService = inject(CclServiceWrapperService);
  configService = inject(MhaPdsConfigurationService);
  _selectedReport = signal(null, ...ngDevMode ? [{ debugName: "_selectedReport" }] : []);
  _reportData = signal(null, ...ngDevMode ? [{ debugName: "_reportData" }] : []);
  _loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : []);
  _error = signal("", ...ngDevMode ? [{ debugName: "_error" }] : []);
  selectedReport = this._selectedReport.asReadonly();
  reportData = this._reportData.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();
  /** Config-driven report registry: active reports sorted by SORT_SEQ */
  reportRegistry = computed(() => {
    const config = this.configService.configuration();
    const reports = config?.REPORTS ?? [];
    return reports.filter((r) => r.ACTIVE_IND === 1).sort((a, b) => (a.SORT_SEQ ?? 0) - (b.SORT_SEQ ?? 0));
  }, ...ngDevMode ? [{ debugName: "reportRegistry" }] : []);
  selectReport(report) {
    this._selectedReport.set(report);
    this._reportData.set(null);
    this._error.set("");
  }
  runReport(report) {
    this._loading.set(true);
    this._error.set("");
    this._reportData.set(null);
    this.cclService.load({
      customScript: {
        script: [
          {
            name: "gbin_mha_pds_reports:group1",
            run: "pre",
            id: report.REPORT_ID,
            parameters: {
              requestType: report.REPORT_ID,
              requestId: Date.now(),
              requestData: JSON.stringify({ rpt_params: report.PARAMS ?? {} })
            }
          }
        ],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get(report.REPORT_ID);
        if (!response) {
          this._error.set("No response from report service");
          this._loading.set(false);
          return;
        }
        const renderType = report.RENDER_TYPE;
        if (renderType === "mpage_table") {
          const normalized = this.normalizeMpageTableResponse(response);
          if (normalized.status === "FAILED") {
            this._error.set(normalized.error_message || "Report failed");
          } else {
            this._reportData.set(normalized);
          }
        } else {
          const normalized = this.normalizeSpreadsheetResponse(response);
          if (normalized.status === "FAILED") {
            this._error.set(normalized.error_message || "Report failed");
          } else {
            this._reportData.set(normalized);
          }
        }
      } catch (err) {
        this._error.set(err?.message || "Failed to run report");
      } finally {
        this._loading.set(false);
      }
    });
  }
  normalizeSpreadsheetResponse(raw) {
    const report = raw.report_response ?? raw.REPORT_RESPONSE ?? raw;
    const columns = (report.columns ?? report.COLUMNS ?? []).map((c) => ({
      field: c.field ?? c.FIELD ?? "",
      label: c.label ?? c.LABEL ?? "",
      type: c.type ?? c.TYPE ?? "string"
    }));
    const rawRows = report.rows ?? report.ROWS ?? [];
    const rows = rawRows.map((r) => {
      const vals = r.values ?? r.VALUES ?? [];
      return {
        values: vals.map((v) => v.val ?? v.VAL ?? "")
      };
    });
    return {
      request_type: report.request_type ?? report.REQUEST_TYPE ?? "",
      title: report.title ?? report.TITLE ?? "",
      status: report.status ?? report.STATUS ?? "FAILED",
      error_message: report.error_message ?? report.ERROR_MESSAGE ?? "",
      record_count: report.record_count ?? report.RECORD_COUNT ?? 0,
      run_dt_tm: report.run_dt_tm ?? report.RUN_DT_TM ?? "",
      render_type: report.render_type ?? report.RENDER_TYPE ?? "spreadsheet",
      columns,
      rows
    };
  }
  normalizeMpageTableResponse(raw) {
    const report = raw.report_response ?? raw.REPORT_RESPONSE ?? raw;
    return {
      request_type: report.request_type ?? report.REQUEST_TYPE ?? "",
      title: report.title ?? report.TITLE ?? "",
      status: report.status ?? report.STATUS ?? "FAILED",
      error_message: report.error_message ?? report.ERROR_MESSAGE ?? "",
      record_count: report.record_count ?? report.RECORD_COUNT ?? 0,
      run_dt_tm: report.run_dt_tm ?? report.RUN_DT_TM ?? "",
      render_type: "mpage_table",
      data: report.data ?? report.DATA ?? []
    };
  }
  static \u0275fac = function ReportsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsService, factory: _ReportsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/reports/components/report-sidebar.ts
var _forTrack0 = ($index, $item) => $item.REPORT_ID;
function ReportSidebarComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li")(1, "button", 2);
    \u0275\u0275domListener("click", function ReportSidebarComponent_For_5_Template_button_click_1_listener() {
      const report_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reportSelected.emit(report_r2));
    });
    \u0275\u0275domElementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const report_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ((tmp_10_0 = ctx_r2.selected()) == null ? null : tmp_10_0.REPORT_ID) === report_r2.REPORT_ID);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", report_r2.TITLE, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", report_r2.DESCRIPTION, " ");
  }
}
var ReportSidebarComponent = class _ReportSidebarComponent {
  reports = input.required(...ngDevMode ? [{ debugName: "reports" }] : []);
  selected = input(null, ...ngDevMode ? [{ debugName: "selected" }] : []);
  reportSelected = output();
  static \u0275fac = function ReportSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSidebarComponent, selectors: [["app-report-sidebar"]], inputs: { reports: [1, "reports"], selected: [1, "selected"] }, outputs: { reportSelected: "reportSelected" }, decls: 6, vars: 0, consts: [[1, "report-sidebar"], [1, "report-list"], [1, "report-item", 3, "click"], [1, "report-title"], [1, "report-desc"]], template: function ReportSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "nav", 0)(1, "h5");
      \u0275\u0275text(2, "Reports");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "ul", 1);
      \u0275\u0275repeaterCreate(4, ReportSidebarComponent_For_5_Template, 6, 4, "li", null, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.reports());
    }
  }, styles: ["\n\n.report-sidebar[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-right: 1px solid #dee2e6;\n  height: 100%;\n  overflow-y: auto;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.report-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.report-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  background: white;\n  cursor: pointer;\n  text-align: left;\n}\n.report-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.report-item.active[_ngcontent-%COMP%] {\n  background: #e7f1ff;\n  border-color: #86b7fe;\n}\n.report-title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n}\n.report-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-report-sidebar", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <nav class="report-sidebar">
      <h5>Reports</h5>
      <ul class="report-list">
        @for (report of reports(); track report.REPORT_ID) {
          <li>
            <button
              class="report-item"
              [class.active]="selected()?.REPORT_ID === report.REPORT_ID"
              (click)="reportSelected.emit(report)">
              <span class="report-title">
                {{ report.TITLE }}
              </span>
              <span class="report-desc">
                {{ report.DESCRIPTION }}
              </span>
            </button>
          </li>
        }
      </ul>
    </nav>
  `, styles: ["/* angular:styles/component:scss;17a64fb0c1c06b5c4bebd1468867737efdd4681c4756e0f7c5067d0ced3c260f;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/reports/components/report-sidebar.ts */\n.report-sidebar {\n  padding: 1rem;\n  border-right: 1px solid #dee2e6;\n  height: 100%;\n  overflow-y: auto;\n}\nh5 {\n  margin-bottom: 1rem;\n}\n.report-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.report-item {\n  display: block;\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  background: white;\n  cursor: pointer;\n  text-align: left;\n}\n.report-item:hover {\n  background: #f8f9fa;\n}\n.report-item.active {\n  background: #e7f1ff;\n  border-color: #86b7fe;\n}\n.report-title {\n  display: block;\n  font-weight: 600;\n}\n.report-desc {\n  display: block;\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSidebarComponent, { className: "ReportSidebarComponent", filePath: "src/app/reports/components/report-sidebar.ts", lineNumber: 76 });
})();

// src/app/reports/components/spreadsheet-renderer.ts
var _forTrack02 = ($index, $item) => $item.field;
function SpreadsheetRendererComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "No records found.");
    \u0275\u0275elementEnd();
  }
}
function SpreadsheetRendererComponent_Conditional_14_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.sortDir() === "asc" ? "\u25B2" : "\u25BC", " ");
  }
}
function SpreadsheetRendererComponent_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275listener("click", function SpreadsheetRendererComponent_Conditional_14_For_5_Template_th_click_0_listener() {
      const col_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleSort(col_r2.field));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SpreadsheetRendererComponent_Conditional_14_For_5_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sortField() === col_r2.field ? 2 : -1);
  }
}
function SpreadsheetRendererComponent_Conditional_14_For_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_49_r4 = ctx.$index;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.values[\u0275$index_49_r4]);
  }
}
function SpreadsheetRendererComponent_Conditional_14_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, SpreadsheetRendererComponent_Conditional_14_For_8_For_2_Template, 2, 1, "td", null, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.data().columns);
  }
}
function SpreadsheetRendererComponent_Conditional_14_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2, " No matching records. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.data().columns.length);
  }
}
function SpreadsheetRendererComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr");
    \u0275\u0275repeaterCreate(4, SpreadsheetRendererComponent_Conditional_14_For_5_Template, 3, 2, "th", 11, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275repeaterCreate(7, SpreadsheetRendererComponent_Conditional_14_For_8_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIndex, false, SpreadsheetRendererComponent_Conditional_14_ForEmpty_9_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.data().columns);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.displayedRows());
  }
}
var SpreadsheetRendererComponent = class _SpreadsheetRendererComponent {
  data = input.required(...ngDevMode ? [{ debugName: "data" }] : []);
  searchText = signal("", ...ngDevMode ? [{ debugName: "searchText" }] : []);
  sortField = signal("", ...ngDevMode ? [{ debugName: "sortField" }] : []);
  sortDir = signal("asc", ...ngDevMode ? [{ debugName: "sortDir" }] : []);
  displayedRows = computed(() => {
    const report = this.data();
    let rows = [...report.rows];
    const search = this.searchText().toLowerCase();
    const field = this.sortField();
    const dir = this.sortDir();
    const columns = report.columns;
    if (search) {
      rows = rows.filter((row) => row.values.some((v) => v.toLowerCase().includes(search)));
    }
    if (field) {
      const colIdx = columns.findIndex((c) => c.field === field);
      if (colIdx >= 0) {
        const colType = columns[colIdx].type;
        rows.sort((a, b) => {
          const aVal = a.values[colIdx] ?? "";
          const bVal = b.values[colIdx] ?? "";
          let cmp = 0;
          if (colType === "number") {
            cmp = (parseFloat(aVal) || 0) - (parseFloat(bVal) || 0);
          } else if (colType === "datetime") {
            cmp = (Date.parse(aVal) || 0) - (Date.parse(bVal) || 0);
          } else {
            cmp = aVal.localeCompare(bVal);
          }
          return dir === "asc" ? cmp : -cmp;
        });
      }
    }
    return rows;
  }, ...ngDevMode ? [{ debugName: "displayedRows" }] : []);
  toggleSort(field) {
    if (this.sortField() === field) {
      this.sortDir.set(this.sortDir() === "asc" ? "desc" : "asc");
    } else {
      this.sortField.set(field);
      this.sortDir.set("asc");
    }
  }
  exportCSV() {
    const report = this.data();
    const rows = this.displayedRows();
    const headers = report.columns.map((c) => c.label);
    const csvRows = [
      headers.map((h) => this.escapeCSV(h)).join(",")
    ];
    for (const row of rows) {
      csvRows.push(row.values.map((v) => this.escapeCSV(v)).join(","));
    }
    const csvContent = "\uFEFF" + csvRows.join("\r\n");
    this.triggerDownload(csvContent, `${report.request_type}_${this.timestamp()}.csv`, "text/csv;charset=utf-8");
  }
  exportExcel() {
    import("./chunk-J4FXGVOT.js").then((XLSX) => {
      const report = this.data();
      const rows = this.displayedRows();
      const headers = report.columns.map((c) => c.label);
      const data = [
        headers,
        ...rows.map((r) => r.values)
      ];
      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Report");
      const buffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${report.request_type}_${this.timestamp()}.xlsx`;
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      setTimeout(() => {
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
      }, 100);
    });
  }
  escapeCSV(value) {
    if (!value)
      return "";
    if (/^[=+@\-]/.test(value)) {
      value = "'" + value;
    }
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
      return '"' + value.replace(/"/g, '""') + '"';
    }
    return value;
  }
  triggerDownload(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(() => {
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    }, 100);
  }
  timestamp() {
    return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  }
  static \u0275fac = function SpreadsheetRendererComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpreadsheetRendererComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpreadsheetRendererComponent, selectors: [["app-spreadsheet-renderer"]], inputs: { data: [1, "data"] }, decls: 15, vars: 5, consts: [[1, "spreadsheet-renderer"], [1, "toolbar"], [1, "toolbar-left"], [1, "text-muted", "ms-2"], [1, "toolbar-right"], ["type", "text", "placeholder", "Search...", 1, "form-control", "form-control-sm", 2, "width", "200px", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-outline-primary", "ms-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-success", "ms-2", 3, "click"], [1, "text-muted", "mt-3"], [1, "table-container"], [1, "table", "table-sm", "table-striped", "table-hover"], [1, "sortable"], [1, "sortable", 3, "click"], [1, "text-center", "text-muted"]], template: function SpreadsheetRendererComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "input", 5);
      \u0275\u0275listener("ngModelChange", function SpreadsheetRendererComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.searchText.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function SpreadsheetRendererComponent_Template_button_click_9_listener() {
        return ctx.exportCSV();
      });
      \u0275\u0275text(10, " Export CSV ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275listener("click", function SpreadsheetRendererComponent_Template_button_click_11_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275text(12, " Export Excel ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(13, SpreadsheetRendererComponent_Conditional_13_Template, 2, 0, "p", 8)(14, SpreadsheetRendererComponent_Conditional_14_Template, 10, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.data().record_count, " records \xB7 ", ctx.data().run_dt_tm, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.searchText());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.data().status === "NO_DATA" ? 13 : 14);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  max-height: calc(100vh - 220px);\n  overflow-y: auto;\n}\nth.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n}\nth.sortable[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpreadsheetRendererComponent, [{
    type: Component,
    args: [{ selector: "app-spreadsheet-renderer", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="spreadsheet-renderer">
      <div class="toolbar">
        <div class="toolbar-left">
          <h5>{{ data().title }}</h5>
          <span class="text-muted ms-2">
            {{ data().record_count }} records
            &middot; {{ data().run_dt_tm }}
          </span>
        </div>
        <div class="toolbar-right">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Search..."
            [ngModel]="searchText()"
            (ngModelChange)="searchText.set($event)"
            style="width: 200px" />
          <button
            class="btn btn-sm btn-outline-primary ms-2"
            (click)="exportCSV()">
            Export CSV
          </button>
          <button
            class="btn btn-sm btn-outline-success ms-2"
            (click)="exportExcel()">
            Export Excel
          </button>
        </div>
      </div>

      @if (data().status === 'NO_DATA') {
        <p class="text-muted mt-3">No records found.</p>
      } @else {
        <div class="table-container">
          <table class="table table-sm table-striped
                        table-hover">
            <thead>
              <tr>
                @for (col of data().columns;
                      track col.field) {
                  <th (click)="toggleSort(col.field)"
                      class="sortable">
                    {{ col.label }}
                    @if (sortField() === col.field) {
                      <span>
                        {{ sortDir() === 'asc'
                          ? '\u25B2' : '\u25BC' }}
                      </span>
                    }
                  </th>
                }
              </tr>
            </thead>
            <tbody>
              @for (row of displayedRows();
                    track $index) {
                <tr>
                  @for (col of data().columns;
                        track col.field; let i = $index) {
                    <td>{{ row.values[i] }}</td>
                  }
                </tr>
              } @empty {
                <tr>
                  <td [attr.colspan]="
                        data().columns.length"
                      class="text-center text-muted">
                    No matching records.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;b1f93837535d4318ee5f7e8f847994e7c044430e3566ba8a9aa3bac9a8011991;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/reports/components/spreadsheet-renderer.ts */\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.toolbar-left {\n  display: flex;\n  align-items: baseline;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n}\n.toolbar h5 {\n  margin: 0;\n}\n.table-container {\n  overflow-x: auto;\n  max-height: calc(100vh - 220px);\n  overflow-y: auto;\n}\nth.sortable {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n}\nth.sortable:hover {\n  background: #e9ecef;\n}\ntd,\nth {\n  font-size: 0.875rem;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpreadsheetRendererComponent, { className: "SpreadsheetRendererComponent", filePath: "src/app/reports/components/spreadsheet-renderer.ts", lineNumber: 130 });
})();

// src/app/reports/components/mpage-table-renderer.ts
function MpageTableRendererComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "No records found.");
    \u0275\u0275elementEnd();
  }
}
function MpageTableRendererComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mpage-table", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("shorten", 80);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data().data)("params", ctx_r0.mappedParams());
  }
}
var MpageTableRendererComponent = class _MpageTableRendererComponent {
  data = input.required(...ngDevMode ? [{ debugName: "data" }] : []);
  tableParams = input(...ngDevMode ? [void 0, { debugName: "tableParams" }] : []);
  mappedParams = computed(() => {
    const configParams = this.tableParams();
    return {
      showToolbar: configParams?.SHOW_TOOLBAR ?? true,
      columnFilter: configParams?.COLUMN_FILTER ?? true,
      hideIdValues: configParams?.HIDE_ID_VALUES ?? false,
      maxInitialColumnWidth: configParams?.MAX_INITIAL_COLUMN_WIDTH ?? 300
    };
  }, ...ngDevMode ? [{ debugName: "mappedParams" }] : []);
  static \u0275fac = function MpageTableRendererComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MpageTableRendererComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MpageTableRendererComponent, selectors: [["app-mpage-table-renderer"]], inputs: { data: [1, "data"], tableParams: [1, "tableParams"] }, decls: 8, vars: 4, consts: [[1, "mpage-table-renderer"], [1, "toolbar"], [1, "text-muted", "ms-2"], [1, "text-muted", "mt-3"], ["coRemainingScreenSpace", "", 3, "shorten"], [3, "data", "params"]], template: function MpageTableRendererComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, MpageTableRendererComponent_Conditional_6_Template, 2, 0, "p", 3)(7, MpageTableRendererComponent_Conditional_7_Template, 2, 3, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.data().record_count, " records \xB7 ", ctx.data().run_dt_tm, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data().status === "NO_DATA" ? 6 : 7);
    }
  }, dependencies: [MpageTableComponent, RemainingScreenSpaceDirective], styles: ["\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MpageTableRendererComponent, [{
    type: Component,
    args: [{ selector: "app-mpage-table-renderer", standalone: true, imports: [MpageTableComponent, RemainingScreenSpaceDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="mpage-table-renderer">
      <div class="toolbar">
        <h5>{{ data().title }}</h5>
        <span class="text-muted ms-2">
          {{ data().record_count }} records
          &middot; {{ data().run_dt_tm }}
        </span>
      </div>
      @if (data().status === 'NO_DATA') {
        <p class="text-muted mt-3">No records found.</p>
      } @else {
        <div coRemainingScreenSpace [shorten]="80">
          <mpage-table
            [data]="data().data"
            [params]="mappedParams()" />
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;6f6561bc06eee2fbb901079fb1aa599f550161e4410ed5d91c8c869779cbf8ed;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/reports/components/mpage-table-renderer.ts */\n.toolbar {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 0.5rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.toolbar h5 {\n  margin: 0;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MpageTableRendererComponent, { className: "MpageTableRendererComponent", filePath: "src/app/reports/components/mpage-table-renderer.ts", lineNumber: 51 });
})();

// src/app/reports/components/run-report-modal.ts
function RunReportModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.report().DESCRIPTION);
  }
}
function RunReportModalComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 20);
    \u0275\u0275listener("ngModelChange", function RunReportModalComponent_Conditional_20_For_5_Template_input_ngModelChange_3_listener($event) {
      const key_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateParam(key_r3, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", "param-" + key_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatParamLabel(key_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275property("id", "param-" + key_r3)("type", ctx_r0.getInputType(ctx_r0.editableParams()[key_r3]))("ngModel", ctx_r0.editableParams()[key_r3]);
  }
}
function RunReportModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h6");
    \u0275\u0275text(2, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, RunReportModalComponent_Conditional_20_For_5_Template, 4, 5, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.paramKeys());
  }
}
function RunReportModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "This report has no configurable parameters.");
    \u0275\u0275elementEnd();
  }
}
var RunReportModalComponent = class _RunReportModalComponent {
  report = input.required(...ngDevMode ? [{ debugName: "report" }] : []);
  execute = output();
  cancel = output();
  editableParams = signal({}, ...ngDevMode ? [{ debugName: "editableParams" }] : []);
  paramKeys = signal([], ...ngDevMode ? [{ debugName: "paramKeys" }] : []);
  ngOnInit() {
    const params = __spreadValues({}, this.report().PARAMS ?? {});
    this.editableParams.set(params);
    this.paramKeys.set(Object.keys(params));
  }
  formatParamLabel(key) {
    return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  getInputType(value) {
    return typeof value === "number" ? "number" : "text";
  }
  updateParam(key, value) {
    const params = __spreadValues({}, this.editableParams());
    const original = this.report().PARAMS?.[key];
    if (typeof original === "number") {
      params[key] = Number(value);
    } else {
      params[key] = value;
    }
    this.editableParams.set(params);
  }
  onExecute() {
    const updated = __spreadProps(__spreadValues({}, this.report()), {
      PARAMS: __spreadValues({}, this.editableParams())
    });
    this.execute.emit(updated);
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.cancel.emit();
    }
  }
  static \u0275fac = function RunReportModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RunReportModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RunReportModalComponent, selectors: [["app-run-report-modal"]], inputs: { report: [1, "report"] }, outputs: { execute: "execute", cancel: "cancel" }, decls: 27, vars: 5, consts: [[1, "modal-backdrop", 3, "click"], [1, "modal-dialog", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "report-description"], [1, "report-meta"], [1, "meta-row"], [1, "meta-label"], [1, "meta-value", "badge-render"], [1, "meta-value", "mono"], [1, "params-section"], [1, "no-params"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "params-grid"], [1, "param-row"], [1, "param-label", 3, "for"], [1, "param-input", 3, "ngModelChange", "id", "type", "ngModel"]], template: function RunReportModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function RunReportModalComponent_Template_div_click_0_listener($event) {
        return ctx.onBackdropClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function RunReportModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h5", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function RunReportModalComponent_Template_button_click_5_listener() {
        return ctx.cancel.emit();
      });
      \u0275\u0275text(6, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275conditionalCreate(8, RunReportModalComponent_Conditional_8_Template, 2, 1, "p", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275text(12, "Render Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 8)(16, "span", 9);
      \u0275\u0275text(17, "Report ID:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 11);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, RunReportModalComponent_Conditional_20_Template, 6, 0, "div", 12)(21, RunReportModalComponent_Conditional_21_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
      \u0275\u0275listener("click", function RunReportModalComponent_Template_button_click_23_listener() {
        return ctx.cancel.emit();
      });
      \u0275\u0275text(24, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 16);
      \u0275\u0275listener("click", function RunReportModalComponent_Template_button_click_25_listener() {
        return ctx.onExecute();
      });
      \u0275\u0275text(26, "Execute Report");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.report().TITLE);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.report().DESCRIPTION ? 8 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.report().RENDER_TYPE);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.report().REPORT_ID);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.paramKeys().length > 0 ? 20 : 21);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  max-height: 80vh;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  line-height: 1;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 0 4px;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n}\n.report-description[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 16px;\n}\n.report-meta[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 0;\n}\n.meta-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #6c757d;\n  font-size: 13px;\n  min-width: 100px;\n}\n.meta-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #212529;\n}\n.badge-render[_ngcontent-%COMP%] {\n  background: #e7f1ff;\n  color: #0d6efd;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.params-section[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.params-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #495057;\n}\n.params-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.param-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.param-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.param-input[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.param-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);\n}\n.no-params[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-style: italic;\n  font-size: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #dee2e6;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border-color: #ced4da;\n  color: #495057;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0b5ed7;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RunReportModalComponent, [{
    type: Component,
    args: [{ selector: "app-run-report-modal", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="modal-backdrop" (click)="onBackdropClick($event)">
      <div class="modal-dialog" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h5 class="modal-title">{{ report().TITLE }}</h5>
          <button class="modal-close" (click)="cancel.emit()">&times;</button>
        </div>

        <div class="modal-body">
          @if (report().DESCRIPTION) {
            <p class="report-description">{{ report().DESCRIPTION }}</p>
          }

          <div class="report-meta">
            <div class="meta-row">
              <span class="meta-label">Render Type:</span>
              <span class="meta-value badge-render">{{ report().RENDER_TYPE }}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Report ID:</span>
              <span class="meta-value mono">{{ report().REPORT_ID }}</span>
            </div>
          </div>

          @if (paramKeys().length > 0) {
            <div class="params-section">
              <h6>Parameters</h6>
              <div class="params-grid">
                @for (key of paramKeys(); track key) {
                  <div class="param-row">
                    <label class="param-label" [for]="'param-' + key">
                      {{ formatParamLabel(key) }}
                    </label>
                    <input
                      class="param-input"
                      [id]="'param-' + key"
                      [type]="getInputType(editableParams()[key])"
                      [ngModel]="editableParams()[key]"
                      (ngModelChange)="updateParam(key, $event)" />
                  </div>
                }
              </div>
            </div>
          } @else {
            <p class="no-params">This report has no configurable parameters.</p>
          }
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" (click)="cancel.emit()">Cancel</button>
          <button class="btn btn-primary" (click)="onExecute()">Execute Report</button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;f5aad65cb405b9028f0ef7530fb4c5c70d09f930edd8b3df949871b1b5c35073;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/reports/components/run-report-modal.ts */\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.modal-dialog {\n  background: white;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 520px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  max-height: 80vh;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  line-height: 1;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 0 4px;\n}\n.modal-close:hover {\n  color: #333;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n}\n.report-description {\n  color: #495057;\n  margin-bottom: 16px;\n}\n.report-meta {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n}\n.meta-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 0;\n}\n.meta-label {\n  font-weight: 500;\n  color: #6c757d;\n  font-size: 13px;\n  min-width: 100px;\n}\n.meta-value {\n  font-size: 13px;\n  color: #212529;\n}\n.badge-render {\n  background: #e7f1ff;\n  color: #0d6efd;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.mono {\n  font-family: monospace;\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.params-section {\n  margin-top: 4px;\n}\n.params-section h6 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #495057;\n}\n.params-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.param-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.param-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.param-input {\n  padding: 6px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.param-input:focus {\n  outline: none;\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);\n}\n.no-params {\n  color: #6c757d;\n  font-style: italic;\n  font-size: 14px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #dee2e6;\n}\n.btn {\n  padding: 8px 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn-secondary {\n  background: white;\n  border-color: #ced4da;\n  color: #495057;\n}\n.btn-secondary:hover {\n  background: #e9ecef;\n}\n.btn-primary {\n  background: #0d6efd;\n  color: white;\n}\n.btn-primary:hover {\n  background: #0b5ed7;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RunReportModalComponent, { className: "RunReportModalComponent", filePath: "src/app/reports/components/run-report-modal.ts", lineNumber: 251 });
})();

// src/app/reports/reports.ts
function ReportsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5, "Running report...");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function ReportsComponent_Conditional_5_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spreadsheet-renderer", 10);
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.asSpreadsheet(data_r1));
  }
}
function ReportsComponent_Conditional_5_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-mpage-table-renderer", 11);
  }
  if (rf & 2) {
    let tmp_4_0;
    const data_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.asMpageTable(data_r1))("tableParams", (tmp_4_0 = ctx_r1.selectedReport()) == null ? null : tmp_4_0.TABLE_PARAMS);
  }
}
function ReportsComponent_Conditional_5_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " PDF reports coming soon. ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_Conditional_5_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Unknown render type: ", (tmp_3_0 = ctx_r1.selectedReport()) == null ? null : tmp_3_0.RENDER_TYPE, " ");
  }
}
function ReportsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReportsComponent_Conditional_5_Case_0_Template, 1, 1, "app-spreadsheet-renderer", 10)(1, ReportsComponent_Conditional_5_Case_1_Template, 1, 2, "app-mpage-table-renderer", 11)(2, ReportsComponent_Conditional_5_Case_2_Template, 2, 0, "div", 12)(3, ReportsComponent_Conditional_5_Case_3_Template, 2, 1, "div", 13);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = (tmp_2_0 = ctx_r1.selectedReport()) == null ? null : tmp_2_0.RENDER_TYPE) === "spreadsheet" ? 0 : tmp_2_0 === "mpage_table" ? 1 : tmp_2_0 === "pdf" ? 2 : 3);
  }
}
function ReportsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h4");
    \u0275\u0275text(2, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 14);
    \u0275\u0275text(4, " Select a report from the sidebar to get started. ");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-run-report-modal", 15);
    \u0275\u0275listener("execute", function ReportsComponent_Conditional_7_Template_app_run_report_modal_execute_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExecuteReport($event));
    })("cancel", function ReportsComponent_Conditional_7_Template_app_run_report_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancelModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("report", ctx);
  }
}
var ReportsComponent = class _ReportsComponent {
  reportsService = inject(ReportsService);
  registry = this.reportsService.reportRegistry;
  selectedReport = this.reportsService.selectedReport;
  reportData = this.reportsService.reportData;
  loading = this.reportsService.loading;
  error = this.reportsService.error;
  pendingReport = signal(null, ...ngDevMode ? [{ debugName: "pendingReport" }] : []);
  onReportSelected(report) {
    this.pendingReport.set(report);
  }
  onExecuteReport(report) {
    this.pendingReport.set(null);
    this.reportsService.selectReport(report);
    this.reportsService.runReport(report);
  }
  onCancelModal() {
    this.pendingReport.set(null);
  }
  asSpreadsheet(data) {
    return data;
  }
  asMpageTable(data) {
    return data;
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 8, vars: 4, consts: [[1, "reports-layout"], [3, "reportSelected", "reports", "selected"], [1, "reports-content"], [1, "loading-container"], [1, "alert", "alert-danger", "m-3"], [1, "welcome-message"], [3, "report"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2"], [3, "data"], [3, "data", "tableParams"], [1, "alert", "alert-info", "m-3"], [1, "alert", "alert-warning", "m-3"], [1, "text-muted"], [3, "execute", "cancel", "report"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-report-sidebar", 1);
      \u0275\u0275listener("reportSelected", function ReportsComponent_Template_app_report_sidebar_reportSelected_1_listener($event) {
        return ctx.onReportSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275conditionalCreate(3, ReportsComponent_Conditional_3_Template, 6, 0, "div", 3)(4, ReportsComponent_Conditional_4_Template, 2, 1, "div", 4)(5, ReportsComponent_Conditional_5_Template, 4, 1)(6, ReportsComponent_Conditional_6_Template, 5, 0, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, ReportsComponent_Conditional_7_Template, 1, 1, "app-run-report-modal", 6);
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275property("reports", ctx.registry())("selected", ctx.selectedReport());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 3 : (tmp_2_0 = ctx.error()) ? 4 : (tmp_2_0 = ctx.reportData()) ? 5 : 6, tmp_2_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_3_0 = ctx.pendingReport()) ? 7 : -1, tmp_3_0);
    }
  }, dependencies: [
    ReportSidebarComponent,
    SpreadsheetRendererComponent,
    MpageTableRendererComponent,
    RunReportModalComponent
  ], styles: ["\n\n.reports-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 56px);\n}\napp-report-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  flex-shrink: 0;\n}\n.reports-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  overflow-y: auto;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n}\n.welcome-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  text-align: center;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [
      ReportSidebarComponent,
      SpreadsheetRendererComponent,
      MpageTableRendererComponent,
      RunReportModalComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="reports-layout">
  <app-report-sidebar
    [reports]="registry()"
    [selected]="selectedReport()"
    (reportSelected)="onReportSelected($event)" />

  <div class="reports-content">
    @if (loading()) {
      <div class="loading-container">
        <div class="spinner-border text-primary"
             role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Running report...</p>
      </div>
    } @else if (error(); as err) {
      <div class="alert alert-danger m-3">
        {{ err }}
      </div>
    } @else if (reportData(); as data) {
      @switch (selectedReport()?.RENDER_TYPE) {
        @case ('spreadsheet') {
          <app-spreadsheet-renderer [data]="asSpreadsheet(data)" />
        }
        @case ('mpage_table') {
          <app-mpage-table-renderer
            [data]="asMpageTable(data)"
            [tableParams]="selectedReport()?.TABLE_PARAMS" />
        }
        @case ('pdf') {
          <div class="alert alert-info m-3">
            PDF reports coming soon.
          </div>
        }
        @default {
          <div class="alert alert-warning m-3">
            Unknown render type: {{ selectedReport()?.RENDER_TYPE }}
          </div>
        }
      }
    } @else {
      <div class="welcome-message">
        <h4>Reports</h4>
        <p class="text-muted">
          Select a report from the sidebar to get started.
        </p>
      </div>
    }
  </div>
</div>

@if (pendingReport(); as report) {
  <app-run-report-modal
    [report]="report"
    (execute)="onExecuteReport($event)"
    (cancel)="onCancelModal()" />
}
`, styles: ["/* src/app/reports/reports.scss */\n.reports-layout {\n  display: flex;\n  height: calc(100vh - 56px);\n}\napp-report-sidebar {\n  width: 280px;\n  flex-shrink: 0;\n}\n.reports-content {\n  flex: 1;\n  padding: 1rem;\n  overflow-y: auto;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n}\n.welcome-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  text-align: center;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/reports/reports.ts", lineNumber: 28 });
})();
export {
  ReportsComponent
};
