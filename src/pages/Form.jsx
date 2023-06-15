import React from 'react'
import Editor from '../components/Editor'
import Input from '../components/Input'
const Form = () => {
  return (
  <div className='py-2 space-y-2'>
    <h1 className="text-center font-bold text-3xl  md:text-4xl">Write an Essasy</h1>
     <form className='flex flex-col space-y-2 px-4 items-center  w-full py-4 justify-center md:px-8'>
     <Input label={"Email"} id={'email'} type={"email"} />
     <Input label={"name"} id={"name"} type={"text"}/>
     <Input label={"phone number"} id={"phone number"} type={"number"}/>
     <Editor/>
     <button className='px-4 py-2 bg-zinc-500 text-white rounded-md'>Submit</button>
   </form>
  </div>
  )
}

export default Form