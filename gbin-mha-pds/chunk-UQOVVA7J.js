import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-RK52RHF5.js";

// src/app/patients/patients.ts
var PatientsComponent = class _PatientsComponent {
  static \u0275fac = function PatientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientsComponent, selectors: [["app-patients"]], decls: 29, vars: 0, consts: [[1, "patients-container"], [1, "patients-header"], [1, "patients-content"], [1, "coming-soon"], [1, "coming-soon-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "subtitle"]], template: function PatientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "MHA PDS Patients");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5, "Browse client data processed by the system");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 2)(7, "div", 3)(8, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(9, "svg", 5);
      \u0275\u0275domElement(10, "path", 6)(11, "circle", 7)(12, "path", 8)(13, "path", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(14, "h3");
      \u0275\u0275text(15, "Coming Soon");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "p");
      \u0275\u0275text(17, "The patient browser will be available in a future release.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p", 10);
      \u0275\u0275text(19, "This section will allow you to:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "ul")(21, "li");
      \u0275\u0275text(22, "Search and browse client records");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "li");
      \u0275\u0275text(24, "View episode and service event history");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "li");
      \u0275\u0275text(26, "Review submission status for each patient");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "li");
      \u0275\u0275text(28, "Access detailed client demographic data");
      \u0275\u0275domElementEnd()()()()();
    }
  }, styles: ["\n\n.patients-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.patients-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.patients-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.patients-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.patients-content[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 3rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.coming-soon[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.coming-soon[_ngcontent-%COMP%]   .coming-soon-icon[_ngcontent-%COMP%] {\n  color: #1a365d;\n  margin-bottom: 1.5rem;\n  opacity: 0.7;\n}\n.coming-soon[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.coming-soon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #6c757d;\n}\n.coming-soon[_ngcontent-%COMP%]   p.subtitle[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  font-weight: 500;\n  color: #495057;\n}\n.coming-soon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #495057;\n  padding-left: 1.5rem;\n  margin: 0.5rem 0 0 0;\n}\n.coming-soon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.coming-soon[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=patients.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientsComponent, [{
    type: Component,
    args: [{ selector: "app-patients", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="patients-container">\n  <div class="patients-header">\n    <h2>MHA PDS Patients</h2>\n    <p>Browse client data processed by the system</p>\n  </div>\n  <div class="patients-content">\n    <div class="coming-soon">\n      <div class="coming-soon-icon">\n        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\n          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\n          <circle cx="9" cy="7" r="4"/>\n          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>\n          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>\n        </svg>\n      </div>\n      <h3>Coming Soon</h3>\n      <p>The patient browser will be available in a future release.</p>\n      <p class="subtitle">This section will allow you to:</p>\n      <ul>\n        <li>Search and browse client records</li>\n        <li>View episode and service event history</li>\n        <li>Review submission status for each patient</li>\n        <li>Access detailed client demographic data</li>\n      </ul>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/patients/patients.scss */\n.patients-container {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.patients-header {\n  margin-bottom: 1.5rem;\n}\n.patients-header h2 {\n  margin: 0 0 0.25rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.patients-header p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.patients-content {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 3rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.coming-soon {\n  text-align: center;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.coming-soon .coming-soon-icon {\n  color: #1a365d;\n  margin-bottom: 1.5rem;\n  opacity: 0.7;\n}\n.coming-soon h3 {\n  margin: 0 0 0.5rem 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n}\n.coming-soon p {\n  margin: 0 0 0.5rem 0;\n  color: #6c757d;\n}\n.coming-soon p.subtitle {\n  margin-top: 1.5rem;\n  font-weight: 500;\n  color: #495057;\n}\n.coming-soon ul {\n  text-align: left;\n  color: #495057;\n  padding-left: 1.5rem;\n  margin: 0.5rem 0 0 0;\n}\n.coming-soon ul li {\n  margin-bottom: 0.5rem;\n}\n.coming-soon ul li:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=patients.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientsComponent, { className: "PatientsComponent", filePath: "src/app/patients/patients.ts", lineNumber: 15 });
})();
export {
  PatientsComponent
};
//# sourceMappingURL=chunk-UQOVVA7J.js.map
