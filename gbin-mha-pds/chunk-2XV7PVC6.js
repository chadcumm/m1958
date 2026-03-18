import {
  MhaPdsConfigurationService
} from "./chunk-NACOCQOL.js";
import {
  AppStatusService,
  MPageService
} from "./chunk-ZFBVEYKZ.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-OFQI67IQ.js";

// src/app/services/access-control.service.ts
var ALL_TABS = [
  { key: "ccl-test", label: "CCL Test" },
  { key: "config", label: "Configuration" },
  { key: "logs", label: "Logs" },
  { key: "patients", label: "Patients" },
  { key: "audit", label: "Audit" },
  { key: "operations", label: "Operations" },
  { key: "reference", label: "Reference" },
  { key: "security", label: "Security" }
];
var AccessControlService = class _AccessControlService {
  mPage = inject(MPageService);
  configService = inject(MhaPdsConfigurationService);
  appStatus = inject(AppStatusService);
  /**
   * Reactive trigger for when MPageService.position becomes available.
   * MPageService.position is a plain property (not a signal), so we need
   * this bridge to make computed signals re-evaluate when position is set.
   * Call resolvePosition() from App after serviceReady is confirmed.
   */
  _positionReady = signal(false, ...ngDevMode ? [{ debugName: "_positionReady" }] : []);
  /**
   * Current user's position display name from Cerner.
   * Empty string if not yet loaded or unavailable.
   */
  userPosition = computed(() => {
    this._positionReady();
    return this.mPage.position ?? "";
  }, ...ngDevMode ? [{ debugName: "userPosition" }] : []);
  /**
   * Signal that the user's position is now available from MPageService.
   * Must be called after MPageService.serviceReady is true.
   */
  resolvePosition() {
    this._positionReady.set(true);
  }
  /**
   * Whether the current user is a superuser.
   * Superusers see all tabs and can manage the superuser list.
   * Offline mode grants superuser access for local development.
   */
  isSuperuser = computed(() => {
    if (this.appStatus.offlineMode())
      return true;
    const accessControl = this.getAccessControl();
    if (!accessControl)
      return this.isConfigLoaded();
    return accessControl.superusers.includes(this.userPosition());
  }, ...ngDevMode ? [{ debugName: "isSuperuser" }] : []);
  /**
   * Tabs the current user is allowed to see, in display order.
   * Superusers see all tabs. Other users see only explicitly granted tabs.
   * Returns empty array if config not loaded yet (unless offline).
   */
  allowedTabs = computed(() => {
    if (this.appStatus.offlineMode())
      return ALL_TABS;
    const accessControl = this.getAccessControl();
    if (!accessControl)
      return this.isConfigLoaded() ? ALL_TABS : [];
    if (this.isSuperuser())
      return ALL_TABS;
    const position = this.userPosition();
    return ALL_TABS.filter((tab) => {
      const tabConfig = accessControl.tabs[tab.key];
      return tabConfig?.positions.includes(position) ?? false;
    });
  }, ...ngDevMode ? [{ debugName: "allowedTabs" }] : []);
  /**
   * Check if a specific tab is accessible to the current user.
   * Used by route guard.
   */
  canAccessTab(tabKey) {
    if (this.appStatus.offlineMode())
      return true;
    const accessControl = this.getAccessControl();
    if (!accessControl)
      return this.isConfigLoaded();
    if (this.isSuperuser())
      return true;
    const tabConfig = accessControl.tabs[tabKey];
    return tabConfig?.positions.includes(this.userPosition()) ?? false;
  }
  /**
   * Whether the current user can edit the superuser list.
   * Only superusers can modify the superuser list.
   */
  canEditSuperusers() {
    return this.isSuperuser();
  }
  /**
   * Whether access control config has been loaded.
   * Used to distinguish "no access" from "not loaded yet".
   */
  isConfigLoaded = computed(() => {
    return this.configService.configuration() !== null;
  }, ...ngDevMode ? [{ debugName: "isConfigLoaded" }] : []);
  /**
   * Get the ACCESS_CONTROL section from config, or null if not available.
   */
  getAccessControl() {
    return this.configService.configuration()?.ACCESS_CONTROL ?? null;
  }
  static \u0275fac = function AccessControlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessControlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccessControlService, factory: _AccessControlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessControlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ALL_TABS,
  AccessControlService
};
