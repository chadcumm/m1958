import {
  Router
} from "./chunk-FSK4RQW2.js";
import {
  MhaPdsConfigurationService
} from "./chunk-OA7ZX5WF.js";
import {
  CclServiceWrapperService
} from "./chunk-OTBSHLOW.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-QDEHJEDS.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UUZPJP4Q.js";
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
   * Select a patient by client ID (from list click)
   * This triggers loading the full detail
   */
  selectPatient(clientId) {
    this.loadPatientDetail(clientId);
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
      de02_004_hcn_type: client.de02_004_hcn_type ?? client.DE02_004_HCN_TYPE ?? "",
      de02_005_issuing_authority: client.de02_005_issuing_authority ?? client.DE02_005_ISSUING_AUTHORITY ?? "",
      // DE03 - Client Address
      de03_001_address_use: client.de03_001_address_use ?? client.DE03_001_ADDRESS_USE ?? "",
      de03_002_city: client.de03_002_city ?? client.DE03_002_CITY ?? "",
      de03_003_province: client.de03_003_province ?? client.DE03_003_PROVINCE ?? "",
      de03_004_postal_code: client.de03_004_postal_code ?? client.DE03_004_POSTAL_CODE ?? "",
      // DE04 - SDOH fields
      de04_001_preferred_language: client.de04_001_preferred_language ?? client.DE04_001_PREFERRED_LANGUAGE ?? "",
      de04_002_interpreter_needed: client.de04_002_interpreter_needed ?? client.DE04_002_INTERPRETER_NEEDED ?? "",
      de04_003_birth_country: client.de04_003_birth_country ?? client.DE04_003_BIRTH_COUNTRY ?? "",
      de04_004_arrival_date_canada: client.de04_004_arrival_date_canada ?? client.DE04_004_ARRIVAL_DATE_CANADA ?? "",
      de04_005_immigration_status: client.de04_005_immigration_status ?? client.DE04_005_IMMIGRATION_STATUS ?? "",
      de04_006_indigenous_identity: client.de04_006_indigenous_identity ?? client.DE04_006_INDIGENOUS_IDENTITY ?? "",
      de04_007_gender_identity: client.de04_007_gender_identity ?? client.DE04_007_GENDER_IDENTITY ?? "",
      de04_008_sexual_orientation: client.de04_008_sexual_orientation ?? client.DE04_008_SEXUAL_ORIENTATION ?? "",
      de04_009_veteran_status: client.de04_009_veteran_status ?? client.DE04_009_VETERAN_STATUS ?? "",
      de04_010_disability_status: client.de04_010_disability_status ?? client.DE04_010_DISABILITY_STATUS ?? "",
      de04_011_racial_identity: client.de04_011_racial_identity ?? client.DE04_011_RACIAL_IDENTITY ?? "",
      de04_012_citizenship_status: client.de04_012_citizenship_status ?? client.DE04_012_CITIZENSHIP_STATUS ?? "",
      de04_013_education: client.de04_013_education ?? client.DE04_013_EDUCATION ?? "",
      de04_014_employment: client.de04_014_employment ?? client.DE04_014_EMPLOYMENT ?? "",
      de04_015_income_source: client.de04_015_income_source ?? client.DE04_015_INCOME_SOURCE ?? "",
      de04_016_income_amount: client.de04_016_income_amount ?? client.DE04_016_INCOME_AMOUNT ?? "",
      de04_017_housing: client.de04_017_housing ?? client.DE04_017_HOUSING ?? "",
      de04_018_household_income: client.de04_018_household_income ?? client.DE04_018_HOUSEHOLD_INCOME ?? "",
      de04_019_household_size: client.de04_019_household_size ?? client.DE04_019_HOUSEHOLD_SIZE ?? "",
      de04_020_legal_status: client.de04_020_legal_status ?? client.DE04_020_LEGAL_STATUS ?? "",
      de04_021_french_language_services: client.de04_021_french_language_services ?? client.DE04_021_FRENCH_LANGUAGE_SERVICES ?? "",
      // Metadata
      sdoh_complete_ind: client.sdoh_complete_ind ?? client.SDOH_COMPLETE_IND ?? 0,
      sdoh_missing_fields: client.sdoh_missing_fields ?? client.SDOH_MISSING_FIELDS ?? "",
      data_modified_ind: client.data_modified_ind ?? client.DATA_MODIFIED_IND ?? 0,
      submission_status: client.submission_status ?? client.SUBMISSION_STATUS ?? "",
      submission_dt_tm: client.submission_dt_tm ?? client.SUBMISSION_DT_TM ?? "",
      submission_dt_tm_formatted: client.submission_dt_tm_formatted ?? client.SUBMISSION_DT_TM_FORMATTED ?? ""
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
      health_program_name: episode.health_program_name ?? episode.HEALTH_PROGRAM_NAME ?? "",
      functional_centre: episode.functional_centre ?? episode.FUNCTIONAL_CENTRE ?? "",
      functional_centre_mapped: episode.functional_centre_mapped ?? episode.FUNCTIONAL_CENTRE_MAPPED ?? "",
      // Submission
      submission_status: episode.submission_status ?? episode.SUBMISSION_STATUS ?? "",
      submission_dt_tm: episode.submission_dt_tm ?? episode.SUBMISSION_DT_TM ?? "",
      submission_dt_tm_formatted: episode.submission_dt_tm_formatted ?? episode.SUBMISSION_DT_TM_FORMATTED ?? "",
      submission_batch_id: episode.submission_batch_id ?? episode.SUBMISSION_BATCH_ID ?? "",
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
      submission_batch_id: appointment.submission_batch_id ?? appointment.SUBMISSION_BATCH_ID ?? ""
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
      submission_batch_id: service.submission_batch_id ?? service.SUBMISSION_BATCH_ID ?? ""
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
function PatientFiltersComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientFiltersComponent, selectors: [["app-patient-filters"]], decls: 29, vars: 13, consts: [[1, "filters-container"], [1, "filter-row", "search-row"], [1, "search-input"], ["type", "text", "placeholder", "Search name, MRN, or HCN...", 3, "input", "value", "disabled"], ["title", "Clear all filters", 1, "btn-reset", 3, "click", "disabled"], [1, "filter-row"], [1, "filter-group"], [3, "change", "value", "disabled"], [3, "value"], ["type", "date", 3, "change", "value", "disabled"], ["type", "text", "placeholder", "e.g., ACTT", 3, "input", "value", "disabled"], ["type", "text", "placeholder", "Program name", 3, "input", "value", "disabled"]], template: function PatientFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
      \u0275\u0275listener("input", function PatientFiltersComponent_Template_input_input_3_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function PatientFiltersComponent_Template_button_click_4_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(5, " Clear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label");
      \u0275\u0275text(9, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 7);
      \u0275\u0275listener("change", function PatientFiltersComponent_Template_select_change_10_listener($event) {
        return ctx.onStatusChange($event.target.value);
      });
      \u0275\u0275repeaterCreate(11, PatientFiltersComponent_For_12_Template, 2, 2, "option", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 6)(14, "label");
      \u0275\u0275text(15, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 9);
      \u0275\u0275listener("change", function PatientFiltersComponent_Template_input_change_16_listener($event) {
        ctx.startDate.set($event.target.value);
        return ctx.onDateChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 6)(18, "label");
      \u0275\u0275text(19, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 9);
      \u0275\u0275listener("change", function PatientFiltersComponent_Template_input_change_20_listener($event) {
        ctx.endDate.set($event.target.value);
        return ctx.onDateChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 6)(22, "label");
      \u0275\u0275text(23, "Functional Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 10);
      \u0275\u0275listener("input", function PatientFiltersComponent_Template_input_input_24_listener($event) {
        return ctx.onFunctionalCentreChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 6)(26, "label");
      \u0275\u0275text(27, "Program");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 11);
      \u0275\u0275listener("input", function PatientFiltersComponent_Template_input_input_28_listener($event) {
        return ctx.onProgramChange($event.target.value);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.searchText())("disabled", ctx.loading());
      \u0275\u0275advance();
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
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.filters-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-row.search-row[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #666;\n  text-transform: uppercase;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n  min-width: 100px;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled, \n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n}\n.filter-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  min-width: 130px;\n}\n.filter-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background-color 0.15s;\n}\n.btn-reset[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.btn-reset[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-row[_ngcontent-%COMP%]:not(.search-row)   .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-row[_ngcontent-%COMP%]:not(.search-row)   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filter-row[_ngcontent-%COMP%]:not(.search-row)   .filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientFiltersComponent, [{
    type: Component,
    args: [{ selector: "app-patient-filters", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="filters-container">\n  <!-- Search Row -->\n  <div class="filter-row search-row">\n    <div class="search-input">\n      <input\n        type="text"\n        placeholder="Search name, MRN, or HCN..."\n        [value]="searchText()"\n        (input)="onSearchChange($any($event.target).value)"\n        [disabled]="loading()"\n      />\n    </div>\n    <button\n      class="btn-reset"\n      (click)="resetFilters()"\n      [disabled]="loading() || !hasActiveFilters()"\n      title="Clear all filters">\n      Clear\n    </button>\n  </div>\n\n  <!-- Filter Row -->\n  <div class="filter-row">\n    <div class="filter-group">\n      <label>Status</label>\n      <select\n        [value]="submissionStatus()"\n        (change)="onStatusChange($any($event.target).value)"\n        [disabled]="loading()">\n        @for (opt of statusOptions; track opt.value) {\n          <option [value]="opt.value">{{ opt.label }}</option>\n        }\n      </select>\n    </div>\n\n    <div class="filter-group">\n      <label>From</label>\n      <input\n        type="date"\n        [value]="startDate()"\n        (change)="startDate.set($any($event.target).value); onDateChange()"\n        [disabled]="loading()"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label>To</label>\n      <input\n        type="date"\n        [value]="endDate()"\n        (change)="endDate.set($any($event.target).value); onDateChange()"\n        [disabled]="loading()"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label>Functional Centre</label>\n      <input\n        type="text"\n        placeholder="e.g., ACTT"\n        [value]="functionalCentre()"\n        (input)="onFunctionalCentreChange($any($event.target).value)"\n        [disabled]="loading()"\n      />\n    </div>\n\n    <div class="filter-group">\n      <label>Program</label>\n      <input\n        type="text"\n        placeholder="Program name"\n        [value]="programName()"\n        (input)="onProgramChange($any($event.target).value)"\n        [disabled]="loading()"\n      />\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/patients/components/patient-filters.scss */\n.filters-container {\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.filter-row {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.filter-row.search-row {\n  margin-bottom: 12px;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n}\n.search-input input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input input:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.search-input input:disabled {\n  background-color: #e9ecef;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #666;\n  text-transform: uppercase;\n}\n.filter-group select,\n.filter-group input {\n  padding: 6px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 13px;\n  min-width: 100px;\n}\n.filter-group select:focus,\n.filter-group input:focus {\n  outline: none;\n  border-color: #1a365d;\n  box-shadow: 0 0 0 2px rgba(26, 54, 93, 0.1);\n}\n.filter-group select:disabled,\n.filter-group input:disabled {\n  background-color: #e9ecef;\n}\n.filter-group input[type=date] {\n  min-width: 130px;\n}\n.filter-group input[type=text] {\n  min-width: 110px;\n}\n.btn-reset {\n  padding: 8px 16px;\n  background-color: #6c757d;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background-color 0.15s;\n}\n.btn-reset:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.btn-reset:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .filter-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-row:not(.search-row) .filter-group {\n    width: 100%;\n  }\n  .filter-row:not(.search-row) .filter-group select,\n  .filter-row:not(.search-row) .filter-group input {\n    width: 100%;\n  }\n  .search-input {\n    min-width: auto;\n  }\n}\n"] }]
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
function ServiceListComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 2);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 2);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 3);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td")(16, "span", 4);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.encounter_date_formatted || service_r1.encounter_date || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.service_modality || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMinutes(service_r1.direct_service_minutes));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMinutes(service_r1.indirect_service_minutes));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.hsp_organization_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.hsp_site_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.encounter_status || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getSubmissionStatusClass(service_r1.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.submission_status || "N/A", " ");
  }
}
function ServiceListComponent_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 5);
    \u0275\u0275text(2, "No services recorded");
    \u0275\u0275domElementEnd()();
  }
}
var ServiceListComponent = class _ServiceListComponent {
  services = input.required(...ngDevMode ? [{ debugName: "services" }] : []);
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
  static \u0275fac = function ServiceListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceListComponent, selectors: [["app-service-list"]], inputs: { services: [1, "services"] }, decls: 24, vars: 1, consts: [[1, "service-list"], [1, "service-table"], [1, "duration"], [1, "org"], [1, "status-badge"], ["colspan", "8", 1, "no-data"]], template: function ServiceListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
      \u0275\u0275text(5, "Date");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "th");
      \u0275\u0275text(7, "Modality");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "th");
      \u0275\u0275text(9, "Direct");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "th");
      \u0275\u0275text(11, "Indirect");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "th");
      \u0275\u0275text(13, "Organization");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "th");
      \u0275\u0275text(15, "Site");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "th");
      \u0275\u0275text(17, "Status");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "th");
      \u0275\u0275text(19, "Submission");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(20, "tbody");
      \u0275\u0275repeaterCreate(21, ServiceListComponent_For_22_Template, 18, 10, "tr", null, ctx.trackByServiceId, true, ServiceListComponent_ForEmpty_23_Template, 3, 0, "tr");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
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
          <td>{{ service.encounter_date_formatted || service.encounter_date || '-' }}</td>
          <td>{{ service.service_modality || '-' }}</td>
          <td class="duration">{{ formatMinutes(service.direct_service_minutes) }}</td>
          <td class="duration">{{ formatMinutes(service.indirect_service_minutes) }}</td>
          <td class="org">{{ service.hsp_organization_name || '-' }}</td>
          <td>{{ service.hsp_site_name || '-' }}</td>
          <td>{{ service.encounter_status || '-' }}</td>
          <td>
            <span class="status-badge" [class]="getSubmissionStatusClass(service.submission_status)">
              {{ service.submission_status || 'N/A' }}
            </span>
          </td>
        </tr>
      } @empty {
        <tr>
          <td colspan="8" class="no-data">No services recorded</td>
        </tr>
      }
    </tbody>
  </table>
