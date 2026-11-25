/* JUDY - MERCHANT TOOLS whatsapp.en, built 2026-11-25T11:02 */
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

/* ---- src/tools/words.js ---- */
if (!window.JT_F["src/tools/words.js"]) { window.JT_F["src/tools/words.js"] = 1;
/* رسائل واتساب لمتجرك + برومبتات بمعلومات متجرك: fill the store once, every text comes ready */
(function () {
  var JT = window.JT, h = JT.h, T = JT.T;
  function fill(tpl, v) { return tpl.replace(/\{(\w+)\}/g, function (m, k) { return v[k] != null && v[k] !== '' ? v[k] : (T('wa.ph.' + k) || m); }); }
  JT.fillTpl = fill;
  function profileStore() { return JT.store.get('profile') || {}; }

  /* =========================================================
     رسائل واتساب
     ========================================================= */
  JT.tools.whatsapp = {
    preview: function () {
      return h('div', { class: 'jt-pv__wa' }, [h('p', { class: 'jt-bubble', text: fill(T('wa.msgs.cart.friendly'), { store: T('wa.exStore'), name: T('wa.exName'), link: 'mystore.com' }).split('\n')[0] })]);
    },
    render: function (el) {
      var p = profileStore();
      var upd = function () { run(); };
      var f = {
        store: JT.textField({ id: 'wa-store', label: T('wa.store'), value: p.store || '', placeholder: T('wa.exStore'), onInput: upd }),
        link: JT.textField({ id: 'wa-link', label: T('wa.link'), dir: 'ltr', value: p.link || '', placeholder: 'mystore.com', onInput: upd }),
        name: JT.textField({ id: 'wa-name', label: T('wa.cust'), value: '', placeholder: T('wa.exName'), help: T('wa.custHelp'), onInput: upd }),
        phone: JT.textField({ id: 'wa-phone', label: T('wa.phone'), dir: 'ltr', value: '', placeholder: '9665XXXXXXXX', help: T('wa.phoneHelp'), onInput: upd })
      };
      var tone = JT.seg({ id: 'wa-tone', label: T('wa.tone'), value: p.tone === 'formal' ? 'formal' : 'friendly', options: [['friendly', T('wa.friendly')], ['formal', T('wa.formal')]], onChange: upd });
      var cats = Object.keys(T('wa.msgs'));
      var chips = h('div', { class: 'jt-chips', role: 'tablist', 'aria-label': T('wa.catsAria') });
      var current = 'all';
      [['all', T('wa.all')]].concat(cats.map(function (k) { return [k, T('wa.msgs.' + k + '.title')]; })).forEach(function (c) {
        var b = h('button', { type: 'button', class: 'jt-chip' + (c[0] === 'all' ? ' is-on' : ''), role: 'tab', 'aria-selected': c[0] === 'all' ? 'true' : 'false', text: c[1] });
        b.addEventListener('click', function () { current = c[0]; chips.querySelectorAll('.jt-chip').forEach(function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-selected', x === b ? 'true' : 'false'); }); run(); });
        chips.appendChild(b);
      });
      var inputs = h('div', { class: 'jt-card jt-card--in jt-card--sticky' }, [h('h2', { class: 'jt-card__t', text: T('wa.inTitle') }), f.store.el, f.link.el, tone.el, f.name.el, f.phone.el, h('p', { class: 'jt-help', text: T('wa.privacy') })]);
      var list = h('div', { class: 'jt-msgs' });
      var res = h('div', { class: 'jt-card jt-card--res jt-card--plain' }, [chips, list]);
      el.appendChild(h('div', { class: 'jt-tool__grid jt-tool__grid--wide' }, [inputs, res]));
      el.appendChild(JT.nextStep({ title: T('wa.nextT'), text: T('wa.nextP'), btn: T('wa.nextBtn'), svc: 'wa', href: JT.prod('wa'), wa: T('wa.nextWa') }));
      function run() {
        var v = { store: f.store.get(), link: f.link.get(), name: f.name.get() };
        var prof = profileStore(); prof.store = v.store; prof.link = v.link; prof.tone = tone.get(); JT.store.set('profile', prof);
        var phone = f.phone.get().replace(/[^\d]/g, '').replace(/^00/, '').replace(/^0(5\d{8})$/, '966$1');
        list.innerHTML = '';
        cats.filter(function (k) { return current === 'all' || current === k; }).forEach(function (k) {
          var text = fill(T('wa.msgs.' + k + '.' + tone.get()), v);
          var copyB = JT.btn(T('common.copy'), { kind: 'soft', icon: 'copy' });
          copyB.onclick = function () { JT.copy(text, copyB); };
          list.appendChild(h('article', { class: 'jt-msg' }, [
            h('h3', { class: 'jt-msg__t' }, [h('span', { class: 'jt-ic', html: JT.svg('whatsapp'), 'aria-hidden': 'true' }), T('wa.msgs.' + k + '.title')]),
            h('p', { class: 'jt-msg__when', text: T('wa.msgs.' + k + '.when') }),
            h('div', { class: 'jt-wa-chat' }, [h('p', { class: 'jt-bubble', text: text })]),
            h('div', { class: 'jt-actions' }, [copyB, JT.btn(T('wa.open'), { kind: 'wa', icon: 'wa', href: 'https://wa.me/' + (phone.length >= 11 ? phone : '') + '?text=' + encodeURIComponent(text), blank: true })])
          ]));
        });
      }
      run();
    }
  };

  /* =========================================================
     برومبتات بمعلومات متجرك
     ========================================================= */
  JT.tools.prompts = {
    preview: function () {
      return h('div', { class: 'jt-pv__prompt' }, [h('p', { text: T('pr.pvLine') }), h('p', { class: 'jt-pv__s', text: T('pr.pvSub') })]);
    },
    render: function (el) {
      var p = profileStore();
      var upd = function () { run(); };
      var f = {
        store: JT.textField({ id: 'pp-store', label: T('wa.store'), value: p.store || '', placeholder: T('wa.exStore'), onInput: upd }),
        sell: JT.textField({ id: 'pp-sell', label: T('pr.sell'), value: p.sell || '', placeholder: T('pr.exSell'), onInput: upd }),
        who: JT.textField({ id: 'pp-who', label: T('pr.who'), value: p.who || '', placeholder: T('pr.exWho'), onInput: upd }),
        diff: JT.textField({ id: 'pp-diff', label: T('pr.diff'), value: p.diff || '', placeholder: T('pr.exDiff'), onInput: upd }),
        city: JT.textField({ id: 'pp-city', label: T('pr.city'), value: p.city || '', placeholder: T('pr.exCity'), onInput: upd }),
        product: JT.textField({ id: 'pp-product', label: T('pr.product'), value: p.product || '', placeholder: T('pr.exProduct'), help: T('pr.productHelp'), onInput: upd })
      };
      var tone = JT.seg({ id: 'pp-tone', label: T('wa.tone'), value: p.tone === 'formal' ? 'formal' : 'friendly', options: [['friendly', T('pr.friendly')], ['formal', T('pr.formal')]], onChange: upd });
      var inputs = h('div', { class: 'jt-card jt-card--in jt-card--sticky' }, [h('h2', { class: 'jt-card__t', text: T('pr.inTitle') }), f.store.el, f.sell.el, f.who.el, f.diff.el, f.city.el, tone.el, f.product.el, h('p', { class: 'jt-help', text: T('wa.privacy') })]);
      var keys = Object.keys(T('pr.list'));
      var list = h('div', { class: 'jt-msgs' });
      var res = h('div', { class: 'jt-card jt-card--res jt-card--plain' }, [list]);
      el.appendChild(h('div', { class: 'jt-tool__grid jt-tool__grid--wide' }, [inputs, res]));
      el.appendChild(JT.nextStep({ title: T('pr.nextT'), text: T('pr.nextP'), btn: T('pr.nextBtn'), svc: 'geo', href: JT.prod('geo'), wa: T('pr.nextWa') }));
      function run() {
        var v = {}; Object.keys(f).forEach(function (k) { v[k] = f[k].get(); });
        v.tone = tone.get() === 'formal' ? T('pr.toneFormal') : T('pr.toneFriendly');
        var prof = profileStore(); Object.keys(f).forEach(function (k) { prof[k] = v[k]; }); prof.tone = tone.get(); JT.store.set('profile', prof);
        var ctx = fill(T('pr.ctx'), v);
        list.innerHTML = '';
        keys.forEach(function (k) {
          var text = ctx + '\n\n' + fill(T('pr.list.' + k + '.ask'), v);
          var copyB = JT.btn(T('common.copy'), { kind: 'soft', icon: 'copy' });
          copyB.onclick = function () { JT.copy(text, copyB); };
          var gem = JT.btn(T('pr.openGemini'), { kind: 'soft', icon: 'ext', href: 'https://gemini.google.com/app', blank: true });
          gem.addEventListener('click', function () { JT.copy(text, null); JT.announce(T('pr.copiedForGemini')); });
          list.appendChild(h('article', { class: 'jt-msg' }, [
            h('h3', { class: 'jt-msg__t' }, [h('span', { class: 'jt-ic', html: JT.svg('prompts'), 'aria-hidden': 'true' }), T('pr.list.' + k + '.title')]),
            h('p', { class: 'jt-msg__when', text: T('pr.list.' + k + '.when') }),
            h('pre', { class: 'jt-prompt', tabindex: '0', text: text }),
            h('div', { class: 'jt-actions' }, [copyB, JT.btn(T('pr.openGpt'), { kind: 'soft', icon: 'ext', href: 'https://chatgpt.com/?q=' + encodeURIComponent(text), blank: true }), gem])
          ]));
        });
      }
      run();
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
