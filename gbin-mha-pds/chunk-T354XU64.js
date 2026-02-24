import {
  MhaPdsConfigurationService
} from "./chunk-VF2D4KEL.js";
import {
  Router
} from "./chunk-BR3PVFOT.js";
import {
  CclServiceWrapperService
} from "./chunk-P224BZXQ.js";
import {
  FormsModule,
  MPageService,
  NgSelectOption,
  openChart,
  openPowerForm,
  ɵNgSelectMultipleOption
} from "./chunk-K67Z2EXC.js";
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
  viewChild,
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
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-37JRXHDE.js";
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
  revertPatientRecords(personId, recordType = "ALL", recordIds, onSuccess, onError) {
    this._reverting.set(true);
    this._error.set(null);
    const requestData = JSON.stringify({
      revert_patient_params: {
        person_id: String(personId),
        record_type: recordType,
        episode_record_ids: recordIds?.episodeIds?.join(",") ?? "",
        client_record_ids: recordIds?.clientIds?.join(",") ?? "",
        service_record_ids: recordIds?.serviceIds?.join(",") ?? "",
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
            const episodeIds = recordIds?.episodeIds;
            const clientIds = recordIds?.clientIds;
            const serviceIds = recordIds?.serviceIds;
            patient.episodes.forEach((episode) => {
              if (recordType === "ALL" || recordType === "EPISODE") {
                if (!episodeIds || episodeIds.includes(String(episode.episode_id))) {
                  episode.submission_status = "PENDING";
                }
              }
              if (recordType === "ALL" || recordType === "CLIENT") {
                if (!clientIds || patient.client && clientIds.includes(String(patient.client.client_id))) {
                  if (patient.client)
                    patient.client.submission_status = "PENDING";
                }
              }
              if (episode.services && (recordType === "ALL" || recordType === "SERVICE")) {
                episode.services.forEach((service) => {
                  if (!serviceIds || serviceIds.includes(String(service.service_id))) {
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
      // Cerner source links
      dcp_forms_act_id: service.dcp_forms_act_id ?? service.DCP_FORMS_ACT_ID ?? 0,
      dcp_forms_ref_id: service.dcp_forms_ref_id ?? service.DCP_FORMS_REF_ID ?? 0,
      dcp_forms_act_updt_dt_tm: service.dcp_forms_act_updt_dt_tm ?? service.DCP_FORMS_ACT_UPDT_DT_TM ?? "",
      dcp_forms_act_updt_dt_tm_fmt: service.dcp_forms_act_updt_dt_tm_fmt ?? service.DCP_FORMS_ACT_UPDT_DT_TM_FMT ?? "",
      sch_event_id: service.sch_event_id ?? service.SCH_EVENT_ID ?? 0,
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

// src/app/patients/components/episode-list.ts
function EpisodeListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 1);
    \u0275\u0275text(1, "No episodes found");
    \u0275\u0275domElementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275domElement(1, "span", 15);
    \u0275\u0275domElementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 16);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_11_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, " Revert? ");
    \u0275\u0275domElementStart(2, "button", 17);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_11_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const episode_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmEpisodeRevert(episode_r2.episode_id, $event));
    });
    \u0275\u0275text(3, "\u2713");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 18);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_11_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelEpisodeRevert($event));
    });
    \u0275\u0275text(5, "\u2717");
    \u0275\u0275domElementEnd()();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 19);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_12_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const episode_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.isRevertible(episode_r2.submission_status) ? ctx_r2.startEpisodeRevert(episode_r2.episode_id, $event) : null);
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getStatusClass(episode_r2.submission_status));
    \u0275\u0275classProp("revertible", ctx_r2.isRevertible(episode_r2.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(episode_r2.submission_status), " ");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 20);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_17_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const episode_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOpenChart(episode_r2, $event));
    });
    \u0275\u0275domElementStart(1, "span", 21);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275domElementEnd()();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ok", ctx_r2.getMappingStatus("DE05_004", episode_r2.referral_source_type) === "valid")("err", ctx_r2.getMappingStatus("DE05_004", episode_r2.referral_source_type) === "invalid");
    \u0275\u0275domProperty("title", ctx_r2.getMappingTooltip("DE05_004", episode_r2.referral_source_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE05_004", episode_r2.referral_source_type) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ok", ctx_r2.getMappingStatus("DE05_005", episode_r2.referral_type) === "valid")("err", ctx_r2.getMappingStatus("DE05_005", episode_r2.referral_type) === "invalid");
    \u0275\u0275domProperty("title", ctx_r2.getMappingTooltip("DE05_005", episode_r2.referral_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE05_005", episode_r2.referral_type) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ok", ctx_r2.getMappingStatus("DE09_001", episode_r2.health_program_name) === "valid")("err", ctx_r2.getMappingStatus("DE09_001", episode_r2.health_program_name) === "invalid");
    \u0275\u0275domProperty("title", ctx_r2.getMappingTooltip("DE09_001", episode_r2.health_program_name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE09_001", episode_r2.health_program_name) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ok", ctx_r2.getMappingStatus("DE09_003", episode_r2.functional_centre_mapped) === "valid")("err", ctx_r2.getMappingStatus("DE09_003", episode_r2.functional_centre_mapped) === "invalid");
    \u0275\u0275domProperty("title", ctx_r2.getMappingTooltip("DE09_003", episode_r2.functional_centre_mapped));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE09_003", episode_r2.functional_centre_mapped) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ok", ctx_r2.getMappingStatus("DE06_002", episode_r2.episode_of_care_status) === "valid")("err", ctx_r2.getMappingStatus("DE06_002", episode_r2.episode_of_care_status) === "invalid");
    \u0275\u0275domProperty("title", ctx_r2.getMappingTooltip("DE06_002", episode_r2.episode_of_care_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE06_002", episode_r2.episode_of_care_status) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 50);
    \u0275\u0275domElement(1, "span", 15);
    \u0275\u0275domElementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275text(1, " Revert? ");
    \u0275\u0275domElementStart(2, "button", 17);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_11_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const event_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.confirmServiceRevert(event_r9.service.service_id, $event));
    });
    \u0275\u0275text(3, "\u2713");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 18);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_11_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.cancelServiceRevert($event));
    });
    \u0275\u0275text(5, "\u2717");
    \u0275\u0275domElementEnd()();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 60);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_12_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const event_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.isRevertible(event_r9.service.submission_status) ? ctx_r2.startServiceRevert(event_r9.service.service_id, $event) : null);
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const event_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r2.getSubmissionBadgeClass(event_r9.service.submission_status));
    \u0275\u0275classProp("revertible", ctx_r2.isRevertible(event_r9.service.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r9.service.submission_status || "N/A", " ");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const event_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("ok", ctx_r2.getMappingStatus("DE10_002", event_r9.service.service_modality) === "valid")("err", ctx_r2.getMappingStatus("DE10_002", event_r9.service.service_modality) === "invalid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE10_002", event_r9.service.service_modality) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const event_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("ok", ctx_r2.getMappingStatus("DE10_003", event_r9.service.service_modality_type) === "valid")("err", ctx_r2.getMappingStatus("DE10_003", event_r9.service.service_modality_type) === "invalid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMappingStatus("DE10_003", event_r9.service.service_modality_type) === "valid" ? "\u2713" : "\u2717");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 62);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_35_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const event_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onOpenPowerForm(event_r9.service, $event));
    });
    \u0275\u0275text(1, "Open PowerForm");
    \u0275\u0275domElementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 63);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_36_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const event_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.startServiceRevert(event_r9.service.service_id, $event));
    });
    \u0275\u0275text(1, "Revert");
    \u0275\u0275domElementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 43);
    \u0275\u0275domElement(1, "div", 44);
    \u0275\u0275domElementStart(2, "div", 45)(3, "div", 46)(4, "span", 47);
    \u0275\u0275text(5, "Service");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(10, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_10_Template, 2, 0, "span", 50)(11, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_11_Template, 6, 0, "span", 10)(12, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_12_Template, 2, 5, "span", 51);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 52)(14, "div", 53)(15, "span", 54);
    \u0275\u0275text(16, "Modality:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275conditionalCreate(19, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_19_Template, 2, 5, "span", 55);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div", 53)(21, "span", 54);
    \u0275\u0275text(22, "Type:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(23, "span", 28);
    \u0275\u0275text(24);
    \u0275\u0275conditionalCreate(25, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_25_Template, 2, 5, "span", 55);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 53)(27, "span", 54);
    \u0275\u0275text(28, "Direct:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(29);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 53)(31, "span", 54);
    \u0275\u0275text(32, "Indirect:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(33);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 56);
    \u0275\u0275conditionalCreate(35, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_35_Template, 2, 0, "button", 57);
    \u0275\u0275conditionalCreate(36, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Conditional_36_Template, 2, 0, "button", 58);
    \u0275\u0275domElementStart(37, "span", 59);
    \u0275\u0275text(38);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const event_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(event_r9.dateFormatted);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getEncounterStatusClass(event_r9.service.encounter_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r9.service.encounter_status || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.revertingServiceId() === event_r9.service.service_id ? 10 : ctx_r2.confirmingServiceRevertId() === event_r9.service.service_id ? 11 : 12);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE10_002", event_r9.service.service_modality));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE10_002", event_r9.service.service_modality)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r9.service.service_modality || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE10_002", event_r9.service.service_modality) !== "not-checked" ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE10_003", event_r9.service.service_modality_type));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE10_003", event_r9.service.service_modality_type)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r9.service.service_modality_type || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE10_003", event_r9.service.service_modality_type) !== "not-checked" ? 25 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatMinutes(event_r9.service.direct_service_minutes), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatMinutes(event_r9.service.indirect_service_minutes), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasPowerForm(event_r9.service) ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isRevertible(event_r9.service.submission_status) && ctx_r2.confirmingServiceRevertId() !== event_r9.service.service_id && ctx_r2.revertingServiceId() !== event_r9.service.service_id ? 36 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("HSE: ", event_r9.service.health_service_event_id || "-");
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2, "Cancel:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const event_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r9.appointment.cancellation_reason);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 43);
    \u0275\u0275domElement(1, "div", 64);
    \u0275\u0275domElementStart(2, "div", 45)(3, "div", 46)(4, "span", 65);
    \u0275\u0275text(5, "Appointment");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 52)(13, "div", 53)(14, "span", 54);
    \u0275\u0275text(15, "Type:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 53)(18, "span", 54);
    \u0275\u0275text(19, "Duration:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "div", 53)(22, "span", 54);
    \u0275\u0275text(23, "Location:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(25, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_1_Conditional_25_Template, 4, 1, "div", 53);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const event_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(event_r9.dateFormatted);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getApptStatusClass(event_r9.appointment.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r9.appointment.status || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getSubmissionBadgeClass(event_r9.appointment.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r9.appointment.submission_status || "N/A", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r9.appointment.type_display || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatMinutes(event_r9.appointment.duration_minutes));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", event_r9.appointment.location_display || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r9.appointment.cancellation_reason ? 25 : -1);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_0_Template, 39, 20, "div", 43);
    \u0275\u0275conditionalCreate(1, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Conditional_1_Template, 26, 11, "div", 43);
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    \u0275\u0275conditional(event_r9.type === "service" && event_r9.service ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r9.type === "appointment" && event_r9.appointment ? 1 : -1);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_For_2_Template, 2, 2, null, null, \u0275\u0275componentInstance().trackByEventIndex, true);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.getFilteredEvents(episode_r2));
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 39);
    \u0275\u0275text(1, "No activity recorded");
    \u0275\u0275domElementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 41)(1, "strong");
    \u0275\u0275text(2, "Error:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", episode_r2.error_message);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 14)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4, "Referral ");
    \u0275\u0275domElementStart(5, "span", 25);
    \u0275\u0275text(6, "DE05");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 26)(8, "div")(9, "div", 27);
    \u0275\u0275domElement(10, "span", 28);
    \u0275\u0275text(11, " Received ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 29);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div")(15, "div", 27);
    \u0275\u0275domElement(16, "span", 28);
    \u0275\u0275conditionalCreate(17, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_17_Template, 2, 6, "span", 30);
    \u0275\u0275text(18, " Source ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "div", 29);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "div")(22, "div", 27);
    \u0275\u0275domElement(23, "span", 28);
    \u0275\u0275conditionalCreate(24, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_24_Template, 2, 6, "span", 30);
    \u0275\u0275text(25, " Type ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 29);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(28, "div", 23)(29, "div", 24);
    \u0275\u0275text(30, "Program ");
    \u0275\u0275domElementStart(31, "span", 25);
    \u0275\u0275text(32, "DE09");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "div", 26)(34, "div")(35, "div", 27);
    \u0275\u0275domElement(36, "span", 28);
    \u0275\u0275conditionalCreate(37, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_37_Template, 2, 6, "span", 30);
    \u0275\u0275text(38, " # ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "div", 29);
    \u0275\u0275text(40);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(41, "div")(42, "div", 27);
    \u0275\u0275domElement(43, "span", 28);
    \u0275\u0275text(44, " Name ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "div", 29);
    \u0275\u0275text(46);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(47, "div")(48, "div", 27);
    \u0275\u0275domElement(49, "span", 28);
    \u0275\u0275conditionalCreate(50, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_50_Template, 2, 6, "span", 30);
    \u0275\u0275text(51, " FC ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "div", 29);
    \u0275\u0275text(53);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(54, "div", 23)(55, "div", 24);
    \u0275\u0275text(56, "Episode ");
    \u0275\u0275domElementStart(57, "span", 25);
    \u0275\u0275text(58, "DE06");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(59, "div", 26)(60, "div")(61, "div", 27);
    \u0275\u0275domElement(62, "span", 28);
    \u0275\u0275conditionalCreate(63, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_63_Template, 2, 6, "span", 30);
    \u0275\u0275text(64, " Status ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(65, "div", 29);
    \u0275\u0275text(66);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(67, "div")(68, "div", 27);
    \u0275\u0275domElement(69, "span", 28);
    \u0275\u0275text(70, " 1st Contact ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(71, "div", 29);
    \u0275\u0275text(72);
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(73, "div", 31)(74, "div", 32)(75, "div", 33);
    \u0275\u0275text(76, "1st Contact");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(77, "div", 34);
    \u0275\u0275text(78);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(79, "div", 32)(80, "div", 33);
    \u0275\u0275text(81, "Screening");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(82, "div", 34);
    \u0275\u0275text(83);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(84, "div", 32)(85, "div", 33);
    \u0275\u0275text(86, "Assessment");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(87, "div", 34);
    \u0275\u0275text(88);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(89, "div", 32)(90, "div", 33);
    \u0275\u0275text(91, "Initiation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(92, "div", 34);
    \u0275\u0275text(93);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(94, "div", 32)(95, "div", 33);
    \u0275\u0275text(96, "Enrollment");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(97, "div", 34);
    \u0275\u0275text(98);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(99, "div", 32)(100, "div", 33);
    \u0275\u0275text(101, "Termination");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(102, "div", 34);
    \u0275\u0275text(103);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(104, "div", 35)(105, "div", 36)(106, "button", 37);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r7);
      const episode_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActivityFilter(episode_r2.episode_id, "all"));
    });
    \u0275\u0275text(107);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(108, "button", 37);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template_button_click_108_listener() {
      \u0275\u0275restoreView(_r7);
      const episode_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActivityFilter(episode_r2.episode_id, "services"));
    });
    \u0275\u0275text(109);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(110, "button", 37);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template_button_click_110_listener() {
      \u0275\u0275restoreView(_r7);
      const episode_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActivityFilter(episode_r2.episode_id, "appointments"));
    });
    \u0275\u0275text(111);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(112, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_112_Template, 3, 0, "div", 38)(113, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_113_Template, 2, 0, "p", 39);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(114, "div", 40)(115, "span")(116, "strong");
    \u0275\u0275text(117, "Submitted:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(118);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(119, "span")(120, "strong");
    \u0275\u0275text(121, "Batch:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(122);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(123, "span")(124, "strong");
    \u0275\u0275text(125, "Response:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(126);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(127, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_127_Template, 4, 1, "span", 41);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE05_002", episode_r2.referral_received_date_formatted || episode_r2.referral_received_date));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE05_002", episode_r2.referral_received_date_formatted || episode_r2.referral_received_date)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !episode_r2.referral_received_date_formatted && !episode_r2.referral_received_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.referral_received_date_formatted || episode_r2.referral_received_date || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE05_004", episode_r2.referral_source_type));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE05_004", episode_r2.referral_source_type)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE05_004", episode_r2.referral_source_type) !== "not-checked" ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !episode_r2.referral_source_type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(episode_r2.referral_source_type || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE05_005", episode_r2.referral_type));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE05_005", episode_r2.referral_type)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE05_005", episode_r2.referral_type) !== "not-checked" ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !episode_r2.referral_type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(episode_r2.referral_type || "-");
    \u0275\u0275advance(9);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE09_001", episode_r2.health_program_name));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE09_001", episode_r2.health_program_name)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE09_001", episode_r2.health_program_name) !== "not-checked" ? 37 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getMappedCode("DE09_001", episode_r2.health_program_name) || episode_r2.health_program_number || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE09_002", episode_r2.health_program_name));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE09_002", episode_r2.health_program_name)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !episode_r2.health_program_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(episode_r2.health_program_name || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE09_003", episode_r2.functional_centre));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE09_003", episode_r2.functional_centre)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE09_003", episode_r2.functional_centre_mapped) !== "not-checked" ? 50 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !episode_r2.functional_centre_mapped && !episode_r2.functional_centre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(episode_r2.functional_centre_mapped || episode_r2.functional_centre || "-");
    \u0275\u0275advance(9);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_002", episode_r2.episode_of_care_status));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_002", episode_r2.episode_of_care_status)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getMappingStatus("DE06_002", episode_r2.episode_of_care_status) !== "not-checked" ? 63 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !episode_r2.episode_of_care_status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(episode_r2.episode_of_care_status || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getFieldStatus("DE06_003", episode_r2.first_contact_date_formatted || episode_r2.first_contact_date));
    \u0275\u0275domProperty("title", ctx_r2.getFieldTooltip(ctx_r2.getFieldStatus("DE06_003", episode_r2.first_contact_date_formatted || episode_r2.first_contact_date)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !episode_r2.first_contact_date_formatted && !episode_r2.first_contact_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.first_contact_date_formatted || episode_r2.first_contact_date || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("na", !episode_r2.first_contact_date_formatted && !episode_r2.first_contact_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.first_contact_date_formatted || episode_r2.first_contact_date || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("na", !episode_r2.eligibility_screening_date_formatted && !episode_r2.eligibility_screening_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.eligibility_screening_date_formatted || episode_r2.eligibility_screening_date || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("na", !episode_r2.initial_assessment_date_formatted && !episode_r2.initial_assessment_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.initial_assessment_date_formatted || episode_r2.initial_assessment_date || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("na", !episode_r2.service_initiation_date_formatted && !episode_r2.service_initiation_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.service_initiation_date_formatted || episode_r2.service_initiation_date || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("na", !episode_r2.service_enrollment_date_formatted && !episode_r2.service_enrollment_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.service_enrollment_date_formatted || episode_r2.service_enrollment_date || "-", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("na", !episode_r2.service_termination_date_formatted && !episode_r2.service_termination_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.service_termination_date_formatted || episode_r2.service_termination_date || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("on", ctx_r2.getActivityFilter(episode_r2.episode_id) === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" All Activity (", ctx_r2.getTotalEventCount(episode_r2), ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r2.getActivityFilter(episode_r2.episode_id) === "services");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Services (", (episode_r2.services == null ? null : episode_r2.services.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r2.getActivityFilter(episode_r2.episode_id) === "appointments");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Appointments (", (episode_r2.appointments == null ? null : episode_r2.appointments.length) || 0, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getFilteredEvents(episode_r2).length > 0 ? 112 : 113);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", episode_r2.submission_dt_tm_formatted || episode_r2.submission_dt_tm || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", episode_r2.submission_batch_id || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", episode_r2.submission_response_id || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(episode_r2.error_message ? 127 : -1);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275domListener("click", function EpisodeListComponent_Conditional_2_For_1_Template_div_click_1_listener() {
      const episode_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEpisode(episode_r2.episode_id));
    });
    \u0275\u0275domElementStart(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 5)(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 7);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 8);
    \u0275\u0275conditionalCreate(10, EpisodeListComponent_Conditional_2_For_1_Conditional_10_Template, 2, 0, "span", 9)(11, EpisodeListComponent_Conditional_2_For_1_Conditional_11_Template, 6, 0, "span", 10)(12, EpisodeListComponent_Conditional_2_For_1_Conditional_12_Template, 2, 5, "span", 11);
    \u0275\u0275domElementStart(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(17, EpisodeListComponent_Conditional_2_For_1_Conditional_17_Template, 3, 0, "button", 13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(18, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template, 128, 83, "div", 14);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const episode_r2 = ctx.$implicit;
    const $index_r13 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate($index_r13 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(episode_r2.health_program_name || "Unnamed Episode");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Program #", ctx_r2.getMappedCode("DE09_001", episode_r2.health_program_name) || episode_r2.health_program_number || "-", " \xB7 FC: ", episode_r2.functional_centre_mapped || episode_r2.functional_centre || "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.revertingEpisodeId() === episode_r2.episode_id ? 10 : ctx_r2.confirmingEpisodeRevertId() === episode_r2.episode_id ? 11 : 12);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (episode_r2.services == null ? null : episode_r2.services.length) || 0, " svc");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (episode_r2.appointments == null ? null : episode_r2.appointments.length) || 0, " appts");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasEncounterData(episode_r2) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isEpisodeExpanded(episode_r2.episode_id) ? 18 : -1);
  }
}
function EpisodeListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EpisodeListComponent_Conditional_2_For_1_Template, 19, 9, "div", 2, \u0275\u0275componentInstance().trackByEpisodeId, true);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.episodes());
  }
}
var EpisodeListComponent = class _EpisodeListComponent {
  mPage = inject(MPageService);
  // Input: episodes from parent
  episodes = input.required(...ngDevMode ? [{ debugName: "episodes" }] : []);
  // Validation inputs from parent
  activeSubmitFields = input(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "activeSubmitFields" }] : []);
  fieldValidations = input(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "fieldValidations" }] : []);
  // Track expanded episodes
  expandedEpisodes = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedEpisodes" }] : []);
  /** Output event for revert requests (episode or service) */
  revertRecord = output();
  /** Activity filter per episode (keyed by episode_id) */
  activityFilters = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "activityFilters" }] : []);
  /** ID of episode currently showing inline revert confirm */
  confirmingEpisodeRevertId = signal(0, ...ngDevMode ? [{ debugName: "confirmingEpisodeRevertId" }] : []);
  /** ID of episode currently being reverted */
  revertingEpisodeId = signal(0, ...ngDevMode ? [{ debugName: "revertingEpisodeId" }] : []);
  /** ID of service currently showing inline revert confirm */
  confirmingServiceRevertId = signal(0, ...ngDevMode ? [{ debugName: "confirmingServiceRevertId" }] : []);
  /** ID of service currently being reverted */
  revertingServiceId = signal(0, ...ngDevMode ? [{ debugName: "revertingServiceId" }] : []);
  constructor() {
    effect(() => {
      const eps = this.episodes();
      if (eps && eps.length > 0) {
        const allIds = new Set(eps.map((e) => e.episode_id));
        this.expandedEpisodes.set(allIds);
      }
    });
  }
  // === Episode expand/collapse ===
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
  // === Activity filter ===
  getActivityFilter(episodeId) {
    return this.activityFilters().get(episodeId) ?? "all";
  }
  setActivityFilter(episodeId, filter) {
    this.activityFilters.update((map) => {
      const newMap = new Map(map);
      newMap.set(episodeId, filter);
      return newMap;
    });
  }
  // === Timeline events ===
  getTimelineEvents(episode) {
    const events = [];
    for (const svc of episode.services || []) {
      events.push({
        type: "service",
        sortDate: new Date(svc.encounter_date || "").getTime() || 0,
        dateFormatted: svc.encounter_date_formatted || svc.encounter_date || "-",
        service: svc
      });
    }
    for (const appt of episode.appointments || []) {
      events.push({
        type: "appointment",
        sortDate: new Date(appt.appointment_start || "").getTime() || 0,
        dateFormatted: appt.appointment_start_formatted || appt.appointment_start || "-",
        appointment: appt
      });
    }
    events.sort((a, b) => b.sortDate - a.sortDate);
    return events;
  }
  getFilteredEvents(episode) {
    const all = this.getTimelineEvents(episode);
    const filter = this.getActivityFilter(episode.episode_id);
    if (filter === "all")
      return all;
    return all.filter((e) => e.type === (filter === "services" ? "service" : "appointment"));
  }
  getTotalEventCount(episode) {
    return (episode.services?.length || 0) + (episode.appointments?.length || 0);
  }
  // === Status helpers ===
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
  getStatusLabel(status) {
    switch (status) {
      case "SUBMITTED":
        return "Accepted";
      case "ERROR":
        return "Error";
      case "PENDING":
        return "Pending";
      case "PARTIAL":
        return "Partial";
      default:
        return "N/A";
    }
  }
  getEncounterStatusClass(status) {
    switch (status?.toLowerCase()) {
      case "finished":
        return "finished";
      case "arrived":
        return "arrived";
      case "in-progress":
        return "arrived";
      case "planned":
        return "booked";
      default:
        return "pending";
    }
  }
  getApptStatusClass(status) {
    switch (status?.toLowerCase()) {
      case "booked":
        return "booked";
      case "arrived":
        return "arrived";
      case "pending":
        return "pending";
      case "cancelled":
        return "cancelled";
      default:
        return "pending";
    }
  }
  getSubmissionBadgeClass(status) {
    switch (status?.toUpperCase()) {
      case "SUBMITTED":
        return "acc";
      case "ACCEPTED":
        return "acc";
      case "ERROR":
        return "err";
      case "PENDING":
        return "pend";
      case "SKIPPED":
        return "skip";
      default:
        return "skip";
    }
  }
  // === Track functions ===
  trackByEpisodeId(index, episode) {
    return episode.episode_id;
  }
  trackByEventIndex(index) {
    return index;
  }
  // === PowerChart / PowerForm ===
  onOpenChart(episode, event) {
    event.stopPropagation();
    openChart(episode.person_id, episode.encntr_id, "");
  }
  hasEncounterData(episode) {
    return episode.person_id > 0 && episode.encntr_id > 0;
  }
  hasPowerForm(service) {
    return service.dcp_forms_act_id > 0 && service.dcp_forms_ref_id > 0;
  }
  onOpenPowerForm(service, event) {
    event.stopPropagation();
    const pid = service.person_id || this.mPage.personId;
    const eid = service.encntr_id || this.mPage.encntrId;
    openPowerForm(pid, eid, service.dcp_forms_ref_id, service.dcp_forms_act_id, true);
  }
  // === Format helpers ===
  formatMinutes(minutes) {
    if (!minutes || minutes === 0)
      return "-";
    if (minutes < 60)
      return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }
  // === Field validation ===
  getFieldStatus(fieldCode, value, service) {
    if (!this.activeSubmitFields().has(fieldCode))
      return "not-submitted";
    if (fieldCode === "DE07_003")
      return "submittable";
    if ((fieldCode === "DE10_006" || fieldCode === "DE10_007") && service) {
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
  // === Revert: Episode ===
  isRevertible(status) {
    return !!status && status !== "PENDING" && status !== "N/A";
  }
  startEpisodeRevert(episodeId, event) {
    event.stopPropagation();
    this.confirmingEpisodeRevertId.set(episodeId);
  }
  confirmEpisodeRevert(episodeId, event) {
    event.stopPropagation();
    this.confirmingEpisodeRevertId.set(0);
    this.revertingEpisodeId.set(episodeId);
    this.revertRecord.emit({ type: "EPISODE", id: episodeId });
  }
  cancelEpisodeRevert(event) {
    event.stopPropagation();
    this.confirmingEpisodeRevertId.set(0);
  }
  // === Revert: Service ===
  startServiceRevert(serviceId, event) {
    event.stopPropagation();
    this.confirmingServiceRevertId.set(serviceId);
  }
  confirmServiceRevert(serviceId, event) {
    event.stopPropagation();
    this.confirmingServiceRevertId.set(0);
    this.revertingServiceId.set(serviceId);
    this.revertRecord.emit({ type: "SERVICE", id: serviceId });
  }
  cancelServiceRevert(event) {
    event.stopPropagation();
    this.confirmingServiceRevertId.set(0);
  }
  /** Called by parent after revert completes to clear reverting state */
  clearRevertingState(type, id) {
    if (type === "EPISODE") {
      this.revertingEpisodeId.set(0);
    } else {
      if (this.revertingServiceId() === id) {
        this.revertingServiceId.set(0);
      }
    }
  }
  static \u0275fac = function EpisodeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EpisodeListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpisodeListComponent, selectors: [["app-episode-list"]], inputs: { episodes: [1, "episodes"], activeSubmitFields: [1, "activeSubmitFields"], fieldValidations: [1, "fieldValidations"] }, outputs: { revertRecord: "revertRecord" }, decls: 3, vars: 1, consts: [[1, "episode-list"], [1, "no-episodes"], [1, "ep-card"], [1, "ep-top", 3, "click"], [1, "ep-num"], [1, "ep-info"], [1, "ep-name"], [1, "ep-fc"], [1, "ep-badges"], [1, "tag", "tag-reverting"], [1, "revert-confirm"], [1, "tag", 3, "class", "revertible"], [1, "mini-tag"], ["title", "Open Chart in PowerChart", 1, "chart-btn"], [1, "ep-body"], [1, "spinner-sm"], [1, "revert-confirm", 3, "click"], [1, "revert-btn", "confirm", 3, "click"], [1, "revert-btn", "cancel", 3, "click"], [1, "tag", 3, "click"], ["title", "Open Chart in PowerChart", 1, "chart-btn", 3, "click"], [1, "material-symbols-outlined"], [1, "ep-fields-grid"], [1, "ep-field-group"], [1, "efg-title"], [1, "de-tag"], [1, "efg-fields"], [1, "ef-label"], [1, "ind", 3, "title"], [1, "ef-value"], [1, "vcheck", 3, "ok", "err", "title"], [1, "eoc-dates"], [1, "eoc-date"], [1, "eoc-label"], [1, "eoc-val"], [1, "activity-section"], [1, "activity-header"], [1, "activity-tab", 3, "click"], [1, "timeline"], [1, "no-activity"], [1, "sub-bar"], [1, "sub-error"], [1, "vcheck", 3, "title"], [1, "tl-event"], [1, "tl-dot", "service"], [1, "tl-card"], [1, "tl-card-head"], [1, "tl-type", "service"], [1, "tl-date"], [1, "tl-status"], [1, "tl-sub-status", "reverting"], [1, "tl-sub-status", 3, "class", "revertible"], [1, "tl-details"], [1, "tl-detail"], [1, "lbl"], [1, "vcheck", 3, "ok", "err"], [1, "tl-actions"], [1, "tl-action-btn", "form"], [1, "tl-action-btn", "revert"], [1, "tl-hse-id"], [1, "tl-sub-status", 3, "click"], [1, "vcheck"], [1, "tl-action-btn", "form", 3, "click"], [1, "tl-action-btn", "revert", 3, "click"], [1, "tl-dot", "appt"], [1, "tl-type", "appt"], [1, "tl-sub-status"]], template: function EpisodeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, EpisodeListComponent_Conditional_1_Template, 2, 0, "p", 1)(2, EpisodeListComponent_Conditional_2_Template, 2, 0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.episodes().length === 0 ? 1 : 2);
    }
  }, styles: ['\n\n.episode-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  font-family: var(--mha-font);\n  font-size: 13px;\n}\n.no-episodes[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--mha-text-3);\n  font-style: italic;\n  padding: 24px;\n}\n.ep-card[_ngcontent-%COMP%] {\n  background: var(--mha-surface);\n  border: 1px solid var(--mha-border);\n  border-radius: var(--mha-r-lg);\n  overflow: hidden;\n}\n.ep-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: var(--mha-violet-bg);\n  border-bottom: 1px solid var(--mha-border);\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.ep-top[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.97);\n}\n.ep-num[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--mha-violet);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 11px;\n  flex-shrink: 0;\n}\n.ep-info[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.ep-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.ep-fc[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--mha-text-3);\n}\n.ep-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.tag.status-success[_ngcontent-%COMP%] {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tag.status-error[_ngcontent-%COMP%] {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tag.status-pending[_ngcontent-%COMP%] {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tag.status-partial[_ngcontent-%COMP%] {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.tag.tag-reverting[_ngcontent-%COMP%] {\n  background: var(--mha-surface-dim);\n  display: inline-flex;\n  align-items: center;\n}\n.tag.revertible[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.tag.revertible[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  text-decoration: underline;\n}\n.mini-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: var(--mha-surface);\n  color: var(--mha-text-3);\n  border: 1px solid var(--mha-border-light);\n}\n.chart-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--mha-text-3);\n  padding: 0;\n}\n.chart-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n  color: var(--mha-violet);\n}\n.chart-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ep-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ep-fields-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--mha-border-light);\n}\n.ep-field-group[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-right: 1px solid var(--mha-border-light);\n}\n.ep-field-group[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.efg-title[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--mha-text-3);\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.de-tag[_ngcontent-%COMP%] {\n  font-size: 8px;\n  padding: 1px 4px;\n  border-radius: 3px;\n  background: var(--mha-surface-dim);\n  color: var(--mha-text-3);\n  border: 1px solid var(--mha-border-light);\n}\n.efg-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px 12px;\n}\n.ef-label[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  color: var(--mha-text-3);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.ef-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.ef-value.na[_ngcontent-%COMP%] {\n  color: var(--mha-text-3);\n  font-weight: 400;\n}\n.ind[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  cursor: help;\n}\n.ind.submittable[_ngcontent-%COMP%] {\n  background: var(--mha-green);\n}\n.ind.needs-review[_ngcontent-%COMP%] {\n  background: var(--mha-amber);\n}\n.ind.not-submitted[_ngcontent-%COMP%] {\n  background: var(--mha-border);\n}\n.vcheck[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n}\n.vcheck.ok[_ngcontent-%COMP%] {\n  color: var(--mha-green);\n}\n.vcheck.err[_ngcontent-%COMP%] {\n  color: var(--mha-red);\n}\n.eoc-dates[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--mha-border-light);\n  background: var(--mha-surface-dim);\n  overflow-x: auto;\n}\n.eoc-date[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 8px 10px;\n  border-right: 1px solid var(--mha-border-light);\n  text-align: center;\n}\n.eoc-date[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.eoc-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: var(--mha-text-3);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.eoc-val[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  margin-top: 2px;\n}\n.eoc-val.na[_ngcontent-%COMP%] {\n  color: var(--mha-text-3);\n  font-weight: 400;\n  font-size: 11px;\n}\n.activity-section[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.activity-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.activity-tab[_ngcontent-%COMP%] {\n  font-family: var(--mha-font);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 12px;\n  border: 1px solid var(--mha-border);\n  background: var(--mha-surface);\n  color: var(--mha-text-3);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.activity-tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--mha-text-3);\n}\n.activity-tab.on[_ngcontent-%COMP%] {\n  background: var(--mha-teal);\n  color: white;\n  border-color: var(--mha-teal);\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 24px;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 7px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--mha-border-light);\n}\n.tl-event[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 12px;\n}\n.tl-event[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.tl-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -21px;\n  top: 12px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid var(--mha-surface);\n}\n.tl-dot.service[_ngcontent-%COMP%] {\n  background: var(--mha-teal);\n}\n.tl-dot.appt[_ngcontent-%COMP%] {\n  background: var(--mha-blue);\n}\n.tl-card[_ngcontent-%COMP%] {\n  background: var(--mha-surface);\n  border: 1px solid var(--mha-border-light);\n  border-radius: var(--mha-r);\n  padding: 10px 12px;\n  transition: border-color 0.15s;\n}\n.tl-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--mha-border);\n}\n.tl-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  flex-wrap: wrap;\n}\n.tl-type[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.tl-type.service[_ngcontent-%COMP%] {\n  background: var(--mha-teal-bg);\n  color: var(--mha-teal);\n}\n.tl-type.appt[_ngcontent-%COMP%] {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.tl-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.tl-status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.tl-status.finished[_ngcontent-%COMP%] {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tl-status.arrived[_ngcontent-%COMP%] {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tl-status.booked[_ngcontent-%COMP%] {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.tl-status.pending[_ngcontent-%COMP%] {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tl-status.cancelled[_ngcontent-%COMP%] {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tl-sub-status[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n.tl-sub-status.acc[_ngcontent-%COMP%] {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tl-sub-status.pend[_ngcontent-%COMP%] {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tl-sub-status.err[_ngcontent-%COMP%] {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tl-sub-status.skip[_ngcontent-%COMP%] {\n  background: var(--mha-surface-dim);\n  color: var(--mha-text-3);\n}\n.tl-sub-status.reverting[_ngcontent-%COMP%] {\n  background: var(--mha-surface-dim);\n  display: inline-flex;\n  align-items: center;\n}\n.tl-sub-status.revertible[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.tl-sub-status.revertible[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n  text-decoration: underline;\n}\n.tl-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 16px;\n  font-size: 11.5px;\n  color: var(--mha-text-2);\n}\n.tl-detail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.tl-detail[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  color: var(--mha-text-3);\n  font-size: 10px;\n}\n.tl-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid var(--mha-border-light);\n}\n.tl-action-btn[_ngcontent-%COMP%] {\n  font-family: var(--mha-font);\n  font-size: 10px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 4px;\n  border: 1px solid var(--mha-border);\n  background: var(--mha-surface);\n  color: var(--mha-text-3);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  transition: all 0.15s;\n}\n.tl-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--mha-text-3);\n  color: var(--mha-text-2);\n}\n.tl-action-btn.revert[_ngcontent-%COMP%] {\n  color: var(--mha-amber);\n  border-color: var(--mha-amber);\n}\n.tl-action-btn.revert[_ngcontent-%COMP%]:hover {\n  background: var(--mha-amber-bg);\n}\n.tl-action-btn.form[_ngcontent-%COMP%] {\n  color: var(--mha-teal);\n  border-color: var(--mha-teal);\n}\n.tl-action-btn.form[_ngcontent-%COMP%]:hover {\n  background: var(--mha-teal-bg);\n}\n.tl-hse-id[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--mha-text-3);\n  margin-left: auto;\n  font-family: monospace;\n}\n.no-activity[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--mha-text-3);\n  font-style: italic;\n  padding: 16px;\n  margin: 0;\n}\n.sub-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 10px;\n  color: var(--mha-text-3);\n  background: var(--mha-surface-dim);\n  padding: 6px 14px;\n  border-top: 1px solid var(--mha-border-light);\n}\n.sub-bar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--mha-text-2);\n}\n.sub-error[_ngcontent-%COMP%] {\n  color: var(--mha-red);\n}\n.revert-confirm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--mha-text-2);\n}\n.revert-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border: 1px solid var(--mha-border);\n  border-radius: 3px;\n  background: var(--mha-surface);\n  cursor: pointer;\n  font-size: 10px;\n  padding: 0;\n  line-height: 1;\n}\n.revert-btn.confirm[_ngcontent-%COMP%] {\n  color: var(--mha-green);\n  border-color: var(--mha-green);\n}\n.revert-btn.confirm[_ngcontent-%COMP%]:hover {\n  background: var(--mha-green-bg);\n}\n.revert-btn.cancel[_ngcontent-%COMP%] {\n  color: var(--mha-red);\n  border-color: var(--mha-red);\n}\n.revert-btn.cancel[_ngcontent-%COMP%]:hover {\n  background: var(--mha-red-bg);\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 2px solid var(--mha-text-3);\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .ep-fields-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ep-field-group[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid var(--mha-border-light);\n  }\n  .ep-field-group[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .eoc-dates[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .tl-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpisodeListComponent, [{
    type: Component,
    args: [{ selector: "app-episode-list", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="episode-list">
  @if (episodes().length === 0) {
    <p class="no-episodes">No episodes found</p>
  } @else {
    @for (episode of episodes(); track trackByEpisodeId($index, episode)) {
      <div class="ep-card">

        <!-- Episode Header -->
        <div class="ep-top" (click)="toggleEpisode(episode.episode_id)">
          <div class="ep-num">{{ $index + 1 }}</div>
          <div class="ep-info">
            <div class="ep-name">{{ episode.health_program_name || 'Unnamed Episode' }}</div>
            <div class="ep-fc">
              Program #{{ getMappedCode('DE09_001', episode.health_program_name) || episode.health_program_number || '-' }}
              &middot; FC: {{ episode.functional_centre_mapped || episode.functional_centre || '-' }}
            </div>
          </div>
          <div class="ep-badges">
            @if (revertingEpisodeId() === episode.episode_id) {
              <span class="tag tag-reverting"><span class="spinner-sm"></span></span>
            } @else if (confirmingEpisodeRevertId() === episode.episode_id) {
              <span class="revert-confirm" (click)="$event.stopPropagation()">
                Revert?
                <button class="revert-btn confirm" (click)="confirmEpisodeRevert(episode.episode_id, $event)">&#10003;</button>
                <button class="revert-btn cancel" (click)="cancelEpisodeRevert($event)">&#10007;</button>
              </span>
            } @else {
              <span class="tag" [class]="getStatusClass(episode.submission_status)"
                [class.revertible]="isRevertible(episode.submission_status)"
                (click)="$event.stopPropagation(); isRevertible(episode.submission_status) ? startEpisodeRevert(episode.episode_id, $event) : null">
                {{ getStatusLabel(episode.submission_status) }}
              </span>
            }
            <span class="mini-tag">{{ episode.services?.length || 0 }} svc</span>
            <span class="mini-tag">{{ episode.appointments?.length || 0 }} appts</span>
            @if (hasEncounterData(episode)) {
              <button class="chart-btn" title="Open Chart in PowerChart"
                (click)="onOpenChart(episode, $event)">
                <span class="material-symbols-outlined">open_in_new</span>
              </button>
            }
          </div>
        </div>

        @if (isEpisodeExpanded(episode.episode_id)) {
          <div class="ep-body">

            <!-- Fields Grid: Referral / Program / Episode -->
            <div class="ep-fields-grid">
              <!-- DE05: Referral -->
              <div class="ep-field-group">
                <div class="efg-title">Referral <span class="de-tag">DE05</span></div>
                <div class="efg-fields">
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE05_002', episode.referral_received_date_formatted || episode.referral_received_date)"
                        [title]="getFieldTooltip(getFieldStatus('DE05_002', episode.referral_received_date_formatted || episode.referral_received_date))"></span>
                      Received
                    </div>
                    <div class="ef-value" [class.na]="!episode.referral_received_date_formatted && !episode.referral_received_date">
                      {{ episode.referral_received_date_formatted || episode.referral_received_date || '-' }}
                    </div>
                  </div>
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE05_004', episode.referral_source_type)"
                        [title]="getFieldTooltip(getFieldStatus('DE05_004', episode.referral_source_type))"></span>
                      @if (getMappingStatus('DE05_004', episode.referral_source_type) !== 'not-checked') {
                        <span class="vcheck" [class.ok]="getMappingStatus('DE05_004', episode.referral_source_type) === 'valid'"
                          [class.err]="getMappingStatus('DE05_004', episode.referral_source_type) === 'invalid'"
                          [title]="getMappingTooltip('DE05_004', episode.referral_source_type)">{{ getMappingStatus('DE05_004', episode.referral_source_type) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                      }
                      Source
                    </div>
                    <div class="ef-value" [class.na]="!episode.referral_source_type">{{ episode.referral_source_type || '-' }}</div>
                  </div>
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE05_005', episode.referral_type)"
                        [title]="getFieldTooltip(getFieldStatus('DE05_005', episode.referral_type))"></span>
                      @if (getMappingStatus('DE05_005', episode.referral_type) !== 'not-checked') {
                        <span class="vcheck" [class.ok]="getMappingStatus('DE05_005', episode.referral_type) === 'valid'"
                          [class.err]="getMappingStatus('DE05_005', episode.referral_type) === 'invalid'"
                          [title]="getMappingTooltip('DE05_005', episode.referral_type)">{{ getMappingStatus('DE05_005', episode.referral_type) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                      }
                      Type
                    </div>
                    <div class="ef-value" [class.na]="!episode.referral_type">{{ episode.referral_type || '-' }}</div>
                  </div>
                </div>
              </div>

              <!-- DE09: Program -->
              <div class="ep-field-group">
                <div class="efg-title">Program <span class="de-tag">DE09</span></div>
                <div class="efg-fields">
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE09_001', episode.health_program_name)"
                        [title]="getFieldTooltip(getFieldStatus('DE09_001', episode.health_program_name))"></span>
                      @if (getMappingStatus('DE09_001', episode.health_program_name) !== 'not-checked') {
                        <span class="vcheck" [class.ok]="getMappingStatus('DE09_001', episode.health_program_name) === 'valid'"
                          [class.err]="getMappingStatus('DE09_001', episode.health_program_name) === 'invalid'"
                          [title]="getMappingTooltip('DE09_001', episode.health_program_name)">{{ getMappingStatus('DE09_001', episode.health_program_name) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                      }
                      #
                    </div>
                    <div class="ef-value">{{ getMappedCode('DE09_001', episode.health_program_name) || episode.health_program_number || '-' }}</div>
                  </div>
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE09_002', episode.health_program_name)"
                        [title]="getFieldTooltip(getFieldStatus('DE09_002', episode.health_program_name))"></span>
                      Name
                    </div>
                    <div class="ef-value" [class.na]="!episode.health_program_name">{{ episode.health_program_name || '-' }}</div>
                  </div>
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE09_003', episode.functional_centre)"
                        [title]="getFieldTooltip(getFieldStatus('DE09_003', episode.functional_centre))"></span>
                      @if (getMappingStatus('DE09_003', episode.functional_centre_mapped) !== 'not-checked') {
                        <span class="vcheck" [class.ok]="getMappingStatus('DE09_003', episode.functional_centre_mapped) === 'valid'"
                          [class.err]="getMappingStatus('DE09_003', episode.functional_centre_mapped) === 'invalid'"
                          [title]="getMappingTooltip('DE09_003', episode.functional_centre_mapped)">{{ getMappingStatus('DE09_003', episode.functional_centre_mapped) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                      }
                      FC
                    </div>
                    <div class="ef-value" [class.na]="!episode.functional_centre_mapped && !episode.functional_centre">{{ episode.functional_centre_mapped || episode.functional_centre || '-' }}</div>
                  </div>
                </div>
              </div>

              <!-- DE06: Episode -->
              <div class="ep-field-group">
                <div class="efg-title">Episode <span class="de-tag">DE06</span></div>
                <div class="efg-fields">
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE06_002', episode.episode_of_care_status)"
                        [title]="getFieldTooltip(getFieldStatus('DE06_002', episode.episode_of_care_status))"></span>
                      @if (getMappingStatus('DE06_002', episode.episode_of_care_status) !== 'not-checked') {
                        <span class="vcheck" [class.ok]="getMappingStatus('DE06_002', episode.episode_of_care_status) === 'valid'"
                          [class.err]="getMappingStatus('DE06_002', episode.episode_of_care_status) === 'invalid'"
                          [title]="getMappingTooltip('DE06_002', episode.episode_of_care_status)">{{ getMappingStatus('DE06_002', episode.episode_of_care_status) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                      }
                      Status
                    </div>
                    <div class="ef-value" [class.na]="!episode.episode_of_care_status">{{ episode.episode_of_care_status || '-' }}</div>
                  </div>
                  <div>
                    <div class="ef-label">
                      <span class="ind" [class]="getFieldStatus('DE06_003', episode.first_contact_date_formatted || episode.first_contact_date)"
                        [title]="getFieldTooltip(getFieldStatus('DE06_003', episode.first_contact_date_formatted || episode.first_contact_date))"></span>
                      1st Contact
                    </div>
                    <div class="ef-value" [class.na]="!episode.first_contact_date_formatted && !episode.first_contact_date">
                      {{ episode.first_contact_date_formatted || episode.first_contact_date || '-' }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Episode of Care Dates \u2014 horizontal stepper -->
            <div class="eoc-dates">
              <div class="eoc-date">
                <div class="eoc-label">1st Contact</div>
                <div class="eoc-val" [class.na]="!episode.first_contact_date_formatted && !episode.first_contact_date">
                  {{ episode.first_contact_date_formatted || episode.first_contact_date || '-' }}
                </div>
              </div>
              <div class="eoc-date">
                <div class="eoc-label">Screening</div>
                <div class="eoc-val" [class.na]="!episode.eligibility_screening_date_formatted && !episode.eligibility_screening_date">
                  {{ episode.eligibility_screening_date_formatted || episode.eligibility_screening_date || '-' }}
                </div>
              </div>
              <div class="eoc-date">
                <div class="eoc-label">Assessment</div>
                <div class="eoc-val" [class.na]="!episode.initial_assessment_date_formatted && !episode.initial_assessment_date">
                  {{ episode.initial_assessment_date_formatted || episode.initial_assessment_date || '-' }}
                </div>
              </div>
              <div class="eoc-date">
                <div class="eoc-label">Initiation</div>
                <div class="eoc-val" [class.na]="!episode.service_initiation_date_formatted && !episode.service_initiation_date">
                  {{ episode.service_initiation_date_formatted || episode.service_initiation_date || '-' }}
                </div>
              </div>
              <div class="eoc-date">
                <div class="eoc-label">Enrollment</div>
                <div class="eoc-val" [class.na]="!episode.service_enrollment_date_formatted && !episode.service_enrollment_date">
                  {{ episode.service_enrollment_date_formatted || episode.service_enrollment_date || '-' }}
                </div>
              </div>
              <div class="eoc-date">
                <div class="eoc-label">Termination</div>
                <div class="eoc-val" [class.na]="!episode.service_termination_date_formatted && !episode.service_termination_date">
                  {{ episode.service_termination_date_formatted || episode.service_termination_date || '-' }}
                </div>
              </div>
            </div>

            <!-- Activity Timeline -->
            <div class="activity-section">
              <div class="activity-header">
                <button class="activity-tab" [class.on]="getActivityFilter(episode.episode_id) === 'all'"
                  (click)="setActivityFilter(episode.episode_id, 'all')">
                  All Activity ({{ getTotalEventCount(episode) }})
                </button>
                <button class="activity-tab" [class.on]="getActivityFilter(episode.episode_id) === 'services'"
                  (click)="setActivityFilter(episode.episode_id, 'services')">
                  Services ({{ episode.services?.length || 0 }})
                </button>
                <button class="activity-tab" [class.on]="getActivityFilter(episode.episode_id) === 'appointments'"
                  (click)="setActivityFilter(episode.episode_id, 'appointments')">
                  Appointments ({{ episode.appointments?.length || 0 }})
                </button>
              </div>

              @if (getFilteredEvents(episode).length > 0) {
                <div class="timeline">
                  @for (event of getFilteredEvents(episode); track trackByEventIndex($index)) {

                    <!-- SERVICE event -->
                    @if (event.type === 'service' && event.service) {
                      <div class="tl-event">
                        <div class="tl-dot service"></div>
                        <div class="tl-card">
                          <div class="tl-card-head">
                            <span class="tl-type service">Service</span>
                            <span class="tl-date">{{ event.dateFormatted }}</span>
                            <span class="tl-status" [class]="getEncounterStatusClass(event.service.encounter_status)">
                              {{ event.service.encounter_status || '-' }}
                            </span>
                            <!-- Submission status badge -->
                            @if (revertingServiceId() === event.service.service_id) {
                              <span class="tl-sub-status reverting"><span class="spinner-sm"></span></span>
                            } @else if (confirmingServiceRevertId() === event.service.service_id) {
                              <span class="revert-confirm">
                                Revert?
                                <button class="revert-btn confirm" (click)="confirmServiceRevert(event.service.service_id, $event)">&#10003;</button>
                                <button class="revert-btn cancel" (click)="cancelServiceRevert($event)">&#10007;</button>
                              </span>
                            } @else {
                              <span class="tl-sub-status" [class]="getSubmissionBadgeClass(event.service.submission_status)"
                                [class.revertible]="isRevertible(event.service.submission_status)"
                                (click)="isRevertible(event.service.submission_status) ? startServiceRevert(event.service.service_id, $event) : null">
                                {{ event.service.submission_status || 'N/A' }}
                              </span>
                            }
                          </div>
                          <div class="tl-details">
                            <div class="tl-detail">
                              <span class="lbl">Modality:</span>
                              <span class="ind" [class]="getFieldStatus('DE10_002', event.service.service_modality)"
                                [title]="getFieldTooltip(getFieldStatus('DE10_002', event.service.service_modality))"></span>
                              {{ event.service.service_modality || '-' }}
                              @if (getMappingStatus('DE10_002', event.service.service_modality) !== 'not-checked') {
                                <span class="vcheck" [class.ok]="getMappingStatus('DE10_002', event.service.service_modality) === 'valid'"
                                  [class.err]="getMappingStatus('DE10_002', event.service.service_modality) === 'invalid'">{{ getMappingStatus('DE10_002', event.service.service_modality) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                              }
                            </div>
                            <div class="tl-detail">
                              <span class="lbl">Type:</span>
                              <span class="ind" [class]="getFieldStatus('DE10_003', event.service.service_modality_type)"
                                [title]="getFieldTooltip(getFieldStatus('DE10_003', event.service.service_modality_type))"></span>
                              {{ event.service.service_modality_type || '-' }}
                              @if (getMappingStatus('DE10_003', event.service.service_modality_type) !== 'not-checked') {
                                <span class="vcheck" [class.ok]="getMappingStatus('DE10_003', event.service.service_modality_type) === 'valid'"
                                  [class.err]="getMappingStatus('DE10_003', event.service.service_modality_type) === 'invalid'">{{ getMappingStatus('DE10_003', event.service.service_modality_type) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                              }
                            </div>
                            <div class="tl-detail">
                              <span class="lbl">Direct:</span> {{ formatMinutes(event.service.direct_service_minutes) }}
                            </div>
                            <div class="tl-detail">
                              <span class="lbl">Indirect:</span> {{ formatMinutes(event.service.indirect_service_minutes) }}
                            </div>
                          </div>
                          <div class="tl-actions">
                            @if (hasPowerForm(event.service)) {
                              <button class="tl-action-btn form" (click)="onOpenPowerForm(event.service, $event)">Open PowerForm</button>
                            }
                            @if (isRevertible(event.service.submission_status) && confirmingServiceRevertId() !== event.service.service_id && revertingServiceId() !== event.service.service_id) {
                              <button class="tl-action-btn revert" (click)="startServiceRevert(event.service.service_id, $event)">Revert</button>
                            }
                            <span class="tl-hse-id">HSE: {{ event.service.health_service_event_id || '-' }}</span>
                          </div>
                        </div>
                      </div>
                    }

                    <!-- APPOINTMENT event -->
                    @if (event.type === 'appointment' && event.appointment) {
                      <div class="tl-event">
                        <div class="tl-dot appt"></div>
                        <div class="tl-card">
                          <div class="tl-card-head">
                            <span class="tl-type appt">Appointment</span>
                            <span class="tl-date">{{ event.dateFormatted }}</span>
                            <span class="tl-status" [class]="getApptStatusClass(event.appointment.status)">
                              {{ event.appointment.status || '-' }}
                            </span>
                            <span class="tl-sub-status" [class]="getSubmissionBadgeClass(event.appointment.submission_status)">
                              {{ event.appointment.submission_status || 'N/A' }}
                            </span>
                          </div>
                          <div class="tl-details">
                            <div class="tl-detail"><span class="lbl">Type:</span> {{ event.appointment.type_display || '-' }}</div>
                            <div class="tl-detail"><span class="lbl">Duration:</span> {{ formatMinutes(event.appointment.duration_minutes) }}</div>
                            <div class="tl-detail"><span class="lbl">Location:</span> {{ event.appointment.location_display || '-' }}</div>
                            @if (event.appointment.cancellation_reason) {
                              <div class="tl-detail"><span class="lbl">Cancel:</span> {{ event.appointment.cancellation_reason }}</div>
                            }
                          </div>
                        </div>
                      </div>
                    }
                  }
                </div>
              } @else {
                <p class="no-activity">No activity recorded</p>
              }
            </div>

            <!-- Submission bar -->
            <div class="sub-bar">
              <span><strong>Submitted:</strong> {{ episode.submission_dt_tm_formatted || episode.submission_dt_tm || '-' }}</span>
              <span><strong>Batch:</strong> {{ episode.submission_batch_id || '-' }}</span>
              <span><strong>Response:</strong> {{ episode.submission_response_id || '-' }}</span>
              @if (episode.error_message) {
                <span class="sub-error"><strong>Error:</strong> {{ episode.error_message }}</span>
              }
            </div>
          </div>
        }
      </div>
    }
  }
</div>
`, styles: ['/* src/app/patients/components/episode-list.scss */\n.episode-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  font-family: var(--mha-font);\n  font-size: 13px;\n}\n.no-episodes {\n  text-align: center;\n  color: var(--mha-text-3);\n  font-style: italic;\n  padding: 24px;\n}\n.ep-card {\n  background: var(--mha-surface);\n  border: 1px solid var(--mha-border);\n  border-radius: var(--mha-r-lg);\n  overflow: hidden;\n}\n.ep-top {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: var(--mha-violet-bg);\n  border-bottom: 1px solid var(--mha-border);\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.ep-top:hover {\n  filter: brightness(0.97);\n}\n.ep-num {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--mha-violet);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 11px;\n  flex-shrink: 0;\n}\n.ep-info {\n  min-width: 0;\n  flex: 1;\n}\n.ep-name {\n  font-weight: 600;\n  font-size: 13px;\n}\n.ep-fc {\n  font-size: 10px;\n  color: var(--mha-text-3);\n}\n.ep-badges {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.tag {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.tag.status-success {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tag.status-error {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tag.status-pending {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tag.status-partial {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.tag.tag-reverting {\n  background: var(--mha-surface-dim);\n  display: inline-flex;\n  align-items: center;\n}\n.tag.revertible {\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.tag.revertible:hover {\n  opacity: 0.7;\n  text-decoration: underline;\n}\n.mini-tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: var(--mha-surface);\n  color: var(--mha-text-3);\n  border: 1px solid var(--mha-border-light);\n}\n.chart-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  color: var(--mha-text-3);\n  padding: 0;\n}\n.chart-btn:hover {\n  background: rgba(0, 0, 0, 0.06);\n  color: var(--mha-violet);\n}\n.chart-btn .material-symbols-outlined {\n  font-size: 16px;\n}\n.ep-body {\n  padding: 0;\n}\n.ep-fields-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--mha-border-light);\n}\n.ep-field-group {\n  padding: 10px 14px;\n  border-right: 1px solid var(--mha-border-light);\n}\n.ep-field-group:last-child {\n  border-right: none;\n}\n.efg-title {\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--mha-text-3);\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.de-tag {\n  font-size: 8px;\n  padding: 1px 4px;\n  border-radius: 3px;\n  background: var(--mha-surface-dim);\n  color: var(--mha-text-3);\n  border: 1px solid var(--mha-border-light);\n}\n.efg-fields {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px 12px;\n}\n.ef-label {\n  font-size: 9.5px;\n  color: var(--mha-text-3);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.ef-value {\n  font-size: 12px;\n  font-weight: 500;\n}\n.ef-value.na {\n  color: var(--mha-text-3);\n  font-weight: 400;\n}\n.ind {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  cursor: help;\n}\n.ind.submittable {\n  background: var(--mha-green);\n}\n.ind.needs-review {\n  background: var(--mha-amber);\n}\n.ind.not-submitted {\n  background: var(--mha-border);\n}\n.vcheck {\n  font-size: 9px;\n  font-weight: 700;\n}\n.vcheck.ok {\n  color: var(--mha-green);\n}\n.vcheck.err {\n  color: var(--mha-red);\n}\n.eoc-dates {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--mha-border-light);\n  background: var(--mha-surface-dim);\n  overflow-x: auto;\n}\n.eoc-date {\n  flex: 1;\n  min-width: 0;\n  padding: 8px 10px;\n  border-right: 1px solid var(--mha-border-light);\n  text-align: center;\n}\n.eoc-date:last-child {\n  border-right: none;\n}\n.eoc-label {\n  font-size: 9px;\n  color: var(--mha-text-3);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.eoc-val {\n  font-size: 11.5px;\n  font-weight: 600;\n  margin-top: 2px;\n}\n.eoc-val.na {\n  color: var(--mha-text-3);\n  font-weight: 400;\n  font-size: 11px;\n}\n.activity-section {\n  padding: 12px 14px;\n}\n.activity-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.activity-tab {\n  font-family: var(--mha-font);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 12px;\n  border: 1px solid var(--mha-border);\n  background: var(--mha-surface);\n  color: var(--mha-text-3);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.activity-tab:hover {\n  border-color: var(--mha-text-3);\n}\n.activity-tab.on {\n  background: var(--mha-teal);\n  color: white;\n  border-color: var(--mha-teal);\n}\n.timeline {\n  position: relative;\n  padding-left: 24px;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 7px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--mha-border-light);\n}\n.tl-event {\n  position: relative;\n  margin-bottom: 12px;\n}\n.tl-event:last-child {\n  margin-bottom: 0;\n}\n.tl-dot {\n  position: absolute;\n  left: -21px;\n  top: 12px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid var(--mha-surface);\n}\n.tl-dot.service {\n  background: var(--mha-teal);\n}\n.tl-dot.appt {\n  background: var(--mha-blue);\n}\n.tl-card {\n  background: var(--mha-surface);\n  border: 1px solid var(--mha-border-light);\n  border-radius: var(--mha-r);\n  padding: 10px 12px;\n  transition: border-color 0.15s;\n}\n.tl-card:hover {\n  border-color: var(--mha-border);\n}\n.tl-card-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  flex-wrap: wrap;\n}\n.tl-type {\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.tl-type.service {\n  background: var(--mha-teal-bg);\n  color: var(--mha-teal);\n}\n.tl-type.appt {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.tl-date {\n  font-size: 12px;\n  font-weight: 600;\n}\n.tl-status {\n  margin-left: auto;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.tl-status.finished {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tl-status.arrived {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tl-status.booked {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.tl-status.pending {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tl-status.cancelled {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tl-sub-status {\n  font-size: 9px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 8px;\n  text-transform: uppercase;\n}\n.tl-sub-status.acc {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tl-sub-status.pend {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tl-sub-status.err {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tl-sub-status.skip {\n  background: var(--mha-surface-dim);\n  color: var(--mha-text-3);\n}\n.tl-sub-status.reverting {\n  background: var(--mha-surface-dim);\n  display: inline-flex;\n  align-items: center;\n}\n.tl-sub-status.revertible {\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.tl-sub-status.revertible:hover {\n  opacity: 0.7;\n  text-decoration: underline;\n}\n.tl-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 16px;\n  font-size: 11.5px;\n  color: var(--mha-text-2);\n}\n.tl-detail {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.tl-detail .lbl {\n  color: var(--mha-text-3);\n  font-size: 10px;\n}\n.tl-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid var(--mha-border-light);\n}\n.tl-action-btn {\n  font-family: var(--mha-font);\n  font-size: 10px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 4px;\n  border: 1px solid var(--mha-border);\n  background: var(--mha-surface);\n  color: var(--mha-text-3);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  transition: all 0.15s;\n}\n.tl-action-btn:hover {\n  border-color: var(--mha-text-3);\n  color: var(--mha-text-2);\n}\n.tl-action-btn.revert {\n  color: var(--mha-amber);\n  border-color: var(--mha-amber);\n}\n.tl-action-btn.revert:hover {\n  background: var(--mha-amber-bg);\n}\n.tl-action-btn.form {\n  color: var(--mha-teal);\n  border-color: var(--mha-teal);\n}\n.tl-action-btn.form:hover {\n  background: var(--mha-teal-bg);\n}\n.tl-hse-id {\n  font-size: 10px;\n  color: var(--mha-text-3);\n  margin-left: auto;\n  font-family: monospace;\n}\n.no-activity {\n  text-align: center;\n  color: var(--mha-text-3);\n  font-style: italic;\n  padding: 16px;\n  margin: 0;\n}\n.sub-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 10px;\n  color: var(--mha-text-3);\n  background: var(--mha-surface-dim);\n  padding: 6px 14px;\n  border-top: 1px solid var(--mha-border-light);\n}\n.sub-bar strong {\n  color: var(--mha-text-2);\n}\n.sub-error {\n  color: var(--mha-red);\n}\n.revert-confirm {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--mha-text-2);\n}\n.revert-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border: 1px solid var(--mha-border);\n  border-radius: 3px;\n  background: var(--mha-surface);\n  cursor: pointer;\n  font-size: 10px;\n  padding: 0;\n  line-height: 1;\n}\n.revert-btn.confirm {\n  color: var(--mha-green);\n  border-color: var(--mha-green);\n}\n.revert-btn.confirm:hover {\n  background: var(--mha-green-bg);\n}\n.revert-btn.cancel {\n  color: var(--mha-red);\n  border-color: var(--mha-red);\n}\n.revert-btn.cancel:hover {\n  background: var(--mha-red-bg);\n}\n.spinner-sm {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 2px solid var(--mha-text-3);\n  border-top-color: transparent;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .ep-fields-grid {\n    grid-template-columns: 1fr;\n  }\n  .ep-field-group {\n    border-right: none;\n    border-bottom: 1px solid var(--mha-border-light);\n  }\n  .ep-field-group:last-child {\n    border-bottom: none;\n  }\n  .eoc-dates {\n    flex-wrap: wrap;\n  }\n  .tl-details {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpisodeListComponent, { className: "EpisodeListComponent", filePath: "src/app/patients/components/episode-list.ts", lineNumber: 31 });
})();

// src/app/patients/components/patient-actions-sidebar.ts
var _forTrack02 = ($index, $item) => $item.id;
function PatientActionsSidebarComponent_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "button", 20);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_7_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initiateRevertAll());
    });
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Revert All Records");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 21);
    \u0275\u0275text(5, "\u21A9");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r1.reverting());
  }
}
function PatientActionsSidebarComponent_Conditional_7_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 23)(1, "label", 25)(2, "input", 26);
    \u0275\u0275domListener("change", function PatientActionsSidebarComponent_Conditional_7_Conditional_16_For_2_Template_input_change_2_listener() {
      const record_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleRecordSelection(record_r6.id));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("checked", ctx_r1.isRecordSelected(record_r6.id))("disabled", ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", record_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("pending", record_r6.status === "PENDING")("submitted", record_r6.status === "SUBMITTED")("failed", record_r6.status === "FAILED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r6.status, " ");
  }
}
function PatientActionsSidebarComponent_Conditional_7_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, PatientActionsSidebarComponent_Conditional_7_Conditional_16_For_2_Template, 7, 10, "div", 23, _forTrack02);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 24);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_7_Conditional_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initiateRevertSelected());
    });
    \u0275\u0275domElementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 21);
    \u0275\u0275text(7, "\u21A9");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recordsForSelection());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", !ctx_r1.hasSelectedRecords() || ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Revert Selected (", ctx_r1.selectedRecords().size, ")");
  }
}
function PatientActionsSidebarComponent_Conditional_7_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 15);
    \u0275\u0275text(1, "No records available");
    \u0275\u0275domElementEnd();
  }
}
function PatientActionsSidebarComponent_Conditional_7_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
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
function PatientActionsSidebarComponent_Conditional_7_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 19);
    \u0275\u0275text(1, " No submission history ");
    \u0275\u0275domElementEnd();
  }
}
function PatientActionsSidebarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 4)(1, "section", 6)(2, "h3", 7);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_7_Template_h3_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleQuickActions());
    });
    \u0275\u0275domElementStart(3, "span", 8);
    \u0275\u0275text(4, "\u26A1");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6, "Quick Actions");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 9);
    \u0275\u0275text(8, "\u25B6");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(9, PatientActionsSidebarComponent_Conditional_7_Conditional_9_Template, 6, 1, "div", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "section", 11)(11, "h3", 12)(12, "span", 13);
    \u0275\u0275text(13, "\u2713");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(14, " Revert Individual ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "div", 14);
    \u0275\u0275conditionalCreate(16, PatientActionsSidebarComponent_Conditional_7_Conditional_16_Template, 8, 2)(17, PatientActionsSidebarComponent_Conditional_7_Conditional_17_Template, 2, 0, "p", 15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "section", 16)(19, "h3", 12)(20, "span", 17);
    \u0275\u0275text(21, "\uF4CB");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(22, " Submission History ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "div", 14);
    \u0275\u0275repeaterCreate(24, PatientActionsSidebarComponent_Conditional_7_For_25_Template, 6, 8, "div", 18, _forTrack02);
    \u0275\u0275conditionalCreate(26, PatientActionsSidebarComponent_Conditional_7_Conditional_26_Template, 2, 0, "p", 19);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("expanded", ctx_r1.quickActionsExpanded());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.quickActionsExpanded() ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.recordsForSelection().length > 0 ? 16 : 17);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.recordsForSelection());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.recordsForSelection().length === 0 ? 26 : -1);
  }
}
function PatientActionsSidebarComponent_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "Confirm Revert All");
    \u0275\u0275domElementEnd();
  }
}
function PatientActionsSidebarComponent_Conditional_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "Reverting...");
    \u0275\u0275domElementEnd();
  }
}
function PatientActionsSidebarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 5)(1, "div", 32)(2, "div", 33)(3, "h2");
    \u0275\u0275text(4, "Confirm Revert All");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 34);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 35)(8, "p", 36)(9, "span", 37);
    \u0275\u0275text(10, "\u26A0");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(11, " This will revert ALL records for this patient back to PENDING status. This action cannot be undone. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "p", 38);
    \u0275\u0275text(13, "Are you sure you want to continue?");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div", 39)(15, "button", 40);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(16, " Cancel ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "button", 41);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_8_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRevertAll());
    });
    \u0275\u0275conditionalCreate(18, PatientActionsSidebarComponent_Conditional_8_Conditional_18_Template, 2, 0, "span")(19, PatientActionsSidebarComponent_Conditional_8_Conditional_19_Template, 2, 0, "span");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275domProperty("disabled", ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.reverting());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.reverting() ? 18 : 19);
  }
}
function PatientActionsSidebarComponent_Conditional_9_For_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 43);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const record_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r10.label, " ");
  }
}
function PatientActionsSidebarComponent_Conditional_9_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PatientActionsSidebarComponent_Conditional_9_For_17_Conditional_0_Template, 2, 1, "li", 43);
  }
  if (rf & 2) {
    const record_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isRecordSelected(record_r10.id) ? 0 : -1);
  }
}
function PatientActionsSidebarComponent_Conditional_9_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "Confirm Revert Selected");
    \u0275\u0275domElementEnd();
  }
}
function PatientActionsSidebarComponent_Conditional_9_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "Reverting...");
    \u0275\u0275domElementEnd();
  }
}
function PatientActionsSidebarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 5)(1, "div", 32)(2, "div", 33)(3, "h2");
    \u0275\u0275text(4, "Confirm Revert Selected");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 34);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 35)(8, "p", 36)(9, "span", 37);
    \u0275\u0275text(10, "\u26A0");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 42)(13, "h4");
    \u0275\u0275text(14, "Records to revert:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "ul");
    \u0275\u0275repeaterCreate(16, PatientActionsSidebarComponent_Conditional_9_For_17_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "p", 38);
    \u0275\u0275text(19, "Are you sure you want to continue?");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 39)(21, "button", 40);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRevert());
    });
    \u0275\u0275text(22, " Cancel ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "button", 41);
    \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Conditional_9_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRevertSelected());
    });
    \u0275\u0275conditionalCreate(24, PatientActionsSidebarComponent_Conditional_9_Conditional_24_Template, 2, 0, "span")(25, PatientActionsSidebarComponent_Conditional_9_Conditional_25_Template, 2, 0, "span");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" This will revert ", ctx_r1.selectedRecords().size, " selected record(s) back to PENDING status. This action cannot be undone. ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.recordsForSelection());
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("disabled", ctx_r1.reverting());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.reverting());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.reverting() ? 24 : 25);
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
        id: `episode_${episode.episode_id}`,
        label: `Episode: ${episode.health_program_name || "Unnamed"}`,
        type: "EPISODE",
        status: episode.submission_status
      });
      records.push({
        id: `client_${patient.client?.client_id ?? eIdx}`,
        label: `Client Data (Captured: ${patient.client?.extracted_dt_tm_formatted || "N/A"})`,
        type: "CLIENT",
        status: patient.client?.submission_status || ""
      });
      if (episode.services) {
        episode.services.forEach((service, sIdx) => {
          records.push({
            id: `service_${service.service_id}`,
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
   * Handles mixed selections (e.g. episode + service) by making
   * separate sequential CCL calls for each record type.
   */
  confirmRevertSelected() {
    const patient = this.patientDetail();
    if (!patient || !patient.client) {
      console.error("Patient data not available for revert operation");
      return;
    }
    const selectedIds = Array.from(this.selectedRecords());
    const episodeIds = selectedIds.filter((id) => id.startsWith("episode_")).map((id) => id.substring("episode_".length));
    const clientIds = selectedIds.filter((id) => id.startsWith("client_")).map((id) => id.substring("client_".length));
    const serviceIds = selectedIds.filter((id) => id.startsWith("service_")).map((id) => id.substring("service_".length));
    const personId = patient.client.person_id;
    const operations = [];
    if (episodeIds.length > 0)
      operations.push({ type: "EPISODE", episodeIds });
    if (clientIds.length > 0)
      operations.push({ type: "CLIENT", clientIds });
    if (serviceIds.length > 0)
      operations.push({ type: "SERVICE", serviceIds });
    if (operations.length === 0)
      return;
    let completed = 0;
    const executeNext = () => {
      if (completed >= operations.length) {
        this.showRevertSelectedConfirm.set(false);
        this.clearSelectedRecords();
        this.revertCompleted.emit();
        return;
      }
      const op = operations[completed];
      this.patientsService.revertPatientRecords(personId, op.type, { episodeIds: op.episodeIds, clientIds: op.clientIds, serviceIds: op.serviceIds }, () => {
        completed++;
        executeNext();
      }, (error) => {
        console.error(`Revert ${op.type} failed:`, error);
        completed++;
        executeNext();
      });
    };
    executeNext();
  }
  static \u0275fac = function PatientActionsSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientActionsSidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientActionsSidebarComponent, selectors: [["app-patient-actions-sidebar"]], inputs: { patientDetail: [1, "patientDetail"] }, outputs: { revertCompleted: "revertCompleted" }, decls: 10, vars: 6, consts: [[1, "actions-sidebar"], [1, "sidebar-header"], ["aria-label", "Toggle sidebar", 1, "toggle-btn", 3, "click"], ["aria-label", "Expand/collapse sidebar", 1, "toggle-icon"], [1, "sidebar-content"], [1, "modal-overlay"], [1, "sidebar-section", "quick-actions-section"], [1, "section-header", 3, "click"], ["aria-label", "Lightning bolt icon", 1, "section-icon"], [1, "collapse-arrow"], [1, "section-content", "quick-actions-content"], [1, "sidebar-section", "revert-section"], [1, "section-header"], ["aria-label", "Checkbox icon", 1, "section-icon"], [1, "section-content"], [1, "no-records-message"], [1, "sidebar-section"], ["aria-label", "Document list icon", 1, "section-icon"], [1, "history-item"], [1, "no-history-message"], [1, "action-btn", "quick-action-btn", 3, "click", "disabled"], [1, "btn-icon"], [1, "records-list"], [1, "record-item"], [1, "action-btn", "submit-selected-btn", 3, "click", "disabled"], [1, "record-label"], ["type", "checkbox", 1, "record-checkbox", 3, "change", "checked", "disabled"], [1, "record-text"], [1, "status-badge"], [1, "history-row"], [1, "history-label"], [1, "history-status"], [1, "modal-dialog"], [1, "modal-header"], ["aria-label", "Close dialog", 1, "close-btn", 3, "click"], [1, "modal-body"], [1, "warning-text"], ["aria-label", "Warning icon", 1, "warning-icon"], [1, "confirmation-text"], [1, "modal-footer"], [1, "btn-cancel", 3, "click", "disabled"], [1, "btn-confirm-revert", 3, "click", "disabled"], [1, "selected-records-list"], [1, "record-item-in-list"]], template: function PatientActionsSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "aside", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Patient Actions");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "button", 2);
      \u0275\u0275domListener("click", function PatientActionsSidebarComponent_Template_button_click_4_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275domElementStart(5, "span", 3);
      \u0275\u0275text(6, "\u25B6");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(7, PatientActionsSidebarComponent_Conditional_7_Template, 27, 5, "div", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(8, PatientActionsSidebarComponent_Conditional_8_Template, 20, 3, "div", 5);
      \u0275\u0275conditionalCreate(9, PatientActionsSidebarComponent_Conditional_9_Template, 26, 4, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", !ctx.sidebarExpanded());
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-expanded", ctx.sidebarExpanded());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.sidebarExpanded() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRevertAllConfirm() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRevertSelectedConfirm() ? 9 : -1);
    }
  }, styles: ["\n\n.actions-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background-color: #f8f9fa;\n  border-left: 1px solid #dee2e6;\n  max-height: 100vh;\n  overflow-y: auto;\n  transition: width 0.3s ease, margin-right 0.3s ease;\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 60px;\n  overflow: hidden;\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: none;\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.actions-sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-bottom: 1px solid #dee2e6;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  transition: opacity 0.3s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: color 0.2s ease, transform 0.3s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #495057;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: #fff;\n  overflow: hidden;\n  flex-shrink: 0;\n  transition: box-shadow 0.2s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  color: #212529;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 1;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .collapse-arrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .collapse-arrow.expanded[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]:has(.section-content)   .section-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .quick-actions-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  padding: 0;\n  border-top: 1px solid #dee2e6;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .quick-actions-content[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-bottom: 1px solid #dee2e6;\n  margin: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.quick-actions-section[_ngcontent-%COMP%]   .quick-actions-content[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.revert-section[_ngcontent-%COMP%]    > .section-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 45vh;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.revert-section[_ngcontent-%COMP%]    > .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section.revert-section[_ngcontent-%COMP%]    > .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px;\n  border-radius: 4px;\n  background-color: #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  flex: 1;\n  cursor: pointer;\n  margin: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%]   .record-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%]   .record-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #495057;\n  word-break: break-word;\n  line-height: 1.4;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge.pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge.submitted[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   .status-badge.failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .records-list[_ngcontent-%COMP%]   .no-records-message[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline-block;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.quick-action-btn[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: #fff;\n  margin-bottom: 0;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.quick-action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0b5ed7;\n  box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.quick-action-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.submit-selected-btn[_ngcontent-%COMP%] {\n  background-color: #198754;\n  color: #fff;\n  margin-top: 8px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.submit-selected-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #157347;\n  box-shadow: 0 2px 8px rgba(25, 135, 84, 0.3);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .action-btn.submit-selected-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status.pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status.submitted[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-row[_ngcontent-%COMP%]   .history-status.failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .no-history-message[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 24px;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 0 0 16px 0;\n  padding: 12px;\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 4px;\n  color: #856404;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .confirmation-text[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  color: #495057;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  list-style: disc;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 13px;\n  color: #495057;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .selected-records-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .record-item-in-list[_ngcontent-%COMP%] {\n  display: block;\n  word-break: break-word;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid #dee2e6;\n  background-color: #f8f9fa;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 4px;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #212529;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #dee2e6;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm-revert[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: #fff;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm-revert[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm-revert[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .actions-sidebar[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n  .actions-sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n@media (max-width: 576px) {\n  .actions-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-left: none;\n    border-right: 1px solid #dee2e6;\n  }\n  .actions-sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientActionsSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-patient-actions-sidebar", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<aside class="actions-sidebar" [class.collapsed]="!sidebarExpanded()">
  <!-- Sidebar Header -->
  <div class="sidebar-header">
    <h2>Patient Actions</h2>
    <button
      class="toggle-btn"
      (click)="toggleSidebar()"
      [attr.aria-expanded]="sidebarExpanded()"
      aria-label="Toggle sidebar">
      <span class="toggle-icon" aria-label="Expand/collapse sidebar">&#9654;</span>
    </button>
  </div>

  <!-- Sidebar Content -->
  @if (sidebarExpanded()) {
    <div class="sidebar-content">
      <!-- Quick Actions Section - Collapsible -->
      <section class="sidebar-section quick-actions-section">
        <h3 class="section-header" (click)="toggleQuickActions()">
          <span class="section-icon" aria-label="Lightning bolt icon">&#9889;</span>
          <span>Quick Actions</span>
          <span class="collapse-arrow" [class.expanded]="quickActionsExpanded()">&#9654;</span>
        </h3>
        @if (quickActionsExpanded()) {
          <div class="section-content quick-actions-content">
            <button
              class="action-btn quick-action-btn"
              (click)="initiateRevertAll()"
              [disabled]="reverting()">
              <span>Revert All Records</span>
              <span class="btn-icon">&#8617;</span>
            </button>
          </div>
        }
      </section>

      <!-- Revert Individual Section -->
      <section class="sidebar-section revert-section">
        <h3 class="section-header">
          <span class="section-icon" aria-label="Checkbox icon">&#10003;</span>
          Revert Individual
        </h3>
        <div class="section-content">
          @if (recordsForSelection().length > 0) {
            <div class="records-list">
              @for (record of recordsForSelection(); track record.id) {
                <div class="record-item">
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
              }
            </div>

            <button
              class="action-btn submit-selected-btn"
              (click)="initiateRevertSelected()"
              [disabled]="!hasSelectedRecords() || reverting()">
              <span>Revert Selected ({{ selectedRecords().size }})</span>
              <span class="btn-icon">&#8617;</span>
            </button>
          } @else {
            <p class="no-records-message">No records available</p>
          }
        </div>
      </section>

      <!-- Submission History Section -->
      <section class="sidebar-section">
        <h3 class="section-header">
          <span class="section-icon" aria-label="Document list icon">&#128203;</span>
          Submission History
        </h3>
        <div class="section-content">
          @for (record of recordsForSelection(); track record.id) {
            <div class="history-item">
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
          }
          @if (recordsForSelection().length === 0) {
            <p class="no-history-message">
              No submission history
            </p>
          }
        </div>
      </section>
    </div>
  }
</aside>

<!-- Revert All Confirmation Modal -->
@if (showRevertAllConfirm()) {
  <div class="modal-overlay">
    <div class="modal-dialog">
      <div class="modal-header">
        <h2>Confirm Revert All</h2>
        <button
          class="close-btn"
          (click)="cancelRevert()"
          aria-label="Close dialog">
          &#10005;
        </button>
      </div>
      <div class="modal-body">
        <p class="warning-text">
          <span class="warning-icon" aria-label="Warning icon">&#9888;</span>
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
          @if (!reverting()) {
            <span>Confirm Revert All</span>
          } @else {
            <span>Reverting...</span>
          }
        </button>
      </div>
    </div>
  </div>
}

<!-- Revert Selected Confirmation Modal -->
@if (showRevertSelectedConfirm()) {
  <div class="modal-overlay">
    <div class="modal-dialog">
      <div class="modal-header">
        <h2>Confirm Revert Selected</h2>
        <button
          class="close-btn"
          (click)="cancelRevert()"
          aria-label="Close dialog">
          &#10005;
        </button>
      </div>
      <div class="modal-body">
        <p class="warning-text">
          <span class="warning-icon" aria-label="Warning icon">&#9888;</span>
          This will revert {{ selectedRecords().size }} selected record(s) back to PENDING status. This action cannot be undone.
        </p>
        <div class="selected-records-list">
          <h4>Records to revert:</h4>
          <ul>
            @for (record of recordsForSelection(); track record.id) {
              @if (isRecordSelected(record.id)) {
                <li class="record-item-in-list">
                  {{ record.label }}
                </li>
              }
            }
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
          @if (!reverting()) {
            <span>Confirm Revert Selected</span>
          } @else {
            <span>Reverting...</span>
          }
        </button>
      </div>
    </div>
  </div>
}
`, styles: ["/* src/app/patients/components/patient-actions-sidebar.scss */\n.actions-sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background-color: #f8f9fa;\n  border-left: 1px solid #dee2e6;\n  max-height: 100vh;\n  overflow-y: auto;\n  transition: width 0.3s ease, margin-right 0.3s ease;\n}\n.actions-sidebar.collapsed {\n  width: 60px;\n  overflow: hidden;\n}\n.actions-sidebar.collapsed .sidebar-header h2 {\n  display: none;\n}\n.actions-sidebar.collapsed .toggle-icon {\n  transform: rotate(180deg);\n}\n.actions-sidebar.collapsed .sidebar-content {\n  display: none;\n}\n.actions-sidebar .sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-bottom: 1px solid #dee2e6;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  transition: opacity 0.3s ease;\n}\n.actions-sidebar .sidebar-header .toggle-btn {\n  background: none;\n  border: none;\n  padding: 4px 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: color 0.2s ease, transform 0.3s ease;\n}\n.actions-sidebar .sidebar-header .toggle-btn:hover {\n  color: #495057;\n}\n.actions-sidebar .sidebar-header .toggle-btn .toggle-icon {\n  font-size: 14px;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar .sidebar-content {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.actions-sidebar .sidebar-content .sidebar-section {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: #fff;\n  overflow: hidden;\n  flex-shrink: 0;\n  transition: box-shadow 0.2s ease;\n}\n.actions-sidebar .sidebar-content .sidebar-section:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  color: #212529;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header .section-icon {\n  font-size: 16px;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header span:nth-child(2) {\n  flex: 1;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header .collapse-arrow {\n  font-size: 12px;\n  flex-shrink: 0;\n  transition: transform 0.3s ease;\n  display: inline-block;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-header .collapse-arrow.expanded {\n  transform: rotate(90deg);\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .section-header {\n  border-bottom: none;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section:has(.section-content) .section-header {\n  border-bottom: 1px solid #dee2e6;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .quick-actions-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  padding: 0;\n  border-top: 1px solid #dee2e6;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .quick-actions-content .quick-action-btn {\n  border-radius: 0;\n  border-bottom: 1px solid #dee2e6;\n  margin: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section.quick-actions-section .quick-actions-content .quick-action-btn:last-child {\n  border-bottom: none;\n}\n.actions-sidebar .sidebar-content .sidebar-section.revert-section > .section-content {\n  display: flex;\n  flex-direction: column;\n  max-height: 45vh;\n}\n.actions-sidebar .sidebar-content .sidebar-section.revert-section > .section-content .records-list {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n}\n.actions-sidebar .sidebar-content .sidebar-section.revert-section > .section-content .action-btn {\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content {\n  padding: 12px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px;\n  border-radius: 4px;\n  background-color: #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item:hover {\n  background-color: #e9ecef;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .record-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  flex: 1;\n  cursor: pointer;\n  margin: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .record-label .record-checkbox {\n  margin-top: 2px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .record-label .record-text {\n  font-size: 13px;\n  color: #495057;\n  word-break: break-word;\n  line-height: 1.4;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge {\n  flex-shrink: 0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge.pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge.submitted {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .record-item .status-badge.failed {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .records-list .no-records-message {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn {\n  width: 100%;\n  padding: 10px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn .btn-icon {\n  font-size: 14px;\n  display: inline-block;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.quick-action-btn {\n  background-color: #0d6efd;\n  color: #fff;\n  margin-bottom: 0;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.quick-action-btn:hover:not(:disabled) {\n  background-color: #0b5ed7;\n  box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.quick-action-btn:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.submit-selected-btn {\n  background-color: #198754;\n  color: #fff;\n  margin-top: 8px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.submit-selected-btn:hover:not(:disabled) {\n  background-color: #157347;\n  box-shadow: 0 2px 8px rgba(25, 135, 84, 0.3);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .action-btn.submit-selected-btn:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-label {\n  color: #6c757d;\n  font-weight: 500;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status {\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status.pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status.submitted {\n  background-color: #d4edda;\n  color: #155724;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .history-item .history-row .history-status.failed {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.actions-sidebar .sidebar-content .sidebar-section .section-content .no-history-message {\n  margin: 0;\n  padding: 8px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 12px;\n  font-style: italic;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease-out;\n}\n.modal-overlay .modal-dialog {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideUp 0.3s ease-out;\n}\n.modal-overlay .modal-dialog .modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-overlay .modal-dialog .modal-header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-header .close-btn {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 24px;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.modal-overlay .modal-dialog .modal-header .close-btn:hover {\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-body {\n  padding: 20px;\n}\n.modal-overlay .modal-dialog .modal-body .warning-text {\n  display: flex;\n  gap: 12px;\n  margin: 0 0 16px 0;\n  padding: 12px;\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 4px;\n  color: #856404;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay .modal-dialog .modal-body .warning-text .warning-icon {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.modal-overlay .modal-dialog .modal-body .confirmation-text {\n  margin: 12px 0;\n  color: #495057;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list {\n  margin: 16px 0;\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list h4 {\n  margin: 0 0 8px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list ul {\n  margin: 0;\n  padding-left: 20px;\n  list-style: disc;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list ul li {\n  margin-bottom: 4px;\n  font-size: 13px;\n  color: #495057;\n}\n.modal-overlay .modal-dialog .modal-body .selected-records-list ul li .record-item-in-list {\n  display: block;\n  word-break: break-word;\n}\n.modal-overlay .modal-dialog .modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid #dee2e6;\n  background-color: #f8f9fa;\n}\n.modal-overlay .modal-dialog .modal-footer button {\n  padding: 10px 20px;\n  border-radius: 4px;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modal-overlay .modal-dialog .modal-footer button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-cancel {\n  background-color: #e9ecef;\n  color: #212529;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-cancel:hover:not(:disabled) {\n  background-color: #dee2e6;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-confirm-revert {\n  background-color: #dc3545;\n  color: #fff;\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-confirm-revert:hover:not(:disabled) {\n  background-color: #c82333;\n  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);\n}\n.modal-overlay .modal-dialog .modal-footer button.btn-confirm-revert:active:not(:disabled) {\n  transform: scale(0.98);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .actions-sidebar {\n    width: 280px;\n  }\n  .actions-sidebar.collapsed {\n    width: 50px;\n  }\n  .modal-overlay .modal-dialog {\n    width: 95%;\n  }\n}\n@media (max-width: 576px) {\n  .actions-sidebar {\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-left: none;\n    border-right: 1px solid #dee2e6;\n  }\n  .actions-sidebar.collapsed {\n    width: 40px;\n  }\n  .modal-overlay .modal-dialog {\n    width: 100%;\n    max-width: 100%;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientActionsSidebarComponent, { className: "PatientActionsSidebarComponent", filePath: "src/app/patients/components/patient-actions-sidebar.ts", lineNumber: 22 });
})();

// src/app/patients/components/patient-detail.ts
var _forTrack03 = ($index, $item) => $item.key;
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
    \u0275\u0275text(0, " Remove ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.sdohNeedsReviewCount(), " need review");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_127_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getMappingStatus(field_r3.key, field_r3.value));
    \u0275\u0275property("title", ctx_r1.getMappingTooltip(field_r3.key, field_r3.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMappingStatus(field_r3.key, field_r3.value) === "valid" ? "\u2713" : "\u2717");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_127_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275element(2, "span", 28);
    \u0275\u0275conditionalCreate(3, PatientDetailComponent_Conditional_3_Conditional_127_For_2_Conditional_3_Template, 2, 4, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFieldStatus(field_r3.key, field_r3.value));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus(field_r3.key, field_r3.value)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasMappingValidation(field_r3.key) && ctx_r1.getMappingStatus(field_r3.key, field_r3.value) !== "not-checked" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("na", !field_r3.value || field_r3.value === "-" || field_r3.value === "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r3.value || "-", " ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, PatientDetailComponent_Conditional_3_Conditional_127_For_2_Template, 7, 8, "div", 47, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sdohFields());
  }
}
function PatientDetailComponent_Conditional_3_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-episode-list", 52);
    \u0275\u0275listener("revertRecord", function PatientDetailComponent_Conditional_3_Conditional_134_Template_app_episode_list_revertRecord_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRevertRecord($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("episodes", ctx_r1.episodes())("activeSubmitFields", ctx_r1.activeSubmitFields())("fieldValidations", ctx_r1.fieldValidations());
  }
}
function PatientDetailComponent_Conditional_3_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "No episodes found");
    \u0275\u0275elementEnd();
  }
}
function PatientDetailComponent_Conditional_3_Conditional_136_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Removing... ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_136_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirm Remove ");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 53)(2, "h3");
    \u0275\u0275text(3, "Remove Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Are you sure you want to remove ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " from MHA PDS?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 54);
    \u0275\u0275text(10, "This will deactivate all records for this patient. They can be re-added later if needed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 55)(12, "button", 56);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Conditional_136_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRemovePatient());
    });
    \u0275\u0275text(13, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 57);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Conditional_136_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRemovePatient());
    });
    \u0275\u0275conditionalCreate(15, PatientDetailComponent_Conditional_3_Conditional_136_Conditional_15_Template, 1, 0)(16, PatientDetailComponent_Conditional_3_Conditional_136_Conditional_16_Template, 1, 0);
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
function PatientDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17)(17, "button", 18);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewRelatedLogs());
    });
    \u0275\u0275text(18, "Logs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 19);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemovePatient());
    });
    \u0275\u0275conditionalCreate(20, PatientDetailComponent_Conditional_3_Conditional_20_Template, 1, 0)(21, PatientDetailComponent_Conditional_3_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "div", 22)(25, "div", 23)(26, "div", 24);
    \u0275\u0275text(27, "Client ");
    \u0275\u0275elementStart(28, "span", 25);
    \u0275\u0275text(29, "DE01");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 26)(31, "div")(32, "div", 27);
    \u0275\u0275element(33, "span", 28);
    \u0275\u0275text(34, " First ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 29);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "div", 27);
    \u0275\u0275element(39, "span", 28);
    \u0275\u0275text(40, " Middle ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 29);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "div", 27);
    \u0275\u0275element(45, "span", 28);
    \u0275\u0275text(46, " Last ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 29);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "div", 27);
    \u0275\u0275element(51, "span", 28);
    \u0275\u0275text(52, " DOB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 29);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div")(56, "div", 27);
    \u0275\u0275element(57, "span", 28);
    \u0275\u0275text(58, " Est. DOB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 29);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 23)(62, "div", 24);
    \u0275\u0275text(63, "Identifiers ");
    \u0275\u0275elementStart(64, "span", 25);
    \u0275\u0275text(65, "DE02");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 26)(67, "div")(68, "div", 27);
    \u0275\u0275element(69, "span", 28);
    \u0275\u0275text(70, " MRN ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 29);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div")(74, "div", 27);
    \u0275\u0275element(75, "span", 28);
    \u0275\u0275text(76, " Vendor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 29);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div")(80, "div", 27);
    \u0275\u0275element(81, "span", 28);
    \u0275\u0275text(82, " HCN ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 29);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div")(86, "div", 27);
    \u0275\u0275element(87, "span", 28);
    \u0275\u0275text(88, " Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 29);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 30)(92, "div", 24);
    \u0275\u0275text(93, "Address ");
    \u0275\u0275elementStart(94, "span", 25);
    \u0275\u0275text(95, "DE03");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 26)(97, "div")(98, "div", 27);
    \u0275\u0275element(99, "span", 28);
    \u0275\u0275text(100, " City ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 29);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div")(104, "div", 27);
    \u0275\u0275element(105, "span", 28);
    \u0275\u0275text(106, " Prov ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 29);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div")(110, "div", 27);
    \u0275\u0275element(111, "span", 28);
    \u0275\u0275text(112, " Postal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 29);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(115, "div", 31);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_div_click_115_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSdoh());
    });
    \u0275\u0275elementStart(116, "span", 32);
    \u0275\u0275text(117, "SDOH ");
    \u0275\u0275elementStart(118, "span", 25);
    \u0275\u0275text(119, "DE04");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 33);
    \u0275\u0275element(121, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "span", 35);
    \u0275\u0275text(123);
    \u0275\u0275conditionalCreate(124, PatientDetailComponent_Conditional_3_Conditional_124_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span", 37);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(127, PatientDetailComponent_Conditional_3_Conditional_127_Template, 3, 0, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 39);
    \u0275\u0275listener("mousedown", function PatientDetailComponent_Conditional_3_Template_div_mousedown_128_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPaneResizeStart($event));
    });
    \u0275\u0275element(129, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 41)(131, "div", 42)(132, "h3");
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(134, PatientDetailComponent_Conditional_3_Conditional_134_Template, 1, 3, "app-episode-list", 43)(135, PatientDetailComponent_Conditional_3_Conditional_135_Template, 2, 0, "p", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(136, PatientDetailComponent_Conditional_3_Conditional_136_Template, 17, 5, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "app-patient-actions-sidebar", 46);
    \u0275\u0275listener("revertCompleted", function PatientDetailComponent_Conditional_3_Template_app_patient_actions_sidebar_revertCompleted_137_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.revertCompleted.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    let tmp_32_0;
    let tmp_33_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_40_0;
    let tmp_41_0;
    let tmp_42_0;
    let tmp_43_0;
    let tmp_44_0;
    let tmp_45_0;
    let tmp_46_0;
    let tmp_47_0;
    let tmp_48_0;
    let tmp_49_0;
    let tmp_50_0;
    let tmp_51_0;
    let tmp_52_0;
    let tmp_53_0;
    let tmp_54_0;
    let tmp_55_0;
    let tmp_56_0;
    let tmp_57_0;
    let tmp_58_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-dragging-panes", ctx_r1.isDraggingPanes());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.initials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.de01_001_first_name, " ", (tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.de01_003_last_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("MRN: ", ((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de02_001_mrn) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("HCN: ", ((tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de02_003_hcn) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("DOB: ", ((tmp_6_0 = ctx_r1.client()) == null ? null : tmp_6_0.de01_004_date_of_birth_formatted) || "-");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass((tmp_7_0 = ctx_r1.client()) == null ? null : tmp_7_0.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel((tmp_8_0 = ctx_r1.client()) == null ? null : tmp_8_0.submission_status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.removing());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.removing() ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx_r1.topPaneHeight(), "%");
    \u0275\u0275advance(10);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_001", (tmp_12_0 = ctx_r1.client()) == null ? null : tmp_12_0.de01_001_first_name));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_001", (tmp_13_0 = ctx_r1.client()) == null ? null : tmp_13_0.de01_001_first_name)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_14_0 = ctx_r1.client()) == null ? null : tmp_14_0.de01_001_first_name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_15_0 = ctx_r1.client()) == null ? null : tmp_15_0.de01_001_first_name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_002", (tmp_16_0 = ctx_r1.client()) == null ? null : tmp_16_0.de01_002_middle_name));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_002", (tmp_17_0 = ctx_r1.client()) == null ? null : tmp_17_0.de01_002_middle_name)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_18_0 = ctx_r1.client()) == null ? null : tmp_18_0.de01_002_middle_name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_19_0 = ctx_r1.client()) == null ? null : tmp_19_0.de01_002_middle_name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_003", (tmp_20_0 = ctx_r1.client()) == null ? null : tmp_20_0.de01_003_last_name));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_003", (tmp_21_0 = ctx_r1.client()) == null ? null : tmp_21_0.de01_003_last_name)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_22_0 = ctx_r1.client()) == null ? null : tmp_22_0.de01_003_last_name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_23_0 = ctx_r1.client()) == null ? null : tmp_23_0.de01_003_last_name) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_004", (tmp_24_0 = ctx_r1.client()) == null ? null : tmp_24_0.de01_004_date_of_birth_formatted));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_004", (tmp_25_0 = ctx_r1.client()) == null ? null : tmp_25_0.de01_004_date_of_birth_formatted)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_26_0 = ctx_r1.client()) == null ? null : tmp_26_0.de01_004_date_of_birth_formatted));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_27_0 = ctx_r1.client()) == null ? null : tmp_27_0.de01_004_date_of_birth_formatted) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE01_005", (tmp_28_0 = ctx_r1.client()) == null ? null : tmp_28_0.de01_005_estimated_dob_flag));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE01_005", (tmp_29_0 = ctx_r1.client()) == null ? null : tmp_29_0.de01_005_estimated_dob_flag)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_30_0 = ctx_r1.client()) == null ? null : tmp_30_0.de01_005_estimated_dob_flag) === 1 ? "Yes" : "No");
    \u0275\u0275advance(9);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_001", (tmp_31_0 = ctx_r1.client()) == null ? null : tmp_31_0.de02_001_mrn));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_001", (tmp_32_0 = ctx_r1.client()) == null ? null : tmp_32_0.de02_001_mrn)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_33_0 = ctx_r1.client()) == null ? null : tmp_33_0.de02_001_mrn));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_34_0 = ctx_r1.client()) == null ? null : tmp_34_0.de02_001_mrn) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_002", (tmp_35_0 = ctx_r1.client()) == null ? null : tmp_35_0.de02_002_vendor_id));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_002", (tmp_36_0 = ctx_r1.client()) == null ? null : tmp_36_0.de02_002_vendor_id)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_37_0 = ctx_r1.client()) == null ? null : tmp_37_0.de02_002_vendor_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_38_0 = ctx_r1.client()) == null ? null : tmp_38_0.de02_002_vendor_id) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_003", (tmp_39_0 = ctx_r1.client()) == null ? null : tmp_39_0.de02_003_hcn));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_003", (tmp_40_0 = ctx_r1.client()) == null ? null : tmp_40_0.de02_003_hcn)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_41_0 = ctx_r1.client()) == null ? null : tmp_41_0.de02_003_hcn));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_42_0 = ctx_r1.client()) == null ? null : tmp_42_0.de02_003_hcn) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_005", (tmp_43_0 = ctx_r1.client()) == null ? null : tmp_43_0.de02_005_identifier_type));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_005", (tmp_44_0 = ctx_r1.client()) == null ? null : tmp_44_0.de02_005_identifier_type)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_45_0 = ctx_r1.client()) == null ? null : tmp_45_0.de02_005_identifier_type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_46_0 = ctx_r1.client()) == null ? null : tmp_46_0.de02_005_identifier_type) || "-");
    \u0275\u0275advance(9);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE03_002", (tmp_47_0 = ctx_r1.client()) == null ? null : tmp_47_0.de03_002_city));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE03_002", (tmp_48_0 = ctx_r1.client()) == null ? null : tmp_48_0.de03_002_city)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_49_0 = ctx_r1.client()) == null ? null : tmp_49_0.de03_002_city));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_50_0 = ctx_r1.client()) == null ? null : tmp_50_0.de03_002_city) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE03_003", (tmp_51_0 = ctx_r1.client()) == null ? null : tmp_51_0.de03_003_province));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE03_003", (tmp_52_0 = ctx_r1.client()) == null ? null : tmp_52_0.de03_003_province)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_53_0 = ctx_r1.client()) == null ? null : tmp_53_0.de03_003_province));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_54_0 = ctx_r1.client()) == null ? null : tmp_54_0.de03_003_province) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE03_004", (tmp_55_0 = ctx_r1.client()) == null ? null : tmp_55_0.de03_004_postal_code));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE03_004", (tmp_56_0 = ctx_r1.client()) == null ? null : tmp_56_0.de03_004_postal_code)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("na", !((tmp_57_0 = ctx_r1.client()) == null ? null : tmp_57_0.de03_004_postal_code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_58_0 = ctx_r1.client()) == null ? null : tmp_58_0.de03_004_postal_code) || "-");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.sdohExpanded());
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.sdohProgressPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.sdohFilledCount(), "/", ctx_r1.sdohTotalCount(), " fields ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sdohNeedsReviewCount() > 0 ? 124 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sdohExpanded() ? "\u25B2" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sdohExpanded() ? 127 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Episodes (", ctx_r1.episodeCount(), ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.episodes().length > 0 ? 134 : 135);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showRemoveConfirm() ? 136 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("patientDetail", ctx_r1.patientDetail());
  }
}
var PatientDetailComponent = class _PatientDetailComponent {
  patientsService = inject(PatientsService);
  configService = inject(MhaPdsConfigurationService);
  elementRef = inject(ElementRef);
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
  /** Reference to episode-list for clearing revert state */
  episodeList = viewChild(EpisodeListComponent, ...ngDevMode ? [{ debugName: "episodeList" }] : []);
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
  // --- v2 Split-Pane state ---
  sdohExpanded = signal(false, ...ngDevMode ? [{ debugName: "sdohExpanded" }] : []);
  topPaneHeight = signal(42, ...ngDevMode ? [{ debugName: "topPaneHeight" }] : []);
  // percent
  isDraggingPanes = signal(false, ...ngDevMode ? [{ debugName: "isDraggingPanes" }] : []);
  paneStartY = 0;
  paneStartHeight = 0;
  /** Patient initials for avatar */
  initials = computed(() => {
    const c = this.client();
    if (!c)
      return "";
    const first = (c.de01_001_first_name || "")[0] || "";
    const last = (c.de01_003_last_name || "")[0] || "";
    return (first + last).toUpperCase();
  }, ...ngDevMode ? [{ debugName: "initials" }] : []);
  /** SDOH fields array for template iteration */
  sdohFields = computed(() => {
    const c = this.client();
    if (!c)
      return [];
    return [
      { key: "DE04_001", label: "Effective Date", value: c.de04_001_sdoh_effective_date },
      { key: "DE04_002", label: "Ethnicity", value: c.de04_002_ethnicity },
      { key: "DE04_003", label: "Religion", value: c.de04_003_religion },
      { key: "DE04_004", label: "First Language", value: c.de04_004_first_language },
      { key: "DE04_005", label: "Service Language", value: c.de04_005_service_language },
      { key: "DE04_006", label: "Official Language", value: c.de04_006_official_language },
      { key: "DE04_007", label: "Gender Identity", value: c.de04_007_gender_identity },
      { key: "DE04_008", label: "Sexual Orientation", value: c.de04_008_sexual_orientation },
      { key: "DE04_009", label: "Year Arrived", value: c.de04_009_year_arrived_canada },
      { key: "DE04_010", label: "Born in Canada", value: c.de04_010_born_in_canada },
      { key: "DE04_012", label: "Citizenship", value: c.de04_012_citizenship_status },
      { key: "DE04_013", label: "Education", value: c.de04_013_education },
      { key: "DE04_014", label: "Employment", value: c.de04_014_employment },
      { key: "DE04_015", label: "Income Source", value: c.de04_015_income_source },
      { key: "DE04_016", label: "Marital Status", value: c.de04_016_marital_status },
      { key: "DE04_017", label: "Housing", value: c.de04_017_housing },
      { key: "DE04_018", label: "Household Income", value: c.de04_018_household_income },
      { key: "DE04_019", label: "Income Supports", value: c.de04_019_income_supports },
      { key: "DE04_020", label: "Legal Status", value: c.de04_020_legal_status },
      { key: "DE04_021", label: "Pre-existing Conditions", value: c.de04_021_pre_existing_conditions }
    ];
  }, ...ngDevMode ? [{ debugName: "sdohFields" }] : []);
  /** Count of SDOH fields with values */
  sdohFilledCount = computed(() => {
    return this.sdohFields().filter((f) => f.value && f.value !== "" && f.value !== "-").length;
  }, ...ngDevMode ? [{ debugName: "sdohFilledCount" }] : []);
  /** Total SDOH field count */
  sdohTotalCount = computed(() => this.sdohFields().length, ...ngDevMode ? [{ debugName: "sdohTotalCount" }] : []);
  /** SDOH progress percent */
  sdohProgressPercent = computed(() => {
    const total = this.sdohTotalCount();
    if (total === 0)
      return 0;
    return Math.round(this.sdohFilledCount() / total * 100);
  }, ...ngDevMode ? [{ debugName: "sdohProgressPercent" }] : []);
  /** Count of SDOH fields needing review (active but empty) */
  sdohNeedsReviewCount = computed(() => {
    const activeFields = this.activeSubmitFields();
    return this.sdohFields().filter((f) => {
      const isActive = activeFields.has(f.key);
      const isEmpty = !f.value || f.value === "" || f.value === "-";
      return isActive && isEmpty;
    }).length;
  }, ...ngDevMode ? [{ debugName: "sdohNeedsReviewCount" }] : []);
  /** Fields that have mapping validation */
  mappedSdohFields = /* @__PURE__ */ new Set([
    "DE04_002",
    "DE04_003",
    "DE04_004",
    "DE04_005",
    "DE04_006",
    "DE04_007",
    "DE04_008",
    "DE04_010",
    "DE04_012",
    "DE04_013",
    "DE04_014",
    "DE04_015",
    "DE04_016",
    "DE04_017",
    "DE04_018",
    "DE04_020",
    "DE04_021"
  ]);
  /** Whether a SDOH field has mapping validation */
  hasMappingValidation(fieldKey) {
    return this.mappedSdohFields.has(fieldKey);
  }
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
  // --- v2 Split-Pane vertical resize ---
  toggleSdoh() {
    this.sdohExpanded.update((v) => !v);
  }
  onPaneResizeStart(event) {
    event.preventDefault();
    this.isDraggingPanes.set(true);
    this.paneStartY = event.clientY;
    this.paneStartHeight = this.topPaneHeight();
  }
  onPaneResizeMove(event) {
    if (!this.isDraggingPanes())
      return;
    const splitEl = this.elementRef.nativeElement.querySelector(".split-container");
    if (!splitEl)
      return;
    const splitHeight = splitEl.getBoundingClientRect().height;
    const deltaY = event.clientY - this.paneStartY;
    const newHeight = this.paneStartHeight + deltaY / splitHeight * 100;
    const clamped = Math.min(80, Math.max(15, newHeight));
    this.topPaneHeight.set(clamped);
  }
  onPaneResizeEnd() {
    if (!this.isDraggingPanes())
      return;
    this.isDraggingPanes.set(false);
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
  getStatusLabel(status) {
    switch (status) {
      case "SUBMITTED":
        return "Accepted";
      case "ERROR":
        return "Error";
      case "PENDING":
        return "Pending";
      case "PARTIAL":
        return "Partial";
      default:
        return "N/A";
    }
  }
  onViewRelatedLogs() {
    const personId = this.client()?.person_id;
    if (personId) {
      this.viewLogs.emit(personId);
    }
  }
  onRemovePatient() {
    this.showRemoveConfirm.set(true);
  }
  cancelRemovePatient() {
    this.showRemoveConfirm.set(false);
  }
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
  onRevertRecord(event) {
    const personId = this.client()?.person_id;
    if (!personId)
      return;
    const recordIds = event.type === "EPISODE" ? { episodeIds: [String(event.id)] } : { serviceIds: [String(event.id)] };
    this.patientsService.revertPatientRecords(personId, event.type, recordIds, () => {
      this.episodeList()?.clearRevertingState(event.type, event.id);
      this.revertCompleted.set(true);
    }, (error) => {
      this.episodeList()?.clearRevertingState(event.type, event.id);
    });
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
  isFieldSubmittable(fieldCode) {
    return this.activeSubmitFields().has(fieldCode);
  }
  getFieldStatus(fieldCode, value) {
    const isSubmittable = this.isFieldSubmittable(fieldCode);
    if (!isSubmittable) {
      return "not-submitted";
    }
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
      addField("DE06_011", episode.service_termination_reason);
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
  ngOnDestroy() {
    this.patientsService.clearFieldValidations();
  }
  static \u0275fac = function PatientDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientDetailComponent, selectors: [["app-patient-detail"]], viewQuery: function PatientDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.episodeList, EpisodeListComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostBindings: function PatientDetailComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousemove", function PatientDetailComponent_mousemove_HostBindingHandler($event) {
        return ctx.onPaneResizeMove($event);
      }, \u0275\u0275resolveDocument)("mouseup", function PatientDetailComponent_mouseup_HostBindingHandler() {
        return ctx.onPaneResizeEnd();
      }, \u0275\u0275resolveDocument);
    }
  }, outputs: { viewEpisode: "viewEpisode", viewLogs: "viewLogs" }, decls: 4, vars: 1, consts: [[1, "patient-detail-container"], [1, "loading-state"], [1, "empty-state"], [1, "spinner"], [1, "empty-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "patient-detail-content"], [1, "pt-bar"], [1, "pt-avatar"], [1, "pt-info"], [1, "pt-name"], [1, "pt-ids"], [1, "tag"], [1, "pt-btns"], ["title", "View related logs", 1, "btn-sm", 3, "click"], ["title", "Remove patient from MHA PDS", 1, "btn-sm", "danger", 3, "click", "disabled"], [1, "split-container"], [1, "top-pane"], [1, "data-band"], [1, "band-section"], [1, "band-title"], [1, "de-tag"], [1, "band-fields"], [1, "bf-label"], [1, "ind", 3, "title"], [1, "bf-value"], [1, "band-section", "band-narrow"], [1, "sdoh-strip", 3, "click"], [1, "sdoh-title"], [1, "progress-bar"], [1, "progress-fill"], [1, "sdoh-count"], [1, "needs-review-count"], [1, "sdoh-chevron"], [1, "sdoh-grid"], [1, "resize-bar", 3, "mousedown"], [1, "resize-grip"], [1, "bottom-pane"], [1, "ep-header"], [3, "episodes", "activeSubmitFields", "fieldValidations"], [1, "no-episodes"], [1, "confirm-overlay"], [3, "revertCompleted", "patientDetail"], [1, "sdoh-cell"], [1, "sdoh-k"], [1, "mapping-indicator", 3, "class", "title"], [1, "sdoh-v"], [1, "mapping-indicator", 3, "title"], [3, "revertRecord", "episodes", "activeSubmitFields", "fieldValidations"], [1, "confirm-dialog"], [1, "confirm-warning"], [1, "confirm-actions"], [1, "btn-sm", 3, "click", "disabled"], [1, "btn-sm", "danger", 3, "click", "disabled"]], template: function PatientDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PatientDetailComponent_Conditional_1_Template, 4, 0, "div", 1)(2, PatientDetailComponent_Conditional_2_Template, 9, 0, "div", 2)(3, PatientDetailComponent_Conditional_3_Template, 138, 98);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : !ctx.client() ? 2 : 3);
    }
  }, dependencies: [EpisodeListComponent, PatientActionsSidebarComponent], styles: ["\n\n.patient-detail-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  font-family: var(--mha-font);\n  font-size: 13px;\n  color: var(--mha-text-1);\n}\n.patient-detail-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n}\n.patient-detail-content.is-dragging-panes[_ngcontent-%COMP%] {\n  cursor: row-resize;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--mha-text-3);\n  text-align: center;\n  padding: 40px;\n  font-family: var(--mha-font);\n}\n.loading-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  margin-bottom: 16px;\n  color: var(--mha-teal);\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--mha-border-light);\n  border-top-color: var(--mha-teal);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  max-width: 300px;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pt-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 20px;\n  background: var(--mha-surface);\n  border-bottom: 1px solid var(--mha-border);\n  flex-shrink: 0;\n}\n.pt-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--mha-teal);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.pt-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pt-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.pt-ids[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--mha-text-3);\n  display: flex;\n  gap: 10px;\n  margin-top: 1px;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n.tag.status-success[_ngcontent-%COMP%] {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tag.status-error[_ngcontent-%COMP%] {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tag.status-pending[_ngcontent-%COMP%] {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tag.status-partial[_ngcontent-%COMP%] {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.pt-btns[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  gap: 6px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  font-family: var(--mha-font);\n  font-size: 11px;\n  font-weight: 500;\n  padding: 5px 12px;\n  border-radius: var(--mha-r);\n  border: 1px solid var(--mha-border);\n  background: var(--mha-surface);\n  color: var(--mha-text-2);\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.btn-sm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--mha-text-3);\n}\n.btn-sm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sm.danger[_ngcontent-%COMP%] {\n  color: var(--mha-red);\n  border-color: var(--mha-red);\n}\n.btn-sm.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--mha-red-bg);\n}\n.split-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.top-pane[_ngcontent-%COMP%] {\n  min-height: 140px;\n  overflow-y: auto;\n  padding: 14px 20px;\n  background: var(--mha-surface);\n  border-bottom: none;\n}\n.bottom-pane[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 14px 20px;\n  background: var(--mha-bg);\n}\n.resize-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--mha-border);\n  cursor: row-resize;\n  flex-shrink: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.15s;\n}\n.resize-bar[_ngcontent-%COMP%]:hover {\n  background: var(--mha-text-3);\n}\n.resize-bar[_ngcontent-%COMP%]   .resize-grip[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 3px;\n  border-radius: 2px;\n  background: var(--mha-text-3);\n  opacity: 0.4;\n}\n.data-band[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border: 1px solid var(--mha-border);\n  border-radius: var(--mha-r-lg);\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.band-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border-right: 1px solid var(--mha-border-light);\n}\n.band-section[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.band-section.band-narrow[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.band-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--mha-text-3);\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.de-tag[_ngcontent-%COMP%] {\n  font-size: 8px;\n  padding: 1px 4px;\n  border-radius: 3px;\n  background: var(--mha-surface-dim);\n  color: var(--mha-text-3);\n  border: 1px solid var(--mha-border-light);\n}\n.band-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 14px;\n}\n.bf-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--mha-text-3);\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.bf-value[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n}\n.bf-value.na[_ngcontent-%COMP%] {\n  color: var(--mha-text-3);\n}\n.ind[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  cursor: help;\n}\n.ind.submittable[_ngcontent-%COMP%] {\n  background: var(--mha-green);\n}\n.ind.needs-review[_ngcontent-%COMP%] {\n  background: var(--mha-amber);\n}\n.ind.not-submitted[_ngcontent-%COMP%] {\n  background: var(--mha-border);\n}\n.sdoh-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid var(--mha-border);\n  border-radius: var(--mha-r-lg);\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.sdoh-strip[_ngcontent-%COMP%]:hover {\n  background: var(--mha-surface-dim);\n}\n.sdoh-strip.expanded[_ngcontent-%COMP%] {\n  border-radius: var(--mha-r-lg) var(--mha-r-lg) 0 0;\n}\n.sdoh-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: var(--mha-border-light);\n  border-radius: 2px;\n  overflow: hidden;\n  max-width: 200px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--mha-teal);\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.sdoh-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--mha-text-3);\n}\n.sdoh-count[_ngcontent-%COMP%]   .needs-review-count[_ngcontent-%COMP%] {\n  color: var(--mha-amber);\n}\n.sdoh-chevron[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--mha-text-3);\n  margin-left: auto;\n}\n.sdoh-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  border: 1px solid var(--mha-border);\n  border-top: none;\n  border-radius: 0 0 var(--mha-r-lg) var(--mha-r-lg);\n  overflow: hidden;\n}\n.sdoh-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 12px;\n  font-size: 11.5px;\n  border-bottom: 1px solid var(--mha-border-light);\n  border-right: 1px solid var(--mha-border-light);\n}\n.sdoh-cell[_ngcontent-%COMP%]:nth-child(3n) {\n  border-right: none;\n}\n.sdoh-k[_ngcontent-%COMP%] {\n  color: var(--mha-text-2);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-width: 0;\n}\n.sdoh-v[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: right;\n  max-width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sdoh-v.na[_ngcontent-%COMP%] {\n  color: var(--mha-text-3);\n  font-weight: 400;\n}\n.ep-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.ep-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.no-episodes[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--mha-text-3);\n  font-style: italic;\n  padding: 24px;\n}\n.confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  background: var(--mha-surface);\n  border-radius: 10px;\n  padding: 24px;\n  max-width: 420px;\n  width: 90%;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);\n  font-family: var(--mha-font);\n}\n.confirm-dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 16px;\n  color: var(--mha-text-1);\n}\n.confirm-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 13px;\n  color: var(--mha-text-2);\n  line-height: 1.5;\n}\n.confirm-dialog[_ngcontent-%COMP%]   .confirm-warning[_ngcontent-%COMP%] {\n  background: var(--mha-amber-bg);\n  border: 1px solid #ffeeba;\n  border-radius: var(--mha-r);\n  padding: 10px 12px;\n  color: var(--mha-amber);\n  font-size: 12px;\n}\n.confirm-dialog[_ngcontent-%COMP%]   .confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 20px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--mha-border);\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .pt-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .data-band[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .data-band[_ngcontent-%COMP%]   .band-section[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid var(--mha-border-light);\n  }\n  .data-band[_ngcontent-%COMP%]   .band-section[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .data-band[_ngcontent-%COMP%]   .band-section.band-narrow[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .sdoh-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sdoh-grid[_ngcontent-%COMP%]   .sdoh-cell[_ngcontent-%COMP%]:nth-child(3n) {\n    border-right: 1px solid var(--mha-border-light);\n  }\n  .sdoh-grid[_ngcontent-%COMP%]   .sdoh-cell[_ngcontent-%COMP%]:nth-child(2n) {\n    border-right: none;\n  }\n}"], changeDetection: 0 });
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
    <div class="patient-detail-content" [class.is-dragging-panes]="isDraggingPanes()">

      <!-- Patient Header Bar -->
      <div class="pt-bar">
        <div class="pt-avatar">{{ initials() }}</div>
        <div class="pt-info">
          <div class="pt-name">{{ client()?.de01_001_first_name }} {{ client()?.de01_003_last_name }}</div>
          <div class="pt-ids">
            <span>MRN: {{ client()?.de02_001_mrn || '-' }}</span>
            <span>HCN: {{ client()?.de02_003_hcn || '-' }}</span>
            <span>DOB: {{ client()?.de01_004_date_of_birth_formatted || '-' }}</span>
          </div>
        </div>
        <span class="tag" [class]="getStatusClass(client()?.submission_status)">
          {{ getStatusLabel(client()?.submission_status) }}
        </span>
        <div class="pt-btns">
          <button class="btn-sm" (click)="onViewRelatedLogs()" title="View related logs">Logs</button>
          <button class="btn-sm danger"
            [disabled]="removing()"
            (click)="onRemovePatient()"
            title="Remove patient from MHA PDS">
            @if (removing()) {
              Removing...
            } @else {
              Remove
            }
          </button>
        </div>
      </div>

      <!-- Split Container -->
      <div class="split-container">

        <!-- TOP PANE: Client Data -->
        <div class="top-pane" [style.height.%]="topPaneHeight()">

          <!-- Data Band: DE01 + DE02 + DE03 -->
          <div class="data-band">
            <!-- DE01: Client -->
            <div class="band-section">
              <div class="band-title">Client <span class="de-tag">DE01</span></div>
              <div class="band-fields">
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE01_001', client()?.de01_001_first_name)"
                      [title]="getFieldTooltip(getFieldStatus('DE01_001', client()?.de01_001_first_name))"></span>
                    First
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de01_001_first_name">{{ client()?.de01_001_first_name || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE01_002', client()?.de01_002_middle_name)"
                      [title]="getFieldTooltip(getFieldStatus('DE01_002', client()?.de01_002_middle_name))"></span>
                    Middle
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de01_002_middle_name">{{ client()?.de01_002_middle_name || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE01_003', client()?.de01_003_last_name)"
                      [title]="getFieldTooltip(getFieldStatus('DE01_003', client()?.de01_003_last_name))"></span>
                    Last
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de01_003_last_name">{{ client()?.de01_003_last_name || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE01_004', client()?.de01_004_date_of_birth_formatted)"
                      [title]="getFieldTooltip(getFieldStatus('DE01_004', client()?.de01_004_date_of_birth_formatted))"></span>
                    DOB
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de01_004_date_of_birth_formatted">{{ client()?.de01_004_date_of_birth_formatted || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE01_005', client()?.de01_005_estimated_dob_flag)"
                      [title]="getFieldTooltip(getFieldStatus('DE01_005', client()?.de01_005_estimated_dob_flag))"></span>
                    Est. DOB
                  </div>
                  <div class="bf-value">{{ client()?.de01_005_estimated_dob_flag === 1 ? 'Yes' : 'No' }}</div>
                </div>
              </div>
            </div>

            <!-- DE02: Identifiers -->
            <div class="band-section">
              <div class="band-title">Identifiers <span class="de-tag">DE02</span></div>
              <div class="band-fields">
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE02_001', client()?.de02_001_mrn)"
                      [title]="getFieldTooltip(getFieldStatus('DE02_001', client()?.de02_001_mrn))"></span>
                    MRN
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de02_001_mrn">{{ client()?.de02_001_mrn || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE02_002', client()?.de02_002_vendor_id)"
                      [title]="getFieldTooltip(getFieldStatus('DE02_002', client()?.de02_002_vendor_id))"></span>
                    Vendor
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de02_002_vendor_id">{{ client()?.de02_002_vendor_id || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE02_003', client()?.de02_003_hcn)"
                      [title]="getFieldTooltip(getFieldStatus('DE02_003', client()?.de02_003_hcn))"></span>
                    HCN
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de02_003_hcn">{{ client()?.de02_003_hcn || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE02_005', client()?.de02_005_identifier_type)"
                      [title]="getFieldTooltip(getFieldStatus('DE02_005', client()?.de02_005_identifier_type))"></span>
                    Type
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de02_005_identifier_type">{{ client()?.de02_005_identifier_type || '-' }}</div>
                </div>
              </div>
            </div>

            <!-- DE03: Address -->
            <div class="band-section band-narrow">
              <div class="band-title">Address <span class="de-tag">DE03</span></div>
              <div class="band-fields">
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE03_002', client()?.de03_002_city)"
                      [title]="getFieldTooltip(getFieldStatus('DE03_002', client()?.de03_002_city))"></span>
                    City
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de03_002_city">{{ client()?.de03_002_city || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE03_003', client()?.de03_003_province)"
                      [title]="getFieldTooltip(getFieldStatus('DE03_003', client()?.de03_003_province))"></span>
                    Prov
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de03_003_province">{{ client()?.de03_003_province || '-' }}</div>
                </div>
                <div>
                  <div class="bf-label">
                    <span class="ind" [class]="getFieldStatus('DE03_004', client()?.de03_004_postal_code)"
                      [title]="getFieldTooltip(getFieldStatus('DE03_004', client()?.de03_004_postal_code))"></span>
                    Postal
                  </div>
                  <div class="bf-value" [class.na]="!client()?.de03_004_postal_code">{{ client()?.de03_004_postal_code || '-' }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- SDOH Strip + Grid: DE04 -->
          <div class="sdoh-strip" [class.expanded]="sdohExpanded()" (click)="toggleSdoh()">
            <span class="sdoh-title">SDOH <span class="de-tag">DE04</span></span>
            <div class="progress-bar">
              <div class="progress-fill" [style.width.%]="sdohProgressPercent()"></div>
            </div>
            <span class="sdoh-count">
              {{ sdohFilledCount() }}/{{ sdohTotalCount() }} fields
              @if (sdohNeedsReviewCount() > 0) {
                <span class="needs-review-count">&middot; {{ sdohNeedsReviewCount() }} need review</span>
              }
            </span>
            <span class="sdoh-chevron">{{ sdohExpanded() ? '&#9650;' : '&#9660;' }}</span>
          </div>
          @if (sdohExpanded()) {
            <div class="sdoh-grid">
              @for (field of sdohFields(); track field.key) {
                <div class="sdoh-cell">
                  <span class="sdoh-k">
                    <span class="ind" [class]="getFieldStatus(field.key, field.value)"
                      [title]="getFieldTooltip(getFieldStatus(field.key, field.value))"></span>
                    @if (hasMappingValidation(field.key) && getMappingStatus(field.key, field.value) !== 'not-checked') {
                      <span class="mapping-indicator" [class]="getMappingStatus(field.key, field.value)"
                        [title]="getMappingTooltip(field.key, field.value)">{{ getMappingStatus(field.key, field.value) === 'valid' ? '&#10003;' : '&#10007;' }}</span>
                    }
                    {{ field.label }}
                  </span>
                  <span class="sdoh-v" [class.na]="!field.value || field.value === '-' || field.value === ''">
                    {{ field.value || '-' }}
                  </span>
                </div>
              }
            </div>
          }
        </div>

        <!-- Resize Handle -->
        <div class="resize-bar" (mousedown)="onPaneResizeStart($event)">
          <div class="resize-grip"></div>
        </div>

        <!-- BOTTOM PANE: Episodes -->
        <div class="bottom-pane">
          <div class="ep-header">
            <h3>Episodes ({{ episodeCount() }})</h3>
          </div>
          @if (episodes().length > 0) {
            <app-episode-list
              [episodes]="episodes()"
              [activeSubmitFields]="activeSubmitFields()"
              [fieldValidations]="fieldValidations()"
              (revertRecord)="onRevertRecord($event)" />
          } @else {
            <p class="no-episodes">No episodes found</p>
          }
        </div>
      </div>

      <!-- Remove Patient Confirmation -->
      @if (showRemoveConfirm()) {
        <div class="confirm-overlay">
          <div class="confirm-dialog">
            <h3>Remove Patient</h3>
            <p>Are you sure you want to remove <strong>{{ client()?.de01_001_first_name }} {{ client()?.de01_003_last_name }}</strong> from MHA PDS?</p>
            <p class="confirm-warning">This will deactivate all records for this patient. They can be re-added later if needed.</p>
            <div class="confirm-actions">
              <button class="btn-sm" (click)="cancelRemovePatient()" [disabled]="removing()">
                Cancel
              </button>
              <button class="btn-sm danger" (click)="confirmRemovePatient()" [disabled]="removing()">
                @if (removing()) {
                  Removing...
                } @else {
                  Confirm Remove
                }
              </button>
            </div>
          </div>
        </div>
      }
    </div>

    <app-patient-actions-sidebar
      [patientDetail]="patientDetail()"
      (revertCompleted)="revertCompleted.set(true)"
    ></app-patient-actions-sidebar>
  }
