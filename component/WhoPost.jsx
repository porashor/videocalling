'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
const WhoPost = ({post}) => {
    const [user, setUser] = useState({})
    async function fetchData() {
            try {
                const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registery/${post}`)
                const data = await user.json()
                return data
            } catch (error) {
                console.log(error)
                return  false
            }
        }
    useEffect(() => {
        fetchData().then((data) => setUser(data))
    }, [])
    const sendableData = user
    if(!user){
      return (
        <div>Loading...</div>
      )
    }
  return (
    <div className="flex items-center gap-2 pb-5">
      {sendableData && <Image src={sendableData.profilePic} width={100} height={100} alt="cover photo" className="w-10 aspect-square rounded-full bg-slate-600 relative object-cover" />}
      <div>{sendableData && sendableData.name}</div>
    </div>
  )
}

export default WhoPost
