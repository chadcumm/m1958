import {
  AppStatusService,
  CustomService,
  HttpClient
} from "./chunk-ZGUDOQOJ.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-N6ZQYAD3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-I7D2VZMI.js";

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

// src/app/mocks/examples/logs.mock.ts
var MOCK_LOGS_RESPONSE = {
  total_count: 25,
  returned_count: 10,
  page: 1,
  page_size: 50,
  filters_applied: {
    log_type: "",
    status: "",
    start_date: "",
    end_date: "",
    related_script: "",
    days_back: 7
  },
  logs: [
    {
      log_id: 12345001,
      log_type: "MANAGER",
      title: "MHA PDS Episode and Service Processing",
      summary: "Processed 15 episodes, 42 service events",
      related_script: "gbin_mha_pds_manager",
      function_name: "",
      start_dt_tm: "2026-01-10T08:00:00",
      start_dt_tm_formatted: "10-Jan-2026 08:00:00",
      stop_dt_tm: "2026-01-10T08:02:30",
      stop_dt_tm_formatted: "10-Jan-2026 08:02:30",
      duration_seconds: 150,
      status: "SUCCESS",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "",
      has_payload: 0,
      record_cnt: 15,
      error_cnt: 0,
      error_message: "",
      parent_log_id: 0
    },
    {
      log_id: 12345002,
      log_type: "DATA_EXTRACTION",
      title: "MHA PDS Data Extraction and Transmission",
      summary: "Extracted 10 episodes for transmission",
      related_script: "gbin_mha_pds_data",
      function_name: "",
      start_dt_tm: "2026-01-10T06:00:00",
      start_dt_tm_formatted: "10-Jan-2026 06:00:00",
      stop_dt_tm: "2026-01-10T06:05:45",
      stop_dt_tm_formatted: "10-Jan-2026 06:05:45",
      duration_seconds: 345,
      status: "SUCCESS",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "BATCH-2026-01-10-001",
      has_payload: 1,
      record_cnt: 10,
      error_cnt: 0,
      error_message: "",
      parent_log_id: 0
    },
    {
      log_id: 12345003,
      log_type: "TRANSMISSION",
      title: "Mirth Connect Transmission",
      summary: "Transmitted batch to Mirth Connect",
      related_script: "gbin_mha_pds_data",
      function_name: "sTransmitToMirth",
      start_dt_tm: "2026-01-10T06:05:00",
      start_dt_tm_formatted: "10-Jan-2026 06:05:00",
      stop_dt_tm: "2026-01-10T06:05:30",
      stop_dt_tm_formatted: "10-Jan-2026 06:05:30",
      duration_seconds: 30,
      status: "SUCCESS",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "BATCH-2026-01-10-001",
      has_payload: 1,
      record_cnt: 10,
      error_cnt: 0,
      error_message: "",
      parent_log_id: 12345002
    },
    {
      log_id: 12345004,
      log_type: "MIRTH_CALLBACK",
      title: "Mirth Logging Callback",
      summary: "Received acknowledgment from Mirth",
      related_script: "gbin_mha_pds_data",
      function_name: "",
      start_dt_tm: "2026-01-10T06:05:35",
      start_dt_tm_formatted: "10-Jan-2026 06:05:35",
      stop_dt_tm: "2026-01-10T06:05:36",
      stop_dt_tm_formatted: "10-Jan-2026 06:05:36",
      duration_seconds: 1,
      status: "SUCCESS",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "BATCH-2026-01-10-001",
      has_payload: 1,
      record_cnt: 0,
      error_cnt: 0,
      error_message: "",
      parent_log_id: 12345002
    },
    {
      log_id: 12345005,
      log_type: "MANAGER",
      title: "MHA PDS Episode and Service Processing",
      summary: "Processed 8 episodes, 23 service events",
      related_script: "gbin_mha_pds_manager",
      function_name: "",
      start_dt_tm: "2026-01-09T08:00:00",
      start_dt_tm_formatted: "09-Jan-2026 08:00:00",
      stop_dt_tm: "2026-01-09T08:01:15",
      stop_dt_tm_formatted: "09-Jan-2026 08:01:15",
      duration_seconds: 75,
      status: "SUCCESS",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "",
      has_payload: 0,
      record_cnt: 8,
      error_cnt: 0,
      error_message: "",
      parent_log_id: 0
    },
    {
      log_id: 12345006,
      log_type: "DATA_EXTRACTION",
      title: "MHA PDS Data Extraction and Transmission",
      summary: "Extraction completed with errors",
      related_script: "gbin_mha_pds_data",
      function_name: "",
      start_dt_tm: "2026-01-09T06:00:00",
      start_dt_tm_formatted: "09-Jan-2026 06:00:00",
      stop_dt_tm: "2026-01-09T06:04:30",
      stop_dt_tm_formatted: "09-Jan-2026 06:04:30",
      duration_seconds: 270,
      status: "PARTIAL",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "BATCH-2026-01-09-001",
      has_payload: 1,
      record_cnt: 6,
      error_cnt: 2,
      error_message: "Failed to process 2 episodes: missing required fields",
      parent_log_id: 0
    },
    {
      log_id: 12345007,
      log_type: "MANAGER",
      title: "MHA PDS Episode and Service Processing",
      summary: "Processing failed due to database error",
      related_script: "gbin_mha_pds_manager",
      function_name: "",
      start_dt_tm: "2026-01-08T08:00:00",
      start_dt_tm_formatted: "08-Jan-2026 08:00:00",
      stop_dt_tm: "2026-01-08T08:00:05",
      stop_dt_tm_formatted: "08-Jan-2026 08:00:05",
      duration_seconds: 5,
      status: "FAILED",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "",
      has_payload: 0,
      record_cnt: 0,
      error_cnt: 1,
      error_message: "Database connection timeout",
      parent_log_id: 0
    },
    {
      log_id: 12345008,
      log_type: "DATA_EXTRACTION",
      title: "MHA PDS Data Extraction and Transmission",
      summary: "Extracted 12 episodes for transmission",
      related_script: "gbin_mha_pds_data",
      function_name: "",
      start_dt_tm: "2026-01-07T06:00:00",
      start_dt_tm_formatted: "07-Jan-2026 06:00:00",
      stop_dt_tm: "2026-01-07T06:06:00",
      stop_dt_tm_formatted: "07-Jan-2026 06:06:00",
      duration_seconds: 360,
      status: "SUCCESS",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "BATCH-2026-01-07-001",
      has_payload: 1,
      record_cnt: 12,
      error_cnt: 0,
      error_message: "",
      parent_log_id: 0
    },
    {
      log_id: 12345009,
      log_type: "MANAGER",
      title: "MHA PDS Episode and Service Processing",
      summary: "Currently processing episodes",
      related_script: "gbin_mha_pds_manager",
      function_name: "",
      start_dt_tm: "2026-01-10T09:00:00",
      start_dt_tm_formatted: "10-Jan-2026 09:00:00",
      stop_dt_tm: "",
      stop_dt_tm_formatted: "",
      duration_seconds: 0,
      status: "IN_PROGRESS",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "",
      has_payload: 0,
      record_cnt: 0,
      error_cnt: 0,
      error_message: "",
      parent_log_id: 0
    },
    {
      log_id: 12345010,
      log_type: "TRANSMISSION",
      title: "Mirth Connect Transmission Error",
      summary: "Connection refused by Mirth server",
      related_script: "gbin_mha_pds_data",
      function_name: "sTransmitToMirth",
      start_dt_tm: "2026-01-06T06:05:00",
      start_dt_tm_formatted: "06-Jan-2026 06:05:00",
      stop_dt_tm: "2026-01-06T06:05:10",
      stop_dt_tm_formatted: "06-Jan-2026 06:05:10",
      duration_seconds: 10,
      status: "ERROR",
      person_id: 0,
      encntr_id: 0,
      episode_id: 0,
      service_id: 0,
      batch_id: "BATCH-2026-01-06-001",
      has_payload: 0,
      record_cnt: 0,
      error_cnt: 1,
      error_message: "Connection refused: Unable to connect to Mirth server at port 8443",
      parent_log_id: 0
    }
  ]
};
var MOCK_LOG_DETAIL_RESPONSE = {
  found_ind: 1,
  log: {
    log_id: 12345002,
    log_type: "DATA_EXTRACTION",
    title: "MHA PDS Data Extraction and Transmission",
    summary: "Extracted 10 episodes for transmission",
    related_script: "gbin_mha_pds_data",
    function_name: "",
    start_dt_tm: "2026-01-10T06:00:00",
    start_dt_tm_formatted: "10-Jan-2026 06:00:00",
    stop_dt_tm: "2026-01-10T06:05:45",
    stop_dt_tm_formatted: "10-Jan-2026 06:05:45",
    duration_seconds: 345,
    duration_formatted: "5m 45s",
    status: "SUCCESS",
    person_id: 0,
    encntr_id: 0,
    episode_id: 0,
    service_id: 0,
    batch_id: "BATCH-2026-01-10-001",
    long_text_id: 98765432,
    has_payload: 1,
    record_cnt: 10,
    error_cnt: 0,
    error_message: "",
    parent_log_id: 0,
    active_ind: 1,
    create_dt_tm: "2026-01-10T06:00:00",
    create_dt_tm_formatted: "10-Jan-2026 06:00:00",
    create_prsnl_id: 1234567,
    create_prsnl_name: "SYSTEM, MHA PDS",
    updt_dt_tm: "2026-01-10T06:05:45",
    updt_dt_tm_formatted: "10-Jan-2026 06:05:45",
    updt_prsnl_id: 1234567,
    updt_prsnl_name: "SYSTEM, MHA PDS",
    updt_cnt: 3
  },
  child_log_cnt: 2,
  child_logs: [
    {
      log_id: 12345003,
      log_type: "TRANSMISSION",
      title: "Mirth Connect Transmission",
      status: "SUCCESS",
      start_dt_tm_formatted: "10-Jan-2026 06:05:00"
    },
    {
      log_id: 12345004,
      log_type: "MIRTH_CALLBACK",
      title: "Mirth Logging Callback",
      status: "SUCCESS",
      start_dt_tm_formatted: "10-Jan-2026 06:05:35"
    }
  ]
};
var MOCK_LOG_TEXT_RESPONSE = {
  found_ind: 1,
  log_id: 12345002,
  long_text_id: 98765432,
  text_length: 2048,
  text_content: JSON.stringify({
    bundleType: "collection",
    timestamp: "2026-01-10T06:05:45Z",
    entry: [
      {
        resource: {
          resourceType: "Patient",
          id: "patient-001",
          identifier: [
            {
              system: "http://mha-pds.on.ca/mrn",
              value: "MRN123456"
            }
          ],
          name: [
            {
              family: "Smith",
              given: ["John", "Michael"]
            }
          ]
        }
      },
      {
        resource: {
          resourceType: "EpisodeOfCare",
          id: "episode-001",
          status: "active",
          patient: {
            reference: "Patient/patient-001"
          },
          period: {
            start: "2026-01-05"
          }
        }
      }
    ]
  }, null, 2),
  content_type: "application/json",
  is_json: 1
};
var MOCK_LOG_DETAIL_NOT_FOUND = {
  found_ind: 0,
  log: {
    log_id: 0,
    log_type: "",
    title: "",
    summary: "",
    related_script: "",
    function_name: "",
    start_dt_tm: "",
    start_dt_tm_formatted: "",
    stop_dt_tm: "",
    stop_dt_tm_formatted: "",
    duration_seconds: 0,
    duration_formatted: "",
    status: "",
    person_id: 0,
    encntr_id: 0,
    episode_id: 0,
    service_id: 0,
    batch_id: "",
    long_text_id: 0,
    has_payload: 0,
    record_cnt: 0,
    error_cnt: 0,
    error_message: "",
    parent_log_id: 0,
    active_ind: 0,
    create_dt_tm: "",
    create_dt_tm_formatted: "",
    create_prsnl_id: 0,
    create_prsnl_name: "",
    updt_dt_tm: "",
    updt_dt_tm_formatted: "",
    updt_prsnl_id: 0,
    updt_prsnl_name: "",
    updt_cnt: 0
  },
  child_log_cnt: 0,
  child_logs: []
};
var MOCK_LOG_TEXT_NOT_FOUND = {
  found_ind: 0,
  log_id: 0,
  long_text_id: 0,
  text_length: 0,
  text_content: "",
  content_type: "",
  is_json: 0
};
var MOCK_PROGRAM_LOG_RESPONSE = {
  found_ind: 1,
  parent_log_id: 12345002,
  program_log_id: 12345099,
  program_log_text: `************************************************************
* START MHA PDS Data Extraction ****************************
************************************************************
10-Jan-2026 06:00:00 - Starting data extraction process
10-Jan-2026 06:00:01 - Loaded 48 active submit fields from configuration
10-Jan-2026 06:00:02 - Query for PENDING episodes initiated
10-Jan-2026 06:00:05 - Found 10 episodes with PENDING status
10-Jan-2026 06:00:06 - Processing episode EP-2026-001 (person_id: 123456789)
10-Jan-2026 06:00:08 - Building DE01-DE04 Client data for episode
10-Jan-2026 06:00:10 - Building DE05 Referral data
10-Jan-2026 06:00:11 - Building DE06 Episode of Care data
10-Jan-2026 06:00:13 - Building DE07-DE08 Organization/Site data
10-Jan-2026 06:00:15 - Building DE09 Health Program data
10-Jan-2026 06:00:17 - Building DE10 Health Service Events (found 4 services)
10-Jan-2026 06:00:20 - Episode EP-2026-001 complete
10-Jan-2026 06:00:21 - Processing episode EP-2026-002 (person_id: 234567890)
10-Jan-2026 06:00:35 - Processing episode EP-2026-003 (person_id: 345678901)
10-Jan-2026 06:00:50 - Processing episode EP-2026-004 (person_id: 456789012)
10-Jan-2026 06:01:05 - Processing episode EP-2026-005 (person_id: 567890123)
10-Jan-2026 06:01:20 - Processing episode EP-2026-006 (person_id: 678901234)
10-Jan-2026 06:01:35 - Processing episode EP-2026-007 (person_id: 789012345)
10-Jan-2026 06:01:50 - Processing episode EP-2026-008 (person_id: 890123456)
10-Jan-2026 06:02:05 - Processing episode EP-2026-009 (person_id: 901234567)
10-Jan-2026 06:02:20 - Processing episode EP-2026-010 (person_id: 012345678)
10-Jan-2026 06:02:35 - All episodes processed
10-Jan-2026 06:02:36 - Building FHIR Bundle for transmission
10-Jan-2026 06:02:40 - Bundle size: 245678 bytes
10-Jan-2026 06:02:41 - Initiating transmission to Mirth Connect
10-Jan-2026 06:05:30 - Transmission complete, response code: 200
10-Jan-2026 06:05:32 - Updating submission status to SUBMITTED
10-Jan-2026 06:05:40 - Updated 10 episodes, 42 services
10-Jan-2026 06:05:43 - Storing JSON payload in log
10-Jan-2026 06:05:45 - Stopped MHA PDS log with status: SUCCESS
************************************************************
* END   MHA PDS Data Extraction ****************************
************************************************************`,
  text_length: 2048,
  created_dt_tm: "2026-01-10T06:05:45",
  created_dt_tm_formatted: "10-Jan-2026 06:05:45"
};
var MOCK_PROGRAM_LOG_NOT_FOUND = {
  found_ind: 0,
  parent_log_id: 0,
  program_log_id: 0,
  program_log_text: "",
  text_length: 0,
  created_dt_tm: "",
  created_dt_tm_formatted: ""
};

