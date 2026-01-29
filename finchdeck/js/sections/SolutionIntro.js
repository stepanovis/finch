import { createElement } from '../core/dom.js';

export const SolutionIntro = () => {
    const header = createElement('div', ['text-center', 'mb-16'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white'], ['THE SOLUTION'])
    ]);

    // Big impactful text - same font, highlight "deployed entirely" in blue
    const bigText = createElement('div', ['text-center', 'max-w-5xl', 'mx-auto'], [
        createElement('div', ['text-4xl', 'md:text-6xl', 'font-bold', 'text-white', 'mb-4'], ['COMPLIANCE COPILOT']),
        createElement('div', ['text-4xl', 'md:text-6xl', 'font-bold', 'text-blue-400', 'mb-4'], ['DEPLOYED ENTIRELY']),
        createElement('div', ['text-4xl', 'md:text-6xl', 'font-bold', 'text-white'], ['WITHIN CUSTOMER FIREWALL'])
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        bigText
    ]);
};
