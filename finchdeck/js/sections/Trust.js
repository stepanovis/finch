import { createElement } from '../core/dom.js';

export const Trust = () => {
    const header = createElement('div', ['text-center', 'mb-12'], [
        createElement('h2', ['text-4xl', 'font-bold', 'text-white', 'mb-4'], ['THE EDGE']),
        createElement('div', ['text-sm', 'text-gray-500', 'font-mono', 'uppercase', 'tracking-widest'], ['Cryptographic Trust'])
    ]);


    // Trust Components
    const trustComponents = [
        {
            name: 'Zero-Knowledge Verification',
            badge: 'ENCRYPTED',
            badgeColor: 'blue',
            summary: 'GDPR/CCPA friendly — minimal exposure, full auditability',
            details: [
                { type: 'feature', text: 'Finch generates a Zero-Knowledge Proof (ZKP) for every check.' },
                { type: 'feature', text: 'Proves compliance without revealing sensitive PII data.' }
            ]
        },
        {
            name: 'Immutable Audit Chains',
            badge: 'LIVE AUDIT',
            badgeColor: 'yellow',
            summary: 'SOC2, ISO 27001 ready — export in minutes',
            details: [
                { type: 'feature', text: 'Every decision is cryptographically signed and hashed.' },
                { type: 'feature', text: 'Finch creates a tamper-proof "Chain of Custody" that legally stands up in court.' }
            ]
        },
        {
            name: 'Data Sovereignty',
            badge: 'ZERO EGRESS',
            badgeColor: 'emerald',
            summary: 'GDPR, CCPA, LGPD — met by design',
            details: [
                { type: 'feature', text: 'Deploys within your VPC or on-premise.' },
                { type: 'feature', text: 'The model moves to the datasets, not the data to the model.' }
            ]
        }
    ];

    const trustGrid = createElement('div', ['flex', 'flex-col', 'space-y-6', 'max-w-6xl', 'mx-auto'],
        trustComponents.map(component =>
            createElement('div', [
                'p-6', 'rounded-lg', 'bg-gray-800/50', 'border', 'border-gray-700'
            ], [
                // Header with badge
                createElement('div', ['flex', 'items-center', 'justify-between', 'mb-1'], [
                    createElement('div', ['text-2xl', 'font-bold', 'text-' + component.badgeColor + '-400'], [component.name]),
                    createElement('div', ['px-3', 'py-1', 'bg-' + component.badgeColor + '-900/30', 'border', 'border-' + component.badgeColor + '-800', 'rounded', 'text-xs', 'text-' + component.badgeColor + '-400', 'font-mono'], [component.badge])
                ]),
                // Stat/summary line
                createElement('div', ['text-xs', 'text-' + component.badgeColor + '-500', 'font-mono', 'mb-3'], [component.summary.toUpperCase()]),
                // All details inline
                createElement('div', ['space-y-1'],
                    component.details.map(detail =>
                        createElement('div', ['flex', 'items-start', 'space-x-2'], [
                            createElement('span', ['text-xs', detail.type === 'benefit' ? 'text-emerald-500' : 'text-' + component.badgeColor + '-500'], [detail.type === 'benefit' ? '✓' : '•']),
                            createElement('span', ['text-xs', detail.type === 'benefit' ? 'text-emerald-400' : 'text-gray-400'], [detail.text])
                        ])
                    )
                )
            ])
        )
    );

    return createElement('div', ['max-w-7xl', 'mx-auto'], [
        header,
        trustGrid
    ]);
};