// src/app/mocks/examples/patients.mock.ts
var MOCK_PATIENTS_RESPONSE = {
  total_count: 8,
  returned_count: 8,
  page: 1,
  page_size: 50,
  patients: [
    {
      client_id: 12345001,
      person_id: 98765001,
      episode_id: 55501,
      first_name: "John",
      last_name: "Smith",
      date_of_birth: "1985-03-15",
      date_of_birth_formatted: "15-Mar-1985",
      mrn: "MRN001234",
      hcn: "1234567890",
      submission_status: "SUBMITTED",
      functional_centre: "ATS",
      functional_centre_mapped: "ATS",
      program_name: "Adult Treatment Services",
      episode_count: 2,
      latest_episode_date: "2025-01-10",
      latest_episode_date_formatted: "10-Jan-2025",
      sdoh_complete_ind: 1
    },
    {
      client_id: 12345002,
      person_id: 98765002,
      episode_id: 55502,
      first_name: "Jane",
      last_name: "Doe",
      date_of_birth: "1990-07-22",
      date_of_birth_formatted: "22-Jul-1990",
      mrn: "MRN001235",
      hcn: "2345678901",
      submission_status: "PENDING",
      functional_centre: "ACTT",
      functional_centre_mapped: "ACTT",
      program_name: "Assertive Community Treatment Team",
      episode_count: 1,
      latest_episode_date: "2025-01-08",
      latest_episode_date_formatted: "08-Jan-2025",
      sdoh_complete_ind: 0
    },
    {
      client_id: 12345003,
      person_id: 98765003,
      episode_id: 55503,
      first_name: "Michael",
      last_name: "Johnson",
      date_of_birth: "1978-11-30",
      date_of_birth_formatted: "30-Nov-1978",
      mrn: "MRN001236",
      hcn: "3456789012",
      submission_status: "ERROR",
      functional_centre: "AWS",
      functional_centre_mapped: "AWS",
      program_name: "Adult Withdrawal Services",
      episode_count: 3,
      latest_episode_date: "2025-01-05",
      latest_episode_date_formatted: "05-Jan-2025",
      sdoh_complete_ind: 1
    },
    {
      client_id: 12345004,
      person_id: 98765004,
      episode_id: 55504,
      first_name: "Emily",
      last_name: "Williams",
      date_of_birth: "1995-02-14",
      date_of_birth_formatted: "14-Feb-1995",
      mrn: "MRN001237",
      hcn: "4567890123",
      submission_status: "SUBMITTED",
      functional_centre: "CYS",
      functional_centre_mapped: "CYS",
      program_name: "Child and Youth Services",
      episode_count: 1,
      latest_episode_date: "2025-01-09",
      latest_episode_date_formatted: "09-Jan-2025",
      sdoh_complete_ind: 1
    },
    {
      client_id: 12345005,
      person_id: 98765005,
      episode_id: 55505,
      first_name: "Robert",
      last_name: "Brown",
      date_of_birth: "1965-09-08",
      date_of_birth_formatted: "08-Sep-1965",
      mrn: "MRN001238",
      hcn: "5678901234",
      submission_status: "PENDING",
      functional_centre: "GER",
      functional_centre_mapped: "GER",
      program_name: "Geriatric Mental Health",
      episode_count: 2,
      latest_episode_date: "2025-01-07",
      latest_episode_date_formatted: "07-Jan-2025",
      sdoh_complete_ind: 0
    },
    {
      client_id: 12345006,
      person_id: 98765006,
      episode_id: 55506,
      first_name: "Sarah",
      last_name: "Davis",
      date_of_birth: "1988-04-25",
      date_of_birth_formatted: "25-Apr-1988",
      mrn: "MRN001239",
      hcn: "6789012345",
      submission_status: "SUBMITTED",
      functional_centre: "ATS",
      functional_centre_mapped: "ATS",
      program_name: "Adult Treatment Services",
      episode_count: 1,
      latest_episode_date: "2025-01-11",
      latest_episode_date_formatted: "11-Jan-2025",
      sdoh_complete_ind: 1
    },
    {
      client_id: 12345007,
      person_id: 98765007,
      episode_id: 55507,
      first_name: "David",
      last_name: "Miller",
      date_of_birth: "1972-12-03",
      date_of_birth_formatted: "03-Dec-1972",
      mrn: "MRN001240",
      hcn: "7890123456",
      submission_status: "PARTIAL",
      functional_centre: "ACTT",
      functional_centre_mapped: "ACTT",
      program_name: "Assertive Community Treatment Team",
      episode_count: 4,
      latest_episode_date: "2025-01-06",
      latest_episode_date_formatted: "06-Jan-2025",
      sdoh_complete_ind: 1
    },
    {
      client_id: 12345008,
      person_id: 98765008,
      episode_id: 55508,
      first_name: "Lisa",
      last_name: "Wilson",
      date_of_birth: "1992-06-18",
      date_of_birth_formatted: "18-Jun-1992",
      mrn: "MRN001241",
      hcn: "8901234567",
      submission_status: "PENDING",
      functional_centre: "AWS",
      functional_centre_mapped: "AWS",
      program_name: "Adult Withdrawal Services",
      episode_count: 1,
      latest_episode_date: "2025-01-12",
      latest_episode_date_formatted: "12-Jan-2025",
      sdoh_complete_ind: 0
    }
  ]
};
var MOCK_PATIENT_DETAIL_RESPONSE = {
  found_ind: 1,
  client: {
    client_id: 12345001,
    person_id: 98765001,
    episode_id: 55501,
    extracted_dt_tm: "2025-01-10T14:30:00",
    extracted_dt_tm_formatted: "10-Jan-2025 14:30",
    // DE01 - Client Information
    de01_001_first_name: "John",
    de01_002_middle_name: "Robert",
    de01_003_last_name: "Smith",
    de01_004_date_of_birth: "1985-03-15",
    de01_004_date_of_birth_formatted: "15-Mar-1985",
    de01_005_estimated_dob_flag: 0,
    // DE02 - Client Identifiers
    de02_001_mrn: "MRN001234",
    de02_002_vendor_id: "VND-2025-001234",
    de02_003_hcn: "1234567890",
    de02_004_hcn_issuing_authority: "Ontario",
    de02_005_identifier_type: "OHIP",
    // DE03 - Client Address
    de03_001_address_use: "HOME",
    de03_002_city: "Owen Sound",
    de03_003_province: "ON",
    de03_004_postal_code: "N4K 5N9",
    // DE04 - SDOH fields
    de04_001_preferred_language: "English",
    de04_002_interpreter_needed: "No",
    de04_003_birth_country: "Canada",
    de04_004_arrival_date_canada: "",
    de04_005_immigration_status: "Canadian Citizen",
    de04_006_indigenous_identity: "No",
    de04_007_gender_identity: "Male",
    de04_008_sexual_orientation: "Heterosexual",
    de04_009_veteran_status: "No",
    de04_010_disability_status: "None reported",
    de04_011_racial_identity: "White",
    de04_012_citizenship_status: "Canadian Citizen",
    de04_013_education: "College diploma",
    de04_014_employment: "Employed full-time",
    de04_015_income_source: "Employment",
    de04_016_income_amount: "$50,000 - $74,999",
    de04_017_housing: "Owned home",
    de04_018_household_income: "$75,000 - $99,999",
    de04_019_household_size: "3",
    de04_020_legal_status: "No legal status",
    de04_021_french_language_services: "No",
    // Metadata
    sdoh_complete_ind: 1,
    sdoh_missing_fields: "",
    data_modified_ind: 0,
    submission_status: "SUBMITTED",
    submission_dt_tm: "2025-01-10T15:00:00",
    submission_dt_tm_formatted: "10-Jan-2025 15:00"
  },
  episodes: [
    {
      episode_id: 55501,
      person_id: 98765001,
      encntr_id: 77701,
      episode_identifier: "EP-2025-55501",
      // DE05 - Referral
      referral_id: "REF-2024-12345",
      referral_received_date: "2024-12-01",
      referral_received_date_formatted: "01-Dec-2024",
      referral_source: "Family Physician",
      referral_source_type: "Primary Care",
      referral_type: "Urgent",
      // DE06 - Episode of Care
      episode_of_care_id: "EOC-2024-55501",
      episode_of_care_status: "Active",
      first_contact_date: "2024-12-05",
      first_contact_date_formatted: "05-Dec-2024",
      eligibility_screening_date: "2024-12-06",
      eligibility_screening_date_formatted: "06-Dec-2024",
      initial_assessment_date: "2024-12-10",
      initial_assessment_date_formatted: "10-Dec-2024",
      scheduled_appointment_date: "2024-12-15",
      scheduled_appointment_date_formatted: "15-Dec-2024",
      appt_rescheduled_reason: "",
      service_initiation_date: "2024-12-15",
      service_initiation_date_formatted: "15-Dec-2024",
      service_enrollment_date: "2024-12-15",
      service_enrollment_date_formatted: "15-Dec-2024",
      service_termination_date: "",
      service_termination_date_formatted: "",
      service_termination_reason: "",
      // DE09 - Health Program
      health_program_number: "PROG-ATS-001",
      health_program_name: "Adult Treatment Services",
      functional_centre: "1.7254077811",
      functional_centre_mapped: "ATS",
      // Submission
      submission_status: "SUBMITTED",
      submission_dt_tm: "2025-01-10T15:00:00",
      submission_dt_tm_formatted: "10-Jan-2025 15:00",
      submission_batch_id: "BATCH-2025-0110-001",
      error_message: "",
      // Services
      service_cnt: 3,
      services: [
        {
          service_id: 88801,
          episode_id: 55501,
          encntr_id: 77701,
          person_id: 98765001,
          hsp_organization_number: "ORG-GBHN-001",
          moh_organization_id: "MOH-12345",
          hsp_organization_name: "Brightshores Health System",
          hsp_organization_active_flag: 1,
          hsp_site_number: "SITE-OS-001",
          hsp_site_name: "Owen Sound Hospital",
          health_service_event_id: "HSE-2024-88801",
          service_modality: "Individual",
          service_modality_type: "In-Person",
          encounter_date: "2024-12-15",
          encounter_date_formatted: "15-Dec-2024",
          health_service_group_id: "GRP-001",
          direct_service_minutes: 60,
          indirect_service_minutes: 15,
          encounter_status: "Completed",
          service_provider_name: "Dr. Sarah Johnson",
          is_assessment_ind: 1,
          no_show_ind: 0
        },
        {
          service_id: 88802,
          episode_id: 55501,
          encntr_id: 77702,
          person_id: 98765001,
          hsp_organization_number: "ORG-GBHN-001",
          moh_organization_id: "MOH-12345",
          hsp_organization_name: "Brightshores Health System",
          hsp_organization_active_flag: 1,
          hsp_site_number: "SITE-OS-001",
          hsp_site_name: "Owen Sound Hospital",
          health_service_event_id: "HSE-2024-88802",
          service_modality: "Individual",
          service_modality_type: "In-Person",
          encounter_date: "2025-01-05",
          encounter_date_formatted: "05-Jan-2025",
          health_service_group_id: "GRP-001",
          direct_service_minutes: 45,
          indirect_service_minutes: 10,
          encounter_status: "Completed",
          service_provider_name: "Dr. Sarah Johnson",
          is_assessment_ind: 0,
          no_show_ind: 0
        },
        {
          service_id: 88803,
          episode_id: 55501,
          encntr_id: 77703,
          person_id: 98765001,
          hsp_organization_number: "ORG-GBHN-001",
          moh_organization_id: "MOH-12345",
          hsp_organization_name: "Brightshores Health System",
          hsp_organization_active_flag: 1,
          hsp_site_number: "SITE-OS-001",
          hsp_site_name: "Owen Sound Hospital",
          health_service_event_id: "HSE-2025-88803",
          service_modality: "Group",
          service_modality_type: "Virtual",
          encounter_date: "2025-01-10",
          encounter_date_formatted: "10-Jan-2025",
          health_service_group_id: "GRP-002",
          direct_service_minutes: 90,
          indirect_service_minutes: 5,
          encounter_status: "Completed",
          service_provider_name: "Mark Thompson, RN",
          is_assessment_ind: 0,
          no_show_ind: 0
        }
      ]
    },
    {
      episode_id: 55499,
      person_id: 98765001,
      encntr_id: 77680,
      episode_identifier: "EP-2024-55499",
      // DE05 - Referral
      referral_id: "REF-2024-11000",
      referral_received_date: "2024-06-01",
      referral_received_date_formatted: "01-Jun-2024",
      referral_source: "Self-referral",
      referral_source_type: "Self",
      referral_type: "Routine",
      // DE06 - Episode of Care
      episode_of_care_id: "EOC-2024-55499",
      episode_of_care_status: "Closed",
      first_contact_date: "2024-06-05",
      first_contact_date_formatted: "05-Jun-2024",
      eligibility_screening_date: "2024-06-05",
      eligibility_screening_date_formatted: "05-Jun-2024",
      initial_assessment_date: "2024-06-10",
      initial_assessment_date_formatted: "10-Jun-2024",
      scheduled_appointment_date: "2024-06-15",
      scheduled_appointment_date_formatted: "15-Jun-2024",
      appt_rescheduled_reason: "",
      service_initiation_date: "2024-06-15",
      service_initiation_date_formatted: "15-Jun-2024",
      service_enrollment_date: "2024-06-15",
      service_enrollment_date_formatted: "15-Jun-2024",
      service_termination_date: "2024-09-30",
      service_termination_date_formatted: "30-Sep-2024",
      service_termination_reason: "Treatment completed",
      // DE09 - Health Program
      health_program_number: "PROG-AWS-001",
      health_program_name: "Adult Withdrawal Services",
      functional_centre: "1.725407845",
      functional_centre_mapped: "AWS",
      // Submission
      submission_status: "SUBMITTED",
      submission_dt_tm: "2024-10-01T10:00:00",
      submission_dt_tm_formatted: "01-Oct-2024 10:00",
      submission_batch_id: "BATCH-2024-1001-001",
      error_message: "",
      // Services
      service_cnt: 2,
      services: [
        {
          service_id: 88700,
          episode_id: 55499,
          encntr_id: 77680,
          person_id: 98765001,
          hsp_organization_number: "ORG-GBHN-001",
          moh_organization_id: "MOH-12345",
          hsp_organization_name: "Brightshores Health System",
          hsp_organization_active_flag: 1,
          hsp_site_number: "SITE-OS-001",
          hsp_site_name: "Owen Sound Hospital",
          health_service_event_id: "HSE-2024-88700",
          service_modality: "Individual",
          service_modality_type: "In-Person",
          encounter_date: "2024-06-15",
          encounter_date_formatted: "15-Jun-2024",
          health_service_group_id: "GRP-001",
          direct_service_minutes: 75,
          indirect_service_minutes: 20,
          encounter_status: "Completed",
          service_provider_name: "Dr. Michael Chen",
          is_assessment_ind: 1,
          no_show_ind: 0
        },
        {
          service_id: 88701,
          episode_id: 55499,
          encntr_id: 77681,
          person_id: 98765001,
          hsp_organization_number: "ORG-GBHN-001",
          moh_organization_id: "MOH-12345",
          hsp_organization_name: "Brightshores Health System",
          hsp_organization_active_flag: 1,
          hsp_site_number: "SITE-OS-001",
          hsp_site_name: "Owen Sound Hospital",
          health_service_event_id: "HSE-2024-88701",
          service_modality: "Individual",
          service_modality_type: "In-Person",
          encounter_date: "2024-09-30",
          encounter_date_formatted: "30-Sep-2024",
          health_service_group_id: "GRP-001",
          direct_service_minutes: 30,
          indirect_service_minutes: 10,
          encounter_status: "Completed",
          service_provider_name: "Dr. Michael Chen",
          is_assessment_ind: 0,
          no_show_ind: 0
        }
      ]
    }
  ]
};
var MOCK_PATIENT_DETAIL_INCOMPLETE_SDOH = {
  found_ind: 1,
  client: __spreadProps(__spreadValues({}, MOCK_PATIENT_DETAIL_RESPONSE.client), {
    client_id: 12345002,
    person_id: 98765002,
    de01_001_first_name: "Jane",
    de01_002_middle_name: "",
    de01_003_last_name: "Doe",
    de02_001_mrn: "MRN001235",
    de02_003_hcn: "2345678901",
    // Missing SDOH fields
    de04_007_gender_identity: "",
    de04_008_sexual_orientation: "",
    de04_013_education: "",
    de04_014_employment: "",
    sdoh_complete_ind: 0,
    sdoh_missing_fields: "de04_007_gender_identity,de04_008_sexual_orientation,de04_013_education,de04_014_employment",
    submission_status: "PENDING"
  }),
  episodes: [
    __spreadProps(__spreadValues({}, MOCK_PATIENT_DETAIL_RESPONSE.episodes[0]), {
      episode_id: 55502,
      episode_identifier: "EP-2025-55502",
      submission_status: "PENDING",
      service_cnt: 0,
      services: []
    })
  ]
};
var MOCK_PATIENT_NOT_FOUND = {
  found_ind: 0,
  client: null,
  episodes: []
};

