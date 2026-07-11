export interface BlogPost {
  slug: string
  title: string
  summary: string
  date: string // ISO date
  dateDisplay: string
  readTime: string
  tags: string[]
  contentHtml: string
}

const whyAiIgnoresYourBrand: BlogPost = {
  slug: 'why-ai-ignores-your-brand',
  title: 'Why AI Ignores Your Brand: The FACT Framework for AI Visibility',
  summary:
    'If ChatGPT, Perplexity, or Gemini never mention your brand, the problem is technical — not product quality. Learn the 4-gate FACT framework to diagnose and fix AI invisibility.',
  date: '2026-07-11',
  dateDisplay: 'July 11, 2026',
  readTime: '12 min read',
  tags: ['AEO', 'AI Visibility', 'FACT Framework'],
  contentHtml: String.raw`
<p class="lead">If ChatGPT, Perplexity, or Gemini never mention your brand when buyers ask about your category, the problem is almost always structural — not about your product quality. Your content must pass four sequential gates before any AI engine will cite it. Fail at the first gate, and the other three don't matter. This is the FACT framework: Findable, Agent-aligned, Citable, Trusted.</p>

<nav class="toc">
  <h2>In This Article</h2>
  <ol>
    <li><a href="#what-is-fact">What is the FACT framework?</a></li>
    <li><a href="#gate-1">Gate 1: Findable — Can AI crawlers read your site?</a></li>
    <li><a href="#gate-2">Gate 2: Agent-Aligned — Does AI decide to click?</a></li>
    <li><a href="#gate-3">Gate 3: Citable — Is your content worth extracting?</a></li>
    <li><a href="#gate-4">Gate 4: Trusted — Does the web back you up?</a></li>
    <li><a href="#diagnose">How to diagnose which gate you're failing</a></li>
    <li><a href="#faq-section">FAQ</a></li>
  </ol>
</nav>

<h2 id="what-is-fact">What is the FACT framework?</h2>

<p>FACT stands for <strong>Findable, Agent-aligned, Citable, and Trusted</strong>. It describes the four sequential gates your content must pass before an AI engine will cite your brand in a response. Each gate is pass/fail. If your content fails at Gate 1, Gates 2 through 4 are irrelevant — the AI engine never even evaluates them.</p>

<p>Think of it as a funnel. Every page on the web enters at Gate 1. At each gate, a large percentage of pages get eliminated. Only content that passes all four gates earns a citation.</p>

<div class="diagram">
<svg viewBox="0 0 660 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E7E2D8" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="660" height="420" fill="#FAF8F3"/>
  <rect width="660" height="420" fill="url(#grid)"/>

  <text x="330" y="32" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="16" fill="#15151A">THE FACT FRAMEWORK — 4 SEQUENTIAL GATES</text>
  <text x="330" y="50" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#6E6A63">Each gate is pass/fail. Failing early makes later gates irrelevant.</text>

  <rect x="40" y="72" width="580" height="68" rx="10" fill="#2347FF" opacity="0.08" stroke="#2347FF" stroke-width="1.5"/>
  <rect x="52" y="84" width="44" height="44" rx="10" fill="#2347FF"/>
  <text x="74" y="112" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#fff">F</text>
  <text x="114" y="102" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="16" fill="#2347FF">FINDABLE</text>
  <text x="114" y="120" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#6E6A63">Can AI crawlers discover and read your content?</text>
  <text x="530" y="100" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="11" fill="#6E6A63">FIX TYPE:</text>
  <rect x="536" y="88" width="72" height="22" rx="4" fill="#2347FF" opacity="0.12"/>
  <text x="572" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-weight="600" font-size="11" fill="#2347FF">Technical</text>

  <path d="M330 140 L330 158" stroke="#E7E2D8" stroke-width="2"/>
  <polygon points="325,155 330,165 335,155" fill="#E7E2D8"/>
  <text x="345" y="155" font-family="JetBrains Mono,monospace" font-size="10" fill="#E5402A">~40% fail here</text>

  <rect x="70" y="168" width="520" height="68" rx="10" fill="#7B61FF" opacity="0.08" stroke="#7B61FF" stroke-width="1.5"/>
  <rect x="82" y="180" width="44" height="44" rx="10" fill="#7B61FF"/>
  <text x="104" y="208" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#fff">A</text>
  <text x="144" y="198" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="16" fill="#7B61FF">AGENT-ALIGNED</text>
  <text x="144" y="216" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#6E6A63">Do pre-click signals make the AI choose your page?</text>
  <rect x="506" y="184" width="72" height="22" rx="4" fill="#7B61FF" opacity="0.12"/>
  <text x="542" y="199" text-anchor="middle" font-family="JetBrains Mono,monospace" font-weight="600" font-size="11" fill="#7B61FF">Signals</text>

  <path d="M330 236 L330 254" stroke="#E7E2D8" stroke-width="2"/>
  <polygon points="325,251 330,261 335,251" fill="#E7E2D8"/>

  <rect x="105" y="264" width="450" height="68" rx="10" fill="#E5402A" opacity="0.08" stroke="#E5402A" stroke-width="1.5"/>
  <rect x="117" y="276" width="44" height="44" rx="10" fill="#E5402A"/>
  <text x="139" y="304" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#fff">C</text>
  <text x="179" y="294" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="16" fill="#E5402A">CITABLE</text>
  <text x="179" y="312" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#6E6A63">Is your content worth extracting into an answer?</text>
  <rect x="471" y="280" width="72" height="22" rx="4" fill="#E5402A" opacity="0.12"/>
  <text x="507" y="295" text-anchor="middle" font-family="JetBrains Mono,monospace" font-weight="600" font-size="11" fill="#E5402A">Content</text>

  <path d="M330 332 L330 350" stroke="#E7E2D8" stroke-width="2"/>
  <polygon points="325,347 330,357 335,347" fill="#E7E2D8"/>
  <text x="345" y="348" font-family="JetBrains Mono,monospace" font-size="10" fill="#E5402A">only 15% pass</text>

  <rect x="145" y="360" width="370" height="52" rx="10" fill="#1D9E75" opacity="0.08" stroke="#1D9E75" stroke-width="1.5"/>
  <rect x="157" y="366" width="38" height="38" rx="9" fill="#1D9E75"/>
  <text x="176" y="392" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#fff">T</text>
  <text x="210" y="384" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="16" fill="#1D9E75">TRUSTED</text>
  <text x="210" y="400" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#6E6A63">Does the broader web validate your claims?</text>
  <rect x="431" y="370" width="72" height="22" rx="4" fill="#1D9E75" opacity="0.12"/>
  <text x="467" y="385" text-anchor="middle" font-family="JetBrains Mono,monospace" font-weight="600" font-size="11" fill="#1D9E75">Ecosystem</text>
</svg>
<div class="diagram-caption">FACT framework: content must pass all four gates sequentially to earn an AI citation</div>
</div>

<p>Each gate maps to a different type of fix. Gate 1 failures require technical changes. Gate 2 requires optimizing the signals AI sees before it opens your page. Gate 3 is about content quality. Gate 4 is about your broader presence across the web. Most brands spend all their effort on Gate 3 (writing better content) while failing at Gate 1 (AI crawlers can't even read their site).</p>

<h2 id="gate-1">
  <span class="gate-header"><span class="gate-num g1">1</span> Gate 1: Findable — Can AI crawlers read your site?</span>
</h2>

<p>This is the technical floor. If AI models can't discover and read your content, nothing else matters. In our audits, roughly 35% of sites fail at this gate without knowing it.</p>

<h3>Your robots.txt is blocking AI crawlers</h3>

<p>Every AI engine has its own crawler. If your <code>robots.txt</code> file blocks these crawlers, your content is invisible to that platform — regardless of how good it is.</p>

<table>
  <thead><tr><th>AI Engine</th><th>Crawler Name</th><th>What It Powers</th></tr></thead>
  <tbody>
    <tr><td>ChatGPT</td><td><code>GPTBot</code>, <code>ChatGPT-User</code></td><td>OpenAI web search</td></tr>
    <tr><td>Claude</td><td><code>ClaudeBot</code>, <code>anthropic-ai</code></td><td>Anthropic search</td></tr>
    <tr><td>Perplexity</td><td><code>PerplexityBot</code></td><td>Perplexity answers</td></tr>
    <tr><td>Google AI</td><td><code>Google-Extended</code></td><td>Gemini, AI Overviews</td></tr>
    <tr><td>Microsoft</td><td><code>Bingbot</code></td><td>Copilot</td></tr>
  </tbody>
</table>

<p class="code-label">How to check in 10 seconds:</p>
<pre><code>curl https://yoursite.com/robots.txt | grep -i "gptbot\|claudebot\|perplexity"</code></pre>

<p>If you see <code>Disallow: /</code> next to any of these bot names, that AI engine is blocked from reading your entire site.</p>

<p class="code-label">What your robots.txt should look like:</p>
<pre><code>User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /</code></pre>

<div class="callout success">
  <strong>Quick win:</strong> Fixing robots.txt takes 2 minutes and is the single highest-ROI change for AI visibility. We've seen sites go from zero mentions to appearing in 3 out of 5 AI engines within 2-3 weeks of unblocking crawlers.
</div>

<h3>Your site is client-side rendered</h3>

<p>If your site is built with React, Next.js, Vue, or Angular and relies on client-side rendering (CSR), AI crawlers see an empty HTML shell. They don't execute JavaScript. Your content exists only after a browser runs your JavaScript — but crawlers aren't browsers.</p>

<p class="code-label">How to check:</p>
<pre><code># Compare what a browser sees vs what a crawler sees
curl -s https://yoursite.com | wc -l    # if under 20 lines, probably CSR
curl -s https://yoursite.com | grep -c "&lt;p&gt;"  # if 0, your content is JS-rendered</code></pre>

<p>The difference between View Page Source (what crawlers see) and Inspect Element (what browsers render) tells the full story. If your content only appears in Inspect Element, it's invisible to every AI crawler.</p>

<table>
  <thead><tr><th>Rendering</th><th>AI Crawler Sees Content?</th><th>Fix</th></tr></thead>
  <tbody>
    <tr><td>Server-side (SSR)</td><td class="status-pass">Yes</td><td>No fix needed</td></tr>
    <tr><td>Static site (SSG)</td><td class="status-pass">Yes</td><td>No fix needed</td></tr>
    <tr><td>Client-side (CSR)</td><td class="status-fail">No</td><td>Enable SSR or pre-rendering</td></tr>
  </tbody>
</table>

<h3>Content locked in non-text formats</h3>

<p>AI retrieval is text-first. Key information inside images, infographics, videos, or PDFs without supporting text copy cannot be extracted by AI models. If your pricing lives only in a screenshot, or your product comparison exists only as an infographic, that information is effectively invisible to AI.</p>

<div class="callout warning">
  <strong>Common mistake:</strong> Many SaaS sites put their entire pricing structure in a visual table rendered as an image or embedded widget. AI crawlers can't read it. Always include a text-based version alongside visual formats.
</div>

<h3>Pages behind paywalls or login walls</h3>

<p>If your content requires authentication, subscription, or even an email gate to access, AI crawlers won't see it. Gated content is permanently invisible. The most citation-worthy content on your site should be freely accessible.</p>

<h2 id="gate-2">
  <span class="gate-header"><span class="gate-num g2">2</span> Gate 2: Agent-Aligned — Does AI decide to click your page?</span>
</h2>

<p>Your content is findable, but the AI engine still hasn't opened your page. Before a model reads your content, it evaluates pre-click signals to decide whether your page is worth fetching. These signals are: URL structure, title tag, meta description snippet, and freshness date.</p>

<p>This gate works differently depending on query type.</p>

<div class="diagram">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="660" height="260" fill="#FAF8F3"/>
  <text x="330" y="28" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="14" fill="#15151A">PRE-CLICK SIGNALS: WHAT AI EVALUATES BEFORE OPENING YOUR PAGE</text>

  <rect x="30" y="50" width="290" height="190" rx="10" fill="#fff" stroke="#2347FF" stroke-width="1.5"/>
  <text x="175" y="74" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="13" fill="#2347FF">INFORMATIONAL QUERIES</text>
  <text x="175" y="90" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">"How to..." / "What is..."</text>

  <line x1="50" y1="102" x2="300" y2="102" stroke="#E7E2D8"/>
  <text x="50" y="122" font-family="JetBrains Mono,monospace" font-size="12" fill="#6E6A63">Title similarity</text>
  <text x="248" y="122" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#2347FF" text-anchor="end">~65%</text>
  <rect x="254" y="112" width="50" height="14" rx="3" fill="#2347FF" opacity="0.12"/>
  <text x="279" y="123" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#2347FF">cosine</text>

  <text x="50" y="148" font-family="JetBrains Mono,monospace" font-size="12" fill="#6E6A63">URL slug match</text>
  <text x="248" y="148" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#2347FF" text-anchor="end">~67%</text>
  <rect x="254" y="138" width="50" height="14" rx="3" fill="#2347FF" opacity="0.12"/>
  <text x="279" y="149" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#2347FF">cosine</text>

  <text x="50" y="174" font-family="JetBrains Mono,monospace" font-size="12" fill="#6E6A63">Keyword match</text>
  <text x="248" y="174" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="12" fill="#6E6A63" text-anchor="end">"how-to" phrases help</text>

  <text x="175" y="220" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="12" fill="#2347FF">Precision wins. Match the query.</text>

  <rect x="340" y="50" width="290" height="190" rx="10" fill="#fff" stroke="#7B61FF" stroke-width="1.5"/>
  <text x="485" y="74" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="13" fill="#7B61FF">COMMERCIAL QUERIES</text>
  <text x="485" y="90" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">"Best..." / "Top..." / "vs"</text>

  <line x1="360" y1="102" x2="610" y2="102" stroke="#E7E2D8"/>
  <text x="360" y="122" font-family="JetBrains Mono,monospace" font-size="12" fill="#6E6A63">Synonym usage</text>
  <text x="558" y="122" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#7B61FF" text-anchor="end">25%</text>
  <rect x="564" y="112" width="50" height="14" rx="3" fill="#7B61FF" opacity="0.12"/>
  <text x="589" y="123" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#7B61FF">of pages</text>

  <text x="360" y="148" font-family="JetBrains Mono,monospace" font-size="12" fill="#6E6A63">Word overlap</text>
  <text x="558" y="148" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="18" fill="#7B61FF" text-anchor="end">&lt;30%</text>
  <rect x="564" y="138" width="50" height="14" rx="3" fill="#7B61FF" opacity="0.12"/>
  <text x="589" y="149" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#7B61FF">of cited</text>

  <text x="360" y="174" font-family="JetBrains Mono,monospace" font-size="12" fill="#6E6A63">Pattern</text>
  <text x="558" y="174" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="12" fill="#6E6A63" text-anchor="end">Breadth beats exact match</text>

  <text x="485" y="220" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="12" fill="#7B61FF">Semantic range wins. Cover more ground.</text>
</svg>
<div class="diagram-caption">Pre-click signal optimization differs by query type — precision for informational, breadth for commercial</div>
</div>

<p>For <strong>informational queries</strong> ("how to improve page speed"), precision matters. Titles with around 65% cosine similarity to the query, and URL slugs at 67% similarity, increase the likelihood of earning a citation. Matching structural phrases like "how-to" in your title helps.</p>

<p>For <strong>commercial queries</strong> ("best CRM for startups"), the pattern reverses. Semantic breadth beats exact matching. About 25% of cited pages use synonyms rather than the exact query terms, and 90% of cited pages had less than 30% word overlap with the query. This means your page title for a "best CRM" query might be "Top sales platforms for growing teams" — different words, same intent, broader coverage.</p>

<div class="callout">
  <strong>Freshness matters at every gate.</strong> A page dated 18 months ago competes poorly against one updated last month, even if the older content is substantively identical. Visible "last updated" dates are a signal AI engines weigh heavily.
</div>

<h2 id="gate-3">
  <span class="gate-header"><span class="gate-num g3">3</span> Gate 3: Citable — Is your content worth extracting?</span>
</h2>

<p>This is where most content fails. The AI engine has found your page, decided to open it, and is now reading it. But only 15% of pages that get fetched actually earn a citation. Your content must pass five tests.</p>

<div class="stat-row">
  <div class="stat-card alarm"><div class="num">85%</div><div class="label">of fetched pages<br>fail to get cited</div></div>
  <div class="stat-card"><div class="num">3×</div><div class="label">more citations for<br>content under 3 months old</div></div>
  <div class="stat-card success"><div class="num">+40%</div><div class="label">visibility boost<br>from cited statistics</div></div>
</div>

<div class="diagram">
<svg viewBox="0 0 660 310" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="660" height="310" fill="#FAF8F3"/>
  <text x="330" y="28" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="14" fill="#15151A">5 SIGNALS THAT DETERMINE IF YOUR CONTENT GETS CITED</text>

  <rect x="30" y="52" width="184" height="110" rx="10" fill="#fff" stroke="#E7E2D8" stroke-width="1"/>
  <rect x="30" y="52" width="184" height="4" rx="2" fill="#2347FF"/>
  <text x="122" y="80" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="13" fill="#15151A">Information Gain</text>
  <text x="50" y="100" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">Unique data, original</text>
  <text x="50" y="114" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">research, proprietary</text>
  <text x="50" y="128" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">benchmarks, or expert</text>
  <text x="50" y="142" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">perspective nobody else has.</text>

  <rect x="238" y="52" width="184" height="110" rx="10" fill="#fff" stroke="#E7E2D8" stroke-width="1"/>
  <rect x="238" y="52" width="184" height="4" rx="2" fill="#E5402A"/>
  <text x="330" y="80" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="13" fill="#15151A">Freshness</text>
  <text x="258" y="100" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">Content updated within</text>
  <text x="258" y="114" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">3 months is 3× more</text>
  <text x="258" y="128" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">likely to be cited. AI</text>
  <text x="258" y="142" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">engines penalize stale pages.</text>

  <rect x="446" y="52" width="184" height="110" rx="10" fill="#fff" stroke="#E7E2D8" stroke-width="1"/>
  <rect x="446" y="52" width="184" height="4" rx="2" fill="#7B61FF"/>
  <text x="538" y="80" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="13" fill="#15151A">Answer Shape</text>
  <text x="466" y="100" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">Clear, structured,</text>
  <text x="466" y="114" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">extractable passages</text>
  <text x="466" y="128" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">AI can pull directly into</text>
  <text x="466" y="142" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">a response. 40-60 words.</text>

  <rect x="130" y="185" width="184" height="110" rx="10" fill="#fff" stroke="#E7E2D8" stroke-width="1"/>
  <rect x="130" y="185" width="184" height="4" rx="2" fill="#1D9E75"/>
  <text x="222" y="213" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="13" fill="#15151A">Authority</text>
  <text x="150" y="233" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">Named expert bylines</text>
  <text x="150" y="247" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">correlate with higher</text>
  <text x="150" y="261" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">citation rates. Attributing</text>
  <text x="150" y="275" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">to a real person matters.</text>

  <rect x="346" y="185" width="184" height="110" rx="10" fill="#fff" stroke="#E7E2D8" stroke-width="1"/>
  <rect x="346" y="185" width="184" height="4" rx="2" fill="#EF9F27"/>
  <text x="438" y="213" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="13" fill="#15151A">Depth over Breadth</text>
  <text x="366" y="233" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">Specificity wins. Going</text>
  <text x="366" y="247" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">deep on a focused topic</text>
  <text x="366" y="261" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">beats shallow coverage</text>
  <text x="366" y="275" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">of many topics.</text>
</svg>
<div class="diagram-caption">All five signals contribute to citation likelihood — information gain and freshness have the highest impact</div>
</div>

<h3>Information gain is the differentiator</h3>

<p>AI engines are trained to identify content that adds something new to a topic. If your page says the same thing as 50 other pages, there's no reason to cite yours specifically. Original data, proprietary benchmarks, expert perspectives, and unique research findings are what earn citations.</p>

<p>The Princeton GEO study (KDD 2024) quantified this across Perplexity.ai:</p>

<table>
  <thead><tr><th>Optimization Method</th><th>Visibility Boost</th></tr></thead>
  <tbody>
    <tr><td>Cite authoritative sources</td><td class="status-pass">+40%</td></tr>
    <tr><td>Include specific statistics</td><td class="status-pass">+37%</td></tr>
    <tr><td>Add expert quotations</td><td class="status-pass">+30%</td></tr>
    <tr><td>Authoritative tone</td><td class="status-pass">+25%</td></tr>
    <tr><td>Improved clarity</td><td class="status-pass">+20%</td></tr>
    <tr><td>Keyword stuffing</td><td class="status-fail">-10%</td></tr>
  </tbody>
</table>

<p>Note the last row: keyword stuffing doesn't just fail — it actively reduces your AI visibility by 10%. Unlike traditional SEO where keyword density was a blunt tool, AI engines penalize content that reads like it was written for an algorithm.</p>

<h3>Answer shape determines extractability</h3>

<p>AI engines extract passages, not pages. Your key claims need to work as standalone statements — self-contained, clear, and structured so a model can pull them directly into a response.</p>

<p>The optimal passage length for extraction is 40-60 words. Lead every section with a direct answer before elaborating. If someone reads only the first sentence of each section, they should get the complete picture.</p>

<p>Here's the difference between non-extractable and extractable content:</p>

<table>
  <thead><tr><th>Non-extractable</th><th>Extractable</th></tr></thead>
  <tbody>
    <tr>
      <td>"In today's rapidly evolving digital landscape, businesses need to consider many factors when choosing the right CRM solution for their unique needs..."</td>
      <td>"HubSpot is the best CRM for startups with under 50 employees. It offers a free tier, requires no technical setup, and integrates with 1,400+ tools out of the box."</td>
    </tr>
  </tbody>
</table>

<p>The first example says nothing specific. The second is a self-contained answer that an AI engine can drop directly into a response. Specificity beats generality every time.</p>

<h2 id="gate-4">
  <span class="gate-header"><span class="gate-num g4">4</span> Gate 4: Trusted — Does the broader web back you up?</span>
</h2>

<p>This is the most commonly missed gate. Your on-site content can be technically perfect, structurally optimized, and packed with original data — but if the broader web doesn't back you up, AI engines still won't cite you confidently.</p>

<p>AI models form consensus across sources. They cross-reference what your site claims against what third parties say about you. If nobody else mentions your brand in the context of your category, the model has no external validation to rely on.</p>

<div class="diagram">
<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="660" height="300" fill="#FAF8F3"/>
  <text x="330" y="28" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="14" fill="#15151A">WHERE TOP-OF-FUNNEL B2B BRAND MENTIONS COME FROM</text>

  <rect x="40" y="56" width="580" height="44" rx="8" fill="#E7E2D8"/>
  <rect x="40" y="56" width="87" height="44" rx="8" fill="#2347FF"/>
  <text x="62" y="83" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="15" fill="#fff">15%</text>
  <text x="140" y="78" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="13" fill="#15151A">Your own site</text>
  <text x="140" y="92" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="#6E6A63">Content you control directly</text>

  <rect x="40" y="116" width="580" height="44" rx="8" fill="#E7E2D8"/>
  <rect x="40" y="116" width="493" height="44" rx="8" fill="#1D9E75"/>
  <text x="62" y="143" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="15" fill="#fff">85%</text>
  <text x="140" y="138" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="13" fill="#fff">Third-party sources</text>
  <text x="140" y="152" font-family="Hanken Grotesk,sans-serif" font-size="11" fill="rgba(255,255,255,.8)">Review sites, publishers, affiliates, community discussions</text>

  <text x="40" y="190" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="12" fill="#6E6A63" letter-spacing="0.08em">THIRD-PARTY SOURCE BREAKDOWN</text>

  <text x="40" y="216" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#15151A">Review sites (G2, Capterra)</text>
  <rect x="250" y="204" width="180" height="16" rx="4" fill="#1D9E75" opacity="0.7"/>

  <text x="40" y="240" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#15151A">Publishers &amp; blogs</text>
  <rect x="250" y="228" width="140" height="16" rx="4" fill="#1D9E75" opacity="0.55"/>

  <text x="40" y="264" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#15151A">Community (Reddit, Quora)</text>
  <rect x="250" y="252" width="120" height="16" rx="4" fill="#1D9E75" opacity="0.4"/>

  <text x="40" y="288" font-family="Hanken Grotesk,sans-serif" font-size="12" fill="#15151A">Wikipedia &amp; knowledge bases</text>
  <rect x="250" y="276" width="90" height="16" rx="4" fill="#1D9E75" opacity="0.3"/>
</svg>
<div class="diagram-caption">85% of top-of-funnel B2B brand mentions in AI search come from third-party sources, not your own site</div>
</div>

<p>The data is clear: for top-of-funnel B2B brand mentions in AI search, <strong>85% come from third-party content</strong> — review sites, affiliates, publishers, and community discussions. Only 15% come from your own domain. You could have the most perfectly optimized website in your category and still be invisible because the ecosystem doesn't validate you.</p>

<h3>How to strengthen Gate 4</h3>

<p><strong>Audit your third-party mentions.</strong> Search your brand name on Google, Reddit, Quora, G2, and Capterra. What comes up? Is the information accurate? Are you mentioned positively in category contexts?</p>

<p><strong>Build off-site presence systematically.</strong> This means getting listed on review sites (G2 is the highest-impact for B2B SaaS), earning mentions in "best X" roundup articles, participating in Reddit communities where your buyers ask questions, and maintaining consistent entity information (how your brand is described) across every platform.</p>

<p><strong>Monitor representation quality.</strong> It's not enough to be mentioned — you need to be mentioned accurately and favorably. A negative review on G2 that describes your product incorrectly can poison how AI models represent you across every response.</p>

<div class="callout">
  <strong>Entity consistency is the foundation.</strong> If your brand is described as "CRM software" on your site, "sales platform" on LinkedIn, and "marketing tool" on Crunchbase, AI engines can't form a clear picture of what you are. Consistent naming, category, and description across all platforms is a baseline requirement across all four FACT gates.
</div>

<h2 id="diagnose">How to diagnose which gate you're failing</h2>

<p>Most brands assume they have a Gate 3 problem (bad content) when they actually have a Gate 1 problem (content is inaccessible). Here's how to diagnose your specific failure point in under 15 minutes.</p>

<div class="diagram">
<svg viewBox="0 0 660 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="660" height="340" fill="#FAF8F3"/>
  <text x="330" y="24" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="14" fill="#15151A">DIAGNOSTIC FLOWCHART: FIND YOUR GATE FAILURE</text>

  <rect x="200" y="44" width="260" height="44" rx="8" fill="#fff" stroke="#2347FF" stroke-width="1.5"/>
  <text x="330" y="72" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="13" fill="#15151A">Can AI bots crawl your site?</text>

  <line x1="200" y1="66" x2="120" y2="66" stroke="#E5402A" stroke-width="1.5"/>
  <line x1="120" y1="66" x2="120" y2="82" stroke="#E5402A" stroke-width="1.5"/>
  <text x="155" y="60" font-family="JetBrains Mono,monospace" font-size="11" fill="#E5402A">NO</text>
  <rect x="60" y="82" width="120" height="30" rx="6" fill="#E5402A"/>
  <text x="120" y="102" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="12" fill="#fff">→ Fix Gate 1</text>

  <line x1="330" y1="88" x2="330" y2="120" stroke="#1D9E75" stroke-width="1.5"/>
  <text x="340" y="106" font-family="JetBrains Mono,monospace" font-size="11" fill="#1D9E75">YES</text>

  <rect x="185" y="120" width="290" height="44" rx="8" fill="#fff" stroke="#7B61FF" stroke-width="1.5"/>
  <text x="330" y="148" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="13" fill="#15151A">Do title/URL match buyer queries?</text>

  <line x1="185" y1="142" x2="120" y2="142" stroke="#E5402A" stroke-width="1.5"/>
  <line x1="120" y1="142" x2="120" y2="158" stroke="#E5402A" stroke-width="1.5"/>
  <text x="148" y="136" font-family="JetBrains Mono,monospace" font-size="11" fill="#E5402A">NO</text>
  <rect x="60" y="158" width="120" height="30" rx="6" fill="#E5402A"/>
  <text x="120" y="178" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="12" fill="#fff">→ Fix Gate 2</text>

  <line x1="330" y1="164" x2="330" y2="196" stroke="#1D9E75" stroke-width="1.5"/>
  <text x="340" y="182" font-family="JetBrains Mono,monospace" font-size="11" fill="#1D9E75">YES</text>

  <rect x="170" y="196" width="320" height="44" rx="8" fill="#fff" stroke="#E5402A" stroke-width="1.5"/>
  <text x="330" y="224" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="13" fill="#15151A">Does content have unique data + structure?</text>

  <line x1="170" y1="218" x2="120" y2="218" stroke="#E5402A" stroke-width="1.5"/>
  <line x1="120" y1="218" x2="120" y2="234" stroke="#E5402A" stroke-width="1.5"/>
  <text x="140" y="212" font-family="JetBrains Mono,monospace" font-size="11" fill="#E5402A">NO</text>
  <rect x="60" y="234" width="120" height="30" rx="6" fill="#E5402A"/>
  <text x="120" y="254" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="12" fill="#fff">→ Fix Gate 3</text>

  <line x1="330" y1="240" x2="330" y2="272" stroke="#1D9E75" stroke-width="1.5"/>
  <text x="340" y="258" font-family="JetBrains Mono,monospace" font-size="11" fill="#1D9E75">YES</text>

  <rect x="185" y="272" width="290" height="44" rx="8" fill="#fff" stroke="#1D9E75" stroke-width="1.5"/>
  <text x="330" y="300" text-anchor="middle" font-family="Hanken Grotesk,sans-serif" font-weight="600" font-size="13" fill="#15151A">Do third parties mention you?</text>

  <line x1="475" y1="294" x2="540" y2="294" stroke="#E5402A" stroke-width="1.5"/>
  <text x="500" y="288" font-family="JetBrains Mono,monospace" font-size="11" fill="#E5402A">NO</text>
  <rect x="540" y="280" width="100" height="30" rx="6" fill="#E5402A"/>
  <text x="590" y="300" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-weight="700" font-size="12" fill="#fff">→ Fix Gate 4</text>

  <line x1="330" y1="316" x2="330" y2="336" stroke="#1D9E75" stroke-width="1.5"/>
  <text x="340" y="332" font-family="JetBrains Mono,monospace" font-size="11" fill="#1D9E75">YES → You should be getting cited. Monitor weekly.</text>
</svg>
<div class="diagram-caption">Walk through each question in order — your first "NO" identifies the gate to fix</div>
</div>

<h3>The 15-minute self-audit</h3>

<table>
  <thead><tr><th>Check</th><th>How</th><th>Time</th></tr></thead>
  <tbody>
    <tr><td>Gate 1: robots.txt</td><td><code>curl yoursite.com/robots.txt</code> — look for AI bot blocks</td><td>1 min</td></tr>
    <tr><td>Gate 1: Rendering</td><td>View Page Source — is your content there?</td><td>2 min</td></tr>
    <tr><td>Gate 2: Title match</td><td>Does your page title match "best [category] tools"?</td><td>2 min</td></tr>
    <tr><td>Gate 2: Freshness</td><td>When was the page last updated? Is a date visible?</td><td>1 min</td></tr>
    <tr><td>Gate 3: Extractability</td><td>Read your first paragraph — is it a self-contained answer?</td><td>2 min</td></tr>
    <tr><td>Gate 3: Schema</td><td><a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Google Rich Results Test</a> — is structured data present?</td><td>2 min</td></tr>
    <tr><td>Gate 4: Third-party</td><td>Google "[your brand] review" — what comes up?</td><td>3 min</td></tr>
    <tr><td>Gate 4: Reddit</td><td>Search Reddit for your brand name — any mentions?</td><td>2 min</td></tr>
  </tbody>
</table>

<div class="cta-banner">
  <h2>Don't audit yourself — let us do it.</h2>
  <p>MakeCited checks all four FACT gates across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overview. You get your AEO Score, competitor analysis, and prioritized fixes.</p>
  <a href="/#why-1" class="cta-btn">Get Your $1 AEO Audit →</a>
</div>

<section class="faq" id="faq-section">
  <h2>Frequently Asked Questions</h2>

  <div class="faq-item">
    <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">How do I check if ChatGPT knows about my brand?</div>
    <div class="faq-a">Open ChatGPT and ask two questions: "What is [your brand name]?" and "Best [your category] tools." If you don't appear in either answer, you're invisible. Repeat across Perplexity, Gemini, and Claude for a complete picture. Results can vary between sessions, so check multiple times over a few days.</div>
  </div>

  <div class="faq-item">
    <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">How long does it take to start showing up in AI answers?</div>
    <div class="faq-a">Technical fixes like unblocking robots.txt or adding schema markup take 2-4 weeks to reflect in AI responses. Building third-party mentions and citations typically takes 1-3 months to show meaningful results. Content freshness improvements can impact visibility within 2-3 weeks.</div>
  </div>

  <div class="faq-item">
    <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">Does ranking #1 on Google mean AI will cite me?</div>
    <div class="faq-a">No. A page can rank first on Google and still be invisible to ChatGPT. AI engines use different selection criteria — they evaluate content extractability, freshness, authority signals, and third-party consensus, not just search ranking position. Strong Google rankings help (they indicate content quality), but they're not sufficient on their own.</div>
  </div>

  <div class="faq-item">
    <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">What is the FACT framework?</div>
    <div class="faq-a">FACT stands for Findable, Agent-aligned, Citable, and Trusted. It describes the four sequential gates your content must pass to earn an AI citation. Each gate is pass/fail — if you fail at Gate 1 (your site isn't crawlable by AI bots), Gates 2-4 are irrelevant regardless of content quality.</div>
  </div>

  <div class="faq-item">
    <div class="faq-q" onclick="this.parentElement.classList.toggle('open')">What is the single fastest fix for AI invisibility?</div>
    <div class="faq-a">Check your robots.txt file. If you're blocking GPTBot, ClaudeBot, or PerplexityBot, unblocking them is a 2-minute fix. In our audits, roughly 35% of sites block at least one major AI crawler without knowing it. This is the highest-ROI change you can make for AI visibility.</div>
  </div>
</section>

<div class="author-card">
  <img src="/logo.png" alt="MakeCited" width="48" height="48">
  <div>
    <strong>MakeCited Team</strong>
    <p>We help brands get cited by AI engines. Our AEO audit shows whether ChatGPT, Perplexity, Gemini, and Claude recommend you — or your competitors. <a href="/">Get your audit →</a></p>
  </div>
</div>
`,
}

export const blogPosts: BlogPost[] = [whyAiIgnoresYourBrand]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
