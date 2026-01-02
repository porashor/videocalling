'use client'
import {useEffect} from 'react'
import {postHandles} from "@/function/PostFunction"
import CardContainer from './CardContainer'
import { formatDistanceToNow } from "date-fns";
import Button from './Button'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import WhoPost from './WhoPost'



const ShowPost = () => {
    const {allPosts, getPost} = postHandles()
    useEffect(() => {
        getPost()
    }, [])
    const {posts} = allPosts
    let reversePosts
    if(posts?.length > 0){
      reversePosts = [...posts].reverse()
    }
    console.log(posts)
  return (
    <div className='space-y-5 py-5'>
      {reversePosts?.map((post) => (
        <CardContainer key={post._id}>
          {/* load who post */}
          {/* <WhoPost post={post.user} /> */}
            <div className='flex items-center justify-between'>
                <p>{post.postdata}</p>
                <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              {/* Like btn  */}
              <Button className={'flex items-center justify-center gap-2'}> <BiLike /> Like</Button>
              <Button className={'flex items-center justify-center gap-2'}> <BiDislike /> Disike</Button>
            </div>
        </CardContainer>
      ))}
    </div>
  )
}

export default ShowPost
