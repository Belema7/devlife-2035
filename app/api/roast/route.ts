import { NextRequest, NextResponse } from 'next/server';
import { generateRoastPrompt } from '../../../lib/aiPrompt';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

export async function POST(req: NextRequest) {
    try {
        if (!GEMINI_API_KEY) {
            console.error('Missing GEMINI_API_KEY in environment variables');
            return NextResponse.json({ roast: "CONFIG_ERROR: GEMINI_API_KEY is missing. Check your .env.local file." }, { status: 500 });
        }

        const result = await req.json();

        if (!result) {
            return NextResponse.json({ error: 'Missing diagnostic data' }, { status: 400 });
        }

        const prompt = generateRoastPrompt(result);

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.6,          // more controlled output
                    maxOutputTokens: 120,      // enough for 4 lines
                    topP: 0.9,
                },
                system_instruction: {
                    parts: [{
                        text: 'You are an elite, cynical senior developer from the year 2035.'
                    }]
                }
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            const errorMsg = errorData?.error?.message || response.statusText;
            console.error('Gemini API error:', errorMsg);

            if (response.status === 429) {
                return NextResponse.json({
                    roast: `QUOTA_EXHAUSTED: The AI is currently recharge-restricted. You're probably just a mediocre developer anyway :)`
                }, { status: 429 });
            }

            throw new Error(`Gemini API failed with status ${response.status}: ${errorMsg}`);
        }

        const data = await response.json();
        const roast = data?.candidates?.[0]?.content?.parts?.[0]?.text || "System failure. Your future is too bleak even for my circuits.";

        return NextResponse.json({ roast });

    } catch (error: any) {
        console.error('AI Roast Error:', error);
        return NextResponse.json(
            { roast: `SYSTEM_ERROR: Unable to calculate your specific doom. ${error.message || "Unknown error"}. You're probably just a mediocre developer anyway.` },
            { status: 500 }
        );
    }
}

