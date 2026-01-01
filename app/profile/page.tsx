import ProfileData from "@/component/ProfileData"
import photo from "@/public/main.png"
import Image from "next/image"
import { cookies } from "next/headers"
import UpNav from "@/component/UpNav"




const page = async () => {
  const cookieStore = cookies()
  let user = null
  const token = (await cookieStore).get("auth_token")?.value
  try{
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", { 
      method: "GET", 
      headers: { 
        Cookie: token ? `auth_token=${token}` : "",
      }, 
      cache: "no-store", });
    const data = await res.json()
    user = data.user
  }catch(err){
    console.log(err)
  }
  console.log(user)
  const hasProfilePic = user && user.profilePic
  const hasCoverPic = user && user.coverPic
  return (
    <div className="">
      {/* container  */}
      <div className="bg-[#252728] min-h-screen p-5 ">
        {/* upperfase  */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-5 relative h-120 md:h-160 border-b border-slate-500">
            {/* cover photo */}
            <div className="w-full relative aspect-5/2 bg-slate-700 rounded-2xl">
              <Image src={hasCoverPic ? user.coverPic : photo} width={100} height={100} alt="cover photo" className="w-full h-full object-cover" />
            </div>
            {/* profile photo */}
            <div className="w-32 md:w-40 aspect-square rounded-full border-5 border-slate-900 bg-slate-400 absolute top-[30%] md:top-[68%] left-[34%] md:left-2.5 overflow-hidden">
              <Image src={hasProfilePic ? user.profilePic : photo} width={100} height={100} alt="profile photo" className="w-full h-full object-cover" />
            </div>
            {/* profile info */}
            <div className="absolute w-[80%] h-25 text-white text-center md:text-left left-10 md:left-50 top-[65%] md:top-[75%]">
                {/* user details  */}
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-xl">{user?.service}</p>
                <p>{user?.about}</p>
            </div>
        </div>
        {/* navigation  */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-white">
          <UpNav/>
        </div>
      </div>
        {/* user funcionality constainer*/}
        <div className="bg-[#1C1C1D] w-full p-0">
          <ProfileData/>
        </div>
    </div>
  )
}

export default page
