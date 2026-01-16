import {
  ChangeDetectionStrategy,
  Component,
  CustomService,
  DefaultValueAccessor,
  FormsModule,
  JsonPipe,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I2AZQYOQ.js";

// src/app/ccl-test/ccl-test.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.filename;
function CclTest_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r1 = ctx.$implicit;
    \u0275\u0275property("value", config_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(config_r1.name);
  }
}
function CclTest_Conditional_17_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 23);
    \u0275\u0275listener("ngModelChange", function CclTest_Conditional_17_Conditional_5_For_4_Template_input_ngModelChange_3_listener($event) {
      const key_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateParam(key_r3, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", "param-" + key_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", key_r3, ":");
    \u0275\u0275advance();
    \u0275\u0275property("id", "param-" + key_r3)("ngModel", ctx_r3.params()[key_r3])("placeholder", "Enter " + key_r3);
  }
}
function CclTest_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h4");
    \u0275\u0275text(2, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CclTest_Conditional_17_Conditional_5_For_4_Template, 4, 5, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.getParamKeys());
  }
}
function CclTest_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "This script has no parameters.");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, CclTest_Conditional_17_Conditional_5_Template, 5, 0, "div", 20)(6, CclTest_Conditional_17_Conditional_6_Template, 2, 0, "p", 21);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.getParamKeys().length > 0 ? 5 : 6);
  }
}
function CclTest_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Executing...");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Execute Script");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function CclTest_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearResults());
    });
    \u0275\u0275text(1, " Clear Results ");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 25);
    \u0275\u0275element(2, "div", 26);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Executing CCL script...");
    \u0275\u0275elementEnd()()();
  }
}
function CclTest_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "h3");
    \u0275\u0275text(2, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.error());
  }
}
function CclTest_Conditional_35_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" - ", ctx_r3.results().error, " ");
  }
}
function CclTest_Conditional_35_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "strong");
    \u0275\u0275text(2, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, CclTest_Conditional_35_Conditional_6_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("success", ctx_r3.results().statusData.status === "S")("failure", ctx_r3.results().statusData.status === "F");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.results().statusData.status === "S" ? "Success" : "Failed", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.results().error ? 4 : -1);
  }
}
function CclTest_Conditional_35_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " in ");
    \u0275\u0275elementStart(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.results().directory);
  }
}
function CclTest_Conditional_35_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "strong");
    \u0275\u0275text(2, "Files Found:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, CclTest_Conditional_35_Conditional_7_Conditional_4_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.results().file_cnt, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.results().directory ? 4 : -1);
  }
}
function CclTest_Conditional_35_Conditional_8_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r7.filename);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r7.filetype);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r7.filesize);
  }
}
function CclTest_Conditional_35_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h4");
    \u0275\u0275text(2, "Files:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 36)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Filename");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Size");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, CclTest_Conditional_35_Conditional_8_For_14_Template, 7, 3, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r3.results().files);
  }
}
function CclTest_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 28)(2, "h3");
    \u0275\u0275text(3, "Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function CclTest_Conditional_35_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyResults());
    });
    \u0275\u0275text(5, "Copy JSON");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, CclTest_Conditional_35_Conditional_6_Template, 5, 6, "div", 30);
    \u0275\u0275conditionalCreate(7, CclTest_Conditional_35_Conditional_7_Template, 5, 2, "div", 31);
    \u0275\u0275conditionalCreate(8, CclTest_Conditional_35_Conditional_8_Template, 15, 0, "div", 32);
    \u0275\u0275elementStart(9, "details", 33)(10, "summary");
    \u0275\u0275text(11, "Raw JSON Response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "pre", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.results().statusData ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.results().file_cnt !== void 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.results().files && ctx_r3.results().files.length > 0 ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.formattedResults());
  }
}
function CclTest_Conditional_36_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Error");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_36_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
  }
}
function CclTest_Conditional_36_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function CclTest_Conditional_36_For_8_Template_div_click_0_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.loadHistoryItem(item_r10));
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
    \u0275\u0275conditionalCreate(9, CclTest_Conditional_36_For_8_Conditional_9_Template, 2, 0, "span", 47)(10, CclTest_Conditional_36_For_8_Conditional_10_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("error", item_r10.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.configId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatTime(item_r10.timestamp));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r10.elapsed, "ms");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r10.error ? 9 : 10);
  }
}
function CclTest_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 37)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function CclTest_Conditional_36_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearHistory());
    });
    \u0275\u0275text(5, "Clear");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 39);
    \u0275\u0275repeaterCreate(7, CclTest_Conditional_36_For_8_Template, 11, 6, "div", 40, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Request History (", ctx_r3.history().length, ")");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.history());
  }
}
var CclTest = class _CclTest {
  customService = inject(CustomService);
  // Available request configurations
  REQUEST_CONFIGS = [
    {
      id: "listDir",
      name: "List Directory (mrha_bb_val_list_dir)",
      scriptName: "mrha_bb_val_list_dir:group1",
      description: "Lists .txt files in the specified directory. Uses dcl() with platform-specific ls/dir commands.",
      defaultParams: {
        directory: "cclscratch:",
        filemask: "*.txt"
      }
    },
    {
      id: "readFile",
      name: "Read File (mrha_bb_val_read_file)",
      scriptName: "mrha_bb_val_read_file:group1",
      description: "Reads content of a specific file from the directory.",
      defaultParams: {
        directory: "cclscratch:",
        filename: ""
      }
    },
    {
      id: "templateTest",
      name: "Template Test (gbin_mpage_template)",
      scriptName: "gbin_mpage_template:group1",
      description: "Basic Clinical Office template test script. Returns server info and timestamp.",
      defaultParams: {}
    }
  ];
  // State signals
  selectedConfigId = signal("listDir", ...ngDevMode ? [{ debugName: "selectedConfigId" }] : []);
  params = signal({}, ...ngDevMode ? [{ debugName: "params" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  results = signal(null, ...ngDevMode ? [{ debugName: "results" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  history = signal([], ...ngDevMode ? [{ debugName: "history" }] : []);
  showHistory = signal(false, ...ngDevMode ? [{ debugName: "showHistory" }] : []);
  // Computed values
  selectedConfig = computed(() => this.REQUEST_CONFIGS.find((c) => c.id === this.selectedConfigId()), ...ngDevMode ? [{ debugName: "selectedConfig" }] : []);
  formattedResults = computed(() => {
    const r = this.results();
    return r ? JSON.stringify(r, null, 2) : "";
  }, ...ngDevMode ? [{ debugName: "formattedResults" }] : []);
  constructor() {
    this.resetParams();
  }
  /**
   * Handle config selection change
   */
  onConfigChange() {
    this.resetParams();
    this.clearResults();
  }
  /**
   * Reset params to defaults for current config
   */
  resetParams() {
    const config = this.selectedConfig();
    if (config) {
      this.params.set(__spreadValues({}, config.defaultParams));
    }
  }
  /**
   * Update a parameter value
   */
  updateParam(key, value) {
    this.params.update((p) => __spreadProps(__spreadValues({}, p), { [key]: value }));
  }
  /**
   * Execute the selected CCL script
   */
  executeScript() {
    const config = this.selectedConfig();
    if (!config) {
      this.error.set("No script configuration selected");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.results.set(null);
    const startTime = Date.now();
    const currentParams = this.params();
    this.customService.load({
      customScript: {
        script: [
          {
            name: config.scriptName,
            run: "pre",
            id: config.id,
            reference: true,
            parameters: currentParams
          }
        ],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      const elapsed = Date.now() - startTime;
      const response = this.customService.get(config.id);
      const historyItem = {
        id: crypto.randomUUID(),
        timestamp: /* @__PURE__ */ new Date(),
        configId: config.id,
        params: __spreadValues({}, currentParams),
        response,
        error: null,
        elapsed
      };
      if (response) {
        if (response.error) {
          this.error.set(response.error);
          historyItem.error = response.error;
        } else {
          this.results.set(response);
        }
      } else {
        const errMsg = "No response from CCL script";
        this.error.set(errMsg);
        historyItem.error = errMsg;
      }
      this.history.update((h) => [historyItem, ...h.slice(0, 19)]);
      this.loading.set(false);
    });
  }
  /**
   * Clear the results
   */
  clearResults() {
    this.results.set(null);
    this.error.set(null);
  }
  /**
   * Clear history
   */
  clearHistory() {
    this.history.set([]);
  }
  /**
   * Load a history item
   */
  loadHistoryItem(item) {
    this.selectedConfigId.set(item.configId);
    this.params.set(__spreadValues({}, item.params));
    this.results.set(item.response);
    this.error.set(item.error);
    this.showHistory.set(false);
  }
  /**
   * Toggle history panel
   */
  toggleHistory() {
    this.showHistory.update((v) => !v);
  }
  /**
   * Get parameter keys for current config
   */
  getParamKeys() {
    return Object.keys(this.params());
  }
  /**
   * Format timestamp for display
   */
  formatTime(date) {
    return date.toLocaleTimeString();
  }
  /**
   * Copy results to clipboard
   */
  copyResults() {
    const text = this.formattedResults();
    if (text) {
      navigator.clipboard.writeText(text);
    }
  }
  /**
   * Get the payload that will be sent (for debugging)
   */
  getPayloadPreview() {
    const config = this.selectedConfig();
    if (!config)
      return "";
    const payload = {
      payload: {
        patientSource: [{ personId: 0, encntrId: 0 }],
        customScript: {
          script: [{
            name: config.scriptName,
            run: "pre",
            id: config.id,
            parameters: this.params()
          }],
          clearPatientSource: true
        }
      }
    };
    return JSON.stringify(payload, null, 2);
  }
  static \u0275fac = function CclTest_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CclTest)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CclTest, selectors: [["app-ccl-test"]], decls: 37, vars: 10, consts: [[1, "ccl-test-container"], [1, "page-header"], [1, "description"], [1, "main-layout"], [1, "config-panel"], [1, "card"], [1, "form-group"], ["for", "scriptSelect"], ["id", "scriptSelect", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "button-group"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-secondary"], [1, "help-text"], [1, "payload-preview"], [1, "results-panel"], [1, "card", "error-card"], [1, "card", "history-card"], [1, "description-box"], [1, "params-section"], [1, "info-message"], [3, "for"], ["type", "text", 1, "form-control", 3, "ngModelChange", "id", "ngModel", "placeholder"], [1, "spinner-small"], [1, "status-message", "loading"], [1, "spinner"], [1, "error-content"], [1, "results-header"], [1, "btn", "btn-small", 3, "click"], [1, "status-summary", 3, "success", "failure"], [1, "file-summary"], [1, "files-list"], [1, "raw-json-section"], [1, "results-content"], [1, "status-summary"], [1, "data-table"], [1, "history-header"], [1, "btn", "btn-small", "btn-danger", 3, "click"], [1, "history-list"], [1, "history-item", 3, "error"], [1, "history-item", 3, "click"], [1, "history-item-header"], [1, "history-config"], [1, "history-time"], [1, "history-item-meta"], [1, "history-elapsed"], [1, "history-status", "error"], [1, "history-status", "success"]], template: function CclTest_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "CCL Script Testing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Test Blood Bank Validator CCL scripts with custom parameters ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "section", 5)(9, "h3");
      \u0275\u0275text(10, "Script Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "label", 7);
      \u0275\u0275text(13, "Select Script:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function CclTest_Template_select_ngModelChange_14_listener($event) {
        ctx.selectedConfigId.set($event);
        return ctx.onConfigChange();
      });
      \u0275\u0275repeaterCreate(15, CclTest_For_16_Template, 2, 2, "option", 9, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, CclTest_Conditional_17_Template, 7, 2);
      \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      \u0275\u0275listener("click", function CclTest_Template_button_click_19_listener() {
        return ctx.executeScript();
      });
      \u0275\u0275conditionalCreate(20, CclTest_Conditional_20_Template, 3, 0)(21, CclTest_Conditional_21_Template, 2, 0, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 12);
      \u0275\u0275listener("click", function CclTest_Template_button_click_22_listener() {
        return ctx.resetParams();
      });
      \u0275\u0275text(23, " Reset Params ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, CclTest_Conditional_24_Template, 2, 0, "button", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "section", 5)(26, "h3");
      \u0275\u0275text(27, "Payload Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 14);
      \u0275\u0275text(29, "This is the JSON payload that will be sent to Clinical Office:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "pre", 15);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 16);
      \u0275\u0275conditionalCreate(33, CclTest_Conditional_33_Template, 5, 0, "section", 5);
      \u0275\u0275conditionalCreate(34, CclTest_Conditional_34_Template, 5, 1, "section", 17);
      \u0275\u0275conditionalCreate(35, CclTest_Conditional_35_Template, 14, 4, "section", 5);
      \u0275\u0275conditionalCreate(36, CclTest_Conditional_36_Template, 9, 1, "section", 18);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(14);
      \u0275\u0275property("ngModel", ctx.selectedConfigId());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.REQUEST_CONFIGS);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.selectedConfig()) ? 17 : -1, tmp_2_0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 20 : 21);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.results() || ctx.error() ? 24 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.getPayloadPreview());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.results() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.history().length > 0 ? 36 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.ccl-test-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 5px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .main-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .ccl-test-container[_ngcontent-%COMP%]   .main-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ccl-test-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 15px;\n  color: #333;\n  font-size: 16px;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 10px;\n  color: #555;\n  font-size: 14px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #333;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.ccl-test-container[_ngcontent-%COMP%]   .description-box[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-left: 3px solid #0078d4;\n  padding: 10px 15px;\n  margin-bottom: 15px;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .description-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .description-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  color: #555;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .info-message[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  color: white;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #005a9e;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .btn.btn-small[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 12px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  display: inline-block;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .payload-preview[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: #d4d4d4;\n  padding: 15px;\n  border-radius: 4px;\n  font-family: "Courier New", monospace;\n  font-size: 11px;\n  line-height: 1.4;\n  overflow-x: auto;\n  max-height: 300px;\n  margin: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 4px;\n  margin-bottom: 15px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message.loading[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  color: #0056b3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-message.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #b3d9ff;\n  border-top-color: #0056b3;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%] {\n  border-color: #f5c6cb;\n  background-color: #fff5f5;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .error-card[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  padding: 15px;\n  border-radius: 4px;\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: monospace;\n  font-size: 12px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .results-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-summary[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border-radius: 4px;\n  margin: 15px 0;\n  font-size: 14px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-summary.success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .status-summary.failure[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .file-summary[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .file-summary[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: monospace;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .files-list[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.ccl-test-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  color: #333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .raw-json-section[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .raw-json-section[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: 500;\n  padding: 10px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .raw-json-section[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .raw-json-section[_ngcontent-%COMP%]   .results-content[_ngcontent-%COMP%] {\n  background-color: #1e1e1e;\n  color: #d4d4d4;\n  padding: 15px;\n  border-radius: 0 0 4px 4px;\n  font-family: "Courier New", monospace;\n  font-size: 11px;\n  line-height: 1.4;\n  overflow: auto;\n  max-height: 400px;\n  margin: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #0078d4;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item.error[_ngcontent-%COMP%] {\n  border-left: 3px solid #dc3545;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-header[_ngcontent-%COMP%]   .history-config[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-header[_ngcontent-%COMP%]   .history-time[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  font-size: 12px;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-meta[_ngcontent-%COMP%]   .history-elapsed[_ngcontent-%COMP%] {\n  color: #666;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-meta[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-meta[_ngcontent-%COMP%]   .history-status.success[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.ccl-test-container[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-item-meta[_ngcontent-%COMP%]   .history-status.error[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=ccl-test.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CclTest, [{
    type: Component,
    args: [{ selector: "app-ccl-test", imports: [JsonPipe, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="ccl-test-container">
  <div class="page-header">
    <h2>CCL Script Testing</h2>
    <p class="description">
      Test Blood Bank Validator CCL scripts with custom parameters
    </p>
  </div>

  <div class="main-layout">
    <!-- Left Panel: Configuration -->
    <div class="config-panel">
      <section class="card">
        <h3>Script Configuration</h3>

        <!-- Script Selector -->
        <div class="form-group">
          <label for="scriptSelect">Select Script:</label>
          <select
            id="scriptSelect"
            [ngModel]="selectedConfigId()"
            (ngModelChange)="selectedConfigId.set($event); onConfigChange()"
            class="form-control">
            @for (config of REQUEST_CONFIGS; track config.id) {
              <option [value]="config.id">{{ config.name }}</option>
            }
          </select>
        </div>

        @if (selectedConfig(); as config) {
          <div class="description-box">
            <strong>Description:</strong>
            <p>{{ config.description }}</p>
          </div>

          <!-- Parameters -->
          @if (getParamKeys().length > 0) {
            <div class="params-section">
              <h4>Parameters</h4>
              @for (key of getParamKeys(); track key) {
                <div class="form-group">
                  <label [for]="'param-' + key">{{ key }}:</label>
                  <input
                    type="text"
                    [id]="'param-' + key"
                    [ngModel]="params()[key]"
                    (ngModelChange)="updateParam(key, $event)"
                    class="form-control"
                    [placeholder]="'Enter ' + key" />
                </div>
              }
            </div>
          } @else {
            <p class="info-message">This script has no parameters.</p>
          }
        }

        <!-- Execution Buttons -->
        <div class="button-group">
          <button
            (click)="executeScript()"
            [disabled]="loading()"
            class="btn btn-primary">
            @if (loading()) {
              <span class="spinner-small"></span>
              <span>Executing...</span>
            } @else {
              <span>Execute Script</span>
            }
          </button>

          <button (click)="resetParams()" class="btn btn-secondary">
            Reset Params
          </button>

          @if (results() || error()) {
            <button (click)="clearResults()" class="btn btn-secondary">
              Clear Results
            </button>
          }
        </div>
      </section>

      <!-- Payload Preview -->
      <section class="card">
        <h3>Payload Preview</h3>
        <p class="help-text">This is the JSON payload that will be sent to Clinical Office:</p>
        <pre class="payload-preview">{{ getPayloadPreview() }}</pre>
      </section>
    </div>

    <!-- Right Panel: Results -->
    <div class="results-panel">
      @if (loading()) {
        <section class="card">
          <div class="status-message loading">
            <div class="spinner"></div>
            <span>Executing CCL script...</span>
          </div>
        </section>
      }

      @if (error()) {
        <section class="card error-card">
          <h3>Error</h3>
          <pre class="error-content">{{ error() }}</pre>
        </section>
      }

      @if (results()) {
        <section class="card">
          <div class="results-header">
            <h3>Results</h3>
            <button (click)="copyResults()" class="btn btn-small">Copy JSON</button>
          </div>

          <!-- Quick Summary -->
          @if (results().statusData) {
            <div class="status-summary"
                 [class.success]="results().statusData.status === 'S'"
                 [class.failure]="results().statusData.status === 'F'">
              <strong>Status:</strong>
              {{ results().statusData.status === 'S' ? 'Success' : 'Failed' }}
              @if (results().error) {
                - {{ results().error }}
              }
            </div>
          }

          <!-- File Count (for listDir) -->
          @if (results().file_cnt !== undefined) {
            <div class="file-summary">
              <strong>Files Found:</strong> {{ results().file_cnt }}
              @if (results().directory) {
                in <code>{{ results().directory }}</code>
              }
            </div>
          }

          <!-- Files List (for listDir) -->
          @if (results().files && results().files.length > 0) {
            <div class="files-list">
              <h4>Files:</h4>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Filename</th>
                    <th>Type</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  @for (file of results().files; track file.filename) {
                    <tr>
                      <td>{{ file.filename }}</td>
                      <td>{{ file.filetype }}</td>
                      <td>{{ file.filesize }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }

          <!-- Raw JSON -->
          <details class="raw-json-section">
            <summary>Raw JSON Response</summary>
            <pre class="results-content">{{ formattedResults() }}</pre>
          </details>
        </section>
      }

      <!-- History Panel -->
      @if (history().length > 0) {
        <section class="card history-card">
          <div class="history-header">
            <h3>Request History ({{ history().length }})</h3>
            <button (click)="clearHistory()" class="btn btn-small btn-danger">Clear</button>
          </div>
          <div class="history-list">
            @for (item of history(); track item.id) {
              <div
                class="history-item"
                [class.error]="item.error"
                (click)="loadHistoryItem(item)">
                <div class="history-item-header">
                  <span class="history-config">{{ item.configId }}</span>
                  <span class="history-time">{{ formatTime(item.timestamp) }}</span>
                </div>
                <div class="history-item-meta">
                  <span class="history-elapsed">{{ item.elapsed }}ms</span>
                  @if (item.error) {
                    <span class="history-status error">Error</span>
                  } @else {
                    <span class="history-status success">OK</span>
                  }
                </div>
              </div>
            }
          </div>
        </section>
      }
    </div>
  </div>
</div>
`, styles: ['/* src/app/ccl-test/ccl-test.scss */\n.ccl-test-container {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.ccl-test-container .page-header {\n  margin-bottom: 20px;\n}\n.ccl-test-container .page-header h2 {\n  color: #333;\n  margin-bottom: 5px;\n}\n.ccl-test-container .page-header .description {\n  color: #666;\n  margin: 0;\n}\n.ccl-test-container .main-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .ccl-test-container .main-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ccl-test-container .card {\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.ccl-test-container .card h3 {\n  margin-top: 0;\n  margin-bottom: 15px;\n  color: #333;\n  font-size: 16px;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n}\n.ccl-test-container .card h4 {\n  margin-top: 15px;\n  margin-bottom: 10px;\n  color: #555;\n  font-size: 14px;\n}\n.ccl-test-container .form-group {\n  margin-bottom: 15px;\n}\n.ccl-test-container .form-group label {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #333;\n  font-size: 13px;\n}\n.ccl-test-container .form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.ccl-test-container .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.ccl-test-container .description-box {\n  background-color: #f8f9fa;\n  border-left: 3px solid #0078d4;\n  padding: 10px 15px;\n  margin-bottom: 15px;\n  font-size: 13px;\n}\n.ccl-test-container .description-box strong {\n  color: #333;\n}\n.ccl-test-container .description-box p {\n  margin: 5px 0 0 0;\n  color: #555;\n}\n.ccl-test-container .info-message {\n  color: #666;\n  font-style: italic;\n  font-size: 13px;\n}\n.ccl-test-container .help-text {\n  color: #666;\n  font-size: 12px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.ccl-test-container .button-group {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.ccl-test-container .btn {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.ccl-test-container .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.ccl-test-container .btn.btn-primary {\n  background-color: #0078d4;\n  color: white;\n}\n.ccl-test-container .btn.btn-primary:hover:not(:disabled) {\n  background-color: #005a9e;\n}\n.ccl-test-container .btn.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.ccl-test-container .btn.btn-secondary:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.ccl-test-container .btn.btn-danger {\n  background-color: #dc3545;\n  color: white;\n}\n.ccl-test-container .btn.btn-danger:hover:not(:disabled) {\n  background-color: #c82333;\n}\n.ccl-test-container .btn.btn-small {\n  padding: 5px 12px;\n  font-size: 12px;\n}\n.ccl-test-container .spinner-small {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  display: inline-block;\n}\n.ccl-test-container .payload-preview {\n  background-color: #1e1e1e;\n  color: #d4d4d4;\n  padding: 15px;\n  border-radius: 4px;\n  font-family: "Courier New", monospace;\n  font-size: 11px;\n  line-height: 1.4;\n  overflow-x: auto;\n  max-height: 300px;\n  margin: 0;\n}\n.ccl-test-container .status-message {\n  padding: 15px;\n  border-radius: 4px;\n  margin-bottom: 15px;\n}\n.ccl-test-container .status-message.loading {\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  color: #0056b3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ccl-test-container .status-message.loading .spinner {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #b3d9ff;\n  border-top-color: #0056b3;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.ccl-test-container .error-card {\n  border-color: #f5c6cb;\n  background-color: #fff5f5;\n}\n.ccl-test-container .error-card h3 {\n  color: #721c24;\n}\n.ccl-test-container .error-card .error-content {\n  background-color: #f8d7da;\n  color: #721c24;\n  padding: 15px;\n  border-radius: 4px;\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: monospace;\n  font-size: 12px;\n}\n.ccl-test-container .results-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ccl-test-container .results-header h3 {\n  margin-bottom: 0;\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.ccl-test-container .status-summary {\n  padding: 10px 15px;\n  border-radius: 4px;\n  margin: 15px 0;\n  font-size: 14px;\n}\n.ccl-test-container .status-summary.success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.ccl-test-container .status-summary.failure {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.ccl-test-container .file-summary {\n  padding: 10px 15px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.ccl-test-container .file-summary code {\n  background-color: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: monospace;\n}\n.ccl-test-container .files-list {\n  margin-top: 15px;\n}\n.ccl-test-container .data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ccl-test-container .data-table th,\n.ccl-test-container .data-table td {\n  padding: 8px 12px;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.ccl-test-container .data-table th {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  color: #333;\n}\n.ccl-test-container .data-table tr:hover {\n  background-color: #f8f9fa;\n}\n.ccl-test-container .raw-json-section {\n  margin-top: 15px;\n}\n.ccl-test-container .raw-json-section summary {\n  cursor: pointer;\n  font-weight: 500;\n  padding: 10px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ccl-test-container .raw-json-section summary:hover {\n  background-color: #e9ecef;\n}\n.ccl-test-container .raw-json-section .results-content {\n  background-color: #1e1e1e;\n  color: #d4d4d4;\n  padding: 15px;\n  border-radius: 0 0 4px 4px;\n  font-family: "Courier New", monospace;\n  font-size: 11px;\n  line-height: 1.4;\n  overflow: auto;\n  max-height: 400px;\n  margin: 0;\n}\n.ccl-test-container .history-card .history-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.ccl-test-container .history-card .history-header h3 {\n  margin-bottom: 0;\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.ccl-test-container .history-card .history-list {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.ccl-test-container .history-card .history-item {\n  padding: 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ccl-test-container .history-card .history-item:hover {\n  background-color: #f8f9fa;\n  border-color: #0078d4;\n}\n.ccl-test-container .history-card .history-item.error {\n  border-left: 3px solid #dc3545;\n}\n.ccl-test-container .history-card .history-item .history-item-header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.ccl-test-container .history-card .history-item .history-item-header .history-config {\n  font-weight: 500;\n  color: #333;\n}\n.ccl-test-container .history-card .history-item .history-item-header .history-time {\n  color: #666;\n  font-size: 12px;\n}\n.ccl-test-container .history-card .history-item .history-item-meta {\n  display: flex;\n  gap: 10px;\n  font-size: 12px;\n}\n.ccl-test-container .history-card .history-item .history-item-meta .history-elapsed {\n  color: #666;\n}\n.ccl-test-container .history-card .history-item .history-item-meta .history-status {\n  font-weight: 500;\n}\n.ccl-test-container .history-card .history-item .history-item-meta .history-status.success {\n  color: #28a745;\n}\n.ccl-test-container .history-card .history-item .history-item-meta .history-status.error {\n  color: #dc3545;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=ccl-test.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CclTest, { className: "CclTest", filePath: "src/app/ccl-test/ccl-test.ts", lineNumber: 53 });
})();
export {
  CclTest
};
//# sourceMappingURL=chunk-CHA46MHN.js.map
