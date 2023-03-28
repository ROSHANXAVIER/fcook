import React from 'react'
import { useState } from 'react';
import './homepage.css'

function Homepage() {
    const { Configuration, OpenAIApi } = require("openai");
const [res,setRes]=useState("");
const [loading,setLoading]=useState(false);
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
async function hello(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a recipe based on these ingredients ${data} and Instructions:`,
        temperature: 0.3,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      console.log(response);
      setRes(response.data.choices[0].text);
      
}

const [data,setData]=useState("");
const HandleChange=(e)=>{
    setData(e.target.value)
}

const handleClick=async()=>{
  console.log(data)
  await hello();
}

  return (
   <div className='main'>
    <div className='head'>
      <h1 className='heading'>Let's get to cooKING!!</h1>
      <img className='head-img' alt="food" src='https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80'/>
    </div>
    <div>
      <h1>LETS COOK</h1>
      <input></input>
    </div>
   </div>
  )
}

export default Homepage