</div>
`, styles: ["/* src/app/patients/components/service-list.scss */\n.service-list {\n  overflow-x: auto;\n}\n.service-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n  background: #fafafa;\n}\n.service-table th,\n.service-table td {\n  padding: 8px 10px;\n  text-align: left;\n  border-bottom: 1px solid #e0e0e0;\n}\n.service-table th {\n  background: #f0f0f0;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.service-table tbody tr:nth-child(even) {\n  background: #f8f9fa;\n}\n.service-table tbody tr:hover {\n  background: #f0f0f0;\n}\n.service-table .duration {\n  font-family: monospace;\n  text-align: center;\n}\n.service-table .org {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.service-table .no-data {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  padding: 16px !important;\n}\n.service-table .status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.service-table .status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.service-table .status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.service-table .status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.service-table .status-badge.status-partial {\n  background: #ffe0b2;\n  color: #e65100;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceListComponent, { className: "ServiceListComponent", filePath: "src/app/patients/components/service-list.ts", lineNumber: 12 });
})();

// src/app/patients/components/appointment-list.ts
function AppointmentListComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 2);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 4);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td")(10, "span", 5);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td")(15, "span", 6);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const appointment_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(appointment_r1.appointment_start_formatted || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMinutes(appointment_r1.duration_minutes));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(appointment_r1.type_display || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(appointment_r1.location_display || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(appointment_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(appointment_r1.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(appointment_r1.cancellation_reason || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getSubmissionStatusClass(appointment_r1.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", appointment_r1.submission_status || "N/A", " ");
  }
}
function AppointmentListComponent_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 7);
    \u0275\u0275text(2, "No appointments scheduled");
    \u0275\u0275domElementEnd()();
  }
}
var AppointmentListComponent = class _AppointmentListComponent {
  appointments = input.required(...ngDevMode ? [{ debugName: "appointments" }] : []);
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
  static \u0275fac = function AppointmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppointmentListComponent, selectors: [["app-appointment-list"]], inputs: { appointments: [1, "appointments"] }, decls: 22, vars: 1, consts: [[1, "appointment-list"], [1, "appointment-table"], [1, "datetime"], [1, "duration"], [1, "location"], [1, "status-badge"], [1, "submission-badge"], ["colspan", "7", 1, "no-data"]], template: function AppointmentListComponent_Template(rf, ctx) {
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
      \u0275\u0275repeaterCreate(19, AppointmentListComponent_For_20_Template, 17, 11, "tr", null, ctx.trackByAppointmentId, true, AppointmentListComponent_ForEmpty_21_Template, 3, 0, "tr");
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
          <td class="datetime">{{ appointment.appointment_start_formatted || '-' }}</td>
          <td class="duration">{{ formatMinutes(appointment.duration_minutes) }}</td>
          <td>{{ appointment.type_display || '-' }}</td>
          <td class="location">{{ appointment.location_display || '-' }}</td>
          <td>
            <span class="status-badge" [class]="getStatusClass(appointment.status)">
              {{ getStatusLabel(appointment.status) }}
            </span>
          </td>
          <td>{{ appointment.cancellation_reason || '-' }}</td>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppointmentListComponent, { className: "AppointmentListComponent", filePath: "src/app/patients/components/appointment-list.ts", lineNumber: 12 });
})();

// src/app/patients/components/episode-list.ts
function EpisodeListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "No episodes found");
    \u0275\u0275elementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label");
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
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service-list", 17);
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("services", episode_r2.services);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "No services recorded");
    \u0275\u0275elementEnd();
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-appointment-list", 20);
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("appointments", episode_r2.appointments);
  }
}
function EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
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
    \u0275\u0275text(7, "Referral ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13)(11, "label");
    \u0275\u0275text(12, "Received Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 13)(16, "label");
    \u0275\u0275text(17, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 13)(21, "label");
    \u0275\u0275text(22, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 11)(26, "h4");
    \u0275\u0275text(27, "Episode of Care (DE06)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 12)(29, "div", 13)(30, "label");
    \u0275\u0275text(31, "Episode ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 13)(35, "label");
    \u0275\u0275text(36, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 13)(40, "label");
    \u0275\u0275text(41, "First Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 13)(45, "label");
    \u0275\u0275text(46, "Eligibility Screening");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 12)(50, "div", 13)(51, "label");
    \u0275\u0275text(52, "Assessment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 13)(56, "label");
    \u0275\u0275text(57, "Service Initiation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 13)(61, "label");
    \u0275\u0275text(62, "Enrollment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 13)(66, "label");
    \u0275\u0275text(67, "Termination Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "div", 12)(71, "div", 13)(72, "label");
    \u0275\u0275text(73, "Termination Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 11)(77, "h4");
    \u0275\u0275text(78, "Health Program (DE09)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 12)(80, "div", 13)(81, "label");
    \u0275\u0275text(82, "Program Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 13)(86, "label");
    \u0275\u0275text(87, "Program Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 13)(91, "label");
    \u0275\u0275text(92, "Functional Centre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span");
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "div", 14)(96, "h4");
    \u0275\u0275text(97, "Submission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 12)(99, "div", 13)(100, "label");
    \u0275\u0275text(101, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span", 7);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 13)(105, "label");
    \u0275\u0275text(106, "Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span");
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 13)(110, "label");
    \u0275\u0275text(111, "Batch ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span");
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(114, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_114_Template, 5, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 16)(116, "h4");
    \u0275\u0275text(117);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(118, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_118_Template, 1, 1, "app-service-list", 17)(119, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_119_Template, 2, 0, "p", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 19)(121, "h4");
    \u0275\u0275text(122);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(123, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_123_Template, 1, 1, "app-appointment-list", 20)(124, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Conditional_124_Template, 2, 0, "p", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const episode_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(episode_r2.referral_id || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.referral_received_date_formatted || episode_r2.referral_received_date || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.referral_source || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.referral_type || "-");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(episode_r2.episode_of_care_id || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.episode_of_care_status || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.first_contact_date_formatted || episode_r2.first_contact_date || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.eligibility_screening_date_formatted || episode_r2.eligibility_screening_date || "-");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(episode_r2.initial_assessment_date_formatted || episode_r2.initial_assessment_date || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.service_initiation_date_formatted || episode_r2.service_initiation_date || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.service_enrollment_date_formatted || episode_r2.service_enrollment_date || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.service_termination_date_formatted || episode_r2.service_termination_date || "-");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(episode_r2.service_termination_reason || "-");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(episode_r2.health_program_number || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.health_program_name || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.functional_centre_mapped || episode_r2.functional_centre || "-");
    \u0275\u0275advance(8);
    \u0275\u0275classMap(ctx_r2.getStatusClass(episode_r2.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", episode_r2.submission_status || "N/A", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.submission_dt_tm_formatted || episode_r2.submission_dt_tm || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(episode_r2.submission_batch_id || "-");
    \u0275\u0275advance();
    \u0275\u0275conditional(episode_r2.error_message ? 114 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Services (", (episode_r2.services == null ? null : episode_r2.services.length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(episode_r2.services && episode_r2.services.length > 0 ? 118 : 119);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Scheduled Appointments (", (episode_r2.appointments == null ? null : episode_r2.appointments.length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(episode_r2.appointments && episode_r2.appointments.length > 0 ? 123 : 124);
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
    \u0275\u0275conditionalCreate(18, EpisodeListComponent_Conditional_2_For_1_Conditional_18_Template, 125, 26, "div", 10);
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
  static \u0275fac = function EpisodeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EpisodeListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpisodeListComponent, selectors: [["app-episode-list"]], inputs: { episodes: [1, "episodes"] }, decls: 3, vars: 1, consts: [[1, "episode-list"], [1, "no-episodes"], [1, "episode-card"], [1, "episode-header", 3, "click"], [1, "episode-summary"], [1, "episode-id"], [1, "episode-program"], [1, "status-badge"], [1, "episode-meta"], [1, "expand-icon"], [1, "episode-content"], [1, "episode-section"], [1, "field-row"], [1, "field"], [1, "episode-section", "submission-info"], [1, "field", "error-field"], [1, "episode-section", "services-section"], [3, "services"], [1, "no-services"], [1, "episode-section", "appointments-section"], [3, "appointments"], [1, "no-appointments"]], template: function EpisodeListComponent_Template(rf, ctx) {
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
                  <label>Referral ID</label>
                  <span>{{ episode.referral_id || '-' }}</span>
                </div>
                <div class="field">
                  <label>Received Date</label>
                  <span>{{ episode.referral_received_date_formatted || episode.referral_received_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>Source</label>
                  <span>{{ episode.referral_source || '-' }}</span>
                </div>
                <div class="field">
                  <label>Type</label>
                  <span>{{ episode.referral_type || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- DE06: Episode of Care -->
            <div class="episode-section">
              <h4>Episode of Care (DE06)</h4>
              <div class="field-row">
                <div class="field">
                  <label>Episode ID</label>
                  <span>{{ episode.episode_of_care_id || '-' }}</span>
                </div>
                <div class="field">
                  <label>Status</label>
                  <span>{{ episode.episode_of_care_status || '-' }}</span>
                </div>
                <div class="field">
                  <label>First Contact</label>
                  <span>{{ episode.first_contact_date_formatted || episode.first_contact_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>Eligibility Screening</label>
                  <span>{{ episode.eligibility_screening_date_formatted || episode.eligibility_screening_date || '-' }}</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label>Assessment Date</label>
                  <span>{{ episode.initial_assessment_date_formatted || episode.initial_assessment_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>Service Initiation</label>
                  <span>{{ episode.service_initiation_date_formatted || episode.service_initiation_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>Enrollment Date</label>
                  <span>{{ episode.service_enrollment_date_formatted || episode.service_enrollment_date || '-' }}</span>
                </div>
                <div class="field">
                  <label>Termination Date</label>
                  <span>{{ episode.service_termination_date_formatted || episode.service_termination_date || '-' }}</span>
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label>Termination Reason</label>
                  <span>{{ episode.service_termination_reason || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- DE09: Health Program -->
            <div class="episode-section">
              <h4>Health Program (DE09)</h4>
              <div class="field-row">
                <div class="field">
                  <label>Program Number</label>
                  <span>{{ episode.health_program_number || '-' }}</span>
                </div>
                <div class="field">
                  <label>Program Name</label>
                  <span>{{ episode.health_program_name || '-' }}</span>
                </div>
                <div class="field">
                  <label>Functional Centre</label>
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
                <app-service-list [services]="episode.services" />
              } @else {
                <p class="no-services">No services recorded</p>
              }
            </div>

            <!-- Appointments List (DE06.006/DE06.007) -->
            <div class="episode-section appointments-section">
              <h4>Scheduled Appointments ({{ episode.appointments?.length || 0 }})</h4>
              @if (episode.appointments && episode.appointments.length > 0) {
                <app-appointment-list [appointments]="episode.appointments" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpisodeListComponent, { className: "EpisodeListComponent", filePath: "src/app/patients/components/episode-list.ts", lineNumber: 14 });
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
function PatientDetailComponent_Conditional_3_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 33)(2, "div", 34)(3, "label");
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275text(5, " First Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34)(9, "label");
    \u0275\u0275element(10, "span", 35);
    \u0275\u0275text(11, " Middle Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275element(16, "span", 35);
    \u0275\u0275text(17, " Last Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 34)(21, "label");
    \u0275\u0275element(22, "span", 35);
    \u0275\u0275text(23, " Date of Birth ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "label");
    \u0275\u0275element(28, "span", 35);
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
function PatientDetailComponent_Conditional_3_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 33)(2, "div", 34)(3, "label");
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275text(5, " MRN (DE02.001) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34)(9, "label");
    \u0275\u0275element(10, "span", 35);
    \u0275\u0275text(11, " Vendor ID (DE02.002) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275element(16, "span", 35);
    \u0275\u0275text(17, " Health Card # (DE02.003) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 34)(21, "label");
    \u0275\u0275element(22, "span", 35);
    \u0275\u0275text(23, " HCN Type (DE02.004) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "label");
    \u0275\u0275element(28, "span", 35);
    \u0275\u0275text(29, " Issuing Authority (DE02.005) ");
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
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_004", (tmp_11_0 = ctx_r1.client()) == null ? null : tmp_11_0.de02_004_hcn_type));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_004", (tmp_12_0 = ctx_r1.client()) == null ? null : tmp_12_0.de02_004_hcn_type)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_13_0 = ctx_r1.client()) == null ? null : tmp_13_0.de02_004_hcn_type) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE02_005", (tmp_14_0 = ctx_r1.client()) == null ? null : tmp_14_0.de02_005_issuing_authority));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE02_005", (tmp_15_0 = ctx_r1.client()) == null ? null : tmp_15_0.de02_005_issuing_authority)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_16_0 = ctx_r1.client()) == null ? null : tmp_16_0.de02_005_issuing_authority) || "-");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 33)(2, "div", 34)(3, "label");
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275text(5, " Address Use (DE03.001) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34)(9, "label");
    \u0275\u0275element(10, "span", 35);
    \u0275\u0275text(11, " City (DE03.002) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275element(16, "span", 35);
    \u0275\u0275text(17, " Province (DE03.003) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 34)(21, "label");
    \u0275\u0275element(22, "span", 35);
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
function PatientDetailComponent_Conditional_3_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 36)(2, "div", 34)(3, "label");
    \u0275\u0275element(4, "span", 35);
    \u0275\u0275text(5, " Preferred Language (DE04.001) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34)(9, "label");
    \u0275\u0275element(10, "span", 35);
    \u0275\u0275text(11, " Interpreter Needed (DE04.002) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275element(16, "span", 35);
    \u0275\u0275text(17, " Birth Country (DE04.003) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 34)(21, "label");
    \u0275\u0275element(22, "span", 35);
    \u0275\u0275text(23, " Arrival Date Canada (DE04.004) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 34)(27, "label");
    \u0275\u0275element(28, "span", 35);
    \u0275\u0275text(29, " Immigration Status (DE04.005) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 34)(33, "label");
    \u0275\u0275element(34, "span", 35);
    \u0275\u0275text(35, " Indigenous Identity (DE04.006) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 34)(39, "label");
    \u0275\u0275element(40, "span", 35);
    \u0275\u0275text(41, " Gender Identity (DE04.007) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 34)(45, "label");
    \u0275\u0275element(46, "span", 35);
    \u0275\u0275text(47, " Sexual Orientation (DE04.008) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 34)(51, "label");
    \u0275\u0275element(52, "span", 35);
    \u0275\u0275text(53, " Veteran Status (DE04.009) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 34)(57, "label");
    \u0275\u0275element(58, "span", 35);
    \u0275\u0275text(59, " Disability Status (DE04.010) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 34)(63, "label");
    \u0275\u0275element(64, "span", 35);
    \u0275\u0275text(65, " Racial Identity (DE04.011) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 34)(69, "label");
    \u0275\u0275element(70, "span", 35);
    \u0275\u0275text(71, " Citizenship Status (DE04.012) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 34)(75, "label");
    \u0275\u0275element(76, "span", 35);
    \u0275\u0275text(77, " Education (DE04.013) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 34)(81, "label");
    \u0275\u0275element(82, "span", 35);
    \u0275\u0275text(83, " Employment (DE04.014) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span");
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 34)(87, "label");
    \u0275\u0275element(88, "span", 35);
    \u0275\u0275text(89, " Income Source (DE04.015) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 34)(93, "label");
    \u0275\u0275element(94, "span", 35);
    \u0275\u0275text(95, " Income Amount (DE04.016) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 34)(99, "label");
    \u0275\u0275element(100, "span", 35);
    \u0275\u0275text(101, " Housing (DE04.017) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 34)(105, "label");
    \u0275\u0275element(106, "span", 35);
    \u0275\u0275text(107, " Household Income (DE04.018) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span");
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 34)(111, "label");
    \u0275\u0275element(112, "span", 35);
    \u0275\u0275text(113, " Household Size (DE04.019) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 34)(117, "label");
    \u0275\u0275element(118, "span", 35);
    \u0275\u0275text(119, " Legal Status (DE04.020) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "span");
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 34)(123, "label");
    \u0275\u0275element(124, "span", 35);
    \u0275\u0275text(125, " French Language Services (DE04.021) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span");
    \u0275\u0275text(127);
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
    let tmp_59_0;
    let tmp_60_0;
    let tmp_61_0;
    let tmp_62_0;
    let tmp_63_0;
    let tmp_64_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_001", (tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.de04_001_preferred_language));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_001", (tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.de04_001_preferred_language)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de04_001_preferred_language) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_002", (tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de04_002_interpreter_needed));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_002", (tmp_6_0 = ctx_r1.client()) == null ? null : tmp_6_0.de04_002_interpreter_needed)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r1.client()) == null ? null : tmp_7_0.de04_002_interpreter_needed) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_003", (tmp_8_0 = ctx_r1.client()) == null ? null : tmp_8_0.de04_003_birth_country));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_003", (tmp_9_0 = ctx_r1.client()) == null ? null : tmp_9_0.de04_003_birth_country)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r1.client()) == null ? null : tmp_10_0.de04_003_birth_country) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_004", (tmp_11_0 = ctx_r1.client()) == null ? null : tmp_11_0.de04_004_arrival_date_canada));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_004", (tmp_12_0 = ctx_r1.client()) == null ? null : tmp_12_0.de04_004_arrival_date_canada)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_13_0 = ctx_r1.client()) == null ? null : tmp_13_0.de04_004_arrival_date_canada) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_005", (tmp_14_0 = ctx_r1.client()) == null ? null : tmp_14_0.de04_005_immigration_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_005", (tmp_15_0 = ctx_r1.client()) == null ? null : tmp_15_0.de04_005_immigration_status)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_16_0 = ctx_r1.client()) == null ? null : tmp_16_0.de04_005_immigration_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_006", (tmp_17_0 = ctx_r1.client()) == null ? null : tmp_17_0.de04_006_indigenous_identity));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_006", (tmp_18_0 = ctx_r1.client()) == null ? null : tmp_18_0.de04_006_indigenous_identity)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_19_0 = ctx_r1.client()) == null ? null : tmp_19_0.de04_006_indigenous_identity) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_007", (tmp_20_0 = ctx_r1.client()) == null ? null : tmp_20_0.de04_007_gender_identity));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_007", (tmp_21_0 = ctx_r1.client()) == null ? null : tmp_21_0.de04_007_gender_identity)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_22_0 = ctx_r1.client()) == null ? null : tmp_22_0.de04_007_gender_identity) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_008", (tmp_23_0 = ctx_r1.client()) == null ? null : tmp_23_0.de04_008_sexual_orientation));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_008", (tmp_24_0 = ctx_r1.client()) == null ? null : tmp_24_0.de04_008_sexual_orientation)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_25_0 = ctx_r1.client()) == null ? null : tmp_25_0.de04_008_sexual_orientation) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_009", (tmp_26_0 = ctx_r1.client()) == null ? null : tmp_26_0.de04_009_veteran_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_009", (tmp_27_0 = ctx_r1.client()) == null ? null : tmp_27_0.de04_009_veteran_status)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_28_0 = ctx_r1.client()) == null ? null : tmp_28_0.de04_009_veteran_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_010", (tmp_29_0 = ctx_r1.client()) == null ? null : tmp_29_0.de04_010_disability_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_010", (tmp_30_0 = ctx_r1.client()) == null ? null : tmp_30_0.de04_010_disability_status)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_31_0 = ctx_r1.client()) == null ? null : tmp_31_0.de04_010_disability_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_011", (tmp_32_0 = ctx_r1.client()) == null ? null : tmp_32_0.de04_011_racial_identity));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_011", (tmp_33_0 = ctx_r1.client()) == null ? null : tmp_33_0.de04_011_racial_identity)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_34_0 = ctx_r1.client()) == null ? null : tmp_34_0.de04_011_racial_identity) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_012", (tmp_35_0 = ctx_r1.client()) == null ? null : tmp_35_0.de04_012_citizenship_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_012", (tmp_36_0 = ctx_r1.client()) == null ? null : tmp_36_0.de04_012_citizenship_status)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_37_0 = ctx_r1.client()) == null ? null : tmp_37_0.de04_012_citizenship_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_013", (tmp_38_0 = ctx_r1.client()) == null ? null : tmp_38_0.de04_013_education));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_013", (tmp_39_0 = ctx_r1.client()) == null ? null : tmp_39_0.de04_013_education)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_40_0 = ctx_r1.client()) == null ? null : tmp_40_0.de04_013_education) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_014", (tmp_41_0 = ctx_r1.client()) == null ? null : tmp_41_0.de04_014_employment));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_014", (tmp_42_0 = ctx_r1.client()) == null ? null : tmp_42_0.de04_014_employment)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_43_0 = ctx_r1.client()) == null ? null : tmp_43_0.de04_014_employment) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_015", (tmp_44_0 = ctx_r1.client()) == null ? null : tmp_44_0.de04_015_income_source));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_015", (tmp_45_0 = ctx_r1.client()) == null ? null : tmp_45_0.de04_015_income_source)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_46_0 = ctx_r1.client()) == null ? null : tmp_46_0.de04_015_income_source) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_016", (tmp_47_0 = ctx_r1.client()) == null ? null : tmp_47_0.de04_016_income_amount));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_016", (tmp_48_0 = ctx_r1.client()) == null ? null : tmp_48_0.de04_016_income_amount)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_49_0 = ctx_r1.client()) == null ? null : tmp_49_0.de04_016_income_amount) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_017", (tmp_50_0 = ctx_r1.client()) == null ? null : tmp_50_0.de04_017_housing));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_017", (tmp_51_0 = ctx_r1.client()) == null ? null : tmp_51_0.de04_017_housing)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_52_0 = ctx_r1.client()) == null ? null : tmp_52_0.de04_017_housing) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_018", (tmp_53_0 = ctx_r1.client()) == null ? null : tmp_53_0.de04_018_household_income));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_018", (tmp_54_0 = ctx_r1.client()) == null ? null : tmp_54_0.de04_018_household_income)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_55_0 = ctx_r1.client()) == null ? null : tmp_55_0.de04_018_household_income) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_019", (tmp_56_0 = ctx_r1.client()) == null ? null : tmp_56_0.de04_019_household_size));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_019", (tmp_57_0 = ctx_r1.client()) == null ? null : tmp_57_0.de04_019_household_size)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_58_0 = ctx_r1.client()) == null ? null : tmp_58_0.de04_019_household_size) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_020", (tmp_59_0 = ctx_r1.client()) == null ? null : tmp_59_0.de04_020_legal_status));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_020", (tmp_60_0 = ctx_r1.client()) == null ? null : tmp_60_0.de04_020_legal_status)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_61_0 = ctx_r1.client()) == null ? null : tmp_61_0.de04_020_legal_status) || "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getFieldStatus("DE04_021", (tmp_62_0 = ctx_r1.client()) == null ? null : tmp_62_0.de04_021_french_language_services));
    \u0275\u0275property("title", ctx_r1.getFieldTooltip(ctx_r1.getFieldStatus("DE04_021", (tmp_63_0 = ctx_r1.client()) == null ? null : tmp_63_0.de04_021_french_language_services)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_64_0 = ctx_r1.client()) == null ? null : tmp_64_0.de04_021_french_language_services) || "-");
  }
}
function PatientDetailComponent_Conditional_3_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "app-episode-list", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("episodes", ctx_r1.episodes());
  }
}
function PatientDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 15)(12, "button", 16)(13, "span", 17);
    \u0275\u0275text(14, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Edit Patient ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 18)(17, "span", 17);
    \u0275\u0275text(18, "\u21BB");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Resubmit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 19);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewRelatedLogs());
    });
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22, "\uF4CB");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " View Logs ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 20)(25, "span", 21);
    \u0275\u0275text(26, "Field Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 22);
    \u0275\u0275element(28, "span", 23);
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Submittable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "span", 22);
    \u0275\u0275element(32, "span", 24);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Needs Review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "span", 22);
    \u0275\u0275element(36, "span", 25);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Not Submitted");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 26)(40, "section", 27)(41, "button", 28);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("demographics"));
    });
    \u0275\u0275elementStart(42, "span", 29);
    \u0275\u0275text(43, "Client Information (DE01)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 30);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(46, PatientDetailComponent_Conditional_3_Conditional_46_Template, 32, 20, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "section", 27)(48, "button", 28);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("identifiers"));
    });
    \u0275\u0275elementStart(49, "span", 29);
    \u0275\u0275text(50, "Client Identifiers (DE02)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 30);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(53, PatientDetailComponent_Conditional_3_Conditional_53_Template, 32, 20, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "section", 27)(55, "button", 28);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("address"));
    });
    \u0275\u0275elementStart(56, "span", 29);
    \u0275\u0275text(57, "Client Address (DE03)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 30);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(60, PatientDetailComponent_Conditional_3_Conditional_60_Template, 26, 16, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "section", 27)(62, "button", 28);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("sdoh"));
    });
    \u0275\u0275elementStart(63, "span", 29);
    \u0275\u0275text(64, "Socio-Demographic Data (DE04)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 30);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(67, PatientDetailComponent_Conditional_3_Conditional_67_Template, 128, 84, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "section", 27)(69, "button", 28);
    \u0275\u0275listener("click", function PatientDetailComponent_Conditional_3_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("episodes"));
    });
    \u0275\u0275elementStart(70, "span", 29);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 30);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(74, PatientDetailComponent_Conditional_3_Conditional_74_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (tmp_1_0 = ctx_r1.client()) == null ? null : tmp_1_0.de01_001_first_name, " ", (tmp_1_0 = ctx_r1.client()) == null ? null : tmp_1_0.de01_003_last_name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass((tmp_2_0 = ctx_r1.client()) == null ? null : tmp_2_0.submission_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.client()) == null ? null : tmp_3_0.submission_status) || "N/A", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("MRN: ", ((tmp_4_0 = ctx_r1.client()) == null ? null : tmp_4_0.de02_001_mrn) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("HCN: ", ((tmp_5_0 = ctx_r1.client()) == null ? null : tmp_5_0.de02_003_hcn) || "-");
    \u0275\u0275advance(35);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("demographics") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("demographics") ? 46 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("identifiers") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("identifiers") ? 53 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("address") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("address") ? 60 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("sdoh") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("sdoh") ? 67 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Episodes (", ctx_r1.episodeCount(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isSectionExpanded("episodes") ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSectionExpanded("episodes") ? 74 : -1);
  }
}
var PatientDetailComponent = class _PatientDetailComponent {
  patientsService = inject(PatientsService);
  configService = inject(MhaPdsConfigurationService);
  // Signals from service
  patientDetail = this.patientsService.selectedPatient;
  loading = this.patientsService.loadingDetail;
  // Configuration state
  configuration = this.configService.configuration;
  configLoading = this.configService.isLoading;
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
  expandedSections = signal(/* @__PURE__ */ new Set(["demographics", "identifiers", "address", "sdoh"]), ...ngDevMode ? [{ debugName: "expandedSections" }] : []);
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
  static \u0275fac = function PatientDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientDetailComponent, selectors: [["app-patient-detail"]], outputs: { viewEpisode: "viewEpisode", viewLogs: "viewLogs" }, decls: 4, vars: 1, consts: [[1, "patient-detail-container"], [1, "loading-state"], [1, "empty-state"], [1, "spinner"], [1, "empty-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "detail-header"], [1, "patient-name"], [1, "status-badge"], [1, "patient-ids"], [1, "id-badge"], [1, "detail-actions"], ["disabled", "", "title", "Coming soon", 1, "btn-action", "btn-primary"], [1, "btn-icon"], ["disabled", "", "title", "Coming soon", 1, "btn-action"], ["title", "View related logs", 1, "btn-action", 3, "click"], [1, "indicator-legend"], [1, "legend-title"], [1, "legend-item"], [1, "field-indicator", "submittable"], [1, "field-indicator", "needs-review"], [1, "field-indicator", "not-submitted"], [1, "detail-sections"], [1, "detail-section"], [1, "section-header", 3, "click"], [1, "section-title"], [1, "section-toggle"], [1, "section-content"], [1, "section-content", "episodes-content"], [1, "field-grid"], [1, "field"], [1, "field-indicator", 3, "title"], [1, "field-grid", "sdoh-grid"], [3, "episodes"]], template: function PatientDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PatientDetailComponent_Conditional_1_Template, 4, 0, "div", 1)(2, PatientDetailComponent_Conditional_2_Template, 9, 0, "div", 2)(3, PatientDetailComponent_Conditional_3_Template, 75, 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : !ctx.client() ? 2 : 3);
    }
  }, dependencies: [EpisodeListComponent], styles: ["\n\n.patient-detail-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #666;\n  text-align: center;\n  padding: 40px;\n}\n.loading-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  margin-bottom: 16px;\n  color: #1a365d;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  max-width: 300px;\n  margin: 0;\n}\n.detail-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a365d 0%,\n      #2d4a7c 100%);\n  color: white;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   .status-badge.status-partial[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-ids[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.detail-header[_ngcontent-%COMP%]   .patient-ids[_ngcontent-%COMP%]   .id-badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 13px;\n  transition: all 0.15s;\n}\n.btn-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f0f0f0;\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-action.btn-primary[_ngcontent-%COMP%] {\n  background-color: #1a365d;\n  border-color: #1a365d;\n  color: white;\n}\n.btn-action.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #15294a;\n}\n.btn-action[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sdoh-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  font-size: 0.875rem;\n}\n.sdoh-banner.complete[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  border-bottom: 1px solid #c3e6cb;\n}\n.sdoh-banner.incomplete[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n  border-bottom: 1px solid #ffeeba;\n}\n.sdoh-banner[_ngcontent-%COMP%]   .sdoh-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.sdoh-banner[_ngcontent-%COMP%]   .missing-fields[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.indicator-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 20px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 0.75rem;\n}\n.indicator-legend[_ngcontent-%COMP%]   .legend-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n}\n.indicator-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #6c757d;\n}\n.field-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 6px;\n  vertical-align: middle;\n  cursor: help;\n  flex-shrink: 0;\n}\n.field-indicator.submittable[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2);\n}\n.field-indicator.needs-review[_ngcontent-%COMP%] {\n  background-color: #fd7e14;\n  box-shadow: 0 0 0 2px rgba(253, 126, 20, 0.2);\n  animation: _ngcontent-%COMP%_pulse-warning 2s infinite;\n}\n.field-indicator.not-submitted[_ngcontent-%COMP%] {\n  background-color: #adb5bd;\n  opacity: 0.6;\n}\n@keyframes _ngcontent-%COMP%_pulse-warning {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(253, 126, 20, 0.2);\n  }\n  50% {\n    box-shadow: 0 0 0 4px rgba(253, 126, 20, 0.3);\n  }\n}\n.detail-sections[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.detail-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 12px 20px;\n  background: #f8f9fa;\n  border: none;\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-align: left;\n  transition: background-color 0.15s;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-toggle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #6c757d;\n  font-weight: 300;\n}\n.detail-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: white;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.field-grid.sdoh-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.episodes-content[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  margin: 8px 0;\n}\n@media (max-width: 768px) {\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  }\n  .detail-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .detail-header[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .sdoh-banner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .sdoh-banner[_ngcontent-%COMP%]   .missing-fields[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 4px;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientDetailComponent, [{
    type: Component,
    args: [{ selector: "app-patient-detail", standalone: true, imports: [EpisodeListComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="patient-detail-container">
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
      <button class="btn-action" disabled title="Coming soon">
        <span class="btn-icon">&#8635;</span>
        Resubmit
      </button>
      <button class="btn-action" (click)="onViewRelatedLogs()" title="View related logs">
        <span class="btn-icon">&#128203;</span>
        View Logs
      </button>
    </div>

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
                  <span class="field-indicator" [class]="getFieldStatus('DE02_004', client()?.de02_004_hcn_type)"
                    [title]="getFieldTooltip(getFieldStatus('DE02_004', client()?.de02_004_hcn_type))"></span>
                  HCN Type (DE02.004)
                </label>
                <span>{{ client()?.de02_004_hcn_type || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE02_005', client()?.de02_005_issuing_authority)"
                    [title]="getFieldTooltip(getFieldStatus('DE02_005', client()?.de02_005_issuing_authority))"></span>
                  Issuing Authority (DE02.005)
                </label>
                <span>{{ client()?.de02_005_issuing_authority || '-' }}</span>
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
                  <span class="field-indicator" [class]="getFieldStatus('DE04_001', client()?.de04_001_preferred_language)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_001', client()?.de04_001_preferred_language))"></span>
                  Preferred Language (DE04.001)
                </label>
                <span>{{ client()?.de04_001_preferred_language || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_002', client()?.de04_002_interpreter_needed)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_002', client()?.de04_002_interpreter_needed))"></span>
                  Interpreter Needed (DE04.002)
                </label>
                <span>{{ client()?.de04_002_interpreter_needed || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_003', client()?.de04_003_birth_country)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_003', client()?.de04_003_birth_country))"></span>
                  Birth Country (DE04.003)
                </label>
                <span>{{ client()?.de04_003_birth_country || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_004', client()?.de04_004_arrival_date_canada)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_004', client()?.de04_004_arrival_date_canada))"></span>
                  Arrival Date Canada (DE04.004)
                </label>
                <span>{{ client()?.de04_004_arrival_date_canada || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_005', client()?.de04_005_immigration_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_005', client()?.de04_005_immigration_status))"></span>
                  Immigration Status (DE04.005)
                </label>
                <span>{{ client()?.de04_005_immigration_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_006', client()?.de04_006_indigenous_identity)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_006', client()?.de04_006_indigenous_identity))"></span>
                  Indigenous Identity (DE04.006)
                </label>
                <span>{{ client()?.de04_006_indigenous_identity || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_007', client()?.de04_007_gender_identity)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_007', client()?.de04_007_gender_identity))"></span>
                  Gender Identity (DE04.007)
                </label>
                <span>{{ client()?.de04_007_gender_identity || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_008', client()?.de04_008_sexual_orientation)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_008', client()?.de04_008_sexual_orientation))"></span>
                  Sexual Orientation (DE04.008)
                </label>
                <span>{{ client()?.de04_008_sexual_orientation || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_009', client()?.de04_009_veteran_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_009', client()?.de04_009_veteran_status))"></span>
                  Veteran Status (DE04.009)
                </label>
                <span>{{ client()?.de04_009_veteran_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_010', client()?.de04_010_disability_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_010', client()?.de04_010_disability_status))"></span>
                  Disability Status (DE04.010)
                </label>
                <span>{{ client()?.de04_010_disability_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_011', client()?.de04_011_racial_identity)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_011', client()?.de04_011_racial_identity))"></span>
                  Racial Identity (DE04.011)
                </label>
                <span>{{ client()?.de04_011_racial_identity || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_012', client()?.de04_012_citizenship_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_012', client()?.de04_012_citizenship_status))"></span>
                  Citizenship Status (DE04.012)
                </label>
                <span>{{ client()?.de04_012_citizenship_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_013', client()?.de04_013_education)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_013', client()?.de04_013_education))"></span>
                  Education (DE04.013)
                </label>
                <span>{{ client()?.de04_013_education || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_014', client()?.de04_014_employment)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_014', client()?.de04_014_employment))"></span>
                  Employment (DE04.014)
                </label>
                <span>{{ client()?.de04_014_employment || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_015', client()?.de04_015_income_source)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_015', client()?.de04_015_income_source))"></span>
                  Income Source (DE04.015)
                </label>
                <span>{{ client()?.de04_015_income_source || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_016', client()?.de04_016_income_amount)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_016', client()?.de04_016_income_amount))"></span>
                  Income Amount (DE04.016)
                </label>
                <span>{{ client()?.de04_016_income_amount || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_017', client()?.de04_017_housing)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_017', client()?.de04_017_housing))"></span>
                  Housing (DE04.017)
                </label>
                <span>{{ client()?.de04_017_housing || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_018', client()?.de04_018_household_income)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_018', client()?.de04_018_household_income))"></span>
                  Household Income (DE04.018)
                </label>
                <span>{{ client()?.de04_018_household_income || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_019', client()?.de04_019_household_size)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_019', client()?.de04_019_household_size))"></span>
                  Household Size (DE04.019)
                </label>
                <span>{{ client()?.de04_019_household_size || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_020', client()?.de04_020_legal_status)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_020', client()?.de04_020_legal_status))"></span>
                  Legal Status (DE04.020)
                </label>
                <span>{{ client()?.de04_020_legal_status || '-' }}</span>
              </div>
              <div class="field">
                <label>
                  <span class="field-indicator" [class]="getFieldStatus('DE04_021', client()?.de04_021_french_language_services)"
                    [title]="getFieldTooltip(getFieldStatus('DE04_021', client()?.de04_021_french_language_services))"></span>
                  French Language Services (DE04.021)
                </label>
                <span>{{ client()?.de04_021_french_language_services || '-' }}</span>
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
            <app-episode-list [episodes]="episodes()" />
          </div>
        }
      </section>

    </div>
  }
</div>
`, styles: ["/* src/app/patients/components/patient-detail.scss */\n.patient-detail-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #666;\n  text-align: center;\n  padding: 40px;\n}\n.loading-state .empty-icon,\n.empty-state .empty-icon {\n  opacity: 0.5;\n  margin-bottom: 16px;\n  color: #1a365d;\n}\n.loading-state .spinner,\n.empty-state .spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e9ecef;\n  border-top-color: #1a365d;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p,\n.empty-state p {\n  font-size: 16px;\n  max-width: 300px;\n  margin: 0;\n}\n.detail-header {\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a365d 0%,\n      #2d4a7c 100%);\n  color: white;\n}\n.detail-header .patient-name {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.detail-header .patient-name h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.detail-header .patient-name .status-badge {\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.detail-header .patient-name .status-badge.status-success {\n  background: #d4edda;\n  color: #155724;\n}\n.detail-header .patient-name .status-badge.status-error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.detail-header .patient-name .status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.detail-header .patient-name .status-badge.status-partial {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.detail-header .patient-ids {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.detail-header .patient-ids .id-badge {\n  font-size: 0.875rem;\n  opacity: 0.9;\n}\n.detail-actions {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.btn-action {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 13px;\n  transition: all 0.15s;\n}\n.btn-action:hover:not(:disabled) {\n  background-color: #f0f0f0;\n}\n.btn-action:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-action.btn-primary {\n  background-color: #1a365d;\n  border-color: #1a365d;\n  color: white;\n}\n.btn-action.btn-primary:hover:not(:disabled) {\n  background-color: #15294a;\n}\n.btn-action .btn-icon {\n  font-size: 14px;\n}\n.sdoh-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  font-size: 0.875rem;\n}\n.sdoh-banner.complete {\n  background: #d4edda;\n  color: #155724;\n  border-bottom: 1px solid #c3e6cb;\n}\n.sdoh-banner.incomplete {\n  background: #fff3cd;\n  color: #856404;\n  border-bottom: 1px solid #ffeeba;\n}\n.sdoh-banner .sdoh-icon {\n  font-size: 1rem;\n}\n.sdoh-banner .missing-fields {\n  margin-left: auto;\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.indicator-legend {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 20px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 0.75rem;\n}\n.indicator-legend .legend-title {\n  font-weight: 600;\n  color: #1a365d;\n}\n.indicator-legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #6c757d;\n}\n.field-indicator {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 6px;\n  vertical-align: middle;\n  cursor: help;\n  flex-shrink: 0;\n}\n.field-indicator.submittable {\n  background-color: #28a745;\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.2);\n}\n.field-indicator.needs-review {\n  background-color: #fd7e14;\n  box-shadow: 0 0 0 2px rgba(253, 126, 20, 0.2);\n  animation: pulse-warning 2s infinite;\n}\n.field-indicator.not-submitted {\n  background-color: #adb5bd;\n  opacity: 0.6;\n}\n@keyframes pulse-warning {\n  0%, 100% {\n    box-shadow: 0 0 0 2px rgba(253, 126, 20, 0.2);\n  }\n  50% {\n    box-shadow: 0 0 0 4px rgba(253, 126, 20, 0.3);\n  }\n}\n.detail-sections {\n  flex: 1;\n  overflow-y: auto;\n}\n.detail-section {\n  border-bottom: 1px solid #e0e0e0;\n}\n.detail-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 12px 20px;\n  background: #f8f9fa;\n  border: none;\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-align: left;\n  transition: background-color 0.15s;\n}\n.detail-section .section-header:hover {\n  background: #e9ecef;\n}\n.detail-section .section-header .section-title {\n  font-weight: 600;\n  color: #1a365d;\n}\n.detail-section .section-header .section-toggle {\n  font-size: 1.25rem;\n  color: #6c757d;\n  font-weight: 300;\n}\n.detail-section .section-content {\n  padding: 16px 20px;\n  background: white;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.field-grid.sdoh-grid {\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field label {\n  font-size: 0.75rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.field span {\n  font-size: 0.875rem;\n  color: #212529;\n}\n.episodes-content .placeholder {\n  text-align: center;\n  color: #6c757d;\n  font-style: italic;\n  margin: 8px 0;\n}\n@media (max-width: 768px) {\n  .field-grid {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  }\n  .detail-header {\n    padding: 12px 16px;\n  }\n  .detail-header .patient-name h2 {\n    font-size: 1.125rem;\n  }\n  .sdoh-banner {\n    flex-wrap: wrap;\n  }\n  .sdoh-banner .missing-fields {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 4px;\n  }\n}\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientDetailComponent, { className: "PatientDetailComponent", filePath: "src/app/patients/components/patient-detail.ts", lineNumber: 19 });
})();