// src/app/mocks/examples/available-locations.mock.ts
var MOCK_AVAILABLE_LOCATIONS_RESPONSE = {
  LOCATIONS_CNT: 29,
  LOCATIONS: [
    {
      "LOCATION_CD": 351721,
      "LOCATION_NAME": "ACT Team-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537643767,
      "LOCATION_NAME": "Acute Withdrawal Services",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537643869,
      "LOCATION_NAME": "Addiction Treatment Services",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 12901,
      "LOCATION_NAME": "BriefCounsel-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 139021692,
      "LOCATION_NAME": "CMHS Counselling and Treatment-OL",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 130019049,
      "FACILITY_NAME": "OSMH",
      "BUILDING_CD": 130143102,
      "BUILDING_NAME": "OSMH",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537736207,
      "LOCATION_NAME": "CTO Coordinator",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537731477,
      "LOCATION_NAME": "Clozapine Clinic-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537732487,
      "LOCATION_NAME": "Concurrent Disorders- Case Mgt",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 303960629,
      "LOCATION_NAME": "Crisis Support Program",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 64594646,
      "LOCATION_NAME": "DED Outreach MH-WI",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 72440,
      "FACILITY_NAME": "GBHS-WI",
      "BUILDING_CD": 348963,
      "BUILDING_NAME": "GBHS-WI",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 38738719,
      "LOCATION_NAME": "Dual Diagnosis - OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537736353,
      "LOCATION_NAME": "ECT Clinic",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537732953,
      "LOCATION_NAME": "Esketamine Clinic",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537736801,
      "LOCATION_NAME": "Geriatric - Case Mgt",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537738043,
      "LOCATION_NAME": "Hanover - Case Mgt",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537738245,
      "LOCATION_NAME": "Injection Clinic",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 129068066,
      "LOCATION_NAME": "MH Brief Counselling-NB Team",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 99063022,
      "LOCATION_NAME": "MH NP-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537741643,
      "LOCATION_NAME": "Meaford - Case Mgt",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 350756,
      "LOCATION_NAME": "Mental H-WI",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 72440,
      "FACILITY_NAME": "GBHS-WI",
      "BUILDING_CD": 348963,
      "BUILDING_NAME": "GBHS-WI",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 12983,
      "LOCATION_NAME": "OP Psych-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537738977,
      "LOCATION_NAME": "Outpatient Addiction Treatment",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537739097,
      "LOCATION_NAME": "Owen Sound - Case Mgt",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 21698173,
      "LOCATION_NAME": "PEPP-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 137675482,
      "LOCATION_NAME": "RAAM Clinic-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 12911,
      "LOCATION_NAME": "SACC-OS",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537742141,
      "LOCATION_NAME": "Supportive Treatment Services",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537739865,
      "LOCATION_NAME": "Walk In Clinic - MHA",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    },
    {
      "LOCATION_CD": 537742757,
      "LOCATION_NAME": "Wiarton - Case Mgt",
      "LOCATION_MEANING": "AMBULATORY",
      "FACILITY_CD": 11449,
      "FACILITY_NAME": "GBHS-OS",
      "BUILDING_CD": 12013,
      "BUILDING_NAME": "GBHS-OS",
      "IS_MHA_CONFIGURED": 0
    }
  ]
};

