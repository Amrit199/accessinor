import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Load your API key from environment variables
});

export async function POST(req) {
  try {
    const { link } = await req.json();
    console.log(link)
    const prompt = `Check the website accessibility for ${link}. Provide an accessibility report with details.`;

    // Use gpt-3.5-turbo if you don't have access to gpt-4
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    return new Response(JSON.stringify({ report: response.choices[0].message.content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error checking accessibility:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
