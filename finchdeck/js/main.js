import { analysisData } from './data/analysisData.js';
import { createElement } from './core/dom.js';
import { Header } from './components/Header.js';
import { SectionWrapper } from './components/SectionWrapper.js';

// Sections
import { HeroSection } from './sections/Hero.js';
import { Problem } from './sections/Problem.js';
import { WhyNow } from './sections/WhyNow.js';
import { Solution } from './sections/Solution.js';
import { Trust } from './sections/Trust.js';
import { DecisionGuide } from './sections/DecisionGuide.js';
import { MarketOpportunity } from './sections/MarketOpportunity.js';
import { GTMStrategy } from './sections/GTMStrategy.js';
import { CurrentStatus } from './sections/CurrentStatus.js';
import { Competition } from './sections/Competition.js';
import { BusinessModel } from './sections/BusinessModel.js';
import { Team } from './sections/Team.js';
import { PreSeed } from './sections/PreSeed.js';
import { Contact } from './sections/Contact.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    const App = () => {
        const fragment = document.createDocumentFragment();
        
        fragment.appendChild(Header());
        fragment.appendChild(HeroSection());

        // Why Now section (Opportunity) - Full screen slide
        const whyNowSection = createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [WhyNow()])
        ]);
        whyNowSection.id = 'why-now';
        fragment.appendChild(whyNowSection);

        // Problem section - Full screen slide
        const problemSection = createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [Problem()])
        ]);
        problemSection.id = 'problem';
        fragment.appendChild(problemSection);

        // Solution section - Full screen slide
        const solutionSection = createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [Solution()])
        ]);
        solutionSection.id = 'solution';
        fragment.appendChild(solutionSection);

        // Trust section - Full screen slide
        fragment.appendChild(createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [Trust()])
        ]));

        // Decision Guide section - Full screen slide
        fragment.appendChild(createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [DecisionGuide()])
        ]));

        // Market Opportunity section - Full screen slide
        const marketSection = createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [MarketOpportunity()])
        ]);
        marketSection.id = 'market';
        fragment.appendChild(marketSection);

        // GTM Strategy section - Full screen slide
        fragment.appendChild(createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [GTMStrategy()])
        ]));

        // Current Status section - Full screen slide
        fragment.appendChild(createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [CurrentStatus()])
        ]));

        // Competition section - Full screen slide
        fragment.appendChild(createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [Competition()])
        ]));

        // Business Model section - Full screen slide
        fragment.appendChild(createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [BusinessModel()])
        ]));

        // Team section - Full screen slide
        const teamSection = createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [Team()])
        ]);
        teamSection.id = 'team';
        fragment.appendChild(teamSection);

        // Pre-Seed section - Full screen slide
        fragment.appendChild(createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [PreSeed()])
        ]));

        // Contact section - Full screen slide
        const contactSection = createElement('section', ['min-h-screen', 'flex', 'items-center', 'justify-center', 'border-b', 'border-gray-800', 'py-12'], [
            createElement('div', ['w-full', 'max-w-7xl', 'px-6'], [Contact()])
        ]);
        contactSection.id = 'contact';
        fragment.appendChild(contactSection);

        return fragment;
    };

    root.innerHTML = '';
    root.appendChild(App());
});