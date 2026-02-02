import { createElement } from '../core/dom.js';

export const CurrentStatus = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['CURRENT STATUS & ROADMAP'])
    ]);

    // Timeline data
    const timeline = [
        {
            phase: 'Q1 2026: Alpha',
            status: 'CURRENT PHASE',
            label: 'We are here',
            color: 'blue',
            active: true,
            items: [
                { title: 'Finch Core Live', description: 'Core engine is processing complex AML manuals directly into executable code with deterministic logic output' },
                { title: 'Architecture Verified', description: 'Technical audit completed by ex-Databricks & SumSub engineering leadership validating infrastructure design' },
                { title: 'Pipeline Validated', description: 'End-to-end "PDF to Rule" ingestion pipeline fully operational and processing live compliance documents' }
            ]
        },
        {
            phase: 'Q2 2026: Pilot',
            status: 'UPCOMING',
            label: 'Next milestone',
            color: 'gray',
            active: false,
            items: [
                { title: '3 Design Partners', description: 'Deploying with strategic Mid-Market FinTechs to validate product-market fit and gather real-world feedback' },
                { title: 'Shadow Mode', description: 'Running alongside human teams to prove accuracy without risk, benchmarking against manual compliance workflows' },
                { title: 'Zero False Negatives', description: 'Benchmarking against historical transaction data to ensure no legitimate transactions are incorrectly flagged' }
            ]
        },
        {
            phase: 'Q3 2026: Launch',
            status: 'TARGET',
            label: 'Commercial launch',
            color: 'green',
            active: false,
            items: [
                { title: '$1M ARR Run Rate', description: 'Commercial Launch with Seed Round funding secure, targeting initial revenue milestone with paying customers' },
                { title: 'ZK Proofs', description: 'Launch Zero-Knowledge cryptographic proofs for external auditors enabling privacy-preserving compliance verification' },
                { title: 'Ecosystem Live', description: 'Live deep integration with SumSub and Veriff ecosystems, enabling white-label distribution' }
            ]
        }
    ];

    // Timeline visualization
    const timelineViz = createElement('div', ['mb-16'], [
        // Timeline with circles and cards
        createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'max-w-7xl', 'mx-auto'],
            timeline.map((phase, index) => {
                const isLast = index === timeline.length - 1;
                return createElement('div', ['flex', 'flex-col', 'items-center'], [
                    // Circle and status badge
                    createElement('div', ['flex', 'flex-col', 'items-center', 'mb-6'], [
                        // Status badge
                        createElement('div', [
                            'mb-4', 'px-3', 'py-1', 'rounded', 'text-xs', 'font-mono', 'whitespace-nowrap',
                            phase.active ? 'bg-blue-900/50 border border-blue-700 text-blue-400' : 'bg-gray-900 border border-gray-700 text-gray-500'
                        ], [phase.status]),

                        // Circle
                        createElement('div', [
                            'w-16', 'h-16', 'rounded-full', 'border-4',
                            phase.active ? 'border-blue-500 bg-blue-900/50' : 'border-gray-700 bg-gray-900',
                            'flex', 'items-center', 'justify-center'
                        ], [
                            createElement('span', ['text-2xl'], [phase.active ? '📍' : '○'])
                        ])
                    ]),

                    // Card
                    createElement('div', [
                        'w-full', 'bg-gray-800/50', 'p-6', 'rounded-lg', 'border-2',
                        phase.active ? 'border-blue-600' : 'border-gray-700',
                        'hover:border-' + phase.color + '-600', 'transition-all'
                    ], [
                        // Phase header
                        createElement('div', ['text-center', 'mb-6', 'pb-4', 'border-b', 'border-gray-700'], [
                            createElement('div', ['text-2xl', 'font-bold', phase.active ? 'text-blue-400' : 'text-' + phase.color + '-400', 'mb-1'], [phase.phase]),
                            createElement('div', ['text-xs', 'text-gray-500', 'font-mono'], [phase.label])
                        ]),

                        // Items
                        createElement('div', ['space-y-4'],
                            phase.items.map(item =>
                                createElement('div', [], [
                                    createElement('div', ['text-sm', 'font-bold', phase.active ? 'text-blue-300' : 'text-white', 'mb-1'], [item.title]),
                                    createElement('div', ['text-xs', 'text-gray-400', 'leading-relaxed'], [item.description])
                                ])
                            )
                        )
                    ])
                ]);
            })
        )
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        timelineViz
    ]);
};
