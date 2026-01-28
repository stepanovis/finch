export const analysisData = {
    market: {
        tam_usa_2025: 14.5,
        tam_usa_2030: 26.0,
        failure_rate: 73,
        ai_error_rate: "17-34%",
        sales_cycle_enterprise: "18+ months"
    },
    competitors: [
        { name: "Vanta", arr: "$220M", valuation: "$4.15B", deployment: "Cloud/SaaS", on_prem: false },
        { name: "Drata", arr: "$98M", valuation: "$2B", deployment: "Cloud/SaaS", on_prem: false },
        { name: "OneTrust", arr: "~$500M", valuation: "$10B+", deployment: "Hybrid", on_prem: true },
        { name: "Secureframe", arr: "N/A", valuation: "N/A", deployment: "Cloud/SaaS", on_prem: false },
        { name: "Finch (Target)", arr: "$0", valuation: "Seed", deployment: "On-Premise Native", on_prem: true }
    ],
    regulations: [
        {
            country: "Mexico",
            code: "MX",
            title: "Financial Data Localization",
            law: "CNBV / LFPDPPP",
            detail: "Mandates fintechs to store financial data locally. Cloud processing often prohibited for core banking.",
            urgency: "High"
        },
        {
            country: "Brazil",
            code: "BR",
            title: "LGPD & Resolution 19/2024",
            law: "Central Bank / ANPD",
            detail: "Mandatory Standard Contractual Clauses (SCCs) by Aug 2025. EU SCCs not recognized.",
            urgency: "Critical (Aug '25)"
        },
        {
            country: "USA",
            code: "US",
            title: "FedRAMP & HIPAA",
            law: "Federal / State (CCPA)",
            detail: "FedRAMP requires US-only data centers. High cost of cloud compliance.",
            urgency: "Medium-High"
        }
    ],
    economics: {
        cloud_rate_hourly: 98.32,
        on_prem_setup: 400000,
        on_prem_opex_percent: 0.25,
        break_even_months: 11.9,
        savings_3yr: "30-55%"
    },
    product: {
        golden_30: [
            "AML/CFT Manual (CNBV)", "Data Privacy Policy (LFPDPPP)", "KYC Procedure", 
            "Sanctions Screening Policy", "Suspicious Activity Reporting", "Information Security Policy",
            "Vendor Risk Management", "Business Continuity Plan", "Code of Ethics",
            "Anti-Bribery & Corruption", "Whistleblower Policy", "Record Retention Policy",
            "Incident Response Plan", "Access Control Policy", "Change Management Policy"
        ],
        triage_scenario: {
            input_source: "External API (Jumio/SumSub)",
            request_type: "KYC_ALERT_HIGH_RISK",
            payload: "Subject: Juan Perez. Match: PEP List (Level 2). Transaction: $15,000 USD (Wire).",
            ai_analysis: {
                criticality: "HIGH",
                score: 88,
                confidence: 92,
                reasoning: "Transaction exceeds $10k threshold. Name match on PEP list confirmed via fuzzy logic (95%).",
                reference_doc: "AML/CFT Manual Section 4.2 (Enhanced Due Diligence)",
                recommendation: "FREEZE_AND_REVIEW"
            }
        }
    },
    flexible_arch: {
        title: "Proposed: Model Agnostic Architecture",
        description: "Don't pay for H100s on Day 1. Use Cloud AI for pilots, switch to Local AI for contracts.",
        modes: [
            { name: "Cloud Pilot", icon: "☁️", model: "OpenAI / Anthropic", infra: "SaaS / API", cost: "Low (Pay-per-token)" },
            { name: "Private VPC", icon: "🏢", model: "Azure OpenAI / Bedrock", infra: "Client Cloud", cost: "Medium" },
            { name: "Sovereign Bunker", icon: "🔒", model: "Llama 3 / Mistral (Fine-tuned)", infra: "On-Prem H100", cost: "High CapEx / Low OpEx" }
        ]
    },
    discussion_topics: {
        market_economics: {
            title: "Market & Economics",
            description: "The 'Why Now' and 'Why Us' logic based on geography and TCO.",
            questions: [
                {
                    topic: "TCO Reality",
                    q: "Our calculator assumes High Volume (20M tokens). Do we have customers with this volume today? If not, On-Prem is MORE expensive than Cloud."
                },
                {
                    topic: "Regulatory Moat",
                    q: "Is Mexico's CNBV law actually enforced strictly, or is it a 'paper tiger'? Have competitors been fined?"
                },
                {
                    topic: "Competitor Response",
                    q: "What stops Vanta from launching a 'Vanta Private Agent' docker container next month?"
                }
            ]
        },
        product_scenarios: {
            title: "Product & Scenarios",
            description: "Defining the MVP and validating the Pitch Deck terminology.",
            questions: [
                {
                    topic: "Deck Gap: Missing Scenario",
                    q: "The Deck sells 'Infrastructure' but lacks a concrete User Story. What happens on Day 1? Does a human log in to review docs, or does an API start blocking transactions? We need to define the actual Usage."
                },
                {
                    topic: "Deck Term: 'Neuro-Symbolic Core'",
                    q: "We claim '100% Determinism'. Does this mean LLM is strictly a PARSER (Text->JSON)? If it hallucinates the JSON, the Code Logic fails. How do we mitigate?"
                },
                {
                    topic: "Deck Term: 'Zero-Knowledge (ZKP)'",
                    q: "Are we implementing actual Cryptography (zk-SNARKs) or just 'Physical Isolation'? If we go SaaS later, this claim breaks."
                }
            ]
        },
        architecture_security: {
            title: "Architecture & Security",
            description: "The technical execution of the Sovereign Container.",
            questions: [
                {
                    topic: "Blind Observability",
                    q: "Since we have Zero Egress, we cannot see error logs or model drift. How do we debug issues without accessing the client's sensitive data?"
                },
                {
                    topic: "The Living Vault",
                    q: "When a new law passes (e.g., Brazil LGPD update), how does the on-prem vector DB get updated? Who verifies the parsing?"
                },
                {
                    topic: "Hardware Reality",
                    q: "Running local LLMs requires H100/A100s. Do our mid-market customers actually have this hardware? Or do we ship the box?"
                }
            ]
        },
        gtm_strategy: {
            title: "Go-To-Market (GTM)",
            description: "How we sell: Direct vs Channel. Enterprise vs Mid-Market.",
            questions: [
                {
                    topic: "The Wedge",
                    q: "Deck says 'Mid-Market Fintechs'. But On-Prem economics only work for Enterprise. Contradiction?"
                },
                {
                    topic: "Channel Partners",
                    q: "Strategy relies on SumSub/Veriff. Why would they integrate us? What is their incentive?"
                },
                {
                    topic: "Sales Cycle",
                    q: "Enterprise On-Prem sales take 9-18 months. Do we have the runway?"
                }
            ]
        }
    }
};
