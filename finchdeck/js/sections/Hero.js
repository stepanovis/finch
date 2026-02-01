import { createElement } from '../core/dom.js';

export const HeroSection = () => {
    return createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'relative', 'overflow-hidden', 'py-20', 'border-b', 'border-gray-800'], [
        createElement('div', ['glow-point', 'top-1/4', 'left-1/4', '-translate-x-1/2', '-translate-y-1/2']),
        
        createElement('div', ['container', 'mx-auto', 'px-6', 'grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12', 'items-center', 'relative', 'z-10'], [
            // Left Column: Text
            createElement('div', ['text-left'], [
                createElement('div', ['inline-block', 'bg-blue-900/30', 'border', 'border-blue-800', 'rounded-full', 'px-4', 'py-1', 'mb-6'], [
                    createElement('span', ['text-blue-400', 'text-xs', 'font-mono', 'uppercase', 'tracking-widest'], ['Public Beta 2026'])
                ]),
                createElement('h1', ['text-6xl', 'md:text-8xl', 'font-bold', 'mb-6', 'leading-none', 'tracking-tighter'], [
                    createElement('span', ['block', 'text-white'], ['FINCH']),
                    createElement('span', ['block', 'text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-blue-400', 'to-emerald-400', 'text-4xl', 'md:text-5xl', 'mt-2'], ['THE SAFE SHADOW AI'])
                ]),
                createElement('p', ['text-xl', 'text-gray-400', 'mb-8', 'leading-relaxed', 'max-w-xl'], [
                    '78% of your compliance team uses ChatGPT against policy.',
                    createElement('br'),
                    createElement('span', ['text-gray-200'], ['Don\'t ban them. Secure them.']),
                    createElement('br'),
                    'The first Local LLM designed to live entirely on your laptop.'
                ]),
                
                // CTA / Pills
                createElement('div', ['flex', 'flex-wrap', 'gap-4'], [
                    createElement('div', ['px-6', 'py-3', 'bg-white', 'text-black', 'font-bold', 'rounded-lg', 'hover:bg-gray-200', 'transition-colors', 'cursor-pointer'], ['Download for Mac M1/M2']),
                    createElement('div', ['px-6', 'py-3', 'border', 'border-gray-600', 'text-white', 'font-bold', 'rounded-lg', 'hover:border-white', 'transition-colors', 'cursor-pointer'], ['Read the Manifesto'])
                ])
            ]),

            // Right Column: Visual (Abstract Laptop/Node)
            createElement('div', ['relative', 'flex', 'justify-center', 'items-center'], [
                // Abstract decorative circles
                createElement('div', ['absolute', 'w-96', 'h-96', 'bg-blue-500/10', 'rounded-full', 'blur-3xl']),
                createElement('div', ['absolute', 'w-64', 'h-64', 'bg-emerald-500/10', 'rounded-full', 'blur-2xl', 'translate-x-12', 'translate-y-12']),
                
                // Card representing the Local App
                createElement('div', ['relative', 'bg-gray-900', 'border', 'border-gray-700', 'rounded-xl', 'p-6', 'w-full', 'max-w-md', 'shadow-2xl'], [
                    // Fake Window Header
                    createElement('div', ['flex', 'items-center', 'space-x-2', 'mb-4', 'border-b', 'border-gray-800', 'pb-4'], [
                        createElement('div', ['w-3', 'h-3', 'rounded-full', 'bg-red-500']),
                        createElement('div', ['w-3', 'h-3', 'rounded-full', 'bg-yellow-500']),
                        createElement('div', ['w-3', 'h-3', 'rounded-full', 'bg-green-500']),
                        createElement('div', ['ml-4', 'text-xs', 'text-gray-500', 'font-mono'], ['finch-local — 7B Model — Offline'])
                    ]),
                    // Content
                    createElement('div', ['space-y-4', 'font-mono', 'text-sm'], [
                        createElement('div', ['text-emerald-400'], ['> Initializing Local Node...']),
                        createElement('div', ['text-gray-400'], ['> Loading weights: Llama-3-Finch-7B.gguf']),
                        createElement('div', ['text-gray-400'], ['> Verifying integrity... OK']),
                        createElement('div', ['text-gray-400'], ['> Disabling Network Egress... OK']),
                        createElement('div', ['text-white', 'mt-4'], ['System Ready.']),
                        createElement('div', ['text-blue-400'], ['What would you like to investigate today?']),
                        createElement('div', ['animate-pulse', 'inline-block', 'w-2', 'h-4', 'bg-blue-400', 'ml-1'])
                    ])
                ])
            ])
        ])
    ]);
};
