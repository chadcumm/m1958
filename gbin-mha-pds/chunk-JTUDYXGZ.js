import {
  AppStatusService,
  CustomService,
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-5XJR4LEK.js";

// src/app/mocks/examples/mha-pds-configuration.mock.ts
var MHA_PDS_CONFIGURATION_MOCK = {
  configuration: {
    enabledFeatures: [
      "DE01",
      // Client information
      "DE02",
      // Client identifiers
      "DE03",
      // Client address
      "DE04",
      // Client demographics
      "DE05",
      // Referral information
      "DE06",
      // Episode of care
      "DE07",
      // Health service provider organization
      "DE08",
      // Health service provider site
      "DE09",
      // Health program enrollment
      "DE10"
      // Health service events
    ],
    mirthServerUrl: "https://mock-mirth-server.gbrh.local/api/mha-pds",
    batchSize: 100,
    functionalCentreMappings: [
      {
        code: "MHAC",
        description: "Mental Health Adult Community",
        mhaPdsCode: "1001"
      },
      {
        code: "MHIP",
        description: "Mental Health Inpatient",
        mhaPdsCode: "1002"
      },
      {
        code: "MHCR",
        description: "Mental Health Crisis Response",
        mhaPdsCode: "1003"
      },
      {
        code: "MHYC",
        description: "Mental Health Youth Community",
        mhaPdsCode: "1004"
      }
    ],
    dataElementSettings: {
      DE01: {
        required: true,
        validateFormat: true
      },
      DE06: {
        trackStatusChanges: true,
        allowedStatuses: ["active", "completed", "cancelled"]
      },
      DE10: {
        maxEventsPerEpisode: 1e3,
        requireEventCode: true
      }
    }
  },
  runDtTm: (/* @__PURE__ */ new Date()).toISOString(),
  statusData: {
    status: "S"
  }
};

// src/app/mocks/examples/mha-pds-configuration-error.mock.ts
var MHA_PDS_CONFIGURATION_ERROR_MOCK = {
  error: "Configuration service unavailable - database connection timeout",
  statusData: {
    status: "F",
    subeventstatus: [
      {
        targetobjectname: "error_code",
        targetobjectvalue: "DB_TIMEOUT"
      },
      {
        targetobjectname: "error_message",
        targetobjectvalue: "Failed to connect to configuration database"
      }
    ]
  },
  text: "Unable to retrieve MHA PDS configuration. Please contact system administrator."
};

// src/app/mocks/examples/manager-ops-date.mock.ts
var MANAGER_OPS_DATE_MOCK = {
  lastRunDtTm: new Date(Date.now() - 36e5).toISOString(),
  // 1 hour ago
  status: "S",
  episodesProcessed: 45,
  servicesProcessed: 234,
  nextScheduledRun: new Date(Date.now() + 36e5).toISOString(),
  // 1 hour from now
  statusData: {
    status: "S",
    subeventstatus: [
      {
        targetobjectname: "episodes_added",
        targetobjectvalue: "12"
      },
      {
        targetobjectname: "episodes_updated",
        targetobjectvalue: "33"
      },
      {
        targetobjectname: "services_added",
        targetobjectvalue: "156"
      },
      {
        targetobjectname: "services_updated",
        targetobjectvalue: "78"
      }
    ]
  }
};

// src/app/mocks/examples/episode-data.mock.ts
var EPISODE_DATA_MOCK = {
  episodes: [
    {
      episodeId: 123001,
      personId: 45678,
      encounterId: 98765,
      referralDate: "2025-10-15T09:30:00.000Z",
      programCode: "MHAC",
      status: "active"
    },
    {
      episodeId: 123002,
      personId: 45679,
      encounterId: 98766,
      referralDate: "2025-10-16T14:20:00.000Z",
      programCode: "MHIP",
      status: "active"
    },
    {
      episodeId: 123003,
      personId: 45680,
      encounterId: 98767,
      referralDate: "2025-10-17T10:15:00.000Z",
      programCode: "MHCR",
      status: "completed"
    }
  ],
  totalCount: 3,
  statusData: {
    status: "S"
  }
};
var EPISODE_DATA_EMPTY_MOCK = {
  episodes: [],
  totalCount: 0,
  statusData: {
    status: "S"
  },
  text: "No episodes found for the specified criteria"
};

// src/app/mocks/examples/save-mha-pds-configuration.mock.ts
var SAVE_MHA_PDS_CONFIGURATION_MOCK = {
  saved: true,
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  status: "S"
};
var SAVE_MHA_PDS_CONFIGURATION_ERROR_MOCK = {
  saved: false,
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  status: "F",
  errors: ["Failed to save configuration: Database connection timeout"]
};
var SAVE_MHA_PDS_CONFIGURATION_VALIDATION_ERROR_MOCK = {
  saved: false,
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  status: "F",
  errors: ["Invalid JSON structure in configuration"]
};

// src/app/mocks/index.ts
var MOCK_REGISTRY = {
  // Primary mocks (by requestType)
  //'getMHAPDSConfiguration': MHA_PDS_CONFIGURATION_MOCK, //pull from file
  "getManagerOpsDate": MANAGER_OPS_DATE_MOCK,
  "getEpisodeData": EPISODE_DATA_MOCK,
  "saveMHAPDSConfiguration": SAVE_MHA_PDS_CONFIGURATION_MOCK,
  // Variant mocks (error scenarios)
  "getMHAPDSConfiguration-error": MHA_PDS_CONFIGURATION_ERROR_MOCK,
  "getEpisodeData-empty": EPISODE_DATA_EMPTY_MOCK,
  "saveMHAPDSConfiguration-error": SAVE_MHA_PDS_CONFIGURATION_ERROR_MOCK,
  "saveMHAPDSConfiguration-validation-error": SAVE_MHA_PDS_CONFIGURATION_VALIDATION_ERROR_MOCK,
  // Script-specific mocks (if needed for different scripts)
  //'gbin_mha_pds_service-getMHAPDSConfiguration': MHA_PDS_CONFIGURATION_MOCK, //pull from file
  "gbin_mha_pds_service-getManagerOpsDate": MANAGER_OPS_DATE_MOCK,
  "gbin_mha_pds_service-saveMHAPDSConfiguration": SAVE_MHA_PDS_CONFIGURATION_MOCK
};

// src/app/services/mock-ccl.service.ts
var MockCclService = class _MockCclService {
  http = inject(HttpClient);
  /**
   * Storage for mock responses keyed by request ID
   */
  mockResponses = /* @__PURE__ */ new Map();
  /**
   * Cache for loaded JSON mocks to avoid repeated HTTP requests
   */
  jsonMockCache = /* @__PURE__ */ new Map();
  /**
   * Load a mock CCL request
   * Mimics CustomService.load() interface
   *
   * @param config - Request configuration with script details
   * @param patientSource - Patient context (not used in mock)
   * @param callback - Callback to execute after "loading" completes
   */
  load(config, patientSource, callback) {
    try {
      const script = config?.customScript?.script?.[0];
      if (!script) {
        console.error("[MockCclService] Invalid mock request configuration");
        callback();
        return;
      }
      const requestId = script.id;
      const requestType = script.parameters?.requestType;
      const scriptName = script.name?.split(":")[0];
      console.log("[MockCclService] Mock CCL Request:", {
        requestId,
        requestType,
        scriptName,
        requestData: script.parameters?.requestData
      });
      this.findMockResponse(requestType, scriptName).then((mockResponse) => {
        this.mockResponses.set(requestId, mockResponse);
        if (mockResponse.error) {
          console.warn("[MockCclService] WARNING: Mock response:", mockResponse.error);
        } else {
          console.log("[MockCclService] SUCCESS: Mock response loaded for:", requestType);
        }
        setTimeout(() => {
          callback();
        }, 0);
      }).catch((error) => {
        console.error("[MockCclService] Error loading mock:", error);
        this.mockResponses.set(requestId, {
          error: "Failed to load mock response",
          statusData: { status: "F" }
        });
        callback();
      });
    } catch (error) {
      console.error("[MockCclService] Error in mock CCL load:", error);
      callback();
    }
  }
  /**
   * Get a mock response by request ID
   * Mimics CustomService.get() interface
   *
   * @param requestId - The request ID used in load()
   * @returns The mock response or null if not found
   */
  get(requestId) {
    const response = this.mockResponses.get(requestId);
    if (!response) {
      console.warn("No mock response found for request ID:", requestId);
      return null;
    }
    return response;
  }
  /**
   * Find mock response using hierarchical lookup strategy
   *
   * Lookup order:
   * 1. TypeScript fixture by requestType (e.g., "getMHAPDSConfiguration")
   * 2. TypeScript fixture by scriptName-requestType (e.g., "gbin_mha_pds_service-getMHAPDSConfiguration")
   * 3. JSON file from public/assets/mocks/{requestType}.json
   * 4. Return error if no mock found
   *
   * @param requestType - The request type parameter
   * @param scriptName - The CCL script name (without :group suffix)
   * @returns Promise<Mock response object>
   */
  async findMockResponse(requestType, scriptName) {
    if (requestType && MOCK_REGISTRY[requestType]) {
      console.log("[MockCclService] Found TypeScript mock in registry:", requestType);
      return MOCK_REGISTRY[requestType];
    }
    if (scriptName && requestType) {
      const combinedKey = `${scriptName}-${requestType}`;
      if (MOCK_REGISTRY[combinedKey]) {
        console.log("[MockCclService] Found TypeScript mock in registry:", combinedKey);
        return MOCK_REGISTRY[combinedKey];
      }
    }
    if (requestType) {
      try {
        const jsonMock = await this.loadJsonMock(requestType);
        if (jsonMock) {
          console.log("[MockCclService] Loaded JSON mock from file:", requestType);
          return jsonMock;
        }
      } catch (error) {
        console.log("[MockCclService] No JSON mock file found for:", requestType);
      }
    }
    const errorMessage = `No mock found for requestType: "${requestType}"${scriptName ? ` (script: ${scriptName})` : ""}`;
    console.warn("[MockCclService] WARNING: " + errorMessage);
    console.log("[MockCclService] Available TypeScript mocks:", Object.keys(MOCK_REGISTRY));
    console.log("[MockCclService] To add a TypeScript mock: Create fixture in src/app/mocks/ and register in src/app/mocks/index.ts");
    console.log("[MockCclService] To add a JSON mock: Create file at public/assets/mocks/" + requestType + ".json");
    return {
      error: errorMessage,
      statusData: {
        status: "F",
        subeventstatus: [
          {
            targetobjectname: "error",
            targetobjectvalue: "Mock not found"
          }
        ]
      }
    };
  }
  /**
   * Load mock response from JSON file
   * Caches loaded JSON to avoid repeated HTTP requests
   *
   * @param requestType - The request type to load
   * @returns Promise<Mock response or null if not found>
   */
  async loadJsonMock(requestType) {
    if (this.jsonMockCache.has(requestType)) {
      console.log("[MockCclService] Using cached JSON mock:", requestType);
      return this.jsonMockCache.get(requestType);
    }
    const jsonPath = `assets/mocks/${requestType}.json`;
    try {
      const mockData = await this.http.get(jsonPath).toPromise();
      this.jsonMockCache.set(requestType, mockData);
      return mockData;
    } catch (error) {
      return null;
    }
  }
  /**
   * Clear all stored mock responses and JSON cache
   * Useful for testing or memory cleanup
   */
  clear() {
    this.mockResponses.clear();
    this.jsonMockCache.clear();
    console.log("[MockCclService] Mock responses and JSON cache cleared");
  }
  static \u0275fac = function MockCclService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockCclService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MockCclService, factory: _MockCclService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockCclService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/ccl-service-wrapper.service.ts
var CclServiceWrapperService = class _CclServiceWrapperService {
  customService = inject(CustomService);
  mockService = inject(MockCclService);
  appStatus = inject(AppStatusService);
  /**
   * Load a CCL request with automatic fallback to mock
   * Routes to live CustomService if online, MockCclService if offline
   *
   * @param config - Request configuration with script details
   * @param patientSource - Patient context array
   * @param callback - Callback to execute when request completes
   */
  load(config, patientSource, callback) {
    const isOffline = this.appStatus.isOffline();
    if (isOffline) {
      console.log("[CclServiceWrapper] Routing to mock CCL service (offline mode)");
      this.mockService.load(config, patientSource, callback);
    } else {
      console.log("[CclServiceWrapper] Routing to live CCL service (online mode)");
      try {
        this.customService.load(config, patientSource, callback);
      } catch (error) {
        console.error("[CclServiceWrapper] Error in live CCL service, attempting mock fallback:", error);
        this.mockService.load(config, patientSource, callback);
      }
    }
  }
  /**
   * Get response for a request ID
   * Routes to appropriate service based on current mode
   *
   * @param requestId - The request ID used in load()
   * @returns The response object or null
   */
  get(requestId) {
    const isOffline = this.appStatus.isOffline();
    if (isOffline) {
      return this.mockService.get(requestId);
    } else {
      try {
        return this.customService.get(requestId);
      } catch (error) {
        console.error("[CclServiceWrapper] Error getting response from live service:", error);
        return this.mockService.get(requestId);
      }
    }
  }
  /**
   * Check if currently in offline mode
   * @returns True if using mock service
   */
  isOfflineMode() {
    return this.appStatus.isOffline();
  }
  /**
   * Check if currently in online mode
   * @returns True if using live service
   */
  isOnlineMode() {
    return this.appStatus.isOnline();
  }
  static \u0275fac = function CclServiceWrapperService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CclServiceWrapperService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CclServiceWrapperService, factory: _CclServiceWrapperService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CclServiceWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  MockCclService,
  CclServiceWrapperService
};
//# sourceMappingURL=chunk-JTUDYXGZ.js.map
