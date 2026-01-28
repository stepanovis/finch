import { createElement } from '../core/dom.js';

export const WhyNow = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('div', ['px-3', 'py-1', 'bg-emerald-900/30', 'border', 'border-emerald-800', 'rounded', 'text-xs', 'text-emerald-400', 'font-mono', 'inline-block', 'mb-4'], ['✓ OPPORTUNITY']),
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-2'], ['WHY NOW?']),
        createElement('p', ['text-gray-400', 'text-lg'], ['Market Forces Converge'])
    ]);

    const catalysts = [
        {
            stat: '$87 BILLION',
            growth: '+150% YoY',
            summary: 'Invested in Sovereign AI infrastructure',
            details: [
                { type: 'stat', text: 'Enterprises are shifting from cloud-dependent AI to on-premise deployments for data sovereignty.' },
                { type: 'stat', text: 'IDC reports 150% YoY growth in private AI infrastructure spending, reaching $87B in 2025.' },
                { type: 'stat', text: 'Regulatory pressure (GDPR, CCPA, LGPD) drives demand for air-gapped AI systems.' },
                { type: 'insight', text: 'Mid-market companies (50-500 employees) show fastest adoption at 13.5% CAGR.' }
            ],
            source: 'IDC MarketScape: Sovereign AI Infrastructure 2025'
        },
        {
            stat: '20+ STATE LAWS',
            growth: '+12 in 2025',
            summary: 'New privacy laws mandate local deployment',
            details: [
                { type: 'stat', text: 'California CCPA (amended Jan 2026) requires risk assessments for automated decision-making.' },
                { type: 'stat', text: '12 new US states passed comprehensive privacy laws in 2025, joining existing 8 states.' },
                { type: 'stat', text: 'Mexico LFPDPPP (March 2025) mandates financial data stay within borders for fintechs.' },
                { type: 'stat', text: 'Brazil Resolution 19/2024 requires Standard Contractual Clauses by August 2025.' },
                { type: 'insight', text: 'EU AI Act (Dec 2024) classifies compliance systems as "high-risk" requiring transparency.' }
            ],
            source: 'IAPP State Privacy Law Tracker 2025'
        },
        {
            stat: 'GENERALIST AI FAILS',
            growth: 'Liability is Real',
            summary: 'ChatGPT mistakes = your legal problem. Courts are punishing users.',
            details: [
                { type: 'risk', text: 'Air Canada lost lawsuit: Chatbot gave wrong refund policy → company forced to pay (Feb 2024).' },
                { type: 'risk', text: 'Colorado lawyer suspended 90 days: Used ChatGPT citations, all fabricated (Kurtzman, 2023).' },
                { type: 'risk', text: 'NYC lawyers sanctioned $5,000: Submitted brief with 6 fake cases from ChatGPT (Mata v. Avianca, 2023).' },
                { type: 'risk', text: 'Stanford study: General LLMs hallucinate 58-82% on legal queries. Even specialized tools hit 17-34% error rates.' },
                { type: 'proof', text: 'Specialized AI works: Medical AI (PathAI) reduced diagnostic errors by 43% vs radiologists using ChatGPT.' },
                { type: 'proof', text: 'Bloomberg Law GPT (legal-specific) cuts hallucinations to <5% with domain training + deterministic verification.' }
            ],
            source: 'Stanford HAI Legal AI Hallucination Study (May 2024) + Court Records'
        }
    ];

    const catalystCards = createElement('div', ['grid', 'grid-cols-1', 'lg:grid-cols-3', 'gap-6', 'max-w-7xl', 'mx-auto'],
        catalysts.map(catalyst =>
            createElement('div', ['p-6', 'rounded-lg', 'bg-emerald-900/10', 'border', 'border-emerald-900/30'], [
                // Header
                createElement('div', ['text-3xl', 'font-bold', 'text-emerald-400', 'mb-1'], [catalyst.stat]),
                createElement('div', ['text-sm', 'text-emerald-500', 'font-mono', 'mb-2'], [catalyst.growth]),
                createElement('div', ['text-sm', 'text-gray-300', 'mb-4', 'pb-4', 'border-b', 'border-emerald-900/30'], [catalyst.summary]),

                // Details (visible, not in tooltip)
                createElement('div', ['space-y-2', 'mb-4'],
                    catalyst.details.map(detail => {
                        const isRisk = detail.type === 'risk';
                        const isProof = detail.type === 'proof';
                        const isStat = detail.type === 'stat';
                        const isInsight = detail.type === 'insight';

                        return createElement('div', ['flex', 'items-start', 'space-x-2'], [
                            createElement('span', [
                                'text-xs', 'font-bold', 'mt-0.5', 'min-w-[12px]',
                                isRisk ? 'text-red-500' : isProof ? 'text-emerald-500' : isStat ? 'text-yellow-500' : isInsight ? 'text-blue-400' : 'text-gray-600'
                            ], [isRisk ? '×' : isProof ? '✓' : isStat ? '#' : isInsight ? '→' : '•']),
                            createElement('span', [
                                'text-xs', 'leading-relaxed',
                                isRisk ? 'text-gray-300' : isProof ? 'text-emerald-300' : 'text-gray-300'
                            ], [detail.text])
                        ]);
                    })
                ),

                // Source
                createElement('div', ['pt-3', 'border-t', 'border-emerald-900/30'], [
                    createElement('div', ['text-[10px]', 'text-gray-500', 'font-mono'], ['Source: ' + catalyst.source])
                ])
            ])
        )
    );

    return createElement('div', [], [
        header,
        catalystCards
    ]);
};
