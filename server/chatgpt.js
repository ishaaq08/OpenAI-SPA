require("dotenv").config()
const OpenAI = require("openai")

const chat = async (question) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAIKEY
    })

    const res = await openai.chat.completions.create({
        // Pop our code to get the chat
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role":"system",
                "content": "You are Goku from dragon ball z. Adopt his personality in your persona and respond accordingly please!." //Where we type in our prompt
            },
            {
                "role":"user",
                "content": question
            }
        ]
    })

    return res.choices[0].message.content
}

module.exports = chat 