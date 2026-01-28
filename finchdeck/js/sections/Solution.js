import { createElement } from '../core/dom.js';

export const Solution = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-blue-400', 'mb-2'], ['THE SOLUTION']),
        createElement('p', ['text-xl', 'text-gray-300', 'font-light'], ['Your Compliance Copilot'])
    ]);

    const subtitle = createElement('div', ['text-center', 'mb-12', 'text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], [
        'One Product • Three Deployment Modes • Lifetime Learning'
    ]);

    // Deployment Modes
    const deploymentModes = [
        {
            name: 'PUBLIC AI',
            tagline: 'Start Fast',
            model: 'OpenAI / Anthropic',
            deployment: 'Cloud API',
            cost: 'Pay-per-token',
            useCase: 'Early stage startups, pilots',
            color: 'blue'
        },
        {
            name: 'PRIVATE VPC',
            tagline: 'Scale Safe',
            model: 'AWS Bedrock / Azure',
            deployment: 'Your Cloud',
            cost: 'Medium OpEx',
            useCase: 'Series A-B, compliance-aware',
            color: 'purple'
        },
        {
            name: 'ON-PREMISE',
            tagline: 'Own Forever',
            model: 'Llama 3 / Mistral',
            deployment: 'Your Hardware',
            cost: 'High CapEx, Low OpEx',
            useCase: 'Enterprise, regulated sectors',
            color: 'emerald'
        }
    ];

    const modesGrid = createElement('div', ['relative', 'mb-12', 'max-w-5xl', 'mx-auto'], [
        // Arrow indicator showing progression
        createElement('div', ['flex', 'items-center', 'justify-center', 'mb-2'], [
            createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'tracking-wider'], ['STARTUP']),
            createElement('div', ['flex-1', 'mx-4', 'h-px', 'bg-gradient-to-r', 'from-blue-700', 'via-purple-700', 'to-emerald-700']),
            createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'tracking-wider'], ['ENTERPRISE'])
        ]),

        // Deployment modes grid
        createElement('div', ['grid', 'grid-cols-3', 'gap-6'],
            deploymentModes.map(mode =>
                createElement('div', [
                    'p-4', 'rounded-lg', 'border', 'border-gray-700',
                    'bg-' + mode.color + '-900/10',
                    'hover:border-' + mode.color + '-600', 'transition-all', 'text-center'
                ], [
                    createElement('div', ['text-lg', 'font-bold', 'text-' + mode.color + '-400', 'mb-1'], [mode.name]),
                    createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'mb-3'], [mode.tagline]),
                    createElement('div', ['text-xs', 'text-gray-400', 'space-y-1'], [
                        createElement('div', [], ['Model: ' + mode.model]),
                        createElement('div', [], ['Deploy: ' + mode.deployment]),
                        createElement('div', ['text-' + mode.color + '-500'], [mode.cost])
                    ])
                ])
            )
        )
    ]);

    const divider = createElement('div', ['flex', 'items-center', 'justify-center', 'mb-12'], [
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent']),
        createElement('div', ['px-6', 'text-blue-400', 'font-mono', 'text-sm', 'uppercase', 'tracking-widest'], ['↓ Finch Copilot Layer ↓']),
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent'])
    ]);

    // Core Capabilities
    const capabilities = [
        {
            name: 'Living Vault',
            stat: 'VECTORIZE',
            summary: 'Turn PDFs into queryable knowledge',
            details: [
                { type: 'feature', text: 'Ingest & vectorize your "Golden 30" compliance documents (AML, KYC, Privacy policies).' },
                { type: 'feature', text: 'AI assistant helps review existing docs and generate missing policies.' },
                { type: 'feature', text: 'Auto-diffs new regulations against internal policies → flags gaps instantly.' },
                { type: 'benefit', text: 'Compliance knowledge becomes searchable, not buried in static PDFs.' }
            ]
        },
        {
            name: 'Smart Intake',
            stat: 'AUTO-ROUTE',
            summary: 'Connect email, APIs → auto-classify requests',
            details: [
                { type: 'feature', text: 'Integrate with KYC providers (SumSub, Jumio), email, Slack, internal tools.' },
                { type: 'feature', text: 'Incoming requests auto-classified by urgency & type (KYC alert, audit question, policy review).' },
                { type: 'feature', text: 'Pre-processes request: extracts key data, references relevant policies.' },
                { type: 'benefit', text: 'Officer sees pre-analyzed cases, not raw noise. Saves 15-20 hrs/week on triage.' }
            ]
        },
        {
            name: 'Flexible Processing',
            stat: 'OPTIMIZE',
            summary: 'Simple rules or AI copilot — you choose',
            details: [
                { type: 'feature', text: 'Simple, repetitive requests → route through deterministic plug-ins (no AI needed).' },
                { type: 'feature', text: 'Complex edge cases → AI copilot assists officer with analysis and recommendations.' },
                { type: 'feature', text: 'Write custom plug-ins to encode your exact compliance logic for common scenarios.' },
                { type: 'benefit', text: 'Fast & cheap: Deterministic rules process simple cases instantly without LLM costs.' },
                { type: 'benefit', text: 'Flexible: Reserve expensive AI processing for cases that actually need human judgment.' }
            ]
        },
        {
            name: 'Learning Memory',
            stat: 'IMPROVES',
            summary: 'Remembers corrections, gets smarter over time',
            details: [
                { type: 'feature', text: 'System logs every officer decision: approvals, rejections, corrections.' },
                { type: 'feature', text: 'AI learns from feedback: "Officer overrode this recommendation → adjust weights."' },
                { type: 'feature', text: 'Long-term customers build institutional knowledge embedded in AI.' },
                { type: 'benefit', text: 'Lifetime value: The longer you use Finch, the better it understands your risk appetite.' }
            ]
        }
    ];

    const capabilitiesGrid = createElement('div', ['grid', 'grid-cols-2', 'gap-6', 'max-w-6xl', 'mx-auto'],
        capabilities.map((capability, index) => {
            // Left column cards (index 0, 2) show tooltip on LEFT
            // Right column cards (index 1, 3) show tooltip on RIGHT
            const isLeftColumn = index % 2 === 0;

            return createElement('div', [
                'relative', 'p-6', 'rounded-lg', 'bg-gray-800/50', 'border', 'border-gray-700',
                'hover:border-blue-600', 'transition-all', 'cursor-pointer', 'group'
            ], [
                // Front (always visible)
                createElement('div', ['text-2xl', 'font-bold', 'text-blue-400', 'mb-1'], [capability.name]),
                createElement('div', ['text-xs', 'text-blue-500', 'font-mono', 'mb-2'], [capability.stat]),
                createElement('div', ['text-sm', 'text-gray-400', 'mb-2'], [capability.summary]),
                createElement('div', ['text-[10px]', 'text-gray-600', 'font-mono', 'group-hover:text-blue-600', 'transition-colors'], ['→ Hover for details']),

                // Tooltip (appears on side)
                createElement('div', [
                    'absolute', 'top-0', isLeftColumn ? 'right-full' : 'left-full', isLeftColumn ? 'mr-4' : 'ml-4', 'w-96', 'p-4',
                    'bg-gray-900', 'border', 'border-blue-800', 'rounded-lg', 'shadow-2xl',
                    'opacity-0', 'group-hover:opacity-100', 'pointer-events-none',
                    'transition-opacity', 'z-50'
                ], [
                    createElement('div', ['text-sm', 'font-bold', 'text-blue-400', 'mb-3'], [capability.name]),
                    createElement('div', ['space-y-2'],
                        capability.details.map(detail => {
                            const isFeature = detail.type === 'feature';
                            const isBenefit = detail.type === 'benefit';

                            return createElement('div', ['flex', 'items-start', 'space-x-2'], [
                                createElement('span', [
                                    'text-xs', 'font-bold', 'mt-0.5', 'min-w-[12px]',
                                    isFeature ? 'text-blue-500' : isBenefit ? 'text-emerald-500' : 'text-gray-600'
                                ], [isFeature ? '•' : isBenefit ? '✓' : '•']),
                                createElement('span', [
                                    'text-xs', 'leading-relaxed',
                                    isFeature ? 'text-gray-300' : isBenefit ? 'text-emerald-300' : 'text-gray-300'
                                ], [detail.text])
                            ]);
                        })
                    )
                ])
            ]);
        })
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        subtitle,
        modesGrid,
        divider,
        capabilitiesGrid
    ]);
};
