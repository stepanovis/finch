import { createElement } from '../core/dom.js';

export const Competition = () => {
    const header = createElement('div', ['text-center', 'mb-8'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-blue-400', 'mb-2'], ['COMPETITIVE ADVANTAGES']),
        createElement('p', ['text-xl', 'text-gray-300', 'font-light'], ['What Makes Finch Unique'])
    ]);

    // Legend
    const legend = createElement('div', ['flex', 'items-center', 'justify-center', 'space-x-8', 'mb-12', 'text-sm', 'text-gray-400'], [
        createElement('div', ['flex', 'items-center', 'space-x-2'], [
            createElement('span', ['text-gray-500', 'font-mono'], ['Legacy GRC:']),
            createElement('span', ['text-gray-300'], ['Oracle, Archer'])
        ]),
        createElement('div', ['flex', 'items-center', 'space-x-2'], [
            createElement('span', ['text-yellow-500', 'font-mono'], ['Cloud Compliance:']),
            createElement('span', ['text-gray-300'], ['ComplyAdvantage, Unit21'])
        ]),
        createElement('div', ['flex', 'items-center', 'space-x-2'], [
            createElement('span', ['text-red-500', 'font-mono'], ['Public AI:']),
            createElement('span', ['text-gray-300'], ['Harvey, ChatGPT'])
        ])
    ]);

    // Our advantages (not competitors)
    const advantages = [
        {
            title: 'FLEXIBLE DEPLOYMENT',
            description: 'One product that scales with your business: start on Public AI for speed, move to Private VPC for compliance, deploy On-Premise for full sovereignty. No vendor lock-in, no product replacement — Finch grows with you from startup to enterprise.',
            color: 'blue',
            competitors: [
                'Legacy GRC: On-prem only, too heavy for startups',
                'Cloud Compliance: Cloud only, lose customers at enterprise stage',
                'Public AI: Banned by 65% of US banks due to data egress'
            ]
        },
        {
            title: 'AI + CODE PLUG-INS',
            description: 'LLM parses natural language requests, deterministic code executes decisions. Write custom compliance logic as Python/JS plug-ins for simple cases — fast, cheap, no AI latency. Reserve expensive LLM processing for complex edge cases that need human judgment.',
            color: 'purple',
            competitors: [
                'Legacy GRC: Manual rules only, no AI assistance',
                'Cloud Compliance: UI-based rules, limited customization',
                'Public AI: Black box LLM, hallucination risks, no deterministic fallback'
            ]
        },
        {
            title: 'LIVING VAULT',
            description: 'Your compliance policies become queryable knowledge. AI automatically references your internal AML manual, KYC guidelines, privacy policies — not just generic risk scores. Auto-diffs new regulations against your policies and flags gaps in real-time.',
            color: 'emerald',
            competitors: [
                'Legacy GRC: Policies buried in static PDFs',
                'Cloud Compliance: Generic risk scoring, not policy-aware',
                'Public AI: No policy integration, generic legal advice'
            ]
        },
        {
            title: 'CRYPTOGRAPHIC TRAIL',
            description: 'Every decision cryptographically signed and hashed into an immutable chain. Zero-Knowledge Proofs let you prove compliance to auditors without exposing PII. Tamper-proof audit logs that legally stand up in court — not editable database records.',
            color: 'yellow',
            competitors: [
                'Legacy GRC: Static logs in files/databases (editable)',
                'Cloud Compliance: Database logs (can be modified)',
                'Public AI: No audit trail, black box decisions'
            ]
        },
        {
            title: 'LEARNING MEMORY',
            description: 'System learns from your compliance officers\' decisions. When an officer overrides AI recommendation, Finch adjusts weights and improves future decisions. The longer you use Finch, the smarter it gets at understanding your specific risk appetite and compliance standards.',
            color: 'blue',
            competitors: [
                'Legacy GRC: Static rules, no learning capability',
                'Cloud Compliance: Generic ML models, not personalized to your decisions',
                'Public AI: Learns globally, not from your specific feedback'
            ]
        },
        {
            title: 'FAST TIME-TO-VALUE',
            description: 'Container deployment in hours, not months. Start processing compliance checks in days with pre-built integrations to major KYC providers (SumSub, Veriff, Jumio). Shadow mode lets you validate accuracy alongside existing workflows before full rollout.',
            color: 'purple',
            competitors: [
                'Legacy GRC: 6-18 month implementation cycles',
                'Cloud Compliance: Weeks for integration and testing',
                'Public AI: Fast setup, but no compliance-specific features'
            ]
        }
    ];

    // Advantage cards
    const advantageCards = createElement('div', ['grid', 'grid-cols-3', 'gap-6', 'max-w-7xl', 'mx-auto'],
        advantages.map(advantage =>
            createElement('div', [
                'bg-gray-800/50', 'p-8', 'rounded-lg', 'border-2',
                'border-' + advantage.color + '-800',
                'hover:border-' + advantage.color + '-600', 'transition-all'
            ], [
                // Top section (fixed height)
                createElement('div', ['mb-4'], [
                    // Title - fixed height for 2 lines
                    createElement('div', ['h-16', 'mb-4', 'flex', 'items-start'], [
                        createElement('h3', ['text-2xl', 'font-bold', 'text-' + advantage.color + '-400', 'leading-tight'], [advantage.title])
                    ]),

                    // Description (our advantage) - fixed height
                    createElement('div', ['h-40', 'mb-6'], [
                        createElement('p', ['text-sm', 'text-gray-300', 'leading-relaxed'], [advantage.description])
                    ])
                ]),

                // Divider
                createElement('div', ['h-px', 'bg-gray-700', 'mb-4']),

                // Competitors (what they lack)
                createElement('div', ['space-y-2'],
                    advantage.competitors.map(competitor =>
                        createElement('div', ['flex', 'items-start', 'space-x-2'], [
                            createElement('span', ['text-red-400', 'text-xs', 'mt-0.5'], ['✗']),
                            createElement('span', ['text-xs', 'text-gray-500', 'leading-relaxed'], [competitor])
                        ])
                    )
                )
            ])
        )
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        legend,
        advantageCards
    ]);
};
