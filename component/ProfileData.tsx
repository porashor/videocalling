'use client'
import { useState } from "react"
import UpdateProfile from "./UpdateProfile"

const ProfileData = () => {
  const [open, setOpen] = useState(1)
  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-1 text-white'>
      {/* nav position */}
      <div>
        <ul className='flex items-center gap-2'>
          <li className={`bg-cyan-500 py-1 px-2 cursor-pointer ${open == 1? "bg-green-700": ""}`} onClick={()=>setOpen(1)}>Profile update</li>
          <li className={`bg-cyan-500 py-1 px-2 cursor-pointer ${open == 2? "bg-green-700": "hover:bg-cyan-600"}`} onClick={()=>setOpen(2)}>Profile view</li>
          <li className={`bg-cyan-500 py-1 px-2 cursor-pointer ${open == 3? "bg-green-700": "hover:bg-cyan-600"}`} onClick={()=>setOpen(3)}>Chatting</li>
          <li className={`bg-cyan-500 py-1 px-2 cursor-pointer ${open == 4? "bg-green-700": "hover:bg-cyan-600"}`} onClick={()=>setOpen(4)}>Find user</li>
        </ul>
        <div>
          {open == 1 && <div className="py-5"><UpdateProfile /></div>}
          {open == 2 && <div className="py-5">Profile view section</div>}
          {open == 3 && <div className="py-5">Chatting section</div>}
          {open == 4 && <div className="py-5">Find user section</div>}
        </div>
      </div>
    </div>
  )
}

export default ProfileData
