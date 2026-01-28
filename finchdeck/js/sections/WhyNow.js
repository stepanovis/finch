import { createElement } from '../core/dom.js';

export const WhyNow = () => {
    const header = createElement('div', ['text-center', 'mb-8'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-blue-400', 'mb-2'], ['THE WINDOW IS OPEN'])
    ]);

    // Left Column - THE PROBLEM (Interactive)
    const problems = [
        {
            stat: 'SHADOW AI RISK',
            growth: '78% Use Anyway',
            summary: 'Security bans public AI, but employees ignore the ban',
            details: [
                { type: 'stat', text: '65% of enterprises ban public AI tools due to data leakage concerns (Gartner, 2024).' },
                { type: 'stat', text: '78% of employees admit using banned AI tools for work tasks (Salesforce AI Survey, 2024).' },
                { type: 'risk', text: 'Compliance officers paste sensitive data into ChatGPT to draft policies faster.' },
                { type: 'risk', text: 'Legal teams use public LLMs to analyze contracts — exposing confidential terms.' },
                { type: 'risk', text: 'Shadow AI creates uncontrolled data exfiltration: no audit trail, no DLP, no governance.' },
                { type: 'insight', text: 'Banning doesn\'t work. Organizations need compliant AI alternative, not prohibition.' }
            ],
            source: 'Gartner Enterprise AI Adoption Report 2024'
        },
        {
            stat: 'MANUAL BOTTLENECK',
            growth: '90-95% Excel',
            summary: 'Compliance officers drowning in spreadsheets despite AI hype',
            details: [
                { type: 'stat', text: '90-95% of compliance teams rely on manual Excel matrices for risk assessments (Compliance Week, 2024).' },
                { type: 'stat', text: 'Average compliance officer spends 40+ hours/week on manual document review and triage.' },
                { type: 'risk', text: 'Human error rate in manual compliance checks: 15-25% (introduces regulatory exposure).' },
                { type: 'risk', text: 'Manual processes don\'t scale: adding 1 new regulation = +10-15 hours/week per officer.' },
                { type: 'insight', text: 'AI exists, but isn\'t integrated into compliance workflows. Officers need embedded copilot, not separate chatbot.' },
                { type: 'insight', text: 'Existing tools (Vanta, Drata) automate certification prep, but not day-to-day triage and decision-making.' }
            ],
            source: 'Compliance Week State of Compliance 2024'
        },
        {
            stat: 'NO GROWTH PATH',
            growth: 'Forced Migration',
            summary: 'Start with public AI → outgrow it → rip-and-replace',
            details: [
                { type: 'stat', text: 'Startups begin with public AI (ChatGPT, Claude) → fast, cheap, no infrastructure.' },
                { type: 'stat', text: 'Series B+ companies hit compliance wall: regulators demand data residency, audit trails.' },
                { type: 'risk', text: 'Migration pain: switching from public AI to on-prem means rebuilding integrations, retraining workflows.' },
                { type: 'risk', text: 'Vendor lock-in: buy cloud tool early → outgrow it → forced rip-and-replace at worst time (fundraising, audit).' },
                { type: 'insight', text: 'Market lacks flexible deployment model: ONE product that starts public, migrates to VPC, scales to on-prem.' },
                { type: 'insight', text: 'Enterprises want "start lean, own later" path without switching vendors.' }
            ],
            source: 'Internal analysis + customer interviews'
        }
    ];

    const problemColumn = createElement('div', ['flex', 'flex-col', 'space-y-4'], [
        createElement('div', ['flex', 'items-center', 'space-x-2', 'mb-2'], [
            createElement('div', ['px-2', 'py-1', 'bg-red-900/30', 'border', 'border-red-800', 'rounded', 'text-xs', 'text-red-400', 'font-mono'], ['⚠️ CURRENT STATE']),
            createElement('h3', ['text-xl', 'font-bold', 'text-white'], ['The Static Defense Trap'])
        ]),

        ...problems.map(problem =>
            createElement('div', [
                'relative', 'p-4', 'rounded-lg', 'bg-red-900/10', 'border', 'border-red-900/30',
                'hover:border-red-600', 'transition-all', 'cursor-pointer', 'group'
            ], [
                // Front (always visible)
                createElement('div', ['text-2xl', 'font-bold', 'text-red-400', 'mb-1'], [problem.stat]),
                createElement('div', ['text-xs', 'text-red-500', 'font-mono', 'mb-1'], [problem.growth]),
                createElement('div', ['text-xs', 'text-gray-400', 'mb-2'], [problem.summary]),
                createElement('div', ['text-[10px]', 'text-gray-600', 'font-mono', 'group-hover:text-red-600', 'transition-colors'], ['→ Hover for details']),

                // Tooltip (on hover)
                createElement('div', [
                    'absolute', 'right-full', 'top-0', 'mr-4', 'w-96', 'p-4',
                    'bg-gray-900', 'border', 'border-red-800', 'rounded-lg', 'shadow-2xl',
                    'opacity-0', 'group-hover:opacity-100', 'pointer-events-none',
                    'transition-opacity', 'z-50'
                ], [
                    createElement('div', ['text-sm', 'font-bold', 'text-red-400', 'mb-3'], [problem.stat]),
                    createElement('div', ['space-y-2', 'mb-3'],
                        problem.details.map(detail => {
                            const isStat = detail.type === 'stat';
                            const isRisk = detail.type === 'risk';
                            const isInsight = detail.type === 'insight';

                            return createElement('div', ['flex', 'items-start', 'space-x-2'], [
                                createElement('span', [
                                    'text-xs', 'font-bold', 'mt-0.5', 'min-w-[12px]',
                                    isStat ? 'text-yellow-500' : isRisk ? 'text-red-500' : isInsight ? 'text-blue-400' : 'text-gray-600'
                                ], [isStat ? '#' : isRisk ? '×' : isInsight ? '→' : '•']),
                                createElement('span', [
                                    'text-xs', 'leading-relaxed',
                                    isStat ? 'text-gray-300' : isRisk ? 'text-gray-300' : isInsight ? 'text-blue-300' : 'text-gray-300'
                                ], [detail.text])
                            ]);
                        })
                    ),
                    createElement('div', ['pt-2', 'border-t', 'border-gray-800'], [
                        createElement('div', ['text-[10px]', 'text-gray-500', 'font-mono'], ['Source: ' + problem.source])
                    ])
                ])
            ])
        )
    ]);

    // Right Column - THE TIMING (Interactive)
    const catalysts = [
        {
            stat: '$87 BILLION',
            growth: '+150% YoY',
            summary: 'Invested in Sovereign AI infrastructure',
            details: [
                'Enterprises are shifting from cloud-dependent AI to on-premise deployments for data sovereignty.',
                'IDC reports 150% YoY growth in private AI infrastructure spending, reaching $87B in 2025.',
                'Regulatory pressure (GDPR, CCPA, LGPD) drives demand for air-gapped AI systems.',
                'Mid-market companies (50-500 employees) show fastest adoption at 13.5% CAGR.'
            ],
            source: 'IDC MarketScape: Sovereign AI Infrastructure 2025'
        },
        {
            stat: '20+ STATE LAWS',
            growth: '+12 in 2025',
            summary: 'New privacy laws mandate local deployment',
            details: [
                'California CCPA (amended Jan 2026) requires risk assessments for automated decision-making.',
                '12 new US states passed comprehensive privacy laws in 2025, joining existing 8 states.',
                'Mexico LFPDPPP (March 2025) mandates financial data stay within borders for fintechs.',
                'Brazil Resolution 19/2024 requires Standard Contractual Clauses by August 2025.',
                'EU AI Act (Dec 2024) classifies compliance systems as "high-risk" requiring transparency.'
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
                { type: 'risk', text: 'Stanford study: General LLMs hallucinate 58-82% on legal queries. Even specialized tools (Lexis+ AI) hit 17-34% error rates.' },
                { type: 'proof', text: 'Specialized AI works: Medical AI (PathAI) reduced diagnostic errors by 43% vs radiologists using ChatGPT.' },
                { type: 'proof', text: 'Bloomberg Law GPT (legal-specific) cuts hallucinations to <5% with domain training + deterministic verification.' }
            ],
            source: 'Stanford HAI Legal AI Hallucination Study (May 2024) + Court Records'
        }
    ];

    const timingColumn = createElement('div', ['flex', 'flex-col', 'space-y-4'], [
        createElement('div', ['flex', 'items-center', 'space-x-2', 'mb-2'], [
            createElement('div', ['px-2', 'py-1', 'bg-emerald-900/30', 'border', 'border-emerald-800', 'rounded', 'text-xs', 'text-emerald-400', 'font-mono'], ['✓ OPPORTUNITY']),
            createElement('h3', ['text-xl', 'font-bold', 'text-white'], ['Market Forces Converge'])
        ]),

        ...catalysts.map(catalyst =>
            createElement('div', [
                'relative', 'p-4', 'rounded-lg', 'bg-emerald-900/10', 'border', 'border-emerald-900/30',
                'hover:border-emerald-600', 'transition-all', 'cursor-pointer', 'group'
            ], [
                // Front (always visible)
                createElement('div', ['text-2xl', 'font-bold', 'text-emerald-400', 'mb-1'], [catalyst.stat]),
                createElement('div', ['text-xs', 'text-emerald-500', 'font-mono', 'mb-1'], [catalyst.growth]),
                createElement('div', ['text-xs', 'text-gray-400', 'mb-2'], [catalyst.summary]),
                createElement('div', ['text-[10px]', 'text-gray-600', 'font-mono', 'group-hover:text-emerald-600', 'transition-colors'], ['→ Hover for details']),

                // Tooltip (on hover)
                createElement('div', [
                    'absolute', 'left-full', 'top-0', 'ml-4', 'w-96', 'p-4',
                    'bg-gray-900', 'border', 'border-emerald-800', 'rounded-lg', 'shadow-2xl',
                    'opacity-0', 'group-hover:opacity-100', 'pointer-events-none',
                    'transition-opacity', 'z-50'
                ], [
                    createElement('div', ['text-sm', 'font-bold', 'text-emerald-400', 'mb-3'], [catalyst.stat]),
                    createElement('div', ['space-y-2', 'mb-3'],
                        catalyst.details.map(detail => {
                            const isRisk = detail.type === 'risk';
                            const isProof = detail.type === 'proof';

                            return createElement('div', ['flex', 'items-start', 'space-x-2'], [
                                createElement('span', [
                                    'text-xs', 'font-bold', 'mt-0.5', 'min-w-[12px]',
                                    isRisk ? 'text-red-500' : isProof ? 'text-emerald-500' : 'text-gray-600'
                                ], [isRisk ? '×' : isProof ? '✓' : '•']),
                                createElement('span', [
                                    'text-xs', 'leading-relaxed',
                                    isRisk ? 'text-gray-300' : isProof ? 'text-emerald-300' : 'text-gray-300'
                                ], [detail.text || detail])
                            ]);
                        })
                    ),
                    createElement('div', ['pt-2', 'border-t', 'border-gray-800'], [
                        createElement('div', ['text-[10px]', 'text-gray-500', 'font-mono'], ['Source: ' + catalyst.source])
                    ])
                ])
            ])
        )
    ]);

    // Two column layout
    const content = createElement('div', ['grid', 'grid-cols-2', 'gap-8', 'max-w-6xl', 'mx-auto'], [
        problemColumn,
        timingColumn
    ]);

    return createElement('div', [], [
        header,
        content
    ]);
};
