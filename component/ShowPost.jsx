'use client'
import {useEffect} from 'react'
import {postHandles} from "@/function/PostFunction"
import CardContainer from './CardContainer'
import { formatDistanceToNow } from "date-fns";

const ShowPost = () => {
    const {allPosts, getPost} = postHandles()
    useEffect(() => {
        getPost()
    }, [])
    const {posts} = allPosts
    const reversePosts = [...posts].reverse()
    console.log(posts)
  return (
    <div className='space-y-5 py-5'>
      {reversePosts?.map((post) => (
        <CardContainer key={post._id} className=''>
            <div>
                <p>{post.postdata}</p>
                <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
            </div>
        </CardContainer>
      ))}
    </div>
  )
}

export default ShowPost
