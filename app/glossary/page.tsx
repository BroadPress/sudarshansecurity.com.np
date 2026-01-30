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

  // ✅ Sudarshan Security Services glossary (security-focused)
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
      ],
      J: [
        {
          term: 'Joint Patrol',
          definition:
            'Patrol conducted by two or more guards to improve safety, visibility, and coverage in sensitive areas.',
        },
      ],
      K: [
        {
          term: 'Key Control',
          definition:
            'System for issuing, tracking, and storing keys to prevent misuse and maintain accountability.',
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
      ],
      N: [
        {
          term: 'Night Patrol',
          definition:
            'Security rounds conducted during night hours when risk of intrusion and theft is typically higher.',
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
      ],
      Q: [
        {
          term: 'Quick Response Team (QRT)',
          definition:
            'A mobile team deployed to handle alarms, urgent incidents, and support guards during high-risk situations.',
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
      ],
      U: [
        {
          term: 'Uniform & Turnout',
          definition:
            'Professional appearance standards for guards including uniform, ID badge, grooming, and readiness.',
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
      ],
      X: [
        {
          term: 'X-Ray Screening',
          definition:
            'Security screening method used at high-security sites to inspect bags and parcels for prohibited items.',
        },
      ],
      Y: [
        {
          term: 'Yard / Perimeter Round',
          definition:
            'Security patrol around open areas and boundary lines to detect breaches, damage, or suspicious movement.',
        },
      ],
      Z: [
        {
          term: 'Zero Tolerance Policy',
          definition:
            'A strict rule set where serious violations (violence, theft, substance use on duty) lead to immediate action.',
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
