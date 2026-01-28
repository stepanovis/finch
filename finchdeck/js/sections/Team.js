import { createElement } from '../core/dom.js';

export const Team = () => {
    const header = createElement('div', ['text-center', 'mb-8'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-blue-400', 'mb-2'], ['BUILT BY THE ARCHITECTS OF']),
        createElement('p', ['text-3xl', 'text-blue-300', 'font-light'], ['MODERN COMPLIANCE'])
    ]);

    // Team members
    const team = [
        {
            name: 'Tony Petrov',
            role: 'CHIEF EXECUTIVE OFFICER',
            flag: '🇧🇷',
            experience: 'Founder / CLO SumSub ($5B val.)',
            description: 'Built one of the world\'s leading identity platforms, serving 2,000+ clients',
            photo: 'finchdeck/photo_2026-01-28_10-15-44.jpg',
            company: 'SumSub',
            color: 'blue'
        },
        {
            name: 'Ivan Stepanov',
            role: 'CHIEF TECH OFFICER',
            flag: '🇧🇷',
            experience: 'Head of Architecture (Skyeng)',
            description: 'Scaled 150+ service architecture across EdTech, PropTech, and Healthcare platforms.',
            photo: 'finchdeck/photo_2025-02-11_06-57-10.jpg',
            company: 'Skyeng',
            color: 'purple'
        },
        {
            name: 'Alexander Fedosov',
            role: 'PRODUCT ARCHITECT',
            flag: '🇨🇭',
            experience: 'Databricks Lead ($134B Val.)',
            description: 'Spent 20+ years building distributed data engines and heavy AI workloads',
            photo: 'finchdeck/photo_2023-12-25_06-11-46.jpg',
            company: 'Databricks',
            color: 'emerald'
        }
    ];

    // Team cards
    const teamCards = createElement('div', ['grid', 'grid-cols-3', 'gap-8', 'max-w-7xl', 'mx-auto'],
        team.map(member =>
            createElement('div', [
                'bg-gray-800/50', 'rounded-lg', 'border-2', 'border-gray-700',
                'hover:border-' + member.color + '-600', 'transition-all',
                'overflow-hidden'
            ], [
                // Photo container
                createElement('div', ['relative', 'bg-gray-900', 'flex', 'items-center', 'justify-center', 'overflow-hidden'], [
                    // Photo
                    createElement('img', ['w-full', 'h-80', 'object-cover'], [], {
                        src: member.photo,
                        alt: member.name
                    }),
                    // Flag overlay
                    createElement('div', ['absolute', 'top-4', 'left-4', 'text-4xl'], [member.flag])
                ]),

                // Info section
                createElement('div', ['p-6'], [
                    // Name
                    createElement('div', ['mb-2'], [
                        createElement('h3', ['text-2xl', 'font-bold', 'text-white'], [member.name])
                    ]),

                    // Role
                    createElement('div', ['mb-4'], [
                        createElement('div', ['text-xs', 'text-' + member.color + '-400', 'font-mono', 'uppercase', 'tracking-wider'], [member.role])
                    ]),

                    // Experience badge
                    createElement('div', ['mb-4'], [
                        createElement('div', ['inline-flex', 'items-center', 'space-x-2', 'text-sm', 'text-blue-400'], [
                            createElement('span', ['text-blue-400'], ['📈']),
                            createElement('span', ['font-bold'], [member.experience])
                        ])
                    ]),

                    // Description
                    createElement('div', ['mb-4'], [
                        createElement('p', ['text-sm', 'text-gray-300', 'leading-relaxed'], [member.description])
                    ]),

                    // Company logo placeholder / divider
                    createElement('div', ['pt-4', 'border-t', 'border-gray-700', 'flex', 'items-center', 'justify-center'], [
                        createElement('div', ['text-xs', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-wider'], [member.company])
                    ])
                ])
            ])
        )
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        teamCards
    ]);
};
