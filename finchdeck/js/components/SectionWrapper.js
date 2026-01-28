import { createElement } from '../core/dom.js';

export const SectionWrapper = (id, data, childrenFunctions) => {
    return createElement('section', ['py-16', 'border-b', 'border-gray-800'], [
        createElement('div', ['max-w-7xl', 'mx-auto', 'px-6'], [
            // Header
            createElement('div', ['mb-12'], [
                createElement('h2', ['text-3xl', 'md:text-4xl', 'font-bold', 'mb-4', 'text-white'], [data.title]),
                createElement('p', ['text-xl', 'text-gray-400', 'max-w-3xl'], [data.description])
            ]),
            
            // Discussion Questions (as a detail block)
            createElement('div', ['mb-12', 'bg-gray-900/50', 'border', 'border-gray-800', 'rounded-xl', 'p-6'], [
                createElement('h3', ['text-sm', 'font-mono', 'text-emerald-400', 'mb-4', 'uppercase', 'tracking-wider'], ['Key Discussion Points']),
                createElement('div', ['grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6'], 
                    data.questions.map(q => 
                        createElement('div', [], [
                            createElement('h4', ['font-bold', 'text-white', 'mb-2'], [q.topic]),
                            createElement('p', ['text-sm', 'text-gray-400', 'leading-relaxed'], [q.q])
                        ])
                    )
                )
            ]),

            // Children Components
            createElement('div', ['space-y-20'], 
                childrenFunctions.map(childFunc => childFunc())
            )
        ])
    ], { id });
};
