import puppeteer from 'puppeteer';
import path from 'path';
import config from '../config/config';

async function generatePDFfromHTML(htmlContent: string, outputPath: string): Promise<string> {
  // let timeInMil: any = new Date();
  // timeInMil = timeInMil.getTime();

  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  // await page.setViewport({ width: 1200, height: 800 }); // Set viewport to a landscape aspect ratio

  await page.setContent(htmlContent, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });

  const cssPath = path.resolve('html/assets/style.css');
  await page.addStyleTag({ path: cssPath });

  await page.pdf({ path: outputPath, format: 'A5', printBackground: true }); // Set landscape option to true
  await browser.close();

  const relativePath = path.relative(path.resolve(__dirname, '../'), outputPath);
  const baseUrl = config.baseUrl;
  return `${baseUrl}/${relativePath}`;
  // return `file://${path.resolve(outputPath)}`;
}

export default {
  generatePDFfromHTML
};
