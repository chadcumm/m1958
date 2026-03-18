import {
  ALL_TABS,
  AccessControlService
} from "./chunk-RPJ5MDWZ.js";
import {
  MhaPdsConfigurationService
} from "./chunk-NACOCQOL.js";
import {
  AppStatusService,
  CodeValueService
} from "./chunk-ZFBVEYKZ.js";
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
  ɵɵdomElement,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 25);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_16_For_8_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const su_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeSuperuser(su_r3));
    });
    \u0275\u0275text(1, " \xD7 ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const su_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("disabled", ctx_r0.editableConfig().superusers.length <= 1)("title", ctx_r0.editableConfig().superusers.length <= 1 ? "Cannot remove last superuser" : "Remove " + su_r3);
  }
}
function SecurityComponent_Conditional_16_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_For_8_Conditional_2_Template, 2, 2, "button", 24);
    \u0275\u0275domElementEnd();
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
    \u0275\u0275domElement(0, "input", 23);
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
    \u0275\u0275domElementStart(0, "div", 32);
    \u0275\u0275domListener("mousedown", function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_For_1_Template_div_mousedown_0_listener() {
      const pos_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.selectSuperuser(pos_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const pos_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pos_r6);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_For_1_Template, 2, 1, "div", 31, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275repeater(ctx_r0.filteredSuperuserPositions());
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30);
    \u0275\u0275text(1, "No matching positions");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 27)(1, "div", 29);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_2_Template, 1, 2)(3, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_3_Template, 1, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_4_Template, 2, 0)(5, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Conditional_5_Template, 2, 0, "div", 30);
    \u0275\u0275domElementEnd();
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
    \u0275\u0275domElementStart(0, "span", 28);
    \u0275\u0275text(1, "Loading positions...");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 26);
    \u0275\u0275domListener("input", function SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template_input_input_0_listener($event) {
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
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(1, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_1_Template, 6, 2, "div", 27);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Conditional_2_Template, 2, 0, "span", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275domProperty("value", ctx_r0.superuserSearchText());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.superuserDropdownOpen() && ctx_r0.positionsLoaded() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.positionsLoaded() && !ctx_r0.appStatus.offlineMode() ? 2 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, SecurityComponent_Conditional_16_Conditional_9_Conditional_1_Template, 1, 0, "input", 23)(2, SecurityComponent_Conditional_16_Conditional_9_Conditional_2_Template, 3, 3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.appStatus.offlineMode() ? 1 : 2);
  }
}
function SecurityComponent_Conditional_16_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r7.label);
  }
}
function SecurityComponent_Conditional_16_For_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 33);
    \u0275\u0275text(1, "S");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_16_For_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 19)(1, "input", 35);
    \u0275\u0275domListener("change", function SecurityComponent_Conditional_16_For_28_For_5_Template_input_change_1_listener($event) {
      const tab_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const position_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTabAccess(position_r11, tab_r10.key, $event));
    });
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const position_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("checked", ctx_r0.isPositionInTab(position_r11, tab_r10.key))("disabled", ctx_r0.isSuperuserPosition(position_r11));
  }
}
function SecurityComponent_Conditional_16_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SecurityComponent_Conditional_16_For_28_Conditional_3_Template, 2, 0, "span", 33);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(4, SecurityComponent_Conditional_16_For_28_For_5_Template, 2, 2, "td", 19, _forTrack0);
    \u0275\u0275domElementStart(6, "td", 20)(7, "button", 34);
    \u0275\u0275domListener("click", function SecurityComponent_Conditional_16_For_28_Template_button_click_7_listener() {
      const position_r11 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removePosition(position_r11));
    });
    \u0275\u0275text(8, " Remove ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const position_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("superuser-row", ctx_r0.isSuperuserPosition(position_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", position_r11, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSuperuserPosition(position_r11) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.allTabs);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r0.isSuperuserPosition(position_r11))("title", ctx_r0.isSuperuserPosition(position_r11) ? "Remove from superusers first" : "Remove position");
  }
}
function SecurityComponent_Conditional_16_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, " No positions configured. Add a position below. ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.allTabs.length + 2);
  }
}
function SecurityComponent_Conditional_16_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "input", 23);
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.filteredMatrixCount(), " of ", ctx_r0.totalPositionCount(), " positions ");
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" Type to search ", ctx_r0.totalPositionCount(), " positions ");
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 32);
    \u0275\u0275domListener("mousedown", function SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_4_For_1_Template_div_mousedown_0_listener() {
      const pos_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.selectPosition(pos_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const pos_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pos_r14);
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_4_For_1_Template, 2, 1, "div", 31, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r0.filteredMatrixPositions());
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30);
    \u0275\u0275text(1, "No matching positions");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 27)(1, "div", 29);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_2_Template, 1, 2)(3, SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_3_Template, 1, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_4_Template, 2, 0)(5, SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Conditional_5_Template, 2, 0, "div", 30);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.positionSearchText() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filteredMatrixPositions().length > 0 ? 4 : ctx_r0.positionSearchText() ? 5 : -1);
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 28);
    \u0275\u0275text(1, "Loading positions...");
    \u0275\u0275domElementEnd();
  }
}
function SecurityComponent_Conditional_16_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 37);
    \u0275\u0275domListener("input", function SecurityComponent_Conditional_16_Conditional_32_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.positionSearchText.set($event.target.value);
      return \u0275\u0275resetView(ctx_r0.positionDropdownOpen.set(true));
    })("focus", function SecurityComponent_Conditional_16_Conditional_32_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.positionDropdownOpen.set(true));
    })("blur", function SecurityComponent_Conditional_16_Conditional_32_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closePositionDropdown());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(1, SecurityComponent_Conditional_16_Conditional_32_Conditional_1_Template, 6, 2, "div", 27);
    \u0275\u0275conditionalCreate(2, SecurityComponent_Conditional_16_Conditional_32_Conditional_2_Template, 2, 0, "span", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("value", ctx_r0.positionSearchText());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.positionDropdownOpen() && ctx_r0.positionsLoaded() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.positionsLoaded() && !ctx_r0.appStatus.offlineMode() ? 2 : -1);
  }
}
function SecurityComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3, "Superuser Positions");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 12);
    \u0275\u0275text(5, "Superusers always have access to all tabs. Only superusers can modify this list.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 13);
    \u0275\u0275repeaterCreate(7, SecurityComponent_Conditional_16_For_8_Template, 3, 2, "span", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, SecurityComponent_Conditional_16_Conditional_9_Template, 3, 1, "div", 15);
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
    \u0275\u0275domElementStart(30, "div", 22);
    \u0275\u0275conditionalCreate(31, SecurityComponent_Conditional_16_Conditional_31_Template, 1, 0, "input", 23)(32, SecurityComponent_Conditional_16_Conditional_32_Template, 3, 3);
    \u0275\u0275domElementEnd()();
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
    \u0275\u0275conditional(ctx_r0.appStatus.offlineMode() ? 31 : 32);
  }
}
function SecurityComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "p", 36);
    \u0275\u0275text(2, "Loading configuration...");
    \u0275\u0275domElementEnd()();
  }
}
var SecurityComponent = class _SecurityComponent {
  accessControl = inject(AccessControlService);
  configService = inject(MhaPdsConfigurationService);
  codeValueService = inject(CodeValueService);
  appStatus = inject(AppStatusService);
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
  /** Position picker state */
  positionsLoaded = signal(false, ...ngDevMode ? [{ debugName: "positionsLoaded" }] : []);
  positionSearchText = signal("", ...ngDevMode ? [{ debugName: "positionSearchText" }] : []);
  superuserSearchText = signal("", ...ngDevMode ? [{ debugName: "superuserSearchText" }] : []);
  positionDropdownOpen = signal(false, ...ngDevMode ? [{ debugName: "positionDropdownOpen" }] : []);
  superuserDropdownOpen = signal(false, ...ngDevMode ? [{ debugName: "superuserDropdownOpen" }] : []);
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
      this.codeValueService.load(88, 0, "", "", "", false, () => {
        this.positionsLoaded.set(true);
      });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityComponent, selectors: [["app-security"]], decls: 18, vars: 7, consts: [[1, "security-header"], [1, "header-left"], [1, "user-info"], [1, "user-position"], [1, "superuser-badge"], [1, "header-actions"], [1, "status-message", 3, "status-success", "status-error"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "section-card"], [1, "status-message"], [1, "section-header"], [1, "section-description"], [1, "superuser-list"], [1, "chip"], [1, "picker-container"], [1, "matrix-wrapper"], [1, "matrix-table"], [1, "position-col"], [1, "tab-col"], [1, "action-col"], [3, "superuser-row"], [1, "picker-container", 2, "margin-top", "12px"], ["type", "text", "disabled", "", "placeholder", "Position list unavailable in offline mode", 1, "form-input"], [1, "chip-remove", 3, "disabled", "title"], [1, "chip-remove", 3, "click", "disabled", "title"], ["type", "text", "placeholder", "Search positions...", 1, "form-input", 3, "input", "focus", "blur", "value"], [1, "picker-dropdown"], [1, "picker-loading"], [1, "picker-count"], [1, "picker-empty"], [1, "picker-item"], [1, "picker-item", 3, "mousedown"], ["title", "Superuser - always has full access", 1, "superuser-indicator"], [1, "btn", "btn-small", "btn-danger", 3, "click", "disabled", "title"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "empty-message"], ["type", "text", "placeholder", "Search positions to add...", 1, "form-input", 3, "input", "focus", "blur", "value"]], template: function SecurityComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(16, SecurityComponent_Conditional_16_Template, 33, 3)(17, SecurityComponent_Conditional_17_Template, 3, 0, "div", 9);
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
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 20px;\n  max-width: 1200px;\n}\n.security-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  color: #1a365d;\n  font-size: 1.4rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9rem;\n  color: #555;\n}\n.user-position[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a365d;\n}\n.superuser-badge[_ngcontent-%COMP%] {\n  background: #2b6cb0;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-message[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.status-success[_ngcontent-%COMP%] {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.status-error[_ngcontent-%COMP%] {\n  background: #fed7d7;\n  color: #9b2c2c;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  color: #1a365d;\n  font-size: 1.1rem;\n}\n.section-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.85rem;\n}\n.superuser-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ebf4ff;\n  color: #2b6cb0;\n  border: 1px solid #bee3f8;\n  border-radius: 16px;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.chip-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #2b6cb0;\n  cursor: pointer;\n  font-size: 1.1rem;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chip-remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2b6cb0;\n  color: #fff;\n}\n.chip-remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  width: 220px;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2b6cb0;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a365d;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e0;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  font-size: 0.8rem;\n  background: #edf2f7;\n  color: #4a5568;\n  border: 1px solid #cbd5e0;\n}\n.btn-small[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e2e8f0;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  color: #c53030;\n  border-color: #feb2b2;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fed7d7;\n}\n.matrix-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.matrix-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #1a365d;\n  color: #fff;\n  padding: 8px 10px;\n  text-align: center;\n  font-weight: 600;\n  white-space: nowrap;\n  border: 1px solid #2d4a7a;\n}\n.matrix-table[_ngcontent-%COMP%]   th.position-col[_ngcontent-%COMP%], \n.matrix-table[_ngcontent-%COMP%]   td.position-col[_ngcontent-%COMP%] {\n  text-align: left;\n  min-width: 180px;\n}\n.matrix-table[_ngcontent-%COMP%]   th.action-col[_ngcontent-%COMP%], \n.matrix-table[_ngcontent-%COMP%]   td.action-col[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80px;\n}\n.matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f7fafc;\n}\n.matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #edf2f7;\n}\n.superuser-row[_ngcontent-%COMP%] {\n  background: #ebf8ff !important;\n}\n.superuser-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #2b6cb0;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.matrix-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #2b6cb0;\n}\n.matrix-table[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.6;\n}\n.empty-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #a0aec0;\n  padding: 20px;\n  font-style: italic;\n}\n.picker-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.picker-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 280px;\n  max-height: 320px;\n  overflow-y: auto;\n  background: #fff;\n  border: 1px solid #cbd5e0;\n  border-top: none;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 50;\n}\n.picker-count[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  color: #718096;\n  background: #f7fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.picker-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  color: #2d3748;\n  border-bottom: 1px solid #f0f0f0;\n}\n.picker-item[_ngcontent-%COMP%]:hover {\n  background: #ebf4ff;\n  color: #2b6cb0;\n}\n.picker-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.picker-empty[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n  color: #a0aec0;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.picker-loading[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 0.8rem;\n  color: #718096;\n  font-style: italic;\n}"], changeDetection: 0 });
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
      </div>
    } @else {
      <div class="section-card">
        <p class="empty-message">Loading configuration...</p>
      </div>
    }
  `, styles: ["/* angular:styles/component:scss;c469b8901904dc1fdf5ef27ad4af70c9a829082fa45f053f3a97847fa0982515;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/security/security.ts */\n:host {\n  display: block;\n  padding: 20px;\n  max-width: 1200px;\n}\n.security-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left h2 {\n  margin: 0 0 6px 0;\n  color: #1a365d;\n  font-size: 1.4rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9rem;\n  color: #555;\n}\n.user-position strong {\n  color: #1a365d;\n}\n.superuser-badge {\n  background: #2b6cb0;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.status-message {\n  font-size: 0.85rem;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.status-success {\n  background: #c6f6d5;\n  color: #22543d;\n}\n.status-error {\n  background: #fed7d7;\n  color: #9b2c2c;\n}\n.section-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.section-header h3 {\n  margin: 0 0 4px 0;\n  color: #1a365d;\n  font-size: 1.1rem;\n}\n.section-description {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.85rem;\n}\n.superuser-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #ebf4ff;\n  color: #2b6cb0;\n  border: 1px solid #bee3f8;\n  border-radius: 16px;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.chip-remove {\n  background: none;\n  border: none;\n  color: #2b6cb0;\n  cursor: pointer;\n  font-size: 1.1rem;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chip-remove:hover:not(:disabled) {\n  background: #2b6cb0;\n  color: #fff;\n}\n.chip-remove:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.add-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form-input {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e0;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  width: 220px;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #2b6cb0;\n  box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.15);\n}\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2b6cb0;\n  color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a365d;\n}\n.btn-secondary {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #cbd5e0;\n}\n.btn-small {\n  padding: 4px 12px;\n  font-size: 0.8rem;\n  background: #edf2f7;\n  color: #4a5568;\n  border: 1px solid #cbd5e0;\n}\n.btn-small:hover:not(:disabled) {\n  background: #e2e8f0;\n}\n.btn-danger {\n  background: #fff5f5;\n  color: #c53030;\n  border-color: #feb2b2;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #fed7d7;\n}\n.matrix-wrapper {\n  overflow-x: auto;\n}\n.matrix-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.matrix-table th {\n  background: #1a365d;\n  color: #fff;\n  padding: 8px 10px;\n  text-align: center;\n  font-weight: 600;\n  white-space: nowrap;\n  border: 1px solid #2d4a7a;\n}\n.matrix-table th.position-col,\n.matrix-table td.position-col {\n  text-align: left;\n  min-width: 180px;\n}\n.matrix-table th.action-col,\n.matrix-table td.action-col {\n  text-align: center;\n  width: 80px;\n}\n.matrix-table td {\n  padding: 6px 10px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.matrix-table tbody tr:nth-child(even) {\n  background: #f7fafc;\n}\n.matrix-table tbody tr:hover {\n  background: #edf2f7;\n}\n.superuser-row {\n  background: #ebf8ff !important;\n}\n.superuser-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #2b6cb0;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n.matrix-table input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #2b6cb0;\n}\n.matrix-table input[type=checkbox]:disabled {\n  cursor: default;\n  opacity: 0.6;\n}\n.empty-message {\n  text-align: center;\n  color: #a0aec0;\n  padding: 20px;\n  font-style: italic;\n}\n.picker-container {\n  position: relative;\n}\n.picker-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 280px;\n  max-height: 320px;\n  overflow-y: auto;\n  background: #fff;\n  border: 1px solid #cbd5e0;\n  border-top: none;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 50;\n}\n.picker-count {\n  padding: 6px 10px;\n  font-size: 0.75rem;\n  color: #718096;\n  background: #f7fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.picker-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  color: #2d3748;\n  border-bottom: 1px solid #f0f0f0;\n}\n.picker-item:hover {\n  background: #ebf4ff;\n  color: #2b6cb0;\n}\n.picker-item:last-child {\n  border-bottom: none;\n}\n.picker-empty {\n  padding: 12px;\n  text-align: center;\n  color: #a0aec0;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.picker-loading {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 0.8rem;\n  color: #718096;\n  font-style: italic;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityComponent, { className: "SecurityComponent", filePath: "src/app/security/security.ts", lineNumber: 575 });
})();
export {
  SecurityComponent
};
