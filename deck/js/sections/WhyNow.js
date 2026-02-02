import { createElement } from '../core/dom.js';

export const WhyNow = () => {
    const header = createElement('div', ['text-center', 'mb-16'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white'], ['WHY NOW?'])
    ]);

    // Two big stat blocks
    const bigStats = createElement('div', ['grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-12', 'max-w-5xl', 'mx-auto', 'mb-16'], [
        // $87 Billion block
        createElement('div', ['text-center', 'p-8'], [
            createElement('div', ['text-5xl', 'md:text-7xl', 'font-bold', 'text-emerald-400'], ['87']),
            createElement('div', ['text-3xl', 'md:text-5xl', 'font-bold', 'text-emerald-400', 'mb-2'], ['BILLION DOLLARS']),
            createElement('div', ['text-xl', 'text-green-400', 'font-mono', 'mb-4'], ['+150% YoY']),
            createElement('div', ['text-lg', 'text-gray-300'], ['Invested in Sovereign AI infrastructure'])
        ]),
        // 20+ State Laws block
        createElement('div', ['text-center', 'p-8'], [
            createElement('div', ['text-5xl', 'md:text-7xl', 'font-bold', 'text-emerald-400'], ['20+']),
            createElement('div', ['text-3xl', 'md:text-5xl', 'font-bold', 'text-emerald-400', 'mb-2'], ['STATE LAWS']),
            createElement('div', ['text-xl', 'text-green-400', 'font-mono', 'mb-4'], ['+12 US States in 2025']),
            createElement('div', ['text-lg', 'text-gray-300'], ['New liability rules force compliance logic in-house'])
        ])
    ]);

    // Positive facts for rotation with sources
    const facts = [
        { text: 'Enterprises shifting to on-premise AI for data sovereignty', source: 'IDC MarketScape 2025' },
        { text: '150% YoY growth in private AI infrastructure spending', source: 'IDC MarketScape 2025' },
        { text: 'Mid-market companies show fastest adoption at 13.5% CAGR', source: 'IDC MarketScape 2025' },
        { text: 'California CCPA requires risk assessments for automated decision-making', source: 'IAPP 2025' },
        { text: '12 new US states passed comprehensive privacy laws in 2025', source: 'IAPP 2025' },
        { text: 'EU AI Act classifies compliance systems as "high-risk"', source: 'IAPP 2025' },
        { text: 'Bloomberg Law GPT cuts hallucinations to <5% with domain training', source: 'Stanford HAI 2024' }
    ];

    // Create rotating facts container
    const factsContainer = createElement('div', ['max-w-3xl', 'mx-auto', 'text-center', 'h-20', 'flex', 'flex-col', 'items-center', 'justify-center'], []);
    factsContainer.id = 'rotating-facts';

    // Add initial fact with source
    const factText = createElement('div', ['text-gray-400', 'text-lg', 'font-mono', 'transition-opacity', 'duration-500'], [facts[0].text]);
    factText.id = 'fact-text';
    const factSource = createElement('div', ['text-gray-600', 'text-xs', 'font-mono', 'mt-1', 'transition-opacity', 'duration-500'], ['— ' + facts[0].source]);
    factSource.id = 'fact-source';
    factsContainer.appendChild(factText);
    factsContainer.appendChild(factSource);

    // Add rotation script
    const script = document.createElement('script');
    script.textContent = `
        (function() {
            const facts = ${JSON.stringify(facts)};
            let currentIndex = 0;
            const textEl = document.getElementById('fact-text');
            const sourceEl = document.getElementById('fact-source');
            if (!textEl || !sourceEl) return;

            setInterval(() => {
                textEl.style.opacity = '0';
                sourceEl.style.opacity = '0';
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % facts.length;
                    textEl.textContent = facts[currentIndex].text;
                    sourceEl.textContent = '— ' + facts[currentIndex].source;
                    textEl.style.opacity = '1';
                    sourceEl.style.opacity = '1';
                }, 500);
            }, 3000);
        })();
    `;

    const container = createElement('div', [], [
        header,
        bigStats,
        factsContainer
    ]);

    // Append script after container is in DOM
    setTimeout(() => {
        document.body.appendChild(script);
    }, 100);

    return container;
};
