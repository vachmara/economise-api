const { Configuration, OpenAIApi } = require("openai");
const system = require("./system.js")
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const dJSON = require('dirty-json');
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const corsOptions ={
    origin: process.env.LOCAL ? 'http://localhost:3000' : 'https://vachmara.github.io/economise', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

const generateRecipe = async (ingredients) => {
    try{
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            temperature: 1,
            max_tokens: 450,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            messages: [
                { 
                    "role": "system", 
                    "content": system.prompt
                }, 
                { 
                    role: "user", 
                    content: ingredients
                }
            ],
        });
        return completion.data?.choices[0]?.message.content;
    }
    catch(err){
        console.dir(err)
        return null;
    }
}

app.post('/api/generateRecipe', async (req, res) => {
    const {ingredients} = req.body;
    console.log(ingredients.join(", "))

    try{
        const recipe = await generateRecipes(ingredients.join(", "));
        console.dir(recipe)
        const r = dJSON.parse(recipe)
        
        return res.status(200).json({recipe: r})
    }
    catch(err){
        console.dir(err)
        return res.status(500).json({error: err.message})
    }
})

app.listen(process.env.PORT || 3333)