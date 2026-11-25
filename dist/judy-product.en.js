/* JUDY - MERCHANT TOOLS product.en, built 2026-11-25T11:02 */
window.JT_F = window.JT_F || {};
window.JT_PART = 1;

/* ---- src/icons.js ---- */
if (!window.JT_F["src/icons.js"]) { window.JT_F["src/icons.js"] = 1;
/* icons: one stroke family (24px grid, 1.9 stroke, round caps), plus the real WhatsApp mark */
(function () {
  var S = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; };
  window.JT = window.JT || {};
  window.JT.ICONS = {
    arrow: S('<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>'),
    check: S('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    chev: S('<path d="M6 9l6 6 6-6"/>'),
    search: S('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
    copy: S('<rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),
    ext: S('<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
    download: S('<path d="M12 4v11"/><path d="M7 10l5 5 5-5"/><path d="M5 20h14"/>'),
    upload: S('<path d="M12 16V5"/><path d="M7 10l5-5 5 5"/><path d="M5 20h14"/>'),
    refresh: S('<path d="M20 11a8 8 0 0 0-14.6-4.5L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.6 4.5L20 16"/><path d="M20 20v-4h-4"/>'),
    info: S('<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>'),
    clock: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>'),
    plus: S('<path d="M12 5v14"/><path d="M5 12h14"/>'),
    trash: S('<path d="M5 7h14"/><path d="M9 7V4h6v3"/><path d="M7 7l1 13h8l1-13"/>'),
    photo: S('<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M4 18l5.2-5 3.4 3.2L16 13l4.5 4"/>'),
    video: S('<rect x="3" y="6" width="12.5" height="12" rx="2.5"/><path d="M15.5 11l5.5-3v8l-5.5-3z"/>'),
    product: S('<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'),
    // tools
    vat: S('<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M15 12l-5 6"/><circle cx="10.2" cy="12.6" r="1.2"/><circle cx="14.8" cy="17.4" r="1.2"/>'),
    policy: S('<path d="M12 3l7.5 3v5.5c0 4.6-3.1 8-7.5 9.5-4.4-1.5-7.5-4.9-7.5-9.5V6z"/><path d="M8.8 12l2.3 2.3 4.2-4.4"/>'),
    quote: S('<path d="M6 3h12v18l-2.4-1.6L13.2 21 12 19.8 10.8 21l-2.4-1.6L6 21z"/><path d="M9.5 8h5"/><path d="M9.5 12h5"/>'),
    profit: S('<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M8.5 7h7"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01M8.5 18h.01M12 18h3.5"/>'),
    ads: S('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'),
    offers: S('<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.3"/>'),
    cost: S('<path d="M3 10l9-6 9 6"/><path d="M5 9v11h14V9"/><path d="M10 20v-6h4v6"/>'),
    colors: S('<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10.5" cy="7" r="1.2"/><circle cx="15.5" cy="7.5" r="1.2"/>'),
    theme: S('<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path d="M9 9v11"/>'),
    seasons: S('<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/><path d="M12 13.5l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z"/>'),
    whatsapp: S('<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z"/><path d="M8.5 10h7M8.5 13.5h4.5"/>'),
    prompts: S('<path d="M12 3l1.8 4.6L18.5 9.5l-4.7 1.9L12 16l-1.8-4.6L5.5 9.5l4.7-1.9z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>'),
    google: S('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/><path d="M8 11h6"/>'),
    gift: S('<rect x="3" y="8" width="18" height="5" rx="1"/><path d="M5 13v8h14v-8"/><path d="M12 8v13"/><path d="M12 8H8.5a2.5 2.5 0 1 1 0-5C11 3 12 8 12 8zM12 8h3.5a2.5 2.5 0 1 0 0-5C13 3 12 8 12 8z"/>'),
    truck: S('<path d="M2 6h12v10H2z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="6" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>'),
    percent: S('<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="17" r="2.2"/>'),
    bundle: S('<path d="M12 3l8 4-8 4-8-4z"/><path d="M4 12l8 4 8-4"/><path d="M4 17l8 4 8-4"/>'),
    calendar: S('<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/><path d="M12 14v3M10.5 15.5h3"/>'),
    store: S('<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9"/><path d="M5 11.5V20h14v-8.5"/>'),
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zM20.4 3.6A11.8 11.8 0 0 0 12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7c1.7.9 3.7 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.4-8.3z"/></svg>'
  };
})();

}

/* ---- i18n/en.js ---- */
if (!window.JT_F["i18n/en.js"]) { window.JT_F["i18n/en.js"] = 1;
/* English words for the merchant tools. Same keys as ar.js. Placeholders in {braces}. */
window.JT_I18N = window.JT_I18N || {};
window.JT_I18N.en = {
  common: {
    sar: 'SAR', yes: 'Yes', no: 'No',
    copy: 'Copy', copied: 'Copied', copyFail: 'Copy it by hand', copyResult: 'Copy the result', sendWa: 'Send on WhatsApp',
    errEmpty: 'Type a number here', errNum: 'Numbers only', errMin: 'The number must be {n} or more', errMax: 'The number must be {n} or less',
    badge: { hot: 'Most used', new: 'New' },
    nextAria: 'Your next step with Judy', askWa: 'Ask Judy on WhatsApp', waHello: 'Hello, I came from the merchant tools and have a question',
    allTools: 'All merchant tools', related: 'Tools to use next', know: 'Learn with Judy',
    facts: ['Free', 'No sign-up', 'Your numbers stay on your device'],
    howT: 'How we calculate it', madeWith: 'Calculated with the free Judy Marketing tools:'
  },

  hub: {
    h1: 'Free tools for Salla merchants',
    lead: '11 tools that work out your profit, check your store, prepare it and market it. Free, no sign-up, right from your phone.',
    leadNoCheck: '10 tools that work out your profit, prepare your store and market it. Free, no sign-up, right from your phone.',
    say: "Hi! I'm Judy. Tell me what you want to do today and I'll take you to the right tool",
    judyAlt: 'Judy, the Judy Marketing character, pointing at the merchant tools',
    ask: 'What do you want to do today?',
    groups: {
      start: { icon: 'cost', goal: 'Start my store', goalSub: 'Cost, theme, colors', name: 'Start your store', line: 'Know the cost, the theme and the colors before you start.' },
      price: { icon: 'profit', goal: 'Price it right', goalSub: 'Profit, ads, offers', name: 'Pricing and profit', line: 'See what you keep from each order before you advertise.' },
      market: { icon: 'seasons', goal: 'Market my store', goalSub: 'Seasons, WhatsApp, prompts', name: 'Marketing and seasons', line: 'Messages, ideas and seasons, ready with your store name.' },
      google: { icon: 'google', goal: 'Show up on Google', goalSub: 'Store check and search look', name: 'Store check and Google', line: 'Check your store, and see your product in search results before you save it.' }
    },
    stripAria: 'Next season', stripTitle: 'Days left until {name}', stripBtn: 'Prepare your offer',
    searchPh: 'Search for a tool, e.g. profit', barAria: 'Tool groups',
    emptyT: "We couldn't find a tool with that name. Tell us what you need and we'll add it.", emptyBtn: 'Suggest a tool', emptyWa: 'Hello, I suggest a new merchant tool: ',
    ctaT: 'Want Judy to build your whole store?',
    ctaP: 'We design your Salla store from scratch and hand it over ready to sell, with images, banners and SEO.',
    ctaBtn: 'See store design packages', ctaWa: 'Chat on WhatsApp', ctaWaText: 'Hello, I came from the merchant tools and want to know about your store design packages'
  },

  tools: {
    check: { name: 'Improve your store with Judy', short: 'How your store looks on a phone, its strengths and weaknesses in speed and Google, and the full PDF report', go: 'Check your store', icon: 'search', badge: 'new', tags: 'check audit store speed seo strengths weaknesses report',
      h1: 'Check your store: strengths and weaknesses in speed and Google', lead: "Type your store link and Judy checks it for you. You see its speed, Google readiness and ease of use, with the main strengths and weaknesses.", say: 'Let me check your store and tell you exactly what it needs', related: ['google', 'profit', 'cost'] },
    profit: { name: 'Net profit calculator', short: 'What you keep from each order after cost, shipping, ads and VAT', go: 'Work out your profit', icon: 'profit', badge: 'hot', tags: 'profit margin price pricing vat',
      h1: 'Net profit calculator for Salla stores', lead: 'Type your price and costs to see what you keep from each order, and what your price should be to make a profit.', say: "Let's see your real profit, not the one on paper", related: ['ads', 'offers', 'cost'] },
    ads: { name: 'Snapchat and TikTok ad profit', short: 'The lowest ad return you need to break even, and the most you can pay per order', go: 'Check your ads', icon: 'ads', tags: 'ads snapchat tiktok roas return campaign',
      h1: 'Ad profit calculator (ROAS) for Snapchat and TikTok', lead: 'Before you spend on a campaign, know the lowest return you need to break even and the most you can pay for one order.', say: "A good ad doesn't just bring orders, it brings profit", related: ['profit', 'offers', 'seasons'] },
    offers: { name: 'Which offer earns you more?', short: 'Compare a discount, free shipping, a gift and 3 for 2 with your numbers', go: 'Compare your offers', icon: 'offers', badge: 'new', tags: 'offer offers discount free shipping gift coupon',
      h1: 'Which offer earns your store more? Discount, free shipping or a gift', lead: 'Type your product price and cost. We rank the offers from most to least profitable and show how many extra orders each one needs.', say: "Not every discount brings profit. Let's compare before you announce it", related: ['profit', 'seasons', 'whatsapp'] },
    cost: { name: 'How much does a Salla store cost?', short: 'Your full store cost: Salla plan, design and services, with real prices', go: 'Work out the cost', icon: 'cost', tags: 'cost price store salla plan subscription design',
      h1: 'How much does a Salla store cost? Work out your store cost', lead: 'Answer a few simple questions to see your first-year cost: the Salla plan, the design and the services, and the package that fits you.', say: "Before you start, let's know your budget exactly", related: ['theme', 'colors', 'profit'] },
    theme: { name: 'Find your Salla theme', short: '3 questions about your business and you get 3 themes that fit', go: 'Find your theme', icon: 'theme', tags: 'theme template design store look salla',
      h1: 'Which Salla theme fits your store?', lead: 'Answer 3 questions about your business and budget, and we suggest 3 themes from the Salla theme store with their links.', say: 'The right theme saves you half the work', related: ['colors', 'cost', 'google'] },
    colors: { name: 'Store colors from your logo', short: 'Upload your logo and get your store colors with a live preview', go: 'Get your colors', icon: 'colors', tags: 'colors color logo brand identity design',
      h1: 'Store colors from your logo, with a store preview', lead: 'Upload your logo to get the right store colors, and see your store in them before you change anything.', say: 'Your logo already holds your store colors. Let me pull them out', related: ['theme', 'cost', 'google'] },
    seasons: { name: 'Saudi merchant seasons calendar', short: 'Days left until each season, with an offer idea and a ready message', go: 'See the seasons', icon: 'seasons', badge: 'new', tags: 'season seasons ramadan eid white friday national day payday',
      h1: 'Saudi merchant seasons calendar', lead: 'Days left until Ramadan, Eid, National Day, White Friday and payday, when to start preparing, with an offer idea and a ready WhatsApp message.', say: "A season comes once. Let's prepare early", related: ['whatsapp', 'offers', 'prompts'] },
    whatsapp: { name: 'WhatsApp messages for your store', short: 'Ready messages with your store name: order confirmation, abandoned cart, review and more', go: 'Get the messages', icon: 'whatsapp', tags: 'whatsapp message messages customer order abandoned cart',
      h1: 'Ready WhatsApp messages for your store', lead: 'Type your store name once and get ready messages for every moment with a customer. Copy them or send them right away.', say: 'A kind message brings the customer back. Take it ready', related: ['prompts', 'seasons', 'offers'] },
    prompts: { name: 'Prompts with your store details', short: 'Fill in your store once and get ready prompts for ChatGPT and Gemini', go: 'Get the prompts', icon: 'prompts', tags: 'prompt ai chatgpt gemini content description',
      h1: 'Ready prompts with your store details', lead: 'Fill in your store details once and every prompt is ready for ChatGPT and Gemini: product descriptions, posts, TikTok scripts and more.', say: 'AI writes well when it knows your store', related: ['whatsapp', 'google', 'seasons'] },
    google: { name: 'Your product on Google', short: 'See your product title and description in search results before you save them', go: 'Try your title', icon: 'google', tags: 'google seo title description search',
      h1: 'Your product in Google results', lead: 'Type your product title and description to see how they show on Google on phone and desktop, and what they are missing.', say: 'A good title makes customers click on you, not on others', related: ['prompts', 'colors', 'theme'] }
  },

  lead: {
    needT: 'Need a store?', needS: 'Chat on WhatsApp', needWaText: 'Hello, I want a Salla store and came from the merchant tools',
    boxT: 'Get the full result as a PDF', boxP: 'A neat file with the Judy logo, your numbers, the result and your next step, to keep and come back to anytime.',
    label: 'WhatsApp number or email', ph: '05xxxxxxxx or name@mail.com', upd: 'Send me new tools and season reminders',
    dl: 'Download the result as PDF', btn: 'Download the file', busy: 'Preparing the file...', done: 'The file is downloading. If it did not, tap the button again.',
    err: 'Type a Saudi WhatsApp number starting with 05, or a valid email', fail: "We couldn't prepare the file. Try again or chat with us on WhatsApp.",
    privacy: 'We use your number or email to send what you asked for, and updates only if you agree. We never share it.',
    pdf: { madeBy: 'Free merchant tools by Judy Marketing', yours: 'Your numbers', result: 'Result', next: 'Your next step with Judy', extra: 'Added', contact: 'WhatsApp: +966552261549  ·  judymarketing.com', foot: 'Judy Marketing, designing online stores since 2018 and now specialised in Salla. Numbers come from what you typed and are not a guarantee of results.' }
  },

  check: {
    pvSub: 'Example: great on Google, slow on phones',
    inTitle: "What's your store link?", urlL: 'Store link', urlHelp: 'We check your home page as if it were opened on a phone. It takes 20 to 60 seconds. We keep the store link and its scores.', facts: ['Free', 'No sign-up', 'Result in about a minute'], shotT: 'This is how your store looks when a customer opens it on a phone', shotAlt: '{host} store on a phone', go: 'Check my store',
    errUrl: 'Type your store link, e.g. mystore.com', errBusy: "Google's checking tool is busy right now. Try again in a few minutes, or chat with us and we check it for you.", errFetch: "We couldn't check this link. Make sure the store is open to visitors and try again, or chat with us and we check it for you.",
    waitMsgs: ['Opening your store the way a customer opens it on a phone...', 'Measuring how long your store takes to show...', 'Looking at your store through Google eyes...', 'Sorting the points from most important...'],
    resT: 'Check result for', sec: 'seconds', lcp: 'Your store shows its main content on phones in',
    cat: { performance: 'Mobile speed', seo: 'Google readiness', accessibility: 'Ease of use', 'best-practices': 'Store health' },
    lv: { good: 'Great', mid: 'Needs work', bad: 'Weak' },
    strong: 'Strengths', weak: 'Main weaknesses', noWeak: 'No clear weaknesses found. Great!',
    moreN: 'There are {n} more points, explained in the full report.',
    leadT: 'Get the full PDF report', leadP: 'All {n} points, each with a simple explanation and who fixes it: you, the theme, or the store designer.', leadBtn: 'Download the report',
    pdfTitle: 'Store check report', pdfAll: 'All points that need work ({n})', whoL: 'Who fixes it:',
    who: { you: 'You, from the Salla dashboard', theme: 'The theme or Salla; a tidy design reduces it', designer: 'The store designer (we can do it for you)', dev: 'A developer or the store designer' },
    howT: 'How we check',
    how: ["We use Google's PageSpeed Insights, the same tool developers use, and check the home page as if opened on a phone.", 'Scores are out of 100: 90 and up is great, 50 to 89 needs work, under 50 is weak.', 'The result changes a little between checks, so read it as a direction, not a fixed number.', 'Some speed points come from the theme and Salla apps; the report says who can fix each point.'],
    nextT: 'Want Judy to analyse your whole store?', nextP: 'We analyse your store for free and give you a clear plan: what to fix first so it sells more and shows up on Google.', nextBtn: 'Ask for the free analysis', nextWa: 'Hello, I checked my store with the Judy tool and would like the free analysis:',
    a: {
      'largest-contentful-paint': { t: 'Main content shows late', why: 'The main image or heading takes time to appear, and customers may leave before they see it. Make banner images smaller and keep the first banner light.', who: 'designer' },
      'first-contentful-paint': { t: 'The first thing on the page shows late', why: 'Customers see a blank page for a while before anything appears.', who: 'theme' },
      'total-blocking-time': { t: 'The store freezes a little while opening', why: 'Too much code runs on load, so the page does not respond to taps right away. Remove apps and code you do not need.', who: 'designer' },
      'cumulative-layout-shift': { t: 'Items jump while the page loads', ok: 'The page stays still while loading', why: 'Buttons and images move while loading, and customers may tap the wrong thing.', who: 'designer' },
      'speed-index': { t: 'The page fills in slowly', why: 'The store takes a while to show fully on a phone.', who: 'theme' },
      'image-delivery-insight': { t: 'Images are bigger than needed', why: 'Big images slow the store. Upload images as WEBP at the right size.', who: 'designer' },
      'render-blocking-insight': { t: 'Files hold the page back', why: 'Font or code files must finish before the page shows.', who: 'theme' },
      'unused-javascript': { t: 'Code loads but is not used', why: 'Apps or code added to the store load on every page for nothing.', who: 'designer' },
      'font-display-insight': { t: 'Fonts delay the text', why: 'Text stays hidden until the font loads.', who: 'theme' },
      'document-latency-insight': { t: 'The server is slow to reply', why: 'The page waits before it starts loading, often from the theme or many apps.', who: 'theme' },
      'document-title': { t: 'The page has no title', ok: 'The page has a Google title', why: 'The page title is what shows on Google. Write it in the Salla SEO settings.', who: 'you' },
      'meta-description': { t: 'Your Google description is missing', ok: 'The store has a Google description', why: 'The description shows under your name on Google and convinces customers to click. Write it in Marketing > SEO.', who: 'you' },
      'http-status-code': { t: 'The page returns an error', ok: 'The page opens with no errors', why: 'Google cannot read the page because it returns an error.', who: 'dev' },
      'is-crawlable': { t: 'Google is blocked from the page', ok: 'Google can read the page', why: 'A setting stops Google from indexing the page, so it does not show in search.', who: 'you' },
      'link-text': { t: 'Links with vague words', ok: 'Links use clear words', why: 'Links like "click here" do not tell Google where they go. Use the page name in the link.', who: 'designer' },
      'crawlable-anchors': { t: 'Links Google cannot follow', why: 'Some links are written in a way Google does not understand.', who: 'designer' },
      'image-alt': { t: 'Images without descriptions', ok: 'Images have descriptions', why: 'An image description helps Google understand it and show it in image search. Write one for every product image and banner.', who: 'you' },
      'canonical': { t: 'The main page link is wrong', ok: 'The main page link is right', why: 'Google may not know which link is the main one for the page.', who: 'dev' },
      'hreflang': { t: 'Language links have errors', why: 'Google does not know which version to show for each language.', who: 'dev' },
      'robots-txt': { t: 'robots.txt has an error', why: 'This file tells Google what to read in the store.', who: 'dev' },
      'color-contrast': { t: 'Text hard to read on its background', ok: 'Text is easy to read on its background', why: 'The text color is close to the background, so it is hard to read, especially outdoors.', who: 'designer' },
      'link-name': { t: 'Links without a name', why: 'Icon links have no name, so screen readers and Google do not know what they are.', who: 'designer' },
      'button-name': { t: 'Buttons without a name', why: 'Icon buttons have no clear name.', who: 'designer' },
      'heading-order': { t: 'Headings are out of order', why: 'Heading order helps Google understand the page sections.', who: 'designer' },
      'html-has-lang': { t: 'Page language not set', ok: 'The page language is set', why: 'Browsers and Google do not know the page language.', who: 'dev' },
      'target-size': { t: 'Small buttons on phones', why: 'Customers tap the wrong button because buttons are small or too close.', who: 'designer' },
      'viewport': { t: 'The page is not set up for phones', ok: 'The page fits phones', why: 'The page shows tiny on phones and needs zooming.', who: 'dev' },
      'is-on-https': { t: 'The store is not secure (no HTTPS)', ok: 'The store is secure (HTTPS)', why: 'Browsers warn customers that the site is not secure.', who: 'dev' },
      'errors-in-console': { t: 'Errors in the page code', why: 'Some code returns errors and may stop features from working.', who: 'designer' },
      'image-aspect-ratio': { t: 'Squashed or stretched images', why: 'Some images show at the wrong shape and look distorted.', who: 'designer' },
      'deprecations': { t: 'Outdated code', why: 'Browsers will stop supporting some of the code used.', who: 'theme' },
      'third-party-cookies': { t: 'Tracking files from other sites', why: 'Outside apps save tracking files, which browsers now limit.', who: 'theme' }
    }
  },

  money: {
    regQ: 'Is your store registered for VAT?', regHelp: 'Registration is required when your yearly sales are above SAR 375,000.',
    inclQ: 'The price you typed is', incl: 'VAT included', excl: 'Before VAT',
    feePct: 'Payment fee', feeFix: 'Fixed fee per payment', feeHelp: 'Find it in your payment gateway contract or your Salla dashboard.'
  },

  profit: {
    pvLine: 'kept from each order', pvSub: 'Example: a SAR 149 product after shipping, ads and VAT',
    inTitle: 'Type your numbers', price: 'Selling price', cost: 'Product cost', costHelp: 'What one piece costs you to buy or make.',
    ship: 'Shipping you pay', shipHelp: 'If the customer pays all the shipping, leave it at zero.',
    ad: 'Ad cost per order', adHelp: 'Ad spend ÷ number of orders.', pack: 'Packaging per order',
    ret: 'Return rate', retHelp: 'Out of 100 orders, how many come back?',
    orders: 'Orders per month', ordersUnit: 'orders', moreCosts: 'Other costs: packaging, returns and payment fees',
    gainL: 'You keep', lossL: 'You lose', perOrder: 'from each order', margin: 'Profit margin', vatOut: 'VAT you pay', month: 'Monthly profit',
    warnLoss: 'Every order loses money. Raise the price or cut ads or shipping, and see below what your price should be.',
    warnLow: 'Your margin is under 10%, so any return or discount eats your profit.',
    whereT: 'Where your selling price goes',
    parts: { cost: 'Product cost', vat: 'VAT', ship: 'Shipping and packaging', ad: 'Ads', fee: 'Payment fees', ret: 'Returns', gain: 'Your profit' },
    revT: 'What should your price be?', revQ: 'I want to earn', revPct: 'A share of the price', revSar: 'An amount per order', revVal: 'Profit you want',
    revOutIncl: 'Your price should be (VAT included):', revOutExcl: 'Your price should be (before VAT):', revOutNoReg: 'Your price should be:',
    revNo: "That profit isn't possible with these costs. Lower the target or the costs.",
    sum: 'A product at {price}: I keep {profit} from each order (margin {margin}).',
    how: [
      'If your store is VAT registered, we take VAT out of the price first: price with VAT ÷ 1.15.',
      'Payment fees are taken from what the customer pays.',
      'A returned order: the product goes back to stock and the money goes back to the customer, but the shipping, packaging, ad and payment fee are already spent.',
      'Profit = (price before VAT - product cost) × share of orders not returned - shipping - packaging - ads - payment fees.',
      'Your numbers are worked out on your device and never reach us.'
    ],
    nextT: 'Want Judy to review your store prices?', nextP: "We review your store for free and tell you where you can earn more: prices, offers and shipping.", nextBtn: 'Ask for the free review', nextWa: 'Hello, I worked out my profit with the net profit tool and would like a free store review'
  },

  ads: {
    pvLine: 'lowest return you need', pvSub: 'Example: most you can pay per order is SAR {n}',
    inTitle: 'Your order numbers', aov: 'Average order value', aovHelp: 'Your sales ÷ your number of orders.', cost: 'Product cost in the order', ship: 'Shipping and packaging you pay',
    want: 'Profit you want per order', wantHelp: 'After ads. Leave it at zero to see only the break-even point.',
    campT: 'Running a campaign?', campHelp: 'Type the spend and orders from Snapchat or TikTok and we tell you whether you made or lost money.', spend: 'Campaign spend', orders: 'Orders from the campaign',
    bigL: 'Lowest ad return (ROAS) to break even', bigSub: 'Each riyal you spend must bring back at least this much in sales',
    maxCpa: 'Most you can pay per order', targetCpa: 'Cost per order to hit your target', targetRoas: 'Return to hit your target',
    dead: 'Even without ads this order makes no profit. Check the price or cost in the net profit calculator.',
    campRes: 'Your campaign result', realCpa: 'Actual cost per order', realRoas: 'Actual return', netGain: 'Profit after ads', netLoss: 'Loss after ads',
    verdictGood: 'Your campaign is above break-even. You can raise the spend slowly and watch the cost per order.',
    verdictBad: 'Your campaign is below break-even. Stop the weak ads, or improve the page and the offer, before you spend more.',
    gaugeAria: 'Break-even at a return of {be}', beMark: 'Break-even', you: 'Your campaign', zoneLose: 'Loss', zoneWin: 'Profit',
    how: [
      'We work out the order profit before ads: (order value before VAT - cost) after returns, minus shipping, packaging and payment fees.',
      'That profit is the most you can pay in ads for one order without losing money.',
      'Return (ROAS) = value of orders the customers paid ÷ ad spend. It is the number you see in Snapchat and TikTok Ads Manager.',
      'Lowest return = order value ÷ most you can pay per order.'
    ],
    nextT: 'Want Judy to run your ads?', nextP: 'We run your Snapchat and TikTok campaign for a full month and watch the cost per order every day to keep you above break-even.', nextBtn: 'See the ads management service', nextWa: 'Hello, I worked out my ad break-even and would like you to run my Snapchat and TikTok campaign'
  },

  offers: {
    inTitle: 'Your product', price: 'Product price', cost: 'Product cost', shipCost: 'Shipping if you pay it', shipHelp: 'What you pay the shipping company per order.',
    custShipQ: 'Who pays shipping now?', custPays: 'The customer', youPay: 'I pay it',
    offT: 'Offers you are thinking about', disc: 'Discount', gift: 'Gift cost',
    resT: 'Offers from most to least profitable', baseL: 'Your profit now, with no offer:',
    o: {
      disc: { name: '{d} off', short: 'Discount', icon: 'percent' },
      free: { name: 'Free shipping', short: 'Free shipping', icon: 'truck' },
      gift: { name: 'A SAR {g} gift', short: 'Gift', icon: 'gift' },
      b3: { name: '3 for the price of 2', short: '3 for 2', icon: 'bundle' }
    },
    winner: 'Most profitable', loses: 'This offer loses money on every order',
    needMore: 'You need {p} more orders to keep your current profit', moreThanBase: 'Each order earns more than now',
    how: [
      'We work out the order profit for each offer the same way: price before VAT minus cost, shipping and payment fees.',
      'A discount lowers the price. Free shipping is paid by you. A gift adds to the cost. 3 for 2: the customer pays for 2 and gets 3 in one shipment.',
      'Extra orders needed = your profit now ÷ the offer profit - 1.'
    ],
    nextT: 'Want Judy to launch your offer with a campaign?', nextP: 'We prepare the offer ad on Snapchat and TikTok and run it for a month, making sure it brings profit, not just orders.', nextBtn: 'See the ads service', nextWa: 'Hello, I compared my offers with the tool and want to launch one with an ad campaign'
  },

  colors: {
    pvLine: 'From your logo to your store', sampleName: 'Your store', inTitle: 'Upload your logo',
    drop: 'Choose your logo image', dropHelp: 'PNG, JPG or WEBP. The image stays on your device and is never uploaded.',
    storeName: 'Store name', found: 'Colors in your logo', rolesT: 'Your store colors', copyAll: 'Copy the colors',
    useAsPrimary: 'Make it the main color',
    role: { primary: 'Main color (buttons and prices)', second: 'Accent color (top bar and offers)', text: 'Text color', bg: 'Background color', onPrimary: 'Button text color' },
    pvTitle: 'Your store in these colors', pvBar: 'Free shipping over SAR 200', pvH: 'New collection is here', pvP: 'Your first order has a discount', pvBtn: 'Shop now', pvItem: 'Product', pvAdd: 'Add to cart',
    chk: { btn: 'Button text is clear', text: 'Text on the background is clear', price: 'Price color is clear on white' },
    clear: 'Clear', weak: 'Weak, use a darker color',
    badFile: "This file isn't an image. Choose your logo image.", noColors: "We couldn't find colors in the image. Try a logo on a clear or white background.",
    foundN: 'We found {n} colors in your logo.', sampleNote: 'These are sample colors. Upload your logo to change them.',
    howSallaT: 'How do I set the color in my store?',
    howSalla: ['Open the theme editor from your Salla dashboard.', 'Go to «هوية وبيانات المتجر» (store identity) and paste the main color code in the color field.', 'Save, then open your store on your phone and check the buttons and prices.'],
    nextT: 'Want Judy to design your store in these colors?', nextP: 'We design your Salla store in your brand: colors, banners and pages, and hand it over ready to sell.', nextBtn: 'See the design package', nextWa: 'Hello, I got my store colors from the tool and would like you to design my store'
  },

  google: {
    pvTitle: 'Professional Salla store design | Judy Marketing', pvDesc: 'Your store ready to sell in 5 days...',
    inTitle: 'Your product title and description', kw: 'The word customers search for', exKw: 'black abaya', kwHelp: 'What does a customer type on Google to find your product?',
    title: 'Page title (SEO)', exTitle: 'Black flared abaya with wide sleeves | Lamsa Store',
    desc: 'Page description (SEO)', exDesc: 'Black flared abaya in light crepe, sizes 52 to 60, delivered to every city in Saudi Arabia. Order yours now.',
    url: 'Store link', urlHelp: 'For example: mystore.com', brand: 'Store name', exBrand: 'Lamsa Store',
    view: 'Preview on', mobile: 'Phone', desktop: 'Desktop', pvT: 'How it shows on Google',
    emptyTitle: 'Type your page title', emptyDesc: 'Type your page description to see it here',
    scoreL: 'Title and description readiness',
    meter: '{n} characters (suggested up to {lim}) · width about {w} of {wMax} px',
    chk: {
      tLen: { ok: 'Title length is right and shows in full', no: 'Title is too short or too long and Google will cut it' },
      dLen: { ok: 'Description length is right', no: 'Description is too short or too long, keep it to one or two lines' },
      kwT: { ok: '"{kw}" is at the start of the title', no: 'Put "{kw}" at the start of the title' },
      kwD: { ok: '"{kw}" is in the description', no: 'Mention "{kw}" in the description' },
      brand: { ok: 'Your store name is in the title', no: 'Add your store name at the end of the title' },
      dup: { ok: 'No repeated words in the title', no: 'A word repeats in the title, remove it' }
    },
    howSallaT: 'Where do I write the title and description in Salla?',
    howSalla: ['Google sets no character limit; it cuts titles and descriptions to the screen width. The numbers here are estimates from well-known SEO tools.', 'One product: open it in your Salla dashboard, fill in the page title, description and link in the SEO fields, and save.', 'Many products at once: Products > More > Import and export > «تصدير واستيراد بيانات (SEO) للمنتجات».', 'Google updates the result when it visits your page again, which takes days.'],
    nextT: 'Want Judy to write your product SEO?', nextP: 'We write titles and descriptions for your store pages and tidy their links so you show up on Google. Once, and you see the difference.', nextBtn: 'See the SEO service', nextWa: 'Hello, I tried the Google preview tool and would like you to write my store SEO'
  },

  cost: {
    pvSub: 'Design packages + Salla plan, with real numbers',
    inTitle: 'Answer these questions', modeQ: 'Where are you now?', modeNew: 'Opening a new store', modeRe: 'I have a store to refresh',
    products: 'How many products?', prodUnit: 'products', prodHelp: 'An estimate is fine.',
    logoQ: 'Logo', logoHave: 'I have a logo', logoNeed: 'I need a logo',
    planQ: 'Salla plan', plan: { basic: 'Basic', plus: 'Plus', pro: 'Pro' },
    planHelp: 'Basic is free but has no online payments or own domain. Plus suits most new stores. Pro adds SEO settings, CSS customization and staff accounts.',
    billQ: 'Paying Salla', billY: 'Yearly (saves more)', billM: 'Monthly',
    extrasQ: 'Add anything?',
    x: { seo: 'Show up on Google', geo: 'Show up in AI answers', ads: 'Snapchat and TikTok ads' },
    xs: { seo: 'One-time SEO (Silver and Gold already include SEO)', geo: 'ChatGPT and Gemini get to know your store', ads: 'A full month of campaign management' },
    bigL: 'Your first-year store cost', bigSub: 'Design and services once + one year of Salla',
    startL: 'You pay at the start', planL: 'Salla plan', billT: 'Details',
    order: 'Order the package', askWa: 'Ask about it on WhatsApp', free: 'Free', perY: 'year', perM: 'month',
    line: { redesign: 'Store front refresh', pkg_basic: 'Basic store design package', pkg_silver: 'Silver store design package', pkg_gold: 'Gold store design package', seo: 'One-time store SEO', geo: 'Show up in AI answers', ads: 'Snapchat and TikTok ads management (1 month)', plan: 'Salla {plan} plan for a year', domain: 'Domain with your store name' },
    domainFree: 'Free with the yearly plan', total: 'First-year total',
    fits: 'Best fit for you:',
    inc: {
      basic: ['Set up and arrange your Salla store', '3 banner designs', '15 products added with categories', 'Payment and shipping connected', 'Delivered in 5 days'],
      silver: ['Everything in Basic', '4 banner designs', '30 products added', 'Custom store front', 'Basic SEO and analytics setup', 'Delivered in 2 weeks'],
      gold: ['Everything in Silver', '6 banner designs', '70 products added', 'Starter logo design', 'SEO for pages and products', 'Delivered in a month']
    },
    over70: 'You have more than 70 products: the Gold package adds 70 and we agree on the rest with you.',
    basicNote: 'The Basic plan has no online payments and no own domain; most stores need Plus at least.',
    waText: 'Hello, I worked out my store cost with the Judy tool: {items}, total {total}. I want to start.',
    howT: 'Where the numbers come from',
    how: [
      'Salla plan prices are from the official plans page salla.com/plans on 22 November 2026. The page does not say whether VAT is included, and plans bought in the iPhone app cost more.',
      'The domain is free with yearly Plus or Pro, and SAR 50 a year on a monthly plan (Salla help centre).',
      'Design and service prices are the current Judy Marketing prices in the store.',
      'We pick the cheapest package that covers your products, logo and SEO.',
      "Payment and shipping fees aren't included because they change with every order. Work them out in the net profit calculator."
    ]
  },

  theme: {
    pvA: 'Raed', pvB: 'Aromatic', pvC: 'Selia', pvSub: 'From 27 themes in the Salla theme store',
    inTitle: 'About your store', catQ: 'What does your store sell?',
    cats: { fashion: 'Fashion and abayas', beauty: 'Perfume, care and beauty', electronics: 'Electronics and phones', home: 'Home supplies', grocery: 'Food and groceries', food: 'Restaurants and cafes', digital: 'Digital products', jewelry: 'Jewelry', gifts: 'Accessories and gifts', books: 'Books and learning', clinic: 'Clinic and bookings', charity: 'Charity' },
    budgetQ: 'Theme budget', free: 'Free only', low: 'Up to SAR 300', any: "Doesn't matter",
    priQ: 'What matters most?', rated: 'Highest rated', cheap: 'Cheapest', salla: 'Made by Salla',
    dataNote: 'Data from the Salla theme store on {d}. Prices change with offers, so check the theme page.',
    resT: 'Themes for you', best: 'Best fit', by: 'by {dev}', freeP: 'Free', rate: '{r} of 5 ({n} ratings)',
    fit: 'Demo store in your field', general: 'Demo store in another field', open: 'See the theme',
    none: 'No theme fits that budget. Try "Doesn\'t matter".',
    howT: 'How we chose',
    how: ['We took 27 themes from the Salla theme store: the official Salla themes and the highest rated ones.', 'Themes whose demo store is in your field come first, then they are sorted by your choice: rating, price or made by Salla.', 'We have no business ties with the theme developers.'],
    nextT: 'Found your theme? Let Judy set it up', nextP: 'We install the theme, style it in your brand, add your products and banners, and hand over the store ready to sell.', nextBtn: 'See the design package', nextWa: 'Hello, I picked a theme with the theme finder and would like you to build my store on it'
  },

  wa: {
    ph: { store: 'Your Store', link: 'your store link', name: 'there', order: 'order number', track: 'tracking link', sell: 'your products', who: 'your customers', diff: 'what makes you different', city: 'Saudi Arabia', product: 'the product', tone: 'friendly' },
    exStore: 'Lamsa Store', exName: 'Noura', inTitle: 'Your store details',
    store: 'Store name', link: 'Store link', cust: 'Customer name', custHelp: 'Optional. If empty we write "there".',
    phone: 'Customer mobile number', phoneHelp: 'Optional. If you type it, the chat opens with them right away.',
    tone: 'Message style', friendly: 'Friendly', formal: 'Formal',
    privacy: 'What you type stays on your device so you do not retype it.', catsAria: 'Message type', all: 'All', open: 'Open in WhatsApp',
    msgs: {
      welcome: { title: 'Welcome a new customer', when: 'When they sign up or order for the first time',
        friendly: 'Hi {name}, welcome to {store}!\nSo happy you chose us. Any question about our products, message us here and we reply right away.\n{link}',
        formal: 'Hello {name},\nThank you for choosing {store}. We are glad to serve you; for any question, you can reach us in this chat.\n{link}' },
      confirm: { title: 'Order confirmation', when: 'Once the order comes in',
        friendly: 'Hi {name}, we got your order from {store}\nWe are preparing it and will send you the tracking link as soon as it ships. Thanks for trusting us',
        formal: 'Hello {name},\nYour order from {store} has been received and is being prepared. We will send the tracking link once it ships. Thank you.' },
      shipped: { title: 'Your order is on its way', when: 'When the order leaves with the courier',
        friendly: 'Good news {name}! Your order from {store} has shipped\nTrack it here: {track}',
        formal: 'Hello {name},\nYour order from {store} has shipped. You can track it here: {track}' },
      cart: { title: 'Abandoned cart', when: 'A customer added items to the cart but did not finish',
        friendly: 'Hi {name}, your cart at {store} is still waiting for you\nAny question about the product or shipping, tell us and we will help you finish your order.\n{link}',
        formal: 'Hello {name},\nYour cart at {store} is not complete yet. We are happy to help with any question so you can finish your order.\n{link}' },
      review: { title: 'Ask for a review', when: 'Two or three days after delivery',
        friendly: 'Hi {name}, hope you love your order from {store}!\nYour opinion matters and helps others choose. You can rate us from the order page. Thank you',
        formal: 'Hello {name},\nWe hope your order from {store} met your expectations. We would appreciate your rating on the order page; it helps us and our customers.' },
      thanks: { title: 'Thank you after delivery', when: 'On delivery day',
        friendly: 'Did your order arrive, {name}? Hope you like it\nThanks for shopping at {store}, see you on your next order.',
        formal: 'Hello {name},\nThank you for shopping at {store}. We hope your order arrived in perfect condition. We are always happy to serve you.' },
      offer: { title: 'Offer for your customers', when: 'During a season or a sale',
        friendly: 'Hi {name}, we have an offer for you at {store}\nWrite your offer details and dates here, and shop from the link before it ends:\n{link}',
        formal: 'Hello {name},\nWe are pleased to share a special offer at {store}: write your offer details and dates here.\nTo order: {link}' },
      late: { title: 'Sorry for the delay', when: 'When an order is late',
        friendly: 'Hi {name}, sorry your order from {store} is late\nWe are following up with the courier and it will reach you soon. We will keep you posted.',
        formal: 'Hello {name},\nWe apologise for the delay of your order from {store}. We are following up with the courier and will keep you updated.' },
      price: { title: 'Reply to a price question', when: 'A customer asks about a price or product',
        friendly: 'Hi {name}, sure!\nThe product price and all details are here: {link}\nNeed help with size or color? Just tell me.',
        formal: 'Hello {name},\nYou can find the product price and details here: {link}\nWe are happy to help with any question.' },
      back: { title: 'Win back a past customer', when: 'A customer who has not ordered in a while',
        friendly: 'Hi {name}, we miss you at {store}!\nNew products just arrived and we think you will love them. Have a look:\n{link}',
        formal: 'Hello {name},\nWe have added new products at {store} that we think you will like. Browse them here:\n{link}' }
    },
    nextT: 'Want your store WhatsApp set up right?', nextP: 'We connect WhatsApp to your store for free so customers can reach you from any page in one tap.', nextBtn: 'Get WhatsApp connected for free', nextWa: 'Hello, I took WhatsApp messages from the tool and want WhatsApp connected to my store'
  },

  pr: {
    pvLine: 'Write me a product description that sells, for a store...', pvSub: 'Your store details go into every prompt',
    inTitle: 'Your store details (once)',
    sell: 'What do you sell?', exSell: 'Everyday women\'s abayas', who: 'Who are your customers?', exWho: 'Women aged 20 to 35 in Saudi Arabia',
    diff: 'What makes you different?', exDiff: 'Light fabric and fast delivery', city: 'Your city or region', exCity: 'Riyadh',
    product: 'A product to write about', exProduct: 'Black flared abaya', productHelp: 'Used in the description, SEO and image prompts.',
    friendly: 'Friendly', formal: 'Formal', toneFriendly: 'friendly, simple English', toneFormal: 'clear, formal English',
    openGpt: 'Open in ChatGPT', openGemini: 'Copy and open Gemini', copiedForGemini: 'Prompt copied. Paste it in Gemini.',
    ctx: 'You are a professional marketing writer for a Saudi online store on the Salla platform.\nStore details:\n- Store name: {store}\n- Sells: {sell}\n- Customers: {who}\n- What makes it different: {diff}\n- City: {city}\nWrite in {tone}, with no exaggeration and no promises we cannot prove.',
    list: {
      desc: { title: 'A product description that sells', when: 'For the product page in Salla',
        ask: 'Write a description of about 120 words for "{product}": a first line that grabs the customer, then 4 bullet points with the benefits (not just specs), then a last line asking them to order. At the end, suggest 3 questions customers usually ask, with answers.' },
      seo: { title: 'SEO title and description', when: 'For the product SEO fields',
        ask: 'Suggest 3 SEO titles for "{product}", each under 60 characters, starting with the word customers search for and ending with the store name. Also suggest 3 SEO descriptions, each 120 to 150 characters, with a call to order.' },
      posts: { title: '5 post ideas', when: 'For Instagram and Snapchat for a week',
        ask: 'Suggest 5 post ideas for the store Instagram and Snapchat for one week. For each: the idea in one line, the text on the image (under 8 words), the caption, and 5 fitting Saudi hashtags.' },
      tiktok: { title: 'TikTok video script', when: 'A 30-second product video',
        ask: 'Write a 30-second TikTok script about "{product}": the first 3 seconds grab attention, then the problem, then how the product solves it, then a call to order. For each part write what is on screen and what is said.' },
      reply: { title: 'Reply to a bad review', when: 'When an upset review comes in',
        ask: 'A customer wrote a negative review of our store. Write 3 different replies: each apologises without blaming the customer, explains the fix, and invites them to message us privately. The review: (paste the review here)' },
      offers: { title: 'Offer ideas for the next season', when: 'Before any season',
        ask: 'Suggest 5 offer ideas for my store for the next season in Saudi Arabia, without big discounts that eat the profit. For each: offer name, what the customer gets, why it suits my products, and a short ad line.' },
      faq: { title: 'Product FAQ', when: 'Under the product description; it helps Google and AI',
        ask: 'Write 6 questions customers ask before buying "{product}", with a short clear answer each (size, material, shipping, returns, use). Do not invent policies: write [your policy here] when information is missing.' },
      image: { title: 'Product image prompt', when: 'For product images in Gemini or ChatGPT',
        ask: 'Write me a prompt for an image generator for a professional ad image of "{product}": a simple background that suits the customers, soft light, the product centered and clear, no text or logos in the image, square 1:1.' },
      plan: { title: 'One-week content plan', when: "When you don't know what to post",
        ask: 'Make a full 7-day content plan for the store accounts, as a table: day, platform, content type (image, video, story), idea, and goal (sales, engagement, trust). Mix products, customer reviews and behind the scenes.' },
      bio: { title: 'Account bio', when: 'For Instagram, TikTok and Snapchat',
        ask: 'Write 5 bio options for the store Instagram and TikTok, each under 150 characters: what we sell, for whom, what makes us different, and a call to order from the link.' }
    },
    nextT: 'Want your store to show up in AI answers?', nextP: 'We prepare your store so ChatGPT and Gemini know it and recommend it when someone asks about your products.', nextBtn: 'See the AI visibility service', nextWa: 'Hello, I used the Judy prompts and want my store to show up in AI answers'
  },

  seasons: {
    today: 'Today', daysLeft: 'days', daysTo: 'days until {name}', expected: 'expected',
    storeHelp: 'We put it in the ready messages.', filterAria: 'Season type',
    cat: { all: 'All seasons', shop: 'Shopping seasons', nation: 'National days', faith: 'Ramadan and Eid', month: 'Payday' },
    hijriNote: 'Ramadan and Eid dates follow the Umm al-Qura calendar; the actual start is confirmed by moon sighting.',
    listT: 'Upcoming seasons', prepNow: 'Time to prepare now', prepFrom: 'Start preparing from {d}',
    ideaT: 'Offer idea', waT: 'Ready WhatsApp message', imgT: 'Ad image prompt',
    imgTail: 'Square 1:1, soft light, clean background, no text, no letters, no logos in the image.',
    copyWa: 'Copy the message', copyImg: 'Copy the prompt', addCal: 'Add to your calendar', openWa: 'Send on WhatsApp',
    icsPrep: 'Start preparing the {name} offer',
    s: {
      salary: { name: 'Payday', idea: 'Government salaries are paid on the 27th of each month (a Friday moves to Thursday, a Saturday to Sunday). Run a short 3-day offer from payday, like a gift with each order or free shipping over an amount.',
        wa: 'Payday is here, and so are the offers at {store}\nOnly 3 days, have a look before they end.', img: 'An ad image for a Saudi online store, payday sale, celebratory payday mood, a gift box and the store products arranged neatly.' },
      white: { name: 'White Friday', idea: 'Prepare a strong offer on your best sellers, announce it a week before, and have the stock ready.',
        wa: 'White Friday has started at {store}\nOur best offers of the year, while stock lasts.', img: 'A White Friday sale ad for a Saudi online store, white and gold palette, shopping bags and the store products, premium look.' },
      d1212: { name: '12.12 sale', idea: 'The last shopping season of the year: bundles priced lower than buying each item alone.',
        wa: '12.12 offers at {store}\nBundles at a special price for one day only.', img: 'A 12.12 sale ad for an online store, festive end of year mood, gift bundles of products, clean modern style.' },
      founding: { name: 'Founding Day', idea: 'A product or packaging with an authentic Saudi touch, or a discount based on the founding year 1727.',
        wa: 'We celebrate Founding Day at {store}\nA special offer for a limited time.', img: 'A Saudi Founding Day themed ad, traditional Najdi patterns, warm earthy colors, the store products displayed with heritage decor.' },
      flag: { name: 'Flag Day', idea: 'A post of national pride with no discount, or limited green packaging.',
        wa: 'On Flag Day we stand proud\nGreetings from {store} to all our customers.', img: 'A Saudi Flag Day themed image, green and white palette, elegant and respectful, products arranged on a clean surface.' },
      national: { name: 'Saudi National Day', idea: 'A green offer, or a gift with every order, announced two weeks before.',
        wa: 'Happy Saudi National Day\nOur National Day offers have started at {store}.', img: 'A Saudi National Day sale ad, green and white palette, festive celebration, the store products arranged with subtle national decor.' },
      ramadan: { name: 'Ramadan', idea: 'Ramadan, suhoor and gift bundles; prepare stock and packaging a month before.',
        wa: 'Ramadan is near, and {store} has everything you need ready\nOrder early before the rush.', img: 'A Ramadan ad for a Saudi online store, lanterns and crescent moon, warm golden light, the store products arranged elegantly.' },
      fitr: { name: 'Eid al-Fitr', idea: 'Eid gifts and eidiya; set the last order day that still arrives before Eid.',
        wa: 'Eid Mubarak in advance\nEid gifts are ready at {store}; order before the last delivery date.', img: 'An Eid al-Fitr gift ad for a Saudi online store, festive pastel colors, wrapped gifts and the store products, joyful mood.' },
      summer: { name: 'Summer holiday', idea: 'The first day of the end-of-year school holiday: travel and outing offers, graduation and success gifts.',
        wa: 'The holiday has started! {store} has everything you need for summer\nSee the offers before they end.', img: 'A summer vacation ad for a Saudi online store, bright cheerful light, travel and outing mood, the store products arranged neatly.' },
      school: { name: 'Back to school', idea: 'Back-to-school bundles for students and parents; start advertising two weeks before.',
        wa: 'Back to school is near\nGet the kids ready from {store} before the rush.', img: 'A back to school ad for a Saudi online store, school bag and stationery, fresh bright colors, the store products arranged neatly.' },
      adha: { name: 'Eid al-Adha', idea: 'Offers in the first ten days of Dhul Hijjah and Eid gifts; make delivery dates clear.',
        wa: 'Eid al-Adha offers have started at {store}\nOrder early so it arrives before Eid.', img: 'An Eid al-Adha ad for a Saudi online store, elegant festive mood, warm colors, the store products with gift wrapping.' }
    },
    nextT: 'Want Judy to prepare your season campaign?', nextP: 'We prepare the season ad on Snapchat and TikTok and run it for a full month, from the idea to tracking results.', nextBtn: 'See the ads service', nextWa: 'Hello, I saw the seasons calendar and would like you to prepare my next season campaign'
  }
};

}

/* ---- i18n/p15.en.js ---- */
if (!window.JT_F["i18n/p15.en.js"]) { window.JT_F["i18n/p15.en.js"] = 1;
/* P15 English words: live services, share, quote, VAT file, policies. Merged into JT_I18N.en. */
(function () {
  var D = window.JT_I18N.en;
  D.svc = {
    free: 'Free', from: 'From', in: 'Done in {d}', now: 'We start right after you order', fix: 'Fix it for me',
    share: 'Send on WhatsApp', shareT: 'Send the result to yourself or your store partner', brand: 'Judy Marketing free tools', tryIt: 'Try it free:'
  };
  D.check.fixT = { seo: 'Want your store to show up better on Google?', front: 'Want your storefront put in order?' };
  D.check.fixP = { seo: 'We write titles and descriptions for your store pages, tidy their links and connect Search Console.', front: 'We put your storefront in order: slider, banners, category images and colors, and review it on mobile.' };

  D.tools.quote = { name: 'A price quote for your store', short: 'Pick what your store needs and get the price and delivery time at once, at today\'s prices', go: 'Get your quote', icon: 'quote', badge: 'new', tags: 'quote price pricing services design seo ads',
    h1: 'A price quote for your store design and marketing', lead: 'Pick the services your store needs and see the price and delivery time at once, without waiting for a reply.', say: "Just pick what you want and I'll give you the price now", related: ['cost', 'theme', 'check'] };
  D.quote = {
    pv: ['Design', 'SEO', 'Ads'], pvSub: "Price and time from Judy's store today",
    inTitle: 'What does your store need?', name: 'Your store or your name', nameHelp: 'Optional, it appears on the quote', one: '(choose one)',
    g: { design: 'Store design', brand: 'Brand and images', google: 'Google and AI answers', ads: 'Ads and social media', store: 'Store setup' },
    bigL: 'Total', bigFrom: 'Total starts from', count: 'Services: {n}', billT: 'Quote details', none: 'Pick one service or more and the price shows up here.',
    total: 'Total', for: 'Quote for: {n}', date: 'Quote date: {d}',
    note: "Prices are from the Judy Marketing store on {d}. Each service's time starts once we receive everything we need.",
    fail: "We couldn't load the prices right now. Try again shortly, or message us on WhatsApp and we'll send them.",
    order: 'Order on WhatsApp', share: 'Send to your partner', all: 'Browse Salla store design prices 2026',
    waHi: 'Hello, I made a price quote with the merchant tools and would like to start:',
    leadT: 'Get the quote as a PDF', leadP: "A neat file with Judy's logo, the services, prices, times and quote date, to send to your partner or keep.", leadBtn: 'Download the quote',
    pdfT: 'Price quote from Judy Marketing', pdfFoot: 'Judy Marketing, designing online stores since 2018 and now specialised in Salla.', pdfNote: "Prices are taken from the Judy Marketing store when the quote was made. Each service's time starts once we receive everything we need.", pdfNext: 'Message us on WhatsApp and we will start, or order the service directly from our store.'
  };
  D.quote.nextP = D.quote.pdfNext;
})();

}

/* ---- i18n/p15b.en.js ---- */
if (!window.JT_F["i18n/p15b.en.js"]) { window.JT_F["i18n/p15b.en.js"] = 1;
/* P15 English words: VAT file + store policies. Merged into JT_I18N.en. */
(function () {
  var D = window.JT_I18N.en;

  D.tools.vat = { name: 'VAT for all your products', short: 'Add 15% VAT to all your prices at once, or take it out, and get a file ready for Salla', go: 'Work out your prices', icon: 'vat', badge: 'new', tags: 'vat tax prices products excel csv import salla 15',
    h1: 'VAT calculator for all your store products', lead: 'Upload your Salla prices file or paste your prices. We work out VAT for every product at once and you download a file ready to import.', say: "Instead of editing them one by one, let me do them all", related: ['profit', 'offers', 'policy'] };
  D.vat = {
    pvSub: 'All prices at once, and a file for Salla',
    inTitle: 'Your prices', modeQ: 'What do you want to do?', add: 'Add VAT to the price', strip: 'Take VAT out of the price',
    srcQ: 'Where are your prices?', srcList: 'Paste them here', srcFile: 'Salla prices file',
    listL: 'Products and prices', listHelp: 'One product per line: name, then price. You can paste straight from Excel (name, SKU, price).',
    ex: 'Black abaya, 250\nCotton scarf, 49\nLeather bag, 179', item: 'Product',
    drop: 'Upload your Salla prices file', dropS: 'An .xlsx Excel file. It stays on your device', reading: 'Reading the file...', readOk: 'Read {n} rows from {f}',
    errType: "This file can't be opened. Upload an .xlsx Excel file just as Salla sent it.", errCols: 'We found no product price column («سعر المنتج») in the file. Upload the prices file you exported from Salla, unchanged.',
    getT: 'How do I get the prices file from Salla?', get: ['In your Salla dashboard: Products, then "Import and export" («الاستيراد والتصدير»), then "Import product prices" («استيراد أسعار المنتجات»).', 'Press "Export file" («تصدير الملف») and the file arrives at your store email.', 'Upload it here just as it is, without changing anything.'],
    roundQ: 'Rounding', rNone: 'No rounding', rWhole: 'Nearest riyal', rNine: 'Ends in 9',
    bigL: 'Prices worked out', unit: 'prices', subAdd: 'After adding 15% VAT', subStrip: 'After taking out 15% VAT',
    tblT: 'Prices before and after', tblAria: 'Prices before and after table', cName: 'Product', cOld: 'Price now', cAdd: 'With VAT', cStrip: 'Before VAT',
    rowCb: 'Include {n}', more: 'and {n} more prices inside the file.', andMore: 'and {n} more products',
    hal: '{n} prices are off by one halala: for example {p} shows to the shopper as {b}, because 15% is added to a rounded price.',
    warnAdd: 'Upload VAT-inclusive prices only if "Enter product prices including VAT" («إدخال أسعار المنتجات شاملة الضريبة») is on in your store. If it is off, Salla adds 15% again on top.',
    warnStrip: 'Use this price if Salla adds VAT on top of your prices. If "Enter product prices including VAT" is on, keep your prices inclusive and do not upload this file.',
    warnFull: 'This is the full products file. Do not upload it for prices, because it writes over all product data. Export only the prices file from Salla and upload it here.',
    dl: 'Download CSV file', dlX: 'Download the file for Salla', copy: 'Copy prices',
    upT: 'How do I upload the file to Salla?',
    upX: ['In your Salla dashboard: Products, then «الاستيراد والتصدير», then «استيراد أسعار المنتجات».', 'Upload the file you downloaded here and press «تحديث الأسعار».', 'We changed only the price and the sale price. Product numbers, dates and cost price are exactly as in your file.', 'Try one or two products first and check the price in your store before you upload everything.'],
    upC: ['In your Salla dashboard: Products, then «الاستيراد والتحديث», then «استيراد جديد», and upload the file.', 'Match the columns: product name, SKU and price.', 'If the products already exist, tick «المنتجات» under «تحديث البيانات الحالية». Each product needs a SKU, or new products will be added.', 'Updates cannot be undone, so try one product first. If you have no SKUs, use the Salla prices file option above.'],
    csvHead: ['اسم المنتج', 'رمز التخزين (SKU)', 'السعر'],
    nextT: 'Want someone to review your store prices?', nextP: 'We review your store for free and tell you where you can earn more: prices, offers and shipping.', nextBtn: 'Ask for the free review', nextWa: 'Hello, I worked out my VAT prices with the Judy tool and would like a free store review'
  };

  D.tools.policy = { name: 'Your store policies, ready', short: 'Return, shipping and privacy policies in your store name, based on Saudi law with its official text', go: 'Prepare your policies', icon: 'policy', badge: 'new', tags: 'policy return exchange privacy shipping complaints saudi e-commerce law',
    h1: 'Return and privacy policy for your store', lead: 'Answer a few simple questions and get return, shipping and privacy policies in your store name, based on the Saudi E-Commerce Law and the Personal Data Protection Law.', say: "Your customer wants to feel safe before paying. Let's write it clearly", related: ['whatsapp', 'check', 'vat'] };
  D.policy = {
    pv: ['Return and exchange policy', 'Shipping and complaints', 'Privacy policy'],
    inTitle: 'Your store details', yourStore: '[Store name]',
    s: { ret: 'Returns and exchange', ship: 'Shipping and complaints', priv: 'Privacy', more: 'More store details' },
    f: { store: 'Store name', link: 'Store link', email: 'Customer service email', phone: 'Customer service WhatsApp', cr: 'Commercial registration or freelance document no.', vat: 'VAT number', city: 'City or address',
      days: 'Return period', pays: 'Who pays return shipping?', exch: 'Do you exchange products?', refund: 'Refund within', prep: 'Order prepared within', ship: 'Delivered within', area: 'Where do you deliver?', reply: 'Complaint answered within', solve: 'Complaint solved within', mkt: 'Do you send offers by phone or email?', exc: 'Products you do not take back', tools: 'Tracking tools in your store' },
    h: { cr: 'Optional', days: 'The law gives the customer 7 days from receiving the product. You can offer more.', refund: 'We found no set period in the law in force, so this is your own promise.' },
    u: { day: 'days', hour: 'hours' },
    o: { days: { 7: '7 days', 14: '14 days', 30: '30 days' }, pays: { cust: 'Customer', store: 'Store' }, exch: { yes: 'Yes', no: 'No' }, area: { ksa: 'Saudi Arabia', gcc: 'GCC', world: 'Worldwide' }, mkt: { yes: 'Yes', no: 'No' } },
    c: {
      exc: { custom: 'Products made to the customer\'s order', fresh: 'Perishable products', health: 'Products that cannot be resold for health reasons', digital: 'Downloaded software and files', books: 'Books and magazines', media: 'Discs and software already used', mixed: 'Products mixed so they cannot be restored', gold: 'Gold, silver and market-priced goods' },
      tools: { ga: 'Google Analytics', snap: 'Snapchat pixel', tiktok: 'TikTok pixel', meta: 'Meta pixel (Instagram and Facebook)', gads: 'Google Ads' }
    },
    tabsAria: 'Policies', tab: { ret: 'Returns', ship: 'Shipping and complaints', priv: 'Privacy' },
    copy: 'Copy the policy', word: 'Download all as Word', shareL: 'Policies for {n} are ready', read: 'Read from the official source on {d}. The official text is in Arabic.', src: 'Open the official source',
    law: { a13: 'Official text: 7-day return (Article 13, E-Commerce Law)', r11: 'Official text: products not returned (from Article 11, Executive Regulations)', a14: 'Official text: late delivery (Article 14, E-Commerce Law)', p12: 'Official text: what a privacy policy must include (Article 12, Personal Data Protection Law)', a5: 'Official text: using customer data (Article 5, E-Commerce Law)' },
    howT: 'Where do I put the policies in Salla?', how: ['Copy the policy from here.', 'In your Salla dashboard open the pages section («الصفحات»), then choose the policy page or add a new one.', 'Paste the text, save, and make sure the page shows in your store footer.', 'Do the same for shipping and complaints, and for privacy.'],
    newT: 'A new law is coming: the Consumer Protection Law', newP: 'The Cabinet approved it on 10 November 2026. It starts 180 days after it is published in the Official Gazette and replaces the E-Commerce Law. The Ministry of Commerce explains that stores refund within 14 days of being told of the cancellation. These policies follow the law in force on 24 November 2026, and we will update them when the new one starts.', newA: 'Open the Ministry of Commerce questions on the new law',
    leadT: 'Get the three policies as a PDF', leadP: 'A neat file with the return, shipping and privacy policies in your store name, to keep.', leadBtn: 'Download the policies', pdfT: 'Store policies', pdfFoot: 'Prepared with the free Judy Marketing tools, based on the law in force on 24 November 2026.', pdfRes: 'Policies',
    nextT: 'Want Judy to add them to your store?', nextP: 'We add the policies to your store, connect WhatsApp and review your store, all in one package.', nextBtn: 'Browse the basic services package', nextWa: 'Hello, I prepared my store policies with the Judy tool and would like you to add them to my store',

    docs: function (v) {
      var contact = []; if (v.phone) contact.push('WhatsApp: ' + v.phone); if (v.email) contact.push('Email: ' + v.email); if (!contact.length) contact.push('The contact details shown in the store');
      function d(n) { return Number(n) === 1 ? '1 day' : n + ' days'; }
      function hr(n) { return Number(n) === 1 ? '1 hour' : n + ' hours'; }
      var EX = { custom: 'Products made or designed at the customer\'s request or to their specifications, unless they are defective or do not match what was agreed.', fresh: 'Products that may spoil within the return period.', health: 'Products that cannot be resold for health reasons.', digital: 'Software and files downloaded from the internet, unless a defect prevents the download or they do not match what was agreed.', books: 'Newspapers, magazines, publications and books.', media: 'Video tapes, discs and software that have been used.', mixed: 'Products made of elements that were combined and cannot be restored to their original state.', gold: 'Products whose price keeps changing with the market, such as gold and silver.' };
      var TL = { ga: 'Google Analytics', snap: 'Snapchat', tiktok: 'TikTok', meta: 'Meta (Instagram and Facebook)', gads: 'Google Ads' };
      var who = [{ p: 'This policy belongs to ' + v.store + (v.link ? ' (' + v.link + ')' : '') + ' and was last updated on ' + v.date + '.' }];
      var ids = []; if (v.cr) ids.push('Commercial registration or freelance document: ' + v.cr); if (v.vat) ids.push('VAT number: ' + v.vat); if (v.city) ids.push('Address: ' + v.city);

      var ret = [{ t: v.exch ? 'Return and exchange policy' : 'Return policy' }].concat(who).concat([
        { h: 'Your right to return', p: 'You may return the product within ' + d(v.days) + ' of receiving it, as long as you have not used it or benefited from it and it is in its original condition and packaging. For services, the period starts on the contract date and before you benefit from the service.' },
        { h: 'Cost of returning', p: v.pays === 'store' ? 'The store pays the return shipping.' : 'The customer pays the return shipping, unless the product is defective or does not match the order, in which case the store pays.' },
        { h: 'How to return', l: ['Contact us within the return period with your order number and the reason.', 'We send you the return method and address.', 'We check the product when it arrives, then refund you.'] },
        { h: 'Refund', p: 'We refund you within ' + d(v.refund) + ' of receiving the returned product and checking its condition, by the same payment method you used, unless we agree on another method with you.' }
      ]);
      if (v.exch) ret.push({ h: 'Exchange', p: 'You may exchange the product for another size, color or product within the same return period if it is available. Any price difference is settled.' });
      ret.push({ h: 'Defective or wrong product', p: 'If the product arrives defective or does not match your order, contact us and we will replace it or refund the full amount with the shipping cost. This policy does not affect your warranty rights.' });
      if (v.exc.length) ret.push({ h: 'Products that cannot be returned', l: v.exc.map(function (k) { return EX[k]; }) });
      ret.push({ h: 'Correcting an order mistake', p: 'If you made a mistake in your order, tell us within 24 hours of sending it and we will correct it, unless you have already benefited from the product or service.' });
      ret.push({ h: 'Contact us', l: contact });

      var AREA = { ksa: 'We deliver to all regions of Saudi Arabia.', gcc: 'We deliver to Saudi Arabia and the GCC countries.', world: 'We deliver inside and outside Saudi Arabia.' };
      var ship = [{ t: 'Shipping, delivery and complaints policy' }].concat(who).concat([
        { h: 'Delivery area', p: AREA[v.area] },
        { h: 'Preparation and delivery time', p: 'We prepare your order within ' + d(v.prep) + ' of confirming it, and it reaches you within ' + d(v.ship) + ' after that.' },
        { h: 'Shipping cost', p: 'You see the shipping cost and the total price, with all fees and taxes, before you pay.' },
        { h: 'Late delivery', p: 'We tell you if we expect a delay. If delivery is late by more than 15 days from the order date, or past the agreed date, you may cancel the contract and get back what you paid, unless the delay is due to force majeure.' },
        { h: 'Complaints and suggestions', p: 'We receive your complaint through the contact details below, reply within ' + hr(v.reply) + ' and work to solve it within ' + d(v.solve) + '.' },
        { h: 'Contact us', l: contact.concat(ids) }
      ]);

      var share = ['Shipping companies: name, mobile number and address, to deliver the order.', 'Payment gateways: to complete the payment. Card details are handled by the payment gateway.', 'Salla: the platform the store runs on.'];
      if (v.tools.length) share.push('Measurement and advertising tools: ' + v.tools.map(function (k) { return TL[k]; }).join(', ') + '. These tools may process their data outside Saudi Arabia.');
      share.push('The competent authorities when the law requires it.');
      var purpose = ['To fulfil, deliver and invoice your order.', 'To contact you about your order and after-sales service.', 'To protect the store and prevent fraud.'];
      if (v.tools.length) purpose.push('To measure store visits, improve the store and measure ads.');
      if (v.mkt) purpose.push('To send offers, only if you agree.');
      var priv = [{ t: 'Privacy policy' }].concat(who).concat([
        { h: 'Who we are and how to reach us', p: 'Your data is collected by ' + v.store + '.', l: contact.concat(ids) },
        { h: 'Data we collect', l: ['Required to fulfil the order: name, mobile number, address and order details.', 'Optional: email, order notes and reviews.', 'Technical: device type and the pages you visited' + (v.tools.length ? ', through cookies.' : '.')] },
        { h: 'How we collect it', p: 'We collect it directly from you when you register, order or contact us, and some of it technically while you browse the store.' },
        { h: 'Why we collect it', l: purpose },
        { h: 'Legal basis', p: 'We process order data to carry out our agreement with you, and other data based on your consent or when the law requires it. You may withdraw your consent at any time.' },
        { h: 'Who we share it with', p: 'We do not sell your data. We share only what is needed with:', l: share },
        { h: 'Storage and protection', p: 'Your data is kept in the store account on the Salla platform and is seen only by those who need it to fulfil your order. If your data is breached, we tell you and the competent authority within the period set by law.' },
        { h: 'Retention and destruction', p: 'We keep your data while it is needed to fulfil your order and serve you, or for the period the law requires, such as for invoices, then we destroy it.' },
        v.tools.length ? { h: 'Cookies', p: 'We use cookies to run the store and measure visits. You can turn them off in your browser settings, and some parts of the store may not work without them.' } : null,
        v.mkt ? { h: 'Marketing messages', p: 'We send you offers only with your consent, and every message has a clear way to stop them.' } : null,
        { h: 'Your rights', l: ['To know why we collect your data and on what basis.', 'To access your data and ask for a clear copy of it.', 'To correct, complete or update it.', 'To ask us to destroy what is no longer needed.', 'To withdraw your consent and close your account.'] },
        { h: 'How to use your rights', p: 'Send your request through the contact details above and we reply within 30 days. If you are not satisfied, you may complain to the Saudi Data and AI Authority (SDAIA).' },
        { h: 'Policy updates', p: 'If we change this policy, we publish the new version here with its update date.' }
      ]).filter(Boolean);
      return { ret: ret, ship: ship, priv: priv };
    }
  };

  D.hub.lead = D.hub.lead.replace('11 tools', '14 tools');
  D.hub.leadNoCheck = D.hub.leadNoCheck.replace('10 tools', '13 tools');
  D.hub.groups.start.goalSub = 'Cost, quote, theme';
  D.hub.groups.start.line = 'Know the cost, the price and the theme before you start.';
  D.hub.groups.ready = { icon: 'policy', goal: 'Set up my store', goalSub: 'Colors, policies, VAT', name: 'Set up your store', line: 'Your colors, policies and VAT prices, ready to put in your store.' };
  })();

}

/* ---- i18n/fee.en.js ---- */
if (!window.JT_F["i18n/fee.en.js"]) { window.JT_F["i18n/fee.en.js"] = 1;
/* raise-your-price card + profit ledger file */
(function () {
  var D = window.JT_I18N.en;
  D.fee = {
    t: 'How much should I raise my price to cover card, Tabby and Tamara fees?',
    p: 'Type the rate from each of your contracts and see how much to add to the selling price so you keep the same amount after fees.',
    card: 'Card and mada', tabby: 'Tabby', tamara: 'Tamara',
    pct: 'Rate', fix: 'Fixed fee', ph: 'Contract',
    vatQ: 'Is 15% VAT added to the fees?', vatHelp: 'If your store is VAT registered and you recover it, choose "No".',
    idle: 'Type the rate to see how much to add', add: 'Add {n}', be: 'New price {n}', now: 'Fee on your current price {n}', bad: 'Check the rate',
    one: 'One price that covers everything you typed', oneP: 'From {a} to {b}, based on the highest fee among your payment methods.',
    noPrice: 'Type the selling price above first.',
    incl: 'VAT included', excl: 'before VAT',
    how: ['Adding the same rate to the price is not enough, because the fee is taken from the new, higher price.',
      'If your store is not VAT registered: new price = (price + fixed fee) ÷ (1 - rate).',
      'If it is registered, we also count the VAT on the increase itself, so you keep the same amount after VAT and fees.',
      'We put in no ready rates, because they differ from one contract to another.']
  };
  D.ledger = {
    t: 'Salla store profit ledger', p: 'A free ready Excel file: log your orders and it works out payment fees, VAT and net profit for each order, plus a monthly summary after your expenses.',
    btn: 'Download the ledger', file: 'salla-store-profit-ledger.xlsx', src: 'judy-profit-ledger-en.json',
    hubT: 'Salla store profit ledger', hubP: 'A free Excel file with all your costs, the profit of every order and a summary for each month.', hubBtn: 'See the ledger'
  };
})();

}

/* ---- i18n/product.en.js ---- */
if (!window.JT_F["i18n/product.en.js"]) { window.JT_F["i18n/product.en.js"] = 1;
/* English words: product page check + photo + simple video. Merged into JT_I18N.en. */
(function () {
  var D = window.JT_I18N.en;
  D.tools.product = { name: "Judy's touch for your product", short: 'Paste your product link to see what shoppers look for and cannot find, improve its photo, and make a simple video', go: 'Check your product', icon: 'product', badge: 'new', tags: 'product page photo image white background video description customer',
    h1: "Judy's touch for your product: free page check, photo and video", lead: 'Paste your Salla product link and see what a shopper looks for and cannot find on the page. Then improve its photo and make a simple video, all from your phone.', say: 'One touch of my wand and your product photo gets clearer', related: ['google', 'check', 'profit'] };
  D.product = {
    facts: ['Free', 'No sign-up', 'Your photos stay on your device'],
    pv: ['“What does the back look like?”', 'Clear price'],
    inTitle: 'Your product link', urlL: 'The product page link in your store', go: 'Check my product',
    urlHelp: 'Open the product in your store and copy the link from the address bar. We read only what any visitor sees, and change nothing in your store.',
    jump: 'No link right now? Go straight to', or: 'or',
    wait: 'Judy is browsing your product page...',
    err: { empty: 'Paste the product link here', url: 'The link is not valid. Copy it from the product page as it is.', dash: 'This is a dashboard link. Open the product in your store and copy its link there.', short: 'This is a short link. Open it first, then copy the long link from the address bar.', noid: 'This is a store or category link. Open the product itself and copy its link (it ends with p and a number).' },
    fail: { notSalla: 'We found no Salla store at this link. The check works for Salla stores only, but you can still improve a photo and make a video below.', gone: 'We could not find the product. Make sure it is published and visible to shoppers, and that the link comes from your Salla store.', busy: 'It is busy right now. Wait a minute and try again.', net: 'We could not reach the store. Check your connection and try again.' },
    resT: 'Your product page has {a} of {b} things shoppers look for', resAll: 'Your product page has everything shoppers look for', of: 'of {n}',
    badT: 'Fix these first', tipT: 'Worth adding', goodT: 'Clear to the shopper',
    gT: 'What Google reads from your product ({n})', selfT: 'Check these yourself',
    selfP: 'The tool reads the data and cannot see what is inside a photo, so answer these:',
    self: ['Is there a photo that shows the size? For example in a hand or next to something familiar.', 'Is there a close-up of the material or details?', 'Is there a photo of the product in use?', 'Are the photos free of text and logos? Google does not accept them in shopping results.', 'Does the description say how long delivery takes and whether returns are accepted?'],
    buy: 'Add to cart', soldOut: 'Sold out', phoneCap: "Roughly how your product looks on a shopper's phone", waCap: 'Roughly how your link looks in WhatsApp',
    fixT: { ugc: 'Want photos that help shoppers picture the product with them?', words: "Want a name and description that answer shoppers' questions?", motion: 'Want a professional video of your product?', review: 'Want us to review your whole store?' },
    fixP: { ugc: 'We shoot your product naturally, as if a real customer is using it.', words: 'We write your product descriptions and keywords, ready to use.', motion: 'We make a 30-second AI motion video for your product.', review: 'We analyse your store and tell you what to fix first, for free.' },
    c: {
      photos: { none: { q: '“I see no photo of the product”', fix: 'Upload at least one clear photo, then add other angles. In Salla: the product, then “إضافة صورة أو فيديو”.' }, one: { q: '“I see only one photo. What about the side and the back?”', fix: 'Add a close-up of the details, another angle, and one that shows the size. Salla takes up to 10 photos per product.' }, good: 'Product photos: {n}' },
      size: { bad: { q: '“The photo is blurry when I zoom in”', fix: 'Shoppers get your photo at {w} x {h} pixels. Upload a larger one: Google asks for at least 500 x 500 from 31 January 2027.' }, good: 'The main photo size is fine ({w} x {h})' },
      video: { tip: { q: '“I want to see it move”', fix: 'Make a simple video below and upload it with the product photos. Salla takes up to 3 videos per product.' }, good: 'There is a product video' },
      name: { code: { q: '“What is {name}?”', fix: 'The name is a code that neither shoppers nor Google understand. Write the product type and its color or material, and keep the code in the SKU field.' }, short: { q: '“{name}... what is it exactly?”', fix: 'One word is not enough. Add the product type and its color or material, for example: black crepe flared abaya.' }, long: { q: '“Long name. What matters in it?”', fix: 'The name is {n} characters. Put the key words first, because shoppers notice the first 70 characters or fewer.' }, good: 'The product name is clear' },
      price: { sale: 'The price is clear and shows a saving of {save}', good: 'The price is clear' },
      desc: { none: { q: '“Not one word about the product”', fix: 'Write a description that answers: what is it, what is it made of, how big is it, what comes with it?' }, short: { q: '“Too little text, I want to know more”', fix: 'The description is only {n} characters. Put the most important details in the first 160 to 500: material, size and use.' }, img: { q: '“All the text is inside an image”', fix: 'Words inside images are not read like text. Write the same words as text in the description.' }, good: 'The description has enough text' },
      shape: { tip: { q: '“One long paragraph, tiring to read on a phone”', fix: 'Split the description into short points and headings: features, sizes, how to use.' }, good: 'The description is split and easy to read' },
      sizes: { bad: { q: '“Which size fits me?”', fix: 'Write the measurements in centimetres in the description, or turn on the size chart: Products, then categories and options, then size charts (paid plans).' }, good: 'Sizes are clear' },
      stock: { bad: { q: '“Sold out! When is it back?”', fix: 'The product is not available now. Add stock, or tell shoppers when it returns.' }, some: { q: '“The one I want is sold out”', fix: 'Sold-out options: {list}. Add stock, or say when they return.' }, good: 'The product is available to order' },
      reviews: { tip: { q: '“Has anyone tried it before me?”', fix: 'No review shows on the product. Message your customers after delivery and ask for a review.' }, good: 'Customer rating {s} of 5 ({n})' }
    },
    g: {
      alt: { tip: { q: 'Photos whose text does not describe the product: {n} of {all}', fix: 'The text is a file name or empty. On the product page click “Alt” under the photo and write what it shows (up to 70 characters).' } },
      gtin: { tip: { q: 'No barcode number (GTIN)', fix: 'If your product has a factory barcode, add it to the product data; it helps in Google shopping results. If you make the product yourself, you do not need it.' } },
      sub: { tip: { q: 'The line under the name is empty', fix: 'Write a short subtitle that states the main benefit.' } }
    },
    nextT: "Want us to review your whole store?", nextP: 'We analyse your store and tell you what to fix first so shoppers order with confidence, for free.', nextBtn: 'Ask for the free analysis', nextWa: 'Hello, I checked my product with the Judy tool and would like my store analysed'
  };
  D.photo = {
    t: "Judy's touch for your photo", p: 'Upload a product photo and we adjust its light, color and sharpness on your device. Download it square and ready for your store. One free photo per merchant.',
    from: 'Pick one of your product photos', pick: 'Photo {n}', drop: 'Upload your product photo', dropHelp: 'JPG, PNG or WebP, it stays on your device',
    badFile: 'This photo does not open. Try JPG or PNG.', big: 'The photo is too large. Try one under 20 MB.', opening: 'Opening the photo...', empty: 'Pick your product photo and Judy adds her touch',
    kQ: 'Strength', k: { low: 'Light', mid: 'Medium', high: 'Strong' }, sqQ: 'Shape', sq: { sq: 'Square', as: 'As it is' },
    bgQ: 'Background', bg: { keep: 'As it is', white: 'White', color: 'Your color' }, colL: 'Background color',
    bgYes: 'Your photo has a plain background, so you can make it white or change its color. Check the product edges before you download.', bgNo: 'Your photo has a detailed background. Changing the background here works on plain light backgrounds only.',
    cmp: 'Drag to compare before and after', before: 'Before', after: 'After',
    did: { light: 'Raised the light', contrast: 'Deepened the darks', cast: 'Corrected the light color', sharp: 'Made it sharper', bg: 'Changed the background', square: 'Made it square' },
    small: 'Your original photo is small ({w} x {h}). We enlarged it, but detail does not increase. A larger photo is better.',
    dl: 'Download the photo', size: '{w} x {h} pixels, JPG, ready for Salla', done: 'Photo downloaded ({kb} KB). Upload it on the product page in Salla.', fail: 'We could not prepare the file. Try another browser.',
    lock: 'You have used your free photo. We can prepare the rest of your product photos, message us on WhatsApp.', lockWa: 'Message us on WhatsApp', waText: 'Hello, I used the product photo tool and would like the rest of my product photos improved',
    moreT: 'Have more photos?', moreP: 'We shoot your products and prepare their photos professionally.', moreBtn: 'Browse the photo service'
  };
  D.clip = {
    t: 'A simple video of your product', p: 'A 6-second vertical video from your product photos, name and price, ready for Snapchat, TikTok and Instagram stories. No sound: add music in the app.',
    from: 'Video photos (up to 3)', drop: 'Upload a photo for the video', dropHelp: 'Or check your product above and its photos appear here',
    name: 'Product name', price: 'Price', store: 'Store name', ctaQ: 'Last line', ctas: ['Order now', 'In our store', 'Link in bio'], colL: 'Video color', colOwn: 'Your color',
    pvAlt: 'Video preview', empty: 'Pick a photo and the video preview appears here', mark: 'Judy Marketing',
    make: 'Make the video', busy: 'Making the video, keep the page open...', dl: 'Download the video', share: 'Share it',
    done: 'The video is ready ({mb} MB, MP4). You can also upload it with the product photos in Salla.', doneWebm: 'The video is ready ({mb} MB) as WebM because your browser cannot export MP4. Chrome or Safari is better.',
    fail: 'Your browser cannot make the video. Try an updated Chrome or Safari, or send us your photo on WhatsApp.', failWa: 'Message us on WhatsApp', waText: 'Hello, I would like a simple video of my product',
    moreT: 'Want a professional video?', moreP: 'A 30-second motion video of your product: we write the idea and make it for you.', moreBtn: 'Browse the video service'
  };
  D.hub.lead = D.hub.lead.replace('14 tools', '15 tools');
  D.hub.leadNoCheck = D.hub.leadNoCheck.replace('13 tools', '14 tools');
  D.hub.groups.google.goalSub = 'Store, product and Google';
  D.hub.groups.google.name = 'Store and product check';
  D.hub.groups.google.line = "Check your store and your product, and preview it on Google before you save it.";
})();

}

/* ---- src/core.js ---- */
if (!window.JT_F["src/core.js"]) { window.JT_F["src/core.js"] = 1;
/* =========================================================
   JUDY - MERCHANT TOOLS (أدوات التاجر) core
   One code for Arabic and English. Words live in i18n/ar.js and i18n/en.js.
   Mounts on the Salla static pages listed in JT_PAGES (or ?p= in the local harness).
   ========================================================= */
(function () {
  'use strict';
  if (window.JT && window.JT.ready) return;
  var JT = window.JT = window.JT || {};
  JT.tools = JT.tools || {};
  JT.ready = true;

  /* ---------- config ---------- */
  var CFG = JT.CFG = {
    wa: '966552261549',
    // Google Form «بيانات أدوات التاجر» (Judy account) -> linked sheet «بيانات أدوات التاجر (الردود)». No sign-in, no Allow.
    leadUrl: window.JT_LEAD_URL || 'https://docs.google.com/forms/d/e/1FAIpQLSdp8TMXQUKh5foox1UkUDV9mpG1iBHlwAlq54Eq9R13wKxUUw/formResponse',
    // form field ids (read from the published form 23 Nov 2026)
    leadMap: window.JT_LEAD_MAP || { tool: 335397886, contact: 1118644901, type: 980066915, updates: 1743040491, lang: 1460158235, page: 272572458, summary: 858798890 },
    // Google PageSpeed Insights API key: Judy Google Cloud project «judy-merchant-tools», key «judy-tools-pagespeed-2» (24 Nov 2026),
    // restricted to referrer https://judymarketing.com/* and the PSI API only (no billing). The value lives only in the store loader block (publish-work/psi-key.txt -> make-loader.py), never in this public repo.
    psiKey: window.JT_PSI_KEY || '',
    asset: window.JT_ASSET_BASE || 'img/',
    // Salla static page id -> tool key. Filled when the pages are created.
    pages: window.JT_PAGES || {},
    // Judy pose per place (file names in the asset folder, .webp)
    judy: {
      hub: 'point-both', season: 'idea-bulb', know: 'microphone', cta: 'thumbs-up', done: 'clapping',
      profit: 'calculator', ads: 'tablet-chart', offers: 'box-surprise', cost: 'blueprint',
      colors: 'painter', theme: 'idea-bulb', seasons: 'megaphone', check: 'magnifier', whatsapp: 'headset',
      prompts: 'vr', google: 'chart-board', vat: 'card-pay', policy: 'umbrella', quote: 'cart', product: 'wand',
      g_start: 'blueprint', g_ready: 'painter', g_price: 'calculator', g_market: 'megaphone', g_google: 'magnifier'
    },
    // her real services (prices read from the store 2026-11-22)
    svc: {
      basic: { id: 1514969843, price: 499 }, silver: { id: 837163313, price: 799 }, gold: { id: 1571309363, price: 999 },
      redesign: { id: 955821044, price: 350 }, front: { id: 467939401, price: 99 }, care: { id: 245739294, price: 25 }, seo: { id: 1681749402, price: 499 }, geo: { id: 804605573, price: 599 },
      snap: { id: 698503056, price: 299 }, gads: { id: 900983740, price: 299 }, social: { id: 675496799, price: 300 },
      consult: { id: 408047677, price: 0 }, review: { id: 1069491163, price: 0 }, wa: { id: 1518367887, price: 0 }, ugc: { id: 1687798457, price: 35 }, words: { id: 39542453, price: 45 }, motion: { id: 1181924747, price: 75 },
      packages: { page: 1085189397 }, prices: { page: 1673610507 }
    }
  };

  /* ---------- language ---------- */
  var LANG = JT.lang = (document.documentElement.lang || 'ar').toLowerCase().indexOf('en') === 0 ? 'en' : 'ar';
  // each published file carries one language only: follow the words that are really here
  var I18 = window.JT_I18N || {};
  if (!I18[LANG]) LANG = JT.lang = I18.ar ? 'ar' : 'en';
  var DICT = I18[LANG] || {};
  function T(path, vars) {
    var v = path.split('.').reduce(function (o, k) { return o && o[k] != null ? o[k] : undefined; }, DICT);
    if (v == null) { if (window.console) console.warn('[jt] missing', path); return path; }
    if (typeof v === 'string' && vars) v = v.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return v;
  }
  JT.T = T;

  /* ---------- small helpers ---------- */
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var a = attrs[k];
      if (a == null || a === false) continue;
      if (k === 'class') el.className = a;
      else if (k === 'html') el.innerHTML = a;
      else if (k === 'text') el.textContent = a;
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), a);
      else el.setAttribute(k, a === true ? '' : a);
    }
    (kids || []).forEach(function (c) { if (c == null || c === false) return; el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return el;
  }
  JT.h = h;
  JT.esc = function (s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; };
  var NF = {};
  JT.num = function (n, dec) {
    if (n == null || !isFinite(n)) return '—';
    dec = dec == null ? (Math.abs(n) < 100 && Math.round(n) !== n ? 1 : 0) : dec;
    var key = dec;
    NF[key] = NF[key] || new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: dec });
    return NF[key].format(n);
  };
  JT.money = function (n, dec) { return JT.num(n, dec == null ? 2 : dec) + ' ' + T('common.sar'); };
  // numbers with % or x stay in one left-to-right piece inside Arabic text (U+2066 ... U+2069)
  JT.ltr = function (t) { return '⁦' + t + '⁩'; };
  JT.pct = function (n, dec) { return JT.ltr(JT.num(n * 100, dec == null ? 1 : dec) + '%'); };
  JT.parse = function (v) {
    if (v == null) return NaN;
    var s = String(v).replace(/[٠-٩]/g, function (d) { return d.charCodeAt(0) - 0x0660; })
      .replace(/[۰-۹]/g, function (d) { return d.charCodeAt(0) - 0x06F0; })
      .replace(/[٬,\s]/g, '').replace('٫', '.');
    if (s === '') return NaN;
    return Number(s);
  };
  JT.store = {
    get: function (k, d) { try { var v = localStorage.getItem('jt:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('jt:' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  JT.svg = function (name) { return (JT.ICONS && JT.ICONS[name]) || ''; };
  JT.img = function (key, cls, alt) {
    var file = CFG.judy[key] || key;
    return h('img', { class: cls || '', src: CFG.asset + 'judy-' + file + '.webp', alt: alt || '', loading: key === 'hub' ? 'eager' : 'lazy', decoding: 'async', draggable: 'false' });
  };
  JT.prod = function (key) {
    var s = CFG.svc[key]; if (!s) return '#';
    return '/' + LANG + '/-/p' + s.id;
  };
  JT.pageUrl = function (tool) {
    if (JT.harness) return '?p=' + tool + (LANG === 'en' ? '&lang=en' : '');
    for (var id in CFG.pages) if (CFG.pages[id] === tool) return '/' + LANG + '/-/page-' + id;
    return '#';
  };
  JT.waUrl = function (text, phone) {
    return 'https://wa.me/' + (phone || CFG.wa) + '?text=' + encodeURIComponent(text);
  };
  JT.copy = function (text, btn) {
    function done(ok) {
      if (!btn) return;
      var old = btn.getAttribute('data-label') || btn.textContent;
      btn.setAttribute('data-label', old);
      btn.classList.add('is-done');
      var lab = btn.querySelector('.jt-bl') || btn;
      lab.textContent = ok ? T('common.copied') : T('common.copyFail');
      setTimeout(function () { btn.classList.remove('is-done'); lab.textContent = old; }, 1800);
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallback(); });
    else fallback();
    function fallback() {
      var ta = h('textarea', { style: 'position:fixed;top:-1000px;opacity:0' }); ta.value = text; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) { }
      ta.remove(); done(ok);
    }
  };
  JT.announce = function (msg) { var live = document.getElementById('jt-live'); if (live) { live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 30); } };

  /* ---------- form controls ---------- */
  // number field with unit and help, returns {el, input, get(), set()}
  JT.field = function (o) {
    var id = 'jt-f-' + o.id;
    var input = h('input', { id: id, class: 'jt-in', type: 'text', inputmode: 'decimal', autocomplete: 'off', dir: 'ltr', 'aria-describedby': o.help ? id + '-h' : null });
    if (o.value != null) input.value = o.value;
    if (o.placeholder) input.placeholder = o.placeholder;
    var err = h('p', { class: 'jt-err', id: id + '-e', role: 'alert' });
    var wrap = h('div', { class: 'jt-field' + (o.wide ? ' jt-field--wide' : '') }, [
      h('label', { for: id, class: 'jt-lab', text: o.label }),
      h('div', { class: 'jt-inwrap' }, [input, o.unit ? h('span', { class: 'jt-unit', text: o.unit }) : null]),
      o.help ? h('p', { class: 'jt-help', id: id + '-h', text: o.help }) : null,
      err
    ]);
    function get() { return JT.parse(input.value); }
    function check() {
      var v = get(), msg = '';
      if (input.value.trim() === '') msg = o.optional ? '' : T('common.errEmpty');
      else if (!isFinite(v)) msg = T('common.errNum');
      else if (o.min != null && v < o.min) msg = T('common.errMin', { n: o.min });
      else if (o.max != null && v > o.max) msg = T('common.errMax', { n: o.max });
      err.textContent = msg; wrap.classList.toggle('is-bad', !!msg);
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    }
    input.addEventListener('blur', check);
    input.addEventListener('input', function () { if (wrap.classList.contains('is-bad')) check(); if (o.onInput) o.onInput(); });
    return { el: wrap, input: input, get: function () { var v = get(); return isFinite(v) ? v : (o.optional ? 0 : NaN); }, set: function (v) { input.value = v; }, check: check, raw: function () { return input.value; } };
  };
  JT.textField = function (o) {
    var id = 'jt-f-' + o.id;
    var input = h(o.area ? 'textarea' : 'input', { id: id, class: 'jt-in' + (o.area ? ' jt-ta' : ''), type: o.area ? null : 'text', autocomplete: 'off', maxlength: o.maxlength || null, rows: o.rows || null, 'aria-describedby': o.help ? id + '-h' : null });
    if (o.dir) input.setAttribute('dir', o.dir);
    if (o.value != null) input.value = o.value;
    if (o.placeholder) input.placeholder = o.placeholder;
    var wrap = h('div', { class: 'jt-field' + (o.wide ? ' jt-field--wide' : '') }, [
      h('label', { for: id, class: 'jt-lab', text: o.label }), input,
      o.help ? h('p', { class: 'jt-help', id: id + '-h', text: o.help }) : null
    ]);
    if (o.onInput) input.addEventListener('input', o.onInput);
    return { el: wrap, input: input, get: function () { return input.value.trim(); }, set: function (v) { input.value = v; } };
  };
  // segmented choice (radio group) -> {el, get(), set()}
  JT.seg = function (o) {
    var name = 'jt-s-' + o.id, val = o.value;
    var opts = o.options.map(function (op) {
      var inp = h('input', { type: 'radio', name: name, value: op[0], class: 'jt-sr' });
      if (op[0] === val) inp.checked = true;
      inp.addEventListener('change', function () { val = op[0]; if (o.onChange) o.onChange(val); });
      return h('label', { class: 'jt-seg__o' }, [inp, h('span', { text: op[1] })]);
    });
    var el = h('fieldset', { class: 'jt-seg' + (o.wide ? ' jt-field--wide' : '') }, [h('legend', { class: 'jt-lab', text: o.label })].concat([h('div', { class: 'jt-seg__row' }, opts)]).concat(o.help ? [h('p', { class: 'jt-help', text: o.help })] : []));
    return { el: el, get: function () { return val; }, set: function (v) { val = v; el.querySelectorAll('input').forEach(function (i) { i.checked = i.value === v; }); } };
  };
  JT.btn = function (label, o) {
    o = o || {};
    var b = h(o.href ? 'a' : 'button', { class: 'jt-btn ' + (o.kind ? 'jt-btn--' + o.kind : 'jt-btn--p') + (o.cls ? ' ' + o.cls : ''), type: o.href ? null : 'button', href: o.href || null, target: o.blank ? '_blank' : null, rel: o.blank ? 'noopener' : null, onclick: o.onclick || null, 'aria-label': o.aria || null },
      [o.icon ? h('span', { class: 'jt-ic', html: JT.svg(o.icon), 'aria-hidden': 'true' }) : null, h('span', { class: 'jt-bl', text: label })]);
    return b;
  };

  /* ---------- number tween (one short moment on results) ---------- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  JT.tween = function (el, to, fmt) {
    var from = parseFloat(el.getAttribute('data-v'));
    el.setAttribute('data-v', to);
    if (reduce || !isFinite(from) || !isFinite(to) || from === to) { el.textContent = fmt(to); return; }
    var t0 = performance.now(), dur = 320;
    (function step(t) {
      var k = Math.min(1, (t - t0) / dur); k = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(from + (to - from) * k);
      if (k < 1 && el.getAttribute('data-v') == String(to)) requestAnimationFrame(step);
    })(t0);
  };

  /* ---------- shared blocks ---------- */
  JT.toolTiles = function (keys, small) {
    return h('div', { class: 'jt-grid' + (small ? ' jt-grid--small' : '') }, keys.map(function (k) { return JT.tile(k, small); }));
  };
  JT.tile = function (k, small) {
    var t = T('tools.' + k);
    var a = h('a', { class: 'jt-tile', href: JT.pageUrl(k), 'data-tool': k, 'data-search': (t.name + ' ' + t.short + ' ' + (t.tags || '')).toLowerCase() }, [
      h('div', { class: 'jt-tile__top' }, [
        h('span', { class: 'jt-tile__ic', html: JT.svg(t.icon || k), 'aria-hidden': 'true' }),
        h('h3', { class: 'jt-tile__t', text: t.name }),
        t.badge ? h('span', { class: 'jt-tag jt-tag--' + t.badge, text: T('common.badge.' + t.badge) }) : null
      ]),
      h('p', { class: 'jt-tile__p', text: t.short }),
      !small && JT.tools[k] && JT.tools[k].preview ? h('div', { class: 'jt-pv', 'aria-hidden': 'true' }, [JT.tools[k].preview()]) : null,
      h('span', { class: 'jt-tile__go' }, [t.go, h('span', { class: 'jt-arr', html: JT.svg('arrow'), 'aria-hidden': 'true' })])
    ]);
    return a;
  };
  // service suggestion shown after a result (value first, offer second)
  JT.nextStep = function (o) {
    return h('aside', { class: 'jt-next', 'aria-label': T('common.nextAria') }, [
      JT.img('cta', 'jt-next__judy'),
      h('div', { class: 'jt-next__body' }, [
        h('h3', { class: 'jt-next__t', text: o.title }),
        h('p', { class: 'jt-next__p', text: o.text }),
        o.svc && JT.fixLine ? JT.fixLine(o.svc) : null,
        h('div', { class: 'jt-next__btns' }, [
          JT.btn(o.btn, { href: o.href }),
          JT.btn(T('common.askWa'), { kind: 'wa', icon: 'wa', href: JT.waUrl(o.wa || T('common.waHello')), blank: true })
        ])
      ])
    ]);
  };
  JT.how = function (title, lines) {
    return h('details', { class: 'jt-how' }, [h('summary', {}, [h('span', { text: title }), h('span', { class: 'jt-how__ch', html: JT.svg('chev'), 'aria-hidden': 'true' })]),
      h('div', { class: 'jt-how__b' }, lines.map(function (l) { return h('p', { text: l }); }))]);
  };

  /* ---------- page shell ---------- */
  function findHost() { return document.querySelector('.content.content--single-page'); }
  function pageKey() {
    var q = /[?&]p=([a-z]+)/.exec(location.search);
    if (q && JT.harness) return q[1];
    var m = /page-(\d+)/.exec(decodeURIComponent(location.pathname));
    return m ? CFG.pages[m[1]] : null;
  }
  JT.key = null;

  function buildPage(key, card) {
    var root = h('div', { id: 'jt-app', class: 'jt jt--' + key, lang: LANG, dir: LANG === 'ar' ? 'rtl' : 'ltr' });
    root.appendChild(h('p', { id: 'jt-live', class: 'jt-sr-only', 'aria-live': 'polite', role: 'status' }));
    // clones: the storefront (React) keeps owning its own nodes; its card is hidden, our copy is shown
    var h1 = card && card.querySelector('h1') ? card.querySelector('h1').cloneNode(true) : null;
    var body = card && card.querySelector('.content-entry') ? card.querySelector('.content-entry').cloneNode(true) : null;
    if (key === 'hub') JT.hub(root, h1, body);
    else JT.toolPage(root, key, h1, body);
    return root;
  }

  // tool page: hero + tool + next step + related + know section
  JT.toolPage = function (root, key, h1, body) {
    var t = T('tools.' + key), tool = JT.tools[key];
    var title = h1 || h('h1', { text: t.h1 || t.name });
    title.className = 'jt-h1';
    var hero = h('header', { class: 'jt-thero' }, [
      h('div', { class: 'jt-wrap jt-thero__in' }, [
        h('div', { class: 'jt-thero__txt' }, [
          h('a', { class: 'jt-back', href: JT.pageUrl('hub') }, [h('span', { class: 'jt-arr jt-arr--back', html: JT.svg('arrow'), 'aria-hidden': 'true' }), T('common.allTools')]),
          title,
          h('p', { class: 'jt-lead', text: t.lead }),
          h('ul', { class: 'jt-facts' }, T(key === 'check' || key === 'product' ? key + '.facts' : 'common.facts').map(function (f) { return h('li', {}, [h('span', { class: 'jt-ic', html: JT.svg('check'), 'aria-hidden': 'true' }), f]); })),
          JT.needStore ? JT.needStore() : null
        ]),
        h('div', { class: 'jt-thero__judy' }, [h('p', { class: 'jt-say', text: t.say }), JT.img(key, 'jt-thero__img')])
      ])
    ]);
    root.appendChild(hero);
    var main = h('section', { class: 'jt-wrap jt-tool', 'aria-label': t.name });
    root.appendChild(main);
    if (tool && tool.render) tool.render(main); else main.appendChild(h('p', { text: '…' }));
    if (JT.shareBar && tool && !tool.noShare) {
      var sb = JT.shareBar(key), nx0 = main.querySelector('.jt-next');
      if (nx0) main.insertBefore(sb, nx0); else main.appendChild(sb);
    }
    // «خذ النتيجة كاملة PDF»: after the result, before the service suggestion
    if (JT.leadBox && tool && !tool.noLead) {
      var box = JT.leadBox(key, tool.lead ? tool.lead() : null), nx = main.querySelector('.jt-next');
      if (nx) main.insertBefore(box, nx); else main.appendChild(box);
    }
    var rel = (t.related || []).filter(function (k) { return k !== key; });
    if (rel.length) root.appendChild(h('section', { class: 'jt-wrap jt-rel' }, [h('h2', { class: 'jt-h2', text: T('common.related') }), JT.toolTiles(rel, true)]));
    if (body) root.appendChild(JT.know(body, key));
    if (tool && tool.after) tool.after(root);
  };

  // «اعرف مع جودي»: the page's own plain text (h2/h3/p/ul), restyled; FAQ h3+p become accordions
  JT.know = function (body, key) {
    var sec = h('section', { class: 'jt-know', id: 'jt-know' }, [
      h('div', { class: 'jt-wrap jt-know__in' }, [
        h('div', { class: 'jt-know__side' }, [JT.img('know', 'jt-know__judy'), h('p', { class: 'jt-know__k', text: T('common.know') })]),
        h('div', { class: 'jt-know__body' })
      ])
    ]);
    var target = sec.querySelector('.jt-know__body');
    body.classList.add('jt-prose');
    target.appendChild(body);
    // FAQ: any h3 that ends with a question mark, followed by paragraphs -> details
    var heads = body.querySelectorAll('h3');
    heads.forEach(function (q) {
      if (!/[?؟]\s*$/.test(q.textContent)) return;
      var d = h('details', { class: 'jt-faq' }), s = h('summary', {}, [h('span', { text: q.textContent }), h('span', { class: 'jt-how__ch', html: JT.svg('chev'), 'aria-hidden': 'true' })]);
      d.appendChild(s);
      var n = q.nextElementSibling, ans = h('div', { class: 'jt-faq__a' });
      while (n && !/^H[1-3]$/.test(n.tagName)) { var nx = n.nextElementSibling; ans.appendChild(n); n = nx; }
      d.appendChild(ans);
      q.replaceWith(d);
    });
    return sec;
  };

  /* ---------- mount on Salla (re-mount after the React storefront re-renders) ---------- */
  var mounted = null, sig = '';
  // the Raed storefront can swap pages in place (no reload): undo everything when the page changes
  function unmount() {
    if (mounted && mounted.parentNode) mounted.parentNode.removeChild(mounted);
    [].forEach.call(document.querySelectorAll('.jt-hidden-host'), function (x) { x.classList.remove('jt-hidden-host'); });
    document.body.classList.remove('jt-page');
    mounted = null; sig = ''; JT.key = null;
  }
  JT.unmount = unmount;
  // wait until the storefront (React) has hydrated its page card: touching the page earlier breaks its hydration (#418)
  var t0 = Date.now(), seen = 0;
  function hydrated(card) {
    if (JT.harness || Date.now() - t0 > 10000) return true; // never leave the visitor without the tool
    if (!Object.keys(card).some(function (k) { return k.indexOf('__react') === 0; })) return false;
    if (!seen) { seen = Date.now(); setTimeout(mount, 320); }
    return Date.now() - seen >= 300;
  }
  // each tool page loads only its own tool; moving inside the store to another tool (or to the hub, which shows them all)
  // brings the full file once. Files already here are skipped by the build guard (JT_F).
  var asked = 0;
  function have(key) { return key === 'hub' ? !window.JT_PART || !!window.JT_FULL : !!JT.tools[key]; }
  function askFull() {
    if (asked || !window.JT_ALL_SRC) return; asked = 1;
    var sc = document.createElement('script'); sc.src = window.JT_ALL_SRC; sc.crossOrigin = 'anonymous';
    sc.onload = function () { mount(); };
    sc.onerror = function () { setTimeout(function () { asked = 0; }, 3000); };
    document.head.appendChild(sc);
  }
  function mount() {
    var key = pageKey();
    if (!key) { if (mounted || document.body.classList.contains('jt-page')) unmount(); return; }
    if (!have(key) && window.JT_ALL_SRC) { if (mounted && JT.key !== key) unmount(); askFull(); return; }
    var card = findHost();
    if (!card || !hydrated(card)) return;
    var t = card.querySelector('h1');
    var now = location.pathname + '|' + (t ? t.textContent.trim() : '');
    if (mounted && document.body.contains(mounted) && sig === now && card.parentElement.classList.contains('jt-hidden-host')) return;
    if (!t || !t.textContent.trim()) return; // wait until the page card has its title
    if (mounted) unmount();
    JT.key = key;
    var app = buildPage(key, card);
    var row = card.parentElement; // div.flex.justify-center inside main .container
    row.parentElement.insertBefore(app, row);
    row.classList.add('jt-hidden-host');
    document.body.classList.add('jt-page');
    mounted = app; sig = now;
  }
  JT.mount = mount;
  JT.start = function () {
    mount();
    var tries = 0, iv = setInterval(function () { mount(); if (++tries > 40) clearInterval(iv); }, 400);
    if (window.MutationObserver) {
      var q = false;
      new MutationObserver(function () { if (q) return; q = true; setTimeout(function () { q = false; mount(); }, 120); }).observe(document.body, { childList: true, subtree: true });
    }
  };
})();

}

