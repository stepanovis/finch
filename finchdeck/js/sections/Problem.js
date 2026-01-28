import { createElement } from '../core/dom.js';

export const Problem = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-2'], ['THE PROBLEM']),
        createElement('p', ['text-gray-400', 'text-lg'], ['The Static Defense Trap'])
    ]);

    const problems = [
        {
            title: 'ZOMBIE POLICIES',
            subtitle: 'Compliance rules live in static, non-actionable documents',
            blueText: 'They desperately need GenAI to make policies alive.'
        },
        {
            title: 'GENAI LEAK DATA',
            subtitle: '65% US Banks BANNED GenAI Due to Leakage Risks',
            blueText: '78% of employees use banned AI secretly anyway'
        },
        {
            title: 'MANUAL WORK',
            subtitle: '90-95% of market relies on manual Excel matrices',
            blueText: 'Manual review slows business and guarantees human error at scale.'
        }
    ];

    const problemCards = createElement('div', ['grid', 'grid-cols-1', 'lg:grid-cols-3', 'gap-8', 'max-w-7xl', 'mx-auto'],
        problems.map(problem => {
            const subtitles = [createElement('div', ['text-sm', 'text-red-500', 'font-mono'], [problem.subtitle])];
            if (problem.subtitle2) {
                subtitles.push(createElement('div', ['text-sm', 'text-red-500', 'font-mono', 'mt-4'], [problem.subtitle2]));
            }

            return createElement('div', ['p-6', 'rounded-lg', 'bg-red-900/10', 'h-full', 'flex', 'flex-col'], [
                createElement('div', ['text-2xl', 'font-bold', 'text-red-400', 'mb-2'], [problem.title]),
                createElement('div', ['mb-4'], subtitles),
                createElement('div', ['text-sm', 'text-blue-300', 'font-medium', 'leading-relaxed', 'flex-grow'], [problem.blueText])
            ]);
        })
    );

    // Footnote with all sources
    const footnote = createElement('div', ['max-w-7xl', 'mx-auto', 'mt-16', 'text-right'], [
        createElement('div', ['text-[10px]', 'text-gray-500', 'font-mono'], ['Sources: Compliance Week 2024,']),
        createElement('div', ['text-[10px]', 'text-gray-500', 'font-mono'], ['Gartner 2024, Salesforce AI Survey'])
    ]);

    return createElement('div', [], [
        header,
        problemCards,
        footnote
    ]);
};
