import {
  CclServiceWrapperService
} from "./chunk-UKOOLU4P.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-UMGO53DP.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4
} from "./chunk-SOPMJL2V.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-I7D2VZMI.js";

// src/app/audit/services/audit-payload-parser.service.ts
var AuditPayloadParserService = class _AuditPayloadParserService {
  /**
   * LOINC code -> DE code mapping for Observation-based DE04 fields.
   * These codes come from the MHA PDS configuration mappings.
   */
  LOINC_TO_DE = {
    "76691-5": "DE04.007",
    // Gender Identity
    "76690-7": "DE04.008",
    // Sexual Orientation
    "69433-1": "DE04.012",
    // Citizenship Status
    "82589-3": "DE04.013",
    // Highest Education Level
    "74165-2": "DE04.014",
    // Employment Status
    "71802-3": "DE04.017",
    // Housing Status
    "77244-2": "DE04.018",
    // Total Household Income
    "86639-2": "DE04.019"
    // Number of People Income Supports
  };
  /**
   * Parse a JSON_PAYLOAD string from the audit log.
   * Returns null if the payload is empty or unparseable.
   */
  parsePayload(jsonPayload) {
    if (!jsonPayload || jsonPayload.trim().length === 0)
      return null;
    try {
      const parsed = JSON.parse(jsonPayload);
      const mirth = parsed?.MIRTH_REQUEST ?? parsed;
      if (!mirth?.requestType)
        return null;
      const metadata = this.extractMetadata(mirth);
      const submittedData = this.parseNestedJson(mirth.submittedData);
      return { metadata, submittedData };
    } catch {
      return null;
    }
  }
  /**
   * Enrich data points with values from the parsed submission data.
   * Detects whether submittedData is a FHIR Bundle or CCL-format JSON
   * and uses the appropriate parsing strategy.
   *
   * @param dataPoints - Original data points from CCL audit handler
   * @param submittedData - Parsed submission JSON object (FHIR Bundle or CCL record)
   * @param bundleType - Bundle type to help narrow search scope
   */
  enrichDataPoints(dataPoints, submittedData, bundleType) {
    if (!submittedData || !dataPoints?.length)
      return dataPoints;
    if (submittedData.resourceType === "Bundle") {
      return this.enrichFromFhirBundle(dataPoints, submittedData);
    }
    return this.enrichFromCclFormat(dataPoints, submittedData, bundleType);
  }
  // =========================================================================
  // FHIR Bundle Parsing - extracts values from the actual submitted FHIR data
  // =========================================================================
  /**
   * Enrich data points from a FHIR Bundle submitted to Ontario Health.
   * Parses each FHIR resource to extract the values for corresponding DE codes.
   */
  enrichFromFhirBundle(dataPoints, fhirBundle) {
    const entries = fhirBundle.entry;
    if (!Array.isArray(entries))
      return dataPoints;
    const resources = /* @__PURE__ */ new Map();
    for (const entry of entries) {
      const res = entry.resource;
      if (!res?.resourceType)
        continue;
      const type = res.resourceType;
      if (!resources.has(type))
        resources.set(type, []);
      resources.get(type).push(res);
    }
    const observationsByLoinc = /* @__PURE__ */ new Map();
    for (const obs of resources.get("Observation") ?? []) {
      const loincCode = obs?.code?.coding?.[0]?.code;
      if (loincCode)
        observationsByLoinc.set(loincCode, obs);
    }
    return dataPoints.map((dp) => {
      if (dp.value_sent && dp.mapped_code)
        return dp;
      const fhirValue = this.extractFhirValueForDE(dp.field_code, resources, observationsByLoinc);
      if (!fhirValue)
        return dp;
      return __spreadProps(__spreadValues({}, dp), {
        value_sent: fhirValue.value_sent || dp.value_sent,
        mapped_code: fhirValue.mapped_code || dp.mapped_code,
        mapped_label: fhirValue.mapped_label || dp.mapped_label,
        code_system: fhirValue.code_system || dp.code_system,
        identifier_system: fhirValue.identifier_system || dp.identifier_system,
        coding_code: fhirValue.coding_code || dp.coding_code,
        extension_url: fhirValue.extension_url || dp.extension_url
      });
    });
  }
  /**
   * Route a DE code to the appropriate FHIR resource extractor.
   */
  extractFhirValueForDE(deCode, resources, observationsByLoinc) {
    if (deCode.startsWith("DE07")) {
      return this.extractFromOrganization(deCode, resources.get("Organization"));
    }
    if (deCode.startsWith("DE08")) {
      return this.extractFromLocation(deCode, resources.get("Location"));
    }
    if (deCode.startsWith("DE05")) {
      return this.extractFromServiceRequest(deCode, resources.get("ServiceRequest"));
    }
    if (deCode.startsWith("DE06")) {
      return this.extractFromEpisodeOfCare(deCode, resources.get("EpisodeOfCare"));
    }
    if (deCode.startsWith("DE09")) {
      return this.extractFromHealthcareService(deCode, resources.get("HealthcareService"));
    }
    if (deCode.startsWith("DE10")) {
      return this.extractFromEncounter(deCode, resources.get("Encounter"));
    }
    if (deCode.startsWith("DE01") || deCode.startsWith("DE02") || deCode.startsWith("DE03")) {
      return this.extractFromPatient(deCode, resources.get("Patient"));
    }
    if (deCode.startsWith("DE04")) {
      return this.extractFromObservation(deCode, observationsByLoinc);
    }
    return null;
  }
  /**
   * DE07 - HSP Organization: extract identifiers from Organization resource
   */
  extractFromOrganization(deCode, orgs) {
    const org = orgs?.[0];
    if (!org)
      return null;
    if (deCode === "DE07.001") {
      const id = this.findIdentifier(org.identifier, "OHFS");
      return id ? { value_sent: id.value, identifier_system: id.system } : null;
    }
    if (deCode === "DE07.002") {
      const id = this.findIdentifier(org.identifier, "ConnexOrg");
      return id ? { value_sent: id.value, identifier_system: id.system } : null;
    }
    if (deCode === "DE07.003") {
      return org.name ? { value_sent: org.name } : null;
    }
    return null;
  }
  /**
   * DE08 - HSP Site: extract identifiers from Location resource
   */
  extractFromLocation(deCode, locations) {
    const loc = locations?.[0];
    if (!loc)
      return null;
    if (deCode === "DE08.001") {
      const id = this.findIdentifier(loc.identifier, "ConnexSite");
      return id ? { value_sent: id.value, identifier_system: id.system } : null;
    }
    if (deCode === "DE08.002") {
      return loc.name ? { value_sent: loc.name } : null;
    }
    return null;
  }
  /**
   * DE05 - Referral: extract from ServiceRequest resource
   */
  extractFromServiceRequest(deCode, requests) {
    const sr = requests?.[0];
    if (!sr)
      return null;
    switch (deCode) {
      case "DE05.001": {
        const id = sr.identifier?.[0];
        return id?.value ? { value_sent: id.value, identifier_system: id.system ?? "" } : null;
      }
      case "DE05.002":
        return sr.authoredOn ? { value_sent: sr.authoredOn } : null;
      case "DE05.004": {
        const ext = this.getExtensionCoded(sr.extension, "referralSourceType");
        return ext ? {
          mapped_code: ext.display,
          coding_code: ext.code,
          code_system: ext.system,
          extension_url: ext.url
        } : null;
      }
      case "DE05.005": {
        const ext = this.getExtensionCoded(sr.extension, "ReferralType");
        return ext ? {
          mapped_code: ext.display,
          coding_code: ext.code,
          code_system: ext.system,
          extension_url: ext.url
        } : null;
      }
      default:
        return null;
    }
  }
  /**
   * DE06 - Episode of Care: extract from EpisodeOfCare resource
   */
  extractFromEpisodeOfCare(deCode, episodes) {
    const eoc = episodes?.[0];
    if (!eoc)
      return null;
    switch (deCode) {
      case "DE06.001":
        return eoc.status ? { mapped_code: eoc.status } : null;
      case "DE06.008": {
        const ext = this.getExtensionDate(eoc.extension, "ServiceInitiationDate");
        return ext ? { value_sent: ext.date, extension_url: ext.url } : null;
      }
      case "DE06.009": {
        const ext = this.getExtensionDate(eoc.extension, "eligibilityScreeningDate");
        return ext ? { value_sent: ext.date, extension_url: ext.url } : null;
      }
      default:
        return null;
    }
  }
  /**
   * DE09 - Health Program: extract from HealthcareService resource
   */
  extractFromHealthcareService(deCode, services) {
    const hs = services?.[0];
    if (!hs)
      return null;
    switch (deCode) {
      case "DE09.001": {
        const id = this.findIdentifier(hs.identifier, "ConnexProgram");
        return id ? { value_sent: id.value, identifier_system: id.system } : null;
      }
      case "DE09.002":
        return hs.name ? { value_sent: hs.name } : null;
      case "DE09.003": {
        const ext = this.getExtensionCoded(hs.extension, "functionalCentreCode");
        return ext ? {
          mapped_code: ext.display,
          coding_code: ext.code,
          code_system: ext.system,
          extension_url: ext.url
        } : null;
      }
      default:
        return null;
    }
  }
  /**
   * DE10 - Health Service Event: extract from Encounter resource
   */
  extractFromEncounter(deCode, encounters) {
    const enc = encounters?.[0];
    if (!enc)
      return null;
    switch (deCode) {
      case "DE10.001": {
        const id = enc.identifier?.[0];
        return id?.value ? { value_sent: id.value, identifier_system: id.system ?? "" } : null;
      }
      case "DE10.002": {
        const cls = enc.class;
        return cls?.display ? {
          mapped_code: cls.display,
          coding_code: cls.code ?? "",
          code_system: cls.system ?? ""
        } : null;
      }
      case "DE10.004":
        return enc.period?.start ? { value_sent: enc.period.start } : null;
      case "DE10.005": {
        const ext = this.getExtensionInteger(enc.extension, "directminutes");
        return ext ? { value_sent: String(ext.value), extension_url: ext.url } : null;
      }
      case "DE10.007":
        return enc.status ? { mapped_code: enc.status } : null;
      default:
        return null;
    }
  }
  /**
   * DE01-DE03 - Client info: extract from Patient resource
   */
  extractFromPatient(deCode, patients) {
    const patient = patients?.[0];
    if (!patient)
      return null;
    switch (deCode) {
      case "DE01.001":
        return patient.name?.[0]?.family ? { value_sent: patient.name[0].family } : null;
      case "DE01.002": {
        const given = patient.name?.[0]?.given;
        return Array.isArray(given) && given.length > 0 ? { value_sent: given[0] } : null;
      }
      case "DE01.003": {
        const given = patient.name?.[0]?.given;
        return Array.isArray(given) && given.length > 1 ? { value_sent: given[1] } : null;
      }
      case "DE01.004":
        return patient.birthDate ? { value_sent: patient.birthDate } : null;
      case "DE02.001": {
        const id = this.findPatientIdentifier(patient.identifier, "MR");
        return id ? { value_sent: id.value, identifier_system: id.system } : null;
      }
      case "DE02.003": {
        const id = this.findPatientIdentifier(patient.identifier, "JHN");
        return id ? { value_sent: id.value, identifier_system: id.system } : null;
      }
      case "DE03.001": {
        const use = patient.address?.[0]?.use;
        return use ? { value_sent: use } : null;
      }
      case "DE03.002":
        return patient.address?.[0]?.city ? { value_sent: patient.address[0].city } : null;
      case "DE03.003": {
        const state = patient.address?.[0]?.state;
        return state ? { mapped_code: state } : null;
      }
      case "DE03.004":
        return patient.address?.[0]?.postalCode ? { value_sent: patient.address[0].postalCode } : null;
      default:
        return null;
    }
  }
  /**
   * DE04 - Socio-demographic: extract from Observation resources.
   * Matches DE codes to Observations via LOINC code mapping.
   */
  extractFromObservation(deCode, observationsByLoinc) {
    const loincCode = this.findLoincForDE(deCode);
    if (!loincCode)
      return null;
    const obs = observationsByLoinc.get(loincCode);
    if (!obs)
      return null;
    const vcc = obs.valueCodeableConcept;
    if (vcc?.coding?.[0]) {
      const coding = vcc.coding[0];
      return {
        mapped_code: coding.display ?? coding.code ?? "",
        coding_code: coding.code ?? "",
        code_system: coding.system ?? ""
      };
    }
    if (obs.valueInteger !== void 0 && obs.valueInteger !== null) {
      return { value_sent: String(obs.valueInteger) };
    }
    if (obs.valueString) {
      return { value_sent: obs.valueString };
    }
    return null;
  }
  // =========================================================================
  // FHIR Helper Methods
  // =========================================================================
  /**
   * Find an identifier by matching a partial system URL.
   * Returns both the value and full system URL.
   */
  findIdentifier(identifiers, systemFragment) {
    if (!Array.isArray(identifiers))
      return null;
    for (const id of identifiers) {
      if (id.system?.includes(systemFragment) && id.value) {
        return { value: id.value, system: id.system };
      }
    }
    return null;
  }
  /**
   * Find a Patient identifier by type.coding[].code value.
   * Returns both the value and full system URL.
   */
  findPatientIdentifier(identifiers, typeCode) {
    if (!Array.isArray(identifiers))
      return null;
    for (const id of identifiers) {
      const codings = id.type?.coding;
      if (Array.isArray(codings)) {
        for (const c of codings) {
          if (c.code === typeCode && id.value) {
            return { value: id.value, system: id.system ?? "" };
          }
        }
      }
    }
    return null;
  }
  /**
   * Get coded value from an extension (valueCodeableConcept).
   * Returns display, code, system, and extension URL.
   */
  getExtensionCoded(extensions, urlFragment) {
    if (!Array.isArray(extensions))
      return null;
    for (const ext of extensions) {
      if (ext.url?.includes(urlFragment)) {
        const coding = ext.valueCodeableConcept?.coding?.[0];
        if (coding) {
          return {
            display: coding.display ?? "",
            code: coding.code ?? "",
            system: coding.system ?? "",
            url: ext.url
          };
        }
      }
    }
    return null;
  }
  /**
   * Get a valueDate from an extension by partial URL fragment.
   * Returns date and extension URL.
   */
  getExtensionDate(extensions, urlFragment) {
    if (!Array.isArray(extensions))
      return null;
    for (const ext of extensions) {
      if (ext.url?.includes(urlFragment) && ext.valueDate) {
        return { date: ext.valueDate, url: ext.url };
      }
    }
    return null;
  }
  /**
   * Get a valueInteger from an extension by partial URL fragment.
   * Returns value and extension URL.
   */
  getExtensionInteger(extensions, urlFragment) {
    if (!Array.isArray(extensions))
      return null;
    for (const ext of extensions) {
      if (ext.url?.includes(urlFragment) && ext.valueInteger !== void 0 && ext.valueInteger !== null) {
        return { value: ext.valueInteger, url: ext.url };
      }
    }
    return null;
  }
  /**
   * Find the LOINC code for a DE04 data element code.
   * Uses the LOINC_TO_DE reverse lookup.
   */
  findLoincForDE(deCode) {
    for (const [loinc, de] of Object.entries(this.LOINC_TO_DE)) {
      if (de === deCode)
        return loinc;
    }
    return null;
  }
  // =========================================================================
  // Mirth Metadata Extraction
  // =========================================================================
  /**
   * Extract Mirth metadata from the parsed MIRTH_REQUEST object.
   */
  extractMetadata(mirth) {
    let responseBundleId = "";
    const responseData = this.parseNestedJson(mirth.responseData);
    if (responseData) {
      responseBundleId = responseData.id ?? responseData.ID ?? "";
    }
    return {
      request_type: mirth.requestType ?? "",
      timestamp: mirth.timestamp ?? "",
      channel_name: mirth.mirthChannelName ?? "",
      channel_id: mirth.mirthChannelId ?? "",
      message_id: mirth.mirthChannelMessageId ?? 0,
      response_status_code: mirth.responseStatusCode ?? 0,
      response_status_line: mirth.responseStatusLine ?? "",
      response_bundle_id: responseBundleId
    };
  }
  /**
   * Parse a nested JSON string (double-escaped within the outer JSON).
   * Returns null if empty or unparseable.
   */
  parseNestedJson(jsonString) {
    if (!jsonString || jsonString.trim().length === 0)
      return null;
    try {
      return JSON.parse(jsonString);
    } catch {
      return null;
    }
  }
  // =========================================================================
  // CCL-format Enrichment (legacy fallback)
  // =========================================================================
  /**
   * Enrich data points from CCL-format submission data.
   * This is the legacy path for when submittedData is a CCL record (not FHIR).
   */
  enrichFromCclFormat(dataPoints, submittedData, bundleType) {
    const qual = this.getFirstQual(submittedData);
    if (!qual)
      return dataPoints;
    const searchScope = this.getScopeForBundleType(qual, bundleType);
    if (!searchScope)
      return dataPoints;
    return dataPoints.map((dp) => {
      if (dp.mapped_code)
        return dp;
      const coded = this.findCodedField(dp.field_code, searchScope);
      if (!coded)
        return dp;
      return __spreadProps(__spreadValues({}, dp), {
        mapped_code: coded.code || dp.mapped_code,
        mapped_label: coded.label || dp.mapped_label,
        code_system: coded.code_system || dp.code_system
      });
    });
  }
  getFirstQual(submittedData) {
    const qual = submittedData.QUAL ?? submittedData.qual;
    if (Array.isArray(qual) && qual.length > 0)
      return qual[0];
    return submittedData;
  }
  getScopeForBundleType(qual, bundleType) {
    switch (bundleType) {
      case "SERVICE_REQUEST_EOC":
        return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, qual.REFERRAL ?? qual.referral ?? {}), qual.EPISODE_OF_CARE ?? qual.episode_of_care ?? {}), qual.HEALTH_PROGRAM ?? qual.health_program ?? {}), qual.CLIENT ?? qual.client ?? {});
      case "CLIENT_SDOH":
        return qual.CLIENT ?? qual.client ?? null;
      case "HEALTH_SERVICES":
        return this.getServicesScope(qual);
      default:
        return qual;
    }
  }
  getServicesScope(qual) {
    const services = qual.SERVICES ?? qual.services;
    if (!Array.isArray(services) || services.length === 0)
      return null;
    const firstService = services[0];
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, firstService.HSP_ORGANIZATION ?? firstService.hsp_organization ?? {}), firstService.HSP_SITE ?? firstService.hsp_site ?? {}), firstService.HEALTH_SERVICE_EVENT ?? firstService.health_service_event ?? {}), qual.CLIENT ?? qual.client ?? {});
  }
  findCodedField(deCode, scope) {
    if (!scope || !deCode)
      return null;
    const pattern = deCode.replace(/\./g, "_").toUpperCase();
    return this.searchForPattern(pattern, scope);
  }
  searchForPattern(pattern, obj) {
    if (!obj || typeof obj !== "object")
      return null;
    if (Array.isArray(obj)) {
      for (const item of obj) {
        const result = this.searchForPattern(pattern, item);
        if (result)
          return result;
      }
      return null;
    }
    for (const key of Object.keys(obj)) {
      const upperKey = key.toUpperCase();
      if (upperKey.startsWith(pattern)) {
        const value = obj[key];
        if (value && typeof value === "object" && !Array.isArray(value)) {
          const code = value.CODE ?? value.code ?? "";
          const label = value.LABEL ?? value.label ?? "";
          const codeSystem = value.CODE_SYSTEM ?? value.code_system ?? "";
          if (code || label) {
            return { code, label, code_system: codeSystem };
          }
        } else if (typeof value === "string" && value.trim()) {
          return { code: value, label: "", code_system: "" };
        }
      }
      const child = obj[key];
      if (child && typeof child === "object") {
        const result = this.searchForPattern(pattern, child);
        if (result)
          return result;
      }
    }
    return null;
  }
  static \u0275fac = function AuditPayloadParserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditPayloadParserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditPayloadParserService, factory: _AuditPayloadParserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditPayloadParserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/audit/services/audit.service.ts
