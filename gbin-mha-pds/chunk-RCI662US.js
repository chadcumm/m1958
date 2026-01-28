import {
  MermaidDiagramComponent
} from "./chunk-JEBOQGGT.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-N6ZQYAD3.js";
import "./chunk-I7D2VZMI.js";

// src/app/reference/reference.ts
function ReferenceComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "h2");
    \u0275\u0275text(2, "Database Tables Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "h3");
    \u0275\u0275text(6, "CUST_GBIN_MHA_PDS_EPISODE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Episode of care information (DE05, DE06, DE09) - Referral, episode status, health program");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "h3");
    \u0275\u0275text(11, "CUST_GBIN_MHA_PDS_SERVICE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "Health service events (DE07, DE08, DE10) - Organization, site, service modality");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 7)(15, "h3");
    \u0275\u0275text(16, "CUST_GBIN_MHA_PDS_APPOINTMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, "Scheduled appointments (DE06.006, DE06.007) - Appointment tracking and cancellations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 7)(20, "h3");
    \u0275\u0275text(21, "CUST_GBIN_MHA_PDS_CLIENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Client data snapshots (DE01-DE04) - Demographics, identifiers, address, SDOH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 7)(25, "h3");
    \u0275\u0275text(26, "CUST_GBIN_MHA_PDS_LOG");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, "Activity logging - Error tracking, JSON payload storage, hierarchical logs");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "section", 8)(30, "h2");
    \u0275\u0275text(31, "Entity Relationship Diagram");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "app-mermaid-diagram", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "section", 10)(34, "h2");
    \u0275\u0275text(35, "Key Relationships");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "table", 11)(37, "thead")(38, "tr")(39, "th");
    \u0275\u0275text(40, "Relationship");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Cardinality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "tbody")(46, "tr")(47, "td");
    \u0275\u0275text(48, "PERSON -> EPISODE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50, "One-to-Many");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52, "A patient can have multiple mental health episodes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "tr")(54, "td");
    \u0275\u0275text(55, "ENCOUNTER -> EPISODE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "One-to-One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59, "Each episode typically links to an initial encounter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "tr")(61, "td");
    \u0275\u0275text(62, "EPISODE -> CLIENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td");
    \u0275\u0275text(64, "One-to-One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66, "Each episode has one client data snapshot (DE01-DE04)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "tr")(68, "td");
    \u0275\u0275text(69, "EPISODE -> SERVICE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71, "One-to-Many");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73, "An episode contains multiple service events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "tr")(75, "td");
    \u0275\u0275text(76, "EPISODE -> APPOINTMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td");
    \u0275\u0275text(78, "One-to-Many");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "td");
    \u0275\u0275text(80, "An episode can have multiple scheduled appointments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "tr")(82, "td");
    \u0275\u0275text(83, "LOG -> LONG_TEXT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "td");
    \u0275\u0275text(85, "One-to-One");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "td");
    \u0275\u0275text(87, "Full JSON request storage for debugging");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(32);
    \u0275\u0275property("definition", ctx_r0.erdDiagram);
  }
}
function ReferenceComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "h2");
    \u0275\u0275text(2, "Mirth Connect Integration Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4, " The MHA PDS system uses Mirth Connect as an integration engine to transform Cerner JSON data into FHIR R4 bundles and submit them to Ontario Health. The process consists of three channels that work in sequence. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "h3");
    \u0275\u0275text(11, "MHA PDS Data Poller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "Polls Cerner API via HTTP GET to retrieve pending MHA PDS episodes. Converts response to NDJSON format for batch processing.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "span", 18);
    \u0275\u0275text(16, "Source: Polling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 19);
    \u0275\u0275text(18, "Dest: Channel Writer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
    \u0275\u0275text(21, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16)(23, "h3");
    \u0275\u0275text(24, "FHIR Transformation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Transforms Cerner JSON into FHIR R4 resources. Creates bundles based on SUBMIT_BUNDLE configuration. Validates data against MHA PDS profiles.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 17)(28, "span", 18);
    \u0275\u0275text(29, "Source: Channel Reader");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 19);
    \u0275\u0275text(31, "Dest: Channel Writer");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 14)(33, "div", 15);
    \u0275\u0275text(34, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 16)(36, "h3");
    \u0275\u0275text(37, "Ontario Health Submission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "Authenticates via OAuth2 with OneID Federation. POSTs FHIR bundles to OH Provider API. Handles responses and logs results.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 17)(41, "span", 18);
    \u0275\u0275text(42, "Source: Channel Reader");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 19);
    \u0275\u0275text(44, "Dest: HTTPS POST");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(45, "section", 8)(46, "h2");
    \u0275\u0275text(47, "System Overview Diagram");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "app-mermaid-diagram", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "section", 8)(50, "h2");
    \u0275\u0275text(51, "Channel 01: Data Poller Script Logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 12);
    \u0275\u0275text(53, " The Data Poller channel triggers daily at 2:00 AM, retrieves MHA PDS data from Cerner, and converts it to NDJSON format for patient-by-patient processing. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "app-mermaid-diagram", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "section", 8)(56, "h2");
    \u0275\u0275text(57, "Channel 02: FHIR Transformation Script Logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 12);
    \u0275\u0275text(59, " The FHIR Transformation channel processes each patient record, creates FHIR profiles using a code template library, and assembles bundles based on the SUBMIT_BUNDLE array. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "app-mermaid-diagram", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "section", 8)(62, "h2");
    \u0275\u0275text(63, "Channel 02: Code Template Hierarchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 12);
    \u0275\u0275text(65, " The FHIR transformation uses a library of code templates that create and cache FHIR profiles, then assemble them into bundles with proper cross-references. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "app-mermaid-diagram", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "section", 8)(68, "h2");
    \u0275\u0275text(69, "Channel 03: OAuth2 Authentication Flow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 12);
    \u0275\u0275text(71, " Ontario Health requires OAuth2 authentication using a signed JWT client assertion. The token is cached and reused until 2 minutes before expiry. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(72, "app-mermaid-diagram", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "section", 25)(74, "h2");
    \u0275\u0275text(75, "FHIR Resource Profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 12);
    \u0275\u0275text(77, " The FHIR Transformation channel creates these MHA PDS-compliant FHIR R4 resources: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 26)(79, "div", 27)(80, "h4");
    \u0275\u0275text(81, "Core Resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ul", 28)(83, "li")(84, "code");
    \u0275\u0275text(85, "Patient");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " - DE01-DE04 client demographics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "li")(88, "code");
    \u0275\u0275text(89, "Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, " - DE07 HSP organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "li")(92, "code");
    \u0275\u0275text(93, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, " - DE08 HSP site");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "div", 27)(96, "h4");
    \u0275\u0275text(97, "Episode Resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ul", 28)(99, "li")(100, "code");
    \u0275\u0275text(101, "ServiceRequest");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " - DE05 referral info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "li")(104, "code");
    \u0275\u0275text(105, "EpisodeOfCare");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, " - DE06 episode tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "li")(108, "code");
    \u0275\u0275text(109, "HealthcareService");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, " - DE09 health program");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(111, "div", 27)(112, "h4");
    \u0275\u0275text(113, "Service Resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "ul", 28)(115, "li")(116, "code");
    \u0275\u0275text(117, "Encounter");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, " - DE10 health service events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "li")(120, "code");
    \u0275\u0275text(121, "Appointment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, " - DE06.006-007 (cancelled only)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "li")(124, "code");
    \u0275\u0275text(125, "Condition");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, " - Mental health condition");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "div", 27)(128, "h4");
    \u0275\u0275text(129, "SDOH Observations (DE04)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ul", 28)(131, "li")(132, "code");
    \u0275\u0275text(133, "Observation-GenderIdentity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "li")(135, "code");
    \u0275\u0275text(136, "Observation-SexualOrientation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "li")(138, "code");
    \u0275\u0275text(139, "Observation-CitizenshipStatus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "li")(141, "code");
    \u0275\u0275text(142, "Observation-LevelOfEducation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "li")(144, "code");
    \u0275\u0275text(145, "Observation-EmploymentStatus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "li")(147, "code");
    \u0275\u0275text(148, "Observation-PersonalIncomeSource");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "li")(150, "code");
    \u0275\u0275text(151, "Observation-HousingStatus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "li")(153, "code");
    \u0275\u0275text(154, "Observation-TotalHouseholdIncome");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "li")(156, "code");
    \u0275\u0275text(157, "Observation-NumberOfPeopleIncomeSupports");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "li")(159, "code");
    \u0275\u0275text(160, "Observation-LegalStatus");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(161, "section", 29)(162, "h2");
    \u0275\u0275text(163, "Bundle Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "p", 12);
    \u0275\u0275text(165, " Each patient episode can generate one or more FHIR bundles based on the SUBMIT_BUNDLE array. Bundles are determined by data availability and episode state. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "table", 30)(167, "thead")(168, "tr")(169, "th");
    \u0275\u0275text(170, "Bundle Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "th");
    \u0275\u0275text(172, "Contains");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "th");
    \u0275\u0275text(174, "When Used");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(175, "tbody")(176, "tr")(177, "td")(178, "code");
    \u0275\u0275text(179, "SERVICE_REQUEST_EOC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "td");
    \u0275\u0275text(181, "Patient, Organization, Location, ServiceRequest, EpisodeOfCare, HealthcareService");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "td");
    \u0275\u0275text(183, "New episode with referral and program enrollment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "tr")(185, "td")(186, "code");
    \u0275\u0275text(187, "CLIENT_SDOH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "td");
    \u0275\u0275text(189, "Patient, Organization, Location, Condition, 10\xD7 Observation profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "td");
    \u0275\u0275text(191, "Episode has socio-demographic data (DE04)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "tr")(193, "td")(194, "code");
    \u0275\u0275text(195, "HEALTH_SERVICES");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "td");
    \u0275\u0275text(197, "Patient, Organization, Location, ServiceRequest, EpisodeOfCare, Encounter, HealthcareService");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "td");
    \u0275\u0275text(199, "Episode has service events (DE10)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(200, "tr")(201, "td")(202, "code");
    \u0275\u0275text(203, "SCHEDULED_APPOINTMENT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "td");
    \u0275\u0275text(205, "Patient, Organization, Location, EpisodeOfCare, Appointment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "td");
    \u0275\u0275text(207, "First appointment was missed/cancelled only");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(208, "section", 31)(209, "h2");
    \u0275\u0275text(210, "Integration Endpoints");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "table", 32)(212, "thead")(213, "tr")(214, "th");
    \u0275\u0275text(215, "Endpoint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "th");
    \u0275\u0275text(217, "URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "th");
    \u0275\u0275text(219, "Method");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(220, "tbody")(221, "tr")(222, "td");
    \u0275\u0275text(223, "Cerner MHA PDS Data API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "td")(225, "code");
    \u0275\u0275text(226, "m1958.gbrh_cd.cerncd.com/mpages/reports/gbin_mha_pds_data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(227, "td");
    \u0275\u0275text(228, "GET");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(229, "tr")(230, "td");
    \u0275\u0275text(231, "OneID OAuth Token");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "td")(233, "code");
    \u0275\u0275text(234, "login.pst.oneidfederation.ehealthontario.ca/oidc/access_token");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(235, "td");
    \u0275\u0275text(236, "POST");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "tr")(238, "td");
    \u0275\u0275text(239, "Ontario Health FHIR API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "td")(241, "code");
    \u0275\u0275text(242, "provider.pst.ehealthontario.ca/api2/fhir/mha/Bundle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(243, "td");
    \u0275\u0275text(244, "POST");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(48);
    \u0275\u0275property("definition", ctx_r0.mirthFlowDiagram);
    \u0275\u0275advance(6);
    \u0275\u0275property("definition", ctx_r0.channel01Diagram);
    \u0275\u0275advance(6);
    \u0275\u0275property("definition", ctx_r0.channel02Diagram);
    \u0275\u0275advance(6);
    \u0275\u0275property("definition", ctx_r0.codeTemplateHierarchy);
    \u0275\u0275advance(6);
    \u0275\u0275property("definition", ctx_r0.channel03Diagram);
  }
}
var ReferenceComponent = class _ReferenceComponent {
  /** Currently active tab */
  activeTab = signal("database", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
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
  /**
   * Mermaid flowchart for Mirth Connect process flow.
   * Based on: scripts/mirth/Brightshores Channel Group.xml
   */
  mirthFlowDiagram = `flowchart TB
    subgraph CERNER["Cerner Millennium"]
        CCL["gbin_mha_pds_data.prg"]
        DB[(MHA PDS Tables)]
        DB --> CCL
    end

    subgraph CH1["Channel 01: MHA PDS Data Poller"]
        POLL[/"Polling Trigger (Daily)"/]
        GET["HTTP GET\\nCerner MPage API"]
        NDJSON["Convert to NDJSON\\n(per patient)"]
        POLL --> GET
        GET --> NDJSON
    end

    subgraph CH2["Channel 02: FHIR Transformation"]
        READ1[/"Channel Reader\\n(per patient)"/]
        VALIDATE["Validate Fields\\n(submitFieldsContains)"]
        BUNDLE["Determine Bundles\\n(SUBMIT_BUNDLE array)"]

        subgraph PROFILES["Create FHIR Profiles"]
            PAT["Patient"]
            ORG["Organization"]
            LOC["Location"]
            SR["ServiceRequest"]
            EOC["EpisodeOfCare"]
            HS["HealthcareService"]
            ENC["Encounter"]
            APPT["Appointment"]
            COND["Condition"]
            OBS["10x Observations\\n(SDOH)"]
        end

        ASSEMBLE["Assemble Bundle\\n(add references)"]
        NDJSON2["Output NDJSON\\n(per bundle)"]

        READ1 --> VALIDATE
        VALIDATE --> BUNDLE
        BUNDLE --> PROFILES
        PROFILES --> ASSEMBLE
        ASSEMBLE --> NDJSON2
    end

    subgraph CH3["Channel 03: Ontario Health Submission"]
        READ2[/"Channel Reader\\n(per bundle)"/]
        AUTH["OAuth2 Token\\n(OneID Federation)"]
        POST["POST FHIR Bundle\\nOH Provider API"]
        RESP["Handle Response"]
        LOG["Log Result"]

        READ2 --> AUTH
        AUTH --> POST
        POST --> RESP
        RESP --> LOG
    end

    subgraph OH["Ontario Health"]
        FHIR[("MHA PDS\\nFHIR Repository")]
    end

    CCL --> GET
    NDJSON --> READ1
    NDJSON2 --> READ2
    POST --> FHIR

    classDef cerner fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef channel fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef oh fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef profiles fill:#faf5ff,stroke:#7c3aed,stroke-width:1px

    class CERNER cerner
    class CH1,CH2,CH3 channel
    class OH oh
    class PROFILES profiles`;
  /**
   * Channel 01: MHA PDS Data Poller - Internal Script Logic
   */
  channel01Diagram = `flowchart TB
    subgraph SOURCE["Source Connector"]
        POLL[/"Polling Trigger\\n(Daily @ 2:00 AM)"/]
        SRC_JS["JavaScript Reader\\nreturn 'Processing'"]
        POLL --> SRC_JS
    end

    subgraph DEST1["Destination 1: Get Data from Cerner API"]
        HTTP_GET["HTTP GET\\ngbin_mha_pds_data"]
        RESP_CHECK{{"Status\\n= 200?"}}
        STORE_JSON["Store Response\\n$c('cernerJson', response)"]
        THROW_ERR["Throw Error\\n'Failed to retrieve JSON'"]

        HTTP_GET --> RESP_CHECK
        RESP_CHECK -->|Yes| STORE_JSON
        RESP_CHECK -->|No| THROW_ERR
    end

    subgraph DEST2["Destination 2: Split JSON and Send to Channel 02"]
        FILTER{{"cernerJson\\nexists?"}}
        PARSE_JSON["Parse JSON\\nJSON.parse($c('cernerJson'))"]
        EXTRACT["Extract QUAL Array\\nmsg.MHA_PDS_SUBMISSION.QUAL"]
        LOOP["Loop Patients\\nfor each patient"]
        NDJSON["Build NDJSON\\nJSON.stringify(patient) + '\\n'"]
        SEND["Channel Writer\\nSend to Channel 02"]

        FILTER -->|Yes| PARSE_JSON
        FILTER -->|No| SKIP["Skip Destination"]
        PARSE_JSON --> EXTRACT
        EXTRACT --> LOOP
        LOOP --> NDJSON
        NDJSON --> SEND
    end

    SRC_JS --> HTTP_GET
    STORE_JSON --> FILTER

    classDef source fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef dest fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef decision fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef error fill:#fee2e2,stroke:#dc2626,stroke-width:2px

    class SOURCE source
    class DEST1,DEST2 dest
    class RESP_CHECK,FILTER decision
    class THROW_ERR error`;
  /**
   * Channel 02: FHIR Transformation - Internal Script Logic
   */
  channel02Diagram = `flowchart TB
    subgraph SOURCE["Source Connector: Channel Reader"]
        BATCH[/"NDJSON Batch Processing\\n(one patient per message)"/]
        PARSE["Parse JSON Patient Record"]
        CREATE_MAPS["Create Maps\\n(Store SUBMIT_BUNDLE, FIELDS_LIST)"]

        BATCH --> PARSE
        PARSE --> CREATE_MAPS
    end

    subgraph DEST["Destination: Send FHIR Bundle"]
        CALL_LIST["Call createBundleList()"]

        subgraph LOOP["For Each Bundle in SUBMIT_BUNDLE"]
            GET_PROFILES["Get PROFILE Array\\nfrom bundle config"]
            CACHE_PROFILES["createAndCacheProfiles()\\n(create or retrieve from cache)"]
            CREATE_BUNDLE["createBundle()\\n(assemble with references)"]
            SERIALIZE["JSON.stringify(bundle)"]
            APPEND["Append to NDJSON output"]

            GET_PROFILES --> CACHE_PROFILES
            CACHE_PROFILES --> CREATE_BUNDLE
            CREATE_BUNDLE --> SERIALIZE
            SERIALIZE --> APPEND
        end

        SEND["Channel Writer\\nSend to Channel 03"]

        CALL_LIST --> LOOP
        APPEND --> SEND
    end

    CREATE_MAPS --> CALL_LIST

    classDef source fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef dest fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef loop fill:#faf5ff,stroke:#7c3aed,stroke-width:2px

    class SOURCE source
    class DEST dest
    class LOOP loop`;
  /**
   * Code Template Hierarchy for Channel 02
   */
  codeTemplateHierarchy = `flowchart TB
    subgraph ENTRY["Entry Point"]
        LIST["createBundleList()\\n- Loop SUBMIT_BUNDLE array\\n- Return NDJSON string"]
    end

    subgraph CACHE["Profile Creation & Caching"]
        CACHE_FN["createAndCacheProfiles(profileArr)\\n- Loop profile array\\n- Create if not cached\\n- Uses getProfileCache/putProfileCache"]
    end

    subgraph PROFILES["Profile Creator Functions"]
        PAT["createPatientProfile()\\nDE01-DE04 Client"]
        ORG["createOrganizationProfile()\\nDE07 HSP Org"]
        LOC["createLocationProfile()\\nDE08 HSP Site"]
        SR["createServiceRequestProfile()\\nDE05 Referral"]
        EOC["createEpisodeOfCareProfile()\\nDE06 Episode"]
        HS["createHealthcareServiceProfile()\\nDE09 Program"]
        APPT["createAppointmentProfile()\\nDE06.006-007"]
        ENC["createEncounterProfile()\\nDE10 Service Event"]
        COND["createConditionProfile()\\nDE04.021 Pre-Existing"]
        OBS["createObservationProfile(type)\\n10 SDOH Observation types"]
    end

    subgraph BUNDLE["Bundle Assembly"]
        BUNDLE_FN["createBundle(profileArr)\\n- Create Bundle resource\\n- Loop profiles\\n- Add cross-references\\n- Add bundle entries"]
    end

    subgraph HELPERS["Helper Functions"]
        VALIDATE["submitFieldsContains()\\nCheck required fields"]
        ERROR["generateDataValidationError()\\nThrow validation error"]
        UTIL["getStringValueOrNull()\\nSafe value extraction"]
    end

    LIST --> CACHE_FN
    CACHE_FN --> PAT & ORG & LOC & SR & EOC & HS & APPT & ENC & COND & OBS
    LIST --> BUNDLE_FN
    BUNDLE_FN --> PROFILES
    PAT & ORG & LOC & SR & EOC & HS & APPT & ENC & COND & OBS --> VALIDATE
    VALIDATE --> ERROR
    VALIDATE --> UTIL

    classDef entry fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef cache fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef profiles fill:#faf5ff,stroke:#7c3aed,stroke-width:1px
    classDef bundle fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef helpers fill:#f3f4f6,stroke:#6b7280,stroke-width:1px

    class ENTRY entry
    class CACHE cache
    class PROFILES profiles
    class BUNDLE bundle
    class HELPERS helpers`;
  /**
   * Channel 03: Ontario Health Submission - OAuth2 Flow
   */
  channel03Diagram = `flowchart TB
    subgraph SOURCE["Source Connector: Channel Reader"]
        BATCH[/"NDJSON Batch Processing\\n(one bundle per message)"/]
        STORE_BUNDLE["Store Bundle JSON\\nchannelMap.put('bundleJson', raw)"]
        BATCH --> STORE_BUNDLE
    end

    subgraph DEST1["Destination 1: Get Access Token"]
        CHECK_TOKEN{{"Token Valid?\\n(not expired - 2min)"}}
        SKIP_TOKEN["Skip Token Request\\n(use cached token)"]

        subgraph JWT["Create JWT Client Assertion"]
            LOAD_CONFIG["Load Config\\nCLIENT_ID, UAO, SCOPE"]
            LOAD_KEY["Load Private Key\\n(PKCS#8 PEM format)"]
            BUILD_HEADER["Build JWT Header\\n{alg: 'RS256', typ: 'JWT'}"]
            BUILD_CLAIMS["Build JWT Claims\\niss, sub, aud, iat, exp, jti"]
            SIGN_RS256["Sign with RS256\\nSHA256withRSA"]
            ASSEMBLE_JWT["Assemble JWT\\nheader.payload.signature"]

            LOAD_CONFIG --> LOAD_KEY
            LOAD_KEY --> BUILD_HEADER
            BUILD_HEADER --> BUILD_CLAIMS
            BUILD_CLAIMS --> SIGN_RS256
            SIGN_RS256 --> ASSEMBLE_JWT
        end

        TOKEN_POST["HTTP POST\\nOneID /oidc/access_token\\n(client_credentials grant)"]
        TOKEN_CHECK{{"Status\\n= 200?"}}
        CACHE_TOKEN["Cache Token\\nglobalMap.put('oh_oag_access_token')"]
        TOKEN_ERROR["Throw Error\\n'Token request failed'"]

        CHECK_TOKEN -->|No| JWT
        CHECK_TOKEN -->|Yes| SKIP_TOKEN
        ASSEMBLE_JWT --> TOKEN_POST
        TOKEN_POST --> TOKEN_CHECK
        TOKEN_CHECK -->|Yes| CACHE_TOKEN
        TOKEN_CHECK -->|No| TOKEN_ERROR
    end

    subgraph DEST2["Destination 2: Submit FHIR Bundle"]
        GET_TOKEN["Get Cached Token\\nglobalMap.get('oh_oag_access_token')"]
        FHIR_POST["HTTP POST\\nOH /api2/fhir/mha/Bundle\\nAuthorization: Bearer token"]
        RESP_CHECK{{"Status\\n= 200/201?"}}
        LOG_SUCCESS["Log Success\\nBundle accepted"]
        LOG_ERROR["Log Error\\nOperationOutcome details"]

        GET_TOKEN --> FHIR_POST
        FHIR_POST --> RESP_CHECK
        RESP_CHECK -->|Yes| LOG_SUCCESS
        RESP_CHECK -->|No| LOG_ERROR
    end

    STORE_BUNDLE --> CHECK_TOKEN
    CACHE_TOKEN --> GET_TOKEN
    SKIP_TOKEN --> GET_TOKEN

    classDef source fill:#e6f3ff,stroke:#2b6cb0,stroke-width:2px
    classDef dest fill:#f0fff4,stroke:#276749,stroke-width:2px
    classDef jwt fill:#fef3c7,stroke:#d97706,stroke-width:2px
    classDef decision fill:#f3f4f6,stroke:#6b7280,stroke-width:2px
    classDef error fill:#fee2e2,stroke:#dc2626,stroke-width:2px

    class SOURCE source
    class DEST1,DEST2 dest
    class JWT jwt
    class CHECK_TOKEN,TOKEN_CHECK,RESP_CHECK decision
    class TOKEN_ERROR,LOG_ERROR error`;
  static \u0275fac = function ReferenceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReferenceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReferenceComponent, selectors: [["app-reference"]], decls: 13, vars: 6, consts: [[1, "reference-container"], [1, "reference-header"], [1, "subtitle"], [1, "tab-navigation"], [1, "tab-button", 3, "click"], [1, "diagram-section"], [1, "table-summary"], [1, "table-card"], [1, "erd-section"], ["diagramId", "mha-pds-erd", 3, "definition"], [1, "relationships-section"], [1, "relationships-table"], [1, "section-intro"], [1, "channel-summary"], [1, "channel-card"], [1, "channel-number"], [1, "channel-content"], [1, "channel-tags"], [1, "tag", "source"], [1, "tag", "dest"], ["diagramId", "mirth-flow", 3, "definition"], ["diagramId", "channel-01", 3, "definition"], ["diagramId", "channel-02", 3, "definition"], ["diagramId", "code-templates", 3, "definition"], ["diagramId", "channel-03", 3, "definition"], [1, "fhir-section"], [1, "profiles-grid"], [1, "profile-group"], [1, "profile-list"], [1, "bundles-section"], [1, "bundles-table"], [1, "endpoints-section"], [1, "endpoints-table"]], template: function ReferenceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "MHA PDS Technical Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "System architecture, data flow, and integration documentation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "nav", 3)(7, "button", 4);
      \u0275\u0275listener("click", function ReferenceComponent_Template_button_click_7_listener() {
        return ctx.activeTab.set("database");
      });
      \u0275\u0275text(8, " Database ERD ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function ReferenceComponent_Template_button_click_9_listener() {
        return ctx.activeTab.set("mirth");
      });
      \u0275\u0275text(10, " Mirth Process Flow ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, ReferenceComponent_Conditional_11_Template, 88, 1);
      \u0275\u0275conditionalCreate(12, ReferenceComponent_Conditional_12_Template, 245, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.activeTab() === "database");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "mirth");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "database" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "mirth" ? 12 : -1);
    }
  }, dependencies: [MermaidDiagramComponent], styles: ['\n\n.reference-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.reference-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.reference-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 16px;\n  margin: 0;\n}\n.section-intro[_ngcontent-%COMP%] {\n  color: #4a5568;\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0 0 20px 0;\n}\n.tab-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 0;\n}\n.tab-button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 15px;\n  font-weight: 500;\n  color: #4a5568;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.tab-button[_ngcontent-%COMP%]:hover {\n  color: #1a365d;\n  background: #f7fafc;\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  color: #2b6cb0;\n  border-bottom-color: #2b6cb0;\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.table-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.table-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n}\n.table-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a5568;\n  margin: 0;\n  line-height: 1.5;\n}\n.channel-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.channel-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.channel-number[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b6cb0 0%,\n      #1a365d 100%);\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.channel-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.channel-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 6px 0;\n}\n.channel-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a5568;\n  margin: 0 0 10px 0;\n  line-height: 1.5;\n}\n.channel-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.tag.source[_ngcontent-%COMP%] {\n  background: #ebf8ff;\n  color: #2b6cb0;\n}\n.tag.dest[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  color: #276749;\n}\n.erd-section[_ngcontent-%COMP%], \n.relationships-section[_ngcontent-%COMP%], \n.fhir-section[_ngcontent-%COMP%], \n.bundles-section[_ngcontent-%COMP%], \n.endpoints-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.erd-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.relationships-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.fhir-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.bundles-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.endpoints-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.profiles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.profile-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 10px 0;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.profile-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4a5568;\n  padding: 4px 0;\n}\n.profile-list[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #edf2f7;\n  color: #2b6cb0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.relationships-table[_ngcontent-%COMP%], \n.bundles-table[_ngcontent-%COMP%], \n.endpoints-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.relationships-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.bundles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.bundles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.endpoints-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.endpoints-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.relationships-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.bundles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.endpoints-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f7fafc;\n  font-weight: 600;\n  color: #2d3748;\n}\n.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \n.bundles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  font-size: 13px;\n  color: #1a365d;\n}\n.bundles-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], \n.endpoints-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #edf2f7;\n  color: #2b6cb0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.relationships-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: #667eea;\n  font-weight: 500;\n}\n.relationships-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], \n.bundles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%], \n.endpoints-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.relationships-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], \n.bundles-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], \n.endpoints-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f7fafc;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferenceComponent, [{
    type: Component,
    args: [{ selector: "app-reference", standalone: true, imports: [MermaidDiagramComponent], template: `
    <div class="reference-container">
      <header class="reference-header">
        <h1>MHA PDS Technical Reference</h1>
        <p class="subtitle">System architecture, data flow, and integration documentation</p>
      </header>

      <!-- Tab Navigation -->
      <nav class="tab-navigation">
        <button
          class="tab-button"
          [class.active]="activeTab() === 'database'"
          (click)="activeTab.set('database')"
        >
          Database ERD
        </button>
        <button
          class="tab-button"
          [class.active]="activeTab() === 'mirth'"
          (click)="activeTab.set('mirth')"
        >
          Mirth Process Flow
        </button>
      </nav>

      <!-- Database ERD Tab -->
      @if (activeTab() === 'database') {
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
      }

      <!-- Mirth Process Flow Tab -->
      @if (activeTab() === 'mirth') {
        <section class="diagram-section">
          <h2>Mirth Connect Integration Overview</h2>
          <p class="section-intro">
            The MHA PDS system uses Mirth Connect as an integration engine to transform Cerner JSON data
            into FHIR R4 bundles and submit them to Ontario Health. The process consists of three channels
            that work in sequence.
          </p>

          <div class="channel-summary">
            <div class="channel-card">
              <div class="channel-number">01</div>
              <div class="channel-content">
                <h3>MHA PDS Data Poller</h3>
                <p>Polls Cerner API via HTTP GET to retrieve pending MHA PDS episodes. Converts response to NDJSON format for batch processing.</p>
                <div class="channel-tags">
                  <span class="tag source">Source: Polling</span>
                  <span class="tag dest">Dest: Channel Writer</span>
                </div>
              </div>
            </div>
            <div class="channel-card">
              <div class="channel-number">02</div>
              <div class="channel-content">
                <h3>FHIR Transformation</h3>
                <p>Transforms Cerner JSON into FHIR R4 resources. Creates bundles based on SUBMIT_BUNDLE configuration. Validates data against MHA PDS profiles.</p>
                <div class="channel-tags">
                  <span class="tag source">Source: Channel Reader</span>
                  <span class="tag dest">Dest: Channel Writer</span>
                </div>
              </div>
            </div>
            <div class="channel-card">
              <div class="channel-number">03</div>
              <div class="channel-content">
                <h3>Ontario Health Submission</h3>
                <p>Authenticates via OAuth2 with OneID Federation. POSTs FHIR bundles to OH Provider API. Handles responses and logs results.</p>
                <div class="channel-tags">
                  <span class="tag source">Source: Channel Reader</span>
                  <span class="tag dest">Dest: HTTPS POST</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="erd-section">
          <h2>System Overview Diagram</h2>
          <app-mermaid-diagram
            [definition]="mirthFlowDiagram"
            diagramId="mirth-flow"
          />
        </section>

        <section class="erd-section">
          <h2>Channel 01: Data Poller Script Logic</h2>
          <p class="section-intro">
            The Data Poller channel triggers daily at 2:00 AM, retrieves MHA PDS data from Cerner,
            and converts it to NDJSON format for patient-by-patient processing.
          </p>
          <app-mermaid-diagram
            [definition]="channel01Diagram"
            diagramId="channel-01"
          />
        </section>

        <section class="erd-section">
          <h2>Channel 02: FHIR Transformation Script Logic</h2>
          <p class="section-intro">
            The FHIR Transformation channel processes each patient record, creates FHIR profiles
            using a code template library, and assembles bundles based on the SUBMIT_BUNDLE array.
          </p>
          <app-mermaid-diagram
            [definition]="channel02Diagram"
            diagramId="channel-02"
          />
        </section>

        <section class="erd-section">
          <h2>Channel 02: Code Template Hierarchy</h2>
          <p class="section-intro">
            The FHIR transformation uses a library of code templates that create and cache FHIR profiles,
            then assemble them into bundles with proper cross-references.
          </p>
          <app-mermaid-diagram
            [definition]="codeTemplateHierarchy"
            diagramId="code-templates"
          />
        </section>

        <section class="erd-section">
          <h2>Channel 03: OAuth2 Authentication Flow</h2>
          <p class="section-intro">
            Ontario Health requires OAuth2 authentication using a signed JWT client assertion.
            The token is cached and reused until 2 minutes before expiry.
          </p>
          <app-mermaid-diagram
            [definition]="channel03Diagram"
            diagramId="channel-03"
          />
        </section>

        <section class="fhir-section">
          <h2>FHIR Resource Profiles</h2>
          <p class="section-intro">
            The FHIR Transformation channel creates these MHA PDS-compliant FHIR R4 resources:
          </p>

          <div class="profiles-grid">
            <div class="profile-group">
              <h4>Core Resources</h4>
              <ul class="profile-list">
                <li><code>Patient</code> - DE01-DE04 client demographics</li>
                <li><code>Organization</code> - DE07 HSP organization</li>
                <li><code>Location</code> - DE08 HSP site</li>
              </ul>
            </div>
            <div class="profile-group">
              <h4>Episode Resources</h4>
              <ul class="profile-list">
                <li><code>ServiceRequest</code> - DE05 referral info</li>
                <li><code>EpisodeOfCare</code> - DE06 episode tracking</li>
                <li><code>HealthcareService</code> - DE09 health program</li>
              </ul>
            </div>
            <div class="profile-group">
              <h4>Service Resources</h4>
              <ul class="profile-list">
                <li><code>Encounter</code> - DE10 health service events</li>
                <li><code>Appointment</code> - DE06.006-007 (cancelled only)</li>
                <li><code>Condition</code> - Mental health condition</li>
              </ul>
            </div>
            <div class="profile-group">
              <h4>SDOH Observations (DE04)</h4>
              <ul class="profile-list">
                <li><code>Observation-GenderIdentity</code></li>
                <li><code>Observation-SexualOrientation</code></li>
                <li><code>Observation-CitizenshipStatus</code></li>
                <li><code>Observation-LevelOfEducation</code></li>
                <li><code>Observation-EmploymentStatus</code></li>
                <li><code>Observation-PersonalIncomeSource</code></li>
                <li><code>Observation-HousingStatus</code></li>
                <li><code>Observation-TotalHouseholdIncome</code></li>
                <li><code>Observation-NumberOfPeopleIncomeSupports</code></li>
                <li><code>Observation-LegalStatus</code></li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bundles-section">
          <h2>Bundle Types</h2>
          <p class="section-intro">
            Each patient episode can generate one or more FHIR bundles based on the SUBMIT_BUNDLE array.
            Bundles are determined by data availability and episode state.
          </p>

          <table class="bundles-table">
            <thead>
              <tr>
                <th>Bundle Type</th>
                <th>Contains</th>
                <th>When Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>SERVICE_REQUEST_EOC</code></td>
                <td>Patient, Organization, Location, ServiceRequest, EpisodeOfCare, HealthcareService</td>
                <td>New episode with referral and program enrollment</td>
              </tr>
              <tr>
                <td><code>CLIENT_SDOH</code></td>
                <td>Patient, Organization, Location, Condition, 10\xD7 Observation profiles</td>
                <td>Episode has socio-demographic data (DE04)</td>
              </tr>
              <tr>
                <td><code>HEALTH_SERVICES</code></td>
                <td>Patient, Organization, Location, ServiceRequest, EpisodeOfCare, Encounter, HealthcareService</td>
                <td>Episode has service events (DE10)</td>
              </tr>
              <tr>
                <td><code>SCHEDULED_APPOINTMENT</code></td>
                <td>Patient, Organization, Location, EpisodeOfCare, Appointment</td>
                <td>First appointment was missed/cancelled only</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="endpoints-section">
          <h2>Integration Endpoints</h2>
          <table class="endpoints-table">
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>URL</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cerner MHA PDS Data API</td>
                <td><code>m1958.gbrh_cd.cerncd.com/mpages/reports/gbin_mha_pds_data</code></td>
                <td>GET</td>
              </tr>
              <tr>
                <td>OneID OAuth Token</td>
                <td><code>login.pst.oneidfederation.ehealthontario.ca/oidc/access_token</code></td>
                <td>POST</td>
              </tr>
              <tr>
                <td>Ontario Health FHIR API</td>
                <td><code>provider.pst.ehealthontario.ca/api2/fhir/mha/Bundle</code></td>
                <td>POST</td>
              </tr>
            </tbody>
          </table>
        </section>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;6390c3f2fba5c51e03a91973b63c96aeaa52e04d2debd7c285b07427ba713c25;/Users/chadcummings/Github/chadcumm/gbin-mha-pds/src/app/reference/reference.ts */\n.reference-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.reference-header {\n  margin-bottom: 24px;\n}\n.reference-header h1 {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n}\n.subtitle {\n  color: #6c757d;\n  font-size: 16px;\n  margin: 0;\n}\n.section-intro {\n  color: #4a5568;\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0 0 20px 0;\n}\n.tab-navigation {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 0;\n}\n.tab-button {\n  padding: 12px 24px;\n  font-size: 15px;\n  font-weight: 500;\n  color: #4a5568;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.tab-button:hover {\n  color: #1a365d;\n  background: #f7fafc;\n}\n.tab-button.active {\n  color: #2b6cb0;\n  border-bottom-color: #2b6cb0;\n}\nsection {\n  margin-bottom: 32px;\n}\nsection h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.table-summary {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.table-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.table-card h3 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 8px 0;\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n}\n.table-card p {\n  font-size: 14px;\n  color: #4a5568;\n  margin: 0;\n  line-height: 1.5;\n}\n.channel-summary {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.channel-card {\n  display: flex;\n  gap: 16px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.channel-number {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #2b6cb0 0%,\n      #1a365d 100%);\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.channel-content {\n  flex: 1;\n}\n.channel-content h3 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a365d;\n  margin: 0 0 6px 0;\n}\n.channel-content p {\n  font-size: 14px;\n  color: #4a5568;\n  margin: 0 0 10px 0;\n  line-height: 1.5;\n}\n.channel-tags {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tag {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.tag.source {\n  background: #ebf8ff;\n  color: #2b6cb0;\n}\n.tag.dest {\n  background: #f0fff4;\n  color: #276749;\n}\n.erd-section,\n.relationships-section,\n.fhir-section,\n.bundles-section,\n.endpoints-section {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.erd-section h2,\n.relationships-section h2,\n.fhir-section h2,\n.bundles-section h2,\n.endpoints-section h2 {\n  margin-top: 0;\n}\n.profiles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.profile-group h4 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 10px 0;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.profile-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.profile-list li {\n  font-size: 13px;\n  color: #4a5568;\n  padding: 4px 0;\n}\n.profile-list code {\n  background: #edf2f7;\n  color: #2b6cb0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.relationships-table,\n.bundles-table,\n.endpoints-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.relationships-table th,\n.relationships-table td,\n.bundles-table th,\n.bundles-table td,\n.endpoints-table th,\n.endpoints-table td {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n.relationships-table th,\n.bundles-table th,\n.endpoints-table th {\n  background: #f7fafc;\n  font-weight: 600;\n  color: #2d3748;\n}\n.relationships-table td:first-child,\n.bundles-table td:first-child {\n  font-family:\n    "Consolas",\n    "Monaco",\n    monospace;\n  font-size: 13px;\n  color: #1a365d;\n}\n.bundles-table code,\n.endpoints-table code {\n  background: #edf2f7;\n  color: #2b6cb0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.relationships-table td:nth-child(2) {\n  color: #667eea;\n  font-weight: 500;\n}\n.relationships-table tr:last-child td,\n.bundles-table tr:last-child td,\n.endpoints-table tr:last-child td {\n  border-bottom: none;\n}\n.relationships-table tr:hover td,\n.bundles-table tr:hover td,\n.endpoints-table tr:hover td {\n  background: #f7fafc;\n}\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReferenceComponent, { className: "ReferenceComponent", filePath: "src/app/reference/reference.ts", lineNumber: 644 });
})();
export {
  ReferenceComponent
};
