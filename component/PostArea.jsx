'use client'
import CardContainer from "./CardContainer"
import {useEffect} from 'react'
import { userHandle } from "@/function/UserZust"
import { postHandles} from "@/function/PostFunction"
import Image from "next/image"
import Button from "./Button"
const PostArea = () => {
    const {user, getUser} = userHandle()
    useEffect(() => {
        getUser()
    }, [])
    const {post, setPost, loading, postNow} = postHandles()
  return (
    <CardContainer className="space-y-5">
        <div className="flex items-center gap-5">
            <div className="w-10 aspect-square rounded-full bg-slate-600 relative">
                <Image src={user?.profilePic ? user.profilePic : ""} width={100} height={100} alt="cover photo" className="w-full h-full object-cover rounded-full" />
            </div>
            <input value={post} type="text" onChange={(e) => setPost(e.target.value)} placeholder="What's on your mind?" className='bg-[#3B3D3E] p-2 rounded-2xl w-full outline-0' />
        </div>
        <Button onClick={(e) => postNow(e, post)} className={`w-full ${post.length > 0 ? "block": "hidden"}`}>{loading? "loading...": "Post"}</Button>
    </CardContainer>
  )
}

export default PostArea