var AuditService = class _AuditService {
  cclService = inject(CclServiceWrapperService);
  payloadParser = inject(AuditPayloadParserService);
  // State signals - patients
  _auditablePatients = signal([], ...ngDevMode ? [{ debugName: "_auditablePatients" }] : []);
  _loadingPatients = signal(false, ...ngDevMode ? [{ debugName: "_loadingPatients" }] : []);
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : []);
  // State signals - audit bundles
  _auditBundles = signal([], ...ngDevMode ? [{ debugName: "_auditBundles" }] : []);
  _loadingBundles = signal(false, ...ngDevMode ? [{ debugName: "_loadingBundles" }] : []);
  _selectedPatient = signal(null, ...ngDevMode ? [{ debugName: "_selectedPatient" }] : []);
  // Public readonly accessors - patients
  auditablePatients = this._auditablePatients.asReadonly();
  loadingPatients = this._loadingPatients.asReadonly();
  error = this._error.asReadonly();
  // Public readonly accessors - audit bundles
  auditBundles = this._auditBundles.asReadonly();
  loadingBundles = this._loadingBundles.asReadonly();
  selectedPatient = this._selectedPatient.asReadonly();
  /**
   * Load patients that have at least one ACCEPTED submission
   * Calls the getAuditablePatients CCL handler (Phase 49)
   */
  loadAuditablePatients() {
    this._loadingPatients.set(true);
    this._error.set(null);
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getAuditablePatients",
          parameters: {
            requestType: "getAuditablePatients",
            requestId: Date.now()
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getAuditablePatients");
        if (response) {
          const status = response.status ?? response.STATUS ?? "F";
          if (status === "S") {
            const patients = response.patients ?? response.PATIENTS ?? [];
            const normalizedPatients = patients.map((p) => this.normalizePatient(p));
            this._auditablePatients.set(normalizedPatients);
          } else {
            const errorMsg = response.message ?? response.MESSAGE ?? "Failed to load auditable patients";
            this._error.set(errorMsg);
          }
        } else {
          this._error.set("No response received from CCL service");
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to parse audit patients response");
      }
      this._loadingPatients.set(false);
    });
  }
  /**
   * Load all submission bundles for a specific patient
   * Calls the getPatientAuditBundles CCL handler (Phase 49)
   *
   * @param personId - The person_id of the patient to retrieve bundles for
   */
  loadPatientAuditBundles(personId) {
    this._loadingBundles.set(true);
    this._error.set(null);
    this._auditBundles.set([]);
    this._selectedPatient.set(null);
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getPatientAuditBundles",
          parameters: {
            requestType: "getPatientAuditBundles",
            requestId: Date.now(),
            requestData: JSON.stringify({
              audit_bundle_params: {
                person_id: String(personId)
              }
            })
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getPatientAuditBundles");
        if (response) {
          const status = response.status ?? response.STATUS ?? "F";
          if (status === "S") {
            const patientResponse = this.normalizePatientAuditResponse(response);
            this._selectedPatient.set(patientResponse);
            this._auditBundles.set(patientResponse.bundles);
          } else {
            const errorMsg = response.message ?? response.MESSAGE ?? "Failed to load patient audit bundles";
            this._error.set(errorMsg);
          }
        } else {
          this._error.set("No response received from CCL service");
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to parse audit bundles response");
      }
      this._loadingBundles.set(false);
    });
  }
  /**
   * Clear the current audit bundle state
   */
  clearAuditBundles() {
    this._auditBundles.set([]);
    this._selectedPatient.set(null);
    this._error.set(null);
  }
  /**
   * Normalize patient data from CCL uppercase to TypeScript lowercase property names
   */
  normalizePatient(item) {
    return {
      person_id: item.person_id ?? item.PERSON_ID ?? 0,
      display_name: item.display_name ?? item.DISPLAY_NAME ?? "",
      mrn: item.mrn ?? item.MRN ?? "",
      episode_count: item.episode_count ?? item.EPISODE_COUNT ?? 0,
      submission_count: item.submission_count ?? item.SUBMISSION_COUNT ?? 0
    };
  }
  /**
   * Normalize the full patient audit response from CCL.
   * After normalization, enriches bundles with parsed JSON_PAYLOAD data.
   */
  normalizePatientAuditResponse(response) {
    const bundles = response.bundles ?? response.BUNDLES ?? [];
    const normalizedBundles = bundles.map((b) => this.normalizeBundle(b));
    this.enrichBundlesFromPayload(normalizedBundles);
    return {
      person_id: response.person_id ?? response.PERSON_ID ?? 0,
      display_name: response.display_name ?? response.DISPLAY_NAME ?? "",
      mrn: response.mrn ?? response.MRN ?? "",
      bundle_cnt: response.bundle_cnt ?? response.BUNDLE_CNT ?? 0,
      bundles: normalizedBundles
    };
  }
  /**
   * Enrich bundles with data parsed from their JSON_PAYLOAD.
   * Extracts Mirth response metadata and fills in mapped codes/labels
   * from the submitted FHIR data.
   */
  enrichBundlesFromPayload(bundles) {
    for (const bundle of bundles) {
      if (!bundle.json_payload)
        continue;
      const parsed = this.payloadParser.parsePayload(bundle.json_payload);
      if (!parsed)
        continue;
      bundle.mirth_metadata = parsed.metadata;
      if (parsed.submittedData) {
        bundle.data_points = this.payloadParser.enrichDataPoints(bundle.data_points, parsed.submittedData, bundle.bundle_type);
      }
    }
  }
  /**
   * Normalize a single audit bundle from CCL response
   */
  normalizeBundle(item) {
    const dataPoints = item.data_points ?? item.DATA_POINTS ?? [];
    return {
      submission_batch_id: item.submission_batch_id ?? item.SUBMISSION_BATCH_ID ?? "",
      submission_response_id: item.submission_response_id ?? item.SUBMISSION_RESPONSE_ID ?? "",
      bundle_type: item.bundle_type ?? item.BUNDLE_TYPE ?? "",
      submission_status: item.submission_status ?? item.SUBMISSION_STATUS ?? "",
      submission_dt_tm: item.submission_dt_tm ?? item.SUBMISSION_DT_TM ?? "",
      submission_dt_tm_fmt: item.submission_dt_tm_fmt ?? item.SUBMISSION_DT_TM_FMT ?? "",
      record_source: item.record_source ?? item.RECORD_SOURCE ?? "",
      source_id: item.source_id ?? item.SOURCE_ID ?? 0,
      episode_identifier: item.episode_identifier ?? item.EPISODE_IDENTIFIER ?? "",
      data_point_cnt: item.data_point_cnt ?? item.DATA_POINT_CNT ?? 0,
      data_points: dataPoints.map((dp) => this.normalizeDataPoint(dp)),
      json_payload: item.json_payload ?? item.JSON_PAYLOAD ?? ""
    };
  }
  /**
   * Normalize a single data point from CCL response
   */
  normalizeDataPoint(item) {
    return {
      field_code: item.field_code ?? item.FIELD_CODE ?? "",
      field_label: item.field_label ?? item.FIELD_LABEL ?? "",
      value_sent: item.value_sent ?? item.VALUE_SENT ?? "",
      mapped_code: item.mapped_code ?? item.MAPPED_CODE ?? "",
      mapped_label: item.mapped_label ?? item.MAPPED_LABEL ?? "",
      code_system: item.code_system ?? item.CODE_SYSTEM ?? ""
    };
  }
  static \u0275fac = function AuditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditService, factory: _AuditService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/audit/components/audit-patient-selector.ts
