# AEM Edge Delivery Services — Doc-to-Site Demo

A presales demo of Adobe Edge Delivery Services: document authoring, a CDN-first architecture, and custom blocks.
Write-up and talk track: https://rohit-jain-portfolio.super.site/eds-demo-from-google-doc-to-a-100-lighthouse-site

**Live:** https://main--aem-eds-demo--futkarj.aem.live

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

## Local development
```bash
npm i
npm install -g @adobe/aem-cli
aem up        # http://localhost:3000, proxies content from your preview site
```

## Demo checklist
- [ ] PageSpeed Insights run (screenshot in `/docs`)
- [x] Custom block: `blocks/rate-table`, a rate comparison table driven by a published spreadsheet (`/rates.json`)
- [ ] Rate table authored on a live page
- [ ] 3-min demo video link
