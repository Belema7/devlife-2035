import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { generateRoastPrompt } from '../../../lib/aiPrompt';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        const result = await req.json();

        if (!result) {
            return NextResponse.json({ error: 'Missing diagnostic data' }, { status: 400 });
        }

        const prompt = generateRoastPrompt(result);

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an elite, cynical senior developer from the year 2035."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 250,
        });

        const roast = response.choices[0]?.message?.content || "System failure. Your future is too bleak even for my circuits.";

        return NextResponse.json({ roast });
    } catch (error: any) {
        console.error('AI Roast Error:', error);
        return NextResponse.json(
            { roast: "OPENAI_API_KEY_MISSING_OR_INVALID: Unable to calculate your specific doom. You're probably just a mediocre 10x developer anyway." },
            { status: 500 }
        );
    }
}
