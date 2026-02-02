import { createElement } from '../core/dom.js';

export const HeroSection = () => {
    return createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'relative', 'overflow-hidden', 'pt-20', 'border-b', 'border-gray-800'], [
        createElement('div', ['glow-point', 'top-1/4', 'left-1/4', '-translate-x-1/2', '-translate-y-1/2']),
        
        createElement('div', ['relative', 'z-10', 'text-center', 'max-w-4xl', 'px-6'], [
            createElement('h1', ['text-4xl', 'md:text-7xl', 'font-bold', 'mb-12', 'leading-tight'], [
                createElement('span', ['block', 'text-white'], ['COMPLIANCE OFFICER']),
                createElement('span', ['block', 'text-blue-400'], ['COPILOT'])
            ]),
            createElement('p', ['text-2xl', 'md:text-3xl', 'text-gray-300', 'mb-12', 'leading-relaxed', 'max-w-3xl', 'mx-auto', 'font-light'], [
                'On-Prem Legal Infrastructure for Regulated Enterprises'
            ]),
            createElement('div', ['flex', 'justify-center', 'space-x-12', 'max-w-3xl', 'mx-auto'], [
                createElement('div', ['text-center'], [
                    createElement('div', ['text-sm', 'font-mono', 'text-gray-500', 'uppercase', 'tracking-wider', 'mb-1'], ['Living Vault']),
                    createElement('div', ['text-xs', 'text-gray-600'], ['No zombie policies'])
                ]),
                createElement('div', ['text-center'], [
                    createElement('div', ['text-sm', 'font-mono', 'text-gray-500', 'uppercase', 'tracking-wider', 'mb-1'], ['Local AI Memory']),
                    createElement('div', ['text-xs', 'text-gray-600'], ['Private and custom'])
                ]),
                createElement('div', ['text-center'], [
                    createElement('div', ['text-sm', 'font-mono', 'text-gray-500', 'uppercase', 'tracking-wider', 'mb-1'], ['ZK Proofs']),
                    createElement('div', ['text-xs', 'text-gray-600'], ['Verify without exposing'])
                ])
            ]),
        ])
    ]);
};