/* eslint-disable no-unused-vars */

const fs = require('fs')
const chromium = require('chrome-aws-lambda')
const puppeteer = require('puppeteer')

module.exports = {
  async onPostBuild({
    inputs,
    constants: { PUBLISH_DIR },
    utils: { build, status },
  }) {
    try {
      const browser = await puppeteer.launch({
        args: [...chromium.args, '--font-render-hinting=none'],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
      })

      const page = await browser.newPage()
      await page.goto(inputs.url)

      const pdf = await page.pdf({
        format: inputs.format,
        printBackground: inputs.printBackground,
        displayHeaderFooter: inputs.displayHeaderFooter,
        headerTemplate: inputs.headerTemplate,
        footerTemplate: inputs.footerTemplate,
        margin: inputs.margin,
      })

      fs.writeFile(PUBLISH_DIR + '/' + inputs.fileName, pdf, () => {
        console.log(inputs.fileName + ' saved to ' + PUBLISH_DIR)
      })

      await browser.close()
    } catch (error) {
      build.failBuild('Error: Failed to generate PDF:', { error })
    }

    status.show({ summary: 'PDF generated successfully!' })
  },
}
