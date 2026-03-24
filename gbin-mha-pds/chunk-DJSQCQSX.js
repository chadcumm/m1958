import {
  ALL_TABS,
  AccessControlService
} from "./chunk-EJHEW7ZA.js";
import {
  MhaPdsConfigurationService
} from "./chunk-YITHQB7Z.js";
import {
  AppStatusService,
  CodeValueService,
  FormsModule,
  MpageSelectComponent,
  NgControlStatus,
  NgModel,
  PrsnlService
} from "./chunk-JHWRIAYJ.js";
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

// src/app/security/security.ts
var _forTrack0 = ($index, $item) => $item.key;
function SecurityComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "Superuser");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
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
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function SecurityComponent_Conditional_16_For_8_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const su_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeSuperuser(su_r3));
    });
    \u0275\u0275text(1, " \xD7 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const su_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.editableConfig().superusers.length <= 1)("title", ctx_r0.editableConfig().superusers.length <= 1 ? "Cannot remove last superuser" : "Remove " + su_r3);
  }
}
function SecurityComponent_Conditional_16_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_For_8_Conditional_2_Template, 2, 2, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const su_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", su_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.accessControl.canEditSuperusers() ? 2 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 23);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.filteredSuperuserCount(), " of ", ctx_r0.totalPositionCount(), " positions ");
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" Type to search ", ctx_r0.totalPositionCount(), " positions ");
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("mousedown", function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_For_1_Template_div_mousedown_0_listener() {
      const pos_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.selectSuperuser(pos_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pos_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pos_r6);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_For_1_Template, 2, 1, "div", 33, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275repeater(ctx_r0.filteredSuperuserPositions());
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "No matching positions");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 31);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_2_Template, 1, 2)(3, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_Template, 2, 0)(5, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_5_Template, 2, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.superuserSearchText() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filteredSuperuserPositions().length > 0 ? 4 : ctx_r0.superuserSearchText() ? 5 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Loading positions...");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 28);
    \u0275\u0275listener("input", function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.superuserSearchText.set($event.target.value);
      return \u0275\u0275resetView(ctx_r0.superuserDropdownOpen.set(true));
    })("focus", function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.superuserDropdownOpen.set(true));
    })("blur", function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeSuperuserDropdown());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Template, 6, 2, "div", 29);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_2_Template, 2, 0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.superuserSearchText());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.superuserDropdownOpen() && ctx_r0.positionsLoaded() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.positionsLoaded() && !ctx_r0.appStatus.offlineMode() ? 2 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, SecurityComponent_Conditional_16_Conditional_9_Conditional_1_Template, 1, 0, "input", 23)(2, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template, 3, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.appStatus.offlineMode() ? 1 : 2);
  }
}
function SecurityComponent_Conditional_16_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Looking up position...");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Username: ", result_r8.username);
  }
}
function SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_7_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.addUserFromLookup());
    });
    \u0275\u0275text(1, " Add User ");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 40);
    \u0275\u0275listener("click", function SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.addPositionFromLookup());
    });
    \u0275\u0275text(2, " Add Position ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_7_Conditional_3_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(result_r8.username ? 3 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, "Added!");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_6_Template, 2, 1, "p");
    \u0275\u0275conditionalCreate(7, SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_7_Template, 4, 1, "div", 38)(8, SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Conditional_8_Template, 2, 0, "p", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r8 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Position: ", result_r8.position);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r8.username ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!result_r8.added ? 7 : 8);
  }
}
function SecurityComponent_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3, "Lookup Position by User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5, "Search for a user to find their position and add it to the matrix.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "mpage-select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SecurityComponent_Conditional_16_Conditional_10_Template_mpage_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedPersonnelId, $event) || (ctx_r0.selectedPersonnelId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SecurityComponent_Conditional_16_Conditional_10_Template_mpage_select_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPersonnelSelected());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SecurityComponent_Conditional_16_Conditional_10_Conditional_8_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SecurityComponent_Conditional_16_Conditional_10_Conditional_9_Template, 9, 4, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedPersonnelId);
    \u0275\u0275property("searchable", true)("searchLimit", 50);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lookupLoading() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r0.lookupResult()) ? 9 : -1, tmp_6_0);
  }
}
function SecurityComponent_Conditional_16_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r11.label);
  }
}
function SecurityComponent_Conditional_16_For_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "S");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_For_29_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 19)(1, "input", 45);
    \u0275\u0275listener("change", function SecurityComponent_Conditional_16_For_29_For_5_Template_input_change_1_listener($event) {
      const tab_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const position_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTabAccess(position_r15, tab_r14.key, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r14 = ctx.$implicit;
    const position_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isPositionInTab(position_r15, tab_r14.key))("disabled", ctx_r0.isSuperuserPosition(position_r15));
  }
}
function SecurityComponent_Conditional_16_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SecurityComponent_Conditional_16_For_29_Conditional_3_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SecurityComponent_Conditional_16_For_29_For_5_Template, 2, 2, "td", 19, _forTrack0);
    \u0275\u0275elementStart(6, "td", 20)(7, "button", 44);
    \u0275\u0275listener("click", function SecurityComponent_Conditional_16_For_29_Template_button_click_7_listener() {
      const position_r15 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removePosition(position_r15));
    });
    \u0275\u0275text(8, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const position_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("superuser-row", ctx_r0.isSuperuserPosition(position_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", position_r15, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSuperuserPosition(position_r15) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.allTabs);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isSuperuserPosition(position_r15))("title", ctx_r0.isSuperuserPosition(position_r15) ? "Remove from superusers first" : "Remove position");
  }
}
function SecurityComponent_Conditional_16_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2, " No positions configured. Add a position below. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.allTabs.length + 2);
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 23);
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.filteredMatrixCount(), " of ", ctx_r0.totalPositionCount(), " positions ");
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" Type to search ", ctx_r0.totalPositionCount(), " positions ");
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("mousedown", function SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_4_For_1_Template_div_mousedown_0_listener() {
      const pos_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.selectPosition(pos_r18));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pos_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pos_r18);
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_4_For_1_Template, 2, 1, "div", 33, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r0.filteredMatrixPositions());
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "No matching positions");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 31);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_2_Template, 1, 2)(3, SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_4_Template, 2, 0)(5, SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Conditional_5_Template, 2, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.positionSearchText() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filteredMatrixPositions().length > 0 ? 4 : ctx_r0.positionSearchText() ? 5 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Loading positions...");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 47);
    \u0275\u0275listener("input", function SecurityComponent_Conditional_16_Conditional_33_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.positionSearchText.set($event.target.value);
      return \u0275\u0275resetView(ctx_r0.positionDropdownOpen.set(true));
    })("focus", function SecurityComponent_Conditional_16_Conditional_33_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.positionDropdownOpen.set(true));
    })("blur", function SecurityComponent_Conditional_16_Conditional_33_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closePositionDropdown());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, SecurityComponent_Conditional_16_Conditional_33_Conditional_1_Template, 6, 2, "div", 29);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_33_Conditional_2_Template, 2, 0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.positionSearchText());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.positionDropdownOpen() && ctx_r0.positionsLoaded() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.positionsLoaded() && !ctx_r0.appStatus.offlineMode() ? 2 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, " No users configured. Use the personnel lookup above to add individual users. ");
    \u0275\u0275elementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_37_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r19.label);
  }
}
function SecurityComponent_Conditional_16_Conditional_37_For_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 49)(1, "input", 51);
    \u0275\u0275listener("change", function SecurityComponent_Conditional_16_Conditional_37_For_11_For_4_Template_input_change_1_listener($event) {
      const tab_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const username_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleUserTabAccess(username_r23, tab_r22.key, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r22 = ctx.$implicit;
    const username_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isUserInTab(username_r23, tab_r22.key));
  }
}
function SecurityComponent_Conditional_16_Conditional_37_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SecurityComponent_Conditional_16_Conditional_37_For_11_For_4_Template, 2, 1, "td", 49, _forTrack0);
    \u0275\u0275elementStart(5, "td")(6, "button", 50);
    \u0275\u0275listener("click", function SecurityComponent_Conditional_16_Conditional_37_For_11_Template_button_click_6_listener() {
      const username_r23 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeUser(username_r23));
    });
    \u0275\u0275text(7, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const username_r23 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(username_r23);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.allTabs);
  }
}
function SecurityComponent_Conditional_16_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, SecurityComponent_Conditional_16_Conditional_37_For_6_Template, 2, 1, "th", 48, _forTrack0);
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, SecurityComponent_Conditional_16_Conditional_37_For_11_Template, 8, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.allTabs);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.allUsers());
  }
}
function SecurityComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3, "Superuser Positions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5, "Superusers always have access to all tabs. Only superusers can modify this list.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275repeaterCreate(7, SecurityComponent_Conditional_16_For_8_Template, 3, 2, "span", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SecurityComponent_Conditional_16_Conditional_9_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, SecurityComponent_Conditional_16_Conditional_10_Template, 10, 5, "div", 9);
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 11)(13, "h3");
    \u0275\u0275text(14, "Position-Tab Access Matrix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 12);
    \u0275\u0275text(16, "Configure which positions can access each tab. Superuser positions always have full access.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "table", 17)(19, "thead")(20, "tr")(21, "th", 18);
    \u0275\u0275text(22, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, SecurityComponent_Conditional_16_For_24_Template, 2, 1, "th", 19, _forTrack0);
    \u0275\u0275elementStart(25, "th", 20);
    \u0275\u0275text(26, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, SecurityComponent_Conditional_16_For_29_Template, 9, 6, "tr", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(30, SecurityComponent_Conditional_16_Conditional_30_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 22);
    \u0275\u0275conditionalCreate(32, SecurityComponent_Conditional_16_Conditional_32_Template, 1, 0, "input", 23)(33, SecurityComponent_Conditional_16_Conditional_33_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h5", 24);
    \u0275\u0275text(35, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, SecurityComponent_Conditional_16_Conditional_36_Template, 2, 0, "p", 25)(37, SecurityComponent_Conditional_16_Conditional_37_Template, 12, 0, "table", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.editableConfig().superusers);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.accessControl.canEditSuperusers() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.appStatus.offlineMode() ? 10 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r0.allTabs);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.allPositions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allPositions().length === 0 ? 30 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.appStatus.offlineMode() ? 32 : 33);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.allUsers().length === 0 ? 36 : 37);
  }
}
function SecurityComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 46);
    \u0275\u0275text(2, "Loading configuration...");
    \u0275\u0275elementEnd()();
  }
}
var SecurityComponent = class _SecurityComponent {
  accessControl = inject(AccessControlService);
  configService = inject(MhaPdsConfigurationService);
  codeValueService = inject(CodeValueService);
  appStatus = inject(AppStatusService);
  prsnlService = inject(PrsnlService);
  allTabs = ALL_TABS;
  /** Deep copy of ACCESS_CONTROL for editing */
  editableConfig = signal(null, ...ngDevMode ? [{ debugName: "editableConfig" }] : []);
  /** Positions added via UI that aren't yet in any tab or superuser list */
  pendingPositions = signal([], ...ngDevMode ? [{ debugName: "pendingPositions" }] : []);
  /** Users added via lookup that aren't yet in any tab */
  pendingUsers = signal([], ...ngDevMode ? [{ debugName: "pendingUsers" }] : []);
  /** Save operation in progress */
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  /** Status feedback message */
  statusMessage = signal("", ...ngDevMode ? [{ debugName: "statusMessage" }] : []);
  statusType = signal("", ...ngDevMode ? [{ debugName: "statusType" }] : []);
  /** Position picker state */
  positionsLoaded = signal(false, ...ngDevMode ? [{ debugName: "positionsLoaded" }] : []);
  positionSearchText = signal("", ...ngDevMode ? [{ debugName: "positionSearchText" }] : []);
  superuserSearchText = signal("", ...ngDevMode ? [{ debugName: "superuserSearchText" }] : []);
  positionDropdownOpen = signal(false, ...ngDevMode ? [{ debugName: "positionDropdownOpen" }] : []);
  superuserDropdownOpen = signal(false, ...ngDevMode ? [{ debugName: "superuserDropdownOpen" }] : []);
  /** Personnel lookup: selected person ID from mpage-select */
  selectedPersonnelId = signal(0, ...ngDevMode ? [{ debugName: "selectedPersonnelId" }] : []);
  /** Personnel lookup: result to display after loading prsnl data */
  lookupResult = signal(null, ...ngDevMode ? [{ debugName: "lookupResult" }] : []);
  /** Personnel lookup: loading state while fetching prsnl data */
  lookupLoading = signal(false, ...ngDevMode ? [{ debugName: "lookupLoading" }] : []);
  /** Whether editable config differs from saved config */
  hasUnsavedChanges = computed(() => {
    const editable = this.editableConfig();
    const saved = this.configService.configuration()?.ACCESS_CONTROL;
    if (!editable || !saved)
      return false;
    const pending = this.pendingPositions();
    if (pending.length > 0)
      return true;
    if (this.pendingUsers().length > 0)
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
  allUsers = computed(() => {
    const editable = this.editableConfig();
    if (!editable)
      return [];
    const userSet = /* @__PURE__ */ new Set();
    for (const tab of Object.values(editable.tabs)) {
      for (const username of tab.usernames ?? []) {
        userSet.add(username.toLowerCase());
      }
    }
    for (const username of this.pendingUsers()) {
      userSet.add(username.toLowerCase());
    }
    return [...userSet].sort();
  }, ...ngDevMode ? [{ debugName: "allUsers" }] : []);
  totalPositionCount = computed(() => {
    this.positionsLoaded();
    return this.codeValueService.getCodeSet(88).length;
  }, ...ngDevMode ? [{ debugName: "totalPositionCount" }] : []);
  filteredMatrixPositions = computed(() => {
    this.positionsLoaded();
    const allCernerPositions = this.codeValueService.getCodeSet(88);
    const existing = this.allPositions();
    const search = this.positionSearchText().toLowerCase();
    return allCernerPositions.map((cv) => cv.display).filter((name) => !existing.includes(name)).filter((name) => !search || name.toLowerCase().includes(search)).slice(0, 20);
  }, ...ngDevMode ? [{ debugName: "filteredMatrixPositions" }] : []);
  filteredMatrixCount = computed(() => {
    this.positionsLoaded();
    const allCernerPositions = this.codeValueService.getCodeSet(88);
    const existing = this.allPositions();
    const search = this.positionSearchText().toLowerCase();
    return allCernerPositions.map((cv) => cv.display).filter((name) => !existing.includes(name)).filter((name) => !search || name.toLowerCase().includes(search)).length;
  }, ...ngDevMode ? [{ debugName: "filteredMatrixCount" }] : []);
  filteredSuperuserPositions = computed(() => {
    this.positionsLoaded();
    const allCernerPositions = this.codeValueService.getCodeSet(88);
    const existingSuperusers = this.editableConfig()?.superusers ?? [];
    const search = this.superuserSearchText().toLowerCase();
    return allCernerPositions.map((cv) => cv.display).filter((name) => !existingSuperusers.includes(name)).filter((name) => !search || name.toLowerCase().includes(search)).slice(0, 20);
  }, ...ngDevMode ? [{ debugName: "filteredSuperuserPositions" }] : []);
  filteredSuperuserCount = computed(() => {
    this.positionsLoaded();
    const allCernerPositions = this.codeValueService.getCodeSet(88);
    const existingSuperusers = this.editableConfig()?.superusers ?? [];
    const search = this.superuserSearchText().toLowerCase();
    return allCernerPositions.map((cv) => cv.display).filter((name) => !existingSuperusers.includes(name)).filter((name) => !search || name.toLowerCase().includes(search)).length;
  }, ...ngDevMode ? [{ debugName: "filteredSuperuserCount" }] : []);
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
    if (!this.appStatus.offlineMode()) {
      this.codeValueService.load(88);
      this.waitForPositions();
    }
  }
  /**
   * Poll for code set 88 availability.
   * CodeValueService is not signal-based, so callbacks may not trigger
   * zoneless change detection. This bridges the gap.
   */
  waitForPositions() {
    const check = () => {
      if (this.codeValueService.has(88)) {
        this.positionsLoaded.set(true);
      } else {
        setTimeout(check, 200);
      }
    };
    setTimeout(check, 200);
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
      clone.tabs[tabKey] = { label: this.getTabLabel(tabKey), positions: [], usernames: [] };
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
  selectSuperuser(positionName) {
    const config = this.editableConfig();
    if (!config)
      return;
    if (config.superusers.includes(positionName)) {
      this.setStatus("Position is already a superuser", "error");
      return;
    }
    const clone = this.deepCloneAccessControl(config);
    clone.superusers.push(positionName);
    this.editableConfig.set(clone);
    this.superuserSearchText.set("");
    this.superuserDropdownOpen.set(false);
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
  selectPosition(positionName) {
    if (this.allPositions().includes(positionName)) {
      this.setStatus("Position already exists", "error");
      return;
    }
    this.pendingPositions.update((pp) => [...pp, positionName]);
    this.positionSearchText.set("");
    this.positionDropdownOpen.set(false);
    this.clearStatus();
  }
  closePositionDropdown() {
    setTimeout(() => this.positionDropdownOpen.set(false), 200);
  }
  closeSuperuserDropdown() {
    setTimeout(() => this.superuserDropdownOpen.set(false), 200);
  }
  /**
   * Handle personnel selection from mpage-select.
   * Loads prsnl data to get position, then auto-adds to matrix if new.
   */
  onPersonnelSelected() {
    const personId = this.selectedPersonnelId();
    if (!personId || personId === 0) {
      return;
    }
    this.lookupLoading.set(true);
    this.lookupResult.set(null);
    this.prsnlService.load("PRSNL_MIN", [{ personId }]);
    const startTime = Date.now();
    const check = () => {
      if (Date.now() - startTime > 1e4) {
        this.lookupLoading.set(false);
        this.lookupResult.set({
          name: "Unknown",
          position: "Lookup timed out",
          username: "",
          added: false,
          alreadyExists: false
        });
        return;
      }
      if (this.prsnlService.has(personId)) {
        const prsnl = this.prsnlService.get(personId);
        this.lookupLoading.set(false);
        if (!prsnl || !prsnl.position) {
          this.lookupResult.set({
            name: prsnl?.nameFullFormatted ?? "Unknown",
            position: "(No position assigned)",
            username: prsnl?.username ?? "",
            added: false,
            alreadyExists: false
          });
          return;
        }
        const position = prsnl.position;
        const alreadyExists = this.allPositions().includes(position);
        this.lookupResult.set({
          name: prsnl.nameFullFormatted ?? `Person ${personId}`,
          position,
          username: prsnl.username ?? "",
          added: false,
          alreadyExists
        });
        this.selectedPersonnelId.set(0);
      } else {
        setTimeout(check, 200);
      }
    };
    setTimeout(check, 200);
  }
  addPositionFromLookup() {
    const result = this.lookupResult();
    if (!result)
      return;
    const position = result.position;
    if (!this.allPositions().includes(position)) {
      this.pendingPositions.update((p) => [...p, position]);
    }
    this.lookupResult.update((r) => r ? __spreadProps(__spreadValues({}, r), { added: true }) : null);
  }
  addUserFromLookup() {
    const result = this.lookupResult();
    const editable = this.editableConfig();
    if (!result || !editable || !result.username)
      return;
    const username = result.username.toLowerCase();
    if (!this.pendingUsers().includes(username)) {
      this.pendingUsers.update((u) => [...u, username]);
    }
    this.lookupResult.update((r) => r ? __spreadProps(__spreadValues({}, r), { added: true }) : null);
  }
  isUserInTab(username, tabKey) {
    const editable = this.editableConfig();
    if (!editable)
      return false;
    const tab = editable.tabs[tabKey];
    return tab?.usernames?.some((u) => u.toLowerCase() === username.toLowerCase()) ?? false;
  }
  toggleUserTabAccess(username, tabKey, event) {
    const checked = event.target.checked;
    const editable = this.editableConfig();
    if (!editable)
      return;
    const cloned = this.deepCloneAccessControl(editable);
    const tab = cloned.tabs[tabKey];
    if (!tab)
      return;
    if (!tab.usernames)
      tab.usernames = [];
    if (checked) {
      if (!tab.usernames.some((u) => u.toLowerCase() === username.toLowerCase())) {
        tab.usernames.push(username.toLowerCase());
      }
    } else {
      tab.usernames = tab.usernames.filter((u) => u.toLowerCase() !== username.toLowerCase());
    }
    const inAnyTab = Object.values(cloned.tabs).some((t) => t.usernames?.some((u) => u.toLowerCase() === username.toLowerCase()) ?? false);
    if (inAnyTab) {
      this.pendingUsers.update((users) => users.filter((u) => u.toLowerCase() !== username.toLowerCase()));
    }
    this.editableConfig.set(cloned);
  }
  removeUser(username) {
    const editable = this.editableConfig();
    if (!editable)
      return;
    const cloned = this.deepCloneAccessControl(editable);
    for (const tab of Object.values(cloned.tabs)) {
      if (tab.usernames) {
        tab.usernames = tab.usernames.filter((u) => u.toLowerCase() !== username.toLowerCase());
      }
    }
    this.pendingUsers.update((users) => users.filter((u) => u.toLowerCase() !== username.toLowerCase()));
    this.editableConfig.set(cloned);
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
          this.pendingUsers.set([]);
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
      this.pendingUsers.set([]);
      this.clearStatus();
    }
  }
  /** Get tab label by key */
  getTabLabel(tabKey) {
    return ALL_TABS.find((t) => t.key === tabKey)?.label ?? tabKey;
  }
  /**
   * Deep clone and normalize an AccessControlConfig.
   * CCL uppercases all JSON keys (superusers→SUPERUSERS, tabs→TABS, etc.)
   * This normalizer handles both uppercase (from CCL) and lowercase (from local edits).
   */
  deepCloneAccessControl(raw) {
    const superusers = [...raw.superusers ?? raw.SUPERUSERS ?? []];
    const rawTabs = raw.tabs ?? raw.TABS ?? {};
    const tabs = {};
    for (const key of Object.keys(rawTabs)) {
      const normalizedKey = key.toLowerCase();
      const tab = rawTabs[key];
      tabs[normalizedKey] = {
        label: tab.label ?? tab.LABEL ?? normalizedKey,
        positions: [...tab.positions ?? tab.POSITIONS ?? []],
        usernames: [...tab.usernames ?? tab.USERNAMES ?? []]
      };
    }
    return { superusers, tabs };
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityComponent, selectors: [["app-security"]], decls: 18, vars: 7, consts: [[1, "security-header"], [1, "header-left"], [1, "user-info"], [1, "user-position"], [1, "superuser-badge"], [1, "header-actions"], [1, "status-message", 3, "status-success", "status-error"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "section-card"], [1, "status-message"], [1, "section-header"], [1, "section-description"], [1, "superuser-list"], [1, "chip"], [1, "picker-container"], [1, "matrix-wrapper"], [1, "matrix-table"], [1, "position-col"], [1, "tab-col"], [1, "action-col"], [3, "superuser-row"], [1, "picker-container", 2, "margin-top", "12px"], ["type", "text", "disabled", "", "placeholder", "Position list unavailable in offline mode", 1, "form-input"], [1, "mt-4"], [1, "text-muted"], [1, "chip-remove", 3, "disabled", "title"], [1, "chip-remove", 3, "click", "disabled", "title"], ["type", "text", "placeholder", "Search positions...", 1, "form-input", 3, "input", "focus", "blur", "value"], [1, "picker-dropdown"], [1, "picker-loading"], [1, "picker-count"], [1, "picker-empty"], [1, "picker-item"], [1, "picker-item", 3, "mousedown"], [1, "lookup-row"], ["label", "Search by name", 1, "w30", 3, "ngModelChange", "ngModel", "searchable", "searchLimit"], [1, "lookup-result"], [1, "lookup-actions"], [1, "text-success"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "btn", "btn-sm", "btn-outline-secondary", "ms-2"], [1, "btn", "btn-sm", "btn-outline-secondary", "ms-2", 3, "click"], ["title", "Superuser - always has full access", 1, "superuser-indicator"], [1, "btn", "btn-small", "btn-danger", 3, "click", "disabled", "title"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "empty-message"], ["type", "text", "placeholder", "Search positions to add...", 1, "form-input", 3, "input", "focus", "blur", "value"], [1, "tab-header"], [1, "checkbox-cell"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["type", "checkbox", 3, "change", "checked"]], template: function SecurityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Security - Access Control");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275text(6, "Position: ");
      \u0275\u0275elementStart(7, "strong");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, SecurityComponent_Conditional_9_Template, 2, 0, "span", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275conditionalCreate(11, SecurityComponent_Conditional_11_Template, 2, 5, "span", 6);
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function SecurityComponent_Template_button_click_12_listener() {
        return ctx.discardChanges();
      });
      \u0275\u0275text(13, " Discard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function SecurityComponent_Template_button_click_14_listener() {
        return ctx.saveChanges();
      });
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, SecurityComponent_Conditional_16_Template, 38, 5)(17, SecurityComponent_Conditional_17_Template, 3, 0, "div", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.accessControl.userPosition() || "Unknown");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.accessControl.isSuperuser() ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.statusMessage() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.hasUnsavedChanges() || ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.hasUnsavedChanges() || ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving..." : "Save", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editableConfig() ? 16 : 17);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, MpageSelectComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 20px;\n  max-width: 1200px;\n}\n.security-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  color: #1a365d;\n  font-size: 1.4rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9rem;\n  color: #555;\n}\n.user-position[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a365d;\n}\n.superuser-badge[_ngcontent-%COMP%] {\n  background: #2b6cb0;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-message[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.status-success[_ngcontent-%COMP%] {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.status-error[_ngcontent-%COMP%] {\n  background: #fed7d7;\n  color: #9b2c2c;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  color: #1a365d;\n  font-size: 1.1rem;\n}\n.section-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.85rem;\n}\n.superuser-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ebf4ff;\n  color: #2b6cb0;\n  border: 1px solid #bee3f8;\n  border-radius: 16px;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.chip-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #2b6cb0;\n  cursor: pointer;\n  font-size: 1.1rem;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chip-remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2b6cb0;\n  color: #fff;\n}\n.chip-remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  width: 220px;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2b6cb0;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a365d;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e0;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  font-size: 0.8rem;\n  background: #edf2f7;\n  color: #4a5568;\n  border: 1px solid #cbd5e0;\n}\n.btn-small[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e2e8f0;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  color: #c53030;\n  border-color: #feb2b2;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fed7d7;\n}\n.matrix-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.matrix-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #1a365d;\n  color: #fff;\n  padding: 8px 10px;\n  text-align: center;\n  font-weight: 600;\n  white-space: nowrap;\n  border: 1px solid #2d4a7a;\n}\n.matrix-table[_ngcontent-%COMP%]   th.position-col[_ngcontent-%COMP%], \n.matrix-table[_ngcontent-%COMP%]   td.position-col[_ngcontent-%COMP%] {\n  text-align: left;\n  min-width: 180px;\n}\n.matrix-table[_ngcontent-%COMP%]   th.action-col[_ngcontent-%COMP%], \n.matrix-table[_ngcontent-%COMP%]   td.action-col[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80px;\n}\n.matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f7fafc;\n}\n.matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #edf2f7;\n}\n.superuser-row[_ngcontent-%COMP%] {\n  background: #ebf8ff !important;\n}\n.superuser-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #2b6cb0;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.matrix-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #2b6cb0;\n}\n.matrix-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.6;\n}\n.empty-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #a0aec0;\n  padding: 20px;\n  font-style: italic;\n}\n.picker-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.picker-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 280px;\n  max-height: 320px;\n  overflow-y: auto;\n  background: #fff;\n  border: 1px solid #cbd5e0;\n  border-top: none;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 50;\n}\n.picker-count[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  color: #718096;\n  background: #f7fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.picker-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  color: #2d3748;\n  border-bottom: 1px solid #f0f0f0;\n}\n.picker-item[_ngcontent-%COMP%]:hover {\n  background: #ebf4ff;\n  color: #2b6cb0;\n}\n.picker-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.picker-empty[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n  color: #a0aec0;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.picker-loading[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 0.8rem;\n  color: #718096;\n  font-style: italic;\n}\n.lookup-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .mpage-select-option:first-child, \n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .select-option:first-child {\n  display: none;\n}\n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .mpage-select-input, \n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .select-input, \n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     input[type=text] {\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  padding: 6px 10px;\n}\n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .mpage-select-input:focus-within, \n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .select-input:focus-within, \n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     input[type=text]:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .mpage-select-dropdown, \n.lookup-row[_ngcontent-%COMP%]   mpage-select[_ngcontent-%COMP%]     .select-dropdown {\n  max-width: 350px;\n}\n.lookup-result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  background: #f7fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 0.85rem;\n}\n.lookup-result.lookup-added[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  border-color: #c6f6d5;\n}\n.lookup-result.lookup-exists[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-color: #fef3c7;\n}\n.lookup-name[_ngcontent-%COMP%] {\n  color: #2d3748;\n  font-weight: 500;\n}\n.lookup-position[_ngcontent-%COMP%] {\n  color: #4a5568;\n}\n.lookup-status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.8rem;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: #edf2f7;\n  color: #718096;\n}\n.lookup-status.status-success[_ngcontent-%COMP%] {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.lookup-status.status-error[_ngcontent-%COMP%] {\n  background: #fed7d7;\n  color: #9b2c2c;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurityComponent, [{
    type: Component,
    args: [{ selector: "app-security", standalone: true, imports: [FormsModule, MpageSelectComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
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
          <div class="picker-container">
            @if (appStatus.offlineMode()) {
              <input type="text" class="form-input" disabled placeholder="Position list unavailable in offline mode" />
            } @else {
              <input
                type="text"
                class="form-input"
                placeholder="Search positions..."
                [value]="superuserSearchText()"
                (input)="superuserSearchText.set($any($event.target).value); superuserDropdownOpen.set(true)"
                (focus)="superuserDropdownOpen.set(true)"
                (blur)="closeSuperuserDropdown()" />
              @if (superuserDropdownOpen() && positionsLoaded()) {
                <div class="picker-dropdown">
                  <div class="picker-count">
                    @if (superuserSearchText()) {
                      {{ filteredSuperuserCount() }} of {{ totalPositionCount() }} positions
                    } @else {
                      Type to search {{ totalPositionCount() }} positions
                    }
                  </div>
                  @if (filteredSuperuserPositions().length > 0) {
                    @for (pos of filteredSuperuserPositions(); track pos) {
                      <div class="picker-item" (mousedown)="selectSuperuser(pos)">{{ pos }}</div>
                    }
                  } @else if (superuserSearchText()) {
                    <div class="picker-empty">No matching positions</div>
                  }
                </div>
              }
              @if (!positionsLoaded() && !appStatus.offlineMode()) {
                <span class="picker-loading">Loading positions...</span>
              }
            }
          </div>
        }
      </div>

      <!-- Lookup Position by User -->
      @if (!appStatus.offlineMode()) {
        <div class="section-card">
          <div class="section-header">
            <h3>Lookup Position by User</h3>
            <p class="section-description">Search for a user to find their position and add it to the matrix.</p>
          </div>
          <div class="lookup-row">
            <mpage-select
              [(ngModel)]="selectedPersonnelId"
              label="Search by name"
              [searchable]="true"
              [searchLimit]="50"
              class="w30"
              (ngModelChange)="onPersonnelSelected()" />
            @if (lookupLoading()) {
              <span class="picker-loading">Looking up position...</span>
            }
          </div>
          @if (lookupResult(); as result) {
            <div class="lookup-result">
              <p><strong>{{ result.name }}</strong></p>
              <p>Position: {{ result.position }}</p>
              @if (result.username) {
                <p>Username: {{ result.username }}</p>
              }
              @if (!result.added) {
                <div class="lookup-actions">
                  <button (click)="addPositionFromLookup()"
                          class="btn btn-sm btn-outline-primary">
                    Add Position
                  </button>
                  @if (result.username) {
                    <button (click)="addUserFromLookup()"
                            class="btn btn-sm btn-outline-secondary ms-2">
                      Add User
                    </button>
                  }
                </div>
              } @else {
                <p class="text-success">Added!</p>
              }
            </div>
          }
        </div>
      }

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
        <div class="picker-container" style="margin-top: 12px;">
          @if (appStatus.offlineMode()) {
            <input type="text" class="form-input" disabled placeholder="Position list unavailable in offline mode" />
          } @else {
            <input
              type="text"
              class="form-input"
              placeholder="Search positions to add..."
              [value]="positionSearchText()"
              (input)="positionSearchText.set($any($event.target).value); positionDropdownOpen.set(true)"
              (focus)="positionDropdownOpen.set(true)"
              (blur)="closePositionDropdown()" />
            @if (positionDropdownOpen() && positionsLoaded()) {
              <div class="picker-dropdown">
                <div class="picker-count">
                  @if (positionSearchText()) {
                    {{ filteredMatrixCount() }} of {{ totalPositionCount() }} positions
                  } @else {
                    Type to search {{ totalPositionCount() }} positions
                  }
                </div>
                @if (filteredMatrixPositions().length > 0) {
                  @for (pos of filteredMatrixPositions(); track pos) {
                    <div class="picker-item" (mousedown)="selectPosition(pos)">{{ pos }}</div>
                  }
                } @else if (positionSearchText()) {
                  <div class="picker-empty">No matching positions</div>
                }
              </div>
            }
            @if (!positionsLoaded() && !appStatus.offlineMode()) {
              <span class="picker-loading">Loading positions...</span>
            }
          }
        </div>

        <!-- Users Matrix -->
        <h5 class="mt-4">Users</h5>
        @if (allUsers().length === 0) {
          <p class="text-muted">
            No users configured. Use the personnel lookup above to add individual users.
          </p>
        } @else {
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Username</th>
                @for (tab of allTabs; track tab.key) {
                  <th class="tab-header">{{ tab.label }}</th>
                }
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (username of allUsers(); track username) {
                <tr>
                  <td>{{ username }}</td>
                  @for (tab of allTabs; track tab.key) {
                    <td class="checkbox-cell">
                      <input type="checkbox"
                             [checked]="isUserInTab(username, tab.key)"
                             (change)="toggleUserTabAccess(username, tab.key, $event)" />
                    </td>
                  }
                  <td>
                    <button class="btn btn-sm btn-outline-danger"
                            (click)="removeUser(username)">
                      Remove
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>
    } @else {
      <div class="section-card">
        <p class="empty-message">Loading configuration...</p>
      </div>
    }
  `, styles: ["/* angular:styles/component:scss;319dede92ece3b412ee57c106a692f1b994cf2b258374db9126aa2468219f427;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/security/security.ts */\n:host {\n  display: block;\n  padding: 20px;\n  max-width: 1200px;\n}\n.security-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left h2 {\n  margin: 0 0 6px 0;\n  color: #1a365d;\n  font-size: 1.4rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9rem;\n  color: #555;\n}\n.user-position strong {\n  color: #1a365d;\n}\n.superuser-badge {\n  background: #2b6cb0;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-message {\n  font-size: 0.85rem;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.status-success {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.status-error {\n  background: #fed7d7;\n  color: #9b2c2c;\n}\n.section-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.section-header h3 {\n  margin: 0 0 4px 0;\n  color: #1a365d;\n  font-size: 1.1rem;\n}\n.section-description {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.85rem;\n}\n.superuser-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ebf4ff;\n  color: #2b6cb0;\n  border: 1px solid #bee3f8;\n  border-radius: 16px;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.chip-remove {\n  background: none;\n  border: none;\n  color: #2b6cb0;\n  cursor: pointer;\n  font-size: 1.1rem;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chip-remove:hover:not(:disabled) {\n  background: #2b6cb0;\n  color: #fff;\n}\n.chip-remove:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.add-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form-input {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  width: 220px;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2b6cb0;\n  color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a365d;\n}\n.btn-secondary {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #cbd5e0;\n}\n.btn-small {\n  padding: 4px 12px;\n  font-size: 0.8rem;\n  background: #edf2f7;\n  color: #4a5568;\n  border: 1px solid #cbd5e0;\n}\n.btn-small:hover:not(:disabled) {\n  background: #e2e8f0;\n}\n.btn-danger {\n  background: #fff5f5;\n  color: #c53030;\n  border-color: #feb2b2;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #fed7d7;\n}\n.matrix-wrapper {\n  overflow-x: auto;\n}\n.matrix-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.matrix-table th {\n  background: #1a365d;\n  color: #fff;\n  padding: 8px 10px;\n  text-align: center;\n  font-weight: 600;\n  white-space: nowrap;\n  border: 1px solid #2d4a7a;\n}\n.matrix-table th.position-col,\n.matrix-table td.position-col {\n  text-align: left;\n  min-width: 180px;\n}\n.matrix-table th.action-col,\n.matrix-table td.action-col {\n  text-align: center;\n  width: 80px;\n}\n.matrix-table td {\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.matrix-table tbody tr:nth-child(even) {\n  background: #f7fafc;\n}\n.matrix-table tbody tr:hover {\n  background: #edf2f7;\n}\n.superuser-row {\n  background: #ebf8ff !important;\n}\n.superuser-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #2b6cb0;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.matrix-table input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #2b6cb0;\n}\n.matrix-table input[type=checkbox]:disabled {\n  cursor: default;\n  opacity: 0.6;\n}\n.empty-message {\n  text-align: center;\n  color: #a0aec0;\n  padding: 20px;\n  font-style: italic;\n}\n.picker-container {\n  position: relative;\n}\n.picker-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 280px;\n  max-height: 320px;\n  overflow-y: auto;\n  background: #fff;\n  border: 1px solid #cbd5e0;\n  border-top: none;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 50;\n}\n.picker-count {\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  color: #718096;\n  background: #f7fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.picker-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  color: #2d3748;\n  border-bottom: 1px solid #f0f0f0;\n}\n.picker-item:hover {\n  background: #ebf4ff;\n  color: #2b6cb0;\n}\n.picker-item:last-child {\n  border-bottom: none;\n}\n.picker-empty {\n  padding: 12px;\n  text-align: center;\n  color: #a0aec0;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.picker-loading {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 0.8rem;\n  color: #718096;\n  font-style: italic;\n}\n.lookup-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.lookup-row mpage-select {\n  min-width: 300px;\n}\n.lookup-row mpage-select ::ng-deep .mpage-select-option:first-child,\n.lookup-row mpage-select ::ng-deep .select-option:first-child {\n  display: none;\n}\n.lookup-row mpage-select ::ng-deep .mpage-select-input,\n.lookup-row mpage-select ::ng-deep .select-input,\n.lookup-row mpage-select ::ng-deep input[type=text] {\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  padding: 6px 10px;\n}\n.lookup-row mpage-select ::ng-deep .mpage-select-input:focus-within,\n.lookup-row mpage-select ::ng-deep .select-input:focus-within,\n.lookup-row mpage-select ::ng-deep input[type=text]:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.lookup-row mpage-select ::ng-deep .mpage-select-dropdown,\n.lookup-row mpage-select ::ng-deep .select-dropdown {\n  max-width: 350px;\n}\n.lookup-result {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  background: #f7fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 0.85rem;\n}\n.lookup-result.lookup-added {\n  background: #f0fff4;\n  border-color: #c6f6d5;\n}\n.lookup-result.lookup-exists {\n  background: #fffbeb;\n  border-color: #fef3c7;\n}\n.lookup-name {\n  color: #2d3748;\n  font-weight: 500;\n}\n.lookup-position {\n  color: #4a5568;\n}\n.lookup-status {\n  margin-left: auto;\n  font-size: 0.8rem;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: #edf2f7;\n  color: #718096;\n}\n.lookup-status.status-success {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.lookup-status.status-error {\n  background: #fed7d7;\n  color: #9b2c2c;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityComponent, { className: "SecurityComponent", filePath: "src/app/security/security.ts", lineNumber: 753 });
})();
export {
  SecurityComponent
};