</div>
`, styles: ["/* src/app/patients/components/patient-detail.scss */\n.patient-detail-container {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  font-family: var(--mha-font);\n  font-size: 13px;\n  color: var(--mha-text-1);\n}\n.patient-detail-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n}\n.patient-detail-content.is-dragging-panes {\n  cursor: row-resize;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--mha-text-3);\n  text-align: center;\n  padding: 40px;\n  font-family: var(--mha-font);\n}\n.loading-state .empty-icon,\n.empty-state .empty-icon {\n  opacity: 0.4;\n  margin-bottom: 16px;\n  color: var(--mha-teal);\n}\n.loading-state .spinner,\n.empty-state .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--mha-border-light);\n  border-top-color: var(--mha-teal);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state p,\n.empty-state p {\n  font-size: 15px;\n  max-width: 300px;\n  margin: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pt-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 20px;\n  background: var(--mha-surface);\n  border-bottom: 1px solid var(--mha-border);\n  flex-shrink: 0;\n}\n.pt-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--mha-teal);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.pt-info {\n  min-width: 0;\n}\n.pt-name {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.pt-ids {\n  font-size: 11px;\n  color: var(--mha-text-3);\n  display: flex;\n  gap: 10px;\n  margin-top: 1px;\n}\n.tag {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n.tag.status-success {\n  background: var(--mha-green-bg);\n  color: var(--mha-green);\n}\n.tag.status-error {\n  background: var(--mha-red-bg);\n  color: var(--mha-red);\n}\n.tag.status-pending {\n  background: var(--mha-amber-bg);\n  color: var(--mha-amber);\n}\n.tag.status-partial {\n  background: var(--mha-blue-bg);\n  color: var(--mha-blue);\n}\n.pt-btns {\n  margin-left: auto;\n  display: flex;\n  gap: 6px;\n}\n.btn-sm {\n  font-family: var(--mha-font);\n  font-size: 11px;\n  font-weight: 500;\n  padding: 5px 12px;\n  border-radius: var(--mha-r);\n  border: 1px solid var(--mha-border);\n  background: var(--mha-surface);\n  color: var(--mha-text-2);\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.btn-sm:hover:not(:disabled) {\n  border-color: var(--mha-text-3);\n}\n.btn-sm:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sm.danger {\n  color: var(--mha-red);\n  border-color: var(--mha-red);\n}\n.btn-sm.danger:hover:not(:disabled) {\n  background: var(--mha-red-bg);\n}\n.split-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.top-pane {\n  min-height: 140px;\n  overflow-y: auto;\n  padding: 14px 20px;\n  background: var(--mha-surface);\n  border-bottom: none;\n}\n.bottom-pane {\n  flex: 1;\n  overflow-y: auto;\n  padding: 14px 20px;\n  background: var(--mha-bg);\n}\n.resize-bar {\n  height: 5px;\n  background: var(--mha-border);\n  cursor: row-resize;\n  flex-shrink: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.15s;\n}\n.resize-bar:hover {\n  background: var(--mha-text-3);\n}\n.resize-bar .resize-grip {\n  width: 24px;\n  height: 3px;\n  border-radius: 2px;\n  background: var(--mha-text-3);\n  opacity: 0.4;\n}\n.data-band {\n  display: flex;\n  gap: 0;\n  border: 1px solid var(--mha-border);\n  border-radius: var(--mha-r-lg);\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.band-section {\n  flex: 1;\n  padding: 10px 14px;\n  border-right: 1px solid var(--mha-border-light);\n}\n.band-section:last-child {\n  border-right: none;\n}\n.band-section.band-narrow {\n  max-width: 200px;\n}\n.band-title {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--mha-text-3);\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.de-tag {\n  font-size: 8px;\n  padding: 1px 4px;\n  border-radius: 3px;\n  background: var(--mha-surface-dim);\n  color: var(--mha-text-3);\n  border: 1px solid var(--mha-border-light);\n}\n.band-fields {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 14px;\n}\n.bf-label {\n  font-size: 10px;\n  color: var(--mha-text-3);\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.bf-value {\n  font-size: 12.5px;\n  font-weight: 500;\n}\n.bf-value.na {\n  color: var(--mha-text-3);\n}\n.ind {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  cursor: help;\n}\n.ind.submittable {\n  background: var(--mha-green);\n}\n.ind.needs-review {\n  background: var(--mha-amber);\n}\n.ind.not-submitted {\n  background: var(--mha-border);\n}\n.sdoh-strip {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid var(--mha-border);\n  border-radius: var(--mha-r-lg);\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.sdoh-strip:hover {\n  background: var(--mha-surface-dim);\n}\n.sdoh-strip.expanded {\n  border-radius: var(--mha-r-lg) var(--mha-r-lg) 0 0;\n}\n.sdoh-title {\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.progress-bar {\n  flex: 1;\n  height: 4px;\n  background: var(--mha-border-light);\n  border-radius: 2px;\n  overflow: hidden;\n  max-width: 200px;\n}\n.progress-fill {\n  height: 100%;\n  background: var(--mha-teal);\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.sdoh-count {\n  font-size: 11px;\n  color: var(--mha-text-3);\n}\n.sdoh-count .needs-review-count {\n  color: var(--mha-amber);\n}\n.sdoh-chevron {\n  font-size: 10px;\n  color: var(--mha-text-3);\n  margin-left: auto;\n}\n.sdoh-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  border: 1px solid var(--mha-border);\n  border-top: none;\n  border-radius: 0 0 var(--mha-r-lg) var(--mha-r-lg);\n  overflow: hidden;\n}\n.sdoh-cell {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 12px;\n  font-size: 11.5px;\n  border-bottom: 1px solid var(--mha-border-light);\n  border-right: 1px solid var(--mha-border-light);\n}\n.sdoh-cell:nth-child(3n) {\n  border-right: none;\n}\n.sdoh-k {\n  color: var(--mha-text-2);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-width: 0;\n}\n.sdoh-v {\n  font-weight: 500;\n  text-align: right;\n  max-width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sdoh-v.na {\n  color: var(--mha-text-3);\n  font-weight: 400;\n}\n.ep-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.ep-header h3 {\n  font-size: 14px;\n  font-weight: 700;\n}\n.no-episodes {\n  text-align: center;\n  color: var(--mha-text-3);\n  font-style: italic;\n  padding: 24px;\n}\n.confirm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.confirm-dialog {\n  background: var(--mha-surface);\n  border-radius: 10px;\n  padding: 24px;\n  max-width: 420px;\n  width: 90%;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);\n  font-family: var(--mha-font);\n}\n.confirm-dialog h3 {\n  margin: 0 0 16px;\n  font-size: 16px;\n  color: var(--mha-text-1);\n}\n.confirm-dialog p {\n  margin: 0 0 12px;\n  font-size: 13px;\n  color: var(--mha-text-2);\n  line-height: 1.5;\n}\n.confirm-dialog .confirm-warning {\n  background: var(--mha-amber-bg);\n  border: 1px solid #ffeeba;\n  border-radius: var(--mha-r);\n  padding: 10px 12px;\n  color: var(--mha-amber);\n  font-size: 12px;\n}\n.confirm-dialog .confirm-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 20px;\n}\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-thumb {\n  background: var(--mha-border);\n  border-radius: 3px;\n}\n@media (max-width: 768px) {\n  .pt-bar {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .data-band {\n    flex-direction: column;\n  }\n  .data-band .band-section {\n    border-right: none;\n    border-bottom: 1px solid var(--mha-border-light);\n  }\n  .data-band .band-section:last-child {\n    border-bottom: none;\n  }\n  .data-band .band-section.band-narrow {\n    max-width: none;\n  }\n  .sdoh-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sdoh-grid .sdoh-cell:nth-child(3n) {\n    border-right: 1px solid var(--mha-border-light);\n  }\n  .sdoh-grid .sdoh-cell:nth-child(2n) {\n    border-right: none;\n  }\n}\n"] }]
  }], () => [], { onPaneResizeMove: [{
    type: HostListener,
    args: ["document:mousemove", ["$event"]]
  }], onPaneResizeEnd: [{
    type: HostListener,
    args: ["document:mouseup"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientDetailComponent, { className: "PatientDetailComponent", filePath: "src/app/patients/components/patient-detail.ts", lineNumber: 30 });
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
    this.router.navigate(["/logs"], {
      queryParams: {
        search_field: "PERSON_ID",
        search_value: personId.toString()
      }
    });
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
    const clamped = Math.min(70, Math.max(15, newWidth));
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
  }, dependencies: [PatientListComponent, PatientDetailComponent], styles: ["\n\n.patients-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 60px);\n  font-family: var(--mha-font);\n}\n.patients-container.is-dragging[_ngcontent-%COMP%] {\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.patients-master[_ngcontent-%COMP%] {\n  min-width: 250px;\n  background-color: var(--mha-surface);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid var(--mha-border);\n}\n.patients-master[_ngcontent-%COMP%]   .master-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: var(--mha-surface);\n  border-bottom: 1px solid var(--mha-border-light);\n}\n.patients-master[_ngcontent-%COMP%]   .master-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--mha-text-1);\n}\n.divider-handle[_ngcontent-%COMP%] {\n  width: 5px;\n  background: var(--mha-border);\n  cursor: col-resize;\n  flex-shrink: 0;\n  transition: background-color 0.15s;\n}\n.divider-handle[_ngcontent-%COMP%]:hover {\n  background: var(--mha-text-3);\n}\n.divider-handle[_ngcontent-%COMP%]:active {\n  background: var(--mha-teal);\n}\n.patients-detail[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: var(--mha-bg);\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .patients-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .patients-master[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: none;\n    height: 50vh;\n    min-height: 300px;\n  }\n  .divider-handle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .patients-detail[_ngcontent-%COMP%] {\n    height: 50vh;\n  }\n}\n@media (max-width: 768px) {\n  .patients-master[_ngcontent-%COMP%] {\n    height: 40vh;\n    min-width: auto;\n  }\n  .patients-detail[_ngcontent-%COMP%] {\n    height: 60vh;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientsComponent, [{
    type: Component,
    args: [{ selector: "app-patients", standalone: true, imports: [PatientListComponent, PatientDetailComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="patients-container" [class.is-dragging]="isDragging()">\n  <!-- Master: Patient List -->\n  <div class="patients-master" [style.width.%]="masterWidth()">\n    <div class="master-header">\n      <h2>Patients</h2>\n    </div>\n    <app-patient-list (patientSelected)="onPatientSelected($event)" />\n  </div>\n\n  <!-- Resizable Divider -->\n  <div class="divider-handle" (mousedown)="onDividerMouseDown($event)"></div>\n\n  <!-- Detail: Patient Detail -->\n  <div class="patients-detail">\n    <app-patient-detail (viewLogs)="onViewLogs($event)" />\n  </div>\n</div>\n', styles: ["/* src/app/patients/patients.scss */\n.patients-container {\n  display: flex;\n  height: calc(100vh - 60px);\n  font-family: var(--mha-font);\n}\n.patients-container.is-dragging {\n  cursor: col-resize;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.patients-master {\n  min-width: 250px;\n  background-color: var(--mha-surface);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid var(--mha-border);\n}\n.patients-master .master-header {\n  padding: 12px 16px;\n  background: var(--mha-surface);\n  border-bottom: 1px solid var(--mha-border-light);\n}\n.patients-master .master-header h2 {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--mha-text-1);\n}\n.divider-handle {\n  width: 5px;\n  background: var(--mha-border);\n  cursor: col-resize;\n  flex-shrink: 0;\n  transition: background-color 0.15s;\n}\n.divider-handle:hover {\n  background: var(--mha-text-3);\n}\n.divider-handle:active {\n  background: var(--mha-teal);\n}\n.patients-detail {\n  flex: 1;\n  background-color: var(--mha-bg);\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .patients-container {\n    flex-direction: column;\n  }\n  .patients-master {\n    width: 100% !important;\n    max-width: none;\n    height: 50vh;\n    min-height: 300px;\n  }\n  .divider-handle {\n    display: none;\n  }\n  .patients-detail {\n    height: 50vh;\n  }\n}\n@media (max-width: 768px) {\n  .patients-master {\n    height: 40vh;\n    min-width: auto;\n  }\n  .patients-detail {\n    height: 60vh;\n  }\n}\n"] }]
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
