import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter,
  withHashLocation
} from "./chunk-FSK4RQW2.js";
import {
  AppStatusService,
  ConfigService,
  ErrorHandlerService,
  MPageService,
  MpageLogComponent,
  bootstrapApplication,
  provideHttpClient,
  withFetch
} from "./chunk-QDEHJEDS.js";
import {
  ChangeDetectionStrategy,
  Component,
  ErrorHandler,
  computed,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UUZPJP4Q.js";
import "./chunk-I7D2VZMI.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-INIWCCYL.js").then((m) => m.CclTest),
    title: "MHA PDS - CCL Test"
  },
  {
    path: "config",
    loadComponent: () => import("./chunk-OKHXXQJ4.js").then((m) => m.ConfigEditorComponent),
    title: "MHA PDS Configuration"
  },
  {
    path: "logs",
    loadComponent: () => import("./chunk-HMFWFMHE.js").then((m) => m.LogsComponent),
    title: "MHA PDS Logs"
  },
  {
    path: "patients",
    loadComponent: () => import("./chunk-PFYDFQGT.js").then((m) => m.PatientsComponent),
    title: "MHA PDS Patients"
  },
  {
    path: "operations",
    loadComponent: () => import("./chunk-ANW6LCW3.js").then((m) => m.OperationsComponent),
    title: "MHA PDS Operations"
  },
  {
    path: "reference",
    loadComponent: () => import("./chunk-SPEMHKKA.js").then((m) => m.ReferenceComponent),
    title: "MHA PDS Reference"
  }
];

// src/app/app.config.ts
var CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: ["dd-MMM-yyyy"]
  },
  display: {
    dateInput: "dd-MMM-yyyy",
    dateLabel: "dd-MMM-yyyy",
    dateTimeLabel: "dd-MMM-yyyy HH:mm",
    locale: "en-US",
    monthYearLabel: "MMM yyyy",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM yyyy"
  }
};
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withFetch()),
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig();
    }),
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ]
};

// src/app/version.ts
var buildVersion = "v0.0.92-develop";
var packageVersion = "0.0.92";
var gitBranch = "develop";

