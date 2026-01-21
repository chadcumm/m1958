import {
  CclServiceWrapperService
} from "./chunk-BKSRX7TA.js";
import {
  Injectable,
  Observable,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-PLBSHY54.js";

// src/app/models/mha-pds-configuration.model.ts
function isMhaPdsConfiguration(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const config = value;
  const hasValidMhaLocations = config.MHA_LOCATIONS_CNT === void 0 || typeof config.MHA_LOCATIONS_CNT === "number" && Array.isArray(config.MHA_LOCATIONS);
  return typeof config.UPDT_DT_TM === "string" && typeof config.MIRTH_CONNECT === "object" && typeof config.SUBMISSION === "object" && typeof config.PROCESSING === "object" && typeof config.CODE_TABLES_CNT === "number" && Array.isArray(config.CODE_TABLES) && typeof config.CODE_TABLE_MAPPING_CNT === "number" && Array.isArray(config.CODE_TABLE_MAPPINGS) && typeof config.MAPPING_CNT === "number" && Array.isArray(config.MAPPINGS) && typeof config.SUBMIT_FIELDS_CNT === "number" && Array.isArray(config.SUBMIT_FIELDS) && typeof config.FHIR_RESOURCE_CODES_CNT === "number" && Array.isArray(config.FHIR_RESOURCE_CODES) && hasValidMhaLocations;
}
function groupSubmitFieldsByDataElement(config) {
  const groups = /* @__PURE__ */ new Map();
  config.SUBMIT_FIELDS.forEach((field) => {
    if (field.FIELD_CODE) {
      const match = field.FIELD_CODE.match(/^(DE\d+)/);
      if (match) {
        const deGroup = match[1];
        if (!groups.has(deGroup)) {
          groups.set(deGroup, []);
        }
        groups.get(deGroup).push(field);
      }
    }
  });
  return groups;
}
var MHA_PDS_DATA_ELEMENTS = {
  DE01: "Client Information",
  DE02: "Client Identifiers",
  DE03: "Client Address",
  DE04: "Client Demographics",
  DE05: "Referral Information",
  DE06: "Episode of Care",
  DE07: "Health Service Provider Organization",
  DE08: "Health Service Provider Site",
  DE09: "Health Program",
  DE10: "Health Service Event"
};

// src/app/services/mha-pds-configuration.service.ts
var MhaPdsConfigurationService = class _MhaPdsConfigurationService {
  cclWrapper = inject(CclServiceWrapperService);
  // Cached configuration using signals for reactive state
  configCache = signal(null, ...ngDevMode ? [{ debugName: "configCache" }] : []);
  // Loading state
  loadingState = signal({
    loading: false,
    loaded: false,
    error: null,
    lastUpdated: null
  }, ...ngDevMode ? [{ debugName: "loadingState" }] : []);
  /**
   * Read-only computed signal for configuration
   */
  configuration = computed(() => this.configCache(), ...ngDevMode ? [{ debugName: "configuration" }] : []);
  /**
   * Read-only computed signal for loading state
   */
  state = computed(() => this.loadingState(), ...ngDevMode ? [{ debugName: "state" }] : []);
  /**
   * Check if configuration is currently cached
   */
  isCached = computed(() => this.configCache() !== null, ...ngDevMode ? [{ debugName: "isCached" }] : []);
  /**
   * Check if currently loading
   */
  isLoading = computed(() => this.loadingState().loading, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  /**
   * Load configuration from CCL backend
   *
   * Always fetches fresh configuration from the backend, bypassing cache.
   * Updates the cache with the result.
   *
   * @returns Observable<MhaPdsConfiguration> - The loaded configuration
   */
  getConfiguration() {
    return new Observable((subscriber) => {
      this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
        loading: true,
        error: null
      }));
      const requestId = `getMHAPDSConfiguration-${Date.now()}`;
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
                  requestType: "getMHAPDSConfiguration",
                  requestId: Date.now(),
                  requestData: ""
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
            } else if (isMhaPdsConfiguration(response)) {
              this.configCache.set(response);
              this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
                loading: false,
                loaded: true,
                error: null,
                lastUpdated: /* @__PURE__ */ new Date()
              }));
              subscriber.next(response);
              subscriber.complete();
            } else {
              const error = "Invalid configuration structure received from CCL";
              console.error("[MhaPdsConfigurationService] Invalid response structure:", response);
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
        const error = err instanceof Error ? err.message : "Unknown error loading configuration";
        this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
          loading: false,
          error
        }));
        subscriber.error(new Error(error));
      }
    });
  }
  /**
   * Get configuration from cache if available, otherwise load from backend
   *
   * Uses cached configuration if available, otherwise fetches from CCL.
   * This is the preferred method for most use cases.
   *
   * @returns Observable<MhaPdsConfiguration> - The configuration (cached or fresh)
   */
  getConfigurationCached() {
    const cached = this.configCache();
    if (cached) {
      return of(cached);
    }
    return this.getConfiguration();
  }
  /**
   * Save configuration to CCL backend
   *
   * Sends the updated configuration to the backend for persistence.
   * On success, updates the local cache with the saved configuration.
   *
   * @param config - The configuration to save
   * @returns Observable<SaveResult> - The result of the save operation
   */
  saveConfiguration(config) {
    return new Observable((subscriber) => {
      const requestId = `saveMHAPDSConfiguration-${Date.now()}`;
      let configJson;
      try {
        configJson = JSON.stringify(config);
      } catch (err) {
        const error = {
          saved: false,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          status: "F",
          errors: ["Failed to serialize configuration to JSON"]
        };
        subscriber.next(error);
        subscriber.complete();
        return;
      }
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
                  requestType: "saveMHAPDSConfiguration",
                  requestId: Date.now(),
                  requestData: configJson
                }
              }
            ],
            clearPatientSource: true
          }
        }, [{ personId: 0, encntrId: 0 }], () => {
          const response = this.cclWrapper.get(requestId);
          if (response) {
            if (response.error) {
              const result = {
                saved: false,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                status: "F",
                errors: [response.error]
              };
              subscriber.next(result);
              subscriber.complete();
            } else if (response.saved !== void 0) {
              const result = {
                saved: response.saved === true,
                timestamp: response.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
                status: response.saved ? "S" : "F",
                errors: response.errors || []
              };
              if (result.saved) {
                this.configCache.set(config);
                this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
                  lastUpdated: /* @__PURE__ */ new Date()
                }));
              }
              subscriber.next(result);
              subscriber.complete();
            } else if (response.status_data?.status === "S") {
              const result = {
                saved: true,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                status: "S"
              };
              this.configCache.set(config);
              this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
                lastUpdated: /* @__PURE__ */ new Date()
              }));
              subscriber.next(result);
              subscriber.complete();
            } else {
              const result = {
                saved: false,
                timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                status: "F",
                errors: ["Unexpected response format from CCL"]
              };
              subscriber.next(result);
              subscriber.complete();
            }
          } else {
            const result = {
              saved: false,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              status: "F",
              errors: ["No response from CCL script"]
            };
            subscriber.next(result);
            subscriber.complete();
          }
        });
      } catch (err) {
        const result = {
          saved: false,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          status: "F",
          errors: [err instanceof Error ? err.message : "Unknown error saving configuration"]
        };
        subscriber.next(result);
        subscriber.complete();
      }
    });
  }
  /**
   * Clear the cached configuration
   *
   * Forces the next getConfigurationCached() call to fetch fresh data.
   */
  clearCache() {
    this.configCache.set(null);
    this.loadingState.update((state) => __spreadProps(__spreadValues({}, state), {
      loaded: false,
      lastUpdated: null
    }));
  }
  /**
   * Refresh configuration from backend
   *
   * Convenience method that clears cache and loads fresh configuration.
   *
   * @returns Observable<MhaPdsConfiguration> - The refreshed configuration
   */
  refreshConfiguration() {
    this.clearCache();
    return this.getConfiguration();
  }
  static \u0275fac = function MhaPdsConfigurationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MhaPdsConfigurationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MhaPdsConfigurationService, factory: _MhaPdsConfigurationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MhaPdsConfigurationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  groupSubmitFieldsByDataElement,
  MHA_PDS_DATA_ELEMENTS,
  MhaPdsConfigurationService
};
