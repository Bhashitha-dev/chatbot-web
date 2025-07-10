import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';



export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: "AIzaSyC3Npskk2xSgmdZnECPGlSterq4pwpJDlo",
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
