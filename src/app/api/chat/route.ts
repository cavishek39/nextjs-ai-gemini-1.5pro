import { StreamingTextResponse, streamText } from 'ai'
import { createGoogleGenerativeAI, google } from '@ai-sdk/google'

const model = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await streamText({
    model: google('models/gemini-1.5-pro-latest'),
    messages,
  })

  return new StreamingTextResponse(response.toAIStream())
}