// src/app/mocks/examples/run-manager.mock.ts
var RUN_MANAGER_TEST_MOCK = {
  executed: 1,
  commit_mode: 0,
  status: "SUCCESS",
  message: "Manager execution completed (TEST MODE - no changes committed)",
  start_dt_tm: Date.now(),
  start_dt_tm_formatted: (/* @__PURE__ */ new Date()).toISOString(),
  stop_dt_tm: Date.now() + 5e3,
  stop_dt_tm_formatted: new Date(Date.now() + 5e3).toISOString(),
  duration_seconds: 5,
  summary: {
    total_candidates: 12,
    new_clients: 3,
    update_clients: 2,
    unchanged_clients: 7,
    episodes_created: 5,
    services_created: 15,
    appointments_created: 8
  },
  log_id: 999001,
  error_message: ""
};
var RUN_MANAGER_COMMIT_MOCK = {
  executed: 1,
  commit_mode: 1,
  status: "SUCCESS",
  message: "Manager execution completed - changes committed to database",
  start_dt_tm: Date.now(),
  start_dt_tm_formatted: (/* @__PURE__ */ new Date()).toISOString(),
  stop_dt_tm: Date.now() + 8e3,
  stop_dt_tm_formatted: new Date(Date.now() + 8e3).toISOString(),
  duration_seconds: 8,
  summary: {
    total_candidates: 12,
    new_clients: 3,
    update_clients: 2,
    unchanged_clients: 7,
    episodes_created: 5,
    services_created: 15,
    appointments_created: 8
  },
  log_id: 999002,
  error_message: ""
};

