'use server';

/**
 * @fileOverview An AI chatbot for customer support, answering questions about products and services.
 *
 * - chatbotSupport - A function that handles the chatbot support process.
 * - ChatbotSupportInput - The input type for the chatbotSupport function.
 * - ChatbotSupportOutput - The return type for the chatbotSupport function.
 */

import {ai} from '../genkit';
import { z } from 'genkit';

const ChatbotSupportInputSchema = z.object({
  query: z.string().describe('The user query for the chatbot.'),
});
export type ChatbotSupportInput = z.infer<typeof ChatbotSupportInputSchema>;

const ChatbotSupportOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ChatbotSupportOutput = z.infer<typeof ChatbotSupportOutputSchema>;

export async function chatbotSupport(input: ChatbotSupportInput): Promise<ChatbotSupportOutput> {

  const result = await ai.generate({
  prompt: `You are a customer support chatbot for a tech company called Prolab IT Solutions.

  Your job is to answer questions about the company's products and services.
  Always reply in plain text. Do not use Markdown, asterisks, or special formatting.


  About Prolab IT Solutions:

    We are a passionate Sri Lankan tech company that helps individuals, students, and businesses with reliable tech solutions and support.

💻 Products(respond clearly using bullet points, no special characters like asterisks or Markdown symbols):
- **Laptops**: High-performance laptops for work, study, gaming, and business.
- **Desktops**: Custom-built desktop PCs for professionals and gamers.
- **Accessories**: Monitors, keyboards, mice, and other essential gear.
- **Networking Devices**: Routers, switches, and more for home and office setups.

🔧 Services(respond clearly using bullet points, no special characters like asterisks or Markdown symbols):
- **Technical Support**: Friendly expert help for device setup, repairs, and troubleshooting.
- **Learning Support**: We support students and beginners by sharing IT knowledge and guidance.
- **Open-source Advice**: Share information about popular tools like Kali Linux, Ubuntu, Nmap, and more.

  If a user asks a question you cannot answer, or expresses frustration, suggest they use the contact form to speak with a human expert.

  Answer the following question:` + input.query,
    });

    return {
      response: result.text,
    };
}
