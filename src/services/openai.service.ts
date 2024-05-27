import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { BookCreateDto } from '../types/response';
import { ChatCompletionMessageParam } from 'openai/resources';
import Constants from '../utils/constants';
import axios from 'axios';

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

  static async generateImage(prompt: string): Promise<string> {
    // const res = axios.post('https://api.stability.ai/v2beta/stable-image/generate/core', {
    //   headers: {
    //     Authorization: `Bearer ${process.env.STABILITY_AI_KEY}`
    //   }
    // });

    const formData = {
      prompt: prompt,
      output_format: 'png'
    };

    const res = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/core`,
      axios.toFormData(formData, new FormData()),
      {
        // validateStatus: undefined,
        // responseType: 'arraybuffer',
        headers: {
          // Authorization: `Bearer ${process.env.STABILITY_AI_KEY}`,
          Authorization: `Bearer sk-VJ8ETeZGFE8gj4fD8AYVJJ9VQTRS9nwSDxVzr5u3zz4rnJ7I`,
          Accept: 'application/json'
        }
      }
    );
    // console.log({ res: res.data });
    return `data:image/png;base64,${res?.data?.image}`; //res.data.seed
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

  // could be made to return only a prompt sef
  static async generateMainCharacter(book: BookCreateDto): Promise<string> {
    try {
      const { firstName, age, gender, skinColor, hairStyle, hairColor, eyeColor, glasses, theme } =
        book;

      let prompt = `Using a fully captured colorful 3D image Pixar-like theme, create a 'single-person' detailed illustration of a full character named ${firstName}.

      This character is ${age} years old, ${gender}, and has ${skinColor} skin.

      They have ${hairStyle} hair that is ${hairColor}, and their eye color is ${eyeColor}.

      They ${glasses ? 'wear' : 'do not wear'} glasses.

      The character is set in a ${theme} environment.

      The image should be highly detailed and realistic, the character should be captured from head to foot.

      ${firstName} is often dressed in comfortable, practical clothes: a well-worn pair of jeans, a soft t-shirt with a faded print of their favorite cartoon character, and a pair of sturdy sneakers.

      The character should be consistent and detailed based on the above description.`;

      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        quality: 'hd',
        size: '1024x1024'
        // size: '1024x1792'
        // style: 'natural'
      });
      console.log(response.data[0], '>>>>>>>>>>>> main character');
      return response.data[0].url ?? '';
    } catch (error) {
      console.error('Error generating main character');
      throw error;
    }
  }

  static mainCharacterPrompt = (book: BookCreateDto) => {
    const { firstName, age, gender, skinColor, hairStyle, hairColor, eyeColor, glasses, theme } =
      book;
    return `Using a fully captured colorful 3D image Pixar-like theme, create a 'single-person' detailed illustration of a full character named ${firstName}.

    This character is ${age} years old, ${gender}, and has ${skinColor} skin.

    They have ${hairStyle} hair that is ${hairColor}, and their eye color is ${eyeColor}.

    They ${glasses ? 'wear' : 'do not wear'} glasses.

    The character is set in a ${theme} environment.

    The image should be highly detailed and realistic, the character should be captured from head to foot.

    ${firstName} is often dressed in comfortable, practical clothes: a well-worn pair of jeans, a soft t-shirt with a faded print of their favorite cartoon character, and a pair of sturdy sneakers.

    The character should be consistent and detailed based on the above description.`;
  };
}
