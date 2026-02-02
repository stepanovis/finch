import { createElement } from '../core/dom.js';

export const Solution = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE FEATURES']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['ONE PRODUCT • TWO PRIVACY LEVELS • ALL PROCESSING INTERNAL'])
    ]);

    // Sovereign Container divider
    const sovereignDivider = createElement('div', ['flex', 'items-center', 'justify-center', 'mb-8'], [
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-white', 'to-transparent']),
        createElement('div', ['px-6', 'text-emerald-400', 'font-mono', 'text-sm', 'uppercase', 'tracking-widest'], ['↓ Sovereign Container ↓']),
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-white', 'to-transparent'])
    ]);

    // Sovereign deployment modes (only PRIVATE VPC and ON-PREMISE)
    const sovereignModes = [
        {
            name: 'PRIVATE VPC',
            tagline: 'Scale Safe',
            model: 'AWS Bedrock / Azure',
            deployment: 'Your Cloud',
            cost: 'Medium OpEx',
            color: 'purple'
        },
        {
            name: 'ON-PREMISE',
            tagline: 'Cut Costs',
            model: 'Llama 3 / Mistral',
            deployment: 'Your Hardware',
            cost: 'High CapEx, Low OpEx',
            color: 'emerald'
        }
    ];

    const sovereignGrid = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8', 'max-w-3xl', 'mx-auto', 'mb-12'],
        sovereignModes.map(mode =>
            createElement('div', [
                'p-6', 'rounded-lg', 'border', 'border-gray-700',
                'bg-' + mode.color + '-900/10',
                'hover:border-' + mode.color + '-600', 'transition-all', 'text-center'
            ], [
                createElement('div', ['text-xl', 'font-bold', 'text-' + mode.color + '-400', 'mb-1'], [mode.name]),
                createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'mb-4'], [mode.tagline]),
                createElement('div', ['text-sm', 'text-gray-400', 'space-y-2'], [
                    createElement('div', [], ['Model: ' + mode.model]),
                    createElement('div', [], ['Deploy: ' + mode.deployment]),
                    createElement('div', ['text-' + mode.color + '-400', 'font-medium'], [mode.cost])
                ])
            ])
        )
    );

    const divider = createElement('div', ['flex', 'items-center', 'justify-center', 'mb-12'], [
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent']),
        createElement('div', ['px-6', 'text-blue-400', 'font-mono', 'text-sm', 'uppercase', 'tracking-widest'], ['↓ Copilot ↓']),
        createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent'])
    ]);

    // Core Capabilities
    const capabilities = [
        {
            name: 'Living Vault',
            stat: 'VECTORIZE PASSIVE PDFS INTO ACTIVE KNOWLEDGE',
            summary: 'Turn PDFs into queryable knowledge',
            details: [
                { type: 'feature', text: 'Vectorize your compliance documents (AML, KYC, Privacy policies).' },
                { type: 'feature', text: 'AI assistant helps review existing docs and generate missing policies.' },
                { type: 'feature', text: 'Auto-diffs new regulations against internal policies → flags gaps instantly.' },
                { type: 'benefit', text: 'Compliance knowledge becomes searchable, not buried in static PDFs.' }
            ]
        },
        {
            name: 'Officer-Centric Workflow',
            stat: 'HUMAN IN THE LOOP',
            summary: 'Pre-processed requests with AI assistance',
            details: [
                { type: 'feature', text: 'All requests arrive pre-processed with AI comments and recommendations.' },
                { type: 'feature', text: 'Ask for additional info or clarification on the spot.' },
                { type: 'feature', text: 'Generate new artifacts (reports, responses, policies) with a simple request.' },
                { type: 'benefit', text: 'Officer stays in control, AI handles the heavy lifting.' }
            ]
        },
        {
            name: 'Decision Engine',
            stat: 'AI ENGINE + CUSTOM PLUG-INS',
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
            stat: 'LEARNS FROM EVERY DECISION',
            summary: 'Remembers corrections, gets smarter over time',
            details: [
                { type: 'feature', text: 'System logs every officer decision: approvals, rejections, corrections.' },
                { type: 'feature', text: 'AI learns from feedback: "Officer overrode this recommendation → adjust weights."' },
                { type: 'feature', text: 'Long-term customers build institutional knowledge embedded in AI.' },
                { type: 'benefit', text: 'Lifetime value: The longer you use Finch, the better it understands your risk appetite.' }
            ]
        }
    ];

    const capabilitiesGrid = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6', 'max-w-6xl', 'mx-auto'],
        capabilities.map(capability =>
            createElement('div', [
                'p-6', 'rounded-lg', 'bg-gray-800/50', 'border', 'border-gray-700'
            ], [
                createElement('div', ['text-2xl', 'font-bold', 'text-blue-400', 'mb-1'], [capability.name]),
                createElement('div', ['text-xs', 'text-blue-500', 'font-mono', 'mb-3'], [capability.stat]),
                createElement('div', ['space-y-1'],
                    capability.details.slice(0, 3).map(detail =>
                        createElement('div', ['flex', 'items-start', 'space-x-2'], [
                            createElement('span', ['text-xs', 'text-blue-500'], ['•']),
                            createElement('span', ['text-xs', 'text-gray-400'], [detail.text])
                        ])
                    )
                )
            ])
        )
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        sovereignDivider,
        sovereignGrid,
        divider,
        capabilitiesGrid
    ]);
};
