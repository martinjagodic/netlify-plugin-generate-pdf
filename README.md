Netlify Build plugin generate-pdf - Generate PDF from HTML.

# Install

Please install this plugin from the Netlify app.

# Configuration

The following `inputs` options are available.

- name: url
  description: abosulte path to generate PDF from
  required: true
- name: fileName
  description: name of generated PDF file
  required: false
  default: index.pdf
- name: format
  description: Print format
  required: false
  default: A4
- name: printBackground
  required: false
  default: true
- name: displayHeaderFooter
  required: false
  default: false
- name: headerTemplate
  required: false
- name: footerTemplate
  required: false
- name: margin
  description: Page margin
  default: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
  required: false
