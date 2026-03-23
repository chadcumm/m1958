import {
  Annotation,
  ChangeSet,
  Compartment,
  Decoration,
  EditorState,
  EditorView,
  Facet,
  GutterMarker,
  HighlightStyle,
  Prec,
  RangeSet,
  RangeSetBuilder,
  StateEffect,
  StateField,
  StyleModule,
  Transaction,
  ViewPlugin,
  WidgetType,
  autocompletion,
  bracketMatching,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
  crosshairCursor,
  defaultHighlightStyle,
  defaultKeymap,
  drawSelection,
  dropCursor,
  foldGutter,
  foldKeymap,
  gutter,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSelectionMatches,
  highlightSpecialChars,
  highlightWhitespace,
  history,
  historyKeymap,
  indentOnInput,
  indentUnit,
  indentWithTab,
  json,
  keymap,
  lineNumbers,
  lintKeymap,
  placeholder,
  rectangularSelection,
  searchKeymap,
  syntaxHighlighting,
  tags
} from "./chunk-DT2W3BHQ.js";
import {
  MHA_PDS_DATA_ELEMENTS,
  MhaPdsConfigurationService,
  groupSubmitFieldsByDataElement
} from "./chunk-V4GVBYQT.js";
import {
  CclServiceWrapperService,
  CommonModule,
  CustomService,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-57JVA67P.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Observable,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OFQI67IQ.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-I7D2VZMI.js";

// src/app/config-editor/sections/config-section-mirth.ts
var ConfigSectionMirth = class _ConfigSectionMirth {
  config;
  configChange = new EventEmitter();
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  togglePasswordVisibility() {
    this.showPassword.update((v) => !v);
  }
  onFieldChange(field, value) {
    const updatedConfig = __spreadProps(__spreadValues({}, this.config), { [field]: value });
    this.configChange.emit(updatedConfig);
  }
  static \u0275fac = function ConfigSectionMirth_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionMirth)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionMirth, selectors: [["app-config-section-mirth"]], inputs: { config: "config" }, outputs: { configChange: "configChange" }, decls: 52, vars: 9, consts: [[1, "section-content"], [1, "form-grid"], [1, "form-group", "full-width"], ["for", "mirthUrl"], ["type", "url", "id", "mirthUrl", "placeholder", "https://mirth-server.example.com:8443/api", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "help-text"], ["for", "mirthChannelId"], ["type", "text", "id", "mirthChannelId", "placeholder", "b397b5cb-c91c-47c2-af3a-438acfef6d8a", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mirthTriggerUrl"], [1, "badge"], ["type", "url", "id", "mirthTriggerUrl", "placeholder", "http://mirth-server.example.com:8081/mha-pds-trigger", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["for", "mirthUsername"], ["type", "text", "id", "mirthUsername", "placeholder", "API username", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mirthPassword"], [1, "password-field"], ["id", "mirthPassword", "placeholder", "API password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-toggle", 3, "click"], ["for", "mirthTimeout"], ["type", "number", "id", "mirthTimeout", "min", "5", "max", "300", "step", "5", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mirthRetries"], ["type", "number", "id", "mirthRetries", "min", "0", "max", "10", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "test-connection-section"], ["type", "button", "disabled", "", "title", "Connection testing will be available in a future release", 1, "btn", "btn-outline"]], template: function ConfigSectionMirth_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "Server URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMirth_Template_input_ngModelChange_5_listener($event) {
        return ctx.onFieldChange("URL", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 5);
      \u0275\u0275text(7, "Full URL to the Mirth Connect API endpoint");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 2)(9, "label", 6);
      \u0275\u0275text(10, "Channel ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMirth_Template_input_ngModelChange_11_listener($event) {
        return ctx.onFieldChange("CHANNEL_ID", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "small", 5);
      \u0275\u0275text(13, "UUID of the Mirth channel (legacy fallback only, not needed if Trigger URL is set)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 2)(15, "label", 8);
      \u0275\u0275text(16, " Trigger URL ");
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, "Recommended");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "input", 10);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMirth_Template_input_ngModelChange_19_listener($event) {
        return ctx.onFieldChange("TRIGGER_URL", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "small", 5);
      \u0275\u0275text(21, " Direct HTTP endpoint for manual trigger channel (port 8081). If set, this overrides Server URL + Channel ID approach. Format: http://server:port/context-path ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 12);
      \u0275\u0275text(24, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 13);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMirth_Template_input_ngModelChange_25_listener($event) {
        return ctx.onFieldChange("USERNAME", $event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 11)(27, "label", 14);
      \u0275\u0275text(28, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 15)(30, "input", 16);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMirth_Template_input_ngModelChange_30_listener($event) {
        return ctx.onFieldChange("PASSWORD", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 17);
      \u0275\u0275listener("click", function ConfigSectionMirth_Template_button_click_31_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "small", 5);
      \u0275\u0275text(34, "Leave blank to keep existing password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 11)(36, "label", 18);
      \u0275\u0275text(37, "Timeout (seconds)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 19);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMirth_Template_input_ngModelChange_38_listener($event) {
        return ctx.onFieldChange("TIMEOUT_SECONDS", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "small", 5);
      \u0275\u0275text(40, "Connection timeout (5-300 seconds)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 11)(42, "label", 20);
      \u0275\u0275text(43, "Retry Attempts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 21);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMirth_Template_input_ngModelChange_44_listener($event) {
        return ctx.onFieldChange("RETRY_ATTEMPTS", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "small", 5);
      \u0275\u0275text(46, "Number of retries on connection failure (0-10)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 22)(48, "button", 23);
      \u0275\u0275text(49, " Test Connection ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "small", 5);
      \u0275\u0275text(51, "Connection testing not yet implemented");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.config.URL);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.config.CHANNEL_ID);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.config.TRIGGER_URL);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.config.USERNAME);
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password")("ngModel", ctx.config.PASSWORD);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.showPassword() ? "Hide" : "Show", " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.config.TIMEOUT_SECONDS);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.config.RETRY_ATTEMPTS);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background-color: #28a745;\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 12px;\n}\n.password-field[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.password-field[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.password-field[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #ced4da;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-field[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.test-connection-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.test-connection-section[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #0078d4;\n  background: transparent;\n  color: #0078d4;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.test-connection-section[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0078d4;\n  color: white;\n}\n.test-connection-section[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:disabled {\n  border-color: #ced4da;\n  color: #6c757d;\n  cursor: not-allowed;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionMirth, [{
    type: Component,
    args: [{ selector: "app-config-section-mirth", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <div class="form-grid">
        <!-- Server URL -->
        <div class="form-group full-width">
          <label for="mirthUrl">Server URL</label>
          <input
            type="url"
            id="mirthUrl"
            class="form-control"
            [ngModel]="config.URL"
            (ngModelChange)="onFieldChange('URL', $event)"
            placeholder="https://mirth-server.example.com:8443/api" />
          <small class="help-text">Full URL to the Mirth Connect API endpoint</small>
        </div>

        <!-- Channel ID -->
        <div class="form-group full-width">
          <label for="mirthChannelId">Channel ID</label>
          <input
            type="text"
            id="mirthChannelId"
            class="form-control"
            [ngModel]="config.CHANNEL_ID"
            (ngModelChange)="onFieldChange('CHANNEL_ID', $event)"
            placeholder="b397b5cb-c91c-47c2-af3a-438acfef6d8a" />
          <small class="help-text">UUID of the Mirth channel (legacy fallback only, not needed if Trigger URL is set)</small>
        </div>

        <!-- Trigger URL (HTTP Listener) -->
        <div class="form-group full-width">
          <label for="mirthTriggerUrl">
            Trigger URL
            <span class="badge">Recommended</span>
          </label>
          <input
            type="url"
            id="mirthTriggerUrl"
            class="form-control"
            [ngModel]="config.TRIGGER_URL"
            (ngModelChange)="onFieldChange('TRIGGER_URL', $event)"
            placeholder="http://mirth-server.example.com:8081/mha-pds-trigger" />
          <small class="help-text">
            Direct HTTP endpoint for manual trigger channel (port 8081).
            If set, this overrides Server URL + Channel ID approach.
            Format: http://server:port/context-path
          </small>
        </div>

        <!-- Username -->
        <div class="form-group">
          <label for="mirthUsername">Username</label>
          <input
            type="text"
            id="mirthUsername"
            class="form-control"
            [ngModel]="config.USERNAME"
            (ngModelChange)="onFieldChange('USERNAME', $event)"
            placeholder="API username" />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="mirthPassword">Password</label>
          <div class="password-field">
            <input
              [type]="showPassword() ? 'text' : 'password'"
              id="mirthPassword"
              class="form-control"
              [ngModel]="config.PASSWORD"
              (ngModelChange)="onFieldChange('PASSWORD', $event)"
              placeholder="API password" />
            <button
              type="button"
              class="password-toggle"
              (click)="togglePasswordVisibility()">
              {{ showPassword() ? 'Hide' : 'Show' }}
            </button>
          </div>
          <small class="help-text">Leave blank to keep existing password</small>
        </div>

        <!-- Timeout -->
        <div class="form-group">
          <label for="mirthTimeout">Timeout (seconds)</label>
          <input
            type="number"
            id="mirthTimeout"
            class="form-control"
            [ngModel]="config.TIMEOUT_SECONDS"
            (ngModelChange)="onFieldChange('TIMEOUT_SECONDS', $event)"
            min="5"
            max="300"
            step="5" />
          <small class="help-text">Connection timeout (5-300 seconds)</small>
        </div>

        <!-- Retry Attempts -->
        <div class="form-group">
          <label for="mirthRetries">Retry Attempts</label>
          <input
            type="number"
            id="mirthRetries"
            class="form-control"
            [ngModel]="config.RETRY_ATTEMPTS"
            (ngModelChange)="onFieldChange('RETRY_ATTEMPTS', $event)"
            min="0"
            max="10"
            step="1" />
          <small class="help-text">Number of retries on connection failure (0-10)</small>
        </div>
      </div>

      <!-- Connection Test (UI placeholder - not functional) -->
      <div class="test-connection-section">
        <button
          type="button"
          class="btn btn-outline"
          disabled
          title="Connection testing will be available in a future release">
          Test Connection
        </button>
        <small class="help-text">Connection testing not yet implemented</small>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;4e42bf48dd8ecc57b0d50a6dc9ece5af715f15e9e2ddaaa8a836ff511a9e7e6e;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-mirth.ts */\n.section-content {\n  max-width: 800px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-group label .badge {\n  display: inline-block;\n  padding: 2px 8px;\n  background-color: #28a745;\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group .form-control {\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.form-group .form-control::placeholder {\n  color: #adb5bd;\n}\n.form-group .help-text {\n  color: #6c757d;\n  font-size: 12px;\n}\n.password-field {\n  display: flex;\n  gap: 8px;\n}\n.password-field .form-control {\n  flex: 1;\n}\n.password-field .password-toggle {\n  padding: 10px 16px;\n  border: 1px solid #ced4da;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-field .password-toggle:hover {\n  background-color: #e9ecef;\n}\n.test-connection-section {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.test-connection-section .btn-outline {\n  padding: 10px 20px;\n  border: 1px solid #0078d4;\n  background: transparent;\n  color: #0078d4;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.test-connection-section .btn-outline:hover:not(:disabled) {\n  background-color: #0078d4;\n  color: white;\n}\n.test-connection-section .btn-outline:disabled {\n  border-color: #ced4da;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n"] }]
  }], null, { config: [{
    type: Input
  }], configChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionMirth, { className: "ConfigSectionMirth", filePath: "src/app/config-editor/sections/config-section-mirth.ts", lineNumber: 280 });
})();

// src/app/config-editor/sections/config-section-submission.ts
function ConfigSectionSubmission_Case_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Submissions will be processed every hour in batches of ", ctx_r0.config.BATCH_SIZE, " records. ");
  }
}
function ConfigSectionSubmission_Case_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Submissions will be processed daily in batches of ", ctx_r0.config.BATCH_SIZE, " records. ");
  }
}
function ConfigSectionSubmission_Case_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Submissions will be processed weekly in batches of ", ctx_r0.config.BATCH_SIZE, " records. ");
  }
}
function ConfigSectionSubmission_Case_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Automatic submissions are disabled. Records will only be submitted manually. ");
  }
}
function ConfigSectionSubmission_Case_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Submissions will be processed in batches of ", ctx_r0.config.BATCH_SIZE, " records. ");
  }
}
function ConfigSectionSubmission_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" Failed submissions will be retried up to ", ctx_r0.config.MAX_RETRIES, " times with a ", ctx_r0.config.RETRY_DELAY_MINUTES, "-minute delay between attempts. ");
  }
}
function ConfigSectionSubmission_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Failed submissions will not be automatically retried. ");
  }
}
var ConfigSectionSubmission = class _ConfigSectionSubmission {
  config;
  configChange = new EventEmitter();
  onFieldChange(field, value) {
    const updatedConfig = __spreadProps(__spreadValues({}, this.config), { [field]: value });
    this.configChange.emit(updatedConfig);
  }
  static \u0275fac = function ConfigSectionSubmission_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionSubmission)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionSubmission, selectors: [["app-config-section-submission"]], inputs: { config: "config" }, outputs: { configChange: "configChange" }, decls: 45, vars: 6, consts: [[1, "section-content"], [1, "form-grid"], [1, "form-group"], ["for", "batchSize"], ["type", "number", "id", "batchSize", "min", "1", "max", "1000", "step", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "help-text"], ["for", "scheduleFrequency"], ["id", "scheduleFrequency", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "HOURLY"], ["value", "DAILY"], ["value", "WEEKLY"], ["value", "MANUAL"], ["for", "maxRetries"], ["type", "number", "id", "maxRetries", "min", "0", "max", "10", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "retryDelay"], ["type", "number", "id", "retryDelay", "min", "1", "max", "120", "step", "5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "schedule-summary"]], template: function ConfigSectionSubmission_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "Batch Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275listener("ngModelChange", function ConfigSectionSubmission_Template_input_ngModelChange_5_listener($event) {
        return ctx.onFieldChange("BATCH_SIZE", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 5);
      \u0275\u0275text(7, "Number of records to process per batch (1-1000)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 2)(9, "label", 6);
      \u0275\u0275text(10, "Schedule Frequency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 7);
      \u0275\u0275listener("ngModelChange", function ConfigSectionSubmission_Template_select_ngModelChange_11_listener($event) {
        return ctx.onFieldChange("SCHEDULE_FREQUENCY", $event);
      });
      \u0275\u0275elementStart(12, "option", 8);
      \u0275\u0275text(13, "Hourly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 9);
      \u0275\u0275text(15, "Daily");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Weekly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "Manual Only");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "small", 5);
      \u0275\u0275text(21, "How often to run automatic submissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 2)(23, "label", 12);
      \u0275\u0275text(24, "Max Retries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 13);
      \u0275\u0275listener("ngModelChange", function ConfigSectionSubmission_Template_input_ngModelChange_25_listener($event) {
        return ctx.onFieldChange("MAX_RETRIES", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "small", 5);
      \u0275\u0275text(27, "Maximum retry attempts for failed submissions (0-10)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 2)(29, "label", 14);
      \u0275\u0275text(30, "Retry Delay (minutes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 15);
      \u0275\u0275listener("ngModelChange", function ConfigSectionSubmission_Template_input_ngModelChange_31_listener($event) {
        return ctx.onFieldChange("RETRY_DELAY_MINUTES", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "small", 5);
      \u0275\u0275text(33, "Wait time between retry attempts (1-120 minutes)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 16)(35, "h4");
      \u0275\u0275text(36, "Schedule Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275conditionalCreate(38, ConfigSectionSubmission_Case_38_Template, 1, 1)(39, ConfigSectionSubmission_Case_39_Template, 1, 1)(40, ConfigSectionSubmission_Case_40_Template, 1, 1)(41, ConfigSectionSubmission_Case_41_Template, 1, 0)(42, ConfigSectionSubmission_Case_42_Template, 1, 1);
      \u0275\u0275conditionalCreate(43, ConfigSectionSubmission_Conditional_43_Template, 1, 2)(44, ConfigSectionSubmission_Conditional_44_Template, 1, 0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.config.BATCH_SIZE);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.config.SCHEDULE_FREQUENCY);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngModel", ctx.config.MAX_RETRIES);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.config.RETRY_DELAY_MINUTES);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_4_0 = ctx.config.SCHEDULE_FREQUENCY) === "HOURLY" ? 38 : tmp_4_0 === "DAILY" ? 39 : tmp_4_0 === "WEEKLY" ? 40 : tmp_4_0 === "MANUAL" ? 41 : 42);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.config.MAX_RETRIES > 0 ? 43 : 44);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: white;\n}\n.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 12px;\n}\n.schedule-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.schedule-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.schedule-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #555;\n  font-size: 13px;\n  line-height: 1.6;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionSubmission, [{
    type: Component,
    args: [{ selector: "app-config-section-submission", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <div class="form-grid">
        <!-- Batch Size -->
        <div class="form-group">
          <label for="batchSize">Batch Size</label>
          <input
            type="number"
            id="batchSize"
            class="form-control"
            [ngModel]="config.BATCH_SIZE"
            (ngModelChange)="onFieldChange('BATCH_SIZE', $event)"
            min="1"
            max="1000"
            step="10" />
          <small class="help-text">Number of records to process per batch (1-1000)</small>
        </div>

        <!-- Schedule Frequency -->
        <div class="form-group">
          <label for="scheduleFrequency">Schedule Frequency</label>
          <select
            id="scheduleFrequency"
            class="form-control"
            [ngModel]="config.SCHEDULE_FREQUENCY"
            (ngModelChange)="onFieldChange('SCHEDULE_FREQUENCY', $event)">
            <option value="HOURLY">Hourly</option>
            <option value="DAILY">Daily</option>
            <option value="WEEKLY">Weekly</option>
            <option value="MANUAL">Manual Only</option>
          </select>
          <small class="help-text">How often to run automatic submissions</small>
        </div>

        <!-- Max Retries -->
        <div class="form-group">
          <label for="maxRetries">Max Retries</label>
          <input
            type="number"
            id="maxRetries"
            class="form-control"
            [ngModel]="config.MAX_RETRIES"
            (ngModelChange)="onFieldChange('MAX_RETRIES', $event)"
            min="0"
            max="10"
            step="1" />
          <small class="help-text">Maximum retry attempts for failed submissions (0-10)</small>
        </div>

        <!-- Retry Delay -->
        <div class="form-group">
          <label for="retryDelay">Retry Delay (minutes)</label>
          <input
            type="number"
            id="retryDelay"
            class="form-control"
            [ngModel]="config.RETRY_DELAY_MINUTES"
            (ngModelChange)="onFieldChange('RETRY_DELAY_MINUTES', $event)"
            min="1"
            max="120"
            step="5" />
          <small class="help-text">Wait time between retry attempts (1-120 minutes)</small>
        </div>
      </div>

      <!-- Schedule Summary -->
      <div class="schedule-summary">
        <h4>Schedule Summary</h4>
        <p>
          @switch (config.SCHEDULE_FREQUENCY) {
            @case ('HOURLY') {
              Submissions will be processed every hour in batches of {{ config.BATCH_SIZE }} records.
            }
            @case ('DAILY') {
              Submissions will be processed daily in batches of {{ config.BATCH_SIZE }} records.
            }
            @case ('WEEKLY') {
              Submissions will be processed weekly in batches of {{ config.BATCH_SIZE }} records.
            }
            @case ('MANUAL') {
              Automatic submissions are disabled. Records will only be submitted manually.
            }
            @default {
              Submissions will be processed in batches of {{ config.BATCH_SIZE }} records.
            }
          }
          @if (config.MAX_RETRIES > 0) {
            Failed submissions will be retried up to {{ config.MAX_RETRIES }} times with a {{ config.RETRY_DELAY_MINUTES }}-minute delay between attempts.
          } @else {
            Failed submissions will not be automatically retried.
          }
        </p>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;5da649d377454b2dfa4472bff69ec8b1bc889f1c6605be68f08fa868de30eeb1;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-submission.ts */\n.section-content {\n  max-width: 800px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 600px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n}\n.form-group .form-control {\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.form-group select.form-control {\n  cursor: pointer;\n  background-color: white;\n}\n.form-group .help-text {\n  color: #6c757d;\n  font-size: 12px;\n}\n.schedule-summary {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.schedule-summary h4 {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.schedule-summary p {\n  margin: 0;\n  color: #555;\n  font-size: 13px;\n  line-height: 1.6;\n}\n"] }]
  }], null, { config: [{
    type: Input
  }], configChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionSubmission, { className: "ConfigSectionSubmission", filePath: "src/app/config-editor/sections/config-section-submission.ts", lineNumber: 195 });
})();

// src/app/config-editor/sections/config-section-processing.ts
function ConfigSectionProcessing_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "span");
    \u0275\u0275text(2, "Warning: Data will NOT be submitted to external systems");
    \u0275\u0275domElementEnd()();
  }
}
var ConfigSectionProcessing = class _ConfigSectionProcessing {
  config;
  configChange = new EventEmitter();
  onToggleChange(field, event) {
    const checked = event.target.checked;
    const updatedConfig = __spreadProps(__spreadValues({}, this.config), { [field]: checked ? 1 : 0 });
    this.configChange.emit(updatedConfig);
  }
  static \u0275fac = function ConfigSectionProcessing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionProcessing)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionProcessing, selectors: [["app-config-section-processing"]], inputs: { config: "config" }, outputs: { configChange: "configChange" }, decls: 63, vars: 19, consts: [[1, "section-content"], [1, "toggle-list"], [1, "toggle-item"], [1, "toggle-info"], [1, "warning-badge"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked"], [1, "toggle-slider"], [1, "status-summary"], [1, "status-grid"], [1, "status-item"], [1, "status-label"], [1, "status-value"]], template: function ConfigSectionProcessing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
      \u0275\u0275text(5, "Dummy Mode");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "When enabled, the system processes data without actually submitting to Mirth Connect. Useful for testing and validation.");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(8, ConfigSectionProcessing_Conditional_8_Template, 3, 0, "div", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "label", 5)(10, "input", 6);
      \u0275\u0275domListener("change", function ConfigSectionProcessing_Template_input_change_10_listener($event) {
        return ctx.onToggleChange("ENABLE_DUMMY_MODE", $event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(11, "span", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 2)(13, "div", 3)(14, "h4");
      \u0275\u0275text(15, "Detailed Logging");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "p");
      \u0275\u0275text(17, "Enables verbose logging of all processing steps, including data transformations and API calls. Helpful for debugging but may impact performance.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "label", 5)(19, "input", 6);
      \u0275\u0275domListener("change", function ConfigSectionProcessing_Template_input_change_19_listener($event) {
        return ctx.onToggleChange("ENABLE_DETAILED_LOGGING", $event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(20, "span", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 2)(22, "div", 3)(23, "h4");
      \u0275\u0275text(24, "Error Notifications");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p");
      \u0275\u0275text(26, "Sends notifications when submission errors occur. Configure notification recipients in the system settings.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "label", 5)(28, "input", 6);
      \u0275\u0275domListener("change", function ConfigSectionProcessing_Template_input_change_28_listener($event) {
        return ctx.onToggleChange("ENABLE_ERROR_NOTIFICATIONS", $event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(29, "span", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 2)(31, "div", 3)(32, "h4");
      \u0275\u0275text(33, "Send Group Minutes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "p");
      \u0275\u0275text(35, "When enabled, direct minutes (DE10.006) are included in group encounter submissions. OH recommends disabling until PDS 2.0 clarifies group minute requirements.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "label", 5)(37, "input", 6);
      \u0275\u0275domListener("change", function ConfigSectionProcessing_Template_input_change_37_listener($event) {
        return ctx.onToggleChange("SEND_GROUP_MINUTES", $event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(38, "span", 7);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(39, "div", 8)(40, "h4");
      \u0275\u0275text(41, "Current Status");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "div", 9)(43, "div", 10)(44, "span", 11);
      \u0275\u0275text(45, "Mode:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "span", 12);
      \u0275\u0275text(47);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 10)(49, "span", 11);
      \u0275\u0275text(50, "Logging:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "span", 12);
      \u0275\u0275text(52);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(53, "div", 10)(54, "span", 11);
      \u0275\u0275text(55, "Notifications:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "span", 12);
      \u0275\u0275text(57);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(58, "div", 10)(59, "span", 11);
      \u0275\u0275text(60, "Group Minutes:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "span", 12);
      \u0275\u0275text(62);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("enabled", ctx.config.ENABLE_DUMMY_MODE === 1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.config.ENABLE_DUMMY_MODE === 1 ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("checked", ctx.config.ENABLE_DUMMY_MODE === 1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("enabled", ctx.config.ENABLE_DETAILED_LOGGING === 1);
      \u0275\u0275advance(7);
      \u0275\u0275domProperty("checked", ctx.config.ENABLE_DETAILED_LOGGING === 1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("enabled", ctx.config.ENABLE_ERROR_NOTIFICATIONS === 1);
      \u0275\u0275advance(7);
      \u0275\u0275domProperty("checked", ctx.config.ENABLE_ERROR_NOTIFICATIONS === 1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("enabled", ctx.config.SEND_GROUP_MINUTES === 1);
      \u0275\u0275advance(7);
      \u0275\u0275domProperty("checked", ctx.config.SEND_GROUP_MINUTES === 1);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("warning", ctx.config.ENABLE_DUMMY_MODE === 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.config.ENABLE_DUMMY_MODE === 1 ? "Test (Dummy)" : "Production", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.config.ENABLE_DETAILED_LOGGING === 1 ? "Verbose" : "Standard", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.config.ENABLE_ERROR_NOTIFICATIONS === 1 ? "Enabled" : "Disabled", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.config.SEND_GROUP_MINUTES === 1 ? "Sending" : "Suppressed", " ");
    }
  }, dependencies: [CommonModule, FormsModule], styles: ['\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.toggle-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.toggle-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 20px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.toggle-item.enabled[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border-color: #b3d9ff;\n}\n.toggle-item[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toggle-item[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  color: #333;\n  font-size: 15px;\n  font-weight: 600;\n}\n.toggle-item[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #555;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.toggle-item[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%]   .warning-badge[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 4px;\n}\n.toggle-item[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%]   .warning-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #856404;\n  font-size: 12px;\n  font-weight: 500;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 26px;\n  flex-shrink: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(24px);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .toggle-slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.2);\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 26px;\n  transition: 0.3s;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.status-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.status-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.status-summary[_ngcontent-%COMP%]   .status-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .status-summary[_ngcontent-%COMP%]   .status-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.status-summary[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.status-summary[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-summary[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.status-summary[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-value.warning[_ngcontent-%COMP%] {\n  color: #856404;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionProcessing, [{
    type: Component,
    args: [{ selector: "app-config-section-processing", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <div class="toggle-list">
        <!-- Dummy Mode -->
        <div class="toggle-item" [class.enabled]="config.ENABLE_DUMMY_MODE === 1">
          <div class="toggle-info">
            <h4>Dummy Mode</h4>
            <p>When enabled, the system processes data without actually submitting to Mirth Connect. Useful for testing and validation.</p>
            @if (config.ENABLE_DUMMY_MODE === 1) {
              <div class="warning-badge">
                <span>Warning: Data will NOT be submitted to external systems</span>
              </div>
            }
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              [checked]="config.ENABLE_DUMMY_MODE === 1"
              (change)="onToggleChange('ENABLE_DUMMY_MODE', $event)" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Detailed Logging -->
        <div class="toggle-item" [class.enabled]="config.ENABLE_DETAILED_LOGGING === 1">
          <div class="toggle-info">
            <h4>Detailed Logging</h4>
            <p>Enables verbose logging of all processing steps, including data transformations and API calls. Helpful for debugging but may impact performance.</p>
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              [checked]="config.ENABLE_DETAILED_LOGGING === 1"
              (change)="onToggleChange('ENABLE_DETAILED_LOGGING', $event)" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Error Notifications -->
        <div class="toggle-item" [class.enabled]="config.ENABLE_ERROR_NOTIFICATIONS === 1">
          <div class="toggle-info">
            <h4>Error Notifications</h4>
            <p>Sends notifications when submission errors occur. Configure notification recipients in the system settings.</p>
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              [checked]="config.ENABLE_ERROR_NOTIFICATIONS === 1"
              (change)="onToggleChange('ENABLE_ERROR_NOTIFICATIONS', $event)" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Send Group Minutes -->
        <div class="toggle-item" [class.enabled]="config.SEND_GROUP_MINUTES === 1">
          <div class="toggle-info">
            <h4>Send Group Minutes</h4>
            <p>When enabled, direct minutes (DE10.006) are included in group encounter submissions. OH recommends disabling until PDS 2.0 clarifies group minute requirements.</p>
          </div>
          <label class="toggle-switch">
            <input
              type="checkbox"
              [checked]="config.SEND_GROUP_MINUTES === 1"
              (change)="onToggleChange('SEND_GROUP_MINUTES', $event)" />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- Status Summary -->
      <div class="status-summary">
        <h4>Current Status</h4>
        <div class="status-grid">
          <div class="status-item">
            <span class="status-label">Mode:</span>
            <span class="status-value" [class.warning]="config.ENABLE_DUMMY_MODE === 1">
              {{ config.ENABLE_DUMMY_MODE === 1 ? 'Test (Dummy)' : 'Production' }}
            </span>
          </div>
          <div class="status-item">
            <span class="status-label">Logging:</span>
            <span class="status-value">
              {{ config.ENABLE_DETAILED_LOGGING === 1 ? 'Verbose' : 'Standard' }}
            </span>
          </div>
          <div class="status-item">
            <span class="status-label">Notifications:</span>
            <span class="status-value">
              {{ config.ENABLE_ERROR_NOTIFICATIONS === 1 ? 'Enabled' : 'Disabled' }}
            </span>
          </div>
          <div class="status-item">
            <span class="status-label">Group Minutes:</span>
            <span class="status-value">
              {{ config.SEND_GROUP_MINUTES === 1 ? 'Sending' : 'Suppressed' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;315ee77705057cbcd5866388963cc641ff525796c68d090256f3295a1eb07f50;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-processing.ts */\n.section-content {\n  max-width: 800px;\n}\n.toggle-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.toggle-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 20px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.toggle-item.enabled {\n  background-color: #e7f3ff;\n  border-color: #b3d9ff;\n}\n.toggle-item .toggle-info {\n  flex: 1;\n}\n.toggle-item .toggle-info h4 {\n  margin: 0 0 6px 0;\n  color: #333;\n  font-size: 15px;\n  font-weight: 600;\n}\n.toggle-item .toggle-info p {\n  margin: 0;\n  color: #555;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.toggle-item .toggle-info .warning-badge {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 4px;\n}\n.toggle-item .toggle-info .warning-badge span {\n  color: #856404;\n  font-size: 12px;\n  font-weight: 500;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 26px;\n  flex-shrink: 0;\n}\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch input:checked + .toggle-slider {\n  background-color: #0078d4;\n}\n.toggle-switch input:checked + .toggle-slider:before {\n  transform: translateX(24px);\n}\n.toggle-switch input:focus + .toggle-slider {\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.2);\n}\n.toggle-switch .toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 26px;\n  transition: 0.3s;\n}\n.toggle-switch .toggle-slider:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.status-summary {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.status-summary h4 {\n  margin: 0 0 12px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.status-summary .status-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .status-summary .status-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.status-summary .status-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.status-summary .status-item .status-label {\n  color: #6c757d;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-summary .status-item .status-value {\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.status-summary .status-item .status-value.warning {\n  color: #856404;\n}\n'] }]
  }], null, { config: [{
    type: Input
  }], configChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionProcessing, { className: "ConfigSectionProcessing", filePath: "src/app/config-editor/sections/config-section-processing.ts", lineNumber: 284 });
})();

// src/app/config-editor/sections/config-section-submit-fields.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.FIELD_CODE;
function ConfigSectionSubmitFields_For_47_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "label", 34)(3, "input", 35);
    \u0275\u0275listener("change", function ConfigSectionSubmitFields_For_47_Conditional_12_For_2_Template_input_change_3_listener($event) {
      const field_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onActiveToggle(field_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 37)(6, "input", 35);
    \u0275\u0275listener("change", function ConfigSectionSubmitFields_For_47_Conditional_12_For_2_Template_input_change_6_listener($event) {
      const field_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRequiredToggle(field_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38)(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    \u0275\u0275classProp("active", field_r5.ACTIVE_IND === 1)("required", field_r5.REQUIRED_IND === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", field_r5.ACTIVE_IND === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", field_r5.REQUIRED_IND === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(field_r5.FIELD_CODE);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.DESCRIPTION);
  }
}
function ConfigSectionSubmitFields_For_47_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "No fields match the search criteria");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionSubmitFields_For_47_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, ConfigSectionSubmitFields_For_47_Conditional_12_For_2_Template, 13, 8, "div", 30, _forTrack1);
    \u0275\u0275conditionalCreate(3, ConfigSectionSubmitFields_For_47_Conditional_12_Conditional_3_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filterFields(entry_r2.fields));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filterFields(entry_r2.fields).length === 0 ? 3 : -1);
  }
}
function ConfigSectionSubmitFields_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275listener("click", function ConfigSectionSubmitFields_For_47_Template_div_click_1_listener() {
      const entry_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleGroup(entry_r2.key));
    });
    \u0275\u0275elementStart(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 28);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ConfigSectionSubmitFields_For_47_Conditional_12_Template, 4, 1, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("collapsed", ctx_r2.collapsedGroups()[entry_r2.key]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.collapsedGroups()[entry_r2.key] ? "+" : "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r2.key, ": ", ctx_r2.getDataElementLabel(entry_r2.key));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r2.getActiveCountForGroup(entry_r2.key), "/", entry_r2.fields.length, " active ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getRequiredCountForGroup(entry_r2.key), " req ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.collapsedGroups()[entry_r2.key] ? 12 : -1);
  }
}
function ConfigSectionSubmitFields_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p");
    \u0275\u0275text(2, "No submit fields configured");
    \u0275\u0275elementEnd()();
  }
}
var ConfigSectionSubmitFields = class _ConfigSectionSubmitFields {
  fields = [];
  fieldsByCategory = /* @__PURE__ */ new Map();
  fieldsChange = new EventEmitter();
  // UI state
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  collapsedGroups = signal({}, ...ngDevMode ? [{ debugName: "collapsedGroups" }] : []);
  // Data element labels
  DATA_ELEMENT_LABELS = MHA_PDS_DATA_ELEMENTS;
  // Computed values
  sortedCategories = computed(() => {
    const entries = Array.from(this.fieldsByCategory.entries()).map(([key, fields]) => ({ key, fields })).sort((a, b) => a.key.localeCompare(b.key));
    return entries;
  }, ...ngDevMode ? [{ debugName: "sortedCategories" }] : []);
  activeCount = computed(() => {
    return this.fields.filter((f) => f.ACTIVE_IND === 1).length;
  }, ...ngDevMode ? [{ debugName: "activeCount" }] : []);
  requiredCount = computed(() => {
    return this.fields.filter((f) => f.REQUIRED_IND === 1).length;
  }, ...ngDevMode ? [{ debugName: "requiredCount" }] : []);
  totalCount = computed(() => {
    return this.fields.length;
  }, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  getDataElementLabel(key) {
    return this.DATA_ELEMENT_LABELS[key] || key;
  }
  getActiveCountForGroup(key) {
    const fields = this.fieldsByCategory.get(key) || [];
    return fields.filter((f) => f.ACTIVE_IND === 1).length;
  }
  getRequiredCountForGroup(key) {
    const fields = this.fieldsByCategory.get(key) || [];
    return fields.filter((f) => f.REQUIRED_IND === 1).length;
  }
  toggleGroup(key) {
    this.collapsedGroups.update((groups) => __spreadProps(__spreadValues({}, groups), {
      [key]: !groups[key]
    }));
  }
  filterFields(fields) {
    const term = this.searchTerm().toLowerCase();
    if (!term)
      return fields;
    return fields.filter((f) => f.FIELD_CODE.toLowerCase().includes(term) || f.DESCRIPTION.toLowerCase().includes(term));
  }
  onActiveToggle(field, event) {
    const checked = event.target.checked;
    const updatedFields = this.fields.map((f) => f.FIELD_CODE === field.FIELD_CODE ? __spreadProps(__spreadValues({}, f), { ACTIVE_IND: checked ? 1 : 0 }) : f);
    this.fieldsChange.emit(updatedFields);
  }
  onRequiredToggle(field, event) {
    const checked = event.target.checked;
    const updatedFields = this.fields.map((f) => f.FIELD_CODE === field.FIELD_CODE ? __spreadProps(__spreadValues({}, f), { REQUIRED_IND: checked ? 1 : 0 }) : f);
    this.fieldsChange.emit(updatedFields);
  }
  enableAll() {
    const updatedFields = this.fields.map((f) => __spreadProps(__spreadValues({}, f), { ACTIVE_IND: 1 }));
    this.fieldsChange.emit(updatedFields);
  }
  disableAll() {
    const updatedFields = this.fields.map((f) => __spreadProps(__spreadValues({}, f), { ACTIVE_IND: 0 }));
    this.fieldsChange.emit(updatedFields);
  }
  requireAll() {
    const updatedFields = this.fields.map((f) => __spreadProps(__spreadValues({}, f), { REQUIRED_IND: 1 }));
    this.fieldsChange.emit(updatedFields);
  }
  unrequireAll() {
    const updatedFields = this.fields.map((f) => __spreadProps(__spreadValues({}, f), { REQUIRED_IND: 0 }));
    this.fieldsChange.emit(updatedFields);
  }
  static \u0275fac = function ConfigSectionSubmitFields_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionSubmitFields)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionSubmitFields, selectors: [["app-config-section-submit-fields"]], inputs: { fields: "fields", fieldsByCategory: "fieldsByCategory" }, outputs: { fieldsChange: "fieldsChange" }, decls: 49, vars: 5, consts: [[1, "section-content"], [1, "controls-bar"], [1, "search-box"], ["type", "text", "placeholder", "Search fields...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bulk-actions"], [1, "action-group"], [1, "action-label"], [1, "btn", "btn-small", "btn-outline", "btn-active", 3, "click"], [1, "btn", "btn-small", "btn-outline", 3, "click"], [1, "btn", "btn-small", "btn-outline", "btn-required", 3, "click"], [1, "stats"], [1, "stat-item", "stat-active"], [1, "stat-divider"], [1, "stat-item", "stat-required"], [1, "stat-item"], [1, "legend"], [1, "legend-item"], [1, "legend-checkbox", "active"], [1, "legend-checkbox", "required"], [1, "field-groups"], [1, "field-group", 3, "collapsed"], [1, "empty-state"], [1, "field-group"], [1, "group-header", 3, "click"], [1, "group-title"], [1, "expand-icon"], [1, "group-stats"], [1, "active-count"], [1, "required-count"], [1, "group-content"], [1, "field-item", 3, "active", "required"], [1, "no-results"], [1, "field-item"], [1, "field-checkboxes"], ["title", "Active", 1, "field-checkbox", "active-checkbox"], ["type", "checkbox", 3, "change", "checked"], [1, "checkmark"], ["title", "Required", 1, "field-checkbox", "required-checkbox"], [1, "field-info"], [1, "field-code"], [1, "field-description"]], template: function ConfigSectionSubmitFields_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
      \u0275\u0275listener("ngModelChange", function ConfigSectionSubmitFields_Template_input_ngModelChange_3_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "span", 6);
      \u0275\u0275text(7, "Active:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function ConfigSectionSubmitFields_Template_button_click_8_listener() {
        return ctx.enableAll();
      });
      \u0275\u0275text(9, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function ConfigSectionSubmitFields_Template_button_click_10_listener() {
        return ctx.disableAll();
      });
      \u0275\u0275text(11, "None");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "span", 6);
      \u0275\u0275text(14, "Required:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function ConfigSectionSubmitFields_Template_button_click_15_listener() {
        return ctx.requireAll();
      });
      \u0275\u0275text(16, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275listener("click", function ConfigSectionSubmitFields_Template_button_click_17_listener() {
        return ctx.unrequireAll();
      });
      \u0275\u0275text(18, "None");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 10)(20, "span", 11)(21, "strong");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " active ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 12);
      \u0275\u0275text(25, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 13)(27, "strong");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " required ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 12);
      \u0275\u0275text(31, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 14)(33, "strong");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " total ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 15)(37, "div", 16);
      \u0275\u0275element(38, "span", 17);
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "Active (included in submission)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 16);
      \u0275\u0275element(42, "span", 18);
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Required (validation enforced)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 19);
      \u0275\u0275repeaterCreate(46, ConfigSectionSubmitFields_For_47_Template, 13, 9, "div", 20, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(48, ConfigSectionSubmitFields_Conditional_48_Template, 3, 0, "div", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(19);
      \u0275\u0275textInterpolate(ctx.activeCount());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.requiredCount());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalCount());
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.sortedCategories());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sortedCategories().length === 0 ? 48 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.controls-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 12px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.controls-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.controls-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.controls-bar[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.controls-bar[_ngcontent-%COMP%]   .bulk-actions[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]   .action-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin-right: 4px;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat-active[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0078d4;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat-required[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 16px;\n  padding: 8px 12px;\n  background-color: #fafafa;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #666;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.legend[_ngcontent-%COMP%]   .legend-checkbox[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n}\n.legend[_ngcontent-%COMP%]   .legend-checkbox.active[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n}\n.legend[_ngcontent-%COMP%]   .legend-checkbox.required[_ngcontent-%COMP%] {\n  background-color: #d97706;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 11px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ced4da;\n  color: #333;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.btn-outline.btn-active[_ngcontent-%COMP%]:hover {\n  border-color: #0078d4;\n  color: #0078d4;\n}\n.btn-outline.btn-required[_ngcontent-%COMP%]:hover {\n  border-color: #d97706;\n  color: #d97706;\n}\n.field-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.field-group[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.field-group.collapsed[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.2s;\n}\n.group-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.group-header[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.group-header[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  color: #6c757d;\n}\n.group-header[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.group-header[_ngcontent-%COMP%]   .group-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.group-header[_ngcontent-%COMP%]   .group-stats[_ngcontent-%COMP%]   .active-count[_ngcontent-%COMP%], \n.group-header[_ngcontent-%COMP%]   .group-stats[_ngcontent-%COMP%]   .required-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 8px;\n  background-color: white;\n  border-radius: 12px;\n}\n.group-header[_ngcontent-%COMP%]   .group-stats[_ngcontent-%COMP%]   .active-count[_ngcontent-%COMP%] {\n  color: #0078d4;\n}\n.group-header[_ngcontent-%COMP%]   .group-stats[_ngcontent-%COMP%]   .required-count[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.group-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 8px;\n}\n.field-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background-color: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.field-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.field-item.active[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border-color: #b3d9ff;\n}\n.field-item.required[_ngcontent-%COMP%] {\n  border-left: 3px solid #d97706;\n}\n.field-item.active.required[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border-color: #b3d9ff;\n  border-left: 3px solid #d97706;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  z-index: 1;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border: 2px solid #ced4da;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox.active-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  border-color: #0078d4;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox.active-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox.required-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #d97706;\n  border-color: #d97706;\n}\n.field-item[_ngcontent-%COMP%]   .field-checkbox.required-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0078d4;\n  font-family: monospace;\n}\n.field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.no-results[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding: 20px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionSubmitFields, [{
    type: Component,
    args: [{ selector: "app-config-section-submit-fields", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <!-- Controls -->
      <div class="controls-bar">
        <div class="search-box">
          <input
            type="text"
            placeholder="Search fields..."
            class="form-control"
            [ngModel]="searchTerm()"
            (ngModelChange)="searchTerm.set($event)" />
        </div>
        <div class="bulk-actions">
          <div class="action-group">
            <span class="action-label">Active:</span>
            <button class="btn btn-small btn-outline btn-active" (click)="enableAll()">All</button>
            <button class="btn btn-small btn-outline" (click)="disableAll()">None</button>
          </div>
          <div class="action-group">
            <span class="action-label">Required:</span>
            <button class="btn btn-small btn-outline btn-required" (click)="requireAll()">All</button>
            <button class="btn btn-small btn-outline" (click)="unrequireAll()">None</button>
          </div>
        </div>
        <div class="stats">
          <span class="stat-item stat-active">
            <strong>{{ activeCount() }}</strong> active
          </span>
          <span class="stat-divider">|</span>
          <span class="stat-item stat-required">
            <strong>{{ requiredCount() }}</strong> required
          </span>
          <span class="stat-divider">|</span>
          <span class="stat-item">
            <strong>{{ totalCount() }}</strong> total
          </span>
        </div>
      </div>

      <!-- Legend -->
      <div class="legend">
        <div class="legend-item">
          <span class="legend-checkbox active"></span>
          <span>Active (included in submission)</span>
        </div>
        <div class="legend-item">
          <span class="legend-checkbox required"></span>
          <span>Required (validation enforced)</span>
        </div>
      </div>

      <!-- Field Groups -->
      <div class="field-groups">
        @for (entry of sortedCategories(); track entry.key) {
          <div class="field-group" [class.collapsed]="collapsedGroups()[entry.key]">
            <div class="group-header" (click)="toggleGroup(entry.key)">
              <div class="group-title">
                <span class="expand-icon">{{ collapsedGroups()[entry.key] ? '+' : '-' }}</span>
                <h4>{{ entry.key }}: {{ getDataElementLabel(entry.key) }}</h4>
              </div>
              <div class="group-stats">
                <span class="active-count">
                  {{ getActiveCountForGroup(entry.key) }}/{{ entry.fields.length }} active
                </span>
                <span class="required-count">
                  {{ getRequiredCountForGroup(entry.key) }} req
                </span>
              </div>
            </div>

            @if (!collapsedGroups()[entry.key]) {
              <div class="group-content">
                @for (field of filterFields(entry.fields); track field.FIELD_CODE) {
                  <div class="field-item"
                       [class.active]="field.ACTIVE_IND === 1"
                       [class.required]="field.REQUIRED_IND === 1">
                    <div class="field-checkboxes">
                      <label class="field-checkbox active-checkbox" title="Active">
                        <input
                          type="checkbox"
                          [checked]="field.ACTIVE_IND === 1"
                          (change)="onActiveToggle(field, $event)" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="field-checkbox required-checkbox" title="Required">
                        <input
                          type="checkbox"
                          [checked]="field.REQUIRED_IND === 1"
                          (change)="onRequiredToggle(field, $event)" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="field-info">
                      <span class="field-code">{{ field.FIELD_CODE }}</span>
                      <span class="field-description">{{ field.DESCRIPTION }}</span>
                    </div>
                  </div>
                }

                @if (filterFields(entry.fields).length === 0) {
                  <div class="no-results">No fields match the search criteria</div>
                }
              </div>
            }
          </div>
        }
      </div>

      @if (sortedCategories().length === 0) {
        <div class="empty-state">
          <p>No submit fields configured</p>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;bd15c36470d5fb9ab9abe0a34cc1f138c663043bff6b4221ae151e0a7f015e15;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-submit-fields.ts */\n.section-content {\n  max-width: 1000px;\n}\n.controls-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 12px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar .search-box {\n  flex: 1;\n  min-width: 200px;\n}\n.controls-bar .search-box .form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.controls-bar .search-box .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar .bulk-actions {\n  display: flex;\n  gap: 16px;\n}\n.controls-bar .bulk-actions .action-group {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.controls-bar .bulk-actions .action-group .action-label {\n  font-size: 12px;\n  color: #666;\n  margin-right: 4px;\n}\n.controls-bar .stats {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.controls-bar .stats .stat-item {\n  font-size: 13px;\n  color: #555;\n}\n.controls-bar .stats .stat-active strong {\n  color: #0078d4;\n}\n.controls-bar .stats .stat-required strong {\n  color: #d97706;\n}\n.controls-bar .stats .stat-divider {\n  color: #ccc;\n}\n.legend {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 16px;\n  padding: 8px 12px;\n  background-color: #fafafa;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #666;\n}\n.legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.legend .legend-checkbox {\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n}\n.legend .legend-checkbox.active {\n  background-color: #0078d4;\n}\n.legend .legend-checkbox.required {\n  background-color: #d97706;\n}\n.btn-small {\n  padding: 4px 8px;\n  font-size: 11px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-outline {\n  background: white;\n  border: 1px solid #ced4da;\n  color: #333;\n}\n.btn-outline:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.btn-outline.btn-active:hover {\n  border-color: #0078d4;\n  color: #0078d4;\n}\n.btn-outline.btn-required:hover {\n  border-color: #d97706;\n  color: #d97706;\n}\n.field-groups {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.field-group {\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.field-group.collapsed .group-header {\n  border-radius: 8px;\n}\n.group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.2s;\n}\n.group-header:hover {\n  background-color: #e9ecef;\n}\n.group-header .group-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.group-header .group-title .expand-icon {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: bold;\n  color: #6c757d;\n}\n.group-header .group-title h4 {\n  margin: 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.group-header .group-stats {\n  display: flex;\n  gap: 8px;\n}\n.group-header .group-stats .active-count,\n.group-header .group-stats .required-count {\n  font-size: 12px;\n  padding: 4px 8px;\n  background-color: white;\n  border-radius: 12px;\n}\n.group-header .group-stats .active-count {\n  color: #0078d4;\n}\n.group-header .group-stats .required-count {\n  color: #d97706;\n}\n.group-content {\n  padding: 12px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 8px;\n}\n.field-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background-color: #fff;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.field-item:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.field-item.active {\n  background-color: #e7f3ff;\n  border-color: #b3d9ff;\n}\n.field-item.required {\n  border-left: 3px solid #d97706;\n}\n.field-item.active.required {\n  background-color: #e7f3ff;\n  border-color: #b3d9ff;\n  border-left: 3px solid #d97706;\n}\n.field-item .field-checkboxes {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.field-item .field-checkbox {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n.field-item .field-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  z-index: 1;\n}\n.field-item .field-checkbox .checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border: 2px solid #ced4da;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.field-item .field-checkbox .checkmark:after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.field-item .field-checkbox.active-checkbox input:checked ~ .checkmark {\n  background-color: #0078d4;\n  border-color: #0078d4;\n}\n.field-item .field-checkbox.active-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n.field-item .field-checkbox.required-checkbox input:checked ~ .checkmark {\n  background-color: #d97706;\n  border-color: #d97706;\n}\n.field-item .field-checkbox.required-checkbox input:checked ~ .checkmark:after {\n  display: block;\n}\n.field-item .field-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.field-item .field-info .field-code {\n  font-size: 12px;\n  font-weight: 600;\n  color: #0078d4;\n  font-family: monospace;\n}\n.field-item .field-info .field-description {\n  font-size: 13px;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.no-results {\n  grid-column: 1/-1;\n  padding: 20px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 14px;\n}\n.empty-state {\n  padding: 40px;\n  text-align: center;\n  color: #6c757d;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n'] }]
  }], null, { fields: [{
    type: Input
  }], fieldsByCategory: [{
    type: Input
  }], fieldsChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionSubmitFields, { className: "ConfigSectionSubmitFields", filePath: "src/app/config-editor/sections/config-section-submit-fields.ts", lineNumber: 499 });
})();

// src/app/config-editor/sections/code-table-editor-drawer.ts
var _forTrack02 = ($index, $item) => $item.CODE;
function CodeTableEditorDrawer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function CodeTableEditorDrawer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
  }
}
function CodeTableEditorDrawer_For_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 31);
    \u0275\u0275listener("ngModelChange", function CodeTableEditorDrawer_For_36_Conditional_2_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const mapping_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateMappingField(ctx_r1.getOriginalIndex(mapping_r5), "CODE", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mapping_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", mapping_r5.CODE);
  }
}
function CodeTableEditorDrawer_For_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mapping_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mapping_r5.CODE);
  }
}
function CodeTableEditorDrawer_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275conditionalCreate(2, CodeTableEditorDrawer_For_36_Conditional_2_Template, 1, 1, "input", 26)(3, CodeTableEditorDrawer_For_36_Conditional_3_Template, 2, 1, "code", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 14)(5, "input", 28);
    \u0275\u0275listener("ngModelChange", function CodeTableEditorDrawer_For_36_Template_input_ngModelChange_5_listener($event) {
      const mapping_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateMappingField(ctx_r1.getOriginalIndex(mapping_r5), "LABEL", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 15)(7, "input", 28);
    \u0275\u0275listener("ngModelChange", function CodeTableEditorDrawer_For_36_Template_input_ngModelChange_7_listener($event) {
      const mapping_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateMappingField(ctx_r1.getOriginalIndex(mapping_r5), "DESCRIPTION", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 16)(9, "input", 29);
    \u0275\u0275listener("ngModelChange", function CodeTableEditorDrawer_For_36_Template_input_ngModelChange_9_listener($event) {
      const mapping_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateMappingField(ctx_r1.getOriginalIndex(mapping_r5), "CODE_SYSTEM", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 17)(11, "input", 28);
    \u0275\u0275listener("ngModelChange", function CodeTableEditorDrawer_For_36_Template_input_ngModelChange_11_listener($event) {
      const mapping_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateMappingField(ctx_r1.getOriginalIndex(mapping_r5), "CODE_VALUE_SOURCE", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 18)(13, "input", 29);
    \u0275\u0275listener("ngModelChange", function CodeTableEditorDrawer_For_36_Template_input_ngModelChange_13_listener($event) {
      const mapping_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateMappingField(ctx_r1.getOriginalIndex(mapping_r5), "VALUE_SET_URL", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 19)(15, "button", 30);
    \u0275\u0275listener("click", function CodeTableEditorDrawer_For_36_Template_button_click_15_listener() {
      const mapping_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeMapping(ctx_r1.getOriginalIndex(mapping_r5)));
    });
    \u0275\u0275text(16, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mapping_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mapping_r5._isNew ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", mapping_r5.LABEL);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", mapping_r5.DESCRIPTION);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", mapping_r5.CODE_SYSTEM);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", mapping_r5.CODE_VALUE_SOURCE);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", mapping_r5.VALUE_SET_URL);
  }
}
function CodeTableEditorDrawer_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(' No entries match the filter "', ctx_r1.filterTerm(), '" ');
  }
}
function CodeTableEditorDrawer_Conditional_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, ' No entries in this code table. Click "Add Entry" to create one. ');
  }
}
function CodeTableEditorDrawer_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275conditionalCreate(2, CodeTableEditorDrawer_Conditional_37_Conditional_2_Template, 1, 1)(3, CodeTableEditorDrawer_Conditional_37_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filterTerm() ? 2 : 3);
  }
}
function CodeTableEditorDrawer_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Unsaved changes");
    \u0275\u0275elementEnd();
  }
}
var CodeTableEditorDrawer = class _CodeTableEditorDrawer {
  // Inputs
  isOpen = input(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  codeTableId = input("", ...ngDevMode ? [{ debugName: "codeTableId" }] : []);
  codeTableName = input("", ...ngDevMode ? [{ debugName: "codeTableName" }] : []);
  mappings = input([], ...ngDevMode ? [{ debugName: "mappings" }] : []);
  // Outputs
  save = output();
  close = output();
  // Local state
  filterTerm = signal("", ...ngDevMode ? [{ debugName: "filterTerm" }] : []);
  editedMappings = signal([], ...ngDevMode ? [{ debugName: "editedMappings" }] : []);
  originalMappingsJson = signal("", ...ngDevMode ? [{ debugName: "originalMappingsJson" }] : []);
  // Track if changes were made
  hasChanges = computed(() => {
    return JSON.stringify(this.editedMappings()) !== this.originalMappingsJson();
  }, ...ngDevMode ? [{ debugName: "hasChanges" }] : []);
  // Filtered mappings based on search
  filteredMappings = computed(() => {
    const term = this.filterTerm().toLowerCase();
    if (!term)
      return this.editedMappings();
    return this.editedMappings().filter((m) => m.CODE.toLowerCase().includes(term) || m.LABEL.toLowerCase().includes(term) || m.DESCRIPTION?.toLowerCase().includes(term));
  }, ...ngDevMode ? [{ debugName: "filteredMappings" }] : []);
  constructor() {
    effect(() => {
      const mappings = this.mappings();
      if (mappings) {
        const copy = this.deepCopy(mappings);
        this.editedMappings.set(copy);
        this.originalMappingsJson.set(JSON.stringify(copy));
        this.filterTerm.set("");
      }
    }, { allowSignalWrites: true });
  }
  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  getOriginalIndex(mapping) {
    return this.editedMappings().findIndex((m) => m === mapping);
  }
  updateMappingField(index, field, value) {
    const current = this.editedMappings();
    const updated = current.map((m, i) => i === index ? __spreadProps(__spreadValues({}, m), { [field]: value }) : m);
    this.editedMappings.set(updated);
  }
  addMapping() {
    const current = this.editedMappings();
    const newMapping = {
      CODE_TABLE_ID: this.codeTableId(),
      CODE: "",
      LABEL: "",
      DESCRIPTION: "",
      CODE_VALUE_SOURCE: "",
      CODE_SYSTEM: "",
      VALUE_SET_URL: "",
      COMMENT: "",
      _isNew: true
    };
    this.editedMappings.set([newMapping, ...current]);
  }
  removeMapping(index) {
    const current = this.editedMappings();
    this.editedMappings.set(current.filter((_, i) => i !== index));
  }
  onSave() {
    const cleaned = this.editedMappings().map((m) => {
      const _a = m, { _isNew } = _a, rest = __objRest(_a, ["_isNew"]);
      return rest;
    });
    this.save.emit(cleaned);
  }
  onCancel() {
    this.close.emit();
  }
  static \u0275fac = function CodeTableEditorDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeTableEditorDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeTableEditorDrawer, selectors: [["app-code-table-editor-drawer"]], inputs: { isOpen: [1, "isOpen"], codeTableId: [1, "codeTableId"], codeTableName: [1, "codeTableName"], mappings: [1, "mappings"] }, outputs: { save: "save", close: "close" }, decls: 45, vars: 9, consts: [[1, "drawer-backdrop"], [1, "drawer-panel"], [1, "drawer-header"], [1, "header-content"], [1, "header-subtitle"], ["title", "Close", 1, "close-btn", 3, "click"], [1, "drawer-toolbar"], [1, "search-box"], ["type", "text", "placeholder", "Filter by code or label...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "add-btn", 3, "click"], [1, "drawer-content"], [1, "mappings-table-container"], [1, "mappings-table"], [1, "col-code"], [1, "col-label"], [1, "col-description"], [1, "col-system"], [1, "col-source"], [1, "col-valueset"], [1, "col-actions"], [1, "drawer-footer"], [1, "changes-indicator"], [1, "footer-buttons"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "drawer-backdrop", 3, "click"], ["type", "text", "placeholder", "CODE", 1, "inline-input", 3, "ngModel"], [1, "code-value"], ["type", "text", 1, "inline-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "http://...", 1, "inline-input", 3, "ngModelChange", "ngModel"], ["title", "Delete entry", 1, "delete-btn", 3, "click"], ["type", "text", "placeholder", "CODE", 1, "inline-input", 3, "ngModelChange", "ngModel"], ["colspan", "7", 1, "empty-row"]], template: function CodeTableEditorDrawer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CodeTableEditorDrawer_Conditional_0_Template, 1, 0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function CodeTableEditorDrawer_Template_button_click_8_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(9, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "input", 8);
      \u0275\u0275listener("ngModelChange", function CodeTableEditorDrawer_Template_input_ngModelChange_12_listener($event) {
        return ctx.filterTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function CodeTableEditorDrawer_Template_button_click_13_listener() {
        return ctx.addMapping();
      });
      \u0275\u0275text(14, "+ Add Entry");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "table", 12)(18, "thead")(19, "tr")(20, "th", 13);
      \u0275\u0275text(21, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 14);
      \u0275\u0275text(23, "Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 15);
      \u0275\u0275text(25, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 16);
      \u0275\u0275text(27, "Code System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 17);
      \u0275\u0275text(29, "Source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 18);
      \u0275\u0275text(31, "Value Set URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 19);
      \u0275\u0275text(33, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275repeaterCreate(35, CodeTableEditorDrawer_For_36_Template, 17, 6, "tr", null, _forTrack02);
      \u0275\u0275conditionalCreate(37, CodeTableEditorDrawer_Conditional_37_Template, 4, 1, "tr");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 20);
      \u0275\u0275conditionalCreate(39, CodeTableEditorDrawer_Conditional_39_Template, 2, 0, "span", 21);
      \u0275\u0275elementStart(40, "div", 22)(41, "button", 23);
      \u0275\u0275listener("click", function CodeTableEditorDrawer_Template_button_click_41_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(42, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 24);
      \u0275\u0275listener("click", function CodeTableEditorDrawer_Template_button_click_43_listener() {
        return ctx.onSave();
      });
      \u0275\u0275text(44, "Save Changes");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Edit ", ctx.codeTableId());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.codeTableName(), " (", ctx.editedMappings().length, " entries)");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.filterTerm());
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.filteredMappings());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredMappings().length === 0 ? 37 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 39 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n}\n.drawer-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -1100px;\n  width: 1100px;\n  height: 100vh;\n  background-color: white;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease-in-out;\n}\n.drawer-panel.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #155724 0%,\n      #28a745 100%);\n  color: white;\n}\n.drawer-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.drawer-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.9;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  opacity: 0.8;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.drawer-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.drawer-toolbar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 300px;\n}\n.drawer-toolbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.drawer-toolbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #28a745;\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.1);\n}\n.drawer-toolbar[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 4px;\n  color: #155724;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.drawer-toolbar[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover {\n  background-color: #c3e6cb;\n}\n.drawer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n}\n.mappings-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n}\n.mappings-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.mappings-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.mappings-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.mappings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.mappings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.mappings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.mappings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-code[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-label[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-description[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-system[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-source[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-valueset[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-actions[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n.mappings-table[_ngcontent-%COMP%]   .code-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  background-color: #d4edda;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 11px;\n  font-weight: 600;\n  color: #155724;\n}\n.mappings-table[_ngcontent-%COMP%]   .inline-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.mappings-table[_ngcontent-%COMP%]   .inline-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #28a745;\n}\n.mappings-table[_ngcontent-%COMP%]   .inline-input[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.mappings-table[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc3545;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 2px 8px;\n  border-radius: 3px;\n}\n.mappings-table[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee;\n}\n.mappings-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  padding: 40px;\n  font-style: italic;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  background-color: #f8f9fa;\n}\n.drawer-footer[_ngcontent-%COMP%]   .changes-indicator[_ngcontent-%COMP%] {\n  color: #856404;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 4px 10px;\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 4px;\n}\n.footer-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n  color: #333;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  border: 1px solid #28a745;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeTableEditorDrawer, [{
    type: Component,
    args: [{ selector: "app-code-table-editor-drawer", standalone: true, imports: [CommonModule, FormsModule], template: `
    <!-- Backdrop -->
    @if (isOpen()) {
      <div class="drawer-backdrop" (click)="onCancel()"></div>
    }

    <!-- Drawer Panel -->
    <div class="drawer-panel" [class.open]="isOpen()">
      <!-- Header -->
      <div class="drawer-header">
        <div class="header-content">
          <h3>Edit {{ codeTableId() }}</h3>
          <span class="header-subtitle">{{ codeTableName() }} ({{ editedMappings().length }} entries)</span>
        </div>
        <button class="close-btn" (click)="onCancel()" title="Close">\xD7</button>
      </div>

      <!-- Toolbar -->
      <div class="drawer-toolbar">
        <div class="search-box">
          <input
            type="text"
            class="form-control"
            placeholder="Filter by code or label..."
            [ngModel]="filterTerm()"
            (ngModelChange)="filterTerm.set($event)" />
        </div>
        <button class="add-btn" (click)="addMapping()">+ Add Entry</button>
      </div>

      <!-- Content -->
      <div class="drawer-content">
        <div class="mappings-table-container">
          <table class="mappings-table">
            <thead>
              <tr>
                <th class="col-code">Code</th>
                <th class="col-label">Label</th>
                <th class="col-description">Description</th>
                <th class="col-system">Code System</th>
                <th class="col-source">Source</th>
                <th class="col-valueset">Value Set URL</th>
                <th class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (mapping of filteredMappings(); track mapping.CODE; let i = $index) {
                <tr>
                  <td class="col-code">
                    @if (mapping._isNew) {
                      <input
                        type="text"
                        class="inline-input"
                        placeholder="CODE"
                        [ngModel]="mapping.CODE"
                        (ngModelChange)="updateMappingField(getOriginalIndex(mapping), 'CODE', $event)" />
                    } @else {
                      <code class="code-value">{{ mapping.CODE }}</code>
                    }
                  </td>
                  <td class="col-label">
                    <input
                      type="text"
                      class="inline-input"
                      [ngModel]="mapping.LABEL"
                      (ngModelChange)="updateMappingField(getOriginalIndex(mapping), 'LABEL', $event)" />
                  </td>
                  <td class="col-description">
                    <input
                      type="text"
                      class="inline-input"
                      [ngModel]="mapping.DESCRIPTION"
                      (ngModelChange)="updateMappingField(getOriginalIndex(mapping), 'DESCRIPTION', $event)" />
                  </td>
                  <td class="col-system">
                    <input
                      type="text"
                      class="inline-input"
                      placeholder="http://..."
                      [ngModel]="mapping.CODE_SYSTEM"
                      (ngModelChange)="updateMappingField(getOriginalIndex(mapping), 'CODE_SYSTEM', $event)" />
                  </td>
                  <td class="col-source">
                    <input
                      type="text"
                      class="inline-input"
                      [ngModel]="mapping.CODE_VALUE_SOURCE"
                      (ngModelChange)="updateMappingField(getOriginalIndex(mapping), 'CODE_VALUE_SOURCE', $event)" />
                  </td>
                  <td class="col-valueset">
                    <input
                      type="text"
                      class="inline-input"
                      placeholder="http://..."
                      [ngModel]="mapping.VALUE_SET_URL"
                      (ngModelChange)="updateMappingField(getOriginalIndex(mapping), 'VALUE_SET_URL', $event)" />
                  </td>
                  <td class="col-actions">
                    <button
                      class="delete-btn"
                      (click)="removeMapping(getOriginalIndex(mapping))"
                      title="Delete entry">\xD7</button>
                  </td>
                </tr>
              }

              @if (filteredMappings().length === 0) {
                <tr>
                  <td colspan="7" class="empty-row">
                    @if (filterTerm()) {
                      No entries match the filter "{{ filterTerm() }}"
                    } @else {
                      No entries in this code table. Click "Add Entry" to create one.
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <!-- Footer -->
      <div class="drawer-footer">
        @if (hasChanges()) {
          <span class="changes-indicator">Unsaved changes</span>
        }
        <div class="footer-buttons">
          <button class="btn btn-secondary" (click)="onCancel()">Cancel</button>
          <button class="btn btn-primary" (click)="onSave()">Save Changes</button>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;9bf982f3c0c1119a42203a19bce7ef2512c335febaac23c7c9a6737c2ae2811c;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/code-table-editor-drawer.ts */\n.drawer-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n}\n.drawer-panel {\n  position: fixed;\n  top: 0;\n  right: -1100px;\n  width: 1100px;\n  height: 100vh;\n  background-color: white;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease-in-out;\n}\n.drawer-panel.open {\n  right: 0;\n}\n.drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #155724 0%,\n      #28a745 100%);\n  color: white;\n}\n.drawer-header .header-content h3 {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.drawer-header .header-content .header-subtitle {\n  font-size: 13px;\n  opacity: 0.9;\n}\n.drawer-header .close-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  opacity: 0.8;\n}\n.drawer-header .close-btn:hover {\n  opacity: 1;\n}\n.drawer-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.drawer-toolbar .search-box {\n  flex: 1;\n  max-width: 300px;\n}\n.drawer-toolbar .form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.drawer-toolbar .form-control:focus {\n  outline: none;\n  border-color: #28a745;\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.1);\n}\n.drawer-toolbar .add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 4px;\n  color: #155724;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.drawer-toolbar .add-btn:hover {\n  background-color: #c3e6cb;\n}\n.drawer-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n}\n.mappings-table-container {\n  overflow-x: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n}\n.mappings-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.mappings-table th,\n.mappings-table td {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.mappings-table thead {\n  background-color: #f8f9fa;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.mappings-table thead th {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.mappings-table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.mappings-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.mappings-table .col-code {\n  width: 120px;\n}\n.mappings-table .col-label {\n  min-width: 180px;\n}\n.mappings-table .col-description {\n  min-width: 150px;\n}\n.mappings-table .col-system {\n  width: 180px;\n}\n.mappings-table .col-source {\n  width: 120px;\n}\n.mappings-table .col-valueset {\n  width: 200px;\n}\n.mappings-table .col-actions {\n  width: 50px;\n  text-align: center;\n}\n.mappings-table .code-value {\n  display: inline-block;\n  padding: 3px 8px;\n  background-color: #d4edda;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 11px;\n  font-weight: 600;\n  color: #155724;\n}\n.mappings-table .inline-input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.mappings-table .inline-input:focus {\n  outline: none;\n  border-color: #28a745;\n}\n.mappings-table .inline-input::placeholder {\n  color: #adb5bd;\n}\n.mappings-table .delete-btn {\n  background: none;\n  border: none;\n  color: #dc3545;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 2px 8px;\n  border-radius: 3px;\n}\n.mappings-table .delete-btn:hover {\n  background-color: #fee;\n}\n.mappings-table .empty-row {\n  text-align: center;\n  color: #6c757d;\n  padding: 40px;\n  font-style: italic;\n}\n.drawer-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  background-color: #f8f9fa;\n}\n.drawer-footer .changes-indicator {\n  color: #856404;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 4px 10px;\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 4px;\n}\n.footer-buttons {\n  display: flex;\n  gap: 12px;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-secondary {\n  background-color: white;\n  border: 1px solid #ccc;\n  color: #333;\n}\n.btn.btn-secondary:hover {\n  background-color: #f0f0f0;\n}\n.btn.btn-primary {\n  background-color: #28a745;\n  border: 1px solid #28a745;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background-color: #218838;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeTableEditorDrawer, { className: "CodeTableEditorDrawer", filePath: "src/app/config-editor/sections/code-table-editor-drawer.ts", lineNumber: 431 });
})();

// src/app/config-editor/sections/config-section-code-tables.ts
var _forTrack03 = ($index, $item) => $item.CODE_TABLE_ID;
var _forTrack12 = ($index, $item) => $item.CODE_TABLE_ID + "-" + $item.CODE;
function ConfigSectionCodeTables_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 23);
    \u0275\u0275text(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Select a code table from the dropdown to edit its entries.");
    \u0275\u0275elementEnd()();
  }
}
function ConfigSectionCodeTables_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 23);
    \u0275\u0275text(2, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedTable());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", ctx_r0.getTableName(ctx_r0.selectedTable()), ' \u2014 Click "Edit" to modify entries ');
  }
}
function ConfigSectionCodeTables_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", table_r2.CODE_TABLE_ID);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", table_r2.CODE_TABLE_ID, ": ", table_r2.CODE_TABLE_NAME, " (", ctx_r0.getMappingCountForTable(table_r2.CODE_TABLE_ID), ") ");
  }
}
function ConfigSectionCodeTables_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ConfigSectionCodeTables_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openEditor());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Edit ", ctx_r0.selectedTable(), " ");
  }
}
function ConfigSectionCodeTables_For_40_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mapping_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", mapping_r4.CODE_SYSTEM, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.shortenUrl(mapping_r4.CODE_SYSTEM), " ");
  }
}
function ConfigSectionCodeTables_For_40_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionCodeTables_For_40_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mapping_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mapping_r4.CODE_VALUE_SOURCE);
  }
}
function ConfigSectionCodeTables_For_40_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionCodeTables_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15)(2, "code", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 16)(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 17)(8, "code");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 19);
    \u0275\u0275conditionalCreate(13, ConfigSectionCodeTables_For_40_Conditional_13_Template, 2, 2, "a", 27)(14, ConfigSectionCodeTables_For_40_Conditional_14_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 20);
    \u0275\u0275conditionalCreate(16, ConfigSectionCodeTables_For_40_Conditional_16_Template, 2, 1, "span", 29)(17, ConfigSectionCodeTables_For_40_Conditional_17_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mapping_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mapping_r4.CODE_TABLE_ID);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getTableName(mapping_r4.CODE_TABLE_ID));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mapping_r4.CODE);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mapping_r4.LABEL);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mapping_r4.CODE_SYSTEM ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(mapping_r4.CODE_VALUE_SOURCE ? 16 : 17);
  }
}
function ConfigSectionCodeTables_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, " No mappings found matching the search criteria ");
    \u0275\u0275elementEnd()();
  }
}
function ConfigSectionCodeTables_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 31);
    \u0275\u0275listener("click", function ConfigSectionCodeTables_Conditional_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(1));
    });
    \u0275\u0275text(2, " First ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function ConfigSectionCodeTables_Conditional_42_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275text(4, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function ConfigSectionCodeTables_Conditional_42_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function ConfigSectionCodeTables_Conditional_42_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.totalPages()));
    });
    \u0275\u0275text(10, " Last ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r0.currentPage(), " of ", ctx_r0.totalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
  }
}
var ConfigSectionCodeTables = class _ConfigSectionCodeTables {
  codeTables = [];
  codeTableMappings = [];
  codeTableMappingsChange = new EventEmitter();
  // UI state
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  selectedTable = signal("", ...ngDevMode ? [{ debugName: "selectedTable" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 25;
  // Drawer state
  isDrawerOpen = signal(false, ...ngDevMode ? [{ debugName: "isDrawerOpen" }] : []);
  editingTableId = signal("", ...ngDevMode ? [{ debugName: "editingTableId" }] : []);
  editingTableName = signal("", ...ngDevMode ? [{ debugName: "editingTableName" }] : []);
  // Computed values
  filteredMappings = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const tableId = this.selectedTable();
    return this.codeTableMappings.filter((mapping) => {
      if (tableId && mapping.CODE_TABLE_ID !== tableId) {
        return false;
      }
      if (term) {
        const tableName = this.getTableName(mapping.CODE_TABLE_ID).toLowerCase();
        return mapping.CODE.toLowerCase().includes(term) || mapping.LABEL.toLowerCase().includes(term) || mapping.DESCRIPTION.toLowerCase().includes(term) || tableName.includes(term);
      }
      return true;
    });
  }, ...ngDevMode ? [{ debugName: "filteredMappings" }] : []);
  totalPages = computed(() => {
    return Math.ceil(this.filteredMappings().length / this.pageSize) || 1;
  }, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  paginatedMappings = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredMappings().slice(start, end);
  }, ...ngDevMode ? [{ debugName: "paginatedMappings" }] : []);
  // Get mappings for the currently selected table (for editor)
  mappingsForSelectedTable = computed(() => {
    const tableId = this.editingTableId();
    if (!tableId)
      return [];
    return this.codeTableMappings.filter((m) => m.CODE_TABLE_ID === tableId);
  }, ...ngDevMode ? [{ debugName: "mappingsForSelectedTable" }] : []);
  getMappingCountForTable(tableId) {
    return this.codeTableMappings.filter((m) => m.CODE_TABLE_ID === tableId).length;
  }
  getTableName(tableId) {
    const table = this.codeTables.find((t) => t.CODE_TABLE_ID === tableId);
    return table?.CODE_TABLE_NAME || tableId;
  }
  shortenUrl(url) {
    try {
      const parsed = new URL(url);
      const path = parsed.pathname.split("/").pop() || "";
      return path || parsed.hostname;
    } catch {
      return url.length > 30 ? url.substring(0, 30) + "..." : url;
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  onTableSelect(tableId) {
    this.selectedTable.set(tableId);
    this.currentPage.set(1);
  }
  openEditor() {
    const tableId = this.selectedTable();
    if (!tableId)
      return;
    this.editingTableId.set(tableId);
    this.editingTableName.set(this.getTableName(tableId));
    this.isDrawerOpen.set(true);
  }
  closeEditor() {
    this.isDrawerOpen.set(false);
  }
  onEditorSave(updatedMappings) {
    const tableId = this.editingTableId();
    const otherMappings = this.codeTableMappings.filter((m) => m.CODE_TABLE_ID !== tableId);
    const mergedMappings = [...otherMappings, ...updatedMappings];
    mergedMappings.sort((a, b) => {
      const tableCompare = a.CODE_TABLE_ID.localeCompare(b.CODE_TABLE_ID);
      if (tableCompare !== 0)
        return tableCompare;
      return a.CODE.localeCompare(b.CODE);
    });
    this.codeTableMappingsChange.emit(mergedMappings);
    this.closeEditor();
  }
  static \u0275fac = function ConfigSectionCodeTables_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionCodeTables)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionCodeTables, selectors: [["app-config-section-code-tables"]], inputs: { codeTables: "codeTables", codeTableMappings: "codeTableMappings" }, outputs: { codeTableMappingsChange: "codeTableMappingsChange" }, decls: 44, vars: 13, consts: [[1, "section-content"], [1, "info-banner"], [1, "info-banner", "info-editable"], [1, "controls-bar"], [1, "search-box"], ["type", "text", "placeholder", "Search code tables or mappings...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-select"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "edit-btn"], [1, "stats"], [1, "stat-item"], [1, "mappings-table-container"], [1, "mappings-table"], [1, "col-ct-id"], [1, "col-table"], [1, "col-code"], [1, "col-label"], [1, "col-system"], [1, "col-source"], [1, "pagination"], [3, "save", "close", "isOpen", "codeTableId", "codeTableName", "mappings"], [1, "info-icon"], [1, "edit-btn", 3, "click"], [1, "ct-id-badge"], [1, "table-badge"], ["target", "_blank", 1, "system-link", 3, "href"], [1, "no-value"], [1, "source-text"], ["colspan", "6", 1, "empty-row"], [1, "btn-page", 3, "click", "disabled"], [1, "page-info"]], template: function ConfigSectionCodeTables_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ConfigSectionCodeTables_Conditional_1_Template, 5, 0, "div", 1)(2, ConfigSectionCodeTables_Conditional_2_Template, 7, 2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "input", 5);
      \u0275\u0275listener("ngModelChange", function ConfigSectionCodeTables_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "select", 7);
      \u0275\u0275listener("ngModelChange", function ConfigSectionCodeTables_Template_select_ngModelChange_7_listener($event) {
        return ctx.onTableSelect($event);
      });
      \u0275\u0275elementStart(8, "option", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(10, ConfigSectionCodeTables_For_11_Template, 2, 4, "option", 9, _forTrack03);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, ConfigSectionCodeTables_Conditional_12_Template, 2, 1, "button", 10);
      \u0275\u0275elementStart(13, "div", 11)(14, "span", 12);
      \u0275\u0275text(15, " Showing ");
      \u0275\u0275elementStart(16, "strong");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " of ");
      \u0275\u0275elementStart(19, "strong");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " mappings ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 13)(23, "table", 14)(24, "thead")(25, "tr")(26, "th", 15);
      \u0275\u0275text(27, "CT #");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 16);
      \u0275\u0275text(29, "Code Table");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 17);
      \u0275\u0275text(31, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 18);
      \u0275\u0275text(33, "Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 19);
      \u0275\u0275text(35, "Code System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 20);
      \u0275\u0275text(37, "Source");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "tbody");
      \u0275\u0275repeaterCreate(39, ConfigSectionCodeTables_For_40_Template, 18, 6, "tr", null, _forTrack12);
      \u0275\u0275conditionalCreate(41, ConfigSectionCodeTables_Conditional_41_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(42, ConfigSectionCodeTables_Conditional_42_Template, 11, 6, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "app-code-table-editor-drawer", 22);
      \u0275\u0275listener("save", function ConfigSectionCodeTables_Template_app_code_table_editor_drawer_save_43_listener($event) {
        return ctx.onEditorSave($event);
      })("close", function ConfigSectionCodeTables_Template_app_code_table_editor_drawer_close_43_listener() {
        return ctx.closeEditor();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.selectedTable() ? 1 : 2);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.selectedTable());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("All Code Tables (", ctx.codeTables.length, ")");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.codeTables);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedTable() ? 12 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.filteredMappings().length);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.codeTableMappings.length);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.paginatedMappings());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredMappings().length === 0 ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.totalPages() > 1 ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isDrawerOpen())("codeTableId", ctx.editingTableId())("codeTableName", ctx.editingTableName())("mappings", ctx.mappingsForSelectedTable());
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CodeTableEditorDrawer], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #0056b3;\n  font-size: 13px;\n}\n.info-banner[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #0078d4;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.info-banner.info-editable[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n  color: #155724;\n}\n.info-banner.info-editable[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n.controls-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.controls-bar[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n.controls-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.controls-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: white;\n}\n.controls-bar[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #28a745;\n  border: 1px solid #28a745;\n  border-radius: 4px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.controls-bar[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n.mappings-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.mappings-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mappings-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.mappings-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.mappings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.mappings-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.mappings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.mappings-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-ct-id[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-table[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-code[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-label[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-system[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-source[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.mappings-table[_ngcontent-%COMP%]   .ct-id-badge[_ngcontent-%COMP%] {\n  padding: 3px 6px;\n  background-color: #d4edda;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 11px;\n  font-weight: 600;\n  color: #155724;\n}\n.mappings-table[_ngcontent-%COMP%]   .table-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  background-color: #e9ecef;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #495057;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mappings-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #d73a49;\n}\n.mappings-table[_ngcontent-%COMP%]   .system-link[_ngcontent-%COMP%] {\n  color: #0078d4;\n  text-decoration: none;\n  font-size: 12px;\n}\n.mappings-table[_ngcontent-%COMP%]   .system-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mappings-table[_ngcontent-%COMP%]   .source-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #555;\n}\n.mappings-table[_ngcontent-%COMP%]   .no-value[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.mappings-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  padding: 40px;\n  font-style: italic;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 20px;\n  padding: 16px;\n}\n.pagination[_ngcontent-%COMP%]   .btn-page[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #ced4da;\n  background-color: white;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.pagination[_ngcontent-%COMP%]   .btn-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.pagination[_ngcontent-%COMP%]   .btn-page[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  font-size: 13px;\n  color: #555;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionCodeTables, [{
    type: Component,
    args: [{ selector: "app-config-section-code-tables", standalone: true, imports: [CommonModule, FormsModule, CodeTableEditorDrawer], template: `
    <div class="section-content">
      <!-- Info Banner - changes based on whether a table is selected -->
      @if (!selectedTable()) {
        <div class="info-banner">
          <span class="info-icon">i</span>
          <span>Select a code table from the dropdown to edit its entries.</span>
        </div>
      } @else {
        <div class="info-banner info-editable">
          <span class="info-icon">\u270E</span>
          <span>
            <strong>{{ selectedTable() }}</strong>: {{ getTableName(selectedTable()) }}
            \u2014 Click "Edit" to modify entries
          </span>
        </div>
      }

      <!-- Controls -->
      <div class="controls-bar">
        <div class="search-box">
          <input
            type="text"
            placeholder="Search code tables or mappings..."
            class="form-control"
            [ngModel]="searchTerm()"
            (ngModelChange)="searchTerm.set($event)" />
        </div>
        <div class="filter-select">
          <select
            class="form-control"
            [ngModel]="selectedTable()"
            (ngModelChange)="onTableSelect($event)">
            <option value="">All Code Tables ({{ codeTables.length }})</option>
            @for (table of codeTables; track table.CODE_TABLE_ID) {
              <option [value]="table.CODE_TABLE_ID">
                {{ table.CODE_TABLE_ID }}: {{ table.CODE_TABLE_NAME }} ({{ getMappingCountForTable(table.CODE_TABLE_ID) }})
              </option>
            }
          </select>
        </div>
        @if (selectedTable()) {
          <button class="edit-btn" (click)="openEditor()">
            Edit {{ selectedTable() }}
          </button>
        }
        <div class="stats">
          <span class="stat-item">
            Showing <strong>{{ filteredMappings().length }}</strong> of <strong>{{ codeTableMappings.length }}</strong> mappings
          </span>
        </div>
      </div>

      <!-- Code Table Mappings -->
      <div class="mappings-table-container">
        <table class="mappings-table">
          <thead>
            <tr>
              <th class="col-ct-id">CT #</th>
              <th class="col-table">Code Table</th>
              <th class="col-code">Code</th>
              <th class="col-label">Label</th>
              <th class="col-system">Code System</th>
              <th class="col-source">Source</th>
            </tr>
          </thead>
          <tbody>
            @for (mapping of paginatedMappings(); track mapping.CODE_TABLE_ID + '-' + mapping.CODE) {
              <tr>
                <td class="col-ct-id">
                  <code class="ct-id-badge">{{ mapping.CODE_TABLE_ID }}</code>
                </td>
                <td class="col-table">
                  <span class="table-badge">{{ getTableName(mapping.CODE_TABLE_ID) }}</span>
                </td>
                <td class="col-code">
                  <code>{{ mapping.CODE }}</code>
                </td>
                <td class="col-label">{{ mapping.LABEL }}</td>
                <td class="col-system">
                  @if (mapping.CODE_SYSTEM) {
                    <a [href]="mapping.CODE_SYSTEM" target="_blank" class="system-link">
                      {{ shortenUrl(mapping.CODE_SYSTEM) }}
                    </a>
                  } @else {
                    <span class="no-value">-</span>
                  }
                </td>
                <td class="col-source">
                  @if (mapping.CODE_VALUE_SOURCE) {
                    <span class="source-text">{{ mapping.CODE_VALUE_SOURCE }}</span>
                  } @else {
                    <span class="no-value">-</span>
                  }
                </td>
              </tr>
            }

            @if (filteredMappings().length === 0) {
              <tr>
                <td colspan="6" class="empty-row">
                  No mappings found matching the search criteria
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      @if (totalPages() > 1) {
        <div class="pagination">
          <button
            class="btn-page"
            [disabled]="currentPage() === 1"
            (click)="goToPage(1)">
            First
          </button>
          <button
            class="btn-page"
            [disabled]="currentPage() === 1"
            (click)="goToPage(currentPage() - 1)">
            Previous
          </button>
          <span class="page-info">
            Page {{ currentPage() }} of {{ totalPages() }}
          </span>
          <button
            class="btn-page"
            [disabled]="currentPage() === totalPages()"
            (click)="goToPage(currentPage() + 1)">
            Next
          </button>
          <button
            class="btn-page"
            [disabled]="currentPage() === totalPages()"
            (click)="goToPage(totalPages())">
            Last
          </button>
        </div>
      }
    </div>

    <!-- Editor Drawer -->
    <app-code-table-editor-drawer
      [isOpen]="isDrawerOpen()"
      [codeTableId]="editingTableId()"
      [codeTableName]="editingTableName()"
      [mappings]="mappingsForSelectedTable()"
      (save)="onEditorSave($event)"
      (close)="closeEditor()" />
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;3284dca237ef4cf4d9a8acb0d8347ec3a2e9e90e56c492dbfa87ac0619c94757;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-code-tables.ts */\n.section-content {\n  max-width: 1200px;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #0056b3;\n  font-size: 13px;\n}\n.info-banner .info-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #0078d4;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.info-banner.info-editable {\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n  color: #155724;\n}\n.info-banner.info-editable .info-icon {\n  background-color: #28a745;\n}\n.controls-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar .search-box {\n  flex: 1;\n  min-width: 200px;\n}\n.controls-bar .filter-select {\n  min-width: 250px;\n}\n.controls-bar .form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.controls-bar .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar select.form-control {\n  cursor: pointer;\n  background-color: white;\n}\n.controls-bar .edit-btn {\n  padding: 8px 16px;\n  background-color: #28a745;\n  border: 1px solid #28a745;\n  border-radius: 4px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.controls-bar .edit-btn:hover {\n  background-color: #218838;\n}\n.controls-bar .stats .stat-item {\n  font-size: 13px;\n  color: #555;\n}\n.mappings-table-container {\n  overflow-x: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.mappings-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.mappings-table th,\n.mappings-table td {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.mappings-table thead {\n  background-color: #f8f9fa;\n}\n.mappings-table thead th {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.mappings-table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.mappings-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.mappings-table .col-ct-id {\n  width: 70px;\n}\n.mappings-table .col-table {\n  width: 180px;\n}\n.mappings-table .col-code {\n  width: 120px;\n}\n.mappings-table .col-label {\n  min-width: 200px;\n}\n.mappings-table .col-system {\n  width: 200px;\n}\n.mappings-table .col-source {\n  width: 150px;\n}\n.mappings-table .ct-id-badge {\n  padding: 3px 6px;\n  background-color: #d4edda;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 11px;\n  font-weight: 600;\n  color: #155724;\n}\n.mappings-table .table-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  background-color: #e9ecef;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #495057;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mappings-table code {\n  padding: 2px 6px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #d73a49;\n}\n.mappings-table .system-link {\n  color: #0078d4;\n  text-decoration: none;\n  font-size: 12px;\n}\n.mappings-table .system-link:hover {\n  text-decoration: underline;\n}\n.mappings-table .source-text {\n  font-size: 12px;\n  color: #555;\n}\n.mappings-table .no-value {\n  color: #adb5bd;\n}\n.mappings-table .empty-row {\n  text-align: center;\n  color: #6c757d;\n  padding: 40px;\n  font-style: italic;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 20px;\n  padding: 16px;\n}\n.pagination .btn-page {\n  padding: 6px 12px;\n  border: 1px solid #ced4da;\n  background-color: white;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.pagination .btn-page:hover:not(:disabled) {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.pagination .btn-page:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .page-info {\n  padding: 0 12px;\n  font-size: 13px;\n  color: #555;\n}\n"] }]
  }], null, { codeTables: [{
    type: Input
  }], codeTableMappings: [{
    type: Input
  }], codeTableMappingsChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionCodeTables, { className: "ConfigSectionCodeTables", filePath: "src/app/config-editor/sections/config-section-code-tables.ts", lineNumber: 423 });
})();

// src/app/config-editor/sections/mapping-editor-drawer.ts
var _forTrack04 = ($index, $item) => $item.CODE;
var _forTrack13 = ($index, $item) => $item.field;
function MappingEditorDrawer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 16)(2, "label");
    \u0275\u0275text(3, "Field Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 17);
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6, "Field name cannot be changed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "label");
    \u0275\u0275text(9, "Field Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 19);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_18_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateField("MHA_PDS_FIELD_TYPE", $event));
    });
    \u0275\u0275elementStart(11, "option", 20);
    \u0275\u0275text(12, "Mapping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 21);
    \u0275\u0275text(14, "Freetext");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 22);
    \u0275\u0275text(16, "Date/Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 23);
    \u0275\u0275text(18, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 24);
    \u0275\u0275text(20, "Boolean");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 25);
    \u0275\u0275text(22, "SDOH");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "label");
    \u0275\u0275text(25, "Code Table (CT)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 26);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_18_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateField("MHA_PDS_CODE_SET", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 18);
    \u0275\u0275text(28, "MHA PDS code table reference for value lookups");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 16)(30, "label");
    \u0275\u0275text(31, "Notes / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 27);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_18_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateField("NOTES", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 16)(34, "label");
    \u0275\u0275text(35, "Function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 28);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_18_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateField("FUNCTION", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 18);
    \u0275\u0275text(38, "CCL function to call for custom data retrieval");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 16)(40, "label");
    \u0275\u0275text(41, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 29);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_18_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateField("DESCRIPTION", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 30)(44, "div", 31)(45, "label")(46, "input", 32);
    \u0275\u0275listener("change", function MappingEditorDrawer_Conditional_2_Conditional_18_Template_input_change_46_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateField("ALPHA_RESONSE_IND", $event.target.checked ? 1 : 0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Alpha Response ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 18);
    \u0275\u0275text(49, "Maps to alpha response from DTA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 31)(51, "label")(52, "input", 32);
    \u0275\u0275listener("change", function MappingEditorDrawer_Conditional_2_Conditional_18_Template_input_change_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateField("CONSTANT_IND", $event.target.checked ? 1 : 0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Constant Value ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 18);
    \u0275\u0275text(55, "Uses constant value from pairs");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.editedMapping().MHA_PDS_FIELD_NAME);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.editedMapping().MHA_PDS_FIELD_TYPE);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngModel", ctx_r1.editedMapping().MHA_PDS_CODE_SET || "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.editedMapping().NOTES);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.editedMapping().FUNCTION);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.editedMapping().DESCRIPTION);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.editedMapping().ALPHA_RESONSE_IND === 1);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r1.editedMapping().CONSTANT_IND === 1);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editedMapping().MHA_PDS_CODE_SET);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.ctValuesForMapping().length, " values available");
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_18_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctVal_r9 = ctx.$implicit;
    \u0275\u0275property("value", ctVal_r9.CODE);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctVal_r9.CODE, " - ", ctVal_r9.LABEL);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 54);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_18_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const \u0275$index_180_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onPdsValueSelect(\u0275$index_180_r7, $event));
    });
    \u0275\u0275elementStart(1, "option", 67);
    \u0275\u0275text(2, "-- Select --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_18_For_4_Template, 2, 3, "option", 68, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pair_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", pair_r10.PDS_VALUE);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.ctValuesForMapping());
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 53);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_19_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_180_r7 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "PDS_VALUE", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pair_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", pair_r10.PDS_VALUE);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 52);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_tr_click_0_listener() {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectPair(\u0275$index_180_r7));
    });
    \u0275\u0275elementStart(1, "td")(2, "input", 32);
    \u0275\u0275listener("change", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_input_change_2_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "ACTIVE_IND", $event.target.checked ? 1 : 0));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "input", 53);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_input_ngModelChange_4_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "TYPE", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 53);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_input_ngModelChange_6_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "KEY_REF", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "select", 54);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_select_ngModelChange_8_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "KEY_REF_TYPE", $event));
    });
    \u0275\u0275elementStart(9, "option", 55);
    \u0275\u0275text(10, "Alpha Response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 56);
    \u0275\u0275text(12, "Code Value Display");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 57);
    \u0275\u0275text(14, "Code Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 58);
    \u0275\u0275text(16, "Constant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275conditionalCreate(18, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_18_Template, 5, 1, "select", 59)(19, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Conditional_19_Template, 1, 1, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "select", 54);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_select_ngModelChange_21_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "PDS_VALUE_TYPE", $event));
    });
    \u0275\u0275elementStart(22, "option", 61);
    \u0275\u0275text(23, "MHA PDS Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 62);
    \u0275\u0275text(25, "Freetext");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 63);
    \u0275\u0275text(27, "SNOMED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 64);
    \u0275\u0275text(29, "LOINC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "td")(31, "input", 53);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_input_ngModelChange_31_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "DISPLAY", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td")(33, "input", 65);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_input_ngModelChange_33_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePairField(\u0275$index_180_r7, "PRIORITY", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td")(35, "button", 66);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template_button_click_35_listener($event) {
      const \u0275$index_180_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.removePair(\u0275$index_180_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(36, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pair_r10 = ctx.$implicit;
    const \u0275$index_180_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("inactive", pair_r10.ACTIVE_IND !== 1)("selected", ctx_r1.selectedPairIndex() === \u0275$index_180_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", pair_r10.ACTIVE_IND === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", pair_r10.TYPE);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", pair_r10.KEY_REF);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", pair_r10.KEY_REF_TYPE);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.ctValuesForMapping().length > 0 ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", pair_r10.PDS_VALUE_TYPE);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", pair_r10.DISPLAY);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", pair_r10.PRIORITY);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 71);
    \u0275\u0275text(2, "Code System:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctVal_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctVal_r12.CODE_SYSTEM);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 71);
    \u0275\u0275text(2, "Value Set URL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctVal_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctVal_r12.VALUE_SET_URL);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 71);
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctVal_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctVal_r12.DESCRIPTION);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "h5");
    \u0275\u0275text(2, "Selected Value Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69)(4, "div", 70)(5, "span", 71);
    \u0275\u0275text(6, "Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 70)(10, "span", 71);
    \u0275\u0275text(11, "Label:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 72);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Conditional_14_Template, 5, 1, "div", 73);
    \u0275\u0275conditionalCreate(15, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Conditional_15_Template, 5, 1, "div", 73);
    \u0275\u0275conditionalCreate(16, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Conditional_16_Template, 5, 1, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctVal_r12 = ctx;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctVal_r12.CODE);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctVal_r12.LABEL);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctVal_r12.CODE_SYSTEM ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctVal_r12.VALUE_SET_URL ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctVal_r12.DESCRIPTION ? 16 : -1);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "table", 40)(2, "thead")(3, "tr")(4, "th", 41);
    \u0275\u0275text(5, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 42);
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 43);
    \u0275\u0275text(9, "Key Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 44);
    \u0275\u0275text(11, "Key Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 45);
    \u0275\u0275text(13, "PDS Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "PDS Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 47);
    \u0275\u0275text(17, "Display");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 48);
    \u0275\u0275text(19, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 49);
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_For_24_Template, 37, 12, "tr", 50, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(25, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Conditional_25_Template, 17, 5, "div", 51);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.editedMapping().PAIRS);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.selectedCtValue()) ? 25 : -1, tmp_4_0);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p");
    \u0275\u0275text(2, "No mapping pairs defined for this field.");
    \u0275\u0275elementEnd()();
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_1_Template, 5, 2, "div", 33);
    \u0275\u0275conditionalCreate(2, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_2_Template, 26, 1)(3, MappingEditorDrawer_Conditional_2_Conditional_19_Conditional_3_Template, 3, 0, "div", 34);
    \u0275\u0275elementStart(4, "div", 35)(5, "button", 36);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPair());
    });
    \u0275\u0275text(6, " + Add Pair ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editedMapping().MHA_PDS_CODE_SET && ctx_r1.ctValuesForMapping().length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editedMapping().PAIRS && ctx_r1.editedMapping().PAIRS.length > 0 ? 2 : 3);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "input", 81);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_For_2_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_328_r15 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateTableField(\u0275$index_328_r15, "TABLE", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 82);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_For_2_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_328_r15 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateTableField(\u0275$index_328_r15, "FIELD_NAME", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 83);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_For_2_Template_input_ngModelChange_3_listener($event) {
      const \u0275$index_328_r15 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateTableField(\u0275$index_328_r15, "PRIORITY", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 84);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_For_2_Template_button_click_4_listener() {
      const \u0275$index_328_r15 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeTable(\u0275$index_328_r15));
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", table_r16.TABLE);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", table_r16.FIELD_NAME);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", table_r16.PRIORITY);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275repeaterCreate(1, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_For_2_Template, 6, 3, "div", 80, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.editedMapping().TABLES);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1, "No source tables defined");
    \u0275\u0275elementEnd();
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "input", 85);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_11_For_2_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_355_r18 = \u0275\u0275restoreView(_r17).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateDtaField(\u0275$index_355_r18, "DTA", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 83);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_11_For_2_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_355_r18 = \u0275\u0275restoreView(_r17).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateDtaField(\u0275$index_355_r18, "PRIORITY", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 84);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_11_For_2_Template_button_click_3_listener() {
      const \u0275$index_355_r18 = \u0275\u0275restoreView(_r17).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeDta(\u0275$index_355_r18));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dta_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", dta_r19.DTA);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", dta_r19.PRIORITY);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275repeaterCreate(1, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_11_For_2_Template, 5, 2, "div", 80, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.editedMapping().DTAS);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1, "No DTAs defined");
    \u0275\u0275elementEnd();
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "input", 86);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_18_For_2_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_380_r21 = \u0275\u0275restoreView(_r20).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCodeSetField(\u0275$index_380_r21, "CODE_SET", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 83);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_18_For_2_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_380_r21 = \u0275\u0275restoreView(_r20).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCodeSetField(\u0275$index_380_r21, "PRIORITY", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 84);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_18_For_2_Template_button_click_3_listener() {
      const \u0275$index_380_r21 = \u0275\u0275restoreView(_r20).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeCodeSet(\u0275$index_380_r21));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cs_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", cs_r22.CODE_SET);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", cs_r22.PRIORITY);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275repeaterCreate(1, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_18_For_2_Template, 5, 2, "div", 80, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.editedMapping().CODE_SETS);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1, "No code sets defined");
    \u0275\u0275elementEnd();
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 76)(2, "h4");
    \u0275\u0275text(3, "Source Tables");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_4_Template, 3, 0, "div", 77)(5, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_5_Template, 2, 0, "p", 78);
    \u0275\u0275elementStart(6, "button", 79);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTable());
    });
    \u0275\u0275text(7, "+ Add Table");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 76)(9, "h4");
    \u0275\u0275text(10, "Discrete Task Assays (DTAs)");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_11_Template, 3, 0, "div", 77)(12, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_12_Template, 2, 0, "p", 78);
    \u0275\u0275elementStart(13, "button", 79);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_20_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addDta());
    });
    \u0275\u0275text(14, "+ Add DTA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 76)(16, "h4");
    \u0275\u0275text(17, "Code Sets");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_18_Template, 3, 0, "div", 77)(19, MappingEditorDrawer_Conditional_2_Conditional_20_Conditional_19_Template, 2, 0, "p", 78);
    \u0275\u0275elementStart(20, "button", 79);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Conditional_20_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCodeSet());
    });
    \u0275\u0275text(21, "+ Add Code Set");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.editedMapping().TABLES && ctx_r1.editedMapping().TABLES.length > 0 ? 4 : 5);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.editedMapping().DTAS && ctx_r1.editedMapping().DTAS.length > 0 ? 11 : 12);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.editedMapping().CODE_SETS && ctx_r1.editedMapping().CODE_SETS.length > 0 ? 18 : 19);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 87)(2, "h4");
    \u0275\u0275text(3, "Observation Code (LOINC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 88);
    \u0275\u0275text(5, ' For SDOH fields sent as FHIR Observation resources. Identifies "what" is being observed. ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "label");
    \u0275\u0275text(8, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 89);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateObservationCode("CODE", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16)(11, "label");
    \u0275\u0275text(12, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 90);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateObservationCode("LABEL", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16)(15, "label");
    \u0275\u0275text(16, "Code System");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 91);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateObservationCode("CODE_SYSTEM", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 87)(19, "h4");
    \u0275\u0275text(20, "Identifier System");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 88);
    \u0275\u0275text(22, " For identifier fields (e.g., DE02.003 Health Card Number). Specifies the FHIR NamingSystem URL for the identifier type. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 16)(24, "label");
    \u0275\u0275text(25, "System URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 92);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateIdentifierSystem("SYSTEM_URL", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 18);
    \u0275\u0275text(28, "FHIR NamingSystem URL for this identifier type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 16)(30, "label");
    \u0275\u0275text(31, "Organization Code (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 93);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateIdentifierSystem("ORGANIZATION_CODE", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 18);
    \u0275\u0275text(34, "Optional organization-specific identifier code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 87)(36, "h4");
    \u0275\u0275text(37, "Value Metadata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 88);
    \u0275\u0275text(39, " FHIR code system and value set URL for the coded value (valueCodeableConcept). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 16)(41, "label");
    \u0275\u0275text(42, "Code System");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 94);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateValueMetadata("CODE_SYSTEM", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 16)(45, "label");
    \u0275\u0275text(46, "Value Set URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 95);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateValueMetadata("VALUE_SET_URL", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 16)(49, "label");
    \u0275\u0275text(50, "Code Value Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 96);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateValueMetadata("CODE_VALUE_SOURCE", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 16)(53, "label");
    \u0275\u0275text(54, "Extension URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 97);
    \u0275\u0275listener("ngModelChange", function MappingEditorDrawer_Conditional_2_Conditional_21_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateValueMetadata("EXTENSION_URL", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 18);
    \u0275\u0275text(57, "FHIR StructureDefinition URL for extensions (required for coded extension values)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ((tmp_2_0 = ctx_r1.editedMapping().OBSERVATION_CODE) == null ? null : tmp_2_0.CODE) || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_3_0 = ctx_r1.editedMapping().OBSERVATION_CODE) == null ? null : tmp_3_0.LABEL) || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_4_0 = ctx_r1.editedMapping().OBSERVATION_CODE) == null ? null : tmp_4_0.CODE_SYSTEM) || "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ((tmp_5_0 = ctx_r1.editedMapping().IDENTIFIER_SYSTEM) == null ? null : tmp_5_0.SYSTEM_URL) || "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ((tmp_6_0 = ctx_r1.editedMapping().IDENTIFIER_SYSTEM) == null ? null : tmp_6_0.ORGANIZATION_CODE) || "");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngModel", ((tmp_7_0 = ctx_r1.editedMapping().VALUE_METADATA) == null ? null : tmp_7_0.CODE_SYSTEM) || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_8_0 = ctx_r1.editedMapping().VALUE_METADATA) == null ? null : tmp_8_0.VALUE_SET_URL) || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_9_0 = ctx_r1.editedMapping().VALUE_METADATA) == null ? null : tmp_9_0.CODE_VALUE_SOURCE) || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_10_0 = ctx_r1.editedMapping().VALUE_METADATA) == null ? null : tmp_10_0.EXTENSION_URL) || "");
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r24.message);
  }
}
function MappingEditorDrawer_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, MappingEditorDrawer_Conditional_2_Conditional_23_For_2_Template, 2, 1, "div", 98, _forTrack13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.validationErrors());
  }
}
function MappingEditorDrawer_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("overview"));
    });
    \u0275\u0275text(10, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("pairs"));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 8);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("sources"));
    });
    \u0275\u0275text(14, " Sources ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("fhir"));
    });
    \u0275\u0275text(16, " FHIR Metadata ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275conditionalCreate(18, MappingEditorDrawer_Conditional_2_Conditional_18_Template, 56, 8, "div", 10);
    \u0275\u0275conditionalCreate(19, MappingEditorDrawer_Conditional_2_Conditional_19_Template, 7, 2, "div", 10);
    \u0275\u0275conditionalCreate(20, MappingEditorDrawer_Conditional_2_Conditional_20_Template, 22, 3, "div", 10);
    \u0275\u0275conditionalCreate(21, MappingEditorDrawer_Conditional_2_Conditional_21_Template, 58, 9, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 11);
    \u0275\u0275conditionalCreate(23, MappingEditorDrawer_Conditional_2_Conditional_23_Template, 3, 0, "div", 12);
    \u0275\u0275elementStart(24, "div", 13)(25, "button", 14);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 15);
    \u0275\u0275listener("click", function MappingEditorDrawer_Conditional_2_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275text(28, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editedMapping().MHA_PDS_FIELD_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editedMapping().NOTES || "No description");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "pairs");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pairs (", ctx_r1.editedMapping().PAIRS.length || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "sources");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === "fhir");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.activeTab() === "overview" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "pairs" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "sources" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeTab() === "fhir" ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.validationErrors().length > 0 ? 23 : -1);
  }
}
var MappingEditorDrawer = class _MappingEditorDrawer {
  // Signal inputs
  mapping = input(null, ...ngDevMode ? [{ debugName: "mapping" }] : []);
  isOpen = input(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  codeTableMappings = input([], ...ngDevMode ? [{ debugName: "codeTableMappings" }] : []);
  // Outputs
  save = output();
  cancel = output();
  activeTab = signal("overview", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  editedMapping = signal(null, ...ngDevMode ? [{ debugName: "editedMapping" }] : []);
  validationErrors = signal([], ...ngDevMode ? [{ debugName: "validationErrors" }] : []);
  selectedPairIndex = signal(null, ...ngDevMode ? [{ debugName: "selectedPairIndex" }] : []);
  // Computed: Get CT values for the current mapping's code table
  ctValuesForMapping = computed(() => {
    const mapping = this.editedMapping();
    if (!mapping?.MHA_PDS_CODE_SET)
      return [];
    return this.codeTableMappings().filter((ct) => ct.CODE_TABLE_ID === mapping.MHA_PDS_CODE_SET);
  }, ...ngDevMode ? [{ debugName: "ctValuesForMapping" }] : []);
  // Computed: Get the selected CT value details for display
  selectedCtValue = computed(() => {
    const pairIndex = this.selectedPairIndex();
    const mapping = this.editedMapping();
    if (pairIndex === null || !mapping?.PAIRS[pairIndex])
      return null;
    const pdsValue = mapping.PAIRS[pairIndex].PDS_VALUE;
    if (!pdsValue)
      return null;
    return this.ctValuesForMapping().find((ct) => ct.CODE === pdsValue) || null;
  }, ...ngDevMode ? [{ debugName: "selectedCtValue" }] : []);
  constructor() {
    effect(() => {
      const mapping = this.mapping();
      if (mapping) {
        this.editedMapping.set(this.deepCopy(mapping));
        this.validationErrors.set([]);
        this.activeTab.set("overview");
      } else {
        this.editedMapping.set(null);
      }
    }, { allowSignalWrites: true });
  }
  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  updateField(field, value) {
    const current = this.editedMapping();
    if (current) {
      this.editedMapping.set(__spreadProps(__spreadValues({}, current), { [field]: value }));
    }
  }
  // Pairs CRUD
  updatePairField(index, field, value) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedPairs = current.PAIRS.map((pair, i) => i === index ? __spreadProps(__spreadValues({}, pair), { [field]: value }) : pair);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { PAIRS: updatedPairs }));
  }
  selectPair(index) {
    this.selectedPairIndex.set(index);
  }
  onPdsValueSelect(index, code) {
    this.updatePairField(index, "PDS_VALUE", code);
    this.selectedPairIndex.set(index);
    const ctVal = this.ctValuesForMapping().find((ct) => ct.CODE === code);
    const current = this.editedMapping();
    if (ctVal && current && !current.PAIRS[index]?.DISPLAY) {
      this.updatePairField(index, "DISPLAY", ctVal.LABEL);
    }
  }
  addPair() {
    const current = this.editedMapping();
    if (!current)
      return;
    const newPair = {
      TYPE: "",
      KEY_REF: "",
      KEY_REF_TYPE: "CODE_VALUE_DISPLAY",
      PDS_VALUE: "",
      PDS_VALUE_TYPE: "MHA_PDS_CODE",
      DISPLAY: "",
      ACTIVE_IND: 1,
      PRIORITY: (current.PAIRS?.length || 0) + 1
    };
    const updatedPairs = [...current.PAIRS || [], newPair];
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { PAIRS: updatedPairs }));
  }
  removePair(index) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedPairs = current.PAIRS.filter((_, i) => i !== index);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { PAIRS: updatedPairs }));
  }
  // Tables CRUD
  updateTableField(index, field, value) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedTables = current.TABLES.map((table, i) => i === index ? __spreadProps(__spreadValues({}, table), { [field]: value }) : table);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { TABLES: updatedTables }));
  }
  addTable() {
    const current = this.editedMapping();
    if (!current)
      return;
    const newTable = {
      TABLE: "",
      FIELD_NAME: "",
      PRIORITY: (current.TABLES?.length || 0) + 1
    };
    const updatedTables = [...current.TABLES || [], newTable];
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { TABLES: updatedTables }));
  }
  removeTable(index) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedTables = current.TABLES.filter((_, i) => i !== index);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { TABLES: updatedTables }));
  }
  // DTAs CRUD
  updateDtaField(index, field, value) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedDtas = current.DTAS.map((dta, i) => i === index ? __spreadProps(__spreadValues({}, dta), { [field]: value }) : dta);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { DTAS: updatedDtas }));
  }
  addDta() {
    const current = this.editedMapping();
    if (!current)
      return;
    const newDta = {
      DTA: "",
      PRIORITY: (current.DTAS?.length || 0) + 1
    };
    const updatedDtas = [...current.DTAS || [], newDta];
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { DTAS: updatedDtas }));
  }
  removeDta(index) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedDtas = current.DTAS.filter((_, i) => i !== index);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { DTAS: updatedDtas }));
  }
  // Code Sets CRUD
  updateCodeSetField(index, field, value) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedCodeSets = current.CODE_SETS.map((cs, i) => i === index ? __spreadProps(__spreadValues({}, cs), { [field]: value }) : cs);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { CODE_SETS: updatedCodeSets }));
  }
  addCodeSet() {
    const current = this.editedMapping();
    if (!current)
      return;
    const newCodeSet = {
      CODE_SET: 0,
      PRIORITY: (current.CODE_SETS?.length || 0) + 1
    };
    const updatedCodeSets = [...current.CODE_SETS || [], newCodeSet];
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { CODE_SETS: updatedCodeSets }));
  }
  removeCodeSet(index) {
    const current = this.editedMapping();
    if (!current)
      return;
    const updatedCodeSets = current.CODE_SETS.filter((_, i) => i !== index);
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), { CODE_SETS: updatedCodeSets }));
  }
  // FHIR Metadata updates
  updateObservationCode(field, value) {
    const current = this.editedMapping();
    if (!current)
      return;
    const observationCode = current.OBSERVATION_CODE || { CODE: "", LABEL: "", CODE_SYSTEM: "" };
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), {
      OBSERVATION_CODE: __spreadProps(__spreadValues({}, observationCode), { [field]: value })
    }));
  }
  updateIdentifierSystem(field, value) {
    const current = this.editedMapping();
    if (!current)
      return;
    const identifierSystem = current.IDENTIFIER_SYSTEM || { SYSTEM_URL: "", ORGANIZATION_CODE: "" };
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), {
      IDENTIFIER_SYSTEM: __spreadProps(__spreadValues({}, identifierSystem), { [field]: value })
    }));
  }
  updateValueMetadata(field, value) {
    const current = this.editedMapping();
    if (!current)
      return;
    const valueMetadata = current.VALUE_METADATA || { CODE_SYSTEM: "", VALUE_SET_URL: "", CODE_VALUE_SOURCE: "", EXTENSION_URL: "" };
    this.editedMapping.set(__spreadProps(__spreadValues({}, current), {
      VALUE_METADATA: __spreadProps(__spreadValues({}, valueMetadata), { [field]: value })
    }));
  }
  // Validation
  validate() {
    const errors = [];
    const mapping = this.editedMapping();
    if (!mapping) {
      errors.push({ field: "mapping", message: "No mapping data" });
      return errors;
    }
    if (mapping.PAIRS && mapping.PAIRS.length > 0) {
      mapping.PAIRS.forEach((pair, index) => {
        if (!pair.KEY_REF && !pair.PDS_VALUE) {
          errors.push({
            field: `pairs[${index}]`,
            message: `Pair ${index + 1}: KEY_REF or PDS_VALUE is required`
          });
        }
      });
    }
    if (mapping.OBSERVATION_CODE) {
      const { CODE, LABEL, CODE_SYSTEM } = mapping.OBSERVATION_CODE;
      if (CODE && (!LABEL || !CODE_SYSTEM)) {
        errors.push({
          field: "observation_code",
          message: "Observation Code: If code is set, label and code_system are required"
        });
      }
    }
    return errors;
  }
  onSave() {
    const errors = this.validate();
    if (errors.length > 0) {
      this.validationErrors.set(errors);
      return;
    }
    const edited = this.editedMapping();
    if (edited) {
      this.save.emit(edited);
    }
  }
  onCancel() {
    this.cancel.emit();
  }
  static \u0275fac = function MappingEditorDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MappingEditorDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MappingEditorDrawer, selectors: [["app-mapping-editor-drawer"]], inputs: { mapping: [1, "mapping"], isOpen: [1, "isOpen"], codeTableMappings: [1, "codeTableMappings"] }, outputs: { save: "save", cancel: "cancel" }, decls: 3, vars: 4, consts: [[1, "drawer-backdrop"], [1, "drawer-panel"], [1, "drawer-backdrop", 3, "click"], [1, "drawer-header"], [1, "header-content"], [1, "header-subtitle"], ["title", "Close", 1, "close-btn", 3, "click"], [1, "drawer-tabs"], [1, "tab-btn", 3, "click"], [1, "drawer-content"], [1, "tab-panel"], [1, "drawer-footer"], [1, "validation-errors"], [1, "footer-buttons"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "form-group"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "help-text"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "mapping"], ["value", "freetext"], ["value", "date_time"], ["value", "number"], ["value", "boolean"], ["value", "SDOH"], ["type", "text", "placeholder", "e.g., CT-013, CT-017", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Short description of this field", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "CCL function name (optional)", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Detailed description of this mapping", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "form-group", "checkbox-group"], ["type", "checkbox", 3, "change", "checked"], [1, "ct-info-banner"], [1, "empty-state"], [1, "add-row-container"], [1, "add-btn", 3, "click"], [1, "ct-badge"], [1, "ct-count"], [1, "pairs-table-container"], [1, "pairs-table"], [1, "col-active"], [1, "col-type"], [1, "col-key"], [1, "col-key-type"], [1, "col-pds"], [1, "col-pds-type"], [1, "col-display"], [1, "col-priority"], [1, "col-actions"], [3, "inactive", "selected"], [1, "ct-value-details"], [3, "click"], ["type", "text", 1, "inline-input", 3, "ngModelChange", "ngModel"], [1, "inline-select", 3, "ngModelChange", "ngModel"], ["value", "ALPHA_RESPONSE_DISPLAY"], ["value", "CODE_VALUE_DISPLAY"], ["value", "CODE_VALUE"], ["value", "CONSTANT"], [1, "inline-select", 3, "ngModel"], ["type", "text", 1, "inline-input", 3, "ngModel"], ["value", "MHA_PDS_CODE"], ["value", "FREETEXT"], ["value", "SNOMED"], ["value", "LOINC"], ["type", "number", 1, "inline-input", "inline-number", 3, "ngModelChange", "ngModel"], ["title", "Remove pair", 1, "delete-btn", 3, "click"], ["value", ""], [3, "value"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "detail-item", "full-width"], [1, "detail-value", "code-system"], [1, "detail-value", "value-set"], [1, "source-section"], [1, "source-list"], [1, "no-items"], [1, "add-btn", "small", 3, "click"], [1, "source-item"], ["type", "text", "placeholder", "Table name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Field name", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Priority", 1, "form-control", "priority-input", 3, "ngModelChange", "ngModel"], ["title", "Remove", 1, "delete-btn", 3, "click"], ["type", "text", "placeholder", "DTA name", 1, "form-control", "flex-grow", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Code Set Number", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fhir-section"], [1, "section-description"], ["type", "text", "placeholder", "e.g., 76691-5", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., Gender identity", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., http://loinc.org", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., https://fhir.infoway-inforoute.ca/NamingSystem/ca-on-patient-hcn", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Organization identifier code", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., http://snomed.info/sct", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., http://ontariohealth.ca/fhir/ValueSet/...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., SNOMED CT, MHA PDS v1.2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., http://ontariohealth.ca/fhir/StructureDefinition/ca-on-ext-...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "error-item"]], template: function MappingEditorDrawer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MappingEditorDrawer_Conditional_0_Template, 1, 0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275conditionalCreate(2, MappingEditorDrawer_Conditional_2_Template, 29, 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editedMapping() ? 2 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n}\n.drawer-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -1200px;\n  width: 1200px;\n  height: 100vh;\n  background-color: white;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease-in-out;\n}\n.drawer-panel.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a365d 0%,\n      #2d4a7c 100%);\n  color: white;\n}\n.drawer-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.drawer-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.9;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  opacity: 0.8;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.drawer-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #f8f9fa;\n}\n.drawer-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #666;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s;\n}\n.drawer-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n  color: #333;\n}\n.drawer-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  color: #0078d4;\n  border-bottom-color: #0078d4;\n  background-color: white;\n}\n.drawer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.tab-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 11px;\n  color: #6c757d;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  color: #666;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 60px;\n}\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: normal;\n  cursor: pointer;\n}\n.checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.checkbox-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.pairs-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.pairs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.pairs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pairs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 6px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.pairs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.pairs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  background-color: #fafafa;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-active[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-type[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-key[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-key-type[_ngcontent-%COMP%] {\n  width: 110px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-pds[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-pds-type[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-display[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-priority[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.pairs-table[_ngcontent-%COMP%]   .col-actions[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.inline-input[_ngcontent-%COMP%], \n.inline-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 6px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  font-size: 11px;\n}\n.inline-input[_ngcontent-%COMP%]:focus, \n.inline-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n}\n.inline-number[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc3545;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee;\n}\n.add-row-container[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 4px;\n  color: #0078d4;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-btn[_ngcontent-%COMP%]:hover {\n  background-color: #d0e8ff;\n}\n.add-btn.small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 13px;\n}\n.source-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e9ecef;\n}\n.source-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.source-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.source-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.source-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.source-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.source-item[_ngcontent-%COMP%]   .priority-input[_ngcontent-%COMP%] {\n  width: 80px;\n  flex: none;\n}\n.source-item[_ngcontent-%COMP%]   .flex-grow[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.no-items[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 13px;\n  font-style: italic;\n  margin: 8px 0 12px;\n}\n.ct-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background-color: #e3f2fd;\n  border: 1px solid #90caf9;\n  border-radius: 6px;\n  margin-bottom: 16px;\n}\n.ct-info-banner[_ngcontent-%COMP%]   .ct-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  background-color: #1976d2;\n  color: white;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: monospace;\n}\n.ct-info-banner[_ngcontent-%COMP%]   .ct-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1565c0;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd !important;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover:not(.selected) {\n  background-color: #f5f5f5;\n}\n.ct-value-details[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.ct-value-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.ct-value-details[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.ct-value-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.ct-value-details[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ct-value-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.ct-value-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #333;\n}\n.ct-value-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.code-system[_ngcontent-%COMP%], \n.ct-value-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.value-set[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 6px;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n  word-break: break-all;\n}\n.ct-value-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   code.detail-value[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n  color: #d73a49;\n}\n.fhir-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.fhir-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.fhir-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.fhir-section[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 12px;\n  color: #6c757d;\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  background-color: #f8f9fa;\n}\n.validation-errors[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 10px;\n  background-color: #fee;\n  border: 1px solid #fcc;\n  border-radius: 4px;\n}\n.validation-errors[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%] {\n  color: #c00;\n  font-size: 12px;\n}\n.validation-errors[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 4px;\n}\n.footer-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n  color: #333;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  border: 1px solid #0078d4;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #106ebe;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MappingEditorDrawer, [{
    type: Component,
    args: [{ selector: "app-mapping-editor-drawer", standalone: true, imports: [CommonModule, FormsModule], template: `
    <!-- Backdrop -->
    @if (isOpen()) {
      <div class="drawer-backdrop" (click)="onCancel()"></div>
    }

    <!-- Drawer Panel -->
    <div class="drawer-panel" [class.open]="isOpen()">
      @if (editedMapping()) {
        <!-- Header -->
        <div class="drawer-header">
          <div class="header-content">
            <h3>{{ editedMapping()!.MHA_PDS_FIELD_NAME }}</h3>
            <span class="header-subtitle">{{ editedMapping()!.NOTES || 'No description' }}</span>
          </div>
          <button class="close-btn" (click)="onCancel()" title="Close">\xD7</button>
        </div>

        <!-- Tabs -->
        <div class="drawer-tabs">
          <button
            class="tab-btn"
            [class.active]="activeTab() === 'overview'"
            (click)="activeTab.set('overview')">
            Overview
          </button>
          <button
            class="tab-btn"
            [class.active]="activeTab() === 'pairs'"
            (click)="activeTab.set('pairs')">
            Pairs ({{ editedMapping()!.PAIRS.length || 0 }})
          </button>
          <button
            class="tab-btn"
            [class.active]="activeTab() === 'sources'"
            (click)="activeTab.set('sources')">
            Sources
          </button>
          <button
            class="tab-btn"
            [class.active]="activeTab() === 'fhir'"
            (click)="activeTab.set('fhir')">
            FHIR Metadata
          </button>
        </div>

        <!-- Tab Content -->
        <div class="drawer-content">
          <!-- Overview Tab -->
          @if (activeTab() === 'overview') {
            <div class="tab-panel">
              <div class="form-group">
                <label>Field Name</label>
                <input
                  type="text"
                  class="form-control"
                  [value]="editedMapping()!.MHA_PDS_FIELD_NAME"
                  disabled />
                <span class="help-text">Field name cannot be changed</span>
              </div>

              <div class="form-group">
                <label>Field Type</label>
                <select
                  class="form-control"
                  [ngModel]="editedMapping()!.MHA_PDS_FIELD_TYPE"
                  (ngModelChange)="updateField('MHA_PDS_FIELD_TYPE', $event)">
                  <option value="mapping">Mapping</option>
                  <option value="freetext">Freetext</option>
                  <option value="date_time">Date/Time</option>
                  <option value="number">Number</option>
                  <option value="boolean">Boolean</option>
                  <option value="SDOH">SDOH</option>
                </select>
              </div>

              <div class="form-group">
                <label>Code Table (CT)</label>
                <input
                  type="text"
                  class="form-control"
                  [ngModel]="editedMapping()!.MHA_PDS_CODE_SET || ''"
                  (ngModelChange)="updateField('MHA_PDS_CODE_SET', $event)"
                  placeholder="e.g., CT-013, CT-017" />
                <span class="help-text">MHA PDS code table reference for value lookups</span>
              </div>

              <div class="form-group">
                <label>Notes / Description</label>
                <input
                  type="text"
                  class="form-control"
                  [ngModel]="editedMapping()!.NOTES"
                  (ngModelChange)="updateField('NOTES', $event)"
                  placeholder="Short description of this field" />
              </div>

              <div class="form-group">
                <label>Function</label>
                <input
                  type="text"
                  class="form-control"
                  [ngModel]="editedMapping()!.FUNCTION"
                  (ngModelChange)="updateField('FUNCTION', $event)"
                  placeholder="CCL function name (optional)" />
                <span class="help-text">CCL function to call for custom data retrieval</span>
              </div>

              <div class="form-group">
                <label>Description</label>
                <textarea
                  class="form-control"
                  rows="3"
                  [ngModel]="editedMapping()!.DESCRIPTION"
                  (ngModelChange)="updateField('DESCRIPTION', $event)"
                  placeholder="Detailed description of this mapping"></textarea>
              </div>

              <div class="form-row">
                <div class="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      [checked]="editedMapping()!.ALPHA_RESONSE_IND === 1"
                      (change)="updateField('ALPHA_RESONSE_IND', $any($event.target).checked ? 1 : 0)" />
                    Alpha Response
                  </label>
                  <span class="help-text">Maps to alpha response from DTA</span>
                </div>

                <div class="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      [checked]="editedMapping()!.CONSTANT_IND === 1"
                      (change)="updateField('CONSTANT_IND', $any($event.target).checked ? 1 : 0)" />
                    Constant Value
                  </label>
                  <span class="help-text">Uses constant value from pairs</span>
                </div>
              </div>
            </div>
          }

          <!-- Pairs Tab -->
          @if (activeTab() === 'pairs') {
            <div class="tab-panel">
              <!-- CT Table Info Banner -->
              @if (editedMapping()!.MHA_PDS_CODE_SET && ctValuesForMapping().length > 0) {
                <div class="ct-info-banner">
                  <span class="ct-badge">{{ editedMapping()!.MHA_PDS_CODE_SET }}</span>
                  <span class="ct-count">{{ ctValuesForMapping().length }} values available</span>
                </div>
              }

              @if (editedMapping()!.PAIRS && editedMapping()!.PAIRS.length > 0) {
                <div class="pairs-table-container">
                  <table class="pairs-table">
                    <thead>
                      <tr>
                        <th class="col-active">Active</th>
                        <th class="col-type">Type</th>
                        <th class="col-key">Key Ref</th>
                        <th class="col-key-type">Key Type</th>
                        <th class="col-pds">PDS Value</th>
                        <th class="col-pds-type">PDS Type</th>
                        <th class="col-display">Display</th>
                        <th class="col-priority">Priority</th>
                        <th class="col-actions">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (pair of editedMapping()!.PAIRS; track $index; let i = $index) {
                        <tr
                          [class.inactive]="pair.ACTIVE_IND !== 1"
                          [class.selected]="selectedPairIndex() === i"
                          (click)="selectPair(i)">
                          <td>
                            <input
                              type="checkbox"
                              [checked]="pair.ACTIVE_IND === 1"
                              (change)="updatePairField(i, 'ACTIVE_IND', $any($event.target).checked ? 1 : 0)" />
                          </td>
                          <td>
                            <input
                              type="text"
                              class="inline-input"
                              [ngModel]="pair.TYPE"
                              (ngModelChange)="updatePairField(i, 'TYPE', $event)" />
                          </td>
                          <td>
                            <input
                              type="text"
                              class="inline-input"
                              [ngModel]="pair.KEY_REF"
                              (ngModelChange)="updatePairField(i, 'KEY_REF', $event)" />
                          </td>
                          <td>
                            <select
                              class="inline-select"
                              [ngModel]="pair.KEY_REF_TYPE"
                              (ngModelChange)="updatePairField(i, 'KEY_REF_TYPE', $event)">
                              <option value="ALPHA_RESPONSE_DISPLAY">Alpha Response</option>
                              <option value="CODE_VALUE_DISPLAY">Code Value Display</option>
                              <option value="CODE_VALUE">Code Value</option>
                              <option value="CONSTANT">Constant</option>
                            </select>
                          </td>
                          <td>
                            <!-- Use dropdown if CT values available, otherwise text input -->
                            @if (ctValuesForMapping().length > 0) {
                              <select
                                class="inline-select"
                                [ngModel]="pair.PDS_VALUE"
                                (ngModelChange)="onPdsValueSelect(i, $event)">
                                <option value="">-- Select --</option>
                                @for (ctVal of ctValuesForMapping(); track ctVal.CODE) {
                                  <option [value]="ctVal.CODE">{{ ctVal.CODE }} - {{ ctVal.LABEL }}</option>
                                }
                              </select>
                            } @else {
                              <input
                                type="text"
                                class="inline-input"
                                [ngModel]="pair.PDS_VALUE"
                                (ngModelChange)="updatePairField(i, 'PDS_VALUE', $event)" />
                            }
                          </td>
                          <td>
                            <select
                              class="inline-select"
                              [ngModel]="pair.PDS_VALUE_TYPE"
                              (ngModelChange)="updatePairField(i, 'PDS_VALUE_TYPE', $event)">
                              <option value="MHA_PDS_CODE">MHA PDS Code</option>
                              <option value="FREETEXT">Freetext</option>
                              <option value="SNOMED">SNOMED</option>
                              <option value="LOINC">LOINC</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              class="inline-input"
                              [ngModel]="pair.DISPLAY"
                              (ngModelChange)="updatePairField(i, 'DISPLAY', $event)" />
                          </td>
                          <td>
                            <input
                              type="number"
                              class="inline-input inline-number"
                              [ngModel]="pair.PRIORITY"
                              (ngModelChange)="updatePairField(i, 'PRIORITY', $event)" />
                          </td>
                          <td>
                            <button
                              class="delete-btn"
                              (click)="removePair(i); $event.stopPropagation()"
                              title="Remove pair">\xD7</button>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>

                <!-- CT Value Details Panel -->
                @if (selectedCtValue(); as ctVal) {
                  <div class="ct-value-details">
                    <h5>Selected Value Details</h5>
                    <div class="detail-grid">
                      <div class="detail-item">
                        <span class="detail-label">Code:</span>
                        <code class="detail-value">{{ ctVal.CODE }}</code>
                      </div>
                      <div class="detail-item">
                        <span class="detail-label">Label:</span>
                        <span class="detail-value">{{ ctVal.LABEL }}</span>
                      </div>
                      @if (ctVal.CODE_SYSTEM) {
                        <div class="detail-item full-width">
                          <span class="detail-label">Code System:</span>
                          <code class="detail-value code-system">{{ ctVal.CODE_SYSTEM }}</code>
                        </div>
                      }
                      @if (ctVal.VALUE_SET_URL) {
                        <div class="detail-item full-width">
                          <span class="detail-label">Value Set URL:</span>
                          <code class="detail-value value-set">{{ ctVal.VALUE_SET_URL }}</code>
                        </div>
                      }
                      @if (ctVal.DESCRIPTION) {
                        <div class="detail-item full-width">
                          <span class="detail-label">Description:</span>
                          <span class="detail-value">{{ ctVal.DESCRIPTION }}</span>
                        </div>
                      }
                    </div>
                  </div>
                }
              } @else {
                <div class="empty-state">
                  <p>No mapping pairs defined for this field.</p>
                </div>
              }

              <div class="add-row-container">
                <button class="add-btn" (click)="addPair()">
                  + Add Pair
                </button>
              </div>
            </div>
          }

          <!-- Sources Tab -->
          @if (activeTab() === 'sources') {
            <div class="tab-panel">
              <!-- Tables Section -->
              <div class="source-section">
                <h4>Source Tables</h4>
                @if (editedMapping()!.TABLES && editedMapping()!.TABLES.length > 0) {
                  <div class="source-list">
                    @for (table of editedMapping()!.TABLES; track $index; let i = $index) {
                      <div class="source-item">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Table name"
                          [ngModel]="table.TABLE"
                          (ngModelChange)="updateTableField(i, 'TABLE', $event)" />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Field name"
                          [ngModel]="table.FIELD_NAME"
                          (ngModelChange)="updateTableField(i, 'FIELD_NAME', $event)" />
                        <input
                          type="number"
                          class="form-control priority-input"
                          placeholder="Priority"
                          [ngModel]="table.PRIORITY"
                          (ngModelChange)="updateTableField(i, 'PRIORITY', $event)" />
                        <button class="delete-btn" (click)="removeTable(i)" title="Remove">\xD7</button>
                      </div>
                    }
                  </div>
                } @else {
                  <p class="no-items">No source tables defined</p>
                }
                <button class="add-btn small" (click)="addTable()">+ Add Table</button>
              </div>

              <!-- DTAs Section -->
              <div class="source-section">
                <h4>Discrete Task Assays (DTAs)</h4>
                @if (editedMapping()!.DTAS && editedMapping()!.DTAS.length > 0) {
                  <div class="source-list">
                    @for (dta of editedMapping()!.DTAS; track $index; let i = $index) {
                      <div class="source-item">
                        <input
                          type="text"
                          class="form-control flex-grow"
                          placeholder="DTA name"
                          [ngModel]="dta.DTA"
                          (ngModelChange)="updateDtaField(i, 'DTA', $event)" />
                        <input
                          type="number"
                          class="form-control priority-input"
                          placeholder="Priority"
                          [ngModel]="dta.PRIORITY"
                          (ngModelChange)="updateDtaField(i, 'PRIORITY', $event)" />
                        <button class="delete-btn" (click)="removeDta(i)" title="Remove">\xD7</button>
                      </div>
                    }
                  </div>
                } @else {
                  <p class="no-items">No DTAs defined</p>
                }
                <button class="add-btn small" (click)="addDta()">+ Add DTA</button>
              </div>

              <!-- Code Sets Section -->
              <div class="source-section">
                <h4>Code Sets</h4>
                @if (editedMapping()!.CODE_SETS && editedMapping()!.CODE_SETS.length > 0) {
                  <div class="source-list">
                    @for (cs of editedMapping()!.CODE_SETS; track $index; let i = $index) {
                      <div class="source-item">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Code Set Number"
                          [ngModel]="cs.CODE_SET"
                          (ngModelChange)="updateCodeSetField(i, 'CODE_SET', $event)" />
                        <input
                          type="number"
                          class="form-control priority-input"
                          placeholder="Priority"
                          [ngModel]="cs.PRIORITY"
                          (ngModelChange)="updateCodeSetField(i, 'PRIORITY', $event)" />
                        <button class="delete-btn" (click)="removeCodeSet(i)" title="Remove">\xD7</button>
                      </div>
                    }
                  </div>
                } @else {
                  <p class="no-items">No code sets defined</p>
                }
                <button class="add-btn small" (click)="addCodeSet()">+ Add Code Set</button>
              </div>
            </div>
          }

          <!-- FHIR Metadata Tab -->
          @if (activeTab() === 'fhir') {
            <div class="tab-panel">
              <!-- Observation Code Section -->
              <div class="fhir-section">
                <h4>Observation Code (LOINC)</h4>
                <p class="section-description">
                  For SDOH fields sent as FHIR Observation resources. Identifies "what" is being observed.
                </p>

                <div class="form-group">
                  <label>Code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., 76691-5"
                    [ngModel]="editedMapping()!.OBSERVATION_CODE?.CODE || ''"
                    (ngModelChange)="updateObservationCode('CODE', $event)" />
                </div>

                <div class="form-group">
                  <label>Label</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., Gender identity"
                    [ngModel]="editedMapping()!.OBSERVATION_CODE?.LABEL || ''"
                    (ngModelChange)="updateObservationCode('LABEL', $event)" />
                </div>

                <div class="form-group">
                  <label>Code System</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., http://loinc.org"
                    [ngModel]="editedMapping()!.OBSERVATION_CODE?.CODE_SYSTEM || ''"
                    (ngModelChange)="updateObservationCode('CODE_SYSTEM', $event)" />
                </div>
              </div>

              <!-- Identifier System Section -->
              <div class="fhir-section">
                <h4>Identifier System</h4>
                <p class="section-description">
                  For identifier fields (e.g., DE02.003 Health Card Number). Specifies the FHIR NamingSystem URL for the identifier type.
                </p>

                <div class="form-group">
                  <label>System URL</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., https://fhir.infoway-inforoute.ca/NamingSystem/ca-on-patient-hcn"
                    [ngModel]="editedMapping()!.IDENTIFIER_SYSTEM?.SYSTEM_URL || ''"
                    (ngModelChange)="updateIdentifierSystem('SYSTEM_URL', $event)" />
                  <span class="help-text">FHIR NamingSystem URL for this identifier type</span>
                </div>

                <div class="form-group">
                  <label>Organization Code (Optional)</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Organization identifier code"
                    [ngModel]="editedMapping()!.IDENTIFIER_SYSTEM?.ORGANIZATION_CODE || ''"
                    (ngModelChange)="updateIdentifierSystem('ORGANIZATION_CODE', $event)" />
                  <span class="help-text">Optional organization-specific identifier code</span>
                </div>
              </div>

              <!-- Value Metadata Section -->
              <div class="fhir-section">
                <h4>Value Metadata</h4>
                <p class="section-description">
                  FHIR code system and value set URL for the coded value (valueCodeableConcept).
                </p>

                <div class="form-group">
                  <label>Code System</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., http://snomed.info/sct"
                    [ngModel]="editedMapping()!.VALUE_METADATA?.CODE_SYSTEM || ''"
                    (ngModelChange)="updateValueMetadata('CODE_SYSTEM', $event)" />
                </div>

                <div class="form-group">
                  <label>Value Set URL</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., http://ontariohealth.ca/fhir/ValueSet/..."
                    [ngModel]="editedMapping()!.VALUE_METADATA?.VALUE_SET_URL || ''"
                    (ngModelChange)="updateValueMetadata('VALUE_SET_URL', $event)" />
                </div>

                <div class="form-group">
                  <label>Code Value Source</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., SNOMED CT, MHA PDS v1.2"
                    [ngModel]="editedMapping()!.VALUE_METADATA?.CODE_VALUE_SOURCE || ''"
                    (ngModelChange)="updateValueMetadata('CODE_VALUE_SOURCE', $event)" />
                </div>

                <div class="form-group">
                  <label>Extension URL</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="e.g., http://ontariohealth.ca/fhir/StructureDefinition/ca-on-ext-..."
                    [ngModel]="editedMapping()!.VALUE_METADATA?.EXTENSION_URL || ''"
                    (ngModelChange)="updateValueMetadata('EXTENSION_URL', $event)" />
                  <span class="help-text">FHIR StructureDefinition URL for extensions (required for coded extension values)</span>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Footer -->
        <div class="drawer-footer">
          @if (validationErrors().length > 0) {
            <div class="validation-errors">
              @for (error of validationErrors(); track error.field) {
                <div class="error-item">{{ error.message }}</div>
              }
            </div>
          }
          <div class="footer-buttons">
            <button class="btn btn-secondary" (click)="onCancel()">Cancel</button>
            <button class="btn btn-primary" (click)="onSave()">Save Changes</button>
          </div>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;76328d7f2ebb3fc8a5ce2858d588d81e272a01e88a540bb711a18433a0d666b7;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/mapping-editor-drawer.ts */\n.drawer-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n}\n.drawer-panel {\n  position: fixed;\n  top: 0;\n  right: -1200px;\n  width: 1200px;\n  height: 100vh;\n  background-color: white;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.3s ease-in-out;\n}\n.drawer-panel.open {\n  right: 0;\n}\n.drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a365d 0%,\n      #2d4a7c 100%);\n  color: white;\n}\n.drawer-header .header-content h3 {\n  margin: 0 0 4px 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.drawer-header .header-content .header-subtitle {\n  font-size: 13px;\n  opacity: 0.9;\n}\n.drawer-header .close-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  opacity: 0.8;\n}\n.drawer-header .close-btn:hover {\n  opacity: 1;\n}\n.drawer-tabs {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #f8f9fa;\n}\n.drawer-tabs .tab-btn {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #666;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s;\n}\n.drawer-tabs .tab-btn:hover {\n  background-color: #e9ecef;\n  color: #333;\n}\n.drawer-tabs .tab-btn.active {\n  color: #0078d4;\n  border-bottom-color: #0078d4;\n  background-color: white;\n}\n.drawer-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.tab-panel {\n  animation: fadeIn 0.2s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.form-group .help-text {\n  display: block;\n  margin-top: 4px;\n  font-size: 11px;\n  color: #6c757d;\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.form-control:disabled {\n  background-color: #f5f5f5;\n  color: #666;\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 60px;\n}\nselect.form-control {\n  cursor: pointer;\n}\n.form-row {\n  display: flex;\n  gap: 24px;\n}\n.checkbox-group label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: normal;\n  cursor: pointer;\n}\n.checkbox-group label input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.checkbox-group .help-text {\n  margin-left: 24px;\n}\n.pairs-table-container {\n  overflow-x: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.pairs-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.pairs-table th,\n.pairs-table td {\n  padding: 8px 6px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.pairs-table thead {\n  background-color: #f8f9fa;\n}\n.pairs-table thead th {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n}\n.pairs-table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.pairs-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.pairs-table tbody tr.inactive {\n  opacity: 0.6;\n  background-color: #fafafa;\n}\n.pairs-table .col-active {\n  width: 50px;\n}\n.pairs-table .col-type {\n  width: 120px;\n}\n.pairs-table .col-key {\n  min-width: 120px;\n}\n.pairs-table .col-key-type {\n  width: 110px;\n}\n.pairs-table .col-pds {\n  min-width: 100px;\n}\n.pairs-table .col-pds-type {\n  width: 100px;\n}\n.pairs-table .col-display {\n  min-width: 100px;\n}\n.pairs-table .col-priority {\n  width: 60px;\n}\n.pairs-table .col-actions {\n  width: 40px;\n}\n.inline-input,\n.inline-select {\n  width: 100%;\n  padding: 4px 6px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  font-size: 11px;\n}\n.inline-input:focus,\n.inline-select:focus {\n  outline: none;\n  border-color: #0078d4;\n}\n.inline-number {\n  width: 50px;\n}\n.delete-btn {\n  background: none;\n  border: none;\n  color: #dc3545;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.delete-btn:hover {\n  background-color: #fee;\n}\n.add-row-container {\n  margin-top: 12px;\n}\n.add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 4px;\n  color: #0078d4;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-btn:hover {\n  background-color: #d0e8ff;\n}\n.add-btn.small {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.empty-state {\n  padding: 24px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\n.empty-state p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 13px;\n}\n.source-section {\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e9ecef;\n}\n.source-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.source-section h4 {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.source-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.source-item {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.source-item .form-control {\n  flex: 1;\n}\n.source-item .priority-input {\n  width: 80px;\n  flex: none;\n}\n.source-item .flex-grow {\n  flex: 2;\n}\n.no-items {\n  color: #6c757d;\n  font-size: 13px;\n  font-style: italic;\n  margin: 8px 0 12px;\n}\n.ct-info-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background-color: #e3f2fd;\n  border: 1px solid #90caf9;\n  border-radius: 6px;\n  margin-bottom: 16px;\n}\n.ct-info-banner .ct-badge {\n  display: inline-block;\n  padding: 4px 10px;\n  background-color: #1976d2;\n  color: white;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: monospace;\n}\n.ct-info-banner .ct-count {\n  font-size: 13px;\n  color: #1565c0;\n}\n.pairs-table tbody tr {\n  cursor: pointer;\n}\n.pairs-table tbody tr.selected {\n  background-color: #e3f2fd !important;\n}\n.pairs-table tbody tr:hover:not(.selected) {\n  background-color: #f5f5f5;\n}\n.ct-value-details {\n  margin-top: 16px;\n  padding: 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.ct-value-details h5 {\n  margin: 0 0 12px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #333;\n}\n.ct-value-details .detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.ct-value-details .detail-item {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.ct-value-details .detail-item.full-width {\n  grid-column: 1/-1;\n}\n.ct-value-details .detail-item .detail-label {\n  font-size: 11px;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.ct-value-details .detail-item .detail-value {\n  font-size: 12px;\n  color: #333;\n}\n.ct-value-details .detail-item .detail-value.code-system,\n.ct-value-details .detail-item .detail-value.value-set {\n  font-size: 11px;\n  padding: 2px 6px;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n  word-break: break-all;\n}\n.ct-value-details .detail-item code.detail-value {\n  padding: 2px 6px;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 3px;\n  color: #d73a49;\n}\n.fhir-section {\n  margin-bottom: 28px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.fhir-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.fhir-section h4 {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.fhir-section .section-description {\n  margin: 0 0 16px 0;\n  font-size: 12px;\n  color: #6c757d;\n}\n.drawer-footer {\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  background-color: #f8f9fa;\n}\n.validation-errors {\n  margin-bottom: 12px;\n  padding: 10px;\n  background-color: #fee;\n  border: 1px solid #fcc;\n  border-radius: 4px;\n}\n.validation-errors .error-item {\n  color: #c00;\n  font-size: 12px;\n}\n.validation-errors .error-item:not(:last-child) {\n  margin-bottom: 4px;\n}\n.footer-buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-secondary {\n  background-color: white;\n  border: 1px solid #ccc;\n  color: #333;\n}\n.btn.btn-secondary:hover {\n  background-color: #f0f0f0;\n}\n.btn.btn-primary {\n  background-color: #0078d4;\n  border: 1px solid #0078d4;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background-color: #106ebe;\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MappingEditorDrawer, { className: "MappingEditorDrawer", filePath: "src/app/config-editor/sections/mapping-editor-drawer.ts", lineNumber: 1147 });
})();

// src/app/config-editor/sections/config-section-mappings.ts
var _forTrack05 = ($index, $item) => $item.key;
var _forTrack14 = ($index, $item) => $item.MHA_PDS_FIELD_NAME;
var _forTrack2 = ($index, $item) => $item.TABLE + $item.FIELD_NAME;
var _forTrack3 = ($index, $item) => $item.DTA;
function ConfigSectionMappings_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const de_r1 = ctx.$implicit;
    \u0275\u0275property("value", de_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", de_r1.key, ": ", de_r1.label);
  }
}
function ConfigSectionMappings_For_34_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "\u25CF");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappings_For_34_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u25CB");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappings_For_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mapping_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mapping_r3.NOTES);
  }
}
function ConfigSectionMappings_For_34_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "span", 30);
    \u0275\u0275text(2, "Code Table:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mapping_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(mapping_r3.MHA_PDS_CODE_SET);
  }
}
function ConfigSectionMappings_For_34_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "span", 30);
    \u0275\u0275text(2, "Function:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mapping_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(mapping_r3.FUNCTION);
  }
}
function ConfigSectionMappings_For_34_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappings_For_34_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappings_For_34_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Constant");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappings_For_34_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Alpha Response");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r5.TABLE);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r5.FIELD_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Priority: ", table_r5.PRIORITY);
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "h5");
    \u0275\u0275text(2, "Source Tables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275repeaterCreate(4, ConfigSectionMappings_For_34_Conditional_32_Conditional_1_For_5_Template, 7, 3, "div", 44, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mapping_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(mapping_r3.TABLES);
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dta_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dta_r6.DTA);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Priority: ", dta_r6.PRIORITY);
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "h5");
    \u0275\u0275text(2, "Discrete Task Assays (DTAs)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275repeaterCreate(4, ConfigSectionMappings_For_34_Conditional_32_Conditional_2_For_5_Template, 5, 2, "div", 49, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mapping_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(mapping_r3.DTAS);
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_3_For_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pair_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", pair_r9.KEY_REF_TYPE, ")");
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_3_For_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pair_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", pair_r9.PDS_VALUE_TYPE, ")");
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_3_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 55);
    \u0275\u0275listener("change", function ConfigSectionMappings_For_34_Conditional_32_Conditional_3_For_21_Template_input_change_2_listener($event) {
      const $index_r8 = \u0275\u0275restoreView(_r7).$index;
      const mapping_r3 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPairActiveChange(mapping_r3, $index_r8, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "code");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ConfigSectionMappings_For_34_Conditional_32_Conditional_3_For_21_Conditional_8_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "code");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ConfigSectionMappings_For_34_Conditional_32_Conditional_3_For_21_Conditional_12_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pair_r9 = ctx.$implicit;
    \u0275\u0275classProp("inactive", pair_r9.ACTIVE_IND !== 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", pair_r9.ACTIVE_IND === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r9.TYPE);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pair_r9.KEY_REF);
    \u0275\u0275advance();
    \u0275\u0275conditional(pair_r9.KEY_REF_TYPE ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pair_r9.PDS_VALUE);
    \u0275\u0275advance();
    \u0275\u0275conditional(pair_r9.PDS_VALUE_TYPE ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r9.DISPLAY);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r9.PRIORITY);
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "h5");
    \u0275\u0275text(2, "Mapping Pairs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "table", 53)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Key Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "PDS Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Display");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Priority");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, ConfigSectionMappings_For_34_Conditional_32_Conditional_3_For_21_Template, 17, 10, "tr", 54, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const mapping_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(20);
    \u0275\u0275repeater(mapping_r3.PAIRS);
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p");
    \u0275\u0275text(2, "No mapping pairs defined for this field.");
    \u0275\u0275elementEnd()();
  }
}
function ConfigSectionMappings_For_34_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275conditionalCreate(1, ConfigSectionMappings_For_34_Conditional_32_Conditional_1_Template, 6, 0, "div", 41);
    \u0275\u0275conditionalCreate(2, ConfigSectionMappings_For_34_Conditional_32_Conditional_2_Template, 6, 0, "div", 41);
    \u0275\u0275conditionalCreate(3, ConfigSectionMappings_For_34_Conditional_32_Conditional_3_Template, 22, 0, "div", 41)(4, ConfigSectionMappings_For_34_Conditional_32_Conditional_4_Template, 3, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mapping_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(mapping_r3.TABLES && mapping_r3.TABLES.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mapping_r3.DTAS && mapping_r3.DTAS.length > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mapping_r3.PAIRS && mapping_r3.PAIRS.length > 0 ? 3 : 4);
  }
}
function ConfigSectionMappings_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function ConfigSectionMappings_For_34_Template_div_click_1_listener() {
      const mapping_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleMapping(mapping_r3.MHA_PDS_FIELD_NAME));
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "div", 22)(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ConfigSectionMappings_For_34_Conditional_6_Template, 2, 0, "span", 24)(7, ConfigSectionMappings_For_34_Conditional_7_Template, 2, 0, "span", 25);
    \u0275\u0275elementStart(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ConfigSectionMappings_For_34_Conditional_10_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 28)(12, "span", 29)(13, "span", 30);
    \u0275\u0275text(14, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 31);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, ConfigSectionMappings_For_34_Conditional_17_Template, 5, 1, "span", 29);
    \u0275\u0275conditionalCreate(18, ConfigSectionMappings_For_34_Conditional_18_Template, 5, 1, "span", 29);
    \u0275\u0275elementStart(19, "span", 29)(20, "span", 30);
    \u0275\u0275text(21, "Pairs:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 31);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 32)(25, "button", 33);
    \u0275\u0275listener("click", function ConfigSectionMappings_For_34_Template_button_click_25_listener($event) {
      const mapping_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditor(mapping_r3, $event));
    });
    \u0275\u0275text(26, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 34);
    \u0275\u0275conditionalCreate(28, ConfigSectionMappings_For_34_Conditional_28_Template, 2, 0, "span", 35)(29, ConfigSectionMappings_For_34_Conditional_29_Template, 2, 0, "span", 36);
    \u0275\u0275conditionalCreate(30, ConfigSectionMappings_For_34_Conditional_30_Template, 2, 0, "span", 37);
    \u0275\u0275conditionalCreate(31, ConfigSectionMappings_For_34_Conditional_31_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(32, ConfigSectionMappings_For_34_Conditional_32_Template, 5, 3, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mapping_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("expanded", ctx_r3.expandedMappings()[mapping_r3.MHA_PDS_FIELD_NAME])("submission-inactive", !ctx_r3.isFieldActiveForSubmission(mapping_r3.MHA_PDS_FIELD_NAME));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.expandedMappings()[mapping_r3.MHA_PDS_FIELD_NAME] ? "-" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isFieldActiveForSubmission(mapping_r3.MHA_PDS_FIELD_NAME) ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mapping_r3.MHA_PDS_FIELD_NAME);
    \u0275\u0275advance();
    \u0275\u0275conditional(mapping_r3.NOTES ? 10 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(mapping_r3.MHA_PDS_FIELD_TYPE || "N/A");
    \u0275\u0275advance();
    \u0275\u0275conditional(mapping_r3.MHA_PDS_CODE_SET ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mapping_r3.FUNCTION ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(mapping_r3.PAIRS.length || 0);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.isFieldActiveForSubmission(mapping_r3.MHA_PDS_FIELD_NAME) ? 28 : 29);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mapping_r3.CONSTANT_IND === 1 ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mapping_r3.ALPHA_RESONSE_IND === 1 ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.expandedMappings()[mapping_r3.MHA_PDS_FIELD_NAME] ? 32 : -1);
  }
}
function ConfigSectionMappings_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2, "No mappings found matching the search criteria");
    \u0275\u0275elementEnd()();
  }
}
var ConfigSectionMappings = class _ConfigSectionMappings {
  mappings = [];
  submitFields = [];
  codeTableMappings = [];
  mappingsChange = new EventEmitter();
  // UI state
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  selectedCategory = signal("", ...ngDevMode ? [{ debugName: "selectedCategory" }] : []);
  submissionFilter = signal("", ...ngDevMode ? [{ debugName: "submissionFilter" }] : []);
  expandedMappings = signal({}, ...ngDevMode ? [{ debugName: "expandedMappings" }] : []);
  // Drawer state
  drawerOpen = signal(false, ...ngDevMode ? [{ debugName: "drawerOpen" }] : []);
  selectedMapping = signal(null, ...ngDevMode ? [{ debugName: "selectedMapping" }] : []);
  // Data element list for filtering
  dataElements = Object.entries(MHA_PDS_DATA_ELEMENTS).map(([key, label]) => ({ key, label }));
  // Map of field codes to active status for quick lookup
  activeFieldsMap = computed(() => {
    const map = {};
    for (const field of this.submitFields) {
      const normalizedCode = field.FIELD_CODE.replace("_", ".");
      map[normalizedCode] = field.ACTIVE_IND === 1;
    }
    return map;
  }, ...ngDevMode ? [{ debugName: "activeFieldsMap" }] : []);
  // Count active and inactive mappings
  activeSubmissionCount = computed(() => {
    return this.mappings.filter((m) => m.MHA_PDS_FIELD_NAME && this.activeFieldsMap()[m.MHA_PDS_FIELD_NAME]).length;
  }, ...ngDevMode ? [{ debugName: "activeSubmissionCount" }] : []);
  inactiveSubmissionCount = computed(() => {
    return this.mappings.filter((m) => m.MHA_PDS_FIELD_NAME && !this.activeFieldsMap()[m.MHA_PDS_FIELD_NAME]).length;
  }, ...ngDevMode ? [{ debugName: "inactiveSubmissionCount" }] : []);
  // Check if a field is active for submission
  isFieldActiveForSubmission(fieldName) {
    return this.activeFieldsMap()[fieldName] ?? false;
  }
  // Computed values
  filteredMappings = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();
    return this.mappings.filter((mapping) => {
      if (!mapping.MHA_PDS_FIELD_NAME)
        return false;
      if (category && !mapping.MHA_PDS_FIELD_NAME.startsWith(category)) {
        return false;
      }
      const submFilter = this.submissionFilter();
      if (submFilter === "active" && !this.activeFieldsMap()[mapping.MHA_PDS_FIELD_NAME]) {
        return false;
      }
      if (submFilter === "inactive" && this.activeFieldsMap()[mapping.MHA_PDS_FIELD_NAME]) {
        return false;
      }
      if (term) {
        return mapping.MHA_PDS_FIELD_NAME.toLowerCase().includes(term) || mapping.NOTES && mapping.NOTES.toLowerCase().includes(term) || mapping.FUNCTION && mapping.FUNCTION.toLowerCase().includes(term) || mapping.DESCRIPTION && mapping.DESCRIPTION.toLowerCase().includes(term);
      }
      return true;
    }).sort((a, b) => {
      return a.MHA_PDS_FIELD_NAME.localeCompare(b.MHA_PDS_FIELD_NAME, void 0, {
        numeric: true,
        sensitivity: "base"
      });
    });
  }, ...ngDevMode ? [{ debugName: "filteredMappings" }] : []);
  toggleMapping(fieldName) {
    this.expandedMappings.update((expanded) => __spreadProps(__spreadValues({}, expanded), {
      [fieldName]: !expanded[fieldName]
    }));
  }
  onPairActiveChange(mapping, pairIndex, event) {
    const checked = event.target.checked;
    const updatedMappings = this.mappings.map((m) => {
      if (m.MHA_PDS_FIELD_NAME === mapping.MHA_PDS_FIELD_NAME) {
        const updatedPairs = m.PAIRS.map((pair, idx) => idx === pairIndex ? __spreadProps(__spreadValues({}, pair), { ACTIVE_IND: checked ? 1 : 0 }) : pair);
        return __spreadProps(__spreadValues({}, m), { PAIRS: updatedPairs });
      }
      return m;
    });
    this.mappingsChange.emit(updatedMappings);
  }
  // Drawer methods
  openEditor(mapping, event) {
    event.stopPropagation();
    this.selectedMapping.set(mapping);
    this.drawerOpen.set(true);
  }
  onDrawerSave(updatedMapping) {
    const updatedMappings = this.mappings.map((m) => m.MHA_PDS_FIELD_NAME === updatedMapping.MHA_PDS_FIELD_NAME ? updatedMapping : m);
    this.mappingsChange.emit(updatedMappings);
    this.drawerOpen.set(false);
    this.selectedMapping.set(null);
  }
  onDrawerCancel() {
    this.drawerOpen.set(false);
    this.selectedMapping.set(null);
  }
  static \u0275fac = function ConfigSectionMappings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionMappings)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionMappings, selectors: [["app-config-section-mappings"]], inputs: { mappings: "mappings", submitFields: "submitFields", codeTableMappings: "codeTableMappings" }, outputs: { mappingsChange: "mappingsChange" }, decls: 37, vars: 11, consts: [[1, "section-content"], [1, "controls-bar"], [1, "search-box"], ["type", "text", "placeholder", "Search mappings...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-select"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "active"], ["value", "inactive"], [1, "stats"], [1, "stat-item"], [1, "stat-item", "submission-stats"], [1, "active-count"], [1, "inactive-count"], [1, "mappings-list"], [1, "mapping-item", 3, "expanded", "submission-inactive"], [1, "empty-state"], [3, "save", "cancel", "mapping", "isOpen", "codeTableMappings"], [1, "mapping-item"], [1, "mapping-header", 3, "click"], [1, "mapping-info"], [1, "mapping-title"], [1, "expand-icon"], ["title", "Active for submission", 1, "submission-indicator", "active"], ["title", "Not active for submission", 1, "submission-indicator", "inactive"], [1, "field-name"], [1, "field-notes"], [1, "mapping-meta"], [1, "meta-item"], [1, "meta-label"], [1, "meta-value"], [1, "mapping-actions"], ["title", "Edit mapping", 1, "edit-btn", 3, "click"], [1, "mapping-badges"], [1, "badge", "badge-active"], [1, "badge", "badge-inactive"], [1, "badge", "badge-constant"], [1, "badge", "badge-alpha"], [1, "mapping-details"], [1, "meta-value", "code-table"], [1, "detail-section"], [1, "no-pairs"], [1, "source-list"], [1, "source-item"], [1, "source-table"], [1, "source-field"], [1, "source-priority"], [1, "dta-list"], [1, "dta-item"], [1, "dta-name"], [1, "dta-priority"], [1, "pairs-table-container"], [1, "pairs-table"], [3, "inactive"], ["type", "checkbox", 3, "change", "checked"], [1, "ref-type"]], template: function ConfigSectionMappings_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMappings_Template_input_ngModelChange_3_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4)(5, "select", 5);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMappings_Template_select_ngModelChange_5_listener($event) {
        return ctx.selectedCategory.set($event);
      });
      \u0275\u0275elementStart(6, "option", 6);
      \u0275\u0275text(7, "All Data Elements");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(8, ConfigSectionMappings_For_9_Template, 2, 3, "option", 7, _forTrack05);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "select", 5);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMappings_Template_select_ngModelChange_11_listener($event) {
        return ctx.submissionFilter.set($event);
      });
      \u0275\u0275elementStart(12, "option", 6);
      \u0275\u0275text(13, "All Fields");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Active for Submission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Inactive (Not Submitted)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 10)(19, "span", 11);
      \u0275\u0275text(20, " Showing ");
      \u0275\u0275elementStart(21, "strong");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " of ");
      \u0275\u0275elementStart(24, "strong");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " mappings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 12)(28, "span", 13);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 14);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 15);
      \u0275\u0275repeaterCreate(33, ConfigSectionMappings_For_34_Template, 33, 16, "div", 16, _forTrack14);
      \u0275\u0275conditionalCreate(35, ConfigSectionMappings_Conditional_35_Template, 3, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "app-mapping-editor-drawer", 18);
      \u0275\u0275listener("save", function ConfigSectionMappings_Template_app_mapping_editor_drawer_save_36_listener($event) {
        return ctx.onDrawerSave($event);
      })("cancel", function ConfigSectionMappings_Template_app_mapping_editor_drawer_cancel_36_listener() {
        return ctx.onDrawerCancel();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.selectedCategory());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.dataElements);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.submissionFilter());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.filteredMappings().length);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.mappings.length);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.activeSubmissionCount(), " active");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.inactiveSubmissionCount(), " inactive");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filteredMappings());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredMappings().length === 0 ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("mapping", ctx.selectedMapping())("isOpen", ctx.drawerOpen())("codeTableMappings", ctx.codeTableMappings);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MappingEditorDrawer], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.controls-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.controls-bar[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n.controls-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.controls-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: white;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n.mappings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mapping-item[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mapping-item.expanded[_ngcontent-%COMP%]   .mapping-header[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border-bottom: 1px solid #b3d9ff;\n}\n.mapping-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.2s;\n}\n.mapping-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-title[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  font-weight: bold;\n  color: #6c757d;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-title[_ngcontent-%COMP%]   .field-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0078d4;\n  font-family: monospace;\n  font-size: 14px;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-title[_ngcontent-%COMP%]   .field-notes[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 13px;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-left: 26px;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  color: #333;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-value.code-table[_ngcontent-%COMP%] {\n  color: #0078d4;\n  font-weight: 600;\n  font-family: monospace;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  padding: 1px 4px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-size: 11px;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-badges[_ngcontent-%COMP%]   .badge-constant[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-badges[_ngcontent-%COMP%]   .badge-alpha[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-badges[_ngcontent-%COMP%]   .badge-active[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.mapping-header[_ngcontent-%COMP%]   .mapping-badges[_ngcontent-%COMP%]   .badge-inactive[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.mapping-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n}\n.mapping-actions[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background-color: #0078d4;\n  border: none;\n  border-radius: 3px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.mapping-actions[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #106ebe;\n}\n.mapping-item.submission-inactive[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.mapping-item.submission-inactive[_ngcontent-%COMP%]   .mapping-header[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.mapping-item.submission-inactive[_ngcontent-%COMP%]   .mapping-header[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.mapping-item.submission-inactive.expanded[_ngcontent-%COMP%]   .mapping-header[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border-bottom-color: #e0e0e0;\n}\n.submission-indicator[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 4px;\n}\n.submission-indicator.active[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.submission-indicator.inactive[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.submission-stats[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding-left: 12px;\n  border-left: 1px solid #dee2e6;\n}\n.submission-stats[_ngcontent-%COMP%]   .active-count[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 500;\n  margin-right: 8px;\n}\n.submission-stats[_ngcontent-%COMP%]   .inactive-count[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 500;\n}\n.mapping-details[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: white;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.detail-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  color: #333;\n  font-size: 13px;\n  font-weight: 600;\n}\n.source-list[_ngcontent-%COMP%], \n.dta-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.source-item[_ngcontent-%COMP%], \n.dta-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 6px 10px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.source-item[_ngcontent-%COMP%]   .source-table[_ngcontent-%COMP%], \n.source-item[_ngcontent-%COMP%]   .dta-name[_ngcontent-%COMP%], \n.dta-item[_ngcontent-%COMP%]   .source-table[_ngcontent-%COMP%], \n.dta-item[_ngcontent-%COMP%]   .dta-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.source-item[_ngcontent-%COMP%]   .source-field[_ngcontent-%COMP%], \n.dta-item[_ngcontent-%COMP%]   .source-field[_ngcontent-%COMP%] {\n  color: #0078d4;\n  font-family: monospace;\n}\n.source-item[_ngcontent-%COMP%]   .source-priority[_ngcontent-%COMP%], \n.source-item[_ngcontent-%COMP%]   .dta-priority[_ngcontent-%COMP%], \n.dta-item[_ngcontent-%COMP%]   .source-priority[_ngcontent-%COMP%], \n.dta-item[_ngcontent-%COMP%]   .dta-priority[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.pairs-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n}\n.pairs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.pairs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pairs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.pairs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.pairs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.pairs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background-color: #fafafa;\n}\n.pairs-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  padding: 1px 4px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 11px;\n}\n.pairs-table[_ngcontent-%COMP%]   .ref-type[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 10px;\n  margin-left: 4px;\n}\n.pairs-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.no-pairs[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.no-pairs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 14px;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionMappings, [{
    type: Component,
    args: [{ selector: "app-config-section-mappings", standalone: true, imports: [CommonModule, FormsModule, MappingEditorDrawer], template: `
    <div class="section-content">
      <!-- Controls -->
      <div class="controls-bar">
        <div class="search-box">
          <input
            type="text"
            placeholder="Search mappings..."
            class="form-control"
            [ngModel]="searchTerm()"
            (ngModelChange)="searchTerm.set($event)" />
        </div>
        <div class="filter-select">
          <select
            class="form-control"
            [ngModel]="selectedCategory()"
            (ngModelChange)="selectedCategory.set($event)">
            <option value="">All Data Elements</option>
            @for (de of dataElements; track de.key) {
              <option [value]="de.key">{{ de.key }}: {{ de.label }}</option>
            }
          </select>
        </div>
        <div class="filter-select">
          <select
            class="form-control"
            [ngModel]="submissionFilter()"
            (ngModelChange)="submissionFilter.set($event)">
            <option value="">All Fields</option>
            <option value="active">Active for Submission</option>
            <option value="inactive">Inactive (Not Submitted)</option>
          </select>
        </div>
        <div class="stats">
          <span class="stat-item">
            Showing <strong>{{ filteredMappings().length }}</strong> of <strong>{{ mappings.length }}</strong> mappings
          </span>
          <span class="stat-item submission-stats">
            <span class="active-count">{{ activeSubmissionCount() }} active</span>
            <span class="inactive-count">{{ inactiveSubmissionCount() }} inactive</span>
          </span>
        </div>
      </div>

      <!-- Mappings List -->
      <div class="mappings-list">
        @for (mapping of filteredMappings(); track mapping.MHA_PDS_FIELD_NAME) {
          <div class="mapping-item"
               [class.expanded]="expandedMappings()[mapping.MHA_PDS_FIELD_NAME]"
               [class.submission-inactive]="!isFieldActiveForSubmission(mapping.MHA_PDS_FIELD_NAME)">
            <div class="mapping-header" (click)="toggleMapping(mapping.MHA_PDS_FIELD_NAME)">
              <div class="mapping-info">
                <div class="mapping-title">
                  <span class="expand-icon">{{ expandedMappings()[mapping.MHA_PDS_FIELD_NAME] ? '-' : '+' }}</span>
                  @if (isFieldActiveForSubmission(mapping.MHA_PDS_FIELD_NAME)) {
                    <span class="submission-indicator active" title="Active for submission">\u25CF</span>
                  } @else {
                    <span class="submission-indicator inactive" title="Not active for submission">\u25CB</span>
                  }
                  <span class="field-name">{{ mapping.MHA_PDS_FIELD_NAME }}</span>
                  @if (mapping.NOTES) {
                    <span class="field-notes">{{ mapping.NOTES }}</span>
                  }
                </div>
                <div class="mapping-meta">
                  <span class="meta-item">
                    <span class="meta-label">Type:</span>
                    <span class="meta-value">{{ mapping.MHA_PDS_FIELD_TYPE || 'N/A' }}</span>
                  </span>
                  @if (mapping.MHA_PDS_CODE_SET) {
                    <span class="meta-item">
                      <span class="meta-label">Code Table:</span>
                      <span class="meta-value code-table">{{ mapping.MHA_PDS_CODE_SET }}</span>
                    </span>
                  }
                  @if (mapping.FUNCTION) {
                    <span class="meta-item">
                      <span class="meta-label">Function:</span>
                      <code class="meta-value">{{ mapping.FUNCTION }}</code>
                    </span>
                  }
                  <span class="meta-item">
                    <span class="meta-label">Pairs:</span>
                    <span class="meta-value">{{ mapping.PAIRS.length || 0 }}</span>
                  </span>
                </div>
              </div>
              <div class="mapping-actions">
                <button
                  class="edit-btn"
                  (click)="openEditor(mapping, $event)"
                  title="Edit mapping">
                  Edit
                </button>
              </div>
              <div class="mapping-badges">
                @if (isFieldActiveForSubmission(mapping.MHA_PDS_FIELD_NAME)) {
                  <span class="badge badge-active">Active</span>
                } @else {
                  <span class="badge badge-inactive">Inactive</span>
                }
                @if (mapping.CONSTANT_IND === 1) {
                  <span class="badge badge-constant">Constant</span>
                }
                @if (mapping.ALPHA_RESONSE_IND === 1) {
                  <span class="badge badge-alpha">Alpha Response</span>
                }
              </div>
            </div>

            @if (expandedMappings()[mapping.MHA_PDS_FIELD_NAME]) {
              <div class="mapping-details">
                <!-- Source Tables -->
                @if (mapping.TABLES && mapping.TABLES.length > 0) {
                  <div class="detail-section">
                    <h5>Source Tables</h5>
                    <div class="source-list">
                      @for (table of mapping.TABLES; track table.TABLE + table.FIELD_NAME) {
                        <div class="source-item">
                          <span class="source-table">{{ table.TABLE }}</span>
                          <span class="source-field">{{ table.FIELD_NAME }}</span>
                          <span class="source-priority">Priority: {{ table.PRIORITY }}</span>
                        </div>
                      }
                    </div>
                  </div>
                }

                <!-- DTAs -->
                @if (mapping.DTAS && mapping.DTAS.length > 0) {
                  <div class="detail-section">
                    <h5>Discrete Task Assays (DTAs)</h5>
                    <div class="dta-list">
                      @for (dta of mapping.DTAS; track dta.DTA) {
                        <div class="dta-item">
                          <span class="dta-name">{{ dta.DTA }}</span>
                          <span class="dta-priority">Priority: {{ dta.PRIORITY }}</span>
                        </div>
                      }
                    </div>
                  </div>
                }

                <!-- Mapping Pairs -->
                @if (mapping.PAIRS && mapping.PAIRS.length > 0) {
                  <div class="detail-section">
                    <h5>Mapping Pairs</h5>
                    <div class="pairs-table-container">
                      <table class="pairs-table">
                        <thead>
                          <tr>
                            <th>Active</th>
                            <th>Type</th>
                            <th>Key Ref</th>
                            <th>PDS Value</th>
                            <th>Display</th>
                            <th>Priority</th>
                          </tr>
                        </thead>
                        <tbody>
                          @for (pair of mapping.PAIRS; track $index) {
                            <tr [class.inactive]="pair.ACTIVE_IND !== 1">
                              <td>
                                <input
                                  type="checkbox"
                                  [checked]="pair.ACTIVE_IND === 1"
                                  (change)="onPairActiveChange(mapping, $index, $event)" />
                              </td>
                              <td>{{ pair.TYPE }}</td>
                              <td>
                                <code>{{ pair.KEY_REF }}</code>
                                @if (pair.KEY_REF_TYPE) {
                                  <span class="ref-type">({{ pair.KEY_REF_TYPE }})</span>
                                }
                              </td>
                              <td>
                                <code>{{ pair.PDS_VALUE }}</code>
                                @if (pair.PDS_VALUE_TYPE) {
                                  <span class="ref-type">({{ pair.PDS_VALUE_TYPE }})</span>
                                }
                              </td>
                              <td>{{ pair.DISPLAY }}</td>
                              <td>{{ pair.PRIORITY }}</td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                } @else {
                  <div class="no-pairs">
                    <p>No mapping pairs defined for this field.</p>
                  </div>
                }
              </div>
            }
          </div>
        }

        @if (filteredMappings().length === 0) {
          <div class="empty-state">
            <p>No mappings found matching the search criteria</p>
          </div>
        }
      </div>

      <!-- Mapping Editor Drawer -->
      <app-mapping-editor-drawer
        [mapping]="selectedMapping()"
        [isOpen]="drawerOpen()"
        [codeTableMappings]="codeTableMappings"
        (save)="onDrawerSave($event)"
        (cancel)="onDrawerCancel()">
      </app-mapping-editor-drawer>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;6d30c0b8b564ff054117d24904562357ec90f1b199ffafe5445320500ea719e4;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-mappings.ts */\n.section-content {\n  max-width: 1200px;\n}\n.controls-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar .search-box {\n  flex: 1;\n  min-width: 200px;\n}\n.controls-bar .filter-select {\n  min-width: 220px;\n}\n.controls-bar .form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.controls-bar .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar select.form-control {\n  cursor: pointer;\n  background-color: white;\n}\n.controls-bar .stats .stat-item {\n  font-size: 13px;\n  color: #555;\n}\n.mappings-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mapping-item {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mapping-item.expanded .mapping-header {\n  background-color: #e7f3ff;\n  border-bottom: 1px solid #b3d9ff;\n}\n.mapping-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background-color 0.2s;\n}\n.mapping-header:hover {\n  background-color: #e9ecef;\n}\n.mapping-header .mapping-info {\n  flex: 1;\n  min-width: 0;\n}\n.mapping-header .mapping-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.mapping-header .mapping-title .expand-icon {\n  width: 16px;\n  font-weight: bold;\n  color: #6c757d;\n}\n.mapping-header .mapping-title .field-name {\n  font-weight: 600;\n  color: #0078d4;\n  font-family: monospace;\n  font-size: 14px;\n}\n.mapping-header .mapping-title .field-notes {\n  color: #555;\n  font-size: 13px;\n}\n.mapping-header .mapping-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-left: 26px;\n}\n.mapping-header .mapping-meta .meta-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n}\n.mapping-header .mapping-meta .meta-item .meta-label {\n  color: #6c757d;\n}\n.mapping-header .mapping-meta .meta-item .meta-value {\n  color: #333;\n}\n.mapping-header .mapping-meta .meta-item .meta-value.code-table {\n  color: #0078d4;\n  font-weight: 600;\n  font-family: monospace;\n}\n.mapping-header .mapping-meta .meta-item code {\n  padding: 1px 4px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-size: 11px;\n}\n.mapping-header .mapping-badges {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.mapping-header .mapping-badges .badge {\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.mapping-header .mapping-badges .badge-constant {\n  background-color: #d4edda;\n  color: #155724;\n}\n.mapping-header .mapping-badges .badge-alpha {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.mapping-header .mapping-badges .badge-active {\n  background-color: #d4edda;\n  color: #155724;\n}\n.mapping-header .mapping-badges .badge-inactive {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.mapping-actions {\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n}\n.mapping-actions .edit-btn {\n  padding: 4px 12px;\n  background-color: #0078d4;\n  border: none;\n  border-radius: 3px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.mapping-actions .edit-btn:hover {\n  background-color: #106ebe;\n}\n.mapping-item.submission-inactive {\n  opacity: 0.7;\n}\n.mapping-item.submission-inactive .mapping-header {\n  background-color: #fafafa;\n}\n.mapping-item.submission-inactive .mapping-header:hover {\n  background-color: #f0f0f0;\n}\n.mapping-item.submission-inactive.expanded .mapping-header {\n  background-color: #f5f5f5;\n  border-bottom-color: #e0e0e0;\n}\n.submission-indicator {\n  font-size: 10px;\n  margin-right: 4px;\n}\n.submission-indicator.active {\n  color: #28a745;\n}\n.submission-indicator.inactive {\n  color: #dc3545;\n}\n.submission-stats {\n  margin-left: 12px;\n  padding-left: 12px;\n  border-left: 1px solid #dee2e6;\n}\n.submission-stats .active-count {\n  color: #28a745;\n  font-weight: 500;\n  margin-right: 8px;\n}\n.submission-stats .inactive-count {\n  color: #dc3545;\n  font-weight: 500;\n}\n.mapping-details {\n  padding: 16px;\n  background-color: white;\n}\n.detail-section {\n  margin-bottom: 20px;\n}\n.detail-section:last-child {\n  margin-bottom: 0;\n}\n.detail-section h5 {\n  margin: 0 0 10px 0;\n  color: #333;\n  font-size: 13px;\n  font-weight: 600;\n}\n.source-list,\n.dta-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.source-item,\n.dta-item {\n  display: flex;\n  gap: 8px;\n  padding: 6px 10px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.source-item .source-table,\n.source-item .dta-name,\n.dta-item .source-table,\n.dta-item .dta-name {\n  font-weight: 600;\n  color: #333;\n}\n.source-item .source-field,\n.dta-item .source-field {\n  color: #0078d4;\n  font-family: monospace;\n}\n.source-item .source-priority,\n.source-item .dta-priority,\n.dta-item .source-priority,\n.dta-item .dta-priority {\n  color: #6c757d;\n}\n.pairs-table-container {\n  overflow-x: auto;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n}\n.pairs-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.pairs-table th,\n.pairs-table td {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.pairs-table thead {\n  background-color: #f8f9fa;\n}\n.pairs-table thead th {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.pairs-table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.pairs-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.pairs-table tbody tr.inactive {\n  opacity: 0.5;\n  background-color: #fafafa;\n}\n.pairs-table code {\n  padding: 1px 4px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 11px;\n}\n.pairs-table .ref-type {\n  color: #6c757d;\n  font-size: 10px;\n  margin-left: 4px;\n}\n.pairs-table input[type=checkbox] {\n  cursor: pointer;\n}\n.no-pairs {\n  padding: 20px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.no-pairs p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 13px;\n}\n.empty-state {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.empty-state p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 14px;\n}\n"] }]
  }], null, { mappings: [{
    type: Input
  }], submitFields: [{
    type: Input
  }], codeTableMappings: [{
    type: Input
  }], mappingsChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionMappings, { className: "ConfigSectionMappings", filePath: "src/app/config-editor/sections/config-section-mappings.ts", lineNumber: 635 });
})();

// src/app/config-editor/sections/config-section-fhir-codes.ts
var _forTrack06 = ($index, $item) => $item.RESOURCE_TYPE + "-" + $item.FIELD_NAME + "-" + $item.CODE;
function ConfigSectionFhirCodes_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", type_r1, " (", ctx_r1.getCountForType(type_r1), ")");
  }
}
function ConfigSectionFhirCodes_For_40_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", code_r3.CODE_SYSTEM, \u0275\u0275sanitizeUrl)("title", code_r3.CODE_SYSTEM);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.shortenUrl(code_r3.CODE_SYSTEM), " ");
  }
}
function ConfigSectionFhirCodes_For_40_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionFhirCodes_For_40_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionFhirCodes_For_40_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionFhirCodes_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 14)(7, "code");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 16);
    \u0275\u0275conditionalCreate(12, ConfigSectionFhirCodes_For_40_Conditional_12_Template, 2, 3, "a", 23)(13, ConfigSectionFhirCodes_For_40_Conditional_13_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 17);
    \u0275\u0275conditionalCreate(15, ConfigSectionFhirCodes_For_40_Conditional_15_Template, 2, 0, "span", 25)(16, ConfigSectionFhirCodes_For_40_Conditional_16_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const code_r3 = ctx.$implicit;
    \u0275\u0275classProp("is-default", code_r3.IS_DEFAULT === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(code_r3.RESOURCE_TYPE);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(code_r3.FIELD_NAME);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(code_r3.CODE);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(code_r3.LABEL);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(code_r3.CODE_SYSTEM ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(code_r3.IS_DEFAULT === 1 ? 15 : 16);
  }
}
function ConfigSectionFhirCodes_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, " No FHIR codes found for the selected resource type ");
    \u0275\u0275elementEnd()();
  }
}
function ConfigSectionFhirCodes_For_47_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r4);
  }
}
function ConfigSectionFhirCodes_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275repeaterCreate(6, ConfigSectionFhirCodes_For_47_For_7_Template, 2, 1, "span", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getCountForType(type_r5), " codes");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getFieldsForType(type_r5));
  }
}
var ConfigSectionFhirCodes = class _ConfigSectionFhirCodes {
  fhirCodes = [];
  // UI state
  selectedResourceType = signal("", ...ngDevMode ? [{ debugName: "selectedResourceType" }] : []);
  // Computed values
  resourceTypes = computed(() => {
    const types = new Set(this.fhirCodes.map((c) => c.RESOURCE_TYPE));
    return Array.from(types).sort();
  }, ...ngDevMode ? [{ debugName: "resourceTypes" }] : []);
  filteredCodes = computed(() => {
    const type = this.selectedResourceType();
    if (!type)
      return this.fhirCodes;
    return this.fhirCodes.filter((c) => c.RESOURCE_TYPE === type);
  }, ...ngDevMode ? [{ debugName: "filteredCodes" }] : []);
  getCountForType(type) {
    return this.fhirCodes.filter((c) => c.RESOURCE_TYPE === type).length;
  }
  getFieldsForType(type) {
    const fields = new Set(this.fhirCodes.filter((c) => c.RESOURCE_TYPE === type).map((c) => c.FIELD_NAME));
    return Array.from(fields);
  }
  shortenUrl(url) {
    try {
      const parsed = new URL(url);
      const path = parsed.pathname.split("/").pop() || "";
      return path || parsed.hostname;
    } catch {
      return url.length > 30 ? url.substring(0, 30) + "..." : url;
    }
  }
  static \u0275fac = function ConfigSectionFhirCodes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionFhirCodes)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionFhirCodes, selectors: [["app-config-section-fhir-codes"]], inputs: { fhirCodes: "fhirCodes" }, decls: 48, vars: 5, consts: [[1, "section-content"], [1, "info-banner"], [1, "info-icon"], [1, "controls-bar"], [1, "filter-select"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "stats"], [1, "stat-item"], [1, "codes-table-container"], [1, "codes-table"], [1, "col-resource"], [1, "col-field"], [1, "col-code"], [1, "col-label"], [1, "col-system"], [1, "col-default"], [3, "is-default"], [1, "resource-summary"], [1, "summary-grid"], [1, "summary-card"], [1, "resource-badge"], ["target", "_blank", 1, "system-link", 3, "href", "title"], [1, "no-value"], [1, "default-badge"], ["colspan", "6", 1, "empty-row"], [1, "summary-type"], [1, "summary-count"], [1, "summary-fields"], [1, "field-tag"]], template: function ConfigSectionFhirCodes_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "FHIR resource codes are read-only. These are mandatory default values used when building FHIR resources for MHA PDS submissions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "select", 5);
      \u0275\u0275listener("ngModelChange", function ConfigSectionFhirCodes_Template_select_ngModelChange_8_listener($event) {
        return ctx.selectedResourceType.set($event);
      });
      \u0275\u0275elementStart(9, "option", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(11, ConfigSectionFhirCodes_For_12_Template, 2, 3, "option", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
      \u0275\u0275text(15, " Showing ");
      \u0275\u0275elementStart(16, "strong");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " of ");
      \u0275\u0275elementStart(19, "strong");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " codes ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 10)(23, "table", 11)(24, "thead")(25, "tr")(26, "th", 12);
      \u0275\u0275text(27, "Resource Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 13);
      \u0275\u0275text(29, "Field Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 14);
      \u0275\u0275text(31, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 15);
      \u0275\u0275text(33, "Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 16);
      \u0275\u0275text(35, "Code System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 17);
      \u0275\u0275text(37, "Default");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "tbody");
      \u0275\u0275repeaterCreate(39, ConfigSectionFhirCodes_For_40_Template, 17, 8, "tr", 18, _forTrack06);
      \u0275\u0275conditionalCreate(41, ConfigSectionFhirCodes_Conditional_41_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 19)(43, "h4");
      \u0275\u0275text(44, "Resource Type Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 20);
      \u0275\u0275repeaterCreate(46, ConfigSectionFhirCodes_For_47_Template, 8, 2, "div", 21, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.selectedResourceType());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("All Resource Types (", ctx.fhirCodes.length, ")");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.resourceTypes());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.filteredCodes().length);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.fhirCodes.length);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.filteredCodes());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredCodes().length === 0 ? 41 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.resourceTypes());
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #0056b3;\n  font-size: 13px;\n}\n.info-banner[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #0078d4;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.controls-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n.controls-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: white;\n}\n.controls-bar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.controls-bar[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n.codes-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.codes-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.codes-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.codes-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.codes-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.codes-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.codes-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.codes-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.codes-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.is-default[_ngcontent-%COMP%] {\n  background-color: #f0fff4;\n}\n.codes-table[_ngcontent-%COMP%]   .col-resource[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.codes-table[_ngcontent-%COMP%]   .col-field[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.codes-table[_ngcontent-%COMP%]   .col-code[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.codes-table[_ngcontent-%COMP%]   .col-label[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.codes-table[_ngcontent-%COMP%]   .col-system[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.codes-table[_ngcontent-%COMP%]   .col-default[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.codes-table[_ngcontent-%COMP%]   .resource-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #0056b3;\n}\n.codes-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #d73a49;\n}\n.codes-table[_ngcontent-%COMP%]   .system-link[_ngcontent-%COMP%] {\n  color: #0078d4;\n  text-decoration: none;\n  font-size: 12px;\n}\n.codes-table[_ngcontent-%COMP%]   .system-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.codes-table[_ngcontent-%COMP%]   .no-value[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.codes-table[_ngcontent-%COMP%]   .default-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  background-color: #d4edda;\n  color: #155724;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n}\n.codes-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  padding: 40px;\n  font-style: italic;\n}\n.resource-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.resource-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.resource-summary[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.resource-summary[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  padding: 12px;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.resource-summary[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0078d4;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.resource-summary[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 8px;\n}\n.resource-summary[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.resource-summary[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-fields[_ngcontent-%COMP%]   .field-tag[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  background-color: #e9ecef;\n  border-radius: 3px;\n  font-size: 11px;\n  color: #495057;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionFhirCodes, [{
    type: Component,
    args: [{ selector: "app-config-section-fhir-codes", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <!-- Info Banner -->
      <div class="info-banner">
        <span class="info-icon">i</span>
        <span>FHIR resource codes are read-only. These are mandatory default values used when building FHIR resources for MHA PDS submissions.</span>
      </div>

      <!-- Filter by Resource Type -->
      <div class="controls-bar">
        <div class="filter-select">
          <select
            class="form-control"
            [ngModel]="selectedResourceType()"
            (ngModelChange)="selectedResourceType.set($event)">
            <option value="">All Resource Types ({{ fhirCodes.length }})</option>
            @for (type of resourceTypes(); track type) {
              <option [value]="type">{{ type }} ({{ getCountForType(type) }})</option>
            }
          </select>
        </div>
        <div class="stats">
          <span class="stat-item">
            Showing <strong>{{ filteredCodes().length }}</strong> of <strong>{{ fhirCodes.length }}</strong> codes
          </span>
        </div>
      </div>

      <!-- FHIR Codes Table -->
      <div class="codes-table-container">
        <table class="codes-table">
          <thead>
            <tr>
              <th class="col-resource">Resource Type</th>
              <th class="col-field">Field Name</th>
              <th class="col-code">Code</th>
              <th class="col-label">Label</th>
              <th class="col-system">Code System</th>
              <th class="col-default">Default</th>
            </tr>
          </thead>
          <tbody>
            @for (code of filteredCodes(); track code.RESOURCE_TYPE + '-' + code.FIELD_NAME + '-' + code.CODE) {
              <tr [class.is-default]="code.IS_DEFAULT === 1">
                <td class="col-resource">
                  <span class="resource-badge">{{ code.RESOURCE_TYPE }}</span>
                </td>
                <td class="col-field">{{ code.FIELD_NAME }}</td>
                <td class="col-code">
                  <code>{{ code.CODE }}</code>
                </td>
                <td class="col-label">{{ code.LABEL }}</td>
                <td class="col-system">
                  @if (code.CODE_SYSTEM) {
                    <a [href]="code.CODE_SYSTEM" target="_blank" class="system-link" [title]="code.CODE_SYSTEM">
                      {{ shortenUrl(code.CODE_SYSTEM) }}
                    </a>
                  } @else {
                    <span class="no-value">-</span>
                  }
                </td>
                <td class="col-default">
                  @if (code.IS_DEFAULT === 1) {
                    <span class="default-badge">Default</span>
                  } @else {
                    <span class="no-value">-</span>
                  }
                </td>
              </tr>
            }

            @if (filteredCodes().length === 0) {
              <tr>
                <td colspan="6" class="empty-row">
                  No FHIR codes found for the selected resource type
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Resource Type Summary -->
      <div class="resource-summary">
        <h4>Resource Type Summary</h4>
        <div class="summary-grid">
          @for (type of resourceTypes(); track type) {
            <div class="summary-card">
              <div class="summary-type">{{ type }}</div>
              <div class="summary-count">{{ getCountForType(type) }} codes</div>
              <div class="summary-fields">
                @for (field of getFieldsForType(type); track field) {
                  <span class="field-tag">{{ field }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;efa851a79c8fbd95aa39982da3eac88ab3bcaa0a5327ffef3be39e22f7b58318;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-fhir-codes.ts */\n.section-content {\n  max-width: 1200px;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #0056b3;\n  font-size: 13px;\n}\n.info-banner .info-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #0078d4;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.controls-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.controls-bar .filter-select {\n  min-width: 250px;\n}\n.controls-bar .form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: white;\n}\n.controls-bar .form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.controls-bar .stats {\n  margin-left: auto;\n}\n.controls-bar .stats .stat-item {\n  font-size: 13px;\n  color: #555;\n}\n.codes-table-container {\n  overflow-x: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.codes-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.codes-table th,\n.codes-table td {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.codes-table thead {\n  background-color: #f8f9fa;\n}\n.codes-table thead th {\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.codes-table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.codes-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.codes-table tbody tr.is-default {\n  background-color: #f0fff4;\n}\n.codes-table .col-resource {\n  width: 140px;\n}\n.codes-table .col-field {\n  width: 120px;\n}\n.codes-table .col-code {\n  width: 100px;\n}\n.codes-table .col-label {\n  min-width: 150px;\n}\n.codes-table .col-system {\n  width: 200px;\n}\n.codes-table .col-default {\n  width: 80px;\n}\n.codes-table .resource-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #0056b3;\n}\n.codes-table code {\n  padding: 2px 6px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #d73a49;\n}\n.codes-table .system-link {\n  color: #0078d4;\n  text-decoration: none;\n  font-size: 12px;\n}\n.codes-table .system-link:hover {\n  text-decoration: underline;\n}\n.codes-table .no-value {\n  color: #adb5bd;\n}\n.codes-table .default-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  background-color: #d4edda;\n  color: #155724;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n}\n.codes-table .empty-row {\n  text-align: center;\n  color: #6c757d;\n  padding: 40px;\n  font-style: italic;\n}\n.resource-summary {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.resource-summary h4 {\n  margin: 0 0 16px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.resource-summary .summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.resource-summary .summary-card {\n  padding: 12px;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n}\n.resource-summary .summary-card .summary-type {\n  font-weight: 600;\n  color: #0078d4;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.resource-summary .summary-card .summary-count {\n  font-size: 12px;\n  color: #6c757d;\n  margin-bottom: 8px;\n}\n.resource-summary .summary-card .summary-fields {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.resource-summary .summary-card .summary-fields .field-tag {\n  padding: 2px 6px;\n  background-color: #e9ecef;\n  border-radius: 3px;\n  font-size: 11px;\n  color: #495057;\n}\n"] }]
  }], null, { fhirCodes: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionFhirCodes, { className: "ConfigSectionFhirCodes", filePath: "src/app/config-editor/sections/config-section-fhir-codes.ts", lineNumber: 352 });
})();

// src/app/services/location.service.ts
var LocationService = class _LocationService {
  cclWrapper = inject(CclServiceWrapperService);
  // Cached locations using signals for reactive state
  locationsCache = signal([], ...ngDevMode ? [{ debugName: "locationsCache" }] : []);
  // Loading state
  loadingState = signal({
    loading: false,
    loaded: false,
    error: null
  }, ...ngDevMode ? [{ debugName: "loadingState" }] : []);
  /**
   * Read-only computed signal for available locations
   */
  locations = computed(() => this.locationsCache(), ...ngDevMode ? [{ debugName: "locations" }] : []);
  /**
   * Read-only computed signal for loading state
   */
  state = computed(() => this.loadingState(), ...ngDevMode ? [{ debugName: "state" }] : []);
  /**
   * Check if locations are currently cached
   */
  isCached = computed(() => this.locationsCache().length > 0, ...ngDevMode ? [{ debugName: "isCached" }] : []);
  /**
   * Check if currently loading
   */
  isLoading = computed(() => this.loadingState().loading, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  /**
   * Get count of available locations
   */
  locationCount = computed(() => this.locationsCache().length, ...ngDevMode ? [{ debugName: "locationCount" }] : []);
  /**
   * Load available locations from CCL backend
   *
   * Fetches all unit-level locations (NURSEUNIT and AMBULATORY) from Cerner
   * code_value table, including hierarchy information and MHA configuration status.
   *
   * @param searchText - Optional search text to filter locations by name
   * @returns Observable<AvailableLocation[]> - The available locations
   */
  getAvailableLocations(searchText) {
    return new Observable((subscriber) => {
      this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
        loading: true,
        error: null
      }));
      const requestId = `getAvailableLocations-${Date.now()}`;
      try {
        this.cclWrapper.load({
          customScript: {
            script: [
              {
                name: "gbin_mha_pds_service:group1",
                run: "pre",
                id: requestId,
                reference: true,
                parameters: {
                  requestType: "getAvailableLocations",
                  requestId: Date.now(),
                  requestData: searchText ? JSON.stringify({ searchText }) : ""
                }
              }
            ],
            clearPatientSource: true
          }
        }, [{ personId: 0, encntrId: 0 }], () => {
          const response = this.cclWrapper.get(requestId);
          if (response) {
            if (response.error) {
              const error = `CCL Error: ${response.error}`;
              this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
                loading: false,
                error
              }));
              subscriber.error(new Error(error));
            } else if (response.LOCATIONS && Array.isArray(response.LOCATIONS)) {
              const locations = response.LOCATIONS;
              this.locationsCache.set(locations);
              this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
                loading: false,
                loaded: true,
                error: null
              }));
              subscriber.next(locations);
              subscriber.complete();
            } else {
              const error = "Invalid locations structure received from CCL";
              console.error("[LocationService] Invalid response structure:", response);
              this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
                loading: false,
                error
              }));
              subscriber.error(new Error(error));
            }
          } else {
            const error = "No response from CCL script";
            this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
              loading: false,
              error
            }));
            subscriber.error(new Error(error));
          }
        });
      } catch (err) {
        const error = err instanceof Error ? err.message : "Unknown error loading locations";
        this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
          loading: false,
          error
        }));
        subscriber.error(new Error(error));
      }
    });
  }
  /**
   * Search/filter cached locations by name
   *
   * Filters the cached locations list by location name, facility name,
   * or building name. Case-insensitive search.
   *
   * @param searchText - Text to search for
   * @returns AvailableLocation[] - Filtered locations
   */
  searchLocations(searchText) {
    if (!searchText || searchText.trim() === "") {
      return this.locationsCache();
    }
    const search = searchText.toLowerCase().trim();
    return this.locationsCache().filter((loc) => loc.LOCATION_NAME.toLowerCase().includes(search) || loc.FACILITY_NAME.toLowerCase().includes(search) || loc.BUILDING_NAME.toLowerCase().includes(search));
  }
  /**
   * Get locations grouped by facility
   *
   * Groups available locations by their facility for hierarchical display.
   *
   * @returns Map<string, AvailableLocation[]> - Locations grouped by facility name
   */
  getLocationsByFacility() {
    const grouped = /* @__PURE__ */ new Map();
    this.locationsCache().forEach((location) => {
      const facilityName = location.FACILITY_NAME || "Unknown Facility";
      const existing = grouped.get(facilityName) || [];
      existing.push(location);
      grouped.set(facilityName, existing);
    });
    return grouped;
  }
  /**
   * Get locations that are not yet configured for MHA
   *
   * @returns AvailableLocation[] - Locations where IS_MHA_CONFIGURED = 0
   */
  getUnconfiguredLocations() {
    return this.locationsCache().filter((loc) => loc.IS_MHA_CONFIGURED === 0);
  }
  /**
   * Get locations that are already configured for MHA
   *
   * @returns AvailableLocation[] - Locations where IS_MHA_CONFIGURED = 1
   */
  getConfiguredLocations() {
    return this.locationsCache().filter((loc) => loc.IS_MHA_CONFIGURED === 1);
  }
  /**
   * Clear the cached locations
   *
   * Forces the next getAvailableLocations() call to fetch fresh data.
   */
  clearCache() {
    this.locationsCache.set([]);
    this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
      loaded: false
    }));
  }
  /**
   * Refresh locations from backend
   *
   * Convenience method that clears cache and loads fresh locations.
   *
   * @returns Observable<AvailableLocation[]> - The refreshed locations
   */
  refreshLocations() {
    this.clearCache();
    return this.getAvailableLocations();
  }
  static \u0275fac = function LocationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocationService, factory: _LocationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/config-editor/sections/config-section-mha-locations.ts
var _forTrack07 = ($index, $item) => $item.NURSE_UNIT_CD;
var _forTrack15 = ($index, $item) => $item.LOCATION_CD;
function ConfigSectionMhaLocations_Conditional_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 8);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td")(6, "label", 9)(7, "input", 10);
    \u0275\u0275domListener("change", function ConfigSectionMhaLocations_Conditional_11_For_14_Template_input_change_7_listener($event) {
      const loc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onToggleActive(loc_r2, $event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(8, "span", 11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "td")(10, "button", 12);
    \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Conditional_11_For_14_Template_button_click_10_listener() {
      const loc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRemoveLocation(loc_r2));
    });
    \u0275\u0275text(11, " Remove ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const loc_r2 = ctx.$implicit;
    \u0275\u0275classProp("inactive", loc_r2.ACTIVE_IND === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r2.LOCATION_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r2.NURSE_UNIT_CD);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("checked", loc_r2.ACTIVE_IND === 1);
  }
}
function ConfigSectionMhaLocations_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Location Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Nurse Unit CD");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Active");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ConfigSectionMhaLocations_Conditional_11_For_14_Template, 12, 5, "tr", 7, _forTrack07);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.locations);
  }
}
function ConfigSectionMhaLocations_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2, "No MHA locations configured yet.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 13);
    \u0275\u0275text(4, 'Click "Add Location" to configure locations for MHA patient discovery.');
    \u0275\u0275domElementEnd()();
  }
}
function ConfigSectionMhaLocations_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19)(1, "span");
    \u0275\u0275text(2, "Loading available locations...");
    \u0275\u0275domElementEnd()();
  }
}
function ConfigSectionMhaLocations_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 25);
    \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Conditional_13_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadAvailableLocations());
    });
    \u0275\u0275text(4, "Retry");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.locationError());
  }
}
function ConfigSectionMhaLocations_Conditional_13_Conditional_10_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 35);
    \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Conditional_13_Conditional_10_For_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const loc_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onAddLocation(loc_r7));
    });
    \u0275\u0275text(1, " Add ");
    \u0275\u0275domElementEnd();
  }
}
function ConfigSectionMhaLocations_Conditional_13_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34);
    \u0275\u0275text(1, "Already Added");
    \u0275\u0275domElementEnd();
  }
}
function ConfigSectionMhaLocations_Conditional_13_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, ConfigSectionMhaLocations_Conditional_13_Conditional_10_For_2_Conditional_8_Template, 2, 0, "button", 33)(9, ConfigSectionMhaLocations_Conditional_13_Conditional_10_For_2_Conditional_9_Template, 2, 0, "span", 34);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const loc_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("already-added", ctx_r2.isAlreadyConfigured(loc_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loc_r7.LOCATION_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r7.FACILITY_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r7.LOCATION_MEANING);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isAlreadyConfigured(loc_r7) ? 8 : 9);
  }
}
function ConfigSectionMhaLocations_Conditional_13_Conditional_10_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 27)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No locations found matching "', ctx_r2.searchTerm(), '"');
  }
}
function ConfigSectionMhaLocations_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, ConfigSectionMhaLocations_Conditional_13_Conditional_10_For_2_Template, 10, 6, "div", 26, _forTrack15, false, ConfigSectionMhaLocations_Conditional_13_Conditional_10_ForEmpty_3_Template, 3, 1, "div", 27);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredAvailableLocations());
  }
}
function ConfigSectionMhaLocations_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLocationBrowser());
    });
    \u0275\u0275domElementStart(1, "div", 15);
    \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4, "Add MHA Location");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 17);
    \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLocationBrowser());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "input", 18);
    \u0275\u0275domListener("input", function ConfigSectionMhaLocations_Conditional_13_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchChange($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, ConfigSectionMhaLocations_Conditional_13_Conditional_8_Template, 3, 0, "div", 19)(9, ConfigSectionMhaLocations_Conditional_13_Conditional_9_Template, 5, 1, "div", 20)(10, ConfigSectionMhaLocations_Conditional_13_Conditional_10_Template, 4, 1, "div", 21);
    \u0275\u0275domElementStart(11, "div", 22)(12, "span", 23);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "button", 24);
    \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLocationBrowser());
    });
    \u0275\u0275text(15, " Close ");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275domProperty("value", ctx_r2.searchTerm());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loadingLocations() ? 8 : ctx_r2.locationError() ? 9 : 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.filteredAvailableLocations().length, " locations available ");
  }
}
var ConfigSectionMhaLocations = class _ConfigSectionMhaLocations {
  locationService = inject(LocationService);
  locations = [];
  locationsChange = new EventEmitter();
  showLocationBrowser = signal(false, ...ngDevMode ? [{ debugName: "showLocationBrowser" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  availableLocations = signal([], ...ngDevMode ? [{ debugName: "availableLocations" }] : []);
  loadingLocations = signal(false, ...ngDevMode ? [{ debugName: "loadingLocations" }] : []);
  locationError = signal(null, ...ngDevMode ? [{ debugName: "locationError" }] : []);
  activeCount = computed(() => this.locations.filter((l) => l.ACTIVE_IND === 1).length, ...ngDevMode ? [{ debugName: "activeCount" }] : []);
  filteredAvailableLocations = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const locs = this.availableLocations();
    if (!term)
      return locs;
    return locs.filter((loc) => loc.LOCATION_NAME.toLowerCase().includes(term) || loc.FACILITY_NAME.toLowerCase().includes(term));
  }, ...ngDevMode ? [{ debugName: "filteredAvailableLocations" }] : []);
  constructor() {
    effect(() => {
      if (this.showLocationBrowser() && this.availableLocations().length === 0) {
        this.loadAvailableLocations();
      }
    });
  }
  openLocationBrowser() {
    this.showLocationBrowser.set(true);
  }
  closeLocationBrowser() {
    this.showLocationBrowser.set(false);
    this.searchTerm.set("");
  }
  loadAvailableLocations() {
    this.loadingLocations.set(true);
    this.locationError.set(null);
    this.locationService.getAvailableLocations().subscribe({
      next: (locs) => {
        this.availableLocations.set(locs);
        this.loadingLocations.set(false);
      },
      error: (err) => {
        this.locationError.set(err.message || "Failed to load locations");
        this.loadingLocations.set(false);
      }
    });
  }
  isAlreadyConfigured(available) {
    return this.locations.some((loc) => loc.NURSE_UNIT_CD === available.LOCATION_CD);
  }
  onToggleActive(location, event) {
    const checked = event.target.checked;
    const updated = this.locations.map((loc) => loc.NURSE_UNIT_CD === location.NURSE_UNIT_CD ? __spreadProps(__spreadValues({}, loc), { ACTIVE_IND: checked ? 1 : 0 }) : loc);
    this.locationsChange.emit(updated);
  }
  onRemoveLocation(location) {
    if (confirm(`Remove "${location.LOCATION_NAME}" from MHA locations?`)) {
      const updated = this.locations.filter((loc) => loc.NURSE_UNIT_CD !== location.NURSE_UNIT_CD);
      this.locationsChange.emit(updated);
    }
  }
  onAddLocation(available) {
    const newLocation = {
      LOCATION_NAME: available.LOCATION_NAME,
      FACILITY_CD: available.FACILITY_CD,
      NURSE_UNIT_CD: available.LOCATION_CD,
      ACTIVE_IND: 1
    };
    const updated = [...this.locations, newLocation];
    this.locationsChange.emit(updated);
  }
  onSearchChange(event) {
    const value = event.target.value;
    this.searchTerm.set(value);
  }
  static \u0275fac = function ConfigSectionMhaLocations_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionMhaLocations)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionMhaLocations, selectors: [["app-config-section-mha-locations"]], inputs: { locations: "locations" }, outputs: { locationsChange: "locationsChange" }, decls: 14, vars: 4, consts: [[1, "section-content"], [1, "summary-bar"], [1, "stat"], [1, "btn-add", 3, "click"], [1, "locations-table"], [1, "empty-state"], [1, "modal-overlay"], [3, "inactive"], [1, "code"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked"], [1, "toggle-slider"], [1, "btn-remove", 3, "click"], [1, "hint"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], ["type", "text", "placeholder", "Search locations by name...", 1, "search-input", 3, "input", "value"], [1, "loading-state"], [1, "error-state"], [1, "available-locations"], [1, "modal-footer"], [1, "location-count"], [1, "btn-close", 3, "click"], [1, "btn-retry", 3, "click"], [1, "available-location", 3, "already-added"], [1, "no-results"], [1, "available-location"], [1, "loc-info"], [1, "loc-name"], [1, "loc-facility"], [1, "loc-type"], [1, "btn-add-loc"], [1, "already-badge"], [1, "btn-add-loc", 3, "click"]], template: function ConfigSectionMhaLocations_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "strong");
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(5, " active of ");
      \u0275\u0275domElementStart(6, "strong");
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(8, " locations configured ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "button", 3);
      \u0275\u0275domListener("click", function ConfigSectionMhaLocations_Template_button_click_9_listener() {
        return ctx.openLocationBrowser();
      });
      \u0275\u0275text(10, " + Add Location ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(11, ConfigSectionMhaLocations_Conditional_11_Template, 15, 0, "div", 4)(12, ConfigSectionMhaLocations_Conditional_12_Template, 5, 0, "div", 5);
      \u0275\u0275conditionalCreate(13, ConfigSectionMhaLocations_Conditional_13_Template, 16, 3, "div", 6);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.activeCount());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.locations.length);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.locations.length > 0 ? 11 : 12);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showLocationBrowser() ? 13 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.summary-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n.summary-bar[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n}\n.summary-bar[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.summary-bar[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #0078d4;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.summary-bar[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  background-color: #106ebe;\n}\n.locations-table[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #555;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.code[_ngcontent-%COMP%] {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  color: #6c757d;\n  font-size: 13px;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  opacity: 0.7;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #999;\n}\n.locations-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 24px;\n  transition: 0.3s;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background-color: transparent;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #555;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #888;\n  font-size: 13px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 18px;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n  line-height: 1;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.search-input[_ngcontent-%COMP%] {\n  margin: 16px 20px;\n  padding: 10px 14px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.available-locations[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 20px;\n}\n.available-location[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.available-location[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.available-location.already-added[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.available-location[_ngcontent-%COMP%]   .loc-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.available-location[_ngcontent-%COMP%]   .loc-info[_ngcontent-%COMP%]   .loc-name[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  font-weight: 500;\n}\n.available-location[_ngcontent-%COMP%]   .loc-info[_ngcontent-%COMP%]   .loc-facility[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n.available-location[_ngcontent-%COMP%]   .loc-info[_ngcontent-%COMP%]   .loc-type[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 11px;\n  text-transform: uppercase;\n}\n.available-location[_ngcontent-%COMP%]   .btn-add-loc[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n}\n.available-location[_ngcontent-%COMP%]   .btn-add-loc[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n.available-location[_ngcontent-%COMP%]   .already-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background-color: #e9ecef;\n  color: #6c757d;\n  border-radius: 4px;\n  font-size: 11px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #e9ecef;\n}\n.modal-footer[_ngcontent-%COMP%]   .location-count[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 13px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #666;\n}\n.error-state[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 6px 16px;\n  background-color: #dc3545;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.no-results[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #888;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionMhaLocations, [{
    type: Component,
    args: [{ selector: "app-config-section-mha-locations", standalone: true, imports: [CommonModule], template: `
    <div class="section-content">
      <!-- Summary Stats -->
      <div class="summary-bar">
        <span class="stat">
          <strong>{{ activeCount() }}</strong> active of
          <strong>{{ locations.length }}</strong> locations configured
        </span>
        <button class="btn-add" (click)="openLocationBrowser()">
          + Add Location
        </button>
      </div>

      <!-- Current Locations Table -->
      @if (locations.length > 0) {
        <div class="locations-table">
          <table>
            <thead>
              <tr>
                <th>Location Name</th>
                <th>Nurse Unit CD</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (loc of locations; track loc.NURSE_UNIT_CD) {
                <tr [class.inactive]="loc.ACTIVE_IND === 0">
                  <td>{{ loc.LOCATION_NAME }}</td>
                  <td class="code">{{ loc.NURSE_UNIT_CD }}</td>
                  <td>
                    <label class="toggle-switch">
                      <input type="checkbox"
                        [checked]="loc.ACTIVE_IND === 1"
                        (change)="onToggleActive(loc, $event)" />
                      <span class="toggle-slider"></span>
                    </label>
                  </td>
                  <td>
                    <button class="btn-remove" (click)="onRemoveLocation(loc)">
                      Remove
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      } @else {
        <div class="empty-state">
          <p>No MHA locations configured yet.</p>
          <p class="hint">Click "Add Location" to configure locations for MHA patient discovery.</p>
        </div>
      }

      <!-- Location Browser Modal -->
      @if (showLocationBrowser()) {
        <div class="modal-overlay" (click)="closeLocationBrowser()">
          <div class="modal-content" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h3>Add MHA Location</h3>
              <button class="btn-close-modal" (click)="closeLocationBrowser()">&times;</button>
            </div>

            <input type="text"
              class="search-input"
              placeholder="Search locations by name..."
              [value]="searchTerm()"
              (input)="onSearchChange($event)" />

            @if (loadingLocations()) {
              <div class="loading-state">
                <span>Loading available locations...</span>
              </div>
            } @else if (locationError()) {
              <div class="error-state">
                <span>{{ locationError() }}</span>
                <button class="btn-retry" (click)="loadAvailableLocations()">Retry</button>
              </div>
            } @else {
              <div class="available-locations">
                @for (loc of filteredAvailableLocations(); track loc.LOCATION_CD) {
                  <div class="available-location"
                    [class.already-added]="isAlreadyConfigured(loc)">
                    <div class="loc-info">
                      <span class="loc-name">{{ loc.LOCATION_NAME }}</span>
                      <span class="loc-facility">{{ loc.FACILITY_NAME }}</span>
                      <span class="loc-type">{{ loc.LOCATION_MEANING }}</span>
                    </div>
                    @if (!isAlreadyConfigured(loc)) {
                      <button class="btn-add-loc" (click)="onAddLocation(loc)">
                        Add
                      </button>
                    } @else {
                      <span class="already-badge">Already Added</span>
                    }
                  </div>
                } @empty {
                  <div class="no-results">
                    <p>No locations found matching "{{ searchTerm() }}"</p>
                  </div>
                }
              </div>
            }

            <div class="modal-footer">
              <span class="location-count">
                {{ filteredAvailableLocations().length }} locations available
              </span>
              <button class="btn-close" (click)="closeLocationBrowser()">
                Close
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;63d2be762d70245c1cbdee5c581fa2b9d20d41205b8e5fce8f83b8c8f9363dfd;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-mha-locations.ts */\n.section-content {\n  max-width: 900px;\n}\n.summary-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n.summary-bar .stat {\n  color: #555;\n  font-size: 14px;\n}\n.summary-bar .stat strong {\n  color: #333;\n}\n.summary-bar .btn-add {\n  padding: 8px 16px;\n  background-color: #0078d4;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.summary-bar .btn-add:hover {\n  background-color: #106ebe;\n}\n.locations-table {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.locations-table table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.locations-table table th,\n.locations-table table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.locations-table table th {\n  background-color: #f8f9fa;\n  color: #555;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.locations-table table td {\n  font-size: 14px;\n  color: #333;\n}\n.locations-table table td.code {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  color: #6c757d;\n  font-size: 13px;\n}\n.locations-table table tr.inactive {\n  background-color: #f8f9fa;\n  opacity: 0.7;\n}\n.locations-table table tr.inactive td {\n  color: #999;\n}\n.locations-table table tr:last-child td {\n  border-bottom: none;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n}\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch input:checked + .toggle-slider {\n  background-color: #0078d4;\n}\n.toggle-switch input:checked + .toggle-slider:before {\n  transform: translateX(20px);\n}\n.toggle-switch .toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 24px;\n  transition: 0.3s;\n}\n.toggle-switch .toggle-slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.btn-remove {\n  padding: 4px 12px;\n  background-color: transparent;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.btn-remove:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.empty-state {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 6px;\n}\n.empty-state p {\n  margin: 0;\n  color: #555;\n  font-size: 14px;\n}\n.empty-state .hint {\n  margin-top: 8px;\n  color: #888;\n  font-size: 13px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header h3 {\n  margin: 0;\n  color: #333;\n  font-size: 18px;\n}\n.modal-header .btn-close-modal {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #666;\n  cursor: pointer;\n  line-height: 1;\n}\n.modal-header .btn-close-modal:hover {\n  color: #333;\n}\n.search-input {\n  margin: 16px 20px;\n  padding: 10px 14px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.available-locations {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 20px;\n}\n.available-location {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.available-location:last-child {\n  border-bottom: none;\n}\n.available-location.already-added {\n  opacity: 0.6;\n}\n.available-location .loc-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.available-location .loc-info .loc-name {\n  color: #333;\n  font-size: 14px;\n  font-weight: 500;\n}\n.available-location .loc-info .loc-facility {\n  color: #666;\n  font-size: 12px;\n}\n.available-location .loc-info .loc-type {\n  color: #888;\n  font-size: 11px;\n  text-transform: uppercase;\n}\n.available-location .btn-add-loc {\n  padding: 6px 14px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n}\n.available-location .btn-add-loc:hover {\n  background-color: #218838;\n}\n.available-location .already-badge {\n  padding: 4px 10px;\n  background-color: #e9ecef;\n  color: #6c757d;\n  border-radius: 4px;\n  font-size: 11px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #e9ecef;\n}\n.modal-footer .location-count {\n  color: #6c757d;\n  font-size: 13px;\n}\n.modal-footer .btn-close {\n  padding: 8px 20px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.modal-footer .btn-close:hover {\n  background-color: #5a6268;\n}\n.loading-state,\n.error-state {\n  padding: 40px 20px;\n  text-align: center;\n  color: #666;\n}\n.error-state {\n  color: #dc3545;\n}\n.error-state .btn-retry {\n  margin-top: 12px;\n  padding: 6px 16px;\n  background-color: #dc3545;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.no-results {\n  padding: 40px 20px;\n  text-align: center;\n  color: #888;\n}\n'] }]
  }], () => [], { locations: [{
    type: Input
  }], locationsChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionMhaLocations, { className: "ConfigSectionMhaLocations", filePath: "src/app/config-editor/sections/config-section-mha-locations.ts", lineNumber: 506 });
})();

// src/app/config-editor/sections/config-section-mapping-tester.ts
var _forTrack08 = ($index, $item) => $item.MHA_PDS_FIELD_NAME;
var _forTrack16 = ($index, $item) => $item.KEY_REF;
function ConfigSectionMappingTester_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275property("value", field_r1.MHA_PDS_FIELD_NAME);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", field_r1.MHA_PDS_FIELD_NAME, " - ", field_r1.DESCRIPTION || field_r1.NOTES || "N/A", " ");
  }
}
function ConfigSectionMappingTester_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
    \u0275\u0275text(1, " Testing... ");
  }
}
function ConfigSectionMappingTester_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Test Mapping ");
  }
}
function ConfigSectionMappingTester_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ConfigSectionMappingTester_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearResult());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappingTester_Conditional_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap("type-" + field_r4.MHA_PDS_FIELD_TYPE.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r4.MHA_PDS_FIELD_TYPE, " ");
  }
}
function ConfigSectionMappingTester_Conditional_35_Conditional_6_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ConfigSectionMappingTester_Conditional_35_Conditional_6_For_9_Template_button_click_0_listener() {
      const pair_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.useSourceValue(pair_r6.KEY_REF));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pair_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pair_r6.KEY_REF, " ");
  }
}
function ConfigSectionMappingTester_Conditional_35_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "span", 34);
    \u0275\u0275text(2, "Available Pairs:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 36)(6, "span", 34);
    \u0275\u0275text(7, "Try:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ConfigSectionMappingTester_Conditional_35_Conditional_6_For_9_Template, 2, 1, "button", 37, _forTrack16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(field_r4.PAIRS.length);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(field_r4.PAIRS.slice(0, 3));
  }
}
function ConfigSectionMappingTester_Conditional_35_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, " No mapping pairs defined - will use direct code table lookup ");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappingTester_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ConfigSectionMappingTester_Conditional_35_Conditional_4_Template, 2, 3, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275conditionalCreate(6, ConfigSectionMappingTester_Conditional_35_Conditional_6_Template, 10, 1)(7, ConfigSectionMappingTester_Conditional_35_Conditional_7_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r4 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(field_r4.MHA_PDS_FIELD_NAME);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r4.MHA_PDS_FIELD_TYPE ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(field_r4.PAIRS && field_r4.PAIRS.length > 0 ? 6 : 7);
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3, "Translation Found");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "X");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3, "Not Found");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 34);
    \u0275\u0275text(2, "Code System:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", result_r7.result.code_system, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r7.result.code_system, " ");
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 34);
    \u0275\u0275text(2, "Value Set:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", result_r7.result.value_set_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r7.result.value_set_url, " ");
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h5");
    \u0275\u0275text(2, "Observation Code (LOINC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44)(5, "span", 34);
    \u0275\u0275text(6, "Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 44)(10, "span", 34);
    \u0275\u0275text(11, "Label:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "span", 34);
    \u0275\u0275text(16, "System:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const result_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(result_r7.observation_code == null ? null : result_r7.observation_code.code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(result_r7.observation_code == null ? null : result_r7.observation_code.label);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(result_r7.observation_code == null ? null : result_r7.observation_code.code_system);
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 34);
    \u0275\u0275text(2, "Code Table:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r7 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r7.mapping_used == null ? null : result_r7.mapping_used.code_table_id);
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h5");
    \u0275\u0275text(2, "Mapping Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44)(5, "span", 34);
    \u0275\u0275text(6, "Mapping Index:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 44)(10, "span", 34);
    \u0275\u0275text(11, "Pair Index:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_17_Conditional_14_Template, 5, 1, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(result_r7.mapping_used == null ? null : result_r7.mapping_used.mapping_index);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(result_r7.mapping_used == null ? null : result_r7.mapping_used.pair_index);
    \u0275\u0275advance();
    \u0275\u0275conditional((result_r7.mapping_used == null ? null : result_r7.mapping_used.code_table_id) ? 14 : -1);
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h5");
    \u0275\u0275text(2, "MHA PDS Translation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44)(5, "span", 34);
    \u0275\u0275text(6, "Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 44)(10, "span", 34);
    \u0275\u0275text(11, "Label:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 50);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_14_Template, 5, 2, "div", 51);
    \u0275\u0275conditionalCreate(15, ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_15_Template, 5, 2, "div", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_16_Template, 19, 3, "div", 42);
    \u0275\u0275conditionalCreate(17, ConfigSectionMappingTester_Conditional_36_Conditional_24_Conditional_17_Template, 15, 3, "div", 42);
  }
  if (rf & 2) {
    const result_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(result_r7.result.code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(result_r7.result.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r7.result.code_system ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r7.result.value_set_url ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((result_r7.observation_code == null ? null : result_r7.observation_code.code) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((result_r7.mapping_used == null ? null : result_r7.mapping_used.mapping_index) ? 17 : -1);
  }
}
function ConfigSectionMappingTester_Conditional_36_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "h5");
    \u0275\u0275text(2, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 55);
    \u0275\u0275text(6, " Try checking the spelling or use one of the suggested values from the mapping pairs. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r7.error_message || "No mapping found for the provided value.");
  }
}
function ConfigSectionMappingTester_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275conditionalCreate(2, ConfigSectionMappingTester_Conditional_36_Conditional_2_Template, 4, 0)(3, ConfigSectionMappingTester_Conditional_36_Conditional_3_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "div", 42)(6, "h5");
    \u0275\u0275text(7, "Input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43)(9, "div", 44)(10, "span", 34);
    \u0275\u0275text(11, "Field Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "span", 34);
    \u0275\u0275text(16, "Source Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "code");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 44)(20, "span", 34);
    \u0275\u0275text(21, "Source Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(24, ConfigSectionMappingTester_Conditional_36_Conditional_24_Template, 18, 6)(25, ConfigSectionMappingTester_Conditional_36_Conditional_25_Template, 7, 1, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r7 = ctx;
    \u0275\u0275classProp("found", result_r7.found_ind === 1)("not-found", result_r7.found_ind !== 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(result_r7.found_ind === 1 ? 2 : 3);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(result_r7.input.field_code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(result_r7.input.source_value);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(result_r7.input.source_type);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r7.found_ind === 1 ? 24 : 25);
  }
}
function ConfigSectionMappingTester_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 56);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function ConfigSectionMappingTester_Conditional_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearError());
    });
    \u0275\u0275text(6, "x");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
var ConfigSectionMappingTester = class _ConfigSectionMappingTester {
  customService = inject(CustomService);
  mappings = [];
  codeTableMappings = [];
  // Form state
  fieldCode = signal("", ...ngDevMode ? [{ debugName: "fieldCode" }] : []);
  sourceValue = signal("", ...ngDevMode ? [{ debugName: "sourceValue" }] : []);
  sourceType = signal("CODE_VALUE_DISPLAY", ...ngDevMode ? [{ debugName: "sourceType" }] : []);
  // Result state
  testResult = signal(null, ...ngDevMode ? [{ debugName: "testResult" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Computed: fields that have mappings (pairs or code tables)
  mappableFields = computed(() => {
    return this.mappings.filter((m) => m.MHA_PDS_FIELD_NAME && (m.PAIRS?.length > 0 || m.CODE_SETS && m.CODE_SETS.length > 0));
  }, ...ngDevMode ? [{ debugName: "mappableFields" }] : []);
  // Computed: selected field info
  selectedFieldInfo = computed(() => {
    const code = this.fieldCode();
    if (!code)
      return null;
    return this.mappings.find((m) => m.MHA_PDS_FIELD_NAME === code) || null;
  }, ...ngDevMode ? [{ debugName: "selectedFieldInfo" }] : []);
  // Computed: can test
  canTest = computed(() => {
    return this.fieldCode().length > 0 && this.sourceValue().length > 0;
  }, ...ngDevMode ? [{ debugName: "canTest" }] : []);
  useSourceValue(value) {
    this.sourceValue.set(value);
  }
  testMapping() {
    if (!this.canTest())
      return;
    this.loading.set(true);
    this.error.set(null);
    this.testResult.set(null);
    this.customService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "testValueMapping",
          parameters: {
            requestType: "testValueMapping",
            field_code: this.fieldCode(),
            source_value: this.sourceValue(),
            source_type: this.sourceType()
          }
        }],
        clearPatientSource: true
      }
    }, [], () => {
      this.loading.set(false);
      const response = this.customService.get("testValueMapping");
      if (response) {
        this.testResult.set(response);
      } else {
        this.error.set("Failed to get response from service");
      }
    });
  }
  clearResult() {
    this.testResult.set(null);
  }
  clearError() {
    this.error.set(null);
  }
  static \u0275fac = function ConfigSectionMappingTester_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionMappingTester)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionMappingTester, selectors: [["app-config-section-mapping-tester"]], inputs: { mappings: "mappings", codeTableMappings: "codeTableMappings" }, decls: 38, vars: 9, consts: [[1, "section-content"], [1, "info-banner"], [1, "info-icon"], [1, "test-form"], [1, "form-row"], [1, "form-group", "field-select"], ["for", "fieldCode"], ["id", "fieldCode", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "form-group", "source-input"], ["for", "sourceValue"], ["id", "sourceValue", "type", "text", "placeholder", "Enter the Cerner value to test...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "form-group", "type-select"], ["for", "sourceType"], ["id", "sourceType", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "CODE_VALUE_DISPLAY"], ["value", "ALPHA_RESPONSE_DISPLAY"], ["value", "LITERAL"], [1, "form-group", "button-group"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-secondary"], [1, "field-info-panel"], [1, "result-panel", 3, "found", "not-found"], [1, "error-banner"], [1, "spinner-small"], [1, "btn", "btn-secondary", 3, "click"], [1, "field-info-header"], [1, "field-name"], [1, "field-type-badge", 3, "class"], [1, "field-info-details"], [1, "detail-item", "warning"], [1, "field-type-badge"], [1, "detail-item"], [1, "label"], [1, "value"], [1, "detail-item", "suggestions"], [1, "suggestion-chip"], [1, "suggestion-chip", 3, "click"], [1, "result-panel"], [1, "result-header"], [1, "result-body"], [1, "result-section"], [1, "result-grid"], [1, "result-item"], [1, "result-section", "error-section"], [1, "result-icon", "success"], [1, "result-title"], [1, "result-icon", "error"], [1, "code-value"], [1, "label-value"], [1, "result-item", "full-width"], ["target", "_blank", 1, "link", 3, "href"], [1, "code-table-badge"], [1, "error-message"], [1, "error-hint"], [1, "error-icon"], [1, "dismiss-btn", 3, "click"]], template: function ConfigSectionMappingTester_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Test value translations to verify Cerner values map correctly to MHA PDS codes. Enter a field code and source value to see the translation result.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "label", 6);
      \u0275\u0275text(10, "Field Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 7);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMappingTester_Template_select_ngModelChange_11_listener($event) {
        return ctx.fieldCode.set($event);
      });
      \u0275\u0275elementStart(12, "option", 8);
      \u0275\u0275text(13, "Select a field...");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(14, ConfigSectionMappingTester_For_15_Template, 2, 3, "option", 9, _forTrack08);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "label", 11);
      \u0275\u0275text(18, "Source Value (Cerner)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 12);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMappingTester_Template_input_ngModelChange_19_listener($event) {
        return ctx.sourceValue.set($event);
      })("keyup.enter", function ConfigSectionMappingTester_Template_input_keyup_enter_19_listener() {
        return ctx.testMapping();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "label", 14);
      \u0275\u0275text(22, "Source Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 15);
      \u0275\u0275listener("ngModelChange", function ConfigSectionMappingTester_Template_select_ngModelChange_23_listener($event) {
        return ctx.sourceType.set($event);
      });
      \u0275\u0275elementStart(24, "option", 16);
      \u0275\u0275text(25, "Code Value Display");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 17);
      \u0275\u0275text(27, "Alpha Response Display");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 18);
      \u0275\u0275text(29, "Literal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 19)(31, "button", 20);
      \u0275\u0275listener("click", function ConfigSectionMappingTester_Template_button_click_31_listener() {
        return ctx.testMapping();
      });
      \u0275\u0275conditionalCreate(32, ConfigSectionMappingTester_Conditional_32_Template, 2, 0)(33, ConfigSectionMappingTester_Conditional_33_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, ConfigSectionMappingTester_Conditional_34_Template, 2, 0, "button", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(35, ConfigSectionMappingTester_Conditional_35_Template, 8, 3, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, ConfigSectionMappingTester_Conditional_36_Template, 26, 9, "div", 23);
      \u0275\u0275conditionalCreate(37, ConfigSectionMappingTester_Conditional_37_Template, 7, 1, "div", 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      let tmp_8_0;
      \u0275\u0275advance(11);
      \u0275\u0275property("ngModel", ctx.fieldCode());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.mappableFields());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.sourceValue());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.sourceType());
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !ctx.canTest() || ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 32 : 33);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.testResult() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.selectedFieldInfo()) ? 35 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.testResult()) ? 36 : -1, tmp_8_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 37 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #856404;\n  font-size: 13px;\n}\n.info-banner[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #ffc107;\n  color: #856404;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.test-form[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  align-items: flex-end;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n}\n.form-group.field-select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.form-group.source-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.form-group.type-select[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.form-group.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  align-items: flex-end;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: white;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #106ebe;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #333;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.spinner-small[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.field-info-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background-color: white;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-header[_ngcontent-%COMP%]   .field-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: monospace;\n  color: #0078d4;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-header[_ngcontent-%COMP%]   .field-type-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-header[_ngcontent-%COMP%]   .field-type-badge.type-sdoh[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-header[_ngcontent-%COMP%]   .field-type-badge.type-coded[_ngcontent-%COMP%] {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  font-size: 13px;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-details[_ngcontent-%COMP%]   .detail-item.warning[_ngcontent-%COMP%] {\n  color: #856404;\n  font-style: italic;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-details[_ngcontent-%COMP%]   .detail-item.suggestions[_ngcontent-%COMP%]   .suggestion-chip[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n  margin-left: 4px;\n}\n.field-info-panel[_ngcontent-%COMP%]   .field-info-details[_ngcontent-%COMP%]   .detail-item.suggestions[_ngcontent-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]:hover {\n  background-color: #dee2e6;\n}\n.result-panel[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.result-panel.found[_ngcontent-%COMP%] {\n  border-color: #28a745;\n}\n.result-panel.found[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.result-panel.not-found[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.result-panel.not-found[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.result-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n}\n.result-header[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n}\n.result-header[_ngcontent-%COMP%]   .result-icon.success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.result-header[_ngcontent-%COMP%]   .result-icon.error[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.result-header[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.result-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: white;\n}\n.result-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.result-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.result-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.result-section.error-section[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #721c24;\n  margin: 0 0 8px 0;\n}\n.result-section.error-section[_ngcontent-%COMP%]   .error-hint[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 13px;\n  margin: 0;\n}\n.result-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.result-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.result-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n}\n.result-item[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 13px;\n}\n.result-item[_ngcontent-%COMP%]   code.code-value[_ngcontent-%COMP%] {\n  color: #d73a49;\n  font-weight: 500;\n}\n.result-item[_ngcontent-%COMP%]   .label-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.result-item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0078d4;\n  font-size: 12px;\n  word-break: break-all;\n}\n.result-item[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.result-item[_ngcontent-%COMP%]   .code-table-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background-color: #e9ecef;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.result-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 6px;\n  color: #721c24;\n  font-size: 13px;\n  margin-top: 20px;\n}\n.error-banner[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #dc3545;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.error-banner[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: #721c24;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 4px;\n}\n.error-banner[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  color: #491217;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionMappingTester, [{
    type: Component,
    args: [{ selector: "app-config-section-mapping-tester", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <!-- Info Banner -->
      <div class="info-banner">
        <span class="info-icon">?</span>
        <span>Test value translations to verify Cerner values map correctly to MHA PDS codes.
        Enter a field code and source value to see the translation result.</span>
      </div>

      <!-- Test Form -->
      <div class="test-form">
        <div class="form-row">
          <div class="form-group field-select">
            <label for="fieldCode">Field Code</label>
            <select
              id="fieldCode"
              class="form-control"
              [ngModel]="fieldCode()"
              (ngModelChange)="fieldCode.set($event)">
              <option value="">Select a field...</option>
              @for (field of mappableFields(); track field.MHA_PDS_FIELD_NAME) {
                <option [value]="field.MHA_PDS_FIELD_NAME">
                  {{ field.MHA_PDS_FIELD_NAME }} - {{ field.DESCRIPTION || field.NOTES || 'N/A' }}
                </option>
              }
            </select>
          </div>

          <div class="form-group source-input">
            <label for="sourceValue">Source Value (Cerner)</label>
            <input
              id="sourceValue"
              type="text"
              class="form-control"
              placeholder="Enter the Cerner value to test..."
              [ngModel]="sourceValue()"
              (ngModelChange)="sourceValue.set($event)"
              (keyup.enter)="testMapping()" />
          </div>

          <div class="form-group type-select">
            <label for="sourceType">Source Type</label>
            <select
              id="sourceType"
              class="form-control"
              [ngModel]="sourceType()"
              (ngModelChange)="sourceType.set($event)">
              <option value="CODE_VALUE_DISPLAY">Code Value Display</option>
              <option value="ALPHA_RESPONSE_DISPLAY">Alpha Response Display</option>
              <option value="LITERAL">Literal</option>
            </select>
          </div>

          <div class="form-group button-group">
            <button
              class="btn btn-primary"
              [disabled]="!canTest() || loading()"
              (click)="testMapping()">
              @if (loading()) {
                <span class="spinner-small"></span>
                Testing...
              } @else {
                Test Mapping
              }
            </button>
            @if (testResult()) {
              <button class="btn btn-secondary" (click)="clearResult()">
                Clear
              </button>
            }
          </div>
        </div>

        <!-- Selected Field Info -->
        @if (selectedFieldInfo(); as field) {
          <div class="field-info-panel">
            <div class="field-info-header">
              <span class="field-name">{{ field.MHA_PDS_FIELD_NAME }}</span>
              @if (field.MHA_PDS_FIELD_TYPE) {
                <span class="field-type-badge" [class]="'type-' + field.MHA_PDS_FIELD_TYPE.toLowerCase()">
                  {{ field.MHA_PDS_FIELD_TYPE }}
                </span>
              }
            </div>
            <div class="field-info-details">
              @if (field.PAIRS && field.PAIRS.length > 0) {
                <span class="detail-item">
                  <span class="label">Available Pairs:</span>
                  <span class="value">{{ field.PAIRS.length }}</span>
                </span>
                <span class="detail-item suggestions">
                  <span class="label">Try:</span>
                  @for (pair of field.PAIRS.slice(0, 3); track pair.KEY_REF) {
                    <button
                      class="suggestion-chip"
                      (click)="useSourceValue(pair.KEY_REF)">
                      {{ pair.KEY_REF }}
                    </button>
                  }
                </span>
              } @else {
                <span class="detail-item warning">
                  No mapping pairs defined - will use direct code table lookup
                </span>
              }
            </div>
          </div>
        }
      </div>

      <!-- Test Result -->
      @if (testResult(); as result) {
        <div class="result-panel" [class.found]="result.found_ind === 1" [class.not-found]="result.found_ind !== 1">
          <div class="result-header">
            @if (result.found_ind === 1) {
              <span class="result-icon success">OK</span>
              <span class="result-title">Translation Found</span>
            } @else {
              <span class="result-icon error">X</span>
              <span class="result-title">Not Found</span>
            }
          </div>

          <div class="result-body">
            <!-- Input Echo -->
            <div class="result-section">
              <h5>Input</h5>
              <div class="result-grid">
                <div class="result-item">
                  <span class="label">Field Code:</span>
                  <code>{{ result.input.field_code }}</code>
                </div>
                <div class="result-item">
                  <span class="label">Source Value:</span>
                  <code>{{ result.input.source_value }}</code>
                </div>
                <div class="result-item">
                  <span class="label">Source Type:</span>
                  <span>{{ result.input.source_type }}</span>
                </div>
              </div>
            </div>

            @if (result.found_ind === 1) {
              <!-- Translation Result -->
              <div class="result-section">
                <h5>MHA PDS Translation</h5>
                <div class="result-grid">
                  <div class="result-item">
                    <span class="label">Code:</span>
                    <code class="code-value">{{ result.result.code }}</code>
                  </div>
                  <div class="result-item">
                    <span class="label">Label:</span>
                    <span class="label-value">{{ result.result.label }}</span>
                  </div>
                  @if (result.result.code_system) {
                    <div class="result-item full-width">
                      <span class="label">Code System:</span>
                      <a [href]="result.result.code_system" target="_blank" class="link">
                        {{ result.result.code_system }}
                      </a>
                    </div>
                  }
                  @if (result.result.value_set_url) {
                    <div class="result-item full-width">
                      <span class="label">Value Set:</span>
                      <a [href]="result.result.value_set_url" target="_blank" class="link">
                        {{ result.result.value_set_url }}
                      </a>
                    </div>
                  }
                </div>
              </div>

              <!-- Observation Code (for SDOH fields) -->
              @if (result.observation_code?.code) {
                <div class="result-section">
                  <h5>Observation Code (LOINC)</h5>
                  <div class="result-grid">
                    <div class="result-item">
                      <span class="label">Code:</span>
                      <code>{{ result.observation_code?.code }}</code>
                    </div>
                    <div class="result-item">
                      <span class="label">Label:</span>
                      <span>{{ result.observation_code?.label }}</span>
                    </div>
                    <div class="result-item">
                      <span class="label">System:</span>
                      <span>{{ result.observation_code?.code_system }}</span>
                    </div>
                  </div>
                </div>
              }

              <!-- Mapping Used -->
              @if (result.mapping_used?.mapping_index) {
                <div class="result-section">
                  <h5>Mapping Details</h5>
                  <div class="result-grid">
                    <div class="result-item">
                      <span class="label">Mapping Index:</span>
                      <span>{{ result.mapping_used?.mapping_index }}</span>
                    </div>
                    <div class="result-item">
                      <span class="label">Pair Index:</span>
                      <span>{{ result.mapping_used?.pair_index }}</span>
                    </div>
                    @if (result.mapping_used?.code_table_id) {
                      <div class="result-item">
                        <span class="label">Code Table:</span>
                        <span class="code-table-badge">{{ result.mapping_used?.code_table_id }}</span>
                      </div>
                    }
                  </div>
                </div>
              }
            } @else {
              <!-- Error Message -->
              <div class="result-section error-section">
                <h5>Error</h5>
                <p class="error-message">{{ result.error_message || 'No mapping found for the provided value.' }}</p>
                <p class="error-hint">
                  Try checking the spelling or use one of the suggested values from the mapping pairs.
                </p>
              </div>
            }
          </div>
        </div>
      }

      <!-- Error State -->
      @if (error()) {
        <div class="error-banner">
          <span class="error-icon">!</span>
          <span>{{ error() }}</span>
          <button class="dismiss-btn" (click)="clearError()">x</button>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;212ffbfddc6616db0769100b556755ee5f1d2a6479809ea4957f6c66640d7a5d;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-mapping-tester.ts */\n.section-content {\n  max-width: 1000px;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #856404;\n  font-size: 13px;\n}\n.info-banner .info-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #ffc107;\n  color: #856404;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.test-form {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  align-items: flex-end;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n}\n.form-group.field-select {\n  flex: 1;\n  min-width: 250px;\n}\n.form-group.source-input {\n  flex: 1;\n  min-width: 200px;\n}\n.form-group.type-select {\n  min-width: 160px;\n}\n.form-group.button-group {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  align-items: flex-end;\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\nselect.form-control {\n  cursor: pointer;\n  background-color: white;\n}\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary {\n  background-color: #0078d4;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background-color: #106ebe;\n}\n.btn.btn-primary:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background-color: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #333;\n}\n.btn.btn-secondary:hover {\n  background-color: #e9ecef;\n}\n.spinner-small {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.field-info-panel {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background-color: white;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n}\n.field-info-panel .field-info-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.field-info-panel .field-info-header .field-name {\n  font-weight: 600;\n  font-family: monospace;\n  color: #0078d4;\n}\n.field-info-panel .field-info-header .field-type-badge {\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.field-info-panel .field-info-header .field-type-badge.type-sdoh {\n  background-color: #d4edda;\n  color: #155724;\n}\n.field-info-panel .field-info-header .field-type-badge.type-coded {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.field-info-panel .field-info-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  font-size: 13px;\n}\n.field-info-panel .field-info-details .detail-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.field-info-panel .field-info-details .detail-item .label {\n  color: #6c757d;\n}\n.field-info-panel .field-info-details .detail-item .value {\n  font-weight: 500;\n}\n.field-info-panel .field-info-details .detail-item.warning {\n  color: #856404;\n  font-style: italic;\n}\n.field-info-panel .field-info-details .detail-item.suggestions .suggestion-chip {\n  padding: 2px 8px;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n  margin-left: 4px;\n}\n.field-info-panel .field-info-details .detail-item.suggestions .suggestion-chip:hover {\n  background-color: #dee2e6;\n}\n.result-panel {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.result-panel.found {\n  border-color: #28a745;\n}\n.result-panel.found .result-header {\n  background-color: #d4edda;\n  color: #155724;\n}\n.result-panel.not-found {\n  border-color: #dc3545;\n}\n.result-panel.not-found .result-header {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.result-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n}\n.result-header .result-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n}\n.result-header .result-icon.success {\n  background-color: #28a745;\n  color: white;\n}\n.result-header .result-icon.error {\n  background-color: #dc3545;\n  color: white;\n}\n.result-header .result-title {\n  font-weight: 600;\n  font-size: 14px;\n}\n.result-body {\n  padding: 16px;\n  background-color: white;\n}\n.result-section {\n  margin-bottom: 16px;\n}\n.result-section:last-child {\n  margin-bottom: 0;\n}\n.result-section h5 {\n  margin: 0 0 10px 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.result-section.error-section .error-message {\n  color: #721c24;\n  margin: 0 0 8px 0;\n}\n.result-section.error-section .error-hint {\n  color: #6c757d;\n  font-size: 13px;\n  margin: 0;\n}\n.result-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.result-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.result-item .label {\n  font-size: 11px;\n  color: #6c757d;\n}\n.result-item code {\n  padding: 4px 8px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  font-family: monospace;\n  font-size: 13px;\n}\n.result-item code.code-value {\n  color: #d73a49;\n  font-weight: 500;\n}\n.result-item .label-value {\n  font-weight: 500;\n}\n.result-item .link {\n  color: #0078d4;\n  font-size: 12px;\n  word-break: break-all;\n}\n.result-item .link:hover {\n  text-decoration: underline;\n}\n.result-item .code-table-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  background-color: #e9ecef;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.result-item.full-width {\n  grid-column: 1/-1;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 6px;\n  color: #721c24;\n  font-size: 13px;\n  margin-top: 20px;\n}\n.error-banner .error-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #dc3545;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.error-banner .dismiss-btn {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: #721c24;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 4px;\n}\n.error-banner .dismiss-btn:hover {\n  color: #491217;\n}\n"] }]
  }], null, { mappings: [{
    type: Input
  }], codeTableMappings: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionMappingTester, { className: "ConfigSectionMappingTester", filePath: "src/app/config-editor/sections/config-section-mapping-tester.ts", lineNumber: 717 });
})();

// src/app/config-editor/services/mirth-validator.service.ts
var MirthValidatorService = class _MirthValidatorService {
  // Error codes from 01 - MHA PDS Data Poller.xml errorLookup
  errorLookup = /* @__PURE__ */ new Map([
    // DE01 - Client Name
    ["DE01_001_001", "First Name Not Found"],
    ["DE01_002_001", "Middle Name Not Found"],
    ["DE01_003_001", "Last Name Not Found"],
    // DE02 - Client Identifiers
    ["DE02_001_001", "Health Card Number Not Found"],
    ["DE02_002_001", "Health Card Province Not Found"],
    ["DE02_003_001", "Date of Birth Not Found"],
    ["DE02_004_001", "Client MRN Not Found"],
    // DE03 - Client Address
    ["DE03_001_001", "Street Address Not Found"],
    ["DE03_002_001", "City Not Found"],
    ["DE03_003_001", "Province CODE Not Found"],
    ["DE03_003_002", "Province LABEL Not Found"],
    ["DE03_003_003", "Province CODE_SYSTEM Not Found"],
    ["DE03_004_001", "Postal Code Not Found"],
    ["DE03_005_001", "Country CODE Not Found"],
    // DE04.001-006 - Basic Demographics & Language
    ["DE04_001_001", "SDOH Effective Date Not Found"],
    ["DE04_002_001", "Ethnicity CODE Not Found"],
    ["DE04_002_002", "Ethnicity LABEL Not Found"],
    ["DE04_002_003", "Ethnicity CODE_SYSTEM Not Found"],
    ["DE04_003_001", "Religion CODE Not Found"],
    ["DE04_003_002", "Religion LABEL Not Found"],
    ["DE04_003_003", "Religion CODE_SYSTEM Not Found"],
    ["DE04_004_001", "Mother Tongue CODE Not Found"],
    ["DE04_004_002", "Mother Tongue LABEL Not Found"],
    ["DE04_004_003", "Mother Tongue CODE_SYSTEM Not Found"],
    ["DE04_005_001", "Preferred Service Language CODE Not Found"],
    ["DE04_005_002", "Preferred Service Language LABEL Not Found"],
    ["DE04_005_003", "Preferred Service Language CODE_SYSTEM Not Found"],
    ["DE04_006_001", "Preferred Official Language CODE Not Found"],
    ["DE04_006_002", "Preferred Official Language LABEL Not Found"],
    ["DE04_006_003", "Preferred Official Language CODE_SYSTEM Not Found"],
    // DE04.007 - Gender Identity (SDOH)
    ["DE04_007_001", "Gender Identity CODE Not Found"],
    ["DE04_007_002", "Gender Identity LABEL Not Found"],
    ["DE04_007_003", "Gender Identity CODE_SYSTEM Not Found"],
    ["DE04_007_OBS_001", "Gender Identity Observation CODE Not Found"],
    // DE04.008 - Sexual Orientation (SDOH)
    ["DE04_008_001", "Sexual Orientation CODE Not Found"],
    ["DE04_008_002", "Sexual Orientation LABEL Not Found"],
    ["DE04_008_003", "Sexual Orientation CODE_SYSTEM Not Found"],
    ["DE04_008_OBS_001", "Sexual Orientation Observation CODE Not Found"],
    // DE04.012 - Citizenship Status (SDOH)
    ["DE04_012_001", "Citizenship Status CODE Not Found"],
    ["DE04_012_002", "Citizenship Status LABEL Not Found"],
    ["DE04_012_003", "Citizenship Status CODE_SYSTEM Not Found"],
    ["DE04_012_OBS_001", "Citizenship Status Observation CODE Not Found"],
    // DE04.013 - Highest Education Level (SDOH)
    ["DE04_013_001", "Highest Education Level CODE Not Found"],
    ["DE04_013_002", "Highest Education Level LABEL Not Found"],
    ["DE04_013_003", "Highest Education Level CODE_SYSTEM Not Found"],
    ["DE04_013_OBS_001", "Highest Education Level Observation CODE Not Found"],
    // DE04.014 - Employment Status (SDOH)
    ["DE04_014_001", "Employment Status CODE Not Found"],
    ["DE04_014_002", "Employment Status LABEL Not Found"],
    ["DE04_014_003", "Employment Status CODE_SYSTEM Not Found"],
    ["DE04_014_OBS_001", "Employment Status Observation CODE Not Found"],
    // DE04.015 - Personal Income Source (SDOH)
    ["DE04_015_001", "Personal Income Source CODE Not Found"],
    ["DE04_015_002", "Personal Income Source LABEL Not Found"],
    ["DE04_015_003", "Personal Income Source CODE_SYSTEM Not Found"],
    ["DE04_015_OBS_001", "Personal Income Source Observation CODE Not Found"],
    // DE04.017 - Housing Status (SDOH)
    ["DE04_017_001", "Housing Status CODE Not Found"],
    ["DE04_017_002", "Housing Status LABEL Not Found"],
    ["DE04_017_003", "Housing Status CODE_SYSTEM Not Found"],
    ["DE04_017_OBS_001", "Housing Status Observation CODE Not Found"],
    // DE04.018 - Total Household Income (SDOH)
    ["DE04_018_001", "Total Household Income CODE Not Found"],
    ["DE04_018_002", "Total Household Income LABEL Not Found"],
    ["DE04_018_003", "Total Household Income CODE_SYSTEM Not Found"],
    ["DE04_018_OBS_001", "Total Household Income Observation CODE Not Found"],
    // DE04.019 - Number of People Income Supports (SDOH)
    ["DE04_019_001", "Number of People Income Supports CODE Not Found"],
    ["DE04_019_002", "Number of People Income Supports LABEL Not Found"],
    ["DE04_019_003", "Number of People Income Supports CODE_SYSTEM Not Found"],
    ["DE04_019_OBS_001", "Number of People Income Supports Observation CODE Not Found"],
    // DE04.020 - Legal Status (SDOH)
    ["DE04_020_001", "Legal Status CODE Not Found"],
    ["DE04_020_002", "Legal Status LABEL Not Found"],
    ["DE04_020_003", "Legal Status CODE_SYSTEM Not Found"],
    ["DE04_020_OBS_001", "Legal Status Observation CODE Not Found"],
    // DE04.021 - Pre-existing Conditions (SDOH)
    ["DE04_021_001", "Pre-existing Conditions CODE Not Found"],
    ["DE04_021_002", "Pre-existing Conditions LABEL Not Found"],
    ["DE04_021_003", "Pre-existing Conditions CODE_SYSTEM Not Found"],
    ["DE04_021_OBS_001", "Pre-existing Conditions Observation CODE Not Found"],
    // DE04.009 - Year Arrived in Canada
    ["DE04_009_001", "Year Arrived in Canada Not Found"],
    // DE04.010 - Born in Canada (SDOH)
    ["DE04_010_001", "Born in Canada CODE Not Found"],
    ["DE04_010_002", "Born in Canada LABEL Not Found"],
    ["DE04_010_003", "Born in Canada CODE_SYSTEM Not Found"],
    ["DE04_010_OBS_001", "Born in Canada Observation CODE Not Found"],
    // DE04.016 - Marital Status (SDOH)
    ["DE04_016_001", "Marital Status CODE Not Found"],
    ["DE04_016_002", "Marital Status LABEL Not Found"],
    ["DE04_016_003", "Marital Status CODE_SYSTEM Not Found"],
    ["DE04_016_OBS_001", "Marital Status Observation CODE Not Found"],
    // DE05 - Referral
    ["DE05_001_001", "Referral Date Not Found"],
    ["DE05_002_001", "Referral Source CODE Not Found"],
    ["DE05_003_001", "Referral Priority CODE Not Found"],
    // DE06 - Episode
    ["DE06_001_001", "Admission Date Not Found"],
    ["DE06_002_001", "Discharge Date Not Found"],
    ["DE06_003_001", "Discharge Disposition CODE Not Found"],
    // DE07 - Organization
    ["DE07_001_001", "Organization ID Not Found"],
    // DE08 - Site
    ["DE08_001_001", "Functional Centre CODE Not Found"],
    ["DE08_001_002", "Functional Centre LABEL Not Found"],
    // DE09 - Program
    ["DE09_001_001", "Program Name Not Found"],
    // DE10 - Health Service Event (per MHA PDS 1.2 Logical Data Dictionary)
    ["DE10_001_001", "Event ID Not Found"],
    ["DE10_002_001", "Service Modality CODE Not Found"],
    ["DE10_002_002", "Service Modality LABEL Not Found"],
    ["DE10_003_001", "Service Modality Type CODE Not Found"],
    ["DE10_003_002", "Service Modality Type LABEL Not Found"],
    ["DE10_004_001", "Encounter Date Not Found"],
    ["DE10_005_001", "Health Service Group ID Not Found"],
    ["DE10_006_001", "Direct Service Minutes Not Found"],
    ["DE10_007_001", "Indirect Service Minutes Not Found"],
    ["DE10_008_001", "Encounter Status CODE Not Found"],
    ["DE10_008_002", "Encounter Status LABEL Not Found"]
  ]);
  // Valid province codes
  validProvinceCodes = [
    "ON",
    "BC",
    "AB",
    "SK",
    "MB",
    "QC",
    "NB",
    "NS",
    "PE",
    "NL",
    "YT",
    "NT",
    "NU"
  ];
  /**
   * Get error message for a specific code
   */
  getErrorMessage(errorCode) {
    return this.errorLookup.get(errorCode) || `Unknown error: ${errorCode}`;
  }
  /**
   * Validate a coded field (has CODE, LABEL, CODE_SYSTEM)
   */
  validateCodedField(fieldCode, code, label, codeSystem, valueSetUrl) {
    const errors = [];
    const baseCode = fieldCode.replace(".", "_");
    if (!code || code.trim() === "") {
      errors.push({
        error_code: `${baseCode}_001`,
        error_message: this.getErrorMessage(`${baseCode}_001`),
        mirth_function: "validateCodedField",
        severity: "error"
      });
    }
    if (!label || label.trim() === "") {
      errors.push({
        error_code: `${baseCode}_002`,
        error_message: this.getErrorMessage(`${baseCode}_002`),
        mirth_function: "validateCodedField",
        severity: "error"
      });
    }
    if (!codeSystem || codeSystem.trim() === "") {
      errors.push({
        error_code: `${baseCode}_003`,
        error_message: this.getErrorMessage(`${baseCode}_003`),
        mirth_function: "validateCodedField",
        severity: "error"
      });
    }
    return errors;
  }
  /**
   * Validate SDOH Observation (has observation_code + valueCodeableConcept)
   */
  validateSdohObservation(fieldCode, observationCode, observationLabel, observationCodeSystem, valueCode, valueLabel, valueCodeSystem) {
    const errors = [];
    const baseCode = fieldCode.replace(".", "_");
    if (!observationCode || observationCode.trim() === "") {
      errors.push({
        error_code: `${baseCode}_OBS_001`,
        error_message: this.getErrorMessage(`${baseCode}_OBS_001`),
        mirth_function: "createObservationProfile",
        severity: "error"
      });
    }
    errors.push(...this.validateCodedField(fieldCode, valueCode, valueLabel, valueCodeSystem));
    return errors;
  }
  /**
   * Validate required free-text field
   */
  validateRequiredField(fieldCode, value) {
    if (!value || value.trim() === "") {
      const baseCode = fieldCode.replace(".", "_");
      return [{
        error_code: `${baseCode}_001`,
        error_message: this.getErrorMessage(`${baseCode}_001`),
        mirth_function: "validateRequiredField",
        severity: "error"
      }];
    }
    return [];
  }
  /**
   * Validate province code (must be 2-letter)
   */
  validateProvinceCode(code) {
    if (code && !this.validProvinceCodes.includes(code.toUpperCase())) {
      return [{
        error_code: "DE03_003_001",
        error_message: `Invalid province code: ${code}. Expected 2-letter code.`,
        mirth_function: "validateProvinceCode",
        severity: "error"
      }];
    }
    return [];
  }
  /**
   * Validate date format (expected: YYYY-MM-DD or CCL datetime format)
   */
  validateDateField(fieldCode, value) {
    if (!value || value.trim() === "") {
      return [];
    }
    const isoPattern = /^\d{4}-\d{2}-\d{2}/;
    const cclPattern = /^\d{4}\/\d{2}\/\d{2}/;
    if (!isoPattern.test(value) && !cclPattern.test(value)) {
      const baseCode = fieldCode.replace(".", "_");
      return [{
        error_code: `${baseCode}_FMT`,
        error_message: `Invalid date format: ${value}`,
        mirth_function: "validateDateField",
        severity: "warning"
      }];
    }
    return [];
  }
  /**
   * Validate postal code format (Canadian: A1A 1A1)
   */
  validatePostalCode(postalCode) {
    if (!postalCode) {
      return [];
    }
    const canadianPattern = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
    if (!canadianPattern.test(postalCode)) {
      return [{
        error_code: "DE03_004_FMT",
        error_message: `Invalid postal code format: ${postalCode}. Expected: A1A 1A1`,
        mirth_function: "validatePostalCode",
        severity: "warning"
      }];
    }
    return [];
  }
  /**
   * Validate health card number format (Ontario: 10 digits)
   */
  validateHealthCardNumber(hcn, province) {
    if (!hcn) {
      return [];
    }
    if (province?.toUpperCase() === "ON") {
      const ontarioPattern = /^\d{10}$/;
      if (!ontarioPattern.test(hcn.replace(/\s/g, ""))) {
        return [{
          error_code: "DE02_001_FMT",
          error_message: `Invalid Ontario HCN format: ${hcn}. Expected: 10 digits`,
          mirth_function: "validateHealthCardNumber",
          severity: "warning"
        }];
      }
    }
    return [];
  }
  static \u0275fac = function MirthValidatorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MirthValidatorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MirthValidatorService, factory: _MirthValidatorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MirthValidatorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/config-editor/services/data-analyzer.service.ts
var DataAnalyzerService = class _DataAnalyzerService {
  mirthValidator = inject(MirthValidatorService);
  // State
  _analysisResults = signal([], ...ngDevMode ? [{ debugName: "_analysisResults" }] : []);
  _summary = signal(null, ...ngDevMode ? [{ debugName: "_summary" }] : []);
  _analyzing = signal(false, ...ngDevMode ? [{ debugName: "_analyzing" }] : []);
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : []);
  // Public accessors
  analysisResults = this._analysisResults.asReadonly();
  summary = this._summary.asReadonly();
  analyzing = this._analyzing.asReadonly();
  error = this._error.asReadonly();
  // Computed
  passCount = computed(() => this._analysisResults().filter((r) => r.would_pass_mirth).length, ...ngDevMode ? [{ debugName: "passCount" }] : []);
  failCount = computed(() => this._analysisResults().filter((r) => !r.would_pass_mirth).length, ...ngDevMode ? [{ debugName: "failCount" }] : []);
  // Field definitions for analysis
  clientFieldDefinitions = [
    // DE01 - Client Name
    { field_code: "DE01.001", field_name: "First Name", source_column: "first_name", required: true, record_type: "client" },
    { field_code: "DE01.002", field_name: "Middle Name", source_column: "middle_name", record_type: "client" },
    { field_code: "DE01.003", field_name: "Last Name", source_column: "last_name", required: true, record_type: "client" },
    // DE02 - Client Identifiers
    { field_code: "DE02.001", field_name: "Health Card Number", source_column: "health_card_number", record_type: "client" },
    { field_code: "DE02.002", field_name: "Health Card Province", source_column: "health_card_province", coded: true, code_table: "CT-019", record_type: "client" },
    { field_code: "DE02.003", field_name: "Date of Birth", source_column: "birth_dt_tm", required: true, record_type: "client" },
    // DE03 - Client Address
    { field_code: "DE03.001", field_name: "Street Address", source_column: "street_address", record_type: "client" },
    { field_code: "DE03.002", field_name: "City", source_column: "city", record_type: "client" },
    { field_code: "DE03.003", field_name: "Province", source_column: "province", coded: true, code_table: "CT-019", record_type: "client" },
    { field_code: "DE03.004", field_name: "Postal Code", source_column: "postal_code", record_type: "client" },
    { field_code: "DE03.005", field_name: "Country", source_column: "country", coded: true, code_table: "CT-020", record_type: "client" },
    // DE04 - Demographics & Language
    { field_code: "DE04.001", field_name: "SDOH Effective Date", source_column: "sdoh_effective_date", record_type: "client" },
    { field_code: "DE04.002", field_name: "Ethnicity", source_column: "ethnicity", coded: true, record_type: "client" },
    { field_code: "DE04.003", field_name: "Religion / Spiritual", source_column: "religion", coded: true, record_type: "client" },
    { field_code: "DE04.004", field_name: "Mother Tongue", source_column: "first_language", coded: true, code_table: "CT-021", record_type: "client" },
    { field_code: "DE04.005", field_name: "Preferred Service Language", source_column: "service_language", coded: true, code_table: "CT-021", record_type: "client" },
    { field_code: "DE04.006", field_name: "Preferred Official Language", source_column: "official_language", coded: true, record_type: "client" },
    // DE04 - SDOH Fields
    { field_code: "DE04.007", field_name: "Gender Identity", source_column: "gender_identity", sdoh: true, code_table: "CT-011", record_type: "client" },
    { field_code: "DE04.008", field_name: "Sexual Orientation", source_column: "sexual_orientation", sdoh: true, code_table: "CT-027", record_type: "client" },
    { field_code: "DE04.009", field_name: "Year Arrived in Canada", source_column: "year_arrived_canada", record_type: "client" },
    { field_code: "DE04.010", field_name: "Born in Canada", source_column: "born_in_canada", coded: true, record_type: "client" },
    { field_code: "DE04.012", field_name: "Citizenship Status", source_column: "citizenship_status", sdoh: true, code_table: "CT-012", record_type: "client" },
    { field_code: "DE04.013", field_name: "Highest Education Level", source_column: "education_level", sdoh: true, code_table: "CT-013", record_type: "client" },
    { field_code: "DE04.014", field_name: "Employment Status", source_column: "employment_status", sdoh: true, code_table: "CT-014", record_type: "client" },
    { field_code: "DE04.015", field_name: "Personal Income Source", source_column: "income_source", sdoh: true, code_table: "CT-015", record_type: "client" },
    { field_code: "DE04.016", field_name: "Marital Status", source_column: "marital_status", coded: true, record_type: "client" },
    { field_code: "DE04.017", field_name: "Housing Status", source_column: "housing_status", sdoh: true, code_table: "CT-017", record_type: "client" },
    { field_code: "DE04.018", field_name: "Total Household Income", source_column: "household_income", sdoh: true, code_table: "CT-018", record_type: "client" },
    { field_code: "DE04.019", field_name: "Number of People Income Supports", source_column: "household_members", sdoh: true, code_table: "CT-018", record_type: "client" },
    { field_code: "DE04.020", field_name: "Legal Status", source_column: "legal_status", sdoh: true, code_table: "CT-028", record_type: "client" },
    { field_code: "DE04.021", field_name: "Pre-existing Conditions", source_column: "pre_existing_condition", coded: true, record_type: "client" }
  ];
  episodeFieldDefinitions = [
    // DE05 - Referral
    { field_code: "DE05.001", field_name: "Referral Date", source_column: "referral_date", record_type: "episode" },
    { field_code: "DE05.002", field_name: "Referral Source", source_column: "referral_source", coded: true, code_table: "CT-022", record_type: "episode" },
    { field_code: "DE05.003", field_name: "Referral Priority", source_column: "referral_priority", coded: true, code_table: "CT-023", record_type: "episode" },
    // DE06 - Episode
    { field_code: "DE06.001", field_name: "Admission Date", source_column: "admission_date", required: true, record_type: "episode" },
    { field_code: "DE06.002", field_name: "Discharge Date", source_column: "discharge_date", record_type: "episode" },
    { field_code: "DE06.003", field_name: "Discharge Disposition", source_column: "discharge_disposition", coded: true, code_table: "CT-024", record_type: "episode" },
    // DE08 - Site
    { field_code: "DE08.001", field_name: "Functional Centre", source_column: "functional_centre", coded: true, code_table: "CT-008", record_type: "episode" },
    // DE09 - Program
    { field_code: "DE09.001", field_name: "Program Name", source_column: "program_name", required: true, record_type: "episode" }
  ];
  serviceFieldDefinitions = [
    // DE10 - Health Service Event (per MHA PDS 1.2 Logical Data Dictionary)
    { field_code: "DE10.001", field_name: "Event ID", source_column: "event_id", required: true, record_type: "service" },
    { field_code: "DE10.002", field_name: "Service Modality", source_column: "service_modality", coded: true, code_table: "CT-024", record_type: "service" },
    { field_code: "DE10.003", field_name: "Service Modality Type", source_column: "service_modality_type", coded: true, code_table: "CT-025", record_type: "service" },
    { field_code: "DE10.004", field_name: "Encounter Date", source_column: "encounter_date", required: true, record_type: "service" },
    { field_code: "DE10.005", field_name: "Health Service Group ID", source_column: "group_service_id", record_type: "service" },
    { field_code: "DE10.006", field_name: "Direct Service Minutes", source_column: "direct_minutes", record_type: "service" },
    { field_code: "DE10.007", field_name: "Indirect Service Minutes", source_column: "indirect_minutes", record_type: "service" },
    { field_code: "DE10.008", field_name: "Encounter Status", source_column: "encounter_status", coded: true, code_table: "CT-030", required: true, record_type: "service" }
  ];
  /**
   * Analyze database dump against configuration
   */
  analyzeData(databaseDump, config) {
    this._analyzing.set(true);
    this._error.set(null);
    try {
      const results = [];
      for (const client of databaseDump.clients) {
        const episode = databaseDump.episodes.find((e) => e.person_id === client.person_id);
        const services = databaseDump.services.filter((s) => s.mha_pds_episode_id === episode?.mha_pds_episode_id);
        const recordAnalysis = this.analyzeRecord(client, episode, services, config);
        results.push(recordAnalysis);
      }
      this._analysisResults.set(results);
      this._summary.set(this.generateSummary(results));
    } catch (err) {
      this._error.set(err.message || "Analysis failed");
    } finally {
      this._analyzing.set(false);
    }
  }
  /**
   * Clear analysis results
   */
  clearResults() {
    this._analysisResults.set([]);
    this._summary.set(null);
    this._error.set(null);
  }
  /**
   * Analyze a single record (client + episode + services)
   */
  analyzeRecord(client, episode, services, config) {
    const clientFields = this.analyzeClientFields(client, config);
    const episodeFields = episode ? this.analyzeEpisodeFields(episode, config) : [];
    const serviceFields = services.flatMap((s) => this.analyzeServiceFields(s, config));
    const allFields = [...clientFields, ...episodeFields, ...serviceFields];
    const blockingErrors = allFields.flatMap((f) => f.validation_errors).filter((e) => e.severity === "error");
    return {
      record_id: client.person_id?.toString() || "unknown",
      person_name: `${client.first_name || ""} ${client.last_name || ""}`.trim(),
      episode_identifier: episode?.episode_identifier || "",
      total_fields: allFields.length,
      fields_passed: allFields.filter((f) => f.validation_status === "pass").length,
      fields_failed: allFields.filter((f) => f.validation_status === "fail").length,
      fields_warning: allFields.filter((f) => f.validation_status === "warning").length,
      fields_skipped: allFields.filter((f) => f.validation_status === "skip").length,
      client_fields: clientFields,
      episode_fields: episodeFields,
      service_fields: serviceFields,
      would_pass_mirth: blockingErrors.length === 0,
      blocking_errors: blockingErrors
    };
  }
  /**
   * Analyze client fields (DE01-DE04)
   */
  analyzeClientFields(client, config) {
    return this.clientFieldDefinitions.map((def) => this.analyzeField(def, client[def.source_column], config));
  }
  /**
   * Analyze episode fields (DE05-DE06, DE09)
   */
  analyzeEpisodeFields(episode, config) {
    return this.episodeFieldDefinitions.map((def) => this.analyzeField(def, episode[def.source_column], config));
  }
  /**
   * Analyze service fields (DE10)
   */
  analyzeServiceFields(service, config) {
    return this.serviceFieldDefinitions.map((def) => this.analyzeField(def, service[def.source_column], config));
  }
  /**
   * Analyze a single field
   */
  analyzeField(def, sourceValue, config) {
    const analysis = {
      field_code: def.field_code,
      field_name: def.field_name,
      source_column: def.source_column,
      source_value: sourceValue?.toString() || "",
      mapping_found: false,
      target_code: "",
      target_label: "",
      target_code_system: "",
      target_value_set_url: "",
      validation_status: "skip",
      validation_errors: []
    };
    if (!sourceValue && !def.required) {
      analysis.validation_status = "skip";
      return analysis;
    }
    if (def.required && !sourceValue) {
      analysis.validation_status = "fail";
      analysis.validation_errors = this.mirthValidator.validateRequiredField(def.field_code, sourceValue);
      return analysis;
    }
    if (def.coded || def.sdoh) {
      const mapping = this.findMapping(def.field_code, config);
      if (mapping) {
        analysis.mapping_index = mapping.index;
        const pair = this.findPair(sourceValue, mapping.mapping);
        if (pair) {
          analysis.mapping_found = true;
          analysis.pair_index = pair.index;
          analysis.code_table_id = def.code_table;
          if (def.code_table && pair.pair.PDS_VALUE) {
            const codeMapping = this.findCodeTableMapping(def.code_table, pair.pair.PDS_VALUE, config);
            if (codeMapping) {
              analysis.target_code = codeMapping.CODE;
              analysis.target_label = codeMapping.LABEL;
              analysis.target_code_system = codeMapping.CODE_SYSTEM;
              analysis.target_value_set_url = codeMapping.VALUE_SET_URL || "";
            } else {
              analysis.target_code = pair.pair.PDS_VALUE;
              analysis.target_label = pair.pair.DISPLAY || "";
            }
          }
        } else {
          if (def.code_table) {
            const directLookup = this.findCodeTableMappingByLabel(def.code_table, sourceValue, config);
            if (directLookup) {
              analysis.mapping_found = true;
              analysis.code_table_id = def.code_table;
              analysis.target_code = directLookup.CODE;
              analysis.target_label = directLookup.LABEL;
              analysis.target_code_system = directLookup.CODE_SYSTEM;
              analysis.target_value_set_url = directLookup.VALUE_SET_URL || "";
            }
          }
        }
        if (def.sdoh) {
          const obsCode = this.getObservationCode(def.field_code, config);
          if (obsCode) {
            analysis.observation_code = obsCode.code;
            analysis.observation_label = obsCode.label;
            analysis.observation_code_system = obsCode.code_system;
          }
        }
      }
      if (def.sdoh) {
        analysis.validation_errors = this.mirthValidator.validateSdohObservation(def.field_code, analysis.observation_code || "", analysis.observation_label || "", analysis.observation_code_system || "", analysis.target_code, analysis.target_label, analysis.target_code_system);
      } else if (def.coded && analysis.source_value) {
        analysis.validation_errors = this.mirthValidator.validateCodedField(def.field_code, analysis.target_code, analysis.target_label, analysis.target_code_system);
      }
      analysis.validation_status = analysis.validation_errors.length === 0 ? analysis.mapping_found ? "pass" : "warning" : "fail";
    } else {
      if (def.required && sourceValue) {
        analysis.validation_status = "pass";
        analysis.target_code = sourceValue;
      } else if (sourceValue) {
        analysis.validation_status = "pass";
        analysis.target_code = sourceValue;
      }
    }
    return analysis;
  }
  /**
   * Find mapping by field code
   */
  findMapping(fieldCode, config) {
    const mappings = config.MAPPINGS || [];
    const index = mappings.findIndex((m) => m.MHA_PDS_FIELD_NAME === fieldCode);
    if (index >= 0) {
      return { mapping: mappings[index], index };
    }
    return void 0;
  }
  /**
   * Find matching pair in mapping
   */
  findPair(sourceValue, mapping) {
    const pairs = mapping.PAIRS || [];
    const normalizedSource = (sourceValue || "").toString().trim().toLowerCase();
    const index = pairs.findIndex((p) => {
      const keyRef = (p.KEY_REF || "").toString().trim().toLowerCase();
      return keyRef === normalizedSource;
    });
    if (index >= 0) {
      return { pair: pairs[index], index };
    }
    return void 0;
  }
  /**
   * Find code table mapping by PDS value code
   */
  findCodeTableMapping(codeTableId, pdsValue, config) {
    const mappings = config.CODE_TABLE_MAPPINGS || [];
    const normalizedValue = (pdsValue || "").toString().trim().toLowerCase();
    return mappings.find((m) => m.CODE_TABLE_ID === codeTableId && (m.CODE || "").toString().trim().toLowerCase() === normalizedValue);
  }
  /**
   * Find code table mapping by label
   */
  findCodeTableMappingByLabel(codeTableId, label, config) {
    const mappings = config.CODE_TABLE_MAPPINGS || [];
    const normalizedLabel = (label || "").toString().trim().toLowerCase();
    return mappings.find((m) => m.CODE_TABLE_ID === codeTableId && (m.LABEL || "").toString().trim().toLowerCase() === normalizedLabel);
  }
  /**
   * Get observation code for SDOH field
   */
  getObservationCode(fieldCode, config) {
    const fhirCodes = config.FHIR_RESOURCE_CODES || [];
    const sdohCode = fhirCodes.find((c) => c.FIELD_NAME === fieldCode);
    if (sdohCode) {
      return {
        code: sdohCode.CODE,
        label: sdohCode.LABEL || "",
        code_system: sdohCode.CODE_SYSTEM || "http://loinc.org"
      };
    }
    const loincCodes = {
      "DE04.007": { code: "76691-5", label: "Gender identity" },
      "DE04.008": { code: "76690-7", label: "Sexual orientation" },
      "DE04.012": { code: "98061-6", label: "Country of citizenship" },
      "DE04.013": { code: "82589-3", label: "Highest level of education" },
      "DE04.014": { code: "67875-5", label: "Employment status - current" },
      "DE04.015": { code: "97027-7", label: "Household income source" },
      "DE04.017": { code: "71802-3", label: "Housing status" },
      "DE04.018": { code: "63058-2", label: "Total combined family income" },
      "DE04.019": { code: "63058-2", label: "Total combined family income" },
      "DE04.020": { code: "98067-3", label: "Legal status" }
    };
    const loinc = loincCodes[fieldCode];
    if (loinc) {
      return {
        code: loinc.code,
        label: loinc.label,
        code_system: "http://loinc.org"
      };
    }
    return void 0;
  }
  /**
   * Generate summary from analysis results
   */
  generateSummary(results) {
    const fieldIssues = /* @__PURE__ */ new Map();
    const missingMappings = /* @__PURE__ */ new Map();
    for (const result of results) {
      const allFields = [
        ...result.client_fields,
        ...result.episode_fields,
        ...result.service_fields
      ];
      for (const field of allFields) {
        if (!fieldIssues.has(field.field_code)) {
          fieldIssues.set(field.field_code, {
            field_name: field.field_name,
            total: 0,
            pass: 0,
            fail: 0,
            errors: /* @__PURE__ */ new Set()
          });
        }
        const issue = fieldIssues.get(field.field_code);
        issue.total++;
        if (field.validation_status === "pass")
          issue.pass++;
        if (field.validation_status === "fail")
          issue.fail++;
        field.validation_errors.forEach((e) => issue.errors.add(e.error_code));
        if (!field.mapping_found && field.source_value) {
          if (!missingMappings.has(field.field_code)) {
            missingMappings.set(field.field_code, {
              unmapped_values: /* @__PURE__ */ new Set(),
              count: 0
            });
          }
          const missing = missingMappings.get(field.field_code);
          missing.unmapped_values.add(field.source_value);
          missing.count++;
        }
      }
    }
    return {
      total_records: results.length,
      records_would_pass: results.filter((r) => r.would_pass_mirth).length,
      records_would_fail: results.filter((r) => !r.would_pass_mirth).length,
      fields_with_issues: Array.from(fieldIssues.entries()).filter(([_, v]) => v.fail > 0).map(([code, v]) => ({
        field_code: code,
        field_name: v.field_name,
        total_occurrences: v.total,
        pass_count: v.pass,
        fail_count: v.fail,
        common_errors: Array.from(v.errors)
      })),
      missing_mappings: Array.from(missingMappings.entries()).map(([code, v]) => ({
        field_code: code,
        unmapped_values: Array.from(v.unmapped_values),
        occurrence_count: v.count
      }))
    };
  }
  static \u0275fac = function DataAnalyzerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataAnalyzerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataAnalyzerService, factory: _DataAnalyzerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataAnalyzerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/config-editor/sections/config-section-data-analyzer.ts
var _forTrack09 = ($index, $item) => $item.record_id;
var _forTrack17 = ($index, $item) => $item.field_code;
var _forTrack22 = ($index, $item) => $item.error_code;
function ConfigSectionDataAnalyzer_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" Loaded ", ctx_r2.clientCount(), " clients, ", ctx_r2.episodeCount(), " episodes, ", ctx_r2.serviceCount(), " services ");
  }
}
function ConfigSectionDataAnalyzer_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
    \u0275\u0275text(1, " Analyzing... ");
  }
}
function ConfigSectionDataAnalyzer_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Run Analysis ");
  }
}
function ConfigSectionDataAnalyzer_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearResults());
    });
    \u0275\u0275text(1, " Clear Results ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportResults());
    });
    \u0275\u0275text(3, " Export Results ");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionDataAnalyzer_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 18);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearError());
    });
    \u0275\u0275text(6, "x");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_For_16_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const val_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(val_r6);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_For_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const missing_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", missing_r7.unmapped_values.length - 3, " more");
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275repeaterCreate(5, ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_For_16_For_6_Template, 2, 1, "span", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(7, ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_For_16_Conditional_7_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const missing_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(missing_r7.field_code);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(missing_r7.unmapped_values.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(missing_r7.unmapped_values.length > 3 ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(missing_r7.occurrence_count);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h4")(2, "span", 31);
    \u0275\u0275text(3, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "table", 32)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Unmapped Values");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Occurrences");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_For_16_Template, 10, 3, "tr", null, _forTrack17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Missing Mappings (", ctx_r2.summary().missing_mappings.length, " fields) ");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r2.summary().missing_mappings);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_For_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", record_r9.fields_failed, " fail");
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_For_23_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", record_r9.fields_warning, " warn");
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_27_For_23_Template_div_click_0_listener() {
      const record_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectRecord(record_r9));
    });
    \u0275\u0275elementStart(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37)(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ConfigSectionDataAnalyzer_Conditional_27_For_23_Conditional_11_Template, 2, 1, "span", 42);
    \u0275\u0275conditionalCreate(12, ConfigSectionDataAnalyzer_Conditional_27_For_23_Conditional_12_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const record_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pass", record_r9.would_pass_mirth)("fail", !record_r9.would_pass_mirth)("selected", ((tmp_14_0 = ctx_r2.selectedRecord()) == null ? null : tmp_14_0.record_id) === record_r9.record_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r9.would_pass_mirth ? "OK" : "X");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(record_r9.person_name || "Unknown");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", record_r9.record_id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", record_r9.fields_passed, " pass");
    \u0275\u0275advance();
    \u0275\u0275conditional(record_r9.fields_failed > 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(record_r9.fields_warning > 0 ? 12 : -1);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[pair ", field_r11.pair_index, "]");
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55)(1, "span", 61);
    \u0275\u0275text(2, "OK");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_12_Conditional_4_Template, 2, 1, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", field_r11.code_table_id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r11.pair_index !== void 0 ? 4 : -1);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56)(1, "span", 63);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No mapping ");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 65);
    \u0275\u0275text(2, "LABEL:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", field_r11.target_label, " ");
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 64)(2, "span", 65);
    \u0275\u0275text(3, "CODE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_15_Conditional_6_Template, 4, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(field_r11.target_code);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r11.target_label ? 6 : -1);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 67);
    \u0275\u0275text(2, "Obs:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", field_r11.observation_code, " ");
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const err_r12 = ctx.$implicit;
    \u0275\u0275property("title", err_r12.error_message);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", err_r12.error_code, " ");
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275repeaterCreate(1, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_20_For_2_Template, 2, 2, "span", 68, _forTrack22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(field_r11.validation_errors);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "code", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_12_Template, 5, 2, "span", 55)(13, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_13_Template, 4, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275conditionalCreate(15, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_15_Template, 7, 2, "div", 57);
    \u0275\u0275conditionalCreate(16, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_16_Template, 4, 1, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 59);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Conditional_20_Template, 3, 0, "div", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r11 = ctx.$implicit;
    \u0275\u0275classMap("status-row-" + field_r11.validation_status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(field_r11.field_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r11.field_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(field_r11.source_value || "(empty)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r11.source_column);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(field_r11.mapping_found ? 12 : field_r11.source_value ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(field_r11.target_code ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r11.observation_code ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(field_r11.validation_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r11.validation_status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r11.validation_errors.length > 0 ? 20 : -1);
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 44)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSelection());
    });
    \u0275\u0275text(5, "x");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "button", 47);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeTab.set("client"));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 47);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeTab.set("episode"));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 47);
    \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeTab.set("service"));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "table", 49)(15, "thead")(16, "tr")(17, "th");
    \u0275\u0275text(18, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Source (Database)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Mapping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Target (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_For_29_Template, 21, 13, "tr", 50, _forTrack17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRecord().person_name, " - Field Analysis");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "client");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Client (", ctx_r2.selectedRecord().client_fields.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "episode");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Episode (", ctx_r2.selectedRecord().episode_fields.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "service");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Services (", ctx_r2.selectedRecord().service_fields.length, ") ");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.currentTabFields());
  }
}
function ConfigSectionDataAnalyzer_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6, "Total Records");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275text(11, "Would Pass");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25)(13, "div", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275text(16, "Would Fail");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(17, ConfigSectionDataAnalyzer_Conditional_27_Conditional_17_Template, 17, 1, "div", 26);
    \u0275\u0275elementStart(18, "div", 27)(19, "h4");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 28);
    \u0275\u0275repeaterCreate(22, ConfigSectionDataAnalyzer_Conditional_27_For_23_Template, 13, 12, "div", 29, _forTrack09);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, ConfigSectionDataAnalyzer_Conditional_27_Conditional_24_Template, 30, 10, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.summary().total_records);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.summary().records_would_pass);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.summary().records_would_fail);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.summary().missing_mappings.length > 0 ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Records (", ctx_r2.analysisResults().length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.analysisResults());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedRecord() ? 24 : -1);
  }
}
var ConfigSectionDataAnalyzer = class _ConfigSectionDataAnalyzer {
  analyzerService = inject(DataAnalyzerService);
  config = null;
  // Local state
  databaseJson = signal("", ...ngDevMode ? [{ debugName: "databaseJson" }] : []);
  selectedRecord = signal(null, ...ngDevMode ? [{ debugName: "selectedRecord" }] : []);
  activeTab = signal("client", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  // Service state
  analysisResults = this.analyzerService.analysisResults;
  summary = this.analyzerService.summary;
  analyzing = this.analyzerService.analyzing;
  error = this.analyzerService.error;
  /**
   * Extract the data object from various JSON wrapper formats
   * Handles: { clients: [...] }, { mhaPdsExport: { clients: [...] } }, { CLIENTS: [...] }
   */
  extractData(json2) {
    try {
      const data = JSON.parse(json2);
      if (data.mhaPdsExport) {
        return {
          clients: data.mhaPdsExport.clients || [],
          episodes: data.mhaPdsExport.episodes || [],
          services: data.mhaPdsExport.services || []
        };
      }
      if (data.clients || data.episodes || data.services) {
        return {
          clients: data.clients || [],
          episodes: data.episodes || [],
          services: data.services || []
        };
      }
      if (data.CLIENTS || data.EPISODES || data.SERVICES) {
        return {
          clients: data.CLIENTS || [],
          episodes: data.EPISODES || [],
          services: data.SERVICES || []
        };
      }
      return null;
    } catch {
      return null;
    }
  }
  // Computed: parsed database dump stats
  databaseLoaded = computed(() => {
    const data = this.extractData(this.databaseJson());
    return data !== null && (data.clients.length > 0 || data.episodes.length > 0);
  }, ...ngDevMode ? [{ debugName: "databaseLoaded" }] : []);
  clientCount = computed(() => {
    const data = this.extractData(this.databaseJson());
    return data?.clients.length || 0;
  }, ...ngDevMode ? [{ debugName: "clientCount" }] : []);
  episodeCount = computed(() => {
    const data = this.extractData(this.databaseJson());
    return data?.episodes.length || 0;
  }, ...ngDevMode ? [{ debugName: "episodeCount" }] : []);
  serviceCount = computed(() => {
    const data = this.extractData(this.databaseJson());
    return data?.services.length || 0;
  }, ...ngDevMode ? [{ debugName: "serviceCount" }] : []);
  // Computed: can run analysis
  canRunAnalysis = computed(() => {
    return this.databaseLoaded() && this.config !== null;
  }, ...ngDevMode ? [{ debugName: "canRunAnalysis" }] : []);
  // Computed: current tab fields
  currentTabFields = computed(() => {
    const record = this.selectedRecord();
    if (!record)
      return [];
    switch (this.activeTab()) {
      case "client":
        return record.client_fields;
      case "episode":
        return record.episode_fields;
      case "service":
        return record.service_fields;
      default:
        return [];
    }
  }, ...ngDevMode ? [{ debugName: "currentTabFields" }] : []);
  /**
   * Handle database file upload
   */
  onDatabaseFileUpload(event) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.databaseJson.set(reader.result);
      };
      reader.readAsText(file);
    }
  }
  /**
   * Run analysis
   */
  runAnalysis() {
    if (!this.config)
      return;
    const extractedData = this.extractData(this.databaseJson());
    if (!extractedData) {
      return;
    }
    const normalizedData = {
      clients: extractedData.clients,
      episodes: extractedData.episodes,
      services: extractedData.services
    };
    this.analyzerService.analyzeData(normalizedData, this.config);
  }
  /**
   * Clear analysis results
   */
  clearResults() {
    this.analyzerService.clearResults();
    this.selectedRecord.set(null);
  }
  /**
   * Clear error
   */
  clearError() {
  }
  /**
   * Select a record for detail view
   */
  selectRecord(record) {
    this.selectedRecord.set(record);
    this.activeTab.set("client");
  }
  /**
   * Clear selection
   */
  clearSelection() {
    this.selectedRecord.set(null);
  }
  /**
   * Export analysis results as JSON
   */
  exportResults() {
    const results = {
      summary: this.summary(),
      records: this.analysisResults(),
      exported_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mha-pds-analysis-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function ConfigSectionDataAnalyzer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionDataAnalyzer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionDataAnalyzer, selectors: [["app-config-section-data-analyzer"]], inputs: { config: "config" }, decls: 28, vars: 7, consts: [["dbFileInput", ""], [1, "section-content"], [1, "info-banner"], [1, "info-icon"], [1, "info-text"], [1, "input-section"], [1, "input-card"], [1, "input-description"], [1, "file-input-row"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], [1, "btn", "btn-secondary", 3, "click"], [1, "file-status", "success"], ["placeholder", 'Paste JSON here... Example:\n{\n  "clients": [{ "person_id": 123, "first_name": "John", ... }],\n  "episodes": [...],\n  "services": [...]\n}', "rows", "6", 1, "json-input", 3, "ngModelChange", "ngModel"], [1, "action-bar"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "error-banner"], [1, "results-section"], [1, "spinner-small"], [1, "error-icon"], [1, "dismiss-btn", 3, "click"], [1, "summary-cards"], [1, "summary-card", "total"], [1, "card-value"], [1, "card-label"], [1, "summary-card", "pass"], [1, "summary-card", "fail"], [1, "warning-section"], [1, "records-section"], [1, "records-list"], [1, "record-item", 3, "pass", "fail", "selected"], [1, "detail-section"], [1, "warning-icon"], [1, "missing-table"], [1, "unmapped-value"], [1, "more"], [1, "record-item", 3, "click"], [1, "status-icon"], [1, "record-info"], [1, "name"], [1, "id"], [1, "field-counts"], [1, "count", "pass"], [1, "count", "fail"], [1, "count", "warning"], [1, "detail-header"], [1, "close-btn", 3, "click"], [1, "detail-tabs"], [1, "tab-btn", 3, "click"], [1, "field-table-wrapper"], [1, "field-analysis-table"], [3, "class"], [1, "field-code"], [1, "field-name"], [1, "source-value"], [1, "column-hint"], [1, "mapping-found"], [1, "mapping-missing"], [1, "target-info"], [1, "obs-code"], [1, "status-badge"], [1, "error-codes"], [1, "check"], [1, "pair-hint"], [1, "warn"], [1, "target-code"], [1, "label"], [1, "target-label"], [1, "obs-label"], [1, "error-chip", 3, "title"]], template: function ConfigSectionDataAnalyzer_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span", 3);
      \u0275\u0275text(3, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "strong");
      \u0275\u0275text(6, "Data Flow Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " - Analyze database records through configuration mappings to predict Mirth FHIR validation results before submitting to Ontario Health. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "h4");
      \u0275\u0275text(11, "Database Dump");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 7);
      \u0275\u0275text(13, " JSON export from CUST_GBIN_MHA_PDS_* tables with clients, episodes, and services arrays. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "input", 9, 0);
      \u0275\u0275listener("change", function ConfigSectionDataAnalyzer_Template_input_change_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDatabaseFileUpload($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        const dbFileInput_r2 = \u0275\u0275reference(16);
        return \u0275\u0275resetView(dbFileInput_r2.click());
      });
      \u0275\u0275text(18, " Upload JSON File ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, ConfigSectionDataAnalyzer_Conditional_19_Template, 2, 3, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "textarea", 12);
      \u0275\u0275listener("ngModelChange", function ConfigSectionDataAnalyzer_Template_textarea_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.databaseJson.set($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
      \u0275\u0275listener("click", function ConfigSectionDataAnalyzer_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.runAnalysis());
      });
      \u0275\u0275conditionalCreate(23, ConfigSectionDataAnalyzer_Conditional_23_Template, 2, 0)(24, ConfigSectionDataAnalyzer_Conditional_24_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, ConfigSectionDataAnalyzer_Conditional_25_Template, 4, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, ConfigSectionDataAnalyzer_Conditional_26_Template, 7, 1, "div", 15);
      \u0275\u0275conditionalCreate(27, ConfigSectionDataAnalyzer_Conditional_27_Template, 25, 6, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275conditional(ctx.databaseLoaded() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.databaseJson());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canRunAnalysis() || ctx.analyzing());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.analyzing() ? 23 : 24);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.analysisResults().length > 0 ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.summary() ? 27 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  background-color: #e3f2fd;\n  border: 1px solid #90caf9;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #0d47a1;\n}\n.info-banner[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #1976d2;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.info-banner[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.5;\n}\n.input-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.input-card[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 16px;\n}\n.input-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.input-card[_ngcontent-%COMP%]   .input-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 12px;\n  color: #6c757d;\n}\n.file-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.file-input-row[_ngcontent-%COMP%]   .file-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.file-input-row[_ngcontent-%COMP%]   .file-status.success[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.json-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 12px;\n  resize: vertical;\n}\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #106ebe;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #333;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.spinner-small[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 6px;\n  color: #721c24;\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.error-banner[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #dc3545;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n}\n.error-banner[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: #721c24;\n  cursor: pointer;\n  font-size: 18px;\n}\n.results-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  padding-top: 20px;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  border-radius: 8px;\n  text-align: center;\n}\n.summary-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  line-height: 1;\n}\n.summary-card[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.summary-card.total[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.summary-card.total[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: #333;\n}\n.summary-card.pass[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n}\n.summary-card.pass[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: #155724;\n}\n.summary-card.fail[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n}\n.summary-card.fail[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.warning-section[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 6px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.warning-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  color: #856404;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.warning-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background-color: #ffc107;\n  color: #856404;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n}\n.missing-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.missing-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.missing-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ffeeba;\n}\n.missing-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #856404;\n}\n.missing-table[_ngcontent-%COMP%]   .unmapped-value[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  background-color: #fff;\n  border: 1px solid #ffc107;\n  border-radius: 3px;\n  font-size: 11px;\n  margin-right: 4px;\n}\n.missing-table[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #856404;\n}\n.records-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.records-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.records-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.record-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  cursor: pointer;\n  border-bottom: 1px solid #e9ecef;\n}\n.record-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.record-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.record-item.selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n}\n.record-item.pass[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.record-item.fail[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.record-item[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n}\n.record-item[_ngcontent-%COMP%]   .record-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.record-item[_ngcontent-%COMP%]   .record-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n}\n.record-item[_ngcontent-%COMP%]   .record-info[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n}\n.record-item[_ngcontent-%COMP%]   .field-counts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 11px;\n}\n.record-item[_ngcontent-%COMP%]   .field-counts[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.record-item[_ngcontent-%COMP%]   .field-counts[_ngcontent-%COMP%]   .count.pass[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.record-item[_ngcontent-%COMP%]   .field-counts[_ngcontent-%COMP%]   .count.fail[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.record-item[_ngcontent-%COMP%]   .field-counts[_ngcontent-%COMP%]   .count.warning[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.detail-section[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.detail-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #6c757d;\n}\n.detail-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  color: #0078d4;\n  border-bottom-color: #0078d4;\n  font-weight: 500;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #f8f9fa;\n}\n.field-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.field-analysis-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.field-analysis-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.field-analysis-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n  vertical-align: top;\n}\n.field-analysis-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #6c757d;\n}\n.field-analysis-table[_ngcontent-%COMP%]   tr.status-row-pass[_ngcontent-%COMP%] {\n  background-color: rgba(212, 237, 218, 0.3);\n}\n.field-analysis-table[_ngcontent-%COMP%]   tr.status-row-fail[_ngcontent-%COMP%] {\n  background-color: rgba(248, 215, 218, 0.3);\n}\n.field-analysis-table[_ngcontent-%COMP%]   tr.status-row-warning[_ngcontent-%COMP%] {\n  background-color: rgba(255, 243, 205, 0.3);\n}\n.field-analysis-table[_ngcontent-%COMP%]   .field-code[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #0078d4;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .field-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .source-value[_ngcontent-%COMP%] {\n  display: block;\n  padding: 2px 6px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .column-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #adb5bd;\n  display: block;\n  margin-top: 2px;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .mapping-found[_ngcontent-%COMP%] {\n  color: #155724;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .mapping-found[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 4px;\n  background-color: #28a745;\n  color: white;\n  border-radius: 3px;\n  font-size: 10px;\n  margin-right: 4px;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .mapping-found[_ngcontent-%COMP%]   .pair-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6c757d;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .mapping-missing[_ngcontent-%COMP%] {\n  color: #856404;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .mapping-missing[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 4px;\n  background-color: #ffc107;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 10px;\n  margin-right: 4px;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-code[_ngcontent-%COMP%], \n.field-analysis-table[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-code[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], \n.field-analysis-table[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   .target-label[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6c757d;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .target-info[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  padding: 2px 4px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  color: #d73a49;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .obs-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .obs-code[_ngcontent-%COMP%]   .obs-label[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .status-badge.pass[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .status-badge.fail[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .status-badge.warning[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .status-badge.skip[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #6c757d;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .error-codes[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.field-analysis-table[_ngcontent-%COMP%]   .error-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 4px;\n  background-color: #f8d7da;\n  color: #721c24;\n  border-radius: 3px;\n  font-size: 10px;\n  margin-right: 4px;\n  cursor: help;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionDataAnalyzer, [{
    type: Component,
    args: [{ selector: "app-config-section-data-analyzer", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <!-- Info Banner -->
      <div class="info-banner">
        <span class="info-icon">i</span>
        <div class="info-text">
          <strong>Data Flow Analysis</strong> - Analyze database records through
          configuration mappings to predict Mirth FHIR validation results before
          submitting to Ontario Health.
        </div>
      </div>

      <!-- Input Section -->
      <div class="input-section">
        <div class="input-card">
          <h4>Database Dump</h4>
          <p class="input-description">
            JSON export from CUST_GBIN_MHA_PDS_* tables with clients, episodes,
            and services arrays.
          </p>
          <div class="file-input-row">
            <input
              #dbFileInput
              type="file"
              accept=".json"
              hidden
              (change)="onDatabaseFileUpload($event)" />
            <button class="btn btn-secondary" (click)="dbFileInput.click()">
              Upload JSON File
            </button>
            @if (databaseLoaded()) {
              <span class="file-status success">
                Loaded {{ clientCount() }} clients, {{ episodeCount() }} episodes,
                {{ serviceCount() }} services
              </span>
            }
          </div>
          <textarea
            class="json-input"
            placeholder='Paste JSON here... Example:
{
  "clients": [{ "person_id": 123, "first_name": "John", ... }],
  "episodes": [...],
  "services": [...]
}'
            [ngModel]="databaseJson()"
            (ngModelChange)="databaseJson.set($event)"
            rows="6"></textarea>
        </div>
      </div>

      <!-- Run Analysis Button -->
      <div class="action-bar">
        <button
          class="btn btn-primary"
          [disabled]="!canRunAnalysis() || analyzing()"
          (click)="runAnalysis()">
          @if (analyzing()) {
            <span class="spinner-small"></span>
            Analyzing...
          } @else {
            Run Analysis
          }
        </button>
        @if (analysisResults().length > 0) {
          <button class="btn btn-secondary" (click)="clearResults()">
            Clear Results
          </button>
          <button class="btn btn-secondary" (click)="exportResults()">
            Export Results
          </button>
        }
      </div>

      <!-- Error Display -->
      @if (error()) {
        <div class="error-banner">
          <span class="error-icon">!</span>
          <span>{{ error() }}</span>
          <button class="dismiss-btn" (click)="clearError()">x</button>
        </div>
      }

      <!-- Results Section -->
      @if (summary()) {
        <div class="results-section">
          <!-- Summary Cards -->
          <div class="summary-cards">
            <div class="summary-card total">
              <div class="card-value">{{ summary()!.total_records }}</div>
              <div class="card-label">Total Records</div>
            </div>
            <div class="summary-card pass">
              <div class="card-value">{{ summary()!.records_would_pass }}</div>
              <div class="card-label">Would Pass</div>
            </div>
            <div class="summary-card fail">
              <div class="card-value">{{ summary()!.records_would_fail }}</div>
              <div class="card-label">Would Fail</div>
            </div>
          </div>

          <!-- Missing Mappings Warning -->
          @if (summary()!.missing_mappings.length > 0) {
            <div class="warning-section">
              <h4>
                <span class="warning-icon">!</span>
                Missing Mappings ({{ summary()!.missing_mappings.length }} fields)
              </h4>
              <table class="missing-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Unmapped Values</th>
                    <th>Occurrences</th>
                  </tr>
                </thead>
                <tbody>
                  @for (missing of summary()!.missing_mappings; track missing.field_code) {
                    <tr>
                      <td><code>{{ missing.field_code }}</code></td>
                      <td>
                        @for (val of missing.unmapped_values.slice(0, 3); track val) {
                          <span class="unmapped-value">{{ val }}</span>
                        }
                        @if (missing.unmapped_values.length > 3) {
                          <span class="more">+{{ missing.unmapped_values.length - 3 }} more</span>
                        }
                      </td>
                      <td>{{ missing.occurrence_count }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }

          <!-- Records List -->
          <div class="records-section">
            <h4>Records ({{ analysisResults().length }})</h4>
            <div class="records-list">
              @for (record of analysisResults(); track record.record_id) {
                <div
                  class="record-item"
                  [class.pass]="record.would_pass_mirth"
                  [class.fail]="!record.would_pass_mirth"
                  [class.selected]="selectedRecord()?.record_id === record.record_id"
                  (click)="selectRecord(record)">
                  <span class="status-icon">{{ record.would_pass_mirth ? 'OK' : 'X' }}</span>
                  <div class="record-info">
                    <span class="name">{{ record.person_name || 'Unknown' }}</span>
                    <span class="id">ID: {{ record.record_id }}</span>
                  </div>
                  <div class="field-counts">
                    <span class="count pass">{{ record.fields_passed }} pass</span>
                    @if (record.fields_failed > 0) {
                      <span class="count fail">{{ record.fields_failed }} fail</span>
                    }
                    @if (record.fields_warning > 0) {
                      <span class="count warning">{{ record.fields_warning }} warn</span>
                    }
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Record Detail -->
          @if (selectedRecord()) {
            <div class="detail-section">
              <div class="detail-header">
                <h4>{{ selectedRecord()!.person_name }} - Field Analysis</h4>
                <button class="close-btn" (click)="clearSelection()">x</button>
              </div>

              <!-- Tabs -->
              <div class="detail-tabs">
                <button
                  class="tab-btn"
                  [class.active]="activeTab() === 'client'"
                  (click)="activeTab.set('client')">
                  Client ({{ selectedRecord()!.client_fields.length }})
                </button>
                <button
                  class="tab-btn"
                  [class.active]="activeTab() === 'episode'"
                  (click)="activeTab.set('episode')">
                  Episode ({{ selectedRecord()!.episode_fields.length }})
                </button>
                <button
                  class="tab-btn"
                  [class.active]="activeTab() === 'service'"
                  (click)="activeTab.set('service')">
                  Services ({{ selectedRecord()!.service_fields.length }})
                </button>
              </div>

              <!-- Field Analysis Table -->
              <div class="field-table-wrapper">
                <table class="field-analysis-table">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Source (Database)</th>
                      <th>Mapping</th>
                      <th>Target (JSON)</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (field of currentTabFields(); track field.field_code) {
                      <tr [class]="'status-row-' + field.validation_status">
                        <td>
                          <code class="field-code">{{ field.field_code }}</code>
                          <span class="field-name">{{ field.field_name }}</span>
                        </td>
                        <td>
                          <code class="source-value">{{ field.source_value || '(empty)' }}</code>
                          <span class="column-hint">{{ field.source_column }}</span>
                        </td>
                        <td>
                          @if (field.mapping_found) {
                            <span class="mapping-found">
                              <span class="check">OK</span>
                              {{ field.code_table_id }}
                              @if (field.pair_index !== undefined) {
                                <span class="pair-hint">[pair {{ field.pair_index }}]</span>
                              }
                            </span>
                          } @else if (field.source_value) {
                            <span class="mapping-missing">
                              <span class="warn">!</span>
                              No mapping
                            </span>
                          }
                        </td>
                        <td>
                          @if (field.target_code) {
                            <div class="target-info">
                              <div class="target-code">
                                <span class="label">CODE:</span>
                                <code>{{ field.target_code }}</code>
                              </div>
                              @if (field.target_label) {
                                <div class="target-label">
                                  <span class="label">LABEL:</span>
                                  {{ field.target_label }}
                                </div>
                              }
                            </div>
                          }
                          @if (field.observation_code) {
                            <div class="obs-code">
                              <span class="obs-label">Obs:</span>
                              {{ field.observation_code }}
                            </div>
                          }
                        </td>
                        <td>
                          <span class="status-badge" [class]="field.validation_status">
                            {{ field.validation_status }}
                          </span>
                          @if (field.validation_errors.length > 0) {
                            <div class="error-codes">
                              @for (err of field.validation_errors; track err.error_code) {
                                <span class="error-chip" [title]="err.error_message">
                                  {{ err.error_code }}
                                </span>
                              }
                            </div>
                          }
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;e3673f5ec1234c9b17f977a6e6e478fbc981fff8c889363e1428e83c799b7bf3;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-data-analyzer.ts */\n.section-content {\n  max-width: 1200px;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  background-color: #e3f2fd;\n  border: 1px solid #90caf9;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #0d47a1;\n}\n.info-banner .info-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #1976d2;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.info-banner .info-text {\n  font-size: 13px;\n  line-height: 1.5;\n}\n.input-section {\n  margin-bottom: 20px;\n}\n.input-card {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 16px;\n}\n.input-card h4 {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.input-card .input-description {\n  margin: 0 0 12px 0;\n  font-size: 12px;\n  color: #6c757d;\n}\n.file-input-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.file-input-row .file-status {\n  font-size: 12px;\n}\n.file-input-row .file-status.success {\n  color: #28a745;\n}\n.json-input {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 12px;\n  resize: vertical;\n}\n.action-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary {\n  background-color: #0078d4;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background-color: #106ebe;\n}\n.btn.btn-primary:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background-color: #f8f9fa;\n  border: 1px solid #ced4da;\n  color: #333;\n}\n.btn.btn-secondary:hover {\n  background-color: #e9ecef;\n}\n.spinner-small {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 6px;\n  color: #721c24;\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.error-banner .error-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #dc3545;\n  color: white;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n}\n.error-banner .dismiss-btn {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: #721c24;\n  cursor: pointer;\n  font-size: 18px;\n}\n.results-section {\n  border-top: 1px solid #e9ecef;\n  padding-top: 20px;\n}\n.summary-cards {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-card {\n  flex: 1;\n  padding: 16px;\n  border-radius: 8px;\n  text-align: center;\n}\n.summary-card .card-value {\n  font-size: 32px;\n  font-weight: 700;\n  line-height: 1;\n}\n.summary-card .card-label {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.summary-card.total {\n  background-color: #f8f9fa;\n}\n.summary-card.total .card-value {\n  color: #333;\n}\n.summary-card.pass {\n  background-color: #d4edda;\n}\n.summary-card.pass .card-value {\n  color: #155724;\n}\n.summary-card.fail {\n  background-color: #f8d7da;\n}\n.summary-card.fail .card-value {\n  color: #721c24;\n}\n.warning-section {\n  background-color: #fff3cd;\n  border: 1px solid #ffc107;\n  border-radius: 6px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.warning-section h4 {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  color: #856404;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.warning-section h4 .warning-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background-color: #ffc107;\n  color: #856404;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n}\n.missing-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.missing-table th,\n.missing-table td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ffeeba;\n}\n.missing-table th {\n  font-weight: 600;\n  color: #856404;\n}\n.missing-table .unmapped-value {\n  display: inline-block;\n  padding: 2px 6px;\n  background-color: #fff;\n  border: 1px solid #ffc107;\n  border-radius: 3px;\n  font-size: 11px;\n  margin-right: 4px;\n}\n.missing-table .more {\n  font-size: 11px;\n  color: #856404;\n}\n.records-section {\n  margin-bottom: 20px;\n}\n.records-section h4 {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.records-list {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.record-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  cursor: pointer;\n  border-bottom: 1px solid #e9ecef;\n}\n.record-item:last-child {\n  border-bottom: none;\n}\n.record-item:hover {\n  background-color: #f8f9fa;\n}\n.record-item.selected {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n}\n.record-item.pass .status-icon {\n  background-color: #28a745;\n  color: white;\n}\n.record-item.fail .status-icon {\n  background-color: #dc3545;\n  color: white;\n}\n.record-item .status-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n}\n.record-item .record-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.record-item .record-info .name {\n  font-weight: 500;\n  font-size: 13px;\n}\n.record-item .record-info .id {\n  font-size: 11px;\n  color: #6c757d;\n}\n.record-item .field-counts {\n  display: flex;\n  gap: 8px;\n  font-size: 11px;\n}\n.record-item .field-counts .count {\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.record-item .field-counts .count.pass {\n  background-color: #d4edda;\n  color: #155724;\n}\n.record-item .field-counts .count.fail {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.record-item .field-counts .count.warning {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.detail-section {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-header h4 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n}\n.detail-header .close-btn {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #6c757d;\n}\n.detail-header .close-btn:hover {\n  color: #333;\n}\n.detail-tabs {\n  display: flex;\n  border-bottom: 1px solid #e9ecef;\n}\n.detail-tabs .tab-btn {\n  flex: 1;\n  padding: 10px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n}\n.detail-tabs .tab-btn.active {\n  color: #0078d4;\n  border-bottom-color: #0078d4;\n  font-weight: 500;\n}\n.detail-tabs .tab-btn:hover:not(.active) {\n  background-color: #f8f9fa;\n}\n.field-table-wrapper {\n  overflow-x: auto;\n}\n.field-analysis-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.field-analysis-table th,\n.field-analysis-table td {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n  vertical-align: top;\n}\n.field-analysis-table th {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #6c757d;\n}\n.field-analysis-table tr.status-row-pass {\n  background-color: rgba(212, 237, 218, 0.3);\n}\n.field-analysis-table tr.status-row-fail {\n  background-color: rgba(248, 215, 218, 0.3);\n}\n.field-analysis-table tr.status-row-warning {\n  background-color: rgba(255, 243, 205, 0.3);\n}\n.field-analysis-table .field-code {\n  display: block;\n  font-weight: 500;\n  color: #0078d4;\n}\n.field-analysis-table .field-name {\n  font-size: 11px;\n  color: #6c757d;\n}\n.field-analysis-table .source-value {\n  display: block;\n  padding: 2px 6px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.field-analysis-table .column-hint {\n  font-size: 10px;\n  color: #adb5bd;\n  display: block;\n  margin-top: 2px;\n}\n.field-analysis-table .mapping-found {\n  color: #155724;\n}\n.field-analysis-table .mapping-found .check {\n  display: inline-block;\n  padding: 2px 4px;\n  background-color: #28a745;\n  color: white;\n  border-radius: 3px;\n  font-size: 10px;\n  margin-right: 4px;\n}\n.field-analysis-table .mapping-found .pair-hint {\n  font-size: 10px;\n  color: #6c757d;\n}\n.field-analysis-table .mapping-missing {\n  color: #856404;\n}\n.field-analysis-table .mapping-missing .warn {\n  display: inline-block;\n  padding: 2px 4px;\n  background-color: #ffc107;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 10px;\n  margin-right: 4px;\n}\n.field-analysis-table .target-info .target-code,\n.field-analysis-table .target-info .target-label {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 2px;\n}\n.field-analysis-table .target-info .target-code .label,\n.field-analysis-table .target-info .target-label .label {\n  font-size: 10px;\n  color: #6c757d;\n}\n.field-analysis-table .target-info code {\n  padding: 2px 4px;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  color: #d73a49;\n}\n.field-analysis-table .obs-code {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.field-analysis-table .obs-code .obs-label {\n  color: #adb5bd;\n}\n.field-analysis-table .status-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.field-analysis-table .status-badge.pass {\n  background-color: #d4edda;\n  color: #155724;\n}\n.field-analysis-table .status-badge.fail {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.field-analysis-table .status-badge.warning {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.field-analysis-table .status-badge.skip {\n  background-color: #e9ecef;\n  color: #6c757d;\n}\n.field-analysis-table .error-codes {\n  margin-top: 4px;\n}\n.field-analysis-table .error-chip {\n  display: inline-block;\n  padding: 2px 4px;\n  background-color: #f8d7da;\n  color: #721c24;\n  border-radius: 3px;\n  font-size: 10px;\n  margin-right: 4px;\n  cursor: help;\n}\n"] }]
  }], null, { config: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionDataAnalyzer, { className: "ConfigSectionDataAnalyzer", filePath: "src/app/config-editor/sections/config-section-data-analyzer.ts", lineNumber: 873 });
})();

// src/app/config-editor/sections/config-section-service-event-types.ts
var _forTrack010 = ($index, $item) => $item.EVENT_TYPE_NAME;
function ConfigSectionServiceEventTypesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddForm());
    });
    \u0275\u0275text(1, " + Add Service Event Type ");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_10_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "input", 9);
    \u0275\u0275listener("input", function ConfigSectionServiceEventTypesComponent_Conditional_10_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ConfigSectionServiceEventTypesComponent_Conditional_10_Conditional_2_Template, 2, 0, "button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.searchTerm());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchTerm() ? 2 : -1);
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h4");
    \u0275\u0275text(2, "Add New Service Event Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "label", 14);
    \u0275\u0275text(6, "Event Title Text *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ConfigSectionServiceEventTypesComponent_Conditional_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEventType.EVENT_TITLE_TEXT, $event) || (ctx_r1.newEventType.EVENT_TITLE_TEXT = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "label", 16);
    \u0275\u0275text(10, "Event Type Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ConfigSectionServiceEventTypesComponent_Conditional_11_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEventType.EVENT_TYPE_NAME, $event) || (ctx_r1.newEventType.EVENT_TYPE_NAME = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 18)(14, "label", 19);
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ConfigSectionServiceEventTypesComponent_Conditional_11_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEventType.DESCRIPTION, $event) || (ctx_r1.newEventType.DESCRIPTION = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 21)(18, "button", 22);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_11_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddForm());
    });
    \u0275\u0275text(19, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 23);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_11_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addServiceEventType());
    });
    \u0275\u0275text(21, " Add Service Event Type ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEventType.EVENT_TITLE_TEXT);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEventType.EVENT_TYPE_NAME);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEventType.DESCRIPTION);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.isNewEventTypeValid());
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortDirection() === "asc" ? "\u25B2" : "\u25BC");
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortDirection() === "asc" ? "\u25B2" : "\u25BC");
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortDirection() === "asc" ? "\u25B2" : "\u25BC");
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_For_21_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "button", 36);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_12_For_21_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const eventType_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRemoveEventType(eventType_r8));
    });
    \u0275\u0275text(2, " Remove ");
    \u0275\u0275elementEnd()();
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 24)(2, "label", 32)(3, "input", 33);
    \u0275\u0275listener("change", function ConfigSectionServiceEventTypesComponent_Conditional_12_For_21_Template_input_change_3_listener($event) {
      const eventType_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onToggleActive(eventType_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ConfigSectionServiceEventTypesComponent_Conditional_12_For_21_Conditional_11_Template, 3, 0, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const eventType_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inactive", eventType_r8.ACTIVE_IND === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", eventType_r8.ACTIVE_IND === 1)("disabled", ctx_r1.readonly);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(eventType_r8.EVENT_TITLE_TEXT);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(eventType_r8.EVENT_TYPE_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(eventType_r8.DESCRIPTION);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.readonly ? 11 : -1);
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_ForEmpty_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.readonly ? 4 : 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No service event types found matching "', ctx_r1.searchTerm(), '" ');
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "table")(2, "thead")(3, "tr")(4, "th", 24)(5, "button", 25);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("ACTIVE_IND"));
    });
    \u0275\u0275text(6, " Active ");
    \u0275\u0275conditionalCreate(7, ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_7_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "th", 27)(9, "button", 25);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("EVENT_TITLE_TEXT"));
    });
    \u0275\u0275text(10, " Event Title Text ");
    \u0275\u0275conditionalCreate(11, ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_11_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "th", 28)(13, "button", 25);
    \u0275\u0275listener("click", function ConfigSectionServiceEventTypesComponent_Conditional_12_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("EVENT_TYPE_NAME"));
    });
    \u0275\u0275text(14, " Event Type Name ");
    \u0275\u0275conditionalCreate(15, ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_15_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 29);
    \u0275\u0275text(17, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ConfigSectionServiceEventTypesComponent_Conditional_12_Conditional_18_Template, 2, 0, "th", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, ConfigSectionServiceEventTypesComponent_Conditional_12_For_21_Template, 12, 8, "tr", 31, _forTrack010, false, ConfigSectionServiceEventTypesComponent_Conditional_12_ForEmpty_22_Template, 3, 2, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.sortColumn() === "ACTIVE_IND" ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.sortColumn() === "EVENT_TITLE_TEXT" ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.sortColumn() === "EVENT_TYPE_NAME" ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.readonly ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredAndSortedEventTypes());
  }
}
function ConfigSectionServiceEventTypesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2, "No service event types configured yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 38);
    \u0275\u0275text(4, 'Click "Add Service Event Type" to configure which DCP Generic Code forms qualify as mental health service events.');
    \u0275\u0275elementEnd()();
  }
}
var ConfigSectionServiceEventTypesComponent = class _ConfigSectionServiceEventTypesComponent {
  configuration = null;
  readonly = false;
  configurationChange = new EventEmitter();
  showAddForm = signal(false, ...ngDevMode ? [{ debugName: "showAddForm" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  sortColumn = signal("EVENT_TITLE_TEXT", ...ngDevMode ? [{ debugName: "sortColumn" }] : []);
  sortDirection = signal("asc", ...ngDevMode ? [{ debugName: "sortDirection" }] : []);
  // New event type form model
  newEventType = this.getEmptyEventType();
  serviceEventTypes = computed(() => this.configuration?.SERVICE_EVENT_TYPES ?? [], ...ngDevMode ? [{ debugName: "serviceEventTypes" }] : []);
  activeCount = computed(() => this.serviceEventTypes().filter((et) => et.ACTIVE_IND === 1).length, ...ngDevMode ? [{ debugName: "activeCount" }] : []);
  filteredAndSortedEventTypes = computed(() => {
    let eventTypes = [...this.serviceEventTypes()];
    const term = this.searchTerm().toLowerCase().trim();
    if (term) {
      eventTypes = eventTypes.filter((et) => et.EVENT_TITLE_TEXT.toLowerCase().includes(term) || et.EVENT_TYPE_NAME.toLowerCase().includes(term));
    }
    const col = this.sortColumn();
    const dir = this.sortDirection();
    eventTypes.sort((a, b) => {
      let aVal = a[col];
      let bVal = b[col];
      if (typeof aVal === "string")
        aVal = aVal.toLowerCase();
      if (typeof bVal === "string")
        bVal = bVal.toLowerCase();
      if (aVal < bVal)
        return dir === "asc" ? -1 : 1;
      if (aVal > bVal)
        return dir === "asc" ? 1 : -1;
      return 0;
    });
    return eventTypes;
  }, ...ngDevMode ? [{ debugName: "filteredAndSortedEventTypes" }] : []);
  getEmptyEventType() {
    return {
      EVENT_TITLE_TEXT: "",
      EVENT_TYPE_NAME: "",
      DESCRIPTION: "",
      DCP_EVENT_CD: 258355,
      // Always DCP Generic Code
      ACTIVE_IND: 1
    };
  }
  openAddForm() {
    this.newEventType = this.getEmptyEventType();
    this.showAddForm.set(true);
  }
  closeAddForm() {
    this.showAddForm.set(false);
    this.newEventType = this.getEmptyEventType();
  }
  isNewEventTypeValid() {
    return this.newEventType.EVENT_TITLE_TEXT.trim().length > 0 && this.newEventType.EVENT_TYPE_NAME.trim().length > 0;
  }
  addServiceEventType() {
    if (!this.configuration || !this.isNewEventTypeValid())
      return;
    const trimmedEventType = {
      EVENT_TITLE_TEXT: this.newEventType.EVENT_TITLE_TEXT.trim(),
      EVENT_TYPE_NAME: this.newEventType.EVENT_TYPE_NAME.trim().toUpperCase(),
      DESCRIPTION: this.newEventType.DESCRIPTION.trim(),
      DCP_EVENT_CD: 258355,
      ACTIVE_IND: 1
    };
    const updatedEventTypes = [...this.serviceEventTypes(), trimmedEventType];
    this.emitUpdate(updatedEventTypes);
    this.closeAddForm();
  }
  onToggleActive(eventType, event) {
    if (!this.configuration)
      return;
    const checked = event.target.checked;
    const updatedEventTypes = this.serviceEventTypes().map((et) => et.EVENT_TYPE_NAME === eventType.EVENT_TYPE_NAME ? __spreadProps(__spreadValues({}, et), { ACTIVE_IND: checked ? 1 : 0 }) : et);
    this.emitUpdate(updatedEventTypes);
  }
  onRemoveEventType(eventType) {
    if (!this.configuration)
      return;
    if (confirm(`Remove "${eventType.EVENT_TITLE_TEXT}" from service event types?`)) {
      const updatedEventTypes = this.serviceEventTypes().filter((et) => et.EVENT_TYPE_NAME !== eventType.EVENT_TYPE_NAME);
      this.emitUpdate(updatedEventTypes);
    }
  }
  onSearchChange(event) {
    const value = event.target.value;
    this.searchTerm.set(value);
  }
  clearSearch() {
    this.searchTerm.set("");
  }
  sortBy(column) {
    if (this.sortColumn() === column) {
      this.sortDirection.set(this.sortDirection() === "asc" ? "desc" : "asc");
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set("asc");
    }
  }
  emitUpdate(serviceEventTypes) {
    if (!this.configuration)
      return;
    const updatedConfig = __spreadProps(__spreadValues({}, this.configuration), {
      SERVICE_EVENT_TYPES: serviceEventTypes,
      SERVICE_EVENT_TYPES_CNT: serviceEventTypes.length
    });
    this.configurationChange.emit(updatedConfig);
  }
  static \u0275fac = function ConfigSectionServiceEventTypesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionServiceEventTypesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionServiceEventTypesComponent, selectors: [["app-config-section-service-event-types"]], inputs: { configuration: "configuration", readonly: "readonly" }, outputs: { configurationChange: "configurationChange" }, decls: 14, vars: 6, consts: [[1, "section-content"], [1, "summary-bar"], [1, "stat"], [1, "btn-add"], [1, "search-bar"], [1, "add-form"], [1, "event-types-table"], [1, "empty-state"], [1, "btn-add", 3, "click"], ["type", "text", "placeholder", "Search by event title or type name...", 1, "search-input", 3, "input", "value"], [1, "btn-clear-search"], [1, "btn-clear-search", 3, "click"], [1, "form-row"], [1, "form-group"], ["for", "eventTitleText"], ["type", "text", "id", "eventTitleText", "placeholder", "e.g., Initial Assessment - Outpatient MHA", 3, "ngModelChange", "ngModel"], ["for", "eventTypeName"], ["type", "text", "id", "eventTypeName", "placeholder", "e.g., INITIAL_ASSESSMENT", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["for", "description"], ["type", "text", "id", "description", "placeholder", "Human-readable description of this event type", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "col-active"], [1, "sort-btn", 3, "click"], [1, "sort-indicator"], [1, "col-title"], [1, "col-type"], [1, "col-description"], [1, "col-actions"], [3, "inactive"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "toggle-slider"], [1, "col-type", "code"], [1, "btn-remove", 3, "click"], [1, "no-results"], [1, "hint"]], template: function ConfigSectionServiceEventTypesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "strong");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " active of ");
      \u0275\u0275elementStart(6, "strong");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " service event types configured ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, ConfigSectionServiceEventTypesComponent_Conditional_9_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ConfigSectionServiceEventTypesComponent_Conditional_10_Template, 3, 2, "div", 4);
      \u0275\u0275conditionalCreate(11, ConfigSectionServiceEventTypesComponent_Conditional_11_Template, 22, 4, "div", 5);
      \u0275\u0275conditionalCreate(12, ConfigSectionServiceEventTypesComponent_Conditional_12_Template, 23, 5, "div", 6)(13, ConfigSectionServiceEventTypesComponent_Conditional_13_Template, 5, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.activeCount());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.serviceEventTypes().length);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.readonly ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.serviceEventTypes().length > 0 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddForm() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.serviceEventTypes().length > 0 ? 12 : 13);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.summary-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n.summary-bar[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n}\n.summary-bar[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.summary-bar[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #0078d4;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.summary-bar[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  background-color: #106ebe;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.search-bar[_ngcontent-%COMP%]   .btn-clear-search[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.search-bar[_ngcontent-%COMP%]   .btn-clear-search[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.add-form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 20px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.add-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #333;\n  font-size: 16px;\n}\n.add-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.add-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  flex: 1 0 100%;\n}\n.add-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #555;\n  font-size: 13px;\n  font-weight: 500;\n}\n.add-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.add-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.add-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n.add-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: transparent;\n  color: #6c757d;\n  border: 1px solid #6c757d;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.add-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  color: white;\n}\n.add-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.add-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #218838;\n}\n.add-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:disabled {\n  background-color: #94d3a2;\n  cursor: not-allowed;\n}\n.event-types-table[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #555;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: inherit;\n  font: inherit;\n  cursor: pointer;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%]:hover {\n  color: #0078d4;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%]   .sort-indicator[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.code[_ngcontent-%COMP%] {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  color: #6c757d;\n  font-size: 13px;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  font-style: italic;\n  padding: 24px;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  opacity: 0.7;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #999;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-active[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-type[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-description[_ngcontent-%COMP%] {\n  width: auto;\n}\n.event-types-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .col-actions[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: right;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .toggle-slider[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 24px;\n  transition: 0.3s;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background-color: transparent;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #555;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #888;\n  font-size: 13px;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionServiceEventTypesComponent, [{
    type: Component,
    args: [{ selector: "app-config-section-service-event-types", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <!-- Summary Stats -->
      <div class="summary-bar">
        <span class="stat">
          <strong>{{ activeCount() }}</strong> active of
          <strong>{{ serviceEventTypes().length }}</strong> service event types configured
        </span>
        @if (!readonly) {
          <button class="btn-add" (click)="openAddForm()">
            + Add Service Event Type
          </button>
        }
      </div>

      <!-- Search Bar -->
      @if (serviceEventTypes().length > 0) {
        <div class="search-bar">
          <input
            type="text"
            class="search-input"
            placeholder="Search by event title or type name..."
            [value]="searchTerm()"
            (input)="onSearchChange($event)" />
          @if (searchTerm()) {
            <button class="btn-clear-search" (click)="clearSearch()">Clear</button>
          }
        </div>
      }

      <!-- Add New Form (Inline) -->
      @if (showAddForm()) {
        <div class="add-form">
          <h4>Add New Service Event Type</h4>
          <div class="form-row">
            <div class="form-group">
              <label for="eventTitleText">Event Title Text *</label>
              <input
                type="text"
                id="eventTitleText"
                [(ngModel)]="newEventType.EVENT_TITLE_TEXT"
                placeholder="e.g., Initial Assessment - Outpatient MHA" />
            </div>
            <div class="form-group">
              <label for="eventTypeName">Event Type Name *</label>
              <input
                type="text"
                id="eventTypeName"
                [(ngModel)]="newEventType.EVENT_TYPE_NAME"
                placeholder="e.g., INITIAL_ASSESSMENT" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group full-width">
              <label for="description">Description</label>
              <input
                type="text"
                id="description"
                [(ngModel)]="newEventType.DESCRIPTION"
                placeholder="Human-readable description of this event type" />
            </div>
          </div>
          <div class="form-actions">
            <button class="btn-cancel" (click)="closeAddForm()">Cancel</button>
            <button
              class="btn-save"
              [disabled]="!isNewEventTypeValid()"
              (click)="addServiceEventType()">
              Add Service Event Type
            </button>
          </div>
        </div>
      }

      <!-- Service Event Types Table -->
      @if (serviceEventTypes().length > 0) {
        <div class="event-types-table">
          <table>
            <thead>
              <tr>
                <th class="col-active">
                  <button class="sort-btn" (click)="sortBy('ACTIVE_IND')">
                    Active
                    @if (sortColumn() === 'ACTIVE_IND') {
                      <span class="sort-indicator">{{ sortDirection() === 'asc' ? '\u25B2' : '\u25BC' }}</span>
                    }
                  </button>
                </th>
                <th class="col-title">
                  <button class="sort-btn" (click)="sortBy('EVENT_TITLE_TEXT')">
                    Event Title Text
                    @if (sortColumn() === 'EVENT_TITLE_TEXT') {
                      <span class="sort-indicator">{{ sortDirection() === 'asc' ? '\u25B2' : '\u25BC' }}</span>
                    }
                  </button>
                </th>
                <th class="col-type">
                  <button class="sort-btn" (click)="sortBy('EVENT_TYPE_NAME')">
                    Event Type Name
                    @if (sortColumn() === 'EVENT_TYPE_NAME') {
                      <span class="sort-indicator">{{ sortDirection() === 'asc' ? '\u25B2' : '\u25BC' }}</span>
                    }
                  </button>
                </th>
                <th class="col-description">Description</th>
                @if (!readonly) {
                  <th class="col-actions">Actions</th>
                }
              </tr>
            </thead>
            <tbody>
              @for (eventType of filteredAndSortedEventTypes(); track eventType.EVENT_TYPE_NAME) {
                <tr [class.inactive]="eventType.ACTIVE_IND === 0">
                  <td class="col-active">
                    <label class="toggle-switch">
                      <input
                        type="checkbox"
                        [checked]="eventType.ACTIVE_IND === 1"
                        [disabled]="readonly"
                        (change)="onToggleActive(eventType, $event)" />
                      <span class="toggle-slider"></span>
                    </label>
                  </td>
                  <td class="col-title">{{ eventType.EVENT_TITLE_TEXT }}</td>
                  <td class="col-type code">{{ eventType.EVENT_TYPE_NAME }}</td>
                  <td class="col-description">{{ eventType.DESCRIPTION }}</td>
                  @if (!readonly) {
                    <td class="col-actions">
                      <button class="btn-remove" (click)="onRemoveEventType(eventType)">
                        Remove
                      </button>
                    </td>
                  }
                </tr>
              } @empty {
                <tr>
                  <td [attr.colspan]="readonly ? 4 : 5" class="no-results">
                    No service event types found matching "{{ searchTerm() }}"
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      } @else {
        <div class="empty-state">
          <p>No service event types configured yet.</p>
          <p class="hint">Click "Add Service Event Type" to configure which DCP Generic Code forms qualify as mental health service events.</p>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;b4d6a54c6c25fdb2153f87d2f6188a77ce9e6b859d3810b81c3723d3badf8b8d;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-service-event-types.ts */\n.section-content {\n  max-width: 1100px;\n}\n.summary-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n.summary-bar .stat {\n  color: #555;\n  font-size: 14px;\n}\n.summary-bar .stat strong {\n  color: #333;\n}\n.summary-bar .btn-add {\n  padding: 8px 16px;\n  background-color: #0078d4;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.summary-bar .btn-add:hover {\n  background-color: #106ebe;\n}\n.search-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.search-bar .search-input {\n  flex: 1;\n  padding: 10px 14px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-bar .search-input:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.search-bar .btn-clear-search {\n  padding: 10px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.search-bar .btn-clear-search:hover {\n  background-color: #5a6268;\n}\n.add-form {\n  margin-bottom: 20px;\n  padding: 20px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.add-form h4 {\n  margin: 0 0 16px 0;\n  color: #333;\n  font-size: 16px;\n}\n.add-form .form-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.add-form .form-row .form-group {\n  flex: 1;\n}\n.add-form .form-row .form-group.full-width {\n  flex: 1 0 100%;\n}\n.add-form .form-row .form-group label {\n  display: block;\n  margin-bottom: 4px;\n  color: #555;\n  font-size: 13px;\n  font-weight: 500;\n}\n.add-form .form-row .form-group input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.add-form .form-row .form-group input:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.add-form .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n}\n.add-form .form-actions .btn-cancel {\n  padding: 8px 16px;\n  background-color: transparent;\n  color: #6c757d;\n  border: 1px solid #6c757d;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.add-form .form-actions .btn-cancel:hover {\n  background-color: #6c757d;\n  color: white;\n}\n.add-form .form-actions .btn-save {\n  padding: 8px 16px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.add-form .form-actions .btn-save:hover:not(:disabled) {\n  background-color: #218838;\n}\n.add-form .form-actions .btn-save:disabled {\n  background-color: #94d3a2;\n  cursor: not-allowed;\n}\n.event-types-table {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.event-types-table table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.event-types-table table th,\n.event-types-table table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.event-types-table table th {\n  background-color: #f8f9fa;\n  color: #555;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.event-types-table table th .sort-btn {\n  background: none;\n  border: none;\n  color: inherit;\n  font: inherit;\n  cursor: pointer;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.event-types-table table th .sort-btn:hover {\n  color: #0078d4;\n}\n.event-types-table table th .sort-btn .sort-indicator {\n  font-size: 10px;\n}\n.event-types-table table td {\n  font-size: 14px;\n  color: #333;\n}\n.event-types-table table td.code {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  color: #6c757d;\n  font-size: 13px;\n}\n.event-types-table table td.no-results {\n  text-align: center;\n  color: #888;\n  font-style: italic;\n  padding: 24px;\n}\n.event-types-table table tr.inactive {\n  background-color: #f8f9fa;\n  opacity: 0.7;\n}\n.event-types-table table tr.inactive td {\n  color: #999;\n}\n.event-types-table table tr:last-child td {\n  border-bottom: none;\n}\n.event-types-table table .col-active {\n  width: 80px;\n}\n.event-types-table table .col-title {\n  width: 35%;\n}\n.event-types-table table .col-type {\n  width: 20%;\n}\n.event-types-table table .col-description {\n  width: auto;\n}\n.event-types-table table .col-actions {\n  width: 100px;\n  text-align: right;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n}\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-switch input:checked + .toggle-slider {\n  background-color: #0078d4;\n}\n.toggle-switch input:checked + .toggle-slider:before {\n  transform: translateX(20px);\n}\n.toggle-switch input:disabled + .toggle-slider {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.toggle-switch .toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  border-radius: 24px;\n  transition: 0.3s;\n}\n.toggle-switch .toggle-slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.btn-remove {\n  padding: 4px 12px;\n  background-color: transparent;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.btn-remove:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.empty-state {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 6px;\n}\n.empty-state p {\n  margin: 0;\n  color: #555;\n  font-size: 14px;\n}\n.empty-state .hint {\n  margin-top: 8px;\n  color: #888;\n  font-size: 13px;\n}\n'] }]
  }], null, { configuration: [{
    type: Input
  }], readonly: [{
    type: Input
  }], configurationChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionServiceEventTypesComponent, { className: "ConfigSectionServiceEventTypesComponent", filePath: "src/app/config-editor/sections/config-section-service-event-types.ts", lineNumber: 531 });
})();

// src/app/config-editor/sections/config-section-time-interval-mappings.ts
var _forTrack011 = ($index, $item) => $item.INTERVAL_TEXT;
function ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.addError());
  }
}
function ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7)(2, "div", 8)(3, "label", 9);
    \u0275\u0275text(4, "Interval Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 10);
    \u0275\u0275listener("ngModelChange", function ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newIntervalText.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "label", 12);
    \u0275\u0275text(8, "Max Minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 13);
    \u0275\u0275listener("ngModelChange", function ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newMaxMinutes.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "button", 15);
    \u0275\u0275listener("click", function ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddMapping());
    });
    \u0275\u0275text(12, " Add ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancelAdd());
    });
    \u0275\u0275text(14, " Cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Conditional_15_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.newIntervalText());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.newMaxMinutes());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canAdd());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.addError() ? 15 : -1);
  }
}
function ConfigSectionTimeIntervalMappingsComponent_Conditional_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 18)(4, "input", 20);
    \u0275\u0275listener("ngModelChange", function ConfigSectionTimeIntervalMappingsComponent_Conditional_9_For_12_Template_input_ngModelChange_4_listener($event) {
      const mapping_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMaxMinutesChange(mapping_r4, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 19)(6, "button", 21);
    \u0275\u0275listener("click", function ConfigSectionTimeIntervalMappingsComponent_Conditional_9_For_12_Template_button_click_6_listener() {
      const mapping_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRemoveMapping(mapping_r4));
    });
    \u0275\u0275text(7, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mapping_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mapping_r4.INTERVAL_TEXT);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", mapping_r4.MAX_MINUTES);
  }
}
function ConfigSectionTimeIntervalMappingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Interval Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 18);
    \u0275\u0275text(7, "Max Minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 19);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, ConfigSectionTimeIntervalMappingsComponent_Conditional_9_For_12_Template, 8, 2, "tr", null, _forTrack011);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.sortedMappings());
  }
}
function ConfigSectionTimeIntervalMappingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2, "No time interval mappings configured.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, 'Click "Add Interval" to configure time interval to minutes mappings.');
    \u0275\u0275elementEnd()();
  }
}
var ConfigSectionTimeIntervalMappingsComponent = class _ConfigSectionTimeIntervalMappingsComponent {
  mappings = [];
  mappingsChange = new EventEmitter();
  showAddForm = signal(false, ...ngDevMode ? [{ debugName: "showAddForm" }] : []);
  newIntervalText = signal("", ...ngDevMode ? [{ debugName: "newIntervalText" }] : []);
  newMaxMinutes = signal(null, ...ngDevMode ? [{ debugName: "newMaxMinutes" }] : []);
  addError = signal(null, ...ngDevMode ? [{ debugName: "addError" }] : []);
  sortedMappings = computed(() => [...this.mappings].sort((a, b) => a.MAX_MINUTES - b.MAX_MINUTES), ...ngDevMode ? [{ debugName: "sortedMappings" }] : []);
  canAdd = computed(() => {
    const text = this.newIntervalText().trim();
    const minutes = this.newMaxMinutes();
    return text.length > 0 && minutes !== null && minutes > 0;
  }, ...ngDevMode ? [{ debugName: "canAdd" }] : []);
  onAddMapping() {
    const text = this.newIntervalText().trim();
    const minutes = this.newMaxMinutes();
    if (!text || minutes === null || minutes <= 0)
      return;
    const duplicate = this.mappings.some((m) => m.INTERVAL_TEXT.toLowerCase() === text.toLowerCase());
    if (duplicate) {
      this.addError.set(`An interval with text "${text}" already exists.`);
      return;
    }
    const newMapping = {
      INTERVAL_TEXT: text,
      MAX_MINUTES: minutes
    };
    const updated = [...this.mappings, newMapping];
    this.mappingsChange.emit(updated);
    this.onCancelAdd();
  }
  onCancelAdd() {
    this.showAddForm.set(false);
    this.newIntervalText.set("");
    this.newMaxMinutes.set(null);
    this.addError.set(null);
  }
  onMaxMinutesChange(mapping, value) {
    if (value <= 0)
      return;
    const updated = this.mappings.map((m) => m.INTERVAL_TEXT === mapping.INTERVAL_TEXT ? __spreadProps(__spreadValues({}, m), { MAX_MINUTES: value }) : m);
    this.mappingsChange.emit(updated);
  }
  onRemoveMapping(mapping) {
    const updated = this.mappings.filter((m) => m.INTERVAL_TEXT !== mapping.INTERVAL_TEXT);
    this.mappingsChange.emit(updated);
  }
  static \u0275fac = function ConfigSectionTimeIntervalMappingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionTimeIntervalMappingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionTimeIntervalMappingsComponent, selectors: [["app-config-section-time-interval-mappings"]], inputs: { mappings: "mappings" }, outputs: { mappingsChange: "mappingsChange" }, decls: 11, vars: 4, consts: [[1, "section-content"], [1, "summary-bar"], [1, "stat"], [1, "btn-add", 3, "click", "disabled"], [1, "add-form"], [1, "mappings-table"], [1, "empty-state"], [1, "form-row"], [1, "form-group"], ["for", "newIntervalText"], ["id", "newIntervalText", "type", "text", "placeholder", "e.g., More than 30 minutes to 1 hour", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-group-narrow"], ["for", "newMaxMinutes"], ["id", "newMaxMinutes", "type", "number", "placeholder", "60", "min", "1", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-confirm", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"], [1, "form-error"], [1, "col-minutes"], [1, "col-actions"], ["type", "number", "min", "1", 1, "inline-input", 3, "ngModelChange", "ngModel"], [1, "btn-remove", 3, "click"], [1, "hint"]], template: function ConfigSectionTimeIntervalMappingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "strong");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " interval mappings configured ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function ConfigSectionTimeIntervalMappingsComponent_Template_button_click_6_listener() {
        return ctx.showAddForm.set(true);
      });
      \u0275\u0275text(7, " + Add Interval ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, ConfigSectionTimeIntervalMappingsComponent_Conditional_8_Template, 16, 4, "div", 4);
      \u0275\u0275conditionalCreate(9, ConfigSectionTimeIntervalMappingsComponent_Conditional_9_Template, 13, 0, "div", 5)(10, ConfigSectionTimeIntervalMappingsComponent_Conditional_10_Template, 5, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.mappings.length);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.showAddForm());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAddForm() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.sortedMappings().length > 0 ? 9 : !ctx.showAddForm() ? 10 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n\n.section-content[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.summary-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n.summary-bar[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n}\n.summary-bar[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.summary-bar[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #0078d4;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.summary-bar[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #106ebe;\n}\n.summary-bar[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.add-form[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 16px;\n  background: #f0f7ff;\n  border: 1px solid #b3d7ff;\n  border-radius: 6px;\n}\n.add-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.add-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.add-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.add-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.add-form[_ngcontent-%COMP%]   .form-group-narrow[_ngcontent-%COMP%] {\n  flex: 0 0 120px;\n}\n.add-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding-bottom: 1px;\n}\n.add-form[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.add-form[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #218838;\n}\n.add-form[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.add-form[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.add-form[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.add-form[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.mappings-table[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mappings-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.mappings-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.mappings-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.mappings-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #555;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.mappings-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n}\n.mappings-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-minutes[_ngcontent-%COMP%] {\n  width: 130px;\n  text-align: center;\n}\n.mappings-table[_ngcontent-%COMP%]   th.col-minutes[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mappings-table[_ngcontent-%COMP%]   .col-actions[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n}\n.mappings-table[_ngcontent-%COMP%]   th.col-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.inline-input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 4px 8px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  text-align: center;\n}\n.inline-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.btn-remove[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background-color: transparent;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 6px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #555;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #888;\n  font-size: 13px;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionTimeIntervalMappingsComponent, [{
    type: Component,
    args: [{ selector: "app-config-section-time-interval-mappings", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="section-content">
      <!-- Summary Stats -->
      <div class="summary-bar">
        <span class="stat">
          <strong>{{ mappings.length }}</strong> interval mappings configured
        </span>
        <button class="btn-add" (click)="showAddForm.set(true)" [disabled]="showAddForm()">
          + Add Interval
        </button>
      </div>

      <!-- Add Form -->
      @if (showAddForm()) {
        <div class="add-form">
          <div class="form-row">
            <div class="form-group">
              <label for="newIntervalText">Interval Text</label>
              <input
                id="newIntervalText"
                type="text"
                class="form-input"
                placeholder="e.g., More than 30 minutes to 1 hour"
                [ngModel]="newIntervalText()"
                (ngModelChange)="newIntervalText.set($event)" />
            </div>
            <div class="form-group form-group-narrow">
              <label for="newMaxMinutes">Max Minutes</label>
              <input
                id="newMaxMinutes"
                type="number"
                class="form-input"
                placeholder="60"
                min="1"
                [ngModel]="newMaxMinutes()"
                (ngModelChange)="newMaxMinutes.set($event)" />
            </div>
            <div class="form-actions">
              <button
                class="btn-confirm"
                (click)="onAddMapping()"
                [disabled]="!canAdd()">
                Add
              </button>
              <button class="btn-cancel" (click)="onCancelAdd()">
                Cancel
              </button>
            </div>
          </div>
          @if (addError()) {
            <div class="form-error">{{ addError() }}</div>
          }
        </div>
      }

      <!-- Mappings Table -->
      @if (sortedMappings().length > 0) {
        <div class="mappings-table">
          <table>
            <thead>
              <tr>
                <th>Interval Text</th>
                <th class="col-minutes">Max Minutes</th>
                <th class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (mapping of sortedMappings(); track mapping.INTERVAL_TEXT) {
                <tr>
                  <td>{{ mapping.INTERVAL_TEXT }}</td>
                  <td class="col-minutes">
                    <input
                      type="number"
                      class="inline-input"
                      min="1"
                      [ngModel]="mapping.MAX_MINUTES"
                      (ngModelChange)="onMaxMinutesChange(mapping, $event)" />
                  </td>
                  <td class="col-actions">
                    <button class="btn-remove" (click)="onRemoveMapping(mapping)">
                      Remove
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      } @else if (!showAddForm()) {
        <div class="empty-state">
          <p>No time interval mappings configured.</p>
          <p class="hint">Click "Add Interval" to configure time interval to minutes mappings.</p>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;69adb147bd810262e89789a63fcfa01d0a1eb0c1873ae21d1f449d9863bfd800;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-time-interval-mappings.ts */\n.section-content {\n  max-width: 700px;\n}\n.summary-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n.summary-bar .stat {\n  color: #555;\n  font-size: 14px;\n}\n.summary-bar .stat strong {\n  color: #333;\n}\n.summary-bar .btn-add {\n  padding: 8px 16px;\n  background-color: #0078d4;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.summary-bar .btn-add:hover:not(:disabled) {\n  background-color: #106ebe;\n}\n.summary-bar .btn-add:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.add-form {\n  margin-bottom: 16px;\n  padding: 16px;\n  background: #f0f7ff;\n  border: 1px solid #b3d7ff;\n  border-radius: 6px;\n}\n.add-form .form-row {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n.add-form .form-group {\n  flex: 1;\n}\n.add-form .form-group label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.add-form .form-group .form-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n.add-form .form-group .form-input:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.add-form .form-group-narrow {\n  flex: 0 0 120px;\n}\n.add-form .form-actions {\n  display: flex;\n  gap: 8px;\n  padding-bottom: 1px;\n}\n.add-form .btn-confirm {\n  padding: 8px 16px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n.add-form .btn-confirm:hover:not(:disabled) {\n  background-color: #218838;\n}\n.add-form .btn-confirm:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.add-form .btn-cancel {\n  padding: 8px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.add-form .btn-cancel:hover {\n  background-color: #5a6268;\n}\n.add-form .form-error {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.mappings-table {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.mappings-table table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.mappings-table table th,\n.mappings-table table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.mappings-table table th {\n  background-color: #f8f9fa;\n  color: #555;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.mappings-table table td {\n  font-size: 14px;\n  color: #333;\n}\n.mappings-table table tr:last-child td {\n  border-bottom: none;\n}\n.mappings-table .col-minutes {\n  width: 130px;\n  text-align: center;\n}\n.mappings-table th.col-minutes {\n  text-align: center;\n}\n.mappings-table .col-actions {\n  width: 100px;\n  text-align: center;\n}\n.mappings-table th.col-actions {\n  text-align: center;\n}\n.inline-input {\n  width: 80px;\n  padding: 4px 8px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  text-align: center;\n}\n.inline-input:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.1);\n}\n.btn-remove {\n  padding: 4px 12px;\n  background-color: transparent;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.btn-remove:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.empty-state {\n  padding: 40px;\n  text-align: center;\n  background-color: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 6px;\n}\n.empty-state p {\n  margin: 0;\n  color: #555;\n  font-size: 14px;\n}\n.empty-state .hint {\n  margin-top: 8px;\n  color: #888;\n  font-size: 13px;\n}\n"] }]
  }], null, { mappings: [{
    type: Input
  }], mappingsChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionTimeIntervalMappingsComponent, { className: "ConfigSectionTimeIntervalMappingsComponent", filePath: "src/app/config-editor/sections/config-section-time-interval-mappings.ts", lineNumber: 370 });
})();

// node_modules/@codemirror/theme-one-dark/dist/index.js
var chalky = "#e5c07b";
var coral = "#e06c75";
var cyan = "#56b6c2";
var invalid = "#ffffff";
var ivory = "#abb2bf";
var stone = "#7d8799";
var malibu = "#61afef";
var sage = "#98c379";
var whiskey = "#d19a66";
var violet = "#c678dd";
var darkBackground = "#21252b";
var highlightBackground = "#2c313a";
var background = "#282c34";
var tooltipBackground = "#353a42";
var selection = "#3E4451";
var cursor = "#528bff";
var oneDarkTheme = /* @__PURE__ */ EditorView.theme({
  "&": {
    color: ivory,
    backgroundColor: background
  },
  ".cm-content": {
    caretColor: cursor
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: selection },
  ".cm-panels": { backgroundColor: darkBackground, color: ivory },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: background,
    color: stone,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: highlightBackground
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: tooltipBackground
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: tooltipBackground,
    borderBottomColor: tooltipBackground
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: highlightBackground,
      color: ivory
    }
  }
}, { dark: true });
var oneDarkHighlightStyle = /* @__PURE__ */ HighlightStyle.define([
  {
    tag: tags.keyword,
    color: violet
  },
  {
    tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName],
    color: coral
  },
  {
    tag: [/* @__PURE__ */ tags.function(tags.variableName), tags.labelName],
    color: malibu
  },
  {
    tag: [tags.color, /* @__PURE__ */ tags.constant(tags.name), /* @__PURE__ */ tags.standard(tags.name)],
    color: whiskey
  },
  {
    tag: [/* @__PURE__ */ tags.definition(tags.name), tags.separator],
    color: ivory
  },
  {
    tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
    color: chalky
  },
  {
    tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, /* @__PURE__ */ tags.special(tags.string)],
    color: cyan
  },
  {
    tag: [tags.meta, tags.comment],
    color: stone
  },
  {
    tag: tags.strong,
    fontWeight: "bold"
  },
  {
    tag: tags.emphasis,
    fontStyle: "italic"
  },
  {
    tag: tags.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: tags.link,
    color: stone,
    textDecoration: "underline"
  },
  {
    tag: tags.heading,
    fontWeight: "bold",
    color: coral
  },
  {
    tag: [tags.atom, tags.bool, /* @__PURE__ */ tags.special(tags.variableName)],
    color: whiskey
  },
  {
    tag: [tags.processingInstruction, tags.string, tags.inserted],
    color: sage
  },
  {
    tag: tags.invalid,
    color: invalid
  }
]);
var oneDark = [oneDarkTheme, /* @__PURE__ */ syntaxHighlighting(oneDarkHighlightStyle)];

// node_modules/codemirror/dist/index.js
var basicSetup = /* @__PURE__ */ (() => [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  crosshairCursor(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...completionKeymap,
    ...lintKeymap
  ])
])();
var minimalSetup = /* @__PURE__ */ (() => [
  highlightSpecialChars(),
  history(),
  drawSelection(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  keymap.of([
    ...defaultKeymap,
    ...historyKeymap
  ])
])();

// node_modules/@codemirror/merge/dist/index.js
var Change = class _Change {
  constructor(fromA, toA, fromB, toB) {
    this.fromA = fromA;
    this.toA = toA;
    this.fromB = fromB;
    this.toB = toB;
  }
  /**
  @internal
  */
  offset(offA, offB = offA) {
    return new _Change(this.fromA + offA, this.toA + offA, this.fromB + offB, this.toB + offB);
  }
};
function findDiff(a, fromA, toA, b, fromB, toB) {
  if (a == b)
    return [];
  let prefix = commonPrefix(a, fromA, toA, b, fromB, toB);
  let suffix = commonSuffix(a, fromA + prefix, toA, b, fromB + prefix, toB);
  fromA += prefix;
  toA -= suffix;
  fromB += prefix;
  toB -= suffix;
  let lenA = toA - fromA, lenB = toB - fromB;
  if (!lenA || !lenB)
    return [new Change(fromA, toA, fromB, toB)];
  if (lenA > lenB) {
    let found = a.slice(fromA, toA).indexOf(b.slice(fromB, toB));
    if (found > -1)
      return [
        new Change(fromA, fromA + found, fromB, fromB),
        new Change(fromA + found + lenB, toA, toB, toB)
      ];
  } else if (lenB > lenA) {
    let found = b.slice(fromB, toB).indexOf(a.slice(fromA, toA));
    if (found > -1)
      return [
        new Change(fromA, fromA, fromB, fromB + found),
        new Change(toA, toA, fromB + found + lenA, toB)
      ];
  }
  if (lenA == 1 || lenB == 1)
    return [new Change(fromA, toA, fromB, toB)];
  let half = halfMatch(a, fromA, toA, b, fromB, toB);
  if (half) {
    let [sharedA, sharedB, sharedLen] = half;
    return findDiff(a, fromA, sharedA, b, fromB, sharedB).concat(findDiff(a, sharedA + sharedLen, toA, b, sharedB + sharedLen, toB));
  }
  return findSnake(a, fromA, toA, b, fromB, toB);
}
var scanLimit = 1e9;
var timeout = 0;
var crude = false;
function findSnake(a, fromA, toA, b, fromB, toB) {
  let lenA = toA - fromA, lenB = toB - fromB;
  if (scanLimit < 1e9 && Math.min(lenA, lenB) > scanLimit * 16 || timeout > 0 && Date.now() > timeout) {
    if (Math.min(lenA, lenB) > scanLimit * 64)
      return [new Change(fromA, toA, fromB, toB)];
    return crudeMatch(a, fromA, toA, b, fromB, toB);
  }
  let off = Math.ceil((lenA + lenB) / 2);
  frontier1.reset(off);
  frontier2.reset(off);
  let match1 = (x, y) => a.charCodeAt(fromA + x) == b.charCodeAt(fromB + y);
  let match2 = (x, y) => a.charCodeAt(toA - x - 1) == b.charCodeAt(toB - y - 1);
  let test1 = (lenA - lenB) % 2 != 0 ? frontier2 : null, test2 = test1 ? null : frontier1;
  for (let depth = 0; depth < off; depth++) {
    if (depth > scanLimit || timeout > 0 && !(depth & 63) && Date.now() > timeout)
      return crudeMatch(a, fromA, toA, b, fromB, toB);
    let done = frontier1.advance(depth, lenA, lenB, off, test1, false, match1) || frontier2.advance(depth, lenA, lenB, off, test2, true, match2);
    if (done)
      return bisect(a, fromA, toA, fromA + done[0], b, fromB, toB, fromB + done[1]);
  }
  return [new Change(fromA, toA, fromB, toB)];
}
var Frontier = class {
  constructor() {
    this.vec = [];
  }
  reset(off) {
    this.len = off << 1;
    for (let i = 0; i < this.len; i++)
      this.vec[i] = -1;
    this.vec[off + 1] = 0;
    this.start = this.end = 0;
  }
  advance(depth, lenX, lenY, vOff, other, fromBack, match) {
    for (let k = -depth + this.start; k <= depth - this.end; k += 2) {
      let off = vOff + k;
      let x = k == -depth || k != depth && this.vec[off - 1] < this.vec[off + 1] ? this.vec[off + 1] : this.vec[off - 1] + 1;
      let y = x - k;
      while (x < lenX && y < lenY && match(x, y)) {
        x++;
        y++;
      }
      this.vec[off] = x;
      if (x > lenX) {
        this.end += 2;
      } else if (y > lenY) {
        this.start += 2;
      } else if (other) {
        let offOther = vOff + (lenX - lenY) - k;
        if (offOther >= 0 && offOther < this.len && other.vec[offOther] != -1) {
          if (!fromBack) {
            let xOther = lenX - other.vec[offOther];
            if (x >= xOther)
              return [x, y];
          } else {
            let xOther = other.vec[offOther];
            if (xOther >= lenX - x)
              return [xOther, vOff + xOther - offOther];
          }
        }
      }
    }
    return null;
  }
};
var frontier1 = /* @__PURE__ */ new Frontier();
var frontier2 = /* @__PURE__ */ new Frontier();
function bisect(a, fromA, toA, splitA, b, fromB, toB, splitB) {
  let stop = false;
  if (!validIndex(a, splitA) && ++splitA == toA)
    stop = true;
  if (!validIndex(b, splitB) && ++splitB == toB)
    stop = true;
  if (stop)
    return [new Change(fromA, toA, fromB, toB)];
  return findDiff(a, fromA, splitA, b, fromB, splitB).concat(findDiff(a, splitA, toA, b, splitB, toB));
}
function chunkSize(lenA, lenB) {
  let size = 1, max = Math.min(lenA, lenB);
  while (size < max)
    size = size << 1;
  return size;
}
function commonPrefix(a, fromA, toA, b, fromB, toB) {
  if (fromA == toA || fromA == toB || a.charCodeAt(fromA) != b.charCodeAt(fromB))
    return 0;
  let chunk = chunkSize(toA - fromA, toB - fromB);
  for (let pA = fromA, pB = fromB; ; ) {
    let endA = pA + chunk, endB = pB + chunk;
    if (endA > toA || endB > toB || a.slice(pA, endA) != b.slice(pB, endB)) {
      if (chunk == 1)
        return pA - fromA - (validIndex(a, pA) ? 0 : 1);
      chunk = chunk >> 1;
    } else if (endA == toA || endB == toB) {
      return endA - fromA;
    } else {
      pA = endA;
      pB = endB;
    }
  }
}
function commonSuffix(a, fromA, toA, b, fromB, toB) {
  if (fromA == toA || fromB == toB || a.charCodeAt(toA - 1) != b.charCodeAt(toB - 1))
    return 0;
  let chunk = chunkSize(toA - fromA, toB - fromB);
  for (let pA = toA, pB = toB; ; ) {
    let sA = pA - chunk, sB = pB - chunk;
    if (sA < fromA || sB < fromB || a.slice(sA, pA) != b.slice(sB, pB)) {
      if (chunk == 1)
        return toA - pA - (validIndex(a, pA) ? 0 : 1);
      chunk = chunk >> 1;
    } else if (sA == fromA || sB == fromB) {
      return toA - sA;
    } else {
      pA = sA;
      pB = sB;
    }
  }
}
function findMatch(a, fromA, toA, b, fromB, toB, size, divideTo) {
  let rangeB = b.slice(fromB, toB);
  let best = null;
  for (; ; ) {
    if (best || size < divideTo)
      return best;
    for (let start = fromA + size; ; ) {
      if (!validIndex(a, start))
        start++;
      let end = start + size;
      if (!validIndex(a, end))
        end += end == start + 1 ? 1 : -1;
      if (end >= toA)
        break;
      let seed = a.slice(start, end);
      let found = -1;
      while ((found = rangeB.indexOf(seed, found + 1)) != -1) {
        let prefixAfter = commonPrefix(a, end, toA, b, fromB + found + seed.length, toB);
        let suffixBefore = commonSuffix(a, fromA, start, b, fromB, fromB + found);
        let length = seed.length + prefixAfter + suffixBefore;
        if (!best || best[2] < length)
          best = [start - suffixBefore, fromB + found - suffixBefore, length];
      }
      start = end;
    }
    if (divideTo < 0)
      return best;
    size = size >> 1;
  }
}
function halfMatch(a, fromA, toA, b, fromB, toB) {
  let lenA = toA - fromA, lenB = toB - fromB;
  if (lenA < lenB) {
    let result = halfMatch(b, fromB, toB, a, fromA, toA);
    return result && [result[1], result[0], result[2]];
  }
  if (lenA < 4 || lenB * 2 < lenA)
    return null;
  return findMatch(a, fromA, toA, b, fromB, toB, Math.floor(lenA / 4), -1);
}
function crudeMatch(a, fromA, toA, b, fromB, toB) {
  crude = true;
  let lenA = toA - fromA, lenB = toB - fromB;
  let result;
  if (lenA < lenB) {
    let inv = findMatch(b, fromB, toB, a, fromA, toA, Math.floor(lenA / 6), 50);
    result = inv && [inv[1], inv[0], inv[2]];
  } else {
    result = findMatch(a, fromA, toA, b, fromB, toB, Math.floor(lenB / 6), 50);
  }
  if (!result)
    return [new Change(fromA, toA, fromB, toB)];
  let [sharedA, sharedB, sharedLen] = result;
  return findDiff(a, fromA, sharedA, b, fromB, sharedB).concat(findDiff(a, sharedA + sharedLen, toA, b, sharedB + sharedLen, toB));
}
function mergeAdjacent(changes, minGap) {
  for (let i = 1; i < changes.length; i++) {
    let prev = changes[i - 1], cur = changes[i];
    if (prev.toA > cur.fromA - minGap && prev.toB > cur.fromB - minGap) {
      changes[i - 1] = new Change(prev.fromA, cur.toA, prev.fromB, cur.toB);
      changes.splice(i--, 1);
    }
  }
}
function normalize(a, b, changes) {
  for (; ; ) {
    mergeAdjacent(changes, 1);
    let moved = false;
    for (let i = 0; i < changes.length; i++) {
      let ch = changes[i], pre, post;
      if (pre = commonPrefix(a, ch.fromA, ch.toA, b, ch.fromB, ch.toB))
        ch = changes[i] = new Change(ch.fromA + pre, ch.toA, ch.fromB + pre, ch.toB);
      if (post = commonSuffix(a, ch.fromA, ch.toA, b, ch.fromB, ch.toB))
        ch = changes[i] = new Change(ch.fromA, ch.toA - post, ch.fromB, ch.toB - post);
      let lenA = ch.toA - ch.fromA, lenB = ch.toB - ch.fromB;
      if (lenA && lenB)
        continue;
      let beforeLen = ch.fromA - (i ? changes[i - 1].toA : 0);
      let afterLen = (i < changes.length - 1 ? changes[i + 1].fromA : a.length) - ch.toA;
      if (!beforeLen || !afterLen)
        continue;
      let text = lenA ? a.slice(ch.fromA, ch.toA) : b.slice(ch.fromB, ch.toB);
      if (beforeLen <= text.length && a.slice(ch.fromA - beforeLen, ch.fromA) == text.slice(text.length - beforeLen)) {
        changes[i] = new Change(ch.fromA - beforeLen, ch.toA - beforeLen, ch.fromB - beforeLen, ch.toB - beforeLen);
        moved = true;
      } else if (afterLen <= text.length && a.slice(ch.toA, ch.toA + afterLen) == text.slice(0, afterLen)) {
        changes[i] = new Change(ch.fromA + afterLen, ch.toA + afterLen, ch.fromB + afterLen, ch.toB + afterLen);
        moved = true;
      }
    }
    if (!moved)
      break;
  }
  return changes;
}
function makePresentable(changes, a, b) {
  for (let posA = 0, i = 0; i < changes.length; i++) {
    let change = changes[i];
    let lenA = change.toA - change.fromA, lenB = change.toB - change.fromB;
    if (lenA && lenB || lenA > 3 || lenB > 3) {
      let nextChangeA = i == changes.length - 1 ? a.length : changes[i + 1].fromA;
      let maxScanBefore = change.fromA - posA, maxScanAfter = nextChangeA - change.toA;
      let boundBefore = findWordBoundaryBefore(a, change.fromA, maxScanBefore);
      let boundAfter = findWordBoundaryAfter(a, change.toA, maxScanAfter);
      let lenBefore = change.fromA - boundBefore, lenAfter = boundAfter - change.toA;
      if ((!lenA || !lenB) && lenBefore && lenAfter) {
        let changeLen = Math.max(lenA, lenB);
        let [changeText, changeFrom, changeTo] = lenA ? [a, change.fromA, change.toA] : [b, change.fromB, change.toB];
        if (changeLen > lenBefore && a.slice(boundBefore, change.fromA) == changeText.slice(changeTo - lenBefore, changeTo)) {
          change = changes[i] = new Change(boundBefore, boundBefore + lenA, change.fromB - lenBefore, change.toB - lenBefore);
          boundBefore = change.fromA;
          boundAfter = findWordBoundaryAfter(a, change.toA, nextChangeA - change.toA);
        } else if (changeLen > lenAfter && a.slice(change.toA, boundAfter) == changeText.slice(changeFrom, changeFrom + lenAfter)) {
          change = changes[i] = new Change(boundAfter - lenA, boundAfter, change.fromB + lenAfter, change.toB + lenAfter);
          boundAfter = change.toA;
          boundBefore = findWordBoundaryBefore(a, change.fromA, change.fromA - posA);
        }
        lenBefore = change.fromA - boundBefore;
        lenAfter = boundAfter - change.toA;
      }
      if (lenBefore || lenAfter) {
        change = changes[i] = new Change(change.fromA - lenBefore, change.toA + lenAfter, change.fromB - lenBefore, change.toB + lenAfter);
      } else if (!lenA) {
        let first = findLineBreakAfter(b, change.fromB, change.toB), len;
        let last = first < 0 ? -1 : findLineBreakBefore(b, change.toB, change.fromB);
        if (first > -1 && (len = first - change.fromB) <= maxScanAfter && b.slice(change.fromB, first) == b.slice(change.toB, change.toB + len))
          change = changes[i] = change.offset(len);
        else if (last > -1 && (len = change.toB - last) <= maxScanBefore && b.slice(change.fromB - len, change.fromB) == b.slice(last, change.toB))
          change = changes[i] = change.offset(-len);
      } else if (!lenB) {
        let first = findLineBreakAfter(a, change.fromA, change.toA), len;
        let last = first < 0 ? -1 : findLineBreakBefore(a, change.toA, change.fromA);
        if (first > -1 && (len = first - change.fromA) <= maxScanAfter && a.slice(change.fromA, first) == a.slice(change.toA, change.toA + len))
          change = changes[i] = change.offset(len);
        else if (last > -1 && (len = change.toA - last) <= maxScanBefore && a.slice(change.fromA - len, change.fromA) == a.slice(last, change.toA))
          change = changes[i] = change.offset(-len);
      }
    }
    posA = change.toA;
  }
  mergeAdjacent(changes, 3);
  return changes;
}
var wordChar;
try {
  wordChar = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}]", "u");
} catch (_) {
}
function asciiWordChar(code) {
  return code > 48 && code < 58 || code > 64 && code < 91 || code > 96 && code < 123;
}
function wordCharAfter(s, pos) {
  if (pos == s.length)
    return 0;
  let next = s.charCodeAt(pos);
  if (next < 192)
    return asciiWordChar(next) ? 1 : 0;
  if (!wordChar)
    return 0;
  if (!isSurrogate1(next) || pos == s.length - 1)
    return wordChar.test(String.fromCharCode(next)) ? 1 : 0;
  return wordChar.test(s.slice(pos, pos + 2)) ? 2 : 0;
}
function wordCharBefore(s, pos) {
  if (!pos)
    return 0;
  let prev = s.charCodeAt(pos - 1);
  if (prev < 192)
    return asciiWordChar(prev) ? 1 : 0;
  if (!wordChar)
    return 0;
  if (!isSurrogate2(prev) || pos == 1)
    return wordChar.test(String.fromCharCode(prev)) ? 1 : 0;
  return wordChar.test(s.slice(pos - 2, pos)) ? 2 : 0;
}
var MAX_SCAN = 8;
function findWordBoundaryAfter(s, pos, max) {
  if (pos == s.length || !wordCharBefore(s, pos))
    return pos;
  for (let cur = pos, end = pos + max, i = 0; i < MAX_SCAN; i++) {
    let size = wordCharAfter(s, cur);
    if (!size || cur + size > end)
      return cur;
    cur += size;
  }
  return pos;
}
function findWordBoundaryBefore(s, pos, max) {
  if (!pos || !wordCharAfter(s, pos))
    return pos;
  for (let cur = pos, end = pos - max, i = 0; i < MAX_SCAN; i++) {
    let size = wordCharBefore(s, cur);
    if (!size || cur - size < end)
      return cur;
    cur -= size;
  }
  return pos;
}
function findLineBreakBefore(s, pos, stop) {
  for (; pos != stop; pos--)
    if (s.charCodeAt(pos - 1) == 10)
      return pos;
  return -1;
}
function findLineBreakAfter(s, pos, stop) {
  for (; pos != stop; pos++)
    if (s.charCodeAt(pos) == 10)
      return pos;
  return -1;
}
var isSurrogate1 = (code) => code >= 55296 && code <= 56319;
var isSurrogate2 = (code) => code >= 56320 && code <= 57343;
function validIndex(s, index) {
  return !index || index == s.length || !isSurrogate1(s.charCodeAt(index - 1)) || !isSurrogate2(s.charCodeAt(index));
}
function diff(a, b, config) {
  var _a;
  scanLimit = ((_a = config === null || config === void 0 ? void 0 : config.scanLimit) !== null && _a !== void 0 ? _a : 1e9) >> 1;
  timeout = (config === null || config === void 0 ? void 0 : config.timeout) ? Date.now() + config.timeout : 0;
  crude = false;
  return normalize(a, b, findDiff(a, 0, a.length, b, 0, b.length));
}
function diffIsPrecise() {
  return !crude;
}
function presentableDiff(a, b, config) {
  return makePresentable(diff(a, b, config), a, b);
}
var mergeConfig = /* @__PURE__ */ Facet.define({
  combine: (values) => values[0]
});
var setChunks = /* @__PURE__ */ StateEffect.define();
var computeChunks = /* @__PURE__ */ Facet.define();
var ChunkField = /* @__PURE__ */ StateField.define({
  create(state) {
    return null;
  },
  update(current, tr) {
    for (let e of tr.effects)
      if (e.is(setChunks))
        current = e.value;
    for (let comp of tr.state.facet(computeChunks))
      current = comp(current, tr);
    return current;
  }
});
var Chunk = class _Chunk {
  constructor(changes, fromA, toA, fromB, toB, precise = true) {
    this.changes = changes;
    this.fromA = fromA;
    this.toA = toA;
    this.fromB = fromB;
    this.toB = toB;
    this.precise = precise;
  }
  /**
  @internal
  */
  offset(offA, offB) {
    return offA || offB ? new _Chunk(this.changes, this.fromA + offA, this.toA + offA, this.fromB + offB, this.toB + offB, this.precise) : this;
  }
  /**
  Returns `fromA` if the chunk is empty in A, or the end of the
  last line in the chunk otherwise.
  */
  get endA() {
    return Math.max(this.fromA, this.toA - 1);
  }
  /**
  Returns `fromB` if the chunk is empty in B, or the end of the
  last line in the chunk otherwise.
  */
  get endB() {
    return Math.max(this.fromB, this.toB - 1);
  }
  /**
  Build a set of changed chunks for the given documents.
  */
  static build(a, b, conf) {
    let diff2 = presentableDiff(a.toString(), b.toString(), conf);
    return toChunks(diff2, a, b, 0, 0, diffIsPrecise());
  }
  /**
  Update a set of chunks for changes in document A. `a` should
  hold the updated document A.
  */
  static updateA(chunks, a, b, changes, conf) {
    return updateChunks(findRangesForChange(chunks, changes, true, b.length), chunks, a, b, conf);
  }
  /**
  Update a set of chunks for changes in document B.
  */
  static updateB(chunks, a, b, changes, conf) {
    return updateChunks(findRangesForChange(chunks, changes, false, a.length), chunks, a, b, conf);
  }
};
function fromLine(fromA, fromB, a, b) {
  let lineA = a.lineAt(fromA), lineB = b.lineAt(fromB);
  return lineA.to == fromA && lineB.to == fromB && fromA < a.length && fromB < b.length ? [fromA + 1, fromB + 1] : [lineA.from, lineB.from];
}
function toLine(toA, toB, a, b) {
  let lineA = a.lineAt(toA), lineB = b.lineAt(toB);
  return lineA.from == toA && lineB.from == toB ? [toA, toB] : [lineA.to + 1, lineB.to + 1];
}
function toChunks(changes, a, b, offA, offB, precise) {
  let chunks = [];
  for (let i = 0; i < changes.length; i++) {
    let change = changes[i];
    let [fromA, fromB] = fromLine(change.fromA + offA, change.fromB + offB, a, b);
    let [toA, toB] = toLine(change.toA + offA, change.toB + offB, a, b);
    let chunk = [change.offset(-fromA + offA, -fromB + offB)];
    while (i < changes.length - 1) {
      let next = changes[i + 1];
      let [nextA, nextB] = fromLine(next.fromA + offA, next.fromB + offB, a, b);
      if (nextA > toA + 1 && nextB > toB + 1)
        break;
      chunk.push(next.offset(-fromA + offA, -fromB + offB));
      [toA, toB] = toLine(next.toA + offA, next.toB + offB, a, b);
      i++;
    }
    chunks.push(new Chunk(chunk, fromA, Math.max(fromA, toA), fromB, Math.max(fromB, toB), precise));
  }
  return chunks;
}
var updateMargin = 1e3;
function findPos(chunks, pos, isA, start) {
  let lo = 0, hi = chunks.length;
  for (; ; ) {
    if (lo == hi) {
      let refA = 0, refB = 0;
      if (lo)
        ({ toA: refA, toB: refB } = chunks[lo - 1]);
      let off = pos - (isA ? refA : refB);
      return [refA + off, refB + off];
    }
    let mid = lo + hi >> 1, chunk = chunks[mid];
    let [from, to] = isA ? [chunk.fromA, chunk.toA] : [chunk.fromB, chunk.toB];
    if (from > pos)
      hi = mid;
    else if (to <= pos)
      lo = mid + 1;
    else
      return start ? [chunk.fromA, chunk.fromB] : [chunk.toA, chunk.toB];
  }
}
function findRangesForChange(chunks, changes, isA, otherLen) {
  let ranges = [];
  changes.iterChangedRanges((cFromA, cToA, cFromB, cToB) => {
    let fromA = 0, toA = isA ? changes.length : otherLen;
    let fromB = 0, toB = isA ? otherLen : changes.length;
    if (cFromA > updateMargin)
      [fromA, fromB] = findPos(chunks, cFromA - updateMargin, isA, true);
    if (cToA < changes.length - updateMargin)
      [toA, toB] = findPos(chunks, cToA + updateMargin, isA, false);
    let lenDiff = cToB - cFromB - (cToA - cFromA), last;
    let [diffA, diffB] = isA ? [lenDiff, 0] : [0, lenDiff];
    if (ranges.length && (last = ranges[ranges.length - 1]).toA >= fromA)
      ranges[ranges.length - 1] = {
        fromA: last.fromA,
        fromB: last.fromB,
        toA,
        toB,
        diffA: last.diffA + diffA,
        diffB: last.diffB + diffB
      };
    else
      ranges.push({ fromA, toA, fromB, toB, diffA, diffB });
  });
  return ranges;
}
function updateChunks(ranges, chunks, a, b, conf) {
  if (!ranges.length)
    return chunks;
  let result = [];
  for (let i = 0, offA = 0, offB = 0, chunkI = 0; ; i++) {
    let range = i == ranges.length ? null : ranges[i];
    let fromA = range ? range.fromA + offA : a.length, fromB = range ? range.fromB + offB : b.length;
    while (chunkI < chunks.length) {
      let next = chunks[chunkI];
      if (Math.min(a.length, next.toA + offA) > fromA || Math.min(b.length, next.toB + offB) > fromB)
        break;
      result.push(next.offset(offA, offB));
      chunkI++;
    }
    if (!range)
      break;
    let toA = range.toA + offA + range.diffA, toB = range.toB + offB + range.diffB;
    let diff2 = presentableDiff(a.sliceString(fromA, toA), b.sliceString(fromB, toB), conf);
    for (let chunk of toChunks(diff2, a, b, fromA, fromB, diffIsPrecise()))
      result.push(chunk);
    offA += range.diffA;
    offB += range.diffB;
    while (chunkI < chunks.length) {
      let next = chunks[chunkI];
      if (next.fromA + offA > toA && next.fromB + offB > toB)
        break;
      chunkI++;
    }
  }
  return result;
}
var defaultDiffConfig = { scanLimit: 500 };
var decorateChunks = /* @__PURE__ */ ViewPlugin.fromClass(class {
  constructor(view) {
    ({ deco: this.deco, gutter: this.gutter } = getChunkDeco(view));
  }
  update(update) {
    if (update.docChanged || update.viewportChanged || chunksChanged(update.startState, update.state) || configChanged(update.startState, update.state))
      ({ deco: this.deco, gutter: this.gutter } = getChunkDeco(update.view));
  }
}, {
  decorations: (d) => d.deco
});
var changeGutter = /* @__PURE__ */ Prec.low(/* @__PURE__ */ gutter({
  class: "cm-changeGutter",
  markers: (view) => {
    var _a;
    return ((_a = view.plugin(decorateChunks)) === null || _a === void 0 ? void 0 : _a.gutter) || RangeSet.empty;
  }
}));
function chunksChanged(s1, s2) {
  return s1.field(ChunkField, false) != s2.field(ChunkField, false);
}
function configChanged(s1, s2) {
  return s1.facet(mergeConfig) != s2.facet(mergeConfig);
}
var changedLine = /* @__PURE__ */ Decoration.line({ class: "cm-changedLine" });
var changedText = /* @__PURE__ */ Decoration.mark({ class: "cm-changedText" });
var inserted = /* @__PURE__ */ Decoration.mark({ tagName: "ins", class: "cm-insertedLine" });
var deleted = /* @__PURE__ */ Decoration.mark({ tagName: "del", class: "cm-deletedLine" });
var changedLineGutterMarker = /* @__PURE__ */ new class extends GutterMarker {
  constructor() {
    super(...arguments);
    this.elementClass = "cm-changedLineGutter";
  }
}();
function buildChunkDeco(chunk, doc, isA, highlight, builder, gutterBuilder) {
  let from = isA ? chunk.fromA : chunk.fromB, to = isA ? chunk.toA : chunk.toB;
  let changeI = 0;
  if (from != to) {
    builder.add(from, from, changedLine);
    builder.add(from, to, isA ? deleted : inserted);
    if (gutterBuilder)
      gutterBuilder.add(from, from, changedLineGutterMarker);
    for (let iter = doc.iterRange(from, to - 1), pos = from; !iter.next().done; ) {
      if (iter.lineBreak) {
        pos++;
        builder.add(pos, pos, changedLine);
        if (gutterBuilder)
          gutterBuilder.add(pos, pos, changedLineGutterMarker);
        continue;
      }
      let lineEnd = pos + iter.value.length;
      if (highlight)
        while (changeI < chunk.changes.length) {
          let nextChange = chunk.changes[changeI];
          let nextFrom = from + (isA ? nextChange.fromA : nextChange.fromB);
          let nextTo = from + (isA ? nextChange.toA : nextChange.toB);
          let chFrom = Math.max(pos, nextFrom), chTo = Math.min(lineEnd, nextTo);
          if (chFrom < chTo)
            builder.add(chFrom, chTo, changedText);
          if (nextTo < lineEnd)
            changeI++;
          else
            break;
        }
      pos = lineEnd;
    }
  }
}
function getChunkDeco(view) {
  let chunks = view.state.field(ChunkField);
  let { side, highlightChanges, markGutter, overrideChunk } = view.state.facet(mergeConfig), isA = side == "a";
  let builder = new RangeSetBuilder();
  let gutterBuilder = markGutter ? new RangeSetBuilder() : null;
  let { from, to } = view.viewport;
  for (let chunk of chunks) {
    if ((isA ? chunk.fromA : chunk.fromB) >= to)
      break;
    if ((isA ? chunk.toA : chunk.toB) > from) {
      if (!overrideChunk || !overrideChunk(view.state, chunk, builder, gutterBuilder))
        buildChunkDeco(chunk, view.state.doc, isA, highlightChanges, builder, gutterBuilder);
    }
  }
  return { deco: builder.finish(), gutter: gutterBuilder && gutterBuilder.finish() };
}
var Spacer = class extends WidgetType {
  constructor(height) {
    super();
    this.height = height;
  }
  eq(other) {
    return this.height == other.height;
  }
  toDOM() {
    let elt = document.createElement("div");
    elt.className = "cm-mergeSpacer";
    elt.style.height = this.height + "px";
    return elt;
  }
  updateDOM(dom) {
    dom.style.height = this.height + "px";
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
};
var adjustSpacers = /* @__PURE__ */ StateEffect.define({
  map: (value, mapping) => value.map(mapping)
});
var Spacers = /* @__PURE__ */ StateField.define({
  create: () => Decoration.none,
  update: (spacers, tr) => {
    for (let e of tr.effects)
      if (e.is(adjustSpacers))
        return e.value;
    return spacers.map(tr.changes);
  },
  provide: (f) => EditorView.decorations.from(f)
});
var epsilon = 0.01;
function compareSpacers(a, b) {
  if (a.size != b.size)
    return false;
  let iA = a.iter(), iB = b.iter();
  while (iA.value) {
    if (iA.from != iB.from || Math.abs(iA.value.spec.widget.height - iB.value.spec.widget.height) > 1)
      return false;
    iA.next();
    iB.next();
  }
  return true;
}
function updateSpacers(a, b, chunks) {
  let buildA = new RangeSetBuilder(), buildB = new RangeSetBuilder();
  let spacersA = a.state.field(Spacers).iter(), spacersB = b.state.field(Spacers).iter();
  let posA = 0, posB = 0, offA = 0, offB = 0, vpA = a.viewport, vpB = b.viewport;
  for (let chunkI = 0; ; chunkI++) {
    let chunk = chunkI < chunks.length ? chunks[chunkI] : null;
    let endA = chunk ? chunk.fromA : a.state.doc.length, endB = chunk ? chunk.fromB : b.state.doc.length;
    if (posA < endA) {
      let heightA = a.lineBlockAt(posA).top + offA;
      let heightB = b.lineBlockAt(posB).top + offB;
      let diff2 = heightA - heightB;
      if (diff2 < -epsilon) {
        offA -= diff2;
        buildA.add(posA, posA, Decoration.widget({
          widget: new Spacer(-diff2),
          block: true,
          side: -1
        }));
      } else if (diff2 > epsilon) {
        offB += diff2;
        buildB.add(posB, posB, Decoration.widget({
          widget: new Spacer(diff2),
          block: true,
          side: -1
        }));
      }
    }
    if (endA > posA + 1e3 && posA < vpA.from && endA > vpA.from && posB < vpB.from && endB > vpB.from) {
      let off = Math.min(vpA.from - posA, vpB.from - posB);
      posA += off;
      posB += off;
      chunkI--;
    } else if (!chunk) {
      break;
    } else {
      posA = chunk.toA;
      posB = chunk.toB;
    }
    while (spacersA.value && spacersA.from < posA) {
      offA -= spacersA.value.spec.widget.height;
      spacersA.next();
    }
    while (spacersB.value && spacersB.from < posB) {
      offB -= spacersB.value.spec.widget.height;
      spacersB.next();
    }
  }
  while (spacersA.value) {
    offA -= spacersA.value.spec.widget.height;
    spacersA.next();
  }
  while (spacersB.value) {
    offB -= spacersB.value.spec.widget.height;
    spacersB.next();
  }
  let docDiff = a.contentHeight + offA - (b.contentHeight + offB);
  if (docDiff < epsilon) {
    buildA.add(a.state.doc.length, a.state.doc.length, Decoration.widget({
      widget: new Spacer(-docDiff),
      block: true,
      side: 1
    }));
  } else if (docDiff > epsilon) {
    buildB.add(b.state.doc.length, b.state.doc.length, Decoration.widget({
      widget: new Spacer(docDiff),
      block: true,
      side: 1
    }));
  }
  let decoA = buildA.finish(), decoB = buildB.finish();
  if (!compareSpacers(decoA, a.state.field(Spacers)))
    a.dispatch({ effects: adjustSpacers.of(decoA) });
  if (!compareSpacers(decoB, b.state.field(Spacers)))
    b.dispatch({ effects: adjustSpacers.of(decoB) });
}
var uncollapseUnchanged = /* @__PURE__ */ StateEffect.define({
  map: (value, change) => change.mapPos(value)
});
var CollapseWidget = class extends WidgetType {
  constructor(lines) {
    super();
    this.lines = lines;
  }
  eq(other) {
    return this.lines == other.lines;
  }
  toDOM(view) {
    let outer = document.createElement("div");
    outer.className = "cm-collapsedLines";
    outer.textContent = view.state.phrase("$ unchanged lines", this.lines);
    outer.addEventListener("click", (e) => {
      let pos = view.posAtDOM(e.target);
      view.dispatch({ effects: uncollapseUnchanged.of(pos) });
      let { side, sibling } = view.state.facet(mergeConfig);
      if (sibling)
        sibling().dispatch({ effects: uncollapseUnchanged.of(mapPos(pos, view.state.field(ChunkField), side == "a")) });
    });
    return outer;
  }
  ignoreEvent(e) {
    return e instanceof MouseEvent;
  }
  get estimatedHeight() {
    return 27;
  }
  get type() {
    return "collapsed-unchanged-code";
  }
};
function mapPos(pos, chunks, isA) {
  let startOur = 0, startOther = 0;
  for (let i = 0; ; i++) {
    let next = i < chunks.length ? chunks[i] : null;
    if (!next || (isA ? next.fromA : next.fromB) >= pos)
      return startOther + (pos - startOur);
    [startOur, startOther] = isA ? [next.toA, next.toB] : [next.toB, next.toA];
  }
}
var CollapsedRanges = /* @__PURE__ */ StateField.define({
  create(state) {
    return Decoration.none;
  },
  update(deco, tr) {
    deco = deco.map(tr.changes);
    for (let e of tr.effects)
      if (e.is(uncollapseUnchanged))
        deco = deco.update({ filter: (from) => from != e.value });
    return deco;
  },
  provide: (f) => EditorView.decorations.from(f)
});
function collapseUnchanged({ margin = 3, minSize = 4 }) {
  return CollapsedRanges.init((state) => buildCollapsedRanges(state, margin, minSize));
}
function buildCollapsedRanges(state, margin, minLines) {
  let builder = new RangeSetBuilder();
  let isA = state.facet(mergeConfig).side == "a";
  let chunks = state.field(ChunkField);
  let prevLine = 1;
  for (let i = 0; ; i++) {
    let chunk = i < chunks.length ? chunks[i] : null;
    let collapseFrom = i ? prevLine + margin : 1;
    let collapseTo = chunk ? state.doc.lineAt(isA ? chunk.fromA : chunk.fromB).number - 1 - margin : state.doc.lines;
    let lines = collapseTo - collapseFrom + 1;
    if (lines >= minLines) {
      builder.add(state.doc.line(collapseFrom).from, state.doc.line(collapseTo).to, Decoration.replace({
        widget: new CollapseWidget(lines),
        block: true
      }));
    }
    if (!chunk)
      break;
    prevLine = state.doc.lineAt(Math.min(state.doc.length, isA ? chunk.toA : chunk.toB)).number;
  }
  return builder.finish();
}
var externalTheme = /* @__PURE__ */ EditorView.styleModule.of(/* @__PURE__ */ new StyleModule({
  ".cm-mergeView": {
    overflowY: "auto"
  },
  ".cm-mergeViewEditors": {
    display: "flex",
    alignItems: "stretch"
  },
  ".cm-mergeViewEditor": {
    flexGrow: 1,
    flexBasis: 0,
    overflow: "hidden"
  },
  ".cm-merge-revert": {
    width: "1.6em",
    flexGrow: 0,
    flexShrink: 0,
    position: "relative"
  },
  ".cm-merge-revert button": {
    position: "absolute",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer"
  }
}));
var baseTheme = /* @__PURE__ */ EditorView.baseTheme({
  ".cm-mergeView & .cm-scroller, .cm-mergeView &": {
    height: "auto !important",
    overflowY: "visible !important"
  },
  "&.cm-merge-a .cm-changedLine, .cm-deletedChunk": {
    backgroundColor: "rgba(160, 128, 100, .08)"
  },
  "&.cm-merge-b .cm-changedLine, .cm-inlineChangedLine": {
    backgroundColor: "rgba(100, 160, 128, .08)"
  },
  "&light.cm-merge-a .cm-changedText, &light .cm-deletedChunk .cm-deletedText": {
    background: "linear-gradient(#ee443366, #ee443366) bottom/100% 2px no-repeat"
  },
  "&dark.cm-merge-a .cm-changedText, &dark .cm-deletedChunk .cm-deletedText": {
    background: "linear-gradient(#ffaa9966, #ffaa9966) bottom/100% 2px no-repeat"
  },
  "&light.cm-merge-b .cm-changedText": {
    background: "linear-gradient(#22bb22aa, #22bb22aa) bottom/100% 2px no-repeat"
  },
  "&dark.cm-merge-b .cm-changedText": {
    background: "linear-gradient(#88ff88aa, #88ff88aa) bottom/100% 2px no-repeat"
  },
  "&.cm-merge-b .cm-deletedText": {
    background: "#ff000033"
  },
  ".cm-insertedLine, .cm-deletedLine, .cm-deletedLine del": {
    textDecoration: "none"
  },
  ".cm-deletedChunk": {
    paddingLeft: "6px",
    "& .cm-chunkButtons": {
      position: "absolute",
      insetInlineEnd: "5px"
    },
    "& button": {
      border: "none",
      cursor: "pointer",
      color: "white",
      margin: "0 2px",
      borderRadius: "3px",
      "&[name=accept]": { background: "#2a2" },
      "&[name=reject]": { background: "#d43" }
    }
  },
  ".cm-collapsedLines": {
    padding: "5px 5px 5px 10px",
    cursor: "pointer",
    "&:before": {
      content: '"\u299A"',
      marginInlineEnd: "7px"
    },
    "&:after": {
      content: '"\u299A"',
      marginInlineStart: "7px"
    }
  },
  "&light .cm-collapsedLines": {
    color: "#444",
    background: "linear-gradient(to bottom, transparent 0, #f3f3f3 30%, #f3f3f3 70%, transparent 100%)"
  },
  "&dark .cm-collapsedLines": {
    color: "#ddd",
    background: "linear-gradient(to bottom, transparent 0, #222 30%, #222 70%, transparent 100%)"
  },
  ".cm-changeGutter": { width: "3px", paddingLeft: "1px" },
  "&light.cm-merge-a .cm-changedLineGutter, &light .cm-deletedLineGutter": { background: "#e43" },
  "&dark.cm-merge-a .cm-changedLineGutter, &dark .cm-deletedLineGutter": { background: "#fa9" },
  "&light.cm-merge-b .cm-changedLineGutter": { background: "#2b2" },
  "&dark.cm-merge-b .cm-changedLineGutter": { background: "#8f8" },
  ".cm-inlineChangedLineGutter": { background: "#75d" }
});
var collapseCompartment = /* @__PURE__ */ new Compartment();
var configCompartment = /* @__PURE__ */ new Compartment();
var MergeView = class {
  /**
  Create a new merge view.
  */
  constructor(config) {
    this.revertDOM = null;
    this.revertToA = false;
    this.revertToLeft = false;
    this.measuring = -1;
    this.diffConf = config.diffConfig || defaultDiffConfig;
    let sharedExtensions = [
      Prec.low(decorateChunks),
      baseTheme,
      externalTheme,
      Spacers,
      EditorView.updateListener.of((update) => {
        if (this.measuring < 0 && (update.heightChanged || update.viewportChanged) && !update.transactions.some((tr) => tr.effects.some((e) => e.is(adjustSpacers))))
          this.measure();
      })
    ];
    let configA = [mergeConfig.of({
      side: "a",
      sibling: () => this.b,
      highlightChanges: config.highlightChanges !== false,
      markGutter: config.gutter !== false
    })];
    if (config.gutter !== false)
      configA.push(changeGutter);
    let stateA = EditorState.create({
      doc: config.a.doc,
      selection: config.a.selection,
      extensions: [
        config.a.extensions || [],
        EditorView.editorAttributes.of({ class: "cm-merge-a" }),
        configCompartment.of(configA),
        sharedExtensions
      ]
    });
    let configB = [mergeConfig.of({
      side: "b",
      sibling: () => this.a,
      highlightChanges: config.highlightChanges !== false,
      markGutter: config.gutter !== false
    })];
    if (config.gutter !== false)
      configB.push(changeGutter);
    let stateB = EditorState.create({
      doc: config.b.doc,
      selection: config.b.selection,
      extensions: [
        config.b.extensions || [],
        EditorView.editorAttributes.of({ class: "cm-merge-b" }),
        configCompartment.of(configB),
        sharedExtensions
      ]
    });
    this.chunks = Chunk.build(stateA.doc, stateB.doc, this.diffConf);
    let add = [
      ChunkField.init(() => this.chunks),
      collapseCompartment.of(config.collapseUnchanged ? collapseUnchanged(config.collapseUnchanged) : [])
    ];
    stateA = stateA.update({ effects: StateEffect.appendConfig.of(add) }).state;
    stateB = stateB.update({ effects: StateEffect.appendConfig.of(add) }).state;
    this.dom = document.createElement("div");
    this.dom.className = "cm-mergeView";
    this.editorDOM = this.dom.appendChild(document.createElement("div"));
    this.editorDOM.className = "cm-mergeViewEditors";
    let orientation = config.orientation || "a-b";
    let wrapA = document.createElement("div");
    wrapA.className = "cm-mergeViewEditor";
    let wrapB = document.createElement("div");
    wrapB.className = "cm-mergeViewEditor";
    this.editorDOM.appendChild(orientation == "a-b" ? wrapA : wrapB);
    this.editorDOM.appendChild(orientation == "a-b" ? wrapB : wrapA);
    this.a = new EditorView({
      state: stateA,
      parent: wrapA,
      root: config.root,
      dispatchTransactions: (trs) => this.dispatch(trs, this.a)
    });
    this.b = new EditorView({
      state: stateB,
      parent: wrapB,
      root: config.root,
      dispatchTransactions: (trs) => this.dispatch(trs, this.b)
    });
    this.setupRevertControls(!!config.revertControls, config.revertControls == "b-to-a", config.renderRevertControl);
    if (config.parent)
      config.parent.appendChild(this.dom);
    this.scheduleMeasure();
  }
  dispatch(trs, target) {
    if (trs.some((tr) => tr.docChanged)) {
      let last = trs[trs.length - 1];
      let changes = trs.reduce((chs, tr) => chs.compose(tr.changes), ChangeSet.empty(trs[0].startState.doc.length));
      this.chunks = target == this.a ? Chunk.updateA(this.chunks, last.newDoc, this.b.state.doc, changes, this.diffConf) : Chunk.updateB(this.chunks, this.a.state.doc, last.newDoc, changes, this.diffConf);
      target.update([...trs, last.state.update({ effects: setChunks.of(this.chunks) })]);
      let other = target == this.a ? this.b : this.a;
      other.update([other.state.update({ effects: setChunks.of(this.chunks) })]);
      this.scheduleMeasure();
    } else {
      target.update(trs);
    }
  }
  /**
  Reconfigure an existing merge view.
  */
  reconfigure(config) {
    if ("diffConfig" in config) {
      this.diffConf = config.diffConfig;
    }
    if ("orientation" in config) {
      let aB = config.orientation != "b-a";
      if (aB != (this.editorDOM.firstChild == this.a.dom.parentNode)) {
        let domA = this.a.dom.parentNode, domB = this.b.dom.parentNode;
        domA.remove();
        domB.remove();
        this.editorDOM.insertBefore(aB ? domA : domB, this.editorDOM.firstChild);
        this.editorDOM.appendChild(aB ? domB : domA);
        this.revertToLeft = !this.revertToLeft;
        if (this.revertDOM)
          this.revertDOM.textContent = "";
      }
    }
    if ("revertControls" in config || "renderRevertControl" in config) {
      let controls = !!this.revertDOM, toA = this.revertToA, render = this.renderRevert;
      if ("revertControls" in config) {
        controls = !!config.revertControls;
        toA = config.revertControls == "b-to-a";
      }
      if ("renderRevertControl" in config)
        render = config.renderRevertControl;
      this.setupRevertControls(controls, toA, render);
    }
    let highlight = "highlightChanges" in config, gutter2 = "gutter" in config, collapse = "collapseUnchanged" in config;
    if (highlight || gutter2 || collapse) {
      let effectsA = [], effectsB = [];
      if (highlight || gutter2) {
        let currentConfig = this.a.state.facet(mergeConfig);
        let markGutter = gutter2 ? config.gutter !== false : currentConfig.markGutter;
        let highlightChanges = highlight ? config.highlightChanges !== false : currentConfig.highlightChanges;
        effectsA.push(configCompartment.reconfigure([
          mergeConfig.of({ side: "a", sibling: () => this.b, highlightChanges, markGutter }),
          markGutter ? changeGutter : []
        ]));
        effectsB.push(configCompartment.reconfigure([
          mergeConfig.of({ side: "b", sibling: () => this.a, highlightChanges, markGutter }),
          markGutter ? changeGutter : []
        ]));
      }
      if (collapse) {
        let effect2 = collapseCompartment.reconfigure(config.collapseUnchanged ? collapseUnchanged(config.collapseUnchanged) : []);
        effectsA.push(effect2);
        effectsB.push(effect2);
      }
      this.a.dispatch({ effects: effectsA });
      this.b.dispatch({ effects: effectsB });
    }
    this.scheduleMeasure();
  }
  setupRevertControls(controls, toA, render) {
    this.revertToA = toA;
    this.revertToLeft = this.revertToA == (this.editorDOM.firstChild == this.a.dom.parentNode);
    this.renderRevert = render;
    if (!controls && this.revertDOM) {
      this.revertDOM.remove();
      this.revertDOM = null;
    } else if (controls && !this.revertDOM) {
      this.revertDOM = this.editorDOM.insertBefore(document.createElement("div"), this.editorDOM.firstChild.nextSibling);
      this.revertDOM.addEventListener("mousedown", (e) => this.revertClicked(e));
      this.revertDOM.className = "cm-merge-revert";
    } else if (this.revertDOM) {
      this.revertDOM.textContent = "";
    }
  }
  scheduleMeasure() {
    if (this.measuring < 0) {
      let win = this.dom.ownerDocument.defaultView || window;
      this.measuring = win.requestAnimationFrame(() => {
        this.measuring = -1;
        this.measure();
      });
    }
  }
  measure() {
    updateSpacers(this.a, this.b, this.chunks);
    if (this.revertDOM)
      this.updateRevertButtons();
  }
  updateRevertButtons() {
    let dom = this.revertDOM, next = dom.firstChild;
    let vpA = this.a.viewport, vpB = this.b.viewport;
    for (let i = 0; i < this.chunks.length; i++) {
      let chunk = this.chunks[i];
      if (chunk.fromA > vpA.to || chunk.fromB > vpB.to)
        break;
      if (chunk.fromA < vpA.from || chunk.fromB < vpB.from)
        continue;
      let top = this.a.lineBlockAt(chunk.fromA).top + "px";
      while (next && +next.dataset.chunk < i)
        next = rm(next);
      if (next && next.dataset.chunk == String(i)) {
        if (next.style.top != top)
          next.style.top = top;
        next = next.nextSibling;
      } else {
        dom.insertBefore(this.renderRevertButton(top, i), next);
      }
    }
    while (next)
      next = rm(next);
  }
  renderRevertButton(top, chunk) {
    let elt;
    if (this.renderRevert) {
      elt = this.renderRevert();
    } else {
      elt = document.createElement("button");
      let text = this.a.state.phrase("Revert this chunk");
      elt.setAttribute("aria-label", text);
      elt.setAttribute("title", text);
      elt.textContent = this.revertToLeft ? "\u21DC" : "\u21DD";
    }
    elt.style.top = top;
    elt.setAttribute("data-chunk", String(chunk));
    return elt;
  }
  revertClicked(e) {
    let target = e.target, chunk;
    while (target && target.parentNode != this.revertDOM)
      target = target.parentNode;
    if (target && (chunk = this.chunks[target.dataset.chunk])) {
      let [source, dest, srcFrom, srcTo, destFrom, destTo] = this.revertToA ? [this.b, this.a, chunk.fromB, chunk.toB, chunk.fromA, chunk.toA] : [this.a, this.b, chunk.fromA, chunk.toA, chunk.fromB, chunk.toB];
      let insert = source.state.sliceDoc(srcFrom, Math.max(srcFrom, srcTo - 1));
      if (srcFrom != srcTo && destTo <= dest.state.doc.length)
        insert += source.state.lineBreak;
      dest.dispatch({
        changes: { from: destFrom, to: Math.min(dest.state.doc.length, destTo), insert },
        userEvent: "revert"
      });
      e.preventDefault();
    }
  }
  /**
  Destroy this merge view.
  */
  destroy() {
    this.a.destroy();
    this.b.destroy();
    if (this.measuring > -1)
      (this.dom.ownerDocument.defaultView || window).cancelAnimationFrame(this.measuring);
    this.dom.remove();
  }
};
function rm(elt) {
  let next = elt.nextSibling;
  elt.remove();
  return next;
}

// node_modules/@acrodata/code-editor/fesm2022/acrodata-code-editor.mjs
var External = Annotation.define();
var _CodeEditor = class _CodeEditor {
  constructor() {
    this._elementRef = inject(ElementRef);
    this.autoFocus = false;
    this.value = "";
    this.disabled = false;
    this.readonly = false;
    this.theme = "light";
    this.placeholder = "";
    this.indentWithTab = false;
    this.indentUnit = "";
    this.lineWrapping = false;
    this.highlightWhitespace = false;
    this.languages = [];
    this.language = "";
    this.setup = "basic";
    this.extensions = [];
    this.change = new EventEmitter();
    this.focus = new EventEmitter();
    this.blur = new EventEmitter();
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._updateListener = EditorView.updateListener.of((vu) => {
      if (vu.docChanged && !vu.transactions.some((tr) => tr.annotation(External))) {
        const value = vu.state.doc.toString();
        this._onChange(value);
        this.change.emit(value);
      }
    });
    this._editableConf = new Compartment();
    this._readonlyConf = new Compartment();
    this._themeConf = new Compartment();
    this._placeholderConf = new Compartment();
    this._indentWithTabConf = new Compartment();
    this._indentUnitConf = new Compartment();
    this._lineWrappingConf = new Compartment();
    this._highlightWhitespaceConf = new Compartment();
    this._languageConf = new Compartment();
  }
  _getAllExtensions() {
    return [this._updateListener, this._editableConf.of([]), this._readonlyConf.of([]), this._themeConf.of([]), this._placeholderConf.of([]), this._indentWithTabConf.of([]), this._indentUnitConf.of([]), this._lineWrappingConf.of([]), this._highlightWhitespaceConf.of([]), this._languageConf.of([]), this.setup === "basic" ? basicSetup : this.setup === "minimal" ? minimalSetup : [], ...this.extensions];
  }
  ngOnChanges(changes) {
    if (!this.view) return;
    if (changes["value"]) {
      this.setValue(this.value);
    }
    if (changes["disabled"]) {
      this.setEditable(!this.disabled);
    }
    if (changes["readonly"]) {
      this.setReadonly(this.readonly);
    }
    if (changes["theme"]) {
      this.setTheme(this.theme);
    }
    if (changes["placeholder"]) {
      this.setPlaceholder(this.placeholder);
    }
    if (changes["indentWithTab"]) {
      this.setIndentWithTab(this.indentWithTab);
    }
    if (changes["indentUnit"]) {
      this.setIndentUnit(this.indentUnit);
    }
    if (changes["lineWrapping"]) {
      this.setLineWrapping(this.lineWrapping);
    }
    if (changes["highlightWhitespace"]) {
      this.setHighlightWhitespace(this.highlightWhitespace);
    }
    if (changes["language"]) {
      this.setLanguage(this.language);
    }
    if (changes["setup"] || changes["extensions"]) {
      this.setExtensions(this._getAllExtensions());
    }
  }
  ngOnInit() {
    this.state = EditorState.create({
      doc: this.value,
      extensions: this._getAllExtensions()
    });
    this.view = new EditorView({
      root: this.root,
      parent: this._elementRef.nativeElement,
      state: this.state
    });
    if (this.autoFocus) {
      this.view.focus();
    }
    this.view.contentDOM.addEventListener("focus", () => {
      this._onTouched();
      this.focus.emit();
    });
    this.view.contentDOM.addEventListener("blur", () => {
      this._onTouched();
      this.blur.emit();
    });
    this.setEditable(!this.disabled);
    this.setReadonly(this.readonly);
    this.setTheme(this.theme);
    this.setPlaceholder(this.placeholder);
    this.setIndentWithTab(this.indentWithTab);
    this.setIndentUnit(this.indentUnit);
    this.setLineWrapping(this.lineWrapping);
    this.setHighlightWhitespace(this.highlightWhitespace);
    this.setLanguage(this.language);
  }
  ngOnDestroy() {
    this.view.destroy();
  }
  writeValue(value) {
    if (this.view) {
      this.setValue(value);
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.setEditable(!isDisabled);
  }
  /** Sets editor's value. */
  setValue(value) {
    this.view.dispatch({
      changes: {
        from: 0,
        to: this.view.state.doc.length,
        insert: value
      },
      annotations: Transaction.addToHistory.of(false)
    });
  }
  _dispatchEffects(effects) {
    return this.view.dispatch({
      effects
    });
  }
  /** Sets the root extensions of the editor. */
  setExtensions(value) {
    this._dispatchEffects(StateEffect.reconfigure.of(value));
  }
  /** Sets editor's editable state. */
  setEditable(value) {
    this._dispatchEffects(this._editableConf.reconfigure(EditorView.editable.of(value)));
  }
  /** Sets editor's readonly state. */
  setReadonly(value) {
    this._dispatchEffects(this._readonlyConf.reconfigure(EditorState.readOnly.of(value)));
  }
  /** Sets editor's theme. */
  setTheme(value) {
    this._dispatchEffects(this._themeConf.reconfigure(value === "light" ? [] : value === "dark" ? oneDark : value));
  }
  /** Sets editor's placeholder. */
  setPlaceholder(value) {
    this._dispatchEffects(this._placeholderConf.reconfigure(value ? placeholder(value) : []));
  }
  /** Sets editor' indentWithTab. */
  setIndentWithTab(value) {
    this._dispatchEffects(this._indentWithTabConf.reconfigure(value ? keymap.of([indentWithTab]) : []));
  }
  /** Sets editor's indentUnit. */
  setIndentUnit(value) {
    this._dispatchEffects(this._indentUnitConf.reconfigure(value ? indentUnit.of(value) : []));
  }
  /** Sets editor's lineWrapping. */
  setLineWrapping(value) {
    this._dispatchEffects(this._lineWrappingConf.reconfigure(value ? EditorView.lineWrapping : []));
  }
  /** Sets editor's highlightWhitespace. */
  setHighlightWhitespace(value) {
    this._dispatchEffects(this._highlightWhitespaceConf.reconfigure(value ? highlightWhitespace() : []));
  }
  /** Sets editor's language dynamically. */
  setLanguage(lang) {
    if (!lang || lang == "plaintext") {
      this._dispatchEffects(this._languageConf.reconfigure([]));
      return;
    }
    if (this.languages.length === 0) {
      if (this.view) {
        console.error("No supported languages. Please set the `languages` prop at first.");
      }
      return;
    }
    const langDesc = this._findLanguage(lang);
    langDesc?.load().then((lang2) => {
      this._dispatchEffects(this._languageConf.reconfigure([lang2]));
    });
  }
  /** Find the language's extension by its name. Case insensitive. */
  _findLanguage(name) {
    for (const lang of this.languages) {
      for (const alias of [lang.name, ...lang.alias]) {
        if (name.toLowerCase() === alias.toLowerCase()) {
          return lang;
        }
      }
    }
    console.error("Language not found:", name);
    console.info("Supported language names:", this.languages.map((lang) => lang.name).join(", "));
    return null;
  }
};
_CodeEditor.\u0275fac = function CodeEditor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CodeEditor)();
};
_CodeEditor.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CodeEditor,
  selectors: [["code-editor"]],
  hostAttrs: [1, "code-editor"],
  inputs: {
    root: "root",
    autoFocus: [2, "autoFocus", "autoFocus", booleanAttribute],
    value: "value",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    readonly: [2, "readonly", "readonly", booleanAttribute],
    theme: "theme",
    placeholder: "placeholder",
    indentWithTab: [2, "indentWithTab", "indentWithTab", booleanAttribute],
    indentUnit: "indentUnit",
    lineWrapping: [2, "lineWrapping", "lineWrapping", booleanAttribute],
    highlightWhitespace: [2, "highlightWhitespace", "highlightWhitespace", booleanAttribute],
    languages: "languages",
    language: "language",
    setup: "setup",
    extensions: "extensions"
  },
  outputs: {
    change: "change",
    focus: "focus",
    blur: "blur"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _CodeEditor),
    multi: true
  }]), \u0275\u0275NgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function CodeEditor_Template(rf, ctx) {
  },
  styles: [".code-editor{display:block}.code-editor .cm-editor{height:100%}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var CodeEditor = _CodeEditor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditor, [{
    type: Component,
    args: [{
      selector: "code-editor",
      standalone: true,
      template: ``,
      host: {
        class: "code-editor"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CodeEditor),
        multi: true
      }],
      styles: [".code-editor{display:block}.code-editor .cm-editor{height:100%}\n"]
    }]
  }], null, {
    root: [{
      type: Input
    }],
    autoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    theme: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    indentWithTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indentUnit: [{
      type: Input
    }],
    lineWrapping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlightWhitespace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    languages: [{
      type: Input
    }],
    language: [{
      type: Input
    }],
    setup: [{
      type: Input
    }],
    extensions: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }]
  });
})();
var _DiffEditor = class _DiffEditor {
  constructor() {
    this._elementRef = inject(ElementRef);
    this.setup = "basic";
    this.originalValue = "";
    this.originalExtensions = [];
    this.modifiedValue = "";
    this.modifiedExtensions = [];
    this.highlightChanges = true;
    this.gutter = true;
    this.disabled = false;
    this.originalValueChange = new EventEmitter();
    this.originalFocus = new EventEmitter();
    this.originalBlur = new EventEmitter();
    this.modifiedValueChange = new EventEmitter();
    this.modifiedFocus = new EventEmitter();
    this.modifiedBlur = new EventEmitter();
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._updateListener = (editor) => {
      return EditorView.updateListener.of((vu) => {
        if (vu.docChanged && !vu.transactions.some((tr) => tr.annotation(External))) {
          const value = vu.state.doc.toString();
          if (editor == "a") {
            this._onChange({
              original: value,
              modified: this.modifiedValue
            });
            this.originalValue = value;
            this.originalValueChange.emit(value);
          } else if (editor == "b") {
            this._onChange({
              original: this.originalValue,
              modified: value
            });
            this.modifiedValue = value;
            this.modifiedValueChange.emit(value);
          }
        }
      });
    };
    this._editableConf = new Compartment();
  }
  ngOnChanges(changes) {
    if (changes["originalValue"]) {
      this.setValue("a", this.originalValue);
    }
    if (changes["modifiedValue"]) {
      this.setValue("b", this.modifiedValue);
    }
    if (changes["orientation"]) {
      this.mergeView?.reconfigure({
        orientation: this.orientation
      });
    }
    if (changes["revertControls"]) {
      this.mergeView?.reconfigure({
        revertControls: this.revertControls
      });
    }
    if (changes["renderRevertControl"]) {
      this.mergeView?.reconfigure({
        renderRevertControl: this.renderRevertControl
      });
    }
    if (changes["highlightChanges"]) {
      this.mergeView?.reconfigure({
        highlightChanges: this.highlightChanges
      });
    }
    if (changes["gutter"]) {
      this.mergeView?.reconfigure({
        gutter: this.gutter
      });
    }
    if (changes["collapseUnchanged"]) {
      this.mergeView?.reconfigure({
        collapseUnchanged: this.collapseUnchanged
      });
    }
    if (changes["diffConfig"]) {
      this.mergeView?.reconfigure({
        diffConfig: this.diffConfig
      });
    }
    if (changes["disabled"]) {
      this.setEditable("a", !this.disabled);
      this.setEditable("b", !this.disabled);
    }
  }
  ngOnInit() {
    this.mergeView = new MergeView({
      parent: this._elementRef.nativeElement,
      a: {
        doc: this.originalValue,
        extensions: [this._updateListener("a"), this._editableConf.of([]), this.setup === "basic" ? basicSetup : this.setup === "minimal" ? minimalSetup : [], ...this.originalExtensions]
      },
      b: {
        doc: this.modifiedValue,
        extensions: [this._updateListener("b"), this._editableConf.of([]), this.setup === "basic" ? basicSetup : this.setup === "minimal" ? minimalSetup : [], ...this.modifiedExtensions]
      },
      orientation: this.orientation,
      revertControls: this.revertControls,
      renderRevertControl: this.renderRevertControl,
      highlightChanges: this.highlightChanges,
      gutter: this.gutter,
      collapseUnchanged: this.collapseUnchanged,
      diffConfig: this.diffConfig
    });
    this.mergeView?.a.contentDOM.addEventListener("focus", () => {
      this._onTouched();
      this.originalFocus.emit();
    });
    this.mergeView?.a.contentDOM.addEventListener("blur", () => {
      this._onTouched();
      this.originalBlur.emit();
    });
    this.mergeView?.b.contentDOM.addEventListener("focus", () => {
      this._onTouched();
      this.modifiedFocus.emit();
    });
    this.mergeView?.b.contentDOM.addEventListener("blur", () => {
      this._onTouched();
      this.modifiedBlur.emit();
    });
    this.setEditable("a", !this.disabled);
    this.setEditable("b", !this.disabled);
  }
  ngOnDestroy() {
    this.mergeView?.destroy();
  }
  writeValue(value) {
    if (this.mergeView && value != null && typeof value === "object") {
      this.originalValue = value.original;
      this.modifiedValue = value.modified;
      this.setValue("a", value.original);
      this.setValue("b", value.modified);
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.setEditable("a", !isDisabled);
    this.setEditable("b", !isDisabled);
  }
  /** Sets diff-editor's value. */
  setValue(editor, value) {
    this.mergeView?.[editor].dispatch({
      changes: {
        from: 0,
        to: this.mergeView[editor].state.doc.length,
        insert: value
      }
    });
  }
  /** Sets diff-editor's editable state. */
  setEditable(editor, value) {
    this.mergeView?.[editor].dispatch({
      effects: this._editableConf.reconfigure(EditorView.editable.of(value))
    });
  }
};
_DiffEditor.\u0275fac = function DiffEditor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DiffEditor)();
};
_DiffEditor.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _DiffEditor,
  selectors: [["diff-editor"]],
  hostAttrs: [1, "diff-editor"],
  inputs: {
    setup: "setup",
    originalValue: "originalValue",
    originalExtensions: "originalExtensions",
    modifiedValue: "modifiedValue",
    modifiedExtensions: "modifiedExtensions",
    orientation: "orientation",
    revertControls: "revertControls",
    renderRevertControl: "renderRevertControl",
    highlightChanges: [2, "highlightChanges", "highlightChanges", booleanAttribute],
    gutter: [2, "gutter", "gutter", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    collapseUnchanged: "collapseUnchanged",
    diffConfig: "diffConfig"
  },
  outputs: {
    originalValueChange: "originalValueChange",
    originalFocus: "originalFocus",
    originalBlur: "originalBlur",
    modifiedValueChange: "modifiedValueChange",
    modifiedFocus: "modifiedFocus",
    modifiedBlur: "modifiedBlur"
  },
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DiffEditor),
    multi: true
  }]), \u0275\u0275NgOnChangesFeature],
  decls: 0,
  vars: 0,
  template: function DiffEditor_Template(rf, ctx) {
  },
  styles: [".diff-editor{display:block}.diff-editor :is(.cm-mergeView,.cm-mergeViewEditors){height:100%}.diff-editor :is(.cm-mergeView .cm-editor,.cm-mergeView .cm-scroller){height:100%!important}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var DiffEditor = _DiffEditor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiffEditor, [{
    type: Component,
    args: [{
      selector: "diff-editor",
      standalone: true,
      template: ``,
      host: {
        class: "diff-editor"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DiffEditor),
        multi: true
      }],
      styles: [".diff-editor{display:block}.diff-editor :is(.cm-mergeView,.cm-mergeViewEditors){height:100%}.diff-editor :is(.cm-mergeView .cm-editor,.cm-mergeView .cm-scroller){height:100%!important}\n"]
    }]
  }], null, {
    setup: [{
      type: Input
    }],
    originalValue: [{
      type: Input
    }],
    originalExtensions: [{
      type: Input
    }],
    modifiedValue: [{
      type: Input
    }],
    modifiedExtensions: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    revertControls: [{
      type: Input
    }],
    renderRevertControl: [{
      type: Input
    }],
    highlightChanges: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    gutter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapseUnchanged: [{
      type: Input
    }],
    diffConfig: [{
      type: Input
    }],
    originalValueChange: [{
      type: Output
    }],
    originalFocus: [{
      type: Output
    }],
    originalBlur: [{
      type: Output
    }],
    modifiedValueChange: [{
      type: Output
    }],
    modifiedFocus: [{
      type: Output
    }],
    modifiedBlur: [{
      type: Output
    }]
  });
})();
var _CodeEditorModule = class _CodeEditorModule {
};
_CodeEditorModule.\u0275fac = function CodeEditorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CodeEditorModule)();
};
_CodeEditorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CodeEditorModule,
  imports: [CodeEditor, DiffEditor],
  exports: [CodeEditor, DiffEditor]
});
_CodeEditorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var CodeEditorModule = _CodeEditorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditorModule, [{
    type: NgModule,
    args: [{
      imports: [CodeEditor, DiffEditor],
      exports: [CodeEditor, DiffEditor]
    }]
  }], null, null);
})();

// src/app/config-editor/sections/vanilla-json-editor.ts
var _c0 = ["editorContainer"];
var VanillaJsonEditorComponent = class _VanillaJsonEditorComponent {
  editorContainer;
  content = {};
  readOnly = false;
  contentChange = new EventEmitter();
  editor = null;
  initialized = false;
  suppressChange = false;
  async ngAfterViewInit() {
    const { createJSONEditor } = await import("./chunk-UPRNJ3ZS.js");
    this.editor = createJSONEditor({
      target: this.editorContainer.nativeElement,
      props: {
        content: { json: this.content },
        mode: "tree",
        readOnly: this.readOnly,
        onChange: (updatedContent) => {
          if (this.suppressChange)
            return;
          const data = updatedContent.json !== void 0 ? updatedContent.json : JSON.parse(updatedContent.text);
          this.contentChange.emit(data);
        }
      }
    });
    this.initialized = true;
  }
  ngOnChanges(changes) {
    if (!this.initialized || !this.editor)
      return;
    if (changes["content"]) {
      this.suppressChange = true;
      this.editor.update({ content: { json: this.content } });
      this.suppressChange = false;
    }
    if (changes["readOnly"]) {
      this.editor.updateProps({ readOnly: this.readOnly });
    }
  }
  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }
  static \u0275fac = function VanillaJsonEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VanillaJsonEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VanillaJsonEditorComponent, selectors: [["app-vanilla-json-editor"]], viewQuery: function VanillaJsonEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editorContainer = _t.first);
    }
  }, inputs: { content: "content", readOnly: "readOnly" }, outputs: { contentChange: "contentChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["editorContainer", ""], [1, "vanilla-editor-container"]], template: function VanillaJsonEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "div", 1, 0);
    }
  }, styles: ["\n\n.vanilla-editor-container[_ngcontent-%COMP%] {\n  height: 500px;\n}\n.vanilla-editor-container   [_nghost-%COMP%]     .jse-main {\n  min-height: 500px;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VanillaJsonEditorComponent, [{
    type: Component,
    args: [{ selector: "app-vanilla-json-editor", standalone: true, template: `<div #editorContainer class="vanilla-editor-container"></div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;109d2d9499334de8f92ecf8dcccda458a41649506acfcd7382b4fd6aab211bba;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/vanilla-json-editor.ts */\n.vanilla-editor-container {\n  height: 500px;\n}\n.vanilla-editor-container :host ::ng-deep .jse-main {\n  min-height: 500px;\n}\n"] }]
  }], null, { editorContainer: [{
    type: ViewChild,
    args: ["editorContainer"]
  }], content: [{
    type: Input
  }], readOnly: [{
    type: Input
  }], contentChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VanillaJsonEditorComponent, { className: "VanillaJsonEditorComponent", filePath: "src/app/config-editor/sections/vanilla-json-editor.ts", lineNumber: 32 });
})();

// src/app/config-editor/sections/config-section-json-editor.ts
var _forTrack012 = ($index, $item) => $item.value;
function ConfigSectionJsonEditorComponent_For_7_Template(rf, ctx) {
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
function ConfigSectionJsonEditorComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 21);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx);
  }
}
function ConfigSectionJsonEditorComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "code-editor", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ConfigSectionJsonEditorComponent_Conditional_23_Template_code_editor_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editorContent, $event) || (ctx_r2.editorContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ConfigSectionJsonEditorComponent_Conditional_23_Template_code_editor_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditorChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editorContent);
    \u0275\u0275property("extensions", ctx_r2.extensions);
  }
}
function ConfigSectionJsonEditorComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "app-vanilla-json-editor", 24);
    \u0275\u0275listener("contentChange", function ConfigSectionJsonEditorComponent_Conditional_24_Template_app_vanilla_json_editor_contentChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTreeChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r2.treeContent());
  }
}
function ConfigSectionJsonEditorComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Modified");
    \u0275\u0275elementEnd();
  }
}
function ConfigSectionJsonEditorComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r2.editorContent.length), " chars ");
  }
}
var ConfigSectionJsonEditorComponent = class _ConfigSectionJsonEditorComponent {
  config;
  configChange = new EventEmitter();
  editorContent = "";
  selectedSection = "FULL_CONFIG";
  parseError = signal(null, ...ngDevMode ? [{ debugName: "parseError" }] : []);
  hasEditorChanges = signal(false, ...ngDevMode ? [{ debugName: "hasEditorChanges" }] : []);
  copyLabel = signal("Copy", ...ngDevMode ? [{ debugName: "copyLabel" }] : []);
  viewMode = signal("code", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  treeContent = signal({}, ...ngDevMode ? [{ debugName: "treeContent" }] : []);
  originalContent = "";
  extensions = [
    json(),
    EditorView.lineWrapping
  ];
  sectionOptions = [
    { value: "FULL_CONFIG", label: "Full Configuration" },
    { value: "MIRTH_CONNECT", label: "Mirth Connect" },
    { value: "SUBMISSION", label: "Submission" },
    { value: "PROCESSING", label: "Processing" },
    { value: "SERVICE_EVENT_TYPES", label: "Service Event Types" },
    { value: "TIME_INTERVAL_MAPPINGS", label: "Time Intervals" },
    { value: "SUBMIT_FIELDS", label: "Submit Fields" },
    { value: "CODE_TABLES", label: "Code Tables" },
    { value: "CODE_TABLE_MAPPINGS", label: "Code Table Mappings" },
    { value: "MAPPINGS", label: "Mappings" },
    { value: "FHIR_RESOURCE_CODES", label: "FHIR Codes" },
    { value: "MHA_LOCATIONS", label: "MHA Locations" }
  ];
  selectedSectionLabel = computed(() => {
    const option = this.sectionOptions.find((o) => o.value === this.selectedSection);
    return option?.label ?? "Full Configuration";
  }, ...ngDevMode ? [{ debugName: "selectedSectionLabel" }] : []);
  ngOnChanges(changes) {
    if (changes["config"] && this.config) {
      this.loadSection(this.selectedSection);
    }
  }
  onSectionChange(section) {
    if (this.hasEditorChanges()) {
      if (!confirm("You have unapplied changes. Switch section and discard?")) {
        this.selectedSection = this.selectedSection;
        return;
      }
    }
    this.loadSection(section);
  }
  onEditorChange(value) {
    this.validateJson(value);
    this.hasEditorChanges.set(value !== this.originalContent);
  }
  formatJson() {
    try {
      const parsed = JSON.parse(this.editorContent);
      this.editorContent = JSON.stringify(parsed, null, 2);
      this.parseError.set(null);
      this.hasEditorChanges.set(this.editorContent !== this.originalContent);
    } catch (e) {
    }
  }
  copyToClipboard() {
    const text = this.viewMode() === "tree" ? JSON.stringify(this.treeContent(), null, 2) : this.editorContent;
    navigator.clipboard.writeText(text).then(() => {
      this.copyLabel.set("Copied!");
      setTimeout(() => this.copyLabel.set("Copy"), 2e3);
    });
  }
  pasteFromClipboard() {
    navigator.clipboard.readText().then((text) => {
      this.editorContent = text;
      this.validateJson(text);
      this.hasEditorChanges.set(text !== this.originalContent);
    });
  }
  setViewMode(mode) {
    if (mode === this.viewMode())
      return;
    if (mode === "tree") {
      if (this.parseError())
        return;
      try {
        this.treeContent.set(JSON.parse(this.editorContent));
      } catch {
        return;
      }
    } else {
      this.editorContent = JSON.stringify(this.treeContent(), null, 2);
      this.hasEditorChanges.set(this.editorContent !== this.originalContent);
    }
    this.viewMode.set(mode);
  }
  onTreeChange(data) {
    this.treeContent.set(data);
    const newContent = JSON.stringify(data, null, 2);
    this.hasEditorChanges.set(newContent !== this.originalContent);
  }
  applyChanges() {
    try {
      let parsed;
      if (this.viewMode() === "tree") {
        parsed = this.treeContent();
      } else {
        if (this.parseError())
          return;
        parsed = JSON.parse(this.editorContent);
      }
      if (this.selectedSection === "FULL_CONFIG") {
        this.configChange.emit(parsed);
      } else {
        const updated = __spreadValues({}, this.config);
        this.applySectionToConfig(updated, this.selectedSection, parsed);
        this.configChange.emit(updated);
      }
      this.originalContent = JSON.stringify(parsed, null, 2);
      this.editorContent = this.originalContent;
      this.hasEditorChanges.set(false);
    } catch (e) {
      this.parseError.set(e instanceof Error ? e.message : "Failed to apply changes");
    }
  }
  loadSection(section) {
    const data = this.extractSection(section);
    this.editorContent = JSON.stringify(data, null, 2);
    this.originalContent = this.editorContent;
    this.treeContent.set(data);
    this.parseError.set(null);
    this.hasEditorChanges.set(false);
  }
  extractSection(section) {
    if (section === "FULL_CONFIG")
      return this.config;
    const sectionMap = {
      "MIRTH_CONNECT": "MIRTH_CONNECT",
      "SUBMISSION": "SUBMISSION",
      "PROCESSING": "PROCESSING",
      "SUBMIT_FIELDS": "SUBMIT_FIELDS",
      "CODE_TABLES": "CODE_TABLES",
      "CODE_TABLE_MAPPINGS": "CODE_TABLE_MAPPINGS",
      "MAPPINGS": "MAPPINGS",
      "FHIR_RESOURCE_CODES": "FHIR_RESOURCE_CODES",
      "MHA_LOCATIONS": "MHA_LOCATIONS",
      "SERVICE_EVENT_TYPES": "SERVICE_EVENT_TYPES",
      "TIME_INTERVAL_MAPPINGS": "TIME_INTERVAL_MAPPINGS"
    };
    const key = sectionMap[section];
    return key ? this.config[key] : this.config;
  }
  applySectionToConfig(config, section, data) {
    switch (section) {
      case "MIRTH_CONNECT":
        config.MIRTH_CONNECT = data;
        break;
      case "SUBMISSION":
        config.SUBMISSION = data;
        break;
      case "PROCESSING":
        config.PROCESSING = data;
        break;
      case "SUBMIT_FIELDS":
        config.SUBMIT_FIELDS = data;
        config.SUBMIT_FIELDS_CNT = data.length;
        break;
      case "CODE_TABLES":
        config.CODE_TABLES = data;
        config.CODE_TABLES_CNT = data.length;
        break;
      case "CODE_TABLE_MAPPINGS":
        config.CODE_TABLE_MAPPINGS = data;
        config.CODE_TABLE_MAPPING_CNT = data.length;
        break;
      case "MAPPINGS":
        config.MAPPINGS = data;
        config.MAPPING_CNT = data.length;
        break;
      case "FHIR_RESOURCE_CODES":
        config.FHIR_RESOURCE_CODES = data;
        config.FHIR_RESOURCE_CODES_CNT = data.length;
        break;
      case "MHA_LOCATIONS":
        config.MHA_LOCATIONS = data;
        config.MHA_LOCATIONS_CNT = data.length;
        break;
      case "SERVICE_EVENT_TYPES":
        config.SERVICE_EVENT_TYPES = data;
        config.SERVICE_EVENT_TYPES_CNT = data.length;
        break;
      case "TIME_INTERVAL_MAPPINGS":
        config.TIME_INTERVAL_MAPPINGS = data;
        config.TIME_INTERVAL_MAPPINGS_CNT = data.length;
        break;
    }
  }
  validateJson(value) {
    try {
      JSON.parse(value);
      this.parseError.set(null);
    } catch (e) {
      if (e instanceof SyntaxError) {
        this.parseError.set(e.message);
      }
    }
  }
  static \u0275fac = function ConfigSectionJsonEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigSectionJsonEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigSectionJsonEditorComponent, selectors: [["app-config-section-json-editor"]], inputs: { config: "config" }, outputs: { configChange: "configChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 31, vars: 14, consts: [[1, "json-editor-container"], [1, "editor-toolbar"], [1, "toolbar-left"], ["for", "sectionSelect", 1, "toolbar-label"], ["id", "sectionSelect", 1, "toolbar-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], [1, "toggle-btn", 3, "click", "disabled"], [1, "toolbar-right"], ["title", "Format JSON", 1, "toolbar-btn", 3, "click", "disabled"], ["title", "Copy JSON to clipboard", 1, "toolbar-btn", 3, "click"], ["title", "Paste JSON from clipboard", 1, "toolbar-btn", 3, "click"], ["title", "Apply JSON changes to configuration", 1, "toolbar-btn", "toolbar-btn-primary", 3, "click", "disabled"], [1, "parse-error"], [1, "editor-wrapper"], [1, "editor-wrapper", "tree-editor-wrapper"], [1, "editor-status-bar"], [1, "status-section"], [1, "status-modified"], [1, "status-size"], [1, "parse-error-icon"], [1, "parse-error-text"], [3, "ngModelChange", "ngModel", "extensions"], [3, "contentChange", "content"]], template: function ConfigSectionJsonEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "Section:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ConfigSectionJsonEditorComponent_Template_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSection, $event) || (ctx.selectedSection = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ConfigSectionJsonEditorComponent_Template_select_ngModelChange_5_listener($event) {
        return ctx.onSectionChange($event);
      });
      \u0275\u0275repeaterCreate(6, ConfigSectionJsonEditorComponent_For_7_Template, 2, 2, "option", 5, _forTrack012);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function ConfigSectionJsonEditorComponent_Template_button_click_9_listener() {
        return ctx.setViewMode("code");
      });
      \u0275\u0275text(10, " Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function ConfigSectionJsonEditorComponent_Template_button_click_11_listener() {
        return ctx.setViewMode("tree");
      });
      \u0275\u0275text(12, " Tree ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function ConfigSectionJsonEditorComponent_Template_button_click_14_listener() {
        return ctx.formatJson();
      });
      \u0275\u0275text(15, " Format ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function ConfigSectionJsonEditorComponent_Template_button_click_16_listener() {
        return ctx.copyToClipboard();
      });
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function ConfigSectionJsonEditorComponent_Template_button_click_18_listener() {
        return ctx.pasteFromClipboard();
      });
      \u0275\u0275text(19, " Paste ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275listener("click", function ConfigSectionJsonEditorComponent_Template_button_click_20_listener() {
        return ctx.applyChanges();
      });
      \u0275\u0275text(21, " Apply ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(22, ConfigSectionJsonEditorComponent_Conditional_22_Template, 5, 1, "div", 14);
      \u0275\u0275conditionalCreate(23, ConfigSectionJsonEditorComponent_Conditional_23_Template, 2, 2, "div", 15)(24, ConfigSectionJsonEditorComponent_Conditional_24_Template, 2, 1, "div", 16);
      \u0275\u0275elementStart(25, "div", 17)(26, "span", 18);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(28, ConfigSectionJsonEditorComponent_Conditional_28_Template, 2, 0, "span", 19);
      \u0275\u0275elementStart(29, "span", 20);
      \u0275\u0275conditionalCreate(30, ConfigSectionJsonEditorComponent_Conditional_30_Template, 2, 3);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSection);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.sectionOptions);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.viewMode() === "code");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode() === "tree");
      \u0275\u0275property("disabled", !!ctx.parseError());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !!ctx.parseError() || ctx.viewMode() === "tree");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.copyLabel(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !!ctx.parseError() || !ctx.hasEditorChanges());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_8_0 = ctx.parseError()) ? 22 : -1, tmp_8_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.viewMode() === "code" ? 23 : 24);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.selectedSectionLabel(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasEditorChanges() ? 28 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.viewMode() === "code" ? 30 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, CodeEditor, VanillaJsonEditorComponent, DecimalPipe], styles: ["\n\n.json-editor-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.editor-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  white-space: nowrap;\n}\n.toolbar-select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  background: white;\n  min-width: 200px;\n}\n.toolbar-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-left: 8px;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: none;\n  border-right: 1px solid #ced4da;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toggle-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: #e9ecef;\n}\n.toggle-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background: #0078d4;\n  color: white;\n}\n.tree-editor-wrapper   [_nghost-%COMP%]     .jse-main {\n  min-height: 500px;\n  max-height: 500px;\n  overflow: auto;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.toolbar-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toolbar-btn.toolbar-btn-primary[_ngcontent-%COMP%] {\n  background: #0078d4;\n  color: white;\n  border-color: #0078d4;\n}\n.toolbar-btn.toolbar-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #005a9e;\n  border-color: #005a9e;\n}\n.parse-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #f8d7da;\n  border-bottom: 1px solid #f5c6cb;\n  color: #721c24;\n  font-size: 13px;\n}\n.parse-error-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.parse-error-text[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.editor-wrapper[_ngcontent-%COMP%] {\n  min-height: 500px;\n}\n.editor-wrapper   [_nghost-%COMP%]     .cm-editor {\n  height: 500px;\n  font-size: 13px;\n}\n.editor-wrapper   [_nghost-%COMP%]     .cm-scroller {\n  overflow: auto;\n}\n.editor-status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 4px 12px;\n  background: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  font-size: 12px;\n  color: #6c757d;\n}\n.status-modified[_ngcontent-%COMP%] {\n  color: #856404;\n  background: #fff3cd;\n  padding: 1px 8px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.status-size[_ngcontent-%COMP%] {\n  margin-left: auto;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigSectionJsonEditorComponent, [{
    type: Component,
    args: [{ selector: "app-config-section-json-editor", standalone: true, imports: [CommonModule, FormsModule, CodeEditor, VanillaJsonEditorComponent], template: `
    <div class="json-editor-container">
      <!-- Toolbar -->
      <div class="editor-toolbar">
        <div class="toolbar-left">
          <label for="sectionSelect" class="toolbar-label">Section:</label>
          <select
            id="sectionSelect"
            class="toolbar-select"
            [(ngModel)]="selectedSection"
            (ngModelChange)="onSectionChange($event)">
            @for (option of sectionOptions; track option.value) {
              <option [value]="option.value">{{ option.label }}</option>
            }
          </select>

          <div class="view-toggle">
            <button
              class="toggle-btn"
              [class.active]="viewMode() === 'code'"
              (click)="setViewMode('code')">
              Code
            </button>
            <button
              class="toggle-btn"
              [class.active]="viewMode() === 'tree'"
              (click)="setViewMode('tree')"
              [disabled]="!!parseError()">
              Tree
            </button>
          </div>
        </div>

        <div class="toolbar-right">
          <button
            class="toolbar-btn"
            (click)="formatJson()"
            [disabled]="!!parseError() || viewMode() === 'tree'"
            title="Format JSON">
            Format
          </button>
          <button
            class="toolbar-btn"
            (click)="copyToClipboard()"
            title="Copy JSON to clipboard">
            {{ copyLabel() }}
          </button>
          <button
            class="toolbar-btn"
            (click)="pasteFromClipboard()"
            title="Paste JSON from clipboard">
            Paste
          </button>
          <button
            class="toolbar-btn toolbar-btn-primary"
            (click)="applyChanges()"
            [disabled]="!!parseError() || !hasEditorChanges()"
            title="Apply JSON changes to configuration">
            Apply
          </button>
        </div>
      </div>

      <!-- Parse Error Banner -->
      @if (parseError(); as error) {
        <div class="parse-error">
          <span class="parse-error-icon">!</span>
          <span class="parse-error-text">{{ error }}</span>
        </div>
      }

      <!-- Editor -->
      @if (viewMode() === 'code') {
        <div class="editor-wrapper">
          <code-editor
            [(ngModel)]="editorContent"
            [extensions]="extensions"
            (ngModelChange)="onEditorChange($event)" />
        </div>
      } @else {
        <div class="editor-wrapper tree-editor-wrapper">
          <app-vanilla-json-editor
            [content]="treeContent()"
            (contentChange)="onTreeChange($event)" />
        </div>
      }

      <!-- Status Bar -->
      <div class="editor-status-bar">
        <span class="status-section">
          {{ selectedSectionLabel() }}
        </span>
        @if (hasEditorChanges()) {
          <span class="status-modified">Modified</span>
        }
        <span class="status-size">
          @if (viewMode() === 'code') {
            {{ editorContent.length | number }} chars
          }
        </span>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;632d4e726212770931e333703c3622c2bba06805fbc3a3ec3b4d03d578e77a7b;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/config-editor/sections/config-section-json-editor.ts */\n.json-editor-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.editor-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  white-space: nowrap;\n}\n.toolbar-select {\n  padding: 4px 8px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  background: white;\n  min-width: 200px;\n}\n.toolbar-select:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.view-toggle {\n  display: inline-flex;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-left: 8px;\n}\n.toggle-btn {\n  padding: 4px 12px;\n  border: none;\n  border-right: 1px solid #ced4da;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toggle-btn:last-child {\n  border-right: none;\n}\n.toggle-btn:hover:not(:disabled):not(.active) {\n  background: #e9ecef;\n}\n.toggle-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toggle-btn.active {\n  background: #0078d4;\n  color: white;\n}\n.tree-editor-wrapper :host ::ng-deep .jse-main {\n  min-height: 500px;\n  max-height: 500px;\n  overflow: auto;\n}\n.toolbar-right {\n  display: flex;\n  gap: 6px;\n}\n.toolbar-btn {\n  padding: 4px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toolbar-btn:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.toolbar-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toolbar-btn.toolbar-btn-primary {\n  background: #0078d4;\n  color: white;\n  border-color: #0078d4;\n}\n.toolbar-btn.toolbar-btn-primary:hover:not(:disabled) {\n  background: #005a9e;\n  border-color: #005a9e;\n}\n.parse-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #f8d7da;\n  border-bottom: 1px solid #f5c6cb;\n  color: #721c24;\n  font-size: 13px;\n}\n.parse-error-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.parse-error-text {\n  font-family: monospace;\n}\n.editor-wrapper {\n  min-height: 500px;\n}\n.editor-wrapper :host ::ng-deep .cm-editor {\n  height: 500px;\n  font-size: 13px;\n}\n.editor-wrapper :host ::ng-deep .cm-scroller {\n  overflow: auto;\n}\n.editor-status-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 4px 12px;\n  background: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  font-size: 12px;\n  color: #6c757d;\n}\n.status-modified {\n  color: #856404;\n  background: #fff3cd;\n  padding: 1px 8px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.status-size {\n  margin-left: auto;\n}\n"] }]
  }], null, { config: [{
    type: Input
  }], configChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigSectionJsonEditorComponent, { className: "ConfigSectionJsonEditorComponent", filePath: "src/app/config-editor/sections/config-section-json-editor.ts", lineNumber: 344 });
})();

// src/app/config-editor/config-editor.ts
var _forTrack013 = ($index, $item) => $item.id;
function ConfigEditorComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function ConfigEditorComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save Configuration ");
  }
}
function ConfigEditorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ConfigEditorComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.discardChanges());
    });
    \u0275\u0275text(1, " Discard Changes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 12);
    \u0275\u0275listener("click", function ConfigEditorComponent_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveConfiguration());
    });
    \u0275\u0275conditionalCreate(3, ConfigEditorComponent_Conditional_11_Conditional_3_Template, 3, 0)(4, ConfigEditorComponent_Conditional_11_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 3 : 4);
  }
}
function ConfigEditorComponent_Conditional_12_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2, "Unsaved Changes");
    \u0275\u0275elementEnd()();
  }
}
function ConfigEditorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3, "Last Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8, "Code Tables:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "span", 15);
    \u0275\u0275text(13, "Mappings:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14)(17, "span", 15);
    \u0275\u0275text(18, "Fields:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, ConfigEditorComponent_Conditional_12_Conditional_21_Template, 3, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stats_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stats_r3.lastUpdated);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stats_r3.codeTables);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stats_r3.codeTableMappings);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stats_r3.submitFields);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasChanges() ? 21 : -1);
  }
}
function ConfigEditorComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function ConfigEditorComponent_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissNotification());
    });
    \u0275\u0275text(4, "x");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r5 = ctx;
    \u0275\u0275classMap("notification-" + notif_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r5.message);
  }
}
function ConfigEditorComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 22);
    \u0275\u0275element(2, "div", 23);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Loading configuration...");
    \u0275\u0275elementEnd()()();
  }
}
function ConfigEditorComponent_Conditional_15_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "Read Only");
    \u0275\u0275elementEnd();
  }
}
function ConfigEditorComponent_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ConfigEditorComponent_Conditional_15_For_3_Template_button_click_0_listener() {
      const tab_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActiveTab(tab_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ConfigEditorComponent_Conditional_15_For_3_Conditional_3_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === tab_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r7.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(!tab_r7.editable ? 3 : -1);
  }
}
function ConfigEditorComponent_Conditional_15_Case_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-mirth", 42);
    \u0275\u0275listener("configChange", function ConfigEditorComponent_Conditional_15_Case_11_Conditional_0_Template_app_config_section_mirth_configChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMirthConfigChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("config", ctx);
  }
}
function ConfigEditorComponent_Conditional_15_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfigEditorComponent_Conditional_15_Case_11_Conditional_0_Template, 1, 1, "app-config-section-mirth", 36);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.mirthConfig()) ? 0 : -1, tmp_2_0);
  }
}
function ConfigEditorComponent_Conditional_15_Case_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-submission", 42);
    \u0275\u0275listener("configChange", function ConfigEditorComponent_Conditional_15_Case_12_Conditional_0_Template_app_config_section_submission_configChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSubmissionConfigChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("config", ctx);
  }
}
function ConfigEditorComponent_Conditional_15_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfigEditorComponent_Conditional_15_Case_12_Conditional_0_Template, 1, 1, "app-config-section-submission", 36);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.submissionConfig()) ? 0 : -1, tmp_2_0);
  }
}
function ConfigEditorComponent_Conditional_15_Case_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-processing", 42);
    \u0275\u0275listener("configChange", function ConfigEditorComponent_Conditional_15_Case_13_Conditional_0_Template_app_config_section_processing_configChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onProcessingConfigChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("config", ctx);
  }
}
function ConfigEditorComponent_Conditional_15_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfigEditorComponent_Conditional_15_Case_13_Conditional_0_Template, 1, 1, "app-config-section-processing", 36);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.processingConfig()) ? 0 : -1, tmp_2_0);
  }
}
function ConfigEditorComponent_Conditional_15_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-service-event-types", 43);
    \u0275\u0275listener("configurationChange", function ConfigEditorComponent_Conditional_15_Case_14_Template_app_config_section_service_event_types_configurationChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onServiceEventTypesChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("configuration", ctx_r1.config())("readonly", false);
  }
}
function ConfigEditorComponent_Conditional_15_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-time-interval-mappings", 44);
    \u0275\u0275listener("mappingsChange", function ConfigEditorComponent_Conditional_15_Case_15_Template_app_config_section_time_interval_mappings_mappingsChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimeIntervalMappingsChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("mappings", ctx_r1.timeIntervalMappings());
  }
}
function ConfigEditorComponent_Conditional_15_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-submit-fields", 45);
    \u0275\u0275listener("fieldsChange", function ConfigEditorComponent_Conditional_15_Case_16_Template_app_config_section_submit_fields_fieldsChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmitFieldsChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("fields", ctx_r1.submitFields())("fieldsByCategory", ctx_r1.submitFieldsByCategory());
  }
}
function ConfigEditorComponent_Conditional_15_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-code-tables", 46);
    \u0275\u0275listener("codeTableMappingsChange", function ConfigEditorComponent_Conditional_15_Case_17_Template_app_config_section_code_tables_codeTableMappingsChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCodeTableMappingsChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("codeTables", ctx_r1.codeTables())("codeTableMappings", ctx_r1.codeTableMappings());
  }
}
function ConfigEditorComponent_Conditional_15_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-mappings", 47);
    \u0275\u0275listener("mappingsChange", function ConfigEditorComponent_Conditional_15_Case_18_Template_app_config_section_mappings_mappingsChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMappingsChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("mappings", ctx_r1.mappings())("submitFields", ctx_r1.submitFields())("codeTableMappings", ctx_r1.codeTableMappings());
  }
}
function ConfigEditorComponent_Conditional_15_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-config-section-mapping-tester", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("mappings", ctx_r1.mappings())("codeTableMappings", ctx_r1.codeTableMappings());
  }
}
function ConfigEditorComponent_Conditional_15_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-config-section-data-analyzer", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("config", ctx_r1.config());
  }
}
function ConfigEditorComponent_Conditional_15_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-config-section-fhir-codes", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("fhirCodes", ctx_r1.fhirResourceCodes());
  }
}
function ConfigEditorComponent_Conditional_15_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-mha-locations", 48);
    \u0275\u0275listener("locationsChange", function ConfigEditorComponent_Conditional_15_Case_22_Template_app_config_section_mha_locations_locationsChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMhaLocationsChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("locations", ctx_r1.mhaLocations());
  }
}
function ConfigEditorComponent_Conditional_15_Case_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-config-section-json-editor", 42);
    \u0275\u0275listener("configChange", function ConfigEditorComponent_Conditional_15_Case_23_Conditional_0_Template_app_config_section_json_editor_configChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onJsonEditorConfigChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("config", ctx);
  }
}
function ConfigEditorComponent_Conditional_15_Case_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfigEditorComponent_Conditional_15_Case_23_Conditional_0_Template, 1, 1, "app-config-section-json-editor", 36);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.config()) ? 0 : -1, tmp_2_0);
  }
}
function ConfigEditorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "nav", 24);
    \u0275\u0275repeaterCreate(2, ConfigEditorComponent_Conditional_15_For_3_Template, 4, 4, "button", 25, _forTrack013);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 27)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29);
    \u0275\u0275conditionalCreate(11, ConfigEditorComponent_Conditional_15_Case_11_Template, 1, 1)(12, ConfigEditorComponent_Conditional_15_Case_12_Template, 1, 1)(13, ConfigEditorComponent_Conditional_15_Case_13_Template, 1, 1)(14, ConfigEditorComponent_Conditional_15_Case_14_Template, 1, 2, "app-config-section-service-event-types", 30)(15, ConfigEditorComponent_Conditional_15_Case_15_Template, 1, 1, "app-config-section-time-interval-mappings", 31)(16, ConfigEditorComponent_Conditional_15_Case_16_Template, 1, 2, "app-config-section-submit-fields", 32)(17, ConfigEditorComponent_Conditional_15_Case_17_Template, 1, 2, "app-config-section-code-tables", 33)(18, ConfigEditorComponent_Conditional_15_Case_18_Template, 1, 3, "app-config-section-mappings", 34)(19, ConfigEditorComponent_Conditional_15_Case_19_Template, 1, 2, "app-config-section-mapping-tester", 35)(20, ConfigEditorComponent_Conditional_15_Case_20_Template, 1, 1, "app-config-section-data-analyzer", 36)(21, ConfigEditorComponent_Conditional_15_Case_21_Template, 1, 1, "app-config-section-fhir-codes", 37)(22, ConfigEditorComponent_Conditional_15_Case_22_Template, 1, 1, "app-config-section-mha-locations", 38)(23, ConfigEditorComponent_Conditional_15_Case_23_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tabs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentTabInfo().label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTabInfo().description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.activeTab()) === "mirth" ? 11 : tmp_4_0 === "submission" ? 12 : tmp_4_0 === "processing" ? 13 : tmp_4_0 === "service_event_types" ? 14 : tmp_4_0 === "time_interval_mappings" ? 15 : tmp_4_0 === "submit_fields" ? 16 : tmp_4_0 === "code_tables" ? 17 : tmp_4_0 === "mappings" ? 18 : tmp_4_0 === "mapping_tester" ? 19 : tmp_4_0 === "data_analyzer" ? 20 : tmp_4_0 === "fhir_codes" ? 21 : tmp_4_0 === "mha_locations" ? 22 : tmp_4_0 === "json_editor" ? 23 : -1);
  }
}
function ConfigEditorComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "No Configuration Loaded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Unable to load the MHA PDS configuration. Please check the connection and try again.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 49);
    \u0275\u0275listener("click", function ConfigEditorComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadConfiguration());
    });
    \u0275\u0275text(6, " Retry ");
    \u0275\u0275elementEnd()();
  }
}
var ConfigEditorComponent = class _ConfigEditorComponent {
  configService = inject(MhaPdsConfigurationService);
  // Configuration state
  config = signal(null, ...ngDevMode ? [{ debugName: "config" }] : []);
  originalConfig = signal(null, ...ngDevMode ? [{ debugName: "originalConfig" }] : []);
  // UI state
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  activeTab = signal("mirth", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  hasChanges = signal(false, ...ngDevMode ? [{ debugName: "hasChanges" }] : []);
  // Notification state
  notification = signal(null, ...ngDevMode ? [{ debugName: "notification" }] : []);
  // Tab configuration
  tabs = [
    { id: "mirth", label: "Mirth Connect", icon: "server", description: "Server connection settings", editable: true },
    { id: "submission", label: "Submission", icon: "send", description: "Batch size, schedule, retries", editable: true },
    { id: "processing", label: "Processing", icon: "settings", description: "Operational flags", editable: true },
    { id: "service_event_types", label: "Service Event Types", icon: "event", description: "DE10 event type filters", editable: true },
    { id: "time_interval_mappings", label: "Time Intervals", icon: "schedule", description: "Time interval to minutes mappings", editable: true },
    { id: "submit_fields", label: "Submit Fields", icon: "list", description: "68 data element toggles", editable: true },
    { id: "code_tables", label: "Code Tables", icon: "table", description: "32 code tables", editable: true },
    { id: "mappings", label: "Mappings", icon: "link", description: "48 field mappings", editable: true },
    // { id: 'mapping_tester', label: 'Test Mappings', icon: 'play', description: 'Test value translations', editable: false },
    // { id: 'data_analyzer', label: 'Data Analyzer', icon: 'analytics', description: 'Analyze data flow', editable: false },
    { id: "fhir_codes", label: "FHIR Codes", icon: "code", description: "12 FHIR codes (read-only)", editable: false },
    { id: "mha_locations", label: "MHA Locations", icon: "location", description: "Patient discovery locations", editable: true },
    { id: "json_editor", label: "JSON Editor", icon: "code", description: "Edit raw configuration JSON", editable: true }
  ];
  // Computed signals for config sections
  mirthConfig = computed(() => this.config()?.MIRTH_CONNECT ?? null, ...ngDevMode ? [{ debugName: "mirthConfig" }] : []);
  submissionConfig = computed(() => this.config()?.SUBMISSION ?? null, ...ngDevMode ? [{ debugName: "submissionConfig" }] : []);
  processingConfig = computed(() => this.config()?.PROCESSING ?? null, ...ngDevMode ? [{ debugName: "processingConfig" }] : []);
  submitFields = computed(() => this.config()?.SUBMIT_FIELDS ?? [], ...ngDevMode ? [{ debugName: "submitFields" }] : []);
  codeTables = computed(() => this.config()?.CODE_TABLES ?? [], ...ngDevMode ? [{ debugName: "codeTables" }] : []);
  codeTableMappings = computed(() => this.config()?.CODE_TABLE_MAPPINGS ?? [], ...ngDevMode ? [{ debugName: "codeTableMappings" }] : []);
  mappings = computed(() => this.config()?.MAPPINGS ?? [], ...ngDevMode ? [{ debugName: "mappings" }] : []);
  fhirResourceCodes = computed(() => this.config()?.FHIR_RESOURCE_CODES ?? [], ...ngDevMode ? [{ debugName: "fhirResourceCodes" }] : []);
  mhaLocations = computed(() => this.config()?.MHA_LOCATIONS ?? [], ...ngDevMode ? [{ debugName: "mhaLocations" }] : []);
  serviceEventTypes = computed(() => this.config()?.SERVICE_EVENT_TYPES ?? [], ...ngDevMode ? [{ debugName: "serviceEventTypes" }] : []);
  timeIntervalMappings = computed(() => this.config()?.TIME_INTERVAL_MAPPINGS ?? [], ...ngDevMode ? [{ debugName: "timeIntervalMappings" }] : []);
  // Group submit fields by data element category
  submitFieldsByCategory = computed(() => {
    const config = this.config();
    if (!config)
      return /* @__PURE__ */ new Map();
    return groupSubmitFieldsByDataElement(config);
  }, ...ngDevMode ? [{ debugName: "submitFieldsByCategory" }] : []);
  // Data element labels for display
  DATA_ELEMENT_LABELS = MHA_PDS_DATA_ELEMENTS;
  // Stats for display
  configStats = computed(() => {
    const config = this.config();
    if (!config)
      return null;
    return {
      codeTables: config.CODE_TABLES_CNT,
      codeTableMappings: config.CODE_TABLE_MAPPING_CNT,
      mappings: config.MAPPING_CNT,
      submitFields: config.SUBMIT_FIELDS_CNT,
      fhirCodes: config.FHIR_RESOURCE_CODES_CNT,
      lastUpdated: this.formatLocalDateTime(config.UPDT_DT_TM)
    };
  }, ...ngDevMode ? [{ debugName: "configStats" }] : []);
  /**
   * Format an ISO date string to local timezone display
   * Converts "2026-01-23T03:34:57.000+00:00" to "2026-01-22 10:34 PM EST"
   */
  formatLocalDateTime(isoString) {
    if (!isoString)
      return "N/A";
    try {
      const date = new Date(isoString);
      if (isNaN(date.getTime()))
        return isoString;
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short"
      });
    } catch {
      return isoString;
    }
  }
  constructor() {
    effect(() => {
      const notif = this.notification();
      if (notif) {
        setTimeout(() => {
          this.notification.set(null);
        }, 5e3);
      }
    });
  }
  ngOnInit() {
    this.loadConfiguration();
  }
  /**
   * Load configuration from the service
   */
  loadConfiguration() {
    this.loading.set(true);
    this.notification.set(null);
    this.configService.getConfiguration().subscribe({
      next: (config) => {
        this.config.set(config);
        this.originalConfig.set(JSON.parse(JSON.stringify(config)));
        this.hasChanges.set(false);
        this.loading.set(false);
        this.showNotification("success", "Configuration loaded successfully");
      },
      error: (error) => {
        this.loading.set(false);
        this.showNotification("error", `Failed to load configuration: ${error.message}`);
        console.error("[ConfigEditor] Error loading configuration:", error);
      }
    });
  }
  /**
   * Save configuration changes
   */
  saveConfiguration() {
    const config = this.config();
    if (!config) {
      this.showNotification("error", "No configuration to save");
      return;
    }
    this.saving.set(true);
    this.notification.set(null);
    this.configService.saveConfiguration(config).subscribe({
      next: (result) => {
        this.saving.set(false);
        if (result.saved) {
          this.originalConfig.set(JSON.parse(JSON.stringify(config)));
          this.hasChanges.set(false);
          this.showNotification("success", "Configuration saved successfully");
        } else {
          const errors = result.errors?.join(", ") || "Unknown error";
          this.showNotification("error", `Failed to save configuration: ${errors}`);
        }
      },
      error: (error) => {
        this.saving.set(false);
        this.showNotification("error", `Failed to save configuration: ${error.message}`);
        console.error("[ConfigEditor] Error saving configuration:", error);
      }
    });
  }
  /**
   * Discard changes and reload original configuration
   */
  discardChanges() {
    const original = this.originalConfig();
    if (original) {
      this.config.set(JSON.parse(JSON.stringify(original)));
      this.hasChanges.set(false);
      this.showNotification("info", "Changes discarded");
    }
  }
  /**
   * Refresh configuration from the server
   */
  refreshConfiguration() {
    if (this.hasChanges()) {
      if (!confirm("You have unsaved changes. Refresh will discard them. Continue?")) {
        return;
      }
    }
    this.loadConfiguration();
  }
  /**
   * Handle tab change
   */
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  /**
   * Handle Mirth config changes
   */
  onMirthConfigChange(mirthConfig) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), { MIRTH_CONNECT: mirthConfig }));
      this.markAsChanged();
    }
  }
  /**
   * Handle Submission config changes
   */
  onSubmissionConfigChange(submissionConfig) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), { SUBMISSION: submissionConfig }));
      this.markAsChanged();
    }
  }
  /**
   * Handle Processing config changes
   */
  onProcessingConfigChange(processingConfig) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), { PROCESSING: processingConfig }));
      this.markAsChanged();
    }
  }
  /**
   * Handle Submit Fields changes
   */
  onSubmitFieldsChange(submitFields) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), {
        SUBMIT_FIELDS: submitFields,
        SUBMIT_FIELDS_CNT: submitFields.length
      }));
      this.markAsChanged();
    }
  }
  /**
   * Handle Mappings changes
   */
  onMappingsChange(mappings) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), {
        MAPPINGS: mappings,
        MAPPING_CNT: mappings.length
      }));
      this.markAsChanged();
    }
  }
  /**
   * Handle MHA Locations changes
   */
  onMhaLocationsChange(locations) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), {
        MHA_LOCATIONS: locations,
        MHA_LOCATIONS_CNT: locations.length
      }));
      this.markAsChanged();
    }
  }
  /**
   * Handle Service Event Types changes
   */
  onServiceEventTypesChange(updatedConfig) {
    this.config.set(updatedConfig);
    this.markAsChanged();
  }
  /**
   * Handle Time Interval Mappings changes
   */
  onTimeIntervalMappingsChange(mappings) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), {
        TIME_INTERVAL_MAPPINGS: mappings,
        TIME_INTERVAL_MAPPINGS_CNT: mappings.length
      }));
      this.markAsChanged();
    }
  }
  /**
   * Handle JSON Editor full config replacement
   */
  onJsonEditorConfigChange(updatedConfig) {
    this.config.set(updatedConfig);
    this.markAsChanged();
  }
  /**
   * Handle Code Table Mappings changes
   */
  onCodeTableMappingsChange(mappings) {
    const config = this.config();
    if (config) {
      this.config.set(__spreadProps(__spreadValues({}, config), {
        CODE_TABLE_MAPPINGS: mappings,
        CODE_TABLE_MAPPING_CNT: mappings.length
      }));
      this.markAsChanged();
    }
  }
  /**
   * Mark configuration as changed
   */
  markAsChanged() {
    this.hasChanges.set(true);
  }
  /**
   * Show a notification message
   */
  showNotification(type, message) {
    this.notification.set({ type, message });
  }
  /**
   * Dismiss the current notification
   */
  dismissNotification() {
    this.notification.set(null);
  }
  /**
   * Get data element label by key
   */
  getDataElementLabel(key) {
    return this.DATA_ELEMENT_LABELS[key] || key;
  }
  /**
   * Get the current tab info
   */
  currentTabInfo = computed(() => {
    return this.tabs.find((t) => t.id === this.activeTab()) || this.tabs[0];
  }, ...ngDevMode ? [{ debugName: "currentTabInfo" }] : []);
  static \u0275fac = function ConfigEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigEditorComponent, selectors: [["app-config-editor"]], decls: 17, vars: 7, consts: [[1, "config-editor-container"], [1, "page-header"], [1, "header-content"], [1, "header-title"], [1, "page-description"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "status-bar"], [1, "notification", 3, "class"], [1, "loading-overlay"], [1, "main-content"], [1, "empty-state"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-small"], [1, "status-item"], [1, "status-label"], [1, "status-value"], [1, "status-item", "status-unsaved"], [1, "status-badge"], [1, "notification"], [1, "notification-message"], [1, "notification-dismiss", 3, "click"], [1, "loading-content"], [1, "spinner"], [1, "tab-navigation"], [1, "tab-button", 3, "active"], [1, "tab-content"], [1, "tab-header"], [1, "tab-description"], [1, "tab-panel"], [3, "configuration", "readonly"], [3, "mappings"], [3, "fields", "fieldsByCategory"], [3, "codeTables", "codeTableMappings"], [3, "mappings", "submitFields", "codeTableMappings"], [3, "mappings", "codeTableMappings"], [3, "config"], [3, "fhirCodes"], [3, "locations"], [1, "tab-button", 3, "click"], [1, "tab-label"], [1, "tab-readonly-badge"], [3, "configChange", "config"], [3, "configurationChange", "configuration", "readonly"], [3, "mappingsChange", "mappings"], [3, "fieldsChange", "fields", "fieldsByCategory"], [3, "codeTableMappingsChange", "codeTables", "codeTableMappings"], [3, "mappingsChange", "mappings", "submitFields", "codeTableMappings"], [3, "locationsChange", "locations"], [1, "btn", "btn-primary", 3, "click"]], template: function ConfigEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      \u0275\u0275text(5, "MHA PDS Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Manage configuration settings for the Mental Health Assessment Patient Data System ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function ConfigEditorComponent_Template_button_click_9_listener() {
        return ctx.refreshConfiguration();
      });
      \u0275\u0275text(10, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, ConfigEditorComponent_Conditional_11_Template, 5, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, ConfigEditorComponent_Conditional_12_Template, 22, 5, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, ConfigEditorComponent_Conditional_13_Template, 5, 3, "div", 8);
      \u0275\u0275conditionalCreate(14, ConfigEditorComponent_Conditional_14_Template, 5, 0, "div", 9);
      \u0275\u0275conditionalCreate(15, ConfigEditorComponent_Conditional_15_Template, 24, 3, "div", 10);
      \u0275\u0275conditionalCreate(16, ConfigEditorComponent_Conditional_16_Template, 7, 0, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.loading() || ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.configStats()) ? 12 : -1, tmp_2_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.notification()) ? 13 : -1, tmp_3_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.config() && !ctx.loading() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.config() && !ctx.loading() ? 16 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    ConfigSectionMirth,
    ConfigSectionSubmission,
    ConfigSectionProcessing,
    ConfigSectionSubmitFields,
    ConfigSectionCodeTables,
    ConfigSectionMappings,
    ConfigSectionMappingTester,
    ConfigSectionDataAnalyzer,
    ConfigSectionFhirCodes,
    ConfigSectionMhaLocations,
    ConfigSectionServiceEventTypesComponent,
    ConfigSectionTimeIntervalMappingsComponent,
    ConfigSectionJsonEditorComponent
  ], styles: ['\n\n.config-editor-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.config-editor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .config-editor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.config-editor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 0 0 8px 0;\n  font-size: 28px;\n  font-weight: 600;\n}\n.config-editor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .page-description[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.config-editor-container[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.config-editor-container[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n}\n.config-editor-container[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%]   .status-item.status-unsaved[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.config-editor-container[_ngcontent-%COMP%]   .status-bar[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background-color: #fff3cd;\n  color: #856404;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 12px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.config-editor-container[_ngcontent-%COMP%]   .notification.notification-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  color: #155724;\n}\n.config-editor-container[_ngcontent-%COMP%]   .notification.notification-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n.config-editor-container[_ngcontent-%COMP%]   .notification.notification-info[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  color: #0056b3;\n}\n.config-editor-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-dismiss[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  opacity: 0.7;\n  padding: 0 8px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .notification-dismiss[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.config-editor-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: #6c757d;\n  font-size: 16px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  padding: 4px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: #0078d4;\n  background-color: rgba(0, 120, 212, 0.08);\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-navigation[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  color: #0078d4;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-navigation[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .tab-readonly-badge[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  background-color: #e9ecef;\n  color: #6c757d;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-header[_ngcontent-%COMP%]   .tab-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 14px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n  padding: 40px;\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #333;\n  font-size: 20px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: #6c757d;\n  font-size: 14px;\n  max-width: 400px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.config-editor-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.config-editor-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0078d4;\n  color: white;\n}\n.config-editor-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #005a9e;\n}\n.config-editor-container[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.config-editor-container[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.config-editor-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #0078d4;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.config-editor-container[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigEditorComponent, [{
    type: Component,
    args: [{ selector: "app-config-editor", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ConfigSectionMirth,
      ConfigSectionSubmission,
      ConfigSectionProcessing,
      ConfigSectionSubmitFields,
      ConfigSectionCodeTables,
      ConfigSectionMappings,
      ConfigSectionMappingTester,
      ConfigSectionDataAnalyzer,
      ConfigSectionFhirCodes,
      ConfigSectionMhaLocations,
      ConfigSectionServiceEventTypesComponent,
      ConfigSectionTimeIntervalMappingsComponent,
      ConfigSectionJsonEditorComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="config-editor-container">
  <!-- Header -->
  <header class="page-header">
    <div class="header-content">
      <div class="header-title">
        <h1>MHA PDS Configuration</h1>
        <p class="page-description">
          Manage configuration settings for the Mental Health Assessment Patient Data System
        </p>
      </div>
      <div class="header-actions">
        <button
          class="btn btn-secondary"
          (click)="refreshConfiguration()"
          [disabled]="loading() || saving()">
          Refresh
        </button>
        @if (hasChanges()) {
          <button
            class="btn btn-secondary"
            (click)="discardChanges()"
            [disabled]="saving()">
            Discard Changes
          </button>
          <button
            class="btn btn-primary"
            (click)="saveConfiguration()"
            [disabled]="saving()">
            @if (saving()) {
              <span class="spinner-small"></span>
              <span>Saving...</span>
            } @else {
              Save Configuration
            }
          </button>
        }
      </div>
    </div>

    <!-- Status Bar -->
    @if (configStats(); as stats) {
      <div class="status-bar">
        <div class="status-item">
          <span class="status-label">Last Updated:</span>
          <span class="status-value">{{ stats.lastUpdated }}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Code Tables:</span>
          <span class="status-value">{{ stats.codeTables }}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Mappings:</span>
          <span class="status-value">{{ stats.codeTableMappings }}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Fields:</span>
          <span class="status-value">{{ stats.submitFields }}</span>
        </div>
        @if (hasChanges()) {
          <div class="status-item status-unsaved">
            <span class="status-badge">Unsaved Changes</span>
          </div>
        }
      </div>
    }
  </header>

  <!-- Notification Banner -->
  @if (notification(); as notif) {
    <div class="notification" [class]="'notification-' + notif.type">
      <span class="notification-message">{{ notif.message }}</span>
      <button class="notification-dismiss" (click)="dismissNotification()">x</button>
    </div>
  }

  <!-- Loading State -->
  @if (loading()) {
    <div class="loading-overlay">
      <div class="loading-content">
        <div class="spinner"></div>
        <span>Loading configuration...</span>
      </div>
    </div>
  }

  <!-- Main Content -->
  @if (config() && !loading()) {
    <div class="main-content">
      <!-- Tab Navigation -->
      <nav class="tab-navigation">
        @for (tab of tabs; track tab.id) {
          <button
            class="tab-button"
            [class.active]="activeTab() === tab.id"
            (click)="setActiveTab(tab.id)">
            <span class="tab-label">{{ tab.label }}</span>
            @if (!tab.editable) {
              <span class="tab-readonly-badge">Read Only</span>
            }
          </button>
        }
      </nav>

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Tab Header -->
        <div class="tab-header">
          <h2>{{ currentTabInfo().label }}</h2>
          <p class="tab-description">{{ currentTabInfo().description }}</p>
        </div>

        <!-- Tab Panel -->
        <div class="tab-panel">
          @switch (activeTab()) {
            @case ('mirth') {
              @if (mirthConfig(); as mirth) {
                <app-config-section-mirth
                  [config]="mirth"
                  (configChange)="onMirthConfigChange($event)" />
              }
            }
            @case ('submission') {
              @if (submissionConfig(); as submission) {
                <app-config-section-submission
                  [config]="submission"
                  (configChange)="onSubmissionConfigChange($event)" />
              }
            }
            @case ('processing') {
              @if (processingConfig(); as processing) {
                <app-config-section-processing
                  [config]="processing"
                  (configChange)="onProcessingConfigChange($event)" />
              }
            }
            @case ('service_event_types') {
              <app-config-section-service-event-types
                [configuration]="config()"
                [readonly]="false"
                (configurationChange)="onServiceEventTypesChange($event)" />
            }
            @case ('time_interval_mappings') {
              <app-config-section-time-interval-mappings
                [mappings]="timeIntervalMappings()"
                (mappingsChange)="onTimeIntervalMappingsChange($event)" />
            }
            @case ('submit_fields') {
              <app-config-section-submit-fields
                [fields]="submitFields()"
                [fieldsByCategory]="submitFieldsByCategory()"
                (fieldsChange)="onSubmitFieldsChange($event)" />
            }
            @case ('code_tables') {
              <app-config-section-code-tables
                [codeTables]="codeTables()"
                [codeTableMappings]="codeTableMappings()"
                (codeTableMappingsChange)="onCodeTableMappingsChange($event)" />
            }
            @case ('mappings') {
              <app-config-section-mappings
                [mappings]="mappings()"
                [submitFields]="submitFields()"
                [codeTableMappings]="codeTableMappings()"
                (mappingsChange)="onMappingsChange($event)" />
            }
            @case ('mapping_tester') {
              <app-config-section-mapping-tester
                [mappings]="mappings()"
                [codeTableMappings]="codeTableMappings()" />
            }
            @case ('data_analyzer') {
              <app-config-section-data-analyzer
                [config]="config()" />
            }
            @case ('fhir_codes') {
              <app-config-section-fhir-codes
                [fhirCodes]="fhirResourceCodes()" />
            }
            @case ('mha_locations') {
              <app-config-section-mha-locations
                [locations]="mhaLocations()"
                (locationsChange)="onMhaLocationsChange($event)" />
            }
            @case ('json_editor') {
              @if (config(); as cfg) {
                <app-config-section-json-editor
                  [config]="cfg"
                  (configChange)="onJsonEditorConfigChange($event)" />
              }
            }
          }
        </div>
      </div>
    </div>
  }

  <!-- Empty State -->
  @if (!config() && !loading()) {
    <div class="empty-state">
      <h2>No Configuration Loaded</h2>
      <p>Unable to load the MHA PDS configuration. Please check the connection and try again.</p>
      <button class="btn btn-primary" (click)="loadConfiguration()">
        Retry
      </button>
    </div>
  }
</div>
`, styles: ['/* src/app/config-editor/config-editor.scss */\n.config-editor-container {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.config-editor-container .page-header {\n  margin-bottom: 24px;\n}\n.config-editor-container .page-header .header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .config-editor-container .page-header .header-content {\n    flex-direction: column;\n  }\n}\n.config-editor-container .page-header .header-title h1 {\n  color: #333;\n  margin: 0 0 8px 0;\n  font-size: 28px;\n  font-weight: 600;\n}\n.config-editor-container .page-header .header-title .page-description {\n  color: #666;\n  margin: 0;\n  font-size: 14px;\n}\n.config-editor-container .page-header .header-actions {\n  display: flex;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.config-editor-container .status-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.config-editor-container .status-bar .status-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.config-editor-container .status-bar .status-item .status-label {\n  color: #6c757d;\n  font-weight: 500;\n}\n.config-editor-container .status-bar .status-item .status-value {\n  color: #333;\n  font-weight: 600;\n}\n.config-editor-container .status-bar .status-item.status-unsaved {\n  margin-left: auto;\n}\n.config-editor-container .status-bar .status-item .status-badge {\n  padding: 4px 10px;\n  background-color: #fff3cd;\n  color: #856404;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 12px;\n}\n.config-editor-container .notification {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  animation: slideIn 0.3s ease-out;\n}\n.config-editor-container .notification.notification-success {\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  color: #155724;\n}\n.config-editor-container .notification.notification-error {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n.config-editor-container .notification.notification-info {\n  background-color: #e7f3ff;\n  border: 1px solid #b3d9ff;\n  color: #0056b3;\n}\n.config-editor-container .notification .notification-message {\n  flex: 1;\n  font-size: 14px;\n}\n.config-editor-container .notification .notification-dismiss {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  opacity: 0.7;\n  padding: 0 8px;\n}\n.config-editor-container .notification .notification-dismiss:hover {\n  opacity: 1;\n}\n.config-editor-container .loading-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.config-editor-container .loading-overlay .loading-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: #6c757d;\n  font-size: 16px;\n}\n.config-editor-container .main-content {\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.config-editor-container .tab-navigation {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  padding: 4px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.config-editor-container .tab-navigation .tab-button {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.config-editor-container .tab-navigation .tab-button:hover {\n  color: #0078d4;\n  background-color: rgba(0, 120, 212, 0.08);\n}\n.config-editor-container .tab-navigation .tab-button.active {\n  color: #0078d4;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.config-editor-container .tab-navigation .tab-button .tab-label {\n  white-space: nowrap;\n}\n.config-editor-container .tab-navigation .tab-button .tab-readonly-badge {\n  padding: 2px 6px;\n  background-color: #e9ecef;\n  color: #6c757d;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.config-editor-container .tab-content {\n  padding: 24px;\n}\n.config-editor-container .tab-header {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.config-editor-container .tab-header h2 {\n  margin: 0 0 6px 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n.config-editor-container .tab-header .tab-description {\n  margin: 0;\n  color: #6c757d;\n  font-size: 14px;\n}\n.config-editor-container .tab-panel {\n  min-height: 400px;\n}\n.config-editor-container .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n  padding: 40px;\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n}\n.config-editor-container .empty-state h2 {\n  margin: 0 0 12px 0;\n  color: #333;\n  font-size: 20px;\n}\n.config-editor-container .empty-state p {\n  margin: 0 0 24px 0;\n  color: #6c757d;\n  font-size: 14px;\n  max-width: 400px;\n}\n.config-editor-container .btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.config-editor-container .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.config-editor-container .btn.btn-primary {\n  background-color: #0078d4;\n  color: white;\n}\n.config-editor-container .btn.btn-primary:hover:not(:disabled) {\n  background-color: #005a9e;\n}\n.config-editor-container .btn.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.config-editor-container .btn.btn-secondary:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.config-editor-container .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #0078d4;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.config-editor-container .spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigEditorComponent, { className: "ConfigEditorComponent", filePath: "src/app/config-editor/config-editor.ts", lineNumber: 96 });
})();
export {
  ConfigEditorComponent
};