// src/app/app-version/app-version.ts
function AppVersion_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1, " [OFFLINE] ");
    \u0275\u0275domElementEnd();
  }
}
function AppVersion_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1, " [ONLINE] ");
    \u0275\u0275domElementEnd();
  }
}
var AppVersion = class _AppVersion {
  appStatus = inject(AppStatusService);
  /**
   * The current application version string, including branch (e.g., v1.0.0-master)
   * This is generated at build time by scripts/build-version.js
   */
  buildVersion = buildVersion;
  /**
   * The package version from package.json (e.g., 1.0.0)
   */
  packageVersion = packageVersion;
  /**
   * The current git branch (e.g., master, develop)
   */
  gitBranch = gitBranch;
  /**
   * Read-only signal for offline mode status
   */
  isOfflineMode = computed(() => this.appStatus.offlineMode(), ...ngDevMode ? [{ debugName: "isOfflineMode" }] : []);
  static \u0275fac = function AppVersion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppVersion)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppVersion, selectors: [["app-app-version"]], decls: 6, vars: 2, consts: [[1, "app-version"], [1, "version-info"], [1, "version-text"], ["title", "Application is running in offline mode using mock data", 1, "mode-badge", "offline"], ["title", "Application is connected to live CCL services", 1, "mode-badge", "online"]], template: function AppVersion_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, AppVersion_Conditional_4_Template, 2, 0, "span", 3)(5, AppVersion_Conditional_5_Template, 2, 0, "span", 4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.buildVersion);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOfflineMode() ? 4 : 5);
    }
  }, styles: ['\n\n.app-version[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  font-size: 0.75rem;\n  color: #666;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.app-version[_ngcontent-%COMP%]   .version-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.app-version[_ngcontent-%COMP%]   .version-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.app-version[_ngcontent-%COMP%]   .mode-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.7rem;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: help;\n}\n.app-version[_ngcontent-%COMP%]   .mode-badge.online[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.app-version[_ngcontent-%COMP%]   .mode-badge.offline[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #e65100;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppVersion, [{
    type: Component,
    args: [{ selector: "app-app-version", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="app-version">\n  <div class="version-info">\n    <span class="version-text">{{ buildVersion }}</span>\n    @if (isOfflineMode()) {\n      <span class="mode-badge offline" title="Application is running in offline mode using mock data">\n        [OFFLINE]\n      </span>\n    } @else {\n      <span class="mode-badge online" title="Application is connected to live CCL services">\n        [ONLINE]\n      </span>\n    }\n  </div>\n</div>\n', styles: ['/* src/app/app-version/app-version.scss */\n.app-version {\n  display: inline-block;\n  padding: 4px 8px;\n  font-size: 0.75rem;\n  color: #666;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.app-version .version-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.app-version .version-text {\n  font-weight: 500;\n}\n.app-version .mode-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.7rem;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  cursor: help;\n}\n.app-version .mode-badge.online {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.app-version .mode-badge.offline {\n  background-color: #fff3e0;\n  color: #e65100;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppVersion, { className: "AppVersion", filePath: "src/app/app-version/app-version.ts", lineNumber: 16 });
})();

// src/app/app.ts
var _c0 = () => ({ exact: true });
var App = class _App {
  MPage = inject(MPageService);
  appStatus = inject(AppStatusService);
  ngOnInit() {
    console.log("[App] ngOnInit - Starting application initialization");
    setTimeout(() => {
      console.log("[App] Initializing MPage service...");
      try {
        this.MPage.setMaxInstances(2, true, "ORGANIZER", true);
        console.log("[App] SUCCESS: setMaxInstances called (will ping CCL internally)");
      } catch (error) {
        console.error("[App] ERROR: setMaxInstances failed:", error);
      }
      this.MPage.defaultDateFormats = CUSTOM_DATE_FORMATS;
      console.log("[App] SUCCESS: Date formats set");
      this.detectNetworkAndInitialize();
    }, 0);
  }
  /**
   * Detect network availability by waiting for serviceReady with 3-second timeout
   * setMaxInstances() internally calls ping(), so serviceReady becoming true means we're online
   */
  async detectNetworkAndInitialize() {
    console.log("[App] Starting network detection (waiting for serviceReady)...");
    console.log("[App] Initial MPage.serviceReady =", this.MPage.serviceReady);
    const startTime = Date.now();
    const TIMEOUT_MS = 3e3;
    let attempts = 0;
    while (!this.MPage.serviceReady) {
      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 100));
      const elapsed2 = Date.now() - startTime;
      console.log(`[App] Waiting for serviceReady... attempt ${attempts} (${elapsed2}ms elapsed)`);
      if (elapsed2 >= TIMEOUT_MS) {
        console.warn(`[App] WARNING: Timeout reached (${TIMEOUT_MS}ms) - serviceReady did not become true`);
        break;
      }
    }
    const elapsed = Date.now() - startTime;
    const isOnline = this.MPage.serviceReady;
    if (isOnline) {
      console.log(`[App] SUCCESS: serviceReady became true after ${elapsed}ms - CCL ping succeeded`);
    } else {
      console.log(`[App] ERROR: serviceReady still false after ${elapsed}ms - CCL ping failed/timeout`);
    }
    this.appStatus.setOfflineMode(!isOnline);
    const finalStatus = this.appStatus.offlineMode() ? "OFFLINE" : "ONLINE";
    console.log(`[App] Final app status: ${finalStatus} MODE`);
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 22, vars: 2, consts: [[1, "app-container"], [1, "app-nav"], [1, "nav-brand"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/config", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/logs", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/patients", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/operations", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/reference", "routerLinkActive", "active", 1, "nav-link"], [1, "app-main"], [2, "position", "fixed", "bottom", "10px", "right", "10px"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2);
      \u0275\u0275text(3, "MHA PDS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "a", 4);
      \u0275\u0275text(6, "CCL Test");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275text(8, "Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "Logs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, "Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, "Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "Reference");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "main", 10);
      \u0275\u0275element(18, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "mpage-log-component");
      \u0275\u0275elementStart(20, "footer", 11);
      \u0275\u0275element(21, "app-app-version");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [MpageLogComponent, AppVersion, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.app-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 12px 20px;\n  background-color: #1a365d;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.nav-brand[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  padding-right: 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  color: rgba(255, 255, 255, 0.85);\n  text-decoration: none;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #f5f5f5;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [MpageLogComponent, AppVersion, RouterOutlet, RouterLink, RouterLinkActive], standalone: true, template: '<div class="app-container">\n  <!-- Navigation -->\n  <nav class="app-nav">\n    <div class="nav-brand">MHA PDS</div>\n    <div class="nav-links">\n      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">CCL Test</a>\n      <a routerLink="/config" routerLinkActive="active" class="nav-link">Configuration</a>\n      <a routerLink="/logs" routerLinkActive="active" class="nav-link">Logs</a>\n      <a routerLink="/patients" routerLinkActive="active" class="nav-link">Patients</a>\n      <a routerLink="/operations" routerLinkActive="active" class="nav-link">Operations</a>\n      <a routerLink="/reference" routerLinkActive="active" class="nav-link">Reference</a>\n    </div>\n  </nav>\n\n  <!-- Main Content -->\n  <main class="app-main">\n    <router-outlet />\n  </main>\n\n  <mpage-log-component />\n\n  <footer style="position: fixed; bottom: 10px; right: 10px;">\n    <app-app-version />\n  </footer>\n</div>\n\n<style>\n  .app-container {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .app-nav {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 12px 20px;\n    background-color: #1a365d;\n    color: white;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    position: sticky;\n    top: 0;\n    z-index: 100;\n  }\n\n  .nav-brand {\n    font-size: 18px;\n    font-weight: 600;\n    padding-right: 20px;\n    border-right: 1px solid rgba(255, 255, 255, 0.2);\n  }\n\n  .nav-links {\n    display: flex;\n    gap: 8px;\n  }\n\n  .nav-link {\n    padding: 8px 16px;\n    color: rgba(255, 255, 255, 0.85);\n    text-decoration: none;\n    border-radius: 4px;\n    font-size: 14px;\n    transition: all 0.2s;\n  }\n\n  .nav-link:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    color: white;\n  }\n\n  .nav-link.active {\n    background-color: rgba(255, 255, 255, 0.15);\n    color: white;\n  }\n\n  .app-main {\n    flex: 1;\n    background-color: #f5f5f5;\n  }\n</style>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 17 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
