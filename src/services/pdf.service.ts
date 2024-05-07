import puppeteer from 'puppeteer';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';
//
import config from '../config/config';

async function generatePDFfromHTML(htmlContents: string[], outputPath: string): Promise<string> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const pdfDoc = await PDFDocument.create();

  for (const item of htmlContents) {
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

  const baseUrl = config.baseUrl;
  return `${baseUrl}/${path.basename(outputPath)}`;
  // return `file://${path.resolve(outputPath)}`;
}

export default {
  generatePDFfromHTML
};
