import { createGoogleGenerativeAI, google } from '@ai-sdk/google'

const ai = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
})
