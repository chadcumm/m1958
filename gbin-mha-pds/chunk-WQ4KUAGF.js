import {
  Router
} from "./chunk-YNCTTABP.js";
import {
  MhaPdsConfigurationService
} from "./chunk-SI6EI52T.js";
import {
  CclServiceWrapperService
} from "./chunk-6VEXJXVI.js";
import {
  CommonModule,
  FormsModule,
  NgForOf,
  NgIf,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-KVCK6FKY.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
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
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-N6ZQYAD3.js";
import {
  __spreadValues
} from "./chunk-I7D2VZMI.js";

// src/app/patients/models/patient.model.ts
var DEFAULT_PATIENT_FILTERS = {
  search_text: "",
  submission_status: "",
  start_date: "",
  end_date: "",
  functional_centre: "",
  program_name: "",
  page: 1,
  page_size: 50
};
var SUBMISSION_STATUS_OPTIONS = [
  { value: "", label: "All Statuses" },
  { value: "PENDING", label: "Pending" },
  { value: "SUBMITTED", label: "Submitted" },
  { value: "ERROR", label: "Error" },
  { value: "PARTIAL", label: "Partial" }
];

// src/app/patients/services/patients.service.ts
var PatientsService = class _PatientsService {
  cclService = inject(CclServiceWrapperService);
  // State signals
  _patients = signal([], ...ngDevMode ? [{ debugName: "_patients" }] : []);
  _totalCount = signal(0, ...ngDevMode ? [{ debugName: "_totalCount" }] : []);
  _currentPage = signal(1, ...ngDevMode ? [{ debugName: "_currentPage" }] : []);
  _pageSize = signal(50, ...ngDevMode ? [{ debugName: "_pageSize" }] : []);
  _filters = signal(__spreadValues({}, DEFAULT_PATIENT_FILTERS), ...ngDevMode ? [{ debugName: "_filters" }] : []);
  _loadingList = signal(false, ...ngDevMode ? [{ debugName: "_loadingList" }] : []);
  _loadingDetail = signal(false, ...ngDevMode ? [{ debugName: "_loadingDetail" }] : []);
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : []);
  _selectedPatient = signal(null, ...ngDevMode ? [{ debugName: "_selectedPatient" }] : []);
  _fieldValidations = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "_fieldValidations" }] : []);
  _validatingFields = signal(false, ...ngDevMode ? [{ debugName: "_validatingFields" }] : []);
  _removing = signal(false, ...ngDevMode ? [{ debugName: "_removing" }] : []);
  _reverting = signal(false, ...ngDevMode ? [{ debugName: "_reverting" }] : []);
  // Public readonly accessors
  patients = this._patients.asReadonly();
  totalCount = this._totalCount.asReadonly();
  currentPage = this._currentPage.asReadonly();
  pageSize = this._pageSize.asReadonly();
  filters = this._filters.asReadonly();
  loading = this._loadingList.asReadonly();
  loadingDetail = this._loadingDetail.asReadonly();
  error = this._error.asReadonly();
  selectedPatient = this._selectedPatient.asReadonly();
  fieldValidations = this._fieldValidations.asReadonly();
  validatingFields = this._validatingFields.asReadonly();
  removing = this._removing.asReadonly();
  reverting = this._reverting.asReadonly();
  // Computed values
  totalPages = computed(() => Math.ceil(this._totalCount() / this._pageSize()) || 1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  hasNextPage = computed(() => this._currentPage() < this.totalPages(), ...ngDevMode ? [{ debugName: "hasNextPage" }] : []);
  hasPrevPage = computed(() => this._currentPage() > 1, ...ngDevMode ? [{ debugName: "hasPrevPage" }] : []);
  selectedClient = computed(() => this._selectedPatient()?.client ?? null, ...ngDevMode ? [{ debugName: "selectedClient" }] : []);
  selectedEpisodes = computed(() => this._selectedPatient()?.episodes ?? [], ...ngDevMode ? [{ debugName: "selectedEpisodes" }] : []);
  /**
   * Load patients with optional filter updates
   */
  loadPatients(filters) {
    this._loadingList.set(true);
    this._error.set(null);
    if (filters) {
      this.updateFilters(filters);
    }
    const currentFilters = this._filters();
    const requestData = JSON.stringify({
      patient_filter_params: {
        search_text: currentFilters.search_text,
        submission_status: currentFilters.submission_status,
        start_date: currentFilters.start_date,
        end_date: currentFilters.end_date,
        functional_centre: currentFilters.functional_centre,
        program_name: currentFilters.program_name,
        page: String(this._currentPage()),
        page_size: String(this._pageSize())
      }
    });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getPatients",
          parameters: {
            requestType: "getPatients",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getPatients");
        if (response) {
          const patients = response.patients || response.PATIENTS || [];
          const totalCount = response.total_count ?? response.TOTAL_COUNT ?? 0;
          const page = response.page ?? response.PAGE ?? 1;
          const pageSize = response.page_size ?? response.PAGE_SIZE ?? 50;
          const normalizedPatients = patients.map((p) => this.normalizePatientListItem(p));
          this._patients.set(normalizedPatients);
          this._totalCount.set(totalCount);
          this._currentPage.set(page);
          this._pageSize.set(pageSize);
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to parse patients response");
      }
      this._loadingList.set(false);
    });
  }
  /**
   * Load detailed information for a single patient
   */
  loadPatientDetail(clientId) {
    this._loadingDetail.set(true);
    this._error.set(null);
    const requestData = JSON.stringify({ patient_detail_params: { client_id: String(clientId) } });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "getPatientDetail",
          parameters: {
            requestType: "getPatientDetail",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("getPatientDetail");
        const foundInd = response?.found_ind ?? response?.FOUND_IND ?? 0;
        if (response && foundInd) {
          this._selectedPatient.set(this.normalizePatientDetail(response));
        } else {
          this._error.set("Patient not found");
          this._selectedPatient.set(null);
        }
      } catch (err) {
        this._error.set(err instanceof Error ? err.message : "Failed to load patient detail");
      }
      this._loadingDetail.set(false);
    });
  }
  /**
   * Update filter values
   */
  updateFilters(filters) {
    this._filters.update((current) => __spreadValues(__spreadValues({}, current), filters));
  }
  /**
   * Reset filters to defaults
   */
  resetFilters() {
    this._filters.set(__spreadValues({}, DEFAULT_PATIENT_FILTERS));
    this._currentPage.set(1);
  }
  /**
   * Navigate to next page
   */
  nextPage() {
    if (this.hasNextPage()) {
      this._currentPage.update((p) => p + 1);
      this.loadPatients();
    }
  }
  /**
   * Navigate to previous page
   */
  prevPage() {
    if (this.hasPrevPage()) {
      this._currentPage.update((p) => p - 1);
      this.loadPatients();
    }
  }
  /**
   * Navigate to specific page
   */
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this._currentPage.set(page);
      this.loadPatients();
    }
  }
  /**
   * Clear selected patient
   */
  clearSelectedPatient() {
    this._selectedPatient.set(null);
  }
  /**
   * Remove (soft-delete) a patient from the MHA PDS system
   * Sets active_ind=0 on all CLIENT, EPISODE, and SERVICE records
   * @param personId - The person_id of the patient to remove
   * @param onSuccess - Optional callback on successful removal
   * @param onError - Optional callback on error
   */
  removePatient(personId, onSuccess, onError) {
    this._removing.set(true);
    this._error.set(null);
    const requestData = JSON.stringify({
      remove_patient_params: {
        person_id: String(personId),
        commit_mode: 1
      }
    });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "removePatient",
          parameters: {
            requestType: "removePatient",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("removePatient");
        const status = response?.status ?? response?.STATUS ?? "F";
        const message = response?.message ?? response?.MESSAGE ?? "Unknown error";
        if (status === "S") {
          this._selectedPatient.set(null);
          this.loadPatients();
          onSuccess?.(message);
        } else {
          this._error.set(message);
          onError?.(message);
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Failed to remove patient";
        this._error.set(errorMsg);
        onError?.(errorMsg);
      }
      this._removing.set(false);
    });
  }
  /**
   * Select a patient by client ID (from list click)
   * This triggers loading the full detail
   */
  selectPatient(clientId) {
    this.loadPatientDetail(clientId);
  }
  /**
   * Validate field mappings for the currently selected patient
   * @param fields Array of field codes and source values to validate
   */
  validateFieldMappings(fields) {
    if (fields.length === 0)
      return;
    this._validatingFields.set(true);
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "validateFieldMappings",
          parameters: {
            requestType: "validateFieldMappings",
            requestId: Date.now(),
            fields
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("validateFieldMappings");
        if (response && (response.status === "S" || response.STATUS === "S")) {
          const validationMap = /* @__PURE__ */ new Map();
          const responseFields = response.fields ?? response.FIELDS ?? [];
          responseFields.forEach((f) => {
            const result = {
              field_code: f.field_code ?? f.FIELD_CODE ?? "",
              source_value: f.source_value ?? f.SOURCE_VALUE ?? "",
              is_valid: (f.is_valid ?? f.IS_VALID ?? 0) === 1,
              error_code: f.error_code ?? f.ERROR_CODE ?? "",
              error_message: f.error_message ?? f.ERROR_MESSAGE ?? "",
              mapped_code: f.mapped_code ?? f.MAPPED_CODE ?? "",
              mapped_label: f.mapped_label ?? f.MAPPED_LABEL ?? ""
            };
            validationMap.set(result.field_code, result);
            if (result.source_value) {
              validationMap.set(`${result.field_code}:${result.source_value}`, result);
            }
          });
          this._fieldValidations.set(validationMap);
        }
      } catch (err) {
        console.error("Failed to validate field mappings:", err);
      }
      this._validatingFields.set(false);
    });
  }
  /**
   * Clear field validation results
   */
  clearFieldValidations() {
    this._fieldValidations.set(/* @__PURE__ */ new Map());
  }
  /**
   * Revert patient records from ACCEPTED back to PENDING status
   * @param personId - Patient person ID
   * @param recordType - 'ALL' for all records, or specific type (EPISODE, CLIENT, SERVICE)
   * @param serviceRecordIds - Optional specific service record IDs when reverting individual services
   * @param onSuccess - Optional callback on successful revert
   * @param onError - Optional callback on error
   */
  revertPatientRecords(personId, recordType = "ALL", serviceRecordIds, onSuccess, onError) {
    this._reverting.set(true);
    this._error.set(null);
    const requestData = JSON.stringify({
      revert_patient_params: {
        person_id: String(personId),
        record_type: recordType,
        service_record_ids: serviceRecordIds || [],
        commit_mode: 1
      }
    });
    this.cclService.load({
      customScript: {
        script: [{
          name: "gbin_mha_pds_service:group1",
          run: "pre",
          id: "revertPatientRecords",
          parameters: {
            requestType: "revertPatientRecords",
            requestId: Date.now(),
            requestData
          }
        }],
        clearPatientSource: true
      }
    }, [{ personId: 0, encntrId: 0 }], () => {
      try {
        const response = this.cclService.get("revertPatientRecords");
        const status = response?.status ?? response?.STATUS ?? "F";
        const message = response?.message ?? response?.MESSAGE ?? "Unknown error";
        if (status === "S") {
          const patient = this._selectedPatient();
          if (patient && patient.episodes) {
            patient.episodes.forEach((episode) => {
              if (recordType === "ALL" || recordType === "EPISODE") {
                episode.submission_status = "PENDING";
              }
              if (episode.services && (recordType === "ALL" || recordType === "SERVICE")) {
                episode.services.forEach((service) => {
                  if (!serviceRecordIds || serviceRecordIds.includes(String(service.service_id))) {
                    service.submission_status = "PENDING";
                  }
                });
              }
            });
            this._selectedPatient.set(patient);
          }
          onSuccess?.(message);
        } else {
          this._error.set(message);
          onError?.(message);
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Failed to revert patient records";
        this._error.set(errorMsg);
        onError?.(errorMsg);
      }
      this._reverting.set(false);
    });
  }
  /**
   * Normalize patient list item from CCL uppercase to TypeScript lowercase property names
   */
  normalizePatientListItem(item) {
    return {
      client_id: item.client_id ?? item.CLIENT_ID ?? 0,
      person_id: item.person_id ?? item.PERSON_ID ?? 0,
      episode_id: item.episode_id ?? item.EPISODE_ID ?? 0,
      first_name: item.first_name ?? item.FIRST_NAME ?? "",
      last_name: item.last_name ?? item.LAST_NAME ?? "",
      date_of_birth: item.date_of_birth ?? item.DATE_OF_BIRTH ?? "",
      date_of_birth_formatted: item.date_of_birth_formatted ?? item.DATE_OF_BIRTH_FORMATTED ?? "",
      mrn: item.mrn ?? item.MRN ?? "",
      hcn: item.hcn ?? item.HCN ?? "",
      submission_status: item.submission_status ?? item.SUBMISSION_STATUS ?? "",
      functional_centre: item.functional_centre ?? item.FUNCTIONAL_CENTRE ?? "",
      functional_centre_mapped: item.functional_centre_mapped ?? item.FUNCTIONAL_CENTRE_MAPPED ?? "",
      program_name: item.program_name ?? item.PROGRAM_NAME ?? "",
      episode_count: item.episode_count ?? item.EPISODE_COUNT ?? 0,
      latest_episode_date: item.latest_episode_date ?? item.LATEST_EPISODE_DATE ?? "",
      latest_episode_date_formatted: item.latest_episode_date_formatted ?? item.LATEST_EPISODE_DATE_FORMATTED ?? "",
      sdoh_complete_ind: item.sdoh_complete_ind ?? item.SDOH_COMPLETE_IND ?? 0
    };
  }
  /**
   * Normalize patient detail response from CCL uppercase to TypeScript lowercase
   */
  normalizePatientDetail(response) {
    const client = response.client ?? response.CLIENT;
    const episodes = response.episodes ?? response.EPISODES ?? [];
    return {
      found_ind: response.found_ind ?? response.FOUND_IND ?? 0,
      client: this.normalizeClientData(client),
      episodes: episodes.map((ep) => this.normalizeEpisode(ep))
    };
  }
  /**
   * Normalize client data (DE01-DE04)
   */
  normalizeClientData(client) {
    if (!client) {
      return {};
    }
    return {
      client_id: client.client_id ?? client.CLIENT_ID ?? 0,
      person_id: client.person_id ?? client.PERSON_ID ?? 0,
      episode_id: client.episode_id ?? client.EPISODE_ID ?? 0,
      extracted_dt_tm: client.extracted_dt_tm ?? client.EXTRACTED_DT_TM ?? "",
      extracted_dt_tm_formatted: client.extracted_dt_tm_formatted ?? client.EXTRACTED_DT_TM_FORMATTED ?? "",
      // DE01 - Client Information
      de01_001_first_name: client.de01_001_first_name ?? client.DE01_001_FIRST_NAME ?? "",
      de01_002_middle_name: client.de01_002_middle_name ?? client.DE01_002_MIDDLE_NAME ?? "",
      de01_003_last_name: client.de01_003_last_name ?? client.DE01_003_LAST_NAME ?? "",
      de01_004_date_of_birth: client.de01_004_date_of_birth ?? client.DE01_004_DATE_OF_BIRTH ?? "",
      de01_004_date_of_birth_formatted: client.de01_004_date_of_birth_formatted ?? client.DE01_004_DATE_OF_BIRTH_FORMATTED ?? "",
      de01_005_estimated_dob_flag: client.de01_005_estimated_dob_flag ?? client.DE01_005_ESTIMATED_DOB_FLAG ?? 0,
      // DE02 - Client Identifiers
      de02_001_mrn: client.de02_001_mrn ?? client.DE02_001_MRN ?? "",
      de02_002_vendor_id: client.de02_002_vendor_id ?? client.DE02_002_VENDOR_ID ?? "",
      de02_003_hcn: client.de02_003_hcn ?? client.DE02_003_HCN ?? "",
      de02_004_hcn_issuing_authority: client.de02_004_hcn_issuing_authority ?? client.DE02_004_HCN_ISSUING_AUTHORITY ?? "",
      de02_005_identifier_type: client.de02_005_identifier_type ?? client.DE02_005_IDENTIFIER_TYPE ?? "",
      // DE03 - Client Address
      de03_001_address_use: client.de03_001_address_use ?? client.DE03_001_ADDRESS_USE ?? "",
      de03_002_city: client.de03_002_city ?? client.DE03_002_CITY ?? "",
      de03_003_province: client.de03_003_province ?? client.DE03_003_PROVINCE ?? "",
      de03_004_postal_code: client.de03_004_postal_code ?? client.DE03_004_POSTAL_CODE ?? "",
      // DE04 - SDOH fields
      de04_001_sdoh_effective_date: client.de04_001_sdoh_effective_date ?? client.DE04_001_SDOH_EFFECTIVE_DATE ?? "",
      de04_002_ethnicity: client.de04_002_ethnicity ?? client.DE04_002_ETHNICITY ?? "",
      de04_003_religion: client.de04_003_religion ?? client.DE04_003_RELIGION ?? "",
      de04_004_first_language: client.de04_004_first_language ?? client.DE04_004_FIRST_LANGUAGE ?? "",
      de04_005_service_language: client.de04_005_service_language ?? client.DE04_005_SERVICE_LANGUAGE ?? "",
      de04_006_official_language: client.de04_006_official_language ?? client.DE04_006_OFFICIAL_LANGUAGE ?? "",
      de04_007_gender_identity: client.de04_007_gender_identity ?? client.DE04_007_GENDER_IDENTITY ?? "",
      de04_008_sexual_orientation: client.de04_008_sexual_orientation ?? client.DE04_008_SEXUAL_ORIENTATION ?? "",
      de04_009_year_arrived_canada: client.de04_009_year_arrived_canada ?? client.DE04_009_YEAR_ARRIVED_CANADA ?? "",
      de04_010_born_in_canada: client.de04_010_born_in_canada ?? client.DE04_010_BORN_IN_CANADA ?? "",
      de04_012_citizenship_status: client.de04_012_citizenship_status ?? client.DE04_012_CITIZENSHIP_STATUS ?? "",
      de04_013_education: client.de04_013_education ?? client.DE04_013_EDUCATION ?? "",
      de04_014_employment: client.de04_014_employment ?? client.DE04_014_EMPLOYMENT ?? "",
      de04_015_income_source: client.de04_015_income_source ?? client.DE04_015_INCOME_SOURCE ?? "",
      de04_016_marital_status: client.de04_016_marital_status ?? client.DE04_016_MARITAL_STATUS ?? "",
      de04_017_housing: client.de04_017_housing ?? client.DE04_017_HOUSING ?? "",
      de04_018_household_income: client.de04_018_household_income ?? client.DE04_018_HOUSEHOLD_INCOME ?? "",
      de04_019_income_supports: client.de04_019_income_supports ?? client.DE04_019_INCOME_SUPPORTS ?? "",
      de04_020_legal_status: client.de04_020_legal_status ?? client.DE04_020_LEGAL_STATUS ?? "",
      de04_021_pre_existing_conditions: client.de04_021_pre_existing_condition ?? client.DE04_021_PRE_EXISTING_CONDITION ?? client.de04_021_pre_existing_conditions ?? "",
      // Metadata
      sdoh_complete_ind: client.sdoh_complete_ind ?? client.SDOH_COMPLETE_IND ?? 0,
      sdoh_missing_fields: client.sdoh_missing_fields ?? client.SDOH_MISSING_FIELDS ?? "",
      data_modified_ind: client.data_modified_ind ?? client.DATA_MODIFIED_IND ?? 0,
      submission_status: client.submission_status ?? client.SUBMISSION_STATUS ?? "",
      submission_dt_tm: client.submission_dt_tm ?? client.SUBMISSION_DT_TM ?? "",
      submission_dt_tm_formatted: client.submission_dt_tm_formatted ?? client.SUBMISSION_DT_TM_FORMATTED ?? "",
      submission_batch_id: client.submission_batch_id ?? client.SUBMISSION_BATCH_ID ?? "",
      submission_response_id: client.submission_response_id ?? client.SUBMISSION_RESPONSE_ID ?? ""
    };
  }
  /**
   * Normalize episode data (DE05, DE06, DE09)
   */
  normalizeEpisode(episode) {
    const services = episode.services ?? episode.SERVICES ?? [];
    const appointments = episode.appointments ?? episode.APPOINTMENTS ?? [];
    return {
      episode_id: episode.episode_id ?? episode.EPISODE_ID ?? 0,
      person_id: episode.person_id ?? episode.PERSON_ID ?? 0,
      encntr_id: episode.encntr_id ?? episode.ENCNTR_ID ?? 0,
      episode_identifier: episode.episode_identifier ?? episode.EPISODE_IDENTIFIER ?? "",
      // DE05 - Referral
      referral_id: episode.referral_id ?? episode.REFERRAL_ID ?? "",
      referral_received_date: episode.referral_received_date ?? episode.REFERRAL_RECEIVED_DATE ?? "",
      referral_received_date_formatted: episode.referral_received_date_formatted ?? episode.REFERRAL_RECEIVED_DATE_FORMATTED ?? "",
      referral_source: episode.referral_source ?? episode.REFERRAL_SOURCE ?? "",
      referral_source_type: episode.referral_source_type ?? episode.REFERRAL_SOURCE_TYPE ?? "",
      referral_type: episode.referral_type ?? episode.REFERRAL_TYPE ?? "",
      // DE06 - Episode of Care
      episode_of_care_id: episode.episode_of_care_id ?? episode.EPISODE_OF_CARE_ID ?? "",
      episode_of_care_status: episode.episode_of_care_status ?? episode.EPISODE_OF_CARE_STATUS ?? "",
      first_contact_date: episode.first_contact_date ?? episode.FIRST_CONTACT_DATE ?? "",
      first_contact_date_formatted: episode.first_contact_date_formatted ?? episode.FIRST_CONTACT_DATE_FORMATTED ?? "",
      eligibility_screening_date: episode.eligibility_screening_date ?? episode.ELIGIBILITY_SCREENING_DATE ?? "",
      eligibility_screening_date_formatted: episode.eligibility_screening_date_formatted ?? episode.ELIGIBILITY_SCREENING_DATE_FORMATTED ?? "",
      initial_assessment_date: episode.initial_assessment_date ?? episode.INITIAL_ASSESSMENT_DATE ?? "",
      initial_assessment_date_formatted: episode.initial_assessment_date_formatted ?? episode.INITIAL_ASSESSMENT_DATE_FORMATTED ?? "",
      scheduled_appointment_date: episode.scheduled_appointment_date ?? episode.SCHEDULED_APPOINTMENT_DATE ?? "",
      scheduled_appointment_date_formatted: episode.scheduled_appointment_date_formatted ?? episode.SCHEDULED_APPOINTMENT_DATE_FORMATTED ?? "",
      appt_rescheduled_reason: episode.appt_rescheduled_reason ?? episode.APPT_RESCHEDULED_REASON ?? "",
      service_initiation_date: episode.service_initiation_date ?? episode.SERVICE_INITIATION_DATE ?? "",
      service_initiation_date_formatted: episode.service_initiation_date_formatted ?? episode.SERVICE_INITIATION_DATE_FORMATTED ?? "",
      service_enrollment_date: episode.service_enrollment_date ?? episode.SERVICE_ENROLLMENT_DATE ?? "",
      service_enrollment_date_formatted: episode.service_enrollment_date_formatted ?? episode.SERVICE_ENROLLMENT_DATE_FORMATTED ?? "",
      service_termination_date: episode.service_termination_date ?? episode.SERVICE_TERMINATION_DATE ?? "",
      service_termination_date_formatted: episode.service_termination_date_formatted ?? episode.SERVICE_TERMINATION_DATE_FORMATTED ?? "",
      service_termination_reason: episode.service_termination_reason ?? episode.SERVICE_TERMINATION_REASON ?? "",
      // DE09 - Health Program
      health_program_number: episode.health_program_number ?? episode.HEALTH_PROGRAM_NUMBER ?? "",
      health_program_number_mapped: episode.health_program_number_mapped ?? episode.HEALTH_PROGRAM_NUMBER_MAPPED ?? "",
      health_program_name: episode.health_program_name ?? episode.HEALTH_PROGRAM_NAME ?? "",
      functional_centre: episode.functional_centre ?? episode.FUNCTIONAL_CENTRE ?? "",
      functional_centre_mapped: episode.functional_centre_mapped ?? episode.FUNCTIONAL_CENTRE_MAPPED ?? "",
      // Submission
      submission_status: episode.submission_status ?? episode.SUBMISSION_STATUS ?? "",
      submission_dt_tm: episode.submission_dt_tm ?? episode.SUBMISSION_DT_TM ?? "",
      submission_dt_tm_formatted: episode.submission_dt_tm_formatted ?? episode.SUBMISSION_DT_TM_FORMATTED ?? "",
      submission_batch_id: episode.submission_batch_id ?? episode.SUBMISSION_BATCH_ID ?? "",
      submission_response_id: episode.submission_response_id ?? episode.SUBMISSION_RESPONSE_ID ?? "",
      error_message: episode.error_message ?? episode.ERROR_MESSAGE ?? "",
      // Services
      service_cnt: episode.service_cnt ?? episode.SERVICE_CNT ?? services.length,
      services: services.map((svc) => this.normalizeService(svc)),
      // Appointments (DE06.006/DE06.007)
      appointment_cnt: episode.appointment_cnt ?? episode.APPOINTMENT_CNT ?? appointments.length,
      appointments: appointments.map((appt) => this.normalizeAppointment(appt))
    };
  }
  /**
   * Normalize appointment data (DE06.006/DE06.007)
   */
  normalizeAppointment(appointment) {
    return {
      appointment_id: appointment.appointment_id ?? appointment.APPOINTMENT_ID ?? 0,
      episode_id: appointment.episode_id ?? appointment.EPISODE_ID ?? 0,
      sch_event_id: appointment.sch_event_id ?? appointment.SCH_EVENT_ID ?? 0,
      appointment_start: appointment.appointment_start ?? appointment.APPOINTMENT_START ?? "",
      appointment_start_formatted: appointment.appointment_start_formatted ?? appointment.APPOINTMENT_START_FORMATTED ?? "",
      appointment_end: appointment.appointment_end ?? appointment.APPOINTMENT_END ?? "",
      appointment_end_formatted: appointment.appointment_end_formatted ?? appointment.APPOINTMENT_END_FORMATTED ?? "",
      duration_minutes: appointment.duration_minutes ?? appointment.DURATION_MINUTES ?? 0,
      status: appointment.status ?? appointment.STATUS ?? "",
      type_display: appointment.type_display ?? appointment.TYPE_DISPLAY ?? "",
      location_display: appointment.location_display ?? appointment.LOCATION_DISPLAY ?? "",
      cancellation_reason: appointment.cancellation_reason ?? appointment.CANCELLATION_REASON ?? "",
      // Submission tracking
      submission_status: appointment.submission_status ?? appointment.SUBMISSION_STATUS ?? "",
      submission_dt_tm: appointment.submission_dt_tm ?? appointment.SUBMISSION_DT_TM ?? "",
      submission_dt_tm_formatted: appointment.submission_dt_tm_formatted ?? appointment.SUBMISSION_DT_TM_FORMATTED ?? "",
      submission_batch_id: appointment.submission_batch_id ?? appointment.SUBMISSION_BATCH_ID ?? "",
      submission_response_id: appointment.submission_response_id ?? appointment.SUBMISSION_RESPONSE_ID ?? ""
    };
  }
  /**
   * Normalize service data (DE07, DE08, DE10)
   */
  normalizeService(service) {
    return {
      service_id: service.service_id ?? service.SERVICE_ID ?? 0,
      episode_id: service.episode_id ?? service.EPISODE_ID ?? 0,
      encntr_id: service.encntr_id ?? service.ENCNTR_ID ?? 0,
      person_id: service.person_id ?? service.PERSON_ID ?? 0,
      // DE07 - HSP Organization
      hsp_organization_number: service.hsp_organization_number ?? service.HSP_ORGANIZATION_NUMBER ?? "",
      moh_organization_id: service.moh_organization_id ?? service.MOH_ORGANIZATION_ID ?? "",
      hsp_organization_name: service.hsp_organization_name ?? service.HSP_ORGANIZATION_NAME ?? "",
      hsp_organization_active_flag: service.hsp_organization_active_flag ?? service.HSP_ORGANIZATION_ACTIVE_FLAG ?? 1,
      // DE08 - HSP Site
      hsp_site_number: service.hsp_site_number ?? service.HSP_SITE_NUMBER ?? "",
      hsp_site_name: service.hsp_site_name ?? service.HSP_SITE_NAME ?? "",
      // DE10 - Health Service Event
      health_service_event_id: service.health_service_event_id ?? service.HEALTH_SERVICE_EVENT_ID ?? "",
      service_modality: service.service_modality ?? service.SERVICE_MODALITY ?? "",
      service_modality_type: service.service_modality_type ?? service.SERVICE_MODALITY_TYPE ?? "",
      encounter_date: service.encounter_date ?? service.ENCOUNTER_DATE ?? "",
      encounter_date_formatted: service.encounter_date_formatted ?? service.ENCOUNTER_DATE_FORMATTED ?? "",
      health_service_group_id: service.health_service_group_id ?? service.HEALTH_SERVICE_GROUP_ID ?? "",
      direct_service_minutes: service.direct_service_minutes ?? service.DIRECT_SERVICE_MINUTES ?? 0,
      indirect_service_minutes: service.indirect_service_minutes ?? service.INDIRECT_SERVICE_MINUTES ?? 0,
      encounter_status: service.encounter_status ?? service.ENCOUNTER_STATUS ?? "",
      // Additional
      service_provider_name: service.service_provider_name ?? service.SERVICE_PROVIDER_NAME ?? "",
      is_assessment_ind: service.is_assessment_ind ?? service.IS_ASSESSMENT_IND ?? 0,
      no_show_ind: service.no_show_ind ?? service.NO_SHOW_IND ?? 0,
      // Submission tracking
      submission_status: service.submission_status ?? service.SUBMISSION_STATUS ?? "",
      submission_dt_tm: service.submission_dt_tm ?? service.SUBMISSION_DT_TM ?? "",
      submission_dt_tm_formatted: service.submission_dt_tm_formatted ?? service.SUBMISSION_DT_TM_FORMATTED ?? "",
      submission_batch_id: service.submission_batch_id ?? service.SUBMISSION_BATCH_ID ?? "",
      submission_response_id: service.submission_response_id ?? service.SUBMISSION_RESPONSE_ID ?? ""
    };
  }
  static \u0275fac = function PatientsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PatientsService, factory: _PatientsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/patients/components/patient-filters.ts
var _forTrack0 = ($index, $item) => $item.value;
function PatientFiltersComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    \u0275\u0275property("value", opt_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r1.label);
  }
}
var PatientFiltersComponent = class _PatientFiltersComponent {
  patientsService = inject(PatientsService);
  // Current filter values from service
  filters = this.patientsService.filters;
  loading = this.patientsService.loading;
  // Filter options
  statusOptions = SUBMISSION_STATUS_OPTIONS;
  // Local form state for immediate binding
  searchText = signal("", ...ngDevMode ? [{ debugName: "searchText" }] : []);
  submissionStatus = signal("", ...ngDevMode ? [{ debugName: "submissionStatus" }] : []);
  startDate = signal("", ...ngDevMode ? [{ debugName: "startDate" }] : []);
  endDate = signal("", ...ngDevMode ? [{ debugName: "endDate" }] : []);
  functionalCentre = signal("", ...ngDevMode ? [{ debugName: "functionalCentre" }] : []);
  programName = signal("", ...ngDevMode ? [{ debugName: "programName" }] : []);
  // Debounced search
  searchDebounce = null;
  textFilterDebounce = null;
  constructor() {
    effect(() => {
      const f = this.filters();
      this.searchText.set(f.search_text);
      this.submissionStatus.set(f.submission_status);
      this.startDate.set(f.start_date);
      this.endDate.set(f.end_date);
      this.functionalCentre.set(f.functional_centre);
      this.programName.set(f.program_name);
    }, { allowSignalWrites: true });
  }
  onSearchChange(value) {
    this.searchText.set(value);
    if (this.searchDebounce) {
      clearTimeout(this.searchDebounce);
    }
    this.searchDebounce = setTimeout(() => {
      this.applyFilters();
    }, 800);
  }
  onStatusChange(value) {
    this.submissionStatus.set(value);
    this.applyFilters();
  }
  onDateChange() {
    this.applyFilters();
  }
  onFunctionalCentreChange(value) {
    this.functionalCentre.set(value);
    if (this.textFilterDebounce) {
      clearTimeout(this.textFilterDebounce);
    }
    this.textFilterDebounce = setTimeout(() => {
      this.applyFilters();
    }, 800);
  }
  onProgramChange(value) {
    this.programName.set(value);
    if (this.textFilterDebounce) {
      clearTimeout(this.textFilterDebounce);
    }
    this.textFilterDebounce = setTimeout(() => {
      this.applyFilters();
    }, 800);
  }
  refreshPatients() {
    this.patientsService.clearSelectedPatient();
    this.applyFilters();
  }
  applyFilters() {
    this.patientsService.loadPatients({
      search_text: this.searchText(),
      submission_status: this.submissionStatus(),
      start_date: this.startDate(),
      end_date: this.endDate(),
      functional_centre: this.functionalCentre(),
      program_name: this.programName()
    });
  }
  resetFilters() {
    this.patientsService.resetFilters();
    this.patientsService.loadPatients();
  }
  hasActiveFilters() {
    const f = this.filters();
    return !!(f.search_text || f.submission_status || f.start_date || f.end_date || f.functional_centre || f.program_name);
  }
  static \u0275fac = function PatientFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientFiltersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientFiltersComponent, selectors: [["app-patient-filters"]], decls: 35, vars: 14, consts: [[1, "filters-container"], [1, "filter-row", "search-row"], [1, "search-input"], ["type", "text", "placeholder", "Search name, MRN, or HCN...", 3, "input", "value", "disabled"], ["title", "Refresh patient list", 1, "btn-refresh", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "23 4 23 10 17 10"], ["points", "1 20 1 14 7 14"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], ["title", "Clear all filters", 1, "btn-reset", 3, "click", "disabled"], [1, "filter-row"], [1, "filter-group"], [3, "change", "value", "disabled"], [3, "value"], ["type", "date", 3, "change", "value", "disabled"], ["type", "text", "placeholder", "e.g., ACTT", 3, "input", "value", "disabled"], ["type", "text", "placeholder", "Program name", 3, "input", "value", "disabled"]], template: function PatientFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
      \u0275\u0275listener("input", function PatientFiltersComponent_Template_input_input_3_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function PatientFiltersComponent_Template_button_click_4_listener() {
        return ctx.refreshPatients();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "polyline", 6)(7, "polyline", 7)(8, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function PatientFiltersComponent_Template_button_click_10_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(11, " Clear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "label");
      \u0275\u0275text(15, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 12);
      \u0275\u0275listener("change", function PatientFiltersComponent_Template_select_change_16_listener($event) {
        return ctx.onStatusChange($event.target.value);
      });
      \u0275\u0275repeaterCreate(17, PatientFiltersComponent_For_18_Template, 2, 2, "option", 13, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 11)(20, "label");
      \u0275\u0275text(21, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 14);
      \u0275\u0275listener("change", function PatientFiltersComponent_Template_input_change_22_listener($event) {
        ctx.startDate.set($event.target.value);
        return ctx.onDateChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 11)(24, "label");
      \u0275\u0275text(25, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 14);
      \u0275\u0275listener("change", function PatientFiltersComponent_Template_input_change_26_listener($event) {
        ctx.endDate.set($event.target.value);
        return ctx.onDateChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 11)(28, "label");
      \u0275\u0275text(29, "Functional Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 15);
      \u0275\u0275listener("input", function PatientFiltersComponent_Template_input_input_30_listener($event) {
        return ctx.onFunctionalCentreChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 11)(32, "label");
      \u0275\u0275text(33, "Program");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 16);
      \u0275\u0275listener("input", function PatientFiltersComponent_Template_input_input_34_listener($event) {
        return ctx.onProgramChange($event.target.value);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.searchText())("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loading() || !ctx.hasActiveFilters());
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.submissionStatus())("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.startDate())("disabled", ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.endDate())("disabled", ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.functionalCentre())("disabled", ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.programName())("disabled", ctx.loading());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.filters-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-row.search-row[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #666;\n  text-transform: uppercase;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n  min-width: 100px;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled, \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n}\n.filter-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  min-width: 130px;\n}\n.filter-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background-color: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background-color 0.15s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2a4a7f;\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-refresh[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background-color 0.15s;\n}\n.btn-reset[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.btn-reset[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-row[_ngcontent-%COMP%]:not(.search-row)   .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-row[_ngcontent-%COMP%]:not(.search-row)   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filter-row[_ngcontent-%COMP%]:not(.search-row)   .filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientFiltersComponent, [{
    type: Component,
    args: [{ selector: "app-patient-filters", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="filters-container">\n  <!-- Search Row -->\n  <div class="filter-row search-row">\n    <div class="search-input">\n      <input\n        type="text"\n        placeholder="Search name, MRN, or HCN..."\n        [value]="searchText()"\n        (input)="onSearchChange($any($event.target).value)"\n        [disabled]="loading()"\n      />\n    </div>\n    <button\n      class="btn-refresh"\n      (click)="refreshPatients()"\n      [disabled]="loading()"\n      title="Refresh patient list">\n      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n        <polyline points="23 4 23 10 17 10"></polyline>\n        <polyline points="1 20 1 14 7 14"></polyline>\n        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>\n      </svg>\n      Refresh\n    </button>\n    <button\n      class="btn-reset"\n      (click)="resetFilters()"\n      [disabled]="loading() || !hasActiveFilters()"\n      title="Clear all filters">\n      Clear\n    </button>\n  </div>\n\n  <!-- Filter Row -->\n  <div class="filter-row">\n    <div class="filter-group">\n      <label>Status</label>\n      <select\n        [value]="submissionStatus()"\n        (change)="onStatusChange($any($event.target).value)"\n        [disabled]="loading()">\n        @for (opt of statusOptions; track opt.value) {\n          <option [value]="opt.value">{{ opt.label }}</option>\n        }\n      </select>\n    </div>\n\n    <div class="filter-group">\n      <label>From</label>\n      <input\n        type="date"\n        [value]="startDate()"\n        (change)="startDate.set($any($event.target).value); onDateChange()"\n        [disabled]="loading()"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label>To</label>\n      <input\n        type="date"\n        [value]="endDate()"\n        (change)="endDate.set($any($event.target).value); onDateChange()"\n        [disabled]="loading()"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label>Functional Centre</label>\n      <input\n        type="text"\n        placeholder="e.g., ACTT"\n        [value]="functionalCentre()"\n        (input)="onFunctionalCentreChange($any($event.target).value)"\n        [disabled]="loading()"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label>Program</label>\n      <input\n        type="text"\n        placeholder="Program name"\n        [value]="programName()"\n        (input)="onProgramChange($any($event.target).value)"\n        [disabled]="loading()"\n      />\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/patients/components/patient-filters.scss */\n.filters-container {\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.filter-row {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-row.search-row {\n  margin-bottom: 12px;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n}\n.search-input input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input input:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.search-input input:disabled {\n  background-color: #e9ecef;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #666;\n  text-transform: uppercase;\n}\n.filter-group select,\n.filter-group input {\n  padding: 6px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n  min-width: 100px;\n}\n.filter-group select:focus,\n.filter-group input:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group select:disabled,\n.filter-group input:disabled {\n  background-color: #e9ecef;\n}\n.filter-group input[type=date] {\n  min-width: 130px;\n}\n.filter-group input[type=text] {\n  min-width: 110px;\n}\n.btn-refresh {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background-color: #1a365d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background-color 0.15s;\n}\n.btn-refresh:hover:not(:disabled) {\n  background-color: #2a4a7f;\n}\n.btn-refresh:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-refresh svg {\n  display: block;\n}\n.btn-reset {\n  padding: 8px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background-color 0.15s;\n}\n.btn-reset:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.btn-reset:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-row:not(.search-row) .filter-group {\n    width: 100%;\n  }\n  .filter-row:not(.search-row) .filter-group select,\n  .filter-row:not(.search-row) .filter-group input {\n    width: 100%;\n  }\n  .search-input {\n    min-width: auto;\n  }\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientFiltersComponent, { className: "PatientFiltersComponent", filePath: "src/app/patients/components/patient-filters.ts", lineNumber: 14 });
})();

// src/app/patients/components/patient-list.ts
function PatientListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading patients...");
    \u0275\u0275elementEnd()();
  }
}
function PatientListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4);
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
function PatientListComponent_Conditional_4_For_21_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function PatientListComponent_Conditional_4_For_21_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u26A0 ");
  }
}
function PatientListComponent_Conditional_4_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 10);
    \u0275\u0275listener("click", function PatientListComponent_Conditional_4_For_21_Template_tr_click_0_listener() {
      const patient_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectPatient(patient_r3));
    });
    \u0275\u0275elementStart(1, "td", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 17)(14, "span", 18);
    \u0275\u0275conditionalCreate(15, PatientListComponent_Conditional_4_For_21_Conditional_15_Template, 1, 0)(16, PatientListComponent_Conditional_4_For_21_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const patient_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isSelected(patient_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", patient_r3.last_name, ", ", patient_r3.first_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.program_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.mrn || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r3.date_of_birth_formatted || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(patient_r3.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", patient_r3.submission_status || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getSdohClass(patient_r3.sdoh_complete_ind));
    \u0275\u0275advance();
    \u0275\u0275conditional(patient_r3.sdoh_complete_ind === 1 ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(patient_r3.episode_count);
  }
}
function PatientListComponent_Conditional_4_ForEmpty_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, " No patients found matching the current filters ");
    \u0275\u0275elementEnd()();
  }
}
function PatientListComponent_Conditional_4_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 21);
    \u0275\u0275listener("click", function PatientListComponent_Conditional_4_Conditional_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPrevPage());
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function PatientListComponent_Conditional_4_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNextPage());
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasPrevPage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r0.currentPage(), " of ", ctx_r0.totalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasNextPage());
  }
}
function PatientListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 6)(4, "table", 7)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "MRN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "DOB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "SDOH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Episodes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, PatientListComponent_Conditional_4_For_21_Template, 19, 14, "tr", 8, \u0275\u0275componentInstance().trackByClientId, true, PatientListComponent_Conditional_4_ForEmpty_22_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(23, PatientListComponent_Conditional_4_Conditional_23_Template, 7, 4, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Showing ", ctx_r0.patients().length, " of ", ctx_r0.totalCount(), " patients");
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.patients());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.totalPages() > 1 ? 23 : -1);
  }
}
var PatientListComponent = class _PatientListComponent {
  patientsService = inject(PatientsService);
  // Expose service signals to template
  patients = this.patientsService.patients;
  loading = this.patientsService.loading;
  error = this.patientsService.error;
  totalCount = this.patientsService.totalCount;
  currentPage = this.patientsService.currentPage;
  totalPages = this.patientsService.totalPages;
  hasNextPage = this.patientsService.hasNextPage;
  hasPrevPage = this.patientsService.hasPrevPage;
  // Selection tracking
  selectedClientId = signal(null, ...ngDevMode ? [{ debugName: "selectedClientId" }] : []);
  // Output for row selection
  patientSelected = output();
  onSelectPatient(patient) {
    this.selectedClientId.set(patient.client_id);
    this.patientSelected.emit(patient);
    this.patientsService.loadPatientDetail(patient.client_id);
  }
  onNextPage() {
    this.patientsService.nextPage();
  }
  onPrevPage() {
    this.patientsService.prevPage();
  }
  isSelected(patient) {
    return this.selectedClientId() === patient.client_id;
  }
  getStatusClass(status) {
    switch (status) {
      case "SUBMITTED":
        return "status-success";
      case "ERROR":
        return "status-error";
      case "PENDING":
        return "status-pending";
      case "PARTIAL":
        return "status-partial";
      default:
        return "";
    }
  }
  getSdohClass(sdohComplete) {
    return sdohComplete === 1 ? "sdoh-complete" : "sdoh-incomplete";
  }
  trackByClientId(index, patient) {
    return patient.client_id;
  }
  static \u0275fac = function PatientListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientListComponent, selectors: [["app-patient-list"]], outputs: { patientSelected: "patientSelected" }, decls: 5, vars: 3, consts: [[1, "patient-list-container"], [1, "loading-overlay"], [1, "error-message"], [1, "spinner"], [1, "error-icon"], [1, "table-info"], [1, "table-wrapper"], [1, "patient-table"], [1, "patient-row", 3, "selected"], [1, "pagination"], [1, "patient-row", 3, "click"], [1, "patient-name"], [1, "name"], [1, "program"], [1, "patient-mrn"], [1, "patient-dob"], [1, "status-badge"], [1, "patient-sdoh"], [1, "sdoh-indicator"], [1, "patient-episodes"], ["colspan", "6", 1, "no-data"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"]], template: function PatientListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-patient-filters");
      \u0275\u0275conditionalCreate(2, PatientListComponent_Conditional_2_Template, 4, 0, "div", 1);
      \u0275\u0275conditionalCreate(3, PatientListComponent_Conditional_3_Template, 5, 1, "div", 2);
      \u0275\u0275conditionalCreate(4, PatientListComponent_Conditional_4_Template, 24, 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 4 : -1);
    }
  }, dependencies: [PatientFiltersComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.patient-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  position: relative;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  margin: 1rem;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  padding: 0.75rem 1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n}\n.patient-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.patient-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.patient-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.patient-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.patient-table[_ngcontent-%COMP%]   .patient-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.patient-table[_ngcontent-%COMP%]   .patient-row[_ngcontent-%COMP%]:hover {\n  background: #f1f3f4;\n}\n.patient-table[_ngcontent-%COMP%]   .patient-row.selected[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 3px solid #1976d2;\n}\n.patient-table[_ngcontent-%COMP%]   .patient-row.selected[_ngcontent-%COMP%]:hover {\n  background: #e3f2fd;\n}\n.patient-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #212529;\n}\n.patient-name[_ngcontent-%COMP%]   .program[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.125rem;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.patient-mrn[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #495057;\n}\n.patient-dob[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.patient-sdoh[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.patient-sdoh[_ngcontent-%COMP%]   .sdoh-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  font-size: 0.75rem;\n}\n.patient-sdoh[_ngcontent-%COMP%]   .sdoh-indicator.sdoh-complete[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.patient-sdoh[_ngcontent-%COMP%]   .sdoh-indicator.sdoh-incomplete[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.patient-episodes[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  background: #f8f9fa;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.15s;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e9ecef;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientListComponent, [{
    type: Component,
    args: [{ selector: "app-patient-list", standalone: true, imports: [PatientFiltersComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="patient-list-container">
  <!-- Filters -->
  <app-patient-filters />

  @if (loading()) {
    <div class="loading-overlay">
      <div class="spinner"></div>
      <span>Loading patients...</span>
    </div>
  }

  @if (error()) {
    <div class="error-message">
      <span class="error-icon">!</span>
      <span>{{ error() }}</span>
    </div>
  }

  @if (!loading() && !error()) {
    <div class="table-info">
      <span>Showing {{ patients().length }} of {{ totalCount() }} patients</span>
    </div>

    <div class="table-wrapper">
      <table class="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>MRN</th>
            <th>DOB</th>
            <th>Status</th>
            <th>SDOH</th>
            <th>Episodes</th>
          </tr>
        </thead>
        <tbody>
          @for (patient of patients(); track trackByClientId($index, patient)) {
            <tr
              (click)="onSelectPatient(patient)"
              class="patient-row"
              [class.selected]="isSelected(patient)"
            >
              <td class="patient-name">
                <span class="name">{{ patient.last_name }}, {{ patient.first_name }}</span>
                <span class="program">{{ patient.program_name }}</span>
              </td>
              <td class="patient-mrn">{{ patient.mrn || '-' }}</td>
              <td class="patient-dob">{{ patient.date_of_birth_formatted || '-' }}</td>
              <td>
                <span class="status-badge" [class]="getStatusClass(patient.submission_status)">
                  {{ patient.submission_status || 'N/A' }}
                </span>
              </td>
              <td class="patient-sdoh">
                <span class="sdoh-indicator" [class]="getSdohClass(patient.sdoh_complete_ind)">
                  @if (patient.sdoh_complete_ind === 1) {
                    &#10003;
                  } @else {
                    &#9888;
                  }
                </span>
              </td>
              <td class="patient-episodes">{{ patient.episode_count }}</td>
            </tr>
          } @empty {
            <tr>
              <td colspan="6" class="no-data">
                No patients found matching the current filters
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    @if (totalPages() > 1) {
      <div class="pagination">
        <button
          class="page-btn"
          [disabled]="!hasPrevPage()"
          (click)="onPrevPage()"
        >
          Previous
        </button>
        <span class="page-info">
          Page {{ currentPage() }} of {{ totalPages() }}
        </span>
        <button
          class="page-btn"
          [disabled]="!hasNextPage()"
          (click)="onNextPage()"
        >
          Next
        </button>
      </div>
    }
  }
</div>
`, styles: ["/* src/app/patients/components/patient-list.scss */\n:host {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.patient-list-container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  position: relative;\n}\n.loading-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: #6c757d;\n}\n.loading-overlay .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  margin: 1rem;\n}\n.error-message .error-icon {\n  width: 20px;\n  height: 20px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.75rem;\n}\n.table-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n  padding: 0.75rem 1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.table-wrapper {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n}\n.patient-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.patient-table th,\n.patient-table td {\n  padding: 0.625rem 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.patient-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.patient-table .patient-row {\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.patient-table .patient-row:hover {\n  background: #f1f3f4;\n}\n.patient-table .patient-row.selected {\n  background: #e3f2fd;\n  border-left: 3px solid #1976d2;\n}\n.patient-table .patient-row.selected:hover {\n  background: #e3f2fd;\n}\n.patient-name .name {\n  display: block;\n  font-weight: 500;\n  color: #212529;\n}\n.patient-name .program {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 0.125rem;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.patient-mrn {\n  font-family: monospace;\n  color: #495057;\n}\n.patient-dob {\n  white-space: nowrap;\n  color: #6c757d;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.patient-sdoh {\n  text-align: center;\n}\n.patient-sdoh .sdoh-indicator {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  font-size: 0.75rem;\n}\n.patient-sdoh .sdoh-indicator.sdoh-complete {\n  background: #d4edda;\n  color: #155724;\n}\n.patient-sdoh .sdoh-indicator.sdoh-incomplete {\n  background: #fff3cd;\n  color: #856404;\n}\n.patient-episodes {\n  text-align: center;\n  font-weight: 500;\n}\n.no-data {\n  text-align: center;\n  padding: 2rem !important;\n  color: #6c757d;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  background: #f8f9fa;\n}\n.pagination .page-btn {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #ced4da;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.15s;\n}\n.pagination .page-btn:hover:not(:disabled) {\n  background: #e9ecef;\n}\n.pagination .page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .page-info {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientListComponent, { className: "PatientListComponent", filePath: "src/app/patients/components/patient-list.ts", lineNumber: 14 });
})();

// src/app/patients/components/service-list.ts
function ServiceListComponent_For_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE10_002", service_r1.service_modality));
    \u0275\u0275domProperty("title", ctx_r1.getMappingTooltip("DE10_002", service_r1.service_modality));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE10_002", service_r1.service_modality) === "valid" ? "\u2713" : "\u2717");
  }
}
function ServiceListComponent_For_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE10_003", service_r1.service_modality_type));
    \u0275\u0275domProperty("title", ctx_r1.getMappingTooltip("DE10_003", service_r1.service_modality_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE10_003", service_r1.service_modality_type) === "valid" ? "\u2713" : "\u2717");
  }
}
function ServiceListComponent_For_24_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE10_008", service_r1.encounter_status));
    \u0275\u0275domProperty("title", ctx_r1.getMappingTooltip("DE10_008", service_r1.encounter_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE10_008", service_r1.encounter_status) === "valid" ? "\u2713" : "\u2717");
  }
}
function ServiceListComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275domElement(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "td");
    \u0275\u0275domElement(5, "span", 2);
    \u0275\u0275conditionalCreate(6, ServiceListComponent_For_24_Conditional_6_Template, 2, 4, "span", 3);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td");
    \u0275\u0275domElement(9, "span", 2);
    \u0275\u0275conditionalCreate(10, ServiceListComponent_For_24_Conditional_10_Template, 2, 4, "span", 3);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 4);
    \u0275\u0275domElement(13, "span", 2);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 4);
    \u0275\u0275domElement(16, "span", 2);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "td", 5);
    \u0275\u0275domElement(19, "span", 2);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "td");
    \u0275\u0275domElement(22, "span", 2);
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "td");
    \u0275\u0275domElement(25, "span", 2);
    \u0275\u0275conditionalCreate(26, ServiceListComponent_For_24_Conditional_26_Template, 2, 4, "span", 3);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "td")(29, "span", 6);
    \u0275\u0275text(30);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE10_004", service_r1.encounter_date_formatted || service_r1.encounter_date));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE10_004", service_r1.encounter_date_formatted || service_r1.encounter_date)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.encounter_date_formatted || service_r1.encounter_date || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE10_002", service_r1.service_modality));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE10_002", service_r1.service_modality)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE10_002", service_r1.service_modality) !== "not-checked" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.service_modality || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE10_003", service_r1.service_modality_type));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE10_003", service_r1.service_modality_type)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE10_003", service_r1.service_modality_type) !== "not-checked" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.service_modality_type || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE10_005", service_r1.direct_service_minutes, service_r1));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE10_005", service_r1.direct_service_minutes, service_r1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMinutes(service_r1.direct_service_minutes), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE10_006", service_r1.indirect_service_minutes, service_r1));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE10_006", service_r1.indirect_service_minutes, service_r1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMinutes(service_r1.indirect_service_minutes), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE07_003", service_r1.hsp_organization_name, service_r1));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE07_003", service_r1.hsp_organization_name, service_r1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.hsp_organization_name || "Brightshores Health System", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE08_002", service_r1.hsp_site_name));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE08_002", service_r1.hsp_site_name)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.hsp_site_name || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE10_008", service_r1.encounter_status));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE10_008", service_r1.encounter_status)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE10_008", service_r1.encounter_status) !== "not-checked" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.encounter_status || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getSubmissionStatusClass(service_r1.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.submission_status || "N/A", " ");
  }
}
function ServiceListComponent_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2, "No services recorded");
    \u0275\u0275domElementEnd()();
  }
}
var ServiceListComponent = class _ServiceListComponent {
  services = input.required(...ngDevMode ? [{ debugName: "services" }] : []);
  // Validation inputs from parent
  activeSubmitFields = input(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "activeSubmitFields" }] : []);
  fieldValidations = input(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "fieldValidations" }] : []);
  formatMinutes(minutes) {
    if (!minutes || minutes === 0)
      return "-";
    if (minutes < 60)
      return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }
  getSubmissionStatusClass(status) {
    switch (status?.toUpperCase()) {
      case "SUBMITTED":
        return "status-success";
      case "ERROR":
        return "status-error";
      case "PENDING":
        return "status-pending";
      case "PARTIAL":
        return "status-partial";
      default:
        return "";
    }
  }
  trackByServiceId(index, service) {
    return service.service_id;
  }
  getFieldStatus(fieldCode, value, service) {
    if (!this.activeSubmitFields().has(fieldCode))
      return "not-submitted";
    if (fieldCode === "DE07_003")
      return "submittable";
    if ((fieldCode === "DE10_005" || fieldCode === "DE10_006") && service) {
      const hasEither = service.direct_service_minutes > 0 || service.indirect_service_minutes > 0;
      return hasEither ? "submittable" : "needs-review";
    }
    const hasValue = value !== null && value !== void 0 && value !== "" && value !== "-" && value !== 0;
    return hasValue ? "submittable" : "needs-review";
  }
  getFieldTooltip(status) {
    switch (status) {
      case "submittable":
        return "This field is configured for submission and has data";
      case "needs-review":
        return "This field is configured for submission but is empty - review needed";
      case "not-submitted":
        return "This field is not configured for submission";
    }
  }
  getMappingStatus(fieldCode, sourceValue) {
    if (!sourceValue || sourceValue === "-" || sourceValue === "")
      return "not-checked";
    const validations = this.fieldValidations();
    const validation = validations.get(`${fieldCode}:${sourceValue}`) ?? validations.get(fieldCode);
    if (!validation)
      return "not-checked";
    return validation.is_valid ? "valid" : "invalid";
  }
  getMappingTooltip(fieldCode, sourceValue) {
    if (!sourceValue || sourceValue === "-" || sourceValue === "")
      return "Mapping not checked";
    const validations = this.fieldValidations();
    const validation = validations.get(`${fieldCode}:${sourceValue}`) ?? validations.get(fieldCode);
    if (!validation)
      return "Mapping not checked";
    if (validation.is_valid) {
      return `Maps to: ${validation.mapped_code} (${validation.mapped_label})`;
    }
    return `Mapping error: ${validation.error_code}${validation.error_message ? " - " + validation.error_message : ""}`;
  }
  static \u0275fac = function ServiceListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceListComponent, selectors: [["app-service-list"]], inputs: { services: [1, "services"], activeSubmitFields: [1, "activeSubmitFields"], fieldValidations: [1, "fieldValidations"] }, decls: 26, vars: 1, consts: [[1, "service-list"], [1, "service-table"], [1, "field-indicator", 3, "title"], [1, "mapping-indicator", 3, "class", "title"], [1, "duration"], [1, "org"], [1, "status-badge"], [1, "mapping-indicator", 3, "title"], ["colspan", "9", 1, "no-data"]], template: function ServiceListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      \u0275\u0275text(5, "Date");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "th");
      \u0275\u0275text(7, "Modality");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "th");
      \u0275\u0275text(9, "Modality Type");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "th");
      \u0275\u0275text(11, "Direct");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "th");
      \u0275\u0275text(13, "Indirect");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "th");
      \u0275\u0275text(15, "Organization");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "th");
      \u0275\u0275text(17, "Site");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "th");
      \u0275\u0275text(19, "Status");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "th");
      \u0275\u0275text(21, "Submission");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(22, "tbody");
      \u0275\u0275repeaterCreate(23, ServiceListComponent_For_24_Template, 31, 38, "tr", null, ctx.trackByServiceId, true, ServiceListComponent_ForEmpty_25_Template, 3, 0, "tr");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.services());
    }
  }, styles: ["\n\n.service-list[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.service-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n  background: #fafafa;\n}\n.service-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.service-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\n.service-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.service-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.service-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.service-table[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-family: monospace;\n  text-align: center;\n}\n.service-table[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.service-table[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px !important;\n}\n.service-table[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.service-table[_ngcontent-%COMP%]   .status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.service-table[_ngcontent-%COMP%]   .status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.service-table[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.service-table[_ngcontent-%COMP%]   .status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  color: #e65100;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceListComponent, [{
    type: Component,
    args: [{ selector: "app-service-list", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="service-list">
  <table class="service-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Modality</th>
        <th>Modality Type</th>
        <th>Direct</th>
        <th>Indirect</th>
        <th>Organization</th>
        <th>Site</th>
        <th>Status</th>
        <th>Submission</th>
      </tr>
    </thead>
    <tbody>
      @for (service of services(); track trackByServiceId($index, service)) {
        <tr>
          <td>
            <span class="field-indicator" [class]="getFieldStatus('DE10_004', service.encounter_date_formatted || service.encounter_date)"
              [title]="getFieldTooltip(getFieldStatus('DE10_004', service.encounter_date_formatted || service.encounter_date))"></span>
            {{ service.encounter_date_formatted || service.encounter_date || '-' }}
          </td>
          <td>
            <span class="field-indicator" [class]="getFieldStatus('DE10_002', service.service_modality)"
              [title]="getFieldTooltip(getFieldStatus('DE10_002', service.service_modality))"></span>
            @if (getMappingStatus('DE10_002', service.service_modality) !== 'not-checked') {
              <span class="mapping-indicator" [class]="getMappingStatus('DE10_002', service.service_modality)"
                [title]="getMappingTooltip('DE10_002', service.service_modality)">{{ getMappingStatus('DE10_002', service.service_modality) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
            }
            {{ service.service_modality || '-' }}
          </td>
          <td>
            <span class="field-indicator" [class]="getFieldStatus('DE10_003', service.service_modality_type)"
              [title]="getFieldTooltip(getFieldStatus('DE10_003', service.service_modality_type))"></span>
            @if (getMappingStatus('DE10_003', service.service_modality_type) !== 'not-checked') {
              <span class="mapping-indicator" [class]="getMappingStatus('DE10_003', service.service_modality_type)"
                [title]="getMappingTooltip('DE10_003', service.service_modality_type)">{{ getMappingStatus('DE10_003', service.service_modality_type) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
            }
            {{ service.service_modality_type || '-' }}
          </td>
          <td class="duration">
            <span class="field-indicator" [class]="getFieldStatus('DE10_005', service.direct_service_minutes, service)"
              [title]="getFieldTooltip(getFieldStatus('DE10_005', service.direct_service_minutes, service))"></span>
            {{ formatMinutes(service.direct_service_minutes) }}
          </td>
          <td class="duration">
            <span class="field-indicator" [class]="getFieldStatus('DE10_006', service.indirect_service_minutes, service)"
              [title]="getFieldTooltip(getFieldStatus('DE10_006', service.indirect_service_minutes, service))"></span>
            {{ formatMinutes(service.indirect_service_minutes) }}
          </td>
          <td class="org">
            <span class="field-indicator" [class]="getFieldStatus('DE07_003', service.hsp_organization_name, service)"
              [title]="getFieldTooltip(getFieldStatus('DE07_003', service.hsp_organization_name, service))"></span>
            {{ service.hsp_organization_name || 'Brightshores Health System' }}
          </td>
          <td>
            <span class="field-indicator" [class]="getFieldStatus('DE08_002', service.hsp_site_name)"
              [title]="getFieldTooltip(getFieldStatus('DE08_002', service.hsp_site_name))"></span>
            {{ service.hsp_site_name || '-' }}
          </td>
          <td>
            <span class="field-indicator" [class]="getFieldStatus('DE10_008', service.encounter_status)"
              [title]="getFieldTooltip(getFieldStatus('DE10_008', service.encounter_status))"></span>
            @if (getMappingStatus('DE10_008', service.encounter_status) !== 'not-checked') {
              <span class="mapping-indicator" [class]="getMappingStatus('DE10_008', service.encounter_status)"
                [title]="getMappingTooltip('DE10_008', service.encounter_status)">{{ getMappingStatus('DE10_008', service.encounter_status) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
            }
            {{ service.encounter_status || '-' }}
          </td>
          <td>
            <span class="status-badge" [class]="getSubmissionStatusClass(service.submission_status)">
              {{ service.submission_status || 'N/A' }}
            </span>
          </td>
        </tr>
      } @empty {
        <tr>
          <td colspan="9" class="no-data">No services recorded</td>
        </tr>
      }
    </tbody>
  </table>
</div>
`, styles: ["/* src/app/patients/components/service-list.scss */\n.service-list {\n  overflow-x: auto;\n}\n.service-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n  background: #fafafa;\n}\n.service-table th,\n.service-table td {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\n.service-table th {\n  background: #f0f0f0;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.service-table tbody tr:nth-child(even) {\n  background: #f8f9fa;\n}\n.service-table tbody tr:hover {\n  background: #f0f0f0;\n}\n.service-table .duration {\n  font-family: monospace;\n  text-align: center;\n}\n.service-table .org {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.service-table .no-data {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px !important;\n}\n.service-table .status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.service-table .status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.service-table .status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.service-table .status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.service-table .status-badge.status-partial {\n  background: #ffe0b2;\n  color: #e65100;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceListComponent, { className: "ServiceListComponent", filePath: "src/app/patients/components/service-list.ts", lineNumber: 18 });
})();

// src/app/patients/components/appointment-list.ts
function AppointmentListComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 2);
    \u0275\u0275domElement(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "td", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 5);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td");
    \u0275\u0275domElement(11, "span", 3);
    \u0275\u0275domElementStart(12, "span", 6);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "td");
    \u0275\u0275domElement(15, "span", 3);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td")(18, "span", 7);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const appointment_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE06_006", appointment_r1.appointment_start_formatted));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE06_006", appointment_r1.appointment_start_formatted)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appointment_r1.appointment_start_formatted || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMinutes(appointment_r1.duration_minutes), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r1.type_display || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", appointment_r1.location_display || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE06_006_STATUS", appointment_r1.status));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE06_006_STATUS", appointment_r1.status)));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(appointment_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(appointment_r1.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE06_007", appointment_r1.cancellation_reason));
    \u0275\u0275domProperty("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE06_007", appointment_r1.cancellation_reason)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appointment_r1.cancellation_reason || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getSubmissionStatusClass(appointment_r1.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appointment_r1.submission_status || "N/A", " ");
  }
}
function AppointmentListComponent_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2, "No appointments scheduled");
    \u0275\u0275domElementEnd()();
  }
}
var AppointmentListComponent = class _AppointmentListComponent {
  appointments = input.required(...ngDevMode ? [{ debugName: "appointments" }] : []);
  // Validation inputs from parent
  activeSubmitFields = input(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "activeSubmitFields" }] : []);
  fieldValidations = input(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "fieldValidations" }] : []);
  formatMinutes(minutes) {
    if (!minutes || minutes === 0)
      return "-";
    if (minutes < 60)
      return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }
  getStatusClass(status) {
    switch (status?.toLowerCase()) {
      case "booked":
        return "status-booked";
      case "pending":
        return "status-pending";
      case "arrived":
        return "status-arrived";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-unknown";
    }
  }
  getStatusLabel(status) {
    switch (status?.toLowerCase()) {
      case "booked":
        return "Booked";
      case "pending":
        return "Pending";
      case "arrived":
        return "Arrived";
      case "cancelled":
        return "Cancelled";
      default:
        return status || "-";
    }
  }
  getSubmissionStatusClass(status) {
    switch (status?.toUpperCase()) {
      case "SUBMITTED":
        return "submission-success";
      case "ERROR":
        return "submission-error";
      case "PENDING":
        return "submission-pending";
      case "PARTIAL":
        return "submission-partial";
      default:
        return "";
    }
  }
  trackByAppointmentId(index, appointment) {
    return appointment.appointment_id;
  }
  getFieldStatus(fieldCode, value) {
    if (!this.activeSubmitFields().has(fieldCode))
      return "not-submitted";
    const hasValue = value !== null && value !== void 0 && value !== "" && value !== "-" && value !== 0;
    return hasValue ? "submittable" : "needs-review";
  }
  getFieldTooltip(status) {
    switch (status) {
      case "submittable":
        return "This field is configured for submission and has data";
      case "needs-review":
        return "This field is configured for submission but is empty - review needed";
      case "not-submitted":
        return "This field is not configured for submission";
    }
  }
  static \u0275fac = function AppointmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppointmentListComponent, selectors: [["app-appointment-list"]], inputs: { appointments: [1, "appointments"], activeSubmitFields: [1, "activeSubmitFields"], fieldValidations: [1, "fieldValidations"] }, decls: 22, vars: 1, consts: [[1, "appointment-list"], [1, "appointment-table"], [1, "datetime"], [1, "field-indicator", 3, "title"], [1, "duration"], [1, "location"], [1, "status-badge"], [1, "submission-badge"], ["colspan", "7", 1, "no-data"]], template: function AppointmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      \u0275\u0275text(5, "Date/Time");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "th");
      \u0275\u0275text(7, "Duration");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "th");
      \u0275\u0275text(9, "Type");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "th");
      \u0275\u0275text(11, "Location");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "th");
      \u0275\u0275text(13, "Status");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "th");
      \u0275\u0275text(15, "Cancel Reason");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "th");
      \u0275\u0275text(17, "Submission");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(18, "tbody");
      \u0275\u0275repeaterCreate(19, AppointmentListComponent_For_20_Template, 20, 20, "tr", null, ctx.trackByAppointmentId, true, AppointmentListComponent_ForEmpty_21_Template, 3, 0, "tr");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.appointments());
    }
  }, styles: ["\n\n.appointment-list[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.appointment-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n  background: #fafafa;\n}\n.appointment-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.appointment-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\n.appointment-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.appointment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.appointment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.appointment-table[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.appointment-table[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-family: monospace;\n  text-align: center;\n}\n.appointment-table[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.appointment-table[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px !important;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-booked[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-arrived[_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-unknown[_ngcontent-%COMP%] {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.submission-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.submission-badge.submission-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.submission-badge.submission-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.submission-badge.submission-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.submission-badge.submission-partial[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  color: #e65100;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentListComponent, [{
    type: Component,
    args: [{ selector: "app-appointment-list", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="appointment-list">
  <table class="appointment-table">
    <thead>
      <tr>
        <th>Date/Time</th>
        <th>Duration</th>
        <th>Type</th>
        <th>Location</th>
        <th>Status</th>
        <th>Cancel Reason</th>
        <th>Submission</th>
      </tr>
    </thead>
    <tbody>
      @for (appointment of appointments(); track trackByAppointmentId($index, appointment)) {
        <tr>
          <td class="datetime">
            <span class="field-indicator" [class]="getFieldStatus('DE06_006', appointment.appointment_start_formatted)"
              [title]="getFieldTooltip(getFieldStatus('DE06_006', appointment.appointment_start_formatted))"></span>
            {{ appointment.appointment_start_formatted || '-' }}
          </td>
          <td class="duration">
            {{ formatMinutes(appointment.duration_minutes) }}
          </td>
          <td>
            {{ appointment.type_display || '-' }}
          </td>
          <td class="location">
            {{ appointment.location_display || '-' }}
          </td>
          <td>
            <span class="field-indicator" [class]="getFieldStatus('DE06_006_STATUS', appointment.status)"
              [title]="getFieldTooltip(getFieldStatus('DE06_006_STATUS', appointment.status))"></span>
            <span class="status-badge" [class]="getStatusClass(appointment.status)">
              {{ getStatusLabel(appointment.status) }}
            </span>
          </td>
          <td>
            <span class="field-indicator" [class]="getFieldStatus('DE06_007', appointment.cancellation_reason)"
              [title]="getFieldTooltip(getFieldStatus('DE06_007', appointment.cancellation_reason))"></span>
            {{ appointment.cancellation_reason || '-' }}
          </td>
          <td>
            <span class="submission-badge" [class]="getSubmissionStatusClass(appointment.submission_status)">
              {{ appointment.submission_status || 'N/A' }}
            </span>
          </td>
        </tr>
      } @empty {
        <tr>
          <td colspan="7" class="no-data">No appointments scheduled</td>
        </tr>
      }
    </tbody>
  </table>
</div>
`, styles: ["/* src/app/patients/components/appointment-list.scss */\n.appointment-list {\n  overflow-x: auto;\n}\n.appointment-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n  background: #fafafa;\n}\n.appointment-table th,\n.appointment-table td {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\n.appointment-table th {\n  background: #f0f0f0;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.appointment-table tbody tr:nth-child(even) {\n  background: #f8f9fa;\n}\n.appointment-table tbody tr:hover {\n  background: #f0f0f0;\n}\n.appointment-table .datetime {\n  white-space: nowrap;\n}\n.appointment-table .duration {\n  font-family: monospace;\n  text-align: center;\n}\n.appointment-table .location {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.appointment-table .no-data {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px !important;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.status-badge.status-booked {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-arrived {\n  background: #cce5ff;\n  color: #004085;\n}\n.status-badge.status-cancelled {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-unknown {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.submission-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.submission-badge.submission-success {\n  background: #d4edda;\n  color: #155724;\n}\n.submission-badge.submission-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.submission-badge.submission-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.submission-badge.submission-partial {\n  background: #ffe0b2;\n  color: #e65100;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppointmentListComponent, { className: "AppointmentListComponent", filePath: "src/app/patients/components/appointment-list.ts", lineNumber: 15 });
})();

// src/app/patients/components/episode-list.ts
function EpisodeListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "No episodes found");
    \u0275\u0275elementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getMappingStatus("DE05_004", episode_r2.referral_source_type));
    \u0275\u0275property("title", ctx_r2.getMappingTooltip("DE05_004", episode_r2.referral_source_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE05_004", episode_r2.referral_source_type) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getMappingStatus("DE05_005", episode_r2.referral_type));
    \u0275\u0275property("title", ctx_r2.getMappingTooltip("DE05_005", episode_r2.referral_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE05_005", episode_r2.referral_type) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getMappingStatus("DE06_002", episode_r2.episode_of_care_status));
    \u0275\u0275property("title", ctx_r2.getMappingTooltip("DE06_002", episode_r2.episode_of_care_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE06_002", episode_r2.episode_of_care_status) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getMappingStatus("DE06_009", episode_r2.service_termination_reason));
    \u0275\u0275property("title", ctx_r2.getMappingTooltip("DE06_009", episode_r2.service_termination_reason));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE06_009", episode_r2.service_termination_reason) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getMappingStatus("DE09_001", episode_r2.health_program_name));
    \u0275\u0275property("title", ctx_r2.getMappingTooltip("DE09_001", episode_r2.health_program_name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE09_001", episode_r2.health_program_name) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getMappingStatus("DE09_003", episode_r2.functional_centre_mapped));
    \u0275\u0275property("title", ctx_r2.getMappingTooltip("DE09_003", episode_r2.functional_centre_mapped));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE09_003", episode_r2.functional_centre_mapped) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(episode_r2.error_message);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service-list", 19);
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("services", episode_r2.services)("activeSubmitFields", ctx_r2.activeSubmitFields())("fieldValidations", ctx_r2.fieldValidations());
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "No services recorded");
    \u0275\u0275elementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-appointment-list", 22);
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appointments", episode_r2.appointments)("activeSubmitFields", ctx_r2.activeSubmitFields())("fieldValidations", ctx_r2.fieldValidations());
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "No appointments scheduled");
    \u0275\u0275elementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h4");
    \u0275\u0275text(3, "Referral (DE05)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13)(6, "label");
    \u0275\u0275element(7, "span", 14);
    \u0275\u0275text(8, " Referral ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13)(12, "label");
    \u0275\u0275element(13, "span", 14);
    \u0275\u0275text(14, " Received Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13)(18, "label");
    \u0275\u0275element(19, "span", 14);
    \u0275\u0275conditionalCreate(20, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_20_Template, 2, 4, "span", 15);
    \u0275\u0275text(21, " Source ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13)(25, "label");
    \u0275\u0275element(26, "span", 14);
    \u0275\u0275conditionalCreate(27, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_27_Template, 2, 4, "span", 15);
    \u0275\u0275text(28, " Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 11)(32, "h4");
    \u0275\u0275text(33, "Episode of Care (DE06)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 12)(35, "div", 13)(36, "label");
    \u0275\u0275element(37, "span", 14);
    \u0275\u0275text(38, " Episode ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 13)(42, "label");
    \u0275\u0275element(43, "span", 14);
    \u0275\u0275conditionalCreate(44, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_44_Template, 2, 4, "span", 15);
    \u0275\u0275text(45, " Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 13)(49, "label");
    \u0275\u0275element(50, "span", 14);
    \u0275\u0275text(51, " First Contact ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 13)(55, "label");
    \u0275\u0275element(56, "span", 14);
    \u0275\u0275text(57, " Eligibility Screening ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 12)(61, "div", 13)(62, "label");
    \u0275\u0275element(63, "span", 14);
    \u0275\u0275text(64, " Assessment Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 13)(68, "label");
    \u0275\u0275element(69, "span", 14);
    \u0275\u0275text(70, " Service Initiation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 13)(74, "label");
    \u0275\u0275element(75, "span", 14);
    \u0275\u0275text(76, " Enrollment Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 13)(80, "label");
    \u0275\u0275element(81, "span", 14);
    \u0275\u0275text(82, " Termination Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 12)(86, "div", 13)(87, "label");
    \u0275\u0275element(88, "span", 14);
    \u0275\u0275conditionalCreate(89, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_89_Template, 2, 4, "span", 15);
    \u0275\u0275text(90, " Termination Reason ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(93, "div", 11)(94, "h4");
    \u0275\u0275text(95, "Health Program (DE09)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 12)(97, "div", 13)(98, "label");
    \u0275\u0275element(99, "span", 14);
    \u0275\u0275conditionalCreate(100, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_100_Template, 2, 4, "span", 15);
    \u0275\u0275text(101, " Program Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 13)(105, "label");
    \u0275\u0275element(106, "span", 14);
    \u0275\u0275text(107, " Program Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span");
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 13)(111, "label");
    \u0275\u0275element(112, "span", 14);
    \u0275\u0275conditionalCreate(113, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_113_Template, 2, 4, "span", 15);
    \u0275\u0275text(114, " Functional Centre ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "span");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(117, "div", 16)(118, "h4");
    \u0275\u0275text(119, "Submission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 12)(121, "div", 13)(122, "label");
    \u0275\u0275text(123, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span", 7);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 13)(127, "label");
    \u0275\u0275text(128, "Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span");
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 13)(132, "label");
    \u0275\u0275text(133, "Batch ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "span");
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 13)(137, "label");
    \u0275\u0275text(138, "Response ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "span");
    \u0275\u0275text(140);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(141, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_141_Template, 5, 1, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 18)(143, "h4");
    \u0275\u0275text(144);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(145, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_145_Template, 1, 3, "app-service-list", 19)(146, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_146_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 21)(148, "h4");
    \u0275\u0275text(149);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(150, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_150_Template, 1, 3, "app-appointment-list", 22)(151, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_151_Template, 2, 0, "p", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE05_001", episode_r2.referral_id));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE05_001", episode_r2.referral_id)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.referral_id || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE05_002", episode_r2.referral_received_date_formatted || episode_r2.referral_received_date));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE05_002", episode_r2.referral_received_date_formatted || episode_r2.referral_received_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.referral_received_date_formatted || episode_r2.referral_received_date || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE05_003", episode_r2.referral_source));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE05_003", episode_r2.referral_source)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE05_004", episode_r2.referral_source_type) !== "not-checked" ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.referral_source || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE05_004", episode_r2.referral_type));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE05_004", episode_r2.referral_type)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE05_005", episode_r2.referral_type) !== "not-checked" ? 27 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.referral_type || "-");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_000", episode_r2.episode_of_care_id));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_000", episode_r2.episode_of_care_id)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.episode_of_care_id || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_001", episode_r2.episode_of_care_status));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_001", episode_r2.episode_of_care_status)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE06_002", episode_r2.episode_of_care_status) !== "not-checked" ? 44 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.episode_of_care_status || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_002", episode_r2.first_contact_date_formatted || episode_r2.first_contact_date));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_002", episode_r2.first_contact_date_formatted || episode_r2.first_contact_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.first_contact_date_formatted || episode_r2.first_contact_date || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_003", episode_r2.eligibility_screening_date_formatted || episode_r2.eligibility_screening_date));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_003", episode_r2.eligibility_screening_date_formatted || episode_r2.eligibility_screening_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.eligibility_screening_date_formatted || episode_r2.eligibility_screening_date || "-");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_004", episode_r2.initial_assessment_date_formatted || episode_r2.initial_assessment_date));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_004", episode_r2.initial_assessment_date_formatted || episode_r2.initial_assessment_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.initial_assessment_date_formatted || episode_r2.initial_assessment_date || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_005", episode_r2.service_initiation_date_formatted || episode_r2.service_initiation_date));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_005", episode_r2.service_initiation_date_formatted || episode_r2.service_initiation_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.service_initiation_date_formatted || episode_r2.service_initiation_date || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_008", episode_r2.service_enrollment_date_formatted || episode_r2.service_enrollment_date));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_008", episode_r2.service_enrollment_date_formatted || episode_r2.service_enrollment_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.service_enrollment_date_formatted || episode_r2.service_enrollment_date || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_010", episode_r2.service_termination_date_formatted || episode_r2.service_termination_date));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_010", episode_r2.service_termination_date_formatted || episode_r2.service_termination_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.service_termination_date_formatted || episode_r2.service_termination_date || "-");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_009", episode_r2.service_termination_reason));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_009", episode_r2.service_termination_reason)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE06_009", episode_r2.service_termination_reason) !== "not-checked" ? 89 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.service_termination_reason || "-");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE09_001", episode_r2.health_program_name));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE09_001", episode_r2.health_program_name)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE09_001", episode_r2.health_program_name) !== "not-checked" ? 100 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getMappedCode("DE09_001", episode_r2.health_program_name) || episode_r2.health_program_number || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE09_002", episode_r2.health_program_name));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE09_002", episode_r2.health_program_name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.health_program_name || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE09_003", episode_r2.functional_centre));
    \u0275\u0275property("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE09_003", episode_r2.functional_centre)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE09_003", episode_r2.functional_centre_mapped) !== "not-checked" ? 113 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.functional_centre_mapped || episode_r2.functional_centre || "-");
    \u0275\u0275advance(8);
    \u0275\u0275classMap(ctx_r2.getStatusClass(episode_r2.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.submission_status || "N/A", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.submission_dt_tm_formatted || episode_r2.submission_dt_tm || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.submission_batch_id || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.submission_response_id || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(episode_r2.error_message ? 141 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Services (", (episode_r2.services == null ? null : episode_r2.services.length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(episode_r2.services && episode_r2.services.length > 0 ? 145 : 146);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Scheduled Appointments (", (episode_r2.appointments == null ? null : episode_r2.appointments.length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(episode_r2.appointments && episode_r2.appointments.length > 0 ? 150 : 151);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
    \u0275\u0275listener("click", function EpisodeListComponent_Conditional_2_For_1_Template_button_click_1_listener() {
      const episode_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEpisode(episode_r2.episode_id));
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 9);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template, 152, 81, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(episode_r2.episode_identifier || "Episode " + episode_r2.episode_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(episode_r2.health_program_name || "-");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(episode_r2.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.submission_status || "N/A", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("FC: ", episode_r2.functional_centre_mapped || episode_r2.functional_centre || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Services: ", (episode_r2.services == null ? null : episode_r2.services.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Appts: ", (episode_r2.appointments == null ? null : episode_r2.appointments.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isEpisodeExpanded(episode_r2.episode_id) ? "\u25BC" : "\u25B6");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isEpisodeExpanded(episode_r2.episode_id) ? 18 : -1);
  }
}
function EpisodeListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EpisodeListComponent_Conditional_2_For_1_Template, 19, 10, "div", 2, \u0275\u0275componentInstance().trackByEpisodeId, true);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.episodes());
  }
}
var EpisodeListComponent = class _EpisodeListComponent {
  // Input: episodes from parent
  episodes = input.required(...ngDevMode ? [{ debugName: "episodes" }] : []);
  // Validation inputs from parent
  activeSubmitFields = input(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "activeSubmitFields" }] : []);
  fieldValidations = input(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "fieldValidations" }] : []);
  // Track expanded episodes
  expandedEpisodes = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedEpisodes" }] : []);
  constructor() {
    effect(() => {
      const eps = this.episodes();
      if (eps && eps.length > 0) {
        const allIds = new Set(eps.map((e) => e.episode_id));
        this.expandedEpisodes.set(allIds);
      }
    });
  }
  toggleEpisode(episodeId) {
    this.expandedEpisodes.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(episodeId)) {
        newSet.delete(episodeId);
      } else {
        newSet.add(episodeId);
      }
      return newSet;
    });
  }
  isEpisodeExpanded(episodeId) {
    return this.expandedEpisodes().has(episodeId);
  }
  getStatusClass(status) {
    switch (status) {
      case "SUBMITTED":
        return "status-success";
      case "ERROR":
        return "status-error";
      case "PENDING":
        return "status-pending";
      case "PARTIAL":
        return "status-partial";
      default:
        return "";
    }
  }
  trackByEpisodeId(index, episode) {
    return episode.episode_id;
  }
  getFieldStatus(fieldCode, value) {
    if (!this.activeSubmitFields().has(fieldCode))
      return "not-submitted";
    const hasValue = value !== null && value !== void 0 && value !== "" && value !== "-";
    return hasValue ? "submittable" : "needs-review";
  }
  getFieldTooltip(status) {
    switch (status) {
      case "submittable":
        return "This field is configured for submission and has data";
      case "needs-review":
        return "This field is configured for submission but is empty - review needed";
      case "not-submitted":
        return "This field is not configured for submission";
    }
  }
  getMappingStatus(fieldCode, sourceValue) {
    if (!sourceValue || sourceValue === "-" || sourceValue === "")
      return "not-checked";
    const validations = this.fieldValidations();
    const validation = validations.get(`${fieldCode}:${sourceValue}`) ?? validations.get(fieldCode);
    if (!validation)
      return "not-checked";
    return validation.is_valid ? "valid" : "invalid";
  }
  getMappedCode(fieldCode, sourceValue) {
    if (!sourceValue || sourceValue === "-" || sourceValue === "")
      return "";
    const validations = this.fieldValidations();
    const validation = validations.get(`${fieldCode}:${sourceValue}`) ?? validations.get(fieldCode);
    return validation?.is_valid ? validation.mapped_code ?? "" : "";
  }
  getMappingTooltip(fieldCode, sourceValue) {
    if (!sourceValue || sourceValue === "-" || sourceValue === "")
      return "Mapping not checked";
    const validations = this.fieldValidations();
    const validation = validations.get(`${fieldCode}:${sourceValue}`) ?? validations.get(fieldCode);
    if (!validation)
      return "Mapping not checked";
    if (validation.is_valid) {
      return `Maps to: ${validation.mapped_code} (${validation.mapped_label})`;
    }
    return `Mapping error: ${validation.error_code}${validation.error_message ? " - " + validation.error_message : ""}`;
  }
  static \u0275fac = function EpisodeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EpisodeListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpisodeListComponent, selectors: [["app-episode-list"]], inputs: { episodes: [1, "episodes"], activeSubmitFields: [1, "activeSubmitFields"], fieldValidations: [1, "fieldValidations"] }, decls: 3, vars: 1, consts: [[1, "episode-list"], [1, "no-episodes"], [1, "episode-card"], [1, "episode-header", 3, "click"], [1, "episode-summary"], [1, "episode-id"], [1, "episode-program"], [1, "status-badge"], [1, "episode-meta"], [1, "expand-icon"], [1, "episode-content"], [1, "episode-section"], [1, "field-row"], [1, "field"], [1, "field-indicator", 3, "title"], [1, "mapping-indicator", 3, "class", "title"], [1, "episode-section", "submission-info"], [1, "field", "error-field"], [1, "episode-section", "services-section"], [3, "services", "activeSubmitFields", "fieldValidations"], [1, "no-services"], [1, "episode-section", "appointments-section"], [3, "appointments", "activeSubmitFields", "fieldValidations"], [1, "no-appointments"], [1, "mapping-indicator", 3, "title"]], template: function EpisodeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, EpisodeListComponent_Conditional_1_Template, 2, 0, "p", 1)(2, EpisodeListComponent_Conditional_2_Template, 2, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.episodes().length === 0 ? 1 : 2);
    }
  }, dependencies: [ServiceListComponent, AppointmentListComponent], styles: ["\n\n.episode-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.no-episodes[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px;\n}\n.episode-card[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n  background: white;\n}\n.episode-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.15s;\n}\n.episode-header[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.episode-header[_ngcontent-%COMP%]   .episode-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.episode-header[_ngcontent-%COMP%]   .episode-summary[_ngcontent-%COMP%]   .episode-id[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n  font-size: 0.875rem;\n}\n.episode-header[_ngcontent-%COMP%]   .episode-summary[_ngcontent-%COMP%]   .episode-program[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8125rem;\n}\n.episode-header[_ngcontent-%COMP%]   .episode-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.episode-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n  margin-left: 12px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.episode-content[_ngcontent-%COMP%] {\n  padding: 0;\n  border-top: 1px solid #dee2e6;\n}\n.episode-section[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.episode-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.episode-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.episode-section.submission-info[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.episode-section.services-section[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.field-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 150px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6875rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #212529;\n}\n.field.error-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.no-services[_ngcontent-%COMP%], \n.no-appointments[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px;\n  margin: 0;\n  background: #fafafa;\n}\n.appointments-section[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n@media (max-width: 768px) {\n  .episode-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .episode-header[_ngcontent-%COMP%]   .episode-meta[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .episode-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .field[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpisodeListComponent, [{
    type: Component,
    args: [{ selector: "app-episode-list", standalone: true, imports: [ServiceListComponent, AppointmentListComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="episode-list">
  @if (episodes().length === 0) {
    <p class="no-episodes">No episodes found</p>
  } @else {
    @for (episode of episodes(); track trackByEpisodeId($index, episode)) {
      <div class="episode-card">
        <!-- Episode Header (clickable to expand) -->
        <button class="episode-header" (click)="toggleEpisode(episode.episode_id)">
          <div class="episode-summary">
            <span class="episode-id">{{ episode.episode_identifier || 'Episode ' + episode.episode_id }}</span>
            <span class="episode-program">{{ episode.health_program_name || '-' }}</span>
            <span class="status-badge" [class]="getStatusClass(episode.submission_status)">
              {{ episode.submission_status || 'N/A' }}
            </span>
          </div>
          <div class="episode-meta">
            <span>FC: {{ episode.functional_centre_mapped || episode.functional_centre || '-' }}</span>
            <span>Services: {{ episode.services?.length || 0 }}</span>
            <span>Appts: {{ episode.appointments?.length || 0 }}</span>
          </div>
          <span class="expand-icon">{{ isEpisodeExpanded(episode.episode_id) ? '&#9660;' : '&#9654;' }}</span>
        </button>

        <!-- Episode Details (expanded) -->
        @if (isEpisodeExpanded(episode.episode_id)) {
          <div class="episode-content">
            <!-- DE05: Referral -->
            <div class="episode-section">
              <h4>Referral (DE05)</h4>
              <div class="field-row">
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE05_001', episode.referral_id)"
                      [title]="getFieldTooltip(getFieldStatus('DE05_001', episode.referral_id))"></span>
                    Referral ID
                  </label>
                  <span>{{ episode.referral_id || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE05_002', episode.referral_received_date_formatted || episode.referral_received_date)"
                      [title]="getFieldTooltip(getFieldStatus('DE05_002', episode.referral_received_date_formatted || episode.referral_received_date))"></span>
                    Received Date
                  </label>
                  <span>{{ episode.referral_received_date_formatted || episode.referral_received_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE05_003', episode.referral_source)"
                      [title]="getFieldTooltip(getFieldStatus('DE05_003', episode.referral_source))"></span>
                    @if (getMappingStatus('DE05_004', episode.referral_source_type) !== 'not-checked') {
                      <span class="mapping-indicator" [class]="getMappingStatus('DE05_004', episode.referral_source_type)"
                        [title]="getMappingTooltip('DE05_004', episode.referral_source_type)">{{ getMappingStatus('DE05_004', episode.referral_source_type) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                    }
                    Source
                  </label>
                  <span>{{ episode.referral_source || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE05_004', episode.referral_type)"
                      [title]="getFieldTooltip(getFieldStatus('DE05_004', episode.referral_type))"></span>
                    @if (getMappingStatus('DE05_005', episode.referral_type) !== 'not-checked') {
                      <span class="mapping-indicator" [class]="getMappingStatus('DE05_005', episode.referral_type)"
                        [title]="getMappingTooltip('DE05_005', episode.referral_type)">{{ getMappingStatus('DE05_005', episode.referral_type) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                    }
                    Type
                  </label>
                  <span>{{ episode.referral_type || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- DE06: Episode of Care -->
            <div class="episode-section">
              <h4>Episode of Care (DE06)</h4>
              <div class="field-row">
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_000', episode.episode_of_care_id)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_000', episode.episode_of_care_id))"></span>
                    Episode ID
                  </label>
                  <span>{{ episode.episode_of_care_id || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_001', episode.episode_of_care_status)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_001', episode.episode_of_care_status))"></span>
                    @if (getMappingStatus('DE06_002', episode.episode_of_care_status) !== 'not-checked') {
                      <span class="mapping-indicator" [class]="getMappingStatus('DE06_002', episode.episode_of_care_status)"
                        [title]="getMappingTooltip('DE06_002', episode.episode_of_care_status)">{{ getMappingStatus('DE06_002', episode.episode_of_care_status) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                    }
                    Status
                  </label>
                  <span>{{ episode.episode_of_care_status || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_002', episode.first_contact_date_formatted || episode.first_contact_date)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_002', episode.first_contact_date_formatted || episode.first_contact_date))"></span>
                    First Contact
                  </label>
                  <span>{{ episode.first_contact_date_formatted || episode.first_contact_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_003', episode.eligibility_screening_date_formatted || episode.eligibility_screening_date)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_003', episode.eligibility_screening_date_formatted || episode.eligibility_screening_date))"></span>
                    Eligibility Screening
                  </label>
                  <span>{{ episode.eligibility_screening_date_formatted || episode.eligibility_screening_date || '-' }}</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_004', episode.initial_assessment_date_formatted || episode.initial_assessment_date)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_004', episode.initial_assessment_date_formatted || episode.initial_assessment_date))"></span>
                    Assessment Date
                  </label>
                  <span>{{ episode.initial_assessment_date_formatted || episode.initial_assessment_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_005', episode.service_initiation_date_formatted || episode.service_initiation_date)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_005', episode.service_initiation_date_formatted || episode.service_initiation_date))"></span>
                    Service Initiation
                  </label>
                  <span>{{ episode.service_initiation_date_formatted || episode.service_initiation_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_008', episode.service_enrollment_date_formatted || episode.service_enrollment_date)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_008', episode.service_enrollment_date_formatted || episode.service_enrollment_date))"></span>
                    Enrollment Date
                  </label>
                  <span>{{ episode.service_enrollment_date_formatted || episode.service_enrollment_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_010', episode.service_termination_date_formatted || episode.service_termination_date)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_010', episode.service_termination_date_formatted || episode.service_termination_date))"></span>
                    Termination Date
                  </label>
                  <span>{{ episode.service_termination_date_formatted || episode.service_termination_date || '-' }}</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE06_009', episode.service_termination_reason)"
                      [title]="getFieldTooltip(getFieldStatus('DE06_009', episode.service_termination_reason))"></span>
                    @if (getMappingStatus('DE06_009', episode.service_termination_reason) !== 'not-checked') {
                      <span class="mapping-indicator" [class]="getMappingStatus('DE06_009', episode.service_termination_reason)"
                        [title]="getMappingTooltip('DE06_009', episode.service_termination_reason)">{{ getMappingStatus('DE06_009', episode.service_termination_reason) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                    }
                    Termination Reason
                  </label>
                  <span>{{ episode.service_termination_reason || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- DE09: Health Program -->
            <div class="episode-section">
              <h4>Health Program (DE09)</h4>
              <div class="field-row">
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE09_001', episode.health_program_name)"
                      [title]="getFieldTooltip(getFieldStatus('DE09_001', episode.health_program_name))"></span>
                    @if (getMappingStatus('DE09_001', episode.health_program_name) !== 'not-checked') {
                      <span class="mapping-indicator" [class]="getMappingStatus('DE09_001', episode.health_program_name)"
                        [title]="getMappingTooltip('DE09_001', episode.health_program_name)">{{ getMappingStatus('DE09_001', episode.health_program_name) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                    }
                    Program Number
                  </label>
                  <span>{{ getMappedCode('DE09_001', episode.health_program_name) || episode.health_program_number || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE09_002', episode.health_program_name)"
                      [title]="getFieldTooltip(getFieldStatus('DE09_002', episode.health_program_name))"></span>
                    Program Name
                  </label>
                  <span>{{ episode.health_program_name || '-' }}</span>
                </div>
                <div class="field">
                  <label>
                    <span class="field-indicator" [class]="getFieldStatus('DE09_003', episode.functional_centre)"
                      [title]="getFieldTooltip(getFieldStatus('DE09_003', episode.functional_centre))"></span>
                    @if (getMappingStatus('DE09_003', episode.functional_centre_mapped) !== 'not-checked') {
                      <span class="mapping-indicator" [class]="getMappingStatus('DE09_003', episode.functional_centre_mapped)"
                        [title]="getMappingTooltip('DE09_003', episode.functional_centre_mapped)">{{ getMappingStatus('DE09_003', episode.functional_centre_mapped) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                    }
                    Functional Centre
                  </label>
                  <span>{{ episode.functional_centre_mapped || episode.functional_centre || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- Submission Info -->
            <div class="episode-section submission-info">
              <h4>Submission</h4>
              <div class="field-row">
                <div class="field">
                  <label>Status</label>
                  <span class="status-badge" [class]="getStatusClass(episode.submission_status)">
                    {{ episode.submission_status || 'N/A' }}
                  </span>
                </div>
                <div class="field">
                  <label>Submitted</label>
                  <span>{{ episode.submission_dt_tm_formatted || episode.submission_dt_tm || '-' }}</span>
                </div>
                <div class="field">
                  <label>Batch ID</label>
                  <span>{{ episode.submission_batch_id || '-' }}</span>
                </div>
                <div class="field">
                  <label>Response ID</label>
                  <span>{{ episode.submission_response_id || '-' }}</span>
                </div>
                @if (episode.error_message) {
                  <div class="field error-field">
                    <label>Error</label>
                    <span>{{ episode.error_message }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Services List -->
            <div class="episode-section services-section">
              <h4>Services ({{ episode.services?.length || 0 }})</h4>
              @if (episode.services && episode.services.length > 0) {
                <app-service-list
                  [services]="episode.services"
                  [activeSubmitFields]="activeSubmitFields()"
                  [fieldValidations]="fieldValidations()" />
              } @else {
                <p class="no-services">No services recorded</p>
              }
            </div>

            <!-- Appointments List (DE06.006/DE06.007) -->
            <div class="episode-section appointments-section">
              <h4>Scheduled Appointments ({{ episode.appointments?.length || 0 }})</h4>
              @if (episode.appointments && episode.appointments.length > 0) {
                <app-appointment-list
                  [appointments]="episode.appointments"
                  [activeSubmitFields]="activeSubmitFields()"
                  [fieldValidations]="fieldValidations()" />
              } @else {
                <p class="no-appointments">No appointments scheduled</p>
              }
            </div>
          </div>
        }
      </div>
    }
  }
</div>
`, styles: ["/* src/app/patients/components/episode-list.scss */\n.episode-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.no-episodes {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px;\n}\n.episode-card {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n  background: white;\n}\n.episode-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.15s;\n}\n.episode-header:hover {\n  background: #e9ecef;\n}\n.episode-header .episode-summary {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.episode-header .episode-summary .episode-id {\n  font-weight: 600;\n  color: #1a365d;\n  font-size: 0.875rem;\n}\n.episode-header .episode-summary .episode-program {\n  color: #6c757d;\n  font-size: 0.8125rem;\n}\n.episode-header .episode-meta {\n  display: flex;\n  gap: 16px;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 4px;\n}\n.episode-header .expand-icon {\n  color: #6c757d;\n  font-size: 0.75rem;\n  margin-left: 12px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.episode-content {\n  padding: 0;\n  border-top: 1px solid #dee2e6;\n}\n.episode-section {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.episode-section:last-child {\n  border-bottom: none;\n}\n.episode-section h4 {\n  margin: 0 0 10px 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.episode-section.submission-info {\n  background: #f8f9fa;\n}\n.episode-section.services-section {\n  padding-bottom: 0;\n}\n.field-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.field-row:last-child {\n  margin-bottom: 0;\n}\n.field {\n  flex: 1;\n  min-width: 150px;\n}\n.field label {\n  display: block;\n  font-size: 0.6875rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n.field span {\n  font-size: 0.8125rem;\n  color: #212529;\n}\n.field.error-field span {\n  color: #721c24;\n}\n.no-services,\n.no-appointments {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px;\n  margin: 0;\n  background: #fafafa;\n}\n.appointments-section {\n  padding-bottom: 0;\n}\n@media (max-width: 768px) {\n  .episode-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .episode-header .episode-meta {\n    margin-top: 0;\n  }\n  .episode-header .expand-icon {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .field {\n    min-width: 120px;\n  }\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpisodeListComponent, { className: "EpisodeListComponent", filePath: "src/app/patients/components/episode-list.ts", lineNumber: 20 });
})();

// src/app/patients/components/patient-actions-sidebar.ts
function PatientActionsSidebarComponent_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_7_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initiateRevertAll());
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Revert All Records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5, "\u21A9");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.reverting());
  }
}
function PatientActionsSidebarComponent_div_7_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 29)(2, "input", 30);
    \u0275\u0275listener("change", function PatientActionsSidebarComponent_div_7_div_16_div_1_Template_input_change_2_listener() {
      const record_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleRecordSelection(record_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isRecordSelected(record_r5.id))("disabled", ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", record_r5.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("pending", record_r5.status === "PENDING")("submitted", record_r5.status === "SUBMITTED")("failed", record_r5.status === "FAILED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r5.status, " ");
  }
}
function PatientActionsSidebarComponent_div_7_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, PatientActionsSidebarComponent_div_7_div_16_div_1_Template, 7, 10, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recordsForSelection())("ngForTrackBy", ctx_r1.trackByRecordId);
  }
}
function PatientActionsSidebarComponent_div_7_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "No records available");
    \u0275\u0275elementEnd();
  }
}
function PatientActionsSidebarComponent_div_7_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_7_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initiateRevertSelected());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, "\u21A9");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.hasSelectedRecords() || ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Revert Selected (", ctx_r1.selectedRecords().size, ")");
  }
}
function PatientActionsSidebarComponent_div_7_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const record_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(record_r7.type);
    \u0275\u0275advance();
    \u0275\u0275classProp("pending", record_r7.status === "PENDING")("submitted", record_r7.status === "SUBMITTED")("failed", record_r7.status === "FAILED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r7.status, " ");
  }
}
function PatientActionsSidebarComponent_div_7_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, " No submission history ");
    \u0275\u0275elementEnd();
  }
}
function PatientActionsSidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "section", 8)(2, "h3", 9);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_7_Template_h3_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleQuickActions());
    });
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "\u25B6");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, PatientActionsSidebarComponent_div_7_div_9_Template, 6, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "section", 13)(11, "h3", 14)(12, "span", 15);
    \u0275\u0275text(13, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Revert Individual ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 16);
    \u0275\u0275template(16, PatientActionsSidebarComponent_div_7_div_16_Template, 2, 2, "div", 17)(17, PatientActionsSidebarComponent_div_7_ng_template_17_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, PatientActionsSidebarComponent_div_7_button_19_Template, 5, 2, "button", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "section", 19)(21, "h3", 14)(22, "span", 20);
    \u0275\u0275text(23, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Submission History ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 16);
    \u0275\u0275template(26, PatientActionsSidebarComponent_div_7_div_26_Template, 6, 8, "div", 21)(27, PatientActionsSidebarComponent_div_7_p_27_Template, 2, 0, "p", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noRecords_r8 = \u0275\u0275reference(18);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("expanded", ctx_r1.quickActionsExpanded());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.quickActionsExpanded());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.recordsForSelection().length > 0)("ngIfElse", noRecords_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.recordsForSelection().length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.recordsForSelection())("ngForTrackBy", ctx_r1.trackByRecordId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recordsForSelection().length === 0);
  }
}
function PatientActionsSidebarComponent_div_8_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Confirm Revert All");
    \u0275\u0275elementEnd();
  }
}
function PatientActionsSidebarComponent_div_8_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reverting...");
    \u0275\u0275elementEnd();
  }
}
function PatientActionsSidebarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "h2");
    \u0275\u0275text(4, "Confirm Revert All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "p", 45)(9, "span", 46);
    \u0275\u0275text(10, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " This will revert ALL records for this patient back to PENDING status. This action cannot be undone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 47);
    \u0275\u0275text(13, "Are you sure you want to continue?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 48)(15, "button", 49);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(16, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 50);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_8_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRevertAll());
    });
    \u0275\u0275template(18, PatientActionsSidebarComponent_div_8_span_18_Template, 2, 0, "span", 51)(19, PatientActionsSidebarComponent_div_8_span_19_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.reverting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.reverting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reverting());
  }
}
function PatientActionsSidebarComponent_div_9_ng_container_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r11.label, " ");
  }
}
function PatientActionsSidebarComponent_div_9_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PatientActionsSidebarComponent_div_9_ng_container_16_li_1_Template, 2, 1, "li", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const record_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRecordSelected(record_r11.id));
  }
}
function PatientActionsSidebarComponent_div_9_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Confirm Revert Selected");
    \u0275\u0275elementEnd();
  }
}
function PatientActionsSidebarComponent_div_9_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reverting...");
    \u0275\u0275elementEnd();
  }
}
function PatientActionsSidebarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "h2");
    \u0275\u0275text(4, "Confirm Revert Selected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "p", 45)(9, "span", 46);
    \u0275\u0275text(10, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52)(13, "h4");
    \u0275\u0275text(14, "Records to revert:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul");
    \u0275\u0275template(16, PatientActionsSidebarComponent_div_9_ng_container_16_Template, 2, 1, "ng-container", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 47);
    \u0275\u0275text(18, "Are you sure you want to continue?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 48)(20, "button", 49);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_9_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(21, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 50);
    \u0275\u0275listener("click", function PatientActionsSidebarComponent_div_9_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRevertSelected());
    });
    \u0275\u0275template(23, PatientActionsSidebarComponent_div_9_span_23_Template, 2, 0, "span", 51)(24, PatientActionsSidebarComponent_div_9_span_24_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" This will revert ", ctx_r1.selectedRecords().size, " selected record(s) back to PENDING status. This action cannot be undone. ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.recordsForSelection())("ngForTrackBy", ctx_r1.trackByRecordId);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.reverting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.reverting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reverting());
  }
}
var PatientActionsSidebarComponent = class _PatientActionsSidebarComponent {
  patientsService = inject(PatientsService);
  // Inputs
  patientDetail = input(null, ...ngDevMode ? [{ debugName: "patientDetail" }] : []);
  // Outputs
  revertCompleted = output();
  // Local signals
  sidebarExpanded = signal(this.getSidebarState(), ...ngDevMode ? [{ debugName: "sidebarExpanded" }] : []);
  quickActionsExpanded = signal(false, ...ngDevMode ? [{ debugName: "quickActionsExpanded" }] : []);
  // Collapsed by default
  showRevertAllConfirm = signal(false, ...ngDevMode ? [{ debugName: "showRevertAllConfirm" }] : []);
  showRevertSelectedConfirm = signal(false, ...ngDevMode ? [{ debugName: "showRevertSelectedConfirm" }] : []);
  selectedRecords = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedRecords" }] : []);
  reverting = this.patientsService.reverting;
  // Computed
  hasSelectedRecords = computed(() => this.selectedRecords().size > 0, ...ngDevMode ? [{ debugName: "hasSelectedRecords" }] : []);
  recordsForSelection = computed(() => {
    const patient = this.patientDetail();
    if (!patient?.episodes)
      return [];
    const records = [];
    patient.episodes.forEach((episode, eIdx) => {
      records.push({
        id: `episode_${eIdx}`,
        label: `Episode: ${episode.health_program_name || "Unnamed"}`,
        type: "EPISODE",
        status: episode.submission_status
      });
      records.push({
        id: `client_${eIdx}`,
        label: `Client Data (Captured: ${patient.client?.extracted_dt_tm_formatted || "N/A"})`,
        type: "CLIENT",
        status: patient.client?.submission_status || ""
      });
      if (episode.services) {
        episode.services.forEach((service, sIdx) => {
          records.push({
            id: `service_${eIdx}_${sIdx}`,
            label: `Service ${sIdx + 1}: ${service.service_modality || "Event"} (${service.encounter_date_formatted || "N/A"})`,
            type: "SERVICE",
            status: service.submission_status
          });
        });
      }
    });
    return records;
  }, ...ngDevMode ? [{ debugName: "recordsForSelection" }] : []);
  constructor() {
    effect(() => {
      const isExpanded = this.sidebarExpanded();
      localStorage.setItem("mha_pds_sidebar_expanded", String(isExpanded));
    });
  }
  /**
   * Get sidebar expanded state from localStorage
   */
  getSidebarState() {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("mha_pds_sidebar_expanded");
      return saved === null ? true : saved === "true";
    }
    return true;
  }
  /**
   * Toggle sidebar expansion
   */
  toggleSidebar() {
    this.sidebarExpanded.update((v) => !v);
  }
  /**
   * Toggle quick actions section expansion
   */
  toggleQuickActions() {
    this.quickActionsExpanded.update((v) => !v);
  }
  /**
   * Toggle individual record selection
   */
  toggleRecordSelection(recordId) {
    this.selectedRecords.update((selected) => {
      const newSet = new Set(selected);
      if (newSet.has(recordId)) {
        newSet.delete(recordId);
      } else {
        newSet.add(recordId);
      }
      return newSet;
    });
  }
  /**
   * Check if a record is selected
   */
  isRecordSelected(recordId) {
    return this.selectedRecords().has(recordId);
  }
  /**
   * Start revert all confirmation
   */
  initiateRevertAll() {
    this.showRevertAllConfirm.set(true);
  }
  /**
   * Start revert selected confirmation
   */
  initiateRevertSelected() {
    this.showRevertSelectedConfirm.set(true);
  }
  /**
   * Cancel revert operation
   */
  cancelRevert() {
    this.showRevertAllConfirm.set(false);
    this.showRevertSelectedConfirm.set(false);
  }
  /**
   * Track by function for record list ngFor
   */
  trackByRecordId(index, record) {
    return record.id;
  }
  /**
   * Clear selected records
   */
  clearSelectedRecords() {
    this.selectedRecords.set(/* @__PURE__ */ new Set());
  }
  /**
   * Confirm and execute revert all
   */
  confirmRevertAll() {
    const patient = this.patientDetail();
    if (!patient || !patient.client) {
      console.error("Patient data not available for revert operation");
      return;
    }
    this.patientsService.revertPatientRecords(patient.client.person_id, "ALL", void 0, () => {
      this.showRevertAllConfirm.set(false);
      this.clearSelectedRecords();
      this.revertCompleted.emit();
    }, (error) => {
      console.error("Revert all failed:", error);
    });
  }
  /**
   * Confirm and execute revert selected
   */
  confirmRevertSelected() {
    const patient = this.patientDetail();
    if (!patient || !patient.client) {
      console.error("Patient data not available for revert operation");
      return;
    }
    const selectedIds = Array.from(this.selectedRecords());
    const serviceIds = selectedIds.filter((id) => id.startsWith("service_")).map((id) => id.substring("service_".length));
    let recordType = "SERVICE";
    if (selectedIds.some((id) => id.startsWith("episode_"))) {
      recordType = "EPISODE";
    } else if (selectedIds.some((id) => id.startsWith("client_"))) {
      recordType = "CLIENT";
    }
    this.patientsService.revertPatientRecords(patient.client.person_id, recordType, serviceIds.length > 0 ? serviceIds : void 0, () => {
      this.showRevertSelectedConfirm.set(false);
      this.clearSelectedRecords();
      this.revertCompleted.emit();
    }, (error) => {
      console.error("Revert selected failed:", error);
    });
  }
  static \u0275fac = function PatientActionsSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientActionsSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientActionsSidebarComponent, selectors: [["app-patient-actions-sidebar"]], inputs: { patientDetail: [1, "patientDetail"] }, outputs: { revertCompleted: "revertCompleted" }, decls: 10, vars: 6, consts: [["noRecords", ""], [1, "actions-sidebar"], [1, "sidebar-header"], ["aria-label", "Toggle sidebar", 1, "toggle-btn", 3, "click"], ["aria-label", "Expand/collapse sidebar", 1, "toggle-icon"], ["class", "sidebar-content", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "sidebar-content"], [1, "sidebar-section", "quick-actions-section"], [1, "section-header", 3, "click"], ["aria-label", "Lightning bolt icon", 1, "section-icon"], [1, "collapse-arrow"], ["class", "section-content quick-actions-content", 4, "ngIf"], [1, "sidebar-section", "revert-section"], [1, "section-header"], ["aria-label", "Checkbox icon", 1, "section-icon"], [1, "section-content"], ["class", "records-list", 4, "ngIf", "ngIfElse"], ["class", "action-btn submit-selected-btn", 3, "disabled", "click", 4, "ngIf"], [1, "sidebar-section"], ["aria-label", "Document list icon", 1, "section-icon"], ["class", "history-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "no-history-message", 4, "ngIf"], [1, "section-content", "quick-actions-content"], [1, "action-btn", "quick-action-btn", 3, "click", "disabled"], [1, "btn-icon"], [1, "records-list"], ["class", "record-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "record-item"], [1, "record-label"], ["type", "checkbox", 1, "record-checkbox", 3, "change", "checked", "disabled"], [1, "record-text"], [1, "status-badge"], [1, "no-records-message"], [1, "action-btn", "submit-selected-btn", 3, "click", "disabled"], [1, "history-item"], [1, "history-row"], [1, "history-label"], [1, "history-status"], [1, "no-history-message"], [1, "modal-overlay"], [1, "modal-dialog"], [1, "modal-header"], ["aria-label", "Close dialog", 1, "close-btn", 3, "click"], [1, "modal-body"], [1, "warning-text"], ["aria-label", "Warning icon", 1, "warning-icon"], [1, "confirmation-text"], [1, "modal-footer"], [1, "btn-cancel", 3, "click", "disabled"], [1, "btn-confirm-revert", 3, "click", "disabled"], [4, "ngIf"], [1, "selected-records-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "record-item-in-list", 4, "ngIf"], [1, "record-item-in-list"]], template: function PatientActionsSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 1)(1, "div", 2)(2, "h2");
      \u0275\u0275text(3, "Patient Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function PatientActionsSidebarComponent_Template_button_click_4_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "\u25B6");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, PatientActionsSidebarComponent_div_7_Template, 28, 9, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, PatientActionsSidebarComponent_div_8_Template, 20, 4, "div", 6)(9, PatientActionsSidebarComponent_div_9_Template, 25, 7, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", !ctx.sidebarExpanded());
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-expanded", ctx.sidebarExpanded());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.sidebarExpanded());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRevertAllConfirm());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRevertSelectedConfirm());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n.actions-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background-color: #f8f9fa;\n  border-left: 1px solid #dee2e6;\n  max-height: 100vh;\n  overflow-y: auto;\n  transition: width 0.3s ease, margin-right 0.3s ease;\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 60px;\n  overflow: hidden;\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: none;\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-bottom: 1px solid #dee2e6;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  transition: opacity 0.3s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: color 0.2s ease, transform 0.3s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #495057;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  color: #212529;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 1;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .collapse-arrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .collapse-arrow.expanded[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]:has(.section-content)   .section-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .quick-actions-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  padding: 0;\n  border-top: 1px solid #dee2e6;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .quick-actions-content[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-bottom: 1px solid #dee2e6;\n  margin: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .quick-actions-content[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.revert-section[_ngcontent-%COMP%]    > .section-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 45vh;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.revert-section[_ngcontent-%COMP%]    > .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.revert-section[_ngcontent-%COMP%]    > .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px;\n  border-radius: 4px;\n  background-color: #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  flex: 1;\n  cursor: pointer;\n  margin: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%]   .record-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%]   .record-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #495057;\n  word-break: break-word;\n  line-height: 1.4;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge.pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge.submitted[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge.failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .no-records-message[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline-block;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.quick-action-btn[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: #fff;\n  margin-bottom: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.quick-action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0b5ed7;\n  box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.quick-action-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.submit-selected-btn[_ngcontent-%COMP%] {\n  background-color: #198754;\n  color: #fff;\n  margin-top: 8px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.submit-selected-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #157347;\n  box-shadow: 0 2px 8px rgba(25, 135, 84, 0.3);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.submit-selected-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status.pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status.submitted[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status.failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .no-history-message[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 24px;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 0 0 16px 0;\n  padding: 12px;\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 4px;\n  color: #856404;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .confirmation-text[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  color: #495057;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  list-style: disc;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 13px;\n  color: #495057;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .record-item-in-list[_ngcontent-%COMP%] {\n  display: block;\n  word-break: break-word;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid #dee2e6;\n  background-color: #f8f9fa;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 4px;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #dee2e6;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm-revert[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: #fff;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm-revert[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm-revert[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .actions-sidebar[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n  .actions-sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media (max-width: 576px) {\n  .actions-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-left: none;\n    border-right: 1px solid #dee2e6;\n  }\n  .actions-sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientActionsSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-patient-actions-sidebar", standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<aside class="actions-sidebar" [class.collapsed]="!sidebarExpanded()">
  <!-- Sidebar Header -->
  <div class="sidebar-header">
    <h2>Patient Actions</h2>
    <button
      class="toggle-btn"
      (click)="toggleSidebar()"
      [attr.aria-expanded]="sidebarExpanded()"
      aria-label="Toggle sidebar">
      <span class="toggle-icon" aria-label="Expand/collapse sidebar">\u25B6</span>
    </button>
  </div>

  <!-- Sidebar Content -->
  <div class="sidebar-content" *ngIf="sidebarExpanded()">
    <!-- Quick Actions Section - Collapsible -->
    <section class="sidebar-section quick-actions-section">
      <h3 class="section-header" (click)="toggleQuickActions()">
        <span class="section-icon" aria-label="Lightning bolt icon">\u26A1</span>
        <span>Quick Actions</span>
        <span class="collapse-arrow" [class.expanded]="quickActionsExpanded()">\u25B6</span>
      </h3>
      <div class="section-content quick-actions-content" *ngIf="quickActionsExpanded()">
        <button
          class="action-btn quick-action-btn"
          (click)="initiateRevertAll()"
          [disabled]="reverting()">
          <span>Revert All Records</span>
          <span class="btn-icon">\u21A9</span>
        </button>
      </div>
    </section>

    <!-- Revert Individual Section -->
    <section class="sidebar-section revert-section">
      <h3 class="section-header">
        <span class="section-icon" aria-label="Checkbox icon">\u2713</span>
        Revert Individual
      </h3>
      <div class="section-content">
        <div class="records-list" *ngIf="recordsForSelection().length > 0; else noRecords">
          <div class="record-item" *ngFor="let record of recordsForSelection(); trackBy: trackByRecordId">
            <label class="record-label">
              <input
                type="checkbox"
                class="record-checkbox"
                [checked]="isRecordSelected(record.id)"
                (change)="toggleRecordSelection(record.id)"
                [disabled]="reverting()" />
              <span class="record-text">
                {{ record.label }}
              </span>
            </label>
            <span
              class="status-badge"
              [class.pending]="record.status === 'PENDING'"
              [class.submitted]="record.status === 'SUBMITTED'"
              [class.failed]="record.status === 'FAILED'">
              {{ record.status }}
            </span>
          </div>
        </div>
        <ng-template #noRecords>
          <p class="no-records-message">No records available</p>
        </ng-template>

        <button
          class="action-btn submit-selected-btn"
          (click)="initiateRevertSelected()"
          [disabled]="!hasSelectedRecords() || reverting()"
          *ngIf="recordsForSelection().length > 0">
          <span>Revert Selected ({{ selectedRecords().size }})</span>
          <span class="btn-icon">\u21A9</span>
        </button>
      </div>
    </section>

    <!-- Submission History Section -->
    <section class="sidebar-section">
      <h3 class="section-header">
        <span class="section-icon" aria-label="Document list icon">\u{1F4CB}</span>
        Submission History
      </h3>
      <div class="section-content">
        <div class="history-item" *ngFor="let record of recordsForSelection(); trackBy: trackByRecordId">
          <div class="history-row">
            <span class="history-label">{{ record.type }}</span>
            <span
              class="history-status"
              [class.pending]="record.status === 'PENDING'"
              [class.submitted]="record.status === 'SUBMITTED'"
              [class.failed]="record.status === 'FAILED'">
              {{ record.status }}
            </span>
          </div>
        </div>
        <p class="no-history-message" *ngIf="recordsForSelection().length === 0">
          No submission history
        </p>
      </div>
    </section>
  </div>
</aside>

<!-- Revert All Confirmation Modal -->
<div class="modal-overlay" *ngIf="showRevertAllConfirm()">
  <div class="modal-dialog">
    <div class="modal-header">
      <h2>Confirm Revert All</h2>
      <button
        class="close-btn"
        (click)="cancelRevert()"
        aria-label="Close dialog">
        \u2715
      </button>
    </div>
    <div class="modal-body">
      <p class="warning-text">
        <span class="warning-icon" aria-label="Warning icon">\u26A0</span>
        This will revert ALL records for this patient back to PENDING status. This action cannot be undone.
      </p>
      <p class="confirmation-text">Are you sure you want to continue?</p>
    </div>
    <div class="modal-footer">
      <button
        class="btn-cancel"
        (click)="cancelRevert()"
        [disabled]="reverting()">
        Cancel
      </button>
      <button
        class="btn-confirm-revert"
        (click)="confirmRevertAll()"
        [disabled]="reverting()">
        <span *ngIf="!reverting()">Confirm Revert All</span>
        <span *ngIf="reverting()">Reverting...</span>
      </button>
    </div>
  </div>
</div>

<!-- Revert Selected Confirmation Modal -->
<div class="modal-overlay" *ngIf="showRevertSelectedConfirm()">
  <div class="modal-dialog">
    <div class="modal-header">
      <h2>Confirm Revert Selected</h2>
      <button
        class="close-btn"
        (click)="cancelRevert()"
        aria-label="Close dialog">
        \u2715
      </button>
    </div>
    <div class="modal-body">
      <p class="warning-text">
        <span class="warning-icon" aria-label="Warning icon">\u26A0</span>
        This will revert {{ selectedRecords().size }} selected record(s) back to PENDING status. This action cannot be undone.
      </p>
      <div class="selected-records-list">
        <h4>Records to revert:</h4>
        <ul>
          <ng-container *ngFor="let record of recordsForSelection(); trackBy: trackByRecordId">
            <li *ngIf="isRecordSelected(record.id)" class="record-item-in-list">
              {{ record.label }}
            </li>
          </ng-container>
        </ul>
      </div>
      <p class="confirmation-text">Are you sure you want to continue?</p>
    </div>
    <div class="modal-footer">
      <button
        class="btn-cancel"
        (click)="cancelRevert()"
        [disabled]="reverting()">
        Cancel
      </button>
      <button
        class="btn-confirm-revert"
        (click)="confirmRevertSelected()"
        [disabled]="reverting()">
        <span *ngIf="!reverting()">Confirm Revert Selected</span>
        <span *ngIf="reverting()">Reverting...</span>
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/patients/components/patient-actions-sidebar.scss */\n.actions-sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background-color: #f8f9fa;\n  border-left: 1px solid #dee2e6;\n  max-height: 100vh;\n  overflow-y: auto;\n  transition: width 0.3s ease, margin-right 0.3s ease;\n}\n.actions-sidebar.collapsed {\n  width: 60px;\n  overflow: hidden;\n}\n.actions-sidebar.collapsed .sidebar-header h2 {\n  display: none;\n}\n.actions-sidebar.collapsed .toggle-icon {\n  transform: rotate(180deg);\n}\n.actions-sidebar.collapsed .sidebar-content {\n  display: none;\n}\n.actions-sidebar .sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-bottom: 1px solid #dee2e6;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  transition: opacity 0.3s ease;\n}\n.actions-sidebar .sidebar-header .toggle-btn {\n  background: none;\n  border: none;\n  padding: 4px 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: color 0.2s ease, transform 0.3s ease;\n}\n.actions-sidebar .sidebar-header .toggle-btn:hover {\n  color: #495057;\n}\n.actions-sidebar .sidebar-header .toggle-btn .toggle-icon {\n  font-size: 14px;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar .sidebar-content {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.actions-sidebar .sidebar-content .sidebar-section {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.actions-sidebar .sidebar-content .sidebar-section:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  color: #212529;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header .section-icon {\n  font-size: 16px;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header span:nth-child(2) {\n  flex: 1;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header .collapse-arrow {\n  font-size: 12px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header .collapse-arrow.expanded {\n  transform: rotate(90deg);\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .section-header {\n  border-bottom: none;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section:has(.section-content) .section-header {\n  border-bottom: 1px solid #dee2e6;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .quick-actions-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  padding: 0;\n  border-top: 1px solid #dee2e6;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .quick-actions-content .quick-action-btn {\n  border-radius: 0;\n  border-bottom: 1px solid #dee2e6;\n  margin: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .quick-actions-content .quick-action-btn:last-child {\n  border-bottom: none;\n}\n.actions-sidebar .sidebar-content .sidebar-section.revert-section > .section-content {\n  display: flex;\n  flex-direction: column;\n  max-height: 45vh;\n}\n.actions-sidebar .sidebar-content .sidebar-section.revert-section > .section-content .records-list {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n}\n.actions-sidebar .sidebar-content .sidebar-section.revert-section > .section-content .action-btn {\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content {\n  padding: 12px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px;\n  border-radius: 4px;\n  background-color: #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .record-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  flex: 1;\n  cursor: pointer;\n  margin: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .record-label .record-checkbox {\n  margin-top: 2px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .record-label .record-text {\n  font-size: 13px;\n  color: #495057;\n  word-break: break-word;\n  line-height: 1.4;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge {\n  flex-shrink: 0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge.pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge.submitted {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge.failed {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .no-records-message {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn {\n  width: 100%;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn .btn-icon {\n  font-size: 14px;\n  display: inline-block;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.quick-action-btn {\n  background-color: #0d6efd;\n  color: #fff;\n  margin-bottom: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.quick-action-btn:hover:not(:disabled) {\n  background-color: #0b5ed7;\n  box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.quick-action-btn:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.submit-selected-btn {\n  background-color: #198754;\n  color: #fff;\n  margin-top: 8px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.submit-selected-btn:hover:not(:disabled) {\n  background-color: #157347;\n  box-shadow: 0 2px 8px rgba(25, 135, 84, 0.3);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.submit-selected-btn:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-label {\n  color: #6c757d;\n  font-weight: 500;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status {\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status.pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status.submitted {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status.failed {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .no-history-message {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-overlay .modal-dialog {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideUp 0.3s ease-out;\n}\n.modal-overlay .modal-dialog .modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-overlay .modal-dialog .modal-header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-header .close-btn {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 24px;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.modal-overlay .modal-dialog .modal-header .close-btn:hover {\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-body {\n  padding: 20px;\n}\n.modal-overlay .modal-dialog .modal-body .warning-text {\n  display: flex;\n  gap: 12px;\n  margin: 0 0 16px 0;\n  padding: 12px;\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 4px;\n  color: #856404;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay .modal-dialog .modal-body .warning-text .warning-icon {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.modal-overlay .modal-dialog .modal-body .confirmation-text {\n  margin: 12px 0;\n  color: #495057;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list {\n  margin: 16px 0;\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list h4 {\n  margin: 0 0 8px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list ul {\n  margin: 0;\n  padding-left: 20px;\n  list-style: disc;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list ul li {\n  margin-bottom: 4px;\n  font-size: 13px;\n  color: #495057;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list ul li .record-item-in-list {\n  display: block;\n  word-break: break-word;\n}\n.modal-overlay .modal-dialog .modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid #dee2e6;\n  background-color: #f8f9fa;\n}\n.modal-overlay .modal-dialog .modal-footer button {\n  padding: 10px 20px;\n  border-radius: 4px;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modal-overlay .modal-dialog .modal-footer button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-cancel {\n  background-color: #e9ecef;\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-cancel:hover:not(:disabled) {\n  background-color: #dee2e6;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-confirm-revert {\n  background-color: #dc3545;\n  color: #fff;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-confirm-revert:hover:not(:disabled) {\n  background-color: #c82333;\n  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-confirm-revert:active:not(:disabled) {\n  transform: scale(0.98);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .actions-sidebar {\n    width: 280px;\n  }\n  .actions-sidebar.collapsed {\n    width: 50px;\n  }\n  .modal-overlay .modal-dialog {\n    width: 95%;\n  }\n}\n@media (max-width: 576px) {\n  .actions-sidebar {\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-left: none;\n    border-right: 1px solid #dee2e6;\n  }\n  .actions-sidebar.collapsed {\n    width: 40px;\n  }\n  .modal-overlay .modal-dialog {\n    width: 100%;\n    max-width: 100%;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientActionsSidebarComponent, { className: "PatientActionsSidebarComponent", filePath: "src/app/patients/components/patient-actions-sidebar.ts", lineNumber: 24 });
})();

