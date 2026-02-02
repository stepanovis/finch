import { createElement } from '../core/dom.js';

export const BusinessModel = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE BUSINESS MODEL']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['DESIGNED FOR ENTERPRISE SCALE AND RETENTION'])
    ]);

    // Three revenue tiers
    const tiers = [
        {
            phase: 'THE BASE',
            title: 'PLATFORM LICENSE',
            price: '$50k - $75k p.a.',
            description: 'Sovereign Container deployment',
            badge: 'PREDICTABLE BASELINE',
            badgeColor: 'emerald',
            color: 'blue'
        },
        {
            phase: 'THE UPGRADE',
            title: 'METERED CONSUMPTION',
            price: '$100k+',
            description: 'Scales with customer API calls',
            badge: 'UNCAPPED UPSIDE',
            badgeColor: 'blue',
            color: 'purple'
        },
        {
            phase: 'THE RETENTION',
            title: 'ECOSYSTEM EXPANSION',
            price: '$30k - $150k p.a.',
            description: 'Deploying new logic modules (KYB, Fraud, etc)',
            badge: 'ZERO CHURN ARCHITECTURE',
            badgeColor: 'purple',
            color: 'emerald'
        }
    ];

    // Tier cards
    const tierCards = createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'max-w-7xl', 'mx-auto'],
        tiers.map(tier =>
            createElement('div', [
                'bg-gray-800/50', 'p-8', 'rounded-lg', 'border-2',
                'border-gray-700',
                'hover:border-' + tier.color + '-600', 'transition-all',
                'flex', 'flex-col'
            ], [
                // Phase label
                createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-wider', 'mb-4'], [tier.phase]),

                // Title
                createElement('div', ['mb-6'], [
                    createElement('h3', ['text-xl', 'font-bold', 'text-' + tier.color + '-400', 'mb-2'], [tier.title])
                ]),

                // Price - large and prominent
                createElement('div', ['mb-6'], [
                    createElement('div', ['text-4xl', 'font-bold', 'text-white', 'mb-2'], [tier.price])
                ]),

                // Description
                createElement('div', ['mb-8', 'flex-1'], [
                    createElement('p', ['text-sm', 'text-gray-300', 'leading-relaxed'], [tier.description])
                ]),

                // Badge at bottom
                createElement('div', ['mt-auto', 'pt-4', 'border-t', 'border-gray-700'], [
                    createElement('div', ['flex', 'items-center', 'justify-center'], [
                        createElement('span', ['text-xs', 'font-mono', 'text-' + tier.badgeColor + '-400', 'uppercase', 'tracking-wider'], [tier.badge])
                    ])
                ])
            ])
        )
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        tierCards
    ]);
};
