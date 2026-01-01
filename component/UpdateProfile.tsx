'use client'
import {userHandle} from "@/function/UserZust"
import React from "react"
import CardContainer from "./CardContainer"
const UpdateProfile = () => {
    const {phone, address, about, service, profilePic, coverPic, setPhone, setAddress, setAbout, setService, setProfilePic, setCoverPic, updateProfile} = userHandle()
  return (
    <CardContainer className="">
      <form className='text-xl' onSubmit={(e)=>updateProfile(e, phone, address, about, service, profilePic as File, coverPic as File)}>
        <label htmlFor="phone" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>Phone :</span>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} id='phone' className=' bg-[#1C1C1D] text-white py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='phone'/>
        </label>
        <label htmlFor="ser" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>Service :</span>
            <input type="text" id='ser' value={service} onChange={(e)=>setService(e.target.value)} className='bg-[#1C1C1D] text-white  py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='Service'/>
        </label>
        <label htmlFor="abo" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>About :</span>
            <textarea id='abo' value={about} onChange={(e)=>setAbout(e.target.value)} className='bg-[#1C1C1D] text-white  py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='About'/>
        </label>
        <label htmlFor="address" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className='hidden md:block'>Address :</span>
            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} id='address' className='bg-[#1C1C1D] text-white py-1 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='Address'/>
        </label>
        <label htmlFor="profilePic" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className=''>Profile pic :</span>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{if(e.target.files?.[0]) setProfilePic(e.target.files[0])}} type="file" id='profilePic' className='' placeholder='Profile pic'/>
        </label>
        <label htmlFor="coverPic" className='grid grid-cols-1 md:grid-cols-2 my-2'>
            <span className=''>Cover pic :</span>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{if(e.target.files?.[0]) setCoverPic(e.target.files[0])}} type="file" id='coverPic' className='' placeholder='Cover pic'/>
        </label>
        <button type='submit' className='py-2 bg-[#3B3D3E] text-white uppercase font-bold rounded-xl hover:bg-[#494949] transition-all duration-200 mt-3 w-full'>Update</button>
      </form>
    </CardContainer>
  )
}

export default UpdateProfile