// src/app/patients/patients.ts
var PatientsComponent = class _PatientsComponent {
  patientsService = inject(PatientsService);
  router = inject(Router);
  // Expose service signals to template
  selectedPatient = this.patientsService.selectedPatient;
  loadingDetail = this.patientsService.loadingDetail;
  ngOnInit() {
    this.patientsService.loadPatients();
  }
  onPatientSelected(patient) {
  }
  onViewLogs(personId) {
    this.router.navigate(["/logs"]);
  }
  static \u0275fac = function PatientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientsComponent, selectors: [["app-patients"]], decls: 8, vars: 0, consts: [[1, "patients-container"], [1, "patients-master"], [1, "master-header"], [3, "patientSelected"], [1, "patients-detail"], [3, "viewLogs"]], template: function PatientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Patients");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "app-patient-list", 3);
      \u0275\u0275listener("patientSelected", function PatientsComponent_Template_app_patient_list_patientSelected_5_listener($event) {
        return ctx.onPatientSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "app-patient-detail", 5);
      \u0275\u0275listener("viewLogs", function PatientsComponent_Template_app_patient_detail_viewLogs_7_listener($event) {
        return ctx.onViewLogs($event);
      });
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [PatientListComponent, PatientDetailComponent], styles: ["\n\n.patients-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 60px);\n  gap: 1px;\n  background-color: #e0e0e0;\n}\n.patients-master[_ngcontent-%COMP%] {\n  width: 40%;\n  min-width: 400px;\n  max-width: 600px;\n  background-color: white;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.patients-master[_ngcontent-%COMP%]   .master-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.patients-master[_ngcontent-%COMP%]   .master-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #1a365d;\n}\n.patients-detail[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .patients-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .patients-master[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    height: 50vh;\n    min-height: 300px;\n  }\n  .patients-detail[_ngcontent-%COMP%] {\n    height: 50vh;\n  }\n}\n@media (max-width: 768px) {\n  .patients-master[_ngcontent-%COMP%] {\n    height: 40vh;\n    min-width: auto;\n  }\n  .patients-detail[_ngcontent-%COMP%] {\n    height: 60vh;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientsComponent, [{
    type: Component,
    args: [{ selector: "app-patients", standalone: true, imports: [PatientListComponent, PatientDetailComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="patients-container">\n  <!-- Master: Patient List -->\n  <div class="patients-master">\n    <div class="master-header">\n      <h2>Patients</h2>\n    </div>\n    <app-patient-list (patientSelected)="onPatientSelected($event)" />\n  </div>\n\n  <!-- Detail: Patient Detail -->\n  <div class="patients-detail">\n    <app-patient-detail (viewLogs)="onViewLogs($event)" />\n  </div>\n</div>\n', styles: ["/* src/app/patients/patients.scss */\n.patients-container {\n  display: flex;\n  height: calc(100vh - 60px);\n  gap: 1px;\n  background-color: #e0e0e0;\n}\n.patients-master {\n  width: 40%;\n  min-width: 400px;\n  max-width: 600px;\n  background-color: white;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.patients-master .master-header {\n  padding: 1rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.patients-master .master-header h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #1a365d;\n}\n.patients-detail {\n  flex: 1;\n  background-color: white;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .patients-container {\n    flex-direction: column;\n  }\n  .patients-master {\n    width: 100%;\n    max-width: none;\n    height: 50vh;\n    min-height: 300px;\n  }\n  .patients-detail {\n    height: 50vh;\n  }\n}\n@media (max-width: 768px) {\n  .patients-master {\n    height: 40vh;\n    min-width: auto;\n  }\n  .patients-detail {\n    height: 60vh;\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientsComponent, { className: "PatientsComponent", filePath: "src/app/patients/patients.ts", lineNumber: 20 });
})();
export {
  PatientsComponent
};
