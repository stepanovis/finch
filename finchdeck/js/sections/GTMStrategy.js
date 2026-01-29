import { createElement } from '../core/dom.js';

export const GTMStrategy = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE EXECUTION']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['GTM STRATEGY'])
    ]);

    // Three phases
    const phases = [
        {
            number: '01',
            title: 'HIGH-GROWTH FINTECHS',
            subtitle: 'PHASE 01',
            color: 'blue',
            items: [
                { label: 'The Target', value: 'Series B-D Neo-banks & Crypto Exchanges' },
                { label: 'The Pain', value: 'Compliance teams are drowning in false positives and manual review' },
                { label: 'The Pitch', value: '"Stop reviewing 40% of your users manually. Automate 90% of it with Finch"' },
                { label: 'Goal', value: 'Secure high-volume stress testing ($1M ARR)' }
            ]
        },
        {
            number: '02',
            title: 'CHANNEL PARTNERS',
            subtitle: 'PHASE 02',
            color: 'purple',
            items: [
                { label: 'The Target', value: 'SumSub, Veriff, Persona' },
                { label: 'The Logic', value: 'They provide the "Eyes" (ID verification); Finch provides the "Brain" (Decision Policy)' },
                { label: 'The Action', value: 'We integrate as the white-label "Sovereign Logic Layer" inside their dashboards' },
                { label: 'Goal', value: 'Zero-CAC distribution to thousands of their existing clients' }
            ]
        },
        {
            number: '03',
            title: 'ENTERPRISE REPLACEMENT',
            subtitle: 'PHASE 03',
            color: 'emerald',
            items: [
                { label: 'Who', value: 'Tier-1 Banks' },
                { label: 'The Logic', value: 'They are currently blocked from using Cloud AI. They are stuck with legacy, static rule engines (Oracle)' },
                { label: 'The Pitch', value: '"The only AI compliant enough to run inside your firewall"' },
                { label: 'Proof', value: 'We win because we have processed 10M+ checks in Phase 1 & 2' }
            ]
        }
    ];

    // Phase timeline
    const phaseTimeline = createElement('div', ['mb-12'], [
        // Progress bar
        createElement('div', ['flex', 'items-center', 'justify-center', 'mb-8'], [
            createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'tracking-wider'], ['WEDGE']),
            createElement('div', ['flex-1', 'mx-4', 'h-1', 'bg-gradient-to-r', 'from-blue-700', 'via-purple-700', 'to-emerald-700', 'rounded-full']),
            createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'tracking-wider'], ['SCALE'])
        ]),

        // Phase cards
        createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6'],
            phases.map(phase =>
                createElement('div', [
                    'relative', 'p-6', 'rounded-lg', 'bg-gray-800/50', 'border-2', 'border-' + phase.color + '-800',
                    'hover:border-' + phase.color + '-600', 'transition-all'
                ], [
                    // Phase number badge
                    createElement('div', ['absolute', 'top-4', 'right-4', 'w-10', 'h-10', 'rounded-full', 'bg-' + phase.color + '-900/50', 'border', 'border-' + phase.color + '-700', 'flex', 'items-center', 'justify-center'], [
                        createElement('span', ['text-xs', 'font-bold', 'text-' + phase.color + '-400'], [phase.number])
                    ]),

                    // Title
                    createElement('div', ['mb-4'], [
                        createElement('div', ['text-xl', 'font-bold', 'text-' + phase.color + '-400', 'mb-1'], [phase.title]),
                        createElement('div', ['text-sm', 'text-gray-500', 'font-mono'], [phase.subtitle])
                    ]),

                    // Items
                    createElement('div', ['space-y-3'],
                        phase.items.map(item =>
                            createElement('div', [], [
                                createElement('div', ['text-xs', 'text-' + phase.color + '-500', 'font-bold', 'mb-1'], [item.label]),
                                createElement('div', ['text-xs', 'text-gray-300', 'leading-relaxed'], [item.value])
                            ])
                        )
                    )
                ])
            )
        )
    ]);

    // Divider
    const divider = createElement('div', ['flex', 'items-center', 'justify-center', 'mb-8'], [
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent']),
        createElement('div', ['px-6', 'text-blue-400', 'font-mono', 'text-sm', 'uppercase', 'tracking-widest'], ['↓ Geographic ↓']),
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent'])
    ]);

    // Geographic strategy
    const geographicStrategy = createElement('div', ['max-w-5xl', 'mx-auto'], [
        createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8'], [
            // 2026 - Primary Corridor
            createElement('div', ['bg-blue-900/20', 'border', 'border-blue-800', 'p-6', 'rounded-lg'], [
                createElement('div', ['text-center', 'mb-6'], [
                    createElement('div', ['text-sm', 'text-blue-500', 'font-mono', 'uppercase', 'tracking-wider', 'mb-2'], ['2026']),
                    createElement('div', ['text-2xl', 'font-bold', 'text-blue-400'], ['THE PRIMARY CORRIDOR'])
                ]),

                createElement('div', ['space-y-4'], [
                    createElement('div', ['flex', 'items-start', 'space-x-3'], [
                        createElement('span', ['text-2xl'], ['🇺🇸']),
                        createElement('div', ['flex-1'], [
                            createElement('div', ['text-lg', 'font-bold', 'text-white', 'mb-1'], ['USA']),
                            createElement('div', ['text-sm', 'text-gray-400', 'mb-1'], ['Primary Commercial HQ']),
                            createElement('div', ['text-xs', 'text-blue-400', 'font-mono'], ['Target: Mid-Market FinTechs'])
                        ])
                    ]),

                    createElement('div', ['flex', 'items-start', 'space-x-3'], [
                        createElement('span', ['text-2xl'], ['🇧🇷']),
                        createElement('div', ['flex-1'], [
                            createElement('div', ['text-lg', 'font-bold', 'text-white', 'mb-1'], ['BRAZIL']),
                            createElement('div', ['text-sm', 'text-gray-400', 'mb-1'], ['High-Volume Validation']),
                            createElement('div', ['text-xs', 'text-emerald-400', 'font-mono'], ['Target: 5M Checks'])
                        ])
                    ])
                ])
            ]),

            // 2027 - LATAM Expansion
            createElement('div', ['bg-purple-900/20', 'border', 'border-purple-800', 'p-6', 'rounded-lg'], [
                createElement('div', ['text-center', 'mb-6'], [
                    createElement('div', ['text-sm', 'text-purple-500', 'font-mono', 'uppercase', 'tracking-wider', 'mb-2'], ['2027']),
                    createElement('div', ['text-2xl', 'font-bold', 'text-purple-400'], ['LATAM EXPANSION'])
                ]),

                createElement('div', ['space-y-4'], [
                    createElement('div', ['flex', 'items-start', 'space-x-3'], [
                        createElement('span', ['text-2xl'], ['🇲🇽']),
                        createElement('div', ['flex-1'], [
                            createElement('div', ['text-lg', 'font-bold', 'text-white', 'mb-1'], ['MEXICO']),
                            createElement('div', ['text-sm', 'text-gray-400', 'mb-1'], ['Largest FinTech Market']),
                            createElement('div', ['text-xs', 'text-purple-400', 'font-mono'], ['Channel: Partner Network'])
                        ])
                    ]),

                    createElement('div', ['flex', 'items-start', 'space-x-3'], [
                        createElement('span', ['text-2xl'], ['🇦🇷']),
                        createElement('div', ['flex-1'], [
                            createElement('div', ['text-lg', 'font-bold', 'text-white', 'mb-1'], ['ARGENTINA']),
                            createElement('div', ['text-sm', 'text-gray-400', 'mb-1'], ['Crypto-Friendly Regulation']),
                            createElement('div', ['text-xs', 'text-purple-400', 'font-mono'], ['Channel: Partner Network'])
                        ])
                    ]),

                    createElement('div', ['flex', 'items-start', 'space-x-3'], [
                        createElement('span', ['text-2xl'], ['🇨🇴']),
                        createElement('div', ['flex-1'], [
                            createElement('div', ['text-lg', 'font-bold', 'text-white', 'mb-1'], ['COLOMBIA']),
                            createElement('div', ['text-sm', 'text-gray-400', 'mb-1'], ['Growing Neo-Bank Sector']),
                            createElement('div', ['text-xs', 'text-purple-400', 'font-mono'], ['Channel: Partner Network'])
                        ])
                    ]),

                    createElement('div', ['flex', 'items-start', 'space-x-3'], [
                        createElement('span', ['text-2xl'], ['🇨🇱']),
                        createElement('div', ['flex-1'], [
                            createElement('div', ['text-lg', 'font-bold', 'text-white', 'mb-1'], ['CHILE']),
                            createElement('div', ['text-sm', 'text-gray-400', 'mb-1'], ['Stable Regulatory Environment']),
                            createElement('div', ['text-xs', 'text-purple-400', 'font-mono'], ['Channel: Partner Network'])
                        ])
                    ])
                ])
            ])
        ])
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        phaseTimeline,
        divider,
        geographicStrategy
    ]);
};
