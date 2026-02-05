'use client';

import React, { useMemo, useState } from 'react';
import Ribbon from '../../components/Ribbon';

type Term = {
  term: string;
  definition: string;
};

type TermsByLetter = {
  [key: string]: Term[];
};

export default function Glossary() {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');

  const glossaryTerms: TermsByLetter = useMemo(
    () => ({
      A: [
        {
          term: 'Access Control',
          definition:
            'Methods used to regulate who can enter a site, building, or restricted area, including ID checks, passes, and entry logs.',
        },
        {
          term: 'Alarm Response',
          definition:
            'A security team’s action after receiving an alarm signal, including verification, dispatch, and coordination with authorities if required.',
        },
        {
          term: 'Asset Protection',
          definition:
            'Security practices focused on preventing loss, theft, or damage to property, equipment, cash, and other valuables.',
        },
        {
          term: 'Authorization',
          definition:
            'Formal approval that allows a person, vehicle, or material to enter/exit or access a restricted area.',
        },
        {
          term: 'Access Badge / ID',
          definition:
            'A card or credential used to verify identity and grant access according to assigned permissions.',
        },
        {
          term: 'Area Sweep',
          definition:
            'A systematic check of an area to confirm it is safe, clear, and free from unusual risks or hazards.',
        },
        {
          term: 'Alarm Panel',
          definition:
            'The central control unit that receives signals from sensors and displays alarm status and zones.',
        },
        {
          term: 'Assembly Point',
          definition:
            'A designated safe location where people gather during evacuation for headcount and instructions.',
        },
        {
          term: 'After-Action Review (AAR)',
          definition:
            'A short review after an incident to record what happened, what worked, and what should improve.',
        },
        {
          term: 'Audit Trail',
          definition:
            'A record of actions (entries, checks, alarms, logs) used to verify accountability and compliance.',
        },
      ],

      B: [
        {
          term: 'Bag Check',
          definition:
            'A screening procedure to prevent prohibited items from entering premises and to reduce theft risks when leaving the site.',
        },
        {
          term: 'Beat Patrol',
          definition:
            'Routine rounds by a guard along a fixed route to deter incidents and spot unusual activity early.',
        },
        {
          term: 'Breach',
          definition:
            'An unauthorized entry or violation of security rules, such as forced access, trespassing, or bypassing checkpoints.',
        },
        {
          term: 'Barrier',
          definition:
            'A physical obstacle (gate, fence, bollard) used to control movement and protect restricted areas.',
        },
        {
          term: 'Backup Support',
          definition:
            'Additional guards or supervisors sent to assist when a situation needs more coverage or control.',
        },
        {
          term: 'Badge Check',
          definition:
            'Verifying employee/visitor IDs at entry points to prevent unauthorized access.',
        },
        {
          term: 'Boundary Line',
          definition:
            'The outer limit of a property that security monitors to prevent intrusion and trespassing.',
        },
        {
          term: 'Blackout Procedure',
          definition:
            'Steps followed during power failure to maintain safety, secure access points, and continue monitoring.',
        },
        {
          term: 'Behavioral Warning Signs',
          definition:
            'Observable actions (loitering, casing, repeated checking) that may indicate suspicious intent.',
        },
        {
          term: 'Briefing',
          definition:
            'Short instructions given before duty or during handover covering risks, priorities, and updates.',
        },
      ],

      C: [
        {
          term: 'CCTV (Closed-Circuit Television)',
          definition:
            'Camera surveillance used to monitor activity in real-time and review footage for investigations and reporting.',
        },
        {
          term: 'Control Room',
          definition:
            'The central point where surveillance, alarms, communication, and incident coordination are managed.',
        },
        {
          term: 'Crowd Control',
          definition:
            'Organizing and directing people during events or busy areas to prevent disorder, conflict, or unsafe situations.',
        },
        {
          term: 'Checkpoint',
          definition:
            'A controlled location where IDs, passes, and vehicle/material checks are performed.',
        },
        {
          term: 'Chain of Custody',
          definition:
            'A documented record showing how evidence is collected, handled, stored, and transferred.',
        },
        {
          term: 'Communication Protocol',
          definition:
            'Standard rules for radio/phone communication to ensure clarity, accuracy, and fast response.',
        },
        {
          term: 'Conflict De-escalation',
          definition:
            'Calm communication techniques used to reduce tension and prevent a situation from worsening.',
        },
        {
          term: 'Contractor Control',
          definition:
            'Managing vendor/contractor entry, identity verification, permits, and work-area restrictions.',
        },
        {
          term: 'Code of Conduct',
          definition:
            'Professional rules on behavior, discipline, ethics, and interactions with clients and visitors.',
        },
        {
          term: 'Critical Incident',
          definition:
            'A serious event (major threat, injury, fire, large disturbance) requiring urgent coordinated response.',
        },
      ],

      D: [
        {
          term: 'Deterrence',
          definition:
            'Preventing incidents by maintaining visible security presence, clear rules, and strong access control.',
        },
        {
          term: 'Daily Occurrence Book (DOB)',
          definition:
            'A site logbook used to record shifts, incidents, visitor entries, patrol times, and important observations.',
        },
        {
          term: 'Duty Post',
          definition:
            'A guard’s assigned location and responsibilities, including schedules, patrol points, and reporting lines.',
        },
        {
          term: 'Dispatch',
          definition:
            'Assigning and sending personnel to respond to an alarm, request, or incident.',
        },
        {
          term: 'Duress Alarm',
          definition:
            'A discreet emergency signal used to request immediate help when a person is under threat.',
        },
        {
          term: 'Door Supervisor',
          definition:
            'A guard responsible for managing entry/exit, ID checks, and maintaining order at doors.',
        },
        {
          term: 'Drill (Emergency Drill)',
          definition:
            'A practice exercise to prepare staff and security teams for emergencies and evacuation.',
        },
        {
          term: 'Digital Evidence',
          definition:
            'Recorded material (CCTV clips, photos, access logs) preserved for investigation and reporting.',
        },
        {
          term: 'Dynamic Risk Assessment',
          definition:
            'Quick, on-the-spot evaluation of risk to decide safe actions during changing situations.',
        },
        {
          term: 'Documentation',
          definition:
            'Written records (logs, reports, checklists) used for accountability and service quality.',
        },
      ],

      E: [
        {
          term: 'Emergency Response',
          definition:
            'Planned actions during emergencies such as fire, medical incidents, fights, threats, or natural disasters.',
        },
        {
          term: 'Evacuation',
          definition:
            'Moving people safely out of a dangerous area following a defined route and assembly point procedure.',
        },
        {
          term: 'Escort',
          definition:
            'Accompanying a visitor, VIP, or contractor to ensure safety and prevent unauthorized movement.',
        },
        {
          term: 'Entry Log',
          definition:
            'A record of visitor/vehicle entry and exit details including time, ID, purpose, and approvals.',
        },
        {
          term: 'Equipment Check',
          definition:
            'Verifying essential tools (radio, torch, whistle, ID) are working before starting duty.',
        },
        {
          term: 'Evidence Handling',
          definition:
            'Safe collection, labeling, and storage of items or records linked to an incident.',
        },
        {
          term: 'Emergency Contact List',
          definition:
            'Updated phone numbers and escalation contacts for client, supervisors, and emergency services.',
        },
        {
          term: 'Exclusion Zone',
          definition:
            'An area restricted to keep people away from danger, evidence, or sensitive operations.',
        },
        {
          term: 'Emergency Lighting',
          definition:
            'Backup lighting that supports safe movement during power failure or evacuation.',
        },
        {
          term: 'Escalation',
          definition:
            'Reporting an issue to higher authority when it exceeds routine handling or policy limits.',
        },
      ],

      F: [
        {
          term: 'First Aid',
          definition:
            'Immediate basic medical assistance provided until professional medical help arrives.',
        },
        {
          term: 'Fire Watch',
          definition:
            'Dedicated monitoring of fire risks and systems, especially when fire alarms/sprinklers are under maintenance.',
        },
        {
          term: 'Foot Patrol',
          definition:
            'Patrolling on foot to observe conditions closely and engage quickly when needed.',
        },
        {
          term: 'Forced Entry',
          definition:
            'Attempted or successful entry using force on doors, gates, locks, or barriers.',
        },
        {
          term: 'Facility Patrol',
          definition:
            'Regular checks of rooms, corridors, perimeters, and critical points to detect risks early.',
        },
        {
          term: 'Flashlight Discipline',
          definition:
            'Using a torch effectively (avoid glare, keep visibility) to observe without creating hazards.',
        },
        {
          term: 'Fire Extinguisher Check',
          definition:
            'Ensuring extinguishers are present, accessible, sealed, and within inspection date.',
        },
        {
          term: 'Field Notes',
          definition:
            'Quick, factual notes taken during duty that support accurate reporting later.',
        },
        {
          term: 'Fence Line Inspection',
          definition:
            'Checking fences/walls for damage, gaps, tampering, or climbing marks.',
        },
        {
          term: 'Fraud Prevention',
          definition:
            'Controls to reduce fake IDs, false passes, unauthorized approvals, and document misuse.',
        },
      ],

      G: [
        {
          term: 'Gate Pass',
          definition:
            'A written or approved authorization document for entry/exit of people, vehicles, or materials.',
        },
        {
          term: 'Guard Tour',
          definition:
            'A scheduled patrol route with checkpoints to confirm patrol completion and maintain site coverage.',
        },
        {
          term: 'Gate Control',
          definition:
            'Managing entry/exit at gates through verification, checks, and controlled opening/closing.',
        },
        {
          term: 'General Orders',
          definition:
            'Standard rules that guide guard behavior, vigilance, reporting, and professionalism.',
        },
        {
          term: 'Guest Badge',
          definition:
            'A temporary ID issued to visitors to show permission and limit access scope.',
        },
        {
          term: 'GPS Patrol Tracking',
          definition:
            'Using location logs to confirm patrol coverage, timing, and route compliance.',
        },
        {
          term: 'Group Entry Management',
          definition:
            'Controlling and documenting entry when multiple visitors arrive together.',
        },
        {
          term: 'Grounds Check',
          definition:
            'Inspecting open areas for hazards, tampering, suspicious objects, or unsafe conditions.',
        },
        {
          term: 'Guard Post Check',
          definition:
            'Supervisor verification of guard alertness, uniform, log accuracy, and post readiness.',
        },
        {
          term: 'Grievance Handling',
          definition:
            'Receiving and forwarding complaints professionally and recording them for follow-up.',
        },
      ],

      H: [
        {
          term: 'Hazard Identification',
          definition:
            'Spotting and reporting unsafe conditions (blocked exits, spills, exposed wires) before incidents occur.',
        },
        {
          term: 'Handover',
          definition:
            'Shift change briefing where pending issues, incidents, keys, and instructions are transferred to the next team.',
        },
        {
          term: 'Headcount',
          definition:
            'Counting staff/visitors at an assembly point to confirm everyone is safe during evacuation.',
        },
        {
          term: 'High-Visibility Patrol',
          definition:
            'Patrol style focused on visibility to discourage wrongdoing and reassure occupants.',
        },
        {
          term: 'Hold-Up Alarm',
          definition:
            'An emergency alert used typically in cash areas to request urgent response.',
        },
        {
          term: 'Hotspot Area',
          definition:
            'A location with higher risk (theft, conflict, intrusion) requiring extra monitoring.',
        },
        {
          term: 'Housekeeping (Security)',
          definition:
            'Keeping posts tidy and pathways clear to reduce accidents and maintain professional standards.',
        },
        {
          term: 'Hardening',
          definition:
            'Improving security by strengthening barriers, procedures, and monitoring controls.',
        },
        {
          term: 'Health & Safety Briefing',
          definition:
            'Short briefing on hazards, PPE needs, safe routes, and emergency actions.',
        },
        {
          term: 'Hot Work Permit',
          definition:
            'Authorization and safety conditions required before welding/cutting or similar high-risk work.',
        },
      ],

      I: [
        {
          term: 'Incident Report',
          definition:
            'A written record of what happened, when, where, who was involved, actions taken, and evidence available.',
        },
        {
          term: 'Intrusion',
          definition:
            'Unauthorized entry into premises or restricted zones, often detected through guards, alarms, or CCTV.',
        },
        {
          term: 'Identification (ID) Verification',
          definition:
            'Checking identity using cards/documents or authorized lists to confirm a person’s access rights.',
        },
        {
          term: 'Incident Command',
          definition:
            'A structured approach for assigning roles and coordinating response during major incidents.',
        },
        {
          term: 'Intercom System',
          definition:
            'A communication system used to verify visitors and coordinate entry at gates and doors.',
        },
        {
          term: 'Inspection',
          definition:
            'Checking equipment, doors, locks, and safety systems to confirm they are working properly.',
        },
        {
          term: 'Integrity Check',
          definition:
            'Confirming seals, locks, and restricted items remain intact and untouched.',
        },
        {
          term: 'Isolation',
          definition:
            'Separating an area to protect people, preserve evidence, or prevent escalation.',
        },
        {
          term: 'Information Security (Basic)',
          definition:
            'Protecting sensitive documents and access details from being exposed or misused.',
        },
        {
          term: 'Interview (Witness)',
          definition:
            'Collecting factual statements from witnesses to support accurate incident reporting.',
        },
      ],

      J: [
        {
          term: 'Joint Patrol',
          definition:
            'Patrol conducted by two or more guards to improve safety, visibility, and coverage in sensitive areas.',
        },
        {
          term: 'Job Briefing',
          definition:
            'A quick pre-duty briefing covering tasks, risks, and site priorities for the shift.',
        },
        {
          term: 'Job Safety Analysis (JSA)',
          definition:
            'A short risk review of a task to identify hazards and safe steps before work begins.',
        },
        {
          term: 'Journal Entry',
          definition:
            'A timed log note recording observations, actions, and communications during duty.',
        },
        {
          term: 'Jurisdiction Awareness',
          definition:
            'Knowing what actions must be escalated to management or authorities under local rules and client policy.',
        },
        {
          term: 'Jamming Detection',
          definition:
            'Recognizing signs that communication signals (radio, CCTV links) may be disrupted.',
        },
        {
          term: 'Junction Check',
          definition:
            'Monitoring a key crossing point (roads/corridors) where unauthorized movement may occur.',
        },
        {
          term: 'Jump Bag (Emergency Kit)',
          definition:
            'A ready kit (basic supplies, contacts, tools) used for quick response and field support.',
        },
        {
          term: 'Justification (In Reports)',
          definition:
            'Explaining why an action was taken using facts, policy, and observed risk.',
        },
        {
          term: 'Juvenile Protocol',
          definition:
            'Extra care procedures when incidents involve minors, focusing on safety and proper escalation.',
        },
      ],

      K: [
        {
          term: 'Key Control',
          definition:
            'System for issuing, tracking, and storing keys to prevent misuse and maintain accountability.',
        },
        {
          term: 'Key Log',
          definition:
            'A record showing when keys are issued/returned and by whom.',
        },
        {
          term: 'Key Safe',
          definition:
            'A secured storage box or cabinet used to keep keys protected and accessible only to authorized staff.',
        },
        {
          term: 'Known Visitor List',
          definition:
            'An approved list of frequent visitors or vendors who still require verification at entry.',
        },
        {
          term: 'Knock Procedure',
          definition:
            'A standard approach to announce presence before entering rooms or restricted spaces.',
        },
        {
          term: 'K-9 Support',
          definition:
            'Use of trained dogs (where permitted) to assist in patrol, detection, or crowd management.',
        },
        {
          term: 'Key & Lock Audit',
          definition:
            'Periodic checking of locks and key counts to confirm no missing keys or tampering.',
        },
        {
          term: 'Kiosk / Reception Desk Security',
          definition:
            'Security control at reception for ID checks, visitor passes, and entry guidance.',
        },
        {
          term: 'Knife/Sharp Object Policy',
          definition:
            'Site rules that restrict or control sharp objects to maintain safety and compliance.',
        },
        {
          term: 'Kit Inspection',
          definition:
            'Checking duty equipment readiness (radio, torch, ID, notebook) before and during shift.',
        },
      ],

      L: [
        {
          term: 'Lockdown',
          definition:
            'Securing entrances/exits and restricting movement due to a threat or serious incident.',
        },
        {
          term: 'Loss Prevention',
          definition:
            'Measures to reduce theft, shrinkage, and damage through monitoring, checks, and proper procedures.',
        },
        {
          term: 'Lone Worker',
          definition:
            'A staff member working alone who may need extra check-ins and safety controls.',
        },
        {
          term: 'Lighting Survey',
          definition:
            'Checking lighting coverage to reduce dark spots and improve CCTV and patrol visibility.',
        },
        {
          term: 'Logbook',
          definition:
            'A duty record where guards write entries about patrols, incidents, and key events.',
        },
        {
          term: 'Liaison Officer',
          definition:
            'A point person who coordinates between the client and the security team for smooth operations.',
        },
        {
          term: 'Load-out Check',
          definition:
            'Verification of materials leaving a site to prevent unauthorized removal of assets.',
        },
        {
          term: 'Line of Sight',
          definition:
            'A viewing angle or position that allows guards or CCTV to observe critical points clearly.',
        },
        {
          term: 'Lock & Seal Check',
          definition:
            'Confirming doors, storage rooms, and sealed areas are properly secured and intact.',
        },
        {
          term: 'Level of Service',
          definition:
            'The agreed security coverage and standards (posts, patrol frequency, response expectations).',
        },
      ],

      M: [
        {
          term: 'Metal Detector (Screening)',
          definition:
            'Device used to identify metallic objects during entry screening to enhance safety and prevent prohibited items.',
        },
        {
          term: 'Monitoring',
          definition:
            'Continuous observation of people, vehicles, alarms, and CCTV feeds to identify risks or unusual activity.',
        },
        {
          term: 'Mobile Patrol',
          definition:
            'A patrol unit that moves between sites or zones to provide coverage and quick support.',
        },
        {
          term: 'Muster Point',
          definition:
            'A designated gathering area used for evacuation headcount and coordination.',
        },
        {
          term: 'Material Pass',
          definition:
            'Authorization that documents and approves movement of materials in/out of a facility.',
        },
        {
          term: 'Modus Operandi (MO)',
          definition:
            'A typical method used by offenders (e.g., repeated patterns) helpful for awareness and prevention.',
        },
        {
          term: 'Missing Property Procedure',
          definition:
            'Steps for reporting and documenting lost/found items and escalating as required.',
        },
        {
          term: 'Maintenance Access Control',
          definition:
            'Verifying technicians, permits, and areas they can enter while work is in progress.',
        },
        {
          term: 'Megaphone / PA Use',
          definition:
            'Using public announcements to give clear instructions during events or emergencies.',
        },
        {
          term: 'Mutual Aid',
          definition:
            'Support provided between teams/sites during peak risk or major incidents.',
        },
      ],

      N: [
        {
          term: 'Night Patrol',
          definition:
            'Security rounds conducted during night hours when risk of intrusion and theft is typically higher.',
        },
        {
          term: 'Near-Miss',
          definition:
            'An event that could have caused harm or loss but did not—reported to prevent future incidents.',
        },
        {
          term: 'Notification Tree',
          definition:
            'A step-by-step list of who to call and in what order during incidents or emergencies.',
        },
        {
          term: 'Nonconformance',
          definition:
            'A deviation from post orders or SOPs that must be recorded and corrected.',
        },
        {
          term: 'NVR (Network Video Recorder)',
          definition:
            'A device/system that records IP camera footage for playback and evidence.',
        },
        {
          term: 'No-Go Area',
          definition:
            'A restricted zone where entry is not permitted without special authorization.',
        },
        {
          term: 'Noise Complaint Response',
          definition:
            'A calm, structured approach to handle noise issues and document actions taken.',
        },
        {
          term: 'Numbered Seal',
          definition:
            'A tamper-evident seal with a unique number used to detect unauthorized opening.',
        },
        {
          term: 'New Hire Orientation (Site)',
          definition:
            'Basic site briefing for new guards covering routes, contacts, rules, and emergency actions.',
        },
        {
          term: 'Notice of Incident',
          definition:
            'A short notification shared with supervisors/client to alert them about an incident and next steps.',
        },
      ],

      O: [
        {
          term: 'Observation',
          definition:
            'A guard’s ability to notice details, changes, and suspicious behavior and report them accurately.',
        },
        {
          term: 'On-Site Supervisor',
          definition:
            'A leader responsible for guard discipline, post checks, reporting quality, and coordination with the client.',
        },
        {
          term: 'Occupancy Limit',
          definition:
            'Maximum number of people allowed in an area to maintain safety and compliance.',
        },
        {
          term: 'Operational Plan',
          definition:
            'A structured plan covering posts, patrols, risks, and response methods for a site or event.',
        },
        {
          term: 'Overnight Watch',
          definition:
            'Security coverage during late hours with focus on access control, patrol, and monitoring.',
        },
        {
          term: 'Open/Close Procedure',
          definition:
            'Steps for securing a site during opening and closing, including lock checks and system status.',
        },
        {
          term: 'Orientation Briefing',
          definition:
            'A briefing for staff/visitors on site rules, restricted areas, and emergency guidance.',
        },
        {
          term: 'Off-Limits Area',
          definition:
            'A space restricted to specific roles or approvals to protect safety and confidentiality.',
        },
        {
          term: 'Occurrence Log',
          definition:
            'A record of notable events during a shift (alarms, visitors, issues, actions).',
        },
        {
          term: 'Order of Escalation',
          definition:
            'The correct sequence for reporting incidents—from guard to supervisor to client/authorities if needed.',
        },
      ],

      P: [
        {
          term: 'Perimeter Security',
          definition:
            'Protection of boundaries such as fences, walls, gates, and outer areas to prevent unauthorized entry.',
        },
        {
          term: 'Post Orders',
          definition:
            'Written instructions that define duties, rules, emergency actions, and reporting requirements for a security post.',
        },
        {
          term: 'Patrol Log',
          definition:
            'A record of patrol times, routes, observations, and any action taken during rounds.',
        },
        {
          term: 'Panic Button',
          definition:
            'A quick emergency trigger used to request immediate help discreetly.',
        },
        {
          term: 'Password / Code Control',
          definition:
            'Rules for safeguarding access codes (gates, systems) and preventing unauthorized sharing.',
        },
        {
          term: 'Patrol Pattern',
          definition:
            'A planned method for patrol movement to cover all critical areas effectively.',
        },
        {
          term: 'Parking Control',
          definition:
            'Managing vehicle entry, parking permissions, and preventing blockage of routes and exits.',
        },
        {
          term: 'Pass Issue Register',
          definition:
            'A record showing which visitor passes were issued, to whom, and when they were returned.',
        },
        {
          term: 'Protective Escort',
          definition:
            'Security-guided movement for people or valuables through safer routes and controlled access.',
        },
        {
          term: 'Public Safety Support',
          definition:
            'Security actions that reduce risk to the public—guidance, safe queues, and hazard reporting.',
        },
      ],

      Q: [
        {
          term: 'Quick Response Team (QRT)',
          definition:
            'A mobile team deployed to handle alarms, urgent incidents, and support guards during high-risk situations.',
        },
        {
          term: 'Queue Management',
          definition:
            'Organizing lines to reduce crowd pressure, prevent conflicts, and keep entry orderly.',
        },
        {
          term: 'Quick Scan',
          definition:
            'A brief visual check of bags/vehicles/areas to identify obvious risks before deeper checks.',
        },
        {
          term: 'Quality Assurance (QA)',
          definition:
            'Checks to ensure security service meets standards—post checks, report audits, and compliance reviews.',
        },
        {
          term: 'Questioning (Professional)',
          definition:
            'Asking clear, respectful questions to verify identity, purpose, and permissions.',
        },
        {
          term: 'QR Code Pass',
          definition:
            'A digital entry pass scanned at gates for verification and faster visitor processing.',
        },
        {
          term: 'Quiet Hours Enforcement',
          definition:
            'Maintaining calm during designated hours by addressing disturbances and documenting actions.',
        },
        {
          term: 'Qualified Visitor List',
          definition:
            'A pre-approved list of visitors allowed to enter under specific conditions and time windows.',
        },
        {
          term: 'Quick Reference Guide',
          definition:
            'A short checklist or card showing emergency actions, contacts, and key procedures.',
        },
        {
          term: 'Quarantine / Isolation Area',
          definition:
            'A separated space used temporarily to manage safety, crowd flow, or incident containment.',
        },
      ],

      R: [
        {
          term: 'Risk Assessment',
          definition:
            'Identifying threats, evaluating likelihood/impact, and planning controls to reduce safety and security risks.',
        },
        {
          term: 'Report Writing',
          definition:
            'Clear, factual documentation of incidents, observations, and actions taken for client and internal records.',
        },
        {
          term: 'Radio Protocol',
          definition:
            'Standard radio rules (call signs, short messages) that keep communication clear and professional.',
        },
        {
          term: 'Response Time',
          definition:
            'The time taken to react and arrive after an alarm, call, or incident is reported.',
        },
        {
          term: 'Roving Patrol',
          definition:
            'A patrol that moves across multiple zones rather than staying at one fixed post.',
        },
        {
          term: 'Restricted Area',
          definition:
            'A controlled zone where access is limited to authorized people only.',
        },
        {
          term: 'Roster',
          definition:
            'A schedule showing guard assignments, shifts, reliefs, and post rotations.',
        },
        {
          term: 'Route Plan',
          definition:
            'A defined patrol path including checkpoints, timings, and high-risk locations.',
        },
        {
          term: 'Relief Guard',
          definition:
            'A guard assigned to temporarily cover a post during breaks, leave, or shift change.',
        },
        {
          term: 'Record Retention',
          definition:
            'Keeping logs, reports, and footage for a defined period according to policy and client needs.',
        },
      ],

      S: [
        {
          term: 'Site Security',
          definition:
            'Protection services at a specific location, including guarding, access control, patrols, and monitoring.',
        },
        {
          term: 'Suspicious Activity',
          definition:
            'Unusual behavior or presence that may indicate theft, intrusion, or threat and should be reported immediately.',
        },
        {
          term: 'Search Procedure',
          definition:
            'Standard method for checking persons/vehicles/materials while respecting safety, policy, and local rules.',
        },
        {
          term: 'Situation Awareness',
          definition:
            'Staying alert to people, environment, and changes so risks can be identified early.',
        },
        {
          term: 'Security Survey',
          definition:
            'A site review to identify weak points and recommend improvements in procedures and controls.',
        },
        {
          term: 'Safety Perimeter',
          definition:
            'A controlled boundary set to keep people away from danger or sensitive incident scenes.',
        },
        {
          term: 'Shift Supervisor',
          definition:
            'A leader responsible for shift discipline, coordination, and quality of reporting.',
        },
        {
          term: 'Standard Operating Procedure (SOP)',
          definition:
            'Written step-by-step instructions to ensure consistent and correct security operations.',
        },
        {
          term: 'Scene Preservation',
          definition:
            'Protecting an incident area to avoid disturbance of evidence and to keep people safe.',
        },
        {
          term: 'Stakeholder Communication',
          definition:
            'Professional updates shared with clients, managers, and teams to keep everyone informed.',
        },
      ],

      T: [
        {
          term: 'Threat',
          definition:
            'Any situation, person, or event that could cause harm, loss, or disruption to people and property.',
        },
        {
          term: 'Trespassing',
          definition:
            'Entering or staying on property without permission, especially in restricted zones.',
        },
        {
          term: 'Tailgating',
          definition:
            'When an unauthorized person follows an authorized person through an access-controlled door or gate.',
        },
        {
          term: 'Traffic Control',
          definition:
            'Directing vehicles safely at gates, parking areas, and event routes to prevent accidents.',
        },
        {
          term: 'Turnstile Control',
          definition:
            'Managing turnstile entry to ensure only authorized people pass through.',
        },
        {
          term: 'Triage (First Response)',
          definition:
            'Basic prioritization during emergencies to help the most urgent cases first until professionals arrive.',
        },
        {
          term: 'Trespass Warning',
          definition:
            'A formal notice that a person is not allowed on the property and must leave (per policy).',
        },
        {
          term: 'Two-Person Rule',
          definition:
            'A safety practice requiring two staff for certain tasks or sensitive areas to reduce risk.',
        },
        {
          term: 'Timekeeping',
          definition:
            'Accurate recording of shift start/end times, patrol timing, and duty checks.',
        },
        {
          term: 'Tactical Communication',
          definition:
            'Clear, calm verbal techniques used to reduce conflict and gain cooperation.',
        },
      ],

      U: [
        {
          term: 'Uniform & Turnout',
          definition:
            'Professional appearance standards for guards including uniform, ID badge, grooming, and readiness.',
        },
        {
          term: 'Unauthorized Access',
          definition:
            'Entry or attempt to enter a restricted area without proper permission.',
        },
        {
          term: 'Use-of-Force Policy (Awareness)',
          definition:
            'Rules that define what actions are permitted, with emphasis on minimum necessary and escalation to authorities.',
        },
        {
          term: 'Undercover Observation',
          definition:
            'Low-profile monitoring (where approved) to identify suspicious behavior without drawing attention.',
        },
        {
          term: 'Utility Shutoff Awareness',
          definition:
            'Knowing key utility points (electric/water) and escalation steps during emergencies.',
        },
        {
          term: 'Unattended Bag',
          definition:
            'A bag left without an owner that must be treated cautiously and reported per procedure.',
        },
        {
          term: 'UHF/VHF Radio',
          definition:
            'Two-way radios used for communication across posts, patrols, and supervisors.',
        },
        {
          term: 'Update Briefing',
          definition:
            'Short briefing shared during shift about new risks, instructions, or changes in procedures.',
        },
        {
          term: 'Unusual Occurrence',
          definition:
            'Any event outside normal routine that should be recorded and possibly escalated.',
        },
        {
          term: 'User Access List',
          definition:
            'A list showing who is permitted to access certain areas, systems, or resources.',
        },
      ],

      V: [
        {
          term: 'Visitor Management',
          definition:
            'Process of verifying visitors, recording entry/exit, issuing passes, and escorting when required.',
        },
        {
          term: 'Vehicle Check',
          definition:
            'Inspection of vehicles entering/leaving premises, including ID verification, gate pass confirmation, and material checks.',
        },
        {
          term: 'Verification',
          definition:
            'Confirming identity, authorization, and purpose before granting access.',
        },
        {
          term: 'Vulnerability',
          definition:
            'A weakness that can be exploited (poor lighting, broken fence, weak procedure).',
        },
        {
          term: 'Venue Security',
          definition:
            'Security operations for events including entry screening, crowd control, and emergency readiness.',
        },
        {
          term: 'Video Review',
          definition:
            'Checking CCTV footage to confirm events, support reports, and preserve evidence.',
        },
        {
          term: 'Valuables Handling',
          definition:
            'Safe processes for protecting and documenting cash or high-value items on site.',
        },
        {
          term: 'Vendor Access Control',
          definition:
            'Verifying vendors, permits, work scope, and limiting access to approved areas only.',
        },
        {
          term: 'Visitor Escort',
          definition:
            'Guiding visitors inside the site to ensure they do not enter restricted zones.',
        },
        {
          term: 'Voluntary Statement',
          definition:
            'A factual written account provided by a witness or involved person for documentation.',
        },
      ],

      W: [
        {
          term: 'Watchman / Security Guard',
          definition:
            'A trained professional responsible for protecting people, property, and maintaining order at the assigned site.',
        },
        {
          term: 'Workplace Safety',
          definition:
            'Practices that reduce accidents and ensure safe conditions, supported by hazard reporting and compliance.',
        },
        {
          term: 'Walkthrough',
          definition:
            'A guided inspection of a site to identify risks, verify controls, and confirm readiness.',
        },
        {
          term: 'Warning Signage',
          definition:
            'Signs used to inform rules, restricted areas, CCTV coverage, and safety instructions.',
        },
        {
          term: 'Welfare Check',
          definition:
            'A check to confirm a person’s safety, especially when someone is missing or unresponsive.',
        },
        {
          term: 'Witness Statement',
          definition:
            'A written factual account from a witness used to support incident reporting.',
        },
        {
          term: 'Work Permit System',
          definition:
            'A process that authorizes certain work (maintenance, hot work) with safety conditions and approvals.',
        },
        {
          term: 'Weapon Prohibition Policy',
          definition:
            'Site rules restricting weapons and dangerous items to maintain safety and compliance.',
        },
        {
          term: 'Worksite Orientation',
          definition:
            'A briefing for staff/contractors on site rules, access limits, and emergency procedures.',
        },
        {
          term: 'Wayfinding Control',
          definition:
            'Guiding people to correct routes/exits to reduce confusion and prevent restricted access.',
        },
      ],

      X: [
        {
          term: 'X-Ray Screening',
          definition:
            'Security screening method used at high-security sites to inspect bags and parcels for prohibited items.',
        },
        {
          term: 'X-Check (Cross-Check)',
          definition:
            'A secondary verification step to confirm details like ID, entry logs, or approvals.',
        },
        {
          term: 'X-Pattern Sweep',
          definition:
            'A cross-pattern area check used to improve coverage during inspections or patrol sweeps.',
        },
        {
          term: 'X-Route (Alternate Route)',
          definition:
            'A backup movement route used when normal access is blocked or risky.',
        },
        {
          term: 'X-Tag (Exception Tag)',
          definition:
            'A label used to mark items needing extra verification or special handling.',
        },
        {
          term: 'X-Stamp (Time Stamp)',
          definition:
            'A recorded time marker on logs/footage used to track exact timing of events.',
        },
        {
          term: 'X-Barrier (Cross Barrier)',
          definition:
            'A crossing barrier used to control vehicle movement at gates or parking exits.',
        },
        {
          term: 'X-Coordinate (Grid Reference)',
          definition:
            'A coordinate reference used to describe a precise location on a site map.',
        },
        {
          term: 'X-Lock Procedure',
          definition:
            'A cross-check lock routine where two points are secured and verified before leaving an area.',
        },
        {
          term: 'X-Alert (Exception Alert)',
          definition:
            'An alert raised when something deviates from normal—unplanned entry, unusual movement, or system fault.',
        },
      ],

      Y: [
        {
          term: 'Yard / Perimeter Round',
          definition:
            'Security patrol around open areas and boundary lines to detect breaches, damage, or suspicious movement.',
        },
        {
          term: 'Yard Gate Control',
          definition:
            'Managing entry/exit at yard gates, including checks for vehicles, materials, and approvals.',
        },
        {
          term: 'Yard Lighting Check',
          definition:
            'Verifying outdoor lights work properly to reduce dark spots and improve CCTV visibility.',
        },
        {
          term: 'Yard CCTV Coverage',
          definition:
            'Ensuring cameras cover open areas and blind spots are minimized.',
        },
        {
          term: 'Yard Asset Inventory',
          definition:
            'Periodic verification of stored items/equipment to prevent loss or unauthorized movement.',
        },
        {
          term: 'Yield Point',
          definition:
            'A point where vehicles must slow/stop for verification or safe merging at gates and crossings.',
        },
        {
          term: 'Yearly Drill',
          definition:
            'Annual practice of emergency response procedures to maintain readiness and compliance.',
        },
        {
          term: 'Youth Visitor Protocol',
          definition:
            'Extra care steps when visitors are minors, including verification and proper supervision.',
        },
        {
          term: 'Yes/No Verification Questions',
          definition:
            'Simple, direct questions used to confirm identity and purpose quickly at entry points.',
        },
        {
          term: 'Yard Patrol Route',
          definition:
            'A defined patrol path covering boundary lines, storage zones, and high-risk open areas.',
        },
      ],

      Z: [
        {
          term: 'Zero Tolerance Policy',
          definition:
            'A strict rule set where serious violations (violence, theft, substance use on duty) lead to immediate action.',
        },
        {
          term: 'Zone (Security Zone)',
          definition:
            'A defined area on a site map with specific access rules and monitoring requirements.',
        },
        {
          term: 'Zone Patrol',
          definition:
            'Patrol activity focused on a specific zone to ensure continuous coverage and quick detection.',
        },
        {
          term: 'Zone Map',
          definition:
            'A site layout showing zones, checkpoints, restricted areas, and patrol routes.',
        },
        {
          term: 'Zone Access Level',
          definition:
            'A permission level that decides who can enter certain zones (staff, visitor, contractor).',
        },
        {
          term: 'Zonal Supervisor',
          definition:
            'A supervisor responsible for oversight of multiple posts or areas within a defined zone.',
        },
        {
          term: 'Zoning (Area Zoning)',
          definition:
            'Dividing a site into manageable areas so duties, patrols, and controls are clearly assigned.',
        },
        {
          term: 'Zoom Control (PTZ CCTV)',
          definition:
            'Using camera zoom (where available) to observe details more clearly while monitoring.',
        },
        {
          term: 'Z-Report (Zone Report)',
          definition:
            'A zone-specific summary report covering patrols, incidents, and observations for that area.',
        },
        {
          term: 'Zig-Zag Approach Lane',
          definition:
            'A controlled vehicle approach layout that slows traffic for safer checks and verification at gates.',
        },
      ],
    }),
    []
  );


  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const availableLetters = Object.keys(glossaryTerms);

  return (
    <div className="h-full">
      <Ribbon name="Security Glossary" showfont={false} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* Intro */}
        <div className="mb-6">
          <p className="text2 text-sm md:text-base leading-relaxed">
            Explore common security terms used at Sudarshan Security Services—use the letters below to jump to each section.
          </p>
        </div>

        {/* Alphabet Navigation */}
        <div className="card rounded-lg py-4 px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {alphabet.map((letter) => {
              const enabled = availableLetters.includes(letter);
              const active = selectedLetter === letter;

              return (
                <button
                  key={letter}
                  onClick={() => enabled && setSelectedLetter(letter)}
                  className={`w-8 h-8 flex items-center justify-center font-bold text-sm rounded transition-all
                    ${enabled
                      ? active
                        ? 'bg-teal-700 text-white'
                        : 'bg-white text-gray-800 hover:bg-teal-100'
                      : 'text-gray-400 cursor-not-allowed'
                    }`}
                  disabled={!enabled}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms[selectedLetter]?.map((item, index) => (
            <div
              key={index}
              className="footer border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-3">{item.term}</h3>
              <p className="text-sm text2 leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!glossaryTerms[selectedLetter] && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No terms available for letter {selectedLetter}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
