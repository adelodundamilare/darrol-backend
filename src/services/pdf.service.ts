import puppeteer from 'puppeteer';
import path from 'path';
import config from '../config/config';

async function generatePDFfromHTML(htmlContent: string, outputPath: string): Promise<string> {
  // let timeInMil: any = new Date();
  // timeInMil = timeInMil.getTime();

  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  // await page.setViewport({ width: 1200, height: 800 }); // Set viewport to a landscape aspect ratio

  // const imagePath = ;
  // console.log({ imagePath });
  await page.evaluate(() => {
    // document.body.style.backgroundColor = 'lightblue'; // Set background color
    document.body.style.backgroundImage = `url("${path.resolve(
      'html/assets/images/section-bg.jpg'
    )}")`;
  });

  await page.setContent(htmlContent, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });

  const cssPath = path.resolve('html/assets/style.css');
  await page.addStyleTag({ path: cssPath });

  await page.pdf({ path: outputPath, format: 'A5', printBackground: true }); // Set landscape option to true
  await browser.close();

  // const relativePath = path.relative(path.resolve(__dirname, '../'), outputPath);
  const baseUrl = config.baseUrl;
  // Return the relative path to the saved file
  // const relativePath = path.relative(__dirname, outputPath); // Get the relative path
  return `${baseUrl}/${path.basename(outputPath)}`;
  // return `file://${path.resolve(outputPath)}`;
}

export default {
  generatePDFfromHTML
};
