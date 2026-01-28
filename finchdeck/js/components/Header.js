import { createElement } from '../core/dom.js';

export const Header = () => {
    return createElement('header', ['fixed', 'top-0', 'w-full', 'z-50', 'bg-black/50', 'backdrop-filter', 'backdrop-blur-lg', 'border-b', 'border-white/10'], [
        createElement('div', ['max-w-7xl', 'mx-auto', 'px-6', 'h-20', 'flex', 'items-center', 'justify-between'], [
            createElement('div', ['text-2xl', 'font-bold', 'font-playfair', 'text-white'], ['FINCH']),
            createElement('nav', ['hidden', 'md:flex', 'space-x-8'], [
                createElement('a', ['text-sm', 'text-gray-400', 'hover:text-white', 'transition-colors', 'cursor-pointer'], ['Problem'], { href: '#why-now' }),
                createElement('a', ['text-sm', 'text-gray-400', 'hover:text-white', 'transition-colors', 'cursor-pointer'], ['Solution'], { href: '#solution' }),
                createElement('a', ['text-sm', 'text-gray-400', 'hover:text-white', 'transition-colors', 'cursor-pointer'], ['Market'], { href: '#market' }),
                createElement('a', ['text-sm', 'text-gray-400', 'hover:text-white', 'transition-colors', 'cursor-pointer'], ['Team'], { href: '#team' }),
                createElement('a', ['text-sm', 'text-gray-400', 'hover:text-white', 'transition-colors', 'cursor-pointer'], ['Contact'], { href: '#contact' }),
            ])
        ])
    ]);
};
