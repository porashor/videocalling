'use client'
import Intro from './Intro'
import PostArea from './PostArea'
import ShowPost from './ShowPost'
const ProfileView = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-5'>
        <Intro/>
        <div>
          <PostArea/>
          <ShowPost/>
        </div>
    </div>
  )
}

export default ProfileView