/* ---- src/svc.js ---- */
if (!window.JT_F["src/svc.js"]) { window.JT_F["src/svc.js"] = 1;
/* live services: price + delivery time read from her store at that moment (public Store API, no key),
   the «نصلحها لك» line under every result, and the WhatsApp share bar. Nothing here holds a price of its own:
   when the store cannot be reached the line is hidden and the button still opens the product. */
(function () {
  var JT = window.JT, h = JT.h, T = JT.T, CFG = JT.CFG;
  var API = 'https://api.salla.dev/store/v1/products', STORE = '763876861', TTL = 20 * 60e3, mem = {};
  function cached(k) { try { var v = JSON.parse(sessionStorage.getItem('jt:svc:' + k)); return v && Date.now() - v.t < TTL ? v.d : null; } catch (e) { return null; } }
  function keep(k, d) { try { sessionStorage.setItem('jt:svc:' + k, JSON.stringify({ t: Date.now(), d: d })); } catch (e) { /* private mode */ } }
  function get(path) {
    var key = JT.lang + path;
    mem[key] = mem[key] || fetch(API + path, { headers: { 'Store-Identifier': STORE, 'Accept-Language': JT.lang } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (j) { return j.data; });
    return mem[key].then(function (d) { return d; }, function (e) { delete mem[key]; throw e; });
  }
  /* «مدة التنفيذ 5 أيام من استلامنا ...» -> «5 أيام» ; «Delivery time 2 weeks from ...» -> «2 weeks» */
  function daysOf(html) {
    var t = String(html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
    var ar = JT.lang === 'ar';
    var m = ar ? /مدة التنفيذ:?\s*([^.،]{2,60})/.exec(t) : /Delivery(?: time)?:?\s+([^.,]{2,70})/.exec(t);
    if (!m) { m = ar ? /خلال (\d+ (?:أيام عمل|أيام|يوم|أسابيع)|أسبوع|أسبوعين|شهر)(?=[ .،:]|$)/.exec(t) : /[Ww]ithin (\d+ (?:working )?(?:days?|weeks?))/.exec(t); if (!m) return ''; }
    var d = m[1].replace(ar ? /\s+(من يوم|من استلام|من وصول|تبدأ|بعد استلام).*$/ : /\s+(from|starting|after)\s.*$/i, '').trim();
    if (ar ? /^نبدأ/.test(d) : /^We start/i.test(d)) return T('svc.now');
    return d.length <= 26 ? T('svc.in', { d: d }) : '';
  }
  function pack(p) {
    var was = Number(p.regular_price);
    return { id: Number(p.id), name: p.name, price: Number(p.price), was: p.is_on_sale && was > Number(p.price) ? was : 0, ok: p.is_available !== false && p.status === 'sale', from: !!(p.has_options || (p.options && p.options.length)) };
  }
  JT.liveOne = function (id) {
    var k = 'one' + JT.lang + id, c = cached(k); if (c) return Promise.resolve(c);
    return get('/' + id + '/details').then(function (p) { var d = pack(p); d.days = daysOf(p.description); keep(k, d); return d; });
  };
  /* many prices in one request (no delivery time) */
  JT.livePrices = function (ids) {
    var q = ids.map(function (i) { return 'source_value[]=' + i; }).join('&'), k = 'many' + JT.lang + q, c = cached(k);
    if (c) return Promise.resolve(c);
    return get('?source=selected&' + q + '&per_page=32').then(function (a) { var o = {}; a.forEach(function (p) { o[p.id] = pack(p); }); keep(k, o); return o; });
  };
  // the tools that print her prices (cost) use today's price from the store
  JT.refreshSvc = function (then) {
    var ids = Object.keys(CFG.svc).filter(function (k) { return CFG.svc[k].id; });
    JT.livePrices(ids.map(function (k) { return CFG.svc[k].id; })).then(function (o) {
      ids.forEach(function (k) { var p = o[CFG.svc[k].id]; if (p && isFinite(p.price)) CFG.svc[k].price = p.price; });
      if (then) then();
    }, function () { /* keep the last known prices */ });
  };
  JT.priceText = function (p) { return p.price === 0 ? T('svc.free') : (p.from ? T('svc.from') + ' ' : '') + JT.money(p.price, 2); };

  /* one line: service name, price, delivery time (live) */
  JT.fixLine = function (key) {
    var s = CFG.svc[key]; if (!s || !s.id) return null;
    var name = h('span', { class: 'jt-fix__n' }), price = h('b', { class: 'jt-fix__p jt-num' }), was = h('s', { class: 'jt-fix__w jt-num' }), days = h('span', { class: 'jt-fix__d' });
    var el = h('div', { class: 'jt-fix is-wait' }, [name, h('span', { class: 'jt-fix__m' }, [price, was, days])]);
    JT.liveOne(s.id).then(function (p) {
      if (!p.ok) { el.remove(); return; }
      el.classList.remove('is-wait');
      name.textContent = p.name; price.textContent = JT.priceText(p);
      if (p.was) was.textContent = JT.money(p.was, 2); else was.remove();
      if (p.days) { days.appendChild(h('span', { class: 'jt-ic', html: JT.svg('clock'), 'aria-hidden': 'true' })); days.appendChild(document.createTextNode(p.days)); } else days.remove();
    }, function () { el.remove(); });
    return el;
  };
  /* compact «نصلحها لك» card that sits right under a result */
  JT.fixBox = function (o) {
    return h('aside', { class: 'jt-fixbox', 'aria-label': o.title }, [
      h('div', { class: 'jt-fixbox__t' }, [h('h3', { class: 'jt-fixbox__h', text: o.title }), o.text ? h('p', { class: 'jt-help', text: o.text }) : null, JT.fixLine(o.svc)]),
      JT.btn(o.btn || T('svc.fix'), { href: JT.prod(o.svc) })
    ]);
  };

  /* WhatsApp share of the result */
  function txt(sel, root) { var e = (root || document).querySelector(sel); return e ? e.textContent.replace(/\s+/g, ' ').trim() : ''; }
  function head(el) { return el && el.firstChild ? el.firstChild.textContent.trim() : ''; }
  function all(a, sel, fn) { return [].map.call(a.querySelectorAll(sel), fn).filter(Boolean); }
  function stats(a) { return all(a, '.jt-tool .jt-card--res .jt-stat', function (s) { var v = txt('.jt-stat__v', s); return !s.hidden && v && v !== '—' ? txt('.jt-stat__l', s) + ': ' + v : ''; }); }
  function big(a) { var v = txt('.jt-tool .jt-res__big', a); return v && v.indexOf('—') !== 0 ? [txt('.jt-tool .jt-res__l', a) + ': ' + v] : []; }
  var LINES = {
    ads: function (a) { return big(a).concat(stats(a)); },
    cost: function (a) { return big(a).concat(stats(a)).concat(all(a, '.jt-bill li:not(.is-total)', function (li) { return '- ' + txt('a, span', li) + ': ' + txt('b', li); })); },
    google: function (a) { return big(a).concat([txt('.jt-serp__t', a), txt('.jt-serp__d', a)]); },
    offers: function (a) { return all(a, '.jt-rank__i', function (li) { return '- ' + head(li.querySelector('.jt-rank__n')) + ': ' + txt('.jt-rank__v', li) + ' ' + T('common.sar'); }); },
    theme: function (a) { return all(a, '.jt-theme', function (li) { var l = li.querySelector('a'); return '- ' + head(li.querySelector('.jt-theme__t')) + (l ? '\n' + l.href : ''); }); },
    colors: function (a) { return all(a, '.jt-role', function (r) { return txt('label', r) + ': ' + txt('code', r); }); },
    seasons: function () { var s = JT.nextSeason && JT.nextSeason(); return s ? [T('hub.stripTitle', { name: s.name }) + ': ' + (s.days === 0 ? T('seasons.today') : JT.num(s.days) + ' ' + T('seasons.daysLeft')), s.idea] : []; },
    check: function (a) {
      if (!a.querySelector('.jt-scores')) return [];
      return [txt('.jt-ck__host', a)].concat(all(a, '.jt-score', function (s) { return txt('.jt-score__c', s) + ': ' + txt('b', s) + '/100'; })).concat(all(a, '.jt-ck__cols .is-bad .jt-pt__t', function (p) { return '- ' + head(p); }));
    }
  };
  JT.shareUrl = function (key) { return JT.harness ? 'https://judymarketing.com/' + JT.lang : location.origin + JT.pageUrl(key); };
  JT.shareText = function (key, lines) {
    var app = document.getElementById('jt-app');
    lines = lines || (LINES[key] ? LINES[key](app) : []);
    return [T('tools.' + key + '.name') + ' | ' + T('svc.brand')].concat(lines.length ? lines.filter(Boolean) : [T('tools.' + key + '.short')]).concat(['', T('svc.tryIt') + ' ' + JT.shareUrl(key)]).join('\n');
  };
  JT.shareBtn = function (key, getLines, label, kind) {
    var b = JT.btn(label || T('svc.share'), { kind: kind || 'wa', icon: 'wa', href: 'https://wa.me/', blank: true });
    var set = function () { b.href = 'https://wa.me/?text=' + encodeURIComponent(JT.shareText(key, getLines ? getLines() : null)); };
    ['pointerdown', 'focus', 'mouseenter', 'click'].forEach(function (e) { b.addEventListener(e, set); });
    return b;
  };
  JT.shareBar = function (key, getLines) {
    return h('div', { class: 'jt-share' }, [h('p', { class: 'jt-share__t', text: T('svc.shareT') }), JT.shareBtn(key, getLines)]);
  };
})();

}

/* ---- src/tools/colors.js ---- */
if (!window.JT_F["src/tools/colors.js"]) { window.JT_F["src/tools/colors.js"] = 1;
/* ألوان متجرك من الشعار: the logo never leaves the browser; palette by pixel buckets; live store preview */
(function () {
  var JT = window.JT, h = JT.h, T = JT.T;

  /* ---------- colour maths ---------- */
  function hex(c) { return '#' + c.map(function (v) { return ('0' + Math.round(Math.max(0, Math.min(255, v))).toString(16)).slice(-2); }).join(''); }
  function rgb(hx) { var m = /^#?([0-9a-f]{6})$/i.exec(hx); if (!m) return [0, 0, 0]; var n = parseInt(m[1], 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function lum(c) { var a = c.map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]; }
  function contrast(a, b) { var l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); }
  function hsl(c) {
    var r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, s = 0, hh = 0;
    if (mx !== mn) { var d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); hh = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; hh /= 6; }
    return [hh, s, l];
  }
  function mix(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
  function dist(a, b) { var dr = a[0] - b[0], dg = a[1] - b[1], db = a[2] - b[2]; return Math.sqrt(0.3 * dr * dr + 0.59 * dg * dg + 0.11 * db * db); }
  // darken/lighten until the contrast with `against` reaches `target`
  function fit(c, against, target) {
    var x = c.slice(), i = 0, toDark = lum(against) > 0.4;
    while (contrast(x, against) < target && i++ < 40) x = mix(x, toDark ? [0, 0, 0] : [255, 255, 255], 0.08);
    return x;
  }

  function palette(img) {
    var cv = document.createElement('canvas'), W = 140, sc = Math.min(1, W / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
    cv.width = Math.max(1, Math.round((img.naturalWidth || img.width) * sc)); cv.height = Math.max(1, Math.round((img.naturalHeight || img.height) * sc));
    var cx = cv.getContext('2d', { willReadFrequently: true }); cx.drawImage(img, 0, 0, cv.width, cv.height);
    var d = cx.getImageData(0, 0, cv.width, cv.height).data, buckets = {};
    for (var i = 0; i < d.length; i += 4) {
      if (d[i + 3] < 200) continue;
      var c = [d[i], d[i + 1], d[i + 2]];
      var l = hsl(c)[2];
      if (l > 0.94) continue; // paper white around the logo
      var key = (c[0] >> 4) + ',' + (c[1] >> 4) + ',' + (c[2] >> 4);
      var b = buckets[key] || (buckets[key] = { n: 0, r: 0, g: 0, b: 0 });
      b.n++; b.r += c[0]; b.g += c[1]; b.b += c[2];
    }
    var list = Object.keys(buckets).map(function (k) { var b = buckets[k]; return { c: [b.r / b.n, b.g / b.n, b.b / b.n], n: b.n }; }).sort(function (a, b) { return b.n - a.n; });
    var out = [];
    list.forEach(function (x) {
      var near = out.find(function (o) { return dist(o.c, x.c) < 38; });
      if (near) { near.n += x.n; } else if (out.length < 8) out.push(x);
    });
    return out.filter(function (x) { return x.n > 3; });
  }
  JT.colorPalette = palette;

  function roles(cols) {
    var white = [255, 255, 255];
    var sat = cols.filter(function (x) { var s = hsl(x.c); return s[1] > 0.25 && s[2] > 0.12 && s[2] < 0.85; }).sort(function (a, b) { return b.n - a.n; });
    var dark = cols.filter(function (x) { return hsl(x.c)[2] < 0.25; });
    var primary = (sat[0] || cols[0] || { c: [91, 71, 214] }).c;
    var second = (sat.find(function (x) { return dist(x.c, primary) > 70; }) || {}).c || (function () { var p = hsl(primary); return mix(primary, p[2] > 0.5 ? [0, 0, 0] : white, 0.45); })();
    var text = dark[0] ? dark[0].c : mix(primary, [10, 10, 20], 0.82);
    return {
      primary: hex(primary), second: hex(second), text: hex(fit(text, white, 7)),
      bg: hex(mix(primary, white, 0.94)), onPrimary: contrast(primary, white) >= 3 ? '#ffffff' : hex(fit(mix(primary, [0, 0, 0], 0.7), primary, 4.5))
    };
  }
  JT.colorRoles = roles;

  JT.tools.colors = {
    preview: function () {
      return h('div', { class: 'jt-pv__sw' }, ['#5b47d6', '#f5b301', '#191744', '#f1efff'].map(function (c) { return h('i', { style: 'background:' + c }); }).concat([h('span', { class: 'jt-pv__s', text: T('colors.pvLine') })]));
    },
    render: function (el) {
      var state = { primary: '#5b47d6', second: '#f5b301', text: '#191744', bg: '#f6f4ff', onPrimary: '#ffffff', logo: null, name: T('colors.sampleName') };
      var file = h('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp,image/svg+xml', class: 'jt-sr-only', id: 'jt-logo' });
      var drop = h('label', { class: 'jt-drop', for: 'jt-logo' }, [
        h('span', { class: 'jt-drop__ic', html: JT.svg('upload'), 'aria-hidden': 'true' }),
        h('b', { text: T('colors.drop') }), h('span', { class: 'jt-help', text: T('colors.dropHelp') })
      ]);
      var thumb = h('img', { class: 'jt-drop__img', alt: '', hidden: true });
      drop.appendChild(thumb);
      var nameF = JT.textField({ id: 'co-name', label: T('colors.storeName'), value: '', placeholder: T('colors.sampleName'), onInput: function () { state.name = nameF.get() || T('colors.sampleName'); paint(); } });
      var sw = h('div', { class: 'jt-swatches' });
      var roleBox = h('div', { class: 'jt-roles' });
      var status = h('p', { class: 'jt-help', role: 'status' });
      var copyBtn = JT.btn(T('colors.copyAll'), { kind: 'soft', icon: 'copy' });
      var inputs = h('div', { class: 'jt-card jt-card--in' }, [h('h2', { class: 'jt-card__t', text: T('colors.inTitle') }), file, drop, status, nameF.el, h('h3', { class: 'jt-mini-t', text: T('colors.found') }), sw, h('h3', { class: 'jt-mini-t', text: T('colors.rolesT') }), roleBox, h('div', { class: 'jt-actions' }, [copyBtn])]);

      // store preview (phone frame) painted from the roles
      var pv = h('div', { class: 'jt-store' }, [
        h('div', { class: 'jt-store__bar', 'data-k': 'bar' }),
        h('div', { class: 'jt-store__head' }, [h('span', { class: 'jt-store__logo' }), h('span', { class: 'jt-store__name' }), h('span', { class: 'jt-store__cart', html: JT.svg('store') })]),
        h('div', { class: 'jt-store__hero' }, [h('b', { class: 'jt-store__h' }), h('span', { class: 'jt-store__p' }), h('span', { class: 'jt-store__btn' })]),
        h('div', { class: 'jt-store__grid' }, [0, 1].map(function (i) { return h('div', { class: 'jt-store__card' }, [h('span', { class: 'jt-store__img' }), h('span', { class: 'jt-store__t' }), h('span', { class: 'jt-store__price' }), h('span', { class: 'jt-store__add' })]); }))
      ]);
      var checks = h('ul', { class: 'jt-checks' });
      var res = h('div', { class: 'jt-card jt-card--res' }, [h('h2', { class: 'jt-card__t', text: T('colors.pvTitle') }), h('div', { class: 'jt-phone' }, [pv]), checks, JT.how(T('colors.howSallaT'), T('colors.howSalla'))]);
      el.appendChild(h('div', { class: 'jt-tool__grid' }, [inputs, res]));
      el.appendChild(JT.nextStep({ title: T('colors.nextT'), text: T('colors.nextP'), btn: T('colors.nextBtn'), svc: 'basic', href: JT.prod('basic'), wa: T('colors.nextWa') }));

      var ROLES = ['primary', 'second', 'text', 'bg', 'onPrimary'];
      var pickers = {};
      ROLES.forEach(function (k) {
        var inp = h('input', { type: 'color', class: 'jt-color', id: 'jt-r-' + k, value: state[k] });
        var code = h('code', { class: 'jt-num', text: state[k] });
        inp.addEventListener('input', function () { state[k] = inp.value; code.textContent = inp.value; paint(); });
        pickers[k] = { inp: inp, code: code };
        roleBox.appendChild(h('div', { class: 'jt-role' }, [h('label', { for: 'jt-r-' + k, text: T('colors.role.' + k) }), inp, code]));
      });
      function setRoles(r) { ROLES.forEach(function (k) { state[k] = r[k]; pickers[k].inp.value = r[k]; pickers[k].code.textContent = r[k]; }); paint(); }
      function paint() {
        pv.style.setProperty('--p', state.primary); pv.style.setProperty('--s', state.second); pv.style.setProperty('--t', state.text); pv.style.setProperty('--bg', state.bg); pv.style.setProperty('--on', state.onPrimary);
        pv.querySelector('.jt-store__name').textContent = state.name;
        var lg = pv.querySelector('.jt-store__logo'); lg.innerHTML = '';
        if (state.logo) lg.appendChild(h('img', { src: state.logo, alt: '' })); else lg.textContent = state.name.slice(0, 1);
        pv.querySelector('.jt-store__bar').textContent = T('colors.pvBar');
        pv.querySelector('.jt-store__h').textContent = T('colors.pvH');
        pv.querySelector('.jt-store__p').textContent = T('colors.pvP');
        pv.querySelector('.jt-store__btn').textContent = T('colors.pvBtn');
        pv.querySelectorAll('.jt-store__t').forEach(function (x, i) { x.textContent = T('colors.pvItem') + ' ' + (i + 1); });
        pv.querySelectorAll('.jt-store__price').forEach(function (x, i) { x.textContent = (i ? '89' : '149') + ' ' + T('common.sar'); });
        pv.querySelectorAll('.jt-store__add').forEach(function (x) { x.textContent = T('colors.pvAdd'); });
        var p = rgb(state.primary), on = rgb(state.onPrimary), tx = rgb(state.text), bg = rgb(state.bg), w = [255, 255, 255];
        var list = [
          [T('colors.chk.btn'), contrast(p, on), 4.5],
          [T('colors.chk.text'), contrast(tx, bg), 4.5],
          [T('colors.chk.price'), contrast(p, w), 3]
        ];
        checks.innerHTML = '';
        list.forEach(function (c) {
          var ok = c[1] >= c[2];
          checks.appendChild(h('li', { class: ok ? 'is-ok' : 'is-bad' }, [h('span', { class: 'jt-ic', html: JT.svg(ok ? 'check' : 'info'), 'aria-hidden': 'true' }), h('span', { text: c[0] }), h('b', { class: 'jt-num', text: JT.num(c[1], 1) + ':1' }), h('em', { text: ok ? T('colors.clear') : T('colors.weak') })]));
        });
        copyBtn.onclick = function () { JT.copy(ROLES.map(function (k) { return T('colors.role.' + k) + ': ' + state[k]; }).join('\n'), copyBtn); };
      }
      function showSw(cols) {
        sw.innerHTML = '';
        cols.forEach(function (x) {
          var hx = hex(x.c);
          var b = h('button', { type: 'button', class: 'jt-sw', style: 'background:' + hx, 'aria-label': T('colors.useAsPrimary') + ' ' + hx, title: hx }, [h('span', { text: hx })]);
          b.addEventListener('click', function () { state.primary = hx; pickers.primary.inp.value = hx; pickers.primary.code.textContent = hx; var w = [255, 255, 255]; state.onPrimary = contrast(x.c, w) >= 3 ? '#ffffff' : hex(fit(mix(x.c, [0, 0, 0], 0.7), x.c, 4.5)); pickers.onPrimary.inp.value = state.onPrimary; pickers.onPrimary.code.textContent = state.onPrimary; paint(); });
          sw.appendChild(b);
        });
      }
      file.addEventListener('change', function () {
        var fl = file.files && file.files[0]; if (!fl) return;
        if (!/^image\//.test(fl.type)) { status.textContent = T('colors.badFile'); return; }
        var url = URL.createObjectURL(fl), img = new Image();
        img.onload = function () {
          var cols = palette(img);
          if (!cols.length) { status.textContent = T('colors.noColors'); return; }
          state.logo = url; thumb.src = url; thumb.hidden = false; drop.classList.add('has-img');
          showSw(cols); setRoles(roles(cols));
          status.textContent = T('colors.foundN', { n: cols.length });
          JT.announce(status.textContent);
        };
        img.onerror = function () { status.textContent = T('colors.badFile'); };
        img.src = url;
      });
      showSw([{ c: [91, 71, 214] }, { c: [245, 179, 1] }, { c: [25, 23, 68] }, { c: [123, 92, 240] }]);
      status.textContent = T('colors.sampleNote');
      paint();
    }
  };
})();

}

/* ---- src/tools/photo.js ---- */
if (!window.JT_F["src/tools/photo.js"]) { window.JT_F["src/tools/photo.js"] = 1;
/* حسن صورة منتجك: one photo per visitor, all on the visitor's device (canvas). Measured light, colour cast, contrast and
   sharpness; a plain light background can become white; square 1:1. No model runs here, so the words never say AI. */
(function () {
  var JT = window.JT, h = JT.h, T = JT.T;
  var MAX = 1500, MIN = 800;

  function canvas(w, hh) { var c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(hh)); return c; }
  function ctx(c) { return c.getContext('2d', { willReadFrequently: true }); }
  JT.loadImg = function (src) {
    return new Promise(function (ok, bad) { var im = new Image(); if (!/^(blob|data):/.test(src)) im.crossOrigin = 'anonymous'; im.onload = function () { ok(im); }; im.onerror = bad; im.src = src; });
  };

  // a blur every browser can do (Safari has no canvas filter before 18): down to a tiny picture and back up in steps
  JT.softCopy = function (src, w, hh, tiny) {
    var k = tiny / Math.max(w, hh), a = canvas(w * k, hh * k), b = canvas(w * k * 4, hh * k * 4), c = canvas(w, hh);
    [[a, src], [b, a], [c, b]].forEach(function (p) { var x = p[0].getContext('2d'); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high'; x.drawImage(p[1], 0, 0, p[0].width, p[0].height); });
    return c;
  };

  /* ---------- measuring ---------- */
  function measure(d) {
    var hist = new Uint32Array(256), n = 0, sum = 0, i, l;
    for (i = 0; i < d.length; i += 4) { l = (d[i] * 54 + d[i + 1] * 183 + d[i + 2] * 19) >> 8; hist[l]++; n++; sum += l; }
    function pct(p) { var t = n * p, a = 0; for (var k = 0; k < 256; k++) { a += hist[k]; if (a >= t) return k; } return 255; }
    var lo = pct(0.005), hi = pct(0.995), cut = pct(0.92), r = 0, g = 0, b = 0, c = 0;
    // colour cast: read on the brightest nearly grey pixels
    for (i = 0; i < d.length; i += 4) {
      l = (d[i] * 54 + d[i + 1] * 183 + d[i + 2] * 19) >> 8; if (l < cut || l > 252) continue;
      var mx = Math.max(d[i], d[i + 1], d[i + 2]), mn = Math.min(d[i], d[i + 1], d[i + 2]);
      if (mx && (mx - mn) / mx < 0.22) { r += d[i]; g += d[i + 1]; b += d[i + 2]; c++; }
    }
    var gain = [1, 1, 1];
    if (c > n * 0.01) { r /= c; g /= c; b /= c; var m = (r + g + b) / 3; gain = [m / r, m / g, m / b].map(function (x) { return Math.max(0.955, Math.min(1.045, x)); }); }
    return { lo: lo, hi: hi, mean: sum / n, med: pct(0.5), gain: gain };
  }
  JT.photoMeasure = measure;

  /* k = 0..1.  Light is only raised, never lowered; the stretch is capped so a dark mood photo stays itself. */
  JT.photoLight = function (d, m, k) {
    var lo = Math.min(m.lo, 46) * k, hi = 255 - (255 - Math.max(m.hi, 190)) * k;
    var gam = 1; if (m.med < 118) gam = Math.max(0.72, Math.log(118 / 255) / Math.log(Math.max(20, m.med) / 255)); gam = 1 - (1 - gam) * k;
    // one curve for the brightness; each pixel keeps its own hue (changing the channels one by one turns yellow into lemon)
    var lut = new Float32Array(256);
    for (var v = 0; v < 256; v++) {
      var x = Math.pow(Math.max(0, Math.min(1, (v - lo) / (hi - lo))), gam);
      lut[v] = 255 * (x + k * 0.1 * (x - 0.5) * 4 * x * (1 - x)); // soft contrast, the ends stay put
    }
    var g0 = 1 + (m.gain[0] - 1) * k, g1 = 1 + (m.gain[1] - 1) * k, g2 = 1 + (m.gain[2] - 1) * k;
    for (var i = 0; i < d.length; i += 4) {
      var R = d[i] * g0, G = d[i + 1] * g1, B = d[i + 2] * g2, y = Math.min(255, R * 0.213 + G * 0.715 + B * 0.072), t = lut[y | 0];
      if (y < 1) { d[i] = d[i + 1] = d[i + 2] = t; continue; }
      var q = t / y, mx = Math.max(R, G, B) * q;
      if (mx > 255) { // too bright for this colour: blend towards its own brightness instead of clipping one channel
        var f = mx > t ? (255 - t) / (mx - t) : 0; f = Math.max(0, Math.min(1, f));
        d[i] = t + (R * q - t) * f; d[i + 1] = t + (G * q - t) * f; d[i + 2] = t + (B * q - t) * f;
      } else { d[i] = R * q; d[i + 1] = G * q; d[i + 2] = B * q; }
    }
  };
  function sharpen(id, k) {
    var w = id.width, hh = id.height, s = new Uint8ClampedArray(id.data), d = id.data, a = 0.55 * k;
    for (var y = 1; y < hh - 1; y++) for (var x = 1; x < w - 1; x++) {
      var i = (y * w + x) * 4;
      for (var c = 0; c < 3; c++) {
        var p = i + c, bl = (s[p - 4] + s[p + 4] + s[p - w * 4] + s[p + w * 4] + s[p] * 4) / 8, df = s[p] - bl;
        if (df > 2 || df < -2) d[p] = s[p] + df * a * 2; // skip flat noise
      }
    }
  }

  /* ---------- plain background ---------- */
  function lumOf(c) { return c[0] * 0.213 + c[1] * 0.715 + c[2] * 0.072; }
  function diff(d, i, c) { var r = d[i] - c[0], g = d[i + 1] - c[1], b = d[i + 2] - c[2]; return Math.sqrt(0.3 * r * r + 0.59 * g * g + 0.11 * b * b); }
  // the border is one light colour -> {color, plain}
  JT.photoPlain = function (src) {
    var sc = 160 / Math.max(src.width, src.height), c = canvas(src.width * sc, src.height * sc), x = ctx(c);
    x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(src, 0, 0, c.width, c.height);
    var d = x.getImageData(0, 0, c.width, c.height).data, w = c.width, hh = c.height, list = [];
    for (var y = 0; y < hh; y++) for (var q = 0; q < w; q++) if (y < 3 || q < 3 || y >= hh - 3 || q >= w - 3) list.push((y * w + q) * 4);
    function med(ch) { var a = list.map(function (i) { return d[i + ch]; }).sort(function (p, r) { return p - r; }); return a[a.length >> 1]; }
    var col = [med(0), med(1), med(2)];
    var near = list.filter(function (i) { return diff(d, i, col) < 24; }).length / list.length;
    return { color: col, plain: near > 0.86 && lumOf(col) > 150, near: near };
  };
  function edgeColor(c) {
    var t = canvas(64, 64), x = ctx(t); x.drawImage(c, 0, 0, 64, 64); var d = x.getImageData(0, 0, 64, 64).data, a = [];
    for (var y = 0; y < 64; y++) for (var q = 0; q < 64; q++) if (c.height >= c.width ? (q < 2 || q > 61) : (y < 2 || y > 61)) { var i = (y * 64 + q) * 4; a.push([d[i], d[i + 1], d[i + 2]]); }
    a.sort(function (p, r) { return lumOf(p) - lumOf(r); }); var m = a[Math.floor(a.length * 0.68)];
    return 'rgb(' + m.join(',') + ')';
  }
  // 0..255 mask of the background (flood from the edges), drawn back at full size, plus the product box
  function bgMask(src, col) {
    var sc = Math.min(1, 560 / Math.max(src.width, src.height)), c = canvas(src.width * sc, src.height * sc), x = ctx(c);
    x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(src, 0, 0, c.width, c.height);
    var id = x.getImageData(0, 0, c.width, c.height), d = id.data, w = c.width, hh = c.height, seen = new Uint8Array(w * hh), st = [];
    function push(i, from) {
      if (seen[i]) return; var p = i * 4;
      if (diff(d, p, col) > 44) return;
      if (from >= 0) { var f = from * 4; if (Math.abs(d[p] - d[f]) + Math.abs(d[p + 1] - d[f + 1]) + Math.abs(d[p + 2] - d[f + 2]) > 30) return; }
      seen[i] = 1; st.push(i);
    }
    var k; for (k = 0; k < w; k++) { push(k, -1); push((hh - 1) * w + k, -1); } for (k = 0; k < hh; k++) { push(k * w, -1); push(k * w + w - 1, -1); }
    while (st.length) { var i = st.pop(), px = i % w; if (px) push(i - 1, i); if (px < w - 1) push(i + 1, i); if (i >= w) push(i - w, i); if (i < w * (hh - 1)) push(i + w, i); }
    var x0 = w, y0 = hh, x1 = 0, y1 = 0, bgN = 0;
    for (i = 0; i < seen.length; i++) {
      var on = seen[i]; d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = 255; d[i * 4 + 3] = on ? 255 : 0; bgN += on;
      if (!on) { var xx = i % w, yy = (i / w) | 0; if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
    }
    x.putImageData(id, 0, 0);
    var soft = canvas(src.width, src.height), s = soft.getContext('2d');
    if ('filter' in s) s.filter = 'blur(' + Math.max(0.8, 1 / sc) + 'px)';
    s.imageSmoothingQuality = 'high'; s.drawImage(c, 0, 0, soft.width, soft.height);
    return { mask: soft, part: bgN / seen.length, box: x1 > x0 ? [x0 / w, y0 / hh, (x1 - x0 + 1) / w, (y1 - y0 + 1) / hh] : [0, 0, 1, 1] };
  }

  /* o: {k, bg: 'keep'|'white'|'color', color, square} -> canvas */
  JT.photoRender = function (img, o) {
    var iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
    var side = Math.max(MIN, Math.min(MAX, Math.max(iw, ih))), sc = side / Math.max(iw, ih);
    var work = canvas(iw * sc, ih * sc), x = ctx(work); x.imageSmoothingQuality = 'high';
    x.fillStyle = '#fff'; x.fillRect(0, 0, work.width, work.height); x.drawImage(img, 0, 0, work.width, work.height);
    var before = canvas(work.width, work.height); before.getContext('2d').drawImage(work, 0, 0);
    var pl = JT.photoPlain(work), id = x.getImageData(0, 0, work.width, work.height), m = measure(id.data);
    JT.photoLight(id.data, m, o.k); sharpen(id, o.k); x.putImageData(id, 0, 0);
    var fill = o.bg === 'color' ? (o.color || '#f1efff') : '#ffffff', box = [0, 0, 1, 1], swap = o.bg !== 'keep' && pl.plain, part = 0;
    if (swap) {
      var mk = bgMask(before, pl.color); part = mk.part; box = mk.box;
      var layer = canvas(work.width, work.height), l = layer.getContext('2d');
      l.fillStyle = fill; l.fillRect(0, 0, layer.width, layer.height); l.globalCompositeOperation = 'destination-in'; l.drawImage(mk.mask, 0, 0);
      x.drawImage(layer, 0, 0);
    }
    var out = work;
    if (o.square) {
      out = canvas(side, side); var q = out.getContext('2d'); q.imageSmoothingQuality = 'high';
      if (swap) { // product centred, about 84% of the frame (Google asks for 75 to 90%)
        q.fillStyle = fill; q.fillRect(0, 0, side, side);
        var bw = box[2] * work.width, bh = box[3] * work.height, z = Math.min(side * 0.84 / Math.max(bw, bh), 1.6);
        // a product cut by the photo's edge stays on that edge, it never floats
        var bx = box[0] * work.width, by = box[1] * work.height, cutB = box[1] + box[3] > 0.988, cutT = box[1] < 0.012, cutR = box[0] + box[2] > 0.988, cutL = box[0] < 0.012;
        if (cutT && cutB) z = side / work.height; else if (cutL && cutR) z = side / work.width;
        var ox = cutL && !cutR ? 0 : cutR && !cutL ? side - work.width * z : side / 2 - (bx + bw / 2) * z, oy = cutB && !cutT ? side - work.height * z : cutT && !cutB ? 0 : side / 2 - (by + bh / 2) * z;
        q.drawImage(work, ox, oy, work.width * z, work.height * z);
      } else {
        if (o.bg !== 'keep') { q.fillStyle = fill; q.fillRect(0, 0, side, side); }
        else if (pl.near > 0.8) { var c0 = x.getImageData(2, 2, 1, 1).data; q.fillStyle = 'rgb(' + c0[0] + ',' + c0[1] + ',' + c0[2] + ')'; q.fillRect(0, 0, side, side); }
        else { var ec = edgeColor(work); q.fillStyle = ec; q.fillRect(0, 0, side, side); } // the light colour of the photo's own edges
        var rt = work.width / work.height, cz = o.bg === 'keep' && rt > 0.9 && rt < 1.11 ? Math.max(side / work.width, side / work.height) : 1; // almost square: fill the frame
        q.drawImage(work, (side - work.width * cz) / 2, (side - work.height * cz) / 2, work.width * cz, work.height * cz);
      }
    }
    return { canvas: out, before: before, plain: pl.plain, swapped: swap, part: part, m: m, w: iw, h: ih, small: Math.max(iw, ih) < MIN };
  };
  // a small fingerprint, so the same photo can be downloaded again with other choices
  function sign(img) {
    var c = canvas(16, 16), x = ctx(c); x.drawImage(img, 0, 0, 16, 16); var d = x.getImageData(0, 0, 16, 16).data, s = 0;
    for (var i = 0; i < d.length; i += 4) s = (s * 31 + ((d[i] >> 4) * 7 + (d[i + 1] >> 4) * 3 + (d[i + 2] >> 4))) >>> 0;
    return (img.naturalWidth || 0) + 'x' + (img.naturalHeight || 0) + '-' + s.toString(36);
  }
  JT.saveBlob = function (blob, name) {
    var a = h('a', { href: URL.createObjectURL(blob), download: name }); document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 60000);
  };
  // file input + drop zone; onFile(file)
  JT.dropImg = function (id, title, help, onFile) {
    var inp = h('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp', class: 'jt-sr-only jt-dropin', id: id });
    var zone = h('label', { class: 'jt-drop', for: id }, [h('span', { class: 'jt-drop__ic', html: JT.svg('upload'), 'aria-hidden': 'true' }), h('b', { text: title }), h('span', { class: 'jt-help', text: help })]);
    inp.addEventListener('change', function () { if (inp.files && inp.files[0]) onFile(inp.files[0]); inp.value = ''; });
    ['dragenter', 'dragover'].forEach(function (e) { zone.addEventListener(e, function (v) { v.preventDefault(); zone.classList.add('is-over'); }); });
    ['dragleave', 'drop'].forEach(function (e) { zone.addEventListener(e, function (v) { v.preventDefault(); zone.classList.remove('is-over'); }); });
    zone.addEventListener('drop', function (v) { var f = v.dataTransfer && v.dataTransfer.files[0]; if (f) onFile(f); });
    return h('div', {}, [inp, zone]);
  };
  JT.thumbs = function (label, onPick) {
    var row = h('div', { class: 'jt-ph__row' }), el = h('div', { class: 'jt-ph__th', hidden: true }, [h('p', { class: 'jt-lab', text: label }), row]);
    return { el: el, set: function (list) {
      row.innerHTML = ''; el.hidden = !list.length;
      list.forEach(function (u, i) { var b = h('button', { type: 'button', class: 'jt-ph__t', 'aria-label': T('photo.pick', { n: i + 1 }) }, [h('img', { src: u, alt: '', crossorigin: 'anonymous', loading: 'lazy' })]); b.addEventListener('click', function () { onPick(u, b); }); row.appendChild(b); });
    }, mark: function (b) { row.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); } };
  };

  /* Judy with her wand: body + arm (two layers of one picture, so the wand really moves). Always on the right of the photo, facing it. */
  JT.wiz = function (cls) {
    function im(n) { return h('img', { class: 'jt-wiz__' + n, src: JT.CFG.asset + 'judy-wand-' + n + '.webp', alt: '', loading: 'lazy', decoding: 'async', draggable: 'false' }); }
    var star = h('i', { class: 'jt-wiz__star' }), arm = h('span', { class: 'jt-wiz__arm' }, [im('a'), star]), el = h('span', { class: 'jt-wiz ' + cls, 'aria-hidden': 'true' }, [im('b'), arm]);
    return { el: el,
      wave: function () {
        var r = parseFloat(getComputedStyle(arm).rotate) || 0;
        arm.animate([{ rotate: r + 'deg' }, { rotate: (r - 13) + 'deg', offset: 0.24 }, { rotate: (r + 7) + 'deg', offset: 0.55 }, { rotate: r + 'deg' }], { duration: 1500, easing: 'cubic-bezier(.77,0,.175,1)' });
      },
      tip: function () { var b = star.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; } };
  };
  var STAR = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c1 6.2 4.8 10 11 11-6.2 1-10 4.8-11 11-1-6.2-4.8-10-11-11 6.2-1 10-4.8 11-11z"/></svg>';
  function sparks(box, from) {
    var b = box.getBoundingClientRect(), x0 = Math.max(0, Math.min(b.width, from.x - b.left)), y0 = Math.max(0, Math.min(b.height, from.y - b.top)), layer = h('div', { class: 'jt-sparks', 'aria-hidden': 'true' });
    for (var i = 0; i < 26; i++) {
      // even spread over the photo, nearest to the wand first
      var fx = ((i * 0.5698 + 0.5) % 1) * 0.94 + 0.03, fy = ((i * 0.7549 + 0.5) % 1) * 0.9 + 0.05, x = fx * b.width, y = fy * b.height, s = 14 + (i * 7) % 20;
      var el = h('span', { html: STAR });
      el.style.cssText = 'left:' + (x - s / 2) + 'px;top:' + (y - s / 2) + 'px;width:' + s + 'px;height:' + s + 'px;color:' + ['#f5b301', '#fff', '#b9a6ff', '#ffd86b'][i % 4];
      el.animate([{ transform: 'translate(' + (x0 - x) * 0.28 + 'px,' + (y0 - y) * 0.28 + 'px) scale(.5) rotate(0deg)', opacity: 0 }, { transform: 'translate(0,0) scale(1) rotate(60deg)', opacity: 1, offset: 0.4 }, { transform: 'translate(0,10px) scale(.6) rotate(110deg)', opacity: 0 }], { duration: 950, delay: 350 + (1 - fx) * 1050 + (i % 4) * 40, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' });
      layer.appendChild(el);
    }
    box.appendChild(layer); setTimeout(function () { layer.remove(); }, 2700);
  }

  JT.photoCard = function () {
    var api = { onPick: null }, img = null, sig = '', out = null, busy = false, o = { k: 0.65, bg: 'keep', color: '#f1efff', square: true };
    var st = h('p', { class: 'jt-help', role: 'status' });
    var th = JT.thumbs(T('photo.from'), function (u, b) { th.mark(b); open(u); });
    var drop = JT.dropImg('jt-ph-file', T('photo.drop'), T('photo.dropHelp'), function (f) {
      if (!/^image\/(png|jpe?g|webp)$/.test(f.type)) { st.textContent = T('photo.badFile'); return; }
      if (f.size > 20e6) { st.textContent = T('photo.big'); return; }
      th.mark(null); open(URL.createObjectURL(f));
    });
    var kSeg = JT.seg({ id: 'ph-k', label: T('photo.kQ'), value: 'mid', options: [['low', T('photo.k.low')], ['mid', T('photo.k.mid')], ['high', T('photo.k.high')]], onChange: function (v) { o.k = v === 'low' ? 0.35 : v === 'mid' ? 0.65 : 0.9; paint(); } });
    var bgSeg = JT.seg({ id: 'ph-bg', label: T('photo.bgQ'), value: 'keep', options: [['keep', T('photo.bg.keep')], ['white', T('photo.bg.white')], ['color', T('photo.bg.color')]], onChange: function (v) { o.bg = v; colWrap.hidden = v !== 'color'; paint(); } });
    var col = h('input', { type: 'color', class: 'jt-color', id: 'jt-ph-col', value: o.color });
    col.addEventListener('input', function () { o.color = col.value; clearTimeout(col.t); col.t = setTimeout(paint, 120); });
    var colWrap = h('div', { class: 'jt-role', hidden: true }, [h('label', { for: 'jt-ph-col', text: T('photo.colL') }), col]);
    var bgNote = h('p', { class: 'jt-help jt-ph__note' });
    var sqSeg = JT.seg({ id: 'ph-sq', label: T('photo.sqQ'), value: 'sq', options: [['sq', T('photo.sq.sq')], ['as', T('photo.sq.as')]], onChange: function (v) { o.square = v === 'sq'; paint(); } });
    var opts = h('div', { class: 'jt-ph__opts', hidden: true }, [kSeg.el, sqSeg.el, bgSeg.el, colWrap, bgNote]);

    // before / after: the «after» layer is clipped; a real range input carries the keyboard and the touch
    var bC = h('canvas', { 'aria-hidden': 'true' }), aC = h('canvas', { class: 'jt-cmp__a', 'aria-hidden': 'true' }), line = h('span', { class: 'jt-cmp__l', 'aria-hidden': 'true' });
    var rng = h('input', { type: 'range', class: 'jt-cmp__r', min: 0, max: 100, value: 50, 'aria-label': T('photo.cmp') });
    var cmp = h('div', { class: 'jt-cmp', dir: 'ltr' }, [bC, aC, line, h('span', { class: 'jt-cmp__t jt-cmp__t--b', text: T('photo.before') }), h('span', { class: 'jt-cmp__t jt-cmp__t--a', text: T('photo.after') }), rng]);
    function slide() { aC.style.clipPath = 'inset(0 0 0 ' + rng.value + '%)'; line.style.left = rng.value + '%'; }
    rng.addEventListener('input', slide); slide();
    var did = h('ul', { class: 'jt-ph__did' }), warn = h('p', { class: 'jt-ph__warn', hidden: true });
    var wiz = JT.wiz('jt-wiz--by'), stage = h('div', { class: 'jt-touch', dir: 'ltr' }, [cmp, h('div', { class: 'jt-touch__j' }, [did, wiz.el])]);
    var dl = JT.btn(T('photo.dl'), { icon: 'download' }), dlHelp = h('p', { class: 'jt-help', role: 'status' });
    var lock = h('div', { class: 'jt-ph__lock', hidden: true }, [h('p', { class: 'jt-warn', text: T('photo.lock') }), h('div', { class: 'jt-actions' }, [JT.btn(T('photo.lockWa'), { kind: 'wa', icon: 'wa', href: JT.waUrl(T('photo.waText')), blank: true })])]);
    var view = h('div', { class: 'jt-ph__view', hidden: true }, [stage, warn, h('div', { class: 'jt-actions' }, [dl]), dlHelp, lock]);
    var empty = h('div', { class: 'jt-ph__empty' }, [JT.wiz('jt-wiz--empty').el, h('p', { text: T('photo.empty') })]);
    var fix = JT.fixLine ? JT.fixLine('ugc') : null;

    api.el = h('section', { class: 'jt-card jt-ph', id: 'jt-photo', 'aria-label': T('photo.t') }, [
      h('h2', { class: 'jt-card__t', text: T('photo.t') }), h('p', { class: 'jt-fee__p', text: T('photo.p') }),
      h('div', { class: 'jt-ph__grid' }, [h('div', { class: 'jt-ph__in' }, [th.el, drop, st]), h('div', { class: 'jt-ph__out' }, [empty, view]), opts]),
      h('div', { class: 'jt-ph__more' }, [h('p', {}, [h('b', { text: T('photo.moreT') }), ' ' + T('photo.moreP')]), fix, h('div', { class: 'jt-actions' }, [JT.btn(T('photo.moreBtn'), { kind: 'soft', href: JT.prod('ugc') }), JT.btn(T('photo.lockWa'), { kind: 'wa', icon: 'wa', href: JT.waUrl(T('photo.waText')), blank: true })])])
    ]);

    function open(src) {
      st.textContent = T('photo.opening');
      JT.loadImg(src).then(function (im) {
        img = im; sig = sign(im); st.textContent = '';
        empty.hidden = true; view.hidden = false; opts.hidden = false;
        var pl = JT.photoPlain(im);
        bgSeg.el.querySelectorAll('input').forEach(function (x) { if (x.value !== 'keep') { x.disabled = !pl.plain; x.parentNode.classList.toggle('jt-seg__o--off', !pl.plain); } });
        if (!pl.plain) { o.bg = 'keep'; bgSeg.set('keep'); colWrap.hidden = true; }
        bgNote.textContent = T(pl.plain ? 'photo.bgYes' : 'photo.bgNo');
        paint(); touch();
        if (api.onPick) api.onPick(src);
      }, function () { st.textContent = T('photo.badFile'); });
    }
    function paint() {
      if (!img || busy) return; busy = true;
      requestAnimationFrame(function () {
        busy = false; out = JT.photoRender(img, o);
        var c = out.canvas; aC.width = bC.width = c.width; aC.height = bC.height = c.height;
        aC.getContext('2d').drawImage(c, 0, 0);
        var b = bC.getContext('2d'); b.fillStyle = '#fff'; b.fillRect(0, 0, c.width, c.height);
        var z = Math.min(c.width / out.before.width, c.height / out.before.height);
        b.drawImage(out.before, (c.width - out.before.width * z) / 2, (c.height - out.before.height * z) / 2, out.before.width * z, out.before.height * z);
        cmp.style.aspectRatio = c.width + ' / ' + c.height;
        did.innerHTML = '';
        // only what was really done, from the measured numbers
        var m = out.m, L = [];
        if (m.med < 118 || m.hi < 235) L.push('light');
        if (m.lo > 12) L.push('contrast');
        if (m.gain.some(function (g) { return Math.abs(g - 1) > 0.015; })) L.push('cast');
        L.push('sharp'); if (out.swapped) L.push('bg'); if (o.square) L.push('square');
        L.forEach(function (k) { did.appendChild(h('li', {}, [h('span', { class: 'jt-ic', html: JT.svg('check'), 'aria-hidden': 'true' }), T('photo.did.' + k)])); });
        warn.hidden = !out.small; warn.textContent = out.small ? T('photo.small', { w: out.w, h: out.h }) : '';
        dlHelp.textContent = T('photo.size', { w: c.width, h: c.height });
        var used = (JT.store.get('photo') || {}).sig; lock.hidden = !(used && used !== sig); dl.hidden = !lock.hidden;
      });
    }
    // the one show moment: a new photo opens as it was, Judy's wand passes over it, then the slider rests in the middle.
    // Any touch or key on the slider stops it. No show with reduced motion.
    var show = 0, io = null;
    function stop() { show++; if (io) { io.disconnect(); io = null; } }
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (e) { rng.addEventListener(e, stop, { passive: true }); });
    function put(v) { rng.value = v; slide(); }
    function touch() {
      stop();
      if (matchMedia('(prefers-reduced-motion: reduce)').matches || !window.IntersectionObserver || !cmp.animate) { put(50); return; }
      put(100);
      io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); io = null; play(); } }, { threshold: 0.35 });
      io.observe(cmp);
    }
    function ease(x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
    function play() {
      var me = ++show, t0 = 0;
      wiz.wave(); sparks(cmp, wiz.tip());
      requestAnimationFrame(function step(now) {
        if (me !== show) return;
        if (!t0) t0 = now;
        var t = now - t0;
        if (t < 420) put(100); else if (t < 1620) put(100 - 100 * ease((t - 420) / 1200)); else if (t < 2300) put(0); else if (t < 3000) put(50 * ease((t - 2300) / 700));
        else { put(50); return; }
        requestAnimationFrame(step);
      });
    }
    dl.addEventListener('click', function () {
      if (!out) return;
      out.canvas.toBlob(function (b) {
        if (!b) { dlHelp.textContent = T('photo.fail'); return; }
        JT.store.set('photo', { sig: sig, at: Date.now() });
        JT.saveBlob(b, 'judy-product-photo.jpg');
        dlHelp.textContent = T('photo.done', { kb: Math.round(b.size / 1024) }); JT.announce(dlHelp.textContent);
      }, 'image/jpeg', 0.9);
    });
    api.setProduct = function (list) { th.set(list); };
    return api;
  };
})();

}

