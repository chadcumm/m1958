import {
  AccessControlService
} from "./chunk-IJ6JXY3G.js";
import "./chunk-V4GVBYQT.js";
import "./chunk-57JVA67P.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OFQI67IQ.js";
import "./chunk-I7D2VZMI.js";

// src/app/no-access/no-access.ts
function NoAccessComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275text(1, "Your current position: ");
    \u0275\u0275domElementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.position());
  }
}
function NoAccessComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275text(1, "Username: ");
    \u0275\u0275domElementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.username());
  }
}
function NoAccessComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, NoAccessComponent_Conditional_10_Conditional_1_Template, 4, 1, "div");
    \u0275\u0275conditionalCreate(2, NoAccessComponent_Conditional_10_Conditional_2_Template, 4, 1, "div");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.position() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.username() ? 2 : -1);
  }
}
var NoAccessComponent = class _NoAccessComponent {
  accessControl = inject(AccessControlService);
  position = this.accessControl.userPosition;
  username = this.accessControl.userUsername;
  static \u0275fac = function NoAccessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoAccessComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoAccessComponent, selectors: [["app-no-access"]], decls: 11, vars: 1, consts: [[1, "no-access-container"], [1, "no-access-card"], [1, "no-access-icon"], [1, "position-info"]], template: function NoAccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\uF512");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2");
      \u0275\u0275text(5, "Access Restricted");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7, "You do not have access to this application.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "p");
      \u0275\u0275text(9, "Contact your administrator to request access.");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(10, NoAccessComponent_Conditional_10_Template, 3, 2, "div", 3);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.position() || ctx.username() ? 10 : -1);
    }
  }, styles: ["\n\n.no-access-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 60px);\n  padding: 20px;\n}\n.no-access-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  max-width: 400px;\n}\n.no-access-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #1a365d;\n}\np[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #555;\n}\n.position-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 12px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #666;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoAccessComponent, [{
    type: Component,
    args: [{ selector: "app-no-access", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="no-access-container">
      <div class="no-access-card">
        <div class="no-access-icon">&#128274;</div>
        <h2>Access Restricted</h2>
        <p>You do not have access to this application.</p>
        <p>Contact your administrator to request access.</p>
        @if (position() || username()) {
          <div class="position-info">
            @if (position()) {
              <div>Your current position: <strong>{{ position() }}</strong></div>
            }
            @if (username()) {
              <div>Username: <strong>{{ username() }}</strong></div>
            }
          </div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;b72618148cae2152971df41c41b3325c99c6b4057791e74965f8ed784201c56c;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/no-access/no-access.ts */\n.no-access-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 60px);\n  padding: 20px;\n}\n.no-access-card {\n  text-align: center;\n  padding: 40px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  max-width: 400px;\n}\n.no-access-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\nh2 {\n  margin: 0 0 12px;\n  color: #1a365d;\n}\np {\n  margin: 0 0 8px;\n  color: #555;\n}\n.position-info {\n  margin-top: 20px;\n  padding: 12px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #666;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoAccessComponent, { className: "NoAccessComponent", filePath: "src/app/no-access/no-access.ts", lineNumber: 66 });
})();
export {
  NoAccessComponent
};
