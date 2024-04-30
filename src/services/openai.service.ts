import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { CreateAvatarDto } from '../types/response';
import { ChatCompletionMessageParam } from 'openai/resources';

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY
});

const rootDirectory = process.cwd();
const sampleImagePath = path.join(rootDirectory, 'assets', 'img', 'sample.png');

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

  static async generateAIBook(): Promise<string> {
    try {
      let prompt = 'write a fun 1000 words story of a kid between age 4 - 9';
      prompt += ' divide into chapters';
      // prompt += ' format properly and output should come out as html';
      prompt += ' format properly and separate each chapter with ============';
      prompt += ' the chapter title should be wrapped around the h1 tag';

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
