import React from 'react'
import { useState } from 'react'

function Pass_Gen() {

  const [val, SetValue] = useState(12);
  const [loweralpha, SetLoweralpha] = useState(false);
  const [upperalpha, SetUpperalpha] = useState(false);
  const [num, SetNum] = useState(false);
  const [special, SetSpecial] = useState(false);
  const [Password, SetPassword] = useState("");

  const gen_pass = ()=>{
    let tot_pass = "";
    if(loweralpha)tot_pass += "abcdefghijklmnopqrstuvwxyz";
    if(upperalpha)tot_pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num)tot_pass += "1234567890";
    if(special)tot_pass += "!@#$%^&*().,><?/\|{}[]:;'";
    
    let pass = "";
    for(var i = 0; i < val; i++)
    {
      const rand_ind = Math.floor(Math.random() * tot_pass.length);
      pass += tot_pass[rand_ind];
    }
    //console.log(pass);
    SetPassword(pass);
  }

  let copypass = ()=>{
    navigator.clipboard.writeText(Password);
  }
  return (
    <div className='Main_cont h-screen w-screen flex justify-center items-center bg bg-green-600'>
      <div className='cont w-80 bg bg-red-400'>
          <div className='Gp flex justify-center my-1'>
            <label>
              <h1 className='Heding font-bold text-3xl'>Generate Password</h1>
            </label>
          </div>
          <div>
            <input type='range' className='w-full p-2' min="10" max="30" value={val} onChange={(e)=>SetValue(e.target.value)}></input>
          </div>
          <div className='flex justify-between'>
            <span className='ml-8 font-bold my-2'>UpperCase</span>
            <input type='checkbox' className='mr-8' onClick={()=>SetUpperalpha(!upperalpha)}></input>
          </div>
          <div className='flex justify-between'>
            <span className='ml-8 font-bold my-2'>LowerCase</span>
            <input type='checkbox' className='mr-8' onClick={()=>SetLoweralpha(!loweralpha)}></input>
          </div>
          <div className='flex justify-between'>
            <span className='ml-8 font-bold my-2'>Numeric Value</span>
            <input type='checkbox' className='mr-8' onClick={()=>SetNum(!num)}></input>
          </div>
          <div className='flex justify-between'>
            <span className='ml-8 font-bold my-2'>Special Char</span>
            <input type='checkbox' className='mr-8' onClick={()=>SetSpecial(!special)}></input>
          </div>
          <div className='flex justify-center'>
          <button className='font-bold text-2xl border border-black bg-red-200 mt-8' onClick={gen_pass}>Get Password</button>
          </div>
          
          <div className='flex justify-between my-4'>
            <span className='bg-white font-bold p-1 ml-4 border border-black rounded'>{Password}</span>
            <button className='bg-white mr-4 border border-black rounded p-1' onClick={copypass}>copy</button>
          </div>
      </div>
    </div>
  )
}

export default Pass_Gen

