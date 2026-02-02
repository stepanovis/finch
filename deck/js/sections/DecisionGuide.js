import { createElement } from '../core/dom.js';
import { analysisData } from '../data/analysisData.js';

export const DecisionGuide = () => {
    // State elements references
    let chartInstance = null;
    const refs = {};
    let selectedMode = null;

    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE DEPLOYMENT']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['A MODE FOR EVERYONE'])
    ]);

    // Sliders
    const createSlider = (label, id, min, max, step, val, lowLabel, highLabel, displayId, refKey) => {
        const display = createElement('span', ['text-emerald-400', 'font-mono', 'font-bold'], ['...']);
        refs[refKey] = display;
        
        const input = createElement('input', ['w-full', 'h-2', 'bg-gray-700', 'rounded-lg', 'appearance-none', 'cursor-pointer'], [], {
            type: 'range', min, max, step, value: val
        });
        refs[id] = input;

        return createElement('div', [], [
            createElement('div', ['flex', 'justify-between', 'items-end', 'mb-2'], [
                createElement('label', ['block', 'text-sm', 'font-medium', 'text-gray-400'], [label]),
                display
            ]),
            input,
            createElement('div', ['flex', 'justify-between', 'text-xs', 'text-gray-500', 'font-mono', 'mt-2'], [
                createElement('span', [], [lowLabel]),
                createElement('span', [], [highLabel])
            ])
        ]);
    };

    // Chart canvas
    const canvas = createElement('canvas');

    // TCO Calculator - Horizontal Layout
    const tcoCalculator = createElement('div', [], [
        createElement('div', ['grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-6'], [
            // Left: Controls
            createElement('div', ['space-y-6'], [
                createElement('div', ['text-center', 'mb-4'], [
                    createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'mb-1'], ['Break-even Point']),
                    refs.breakEvenDisplay = createElement('div', ['text-3xl', 'font-bold', 'text-green-400', 'font-mono'], ['Calculating...'])
                ]),

                createSlider('Inference Volume', 'inputVolume', 1, 20, 0.5, 14, 'Low (Startup)', 'Max (20M)', 'volumeVal', 'volumeDisplay'),
                createSlider('AWS/Cloud Rate', 'inputRate', 40, 200, 5, 98.32, 'Spot ($40)', 'On-Demand ($200)', 'rateVal', 'rateDisplay'),

                // Summary
                createElement('div', ['space-y-3', 'pt-4', 'border-t', 'border-gray-800'], [
                    createElement('div', ['flex', 'justify-between', 'items-center'], [
                        createElement('span', ['text-gray-400', 'text-sm'], ['Recommended Cluster']),
                        refs.clusterSizeDisplay = createElement('span', ['text-white', 'font-mono'], ['--M capacity'])
                    ]),
                    createElement('div', ['flex', 'justify-between', 'items-center'], [
                        createElement('span', ['text-gray-400', 'text-sm'], ['Cluster Utilization']),
                        refs.utilDisplay = createElement('span', ['text-white', 'font-mono'], ['---%'])
                    ]),
                    createElement('div', ['flex', 'justify-between', 'items-center'], [
                        createElement('span', ['text-gray-400', 'text-sm'], ['On-Prem CapEx (right-sized)']),
                        refs.capexDisplay = createElement('span', ['text-emerald-400', 'font-mono'], ['$---k'])
                    ])
                ]),

                refs.savingsBox = createElement('div', ['bg-green-900/20', 'border', 'border-green-900/50', 'p-4', 'rounded', 'text-sm', 'text-green-200', 'transition-colors'], [
                    createElement('strong', ['block', 'mb-1'], ['Projected Outcome:']),
                    'Savings of ',
                    refs.savingsVal = createElement('span', ['font-bold', 'text-lg'], ['--%'], { id: 'savings-value-display' }),
                    ' over 24 months.'
                ])
            ]),

            // Right: Chart
            createElement('div', ['bg-black', 'p-4', 'rounded-lg', 'relative', 'h-full', 'flex', 'items-center', 'justify-center', 'border', 'border-gray-800'], [canvas])
        ])
    ]);

    // Decision Factors - Horizontal Row
    const decisionFactors = [
        {
            mode: 'PUBLIC AI',
            tagline: 'Start Fast',
            color: 'blue',
            economics: '$0-50k/year',
            regulation: 'Pre-Series A, no PII yet',
            scale: 'MVP stage, <10k users',
            useCase: 'Early stage startups testing product-market fit',
            volumeValue: 3,
            rateValue: 50
        },
        {
            mode: 'PRIVATE VPC',
            tagline: 'Scale Safe',
            color: 'purple',
            economics: '$50k-500k/year',
            regulation: 'Series B+, GDPR/CCPA required',
            scale: 'Growth stage, 10k-100k users',
            useCase: 'Compliance-aware companies scaling revenue',
            volumeValue: 10,
            rateValue: 85
        },
        {
            mode: 'ON-PREMISE',
            tagline: 'Cut Costs',
            color: 'green',
            economics: '$500k+/year, ROI <12mo',
            regulation: 'Banking license, data residency laws',
            scale: 'Enterprise, 100k+ users',
            useCase: 'Regulated sectors, full data sovereignty',
            volumeValue: 18,
            rateValue: 120
        }
    ];

    // Store card elements for selection highlighting
    const factorCards = [];

    const selectMode = (factor, cardElement) => {
        // Deselect all cards
        factorCards.forEach(card => {
            const cardFactor = decisionFactors.find(f => card.dataset.mode === f.mode);
            card.className = `p-4 rounded-lg border border-gray-700 bg-${cardFactor.color}-900/10 hover:border-${cardFactor.color}-600 transition-all cursor-pointer`;
        });

        // Select clicked card
        selectedMode = factor.mode;
        cardElement.className = `p-4 rounded-lg border-2 border-${factor.color}-500 bg-${factor.color}-900/30 transition-all cursor-pointer shadow-lg shadow-${factor.color}-900/50`;

        // Update sliders
        refs.inputVolume.value = factor.volumeValue;
        refs.inputRate.value = factor.rateValue;

        // Trigger recalculation
        calculate();
    };

    const decisionFactorsRow = createElement('div', ['mb-8'], [
        createElement('div', ['flex', 'items-center', 'justify-center', 'mb-8'], [
            createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent']),
            createElement('div', ['px-6', 'text-blue-400', 'font-mono', 'text-sm', 'uppercase', 'tracking-widest'], ['↓ Select Mode ↓']),
            createElement('div', ['flex-1', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-blue-700', 'to-transparent'])
        ]),

        createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4'],
            decisionFactors.map(factor => {
                const card = createElement('div', [
                    'p-4', 'rounded-lg', 'border', 'border-gray-700', 'bg-' + factor.color + '-900/10',
                    'hover:border-' + factor.color + '-600', 'transition-all', 'cursor-pointer'
                ], [
                    createElement('div', ['text-center', 'mb-3'], [
                        createElement('div', ['text-lg', 'font-bold', 'text-' + factor.color + '-400'], [factor.mode]),
                        createElement('div', ['text-xs', 'text-gray-500', 'font-mono'], [factor.tagline])
                    ]),

                    createElement('div', ['space-y-2', 'text-xs'], [
                        createElement('div', ['flex', 'items-start', 'space-x-2'], [
                            createElement('span', ['text-yellow-500', 'font-bold', 'min-w-[70px]'], ['Economics:']),
                            createElement('span', ['text-gray-300'], [factor.economics])
                        ]),
                        createElement('div', ['flex', 'items-start', 'space-x-2'], [
                            createElement('span', ['text-blue-500', 'font-bold', 'min-w-[70px]'], ['Regulation:']),
                            createElement('span', ['text-gray-300'], [factor.regulation])
                        ]),
                        createElement('div', ['flex', 'items-start', 'space-x-2'], [
                            createElement('span', ['text-emerald-500', 'font-bold', 'min-w-[70px]'], ['Scale:']),
                            createElement('span', ['text-gray-300'], [factor.scale])
                        ])
                    ]),

                    createElement('div', ['mt-3', 'pt-3', 'border-t', 'border-gray-700', 'text-xs', 'text-gray-400', 'italic'], [
                        factor.useCase
                    ])
                ]);

                card.dataset.mode = factor.mode;
                card.addEventListener('click', () => selectMode(factor, card));
                factorCards.push(card);

                return card;
            })
        )
    ]);

    // Calculation Logic
    const calculate = () => {
        const tokensPerDay = parseFloat(refs.inputVolume.value);
        const cloudHourlyRate = parseFloat(refs.inputRate.value);

        refs.volumeDisplay.textContent = `${tokensPerDay.toFixed(1)}M Tokens/Day`;
        refs.rateDisplay.textContent = `$${cloudHourlyRate.toFixed(2)} / hr`;

        // Dynamic cluster sizing: add 30% headroom for peak loads
        const HEADROOM = 1.3;
        const recommendedClusterSize = tokensPerDay * HEADROOM;
        const targetUtilization = tokensPerDay / recommendedClusterSize; // ~77%

        // Scale CapEx based on cluster size (linear scaling assumption)
        const MAX_CAPACITY_TOKENS = 20;
        const BASE_CAPEX = analysisData.economics.on_prem_setup;
        const clusterSizeRatio = Math.min(recommendedClusterSize / MAX_CAPACITY_TOKENS, 1);
        const CAPEX = BASE_CAPEX * clusterSizeRatio;
        const OPEX_RATIO = 0.25;

        // Update displays
        refs.clusterSizeDisplay.textContent = `${recommendedClusterSize.toFixed(1)}M capacity`;
        refs.utilDisplay.textContent = `${(targetUtilization * 100).toFixed(0)}%`;
        refs.capexDisplay.textContent = `$${(CAPEX / 1000).toFixed(0)}k`;

        const months = Array.from({length: 24}, (_, i) => i + 1);

        // Cloud VPC cost (AWS/Azure with dedicated instances)
        const monthlyCloudCost = cloudHourlyRate * 24 * 30;
        const cloudData = months.map(m => m * monthlyCloudCost);

        // Public AI API cost (OpenAI/Anthropic pay-per-token)
        // Assuming ~$20 per 1M tokens (blended rate for GPT-4/Claude)
        const costPerMillionTokens = 20;
        const monthlyTokens = tokensPerDay * 30; // tokens per month in millions
        const monthlyPublicAICost = monthlyTokens * costPerMillionTokens;
        const publicAIData = months.map(m => m * monthlyPublicAICost);

        // On-Prem cost (CapEx + OpEx)
        const monthlyOpex = (CAPEX * OPEX_RATIO) / 12;
        const onPremData = months.map(m => CAPEX + (m * monthlyOpex));

        // Calculate break-even point (Private VPC vs On-Prem)
        let breakEvenMonth = null;
        for (let i = 0; i < 24; i++) {
            if (cloudData[i] > onPremData[i]) {
                breakEvenMonth = i + 1;
                break;
            }
        }

        // Update break-even display
        if (breakEvenMonth) {
            refs.breakEvenDisplay.textContent = `${breakEvenMonth} Months`;
            refs.breakEvenDisplay.className = 'text-3xl font-bold text-emerald-400 font-mono';
        } else {
            refs.breakEvenDisplay.textContent = `24+ Months`;
            refs.breakEvenDisplay.className = 'text-3xl font-bold text-red-400 font-mono';
        }

        // Calculate savings (On-Prem vs Private VPC over 24 months)
        const cloudTotal24 = cloudData[23];
        const onPremTotal24 = onPremData[23];

        // Get the actual DOM element
        const savingsElement = document.getElementById('savings-value-display');
        console.log('DOM element:', savingsElement);
        console.log('DOM element textContent before:', savingsElement?.textContent);

        if (onPremTotal24 < cloudTotal24) {
            const savings = cloudTotal24 - onPremTotal24;
            const savingsPercent = ((savings / cloudTotal24) * 100).toFixed(0);
            if (savingsElement) {
                savingsElement.textContent = `${savingsPercent}%`;
                console.log('Updated DOM element to:', savingsPercent + '%');
            }
            refs.savingsBox.className = 'bg-green-900/20 border border-green-900/50 p-4 rounded text-sm text-green-200 transition-colors';
        } else {
            const extraCost = onPremTotal24 - cloudTotal24;
            const extraCostPercent = ((extraCost / cloudTotal24) * 100).toFixed(0);
            if (savingsElement) {
                savingsElement.textContent = `-${extraCostPercent}%`;
                console.log('Updated DOM element to:', '-' + extraCostPercent + '%');
            }
            refs.savingsBox.className = 'bg-red-900/20 border border-red-900/50 p-4 rounded text-sm text-red-200 transition-colors';
        }

        // Update Chart
        if (chartInstance) {
            chartInstance.data.datasets[0].data = publicAIData;
            chartInstance.data.datasets[1].data = cloudData;
            chartInstance.data.datasets[2].data = onPremData;
            chartInstance.update('none');
        } else {
             const ctx = canvas.getContext('2d');
             chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: months.map(m => `M${m}`),
                    datasets: [
                        {
                            label: 'Public AI API (OpenAI/Anthropic)',
                            data: publicAIData,
                            borderColor: '#3B82F6',
                            borderDash: [2, 2],
                            borderWidth: 2,
                            tension: 0.4
                        },
                        {
                            label: 'Private VPC (AWS/Azure)',
                            data: cloudData,
                            borderColor: '#8B5CF6',
                            borderDash: [5, 5],
                            borderWidth: 2,
                            tension: 0.4
                        },
                        {
                            label: 'On-Prem (Own Hardware)',
                            data: onPremData,
                            borderColor: '#22C55E',
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            fill: true,
                            borderWidth: 2,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#9CA3AF',
                                font: { size: 11 }
                            }
                        }
                    },
                    scales: {
                        y: {
                            grid: { color: '#1F2937' },
                            ticks: {
                                color: '#6B7280',
                                callback: function(value) {
                                    return '$' + (value / 1000).toFixed(0) + 'k';
                                }
                            }
                        },
                        x: { grid: { color: '#1F2937' }, ticks: { color: '#6B7280' } }
                    }
                }
            });
        }
    };

    refs.inputVolume.addEventListener('input', calculate);
    refs.inputRate.addEventListener('input', calculate);

    const container = createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        decisionFactorsRow,
        tcoCalculator
    ]);

    // Calculate after next tick to ensure DOM is rendered
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            calculate();
        });
    });

    return container;
};
