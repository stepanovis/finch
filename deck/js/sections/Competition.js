import { createElement } from '../core/dom.js';

export const Competition = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE COMPETITION']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['GENERALIST AI CAN\'T WIN COMPLIANCE'])
    ]);

    // Competitors data
    const competitors = [
        {
            category: 'LEGACY GRC',
            name: 'Oracle, Archer',
            badge: 'OBSOLESCENT',
            badgeColor: 'gray',
            attributes: [
                { label: 'DEPLOYMENT', value: 'On-Prem / Cloud', status: 'good' },
                { label: 'PRIVACY', value: 'High', status: 'good' },
                { label: 'DECISION LOGIC', value: 'Manual / Rules', status: 'bad' },
                { label: 'AUDIT TRAIL', value: 'Static Logs', status: 'bad' },
                { label: 'SETUP TIME', value: '6-18 Months', status: 'bad' }
            ]
        },
        {
            category: 'PUBLIC AI WRAPPERS',
            name: 'Harvey, ChatGPT',
            badge: 'HIGH RISK',
            badgeColor: 'red',
            hasWarning: true,
            attributes: [
                { label: 'DEPLOYMENT', value: 'Public Cloud', status: 'bad' },
                { label: 'PRIVACY', value: 'None (Data Training Risk)', status: 'bad' },
                { label: 'DECISION LOGIC', value: 'HIGH Hallucinations Risks', status: 'warning' },
                { label: 'AUDIT TRAIL', value: 'BlackBox', status: 'bad' },
                { label: 'SETUP TIME', value: 'Minutes', status: 'good' }
            ]
        },
        {
            category: 'SOVEREIGN OS',
            name: 'Finch',
            badge: 'SOVEREIGN & SPECIALIZED',
            badgeColor: 'blue',
            recommended: true,
            attributes: [
                { label: 'DEPLOYMENT', value: 'Customer VPC/On-Prem', status: 'good' },
                { label: 'PRIVACY', value: 'Zero Egress (Sovereign)', status: 'good' },
                { label: 'DECISION LOGIC', value: 'AI + Deterministic Plug-ins', status: 'good' },
                { label: 'AUDIT TRAIL', value: 'Cryptographic Proof (ZKP)', status: 'good' },
                { label: 'SETUP TIME', value: 'Hours / Days', status: 'bad' }
            ]
        }
    ];

    const getStatusIcon = (status) => {
        if (status === 'good') {
            return createElement('span', ['text-blue-400', 'mr-2'], ['✓']);
        } else if (status === 'bad') {
            return createElement('span', ['text-red-400', 'mr-2'], ['✗']);
        } else if (status === 'warning') {
            return createElement('span', ['text-yellow-400', 'mr-2'], ['⚠']);
        }
        return null;
    };

    const competitorCards = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'max-w-7xl', 'mx-auto'],
        competitors.map(competitor => {
            const cardClasses = [
                'p-6', 'rounded-lg', 'border', 'border-gray-700', 'bg-gray-800/50', 'relative'
            ];

            // Add warning background for HIGH RISK
            if (competitor.hasWarning) {
                cardClasses.push('overflow-hidden');
            }

            const cardContent = [
                // Category label with icon
                createElement('div', ['flex', 'items-center', 'space-x-2', 'mb-4'], [
                    createElement('span', ['text-gray-500', 'text-sm', 'font-mono'], [competitor.category])
                ]),

                // Name
                createElement('div', ['text-2xl', 'font-bold', 'text-white', 'mb-3'], [competitor.name]),

                // Badge
                createElement('div', [
                    'inline-block', 'px-3', 'py-1', 'rounded', 'text-xs', 'font-mono', 'mb-6',
                    ...(competitor.badgeColor === 'gray' ? ['bg-gray-700', 'text-gray-300'] : []),
                    ...(competitor.badgeColor === 'red' ? ['bg-red-900/50', 'text-red-400', 'border', 'border-red-800'] : []),
                    ...(competitor.badgeColor === 'blue' ? ['bg-blue-900/50', 'text-blue-400', 'border', 'border-blue-800'] : [])
                ], [competitor.badge]),

                // Attributes
                createElement('div', ['space-y-4'],
                    competitor.attributes.map(attr =>
                        createElement('div', [], [
                            createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'mb-1'], [attr.label]),
                            createElement('div', ['flex', 'items-center', 'text-sm'], [
                                getStatusIcon(attr.status),
                                createElement('span', [
                                    attr.status === 'good' ? 'text-gray-300' : '',
                                    attr.status === 'bad' ? 'text-red-400' : '',
                                    attr.status === 'warning' ? 'text-yellow-400' : ''
                                ].filter(Boolean), [attr.value])
                            ])
                        ])
                    )
                )
            ];

            // Add RECOMMENDED badge for Finch
            if (competitor.recommended) {
                cardContent.unshift(
                    createElement('div', ['absolute', 'top-4', 'right-4', 'bg-blue-600', 'text-white', 'text-xs', 'font-mono', 'px-2', 'py-1', 'rounded'], ['RECOMMENDED'])
                );
            }

            // Add warning triangle overlay for HIGH RISK
            if (competitor.hasWarning) {
                cardContent.unshift(
                    createElement('div', ['absolute', 'top-0', 'right-0', 'w-32', 'h-32', 'opacity-10'], [
                        createElement('div', ['text-red-500', 'text-9xl', 'font-bold', '-mt-4', '-mr-4'], ['⚠'])
                    ])
                );
            }

            return createElement('div', cardClasses, cardContent);
        })
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        competitorCards
    ]);
};
