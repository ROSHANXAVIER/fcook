import React from 'react'
import { useState } from 'react';
import './homepage.css'

function Homepage() {
    const { Configuration, OpenAIApi } = require("openai");
const [res,setRes]=useState("");
const [loading,setLoading]=useState(false);

const configuration = new Configuration({
  apiKey:process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function hello(){
  setLoading(false);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a recipe based on these ingredients ${data} and give only Instructions:`,
        temperature: 0.3,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      console.log(response);  
      setRes(response.data.choices[0].text);
      setLoading(true);
      
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
      <a href='#page1'><button className="headbtn"><span class="material-symbols-outlined">
arrow_drop_down_circle
</span></button></a>
    </div>
    <div className='second-page'>
      <h1 id='page1'>What ingredients have you got?</h1>
      <div className='sidebyside1'>
        <div className='ing'>

        <textarea placeholder='Eg: 1)Egg' className='ingredients' onChange={HandleChange}></textarea>
        <a href='#go'><button className='ing-btn' onClick={handleClick}>RECIPE</button></a>
        </div>
     
      <img src='https://images.unsplash.com/photo-1503453776591-b4548af666a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWYlMjBhbmltYXRlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'  alt="chef" className='chefimg'/>
      </div>
    </div>
    <div id="page3">
    {(!loading) && <div>Your recipe is getting ready</div>}
    {(loading) && <div>Here's your recipe</div>}
      
      <div>
      {(!loading) && <img alt='kms' className='load' src='https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg'/>}
        {(loading) && <textarea  className='recipe' value={res}>{res}</textarea>}
        <p id='go'></p>
      </div>
      <br></br>
    </div>
   </div>
  )
}

export default Homepage