// src/app/patients/components/patient-detail.ts
function PatientDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading patient details...");
    \u0275\u0275elementEnd()();
  }
}
function PatientDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 5);
    \u0275\u0275element(3, "path", 6)(4, "circle", 7)(5, "path", 8)(6, "path", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Select a patient to view details");
    \u0275\u0275elementEnd()();
  }
}
function PatientDetailComponent_Conditional_3_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Removing... ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Remove Patient ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_30_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 47);
    \u0275\u0275text(1, " Removing... ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_30_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirm Remove ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 42)(2, "h3");
    \u0275\u0275text(3, "Remove Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Are you sure you want to remove ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " from MHA PDS?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 43);
    \u0275\u0275text(10, "This will deactivate all records for this patient. They can be re-added later if needed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 44)(12, "button", 45);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Conditional_30_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRemovePatient());
    });
    \u0275\u0275text(13, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 46);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Conditional_30_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRemovePatient());
    });
    \u0275\u0275conditionalCreate(15, PatientDetailComponent_Conditional_3_Conditional_30_Conditional_15_Template, 2, 0)(16, PatientDetailComponent_Conditional_3_Conditional_30_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", (tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.de01_001_first_name, " ", (tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.de01_003_last_name);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.removing());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.removing());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.removing() ? 15 : 16);
  }
}
function PatientDetailComponent_Conditional_3_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 48)(2, "div", 49)(3, "label");
    \u0275\u0275element(4, "span", 50);
    \u0275\u0275text(5, " First Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "label");
    \u0275\u0275element(10, "span", 50);
    \u0275\u0275text(11, " Middle Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "label");
    \u0275\u0275element(16, "span", 50);
    \u0275\u0275text(17, " Last Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 49)(21, "label");
    \u0275\u0275element(22, "span", 50);
    \u0275\u0275text(23, " Date of Birth ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 49)(27, "label");
    \u0275\u0275element(28, "span", 50);
    \u0275\u0275text(29, " Estimated DOB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_001", (tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.de01_001_first_name));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_001", (tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.de01_001_first_name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de01_001_first_name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_002", (tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de01_002_middle_name));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_002", (tmp_6_0 = ctx_r1.client()) == null ? null : tmp_6_0.de01_002_middle_name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r1.client()) == null ? null : tmp_7_0.de01_002_middle_name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_003", (tmp_8_0 = ctx_r1.client()) == null ? null : tmp_8_0.de01_003_last_name));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_003", (tmp_9_0 = ctx_r1.client()) == null ? null : tmp_9_0.de01_003_last_name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r1.client()) == null ? null : tmp_10_0.de01_003_last_name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_004", (tmp_11_0 = ctx_r1.client()) == null ? null : tmp_11_0.de01_004_date_of_birth_formatted));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_004", (tmp_12_0 = ctx_r1.client()) == null ? null : tmp_12_0.de01_004_date_of_birth_formatted)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_13_0 = ctx_r1.client()) == null ? null : tmp_13_0.de01_004_date_of_birth_formatted) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_005", (tmp_14_0 = ctx_r1.client()) == null ? null : tmp_14_0.de01_005_estimated_dob_flag));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_005", (tmp_15_0 = ctx_r1.client()) == null ? null : tmp_15_0.de01_005_estimated_dob_flag)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_16_0 = ctx_r1.client()) == null ? null : tmp_16_0.de01_005_estimated_dob_flag) === 1 ? "Yes" : "No");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 48)(2, "div", 49)(3, "label");
    \u0275\u0275element(4, "span", 50);
    \u0275\u0275text(5, " MRN (DE02.001) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "label");
    \u0275\u0275element(10, "span", 50);
    \u0275\u0275text(11, " Vendor ID (DE02.002) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "label");
    \u0275\u0275element(16, "span", 50);
    \u0275\u0275text(17, " Health Card # (DE02.003) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 49)(21, "label");
    \u0275\u0275element(22, "span", 50);
    \u0275\u0275text(23, " HCN Issuing Authority (DE02.004) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 49)(27, "label");
    \u0275\u0275element(28, "span", 50);
    \u0275\u0275text(29, " Identifier Type (DE02.005) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_001", (tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.de02_001_mrn));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_001", (tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.de02_001_mrn)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de02_001_mrn) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_002", (tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de02_002_vendor_id));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_002", (tmp_6_0 = ctx_r1.client()) == null ? null : tmp_6_0.de02_002_vendor_id)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r1.client()) == null ? null : tmp_7_0.de02_002_vendor_id) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_003", (tmp_8_0 = ctx_r1.client()) == null ? null : tmp_8_0.de02_003_hcn));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_003", (tmp_9_0 = ctx_r1.client()) == null ? null : tmp_9_0.de02_003_hcn)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r1.client()) == null ? null : tmp_10_0.de02_003_hcn) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_004", (tmp_11_0 = ctx_r1.client()) == null ? null : tmp_11_0.de02_004_hcn_issuing_authority));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_004", (tmp_12_0 = ctx_r1.client()) == null ? null : tmp_12_0.de02_004_hcn_issuing_authority)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_13_0 = ctx_r1.client()) == null ? null : tmp_13_0.de02_004_hcn_issuing_authority) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_005", (tmp_14_0 = ctx_r1.client()) == null ? null : tmp_14_0.de02_005_identifier_type));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_005", (tmp_15_0 = ctx_r1.client()) == null ? null : tmp_15_0.de02_005_identifier_type)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_16_0 = ctx_r1.client()) == null ? null : tmp_16_0.de02_005_identifier_type) || "-");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 48)(2, "div", 49)(3, "label");
    \u0275\u0275element(4, "span", 50);
    \u0275\u0275text(5, " Address Use (DE03.001) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "label");
    \u0275\u0275element(10, "span", 50);
    \u0275\u0275text(11, " City (DE03.002) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "label");
    \u0275\u0275element(16, "span", 50);
    \u0275\u0275text(17, " Province (DE03.003) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 49)(21, "label");
    \u0275\u0275element(22, "span", 50);
    \u0275\u0275text(23, " Postal Code (DE03.004) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE03_001", (tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.de03_001_address_use));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE03_001", (tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.de03_001_address_use)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de03_001_address_use) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE03_002", (tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de03_002_city));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE03_002", (tmp_6_0 = ctx_r1.client()) == null ? null : tmp_6_0.de03_002_city)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r1.client()) == null ? null : tmp_7_0.de03_002_city) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE03_003", (tmp_8_0 = ctx_r1.client()) == null ? null : tmp_8_0.de03_003_province));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE03_003", (tmp_9_0 = ctx_r1.client()) == null ? null : tmp_9_0.de03_003_province)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r1.client()) == null ? null : tmp_10_0.de03_003_province) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE03_004", (tmp_11_0 = ctx_r1.client()) == null ? null : tmp_11_0.de03_004_postal_code));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE03_004", (tmp_12_0 = ctx_r1.client()) == null ? null : tmp_12_0.de03_004_postal_code)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_13_0 = ctx_r1.client()) == null ? null : tmp_13_0.de03_004_postal_code) || "-");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_002"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_002"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_002") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_003"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_003"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_003") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_004"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_004"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_004") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_005"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_005"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_005") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_006"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_006"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_006") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_007"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_007"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_007") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_008"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_008"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_008") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_010"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_010"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_010") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_012"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_012"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_012") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_013"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_013"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_013") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_014"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_014"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_014") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_015"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_015"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_015") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_016"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_016"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_016") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_017"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_017"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_017") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_018"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_018"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_018") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_020"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_020"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_020") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus("DE04_021"));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip("DE04_021"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus("DE04_021") === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 51)(2, "div", 49)(3, "label");
    \u0275\u0275element(4, "span", 50);
    \u0275\u0275text(5, " SDOH Effective Date (DE04.001) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "label");
    \u0275\u0275element(10, "span", 50);
    \u0275\u0275conditionalCreate(11, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_11_Template, 2, 4, "span", 52);
    \u0275\u0275text(12, " Ethnicity (DE04.002) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 49)(16, "label");
    \u0275\u0275element(17, "span", 50);
    \u0275\u0275conditionalCreate(18, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_18_Template, 2, 4, "span", 52);
    \u0275\u0275text(19, " Religion / Spiritual (DE04.003) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 49)(23, "label");
    \u0275\u0275element(24, "span", 50);
    \u0275\u0275conditionalCreate(25, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_25_Template, 2, 4, "span", 52);
    \u0275\u0275text(26, " Mother Tongue (DE04.004) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 49)(30, "label");
    \u0275\u0275element(31, "span", 50);
    \u0275\u0275conditionalCreate(32, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_32_Template, 2, 4, "span", 52);
    \u0275\u0275text(33, " Preferred Service Language (DE04.005) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 49)(37, "label");
    \u0275\u0275element(38, "span", 50);
    \u0275\u0275conditionalCreate(39, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_39_Template, 2, 4, "span", 52);
    \u0275\u0275text(40, " Preferred Official Language (DE04.006) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 49)(44, "label");
    \u0275\u0275element(45, "span", 50);
    \u0275\u0275conditionalCreate(46, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_46_Template, 2, 4, "span", 52);
    \u0275\u0275text(47, " Gender Identity (DE04.007) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 49)(51, "label");
    \u0275\u0275element(52, "span", 50);
    \u0275\u0275conditionalCreate(53, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_53_Template, 2, 4, "span", 52);
    \u0275\u0275text(54, " Sexual Orientation (DE04.008) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 49)(58, "label");
    \u0275\u0275element(59, "span", 50);
    \u0275\u0275text(60, " Year Arrived in Canada (DE04.009) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 49)(64, "label");
    \u0275\u0275element(65, "span", 50);
    \u0275\u0275conditionalCreate(66, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_66_Template, 2, 4, "span", 52);
    \u0275\u0275text(67, " Born in Canada (DE04.010) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 49)(71, "label");
    \u0275\u0275element(72, "span", 50);
    \u0275\u0275conditionalCreate(73, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_73_Template, 2, 4, "span", 52);
    \u0275\u0275text(74, " Citizenship Status (DE04.012) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 49)(78, "label");
    \u0275\u0275element(79, "span", 50);
    \u0275\u0275conditionalCreate(80, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_80_Template, 2, 4, "span", 52);
    \u0275\u0275text(81, " Education (DE04.013) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 49)(85, "label");
    \u0275\u0275element(86, "span", 50);
    \u0275\u0275conditionalCreate(87, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_87_Template, 2, 4, "span", 52);
    \u0275\u0275text(88, " Employment (DE04.014) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 49)(92, "label");
    \u0275\u0275element(93, "span", 50);
    \u0275\u0275conditionalCreate(94, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_94_Template, 2, 4, "span", 52);
    \u0275\u0275text(95, " Income Source (DE04.015) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 49)(99, "label");
    \u0275\u0275element(100, "span", 50);
    \u0275\u0275conditionalCreate(101, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_101_Template, 2, 4, "span", 52);
    \u0275\u0275text(102, " Marital Status (DE04.016) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span");
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 49)(106, "label");
    \u0275\u0275element(107, "span", 50);
    \u0275\u0275conditionalCreate(108, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_108_Template, 2, 4, "span", 52);
    \u0275\u0275text(109, " Housing (DE04.017) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span");
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 49)(113, "label");
    \u0275\u0275element(114, "span", 50);
    \u0275\u0275conditionalCreate(115, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_115_Template, 2, 4, "span", 52);
    \u0275\u0275text(116, " Household Income (DE04.018) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span");
    \u0275\u0275text(118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 49)(120, "label");
    \u0275\u0275element(121, "span", 50);
    \u0275\u0275text(122, " People Income Supports (DE04.019) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "span");
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 49)(126, "label");
    \u0275\u0275element(127, "span", 50);
    \u0275\u0275conditionalCreate(128, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_128_Template, 2, 4, "span", 52);
    \u0275\u0275text(129, " Legal Status (DE04.020) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "span");
    \u0275\u0275text(131);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 49)(133, "label");
    \u0275\u0275element(134, "span", 50);
    \u0275\u0275conditionalCreate(135, PatientDetailComponent_Conditional_3_Conditional_93_Conditional_135_Template, 2, 4, "span", 52);
    \u0275\u0275text(136, " Pre-existing Conditions (DE04.021) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "span");
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_32_0;
    let tmp_33_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_39_0;
    let tmp_40_0;
    let tmp_41_0;
    let tmp_43_0;
    let tmp_44_0;
    let tmp_45_0;
    let tmp_47_0;
    let tmp_48_0;
    let tmp_49_0;
    let tmp_51_0;
    let tmp_52_0;
    let tmp_53_0;
    let tmp_55_0;
    let tmp_56_0;
    let tmp_57_0;
    let tmp_59_0;
    let tmp_60_0;
    let tmp_61_0;
    let tmp_63_0;
    let tmp_64_0;
    let tmp_65_0;
    let tmp_67_0;
    let tmp_68_0;
    let tmp_69_0;
    let tmp_70_0;
    let tmp_71_0;
    let tmp_72_0;
    let tmp_74_0;
    let tmp_75_0;
    let tmp_76_0;
    let tmp_78_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_001", (tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.de04_001_sdoh_effective_date));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_001", (tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.de04_001_sdoh_effective_date)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de04_001_sdoh_effective_date) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_002", (tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de04_002_ethnicity));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_002", (tmp_6_0 = ctx_r1.client()) == null ? null : tmp_6_0.de04_002_ethnicity)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_002") !== "not-checked" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_8_0 = ctx_r1.client()) == null ? null : tmp_8_0.de04_002_ethnicity) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_003", (tmp_9_0 = ctx_r1.client()) == null ? null : tmp_9_0.de04_003_religion));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_003", (tmp_10_0 = ctx_r1.client()) == null ? null : tmp_10_0.de04_003_religion)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_003") !== "not-checked" ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_12_0 = ctx_r1.client()) == null ? null : tmp_12_0.de04_003_religion) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_004", (tmp_13_0 = ctx_r1.client()) == null ? null : tmp_13_0.de04_004_first_language));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_004", (tmp_14_0 = ctx_r1.client()) == null ? null : tmp_14_0.de04_004_first_language)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_004") !== "not-checked" ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_16_0 = ctx_r1.client()) == null ? null : tmp_16_0.de04_004_first_language) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_005", (tmp_17_0 = ctx_r1.client()) == null ? null : tmp_17_0.de04_005_service_language));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_005", (tmp_18_0 = ctx_r1.client()) == null ? null : tmp_18_0.de04_005_service_language)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_005") !== "not-checked" ? 32 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_20_0 = ctx_r1.client()) == null ? null : tmp_20_0.de04_005_service_language) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_006", (tmp_21_0 = ctx_r1.client()) == null ? null : tmp_21_0.de04_006_official_language));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_006", (tmp_22_0 = ctx_r1.client()) == null ? null : tmp_22_0.de04_006_official_language)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_006") !== "not-checked" ? 39 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_24_0 = ctx_r1.client()) == null ? null : tmp_24_0.de04_006_official_language) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_007", (tmp_25_0 = ctx_r1.client()) == null ? null : tmp_25_0.de04_007_gender_identity));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_007", (tmp_26_0 = ctx_r1.client()) == null ? null : tmp_26_0.de04_007_gender_identity)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_007") !== "not-checked" ? 46 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_28_0 = ctx_r1.client()) == null ? null : tmp_28_0.de04_007_gender_identity) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_008", (tmp_29_0 = ctx_r1.client()) == null ? null : tmp_29_0.de04_008_sexual_orientation));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_008", (tmp_30_0 = ctx_r1.client()) == null ? null : tmp_30_0.de04_008_sexual_orientation)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_008") !== "not-checked" ? 53 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_32_0 = ctx_r1.client()) == null ? null : tmp_32_0.de04_008_sexual_orientation) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_009", (tmp_33_0 = ctx_r1.client()) == null ? null : tmp_33_0.de04_009_year_arrived_canada));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_009", (tmp_34_0 = ctx_r1.client()) == null ? null : tmp_34_0.de04_009_year_arrived_canada)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_35_0 = ctx_r1.client()) == null ? null : tmp_35_0.de04_009_year_arrived_canada) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_010", (tmp_36_0 = ctx_r1.client()) == null ? null : tmp_36_0.de04_010_born_in_canada));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_010", (tmp_37_0 = ctx_r1.client()) == null ? null : tmp_37_0.de04_010_born_in_canada)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_010") !== "not-checked" ? 66 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_39_0 = ctx_r1.client()) == null ? null : tmp_39_0.de04_010_born_in_canada) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_012", (tmp_40_0 = ctx_r1.client()) == null ? null : tmp_40_0.de04_012_citizenship_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_012", (tmp_41_0 = ctx_r1.client()) == null ? null : tmp_41_0.de04_012_citizenship_status)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_012") !== "not-checked" ? 73 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_43_0 = ctx_r1.client()) == null ? null : tmp_43_0.de04_012_citizenship_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_013", (tmp_44_0 = ctx_r1.client()) == null ? null : tmp_44_0.de04_013_education));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_013", (tmp_45_0 = ctx_r1.client()) == null ? null : tmp_45_0.de04_013_education)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_013") !== "not-checked" ? 80 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_47_0 = ctx_r1.client()) == null ? null : tmp_47_0.de04_013_education) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_014", (tmp_48_0 = ctx_r1.client()) == null ? null : tmp_48_0.de04_014_employment));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_014", (tmp_49_0 = ctx_r1.client()) == null ? null : tmp_49_0.de04_014_employment)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_014") !== "not-checked" ? 87 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_51_0 = ctx_r1.client()) == null ? null : tmp_51_0.de04_014_employment) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_015", (tmp_52_0 = ctx_r1.client()) == null ? null : tmp_52_0.de04_015_income_source));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_015", (tmp_53_0 = ctx_r1.client()) == null ? null : tmp_53_0.de04_015_income_source)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_015") !== "not-checked" ? 94 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_55_0 = ctx_r1.client()) == null ? null : tmp_55_0.de04_015_income_source) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_016", (tmp_56_0 = ctx_r1.client()) == null ? null : tmp_56_0.de04_016_marital_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_016", (tmp_57_0 = ctx_r1.client()) == null ? null : tmp_57_0.de04_016_marital_status)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_016") !== "not-checked" ? 101 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_59_0 = ctx_r1.client()) == null ? null : tmp_59_0.de04_016_marital_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_017", (tmp_60_0 = ctx_r1.client()) == null ? null : tmp_60_0.de04_017_housing));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_017", (tmp_61_0 = ctx_r1.client()) == null ? null : tmp_61_0.de04_017_housing)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_017") !== "not-checked" ? 108 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_63_0 = ctx_r1.client()) == null ? null : tmp_63_0.de04_017_housing) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_018", (tmp_64_0 = ctx_r1.client()) == null ? null : tmp_64_0.de04_018_household_income));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_018", (tmp_65_0 = ctx_r1.client()) == null ? null : tmp_65_0.de04_018_household_income)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_018") !== "not-checked" ? 115 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_67_0 = ctx_r1.client()) == null ? null : tmp_67_0.de04_018_household_income) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_019", (tmp_68_0 = ctx_r1.client()) == null ? null : tmp_68_0.de04_019_income_supports));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_019", (tmp_69_0 = ctx_r1.client()) == null ? null : tmp_69_0.de04_019_income_supports)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_70_0 = ctx_r1.client()) == null ? null : tmp_70_0.de04_019_income_supports) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_020", (tmp_71_0 = ctx_r1.client()) == null ? null : tmp_71_0.de04_020_legal_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_020", (tmp_72_0 = ctx_r1.client()) == null ? null : tmp_72_0.de04_020_legal_status)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_020") !== "not-checked" ? 128 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_74_0 = ctx_r1.client()) == null ? null : tmp_74_0.de04_020_legal_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_021", (tmp_75_0 = ctx_r1.client()) == null ? null : tmp_75_0.de04_021_pre_existing_conditions));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_021", (tmp_76_0 = ctx_r1.client()) == null ? null : tmp_76_0.de04_021_pre_existing_conditions)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getMappingStatus("DE04_021") !== "not-checked" ? 135 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_78_0 = ctx_r1.client()) == null ? null : tmp_78_0.de04_021_pre_existing_conditions) || "-");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "app-episode-list", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("episodes", ctx_r1.episodes())("activeSubmitFields", ctx_r1.activeSubmitFields())("fieldValidations", ctx_r1.fieldValidations());
  }
}
function PatientDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 16)(13, "button", 17)(14, "span", 18);
    \u0275\u0275text(15, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Edit Patient ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 19);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemovePatient());
    });
    \u0275\u0275elementStart(18, "span", 18);
    \u0275\u0275text(19, "\uF5D1");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, PatientDetailComponent_Conditional_3_Conditional_20_Template, 1, 0)(21, PatientDetailComponent_Conditional_3_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 20)(23, "span", 18);
    \u0275\u0275text(24, "\u21BB");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Resubmit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 21);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewRelatedLogs());
    });
    \u0275\u0275elementStart(27, "span", 18);
    \u0275\u0275text(28, "\uF4CB");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " View Logs ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, PatientDetailComponent_Conditional_3_Conditional_30_Template, 17, 5, "div", 22);
    \u0275\u0275elementStart(31, "div", 23)(32, "span", 24);
    \u0275\u0275text(33, "Field Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 25);
    \u0275\u0275element(35, "span", 26);
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Submittable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 25);
    \u0275\u0275element(39, "span", 27);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Needs Review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "span", 25);
    \u0275\u0275element(43, "span", 28);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Not Submitted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "span", 29);
    \u0275\u0275text(47, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 24);
    \u0275\u0275text(49, "Mapping:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 25)(51, "span", 30);
    \u0275\u0275text(52, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Valid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "span", 25)(56, "span", 31);
    \u0275\u0275text(57, "\u2717");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "Error");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 32)(61, "button", 33);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275text(62, "Expand All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 33);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275text(64, "Collapse All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 34)(66, "section", 35)(67, "button", 36);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("demographics"));
    });
    \u0275\u0275elementStart(68, "span", 37);
    \u0275\u0275text(69, "Client Information (DE01)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 38);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(72, PatientDetailComponent_Conditional_3_Conditional_72_Template, 32, 20, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "section", 35)(74, "button", 36);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("identifiers"));
    });
    \u0275\u0275elementStart(75, "span", 37);
    \u0275\u0275text(76, "Client Identifiers (DE02)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 38);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(79, PatientDetailComponent_Conditional_3_Conditional_79_Template, 32, 20, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "section", 35)(81, "button", 36);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("address"));
    });
    \u0275\u0275elementStart(82, "span", 37);
    \u0275\u0275text(83, "Client Address (DE03)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 38);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(86, PatientDetailComponent_Conditional_3_Conditional_86_Template, 26, 16, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "section", 35)(88, "button", 36);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("sdoh"));
    });
    \u0275\u0275elementStart(89, "span", 37);
    \u0275\u0275text(90, "Socio-Demographic Data (DE04)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 38);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(93, PatientDetailComponent_Conditional_3_Conditional_93_Template, 139, 97, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "section", 35)(95, "button", 36);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("episodes"));
    });
    \u0275\u0275elementStart(96, "span", 37);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 38);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(100, PatientDetailComponent_Conditional_3_Conditional_100_Template, 2, 3, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(101, "app-patient-actions-sidebar", 41);
    \u0275\u0275listener("revertCompleted", function PatientDetailComponent_Conditional_3_Template_app_patient_actions_sidebar_revertCompleted_101_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.revertCompleted.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", (tmp_1_0 = ctx_r1.client()) == null ? null : tmp_1_0.de01_001_first_name, " ", (tmp_1_0 = ctx_r1.client()) == null ? null : tmp_1_0.de01_003_last_name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass((tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.submission_status) || "N/A", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("MRN: ", ((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de02_001_mrn) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("HCN: ", ((tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de02_003_hcn) || "-");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.removing());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.removing() ? 20 : 21);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.showRemoveConfirm() ? 30 : -1);
    \u0275\u0275advance(31);
    \u0275\u0275property("disabled", ctx_r1.allExpanded());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.allCollapsed());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("demographics") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("demographics") ? 72 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("identifiers") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("identifiers") ? 79 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("address") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("address") ? 86 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("sdoh") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("sdoh") ? 93 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Episodes (", ctx_r1.episodeCount(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("episodes") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("episodes") ? 100 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("patientDetail", ctx_r1.patientDetail());
  }
}
var PatientDetailComponent = class _PatientDetailComponent {
  patientsService = inject(PatientsService);
  configService = inject(MhaPdsConfigurationService);
  // Signals from service
  patientDetail = this.patientsService.selectedPatient;
  loading = this.patientsService.loadingDetail;
  removing = this.patientsService.removing;
  // Remove patient confirmation state
  showRemoveConfirm = signal(false, ...ngDevMode ? [{ debugName: "showRemoveConfirm" }] : []);
  // Revert completed state
  revertCompleted = signal(false, ...ngDevMode ? [{ debugName: "revertCompleted" }] : []);
  // Configuration state
  configuration = this.configService.configuration;
  configLoading = this.configService.isLoading;
  // Field validation state
  fieldValidations = this.patientsService.fieldValidations;
  validatingFields = this.patientsService.validatingFields;
  // Active submit fields computed from configuration
  activeSubmitFields = computed(() => {
    const config = this.configuration();
    if (!config?.SUBMIT_FIELDS)
      return /* @__PURE__ */ new Set();
    return new Set(config.SUBMIT_FIELDS.filter((f) => f.ACTIVE_IND === 1).map((f) => f.FIELD_CODE));
  }, ...ngDevMode ? [{ debugName: "activeSubmitFields" }] : []);
  // Computed values
  client = computed(() => this.patientDetail()?.client, ...ngDevMode ? [{ debugName: "client" }] : []);
  episodes = computed(() => this.patientDetail()?.episodes ?? [], ...ngDevMode ? [{ debugName: "episodes" }] : []);
  episodeCount = computed(() => this.episodes().length, ...ngDevMode ? [{ debugName: "episodeCount" }] : []);
  constructor() {
    effect(() => {
      const patient = this.patientDetail();
      if (patient && !this.configuration()) {
        this.configService.getConfigurationCached().subscribe();
      }
    });
    effect(() => {
      const patient = this.patientDetail();
      const config = this.configuration();
      if (patient && config) {
        this.validateMappings();
      }
    });
    effect(() => {
      if (this.revertCompleted()) {
        setTimeout(() => this.revertCompleted.set(false), 3e3);
      }
    });
  }
  // SDOH completeness
  sdohComplete = computed(() => this.client()?.sdoh_complete_ind === 1, ...ngDevMode ? [{ debugName: "sdohComplete" }] : []);
  sdohMissingFields = computed(() => {
    const missing = this.client()?.sdoh_missing_fields ?? "";
    return missing ? missing.split(",").map((f) => f.trim()) : [];
  }, ...ngDevMode ? [{ debugName: "sdohMissingFields" }] : []);
  // Outputs
  viewEpisode = output();
  viewLogs = output();
  // Emit person_id
  // Section collapse state
  allSections = ["demographics", "identifiers", "address", "sdoh", "episodes"];
  expandedSections = signal(/* @__PURE__ */ new Set(["demographics", "identifiers", "address", "sdoh", "episodes"]), ...ngDevMode ? [{ debugName: "expandedSections" }] : []);
  // Computed signals for expand/collapse all
  allExpanded = computed(() => this.expandedSections().size === this.allSections.length, ...ngDevMode ? [{ debugName: "allExpanded" }] : []);
  allCollapsed = computed(() => this.expandedSections().size === 0, ...ngDevMode ? [{ debugName: "allCollapsed" }] : []);
  toggleSection(section) {
    this.expandedSections.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  }
  isSectionExpanded(section) {
    return this.expandedSections().has(section);
  }
  expandAll() {
    this.expandedSections.set(new Set(this.allSections));
  }
  collapseAll() {
    this.expandedSections.set(/* @__PURE__ */ new Set());
  }
  getStatusClass(status) {
    switch (status) {
      case "SUBMITTED":
        return "status-success";
      case "ERROR":
        return "status-error";
      case "PENDING":
        return "status-pending";
      case "PARTIAL":
        return "status-partial";
      default:
        return "";
    }
  }
  onViewRelatedLogs() {
    const personId = this.client()?.person_id;
    if (personId) {
      this.viewLogs.emit(personId);
    }
  }
  /**
   * Show remove patient confirmation dialog
   */
  onRemovePatient() {
    this.showRemoveConfirm.set(true);
  }
  /**
   * Cancel remove patient action
   */
  cancelRemovePatient() {
    this.showRemoveConfirm.set(false);
  }
  /**
   * Confirm and execute remove patient
   */
  confirmRemovePatient() {
    const personId = this.client()?.person_id;
    if (personId) {
      this.patientsService.removePatient(personId, () => {
        this.showRemoveConfirm.set(false);
      }, (error) => {
        this.showRemoveConfirm.set(false);
      });
    }
  }
  formatDate(date) {
    if (!date)
      return "-";
    try {
      return new Date(date).toLocaleDateString("en-CA");
    } catch {
      return date;
    }
  }
  /**
   * Check if a field is configured for submission
   * @param fieldCode - The DE field code (e.g., "DE01_001")
   */
  isFieldSubmittable(fieldCode) {
    return this.activeSubmitFields().has(fieldCode);
  }
  /**
   * Get the submission status of a field
   * @param fieldCode - The DE field code (e.g., "DE01_001")
   * @param value - The current value of the field
   * @returns 'submittable' if configured and has value, 'needs-review' if configured but empty, 'not-submitted' if not configured
   */
  getFieldStatus(fieldCode, value) {
    const isSubmittable = this.isFieldSubmittable(fieldCode);
    if (!isSubmittable) {
      return "not-submitted";
    }
    const hasValue = value !== null && value !== void 0 && value !== "" && value !== "-";
    return hasValue ? "submittable" : "needs-review";
  }
  /**
   * Get tooltip text for field indicator
   * @param status - The field submission status
   */
  getFieldTooltip(status) {
    switch (status) {
      case "submittable":
        return "This field is configured for submission and has data";
      case "needs-review":
        return "This field is configured for submission but is empty - review needed";
      case "not-submitted":
        return "This field is not configured for submission";
    }
  }
  /**
   * Validate field mappings for the current patient
   * Validates coded fields across client (DE04), episode (DE05/DE06/DE09), and service (DE10) levels
   */
  validateMappings() {
    const client = this.client();
    if (!client)
      return;
    const activeFields = this.activeSubmitFields();
    const seen = /* @__PURE__ */ new Set();
    const fieldsToValidate = [];
    const addField = (fieldCode, value) => {
      if (!activeFields.has(fieldCode) || !value || value === "-" || value === "")
        return;
      const key = `${fieldCode}|${value}`;
      if (seen.has(key))
        return;
      seen.add(key);
      fieldsToValidate.push({ field_code: fieldCode, source_value: value });
    };
    addField("DE04_002", client.de04_002_ethnicity);
    addField("DE04_003", client.de04_003_religion);
    addField("DE04_004", client.de04_004_first_language);
    addField("DE04_005", client.de04_005_service_language);
    addField("DE04_006", client.de04_006_official_language);
    addField("DE04_007", client.de04_007_gender_identity);
    addField("DE04_008", client.de04_008_sexual_orientation);
    addField("DE04_010", client.de04_010_born_in_canada);
    addField("DE04_012", client.de04_012_citizenship_status);
    addField("DE04_013", client.de04_013_education);
    addField("DE04_014", client.de04_014_employment);
    addField("DE04_015", client.de04_015_income_source);
    addField("DE04_016", client.de04_016_marital_status);
    addField("DE04_017", client.de04_017_housing);
    addField("DE04_018", client.de04_018_household_income);
    addField("DE04_020", client.de04_020_legal_status);
    addField("DE04_021", client.de04_021_pre_existing_conditions);
    for (const episode of this.episodes()) {
      addField("DE05_004", episode.referral_source_type);
      addField("DE05_005", episode.referral_type);
      addField("DE06_002", episode.episode_of_care_status);
      addField("DE06_007", episode.appt_rescheduled_reason);
      addField("DE06_009", episode.service_termination_reason);
      addField("DE09_001", episode.health_program_name);
      addField("DE09_003", episode.functional_centre_mapped);
      if (episode.services) {
        for (const service of episode.services) {
          addField("DE10_002", service.service_modality);
          addField("DE10_003", service.service_modality_type);
          addField("DE10_008", service.encounter_status);
        }
      }
    }
    if (fieldsToValidate.length > 0) {
      this.patientsService.validateFieldMappings(fieldsToValidate);
    }
  }
  /**
   * Get mapping validation status for a field
   * @param fieldCode - The DE field code (e.g., "DE04_007")
   * @param sourceValue - Optional source value for composite key lookup (used for episode/service fields)
   */
  getMappingStatus(fieldCode, sourceValue) {
    const validations = this.fieldValidations();
    if (sourceValue) {
      const compositeValidation = validations.get(`${fieldCode}:${sourceValue}`);
      if (compositeValidation)
        return compositeValidation.is_valid ? "valid" : "invalid";
    }
    const validation = validations.get(fieldCode);
    if (!validation)
      return "not-checked";
    return validation.is_valid ? "valid" : "invalid";
  }
  /**
   * Get tooltip for mapping validation indicator
   * @param fieldCode - The DE field code
   * @param sourceValue - Optional source value for composite key lookup
   */
  getMappingTooltip(fieldCode, sourceValue) {
    const validations = this.fieldValidations();
    let validation = sourceValue ? validations.get(`${fieldCode}:${sourceValue}`) : void 0;
    if (!validation)
      validation = validations.get(fieldCode);
    if (!validation)
      return "Mapping not checked";
    if (validation.is_valid) {
      return `Maps to: ${validation.mapped_code} (${validation.mapped_label})`;
    }
    return `Mapping error: ${validation.error_code}${validation.error_message ? " - " + validation.error_message : ""}`;
  }
  /**
   * Clean up on destroy
   */
  ngOnDestroy() {
    this.patientsService.clearFieldValidations();
  }
  static \u0275fac = function PatientDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientDetailComponent, selectors: [["app-patient-detail"]], outputs: { viewEpisode: "viewEpisode", viewLogs: "viewLogs" }, decls: 4, vars: 1, consts: [[1, "patient-detail-container"], [1, "loading-state"], [1, "empty-state"], [1, "spinner"], [1, "empty-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "patient-detail-content"], [1, "detail-header"], [1, "patient-name"], [1, "status-badge"], [1, "patient-ids"], [1, "id-badge"], [1, "detail-actions"], ["disabled", "", "title", "Coming soon", 1, "btn-action", "btn-primary"], [1, "btn-icon"], ["title", "Remove patient from MHA PDS", 1, "btn-action", "btn-danger", 3, "click", "disabled"], ["disabled", "", "title", "Coming soon", 1, "btn-action"], ["title", "View related logs", 1, "btn-action", 3, "click"], [1, "confirm-overlay"], [1, "indicator-legend"], [1, "legend-title"], [1, "legend-item"], [1, "field-indicator", "submittable"], [1, "field-indicator", "needs-review"], [1, "field-indicator", "not-submitted"], [1, "legend-divider"], [1, "mapping-indicator", "valid"], [1, "mapping-indicator", "invalid"], [1, "sections-toolbar"], [1, "toolbar-btn", 3, "click", "disabled"], [1, "detail-sections"], [1, "detail-section"], [1, "section-header", 3, "click"], [1, "section-title"], [1, "section-toggle"], [1, "section-content"], [1, "section-content", "episodes-content"], [3, "revertCompleted", "patientDetail"], [1, "confirm-dialog"], [1, "confirm-warning"], [1, "confirm-actions"], [1, "btn-action", 3, "click", "disabled"], [1, "btn-action", "btn-danger", 3, "click", "disabled"], [1, "spinner-small"], [1, "field-grid"], [1, "field"], [1, "field-indicator", 3, "title"], [1, "field-grid", "sdoh-grid"], [1, "mapping-indicator", 3, "class", "title"], [1, "mapping-indicator", 3, "title"], [3, "episodes", "activeSubmitFields", "fieldValidations"]], template: function PatientDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PatientDetailComponent_Conditional_1_Template, 4, 0, "div", 1)(2, PatientDetailComponent_Conditional_2_Template, 9, 0, "div", 2)(3, PatientDetailComponent_Conditional_3_Template, 102, 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : !ctx.client() ? 2 : 3);
    }
  }, dependencies: [EpisodeListComponent, PatientActionsSidebarComponent], styles: ["\n\n.patient-detail-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n.patient-detail-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  width: 100%;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #666;\n  text-align: center;\n  padding: 40px;\n}\n.loading-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  margin-bottom: 16px;\n  color: #1a365d;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  max-width: 300px;\n  margin: 0;\n}\n.detail-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a365d 0%,\n      #2d4a7c 100%);\n  color: white;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-ids[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-ids[_ngcontent-%COMP%]   .id-badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 13px;\n  transition: all 0.15s;\n}\n.btn-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f0f0f0;\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-action.btn-primary[_ngcontent-%COMP%] {\n  background-color: #1a365d;\n  border-color: #1a365d;\n  color: white;\n}\n.btn-action.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #15294a;\n}\n.btn-action.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: white;\n}\n.btn-action.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-action[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  max-width: 420px;\n  width: 90%;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n}\n.confirm-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 1.125rem;\n  color: #1a365d;\n}\n.confirm-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9375rem;\n  color: #333;\n  line-height: 1.5;\n}\n.confirm-dialog[_ngcontent-%COMP%]   .confirm-warning[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border: 1px solid #ffeeba;\n  border-radius: 4px;\n  padding: 10px 12px;\n  color: #856404;\n  font-size: 0.8125rem;\n}\n.confirm-dialog[_ngcontent-%COMP%]   .confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 20px;\n}\n.spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-right: 6px;\n}\n.sdoh-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  font-size: 0.875rem;\n}\n.sdoh-banner.complete[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  border-bottom: 1px solid #c3e6cb;\n}\n.sdoh-banner.incomplete[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n  border-bottom: 1px solid #ffeeba;\n}\n.sdoh-banner[_ngcontent-%COMP%]   .sdoh-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.sdoh-banner[_ngcontent-%COMP%]   .missing-fields[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.indicator-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 20px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 0.75rem;\n}\n.indicator-legend[_ngcontent-%COMP%]   .legend-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n}\n.indicator-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #6c757d;\n}\n.sections-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 4px 20px;\n  gap: 8px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.sections-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 4px 10px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.sections-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.sections-toolbar[_ngcontent-%COMP%]   .toolbar-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.legend-divider[_ngcontent-%COMP%] {\n  margin: 0 8px;\n  color: #6c757d;\n}\n.detail-sections[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.detail-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 12px 20px;\n  background: #f8f9fa;\n  border: none;\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-align: left;\n  transition: background-color 0.15s;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-toggle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #6c757d;\n  font-weight: 300;\n}\n.detail-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: white;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.field-grid.sdoh-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.episodes-content[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  margin: 8px 0;\n}\n@media (max-width: 768px) {\n  .patient-detail-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .patient-detail-content[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n  }\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  }\n  .detail-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .sdoh-banner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .sdoh-banner[_ngcontent-%COMP%]   .missing-fields[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 4px;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientDetailComponent, [{
    type: Component,
    args: [{ selector: "app-patient-detail", standalone: true, imports: [EpisodeListComponent, PatientActionsSidebarComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="patient-detail-container">
  @if (loading()) {
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Loading patient details...</p>
    </div>
  } @else if (!client()) {
    <div class="empty-state">
      <div class="empty-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      </div>
      <p>Select a patient to view details</p>
    </div>
  } @else {
    <div class="patient-detail-content">
    <!-- Header -->
    <div class="detail-header">
      <div class="patient-name">
        <h2>{{ client()?.de01_001_first_name }} {{ client()?.de01_003_last_name }}</h2>
        <span class="status-badge" [class]="getStatusClass(client()?.submission_status)">
          {{ client()?.submission_status || 'N/A' }}
        </span>
      </div>
      <div class="patient-ids">
        <span class="id-badge">MRN: {{ client()?.de02_001_mrn || '-' }}</span>
        <span class="id-badge">HCN: {{ client()?.de02_003_hcn || '-' }}</span>
      </div>
    </div>

    <!-- Actions Bar -->
    <div class="detail-actions">
      <button class="btn-action btn-primary" disabled title="Coming soon">
        <span class="btn-icon">&#9998;</span>
        Edit Patient
      </button>
      <button class="btn-action btn-danger"
        [disabled]="removing()"
        (click)="onRemovePatient()"
        title="Remove patient from MHA PDS">
        <span class="btn-icon">&#128465;</span>
        @if (removing()) {
          Removing...
        } @else {
          Remove Patient
        }
      </button>
      <button class="btn-action" disabled title="Coming soon">
        <span class="btn-icon">&#8635;</span>
        Resubmit
      </button>
      <button class="btn-action" (click)="onViewRelatedLogs()" title="View related logs">
        <span class="btn-icon">&#128203;</span>
        View Logs
      </button>
    </div>

    <!-- Remove Patient Confirmation -->
    @if (showRemoveConfirm()) {
      <div class="confirm-overlay">
        <div class="confirm-dialog">
          <h3>Remove Patient</h3>
          <p>Are you sure you want to remove <strong>{{ client()?.de01_001_first_name }} {{ client()?.de01_003_last_name }}</strong> from MHA PDS?</p>
          <p class="confirm-warning">This will deactivate all records for this patient. They can be re-added later if needed.</p>
          <div class="confirm-actions">
            <button class="btn-action" (click)="cancelRemovePatient()" [disabled]="removing()">
              Cancel
            </button>
            <button class="btn-action btn-danger" (click)="confirmRemovePatient()" [disabled]="removing()">
              @if (removing()) {
                <span class="spinner-small"></span>
                Removing...
              } @else {
                Confirm Remove
              }
            </button>
          </div>
        </div>
      </div>
    }

    <!-- SDOH Completeness Banner - Hidden for now, may use later -->
    <!-- @if (sdohComplete()) {
      <div class="sdoh-banner complete">
        <span class="sdoh-icon">&#10003;</span>
        <span>SDOH Data Complete</span>
      </div>
    } @else {
      <div class="sdoh-banner incomplete">
        <span class="sdoh-icon">&#9888;</span>
        <span>SDOH Data Incomplete</span>
        @if (sdohMissingFields().length > 0) {
          <span class="missing-fields">
            Missing: {{ sdohMissingFields().slice(0, 3).join(', ') }}
            @if (sdohMissingFields().length > 3) {
              <span> +{{ sdohMissingFields().length - 3 }} more</span>
            }
          </span>
        }
      </div>
    } -->

    <!-- Submit Field Indicator Legend -->
    <div class="indicator-legend">
      <span class="legend-title">Field Status:</span>
      <span class="legend-item">
        <span class="field-indicator submittable"></span>
        <span>Submittable</span>
      </span>
      <span class="legend-item">
        <span class="field-indicator needs-review"></span>
        <span>Needs Review</span>
      </span>
      <span class="legend-item">
        <span class="field-indicator not-submitted"></span>
        <span>Not Submitted</span>
      </span>
      <span class="legend-divider">|</span>
      <span class="legend-title">Mapping:</span>
      <span class="legend-item">
        <span class="mapping-indicator valid">&#10003;</span>
        <span>Valid</span>
      </span>
      <span class="legend-item">
        <span class="mapping-indicator invalid">&#10007;</span>
        <span>Error</span>
      </span>
    </div>

    <!-- Sections Toolbar -->
    <div class="sections-toolbar">
      <button class="toolbar-btn"
        [disabled]="allExpanded()"
        (click)="expandAll()">Expand All</button>
      <button class="toolbar-btn"
        [disabled]="allCollapsed()"
        (click)="collapseAll()">Collapse All</button>
    </div>

    <!-- Collapsible Sections -->
    <div class="detail-sections">

      <!-- DE01: Client Information -->
      <section class="detail-section">
        <button class="section-header" (click)="toggleSection('demographics')">
          <span class="section-title">Client Information (DE01)</span>
          <span class="section-toggle">{{ isSectionExpanded('demographics') ? '\u2212' : '+' }}</span>
        </button>
        @if (isSectionExpanded('demographics')) {
          <div class="section-content">
            <div class="field-grid">
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE01_001', client()?.de01_001_first_name)"
                    [title]="getFieldTooltip(getFieldStatus('DE01_001', client()?.de01_001_first_name))"></span>
                  First Name
                </label>
                <span>{{ client()?.de01_001_first_name || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE01_002', client()?.de01_002_middle_name)"
                    [title]="getFieldTooltip(getFieldStatus('DE01_002', client()?.de01_002_middle_name))"></span>
                  Middle Name
                </label>
                <span>{{ client()?.de01_002_middle_name || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE01_003', client()?.de01_003_last_name)"
                    [title]="getFieldTooltip(getFieldStatus('DE01_003', client()?.de01_003_last_name))"></span>
                  Last Name
                </label>
                <span>{{ client()?.de01_003_last_name || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE01_004', client()?.de01_004_date_of_birth_formatted)"
                    [title]="getFieldTooltip(getFieldStatus('DE01_004', client()?.de01_004_date_of_birth_formatted))"></span>
                  Date of Birth
                </label>
                <span>{{ client()?.de01_004_date_of_birth_formatted || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE01_005', client()?.de01_005_estimated_dob_flag)"
                    [title]="getFieldTooltip(getFieldStatus('DE01_005', client()?.de01_005_estimated_dob_flag))"></span>
                  Estimated DOB
                </label>
                <span>{{ client()?.de01_005_estimated_dob_flag === 1 ? 'Yes' : 'No' }}</span>
              </div>
            </div>
          </div>
        }
      </section>

      <!-- DE02: Client Identifiers -->
      <section class="detail-section">
        <button class="section-header" (click)="toggleSection('identifiers')">
          <span class="section-title">Client Identifiers (DE02)</span>
          <span class="section-toggle">{{ isSectionExpanded('identifiers') ? '\u2212' : '+' }}</span>
        </button>
        @if (isSectionExpanded('identifiers')) {
          <div class="section-content">
            <div class="field-grid">
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE02_001', client()?.de02_001_mrn)"
                    [title]="getFieldTooltip(getFieldStatus('DE02_001', client()?.de02_001_mrn))"></span>
                  MRN (DE02.001)
                </label>
                <span>{{ client()?.de02_001_mrn || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE02_002', client()?.de02_002_vendor_id)"
                    [title]="getFieldTooltip(getFieldStatus('DE02_002', client()?.de02_002_vendor_id))"></span>
                  Vendor ID (DE02.002)
                </label>
                <span>{{ client()?.de02_002_vendor_id || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE02_003', client()?.de02_003_hcn)"
                    [title]="getFieldTooltip(getFieldStatus('DE02_003', client()?.de02_003_hcn))"></span>
                  Health Card # (DE02.003)
                </label>
                <span>{{ client()?.de02_003_hcn || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE02_004', client()?.de02_004_hcn_issuing_authority)"
                    [title]="getFieldTooltip(getFieldStatus('DE02_004', client()?.de02_004_hcn_issuing_authority))"></span>
                  HCN Issuing Authority (DE02.004)
                </label>
                <span>{{ client()?.de02_004_hcn_issuing_authority || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE02_005', client()?.de02_005_identifier_type)"
                    [title]="getFieldTooltip(getFieldStatus('DE02_005', client()?.de02_005_identifier_type))"></span>
                  Identifier Type (DE02.005)
                </label>
                <span>{{ client()?.de02_005_identifier_type || '-' }}</span>
              </div>
            </div>
          </div>
        }
      </section>

      <!-- DE03: Client Address -->
      <section class="detail-section">
        <button class="section-header" (click)="toggleSection('address')">
          <span class="section-title">Client Address (DE03)</span>
          <span class="section-toggle">{{ isSectionExpanded('address') ? '\u2212' : '+' }}</span>
        </button>
        @if (isSectionExpanded('address')) {
          <div class="section-content">
            <div class="field-grid">
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE03_001', client()?.de03_001_address_use)"
                    [title]="getFieldTooltip(getFieldStatus('DE03_001', client()?.de03_001_address_use))"></span>
                  Address Use (DE03.001)
                </label>
                <span>{{ client()?.de03_001_address_use || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE03_002', client()?.de03_002_city)"
                    [title]="getFieldTooltip(getFieldStatus('DE03_002', client()?.de03_002_city))"></span>
                  City (DE03.002)
                </label>
                <span>{{ client()?.de03_002_city || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE03_003', client()?.de03_003_province)"
                    [title]="getFieldTooltip(getFieldStatus('DE03_003', client()?.de03_003_province))"></span>
                  Province (DE03.003)
                </label>
                <span>{{ client()?.de03_003_province || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE03_004', client()?.de03_004_postal_code)"
                    [title]="getFieldTooltip(getFieldStatus('DE03_004', client()?.de03_004_postal_code))"></span>
                  Postal Code (DE03.004)
                </label>
                <span>{{ client()?.de03_004_postal_code || '-' }}</span>
              </div>
            </div>
          </div>
        }
      </section>

      <!-- DE04: SDOH Data -->
      <section class="detail-section">
        <button class="section-header" (click)="toggleSection('sdoh')">
          <span class="section-title">Socio-Demographic Data (DE04)</span>
          <span class="section-toggle">{{ isSectionExpanded('sdoh') ? '\u2212' : '+' }}</span>
        </button>
        @if (isSectionExpanded('sdoh')) {
          <div class="section-content">
            <div class="field-grid sdoh-grid">
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_001', client()?.de04_001_sdoh_effective_date)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_001', client()?.de04_001_sdoh_effective_date))"></span>
                  SDOH Effective Date (DE04.001)
                </label>
                <span>{{ client()?.de04_001_sdoh_effective_date || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_002', client()?.de04_002_ethnicity)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_002', client()?.de04_002_ethnicity))"></span>
                  @if (getMappingStatus('DE04_002') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_002')"
                      [title]="getMappingTooltip('DE04_002')">{{ getMappingStatus('DE04_002') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Ethnicity (DE04.002)
                </label>
                <span>{{ client()?.de04_002_ethnicity || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_003', client()?.de04_003_religion)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_003', client()?.de04_003_religion))"></span>
                  @if (getMappingStatus('DE04_003') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_003')"
                      [title]="getMappingTooltip('DE04_003')">{{ getMappingStatus('DE04_003') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Religion / Spiritual (DE04.003)
                </label>
                <span>{{ client()?.de04_003_religion || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_004', client()?.de04_004_first_language)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_004', client()?.de04_004_first_language))"></span>
                  @if (getMappingStatus('DE04_004') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_004')"
                      [title]="getMappingTooltip('DE04_004')">{{ getMappingStatus('DE04_004') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Mother Tongue (DE04.004)
                </label>
                <span>{{ client()?.de04_004_first_language || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_005', client()?.de04_005_service_language)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_005', client()?.de04_005_service_language))"></span>
                  @if (getMappingStatus('DE04_005') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_005')"
                      [title]="getMappingTooltip('DE04_005')">{{ getMappingStatus('DE04_005') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Preferred Service Language (DE04.005)
                </label>
                <span>{{ client()?.de04_005_service_language || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_006', client()?.de04_006_official_language)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_006', client()?.de04_006_official_language))"></span>
                  @if (getMappingStatus('DE04_006') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_006')"
                      [title]="getMappingTooltip('DE04_006')">{{ getMappingStatus('DE04_006') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Preferred Official Language (DE04.006)
                </label>
                <span>{{ client()?.de04_006_official_language || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_007', client()?.de04_007_gender_identity)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_007', client()?.de04_007_gender_identity))"></span>
                  @if (getMappingStatus('DE04_007') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_007')"
                      [title]="getMappingTooltip('DE04_007')">{{ getMappingStatus('DE04_007') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Gender Identity (DE04.007)
                </label>
                <span>{{ client()?.de04_007_gender_identity || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_008', client()?.de04_008_sexual_orientation)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_008', client()?.de04_008_sexual_orientation))"></span>
                  @if (getMappingStatus('DE04_008') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_008')"
                      [title]="getMappingTooltip('DE04_008')">{{ getMappingStatus('DE04_008') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Sexual Orientation (DE04.008)
                </label>
                <span>{{ client()?.de04_008_sexual_orientation || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_009', client()?.de04_009_year_arrived_canada)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_009', client()?.de04_009_year_arrived_canada))"></span>
                  Year Arrived in Canada (DE04.009)
                </label>
                <span>{{ client()?.de04_009_year_arrived_canada || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_010', client()?.de04_010_born_in_canada)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_010', client()?.de04_010_born_in_canada))"></span>
                  @if (getMappingStatus('DE04_010') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_010')"
                      [title]="getMappingTooltip('DE04_010')">{{ getMappingStatus('DE04_010') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Born in Canada (DE04.010)
                </label>
                <span>{{ client()?.de04_010_born_in_canada || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_012', client()?.de04_012_citizenship_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_012', client()?.de04_012_citizenship_status))"></span>
                  @if (getMappingStatus('DE04_012') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_012')"
                      [title]="getMappingTooltip('DE04_012')">{{ getMappingStatus('DE04_012') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Citizenship Status (DE04.012)
                </label>
                <span>{{ client()?.de04_012_citizenship_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_013', client()?.de04_013_education)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_013', client()?.de04_013_education))"></span>
                  @if (getMappingStatus('DE04_013') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_013')"
                      [title]="getMappingTooltip('DE04_013')">{{ getMappingStatus('DE04_013') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Education (DE04.013)
                </label>
                <span>{{ client()?.de04_013_education || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_014', client()?.de04_014_employment)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_014', client()?.de04_014_employment))"></span>
                  @if (getMappingStatus('DE04_014') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_014')"
                      [title]="getMappingTooltip('DE04_014')">{{ getMappingStatus('DE04_014') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Employment (DE04.014)
                </label>
                <span>{{ client()?.de04_014_employment || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_015', client()?.de04_015_income_source)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_015', client()?.de04_015_income_source))"></span>
                  @if (getMappingStatus('DE04_015') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_015')"
                      [title]="getMappingTooltip('DE04_015')">{{ getMappingStatus('DE04_015') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Income Source (DE04.015)
                </label>
                <span>{{ client()?.de04_015_income_source || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_016', client()?.de04_016_marital_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_016', client()?.de04_016_marital_status))"></span>
                  @if (getMappingStatus('DE04_016') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_016')"
                      [title]="getMappingTooltip('DE04_016')">{{ getMappingStatus('DE04_016') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Marital Status (DE04.016)
                </label>
                <span>{{ client()?.de04_016_marital_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_017', client()?.de04_017_housing)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_017', client()?.de04_017_housing))"></span>
                  @if (getMappingStatus('DE04_017') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_017')"
                      [title]="getMappingTooltip('DE04_017')">{{ getMappingStatus('DE04_017') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Housing (DE04.017)
                </label>
                <span>{{ client()?.de04_017_housing || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_018', client()?.de04_018_household_income)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_018', client()?.de04_018_household_income))"></span>
                  @if (getMappingStatus('DE04_018') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_018')"
                      [title]="getMappingTooltip('DE04_018')">{{ getMappingStatus('DE04_018') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Household Income (DE04.018)
                </label>
                <span>{{ client()?.de04_018_household_income || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_019', client()?.de04_019_income_supports)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_019', client()?.de04_019_income_supports))"></span>
                  People Income Supports (DE04.019)
                </label>
                <span>{{ client()?.de04_019_income_supports || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_020', client()?.de04_020_legal_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_020', client()?.de04_020_legal_status))"></span>
                  @if (getMappingStatus('DE04_020') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_020')"
                      [title]="getMappingTooltip('DE04_020')">{{ getMappingStatus('DE04_020') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Legal Status (DE04.020)
                </label>
                <span>{{ client()?.de04_020_legal_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_021', client()?.de04_021_pre_existing_conditions)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_021', client()?.de04_021_pre_existing_conditions))"></span>
                  @if (getMappingStatus('DE04_021') !== 'not-checked') {
                    <span class="mapping-indicator" [class]="getMappingStatus('DE04_021')"
                      [title]="getMappingTooltip('DE04_021')">{{ getMappingStatus('DE04_021') === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                  }
                  Pre-existing Conditions (DE04.021)
                </label>
                <span>{{ client()?.de04_021_pre_existing_conditions || '-' }}</span>
              </div>
            </div>
          </div>
        }
      </section>

      <!-- Episodes Section -->
      <section class="detail-section">
        <button class="section-header" (click)="toggleSection('episodes')">
          <span class="section-title">Episodes ({{ episodeCount() }})</span>
          <span class="section-toggle">{{ isSectionExpanded('episodes') ? '\u2212' : '+' }}</span>
        </button>
        @if (isSectionExpanded('episodes')) {
          <div class="section-content episodes-content">
            <app-episode-list
              [episodes]="episodes()"
              [activeSubmitFields]="activeSubmitFields()"
              [fieldValidations]="fieldValidations()" />
          </div>
        }
      </section>

    </div>
    </div>

    <app-patient-actions-sidebar
      [patientDetail]="patientDetail()"
      (revertCompleted)="revertCompleted.set(true)"
    ></app-patient-actions-sidebar>
  }
</div>
`, styles: ["/* src/app/patients/components/patient-detail.scss */\n.patient-detail-container {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n.patient-detail-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  width: 100%;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #666;\n  text-align: center;\n  padding: 40px;\n}\n.loading-state .empty-icon,\n.empty-state .empty-icon {\n  opacity: 0.5;\n  margin-bottom: 16px;\n  color: #1a365d;\n}\n.loading-state .spinner,\n.empty-state .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p,\n.empty-state p {\n  font-size: 16px;\n  max-width: 300px;\n  margin: 0;\n}\n.detail-header {\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a365d 0%,\n      #2d4a7c 100%);\n  color: white;\n}\n.detail-header .patient-name {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.detail-header .patient-name h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.detail-header .patient-name .status-badge {\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.detail-header .patient-name .status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.detail-header .patient-name .status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.detail-header .patient-name .status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.detail-header .patient-name .status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-header .patient-ids {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.detail-header .patient-ids .id-badge {\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.detail-actions {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.btn-action {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 13px;\n  transition: all 0.15s;\n}\n.btn-action:hover:not(:disabled) {\n  background-color: #f0f0f0;\n}\n.btn-action:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-action.btn-primary {\n  background-color: #1a365d;\n  border-color: #1a365d;\n  color: white;\n}\n.btn-action.btn-primary:hover:not(:disabled) {\n  background-color: #15294a;\n}\n.btn-action.btn-danger {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: white;\n}\n.btn-action.btn-danger:hover:not(:disabled) {\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-action .btn-icon {\n  font-size: 14px;\n}\n.confirm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.confirm-dialog {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  max-width: 420px;\n  width: 90%;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n}\n.confirm-dialog h3 {\n  margin: 0 0 16px 0;\n  font-size: 1.125rem;\n  color: #1a365d;\n}\n.confirm-dialog p {\n  margin: 0 0 12px 0;\n  font-size: 0.9375rem;\n  color: #333;\n  line-height: 1.5;\n}\n.confirm-dialog .confirm-warning {\n  background: #fff3cd;\n  border: 1px solid #ffeeba;\n  border-radius: 4px;\n  padding: 10px 12px;\n  color: #856404;\n  font-size: 0.8125rem;\n}\n.confirm-dialog .confirm-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 20px;\n}\n.spinner-small {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin-right: 6px;\n}\n.sdoh-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  font-size: 0.875rem;\n}\n.sdoh-banner.complete {\n  background: #d4edda;\n  color: #155724;\n  border-bottom: 1px solid #c3e6cb;\n}\n.sdoh-banner.incomplete {\n  background: #fff3cd;\n  color: #856404;\n  border-bottom: 1px solid #ffeeba;\n}\n.sdoh-banner .sdoh-icon {\n  font-size: 1rem;\n}\n.sdoh-banner .missing-fields {\n  margin-left: auto;\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.indicator-legend {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 20px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 0.75rem;\n}\n.indicator-legend .legend-title {\n  font-weight: 600;\n  color: #1a365d;\n}\n.indicator-legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #6c757d;\n}\n.sections-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  padding: 4px 20px;\n  gap: 8px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.sections-toolbar .toolbar-btn {\n  font-size: 0.75rem;\n  color: #6c757d;\n  background: transparent;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 4px 10px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.sections-toolbar .toolbar-btn:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.sections-toolbar .toolbar-btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.legend-divider {\n  margin: 0 8px;\n  color: #6c757d;\n}\n.detail-sections {\n  flex: 1;\n  overflow-y: auto;\n}\n.detail-section {\n  border-bottom: 1px solid #e0e0e0;\n}\n.detail-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 12px 20px;\n  background: #f8f9fa;\n  border: none;\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-align: left;\n  transition: background-color 0.15s;\n}\n.detail-section .section-header:hover {\n  background: #e9ecef;\n}\n.detail-section .section-header .section-title {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-section .section-header .section-toggle {\n  font-size: 1.25rem;\n  color: #6c757d;\n  font-weight: 300;\n}\n.detail-section .section-content {\n  padding: 16px 20px;\n  background: white;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.field-grid.sdoh-grid {\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field label {\n  font-size: 0.75rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.field span {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.episodes-content .placeholder {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  margin: 8px 0;\n}\n@media (max-width: 768px) {\n  .patient-detail-container {\n    flex-direction: column;\n  }\n  .patient-detail-content {\n    flex: 0 1 auto;\n  }\n  .field-grid {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  }\n  .detail-header {\n    padding: 12px 16px;\n  }\n  .detail-header .patient-name h2 {\n    font-size: 1.125rem;\n  }\n  .sdoh-banner {\n    flex-wrap: wrap;\n  }\n  .sdoh-banner .missing-fields {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 4px;\n  }\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientDetailComponent, { className: "PatientDetailComponent", filePath: "src/app/patients/components/patient-detail.ts", lineNumber: 23 });
})();

// src/app/patients/patients.ts
var PatientsComponent = class _PatientsComponent {
  patientsService = inject(PatientsService);
  router = inject(Router);
  elementRef = inject(ElementRef);
  // Expose service signals to template
  selectedPatient = this.patientsService.selectedPatient;
  loadingDetail = this.patientsService.loadingDetail;
  // Resizable divider state
  masterWidth = signal(40, ...ngDevMode ? [{ debugName: "masterWidth" }] : []);
  isDragging = signal(false, ...ngDevMode ? [{ debugName: "isDragging" }] : []);
  startX = 0;
  startWidth = 0;
  ngOnInit() {
    this.patientsService.loadPatients();
  }
  onPatientSelected(patient) {
  }
  onViewLogs(personId) {
    this.router.navigate(["/logs"]);
  }
  onDividerMouseDown(event) {
    event.preventDefault();
    this.isDragging.set(true);
    this.startX = event.clientX;
    this.startWidth = this.masterWidth();
  }
  onMouseMove(event) {
    if (!this.isDragging())
      return;
    const container = this.elementRef.nativeElement.querySelector(".patients-container");
    if (!container)
      return;
    const containerWidth = container.getBoundingClientRect().width;
    const deltaX = event.clientX - this.startX;
    const newWidth = this.startWidth + deltaX / containerWidth * 100;
    const clamped = Math.min(60, Math.max(20, newWidth));
    this.masterWidth.set(clamped);
  }
  onMouseUp() {
    if (!this.isDragging())
      return;
    this.isDragging.set(false);
  }
  static \u0275fac = function PatientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientsComponent, selectors: [["app-patients"]], hostBindings: function PatientsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousemove", function PatientsComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      }, \u0275\u0275resolveDocument)("mouseup", function PatientsComponent_mouseup_HostBindingHandler() {
        return ctx.onMouseUp();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 9, vars: 4, consts: [[1, "patients-container"], [1, "patients-master"], [1, "master-header"], [3, "patientSelected"], [1, "divider-handle", 3, "mousedown"], [1, "patients-detail"], [3, "viewLogs"]], template: function PatientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Patients");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "app-patient-list", 3);
      \u0275\u0275listener("patientSelected", function PatientsComponent_Template_app_patient_list_patientSelected_5_listener($event) {
        return ctx.onPatientSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275listener("mousedown", function PatientsComponent_Template_div_mousedown_6_listener($event) {
        return ctx.onDividerMouseDown($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "app-patient-detail", 6);
      \u0275\u0275listener("viewLogs", function PatientsComponent_Template_app_patient_detail_viewLogs_8_listener($event) {
        return ctx.onViewLogs($event);
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("is-dragging", ctx.isDragging());
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.masterWidth(), "%");
    }
  }, dependencies: [PatientListComponent, PatientDetailComponent], styles: ["\n\n.patients-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 60px);\n}\n.patients-container.is-dragging[_ngcontent-%COMP%] {\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.patients-master[_ngcontent-%COMP%] {\n  min-width: 400px;\n  max-width: 600px;\n  background-color: white;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.patients-master[_ngcontent-%COMP%]   .master-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.patients-master[_ngcontent-%COMP%]   .master-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #1a365d;\n}\n.divider-handle[_ngcontent-%COMP%] {\n  width: 5px;\n  background: #e0e0e0;\n  cursor: col-resize;\n  flex-shrink: 0;\n  transition: background-color 0.15s;\n}\n.divider-handle[_ngcontent-%COMP%]:hover {\n  background: #bdbdbd;\n}\n.divider-handle[_ngcontent-%COMP%]:active {\n  background: #9e9e9e;\n}\n.patients-detail[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .patients-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .patients-master[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: none;\n    height: 50vh;\n    min-height: 300px;\n  }\n  .divider-handle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .patients-detail[_ngcontent-%COMP%] {\n    height: 50vh;\n  }\n}\n@media (max-width: 768px) {\n  .patients-master[_ngcontent-%COMP%] {\n    height: 40vh;\n    min-width: auto;\n  }\n  .patients-detail[_ngcontent-%COMP%] {\n    height: 60vh;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientsComponent, [{
    type: Component,
    args: [{ selector: "app-patients", standalone: true, imports: [PatientListComponent, PatientDetailComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="patients-container" [class.is-dragging]="isDragging()">\n  <!-- Master: Patient List -->\n  <div class="patients-master" [style.width.%]="masterWidth()">\n    <div class="master-header">\n      <h2>Patients</h2>\n    </div>\n    <app-patient-list (patientSelected)="onPatientSelected($event)" />\n  </div>\n\n  <!-- Resizable Divider -->\n  <div class="divider-handle" (mousedown)="onDividerMouseDown($event)"></div>\n\n  <!-- Detail: Patient Detail -->\n  <div class="patients-detail">\n    <app-patient-detail (viewLogs)="onViewLogs($event)" />\n  </div>\n</div>\n', styles: ["/* src/app/patients/patients.scss */\n.patients-container {\n  display: flex;\n  height: calc(100vh - 60px);\n}\n.patients-container.is-dragging {\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.patients-master {\n  min-width: 400px;\n  max-width: 600px;\n  background-color: white;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.patients-master .master-header {\n  padding: 1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.patients-master .master-header h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #1a365d;\n}\n.divider-handle {\n  width: 5px;\n  background: #e0e0e0;\n  cursor: col-resize;\n  flex-shrink: 0;\n  transition: background-color 0.15s;\n}\n.divider-handle:hover {\n  background: #bdbdbd;\n}\n.divider-handle:active {\n  background: #9e9e9e;\n}\n.patients-detail {\n  flex: 1;\n  background-color: white;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .patients-container {\n    flex-direction: column;\n  }\n  .patients-master {\n    width: 100% !important;\n    max-width: none;\n    height: 50vh;\n    min-height: 300px;\n  }\n  .divider-handle {\n    display: none;\n  }\n  .patients-detail {\n    height: 50vh;\n  }\n}\n@media (max-width: 768px) {\n  .patients-master {\n    height: 40vh;\n    min-width: auto;\n  }\n  .patients-detail {\n    height: 60vh;\n  }\n}\n"] }]
  }], null, { onMouseMove: [{
    type: HostListener,
    args: ["document:mousemove", ["$event"]]
  }], onMouseUp: [{
    type: HostListener,
    args: ["document:mouseup"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientsComponent, { className: "PatientsComponent", filePath: "src/app/patients/patients.ts", lineNumber: 20 });
})();
export {
  PatientsComponent
};
