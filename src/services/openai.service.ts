import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { BookCreateDto, CreateAvatarDto } from '../types/response';
import { ChatCompletionMessageParam } from 'openai/resources';
import Constants from '../utils/constants';

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY
});

const rootDirectory = process.cwd();

export default class OpenAiService {
  static async generateImage(data: CreateAvatarDto): Promise<string> {
    let prompt =
      'Generate a fully captured 2D image of a single handsome or beautiful kid between age range 4 to 10 putting on colorful wears and with lively gestures or pose. ';
    prompt += ' Image should be at the center with plenty white spaces around it. ';
    prompt += ' Image should capture the human head, full body and footwear.';
    prompt += ' Other characteristics include: ';

    if (data.gender) {
      prompt += ` gender is: ${data.gender}`;
    }
    if (data.skinColor) {
      prompt += ` skin color is: ${data.skinColor}`;
    }
    if (data.hairStyle) {
      prompt += ` hair style is: ${data.hairStyle}`;
    }
    if (data.hairColor) {
      prompt += ` hair color is: ${data.hairColor}`;
    }
    if (data.eyeColor) {
      prompt += ` eye color is: ${data.eyeColor}`;
    }
    if (data.glasses) {
      prompt += ` ${data.glasses ? 'has' : 'has no'} glasses`;
    }
    prompt += ' Image should feature only one human head, two legs and two arms.';
    prompt += ' Image background color: #141122';
    prompt +=
      ' Important note: just a single kid, no variant, no extra data, no color wheel and with colorful dark background; image would be used for kids book';

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      quality: 'hd',
      // size: '1024x1792'
      size: '1024x1024'
      // style: 'natural'
      // response_format: 'b64_json'
    });
    return response.data[0].url ?? '';
  }

  static async generateImageFromSummary(summary: string): Promise<string> {
    let prompt = `Generate a fully captured colorful 2D image that summarizes and properly depicts this: ${summary} \n`;

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      quality: 'hd',
      // size: '1024x1792'
      size: '1024x1024'
      // style: 'natural'
      // response_format: 'b64_json'
    });
    return response.data[0].url ?? '';
  }

  static async generateCoverPageImage(summary: string): Promise<string> {
    let prompt = `Generate a fully captured colorful 2D image that summarizes and properly depicts this: ${summary} `;
    prompt +=
      ' and with a nice playful kid font, print the book title and strategically place it at the center of the image';

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      quality: 'hd',
      // size: '1024x1792'
      size: '1024x1024'
      // style: 'natural'
      // response_format: 'b64_json'
    });
    return response.data[0].url ?? '';
  }

  static async reGenerateImage(imagePath: string): Promise<string> {
    const img = await this.loadImageFromUrl(imagePath);

    const response = await openai.images.createVariation({
      model: 'dall-e-2',
      image: fs.createReadStream(img),
      n: 1,
      size: '1024x1024'
    });
    return response.data[0].url ?? '';
  }

  static async loadImageFromUrl(url: string) {
    try {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const imageData = Buffer.from(buffer);
      const filePath = path.join(rootDirectory, 'assets', 'img', 'regenerated.png');
      fs.writeFileSync(filePath, imageData);

      return filePath;
    } catch (error) {
      console.error('Error loading image from URL:', error);
      throw error;
    }
  }

  static async generateAIBook(book: BookCreateDto): Promise<string> {
    try {
      let prompt = `write a fun 1000 words story of a kid\n`; //originally 6000
      prompt += ' divide into chapters\n';
      // prompt += ' format properly and output should come out as html';
      prompt += ` format properly and separate each chapter with ${Constants.SectionSeparator}\n`;
      prompt += ' each chapter should be wrapped around a section tag with class name chapter\n';
      prompt += ' the chapter title should be wrapped around the h1 tag\n';
      prompt += ' please add the first chapter which should be the introduction chapter  tag\n';
      prompt += ' also, add the last chapter which should be the conclusion chapter  tag\n';
      prompt += ' wrap each chapter title with an h2 tag and a class name called chapter-title\n';
      prompt += ' wrap each paragraph a p tag and a class name called chapter-paragraph.\n';
      prompt += ' other important information to be taken into consideration include: \n';
      prompt += ` protagonist age: ${book.age} \n`;
      prompt += ` protagonist name: ${book.firstName} \n`;
      prompt += ` protagonist family member: ${book.familyMembers} \n`;
      prompt += ` protagonist family member: ${book.familyMembers} \n`;
      prompt += ` protagonist gender: ${book.gender} \n`;
      prompt += ` protagonist race and skin color: ${book.skinColor} \n`;
      prompt += ` protagonist hair style: ${book.skinColor} \n`;
      prompt += ` protagonist hair color: ${book.hairColor} \n`;
      prompt += ` protagonist eye color: ${book.eyeColor} \n`;
      prompt += ` protagonist ${book.glasses ? 'uses' : 'does not use'} glasses \n`;
      prompt += ` some personal events: ${book.personalEvents}, it's very important you write one or more chapters about these events. \n`;
      prompt += ` some personal message: ${book.personalMsg}, it's very important you write one or more chapters about these events. \n`;
      prompt += ' please remove doctype and any head tag from result \n';
      prompt +=
        ' now summarize and give the book a concise title, should be in an h1 tag with the class our-book-title \n';

      // theme: string;
      // console.log({ prompt });

      const message: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: prompt
        }
      ];

      const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages: message
      });

      return res.choices[0].message.content || '--';
    } catch (error) {
      console.error('Error loading image from URL:', error);
      throw error;
    }
  }
}
