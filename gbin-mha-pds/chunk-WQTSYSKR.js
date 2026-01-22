import {
  MermaidDiagramComponent
} from "./chunk-AUP2RJML.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-UUZPJP4Q.js";
import "./chunk-I7D2VZMI.js";

// src/app/reference/reference.ts
var ReferenceComponent = class _ReferenceComponent {
  /**
   * Mermaid ERD diagram definition for MHA PDS tables.
   * Source: scripts/ccl/gbin_mha_pds_create_tables/MHA_PDS_TABLES_ERD.md
   */
  erdDiagram = `erDiagram
    %% ============================================
    %% MHA PDS Tables Entity Relationship Diagram
    %% ============================================

    %% Cerner Standard Tables (External References)
    PERSON {
        f8 person_id PK
        vc name_full_formatted
        dq8 birth_dt_tm
    }

    ENCOUNTER {
        f8 encntr_id PK
        f8 person_id FK
        dq8 reg_dt_tm
        dq8 disch_dt_tm
    }

    LONG_TEXT {
        f8 long_text_id PK
        vc long_text
    }

    SCH_EVENT {
        f8 sch_event_id PK
        f8 person_id FK
    }

    SCH_APPT {
        f8 sch_appt_id PK
        f8 sch_event_id FK
    }

    %% MHA PDS Custom Tables

    CUST_GBIN_MHA_PDS_EPISODE {
        f8 mha_pds_episode_id PK "Primary Key"
        f8 person_id FK "Link to PERSON"
        f8 encntr_id FK "Link to ENCOUNTER"
        vc episode_identifier UK "Unique Episode ID"
        vc referral_id "DE05.001"
        dq8 referral_received_dt_tm "DE05.002"
        vc referral_source "DE05.003"
        f8 referral_source_type_cd "DE05.004"
        vc referral_source_type_mapped "DE05.004 Mapped"
        f8 referral_type_cd "DE05.005"
        vc referral_type_mapped "DE05.005 Mapped"
        f8 episode_of_care_status_cd "DE06.002"
        vc episode_of_care_status_mapped "DE06.002 Mapped"
        dq8 first_contact_dt_tm "DE06.003"
        dq8 eligibility_screening_dt_tm "DE06.004"
        dq8 initial_assessment_dt_tm "DE06.005"
        dq8 scheduled_appointment_dt_tm "DE06.006"
        f8 appt_reschedule_reason_cd "DE06.007"
        vc appt_reschedule_reason_mapped "DE06.007 Mapped"
        dq8 service_initiation_dt_tm "DE06.008"
        dq8 service_enrollment_dt_tm "DE06.009"
        dq8 service_termination_dt_tm "DE06.010"
        f8 service_termination_reason_cd "DE06.011"
        vc service_termination_reason "DE06.011 Display"
        vc program_number "DE09.001"
        vc program_name "DE09.002"
        f8 functional_centre_cd "DE09.003"
        vc functional_centre_mapped "Mapped FC Code"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        f8 active_status_cd "Audit"
        dq8 active_status_dt_tm "Audit"
        f8 active_status_prsnl_id "Audit"
        dq8 beg_effective_dt_tm "Audit"
        dq8 end_effective_dt_tm "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_SERVICE {
        f8 mha_pds_service_id PK "Primary Key"
        f8 mha_pds_episode_id FK "Link to EPISODE"
        f8 encntr_id FK "Link to ENCOUNTER"
        f8 person_id FK "Link to PERSON (denorm)"
        vc hsp_organization_number "DE07.001"
        vc moh_organization_id "DE07.002"
        vc hsp_organization_name "DE07.003"
        i2 hsp_organization_active_ind "DE07.004"
        f8 loc_facility_cd "Facility Code"
        vc hsp_site_number "DE08.001"
        vc hsp_site_name "DE08.002"
        vc service_event_id UK "DE10.001"
        f8 service_modality_cd "DE10.002"
        vc service_modality_mapped "DE10.002 Mapped"
        f8 service_modality_type_cd "DE10.003"
        vc service_modality_type_mapped "DE10.003 Mapped"
        dq8 service_event_dt_tm "DE10.004"
        vc group_service_id "DE10.005"
        i4 direct_service_minutes "DE10.006"
        i4 indirect_service_minutes "DE10.007"
        f8 encounter_status_cd "DE10.008"
        vc encounter_status_mapped "DE10.008 Mapped"
        f8 service_provider_id "Provider ID"
        vc service_provider_name "Provider Name"
        f8 service_provider_role_cd "Provider Role"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_APPOINTMENT {
        f8 mha_pds_appointment_id PK "Primary Key"
        f8 mha_pds_episode_id FK "Link to EPISODE"
        f8 encntr_id FK "Link to ENCOUNTER"
        f8 person_id FK "Link to PERSON (denorm)"
        f8 sch_event_id FK "Link to SCH_EVENT"
        f8 sch_appt_id FK "Link to SCH_APPT"
        dq8 appointment_start_dt_tm "DE06.006 Start"
        dq8 appointment_end_dt_tm "DE06.006 End"
        i4 duration_minutes "DE06.006 Duration"
        f8 appointment_status_cd "Status Code"
        vc appointment_status_mapped "FHIR Status"
        f8 appointment_type_cd "Type Code"
        vc appointment_type_display "Type Display"
        f8 appointment_location_cd "Location Code"
        vc appointment_location_display "Location Display"
        f8 cancellation_reason_cd "DE06.007 Code"
        vc cancellation_reason_mapped "DE06.007 Mapped"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_CLIENT {
        f8 mha_pds_client_id PK "Primary Key"
        f8 mha_pds_episode_id FK "Link to EPISODE (1:1)"
        f8 person_id FK "Link to PERSON"
        dq8 extracted_dt_tm "When extracted"
        vc extraction_source "Script that extracted"
        vc first_name "DE01.001"
        vc middle_name "DE01.002"
        vc last_name "DE01.003"
        dq8 date_of_birth "DE01.004"
        vc date_of_birth_text "DE01.004 Display"
        f8 estimated_dob_flag_cd "DE01.005 Code"
        vc estimated_dob_flag "DE01.005"
        vc client_active_flag "Active Flag"
        vc client_identifier_mrn "DE02.001"
        vc vendor_issuing_id "DE02.002"
        vc health_card_number "DE02.003"
        f8 identifier_type_cd "DE02.004 Code"
        vc identifier_type "DE02.004"
        f8 hcn_issuing_auth_cd "DE02.005 Code"
        vc hcn_issuing_authority "DE02.005"
        f8 address_use_cd "DE03.001 Code"
        vc address_use "DE03.001"
        vc city "DE03.002"
        f8 province_cd "DE03.003 Code"
        vc province "DE03.003"
        vc postal_code "DE03.004"
        dq8 sdoh_effective_date "DE04 Effective Date"
        f8 first_language_cd "DE04.001 Code"
        vc first_language "DE04.001"
        f8 service_language_cd "DE04.002 Code"
        vc service_language "DE04.002"
        f8 official_language_cd "DE04.003 Code"
        vc official_language "DE04.003"
        f8 gender_identity_cd "DE04.007 Code"
        vc gender_identity "DE04.007"
        f8 sexual_orientation_cd "DE04.008 Code"
        vc sexual_orientation "DE04.008"
        vc year_arrived_canada "DE04.011"
        f8 born_in_canada_cd "DE04.012 Code"
        vc born_in_canada "DE04.012"
        f8 citizenship_status_cd "DE04.012 Code"
        vc citizenship_status "DE04.012"
        f8 education_level_cd "DE04.013 Code"
        vc education_level "DE04.013"
        f8 employment_status_cd "DE04.014 Code"
        vc employment_status "DE04.014"
        f8 income_source_cd "DE04.015 Code"
        vc income_source "DE04.015"
        f8 household_income_cd "DE04.018 Code"
        vc household_income "DE04.018"
        i4 household_members "DE04.019"
        f8 ethnicity_cd "Ethnicity Code"
        vc ethnicity "Ethnicity"
        f8 religion_cd "Religion Code"
        vc religion "Religion"
        f8 marital_status_cd "Marital Code"
        vc marital_status "Marital Status"
        f8 housing_status_cd "DE04.017 Code"
        vc housing_status "DE04.017"
        f8 legal_status_cd "DE04.020 Code"
        vc legal_status "DE04.020"
        f8 pre_existing_cond_cd "Pre-Existing Code"
        vc pre_existing_condition "Pre-Existing"
        i2 sdoh_complete_ind "Completeness Flag"
        vc sdoh_missing_fields "Missing Fields"
        i2 data_modified_ind "Correction Flag"
        vc data_modified_reason "Correction Reason"
        dq8 data_modified_dt_tm "Correction Date"
        f8 data_modified_prsnl_id "Corrected By"
        vc submission_status "PENDING-SUBMITTED-ERROR"
        dq8 submission_dt_tm "Last submission"
        vc submission_batch_id "Batch ID"
        vc submission_response_id "Response ID"
        vc error_message "Error details"
        i4 retry_count "Retry attempts"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    CUST_GBIN_MHA_PDS_LOG {
        f8 mha_pds_log_id PK "Primary Key"
        vc log_type "MANAGER-DATA_EXTRACTION-TRANSMISSION"
        vc title "Brief Description"
        vc summary "255 char summary"
        vc related_script "Script Name"
        vc function_name "Function Name"
        dq8 start_dt_tm "Start Time"
        dq8 stop_dt_tm "Stop Time"
        vc status "IN_PROGRESS-SUCCESS-FAILED-ERROR-PARTIAL"
        f8 person_id FK "Optional Person Link"
        f8 encntr_id FK "Optional Encounter Link"
        f8 episode_id FK "Optional Episode Link"
        f8 service_id FK "Optional Service Link"
        vc batch_id "Batch Identifier"
        f8 long_text_id FK "JSON Request Storage"
        i4 record_cnt "Records Processed"
        i4 error_cnt "Error Count"
        vc error_message "Error Details"
        f8 parent_log_id FK "Hierarchical Logging"
        i2 active_ind "Audit"
        dq8 create_dt_tm "Audit"
        f8 create_prsnl_id "Audit"
        dq8 updt_dt_tm "Audit"
        f8 updt_prsnl_id "Audit"
        i4 updt_cnt "Audit"
    }

    %% Relationships
    PERSON ||--o{ CUST_GBIN_MHA_PDS_EPISODE : "has episodes"
    ENCOUNTER ||--o{ CUST_GBIN_MHA_PDS_EPISODE : "has episodes"

    CUST_GBIN_MHA_PDS_EPISODE ||--|| CUST_GBIN_MHA_PDS_CLIENT : "has client data (1:1)"
    CUST_GBIN_MHA_PDS_EPISODE ||--o{ CUST_GBIN_MHA_PDS_SERVICE : "contains services"
    CUST_GBIN_MHA_PDS_EPISODE ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "has appointments"

    PERSON ||--o{ CUST_GBIN_MHA_PDS_CLIENT : "has client snapshots"
    PERSON ||--o{ CUST_GBIN_MHA_PDS_SERVICE : "has services (denorm)"
    PERSON ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "has appointments (denorm)"
    ENCOUNTER ||--o{ CUST_GBIN_MHA_PDS_SERVICE : "has services"
    ENCOUNTER ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "has appointments"

    SCH_EVENT ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "scheduled events"
    SCH_APPT ||--o{ CUST_GBIN_MHA_PDS_APPOINTMENT : "appointments"

    CUST_GBIN_MHA_PDS_EPISODE ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"
    CUST_GBIN_MHA_PDS_SERVICE ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"
    CUST_GBIN_MHA_PDS_CLIENT ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"
    CUST_GBIN_MHA_PDS_APPOINTMENT ||--o{ CUST_GBIN_MHA_PDS_LOG : "logged by"

    CUST_GBIN_MHA_PDS_LOG ||--o| LONG_TEXT : "stores JSON"
    CUST_GBIN_MHA_PDS_LOG ||--o{ CUST_GBIN_MHA_PDS_LOG : "parent hierarchy"`;
  static \u0275fac = function ReferenceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReferenceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReferenceComponent, selectors: [["app-reference"]], decls: 94, vars: 1, consts: [[1, "reference-container"], [1, "reference-header"], [1, "subtitle"], [1, "diagram-section"], [1, "table-summary"], [1, "table-card"], [1, "erd-section"], ["diagramId", "mha-pds-erd", 3, "definition"], [1, "relationships-section"], [1, "relationships-table"]], template: function ReferenceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "MHA PDS Database Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Entity Relationship Diagram showing custom tables and Cerner integrations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "section", 3)(7, "h2");
      \u0275\u0275text(8, "Database Tables Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "h3");
      \u0275\u0275text(12, "CUST_GBIN_MHA_PDS_EPISODE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Episode of care information (DE05, DE06, DE09) - Referral, episode status, health program");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "h3");
      \u0275\u0275text(17, "CUST_GBIN_MHA_PDS_SERVICE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Health service events (DE07, DE08, DE10) - Organization, site, service modality");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 5)(21, "h3");
      \u0275\u0275text(22, "CUST_GBIN_MHA_PDS_APPOINTMENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p");
      \u0275\u0275text(24, "Scheduled appointments (DE06.006, DE06.007) - Appointment tracking and cancellations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 5)(26, "h3");
      \u0275\u0275text(27, "CUST_GBIN_MHA_PDS_CLIENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Client data snapshots (DE01-DE04) - Demographics, identifiers, address, SDOH");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 5)(31, "h3");
      \u0275\u0275text(32, "CUST_GBIN_MHA_PDS_LOG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "Activity logging - Error tracking, JSON payload storage, hierarchical logs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "section", 6)(36, "h2");
      \u0275\u0275text(37, "Entity Relationship Diagram");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "app-mermaid-diagram", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "section", 8)(40, "h2");
      \u0275\u0275text(41, "Key Relationships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "table", 9)(43, "thead")(44, "tr")(45, "th");
      \u0275\u0275text(46, "Relationship");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48, "Cardinality");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th");
      \u0275\u0275text(50, "Description");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "tbody")(52, "tr")(53, "td");
      \u0275\u0275text(54, "PERSON -> EPISODE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "td");
      \u0275\u0275text(56, "One-to-Many");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "td");
      \u0275\u0275text(58, "A patient can have multiple mental health episodes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "tr")(60, "td");
      \u0275\u0275text(61, "ENCOUNTER -> EPISODE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "td");
      \u0275\u0275text(63, "One-to-One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "td");
      \u0275\u0275text(65, "Each episode typically links to an initial encounter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "tr")(67, "td");
      \u0275\u0275text(68, "EPISODE -> CLIENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td");
      \u0275\u0275text(70, "One-to-One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "td");
      \u0275\u0275text(72, "Each episode has one client data snapshot (DE01-DE04)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "tr")(74, "td");
      \u0275\u0275text(75, "EPISODE -> SERVICE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "td");
      \u0275\u0275text(77, "One-to-Many");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "td");
      \u0275\u0275text(79, "An episode contains multiple service events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "tr")(81, "td");
      \u0275\u0275text(82, "EPISODE -> APPOINTMENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "td");
      \u0275\u0275text(84, "One-to-Many");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "td");
      \u0275\u0275text(86, "An episode can have multiple scheduled appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "tr")(88, "td");
      \u0275\u0275text(89, "LOG -> LONG_TEXT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "td");
      \u0275\u0275text(91, "One-to-One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "td");
      \u0275\u0275text(93, "Full JSON request storage for debugging");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(38);
      \u0275\u0275property("definition", ctx.erdDiagram);
    }
  }, dependencies: [MermaidDiagramComponent], styles: ['\n\n.reference-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.reference-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.reference-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 16px;\n  margin: 0;\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.table-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.table-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n}\n.table-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a5568;\n  margin: 0;\n  line-height: 1.5;\n}\n.erd-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.erd-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.relationships-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.relationships-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.relationships-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.relationships-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.relationships-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f7fafc;\n  font-weight: 600;\n  color: #2d3748;\n}\n.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  font-size: 13px;\n  color: #1a365d;\n}\n.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: #667eea;\n  font-weight: 500;\n}\n.relationships-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.relationships-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f7fafc;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferenceComponent, [{
    type: Component,
    args: [{ selector: "app-reference", standalone: true, imports: [MermaidDiagramComponent], template: `
    <div class="reference-container">
      <header class="reference-header">
        <h1>MHA PDS Database Reference</h1>
        <p class="subtitle">Entity Relationship Diagram showing custom tables and Cerner integrations</p>
      </header>

      <section class="diagram-section">
        <h2>Database Tables Overview</h2>
        <div class="table-summary">
          <div class="table-card">
            <h3>CUST_GBIN_MHA_PDS_EPISODE</h3>
            <p>Episode of care information (DE05, DE06, DE09) - Referral, episode status, health program</p>
          </div>
          <div class="table-card">
            <h3>CUST_GBIN_MHA_PDS_SERVICE</h3>
            <p>Health service events (DE07, DE08, DE10) - Organization, site, service modality</p>
          </div>
          <div class="table-card">
            <h3>CUST_GBIN_MHA_PDS_APPOINTMENT</h3>
            <p>Scheduled appointments (DE06.006, DE06.007) - Appointment tracking and cancellations</p>
          </div>
          <div class="table-card">
            <h3>CUST_GBIN_MHA_PDS_CLIENT</h3>
            <p>Client data snapshots (DE01-DE04) - Demographics, identifiers, address, SDOH</p>
          </div>
          <div class="table-card">
            <h3>CUST_GBIN_MHA_PDS_LOG</h3>
            <p>Activity logging - Error tracking, JSON payload storage, hierarchical logs</p>
          </div>
        </div>
      </section>

      <section class="erd-section">
        <h2>Entity Relationship Diagram</h2>
        <app-mermaid-diagram
          [definition]="erdDiagram"
          diagramId="mha-pds-erd"
        />
      </section>

      <section class="relationships-section">
        <h2>Key Relationships</h2>
        <table class="relationships-table">
          <thead>
            <tr>
              <th>Relationship</th>
              <th>Cardinality</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PERSON -> EPISODE</td>
              <td>One-to-Many</td>
              <td>A patient can have multiple mental health episodes</td>
            </tr>
            <tr>
              <td>ENCOUNTER -> EPISODE</td>
              <td>One-to-One</td>
              <td>Each episode typically links to an initial encounter</td>
            </tr>
            <tr>
              <td>EPISODE -> CLIENT</td>
              <td>One-to-One</td>
              <td>Each episode has one client data snapshot (DE01-DE04)</td>
            </tr>
            <tr>
              <td>EPISODE -> SERVICE</td>
              <td>One-to-Many</td>
              <td>An episode contains multiple service events</td>
            </tr>
            <tr>
              <td>EPISODE -> APPOINTMENT</td>
              <td>One-to-Many</td>
              <td>An episode can have multiple scheduled appointments</td>
            </tr>
            <tr>
              <td>LOG -> LONG_TEXT</td>
              <td>One-to-One</td>
              <td>Full JSON request storage for debugging</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;c026722997f614869f584edc3f404f2a6a20d3478176188e4f74877dfd212378;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/reference/reference.ts */\n.reference-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.reference-header {\n  margin-bottom: 32px;\n}\n.reference-header h1 {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n}\n.subtitle {\n  color: #6c757d;\n  font-size: 16px;\n  margin: 0;\n}\nsection {\n  margin-bottom: 32px;\n}\nsection h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.table-summary {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.table-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.table-card h3 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n}\n.table-card p {\n  font-size: 14px;\n  color: #4a5568;\n  margin: 0;\n  line-height: 1.5;\n}\n.erd-section {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.erd-section h2 {\n  margin-top: 0;\n}\n.relationships-section {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.relationships-section h2 {\n  margin-top: 0;\n}\n.relationships-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.relationships-table th,\n.relationships-table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.relationships-table th {\n  background: #f7fafc;\n  font-weight: 600;\n  color: #2d3748;\n}\n.relationships-table td:first-child {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  font-size: 13px;\n  color: #1a365d;\n}\n.relationships-table td:nth-child(2) {\n  color: #667eea;\n  font-weight: 500;\n}\n.relationships-table tr:last-child td {\n  border-bottom: none;\n}\n.relationships-table tr:hover td {\n  background: #f7fafc;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReferenceComponent, { className: "ReferenceComponent", filePath: "src/app/reference/reference.ts", lineNumber: 231 });
})();
export {
  ReferenceComponent
};
