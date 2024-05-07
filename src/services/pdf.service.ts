import puppeteer from 'puppeteer';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';
//
import config from '../config/config';

async function generatePDFfromHTML(htmlContents: string[], outputPath: string): Promise<string> {
  // let timeInMil: any = new Date();
  // timeInMil = timeInMil.getTime();

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const pdfDoc = await PDFDocument.create();

  // for (let i = 0; i < htmlContents.length; i++) {
  //   const url = htmlContents[i];
  //   const cssPath = path.resolve('html/assets/style.css');
  //   await page.addStyleTag({ path: cssPath });
  //   await page.goto(url, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });
  //   const pdfBytes = await page.pdf({
  //     format: 'A4',
  //     printBackground: true,
  //     margin: { top: '0px', left: '0px', right: '0px', bottom: '0px' }
  //   });
  //   const extPdfDoc = await PDFDocument.load(pdfBytes);
  //   const copiedPages = await pdfDoc.copyPages(extPdfDoc, [0]);
  //   copiedPages.forEach((page) => pdfDoc.addPage(page));
  // }

  // const mergedPdfBytes = await pdfDoc.save();
  // await fs.writeFile('merged.pdf', mergedPdfBytes);
  // await browser.close();

  for (const item of htmlContents) {
    // console.log({ item });
    // await page.goto(url, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });
    await page.setContent(item, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });
    const cssPath = path.resolve('html/assets/style.css');
    await page.addStyleTag({ path: cssPath });
    const pdfBytes = await page.pdf({
      width: '850px',
      height: '850px',
      printBackground: true
    });
    const extPdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await pdfDoc.copyPages(extPdfDoc, [0]);
    copiedPages.forEach((page) => pdfDoc.addPage(page));
  }

  const mergedPdfBytes = await pdfDoc.save();
  await fs.writeFile(outputPath, mergedPdfBytes);
  await browser.close();
  console.log('Merged PDF created successfully');

  // await page.setContent(htmlContent, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });

  // const cssPath = path.resolve('html/assets/style.css');
  // await page.addStyleTag({ path: cssPath });
  // await page.pdf({ path: outputPath, format: 'A4', printBackground: true }); // Set landscape option to true
  // await browser.close();

  const baseUrl = config.baseUrl;
  return `${baseUrl}/${path.basename(outputPath)}`;
  // return `file://${path.resolve(outputPath)}`;
}

export default {
  generatePDFfromHTML
};
