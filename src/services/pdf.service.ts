import puppeteer from 'puppeteer';
import path from 'path';
import * as fs from 'fs';
import handlebars from 'handlebars';

async function generatePDFfromHTML(htmlContent: string, outputPath: string): Promise<string> {
  const templateHtml = fs.readFileSync(path.join(process.cwd(), 'html/index.hbs'), 'utf8');
  const template = handlebars.compile(templateHtml);
  const html = template({
    title: 'A new Brazilian School',
    date: '05/12/2018',
    name: 'Rodolfo Luis Marcos',
    age: 28,
    birthdate: '12/07/1990',
    course: 'Computer Science',
    obs: 'Graduated in 2014 by Federal University of Lavras, work with Full-Stack development and E-commerce.'
  });

  // let timeInMil: any = new Date();
  // timeInMil = timeInMil.getTime();

  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  // await page.setViewport({ width: 1200, height: 800 }); // Set viewport to a landscape aspect ratio

  await page.setContent(html, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });

  const cssPath = path.resolve('html/assets/style.css');
  await page.addStyleTag({ path: cssPath });

  await page.pdf({ path: outputPath, format: 'A5', printBackground: true }); // Set landscape option to true
  await browser.close();
  return `file://${path.resolve(outputPath)}`;
}

export default {
  generatePDFfromHTML
};