// src/app/mocks/examples/recent-manager-runs.mock.ts
var MOCK_RECENT_MANAGER_RUNS = {
  TOTAL_COUNT: 45,
  RUN_CNT: 10,
  RUNS: [
    {
      LOG_ID: 34250,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T14:00:00")).toISOString(),
      START_FORMATTED: "21-Jan-2026 14:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T14:02:35")).toISOString(),
      STOP_FORMATTED: "21-Jan-2026 14:02:35",
      DURATION_SECONDS: 155,
      STATUS: "SUCCESS",
      SUMMARY: "Processed 45 candidates, 12 episodes created, 38 services",
      RECORD_CNT: 50,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34249,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T13:00:00")).toISOString(),
      START_FORMATTED: "21-Jan-2026 13:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T13:01:12")).toISOString(),
      STOP_FORMATTED: "21-Jan-2026 13:01:12",
      DURATION_SECONDS: 72,
      STATUS: "SUCCESS",
      SUMMARY: "Processed 8 candidates, 2 episodes created, 6 services",
      RECORD_CNT: 8,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34248,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T12:00:00")).toISOString(),
      START_FORMATTED: "21-Jan-2026 12:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T12:00:45")).toISOString(),
      STOP_FORMATTED: "21-Jan-2026 12:00:45",
      DURATION_SECONDS: 45,
      STATUS: "SUCCESS",
      SUMMARY: "No new candidates found",
      RECORD_CNT: 0,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34247,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T11:00:00")).toISOString(),
      START_FORMATTED: "21-Jan-2026 11:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T11:03:22")).toISOString(),
      STOP_FORMATTED: "21-Jan-2026 11:03:22",
      DURATION_SECONDS: 202,
      STATUS: "ERROR",
      SUMMARY: "Failed to connect to database - connection timeout",
      RECORD_CNT: 0,
      ERROR_CNT: 3
    },
    {
      LOG_ID: 34246,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T10:00:00")).toISOString(),
      START_FORMATTED: "21-Jan-2026 10:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T10:01:58")).toISOString(),
      STOP_FORMATTED: "21-Jan-2026 10:01:58",
      DURATION_SECONDS: 118,
      STATUS: "SUCCESS",
      SUMMARY: "Processed 22 candidates, 5 episodes created, 18 services",
      RECORD_CNT: 23,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34245,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T09:00:00")).toISOString(),
      START_FORMATTED: "21-Jan-2026 09:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T09:02:05")).toISOString(),
      STOP_FORMATTED: "21-Jan-2026 09:02:05",
      DURATION_SECONDS: 125,
      STATUS: "SUCCESS",
      SUMMARY: "Processed 31 candidates, 8 episodes created, 24 services",
      RECORD_CNT: 32,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34244,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-21T08:00:00")).toISOString(),
      START_FORMATTED: "21-Jan-2026 08:00:00",
      STOP_DT_TM: "",
      STOP_FORMATTED: "",
      DURATION_SECONDS: 0,
      STATUS: "IN_PROGRESS",
      SUMMARY: "Currently processing candidates...",
      RECORD_CNT: 15,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34243,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-20T23:00:00")).toISOString(),
      START_FORMATTED: "20-Jan-2026 23:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-20T23:01:33")).toISOString(),
      STOP_FORMATTED: "20-Jan-2026 23:01:33",
      DURATION_SECONDS: 93,
      STATUS: "SUCCESS",
      SUMMARY: "Processed 14 candidates, 3 episodes created, 11 services",
      RECORD_CNT: 14,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34242,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-20T22:00:00")).toISOString(),
      START_FORMATTED: "20-Jan-2026 22:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-20T22:00:38")).toISOString(),
      STOP_FORMATTED: "20-Jan-2026 22:00:38",
      DURATION_SECONDS: 38,
      STATUS: "SUCCESS",
      SUMMARY: "No new candidates found",
      RECORD_CNT: 0,
      ERROR_CNT: 0
    },
    {
      LOG_ID: 34241,
      START_DT_TM: (/* @__PURE__ */ new Date("2026-01-20T21:00:00")).toISOString(),
      START_FORMATTED: "20-Jan-2026 21:00:00",
      STOP_DT_TM: (/* @__PURE__ */ new Date("2026-01-20T21:02:15")).toISOString(),
      STOP_FORMATTED: "20-Jan-2026 21:02:15",
      DURATION_SECONDS: 135,
      STATUS: "SUCCESS",
      SUMMARY: "Processed 28 candidates, 6 episodes created, 22 services",
      RECORD_CNT: 28,
      ERROR_CNT: 0
    }
  ]
};

