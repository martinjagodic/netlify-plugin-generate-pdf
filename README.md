# Netlify Plugin Generate PDF

Generate a PDF from the provided URL and save it to publish directory.

## Install

`npm install -D netlify-plugin-generate-pdf`

And add this to your `netlify.toml`

```toml
[[plugins]]
  package = "netlify-plugin-generate-pdf"

  [plugins.inputs]
  # It has to begin with http
  url="https://your-site.netlify.app/"
```

## Configuration

The following `inputs` options are available.

| Name                | Type    | Description                                        | Default value | Required |
| ------------------- | ------- | -------------------------------------------------- | ------------- | -------- |
| url                 | string  | abosulte path to generate PDF from                 | -             | true     |
| fileName            | string  | name of generated PDF file                         | index.pdf     | false    |
| format              | string  | Print format                                       | A4            | false    |
| printBackground     | boolean | Enable if you want to print images and backgrounds | true          | false    |
| displayHeaderFooter | boolean | Add a header and footer to each page               | false         | false    |
| headerTemplate      | string  | HTML for page header                               | -             | false    |
| footerTemplate      | string  | HTML for page footer                               | -             | false    |
| margin              | object  | Page margin                                        |

```toml
[plugins.inputs.margin]
  top = '1cm'
  right = '1cm'
  bottom = '1cm'
  left = '1cm'
```

| false |
