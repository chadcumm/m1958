import {
  RouterLink
} from "./chunk-FXSGVO6P.js";
import {
  CclServiceWrapperService
} from "./chunk-BKSRX7TA.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PLBSHY54.js";

// src/app/operations/operations.ts
var _c0 = () => ["/logs"];
var _c1 = (a0) => ({ logId: a0 });
function OperationsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
    \u0275\u0275text(1, " Running... ");
  }
}
function OperationsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Run Manager ");
  }
}
function OperationsComponent_Conditional_29_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "a", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0))("queryParams", \u0275\u0275pureFunction1(4, _c1, (tmp_3_0 = ctx_r0.result()) == null ? null : tmp_3_0.log_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" View Log Entry (ID: ", (tmp_4_0 = ctx_r0.result()) == null ? null : tmp_4_0.log_id, ") ");
  }
}
function OperationsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h3");
    \u0275\u0275text(2, "Execution Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "h4");
    \u0275\u0275text(16, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 21)(19, "span", 22);
    \u0275\u0275text(20, "Total Candidates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 21)(24, "span", 22);
    \u0275\u0275text(25, "New Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 23);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 21)(29, "span", 22);
    \u0275\u0275text(30, "Updated Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 23);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 21)(34, "span", 22);
    \u0275\u0275text(35, "Unchanged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 23);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 21)(39, "span", 22);
    \u0275\u0275text(40, "Episodes Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 23);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 21)(44, "span", 22);
    \u0275\u0275text(45, "Services Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 23);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(48, OperationsComponent_Conditional_29_Conditional_48_Template, 3, 6, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("success", ((tmp_1_0 = ctx_r0.result()) == null ? null : tmp_1_0.status) === "SUCCESS")("error", ((tmp_2_0 = ctx_r0.result()) == null ? null : tmp_2_0.status) === "ERROR");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("success", ((tmp_3_0 = ctx_r0.result()) == null ? null : tmp_3_0.status) === "SUCCESS")("error", ((tmp_4_0 = ctx_r0.result()) == null ? null : tmp_4_0.status) === "ERROR");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r0.result()) == null ? null : tmp_5_0.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r0.result()) == null ? null : tmp_6_0.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Duration: ", (tmp_7_0 = ctx_r0.result()) == null ? null : tmp_7_0.duration_seconds, "s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Mode: ", ((tmp_8_0 = ctx_r0.result()) == null ? null : tmp_8_0.commit_mode) === 0 ? "Test" : "Commit");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx_r0.result()) == null ? null : tmp_9_0.summary == null ? null : tmp_9_0.summary.total_candidates);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx_r0.result()) == null ? null : tmp_10_0.summary == null ? null : tmp_10_0.summary.new_clients);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_11_0 = ctx_r0.result()) == null ? null : tmp_11_0.summary == null ? null : tmp_11_0.summary.update_clients);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r0.result()) == null ? null : tmp_12_0.summary == null ? null : tmp_12_0.summary.unchanged_clients);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_13_0 = ctx_r0.result()) == null ? null : tmp_13_0.summary == null ? null : tmp_13_0.summary.episodes_created);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_14_0 = ctx_r0.result()) == null ? null : tmp_14_0.summary == null ? null : tmp_14_0.summary.services_created);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_15_0 = ctx_r0.result()) == null ? null : tmp_15_0.log_id) ? 48 : -1);
  }
}
var OperationsComponent = class _OperationsComponent {
  cclService = inject(CclServiceWrapperService);
  // State
  commitMode = 0;
  // 0=test, 1=commit
  running = signal(false, ...ngDevMode ? [{ debugName: "running" }] : []);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  runManager() {
    this.running.set(true);
    this.result.set(null);
    const requestData = JSON.stringify({
      run_manager_params: {
        commit_mode: this.commitMode
      }
    });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "runManager",
          parameters: {
            requestType: "runManager",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("runManager");
        if (response) {
          const normalizedResult = {
            executed: response.executed ?? response.EXECUTED ?? 0,
            commit_mode: response.commit_mode ?? response.COMMIT_MODE ?? 0,
            status: response.status ?? response.STATUS ?? "ERROR",
            message: response.message ?? response.MESSAGE ?? "",
            start_dt_tm: response.start_dt_tm ?? response.START_DT_TM ?? 0,
            start_dt_tm_formatted: response.start_dt_tm_formatted ?? response.START_DT_TM_FORMATTED ?? "",
            stop_dt_tm: response.stop_dt_tm ?? response.STOP_DT_TM ?? 0,
            stop_dt_tm_formatted: response.stop_dt_tm_formatted ?? response.STOP_DT_TM_FORMATTED ?? "",
            duration_seconds: response.duration_seconds ?? response.DURATION_SECONDS ?? 0,
            summary: {
              total_candidates: response.summary?.total_candidates ?? response.SUMMARY?.TOTAL_CANDIDATES ?? 0,
              new_clients: response.summary?.new_clients ?? response.SUMMARY?.NEW_CLIENTS ?? 0,
              update_clients: response.summary?.update_clients ?? response.SUMMARY?.UPDATE_CLIENTS ?? 0,
              unchanged_clients: response.summary?.unchanged_clients ?? response.SUMMARY?.UNCHANGED_CLIENTS ?? 0,
              episodes_created: response.summary?.episodes_created ?? response.SUMMARY?.EPISODES_CREATED ?? 0,
              services_created: response.summary?.services_created ?? response.SUMMARY?.SERVICES_CREATED ?? 0
            },
            log_id: response.log_id ?? response.LOG_ID ?? 0,
            error_message: response.error_message ?? response.ERROR_MESSAGE ?? ""
          };
          this.result.set(normalizedResult);
        }
      } catch (err) {
        this.result.set({
          executed: 0,
          commit_mode: this.commitMode,
          status: "ERROR",
          message: "Failed to execute manager: " + (err instanceof Error ? err.message : "Unknown error"),
          start_dt_tm: Date.now(),
          start_dt_tm_formatted: (/* @__PURE__ */ new Date()).toISOString(),
          stop_dt_tm: Date.now(),
          stop_dt_tm_formatted: (/* @__PURE__ */ new Date()).toISOString(),
          duration_seconds: 0,
          summary: {
            total_candidates: 0,
            new_clients: 0,
            update_clients: 0,
            unchanged_clients: 0,
            episodes_created: 0,
            services_created: 0
          },
          log_id: 0,
          error_message: err instanceof Error ? err.message : "Unknown error"
        });
      }
      this.running.set(false);
    });
  }
  static \u0275fac = function OperationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OperationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OperationsComponent, selectors: [["app-operations"]], decls: 30, vars: 9, consts: [[1, "operations-container"], [1, "operations-header"], [1, "subtitle"], [1, "run-manager-section"], [1, "description"], [1, "mode-selector"], [1, "mode-option"], ["type", "radio", "name", "commitMode", 3, "ngModelChange", "value", "ngModel", "disabled"], [1, "mode-label"], [1, "mode-desc"], [1, "run-button", 3, "click", "disabled"], [1, "results-section", 3, "success", "error"], [1, "spinner"], [1, "results-section"], [1, "result-summary"], [1, "result-status"], [1, "status-badge"], [1, "result-message"], [1, "result-timing"], [1, "result-details"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "result-actions"], [1, "view-log-link", 3, "routerLink", "queryParams"]], template: function OperationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "MHA PDS Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manually trigger data extraction and processing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "section", 3)(7, "h2");
      \u0275\u0275text(8, "Run Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10, " Execute the MHA PDS Manager to extract patient data from Cerner encounters and process them for submission. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "label", 6)(13, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function OperationsComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.commitMode, $event) || (ctx.commitMode = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 8)(15, "strong");
      \u0275\u0275text(16, "Test Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, "Validate data extraction without saving changes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "label", 6)(20, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function OperationsComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.commitMode, $event) || (ctx.commitMode = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 8)(22, "strong");
      \u0275\u0275text(23, "Commit Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 9);
      \u0275\u0275text(25, "Extract data and save to database");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "button", 10);
      \u0275\u0275listener("click", function OperationsComponent_Template_button_click_26_listener() {
        return ctx.runManager();
      });
      \u0275\u0275conditionalCreate(27, OperationsComponent_Conditional_27_Template, 2, 0)(28, OperationsComponent_Conditional_28_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, OperationsComponent_Conditional_29_Template, 49, 19, "section", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("value", 0);
      \u0275\u0275twoWayProperty("ngModel", ctx.commitMode);
      \u0275\u0275property("disabled", ctx.running());
      \u0275\u0275advance(7);
      \u0275\u0275property("value", 1);
      \u0275\u0275twoWayProperty("ngModel", ctx.commitMode);
      \u0275\u0275property("disabled", ctx.running());
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.running());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.running() ? 27 : 28);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.result() ? 29 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.operations-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.operations-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.operations-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n}\n.run-manager-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.run-manager-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: #666;\n}\n.mode-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.mode-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mode-option[_ngcontent-%COMP%]:hover {\n  border-color: #1a365d;\n  background: #f8fafc;\n}\n.mode-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mode-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mode-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a365d;\n}\n.mode-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.run-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.run-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2d4a7c;\n}\n.run-button[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.results-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid #9ca3af;\n}\n.results-section.success[_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n}\n.results-section.error[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.results-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #1a365d;\n}\n.result-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 16px;\n}\n.result-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #9ca3af;\n  color: white;\n}\n.status-badge.success[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.status-badge.error[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.result-message[_ngcontent-%COMP%] {\n  color: #333;\n}\n.result-timing[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  color: #666;\n  font-size: 14px;\n}\n.result-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a365d;\n}\n.result-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e0e0e0;\n}\n.view-log-link[_ngcontent-%COMP%] {\n  color: #1a365d;\n  text-decoration: none;\n  font-weight: 500;\n}\n.view-log-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationsComponent, [{
    type: Component,
    args: [{ selector: "app-operations", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `
    <div class="operations-container">
      <header class="operations-header">
        <h1>MHA PDS Operations</h1>
        <p class="subtitle">Manually trigger data extraction and processing</p>
      </header>

      <section class="run-manager-section">
        <h2>Run Manager</h2>
        <p class="description">
          Execute the MHA PDS Manager to extract patient data from Cerner encounters
          and process them for submission.
        </p>

        <div class="mode-selector">
          <label class="mode-option">
            <input
              type="radio"
              name="commitMode"
              [value]="0"
              [(ngModel)]="commitMode"
              [disabled]="running()"
            />
            <span class="mode-label">
              <strong>Test Mode</strong>
              <span class="mode-desc">Validate data extraction without saving changes</span>
            </span>
          </label>

          <label class="mode-option">
            <input
              type="radio"
              name="commitMode"
              [value]="1"
              [(ngModel)]="commitMode"
              [disabled]="running()"
            />
            <span class="mode-label">
              <strong>Commit Mode</strong>
              <span class="mode-desc">Extract data and save to database</span>
            </span>
          </label>
        </div>

        <button
          class="run-button"
          [disabled]="running()"
          (click)="runManager()"
        >
          @if (running()) {
            <span class="spinner"></span>
            Running...
          } @else {
            Run Manager
          }
        </button>
      </section>

      @if (result()) {
        <section class="results-section" [class.success]="result()?.status === 'SUCCESS'"
                 [class.error]="result()?.status === 'ERROR'">
          <h3>Execution Results</h3>

          <div class="result-summary">
            <div class="result-status">
              <span class="status-badge" [class.success]="result()?.status === 'SUCCESS'"
                    [class.error]="result()?.status === 'ERROR'">
                {{ result()?.status }}
              </span>
              <span class="result-message">{{ result()?.message }}</span>
            </div>

            <div class="result-timing">
              <span>Duration: {{ result()?.duration_seconds }}s</span>
              <span>Mode: {{ result()?.commit_mode === 0 ? 'Test' : 'Commit' }}</span>
            </div>
          </div>

          <div class="result-details">
            <h4>Summary</h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="detail-label">Total Candidates</span>
                <span class="detail-value">{{ result()?.summary?.total_candidates }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">New Clients</span>
                <span class="detail-value">{{ result()?.summary?.new_clients }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Updated Clients</span>
                <span class="detail-value">{{ result()?.summary?.update_clients }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Unchanged</span>
                <span class="detail-value">{{ result()?.summary?.unchanged_clients }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Episodes Created</span>
                <span class="detail-value">{{ result()?.summary?.episodes_created }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Services Created</span>
                <span class="detail-value">{{ result()?.summary?.services_created }}</span>
              </div>
            </div>
          </div>

          @if (result()?.log_id) {
            <div class="result-actions">
              <a [routerLink]="['/logs']" [queryParams]="{logId: result()?.log_id}"
                 class="view-log-link">
                View Log Entry (ID: {{ result()?.log_id }})
              </a>
            </div>
          }
        </section>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;ea036bd76ab80e0f4148fb19a80fd78edd85b8f1994a324998943ad5bbef0b66;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/operations/operations.ts */\n.operations-container {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.operations-header {\n  margin-bottom: 32px;\n}\n.operations-header h1 {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.subtitle {\n  margin: 0;\n  color: #666;\n}\n.run-manager-section {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.run-manager-section h2 {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.description {\n  margin: 0 0 24px 0;\n  color: #666;\n}\n.mode-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.mode-option {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mode-option:hover {\n  border-color: #1a365d;\n  background: #f8fafc;\n}\n.mode-option input[type=radio] {\n  margin-top: 4px;\n}\n.mode-label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mode-label strong {\n  color: #1a365d;\n}\n.mode-desc {\n  font-size: 14px;\n  color: #666;\n}\n.run-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.run-button:hover:not(:disabled) {\n  background: #2d4a7c;\n}\n.run-button:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.results-section {\n  margin-top: 24px;\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid #9ca3af;\n}\n.results-section.success {\n  border-left-color: #10b981;\n}\n.results-section.error {\n  border-left-color: #ef4444;\n}\n.results-section h3 {\n  margin: 0 0 16px 0;\n  color: #1a365d;\n}\n.result-summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 16px;\n}\n.result-status {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #9ca3af;\n  color: white;\n}\n.status-badge.success {\n  background: #10b981;\n}\n.status-badge.error {\n  background: #ef4444;\n}\n.result-message {\n  color: #333;\n}\n.result-timing {\n  display: flex;\n  gap: 16px;\n  color: #666;\n  font-size: 14px;\n}\n.result-details h4 {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label {\n  font-size: 12px;\n  color: #666;\n}\n.detail-value {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a365d;\n}\n.result-actions {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e0e0e0;\n}\n.view-log-link {\n  color: #1a365d;\n  text-decoration: none;\n  font-weight: 500;\n}\n.view-log-link:hover {\n  text-decoration: underline;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OperationsComponent, { className: "OperationsComponent", filePath: "src/app/operations/operations.ts", lineNumber: 368 });
})();
export {
  OperationsComponent
};
