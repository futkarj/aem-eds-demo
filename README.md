# AEM Edge Delivery Services — Doc-to-Site Demo

A presales demo of Adobe Edge Delivery Services: document authoring, a CDN-first architecture, and custom blocks.
Write-up and talk track: https://rohit-jain-portfolio.super.site/blog/eds-demo

**Live:** https://main--aem-eds-demo--futkarj.aem.live

## Set up from scratch (~10 min, free)
1. Go to https://github.com/adobe/aem-boilerplate and click **Use this template** → name the repo `aem-eds-demo` (public).
2. Install the **AEM Code Sync** GitHub app on this repo: https://github.com/apps/aem-code-sync
3. Content source, pick one:
   - **Document Authoring:** https://da.live → create a site pointing at `futkarj/aem-eds-demo`
   - **Google Drive:** create a folder, share it with `helix@adobe.com`, and set its URL in `fstab.yaml`
4. Install the **AEM Sidekick** browser extension, then preview and publish the `index` doc.
5. Open `https://main--aem-eds-demo--futkarj.aem.page` (preview) / `.aem.live` (live).

> Follow the official tutorial if any step differs: https://www.aem.live/developer/tutorial

## Local development
```bash
npm i
npm install -g @adobe/aem-cli
aem up        # http://localhost:3000, proxies content from your preview site
```

## Demo checklist
- [ ] PageSpeed Insights run (screenshot in `/docs`)
- [ ] Custom block 1: `blocks/YOUR-BLOCK-1`
- [ ] Spreadsheet-driven block (published sheet → JSON)
- [ ] 3-min demo video link