/* ---- src/tools/clip.js ---- */
if (!window.JT_F["src/tools/clip.js"]) { window.JT_F["src/tools/clip.js"] = 1;
/* فيديو بسيط لمنتجك: 6 seconds, 1080x1920, no sound. Made on the visitor's device.
   1) WebCodecs H.264 + mp4-muxer (MIT, 32 KB, loaded only on click): a real MP4, frame by frame.
   2) MediaRecorder on the canvas (mp4 when the browser can, else webm).
   3) neither, or the finished file does not open: a WhatsApp button, said plainly. */
(function () {
  var JT = window.JT, h = JT.h, T = JT.T;
  var W = 1080, H = 1920, FPS = 30, DUR = 6, MUX = 'https://cdn.jsdelivr.net/npm/mp4-muxer@5.2.2/build/mp4-muxer.min.js';
  var FONT = 'Almarai, "Segoe UI", Tahoma, Arial, sans-serif';

  /* ---------- drawing (t in seconds) ---------- */
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function out(t, from, dur) { var k = clamp((t - from) / dur); return 1 - Math.pow(1 - k, 4); }
  function rr(x, a, b, w, hh, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + hh, r); x.arcTo(a + w, b + hh, a, b + hh, r); x.arcTo(a, b + hh, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }
  function rgb(hx) { var n = parseInt(hx.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mix(a, b, t) { return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(a[i] + (b[i] - a[i]) * t); }).join(',') + ')'; }
  function lum(c) { var a = c.map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]; }
  function wrap(x, text, max, lines) {
    var ws = String(text).trim().split(/\s+/), L = [], cur = '';
    ws.forEach(function (w) { var t = cur ? cur + ' ' + w : w; if (x.measureText(t).width <= max || !cur) cur = t; else { L.push(cur); cur = w; } });
    if (cur) L.push(cur);
    if (L.length > lines) { L = L.slice(0, lines); while (L[lines - 1].indexOf(' ') > 0 && x.measureText(L[lines - 1] + '…').width > max) L[lines - 1] = L[lines - 1].replace(/\s+\S+$/, ''); L[lines - 1] += '…'; }
    return L;
  }
  function fitFont(x, weight, size, text, max, min) { do { x.font = weight + ' ' + size + 'px ' + FONT; if (x.measureText(text).width <= max) break; size -= 4; } while (size > min); return size; }
  JT.clipDraw = function (x, t, s) {
    var c = rgb(s.color), white = [255, 255, 255], dark = lum(c) < 0.42, top = mix(c, dark ? white : [0, 0, 0], dark ? 0.1 : 0.02), bot = mix(c, [0, 0, 0], dark ? 0.28 : 0.08);
    var ink = dark ? '#ffffff' : '#191744', soft = dark ? 'rgba(255,255,255,.78)' : 'rgba(25,23,68,.72)';
    x.save(); x.direction = s.rtl ? 'rtl' : 'ltr'; x.textAlign = 'center'; x.textBaseline = 'alphabetic';
    var g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, top); g.addColorStop(1, bot); x.fillStyle = g; x.fillRect(0, 0, W, H);
    var tall = s.photos[0] && (s.photos[0].naturalWidth || s.photos[0].width) / (s.photos[0].naturalHeight || s.photos[0].height) < 0.85;
    var sy = tall ? 168 : 236;
    // store name
    var e0 = out(t, 0.1, 0.6);
    if (s.store) { x.globalAlpha = e0; x.fillStyle = soft; fitFont(x, 700, 50, s.store, 860, 30); x.fillText(s.store, W / 2, sy - (1 - e0) * 24); x.globalAlpha = 1; }
    // photo card
    var e1 = out(t, 0, 0.8), P = tall ? 860 : 900, Q = tall ? 1060 : 900, px = (W - P) / 2, py = tall ? 226 : 296, sc = 0.94 + 0.06 * e1;
    x.save(); x.translate(W / 2, py + Q / 2); x.scale(sc, sc); x.translate(-W / 2, -(py + Q / 2)); x.globalAlpha = 0.25 + 0.75 * e1;
    x.save(); x.shadowColor = 'rgba(10,8,40,.34)'; x.shadowBlur = 70; x.shadowOffsetY = 34; x.fillStyle = '#fff'; rr(x, px, py, P, Q, 56); x.fill(); x.restore();
    rr(x, px, py, P, Q, 56); x.clip(); x.fillStyle = '#fff'; x.fillRect(px, py, P, Q);
    var n = s.photos.length, seg = DUR / Math.max(1, n);
    for (var i = 0; i < n; i++) {
      var st = i * seg, inn = i === 0 ? 1 : clamp((t - st + 0.25) / 0.5); if (inn <= 0 || (i < n - 1 && t > st + seg + 0.3)) continue;
      var im = s.photos[i], iw = im.naturalWidth || im.width, ih = im.naturalHeight || im.height, z0 = Math.max(P / iw, Q / ih), fit = Math.min(P / iw, Q / ih);
      var part = z0 / fit > 1.35; if (part) z0 = Math.max(fit, z0 * 0.82); // very tall or wide photos keep more of the product, on a soft copy of themselves
      var pr = clamp((t - st + 0.25) / (seg + 0.5)), z = z0 * (1.01 + 0.09 * (i % 2 ? 1 - pr : pr)), w = iw * z, hh = ih * z;
      x.globalAlpha = (0.25 + 0.75 * e1) * inn; if (part && JT.softCopy) { im.jtSoft = im.jtSoft || JT.softCopy(im, 270, 270 * ih / iw, 20); var bz = Math.max(P / im.jtSoft.width, Q / im.jtSoft.height) * 1.1; x.drawImage(im.jtSoft, px + (P - im.jtSoft.width * bz) / 2, py + (Q - im.jtSoft.height * bz) / 2, im.jtSoft.width * bz, im.jtSoft.height * bz); }
      x.drawImage(im, px + (P - w) / 2, py + (Q - hh) / 2 + (hh > Q ? (hh - Q) * (0.2 - 0.12 * pr) : 0), w, hh);
    }
    x.restore();
    // name
    var e2 = out(t, 0.5, 0.7), y = tall ? 1392 : 1310; x.globalAlpha = e2; x.fillStyle = ink; x.font = '800 68px ' + FONT;
    var L = wrap(x, s.name || '', 920, 2); L.forEach(function (l, k) { x.fillText(l, W / 2, y + k * 88 + (1 - e2) * 34); }); y += Math.max(1, L.length) * 88 + 22; x.globalAlpha = 1;
    // price
    if (s.price) {
      var e3 = out(t, 1, 0.6); x.globalAlpha = e3; x.font = '800 60px ' + FONT;
      var pw = x.measureText(s.price).width + 92, ph = 108, wasW = 0; if (s.was) { x.font = '700 44px ' + FONT; wasW = x.measureText(s.was).width + 34; }
      var tot = pw + wasW, dir = s.rtl ? -1 : 1, cx = W / 2 - dir * (tot / 2 - pw / 2);
      x.save(); x.translate(cx, y + 24); x.scale(0.9 + 0.1 * e3, 0.9 + 0.1 * e3); x.fillStyle = '#f5b301'; rr(x, -pw / 2, -ph / 2, pw, ph, 54); x.fill(); x.fillStyle = '#191744'; x.font = '800 60px ' + FONT; x.fillText(s.price, 0, 21); x.restore();
      if (s.was) { var wx = cx + dir * (pw / 2 + wasW / 2); x.fillStyle = soft; x.font = '700 44px ' + FONT; x.fillText(s.was, wx, y + 40); var mw = x.measureText(s.was).width; x.fillRect(wx - mw / 2 - 4, y + 23, mw + 8, 4); }
      x.globalAlpha = 1; y += 128;
    }
    // call to action
    if (s.cta) {
      var e4 = out(t, 1.5, 0.6), beat = t > 4.2 ? Math.sin((t - 4.2) * 5.2) * 0.018 : 0; x.globalAlpha = e4; fitFont(x, 800, 46, s.cta, 760, 30);
      var cw = x.measureText(s.cta).width + 110; x.save(); x.translate(W / 2, y + 44 + (1 - e4) * 24); x.scale(1 + beat, 1 + beat); x.fillStyle = dark ? '#ffffff' : '#191744'; rr(x, -cw / 2, -52, cw, 104, 52); x.fill(); x.fillStyle = dark ? '#191744' : '#ffffff'; x.fillText(s.cta, 0, 16); x.restore(); x.globalAlpha = 1;
    }
    // her mark, small
    x.globalAlpha = 0.55; x.fillStyle = ink; x.font = '700 28px ' + FONT; x.fillText(s.mark, W / 2, 1866); x.restore();
  };

  /* ---------- making the file ---------- */
  var muxing;
  function loadMux() {
    if (window.Mp4Muxer) return Promise.resolve();
    muxing = muxing || new Promise(function (ok, bad) { var sc = h('script', { src: MUX, crossorigin: 'anonymous' }); sc.onload = ok; sc.onerror = function () { muxing = null; bad(new Error('mux')); }; document.head.appendChild(sc); });
    return muxing;
  }
  function pickConfig() {
    if (!window.VideoEncoder || !window.VideoFrame) return Promise.resolve(null);
    var list = ['avc1.640028', 'avc1.4d0028', 'avc1.42e028', 'avc1.64002a'], i = 0;
    function next() {
      if (i >= list.length) return null;
      var cfg = { codec: list[i++], width: W, height: H, bitrate: 6e6, framerate: FPS, avc: { format: 'avc' } };
      return VideoEncoder.isConfigSupported(cfg).then(function (r) { return r.supported ? cfg : next(); }, next);
    }
    return Promise.resolve(next());
  }
  function byCodecs(cv, draw, cfg, prog) {
    return loadMux().then(function () {
      return new Promise(function (ok, bad) {
        var mx = new window.Mp4Muxer.Muxer({ target: new window.Mp4Muxer.ArrayBufferTarget(), video: { codec: 'avc', width: W, height: H, frameRate: FPS }, fastStart: 'in-memory' });
        var enc = new VideoEncoder({ output: function (c, m) { mx.addVideoChunk(c, m); }, error: bad }), n = FPS * DUR, i = 0;
        enc.configure(cfg);
        (function step() {
          try {
            while (i < n && enc.encodeQueueSize < 5) {
              draw(i / FPS); var f = new VideoFrame(cv, { timestamp: Math.round(i * 1e6 / FPS), duration: Math.round(1e6 / FPS) });
              enc.encode(f, { keyFrame: i % FPS === 0 }); f.close(); i++;
              if (i % 6 === 0) break;
            }
          } catch (e) { return bad(e); }
          prog(i / n);
          if (i < n) return setTimeout(step, 4);
          enc.flush().then(function () { mx.finalize(); enc.close(); ok(new Blob([mx.target.buffer], { type: 'video/mp4' })); }, bad);
        })();
      });
    });
  }
  function recType() { return window.MediaRecorder && HTMLCanvasElement.prototype.captureStream ? ['video/mp4;codecs=avc1.640028', 'video/mp4', 'video/webm;codecs=vp9', 'video/webm'].filter(function (t) { return MediaRecorder.isTypeSupported(t); })[0] : null; }
  function byRecorder(cv, draw, type, prog) {
    return new Promise(function (ok, bad) {
      var rec, parts = [], t0; draw(0);
      try { rec = new MediaRecorder(cv.captureStream(FPS), { mimeType: type, videoBitsPerSecond: 6e6 }); } catch (e) { return bad(e); }
      rec.ondataavailable = function (e) { if (e.data && e.data.size) parts.push(e.data); };
      rec.onerror = function () { bad(new Error('rec')); };
      rec.onstop = function () { ok(new Blob(parts, { type: type.split(';')[0] })); };
      rec.start(250); t0 = performance.now();
      (function loop() { var t = (performance.now() - t0) / 1000; draw(Math.min(t, DUR - 0.01)); prog(t / DUR); if (t < DUR) requestAnimationFrame(loop); else rec.stop(); })();
    });
  }
  // the file must open and show a picture before anyone gets it
  function opens(blob) {
    return new Promise(function (ok) {
      if (blob.size < 20000) return ok(false);
      var v = document.createElement('video'); v.muted = true; v.playsInline = true; v.preload = 'auto'; var u = URL.createObjectURL(blob), t = setTimeout(function () { end(false); }, 9000);
      function end(r) { clearTimeout(t); v.onloadeddata = v.onerror = null; URL.revokeObjectURL(u); ok(r); }
      v.onloadeddata = function () { end(v.videoWidth === W && (!isFinite(v.duration) || v.duration > DUR - 1.2)); }; v.onerror = function () { end(false); };
      v.src = u; v.load();
    });
  }
  JT.clipMake = function (cv, draw, prog) {
    return pickConfig().then(function (cfg) {
      var go = cfg ? byCodecs(cv, draw, cfg, prog).then(function (b) { return opens(b).then(function (y) { if (!y) throw new Error('file'); return { blob: b, how: 'codecs' }; }); }) : Promise.reject(new Error('none'));
      return go.catch(function () {
        var type = recType(); if (!type) throw new Error('none');
        return byRecorder(cv, draw, type, prog).then(function (b) { return opens(b).then(function (y) { if (!y) throw new Error('file'); return { blob: b, how: 'recorder' }; }); });
      });
    });
  };

  /* ---------- card ---------- */
  JT.clipCard = function () {
    var api = {}, s = { name: '', price: '', was: '', store: '', cta: T('clip.ctas')[0], color: '#5b47d6', photos: [], rtl: JT.lang === 'ar', mark: T('clip.mark') }, urls = [], all = [], blob = null, raf = 0, making = false, seen = true;
    var st = h('p', { class: 'jt-help', role: 'status' });
    var th = JT.thumbs(T('clip.from'), function (u) { var k = urls.indexOf(u); if (k >= 0) urls.splice(k, 1); else { urls.push(u); if (urls.length > 3) urls.shift(); } marks(); load(); });
    var drop = JT.dropImg('jt-cl-file', T('clip.drop'), T('clip.dropHelp'), function (f) {
      if (!/^image\/(png|jpe?g|webp)$/.test(f.type) || f.size > 20e6) { st.textContent = T('photo.badFile'); return; }
      api.addPhoto(URL.createObjectURL(f));
    });
    var nameF = JT.textField({ id: 'cl-name', label: T('clip.name'), maxlength: 70, wide: true, onInput: edit });
    var priceF = JT.field({ id: 'cl-price', label: T('clip.price'), unit: T('common.sar'), optional: true, min: 0, onInput: edit });
    var storeF = JT.textField({ id: 'cl-store', label: T('clip.store'), maxlength: 34, onInput: edit });
    var ctaSeg = JT.seg({ id: 'cl-cta', label: T('clip.ctaQ'), value: '0', wide: true, options: T('clip.ctas').map(function (c, i) { return [String(i), c]; }), onChange: function (v) { s.cta = T('clip.ctas')[+v]; edit(); } });
    var cols = h('div', { class: 'jt-cl__cols', role: 'group', 'aria-label': T('clip.colL') });
    var own = h('input', { type: 'color', class: 'jt-color', id: 'jt-cl-col', value: s.color, 'aria-label': T('clip.colOwn') });
    own.addEventListener('input', function () { color(own.value); });
    function color(c) { s.color = c; own.value = c; cols.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-c') === c ? 'true' : 'false'); }); edit(); }
    function showCols(list) {
      cols.innerHTML = ''; list.forEach(function (c) { var b = h('button', { type: 'button', class: 'jt-cl__c', 'data-c': c, style: 'background:' + c, 'aria-label': T('clip.colL') + ' ' + c }); b.addEventListener('click', function () { color(c); }); cols.appendChild(b); });
      cols.appendChild(own); color(list[0]);
    }
    var cv = h('canvas', { class: 'jt-cl__cv', width: W, height: H, role: 'img', 'aria-label': T('clip.pvAlt') }), x = cv.getContext('2d');
    var vid = h('video', { class: 'jt-cl__v', controls: true, muted: true, loop: true, playsinline: true, hidden: true });
    var make = JT.btn(T('clip.make'), { icon: 'video' }); make.disabled = true;
    var dl = JT.btn(T('clip.dl'), { icon: 'download' }); dl.hidden = true;
    var share = JT.btn(T('clip.share'), { kind: 'soft', icon: 'ext' }); share.hidden = true;
    var bar = h('div', { class: 'jt-cl__bar', hidden: true }, [h('span')]);
    var msg = h('p', { class: 'jt-help', role: 'status' });
    var fail = h('div', { hidden: true }, [h('p', { class: 'jt-warn', text: T('clip.fail') }), h('div', { class: 'jt-actions' }, [JT.btn(T('clip.failWa'), { kind: 'wa', icon: 'wa', href: JT.waUrl(T('clip.waText')), blank: true })])]);
    var holder = h('div', { class: 'jt-cl__ph' }, [cv, vid, h('div', { class: 'jt-cl__empty' }, [h('span', { html: JT.svg('video'), 'aria-hidden': 'true' }), h('p', { text: T('clip.empty') })])]);

    api.el = h('section', { class: 'jt-card jt-ph jt-cl', id: 'jt-clip', 'aria-label': T('clip.t') }, [
      h('h2', { class: 'jt-card__t', text: T('clip.t') }), h('p', { class: 'jt-fee__p', text: T('clip.p') }),
      h('div', { class: 'jt-cl__grid' }, [
        h('div', { class: 'jt-ph__in' }, [th.el, drop, st, h('div', { class: 'jt-fields' }, [nameF.el, priceF.el, storeF.el, ctaSeg.el]), h('div', {}, [h('p', { class: 'jt-lab', text: T('clip.colL') }), cols]), h('div', { class: 'jt-actions' }, [make, dl, share]), bar, msg, fail]),
        h('div', { class: 'jt-cl__side' }, [holder])
      ]),
      h('div', { class: 'jt-ph__more' }, [h('p', {}, [h('b', { text: T('clip.moreT') }), ' ' + T('clip.moreP')]), JT.fixLine ? JT.fixLine('motion') : null, h('div', { class: 'jt-actions' }, [JT.btn(T('clip.moreBtn'), { kind: 'soft', href: JT.prod('motion') })])])
    ]);

    function reset() { blob = null; vid.hidden = true; cv.hidden = false; if (vid.src) { URL.revokeObjectURL(vid.src); vid.removeAttribute('src'); } dl.hidden = share.hidden = true; make.hidden = false; msg.textContent = ''; fail.hidden = true; }
    function edit() {
      if (making) return; if (blob) reset();
      s.name = nameF.get(); s.store = storeF.get(); var p = JT.parse(priceF.raw()); s.price = isFinite(p) && p > 0 ? JT.money(p, 2) : ''; s.was = api.was > p && p === api.price ? JT.num(api.was, 2) : '';
      paint();
    }
    function marks() { th.el.querySelectorAll('button').forEach(function (b) { var i = b.querySelector('img'); b.setAttribute('aria-pressed', urls.indexOf(i.getAttribute('src')) >= 0 ? 'true' : 'false'); }); }
    var turn = 0;
    function load() {
      var me = ++turn, list = urls.slice();
      return Promise.all(list.map(function (u) { return JT.loadImg(u).catch(function () { return null; }); })).then(function (a) {
        if (me !== turn) return; s.photos = a.filter(Boolean); if (blob) reset();
        var on = s.photos.length > 0; make.disabled = !on; holder.classList.toggle('jt-cl__ph--on', on);
        st.textContent = a.length && !on ? T('photo.badFile') : '';
        if (on) { try { var pal = JT.colorPalette(s.photos[0]).map(function (c) { return '#' + c.c.map(function (v) { return ('0' + Math.round(v).toString(16)).slice(-2); }).join(''); }); showCols(['#5b47d6', '#191744'].concat(pal.filter(function (c) { var q = rgb(c), mx = Math.max.apply(0, q), mn = Math.min.apply(0, q); return mx > 40 && mn < 235; }).slice(0, 3))); } catch (e) { showCols(['#5b47d6', '#191744', '#0f7a55']); } }
        play();
      });
    }
    function paint() { if (s.photos.length && !making && !raf) JT.clipDraw(x, DUR - 1, s); }
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function play() {
      cancelAnimationFrame(raf); raf = 0; if (!s.photos.length || making || blob) return;
      if (still) return paint();
      var t0 = performance.now(), lastT = 0;
      (function loop(n) { if (making || blob || !document.body.contains(cv)) { raf = 0; return; } raf = requestAnimationFrame(loop); if (!seen || n - lastT < 32) return; lastT = n; JT.clipDraw(x, ((n - t0) / 1000) % (DUR + 0.8) > DUR ? DUR - 0.01 : ((n - t0) / 1000) % (DUR + 0.8), s); })(t0);
    }
    if (window.IntersectionObserver) new IntersectionObserver(function (e) { seen = e[0].isIntersecting; }).observe(cv);
    function fonts() { return document.fonts && document.fonts.load ? Promise.all([700, 800].map(function (w) { return document.fonts.load(w + ' 60px Almarai', 'منتج A1'); })).catch(function () { }) : Promise.resolve(); }

    make.addEventListener('click', function () {
      if (making || !s.photos.length) return; making = true; cancelAnimationFrame(raf); raf = 0;
      make.disabled = true; bar.hidden = false; fail.hidden = true; msg.textContent = T('clip.busy'); JT.announce(T('clip.busy'));
      fonts().then(function () { return JT.clipMake(cv, function (t) { JT.clipDraw(x, t, s); }, function (p) { bar.firstChild.style.transform = 'scaleX(' + Math.min(1, p) + ')'; }); }).then(function (r) {
        blob = r.blob; var ext = /mp4/.test(blob.type) ? 'mp4' : 'webm'; api.last = { how: r.how, ext: ext, size: blob.size };
        vid.src = URL.createObjectURL(blob); vid.hidden = false; cv.hidden = true; var pl = vid.play(); if (pl && pl.catch) pl.catch(function () { });
        make.hidden = true; dl.hidden = false;
        var f; try { f = new File([blob], 'judy-product-video.' + ext, { type: blob.type }); } catch (e) { }
        share.hidden = !(f && navigator.canShare && navigator.canShare({ files: [f] }));
        share.onclick = function () { navigator.share({ files: [f] }).catch(function () { }); };
        msg.textContent = T(ext === 'mp4' ? 'clip.done' : 'clip.doneWebm', { mb: JT.num(blob.size / 1048576, 1) }); JT.announce(msg.textContent);
      }, function () { fail.hidden = false; msg.textContent = ''; JT.announce(T('clip.fail')); }).then(function () { making = false; make.disabled = false; bar.hidden = true; bar.firstChild.style.transform = 'scaleX(0)'; if (!blob) play(); });
    });
    dl.addEventListener('click', function () { if (blob) JT.saveBlob(blob, 'judy-product-video.' + (/mp4/.test(blob.type) ? 'mp4' : 'webm')); });

    api.addPhoto = function (u) { if (all.indexOf(u) < 0) { all.push(u); th.set(all); } if (urls.indexOf(u) < 0) { urls.push(u); if (urls.length > 3) urls.shift(); } marks(); load(); };
    api.setProduct = function (p) {
      api.price = p.price; api.was = p.was; nameF.set(p.name || ''); priceF.set(p.price > 0 ? String(p.price) : ''); storeF.set(p.store || (/\//.test(p.host || '') ? '' : p.host || '')); storeF.input.placeholder = p.host || '';
      all = p.photos.slice(); th.set(all); urls = all.slice(0, 3); marks(); fonts().then(load).then(edit);
    };
    showCols(['#5b47d6', '#191744', '#0f7a55', '#b42318']);
    JT.clipApi = api;
    return api;
  };
})();

}

/* ---- src/tools/product.js ---- */
if (!window.JT_F["src/tools/product.js"]) { window.JT_F["src/tools/product.js"] = 1;
/* لمسة جودي لمنتجك: reads one public Salla product (Store API, open CORS, no key) and says what a shopper can
   and cannot learn from the page. Only facts that are in the data; every rule's source is listed in product.srcs.
   The photo part is photo.js (JT.photoCard), the video part is clip.js (JT.clipCard). */
(function () {
  var JT = window.JT, h = JT.h, T = JT.T;
  var API = 'https://api.salla.dev/store/v1/products/';

  /* ---------- link ---------- */
  function dig(v) { return v.replace(/[٠-٩]/g, function (d) { return d.charCodeAt(0) - 0x0660; }); }
  // -> {store, id} or {err: 'empty'|'url'|'dash'|'short'|'noid'}
  JT.productLink = function (v) {
    v = (v || '').trim(); if (!v) return { err: 'empty' };
    var m = /https?:\/\/\S+/i.exec(v); if (m) v = m[0]; // people paste «name + link» from the share sheet
    if (!/^https?:\/\//i.test(v)) v = 'https://' + v;
    var u; try { u = new URL(v); } catch (e) { return { err: 'url' }; }
    var host = u.hostname.toLowerCase().replace(/^www\./, '');
    if (!/\./.test(host)) return { err: 'url' };
    if (host === 's.salla.sa') return { err: 'dash' };
    if (/^(mtjr\.(at|co|shop|me|site)|bit\.ly|t\.co|tinyurl\.com|wa\.me)$/.test(host)) return { err: 'short' };
    var path; try { path = decodeURIComponent(u.pathname); } catch (e) { path = u.pathname; }
    var segs = dig(path).split('/').filter(Boolean), id = null;
    segs.forEach(function (s) { var x = /^p(\d{5,})$/i.exec(s); if (x) id = x[1]; });
    var store = host;
    if (host === 'salla.sa' || host === 'demostore.salla.sa') {
      var rest = segs.filter(function (s) { return !/^(ar|en)$/i.test(s); });
      store = rest[0]; if (!store) return { err: 'noid' };
      if (!/^p\d+$/i.test(store) && !id) return { err: 'noid' };
    }
    if (!id) return { err: 'noid' };
    return { store: store, id: id };
  };

  /* ---------- rules: facts in, states out (no page needed, tested in tests/product.mjs) ---------- */
  function textOf(html) {
    return String(html || '').replace(/<(style|script)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  }
  JT.productText = textOf;
  function fileLike(a) { // «bebo-kids-bed-main webp», «IMG_2231», «exec-f618...», «صورة webp»
    a = String(a || '').trim();
    return !a || /\b(webp|jpe?g|png|gif|heic)\b/i.test(a) || /^(img|dsc|image|photo|screenshot|whatsapp|exec)[\W_\d]/i.test(a) || /[0-9a-f]{8}-[0-9a-f]{4}/i.test(a) || /^[\W\d_]+$/.test(a.replace(/[؀-ۿ]/g, 'x'));
  }
  JT.productFileLike = fileLike;
  function words(s) { return (String(s || '').match(/[A-Za-z؀-ۿ]{2,}/g) || []); }
  function sizeOpt(o) { return /مقاس|قياس|size/i.test(o.name || ''); }

  // q = customer questions, g = what Google reads, opt = extras. st: good | bad | tip
  JT.productRules = function (p, px) {
    var q = [], g = [], text = textOf(p.description), html = String(p.description || '');
    var imgs = (p.images || []), pics = imgs.filter(function (i) { return i.type !== 'video' && !i.video_url && i.url; });
    var vids = imgs.filter(function (i) { return i.type === 'video' || i.video_url; });
    var service = p.type === 'service' || p.type === 'digital' || p.type === 'donating' || p.type === 'booking';
    function add(list, id, st, v, k) { list.push({ id: id, st: st, v: v || {}, k: k || st }); }

    // photos
    var n = pics.length || (p.image && p.image.url ? 1 : 0);
    if (n === 0) add(q, 'photos', 'bad', {}, 'none');
    else if (n === 1) add(q, 'photos', 'bad', {}, 'one');
    else add(q, 'photos', 'good', { n: n });
    // main photo size, as the shopper gets it
    if (px && px.w && px.h) add(q, 'size', Math.min(px.w, px.h) < 500 ? 'bad' : 'good', { w: px.w, h: px.h });
    if (p.type !== 'donating') add(q, 'video', vids.length ? 'good' : 'tip');
    // name
    var ws = words(p.name), name = String(p.name || '').trim();
    if (!ws.some(function (w) { return w.length > 2; })) add(q, 'name', 'bad', { name: name }, 'code');
    else if (ws.length < 2) add(q, 'name', 'tip', { name: name }, 'short');
    else if (name.length > 70) add(q, 'name', 'tip', { n: name.length }, 'long');
    else add(q, 'name', 'good', {});
    // price
    var price = Number(p.price), was = Number(p.regular_price);
    if (price > 0) add(q, 'price', 'good', { save: was - price, was: was }, p.is_on_sale && was > price ? 'sale' : 'good');
    // description
    var dImgs = (html.match(/<img\b/gi) || []).length;
    if (!text.length && !dImgs) add(q, 'desc', 'bad', {}, 'none');
    else if (text.length < 160) add(q, 'desc', 'bad', { n: text.length }, dImgs ? 'img' : 'short');
    else add(q, 'desc', 'good', {});
    if (text.length >= 300) add(q, 'shape', /<(li|h[1-6]|table)\b/i.test(html) || (text.match(/[•●▪✔✅✓]/g) || []).length > 1 || (html.match(/<(p|div)[^>]*>\s*(<[^>]+>\s*)*[-–—*]\s/gi) || []).length > 1 ? 'good' : 'tip');
    // sizes
    var so = (p.options || []).filter(sizeOpt);
    if (so.length && !service) {
      var vals = so.map(function (o) { return (o.details || []).map(function (d) { return d.name; }).join(' '); }).join(' ');
      var told = p.has_size_guide || /جدول\s*(ال)?(مقاس|قياس)|size (chart|guide)/i.test(text) || /\d\s*(سم|cm|م\b|متر|مل|جم|كجم|إنش|انش|inch|ml|kg)/i.test(dig(text + ' ' + vals));
      add(q, 'sizes', told ? 'good' : 'bad');
    }
    // options that are sold out, stock
    var out = [], all = 0;
    (p.options || []).forEach(function (o) { (o.details || []).forEach(function (d) { all++; if (d.is_out) out.push(d.name); }); });
    if (p.is_out_of_stock || p.is_available === false || p.status === 'out') add(q, 'stock', 'bad');
    else if (out.length && out.length === all) add(q, 'stock', 'bad');
    else if (out.length) add(q, 'stock', 'tip', { list: out.slice(0, 4).join('، ') }, 'some');
    else add(q, 'stock', 'good');
    // reviews
    var r = p.rating;
    if (p.type !== 'donating') add(q, 'reviews', r && r.count > 0 ? 'good' : 'tip', r && r.count > 0 ? { n: r.count, s: r.stars } : {});

    // Google
    var bad = pics.filter(function (i) { return fileLike(i.alt); }).length;
    if (pics.length) add(g, 'alt', bad ? 'tip' : 'good', { n: bad, all: pics.length });
    if (p.type === 'product') add(g, 'gtin', p.gtin ? 'good' : 'tip');
    if (!p.subtitle) add(g, 'sub', 'tip'); else add(g, 'sub', 'good');

    return { q: q, g: g, ok: q.filter(function (x) { return x.st === 'good'; }).length, all: q.length, pics: pics, vids: vids, text: text };
  };
  // the first thing to fix decides the service
  var SVC = { photos: 'ugc', size: 'ugc', name: 'words', desc: 'words', shape: 'words', video: 'motion', sizes: 'review', stock: 'review', reviews: 'review' };
  JT.productTop = function (r) {
    var b = r.q.filter(function (x) { return x.st === 'bad'; })[0] || r.q.filter(function (x) { return x.st === 'tip'; })[0];
    return b ? { id: b.id, svc: SVC[b.id] || 'review' } : null;
  };

  function getProduct(l) {
    var q = '/details?with[]=images&with[]=options&with[]=rating&with[]=brand';
    return fetch(API + l.id + q, { headers: { 'Store-Identifier': l.store, 'Accept-Language': JT.lang } }).then(function (r) {
      if (r.ok) return r.json().then(function (j) { if (!j.data || !j.data.id) throw { code: 404 }; return j.data; });
      throw { code: r.status };
    }, function () { throw { code: 0 }; });
  }
  function measure(url) {
    return new Promise(function (ok) {
      var im = new Image(); im.crossOrigin = 'anonymous';
      var t = setTimeout(function () { ok(null); }, 9000);
      im.onload = function () { clearTimeout(t); ok({ w: im.naturalWidth, h: im.naturalHeight, img: im }); };
      im.onerror = function () { clearTimeout(t); ok(null); };
      im.src = url;
    });
  }
  function hostOf(p) { try { var u = new URL(p.url); return u.hostname.replace(/^www\./, '') + (u.hostname === 'salla.sa' ? '/' + decodeURIComponent(u.pathname.split('/')[1]) : ''); } catch (e) { return ''; } }

  JT.tools.product = {
    noShare: true, noLead: true,
    facts: true,
    preview: function () {
      return h('div', { class: 'jt-pv__ask' }, T('product.pv').map(function (x, i) { return h('p', { class: i ? 'jt-pv__k' : '' }, [h('span', { class: 'jt-ic', html: JT.svg(i ? 'check' : 'info'), 'aria-hidden': 'true' }), x]); }));
    },
    render: function (el) {
      var urlIn = h('input', { id: 'jt-pd-url', class: 'jt-in jt-ck__in', type: 'text', inputmode: 'url', dir: 'ltr', autocomplete: 'off', placeholder: 'mystore.com/…/p123456789', 'aria-describedby': 'jt-pd-e jt-pd-h' });
      var last = JT.store.get('product') || {}; if (last.url) urlIn.value = last.url;
      var err = h('p', { class: 'jt-err', id: 'jt-pd-e', role: 'alert' });
      var go = JT.btn(T('product.go'), { icon: 'product', cls: 'jt-ck__go' }); go.type = 'submit';
      var form = h('form', { class: 'jt-ck__f', novalidate: true }, [
        h('label', { class: 'jt-lab', for: 'jt-pd-url', text: T('product.urlL') }),
        h('div', { class: 'jt-lead__row' }, [urlIn, go]), err,
        h('p', { class: 'jt-help', id: 'jt-pd-h', text: T('product.urlHelp') })
      ]);
      var jump = h('p', { class: 'jt-pd__jump' }, [T('product.jump') + ' ', h('a', { href: '#jt-photo', text: T('photo.t') }), ' ' + T('product.or') + ' ', h('a', { href: '#jt-clip', text: T('clip.t') })]);
      el.appendChild(h('div', { class: 'jt-card jt-card--in jt-ck' }, [h('h2', { class: 'jt-card__t', text: T('product.inTitle') }), form, jump]));
      var wait = h('div', { class: 'jt-ck__wait', hidden: true, role: 'status' }, [JT.img('product', 'jt-ck__judy'), h('p', { class: 'jt-ck__msg', text: T('product.wait') }), h('div', { class: 'jt-ck__bar' }, [h('span')])]);
      var res = h('div', { class: 'jt-ck__res', hidden: true });
      el.appendChild(wait); el.appendChild(res);
      var photo = JT.photoCard(), clip = JT.clipCard();
      el.appendChild(photo.el); el.appendChild(clip.el);
      photo.onPick = function (src) { clip.addPhoto(src); };
      el.appendChild(JT.nextStep({ title: T('product.nextT'), text: T('product.nextP'), btn: T('product.nextBtn'), svc: 'review', href: JT.prod('review'), wa: T('product.nextWa') }));

      var run = 0;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var l = JT.productLink(urlIn.value);
        err.textContent = l.err ? T('product.err.' + l.err) : ''; urlIn.setAttribute('aria-invalid', l.err ? 'true' : 'false');
        if (l.err) { urlIn.focus(); return; }
        JT.store.set('product', Object.assign(JT.store.get('product') || {}, { url: urlIn.value.trim() }));
        var me = ++run; res.hidden = true; wait.hidden = false; go.disabled = true;
        getProduct(l).then(function (p) {
          var main = (p.images || []).filter(function (i) { return i.main; })[0] || (p.images || [])[0] || p.image;
          return (main && main.url ? measure(main.url) : Promise.resolve(null)).then(function (px) { return [p, px, main]; });
        }).then(function (a) {
          if (me !== run) return; wait.hidden = true; go.disabled = false; show(a[0], a[1], a[2]);
        }, function (x) {
          if (me !== run) return; wait.hidden = true; go.disabled = false; res.hidden = false; res.innerHTML = '';
          var c = x && x.code, k = c === 422 ? 'notSalla' : c === 410 || c === 404 ? 'gone' : c === 429 ? 'busy' : 'net';
          res.appendChild(h('div', { class: 'jt-card jt-ck__fail' }, [h('p', { class: 'jt-warn', text: T('product.fail.' + k) })]));
          JT.announce(T('product.fail.' + k));
        });
      });

      function row(c, kind) {
        var base = 'product.' + kind + '.' + c.id + '.' + c.k;
        var v = Object.assign({}, c.v); if (v.save) v.save = JT.money(v.save, 2);
        var good = c.st === 'good';
        return h('li', { class: 'jt-pt ' + (good ? 'is-good' : c.st === 'bad' ? 'is-bad' : 'jt-pt--tip'), 'data-id': c.id }, [
          h('span', { class: 'jt-ic', html: JT.svg(good ? 'check' : c.st === 'bad' ? 'info' : 'plus'), 'aria-hidden': 'true' }),
          h('div', {}, good ? [h('p', { class: 'jt-pt__t', text: T(base, v) })] : [h('p', { class: 'jt-pt__t', text: T(base + '.q', v) }), h('p', { class: 'jt-pt__w', text: T(base + '.fix', v) })])
        ]);
      }
      function phone(p, main) {
        var price = Number(p.price), was = Number(p.regular_price), sale = p.is_on_sale && was > price;
        var pics = (p.images || []).filter(function (i) { return i.type !== 'video' && i.url; });
        var opts = (p.options || []).filter(function (o) { return (o.details || []).length; }).slice(0, 2);
        return h('figure', { class: 'jt-pd__fig' }, [
          h('div', { class: 'jt-pd__phone' }, [h('div', { class: 'jt-pd__scr' }, [
            main && main.url ? h('div', { class: 'jt-pd__img' }, [h('img', { src: main.url, crossorigin: 'anonymous', alt: main.alt || p.name }), pics.length > 1 ? h('span', { class: 'jt-pd__n jt-num', text: '1/' + pics.length }) : null]) : h('div', { class: 'jt-pd__img', html: JT.svg('product') }),
            h('div', { class: 'jt-pd__b' }, [
              h('p', { class: 'jt-pd__name', text: p.name }),
              p.subtitle ? h('p', { class: 'jt-pd__sub', text: p.subtitle }) : null,
              h('p', { class: 'jt-pd__price jt-num' }, [price > 0 ? JT.money(price, 2) : T('svc.free'), sale ? h('s', { text: JT.num(was, 2) }) : null]),
              p.rating && p.rating.count ? h('p', { class: 'jt-pd__rate jt-num', text: '★ ' + p.rating.stars + ' (' + p.rating.count + ')' }) : null
            ].concat(opts.map(function (o) { return h('div', { class: 'jt-pd__opt' }, [h('span', { text: o.name }), h('div', {}, o.details.slice(0, 4).map(function (d) { return h('i', { class: d.is_out ? 'jt-pd__gone' : '', text: d.name }); }).concat(o.details.length > 4 ? [h('i', { text: '+' + (o.details.length - 4) })] : []))]); })).concat([h('span', { class: 'jt-pd__buy', text: p.is_out_of_stock ? T('product.soldOut') : T('product.buy') })]))
          ])]),
          h('figcaption', { text: T('product.phoneCap') })
        ]);
      }
      function wapp(p, main) {
        var host = hostOf(p);
        return h('figure', { class: 'jt-pd__fig jt-pd__fig--wa' }, [
          h('div', { class: 'jt-pd__wa' }, [h('div', { class: 'jt-pd__bub' }, [
            main && main.url ? h('img', { src: main.url, crossorigin: 'anonymous', alt: '' }) : null,
            h('div', {}, [h('b', { text: p.name }), JT.productText(p.description) ? h('span', { text: JT.productText(p.description).slice(0, 70) }) : null, h('small', { dir: 'ltr', text: host })])
          ])]),
          h('figcaption', { text: T('product.waCap') })
        ]);
      }
      function show(p, px, main) {
        var r = JT.productRules(p, px), top = JT.productTop(r);
        res.hidden = false; res.innerHTML = '';
        function pick(st) { return r.q.filter(function (x) { return x.st === st; }); }
        var bad = pick('bad'), tip = pick('tip'), good = pick('good');
        var gTip = r.g.filter(function (x) { return x.st !== 'good'; });
        var list = h('div', { class: 'jt-pd__list' }, [
          bad.length ? h('h3', { class: 'jt-mini-t', text: T('product.badT') }) : null, bad.length ? h('ul', { class: 'jt-pts' }, bad.map(function (c) { return row(c, 'c'); })) : null,
          tip.length ? h('h3', { class: 'jt-mini-t', text: T('product.tipT') }) : null, tip.length ? h('ul', { class: 'jt-pts' }, tip.map(function (c) { return row(c, 'c'); })) : null,
          good.length ? h('h3', { class: 'jt-mini-t', text: T('product.goodT') }) : null, good.length ? h('ul', { class: 'jt-pts jt-pts--good' }, good.map(function (c) { return row(c, 'c'); })) : null,
          gTip.length ? h('details', { class: 'jt-more' }, [h('summary', {}, [h('span', { text: T('product.gT', { n: gTip.length }) }), h('span', { class: 'jt-how__ch', html: JT.svg('chev'), 'aria-hidden': 'true' })]), h('div', { class: 'jt-more__b' }, [h('ul', { class: 'jt-pts' }, gTip.map(function (c) { return row(c, 'g'); }))])]) : null,
          h('details', { class: 'jt-more' }, [h('summary', {}, [h('span', { text: T('product.selfT') }), h('span', { class: 'jt-how__ch', html: JT.svg('chev'), 'aria-hidden': 'true' })]), h('div', { class: 'jt-more__b' }, [h('p', { class: 'jt-help', text: T('product.selfP') }), h('ul', { class: 'jt-pd__self' }, T('product.self').map(function (x) { return h('li', { text: x }); }))])])
        ]);
        var card = h('section', { class: 'jt-card jt-card--res jt-ck__sum jt-pd' }, [
          h('div', { class: 'jt-pd__head' }, [
            h('p', { class: 'jt-pd__score' }, [h('b', { class: 'jt-num', text: String(r.ok) }), h('span', { text: T('product.of', { n: r.all }) })]),
            h('div', {}, [h('h2', { class: 'jt-card__t', text: T(r.ok === r.all ? 'product.resAll' : 'product.resT', { a: r.ok, b: r.all }) }), h('p', { class: 'jt-help' }, [p.name + ' · ', h('span', { dir: 'ltr', text: hostOf(p) })])])
          ]),
          h('div', { class: 'jt-pd__cols' }, [list, h('div', { class: 'jt-pd__side' }, [phone(p, main), wapp(p, main)])])
        ]);
        res.appendChild(card);
        if (top && JT.fixBox) res.appendChild(JT.fixBox({ svc: top.svc, title: T('product.fixT.' + top.svc), text: T('product.fixP.' + top.svc), btn: T('svc.fix') }));
        if (JT.shareBar) res.appendChild(JT.shareBar('product', function () {
          return [p.name, T('product.resT', { a: r.ok, b: r.all })].concat(bad.concat(tip).map(function (c) { return '- ' + T('product.c.' + c.id + '.' + c.k + '.q', c.v); }));
        }));
        var srcs = r.pics.slice(0, 6).map(function (i) { return i.url; }); if (!srcs.length && main && main.url) srcs = [main.url];
        photo.setProduct(srcs);
        clip.setProduct({ name: p.name, price: Number(p.price), was: p.is_on_sale ? Number(p.regular_price) : 0, store: p.brand && p.brand.name ? p.brand.name : '', host: hostOf(p), photos: srcs, main: px && px.img });
        JT.announce(T('product.resT', { a: r.ok, b: r.all }));
        card.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      }
    }
  };
})();

}

/* ---- src/lead.js ---- */
if (!window.JT_F["src/lead.js"]) { window.JT_F["src/lead.js"] = 1;
/* «تحتاج متجر؟» WhatsApp button + «خذ النتيجة كاملة PDF» (one field: WhatsApp number or email).
   The contact goes to her Google Sheet (CFG.leadUrl = Google Form formResponse, linked sheet); the PDF is built in the browser
   (html2pdf loaded from cdnjs only when someone asks for the file) and downloads at once. */
(function () {
  var JT = window.JT, h = JT.h, T = JT.T;
  var JSPDF = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  // Almarai (the site font) for the PDF, Google Fonts v19 files (CORS open)
  var FONTS = [[400, 'tsstApxBaigK_hnnQ1iFo0C3', 'tsstApxBaigK_hnnQ12Fow'], [700, 'tssoApxBaigK_hnnS-agtnqWo572', 'tssoApxBaigK_hnnS-agtn-Wow'], [800, 'tssoApxBaigK_hnnS_qjtnqWo572', 'tssoApxBaigK_hnnS_qjtn-Wow']];

  JT.needStore = function (cls) {
    return h('a', { class: 'jt-need' + (cls ? ' ' + cls : ''), href: JT.waUrl(T('lead.needWaText')), target: '_blank', rel: 'noopener' }, [
      h('span', { class: 'jt-need__ic', html: JT.svg('wa'), 'aria-hidden': 'true' }),
      h('span', { class: 'jt-need__t' }, [h('b', { text: T('lead.needT') }), h('span', { text: T('lead.needS') })])
    ]);
  };

  /* WhatsApp number (Saudi 05..., 5..., 9665..., +966..., any 9-15 digits) or email */
  function parseContact(v) {
    v = (v || '').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return { type: 'email', value: v.toLowerCase() };
    var d = v.replace(/[٠-٩]/g, function (c) { return c.charCodeAt(0) - 0x0660; }).replace(/[۰-۹]/g, function (c) { return c.charCodeAt(0) - 0x06F0; }).replace(/[^\d+]/g, '');
    d = d.replace(/^\+/, '').replace(/^00/, '');
    if (/^05\d{8}$/.test(d)) d = '966' + d.slice(1);
    else if (/^5\d{8}$/.test(d)) d = '966' + d;
    if (/^9665\d{8}$/.test(d) || (/^\d{10,15}$/.test(d) && !/^966/.test(d))) return { type: 'whatsapp', value: d };
    return null;
  }
  JT.parseContact = parseContact;

  function sendLead(p) {
    if (!JT.CFG.leadUrl) return Promise.resolve(false);
    var go;
    try {
      var form = /\/formResponse$/.test(JT.CFG.leadUrl), body;
      if (form) {
        body = new URLSearchParams();
        Object.keys(JT.CFG.leadMap).forEach(function (k) {
          var v = p[k]; if (typeof v === 'boolean') v = v ? 'نعم' : 'لا';
          body.append('entry.' + JT.CFG.leadMap[k], String(v == null ? '' : v).slice(0, 1500));
        });
      } else body = JSON.stringify(p);
      go = fetch(JT.CFG.leadUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': form ? 'application/x-www-form-urlencoded;charset=utf-8' : 'text/plain;charset=utf-8' }, body: form ? body.toString() : body, keepalive: true }).then(function () { return true; }, function () { return false; });
    } catch (e) { return Promise.resolve(false); }
    // never keep the visitor waiting for the sheet
    return Promise.race([go, new Promise(function (r) { setTimeout(function () { r(false); }, 2500); })]);
  }
  JT.sendLead = sendLead;

  var libLoading;
  function loadJsPdf() {
    if (window.jspdf) return Promise.resolve();
    libLoading = libLoading || new Promise(function (ok, bad) { var sc = h('script', { src: JSPDF, crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }); sc.onload = ok; sc.onerror = bad; document.head.appendChild(sc); });
    return libLoading;
  }
  function toDataUrl(url) {
    return fetch(url, { mode: 'cors' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.blob(); }).then(function (b) {
      return new Promise(function (ok) { var fr = new FileReader(); fr.onload = function () { ok(fr.result); }; fr.readAsDataURL(b); });
    });
  }
  var fontCss;
  function getFontCss() {
    if (fontCss) return fontCss;
    var AR = 'U+0600-06FF, U+0750-077F, U+08A0-08FF, U+200C-200E, U+FB50-FDFF, U+FE70-FEFC', LA = 'U+0000-00FF, U+2000-206F, U+20AC, U+2122, U+2212';
    fontCss = Promise.all(FONTS.map(function (f) {
      return Promise.all([toDataUrl('https://fonts.gstatic.com/s/almarai/v19/' + f[1] + '.woff2'), toDataUrl('https://fonts.gstatic.com/s/almarai/v19/' + f[2] + '.woff2')]).then(function (u) {
        return '@font-face{font-family:Almarai;font-weight:' + f[0] + ';src:url(' + u[0] + ') format("woff2");unicode-range:' + AR + '}' +
               '@font-face{font-family:Almarai;font-weight:' + f[0] + ';src:url(' + u[1] + ') format("woff2");unicode-range:' + LA + '}';
      });
    })).then(function (a) { return a.join(''); }, function () { return ''; });
    return fontCss;
  }
  var cssText;
  function getCss() {
    if (cssText) return cssText;
    var link = [].filter.call(document.querySelectorAll('link[rel=stylesheet]'), function (l) { return /judy-tools/.test(l.href); })[0];
    cssText = link ? fetch(link.href).then(function (r) { return r.text(); }, function () { return ''; }) : Promise.resolve([].map.call(document.querySelectorAll('style'), function (x) { return /jt-app/.test(x.textContent) ? x.textContent : ''; }).join(''));
    return cssText;
  }

  /* the page's inputs as «label: value» lines */
  function readInputs(scope) {
    var rows = [];
    scope.querySelectorAll('.jt-card--in .jt-field, .jt-card--in .jt-seg, .jt-card--in .jt-cbl').forEach(function (f) {
      if (f.closest('[hidden]')) return;
      if (f.classList.contains('jt-cbl')) { var c = f.querySelector('input'); if (c && c.checked) rows.push([T('lead.pdf.extra'), f.querySelector('b').textContent]); return; }
      var lab = f.querySelector('.jt-lab'); if (!lab) return;
      var val = '';
      var inp = f.querySelector('input.jt-in, textarea, select');
      if (f.classList.contains('jt-seg')) { var ch = f.querySelector('input:checked'); val = ch ? ch.parentNode.textContent.trim() : ''; }
      else if (inp && inp.tagName === 'SELECT') val = inp.options[inp.selectedIndex].text;
      else if (inp) { val = inp.value.trim(); var u = f.querySelector('.jt-unit'); if (val && u) val += ' ' + u.textContent; }
      if (val) rows.push([lab.textContent.trim(), val]);
    });
    return rows;
  }
  /* a printable copy of the result: no buttons, inputs become text, details open */
  function cleanClone(node) {
    var c = node.cloneNode(true);
    c.querySelectorAll('.jt-actions, button, .jt-btn, .jt-chips, .jt-mbar, .jt-tl__body .jt-actions').forEach(function (x) { x.remove(); });
    c.querySelectorAll('input, select, textarea').forEach(function (x) {
      var t = x.tagName === 'SELECT' ? x.options[x.selectedIndex].text : (x.type === 'radio' || x.type === 'checkbox' ? '' : x.value);
      if (x.type === 'radio' || x.type === 'checkbox') { x.remove(); return; }
      x.replaceWith(h('b', { class: 'jt-pdf__val', text: t }));
    });
    c.querySelectorAll('details').forEach(function (d) { d.setAttribute('open', ''); });
    c.querySelectorAll('[aria-live]').forEach(function (x) { x.removeAttribute('aria-live'); });
    c.classList.remove('jt-card--res', 'jt-card--sticky');
    return c;
  }

  var DF;
  JT.makePdf = function (key, opt) {
    opt = opt || {};
    var t = T('tools.' + key), app = document.getElementById('jt-app');
    DF = DF || new Intl.DateTimeFormat(JT.lang === 'ar' ? 'ar-SA-u-ca-gregory-nu-latn' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    var rows = opt.rows || readInputs(app);
    var result = opt.node || (app.querySelector('.jt-tool .jt-card--res') ? cleanClone(app.querySelector('.jt-tool .jt-card--res')) : null);
    var page = h('div', { class: 'jt-pdf', dir: JT.lang === 'ar' ? 'rtl' : 'ltr', lang: JT.lang }, [
      h('header', { class: 'jt-pdf__head' }, [
        h('img', { class: 'jt-pdf__logo', src: JT.CFG.asset + 'judy-logo.webp', alt: 'Judy Marketing', crossorigin: 'anonymous' }),
        h('div', {}, [h('p', { class: 'jt-pdf__k', text: T('lead.pdf.madeBy') }), h('h1', { class: 'jt-pdf__t', text: opt.title || t.name }), h('p', { class: 'jt-pdf__d', text: DF.format(new Date()) + (opt.sub ? ' · ' + opt.sub : '') })]),
        h('img', { class: 'jt-pdf__judy', src: JT.CFG.asset + 'judy-' + (JT.CFG.judy[key] || 'thumbs-up') + '.webp', alt: '', crossorigin: 'anonymous' })
      ]),
      rows.length ? h('section', { class: 'jt-pdf__sec' }, [h('h2', { text: T('lead.pdf.yours') }), h('table', { class: 'jt-pdf__tbl' }, rows.map(function (r) { return h('tr', {}, [h('th', { text: r[0] }), h('td', { text: r[1] })]); }))]) : null,
      result ? h('section', { class: 'jt-pdf__sec' }, [h('h2', { text: opt.resT || T('lead.pdf.result') }), result]) : null,
      opt.extra ? h('section', { class: 'jt-pdf__sec' }, opt.extra) : null,
      h('section', { class: 'jt-pdf__sec jt-pdf__next' }, [
        h('h2', { text: T('lead.pdf.next') }),
        h('p', { text: opt.nextText || T(({ whatsapp: 'wa', prompts: 'pr', cost: 'hub.cta' })[key] ? (key === 'cost' ? 'hub.ctaP' : ({ whatsapp: 'wa', prompts: 'pr' })[key] + '.nextP') : key + '.nextP') }),
        h('p', { class: 'jt-pdf__contact', text: T('lead.pdf.contact') })
      ]),
      h('footer', { class: 'jt-pdf__foot', text: opt.foot || T('lead.pdf.foot') })
    ]);
    // the page is wrapped in its own #jt-app so the scoped styles apply; it sits off screen while we measure it
    var dir = JT.lang === 'ar' ? 'rtl' : 'ltr';
    var root = h('div', { id: 'jt-app', class: 'jt jt-pdfroot', dir: dir, lang: JT.lang }, [page]);
    var holder = h('div', { class: 'jt-pdf-holder', 'aria-hidden': 'true' }, [root]);
    document.body.appendChild(holder);
    var name = (opt.file || ('judy-' + key)) + '.pdf';
    var W = 794, PH = 1123, M = 40, SC = 2;
    function done(v) { holder.remove(); return v; }
    return Promise.all([getCss(), getFontCss(), Promise.all([].map.call(page.querySelectorAll('img'), function (im) {
      return toDataUrl(im.src).then(function (d) { im.src = d; return new Promise(function (ok) { if (im.complete) ok(); else { im.onload = im.onerror = ok; } }); }, function () { im.remove(); });
    }))]).then(function (res) {
      var css = res[0], fonts = res[1];
      return (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () {
        var H = Math.ceil(page.getBoundingClientRect().height);
        // page breaks only between blocks
        var top0 = page.getBoundingClientRect().top, cuts = [];
        page.querySelectorAll('section, tr, li, p, .jt-pdf__issue, .jt-rank__i, .jt-msg, .jt-stat, .jt-score, .jt-pt, .jt-theme, .jt-tl__i, .jt-legend, .jt-split, .jt-res, .jt-store, .jt-bill li').forEach(function (el) {
          // never end a page right after a title, or inside one issue / one point
          if (el.matches('.jt-pdf__it, .jt-pt__t, .jt-card__t')) return;
          var box = el.closest('.jt-pdf__issue, .jt-pt'); if (box && box !== el) return;
          var r = el.getBoundingClientRect(); cuts.push(Math.round(r.bottom - top0));
        });
        cuts = cuts.filter(function (c, i, a) { return c > 0 && a.indexOf(c) === i; }).sort(function (a, b) { return a - b; });
        var pages = [], y = 0, room = PH - 2 * M;
        while (y < H - 2) {
          var lim = y + room, best = 0;
          cuts.forEach(function (c) { if (c > y + 60 && c <= lim) best = c; });
          var end = H <= lim ? H : (best || lim);
          pages.push([y, end]); y = end;
        }
        var clone = root.cloneNode(true);
        clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
        clone.setAttribute('style', 'width:' + W + 'px;background:#fff;');
        var xhtml = new XMLSerializer().serializeToString(clone);
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '"><foreignObject x="0" y="0" width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>' +
          (fonts + css).replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</style>' + xhtml + '</div></foreignObject></svg>';
        return new Promise(function (ok, bad) {
          var img = new Image();
          img.onload = function () { ok(img); }; img.onerror = bad;
          img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        }).then(function (img) {
          var big = document.createElement('canvas'); big.width = W * SC; big.height = H * SC;
          var cx = big.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, big.width, big.height); cx.scale(SC, SC); cx.drawImage(img, 0, 0);
          big.toDataURL('image/png'); // throws here when the browser marks the drawing unsafe (old Safari): print fallback
          return loadJsPdf().then(function () {
            var pdf = new window.jspdf.jsPDF({ unit: 'px', format: [W, PH], orientation: 'portrait', hotfixes: ['px_scaling'], compress: true });
            pages.forEach(function (pg, i) {
              var c = document.createElement('canvas'), hh = pg[1] - pg[0];
              c.width = W * SC; c.height = hh * SC;
              var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
              x.drawImage(big, 0, pg[0] * SC, W * SC, hh * SC, 0, 0, W * SC, hh * SC);
              if (i) pdf.addPage([W, PH], 'portrait');
              pdf.addImage(c.toDataURL('image/jpeg', 0.9), 'JPEG', 0, i ? M : 0, W, hh);
              pdf.setFontSize(9); pdf.setTextColor(140, 136, 170); pdf.text(String(i + 1) + ' / ' + pages.length, W / 2, PH - 16, { align: 'center' });
            });
            pdf.save(name);
            return true;
          });
        }).catch(function () { return printFallback(css, fonts, root, name); });
      });
    }).then(done, function (e) { holder.remove(); throw e; });
  };

  // fallback: the browser's own «Save as PDF» from the print window
  function printFallback(css, fonts, root, name) {
    var w = window.open('', '_blank');
    if (!w) throw new Error('popup');
    w.document.write('<!doctype html><html lang="' + JT.lang + '" dir="' + (JT.lang === 'ar' ? 'rtl' : 'ltr') + '"><head><meta charset="utf-8"><title>' + JT.esc(name.replace(/\.pdf$/, '')) +
      '</title><style>' + fonts + css + '@page{size:A4;margin:0}body{margin:0}</style></head><body>' + root.outerHTML + '</body></html>');
    w.document.close();
    setTimeout(function () { try { w.focus(); w.print(); } catch (e) { } }, 600);
    return true;
  }

  JT.leadBox = function (key, o) {
    o = o || {};
    // until her Google Sheet link is set nothing would be saved, so no contact field: one download button
    if (!JT.CFG.leadUrl) {
      var st0 = h('p', { class: 'jt-lead__st', role: 'status' });
      var b0 = JT.btn(T('lead.dl'), { icon: 'download', cls: 'jt-lead__btn' });
      b0.addEventListener('click', function () {
        b0.disabled = true; b0.querySelector('.jt-bl').textContent = T('lead.busy'); st0.textContent = '';
        Promise.resolve(o.pdf ? o.pdf() : JT.makePdf(key)).then(function () { st0.textContent = T('lead.done'); st0.className = 'jt-lead__st is-ok'; JT.announce(T('lead.done')); },
          function () { st0.textContent = T('lead.fail'); st0.className = 'jt-lead__st is-bad'; })
          .then(function () { b0.disabled = false; b0.querySelector('.jt-bl').textContent = T('lead.dl'); });
      });
      return h('section', { class: 'jt-leadbox', 'aria-label': T('lead.boxT') }, [JT.img('done', 'jt-lead__judy'),
        h('div', { class: 'jt-lead__body' }, [h('h2', { class: 'jt-lead__t', text: T('lead.boxT') }), h('p', { class: 'jt-lead__p', text: T('lead.boxP') }), h('div', { class: 'jt-lead__f' }, [b0, st0])])]);
    }
    var saved = JT.store.get('contact') || {};
    var id = 'jt-lead-' + key;
    var inp = h('input', { id: id, class: 'jt-in jt-lead__in', type: 'text', inputmode: 'email', autocomplete: 'email', dir: 'ltr', placeholder: T('lead.ph'), 'aria-describedby': id + '-e ' + id + '-p' });
    if (saved.value) inp.value = saved.type === 'whatsapp' ? '+' + saved.value : saved.value;
    var upd = h('input', { type: 'checkbox', id: id + '-u', class: 'jt-cb' }); if (saved.updates) upd.checked = true;
    var err = h('p', { class: 'jt-err', id: id + '-e', role: 'alert' });
    var status = h('p', { class: 'jt-lead__st', role: 'status' });
    var btn = JT.btn(o.btn || T('lead.btn'), { icon: 'download', cls: 'jt-lead__btn' });
    btn.type = 'submit';
    var form = h('form', { class: 'jt-lead__f', novalidate: true }, [
      h('div', { class: 'jt-field' }, [h('label', { class: 'jt-lab', for: id, text: T('lead.label') }), h('div', { class: 'jt-lead__row' }, [inp, btn]), err]),
      h('label', { class: 'jt-cbl jt-cbl--s', for: id + '-u' }, [upd, h('span', { class: 'jt-cbl__box', html: JT.svg('check'), 'aria-hidden': 'true' }), h('span', { class: 'jt-cbl__t' }, [h('b', { text: T('lead.upd') })])]),
      h('p', { class: 'jt-help', id: id + '-p', text: T('lead.privacy') }), status
    ]);
    var box = h('section', { class: 'jt-leadbox', 'aria-label': o.title || T('lead.boxT') }, [
      JT.img(o.img || 'done', 'jt-lead__judy'),
      h('div', { class: 'jt-lead__body' }, [h('h2', { class: 'jt-lead__t', text: o.title || T('lead.boxT') }), h('p', { class: 'jt-lead__p', text: o.text || T('lead.boxP') }), form])
    ]);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var c = parseContact(inp.value);
      err.textContent = c ? '' : T('lead.err');
      inp.setAttribute('aria-invalid', c ? 'false' : 'true');
      if (!c) { inp.focus(); return; }
      JT.store.set('contact', { type: c.type, value: c.value, updates: upd.checked });
      btn.disabled = true; btn.querySelector('.jt-bl').textContent = T('lead.busy');
      status.textContent = '';
      var payload = { tool: key, contact: c.value, type: c.type, updates: upd.checked, lang: JT.lang, page: location.href.split('#')[0], summary: o.summary ? o.summary() : '', ts: new Date().toISOString() };
      sendLead(payload).then(function () { return o.pdf ? o.pdf() : JT.makePdf(key); }).then(function () {
        status.textContent = T('lead.done'); status.className = 'jt-lead__st is-ok'; JT.announce(T('lead.done'));
      }, function () {
        status.textContent = T('lead.fail'); status.className = 'jt-lead__st is-bad';
      }).then(function () { btn.disabled = false; btn.querySelector('.jt-bl').textContent = o.btn || T('lead.btn'); });
    });
    return box;
  };
})();

}

;(function(){ if (window.JT_ON) { if (window.JT.mount) window.JT.mount(); return; } window.JT_ON = 1; if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', window.JT.start); else window.JT.start(); })();