// src/app/mocks/examples/mappings.mock.ts
var MOCK_GET_MAPPINGS_RESPONSE = {
  mapping_cnt: 29,
  mappings: [
    {
      mha_pds_field_name: "DE01.005",
      mha_pds_field_type: "coded",
      mha_pds_rdb_table_name: "",
      mha_pds_selection_type: "single",
      mha_pds_code_set: "CT-029",
      description: "Date of Birth Estimated Flag",
      observation_code: {
        code: "",
        label: "",
        code_system: ""
      },
      value_metadata: {
        code_system: "",
        value_set_url: ""
      },
      pairs_cnt: 1,
      pairs: [
        {
          type: "DOB_ESTIMATED_FLAG",
          key_ref: "true",
          key_ref_type: "LITERAL",
          pds_value: "TRUE",
          pds_value_type: "MHA_PDS_CODE",
          display: "True",
          active_ind: 1
        }
      ]
    },
    {
      mha_pds_field_name: "DE04.007",
      mha_pds_field_type: "SDOH",
      mha_pds_rdb_table_name: "client_sdoh",
      mha_pds_selection_type: "single",
      mha_pds_code_set: "CT-011",
      description: "Gender Identity",
      observation_code: {
        code: "76691-5",
        label: "Gender identity",
        code_system: "http://loinc.org"
      },
      value_metadata: {
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      pairs_cnt: 10,
      pairs: [
        {
          type: "GENDER_IDENTITY_CODE",
          key_ref: "Woman",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "female",
          pds_value_type: "MHA_PDS_CODE",
          display: "Female",
          active_ind: 1
        },
        {
          type: "GENDER_IDENTITY_CODE",
          key_ref: "Man",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "male",
          pds_value_type: "MHA_PDS_CODE",
          display: "Male",
          active_ind: 1
        },
        {
          type: "GENDER_IDENTITY_CODE",
          key_ref: "Non-binary",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "non-binary",
          pds_value_type: "MHA_PDS_CODE",
          display: "Gender Non-binary",
          active_ind: 1
        },
        {
          type: "GENDER_IDENTITY_CODE",
          key_ref: "Trans woman",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "transgender-female",
          pds_value_type: "MHA_PDS_CODE",
          display: "Trans Female",
          active_ind: 1
        },
        {
          type: "GENDER_IDENTITY_CODE",
          key_ref: "Trans man",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "transgender-male",
          pds_value_type: "MHA_PDS_CODE",
          display: "Trans Male",
          active_ind: 1
        }
      ]
    },
    {
      mha_pds_field_name: "DE04.008",
      mha_pds_field_type: "SDOH",
      mha_pds_rdb_table_name: "client_sdoh",
      mha_pds_selection_type: "single",
      mha_pds_code_set: "CT-027",
      description: "Sexual Orientation",
      observation_code: {
        code: "76690-7",
        label: "Sexual orientation",
        code_system: "http://loinc.org"
      },
      value_metadata: {
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-sexual-orientation"
      },
      pairs_cnt: 14,
      pairs: [
        {
          type: "SEXUAL_ORIENTATION_CODE",
          key_ref: "Heterosexual or straight",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "straight-or-heterosexual",
          pds_value_type: "MHA_PDS_CODE",
          display: "Straight or Heterosexual",
          active_ind: 1
        },
        {
          type: "SEXUAL_ORIENTATION_CODE",
          key_ref: "Gay",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "gay",
          pds_value_type: "MHA_PDS_CODE",
          display: "Gay",
          active_ind: 1
        },
        {
          type: "SEXUAL_ORIENTATION_CODE",
          key_ref: "Lesbian",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "lesbian",
          pds_value_type: "MHA_PDS_CODE",
          display: "Lesbian",
          active_ind: 1
        },
        {
          type: "SEXUAL_ORIENTATION_CODE",
          key_ref: "Bisexual",
          key_ref_type: "ALPHA_RESPONSE_DISPLAY",
          pds_value: "bisexual",
          pds_value_type: "MHA_PDS_CODE",
          display: "Bisexual",
          active_ind: 1
        }
      ]
    },
    {
      mha_pds_field_name: "DE03.003",
      mha_pds_field_type: "coded",
      mha_pds_rdb_table_name: "",
      mha_pds_selection_type: "single",
      mha_pds_code_set: "CT-019",
      description: "Province",
      observation_code: {
        code: "",
        label: "",
        code_system: ""
      },
      value_metadata: {
        code_system: "",
        value_set_url: ""
      },
      pairs_cnt: 13,
      pairs: [
        {
          type: "PROVINCE_CODE",
          key_ref: "Ontario",
          key_ref_type: "CODE_VALUE_DISPLAY",
          pds_value: "ON",
          pds_value_type: "MHA_PDS_CODE",
          display: "Ontario",
          active_ind: 1
        },
        {
          type: "PROVINCE_CODE",
          key_ref: "Quebec",
          key_ref_type: "CODE_VALUE_DISPLAY",
          pds_value: "QC",
          pds_value_type: "MHA_PDS_CODE",
          display: "Quebec",
          active_ind: 1
        }
      ]
    }
  ],
  code_tables_cnt: 32,
  code_tables: [
    { code_table_id: "CT-001", code_table_name: "ADDRESS USE", mapping_cnt: 4 },
    { code_table_id: "CT-006", code_table_name: "BORN IN CANADA", mapping_cnt: 4 },
    { code_table_id: "CT-009", code_table_name: "EPISODE OF CARE STATUS", mapping_cnt: 9 },
    { code_table_id: "CT-011", code_table_name: "GENDER IDENTITY", mapping_cnt: 10 },
    { code_table_id: "CT-012", code_table_name: "HEALTH CARD PROVINCE", mapping_cnt: 13 },
    { code_table_id: "CT-017", code_table_name: "LANGUAGE", mapping_cnt: 185 },
    { code_table_id: "CT-018", code_table_name: "OFFICIAL LANGUAGES", mapping_cnt: 3 },
    { code_table_id: "CT-019", code_table_name: "PROVINCE", mapping_cnt: 13 },
    { code_table_id: "CT-024", code_table_name: "SERVICE MODALITY", mapping_cnt: 4 },
    { code_table_id: "CT-027", code_table_name: "SEXUAL ORIENTATION", mapping_cnt: 14 },
    { code_table_id: "CT-028", code_table_name: "TOTAL HOUSEHOLD INCOME", mapping_cnt: 9 },
    { code_table_id: "CT-030", code_table_name: "ENCOUNTER STATUS", mapping_cnt: 8 }
  ],
  code_table_mappings_cnt: 578,
  code_table_mappings: [
    {
      code_table_id: "CT-011",
      code: "female",
      label: "Female",
      description: "Identifies as female gender",
      code_system: "http://snomed.info/sct",
      value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
    },
    {
      code_table_id: "CT-011",
      code: "male",
      label: "Male",
      description: "Identifies as male gender",
      code_system: "http://snomed.info/sct",
      value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
    },
    {
      code_table_id: "CT-011",
      code: "non-binary",
      label: "Gender Non-binary",
      description: "Non-binary gender identity",
      code_system: "http://snomed.info/sct",
      value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
    }
  ]
};
var MOCK_GET_MAPPING_BY_FIELD_RESPONSE = {
  found_ind: 1,
  field_code: "DE04.007",
  mapping: {
    mha_pds_field_name: "DE04.007",
    mha_pds_field_type: "SDOH",
    mha_pds_rdb_table_name: "client_sdoh",
    mha_pds_selection_type: "single",
    mha_pds_code_set: "CT-011",
    description: "Gender Identity",
    observation_code: {
      code: "76691-5",
      label: "Gender identity",
      code_system: "http://loinc.org"
    },
    value_metadata: {
      code_system: "http://snomed.info/sct",
      value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
    },
    pairs_cnt: 10,
    pairs: [
      {
        type: "GENDER_IDENTITY_CODE",
        key_ref: "Woman",
        key_ref_type: "ALPHA_RESPONSE_DISPLAY",
        pds_value: "female",
        pds_value_type: "MHA_PDS_CODE",
        display: "Female",
        active_ind: 1
      },
      {
        type: "GENDER_IDENTITY_CODE",
        key_ref: "Man",
        key_ref_type: "ALPHA_RESPONSE_DISPLAY",
        pds_value: "male",
        pds_value_type: "MHA_PDS_CODE",
        display: "Male",
        active_ind: 1
      },
      {
        type: "GENDER_IDENTITY_CODE",
        key_ref: "Non-binary",
        key_ref_type: "ALPHA_RESPONSE_DISPLAY",
        pds_value: "non-binary",
        pds_value_type: "MHA_PDS_CODE",
        display: "Gender Non-binary",
        active_ind: 1
      },
      {
        type: "GENDER_IDENTITY_CODE",
        key_ref: "Trans woman",
        key_ref_type: "ALPHA_RESPONSE_DISPLAY",
        pds_value: "transgender-female",
        pds_value_type: "MHA_PDS_CODE",
        display: "Trans Female",
        active_ind: 1
      },
      {
        type: "GENDER_IDENTITY_CODE",
        key_ref: "Trans man",
        key_ref_type: "ALPHA_RESPONSE_DISPLAY",
        pds_value: "transgender-male",
        pds_value_type: "MHA_PDS_CODE",
        display: "Trans Male",
        active_ind: 1
      }
    ]
  },
  code_table: {
    code_table_id: "CT-011",
    code_table_name: "GENDER IDENTITY",
    codes_cnt: 10,
    codes: [
      {
        code: "female",
        label: "Female",
        description: "Identifies as female gender",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      {
        code: "male",
        label: "Male",
        description: "Identifies as male gender",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      {
        code: "non-binary",
        label: "Gender Non-binary",
        description: "Non-binary gender identity",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      {
        code: "transgender-female",
        label: "Trans Female",
        description: "Transgender female",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      {
        code: "transgender-male",
        label: "Trans Male",
        description: "Transgender male",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      {
        code: "OTH",
        label: "Other",
        description: "Other gender identity",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      {
        code: "UNK",
        label: "Unknown",
        description: "Unknown gender identity",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      },
      {
        code: "asked-declined",
        label: "Asked But Declined",
        description: "Asked but declined to answer",
        code_system: "http://snomed.info/sct",
        value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity"
      }
    ]
  },
  error_message: ""
};
var MOCK_GET_MAPPING_BY_FIELD_NOT_FOUND_RESPONSE = {
  found_ind: 0,
  field_code: "DE99.999",
  mapping: {
    mha_pds_field_name: "",
    mha_pds_field_type: "",
    mha_pds_rdb_table_name: "",
    mha_pds_selection_type: "",
    mha_pds_code_set: "",
    description: "",
    observation_code: {
      code: "",
      label: "",
      code_system: ""
    },
    value_metadata: {
      code_system: "",
      value_set_url: ""
    },
    pairs_cnt: 0,
    pairs: []
  },
  code_table: {
    code_table_id: "",
    code_table_name: "",
    codes_cnt: 0,
    codes: []
  },
  error_message: "No mapping found for field: DE99.999"
};
var MOCK_TEST_VALUE_MAPPING_RESPONSE = {
  found_ind: 1,
  input: {
    field_code: "DE04.007",
    source_value: "Woman",
    source_type: "CODE_VALUE_DISPLAY"
  },
  result: {
    code: "female",
    label: "Female",
    code_system: "http://snomed.info/sct",
    value_set_url: "http://ontariohealth.ca/fhir/ValueSet/ca-on-mha-gender-identity",
    code_value_source: "FIELD_MAPPING_PAIRS"
  },
  observation_code: {
    code: "76691-5",
    label: "Gender identity",
    code_system: "http://loinc.org"
  },
  mapping_used: {
    mapping_index: 7,
    pair_index: 1,
    code_table_id: "CT-011"
  },
  error_message: ""
};
var MOCK_TEST_VALUE_MAPPING_NOT_FOUND_RESPONSE = {
  found_ind: 0,
  input: {
    field_code: "DE04.007",
    source_value: "Unknown Value",
    source_type: "CODE_VALUE_DISPLAY"
  },
  result: {
    code: "",
    label: "",
    code_system: "",
    value_set_url: "",
    code_value_source: ""
  },
  observation_code: {
    code: "",
    label: "",
    code_system: ""
  },
  mapping_used: {
    mapping_index: 0,
    pair_index: 0,
    code_table_id: ""
  },
  error_message: "No mapping found for value: Unknown Value"
};

// src/app/mocks/examples/trigger-mirth-pull.mock.ts
var TRIGGER_MIRTH_PULL_MOCK = {
  status: "S",
  message: "Mirth channel triggered successfully (HTTP 200)",
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  mirth_status_code: 200,
  mirth_response: '{"messageId":"12345","status":"RECEIVED"}',
  api_url: "https://mirth-server:8443/api/channels/b397b5cb-c91c-47c2-af3a-438acfef6d8a/messages",
  triggered_by: "Mock Offline Mode"
};
var TRIGGER_MIRTH_PULL_CONFIG_ERROR_MOCK = {
  status: "F",
  message: "Configuration not loaded",
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  mirth_status_code: 0,
  mirth_response: "",
  api_url: "",
  triggered_by: ""
};
var TRIGGER_MIRTH_PULL_INCOMPLETE_CONFIG_MOCK = {
  status: "F",
  message: "Mirth API configuration incomplete",
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  mirth_status_code: 0,
  mirth_response: "",
  api_url: "",
  triggered_by: ""
};
var TRIGGER_MIRTH_PULL_NETWORK_ERROR_MOCK = {
  status: "F",
  message: "HTTP call failed - no response received (check network/firewall)",
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  mirth_status_code: 0,
  mirth_response: "",
  api_url: "https://mirth-server:8443/api/channels/b397b5cb-c91c-47c2-af3a-438acfef6d8a/messages",
  triggered_by: "Mock Offline Mode"
};
var TRIGGER_MIRTH_PULL_AUTH_ERROR_MOCK = {
  status: "F",
  message: "Mirth API returned error (HTTP 401)",
  timestamp: (/* @__PURE__ */ new Date()).toISOString(),
  mirth_status_code: 401,
  mirth_response: '{"error":"Unauthorized","message":"Invalid credentials"}',
  api_url: "https://mirth-server:8443/api/channels/b397b5cb-c91c-47c2-af3a-438acfef6d8a/messages",
  triggered_by: "Mock Offline Mode"
};

// src/app/mocks/examples/add-patient.mock.ts
var MOCK_ADD_PATIENT_SUCCESS = {
  status: "SUCCESS",
  message: "Patient processed successfully. FIN: 12345678, ENCNTR_ID: 987654321, PERSON_ID: 123456789",
  fin_nbr: "12345678",
  encntr_id: 987654321,
  person_id: 123456789,
  commit_mode: 1,
  manager_executed: 1,
  start_dt_tm: Date.now(),
  start_dt_tm_formatted: (/* @__PURE__ */ new Date()).toISOString(),
  stop_dt_tm: Date.now() + 3e3,
  stop_dt_tm_formatted: new Date(Date.now() + 3e3).toISOString(),
  duration_seconds: 3
};
var MOCK_ADD_PATIENT_TEST_MODE = {
  status: "SUCCESS",
  message: "Patient processed successfully. FIN: 12345678, ENCNTR_ID: 987654321, PERSON_ID: 123456789",
  fin_nbr: "12345678",
  encntr_id: 987654321,
  person_id: 123456789,
  commit_mode: 0,
  manager_executed: 1,
  start_dt_tm: Date.now(),
  start_dt_tm_formatted: (/* @__PURE__ */ new Date()).toISOString(),
  stop_dt_tm: Date.now() + 3e3,
  stop_dt_tm_formatted: new Date(Date.now() + 3e3).toISOString(),
  duration_seconds: 3
};
var MOCK_ADD_PATIENT_NOT_FOUND = {
  status: "ERROR",
  message: "No encounter found for FIN: 99999999",
  fin_nbr: "99999999",
  encntr_id: 0,
  person_id: 0,
  commit_mode: 0,
  manager_executed: 0,
  start_dt_tm: 0,
  start_dt_tm_formatted: "",
  stop_dt_tm: 0,
  stop_dt_tm_formatted: "",
  duration_seconds: 0
};
var MOCK_ADD_PATIENT_MISSING_FIN = {
  status: "ERROR",
  message: "FIN NBR is required",
  fin_nbr: "",
  encntr_id: 0,
  person_id: 0,
  commit_mode: 0,
  manager_executed: 0,
  start_dt_tm: 0,
  start_dt_tm_formatted: "",
  stop_dt_tm: 0,
  stop_dt_tm_formatted: "",
  duration_seconds: 0
};

// src/app/mocks/index.ts
var MOCK_REGISTRY = {
  // Primary mocks (by requestType)
  //'getMHAPDSConfiguration': MHA_PDS_CONFIGURATION_MOCK, //pull from file
  "getManagerOpsDate": MANAGER_OPS_DATE_MOCK,
  "getEpisodeData": EPISODE_DATA_MOCK,
  "saveMHAPDSConfiguration": SAVE_MHA_PDS_CONFIGURATION_MOCK,
  "getLogs": MOCK_LOGS_RESPONSE,
  "getLogDetail": MOCK_LOG_DETAIL_RESPONSE,
  "getLogText": MOCK_LOG_TEXT_RESPONSE,
  "getPatients": MOCK_PATIENTS_RESPONSE,
  "getPatientDetail": MOCK_PATIENT_DETAIL_RESPONSE,
  "getAvailableLocations": MOCK_AVAILABLE_LOCATIONS_RESPONSE,
  "runManager": RUN_MANAGER_TEST_MOCK,
  "getRecentManagerRuns": MOCK_RECENT_MANAGER_RUNS,
  "getMappings": MOCK_GET_MAPPINGS_RESPONSE,
  "getMappingByField": MOCK_GET_MAPPING_BY_FIELD_RESPONSE,
  "testValueMapping": MOCK_TEST_VALUE_MAPPING_RESPONSE,
  "triggerMirthPull": TRIGGER_MIRTH_PULL_MOCK,
  "addPatientByFIN": MOCK_ADD_PATIENT_SUCCESS,
  // Variant mocks (error scenarios)
  "getMHAPDSConfiguration-error": MHA_PDS_CONFIGURATION_ERROR_MOCK,
  "getEpisodeData-empty": EPISODE_DATA_EMPTY_MOCK,
  "saveMHAPDSConfiguration-error": SAVE_MHA_PDS_CONFIGURATION_ERROR_MOCK,
  "saveMHAPDSConfiguration-validation-error": SAVE_MHA_PDS_CONFIGURATION_VALIDATION_ERROR_MOCK,
  "getLogDetail-not-found": MOCK_LOG_DETAIL_NOT_FOUND,
  "getLogText-not-found": MOCK_LOG_TEXT_NOT_FOUND,
  "getProgramLog": MOCK_PROGRAM_LOG_RESPONSE,
  "getProgramLog-not-found": MOCK_PROGRAM_LOG_NOT_FOUND,
  "getPatientDetail-incomplete-sdoh": MOCK_PATIENT_DETAIL_INCOMPLETE_SDOH,
  "getPatientDetail-not-found": MOCK_PATIENT_NOT_FOUND,
  "getMappingByField-not-found": MOCK_GET_MAPPING_BY_FIELD_NOT_FOUND_RESPONSE,
  "testValueMapping-not-found": MOCK_TEST_VALUE_MAPPING_NOT_FOUND_RESPONSE,
  // addPatientByFIN variants
  "addPatientByFIN-test-mode": MOCK_ADD_PATIENT_TEST_MODE,
  "addPatientByFIN-not-found": MOCK_ADD_PATIENT_NOT_FOUND,
  "addPatientByFIN-missing-fin": MOCK_ADD_PATIENT_MISSING_FIN,
  // Script-specific mocks (if needed for different scripts)
  //'gbin_mha_pds_service-getMHAPDSConfiguration': MHA_PDS_CONFIGURATION_MOCK, //pull from file
  "gbin_mha_pds_service-getManagerOpsDate": MANAGER_OPS_DATE_MOCK,
  "gbin_mha_pds_service-saveMHAPDSConfiguration": SAVE_MHA_PDS_CONFIGURATION_MOCK,
  "gbin_mha_pds_service-getLogs": MOCK_LOGS_RESPONSE,
  "gbin_mha_pds_service-getLogDetail": MOCK_LOG_DETAIL_RESPONSE,
  "gbin_mha_pds_service-getLogText": MOCK_LOG_TEXT_RESPONSE,
  "gbin_mha_pds_service-getProgramLog": MOCK_PROGRAM_LOG_RESPONSE,
  "gbin_mha_pds_service-getPatients": MOCK_PATIENTS_RESPONSE,
  "gbin_mha_pds_service-getPatientDetail": MOCK_PATIENT_DETAIL_RESPONSE,
  "gbin_mha_pds_service-getAvailableLocations": MOCK_AVAILABLE_LOCATIONS_RESPONSE,
  "gbin_mha_pds_service-runManager": RUN_MANAGER_TEST_MOCK,
  "gbin_mha_pds_service-getRecentManagerRuns": MOCK_RECENT_MANAGER_RUNS,
  "gbin_mha_pds_service-getMappings": MOCK_GET_MAPPINGS_RESPONSE,
  "gbin_mha_pds_service-getMappingByField": MOCK_GET_MAPPING_BY_FIELD_RESPONSE,
  "gbin_mha_pds_service-testValueMapping": MOCK_TEST_VALUE_MAPPING_RESPONSE,
  "gbin_mha_pds_service-triggerMirthPull": TRIGGER_MIRTH_PULL_MOCK,
  "gbin_mha_pds_service-addPatientByFIN": MOCK_ADD_PATIENT_SUCCESS,
  // triggerMirthPull variants
  "triggerMirthPull-config-error": TRIGGER_MIRTH_PULL_CONFIG_ERROR_MOCK,
  "triggerMirthPull-incomplete-config": TRIGGER_MIRTH_PULL_INCOMPLETE_CONFIG_MOCK,
  "triggerMirthPull-network-error": TRIGGER_MIRTH_PULL_NETWORK_ERROR_MOCK,
  "triggerMirthPull-auth-error": TRIGGER_MIRTH_PULL_AUTH_ERROR_MOCK
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
