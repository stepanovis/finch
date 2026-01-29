import { createElement } from '../core/dom.js';

export const PreSeed = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['PRE-SEED: TECH VALIDATION ROUND']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['10M+ CHECKS'])
    ]);

    // Left side - Ask details
    const askDetails = createElement('div', ['space-y-8'], [
        // Total Ask
        createElement('div', ['bg-blue-900/20', 'border-2', 'border-blue-700', 'p-8', 'rounded-lg'], [
            createElement('div', ['text-sm', 'text-blue-400', 'font-mono', 'uppercase', 'tracking-wider', 'mb-2'], ['Total Ask (SAFE)']),
            createElement('div', ['text-6xl', 'font-bold', 'text-white', 'mb-2'], ['$500,000']),
            createElement('div', ['text-sm', 'text-gray-400'], ['Target closing: Q1 2026'])
        ]),

        // Operational Runway
        createElement('div', ['bg-gray-800/50', 'border', 'border-gray-700', 'p-8', 'rounded-lg'], [
            createElement('div', ['text-sm', 'text-gray-400', 'font-mono', 'uppercase', 'tracking-wider', 'mb-2'], ['Operational Runway']),
            createElement('div', ['text-5xl', 'font-bold', 'text-blue-400'], ['12 Months'])
        ])
    ]);

    // Right side - Capital Allocation
    const allocation = [
        {
            title: 'Engineering',
            description: 'Container Finalization & Core Infra',
            percentage: 60,
            color: 'blue'
        },
        {
            title: 'Security Audits',
            description: 'SOC2 Preparation & Pen Testing',
            percentage: 25,
            color: 'purple'
        },
        {
            title: 'Pilot Program',
            description: 'Deployment & Partner Onboarding',
            percentage: 15,
            color: 'emerald'
        }
    ];

    const allocationSection = createElement('div', [], [
        // Header
        createElement('div', ['text-center', 'mb-6'], [
            createElement('div', ['text-sm', 'text-gray-400', 'font-mono', 'uppercase', 'tracking-wider', 'mb-2'], ['Capital Allocation'])
        ]),

        // Allocation items
        createElement('div', ['space-y-6'],
            allocation.map(item =>
                createElement('div', [], [
                    // Title and percentage
                    createElement('div', ['flex', 'items-center', 'justify-between', 'mb-2'], [
                        createElement('div', ['text-lg', 'font-bold', 'text-white'], [item.title]),
                        createElement('div', ['text-3xl', 'font-bold', 'text-' + item.color + '-400'], [item.percentage + '%'])
                    ]),

                    // Description
                    createElement('div', ['text-sm', 'text-gray-400', 'mb-3'], [item.description]),

                    // Progress bar
                    createElement('div', ['w-full', 'h-2', 'bg-gray-800', 'rounded-full', 'overflow-hidden'], [
                        createElement('div', [
                            'h-full', 'transition-all'
                        ], [], {
                            style: `width: ${item.percentage}%; background-color: ${item.color === 'blue' ? '#3b82f6' : item.color === 'purple' ? '#a855f7' : '#10b981'}`
                        })
                    ])
                ])
            )
        )
    ]);

    // Two column layout
    const content = createElement('div', ['grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12', 'max-w-7xl', 'mx-auto'], [
        askDetails,
        allocationSection
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        content
    ]);
};
