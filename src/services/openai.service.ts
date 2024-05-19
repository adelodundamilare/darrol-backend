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
  // static async generateImage(data: CreateAvatarDto): Promise<string> {
  //   let prompt =
  //     'Generate a fully captured 2D image of a single handsome or beautiful kid between age range 4 to 10 putting on colorful wears and with lively gestures or pose. ';
  //   prompt += ' Image should be at the center with plenty white spaces around it. ';
  //   prompt += ' Image should capture the human head, full body and footwear.';
  //   prompt += ' Other characteristics include: ';

  //   if (data.gender) {
  //     prompt += ` gender is: ${data.gender}`;
  //   }
  //   if (data.skinColor) {
  //     prompt += ` skin color is: ${data.skinColor}`;
  //   }
  //   if (data.hairStyle) {
  //     prompt += ` hair style is: ${data.hairStyle}`;
  //   }
  //   if (data.hairColor) {
  //     prompt += ` hair color is: ${data.hairColor}`;
  //   }
  //   if (data.eyeColor) {
  //     prompt += ` eye color is: ${data.eyeColor}`;
  //   }
  //   if (data.glasses) {
  //     prompt += ` ${data.glasses ? 'has' : 'has no'} glasses`;
  //   }
  //   prompt += ' Image should feature only one human head, two legs and two arms.';
  //   prompt += ' Image background color: #141122';
  //   prompt +=
  //     ' Important note: just a single kid, no variant, no extra data, no color wheel and with colorful dark background; image would be used for kids book';

  //   if (data.gender) {
  //     prompt += ` gender is: ${data.gender}`;
  //   }
  //   if (data.skinColor) {
  //     prompt += ` skin color is: ${data.skinColor}`;
  //   }
  //   if (data.hairStyle) {
  //     prompt += ` hair style is: ${data.hairStyle}`;
  //   }
  //   if (data.hairColor) {
  //     prompt += ` hair color is: ${data.hairColor}`;
  //   }
  //   if (data.eyeColor) {
  //     prompt += ` eye color is: ${data.eyeColor}`;
  //   }
  //   if (data.glasses) {
  //     prompt += ` ${data.glasses ? 'has' : 'has no'} glasses`;
  //   }

  //   const response = await openai.images.generate({
  //     model: 'dall-e-3',
  //     prompt: prompt,
  //     n: 1,
  //     quality: 'hd',
  //     // size: '1024x1792'
  //     size: '1024x1024'
  //     // style: 'natural'
  //     // response_format: 'b64_json'
  //   });
  //   return response.data[0].url ?? '';
  // }

  static async generateImageFromSummary(summary: string, data: BookCreateDto): Promise<string> {
    let prompt = `Generate a fully captured colorful 3D image Pixar-like that summarizes and properly depicts this: ${summary} \n`;
    prompt += ' important! no text please, only colorful image or picture';
    prompt += ` important! theme should be ${data.theme}`;
    prompt +=
      " It's very important that: there Is no text in the images, there are no family members in the images, only the child itself; other characters may be present (for example, monkeys in the jungle theme and fish in the underwater theme ett). But not the family members themselves, as we do not know their physical characteristics.";
    // prompt +=
    //   " It's very important that these are continuously in the same style (Pixar-like) and that the character (the child) consistently looks exactly the same based on the physical characteristics of the child, and that there: - Is no text in the images - Are no family members in the images, only the child itself. Other characters may be present (for example, monkeys in the jungle theme and fish in the underwater theme). But not the family members themselves, as we do not know their physical characteristics.";
    prompt += ' for context, kindly find below the characteristics of the child';

    prompt += ` First name: ${data.firstName}\n`;
    prompt += ` Age: ${data.age}\n`;
    prompt += ` Skin color: ${data.skinColor}\n`;
    prompt += ` Hair color: ${data.hairColor}\n`;
    prompt += ` Eye color: ${data.eyeColor}\n`;
    prompt += ` Theme: ${data.theme}\n`;
    // prompt += ` Family members: ${data.familyMembers}\n`;
    prompt += ` Personal message: ${data.personalMsg}\n`;
    prompt += ` Personal events: ${data.personalEvents}\n`;
    if (data.glasses) {
      prompt += ` Has glasses: ${data.glasses ? 'yes' : 'no'}`;
    }
    prompt += `Use a style that is: Vibrant and eye-catching, Whimsical and fantastical, Realistic and detailed, Stylized and graphic, Watercolor and dreamy`;
    prompt += `Incorporate elements that reflect: The character's personality and traits, The theme and setting, The story's tone and mood, The character's relationships and interactions, The character's growth and development`;

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
    let prompt = `Generate a fully captured colorful 3D image that summarizes this topic: ${summary} `;
    // prompt += ` and with a nice playful kid font, write the text ${summary} and strategically place it at the right-center of the image`;

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
      let prompt = `Write a fun 1000 words story about a character with the following traits:\n`; //originally 6000
      prompt += ` First name: ${book.firstName}\n`;
      prompt += ` Age: ${book.age}\n`;
      prompt += ` Skin color: ${book.skinColor}\n`;
      prompt += ` Hair color: ${book.hairColor}\n`;
      prompt += ` Eye color: ${book.eyeColor}\n`;
      prompt += ` Theme: ${book.theme}\n`;
      prompt += ` Family members: ${book.familyMembers}\n`;
      prompt += ` Personal message: ${book.personalMsg}\n`;
      prompt += ` Personal events: ${book.personalEvents}\n`;
      prompt +=
        " Use the theme as the setting for the story and incorporate the character's traits and personal message in a creative and meaningful way.\n";
      prompt += ' divide into chapters\n';
      // prompt += ' format properly and output should come out as html';
      prompt += ` format properly and separate each chapter with ${Constants.SectionSeparator}\n`;
      prompt += ' each chapter should be wrapped around a section tag with class name chapter\n';
      prompt += ' the chapter title should be wrapped around the h1 tag\n';
      // prompt += ' please add the first chapter which should be the introduction chapter  tag\n';
      prompt += ' please add the last chapter which should be the conclusion chapter  tag\n';
      prompt += ' wrap each chapter title with an h2 tag and a class name called chapter-title\n';
      prompt += ' wrap each paragraph a p tag and a class name called chapter-paragraph.\n';
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
