import {
  ALL_TABS,
  AccessControlService
} from "./chunk-SEISGSYB.js";
import {
  MhaPdsConfigurationService
} from "./chunk-DQI735T4.js";
import "./chunk-GGXYDJ4E.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OFQI67IQ.js";
import "./chunk-I7D2VZMI.js";

// src/app/security/security.ts
var _forTrack0 = ($index, $item) => $item.key;
function SecurityComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1, "Superuser");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("status-success", ctx_r0.statusType() === "success")("status-error", ctx_r0.statusType() === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusMessage(), " ");
  }
}
function SecurityComponent_Conditional_16_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 26);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_16_For_8_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const su_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeSuperuser(su_r4));
    });
    \u0275\u0275text(1, " \xD7 ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const su_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("disabled", ctx_r0.editableConfig().superusers.length <= 1)("title", ctx_r0.editableConfig().superusers.length <= 1 ? "Cannot remove last superuser" : "Remove " + su_r4);
  }
}
function SecurityComponent_Conditional_16_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_For_8_Conditional_2_Template, 2, 2, "button", 25);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const su_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", su_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.accessControl.canEditSuperusers() ? 2 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 15)(1, "input", 27);
    \u0275\u0275domListener("input", function SecurityComponent_Conditional_16_Conditional_9_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.newSuperuserName.set($event.target.value));
    })("keydown.enter", function SecurityComponent_Conditional_16_Conditional_9_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addSuperuser());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 24);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_16_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addSuperuser());
    });
    \u0275\u0275text(3, "Add");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r0.newSuperuserName());
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", !ctx_r0.newSuperuserName().trim());
  }
}
function SecurityComponent_Conditional_16_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r6.label);
  }
}
function SecurityComponent_Conditional_16_For_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 28);
    \u0275\u0275text(1, "S");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_16_For_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 19)(1, "input", 30);
    \u0275\u0275domListener("change", function SecurityComponent_Conditional_16_For_28_For_5_Template_input_change_1_listener($event) {
      const tab_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const position_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTabAccess(position_r10, tab_r9.key, $event));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const position_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r0.isPositionInTab(position_r10, tab_r9.key))("disabled", ctx_r0.isSuperuserPosition(position_r10));
  }
}
function SecurityComponent_Conditional_16_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SecurityComponent_Conditional_16_For_28_Conditional_3_Template, 2, 0, "span", 28);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(4, SecurityComponent_Conditional_16_For_28_For_5_Template, 2, 2, "td", 19, _forTrack0);
    \u0275\u0275domElementStart(6, "td", 20)(7, "button", 29);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_16_For_28_Template_button_click_7_listener() {
      const position_r10 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removePosition(position_r10));
    });
    \u0275\u0275text(8, " Remove ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const position_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("superuser-row", ctx_r0.isSuperuserPosition(position_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", position_r10, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSuperuserPosition(position_r10) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.allTabs);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r0.isSuperuserPosition(position_r10))("title", ctx_r0.isSuperuserPosition(position_r10) ? "Remove from superusers first" : "Remove position");
  }
}
function SecurityComponent_Conditional_16_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2, " No positions configured. Add a position below. ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.allTabs.length + 2);
  }
}
function SecurityComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3, "Superuser Positions");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 12);
    \u0275\u0275text(5, "Superusers always have access to all tabs. Only superusers can modify this list.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 13);
    \u0275\u0275repeaterCreate(7, SecurityComponent_Conditional_16_For_8_Template, 3, 2, "span", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, SecurityComponent_Conditional_16_Conditional_9_Template, 4, 2, "div", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 9)(11, "div", 11)(12, "h3");
    \u0275\u0275text(13, "Position-Tab Access Matrix");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "p", 12);
    \u0275\u0275text(15, "Configure which positions can access each tab. Superuser positions always have full access.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 16)(17, "table", 17)(18, "thead")(19, "tr")(20, "th", 18);
    \u0275\u0275text(21, "Position");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(22, SecurityComponent_Conditional_16_For_23_Template, 2, 1, "th", 19, _forTrack0);
    \u0275\u0275domElementStart(24, "th", 20);
    \u0275\u0275text(25, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, SecurityComponent_Conditional_16_For_28_Template, 9, 6, "tr", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(29, SecurityComponent_Conditional_16_Conditional_29_Template, 3, 1, "tr");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(30, "div", 22)(31, "input", 23);
    \u0275\u0275domListener("input", function SecurityComponent_Conditional_16_Template_input_input_31_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newPositionName.set($event.target.value));
    })("keydown.enter", function SecurityComponent_Conditional_16_Template_input_keydown_enter_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addPosition());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "button", 24);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_16_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addPosition());
    });
    \u0275\u0275text(33, "Add Position");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.editableConfig().superusers);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.accessControl.canEditSuperusers() ? 9 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r0.allTabs);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.allPositions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allPositions().length === 0 ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("value", ctx_r0.newPositionName());
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", !ctx_r0.newPositionName().trim());
  }
}
function SecurityComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "p", 31);
    \u0275\u0275text(2, "Loading configuration...");
    \u0275\u0275domElementEnd()();
  }
}
var SecurityComponent = class _SecurityComponent {
  accessControl = inject(AccessControlService);
  configService = inject(MhaPdsConfigurationService);
  allTabs = ALL_TABS;
  /** Deep copy of ACCESS_CONTROL for editing */
  editableConfig = signal(null, ...ngDevMode ? [{ debugName: "editableConfig" }] : []);
  /** Positions added via UI that aren't yet in any tab or superuser list */
  pendingPositions = signal([], ...ngDevMode ? [{ debugName: "pendingPositions" }] : []);
  /** Save operation in progress */
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  /** Status feedback message */
  statusMessage = signal("", ...ngDevMode ? [{ debugName: "statusMessage" }] : []);
  statusType = signal("", ...ngDevMode ? [{ debugName: "statusType" }] : []);
  /** Input bindings for new entries */
  newSuperuserName = signal("", ...ngDevMode ? [{ debugName: "newSuperuserName" }] : []);
  newPositionName = signal("", ...ngDevMode ? [{ debugName: "newPositionName" }] : []);
  /** Whether editable config differs from saved config */
  hasUnsavedChanges = computed(() => {
    const editable = this.editableConfig();
    const saved = this.configService.configuration()?.ACCESS_CONTROL;
    if (!editable || !saved)
      return false;
    const pending = this.pendingPositions();
    if (pending.length > 0)
      return true;
    return JSON.stringify(editable) !== JSON.stringify(saved);
  }, ...ngDevMode ? [{ debugName: "hasUnsavedChanges" }] : []);
  /** Unique list of all positions across superusers, all tab configs, and pending additions */
  allPositions = computed(() => {
    const config = this.editableConfig();
    if (!config)
      return [];
    const positionSet = /* @__PURE__ */ new Set();
    for (const su of config.superusers) {
      positionSet.add(su);
    }
    for (const tabKey of Object.keys(config.tabs)) {
      for (const pos of config.tabs[tabKey].positions) {
        positionSet.add(pos);
      }
    }
    for (const pos of this.pendingPositions()) {
      positionSet.add(pos);
    }
    return Array.from(positionSet).sort();
  }, ...ngDevMode ? [{ debugName: "allPositions" }] : []);
  /** Load editable config from saved config when config becomes available */
  configEffect = effect(() => {
    const config = this.configService.configuration();
    if (config?.ACCESS_CONTROL && !this.editableConfig()) {
      this.editableConfig.set(this.deepCloneAccessControl(config.ACCESS_CONTROL));
    }
  }, ...ngDevMode ? [{ debugName: "configEffect" }] : []);
  ngOnInit() {
    const config = this.configService.configuration();
    if (config?.ACCESS_CONTROL) {
      this.editableConfig.set(this.deepCloneAccessControl(config.ACCESS_CONTROL));
    }
  }
  /** Check if a position is in the superuser list */
  isSuperuserPosition(position) {
    return this.editableConfig()?.superusers.includes(position) ?? false;
  }
  /** Check if a position has access to a specific tab */
  isPositionInTab(position, tabKey) {
    if (this.isSuperuserPosition(position))
      return true;
    const tabConfig = this.editableConfig()?.tabs[tabKey];
    return tabConfig?.positions.includes(position) ?? false;
  }
  /** Toggle a position's access to a tab */
  toggleTabAccess(position, tabKey, event) {
    const config = this.editableConfig();
    if (!config || this.isSuperuserPosition(position))
      return;
    const checked = event.target.checked;
    const clone = this.deepCloneAccessControl(config);
    if (!clone.tabs[tabKey]) {
      clone.tabs[tabKey] = { label: this.getTabLabel(tabKey), positions: [] };
    }
    if (checked) {
      if (!clone.tabs[tabKey].positions.includes(position)) {
        clone.tabs[tabKey].positions.push(position);
      }
    } else {
      clone.tabs[tabKey].positions = clone.tabs[tabKey].positions.filter((p) => p !== position);
    }
    if (checked) {
      this.pendingPositions.update((pp) => pp.filter((p) => p !== position));
    }
    this.editableConfig.set(clone);
    this.clearStatus();
  }
  /** Add a new superuser position */
  addSuperuser() {
    const name = this.newSuperuserName().trim();
    if (!name)
      return;
    const config = this.editableConfig();
    if (!config)
      return;
    if (config.superusers.includes(name)) {
      this.setStatus("Position is already a superuser", "error");
      return;
    }
    const clone = this.deepCloneAccessControl(config);
    clone.superusers.push(name);
    this.editableConfig.set(clone);
    this.newSuperuserName.set("");
    this.clearStatus();
  }
  /** Remove a superuser position (cannot remove the last one) */
  removeSuperuser(name) {
    const config = this.editableConfig();
    if (!config || config.superusers.length <= 1)
      return;
    const clone = this.deepCloneAccessControl(config);
    clone.superusers = clone.superusers.filter((s) => s !== name);
    this.editableConfig.set(clone);
    this.clearStatus();
  }
  /** Add a new position to the matrix with no tabs checked */
  addPosition() {
    const name = this.newPositionName().trim();
    if (!name)
      return;
    if (this.allPositions().includes(name)) {
      this.setStatus("Position already exists", "error");
      return;
    }
    this.pendingPositions.update((pp) => [...pp, name]);
    this.newPositionName.set("");
    this.clearStatus();
  }
  /** Remove a position from all tabs, superusers, and pending list */
  removePosition(position) {
    const config = this.editableConfig();
    if (!config || this.isSuperuserPosition(position))
      return;
    const clone = this.deepCloneAccessControl(config);
    for (const tabKey of Object.keys(clone.tabs)) {
      clone.tabs[tabKey].positions = clone.tabs[tabKey].positions.filter((p) => p !== position);
    }
    this.pendingPositions.update((pp) => pp.filter((p) => p !== position));
    this.editableConfig.set(clone);
    this.clearStatus();
  }
  /** Save changes to configuration */
  saveChanges() {
    const editable = this.editableConfig();
    const fullConfig = this.configService.configuration();
    if (!editable || !fullConfig)
      return;
    this.saving.set(true);
    this.clearStatus();
    const configToSave = JSON.parse(JSON.stringify(fullConfig));
    configToSave.ACCESS_CONTROL = JSON.parse(JSON.stringify(editable));
    this.configService.saveConfiguration(configToSave).subscribe({
      next: (result) => {
        this.saving.set(false);
        if (result.saved) {
          this.setStatus("Access control saved successfully", "success");
          this.pendingPositions.set([]);
        } else {
          const errorMsg = result.errors?.join(", ") || "Unknown error";
          this.setStatus("Save failed: " + errorMsg, "error");
        }
      },
      error: (err) => {
        this.saving.set(false);
        this.setStatus("Save failed: " + (err?.message || "Unknown error"), "error");
      }
    });
  }
  /** Discard changes and reset from saved config */
  discardChanges() {
    const config = this.configService.configuration();
    if (config?.ACCESS_CONTROL) {
      this.editableConfig.set(this.deepCloneAccessControl(config.ACCESS_CONTROL));
      this.pendingPositions.set([]);
      this.clearStatus();
    }
  }
  /** Get tab label by key */
  getTabLabel(tabKey) {
    return ALL_TABS.find((t) => t.key === tabKey)?.label ?? tabKey;
  }
  /** Deep clone an AccessControlConfig */
  deepCloneAccessControl(config) {
    return JSON.parse(JSON.stringify(config));
  }
  /** Set status message */
  setStatus(message, type) {
    this.statusMessage.set(message);
    this.statusType.set(type);
  }
  /** Clear status message */
  clearStatus() {
    this.statusMessage.set("");
    this.statusType.set("");
  }
  static \u0275fac = function SecurityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityComponent, selectors: [["app-security"]], decls: 18, vars: 7, consts: [[1, "security-header"], [1, "header-left"], [1, "user-info"], [1, "user-position"], [1, "superuser-badge"], [1, "header-actions"], [1, "status-message", 3, "status-success", "status-error"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "section-card"], [1, "status-message"], [1, "section-header"], [1, "section-description"], [1, "superuser-list"], [1, "chip"], [1, "add-row"], [1, "matrix-wrapper"], [1, "matrix-table"], [1, "position-col"], [1, "tab-col"], [1, "action-col"], [3, "superuser-row"], [1, "add-row", 2, "margin-top", "12px"], ["type", "text", "placeholder", "New position name", 1, "form-input", 3, "input", "keydown.enter", "value"], [1, "btn", "btn-small", 3, "click", "disabled"], [1, "chip-remove", 3, "disabled", "title"], [1, "chip-remove", 3, "click", "disabled", "title"], ["type", "text", "placeholder", "Position name", 1, "form-input", 3, "input", "keydown.enter", "value"], ["title", "Superuser - always has full access", 1, "superuser-indicator"], [1, "btn", "btn-small", "btn-danger", 3, "click", "disabled", "title"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "empty-message"]], template: function SecurityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Security - Access Control");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275text(6, "Position: ");
      \u0275\u0275domElementStart(7, "strong");
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(9, SecurityComponent_Conditional_9_Template, 2, 0, "span", 4);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 5);
      \u0275\u0275conditionalCreate(11, SecurityComponent_Conditional_11_Template, 2, 5, "span", 6);
      \u0275\u0275domElementStart(12, "button", 7);
      \u0275\u0275domListener("click", function SecurityComponent_Template_button_click_12_listener() {
        return ctx.discardChanges();
      });
      \u0275\u0275text(13, " Discard ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "button", 8);
      \u0275\u0275domListener("click", function SecurityComponent_Template_button_click_14_listener() {
        return ctx.saveChanges();
      });
      \u0275\u0275text(15);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(16, SecurityComponent_Conditional_16_Template, 34, 4)(17, SecurityComponent_Conditional_17_Template, 3, 0, "div", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.accessControl.userPosition() || "Unknown");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.accessControl.isSuperuser() ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.statusMessage() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges() || ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", !ctx.hasUnsavedChanges() || ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving..." : "Save", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editableConfig() ? 16 : 17);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 20px;\n  max-width: 1200px;\n}\n.security-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  color: #1a365d;\n  font-size: 1.4rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9rem;\n  color: #555;\n}\n.user-position[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a365d;\n}\n.superuser-badge[_ngcontent-%COMP%] {\n  background: #2b6cb0;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-message[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.status-success[_ngcontent-%COMP%] {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.status-error[_ngcontent-%COMP%] {\n  background: #fed7d7;\n  color: #9b2c2c;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  color: #1a365d;\n  font-size: 1.1rem;\n}\n.section-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.85rem;\n}\n.superuser-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ebf4ff;\n  color: #2b6cb0;\n  border: 1px solid #bee3f8;\n  border-radius: 16px;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.chip-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #2b6cb0;\n  cursor: pointer;\n  font-size: 1.1rem;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chip-remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2b6cb0;\n  color: #fff;\n}\n.chip-remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  width: 220px;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2b6cb0;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a365d;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e0;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  font-size: 0.8rem;\n  background: #edf2f7;\n  color: #4a5568;\n  border: 1px solid #cbd5e0;\n}\n.btn-small[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e2e8f0;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  color: #c53030;\n  border-color: #feb2b2;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fed7d7;\n}\n.matrix-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.matrix-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #1a365d;\n  color: #fff;\n  padding: 8px 10px;\n  text-align: center;\n  font-weight: 600;\n  white-space: nowrap;\n  border: 1px solid #2d4a7a;\n}\n.matrix-table[_ngcontent-%COMP%]   th.position-col[_ngcontent-%COMP%], \n.matrix-table[_ngcontent-%COMP%]   td.position-col[_ngcontent-%COMP%] {\n  text-align: left;\n  min-width: 180px;\n}\n.matrix-table[_ngcontent-%COMP%]   th.action-col[_ngcontent-%COMP%], \n.matrix-table[_ngcontent-%COMP%]   td.action-col[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80px;\n}\n.matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f7fafc;\n}\n.matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #edf2f7;\n}\n.superuser-row[_ngcontent-%COMP%] {\n  background: #ebf8ff !important;\n}\n.superuser-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #2b6cb0;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.matrix-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #2b6cb0;\n}\n.matrix-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.6;\n}\n.empty-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #a0aec0;\n  padding: 20px;\n  font-style: italic;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurityComponent, [{
    type: Component,
    args: [{ selector: "app-security", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <!-- Header Bar -->
    <div class="security-header">
      <div class="header-left">
        <h2>Security - Access Control</h2>
        <div class="user-info">
          <span class="user-position">Position: <strong>{{ accessControl.userPosition() || 'Unknown' }}</strong></span>
          @if (accessControl.isSuperuser()) {
            <span class="superuser-badge">Superuser</span>
          }
        </div>
      </div>
      <div class="header-actions">
        @if (statusMessage()) {
          <span class="status-message" [class.status-success]="statusType() === 'success'" [class.status-error]="statusType() === 'error'">
            {{ statusMessage() }}
          </span>
        }
        <button
          class="btn btn-secondary"
          [disabled]="!hasUnsavedChanges() || saving()"
          (click)="discardChanges()">
          Discard
        </button>
        <button
          class="btn btn-primary"
          [disabled]="!hasUnsavedChanges() || saving()"
          (click)="saveChanges()">
          {{ saving() ? 'Saving...' : 'Save' }}
        </button>
      </div>
    </div>

    @if (editableConfig()) {
      <!-- Superusers Section -->
      <div class="section-card">
        <div class="section-header">
          <h3>Superuser Positions</h3>
          <p class="section-description">Superusers always have access to all tabs. Only superusers can modify this list.</p>
        </div>
        <div class="superuser-list">
          @for (su of editableConfig()!.superusers; track su) {
            <span class="chip">
              {{ su }}
              @if (accessControl.canEditSuperusers()) {
                <button
                  class="chip-remove"
                  [disabled]="editableConfig()!.superusers.length <= 1"
                  [title]="editableConfig()!.superusers.length <= 1 ? 'Cannot remove last superuser' : 'Remove ' + su"
                  (click)="removeSuperuser(su)">
                  &times;
                </button>
              }
            </span>
          }
        </div>
        @if (accessControl.canEditSuperusers()) {
          <div class="add-row">
            <input
              type="text"
              class="form-input"
              placeholder="Position name"
              [value]="newSuperuserName()"
              (input)="newSuperuserName.set($any($event.target).value)"
              (keydown.enter)="addSuperuser()" />
            <button class="btn btn-small" [disabled]="!newSuperuserName().trim()" (click)="addSuperuser()">Add</button>
          </div>
        }
      </div>

      <!-- Position-Tab Matrix -->
      <div class="section-card">
        <div class="section-header">
          <h3>Position-Tab Access Matrix</h3>
          <p class="section-description">Configure which positions can access each tab. Superuser positions always have full access.</p>
        </div>
        <div class="matrix-wrapper">
          <table class="matrix-table">
            <thead>
              <tr>
                <th class="position-col">Position</th>
                @for (tab of allTabs; track tab.key) {
                  <th class="tab-col">{{ tab.label }}</th>
                }
                <th class="action-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (position of allPositions(); track position) {
                <tr [class.superuser-row]="isSuperuserPosition(position)">
                  <td class="position-col">
                    {{ position }}
                    @if (isSuperuserPosition(position)) {
                      <span class="superuser-indicator" title="Superuser - always has full access">S</span>
                    }
                  </td>
                  @for (tab of allTabs; track tab.key) {
                    <td class="tab-col">
                      <input
                        type="checkbox"
                        [checked]="isPositionInTab(position, tab.key)"
                        [disabled]="isSuperuserPosition(position)"
                        (change)="toggleTabAccess(position, tab.key, $event)" />
                    </td>
                  }
                  <td class="action-col">
                    <button
                      class="btn btn-small btn-danger"
                      [disabled]="isSuperuserPosition(position)"
                      [title]="isSuperuserPosition(position) ? 'Remove from superusers first' : 'Remove position'"
                      (click)="removePosition(position)">
                      Remove
                    </button>
                  </td>
                </tr>
              }
              @if (allPositions().length === 0) {
                <tr>
                  <td [attr.colspan]="allTabs.length + 2" class="empty-message">
                    No positions configured. Add a position below.
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Add Position -->
        <div class="add-row" style="margin-top: 12px;">
          <input
            type="text"
            class="form-input"
            placeholder="New position name"
            [value]="newPositionName()"
            (input)="newPositionName.set($any($event.target).value)"
            (keydown.enter)="addPosition()" />
          <button class="btn btn-small" [disabled]="!newPositionName().trim()" (click)="addPosition()">Add Position</button>
        </div>
      </div>
    } @else {
      <div class="section-card">
        <p class="empty-message">Loading configuration...</p>
      </div>
    }
  `, styles: ["/* angular:styles/component:scss;4732f0ec2390c8bace88dcb28c4ff404fd42cb29672765f3351c8bf9c7fdb8e6;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/security/security.ts */\n:host {\n  display: block;\n  padding: 20px;\n  max-width: 1200px;\n}\n.security-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left h2 {\n  margin: 0 0 6px 0;\n  color: #1a365d;\n  font-size: 1.4rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9rem;\n  color: #555;\n}\n.user-position strong {\n  color: #1a365d;\n}\n.superuser-badge {\n  background: #2b6cb0;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-message {\n  font-size: 0.85rem;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.status-success {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.status-error {\n  background: #fed7d7;\n  color: #9b2c2c;\n}\n.section-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.section-header h3 {\n  margin: 0 0 4px 0;\n  color: #1a365d;\n  font-size: 1.1rem;\n}\n.section-description {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.85rem;\n}\n.superuser-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ebf4ff;\n  color: #2b6cb0;\n  border: 1px solid #bee3f8;\n  border-radius: 16px;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.chip-remove {\n  background: none;\n  border: none;\n  color: #2b6cb0;\n  cursor: pointer;\n  font-size: 1.1rem;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chip-remove:hover:not(:disabled) {\n  background: #2b6cb0;\n  color: #fff;\n}\n.chip-remove:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.add-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form-input {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  width: 220px;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2b6cb0;\n  color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a365d;\n}\n.btn-secondary {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #cbd5e0;\n}\n.btn-small {\n  padding: 4px 12px;\n  font-size: 0.8rem;\n  background: #edf2f7;\n  color: #4a5568;\n  border: 1px solid #cbd5e0;\n}\n.btn-small:hover:not(:disabled) {\n  background: #e2e8f0;\n}\n.btn-danger {\n  background: #fff5f5;\n  color: #c53030;\n  border-color: #feb2b2;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #fed7d7;\n}\n.matrix-wrapper {\n  overflow-x: auto;\n}\n.matrix-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.matrix-table th {\n  background: #1a365d;\n  color: #fff;\n  padding: 8px 10px;\n  text-align: center;\n  font-weight: 600;\n  white-space: nowrap;\n  border: 1px solid #2d4a7a;\n}\n.matrix-table th.position-col,\n.matrix-table td.position-col {\n  text-align: left;\n  min-width: 180px;\n}\n.matrix-table th.action-col,\n.matrix-table td.action-col {\n  text-align: center;\n  width: 80px;\n}\n.matrix-table td {\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.matrix-table tbody tr:nth-child(even) {\n  background: #f7fafc;\n}\n.matrix-table tbody tr:hover {\n  background: #edf2f7;\n}\n.superuser-row {\n  background: #ebf8ff !important;\n}\n.superuser-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #2b6cb0;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.matrix-table input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #2b6cb0;\n}\n.matrix-table input[type=checkbox]:disabled {\n  cursor: default;\n  opacity: 0.6;\n}\n.empty-message {\n  text-align: center;\n  color: #a0aec0;\n  padding: 20px;\n  font-style: italic;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityComponent, { className: "SecurityComponent", filePath: "src/app/security/security.ts", lineNumber: 463 });
})();
export {
  SecurityComponent
};
