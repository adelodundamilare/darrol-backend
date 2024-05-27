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
      width: '200mm',
      height: '200mm',
      printBackground: true
    });
    const extPdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await pdfDoc.copyPages(extPdfDoc, [0]);
    copiedPages.forEach((page) => pdfDoc.addPage(page));
  }

  const mergedPdfBytes = await pdfDoc.save();
  await fs.writeFile(outputPath, mergedPdfBytes);
  await browser.close();
  console.log('>>>>>>>>>>>> success generatePDFfromHTML: Merged PDF created successfully');

  const baseUrl = config.baseUrl;
  return `${baseUrl}/${path.basename(outputPath)}`;
  // return `file://${path.resolve(outputPath)}`;
}

async function generatePDFCoverFromHTML(htmlContent: string, outputPath: string): Promise<string> {
  // const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // const pdfDoc = await PDFDocument.create();

  await page.setContent(htmlContent, { waitUntil: ['load', 'networkidle0', 'domcontentloaded'] });
  const cssPath = path.resolve('html/assets/style.css');
  await page.addStyleTag({ path: cssPath });
  await page.pdf({
    path: outputPath,
    width: '445.5mm',
    height: '236.0mm',
    // width: '200mm',
    // height: '200mm',
    printBackground: true
  });
  // const extPdfDoc = await PDFDocument.load(pdfBytes);
  // const copiedPages = await pdfDoc.copyPages(extPdfDoc, [0]);
  // copiedPages.forEach((page) => pdfDoc.addPage(page));

  // const mergedPdfBytes = await pdfDoc.save();
  // await fs.writeFile(outputPath, mergedPdfBytes);
  // await browser.close();
  console.log('>>>>>>>>>>>> success::: generatePDFCoverFromHTML');

  const baseUrl = config.baseUrl;
  return `${baseUrl}/${path.basename(outputPath)}`;
}

export default {
  generatePDFfromHTML,
  generatePDFCoverFromHTML
};
