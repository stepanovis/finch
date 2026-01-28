import { createElement } from '../core/dom.js';

export const HeroSection = () => {
    return createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'relative', 'overflow-hidden', 'pt-20', 'border-b', 'border-gray-800'], [
        createElement('div', ['glow-point', 'top-1/4', 'left-1/4', '-translate-x-1/2', '-translate-y-1/2']),
        
        createElement('div', ['relative', 'z-10', 'text-center', 'max-w-4xl', 'px-6'], [
            createElement('div', ['inline-block', 'px-3', 'py-1', 'mb-6', 'border', 'border-white/10', 'rounded-full', 'bg-white/5', 'backdrop-blur-sm'], [
                createElement('span', ['text-xs', 'font-mono', 'text-emerald-400', 'tracking-wider'], ['PRE-SEED ROUND 2026'])
            ]),
            createElement('h1', ['text-4xl', 'md:text-7xl', 'font-bold', 'mb-12', 'leading-tight'], [
                createElement('span', ['block', 'text-white'], ['SOVEREIGN']),
                createElement('span', ['block', 'text-blue-400'], ['COMPLIANCE']),
                createElement('span', ['block', 'text-white'], ['RESIDENT AI'])
            ]),
            createElement('p', ['text-2xl', 'md:text-3xl', 'text-gray-300', 'mb-12', 'leading-relaxed', 'max-w-3xl', 'mx-auto', 'font-light'], [
                'Copilot That Automates Compliance Workflows'
            ]),
            createElement('div', ['flex', 'justify-center', 'space-x-12', 'max-w-3xl', 'mx-auto'], [
                createElement('div', ['text-center'], [
                    createElement('div', ['text-sm', 'font-mono', 'text-gray-500', 'uppercase', 'tracking-wider', 'mb-1'], ['Ask Anything']),
                    createElement('div', ['text-xs', 'text-gray-600'], ['Query regulations instantly'])
                ]),
                createElement('div', ['text-center'], [
                    createElement('div', ['text-sm', 'font-mono', 'text-gray-500', 'uppercase', 'tracking-wider', 'mb-1'], ['Routes Smartly']),
                    createElement('div', ['text-xs', 'text-gray-600'], ['Auto-triage requests'])
                ]),
                createElement('div', ['text-center'], [
                    createElement('div', ['text-sm', 'font-mono', 'text-gray-500', 'uppercase', 'tracking-wider', 'mb-1'], ['Alerts Proactively']),
                    createElement('div', ['text-xs', 'text-gray-600'], ['Flags critical issues'])
                ])
            ]),
        ])
    ]);
};
