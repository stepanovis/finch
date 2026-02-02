import { createElement } from '../core/dom.js';
import { analysisData } from '../data/analysisData.js';

export const MarketMap = () => {
    const header = createElement('div', ['mb-12', 'max-w-3xl'], [
        createElement('h3', ['text-2xl', 'font-bold', 'text-white', 'mb-4'], [
            'Regulatory Fragmentation = ',
            createElement('span', ['text-emerald-400'], ['Opportunity'])
        ]),
        createElement('p', ['text-gray-400'], [
            'Data localization mandates in the Americas create a natural moat for on-premise solutions. Cloud-only competitors cannot legally serve these sectors.'
        ])
    ]);

    const list = createElement('div', ['space-y-4'], 
        analysisData.regulations.map(reg => 
            createElement('div', ['p-6', 'rounded-lg', 'bg-white/5', 'hover:bg-white/10', 'border', 'border-white/5', 'transition-colors', 'cursor-default'], [
                createElement('div', ['flex', 'justify-between', 'items-start', 'mb-2'], [
                    createElement('div', ['flex', 'items-center', 'space-x-3'], [
                        createElement('span', ['text-2xl', 'font-bold', 'text-gray-600'], [reg.code]),
                        createElement('h3', ['text-xl', 'font-semibold', 'text-white'], [reg.country])
                    ]),
                    createElement('span', [
                        'px-2', 'py-1', 'rounded', 'text-xs', 'font-mono',
                        reg.urgency.includes('High') || reg.urgency.includes('Critical') ? 'bg-red-900/50 text-red-200' : 'bg-yellow-900/50 text-yellow-200'
                    ], [reg.urgency])
                ]),
                createElement('div', ['text-emerald-400', 'font-mono', 'text-sm', 'mb-2'], [reg.law]),
                createElement('p', ['text-gray-400', 'text-sm', 'border-l-2', 'border-gray-700', 'pl-3'], [reg.detail])
            ])
        )
    );

    const mapViz = createElement('div', ['relative', 'h-96', 'rounded-xl', 'overflow-hidden', 'bg-gray-900', 'border', 'border-gray-800', 'flex', 'items-center', 'justify-center'], [
        // Abstract nodes logic similar to original but using createElement structure
        // US Node
        createElement('div', ['absolute', 'top-1/4', 'left-1/2', 'transform', '-translate-x-1/2'], [
            createElement('div', ['w-4', 'h-4', 'bg-blue-500', 'rounded-full', 'animate-ping', 'absolute']),
            createElement('div', ['w-4', 'h-4', 'bg-blue-500', 'rounded-full', 'relative', 'z-10']),
            createElement('div', ['absolute', 'left-6', 'top-0', 'w-32'], [
                createElement('div', ['text-xs', 'font-mono', 'text-blue-400'], ['USA (FedRAMP)']),
                createElement('div', ['h-px', 'bg-blue-900', 'w-full', 'mt-1'])
            ])
        ]),
        // MX Node
        createElement('div', ['absolute', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', 'mt-4'], [
             createElement('div', ['w-4', 'h-4', 'bg-red-500', 'rounded-full', 'animate-ping', 'absolute'], [], { style: 'animation-delay: 0.5s' }),
             createElement('div', ['w-4', 'h-4', 'bg-red-500', 'rounded-full', 'relative', 'z-10']),
             createElement('div', ['absolute', 'right-6', 'top-0', 'w-40', 'text-right'], [
                createElement('div', ['text-xs', 'font-mono', 'text-red-400'], ['MX (CNBV)']),
                createElement('div', ['h-px', 'bg-red-900', 'w-full', 'mt-1'])
            ])
        ])
    ]);

    return createElement('div', ['grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12', 'items-center'], [
        createElement('div', [], [header, list]),
        mapViz
    ]);
};
