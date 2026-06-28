export default function SchemaOrg() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MakeCited',
    url: 'https://makecited.com',
    description:
      'MakeCited provides $1 AEO audits showing whether your domain is cited by ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.',
    foundingDate: '2026',
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MakeCited',
    url: 'https://makecited.com',
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'MakeCited AEO Audit',
    description:
      'A one-time $1 audit revealing whether your domain is cited by ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews, plus 3–5 prioritized fixes.',
    brand: { '@type': 'Brand', name: 'MakeCited' },
    offers: {
      '@type': 'Offer',
      price: '1.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-01-01',
      description: 'One-time payment, no subscription',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
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

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'MakeCited — The $1 AEO Audit',
    description:
      'Find out if ChatGPT, Perplexity, Gemini, Claude & Google AI Overviews cite your domain. Full AEO audit delivered by email in ~10 minutes for just $1.',
    url: 'https://makecited.com',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://makecited.com',
        },
      ],
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  )
}
