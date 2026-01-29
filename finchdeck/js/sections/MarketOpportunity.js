import { createElement } from '../core/dom.js';

export const MarketOpportunity = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE MARKET'])
    ]);

    // TAM/SAM/SOM Data
    const marketData = [
        {
            label: 'TAM',
            name: 'Global Compliance Spend',
            value: '$274B',
            description: 'Total addressable market for global compliance labor spend across all regulated sectors',
            color: 'gray',
            size: 'large'
        },
        {
            label: 'SAM',
            name: 'Americas Compliance OPS',
            value: '$27B',
            description: 'Serviceable market in the US-LATAM Corridor. Includes $15B spent annually in LATAM on Financial Crime Compliance (FCC)',
            color: 'blue',
            size: 'medium'
        },
        {
            label: 'SOM',
            name: 'Mid-Market FinTechs',
            value: '$50M',
            description: 'Serviceable obtainable market targeting mid-market FinTechs ready for automation',
            color: 'emerald',
            size: 'small'
        }
    ];

    // Concentric circles visualization
    const visualization = createElement('div', ['flex', 'flex-col', 'lg:flex-row', 'items-center', 'justify-center', 'mb-12'], [
        // Left side - Circles (hidden on mobile)
        createElement('div', ['relative', 'w-64', 'h-64', 'lg:w-96', 'lg:h-96', 'mb-8', 'lg:mb-0', 'lg:mr-16', 'hidden', 'md:block'], [
            // TAM - Largest circle
            createElement('div', ['absolute', 'inset-0', 'rounded-full', 'border-4', 'border-gray-600', 'bg-gray-800/20', 'flex', 'items-center', 'justify-center'], [
                createElement('div', ['text-gray-500', 'font-mono', 'text-sm', 'absolute', 'top-4'], ['TAM - $274B'])
            ]),

            // SAM - Medium circle
            createElement('div', ['absolute', 'inset-12', 'rounded-full', 'border-4', 'border-blue-600', 'bg-blue-900/20', 'flex', 'items-center', 'justify-center'], [
                createElement('div', ['text-blue-400', 'font-mono', 'text-sm', 'absolute', 'top-4'], ['SAM - $27B'])
            ]),

            // SOM - Smallest circle
            createElement('div', ['absolute', 'inset-24', 'rounded-full', 'border-4', 'border-emerald-600', 'bg-emerald-900/30', 'flex', 'items-center', 'justify-center'], [
                createElement('div', ['text-center'], [
                    createElement('div', ['text-3xl', 'font-bold', 'text-emerald-400', 'mb-1'], ['$50M']),
                    createElement('div', ['text-sm', 'text-emerald-500', 'font-mono'], ['SOM']),
                    createElement('div', ['text-xs', 'text-gray-400', 'mt-2'], ['Mid-Market', createElement('br'), 'FinTechs'])
                ])
            ])
        ]),

        // Right side - Breakdown
        createElement('div', ['space-y-6', 'flex-1', 'max-w-xl'],
            marketData.map(market =>
                createElement('div', ['bg-gray-800/50', 'p-5', 'rounded-lg', 'border', 'border-gray-700', 'hover:border-' + market.color + '-600', 'transition-all'], [
                    createElement('div', ['flex', 'items-center', 'justify-between', 'mb-2'], [
                        createElement('div', ['flex', 'items-center', 'space-x-3'], [
                            createElement('div', ['w-3', 'h-3', 'rounded-full', market.label === 'SOM' ? 'bg-white' : 'bg-' + market.color + '-500']),
                            createElement('div', ['text-lg', 'font-bold', 'text-' + market.color + '-400'], [market.label + ' - ' + market.name])
                        ]),
                        createElement('div', ['text-2xl', 'font-bold', 'text-white'], [market.value])
                    ]),
                    createElement('div', ['text-sm', 'text-gray-400', 'leading-relaxed'], [market.description])
                ])
            )
        )
    ]);

    // Bottom section - Target profile
    const targetProfile = createElement('div', ['bg-blue-900/20', 'border', 'border-blue-800', 'p-6', 'rounded-lg', 'max-w-4xl', 'mx-auto'], [
        createElement('div', ['text-center', 'mb-4'], [
            createElement('div', ['text-sm', 'text-blue-500', 'font-mono', 'uppercase', 'tracking-wider', 'mb-1'], ['Phase 1 Beachhead']),
            createElement('div', ['text-2xl', 'font-bold', 'text-white'], ['500 US Series B-D Neo-banks & Crypto Exchanges'])
        ]),

        createElement('div', ['grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-6', 'text-center'], [
            createElement('div', [], [
                createElement('div', ['text-3xl', 'font-bold', 'text-emerald-400', 'mb-1'], ['500']),
                createElement('div', ['text-sm', 'text-gray-400'], ['Target Companies'])
            ]),
            createElement('div', [], [
                createElement('div', ['text-3xl', 'font-bold', 'text-blue-400', 'mb-1'], ['$100k']),
                createElement('div', ['text-sm', 'text-gray-400'], ['Average Contract Value'])
            ]),
            createElement('div', [], [
                createElement('div', ['text-3xl', 'font-bold', 'text-yellow-400', 'mb-1'], ['High-Burn']),
                createElement('div', ['text-sm', 'text-gray-400'], ['Automation = Survival'])
            ])
        ])
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        visualization,
        targetProfile
    ]);
};
