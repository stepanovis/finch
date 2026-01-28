import { createElement } from '../core/dom.js';

export const Opportunity = () => {
    const header = createElement('div', ['text-center', 'mb-16'], [
        createElement('h2', ['text-3xl', 'font-bold', 'text-blue-400', 'mb-4'], ['THE OPPORTUNITY:']),
        createElement('h3', ['text-5xl', 'font-bold', 'text-white', 'leading-tight'], [
            'AUTOMATE REGULATED',
            createElement('br'),
            'LEGAL WORKFLOWS WITH',
            createElement('br'),
            'RESIDENT AI'
        ])
    ]);

    const phases = [
        {
            number: 'Phase 1',
            title: 'Centralized AI (Chatbots)',
            description: 'Intelligence trapped in the Public Clouds',
            detail: '(OpenAI, Google, xAI, etc.)',
            color: 'text-red-400'
        },
        {
            number: 'Phase 2',
            title: 'Hybrid AI Agents',
            description: 'Pushing data to the model',
            detail: 'High latency, high risk',
            color: 'text-yellow-400'
        },
        {
            number: 'Phase 3',
            title: 'Resident AI',
            description: 'Bringing the model to the data',
            detail: 'No data leaks, cryptographic Trust',
            color: 'text-emerald-400',
            highlight: true
        }
    ];

    const timeline = createElement('div', ['relative', 'mb-12'], [
        // Timeline line
        createElement('div', ['absolute', 'top-8', 'left-0', 'right-0', 'h-1', 'bg-gradient-to-r', 'from-red-900', 'via-yellow-900', 'to-emerald-900']),

        // Phases
        createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'relative'],
            phases.map(phase =>
                createElement('div', [
                    'relative', 'p-6', 'rounded-lg', 'border',
                    phase.highlight ? 'border-emerald-500 bg-emerald-900/20' : 'border-gray-700 bg-gray-800/50',
                    'transition-all', 'hover:scale-105', 'cursor-default'
                ], [
                    createElement('div', ['flex', 'items-center', 'justify-between', 'mb-4'], [
                        createElement('span', ['text-xs', 'font-mono', 'text-gray-500'], [phase.number]),
                        phase.highlight ? createElement('span', ['text-xs', 'px-2', 'py-1', 'bg-emerald-900', 'text-emerald-300', 'rounded', 'font-mono'], ['← WE ARE HERE']) : null
                    ].filter(Boolean)),
                    createElement('h4', ['text-xl', 'font-bold', phase.color, 'mb-2'], [phase.title]),
                    createElement('p', ['text-gray-300', 'text-sm', 'mb-1'], [phase.description]),
                    createElement('p', ['text-gray-500', 'text-xs', 'italic'], [phase.detail])
                ])
            )
        )
    ]);

    const evolutionLabel = createElement('div', ['text-center', 'text-gray-500', 'text-sm', 'font-mono', 'mb-8'], [
        'Evolution of Corporate AI'
    ]);

    return createElement('div', [], [
        header,
        evolutionLabel,
        timeline
    ]);
};