var _forTrack0 = ($index, $item) => $item.person_id;
function AuditPatientSelectorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "span", 6);
    \u0275\u0275text(2, " Loading patients... ");
    \u0275\u0275elementEnd();
  }
}
function AuditPatientSelectorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.auditService.error());
  }
}
function AuditPatientSelectorComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No patients with submissions found");
    \u0275\u0275elementEnd();
  }
}
function AuditPatientSelectorComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const patient_r3 = ctx.$implicit;
    \u0275\u0275property("value", patient_r3.person_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", patient_r3.display_name, " (MRN: ", patient_r3.mrn, ") - ", patient_r3.submission_count, " submission", patient_r3.submission_count !== 1 ? "s" : "", " ");
  }
}
function AuditPatientSelectorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 7);
    \u0275\u0275listener("ngModelChange", function AuditPatientSelectorComponent_Conditional_6_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSelectionChange($event));
    });
    \u0275\u0275elementStart(1, "option", 8);
    \u0275\u0275text(2, "-- Select a patient --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AuditPatientSelectorComponent_Conditional_6_For_4_Template, 2, 5, "option", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.selectedValue);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.auditService.auditablePatients());
  }
}
var AuditPatientSelectorComponent = class _AuditPatientSelectorComponent {
  auditService = inject(AuditService);
  /** Emits the person_id when a patient is selected */
  patientSelected = output();
  selectedValue = "";
  ngOnInit() {
    this.auditService.loadAuditablePatients();
  }
  onSelectionChange(value) {
    this.selectedValue = value;
    if (value) {
      this.patientSelected.emit(Number(value));
    }
  }
  static \u0275fac = function AuditPatientSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditPatientSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditPatientSelectorComponent, selectors: [["app-audit-patient-selector"]], outputs: { patientSelected: "patientSelected" }, decls: 7, vars: 1, consts: [[1, "patient-selector"], ["for", "audit-patient-select"], [1, "loading-indicator"], [1, "error-message"], [1, "empty-message"], ["id", "audit-patient-select", 1, "patient-select", 3, "ngModel"], [1, "spinner"], ["id", "audit-patient-select", 1, "patient-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"]], template: function AuditPatientSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2, "Select Patient");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, AuditPatientSelectorComponent_Conditional_3_Template, 3, 0, "div", 2)(4, AuditPatientSelectorComponent_Conditional_4_Template, 2, 1, "div", 3)(5, AuditPatientSelectorComponent_Conditional_5_Template, 2, 0, "div", 4)(6, AuditPatientSelectorComponent_Conditional_6_Template, 5, 1, "select", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.auditService.loadingPatients() ? 3 : ctx.auditService.error() ? 4 : ctx.auditService.auditablePatients().length === 0 ? 5 : 6);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.patient-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.patient-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.patient-select[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 500px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  color: #495057;\n  background-color: white;\n  cursor: pointer;\n}\n.patient-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.15);\n}\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #dee2e6;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.875rem;\n}\n.empty-message[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-style: italic;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditPatientSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-audit-patient-selector", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="patient-selector">
      <label for="audit-patient-select">Select Patient</label>

      @if (auditService.loadingPatients()) {
        <div class="loading-indicator">
          <span class="spinner"></span>
          Loading patients...
        </div>
      } @else if (auditService.error()) {
        <div class="error-message">{{ auditService.error() }}</div>
      } @else if (auditService.auditablePatients().length === 0) {
        <div class="empty-message">No patients with submissions found</div>
      } @else {
        <select
          id="audit-patient-select"
          [ngModel]="selectedValue"
          (ngModelChange)="onSelectionChange($event)"
          class="patient-select"
        >
          <option value="">-- Select a patient --</option>
          @for (patient of auditService.auditablePatients(); track patient.person_id) {
            <option [value]="patient.person_id">
              {{ patient.display_name }} (MRN: {{ patient.mrn }}) - {{ patient.submission_count }} submission{{ patient.submission_count !== 1 ? 's' : '' }}
            </option>
          }
        </select>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;1e35e199e6fec72ce8532c6986e87610961f80ab0f4f9c9decd9979588e2a172;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/audit/components/audit-patient-selector.ts */\n.patient-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.patient-selector label {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.patient-select {\n  flex: 1;\n  max-width: 500px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  color: #495057;\n  background-color: white;\n  cursor: pointer;\n}\n.patient-select:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.15);\n}\n.loading-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #dee2e6;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message {\n  color: #dc3545;\n  font-size: 0.875rem;\n}\n.empty-message {\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-style: italic;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditPatientSelectorComponent, { className: "AuditPatientSelectorComponent", filePath: "src/app/audit/components/audit-patient-selector.ts", lineNumber: 110 });
})();

// src/app/audit/components/audit-data-points.ts
var _forTrack02 = ($index, $item) => $item.prefix;
var _forTrack1 = ($index, $item) => $item.field_code;
function AuditDataPointsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275text(1, "No data points in this bundle");
    \u0275\u0275domElementEnd();
  }
}
function AuditDataPointsComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th", 10);
    \u0275\u0275text(1, "FHIR Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "th", 10);
    \u0275\u0275text(3, "Identifier System");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "th", 10);
    \u0275\u0275text(5, "Extension URL");
    \u0275\u0275domElementEnd();
  }
}
function AuditDataPointsComponent_Conditional_1_For_19_For_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 16);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "td", 17);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "td", 17);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const dp_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dp_r1.coding_code || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.identifier_system || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.extension_url || "-");
  }
}
function AuditDataPointsComponent_Conditional_1_For_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 13)(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 5);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 6);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 15);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 8);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 9);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(13, AuditDataPointsComponent_Conditional_1_For_19_For_4_Conditional_13_Template, 6, 3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const dp_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mapped-row", ctx_r1.hasMappingApplied(dp_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.field_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.field_label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.value_sent || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.mapped_code || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.mapped_label || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dp_r1.code_system || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showVerbose() ? 13 : -1);
  }
}
function AuditDataPointsComponent_Conditional_1_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 11)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(3, AuditDataPointsComponent_Conditional_1_For_19_For_4_Template, 14, 9, "tr", 12, _forTrack1);
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.showVerbose() ? 9 : 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r3.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r3.dataPoints);
  }
}
function AuditDataPointsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "table", 3)(2, "thead")(3, "tr")(4, "th", 4);
    \u0275\u0275text(5, "DE Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th", 5);
    \u0275\u0275text(7, "Field");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th", 6);
    \u0275\u0275text(9, "Value");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 7);
    \u0275\u0275text(11, "Mapped Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 8);
    \u0275\u0275text(13, "Mapped Label");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th", 9);
    \u0275\u0275text(15, "Code System");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(16, AuditDataPointsComponent_Conditional_1_Conditional_16_Template, 6, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, AuditDataPointsComponent_Conditional_1_For_19_Template, 5, 2, null, null, _forTrack02);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.borderClass());
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r1.showVerbose() ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.groupedDataPoints());
  }
}
var DE_GROUP_LABELS = {
  "DE01": "DE01 - Client Identification",
  "DE02": "DE02 - Client Address",
  "DE03": "DE03 - Client Contact",
  "DE04": "DE04 - Socio-Demographics",
  "DE05": "DE05 - Referral",
  "DE06": "DE06 - Episode of Care",
  "DE07": "DE07 - Health Service Provider Organization",
  "DE08": "DE08 - Health Service Provider Site",
  "DE09": "DE09 - Health Program",
  "DE10": "DE10 - Health Service Event"
};
var AuditDataPointsComponent = class _AuditDataPointsComponent {
  dataPoints = input.required(...ngDevMode ? [{ debugName: "dataPoints" }] : []);
  bundleType = input("", ...ngDevMode ? [{ debugName: "bundleType" }] : []);
  showVerbose = input(false, ...ngDevMode ? [{ debugName: "showVerbose" }] : []);
  /** CSS class for the left border color based on bundle type */
  borderClass = computed(() => {
    switch (this.bundleType()) {
      case "SERVICE_REQUEST_EOC":
        return "border-eoc";
      case "CLIENT_SDOH":
        return "border-sdoh";
      case "HEALTH_SERVICES":
        return "border-hse";
      default:
        return "";
    }
  }, ...ngDevMode ? [{ debugName: "borderClass" }] : []);
  /** Group data points by DE prefix (e.g. DE01, DE04) with group headers */
  groupedDataPoints = computed(() => {
    const points = this.dataPoints();
    if (!points || points.length === 0)
      return [];
    const groupMap = /* @__PURE__ */ new Map();
    for (const dp of points) {
      const prefix = this.getDePrefix(dp.field_code);
      if (!groupMap.has(prefix)) {
        groupMap.set(prefix, []);
      }
      groupMap.get(prefix).push(dp);
    }
    const groups = [];
    for (const [prefix, dps] of groupMap) {
      groups.push({
        prefix,
        label: DE_GROUP_LABELS[prefix] || prefix,
        dataPoints: dps
      });
    }
    return groups;
  }, ...ngDevMode ? [{ debugName: "groupedDataPoints" }] : []);
  /** Check if a data point has a mapping applied (mapped_code differs from value_sent) */
  hasMappingApplied(dp) {
    return !!dp.mapped_code && dp.mapped_code !== dp.value_sent;
  }
  /** Extract the DE group prefix (e.g. "DE04" from "DE04.007") */
  getDePrefix(fieldCode) {
    const dotIndex = fieldCode.indexOf(".");
    return dotIndex > 0 ? fieldCode.substring(0, dotIndex) : fieldCode;
  }
  static \u0275fac = function AuditDataPointsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditDataPointsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditDataPointsComponent, selectors: [["app-audit-data-points"]], inputs: { dataPoints: [1, "dataPoints"], bundleType: [1, "bundleType"], showVerbose: [1, "showVerbose"] }, decls: 2, vars: 1, consts: [[1, "no-data-points"], [1, "data-points-container", 3, "class"], [1, "data-points-container"], [1, "data-points-table"], [1, "col-de-code"], [1, "col-field"], [1, "col-value"], [1, "col-mapped-code"], [1, "col-mapped-label"], [1, "col-code-system"], [1, "col-verbose"], [1, "group-header-row"], [1, "data-point-row", 3, "mapped-row"], [1, "data-point-row"], [1, "col-de-code", "mono"], [1, "col-mapped-code", "mono"], [1, "col-verbose", "mono"], [1, "col-verbose", "url-cell"]], template: function AuditDataPointsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AuditDataPointsComponent_Conditional_0_Template, 2, 0, "div", 0)(1, AuditDataPointsComponent_Conditional_1_Template, 20, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.groupedDataPoints().length === 0 ? 0 : 1);
    }
  }, styles: ['\n\n.data-points-container[_ngcontent-%COMP%] {\n  border-left: 3px solid #dee2e6;\n  margin: 4px 0;\n  overflow-x: auto;\n}\n.data-points-container.border-eoc[_ngcontent-%COMP%] {\n  border-left-color: #2563eb;\n}\n.data-points-container.border-sdoh[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n}\n.data-points-container.border-hse[_ngcontent-%COMP%] {\n  border-left-color: #ea580c;\n}\n.data-points-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.75rem;\n}\n.data-points-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-points-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  text-align: left;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-points-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.group-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #f1f3f5;\n  font-weight: 600;\n  font-size: 0.6875rem;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 6px 8px;\n  border-bottom: 1px solid #dee2e6;\n}\n.data-point-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.data-point-row.mapped-row[_ngcontent-%COMP%] {\n  background: #fffbeb;\n}\n.data-point-row.mapped-row[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.6875rem;\n}\n.col-de-code[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.col-field[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.col-value[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.col-mapped-code[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.col-mapped-label[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.col-code-system[_ngcontent-%COMP%] {\n  min-width: 100px;\n  font-size: 0.625rem;\n  color: #6c757d;\n}\n.col-verbose[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: #6c757d;\n  background: #fefce8;\n}\n.col-verbose.url-cell[_ngcontent-%COMP%] {\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.5625rem;\n}\nthead[_ngcontent-%COMP%]   .col-verbose[_ngcontent-%COMP%] {\n  background: #fef9c3;\n}\n.no-data-points[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-size: 0.8125rem;\n  font-style: italic;\n  padding: 16px;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditDataPointsComponent, [{
    type: Component,
    args: [{ selector: "app-audit-data-points", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (groupedDataPoints().length === 0) {
      <div class="no-data-points">No data points in this bundle</div>
    } @else {
      <div class="data-points-container" [class]="borderClass()">
        <table class="data-points-table">
          <thead>
            <tr>
              <th class="col-de-code">DE Code</th>
              <th class="col-field">Field</th>
              <th class="col-value">Value</th>
              <th class="col-mapped-code">Mapped Code</th>
              <th class="col-mapped-label">Mapped Label</th>
              <th class="col-code-system">Code System</th>
              @if (showVerbose()) {
                <th class="col-verbose">FHIR Code</th>
                <th class="col-verbose">Identifier System</th>
                <th class="col-verbose">Extension URL</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (group of groupedDataPoints(); track group.prefix) {
              <tr class="group-header-row">
                <td [attr.colspan]="showVerbose() ? 9 : 6">{{ group.label }}</td>
              </tr>
              @for (dp of group.dataPoints; track dp.field_code) {
                <tr class="data-point-row" [class.mapped-row]="hasMappingApplied(dp)">
                  <td class="col-de-code mono">{{ dp.field_code }}</td>
                  <td class="col-field">{{ dp.field_label }}</td>
                  <td class="col-value">{{ dp.value_sent || '-' }}</td>
                  <td class="col-mapped-code mono">{{ dp.mapped_code || '-' }}</td>
                  <td class="col-mapped-label">{{ dp.mapped_label || '-' }}</td>
                  <td class="col-code-system">{{ dp.code_system || '-' }}</td>
                  @if (showVerbose()) {
                    <td class="col-verbose mono">{{ dp.coding_code || '-' }}</td>
                    <td class="col-verbose url-cell">{{ dp.identifier_system || '-' }}</td>
                    <td class="col-verbose url-cell">{{ dp.extension_url || '-' }}</td>
                  }
                </tr>
              }
            }
          </tbody>
        </table>
      </div>
    }
  `, styles: ['/* angular:styles/component:scss;432a518bc6eabf605f07e0f44590ad671daf884a4b6ed1a1acb94be2c86a3b62;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/audit/components/audit-data-points.ts */\n.data-points-container {\n  border-left: 3px solid #dee2e6;\n  margin: 4px 0;\n  overflow-x: auto;\n}\n.data-points-container.border-eoc {\n  border-left-color: #2563eb;\n}\n.data-points-container.border-sdoh {\n  border-left-color: #16a34a;\n}\n.data-points-container.border-hse {\n  border-left-color: #ea580c;\n}\n.data-points-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.75rem;\n}\n.data-points-table th,\n.data-points-table td {\n  padding: 4px 8px;\n  text-align: left;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-points-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.group-header-row td {\n  background: #f1f3f5;\n  font-weight: 600;\n  font-size: 0.6875rem;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding: 6px 8px;\n  border-bottom: 1px solid #dee2e6;\n}\n.data-point-row:hover {\n  background: #f8f9fa;\n}\n.data-point-row.mapped-row {\n  background: #fffbeb;\n}\n.data-point-row.mapped-row:hover {\n  background: #fef3c7;\n}\n.mono {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.6875rem;\n}\n.col-de-code {\n  width: 80px;\n}\n.col-field {\n  min-width: 140px;\n}\n.col-value {\n  min-width: 120px;\n}\n.col-mapped-code {\n  width: 120px;\n}\n.col-mapped-label {\n  min-width: 140px;\n}\n.col-code-system {\n  min-width: 100px;\n  font-size: 0.625rem;\n  color: #6c757d;\n}\n.col-verbose {\n  font-size: 0.625rem;\n  color: #6c757d;\n  background: #fefce8;\n}\n.col-verbose.url-cell {\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.5625rem;\n}\nthead .col-verbose {\n  background: #fef9c3;\n}\n.no-data-points {\n  text-align: center;\n  color: #6c757d;\n  font-size: 0.8125rem;\n  font-style: italic;\n  padding: 16px;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditDataPointsComponent, { className: "AuditDataPointsComponent", filePath: "src/app/audit/components/audit-data-points.ts", lineNumber: 178 });
})();

// src/app/audit/components/audit-bundle-list.ts
var _forTrack03 = ($index, $item) => $item.submission_batch_id;
function AuditBundleListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "span", 2);
    \u0275\u0275text(2, " Loading audit data... ");
    \u0275\u0275elementEnd();
  }
}
function AuditBundleListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "No submission bundles found for this patient");
    \u0275\u0275elementEnd();
  }
}
function AuditBundleListComponent_Conditional_2_For_46_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meta_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getHttpBadgeClass(meta_r5.response_status_code));
    \u0275\u0275property("title", meta_r5.response_status_line);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", meta_r5.response_status_code, " ");
  }
}
function AuditBundleListComponent_Conditional_2_For_46_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function AuditBundleListComponent_Conditional_2_For_46_Conditional_21_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37)(1, "span", 38);
    \u0275\u0275text(2, "Response Bundle:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const meta_r6 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.truncateId(meta_r6.response_bundle_id));
  }
}
function AuditBundleListComponent_Conditional_2_For_46_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 37)(2, "span", 38);
    \u0275\u0275text(3, "Channel:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37)(6, "span", 38);
    \u0275\u0275text(7, "Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 37)(10, "span", 38);
    \u0275\u0275text(11, "Response:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AuditBundleListComponent_Conditional_2_For_46_Conditional_21_Conditional_3_Conditional_13_Template, 5, 1, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meta_r6 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", meta_r6.channel_name || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", meta_r6.message_id || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", meta_r6.response_status_line || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(meta_r6.response_bundle_id ? 13 : -1);
  }
}
function AuditBundleListComponent_Conditional_2_For_46_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 33)(2, "div", 34);
    \u0275\u0275conditionalCreate(3, AuditBundleListComponent_Conditional_2_For_46_Conditional_21_Conditional_3_Template, 14, 4, "div", 35);
    \u0275\u0275element(4, "app-audit-data-points", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const bundle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_12_0 = bundle_r4.mirth_metadata) ? 3 : -1, tmp_12_0);
    \u0275\u0275advance();
    \u0275\u0275property("dataPoints", bundle_r4.data_points)("bundleType", bundle_r4.bundle_type)("showVerbose", ctx_r1.showVerbose());
  }
}
function AuditBundleListComponent_Conditional_2_For_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 23);
    \u0275\u0275listener("click", function AuditBundleListComponent_Conditional_2_For_46_Template_tr_click_0_listener() {
      const bundle_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBundle(bundle_r4.submission_batch_id));
    });
    \u0275\u0275elementStart(1, "td", 20)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 21);
    \u0275\u0275conditionalCreate(17, AuditBundleListComponent_Conditional_2_For_46_Conditional_17_Template, 2, 4, "span", 29)(18, AuditBundleListComponent_Conditional_2_For_46_Conditional_18_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, AuditBundleListComponent_Conditional_2_For_46_Conditional_21_Template, 5, 4, "tr", 31);
  }
  if (rf & 2) {
    let tmp_21_0;
    const bundle_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isBundleExpanded(bundle_r4.submission_batch_id) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getBundleTypeBadgeClass(bundle_r4.bundle_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getBundleTypeLabel(bundle_r4.bundle_type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", bundle_r4.submission_batch_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.truncateId(bundle_r4.submission_batch_id), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", bundle_r4.submission_response_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.truncateId(bundle_r4.submission_response_id), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bundle_r4.submission_dt_tm_fmt || bundle_r4.submission_dt_tm || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(bundle_r4.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bundle_r4.submission_status || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_21_0 = bundle_r4.mirth_metadata) ? 17 : 18, tmp_21_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bundle_r4.data_point_cnt);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBundleExpanded(bundle_r4.submission_batch_id) ? 21 : -1);
  }
}
function AuditBundleListComponent_Conditional_2_ForEmpty_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, " No bundles match the selected filter ");
    \u0275\u0275elementEnd()();
  }
}
function AuditBundleListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "select", 8);
    \u0275\u0275listener("ngModelChange", function AuditBundleListComponent_Conditional_2_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange($event));
    });
    \u0275\u0275elementStart(8, "option", 9);
    \u0275\u0275text(9, "All Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 10);
    \u0275\u0275text(11, "Episode of Care");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 11);
    \u0275\u0275text(13, "Client SDOH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 12);
    \u0275\u0275text(15, "Health Service Event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 13);
    \u0275\u0275listener("ngModelChange", function AuditBundleListComponent_Conditional_2_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSortChange($event));
    });
    \u0275\u0275elementStart(17, "option", 14);
    \u0275\u0275text(18, "Sort: Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 15);
    \u0275\u0275text(20, "Sort: Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 16);
    \u0275\u0275listener("click", function AuditBundleListComponent_Conditional_2_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275text(22, "\u25BC Expand All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275listener("click", function AuditBundleListComponent_Conditional_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275text(24, "\u25B6 Collapse All");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 18)(26, "table", 19)(27, "thead")(28, "tr");
    \u0275\u0275element(29, "th", 20);
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Bundle ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Response ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Submission Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 21);
    \u0275\u0275text(41, "HTTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 22);
    \u0275\u0275text(43, "Data Points");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "tbody");
    \u0275\u0275repeaterCreate(45, AuditBundleListComponent_Conditional_2_For_46_Template, 22, 15, null, null, _forTrack03, false, AuditBundleListComponent_Conditional_2_ForEmpty_47_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.bundles().length, " bundle", ctx_r1.bundles().length !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.eocCount(), " Episode, ", ctx_r1.sdohCount(), " Client, ", ctx_r1.hseCount(), " Service ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filterBundleType());
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r1.sortOrder());
    \u0275\u0275advance(29);
    \u0275\u0275repeater(ctx_r1.filteredBundles());
  }
}
var AuditBundleListComponent = class _AuditBundleListComponent {
  bundles = input.required(...ngDevMode ? [{ debugName: "bundles" }] : []);
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showVerbose = input(false, ...ngDevMode ? [{ debugName: "showVerbose" }] : []);
  /** Emits the current filtered bundles whenever the filter or input bundles change */
  filteredBundlesChange = output();
  /** Track which bundles are expanded by submission_batch_id */
  expandedBundles = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedBundles" }] : []);
  /** Current bundle type filter */
  filterBundleType = signal("ALL", ...ngDevMode ? [{ debugName: "filterBundleType" }] : []);
  /** Current sort order */
  sortOrder = signal("type", ...ngDevMode ? [{ debugName: "sortOrder" }] : []);
  /** Filtered and sorted bundles */
  filteredBundles = computed(() => {
    const all = this.bundles();
    const filter = this.filterBundleType();
    const sort = this.sortOrder();
    let result = filter === "ALL" ? [...all] : all.filter((b) => b.bundle_type === filter);
    if (sort === "date") {
      result = [...result].sort((a, b) => {
        const dateA = this.parseSortableDate(a.submission_dt_tm);
        const dateB = this.parseSortableDate(b.submission_dt_tm);
        return dateB - dateA;
      });
    }
    return result;
  }, ...ngDevMode ? [{ debugName: "filteredBundles" }] : []);
  /** Emit filtered bundles whenever they change */
  filteredBundlesEffect = effect(() => {
    this.filteredBundlesChange.emit(this.filteredBundles());
  }, ...ngDevMode ? [{ debugName: "filteredBundlesEffect" }] : []);
  /** Count of Episode of Care bundles */
  eocCount = computed(() => this.bundles().filter((b) => b.bundle_type === "SERVICE_REQUEST_EOC").length, ...ngDevMode ? [{ debugName: "eocCount" }] : []);
  /** Count of Client SDOH bundles */
  sdohCount = computed(() => this.bundles().filter((b) => b.bundle_type === "CLIENT_SDOH").length, ...ngDevMode ? [{ debugName: "sdohCount" }] : []);
  /** Count of Health Service Event bundles */
  hseCount = computed(() => this.bundles().filter((b) => b.bundle_type === "HEALTH_SERVICES").length, ...ngDevMode ? [{ debugName: "hseCount" }] : []);
  /** Toggle expansion state of a bundle */
  toggleBundle(batchId) {
    this.expandedBundles.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(batchId)) {
        newSet.delete(batchId);
      } else {
        newSet.add(batchId);
      }
      return newSet;
    });
  }
  /** Check if a bundle is expanded */
  isBundleExpanded(batchId) {
    return this.expandedBundles().has(batchId);
  }
  /** Expand all currently filtered bundles */
  expandAll() {
    const ids = new Set(this.filteredBundles().map((b) => b.submission_batch_id));
    this.expandedBundles.set(ids);
  }
  /** Collapse all bundles */
  collapseAll() {
    this.expandedBundles.set(/* @__PURE__ */ new Set());
  }
  /** Handle filter dropdown change */
  onFilterChange(value) {
    this.filterBundleType.set(value);
  }
  /** Handle sort dropdown change */
  onSortChange(value) {
    this.sortOrder.set(value);
  }
  /** Get human-readable label for bundle type */
  getBundleTypeLabel(type) {
    switch (type) {
      case "SERVICE_REQUEST_EOC":
        return "Episode of Care";
      case "CLIENT_SDOH":
        return "Client SDOH";
      case "HEALTH_SERVICES":
        return "Health Service Event";
      default:
        return type;
    }
  }
  /** Get CSS class for bundle type badge */
  getBundleTypeBadgeClass(type) {
    switch (type) {
      case "SERVICE_REQUEST_EOC":
        return "badge-eoc";
      case "CLIENT_SDOH":
        return "badge-sdoh";
      case "HEALTH_SERVICES":
        return "badge-hse";
      default:
        return "";
    }
  }
  /** Get CSS class for status badge */
  getStatusBadgeClass(status) {
    switch (status?.toUpperCase()) {
      case "ACCEPTED":
        return "status-accepted";
      case "SUBMITTED":
        return "status-submitted";
      case "ERROR":
        return "status-error";
      default:
        return "";
    }
  }
  /** Get CSS class for HTTP status badge */
  getHttpBadgeClass(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
      return "http-success";
    if (statusCode >= 400)
      return "http-error";
    return "http-other";
  }
  /** Truncate ID to first 8 characters with ellipsis */
  truncateId(id) {
    if (!id)
      return "-";
    return id.length > 8 ? id.substring(0, 8) + "..." : id;
  }
  /** Parse a date string to a sortable number (epoch ms) */
  parseSortableDate(dtTm) {
    if (!dtTm)
      return 0;
    const parsed = new Date(dtTm).getTime();
    return isNaN(parsed) ? 0 : parsed;
  }
  static \u0275fac = function AuditBundleListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditBundleListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditBundleListComponent, selectors: [["app-audit-bundle-list"]], inputs: { bundles: [1, "bundles"], loading: [1, "loading"], showVerbose: [1, "showVerbose"] }, outputs: { filteredBundlesChange: "filteredBundlesChange" }, decls: 3, vars: 1, consts: [[1, "loading-state"], [1, "empty-state"], [1, "spinner"], [1, "summary-bar"], [1, "summary-counts"], [1, "total-count"], [1, "type-count"], [1, "summary-actions"], [1, "type-filter", 3, "ngModelChange", "ngModel"], ["value", "ALL"], ["value", "SERVICE_REQUEST_EOC"], ["value", "CLIENT_SDOH"], ["value", "HEALTH_SERVICES"], [1, "sort-select", 3, "ngModelChange", "ngModel"], ["value", "type"], ["value", "date"], ["title", "Expand all", 1, "action-btn", 3, "click"], ["title", "Collapse all", 1, "action-btn", 3, "click"], [1, "table-wrapper"], [1, "bundle-table"], [1, "col-expand"], [1, "col-http"], [1, "col-count"], [1, "bundle-row", 3, "click"], [1, "expand-icon"], [1, "type-badge"], [1, "col-id", 3, "title"], [1, "col-date"], [1, "status-badge"], [1, "http-badge", 3, "class", "title"], [1, "http-na"], [1, "expanded-row"], [1, "http-badge", 3, "title"], ["colspan", "8"], [1, "expanded-content"], [1, "mirth-meta-bar"], [3, "dataPoints", "bundleType", "showVerbose"], [1, "meta-item"], [1, "meta-label"], [1, "mono"], ["colspan", "8", 1, "no-matches"]], template: function AuditBundleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AuditBundleListComponent_Conditional_0_Template, 3, 0, "div", 0)(1, AuditBundleListComponent_Conditional_1_Template, 2, 0, "div", 1)(2, AuditBundleListComponent_Conditional_2_Template, 48, 8);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.bundles().length === 0 ? 1 : 2);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, AuditDataPointsComponent], styles: ['\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-size: 0.9375rem;\n  font-style: italic;\n  padding: 3rem;\n}\n.summary-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  padding: 0.75rem 0;\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.summary-counts[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.summary-counts[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n  font-size: 0.875rem;\n}\n.summary-counts[_ngcontent-%COMP%]   .type-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #6c757d;\n}\n.summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.type-filter[_ngcontent-%COMP%], \n.sort-select[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.8125rem;\n  color: #495057;\n  background: white;\n  cursor: pointer;\n}\n.type-filter[_ngcontent-%COMP%]:focus, \n.sort-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.15);\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  background: white;\n  font-size: 0.75rem;\n  color: #495057;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.bundle-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.bundle-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.bundle-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.625rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.bundle-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.col-expand[_ngcontent-%COMP%] {\n  width: 32px;\n  text-align: center;\n  padding-left: 0.5rem;\n  padding-right: 0;\n}\n.col-count[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80px;\n}\n.bundle-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.bundle-row[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.bundle-row[_ngcontent-%COMP%]:nth-child(4n+1) {\n  background: #fafbfc;\n}\n.bundle-row[_ngcontent-%COMP%]:nth-child(4n+1):hover {\n  background: #f1f3f4;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.6875rem;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.type-badge.badge-eoc[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.type-badge.badge-sdoh[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.type-badge.badge-hse[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status-badge.status-accepted[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-submitted[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.col-http[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 56px;\n}\n.http-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.http-badge.http-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.http-badge.http-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.http-badge.http-other[_ngcontent-%COMP%] {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.http-na[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 0.75rem;\n}\n.mirth-meta-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 6px 12px;\n  margin-bottom: 4px;\n  background: #e8f4fd;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  color: #495057;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.meta-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6c757d;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.6875rem;\n}\n.col-id[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #495057;\n  cursor: default;\n}\n.col-date[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #6c757d;\n  font-size: 0.8125rem;\n}\n.expanded-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n  background: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n}\n.expanded-content[_ngcontent-%COMP%] {\n  padding: 8px 12px 12px 40px;\n}\n.no-matches[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 2rem !important;\n}\n@media (max-width: 768px) {\n  .summary-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .summary-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditBundleListComponent, [{
    type: Component,
    args: [{ selector: "app-audit-bundle-list", standalone: true, imports: [FormsModule, AuditDataPointsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (loading()) {
      <div class="loading-state">
        <span class="spinner"></span>
        Loading audit data...
      </div>
    } @else if (bundles().length === 0) {
      <div class="empty-state">No submission bundles found for this patient</div>
    } @else {
      <!-- Summary bar -->
      <div class="summary-bar">
        <div class="summary-counts">
          <span class="total-count">{{ bundles().length }} bundle{{ bundles().length !== 1 ? 's' : '' }}</span>
          <span class="type-count">
            {{ eocCount() }} Episode, {{ sdohCount() }} Client, {{ hseCount() }} Service
          </span>
        </div>
        <div class="summary-actions">
          <select
            class="type-filter"
            [ngModel]="filterBundleType()"
            (ngModelChange)="onFilterChange($event)"
          >
            <option value="ALL">All Types</option>
            <option value="SERVICE_REQUEST_EOC">Episode of Care</option>
            <option value="CLIENT_SDOH">Client SDOH</option>
            <option value="HEALTH_SERVICES">Health Service Event</option>
          </select>
          <select
            class="sort-select"
            [ngModel]="sortOrder()"
            (ngModelChange)="onSortChange($event)"
          >
            <option value="type">Sort: Type</option>
            <option value="date">Sort: Date</option>
          </select>
          <button class="action-btn" (click)="expandAll()" title="Expand all">&#9660; Expand All</button>
          <button class="action-btn" (click)="collapseAll()" title="Collapse all">&#9654; Collapse All</button>
        </div>
      </div>

      <!-- Bundle table -->
      <div class="table-wrapper">
        <table class="bundle-table">
          <thead>
            <tr>
              <th class="col-expand"></th>
              <th>Type</th>
              <th>Bundle ID</th>
              <th>Response ID</th>
              <th>Submission Date</th>
              <th>Status</th>
              <th class="col-http">HTTP</th>
              <th class="col-count">Data Points</th>
            </tr>
          </thead>
          <tbody>
            @for (bundle of filteredBundles(); track bundle.submission_batch_id) {
              <tr class="bundle-row" (click)="toggleBundle(bundle.submission_batch_id)">
                <td class="col-expand">
                  <span class="expand-icon">{{ isBundleExpanded(bundle.submission_batch_id) ? '&#9660;' : '&#9654;' }}</span>
                </td>
                <td>
                  <span class="type-badge" [class]="getBundleTypeBadgeClass(bundle.bundle_type)">
                    {{ getBundleTypeLabel(bundle.bundle_type) }}
                  </span>
                </td>
                <td class="col-id" [title]="bundle.submission_batch_id">
                  {{ truncateId(bundle.submission_batch_id) }}
                </td>
                <td class="col-id" [title]="bundle.submission_response_id">
                  {{ truncateId(bundle.submission_response_id) }}
                </td>
                <td class="col-date">{{ bundle.submission_dt_tm_fmt || bundle.submission_dt_tm || '-' }}</td>
                <td>
                  <span class="status-badge" [class]="getStatusBadgeClass(bundle.submission_status)">
                    {{ bundle.submission_status || 'N/A' }}
                  </span>
                </td>
                <td class="col-http">
                  @if (bundle.mirth_metadata; as meta) {
                    <span class="http-badge" [class]="getHttpBadgeClass(meta.response_status_code)"
                      [title]="meta.response_status_line">
                      {{ meta.response_status_code }}
                    </span>
                  } @else {
                    <span class="http-na">-</span>
                  }
                </td>
                <td class="col-count">{{ bundle.data_point_cnt }}</td>
              </tr>
              @if (isBundleExpanded(bundle.submission_batch_id)) {
                <tr class="expanded-row">
                  <td colspan="8">
                    <div class="expanded-content">
                      @if (bundle.mirth_metadata; as meta) {
                        <div class="mirth-meta-bar">
                          <span class="meta-item">
                            <span class="meta-label">Channel:</span> {{ meta.channel_name || '-' }}
                          </span>
                          <span class="meta-item">
                            <span class="meta-label">Message:</span> {{ meta.message_id || '-' }}
                          </span>
                          <span class="meta-item">
                            <span class="meta-label">Response:</span> {{ meta.response_status_line || '-' }}
                          </span>
                          @if (meta.response_bundle_id) {
                            <span class="meta-item">
                              <span class="meta-label">Response Bundle:</span>
                              <span class="mono">{{ truncateId(meta.response_bundle_id) }}</span>
                            </span>
                          }
                        </div>
                      }
                      <app-audit-data-points
                        [dataPoints]="bundle.data_points"
                        [bundleType]="bundle.bundle_type"
                        [showVerbose]="showVerbose()" />
                    </div>
                  </td>
                </tr>
              }
            } @empty {
              <tr>
                <td colspan="8" class="no-matches">
                  No bundles match the selected filter
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  `, styles: ['/* angular:styles/component:scss;e233f44aae8e41f0444c3bf1d7d5f896ea0c627dd3397993ae88d21e908e45f3;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/audit/components/audit-bundle-list.ts */\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.spinner {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  color: #6c757d;\n  font-size: 0.9375rem;\n  font-style: italic;\n  padding: 3rem;\n}\n.summary-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  padding: 0.75rem 0;\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.summary-counts {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.summary-counts .total-count {\n  font-weight: 600;\n  color: #1a365d;\n  font-size: 0.875rem;\n}\n.summary-counts .type-count {\n  font-size: 0.8125rem;\n  color: #6c757d;\n}\n.summary-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.type-filter,\n.sort-select {\n  padding: 0.375rem 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.8125rem;\n  color: #495057;\n  background: white;\n  cursor: pointer;\n}\n.type-filter:focus,\n.sort-select:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.15);\n}\n.action-btn {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  background: white;\n  font-size: 0.75rem;\n  color: #495057;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.action-btn:hover {\n  background: #e9ecef;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.bundle-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.bundle-table th,\n.bundle-table td {\n  padding: 0.5rem 0.625rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.bundle-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.col-expand {\n  width: 32px;\n  text-align: center;\n  padding-left: 0.5rem;\n  padding-right: 0;\n}\n.col-count {\n  text-align: center;\n  width: 80px;\n}\n.bundle-row {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.bundle-row:hover {\n  background: #f1f3f4;\n}\n.bundle-row:nth-child(4n+1) {\n  background: #fafbfc;\n}\n.bundle-row:nth-child(4n+1):hover {\n  background: #f1f3f4;\n}\n.expand-icon {\n  color: #6c757d;\n  font-size: 0.6875rem;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.type-badge.badge-eoc {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.type-badge.badge-sdoh {\n  background: #dcfce7;\n  color: #166534;\n}\n.type-badge.badge-hse {\n  background: #ffedd5;\n  color: #9a3412;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status-badge.status-accepted {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-submitted {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.col-http {\n  text-align: center;\n  width: 56px;\n}\n.http-badge {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.http-badge.http-success {\n  background: #d4edda;\n  color: #155724;\n}\n.http-badge.http-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.http-badge.http-other {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.http-na {\n  color: #adb5bd;\n  font-size: 0.75rem;\n}\n.mirth-meta-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 6px 12px;\n  margin-bottom: 4px;\n  background: #e8f4fd;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  color: #495057;\n}\n.meta-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.meta-label {\n  font-weight: 600;\n  color: #6c757d;\n}\n.mono {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.6875rem;\n}\n.col-id {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #495057;\n  cursor: default;\n}\n.col-date {\n  white-space: nowrap;\n  color: #6c757d;\n  font-size: 0.8125rem;\n}\n.expanded-row td {\n  padding: 0;\n  background: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n}\n.expanded-content {\n  padding: 8px 12px 12px 40px;\n}\n.no-matches {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 2rem !important;\n}\n@media (max-width: 768px) {\n  .summary-bar {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .summary-actions {\n    flex-wrap: wrap;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditBundleListComponent, { className: "AuditBundleListComponent", filePath: "src/app/audit/components/audit-bundle-list.ts", lineNumber: 478 });
})();

// src/app/audit/services/audit-export.service.ts
var AuditExportService = class _AuditExportService {
  /** CSV column headers (standard mode) */
  CSV_HEADERS = [
    "Patient Name",
    "MRN",
    "Bundle ID",
    "Response ID",
    "Bundle Type",
    "Submission Date",
    "Status",
    "HTTP Status",
    "Mirth Channel",
    "DE Code",
    "Field Name",
    "Value",
    "Mapped Code",
    "Mapped Label",
    "Code System"
  ];
  /** Additional CSV headers shown in verbose mode */
  VERBOSE_HEADERS = [
    "FHIR Code",
    "Identifier System",
    "Extension URL"
  ];
  /**
   * Export audit bundle data as a downloadable CSV file.
   * One row per data point; bundle metadata repeats on each row.
   *
   * @param patient - The patient audit response containing display_name and mrn
   * @param bundles - The bundles to export (may be filtered subset)
   * @param verbose - When true, includes additional FHIR metadata columns
   */
  exportToCSV(patient, bundles, verbose = false) {
    const csvContent = this.buildCSV(patient, bundles, verbose);
    const filename = this.buildFilename(patient);
    this.triggerDownload(csvContent, filename);
  }
  /**
   * Get human-readable label for a bundle type code.
   * Mirrors the mapping in AuditBundleListComponent.
   */
  getBundleTypeLabel(type) {
    switch (type) {
      case "SERVICE_REQUEST_EOC":
        return "Episode of Care";
      case "CLIENT_SDOH":
        return "Client SDOH";
      case "HEALTH_SERVICES":
        return "Health Service Event";
      default:
        return type;
    }
  }
  /**
   * Build the full CSV string including BOM, headers, and data rows.
   */
  buildCSV(patient, bundles, verbose) {
    const rows = [];
    const headers = verbose ? [...this.CSV_HEADERS, ...this.VERBOSE_HEADERS] : this.CSV_HEADERS;
    rows.push(headers.map((h) => this.escapeCSVValue(h)).join(","));
    for (const bundle of bundles) {
      if (bundle.data_points.length === 0) {
        rows.push(this.buildRow(patient, bundle, null, verbose));
      } else {
        for (const dataPoint of bundle.data_points) {
          rows.push(this.buildRow(patient, bundle, dataPoint, verbose));
        }
      }
    }
    return "\uFEFF" + rows.join("\r\n");
  }
  /**
   * Build a single CSV row from patient, bundle, and data point information.
   */
  buildRow(patient, bundle, dataPoint, verbose) {
    const meta = bundle.mirth_metadata;
    const values = [
      patient.display_name,
      patient.mrn,
      bundle.submission_batch_id,
      bundle.submission_response_id,
      this.getBundleTypeLabel(bundle.bundle_type),
      bundle.submission_dt_tm_fmt || bundle.submission_dt_tm || "",
      bundle.submission_status,
      meta ? String(meta.response_status_code) : "",
      meta?.channel_name ?? "",
      dataPoint?.field_code ?? "",
      dataPoint?.field_label ?? "",
      dataPoint?.value_sent ?? "",
      dataPoint?.mapped_code ?? "",
      dataPoint?.mapped_label ?? "",
      dataPoint?.code_system ?? ""
    ];
    if (verbose) {
      values.push(dataPoint?.coding_code ?? "", dataPoint?.identifier_system ?? "", dataPoint?.extension_url ?? "");
    }
    return values.map((v) => this.escapeCSVValue(this.sanitizeValue(v))).join(",");
  }
  /**
   * Escape a value for CSV per RFC 4180.
   * All text values are wrapped in double quotes for safety.
   * Internal double quotes are escaped by doubling them.
   */
  escapeCSVValue(value) {
    const escaped = value.replace(/"/g, '""');
    return `"${escaped}"`;
  }
  /**
   * Sanitize a value to ensure no "null" or "undefined" strings appear
   * and defend against CSV formula injection.
   * Converts null/undefined to empty string.
   */
  sanitizeValue(value) {
    if (value == null)
      return "";
    let str = String(value);
    if (str === "null" || str === "undefined")
      return "";
    if (/^[=+\-@\t\r]/.test(str)) {
      str = "'" + str;
    }
    return str;
  }
  /**
   * Build the download filename in the pattern:
   * MHA_PDS_Audit_{PatientName}_{MRN}_{YYYY-MM-DD}.csv
   *
   * Patient name is sanitized to remove characters invalid in filenames.
   */
  buildFilename(patient) {
    const safeName = patient.display_name.replace(/[,]/g, "").replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
    const now = /* @__PURE__ */ new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const dateStr = `${yyyy}-${mm}-${dd}`;
    return `MHA_PDS_Audit_${safeName}_${patient.mrn}_${dateStr}.csv`;
  }
  /**
   * Trigger a file download in the browser.
   * Creates a temporary anchor element, clicks it, and cleans up.
   */
  triggerDownload(csvContent, filename) {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(() => {
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    }, 100);
  }
  static \u0275fac = function AuditExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditExportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditExportService, factory: _AuditExportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditExportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/audit/audit.ts
function AuditComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AuditComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function AuditComponent_Conditional_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleVerbose());
    });
    \u0275\u0275text(8, " FHIR Detail ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 13);
    \u0275\u0275listener("click", function AuditComponent_Conditional_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onExportCSV());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-audit-bundle-list", 14);
    \u0275\u0275listener("filteredBundlesChange", function AuditComponent_Conditional_7_Template_app_audit_bundle_list_filteredBundlesChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilteredBundlesChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedPatient().display_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("MRN: ", ctx_r0.selectedPatient().mrn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.bundleCountLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.showVerbose());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canExport());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.exportLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("bundles", ctx_r0.bundles())("loading", ctx_r0.loadingBundles())("showVerbose", ctx_r0.showVerbose());
  }
}
function AuditComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2, "Select a patient to view submission audit");
    \u0275\u0275elementEnd()();
  }
}
function AuditComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275text(2, " Loading audit data... ");
    \u0275\u0275elementEnd();
  }
}
var AuditComponent = class _AuditComponent {
  auditService = inject(AuditService);
  auditExportService = inject(AuditExportService);
  /** Currently selected patient from the audit service */
  selectedPatient = this.auditService.selectedPatient;
  /** Audit bundles for the selected patient */
  bundles = this.auditService.auditBundles;
  /** Whether bundles are currently loading */
  loadingBundles = this.auditService.loadingBundles;
  /** Error message from audit service */
  error = this.auditService.error;
  /** Currently filtered bundles from the bundle list component */
  _filteredBundles = signal([], ...ngDevMode ? [{ debugName: "_filteredBundles" }] : []);
  /** Whether verbose FHIR detail columns are shown */
  showVerbose = signal(false, ...ngDevMode ? [{ debugName: "showVerbose" }] : []);
  /** Bundle count label for display */
  bundleCountLabel = computed(() => {
    const count = this.bundles().length;
    return `${count} bundle${count !== 1 ? "s" : ""}`;
  }, ...ngDevMode ? [{ debugName: "bundleCountLabel" }] : []);
  /** Whether the export button should be enabled */
  canExport = computed(() => this._filteredBundles().length > 0 && !this.loadingBundles(), ...ngDevMode ? [{ debugName: "canExport" }] : []);
  /** Label for the export button showing count of bundles to export */
  exportLabel = computed(() => {
    const count = this._filteredBundles().length;
    return `Export CSV (${count} bundle${count !== 1 ? "s" : ""})`;
  }, ...ngDevMode ? [{ debugName: "exportLabel" }] : []);
  /**
   * Handle patient selection from the selector dropdown.
   * Loads all submission bundles for the selected patient.
   */
  onPatientSelected(personId) {
    this.auditService.loadPatientAuditBundles(personId);
  }
  /**
   * Track filtered bundles emitted from the bundle list component.
   * Used to make CSV export filter-aware.
   */
  onFilteredBundlesChange(bundles) {
    this._filteredBundles.set(bundles);
  }
  /** Toggle verbose FHIR detail mode */
  toggleVerbose() {
    this.showVerbose.update((v) => !v);
  }
  /**
   * Export the currently filtered bundles as a CSV file.
   * Respects verbose toggle for additional columns.
   */
  onExportCSV() {
    const patient = this.selectedPatient();
    if (!patient)
      return;
    const bundles = this._filteredBundles();
    if (bundles.length === 0)
      return;
    this.auditExportService.exportToCSV(patient, bundles, this.showVerbose());
  }
  static \u0275fac = function AuditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditComponent, selectors: [["app-audit"]], decls: 10, vars: 2, consts: [[1, "audit-container"], [1, "audit-header"], [3, "patientSelected"], [1, "audit-content"], [1, "audit-error"], [1, "audit-placeholder"], [1, "audit-loading"], [1, "error-icon"], [1, "audit-patient-info"], [1, "patient-name"], [1, "patient-mrn"], [1, "bundle-count"], ["title", "Show/hide additional FHIR metadata (identifier systems, coded values, extension URLs)", 1, "verbose-toggle", 3, "click"], ["title", "Export audit data as CSV spreadsheet", 1, "export-btn", 3, "click", "disabled"], [3, "filteredBundlesChange", "bundles", "loading", "showVerbose"], [1, "spinner"]], template: function AuditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Patient Submission Audit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-audit-patient-selector", 2);
      \u0275\u0275listener("patientSelected", function AuditComponent_Template_app_audit_patient_selector_patientSelected_4_listener($event) {
        return ctx.onPatientSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275conditionalCreate(6, AuditComponent_Conditional_6_Template, 5, 1, "div", 4);
      \u0275\u0275conditionalCreate(7, AuditComponent_Conditional_7_Template, 12, 10)(8, AuditComponent_Conditional_8_Template, 3, 0, "div", 5)(9, AuditComponent_Conditional_9_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.error() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedPatient() ? 7 : !ctx.loadingBundles() ? 8 : 9);
    }
  }, dependencies: [AuditPatientSelectorComponent, AuditBundleListComponent], styles: ['\n\n.audit-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.audit-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.audit-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n  white-space: nowrap;\n}\n.audit-content[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.audit-patient-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n  font-size: 0.9375rem;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .patient-mrn[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.8125rem;\n  color: #495057;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .bundle-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.8125rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .verbose-toggle[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border: 1px solid #d97706;\n  border-radius: 4px;\n  background: white;\n  color: #d97706;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .verbose-toggle[_ngcontent-%COMP%]:hover {\n  background: #fffbeb;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .verbose-toggle.active[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: white;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid #2563eb;\n  border-radius: 4px;\n  background: white;\n  color: #2563eb;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n  color: white;\n}\n.audit-patient-info[_ngcontent-%COMP%]   .export-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.audit-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.audit-error[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n  flex-shrink: 0;\n}\n.audit-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n  color: #6c757d;\n  text-align: center;\n}\n.audit-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  font-size: 0.9375rem;\n}\n.audit-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .audit-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .audit-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .audit-patient-info[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .audit-patient-info[_ngcontent-%COMP%]   .bundle-count[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditComponent, [{
    type: Component,
    args: [{ selector: "app-audit", standalone: true, imports: [AuditPatientSelectorComponent, AuditBundleListComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="audit-container">\n  <div class="audit-header">\n    <h2>Patient Submission Audit</h2>\n    <app-audit-patient-selector (patientSelected)="onPatientSelected($event)" />\n  </div>\n\n  <div class="audit-content">\n    @if (error()) {\n      <div class="audit-error">\n        <span class="error-icon">!</span>\n        <span>{{ error() }}</span>\n      </div>\n    }\n\n    @if (selectedPatient()) {\n      <div class="audit-patient-info">\n        <span class="patient-name">{{ selectedPatient()!.display_name }}</span>\n        <span class="patient-mrn">MRN: {{ selectedPatient()!.mrn }}</span>\n        <span class="bundle-count">{{ bundleCountLabel() }}</span>\n        <button\n          class="verbose-toggle"\n          [class.active]="showVerbose()"\n          (click)="toggleVerbose()"\n          title="Show/hide additional FHIR metadata (identifier systems, coded values, extension URLs)">\n          FHIR Detail\n        </button>\n        <button\n          class="export-btn"\n          [disabled]="!canExport()"\n          (click)="onExportCSV()"\n          title="Export audit data as CSV spreadsheet">\n          {{ exportLabel() }}\n        </button>\n      </div>\n      <app-audit-bundle-list\n        [bundles]="bundles()"\n        [loading]="loadingBundles()"\n        [showVerbose]="showVerbose()"\n        (filteredBundlesChange)="onFilteredBundlesChange($event)" />\n    } @else if (!loadingBundles()) {\n      <div class="audit-placeholder">\n        <p>Select a patient to view submission audit</p>\n      </div>\n    } @else {\n      <div class="audit-loading">\n        <span class="spinner"></span>\n        Loading audit data...\n      </div>\n    }\n  </div>\n</div>\n', styles: ['/* src/app/audit/audit.scss */\n.audit-container {\n  padding: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.audit-header {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.audit-header h2 {\n  margin: 0;\n  color: #1a365d;\n  font-size: 1.5rem;\n  white-space: nowrap;\n}\n.audit-content {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.audit-patient-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.audit-patient-info .patient-name {\n  font-weight: 600;\n  color: #1a365d;\n  font-size: 0.9375rem;\n}\n.audit-patient-info .patient-mrn {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n  font-size: 0.8125rem;\n  color: #495057;\n}\n.audit-patient-info .bundle-count {\n  margin-left: auto;\n  font-size: 0.8125rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.audit-patient-info .verbose-toggle {\n  padding: 5px 12px;\n  border: 1px solid #d97706;\n  border-radius: 4px;\n  background: white;\n  color: #d97706;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.audit-patient-info .verbose-toggle:hover {\n  background: #fffbeb;\n}\n.audit-patient-info .verbose-toggle.active {\n  background: #d97706;\n  color: white;\n}\n.audit-patient-info .export-btn {\n  padding: 6px 16px;\n  border: 1px solid #2563eb;\n  border-radius: 4px;\n  background: white;\n  color: #2563eb;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s, color 0.15s;\n  white-space: nowrap;\n}\n.audit-patient-info .export-btn:hover:not(:disabled) {\n  background: #2563eb;\n  color: white;\n}\n.audit-patient-info .export-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.audit-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.audit-error .error-icon {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n  flex-shrink: 0;\n}\n.audit-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n  color: #6c757d;\n  text-align: center;\n}\n.audit-placeholder p {\n  margin: 0.25rem 0;\n  font-size: 0.9375rem;\n}\n.audit-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.spinner {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .audit-container {\n    padding: 1rem;\n  }\n  .audit-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .audit-patient-info {\n    flex-wrap: wrap;\n  }\n  .audit-patient-info .bundle-count {\n    margin-left: 0;\n  }\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditComponent, { className: "AuditComponent", filePath: "src/app/audit/audit.ts", lineNumber: 20 });
})();
export {
  AuditComponent
};
