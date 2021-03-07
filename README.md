# netlify-plugin-generate-pdf
This plugin will generate a PDF from HTML at the provided URL and save it to publish directory.

## Install

Please install this plugin from the Netlify app.

## Configuration

The following `inputs` options are available.

| Name | Type | Description | Default value | Required |
|-|-|-|-|-|
| url | string | abosulte path to generate PDF from |-| true |
| fileName | string | name of generated PDF file | index.pdf | false |
| format | string | Print format | A4 | false |
| printBackground | boolean | - | true | false |
| displayHeaderFooter | boolean | Add a header and footer to each page | false | false |
| headerTemplate | string | HTML for page header | - | false |
| footerTemplate | string | HTML for page footer | - | false |
| margin | object | Page margin | { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' } | false |
