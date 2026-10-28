# AEM Edge Delivery Services — Doc-to-Site Demo

A presales demo of Adobe Edge Delivery Services: document authoring, a CDN-first architecture, and custom blocks.
Write-up and talk track: https://rohit-jain-portfolio.super.site/eds-demo-from-google-doc-to-a-100-lighthouse-site

**Live:** https://main--aem-eds-demo--futkarj.aem.live · **Rate table demo:** https://main--aem-eds-demo--futkarj.aem.live/savings

## Set up from scratch (~10 min, free)
1. Go to https://github.com/adobe/aem-boilerplate and click **Use this template** → name the repo `aem-eds-demo` (public).
2. Install the **AEM Code Sync** GitHub app on this repo: https://github.com/apps/aem-code-sync
3. Content source, pick one:
   - **Document Authoring:** https://da.live → create a site pointing at `futkarj/aem-eds-demo`
4. Install the **AEM Sidekick** browser extension, then preview and publish the `index` doc.
5. Open `https://main--aem-eds-demo--futkarj.aem.page` (preview) / `.aem.live` (live).

> Follow the official tutorial if any step differs: https://www.aem.live/developer/tutorial

## Rate Table block
Authors add a table named **Rate Table** with a link to a published sheet, and optionally a row to highlight:

| Rate Table |
|---|
| /rates.json |
| Featured: 12 Month |

The sheet's columns become the table header. When rates change, marketing edits the sheet and publishes it, with no code deploy needed.

## Embed mode
Add `?embed` to any page URL to show only its content, without the site header and footer. Use it to embed a demo in an iframe, for example on the portfolio blog:
`https://main--aem-eds-demo--futkarj.aem.live/savings?embed`

## Local development
```bash
npm i
npm install -g @adobe/aem-cli
aem up        # http://localhost:3000, proxies content from your preview site
```

## Demo checklist
- [x] Lighthouse on `/savings` (Oct 28, 2026): Performance 100, Accessibility 100, Best Practices 100 on mobile and desktop. Mobile LCP 1.2 s, CLS 0.002, TBT 0 ms. SEO scores 69 only because aem.live branch URLs send `x-robots-tag: noindex` by design; a production domain removes it.
- [x] Custom block: `blocks/rate-table`, a rate comparison table driven by a published spreadsheet (`/rates.json`)
- [x] Rate table authored in da.live and published: `rates` sheet → `/rates.json`, `savings` page
- [ ] 3-min demo video link
