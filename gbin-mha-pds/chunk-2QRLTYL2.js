import {
  AccessControlService
} from "./chunk-K4KBBNCN.js";
import "./chunk-YITHQB7Z.js";
import {
  Router
} from "./chunk-IQGZPMP7.js";
import "./chunk-JHWRIAYJ.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-OFQI67IQ.js";
import "./chunk-I7D2VZMI.js";

// src/app/default-redirect/default-redirect.ts
var DefaultRedirectComponent = class _DefaultRedirectComponent {
  accessControl = inject(AccessControlService);
  router = inject(Router);
  constructor() {
    effect(() => {
      const isLoaded = this.accessControl.isConfigLoaded();
      if (!isLoaded)
        return;
      const tabs = this.accessControl.allowedTabs();
      if (tabs.length > 0) {
        this.router.navigate(["/" + tabs[0].key]);
      } else {
        this.router.navigate(["/no-access"]);
      }
    });
  }
  static \u0275fac = function DefaultRedirectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultRedirectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DefaultRedirectComponent, selectors: [["app-default-redirect"]], decls: 3, vars: 0, consts: [[2, "display", "flex", "justify-content", "center", "align-items", "center", "min-height", "calc(100vh - 60px)"], [2, "color", "#888"]], template: function DefaultRedirectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2, "Loading...");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRedirectComponent, [{
    type: Component,
    args: [{
      selector: "app-default-redirect",
      standalone: true,
      template: `
    <div style="display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 60px);">
      <p style="color: #888;">Loading...</p>
    </div>
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DefaultRedirectComponent, { className: "DefaultRedirectComponent", filePath: "src/app/default-redirect/default-redirect.ts", lineNumber: 19 });
})();
export {
  DefaultRedirectComponent
};
