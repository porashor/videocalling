import React from 'react'

const UpdateProfile = () => {
  return (
    <div className='w-full h-fit'>
      <form className='text-xl'>
        <label htmlFor="phone" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>Phone :</span>
            <input type="text" id='phone' className='bg-slate-200 text-black py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='phone'/>
        </label>
        <label htmlFor="ser" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>Service :</span>
            <input type="text" id='ser' className='bg-slate-200 text-black py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='Service'/>
        </label>
        <label htmlFor="abo" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>About :</span>
            <textarea id='abo' className='bg-slate-200 text-black py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='About'/>
        </label>
        <label htmlFor="address" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>Address :</span>
            <input type="text" id='address' className='bg-slate-200 text-black py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='Address'/>
        </label>
        <label htmlFor="profilePic" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className=''>Profile pic :</span>
            <input type="file" id='profilePic' className='' placeholder='Profile pic'/>
        </label>
        <label htmlFor="coverPic" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className=''>Cover pic :</span>
            <input type="file" id='coverPic' className='' placeholder='Cover pic'/>
        </label>
        <button type='submit' className='py-2 bg-cyan-600 text-white uppercase font-bold rounded-xl hover:bg-cyan-400 transition-all duration-200 mt-3 w-full'>Update</button>
      </form>
    </div>
  )
}

export default UpdateProfile
