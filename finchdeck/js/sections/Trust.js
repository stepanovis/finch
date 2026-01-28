import { createElement } from '../core/dom.js';

export const Trust = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-blue-400', 'mb-2'], ['CRYPTOGRAPHIC TRUST']),
        createElement('p', ['text-xl', 'text-gray-300', 'font-light'], ['Why Regulators & Auditors Accept Finch'])
    ]);

    const subtitle = createElement('div', ['text-center', 'mb-12', 'text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], [
        'Three Layers of Legal & Technical Certainty'
    ]);

    // Trust Components
    const trustComponents = [
        {
            name: 'Data Sovereignty',
            badge: 'ZERO EGRESS',
            badgeColor: 'emerald',
            summary: 'AI runs inside your firewall, data never leaves',
            details: [
                { type: 'feature', text: 'Sovereign Container deploys entirely within customer VPC or on-premise infrastructure.' },
                { type: 'feature', text: 'The model comes to your data, not the other way around.' },
                { type: 'feature', text: 'Zero data egress: No API calls to OpenAI, Anthropic, or any external cloud.' },
                { type: 'benefit', text: 'Regulatory compliance: Data residency requirements (GDPR, CCPA, LGPD) met by design.' },
                { type: 'benefit', text: 'No vendor lock-in: Your data stays yours, even if you stop using Finch.' }
            ]
        },
        {
            name: 'Zero-Knowledge Verification',
            badge: 'ENCRYPTED',
            badgeColor: 'blue',
            summary: 'Prove compliance without revealing sensitive data',
            details: [
                { type: 'feature', text: 'Finch generates a Zero-Knowledge Proof (ZKP) for every compliance check.' },
                { type: 'feature', text: 'Proves "this person passed KYC" without exposing name, address, or documents.' },
                { type: 'feature', text: 'Auditors verify compliance mathematically, not by accessing raw PII data.' },
                { type: 'benefit', text: 'Privacy-preserving audit: Regulators get proof, not your customers\' personal data.' },
                { type: 'benefit', text: 'GDPR/CCPA friendly: Minimize data exposure while maintaining full auditability.' }
            ]
        },
        {
            name: 'Immutable Audit Chains',
            badge: 'LIVE AUDIT',
            badgeColor: 'yellow',
            summary: 'Tamper-proof chain of custody for every decision',
            details: [
                { type: 'feature', text: 'Every decision is cryptographically signed and hashed into an immutable log.' },
                { type: 'feature', text: 'Creates a blockchain-like "Chain of Custody" that cannot be altered retroactively.' },
                { type: 'feature', text: 'Full audit trail: who made the decision, when, why, what data was used, and which policy referenced.' },
                { type: 'benefit', text: 'Legally defensible: Audit chains stand up in court as tamper-proof evidence.' },
                { type: 'benefit', text: 'Regulator-ready: Export complete audit logs for SOC2, ISO 27001, or regulatory inquiries in minutes.' }
            ]
        }
    ];

    const trustGrid = createElement('div', ['flex', 'flex-col', 'space-y-6', 'max-w-6xl', 'mx-auto'],
        trustComponents.map((component, index) => {
            // All components show tooltip on right
            const isLeftSide = index === 0;

            return createElement('div', [
                'relative', 'p-6', 'rounded-lg', 'bg-gray-800/50', 'border', 'border-gray-700',
                'hover:border-' + component.badgeColor + '-600', 'transition-all', 'cursor-pointer', 'group'
            ], [
                // Header with badge
                createElement('div', ['flex', 'items-center', 'justify-between', 'mb-3'], [
                    createElement('div', ['text-2xl', 'font-bold', 'text-' + component.badgeColor + '-400'], [component.name]),
                    createElement('div', ['px-3', 'py-1', 'bg-' + component.badgeColor + '-900/30', 'border', 'border-' + component.badgeColor + '-800', 'rounded', 'text-xs', 'text-' + component.badgeColor + '-400', 'font-mono'], [component.badge])
                ]),

                // Summary
                createElement('div', ['text-sm', 'text-gray-400', 'mb-2'], [component.summary]),
                createElement('div', ['text-[10px]', 'text-gray-600', 'font-mono', 'group-hover:text-' + component.badgeColor + '-600', 'transition-colors'], ['→ Hover for details']),

                // Tooltip (appears on right for all)
                createElement('div', [
                    'absolute', 'top-0', 'left-full', 'ml-4', 'w-96', 'p-4',
                    'bg-gray-900', 'border', 'border-' + component.badgeColor + '-800', 'rounded-lg', 'shadow-2xl',
                    'opacity-0', 'group-hover:opacity-100', 'pointer-events-none',
                    'transition-opacity', 'z-50'
                ], [
                    createElement('div', ['text-sm', 'font-bold', 'text-' + component.badgeColor + '-400', 'mb-3'], [component.name]),
                    createElement('div', ['space-y-2'],
                        component.details.map(detail => {
                            const isFeature = detail.type === 'feature';
                            const isBenefit = detail.type === 'benefit';

                            return createElement('div', ['flex', 'items-start', 'space-x-2'], [
                                createElement('span', [
                                    'text-xs', 'font-bold', 'mt-0.5', 'min-w-[12px]',
                                    isFeature ? 'text-' + component.badgeColor + '-500' : isBenefit ? 'text-emerald-500' : 'text-gray-600'
                                ], [isFeature ? '•' : isBenefit ? '✓' : '•']),
                                createElement('span', [
                                    'text-xs', 'leading-relaxed',
                                    isFeature ? 'text-gray-300' : isBenefit ? 'text-emerald-300' : 'text-gray-300'
                                ], [detail.text])
                            ]);
                        })
                    )
                ])
            ]);
        })
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        subtitle,
        trustGrid
    ]);
};
