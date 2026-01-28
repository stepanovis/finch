import { createElement } from '../core/dom.js';

export const Contact = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-blue-400', 'mb-2'], ['CONTACTS'])
    ]);

    // Contact card
    const contactCard = createElement('div', ['max-w-3xl', 'mx-auto', 'bg-gray-800/50', 'border-2', 'border-gray-700', 'rounded-lg', 'p-12'], [
        // Name
        createElement('div', ['text-center', 'mb-8'], [
            createElement('div', ['text-3xl', 'font-bold', 'text-white', 'mb-2'], ['TONY PETROV'])
        ]),

        // Divider
        createElement('div', ['h-px', 'bg-gray-700', 'mb-8']),

        // Contact details
        createElement('div', ['space-y-6'], [
            // Email
            createElement('div', ['flex', 'items-center', 'justify-between'], [
                createElement('div', ['text-sm', 'text-gray-400', 'font-mono', 'uppercase'], ['Email']),
                createElement('a', ['text-lg', 'text-blue-400', 'hover:text-blue-300', 'transition-colors'], ['CEO@FINCHLEGAL.AI'], {
                    href: 'mailto:CEO@FINCHLEGAL.AI'
                })
            ]),

            // Phone
            createElement('div', ['flex', 'items-center', 'justify-between'], [
                createElement('div', ['text-sm', 'text-gray-400', 'font-mono', 'uppercase'], ['Phone']),
                createElement('a', ['text-lg', 'text-white', 'hover:text-blue-400', 'transition-colors', 'flex', 'items-center', 'space-x-2'], [
                    createElement('span', [], ['🇧🇷']),
                    createElement('span', [], ['+55 (48) 99119-7523'])
                ], {
                    href: 'tel:+5548991197523'
                })
            ]),

            // Telegram
            createElement('div', ['flex', 'items-center', 'justify-between'], [
                createElement('div', ['text-sm', 'text-gray-400', 'font-mono', 'uppercase'], ['Telegram']),
                createElement('a', ['text-lg', 'text-white', 'hover:text-blue-400', 'transition-colors', 'underline'], ['click to message'], {
                    href: 'https://t.me/tonymaysky',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                })
            ]),

            // WhatsApp
            createElement('div', ['flex', 'items-center', 'justify-between'], [
                createElement('div', ['text-sm', 'text-gray-400', 'font-mono', 'uppercase'], ['WhatsApp']),
                createElement('a', ['text-lg', 'text-white', 'hover:text-blue-400', 'transition-colors', 'underline'], ['click to message'], {
                    href: 'https://wa.me/5548991197523',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                })
            ])
        ])
    ]);

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        contactCard
    ]);
};
