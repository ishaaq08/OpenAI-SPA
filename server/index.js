const chat = require("./chatgpt")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/getchat", async (req,res) => {
    const message = req.body.message
    const output = await chat(message)
    res.send({message: output})
})

app.listen(3000, ()=>{
    console.log("Server on port 3000");
})