export default function SchemaOrg() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://makecited.com/#organization',
    name: 'MakeCited',
    url: 'https://makecited.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://makecited.com/logo.png',
      width: 512,
      height: 512,
    },
    description:
      'AEO audit tool that shows whether AI engines cite your brand or recommend competitors instead. Get your audit for $1.',
    foundingDate: '2026',
    email: 'support@makecited.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@makecited.com',
      contactType: 'customer support',
      availableLanguage: 'English',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://makecited.com/#website',
    name: 'MakeCited',
    url: 'https://makecited.com',
    description: 'AEO audit tool — find out if AI recommends your competitors instead of you',
    publisher: {
      '@id': 'https://makecited.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://makecited.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://makecited.com/#product',
    name: 'MakeCited AEO Audit',
    url: 'https://makecited.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Find out if ChatGPT, Perplexity, Gemini, and Claude are recommending your competitors instead of you. Get a full AEO audit with visibility scores, competitor analysis, and prioritized fixes.',
    offers: {
      '@type': 'Offer',
      price: '1.00',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      description: 'One-time AEO audit. Free to submit — pay $1 only if useful.',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      },
    },
    featureList: [
      'AI visibility check across ChatGPT, Perplexity, Gemini, Claude, Google AI Overview',
      'Competitor citation analysis',
      'Technical AI-readiness audit (robots.txt, schema, content freshness)',
      'AEO Score 0-100',
      '3-5 prioritized action items',
    ],
    creator: {
      '@id': 'https://makecited.com/#organization',
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AEO audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AEO (Answer Engine Optimization) audit checks whether AI platforms like ChatGPT, Perplexity, Gemini, and Claude mention or recommend your brand when buyers ask category questions. It reveals who AI recommends instead of you and why.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the $1 AEO audit include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The audit includes: visibility check across 5 AI platforms, sentiment analysis of what AI says about you, competitor citation analysis showing who ranks above you, technical AI-readiness check (robots.txt, schema, content freshness), an AEO Score out of 100, and 3-5 prioritized fixes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the AEO audit take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most reports are delivered via email within 2-4 hours. Every audit is manually reviewed for quality before delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is MakeCited a subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. It is a one-time $1 audit. No recurring charges, no auto-billing, no credit card required upfront. You only pay after receiving and reviewing your report.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is AEO vs SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO optimizes for ranking in Google search link lists. AEO (Answer Engine Optimization) optimizes for being cited by AI answer engines like ChatGPT, Perplexity, Gemini, and Claude. 58% of searches are now zero-click — AI answers the question before anyone visits your site.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I get for $1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A full audit across 5 AI engines — ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. You get cited/invisible status, sentiment analysis, top competitors who are mentioned instead of you, root-cause explanation, and 3–5 prioritized fixes. Delivered by email in ~10 minutes. You only pay after you\'ve seen the report.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a subscription or hidden fee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. $1 is the complete price, charged once after you see results. We don\'t store your card, there are no overage fees, and there\'s nothing to cancel.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I need to start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Just your domain and email address. No install, no tracking script, no account to create.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take, and when do I pay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Submit your domain and email, and your report arrives within approximately 10 minutes. You review the full report first, then pay the $1. No upfront payment required.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens after the audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You receive a clear baseline and a prioritized fix list you can act on immediately. Ongoing monitoring is optional and never automatically charged.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI engines do you check?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT (OpenAI), Perplexity AI, Google Gemini, Anthropic Claude, and Google AI Overviews. These are the five primary engines where buyers discover products today.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
