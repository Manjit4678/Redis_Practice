import express from "express"
import axios from "axios"

import {client} from "./client.js"

const app = express()

app.get('/',async (req,res)=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    return res.json(data);
})


app.listen(4000,()=>{
    console.log(`server is listening at port ${4000}`)
})
