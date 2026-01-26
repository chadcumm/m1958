import {
  MermaidDiagramComponent
} from "./chunk-AUP2RJML.js";
import {
  Router,
  RouterLink
} from "./chunk-FSK4RQW2.js";
import {
  CclServiceWrapperService
} from "./chunk-OW7H3GAM.js";
import {
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-QDEHJEDS.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Observable,
  computed,
  effect,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/operations/services/operations.service.ts
var OperationsService = class _OperationsService {
  cclService = inject(CclServiceWrapperService);
  // State signals
  _recentRuns = signal([], ...ngDevMode ? [{ debugName: "_recentRuns" }] : []);
  _totalRunCount = signal(0, ...ngDevMode ? [{ debugName: "_totalRunCount" }] : []);
  _loadingRuns = signal(false, ...ngDevMode ? [{ debugName: "_loadingRuns" }] : []);
  _runsError = signal(null, ...ngDevMode ? [{ debugName: "_runsError" }] : []);
  // Public readonly accessors
  recentRuns = this._recentRuns.asReadonly();
  totalRunCount = this._totalRunCount.asReadonly();
  loadingRuns = this._loadingRuns.asReadonly();
  runsError = this._runsError.asReadonly();
  /**
   * Load recent manager runs
   * @param limit Maximum number of runs to return (default 20, max 100)
   */
  loadRecentRuns(limit = 20) {
    this._loadingRuns.set(true);
    this._runsError.set(null);
    const requestData = JSON.stringify({
      recent_runs_params: { limit }
    });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getRecentManagerRuns",
          parameters: {
            requestType: "getRecentManagerRuns",
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [], () => this.handleRecentRunsResponse());
  }
  handleRecentRunsResponse() {
    try {
      const response = this.cclService.get("getRecentManagerRuns");
      if (response) {
        this._recentRuns.set(response.RUNS ?? []);
        this._totalRunCount.set(response.RUN_CNT ?? 0);
      } else {
        this._runsError.set("No response from server");
      }
    } catch (err) {
      this._runsError.set(err instanceof Error ? err.message : "Failed to load recent runs");
    } finally {
      this._loadingRuns.set(false);
    }
  }
  /**
   * Clear the recent runs data
   */
  clearRecentRuns() {
    this._recentRuns.set([]);
    this._totalRunCount.set(0);
    this._runsError.set(null);
  }
  static \u0275fac = function OperationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OperationsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OperationsService, factory: _OperationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/operations/components/system-overview-panel.ts
function SystemOverviewPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "polyline", 28)(2, "polyline", 29)(3, "line", 30)(4, "line", 31);
    \u0275\u0275elementEnd();
  }
}
function SystemOverviewPanelComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "polyline", 32)(2, "polyline", 33)(3, "line", 34)(4, "line", 31);
    \u0275\u0275elementEnd();
  }
}
function SystemOverviewPanelComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading recent runs...");
    \u0275\u0275elementEnd()();
  }
}
function SystemOverviewPanelComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 36);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function SystemOverviewPanelComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2, "No manager runs recorded yet.");
    \u0275\u0275elementEnd()();
  }
}
function SystemOverviewPanelComponent_Conditional_37_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 40);
    \u0275\u0275listener("click", function SystemOverviewPanelComponent_Conditional_37_For_18_Template_tr_click_0_listener() {
      const run_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onViewLog(run_r3.LOG_ID));
    });
    \u0275\u0275elementStart(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const run_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(run_r3.START_FORMATTED);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(run_r3.DURATION_SECONDS));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(run_r3.STATUS));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", run_r3.STATUS, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(run_r3.RECORD_CNT);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-errors", run_r3.ERROR_CNT > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", run_r3.ERROR_CNT, " ");
  }
}
function SystemOverviewPanelComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 38)(3, "table")(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Errors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SystemOverviewPanelComponent_Conditional_37_For_18_Template, 12, 9, "tr", 39, \u0275\u0275componentInstance().trackByLogId, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Showing ", ctx_r0.recentRuns().length, " of ", ctx_r0.totalRunCount(), " runs ");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.recentRuns());
  }
}
var SystemOverviewPanelComponent = class _SystemOverviewPanelComponent {
  operationsService = inject(OperationsService);
  // Signals from service
  recentRuns = this.operationsService.recentRuns;
  totalRunCount = this.operationsService.totalRunCount;
  loading = this.operationsService.loadingRuns;
  error = this.operationsService.runsError;
  // Outputs
  closed = output();
  viewLog = output();
  // Fullscreen mode
  isFullscreen = signal(false, ...ngDevMode ? [{ debugName: "isFullscreen" }] : []);
  // Mermaid diagram definition for high-level data flow
  flowDiagram = signal(`flowchart TB
    subgraph Stage1["Stage 1: Data Extraction (Hourly)"]
        direction TB
        M1[Load MHA Locations]
        M2[Discover Candidates]
        M3[Check Clients/Episodes]
        M4[Create/Update Records]
        M5[Backfill Appointments]
        M6[Extract Services]
        M1 --> M2 --> M3 --> M4 --> M5 --> M6
    end

    subgraph Tables["Database Tables"]
        direction LR
        T1[(EPISODE)]
        T2[(CLIENT)]
        T3[(SERVICE)]
        T4[(APPOINTMENT)]
    end

    subgraph Stage2["Stage 2: Transmission (Daily)"]
        direction TB
        D1[Query PENDING Episodes]
        D2{Determine<br/>Bundle Types}
        D3[Build FHIR Bundles]
        D4[Send to Mirth]
        D5[Mark SUBMITTED]
        D1 --> D2 --> D3 --> D4 --> D5
    end

    Stage1 --> Tables
    Tables --> Stage2
    Stage2 -->|HTTPS| Mirth[Mirth Connect]
    Mirth -->|FHIR| OH[Ontario Health]`, ...ngDevMode ? [{ debugName: "flowDiagram" }] : []);
  // Detailed manager process diagram with decision points
  managerDiagram = signal(`flowchart TD
    Start([Manager Start]) --> LoadConfig[Load MHA Location Config]
    LoadConfig --> ConfigOK{Config<br/>Loaded?}
    ConfigOK -->|No| Error1[Log Error & Exit]
    ConfigOK -->|Yes| QueryEncntrs[Query Encounters at<br/>MHA Locations]

    QueryEncntrs --> HasCandidates{Candidates<br/>Found?}
    HasCandidates -->|No| NoWork[Log: No candidates]
    HasCandidates -->|Yes| CheckClients[Check CLIENT Table<br/>for Each Person]

    CheckClients --> ClientLoop{For Each<br/>Candidate}
    ClientLoop --> ClientExists{Client<br/>Exists?}

    ClientExists -->|No| ActionNew[Action = NEW]
    ClientExists -->|Yes| CompareAddr[Compare Address<br/>City/Province/Postal]

    CompareAddr --> AddrChanged{Address<br/>Changed?}
    AddrChanged -->|Yes| ActionUpdate[Action = UPDATE]
    AddrChanged -->|No| ActionUnchanged[Action = UNCHANGED]

    ActionNew --> CheckEpisode
    ActionUpdate --> CheckEpisode
    ActionUnchanged --> CheckEpisode

    CheckEpisode[Check EPISODE Table]
    CheckEpisode --> EpExists{Episode<br/>Exists?}
    EpExists -->|Yes| UseExisting[Use Existing Episode]
    EpExists -->|No| CreateEpisode[Create New Episode]

    UseExisting --> ProcessUpdate{UPDATE<br/>Client?}
    ProcessUpdate -->|Yes| InactivateOld[Inactivate Existing<br/>CLIENT Records]
    ProcessUpdate -->|No| NextCandidate
    InactivateOld --> CreateUpdateClient[Create New CLIENT<br/>with Updated Data]
    CreateUpdateClient --> NextCandidate

    CreateEpisode --> CreateClient[Create CLIENT Record]
    CreateClient --> ExtractDE05[Extract DE05: Referral Data]
    ExtractDE05 --> ExtractDE06[Extract DE06: Episode Dates]
    ExtractDE06 --> ExtractDE09[Extract DE09: Health Program]
    ExtractDE09 --> BackfillAppts[Backfill Appointments<br/>from sch_appt]
    BackfillAppts --> ExtractServices[Extract Services<br/>from clinical_event]

    ExtractServices --> NextCandidate{More<br/>Candidates?}
    NextCandidate -->|Yes| ClientLoop
    NextCandidate -->|No| Summary[Generate Summary]

    Summary --> StoreLog[Store t_rec JSON in Log]
    StoreLog --> Complete([Manager Complete])
    NoWork --> Complete
    Error1 --> Complete

    style Start fill:#e1f5fe
    style Complete fill:#c8e6c9
    style Error1 fill:#ffcdd2
    style ActionNew fill:#fff9c4
    style ActionUpdate fill:#ffe0b2
    style ActionUnchanged fill:#f5f5f5
    style InactivateOld fill:#ffccbc
    style CreateUpdateClient fill:#ffe0b2`, ...ngDevMode ? [{ debugName: "managerDiagram" }] : []);
  // Detailed transmission process diagram with bundle determination
  transmissionDiagram = signal(`flowchart TD
    Start([Transmission Start]) --> QueryEp[Query PENDING Episodes]
    QueryEp --> HasEpisodes{Episodes<br/>Found?}
    HasEpisodes -->|No| NoWork[Log: No pending data]
    HasEpisodes -->|Yes| EpisodeLoop{For Each<br/>Episode}

    EpisodeLoop --> CheckTables[Check All Tables<br/>for PENDING Data]

    subgraph BundleCheck["Determine Bundle Types"]
        direction TB
        CheckTables --> ChkEp{EPISODE<br/>PENDING?}
        ChkEp -->|Yes| AddSREOC[Add SERVICE_REQUEST_EOC]
        ChkEp -->|No| ChkClient

        AddSREOC --> ChkClient{CLIENT<br/>PENDING?}
        ChkClient -->|Yes| AddSDOH[Add CLIENT_SDOH]
        ChkClient -->|No| ChkSvc

        AddSDOH --> ChkSvc{SERVICE<br/>PENDING?}
        ChkSvc -->|Yes| AddHS[Add HEALTH_SERVICES]
        ChkSvc -->|No| ChkAppt

        AddHS --> ChkAppt{APPOINTMENT<br/>PENDING?}
        ChkAppt -->|Yes| AddSA[Add SCHEDULED_APPOINTMENT]
        ChkAppt -->|No| BuildBundle
        AddSA --> BuildBundle
    end

    BuildBundle[Build FHIR Bundle<br/>with All Types]
    BuildBundle --> SendMirth[Send to Mirth Connect]
    SendMirth --> Success{Send<br/>Success?}

    Success -->|Yes| UpdateAll[Update All Tables<br/>to SUBMITTED]
    Success -->|No| LogError[Log Error<br/>Keep PENDING]

    UpdateAll --> NextEp{More<br/>Episodes?}
    LogError --> NextEp
    NextEp -->|Yes| EpisodeLoop
    NextEp -->|No| Summary[Generate Summary]

    Summary --> Complete([Transmission Complete])
    NoWork --> Complete

    style Start fill:#e1f5fe
    style Complete fill:#c8e6c9
    style AddSREOC fill:#bbdefb
    style AddSDOH fill:#c8e6c9
    style AddHS fill:#fff9c4
    style AddSA fill:#ffe0b2
    style LogError fill:#ffcdd2
    style UpdateAll fill:#c8e6c9`, ...ngDevMode ? [{ debugName: "transmissionDiagram" }] : []);
  constructor() {
    effect(() => {
      this.operationsService.loadRecentRuns(20);
    }, { allowSignalWrites: true });
  }
  onClose() {
    this.isFullscreen.set(false);
    this.operationsService.clearRecentRuns();
    this.closed.emit();
  }
  toggleFullscreen() {
    this.isFullscreen.update((v) => !v);
  }
  onViewLog(logId) {
    this.viewLog.emit(logId);
  }
  getStatusClass(status) {
    switch (status?.toUpperCase()) {
      case "SUCCESS":
        return "status-success";
      case "ERROR":
      case "FAILED":
        return "status-error";
      case "IN_PROGRESS":
        return "status-progress";
      default:
        return "";
    }
  }
  formatDuration(seconds) {
    if (!seconds || seconds <= 0)
      return "-";
    if (seconds < 60)
      return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
  }
  trackByLogId(index, run) {
    return run.LOG_ID;
  }
  static \u0275fac = function SystemOverviewPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemOverviewPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemOverviewPanelComponent, selectors: [["app-system-overview-panel"]], outputs: { closed: "closed", viewLog: "viewLog" }, decls: 75, vars: 8, consts: [[1, "overview-panel"], [1, "panel-header"], [1, "header-actions"], [1, "fullscreen-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Close", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "panel-content"], [1, "overview-section"], [1, "diagram-container"], [3, "definition"], [1, "section-description"], [1, "diagram-container", "diagram-large"], [1, "loading-state"], [1, "error-state"], [1, "empty-state"], [1, "overview-section", "legend-section"], [1, "legend-grid"], [1, "legend-item"], [1, "legend-badge", "stage1"], [1, "legend-text"], [1, "legend-badge", "stage2"], [1, "mt-3"], [1, "legend-grid", "bundle-types"], [1, "legend-badge", "bundle-sreoc"], [1, "legend-badge", "bundle-sdoh"], [1, "legend-badge", "bundle-hs"], [1, "legend-badge", "bundle-sa"], ["points", "4 14 10 14 10 20"], ["points", "20 10 14 10 14 4"], ["x1", "14", "y1", "10", "x2", "21", "y2", "3"], ["x1", "3", "y1", "21", "x2", "10", "y2", "14"], ["points", "15 3 21 3 21 9"], ["points", "9 21 3 21 3 15"], ["x1", "21", "y1", "3", "x2", "14", "y2", "10"], [1, "spinner"], [1, "error-icon"], [1, "runs-summary"], [1, "runs-table"], [1, "run-row"], [1, "run-row", 3, "click"], [1, "start-time"], [1, "duration"], [1, "status-badge"], [1, "record-count"], [1, "error-count"]], template: function SystemOverviewPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "System Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
      \u0275\u0275listener("click", function SystemOverviewPanelComponent_Template_button_click_5_listener() {
        return ctx.toggleFullscreen();
      });
      \u0275\u0275conditionalCreate(6, SystemOverviewPanelComponent_Conditional_6_Template, 5, 0, ":svg:svg", 4)(7, SystemOverviewPanelComponent_Conditional_7_Template, 5, 0, ":svg:svg", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function SystemOverviewPanelComponent_Template_button_click_8_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "\xD7");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "section", 8)(13, "h5");
      \u0275\u0275text(14, "Data Flow Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275element(16, "app-mermaid-diagram", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "section", 8)(18, "h5");
      \u0275\u0275text(19, "Stage 1: Manager Process Detail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 11);
      \u0275\u0275text(21, " Detailed flow showing decision points for client comparison and episode creation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12);
      \u0275\u0275element(23, "app-mermaid-diagram", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "section", 8)(25, "h5");
      \u0275\u0275text(26, "Stage 2: Transmission Process Detail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 11);
      \u0275\u0275text(28, " Dynamic bundle determination based on pending data in EPISODE, CLIENT, SERVICE, and APPOINTMENT tables ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 12);
      \u0275\u0275element(30, "app-mermaid-diagram", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "section", 8)(32, "h5");
      \u0275\u0275text(33, "Recent Manager Runs");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, SystemOverviewPanelComponent_Conditional_34_Template, 4, 0, "div", 13)(35, SystemOverviewPanelComponent_Conditional_35_Template, 5, 1, "div", 14)(36, SystemOverviewPanelComponent_Conditional_36_Template, 3, 0, "div", 15)(37, SystemOverviewPanelComponent_Conditional_37_Template, 19, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "section", 16)(39, "h5");
      \u0275\u0275text(40, "Processing Stages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 17)(42, "div", 18)(43, "span", 19);
      \u0275\u0275text(44, "Stage 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 20);
      \u0275\u0275text(46, "Data Extraction (Hourly) - Extract episodes, clients, services, appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 18)(48, "span", 21);
      \u0275\u0275text(49, "Stage 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 20);
      \u0275\u0275text(51, "Data Transmission (Daily) - Build JSON and send to Ontario Health");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "h5", 22);
      \u0275\u0275text(53, "FHIR Bundle Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 23)(55, "div", 18)(56, "span", 24);
      \u0275\u0275text(57, "SERVICE_REQUEST_EOC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 20);
      \u0275\u0275text(59, "New episode with referral and health program data");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 18)(61, "span", 25);
      \u0275\u0275text(62, "CLIENT_SDOH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 20);
      \u0275\u0275text(64, "Client demographics and social determinants of health");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 18)(66, "span", 26);
      \u0275\u0275text(67, "HEALTH_SERVICES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 20);
      \u0275\u0275text(69, "Service events (encounters) with provider organization");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 18)(71, "span", 27);
      \u0275\u0275text(72, "SCHEDULED_APPOINTMENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 20);
      \u0275\u0275text(74, "Scheduled appointments linked to episodes");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("fullscreen", ctx.isFullscreen());
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-label", ctx.isFullscreen() ? "Exit fullscreen" : "Enter fullscreen");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFullscreen() ? 6 : 7);
      \u0275\u0275advance(10);
      \u0275\u0275property("definition", ctx.flowDiagram());
      \u0275\u0275advance(7);
      \u0275\u0275property("definition", ctx.managerDiagram());
      \u0275\u0275advance(7);
      \u0275\u0275property("definition", ctx.transmissionDiagram());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 34 : ctx.error() ? 35 : ctx.recentRuns().length === 0 ? 36 : 37);
    }
  }, dependencies: [MermaidDiagramComponent], styles: ["\n\n.overview-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 50vw;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.overview-panel.fullscreen[_ngcontent-%COMP%] {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header[_ngcontent-%COMP%]   .fullscreen-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem 3rem;\n}\n.overview-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.overview-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.overview-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.diagram-container[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 1rem;\n  overflow-x: auto;\n}\n.diagram-container.diagram-large[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.section-description[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.8125rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6c757d;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  color: #721c24;\n  background: #f8d7da;\n  border-radius: 4px;\n}\n.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.runs-summary[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n}\n.runs-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.runs-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.runs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.runs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.runs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9ecef;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.runs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.runs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.runs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  vertical-align: middle;\n}\n.runs-table[_ngcontent-%COMP%]   .start-time[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n}\n.runs-table[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.75rem;\n  color: #1a365d;\n}\n.runs-table[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%], \n.runs-table[_ngcontent-%COMP%]   .error-count[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: monospace;\n}\n.runs-table[_ngcontent-%COMP%]   .error-count.has-errors[_ngcontent-%COMP%] {\n  color: #721c24;\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.legend-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n}\n.legend-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-badge.stage1[_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-badge.stage2[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-badge.bundle-sreoc[_ngcontent-%COMP%] {\n  background: #bbdefb;\n  color: #0d47a1;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-badge.bundle-sdoh[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #1b5e20;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-badge.bundle-hs[_ngcontent-%COMP%] {\n  background: #fff9c4;\n  color: #f57f17;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-badge.bundle-sa[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #495057;\n  line-height: 1.4;\n}\n.bundle-types[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n@media (max-width: 1200px) {\n  .overview-panel[_ngcontent-%COMP%] {\n    width: 70vw;\n  }\n}\n@media (max-width: 768px) {\n  .overview-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .runs-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .runs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .runs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.5rem;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemOverviewPanelComponent, [{
    type: Component,
    args: [{ selector: "app-system-overview-panel", standalone: true, imports: [MermaidDiagramComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="overview-panel" [class.fullscreen]="isFullscreen()">
  <div class="panel-header">
    <h3>System Overview</h3>
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

  <div class="panel-content">
    <!-- Data Flow Diagram Section -->
    <section class="overview-section">
      <h5>Data Flow Overview</h5>
      <div class="diagram-container">
        <app-mermaid-diagram [definition]="flowDiagram()" />
      </div>
    </section>

    <!-- Manager Process Detail Section -->
    <section class="overview-section">
      <h5>Stage 1: Manager Process Detail</h5>
      <p class="section-description">
        Detailed flow showing decision points for client comparison and episode creation
      </p>
      <div class="diagram-container diagram-large">
        <app-mermaid-diagram [definition]="managerDiagram()" />
      </div>
    </section>

    <!-- Transmission Process Detail Section -->
    <section class="overview-section">
      <h5>Stage 2: Transmission Process Detail</h5>
      <p class="section-description">
        Dynamic bundle determination based on pending data in EPISODE, CLIENT, SERVICE, and APPOINTMENT tables
      </p>
      <div class="diagram-container diagram-large">
        <app-mermaid-diagram [definition]="transmissionDiagram()" />
      </div>
    </section>

    <!-- Recent Executions Section -->
    <section class="overview-section">
      <h5>Recent Manager Runs</h5>

      @if (loading()) {
        <div class="loading-state">
          <div class="spinner"></div>
          <span>Loading recent runs...</span>
        </div>
      } @else if (error()) {
        <div class="error-state">
          <span class="error-icon">!</span>
          <span>{{ error() }}</span>
        </div>
      } @else if (recentRuns().length === 0) {
        <div class="empty-state">
          <p>No manager runs recorded yet.</p>
        </div>
      } @else {
        <div class="runs-summary">
          Showing {{ recentRuns().length }} of {{ totalRunCount() }} runs
        </div>

        <div class="runs-table">
          <table>
            <thead>
              <tr>
                <th>Started</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Records</th>
                <th>Errors</th>
              </tr>
            </thead>
            <tbody>
              @for (run of recentRuns(); track trackByLogId($index, run)) {
                <tr class="run-row" (click)="onViewLog(run.LOG_ID)">
                  <td class="start-time">{{ run.START_FORMATTED }}</td>
                  <td class="duration">{{ formatDuration(run.DURATION_SECONDS) }}</td>
                  <td>
                    <span class="status-badge" [class]="getStatusClass(run.STATUS)">
                      {{ run.STATUS }}
                    </span>
                  </td>
                  <td class="record-count">{{ run.RECORD_CNT }}</td>
                  <td class="error-count" [class.has-errors]="run.ERROR_CNT > 0">
                    {{ run.ERROR_CNT }}
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>

    <!-- Legend Section -->
    <section class="overview-section legend-section">
      <h5>Processing Stages</h5>
      <div class="legend-grid">
        <div class="legend-item">
          <span class="legend-badge stage1">Stage 1</span>
          <span class="legend-text">Data Extraction (Hourly) - Extract episodes, clients, services, appointments</span>
        </div>
        <div class="legend-item">
          <span class="legend-badge stage2">Stage 2</span>
          <span class="legend-text">Data Transmission (Daily) - Build JSON and send to Ontario Health</span>
        </div>
      </div>

      <h5 class="mt-3">FHIR Bundle Types</h5>
      <div class="legend-grid bundle-types">
        <div class="legend-item">
          <span class="legend-badge bundle-sreoc">SERVICE_REQUEST_EOC</span>
          <span class="legend-text">New episode with referral and health program data</span>
        </div>
        <div class="legend-item">
          <span class="legend-badge bundle-sdoh">CLIENT_SDOH</span>
          <span class="legend-text">Client demographics and social determinants of health</span>
        </div>
        <div class="legend-item">
          <span class="legend-badge bundle-hs">HEALTH_SERVICES</span>
          <span class="legend-text">Service events (encounters) with provider organization</span>
        </div>
        <div class="legend-item">
          <span class="legend-badge bundle-sa">SCHEDULED_APPOINTMENT</span>
          <span class="legend-text">Scheduled appointments linked to episodes</span>
        </div>
      </div>
    </section>
  </div>
</div>
`, styles: ["/* src/app/operations/components/system-overview-panel.scss */\n.overview-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 50vw;\n  height: 100vh;\n  background: white;\n  border-left: 1px solid #dee2e6;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.overview-panel.fullscreen {\n  width: 100vw;\n  border-left: none;\n  box-shadow: none;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #dee2e6;\n  background: #1a365d;\n  color: white;\n}\n.panel-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.panel-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.panel-header .fullscreen-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .fullscreen-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-header .fullscreen-btn svg {\n  display: block;\n}\n.panel-header .close-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.15s;\n}\n.panel-header .close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.fullscreen .panel-content {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem 3rem;\n}\n.overview-section {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.overview-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.overview-section h5 {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6c757d;\n}\n.diagram-container {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 1rem;\n  overflow-x: auto;\n}\n.diagram-container.diagram-large {\n  min-height: 400px;\n}\n.section-description {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.8125rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.loading-state,\n.empty-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6c757d;\n  text-align: center;\n}\n.loading-state .spinner,\n.empty-state .spinner,\n.error-state .spinner {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 0.5rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  color: #721c24;\n  background: #f8d7da;\n  border-radius: 4px;\n}\n.error-state .error-icon {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.runs-summary {\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n}\n.runs-table {\n  overflow-x: auto;\n}\n.runs-table table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.runs-table thead {\n  background: #f8f9fa;\n}\n.runs-table thead th {\n  padding: 0.5rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  white-space: nowrap;\n}\n.runs-table tbody tr {\n  border-bottom: 1px solid #e9ecef;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.runs-table tbody tr:hover {\n  background: #f8f9fa;\n}\n.runs-table tbody tr:last-child {\n  border-bottom: none;\n}\n.runs-table tbody td {\n  padding: 0.5rem 0.75rem;\n  vertical-align: middle;\n}\n.runs-table .start-time {\n  white-space: nowrap;\n  font-size: 0.75rem;\n}\n.runs-table .duration {\n  font-family: monospace;\n  font-size: 0.75rem;\n  color: #1a365d;\n}\n.runs-table .record-count,\n.runs-table .error-count {\n  text-align: center;\n  font-family: monospace;\n}\n.runs-table .error-count.has-errors {\n  color: #721c24;\n  font-weight: 600;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-progress {\n  background: #fff3cd;\n  color: #856404;\n}\n.legend-section {\n  background: #f8f9fa;\n  margin: 1.5rem -1.5rem -1.5rem -1.5rem;\n  padding: 1.5rem;\n}\n.legend-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.legend-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.legend-item .legend-badge {\n  display: inline-block;\n  padding: 0.125rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.legend-item .legend-badge.stage1 {\n  background: #cce5ff;\n  color: #004085;\n}\n.legend-item .legend-badge.stage2 {\n  background: #d4edda;\n  color: #155724;\n}\n.legend-item .legend-badge.bundle-sreoc {\n  background: #bbdefb;\n  color: #0d47a1;\n}\n.legend-item .legend-badge.bundle-sdoh {\n  background: #c8e6c9;\n  color: #1b5e20;\n}\n.legend-item .legend-badge.bundle-hs {\n  background: #fff9c4;\n  color: #f57f17;\n}\n.legend-item .legend-badge.bundle-sa {\n  background: #ffe0b2;\n  color: #e65100;\n}\n.legend-item .legend-text {\n  font-size: 0.8125rem;\n  color: #495057;\n  line-height: 1.4;\n}\n.bundle-types {\n  margin-top: 0.5rem;\n}\n.mt-3 {\n  margin-top: 1rem;\n}\n@media (max-width: 1200px) {\n  .overview-panel {\n    width: 70vw;\n  }\n}\n@media (max-width: 768px) {\n  .overview-panel {\n    width: 100%;\n  }\n  .runs-table table {\n    font-size: 0.75rem;\n  }\n  .runs-table th,\n  .runs-table td {\n    padding: 0.375rem 0.5rem;\n  }\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemOverviewPanelComponent, { className: "SystemOverviewPanelComponent", filePath: "src/app/operations/components/system-overview-panel.ts", lineNumber: 17 });
})();

// src/app/services/mha-pds-operations.service.ts
var MhaPdsOperationsService = class _MhaPdsOperationsService {
  cclService = inject(CclServiceWrapperService);
  // Signals for reactive state management
  _triggerState = signal({
    isLoading: false,
    lastTrigger: null,
    error: null
  }, ...ngDevMode ? [{ debugName: "_triggerState" }] : []);
  // Public readonly accessors
  triggerState = this._triggerState.asReadonly();
  isLoading = computed(() => this._triggerState().isLoading, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  lastTrigger = computed(() => this._triggerState().lastTrigger, ...ngDevMode ? [{ debugName: "lastTrigger" }] : []);
  triggerError = computed(() => this._triggerState().error, ...ngDevMode ? [{ debugName: "triggerError" }] : []);
  /**
   * Trigger Mirth Connect to pull MHA PDS data
   * Calls the triggerMirthPull CCL service request
   *
   * @returns Observable that emits the trigger response
   */
  triggerMirthPull() {
    return new Observable((subscriber) => {
      this._triggerState.update((state) => __spreadProps(__spreadValues({}, state), {
        isLoading: true,
        error: null
      }));
      this.cclService.load({
        customScript: {
          script: [{
            name: "gbin_mha_pds_service:group1",
            run: "pre",
            id: "triggerMirth",
            parameters: {
              requestType: "triggerMirthPull"
            }
          }],
          clearPatientSource: true
        }
      }, [{ personId: 0, encntrId: 0 }], () => {
        const response = this.cclService.get("triggerMirth");
        this._triggerState.update((state) => __spreadProps(__spreadValues({}, state), {
          isLoading: false,
          lastTrigger: response,
          error: response?.status === "F" ? response.message : null
        }));
        if (response?.status === "S") {
          subscriber.next(response);
          subscriber.complete();
        } else {
          const errorMsg = response?.message || "Unknown error triggering Mirth pull";
          subscriber.error({ status: "F", message: errorMsg });
        }
      });
    });
  }
  /**
   * Clear the last trigger state
   */
  clearTriggerState() {
    this._triggerState.set({
      isLoading: false,
      lastTrigger: null,
      error: null
    });
  }
  static \u0275fac = function MhaPdsOperationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MhaPdsOperationsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MhaPdsOperationsService, factory: _MhaPdsOperationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MhaPdsOperationsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/operations/operations.ts
var _c0 = () => ["/logs"];
var _c1 = (a0) => ({ logId: a0 });
function OperationsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
    \u0275\u0275text(1, " Running... ");
  }
}
function OperationsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Run Manager ");
  }
}
function OperationsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
    \u0275\u0275text(1, " Triggering... ");
  }
}
function OperationsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Trigger Mirth Pull ");
  }
}
function OperationsComponent_Conditional_42_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Triggered by: ", (tmp_2_0 = ctx_r0.triggerResult()) == null ? null : tmp_2_0.triggered_by);
  }
}
function OperationsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, OperationsComponent_Conditional_42_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
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
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("success", ((tmp_1_0 = ctx_r0.triggerResult()) == null ? null : tmp_1_0.status) === "S")("error", ((tmp_2_0 = ctx_r0.triggerResult()) == null ? null : tmp_2_0.status) === "F");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", ((tmp_3_0 = ctx_r0.triggerResult()) == null ? null : tmp_3_0.status) === "S")("error", ((tmp_4_0 = ctx_r0.triggerResult()) == null ? null : tmp_4_0.status) === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r0.triggerResult()) == null ? null : tmp_5_0.status) === "S" ? "SUCCESS" : "ERROR", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r0.triggerResult()) == null ? null : tmp_6_0.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Timestamp: ", (tmp_7_0 = ctx_r0.triggerResult()) == null ? null : tmp_7_0.timestamp);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r0.triggerResult()) == null ? null : tmp_8_0.triggered_by) ? 9 : -1);
  }
}
function OperationsComponent_Conditional_43_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "a", 35);
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
function OperationsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24)(1, "h3");
    \u0275\u0275text(2, "Execution Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 26)(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 28)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 29)(15, "h4");
    \u0275\u0275text(16, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 30)(18, "div", 31)(19, "span", 32);
    \u0275\u0275text(20, "Total Candidates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 33);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 31)(24, "span", 32);
    \u0275\u0275text(25, "New Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 33);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 31)(29, "span", 32);
    \u0275\u0275text(30, "Updated Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 33);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 31)(34, "span", 32);
    \u0275\u0275text(35, "Unchanged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 33);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 31)(39, "span", 32);
    \u0275\u0275text(40, "Episodes Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 33);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 31)(44, "span", 32);
    \u0275\u0275text(45, "Services Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 33);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 31)(49, "span", 32);
    \u0275\u0275text(50, "Appointments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 33);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(53, OperationsComponent_Conditional_43_Conditional_53_Template, 3, 6, "div", 34);
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
    let tmp_16_0;
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
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_15_0 = ctx_r0.result()) == null ? null : tmp_15_0.summary == null ? null : tmp_15_0.summary.appointments_created);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = ctx_r0.result()) == null ? null : tmp_16_0.log_id) ? 53 : -1);
  }
}
function OperationsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-system-overview-panel", 36);
    \u0275\u0275listener("closed", function OperationsComponent_Conditional_44_Template_app_system_overview_panel_closed_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSystemOverview());
    })("viewLog", function OperationsComponent_Conditional_44_Template_app_system_overview_panel_viewLog_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onViewLog($event));
    });
    \u0275\u0275elementEnd();
  }
}
var OperationsComponent = class _OperationsComponent {
  cclService = inject(CclServiceWrapperService);
  operationsService = inject(OperationsService);
  mirthOpsService = inject(MhaPdsOperationsService);
  router = inject(Router);
  // State
  commitMode = 0;
  // 0=test, 1=commit
  running = signal(false, ...ngDevMode ? [{ debugName: "running" }] : []);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  showSystemOverview = signal(false, ...ngDevMode ? [{ debugName: "showSystemOverview" }] : []);
  // Mirth trigger state
  triggeringMirth = signal(false, ...ngDevMode ? [{ debugName: "triggeringMirth" }] : []);
  triggerResult = signal(null, ...ngDevMode ? [{ debugName: "triggerResult" }] : []);
  openSystemOverview() {
    this.showSystemOverview.set(true);
  }
  closeSystemOverview() {
    this.showSystemOverview.set(false);
  }
  onViewLog(logId) {
    this.closeSystemOverview();
    this.router.navigate(["/logs"], { queryParams: { logId } });
  }
  triggerMirthPull() {
    this.triggeringMirth.set(true);
    this.triggerResult.set(null);
    this.mirthOpsService.triggerMirthPull().subscribe({
      next: (response) => {
        this.triggerResult.set(response);
        this.triggeringMirth.set(false);
      },
      error: (err) => {
        this.triggerResult.set({
          status: "F",
          message: err?.message || "Failed to trigger Mirth pull",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        this.triggeringMirth.set(false);
      }
    });
  }
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
              services_created: response.summary?.services_created ?? response.SUMMARY?.SERVICES_CREATED ?? 0,
              appointments_created: response.summary?.appointments_created ?? response.SUMMARY?.APPOINTMENTS_CREATED ?? 0
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
            services_created: 0,
            appointments_created: 0
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OperationsComponent, selectors: [["app-operations"]], decls: 45, vars: 13, consts: [[1, "operations-container"], [1, "operations-header"], [1, "header-content"], [1, "subtitle"], [1, "system-overview-btn", 3, "click"], [1, "btn-icon"], [1, "run-manager-section"], [1, "description"], [1, "mode-selector"], [1, "mode-option"], ["type", "radio", "name", "commitMode", 3, "ngModelChange", "value", "ngModel", "disabled"], [1, "mode-label"], [1, "mode-desc"], [1, "run-button", 3, "click", "disabled"], [1, "trigger-mirth-section"], [1, "trigger-button", 3, "click", "disabled"], [1, "trigger-result", 3, "success", "error"], [1, "results-section", 3, "success", "error"], [1, "spinner"], [1, "trigger-result"], [1, "trigger-status"], [1, "status-badge"], [1, "trigger-message"], [1, "trigger-details"], [1, "results-section"], [1, "result-summary"], [1, "result-status"], [1, "result-message"], [1, "result-timing"], [1, "result-details"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "result-actions"], [1, "view-log-link", 3, "routerLink", "queryParams"], [3, "closed", "viewLog"]], template: function OperationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "MHA PDS Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manually trigger data extraction and processing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function OperationsComponent_Template_button_click_7_listener() {
        return ctx.openSystemOverview();
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "\u2630");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " System Overview ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 6)(12, "h2");
      \u0275\u0275text(13, "Run Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 7);
      \u0275\u0275text(15, " Execute the MHA PDS Manager to extract patient data from Cerner encounters and process them for submission. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 9)(18, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function OperationsComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.commitMode, $event) || (ctx.commitMode = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 11)(20, "strong");
      \u0275\u0275text(21, "Test Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 12);
      \u0275\u0275text(23, "Validate data extraction without saving changes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "label", 9)(25, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function OperationsComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.commitMode, $event) || (ctx.commitMode = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 11)(27, "strong");
      \u0275\u0275text(28, "Commit Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 12);
      \u0275\u0275text(30, "Extract data and save to database");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "button", 13);
      \u0275\u0275listener("click", function OperationsComponent_Template_button_click_31_listener() {
        return ctx.runManager();
      });
      \u0275\u0275conditionalCreate(32, OperationsComponent_Conditional_32_Template, 2, 0)(33, OperationsComponent_Conditional_33_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "section", 14)(35, "h2");
      \u0275\u0275text(36, "Trigger Mirth Pull");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 7);
      \u0275\u0275text(38, " Manually trigger Mirth Connect to pull processed MHA PDS data for transmission. This calls the Mirth REST API to start the data polling channel. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 15);
      \u0275\u0275listener("click", function OperationsComponent_Template_button_click_39_listener() {
        return ctx.triggerMirthPull();
      });
      \u0275\u0275conditionalCreate(40, OperationsComponent_Conditional_40_Template, 2, 0)(41, OperationsComponent_Conditional_41_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, OperationsComponent_Conditional_42_Template, 10, 12, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(43, OperationsComponent_Conditional_43_Template, 54, 20, "section", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(44, OperationsComponent_Conditional_44_Template, 1, 0, "app-system-overview-panel");
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
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
      \u0275\u0275conditional(ctx.running() ? 32 : 33);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.triggeringMirth());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.triggeringMirth() ? 40 : 41);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.triggerResult() ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.result() ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSystemOverview() ? 44 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, RouterLink, SystemOverviewPanelComponent], styles: ["\n\n.operations-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.operations-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n}\n.system-overview-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  color: #1a365d;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.system-overview-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.run-manager-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.run-manager-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: #666;\n}\n.mode-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.mode-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mode-option[_ngcontent-%COMP%]:hover {\n  border-color: #1a365d;\n  background: #f8fafc;\n}\n.mode-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mode-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mode-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a365d;\n}\n.mode-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.run-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.run-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2d4a7c;\n}\n.run-button[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.results-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid #9ca3af;\n}\n.results-section.success[_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n}\n.results-section.error[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.results-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #1a365d;\n}\n.result-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 16px;\n}\n.result-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #9ca3af;\n  color: white;\n}\n.status-badge.success[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.status-badge.error[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.result-message[_ngcontent-%COMP%] {\n  color: #333;\n}\n.result-timing[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  color: #666;\n  font-size: 14px;\n}\n.result-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a365d;\n}\n.result-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e0e0e0;\n}\n.view-log-link[_ngcontent-%COMP%] {\n  color: #1a365d;\n  text-decoration: none;\n  font-weight: 500;\n}\n.view-log-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.trigger-mirth-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.trigger-mirth-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.trigger-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.trigger-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.trigger-button[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.trigger-result[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border-left: 4px solid #9ca3af;\n}\n.trigger-result.success[_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n  background: #f0fdf4;\n}\n.trigger-result.error[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n  background: #fef2f2;\n}\n.trigger-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.trigger-message[_ngcontent-%COMP%] {\n  color: #333;\n}\n.trigger-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #666;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationsComponent, [{
    type: Component,
    args: [{ selector: "app-operations", standalone: true, imports: [CommonModule, FormsModule, RouterLink, SystemOverviewPanelComponent], template: `
    <div class="operations-container">
      <header class="operations-header">
        <div class="header-content">
          <h1>MHA PDS Operations</h1>
          <p class="subtitle">Manually trigger data extraction and processing</p>
        </div>
        <button class="system-overview-btn" (click)="openSystemOverview()">
          <span class="btn-icon">&#9776;</span>
          System Overview
        </button>
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

      <section class="trigger-mirth-section">
        <h2>Trigger Mirth Pull</h2>
        <p class="description">
          Manually trigger Mirth Connect to pull processed MHA PDS data for transmission.
          This calls the Mirth REST API to start the data polling channel.
        </p>

        <button
          class="trigger-button"
          [disabled]="triggeringMirth()"
          (click)="triggerMirthPull()"
        >
          @if (triggeringMirth()) {
            <span class="spinner"></span>
            Triggering...
          } @else {
            Trigger Mirth Pull
          }
        </button>

        @if (triggerResult()) {
          <div class="trigger-result" [class.success]="triggerResult()?.status === 'S'"
               [class.error]="triggerResult()?.status === 'F'">
            <div class="trigger-status">
              <span class="status-badge" [class.success]="triggerResult()?.status === 'S'"
                    [class.error]="triggerResult()?.status === 'F'">
                {{ triggerResult()?.status === 'S' ? 'SUCCESS' : 'ERROR' }}
              </span>
              <span class="trigger-message">{{ triggerResult()?.message }}</span>
            </div>
            <div class="trigger-details">
              <span>Timestamp: {{ triggerResult()?.timestamp }}</span>
              @if (triggerResult()?.triggered_by) {
                <span>Triggered by: {{ triggerResult()?.triggered_by }}</span>
              }
            </div>
          </div>
        }
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
              <div class="detail-item">
                <span class="detail-label">Appointments</span>
                <span class="detail-value">{{ result()?.summary?.appointments_created }}</span>
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

    @if (showSystemOverview()) {
      <app-system-overview-panel
        (closed)="closeSystemOverview()"
        (viewLog)="onViewLog($event)"
      />
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;15ae554108a09fbf57862302f28a57d656213d1a82b52d8d7c6f039b87be7efe;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/operations/operations.ts */\n.operations-container {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.operations-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n}\n.header-content h1 {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.subtitle {\n  margin: 0;\n  color: #666;\n}\n.system-overview-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  color: #1a365d;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.system-overview-btn:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.btn-icon {\n  font-size: 16px;\n}\n.run-manager-section {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.run-manager-section h2 {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.description {\n  margin: 0 0 24px 0;\n  color: #666;\n}\n.mode-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.mode-option {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mode-option:hover {\n  border-color: #1a365d;\n  background: #f8fafc;\n}\n.mode-option input[type=radio] {\n  margin-top: 4px;\n}\n.mode-label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mode-label strong {\n  color: #1a365d;\n}\n.mode-desc {\n  font-size: 14px;\n  color: #666;\n}\n.run-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.run-button:hover:not(:disabled) {\n  background: #2d4a7c;\n}\n.run-button:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.results-section {\n  margin-top: 24px;\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid #9ca3af;\n}\n.results-section.success {\n  border-left-color: #10b981;\n}\n.results-section.error {\n  border-left-color: #ef4444;\n}\n.results-section h3 {\n  margin: 0 0 16px 0;\n  color: #1a365d;\n}\n.result-summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 16px;\n}\n.result-status {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #9ca3af;\n  color: white;\n}\n.status-badge.success {\n  background: #10b981;\n}\n.status-badge.error {\n  background: #ef4444;\n}\n.result-message {\n  color: #333;\n}\n.result-timing {\n  display: flex;\n  gap: 16px;\n  color: #666;\n  font-size: 14px;\n}\n.result-details h4 {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label {\n  font-size: 12px;\n  color: #666;\n}\n.detail-value {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a365d;\n}\n.result-actions {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #e0e0e0;\n}\n.view-log-link {\n  color: #1a365d;\n  text-decoration: none;\n  font-weight: 500;\n}\n.view-log-link:hover {\n  text-decoration: underline;\n}\n.trigger-mirth-section {\n  margin-top: 24px;\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.trigger-mirth-section h2 {\n  margin: 0 0 8px 0;\n  color: #1a365d;\n}\n.trigger-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.trigger-button:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.trigger-button:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.trigger-result {\n  margin-top: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border-left: 4px solid #9ca3af;\n}\n.trigger-result.success {\n  border-left-color: #10b981;\n  background: #f0fdf4;\n}\n.trigger-result.error {\n  border-left-color: #ef4444;\n  background: #fef2f2;\n}\n.trigger-status {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.trigger-message {\n  color: #333;\n}\n.trigger-details {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #666;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OperationsComponent, { className: "OperationsComponent", filePath: "src/app/operations/operations.ts", lineNumber: 529 });
})();
export {
  OperationsComponent
};
