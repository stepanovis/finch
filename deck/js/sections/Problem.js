import { createElement } from '../core/dom.js';

export const Problem = () => {
    const header = createElement('div', ['text-center', 'mb-16'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white'], ['THE PROBLEM'])
    ]);

    const stats = [
        {
            number: '65%',
            text: 'US Banks BANNED GenAI Due to Data Leakage Risks',
            subtext: 'Cloud AI is non-compliant, trapping private data in legacy systems'
        },
        {
            number: '78%',
            text: 'Employees Use It Anyway',
            subtext: 'Ban doesn\'t work — moves risk to shadow AI',
            highlight: true
        },
        {
            number: '90%',
            text: 'Market Relies on Manual Excel Matrices',
            subtext: 'Manual review slows business and guarantees human error at scale'
        },
        {
            number: '0%',
            text: 'Prevention: Static Zombie Policies',
            subtext: 'Compliance rules once written, stagnate as non-actionable documents'
        }
    ];

    const statsList = createElement('div', ['max-w-6xl', 'mx-auto', 'space-y-8'],
        stats.map(stat => {
            const isZero = stat.number === '0%';
            return createElement('div', ['flex', 'items-center', 'gap-8', 'p-6', 'rounded-lg', stat.highlight ? 'bg-red-900/20' : 'bg-red-900/10'], [
                createElement('div', ['text-5xl', 'md:text-7xl', 'font-bold', 'text-red-400', 'min-w-[180px]', 'text-right'], 
                    isZero 
                        ? [
                            createElement('span', ['invisible'], ['0']),
                            createElement('span', [], ['0%'])
                          ]
                        : [stat.number]
                ),
                createElement('div', ['flex-1'], [
                    createElement('div', ['text-2xl', 'md:text-3xl', 'font-bold', 'text-white', 'mb-1'], [stat.text]),
                    createElement('div', ['text-lg', 'text-gray-400', 'font-mono'], [stat.subtext])
                ])
            ]);
        })
    );

    // Footnote with sources
    const footnote = createElement('div', ['max-w-7xl', 'mx-auto', 'mt-16', 'text-right'], [
        createElement('div', ['text-[10px]', 'text-gray-500', 'font-mono'], ['Sources: Gartner 2024, Salesforce AI Survey,']),
        createElement('div', ['text-[10px]', 'text-gray-500', 'font-mono'], ['Compliance Week 2024'])
    ]);

    return createElement('div', [], [
        header,
        statsList,
        footnote
    ]);
};
