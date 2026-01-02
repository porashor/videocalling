'use client'
import React, { useEffect } from 'react'
import {userHandle} from '@/function/UserZust'
import CardContainer from './CardContainer'
import Button from './Button'
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { LuClock10 } from "react-icons/lu";
import { MdOutlinePhoneIphone } from "react-icons/md";
const Intro = () => {
    const {user, getUser, LogOut} = userHandle()
    useEffect(() => {
        getUser()
    }, [])
  return (
    <CardContainer className={"space-y-2"}>
        <h1 className='text-xl font-bold'>Intro</h1>
        {/* bio section  */}
        <div>
            <p>{user?.about}</p>
            <Button>edit</Button>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl font-bold text-[#aaa]'><RiProfileLine /> </h1>
            <p>Profile: {user?.profile ? user?.profile : "None"}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl font-bold text-[#aaa]'><MdOutlineDesignServices /> </h1>
            <p>Works at: {user?.service ? user?.service : "None"}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl font-bold text-[#aaa]'><IoHome /> </h1>
            <p>Lives in: {user?.address ? user?.address : "None"}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl font-bold text-[#aaa]'><CiLocationOn /> </h1>
            <p>From: {user?.perAddress ? user?.perAddress : "None"}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl font-bold text-[#aaa]'><MdOutlinePhoneIphone /> </h1>
            <p>Phone: {user?.phone ? user?.phone : "None"}</p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl font-bold text-[#aaa]'><LuClock10 /> </h1>
            <p>Joined on: {user?.cart ? user?.cart : "None"}</p>
        </div>
        <div>
            <Button onClick={()=>LogOut()}>Sign Out</Button>
        </div>
    </CardContainer>
  )
}

export default Intro
