# Netlify Plugin Generate PDF
Generate a PDF from HTML at the provided URL and save it to publish directory.

## Install

Copy [index.js](src/index.js), <manifest.yml> and <package.json> to `plugins/netlify-plugin-generate-pdf` on your repo and run `npm install`.

And add this to `netlify.toml`:

```toml
# you need this to run locally saved plugins: https://answers.netlify.com/t/plugin-local-install-core/15268
[[plugins]]
  package = "@netlify/plugin-local-install-core"

[[plugins]]
  package = "./plugins/netlify-plugin-generate-pdf"

  [plugins.inputs]
  url="my-site.netlify.app"
```

## Configuration

The following `inputs` options are available.

| Name | Type | Description | Default value | Required |
|-|-|-|-|-|
| url | string | abosulte path to generate PDF from |-| true |
| fileName | string | name of generated PDF file | index.pdf | false |
| format | string | Print format | A4 | false |
| printBackground | boolean | Enable if you want to print images and backgrounds | true | false |
| displayHeaderFooter | boolean | Add a header and footer to each page | false | false |
| headerTemplate | string | HTML for page header | - | false |
| footerTemplate | string | HTML for page footer | - | false |
| margin | object | Page margin | { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' } | false |
