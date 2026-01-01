'use client'
import UpdateProfile from "./UpdateProfile"
import ProfileView from "./ProfileView"
import { upnav } from "@/function/UpnavStore"

const ProfileData = () => {
  const {open} = upnav()
  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-1 text-white'>
      {/* nav position */}
      <div>
        
        <div>
          {open == 1 && <div className="py-5"><UpdateProfile /></div>}
          {open == 2 && <div className="py-5"><ProfileView/></div>}
          {open == 3 && <div className="py-5">Chatting section</div>}
          {open == 4 && <div className="py-5">Find user section</div>}
        </div>
      </div>
    </div>
  )
}

export default ProfileData
