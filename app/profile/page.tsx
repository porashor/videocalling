import ProfileData from "@/component/ProfileData"


const page = () => {
  return (
    <div className="bg-cyan-700 min-h-screen p-5 ">
      {/* container  */}
      <div className=" w-full h-full border-2 border-slate-700 min-h-screen rounded-2xl">
        {/* upperfase  */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-5 relative h-120 md:h-160 border-b-2 border-slate-700">
            {/* cover photo */}
            <div className="w-full aspect-5/2 bg-slate-700"></div>
            {/* profile photo */}
            <div className="w-32 md:w-40 aspect-square rounded-full border-2 border-slate-900 bg-slate-400 absolute top-[30%] md:top-[68%] left-[34%] md:left-2.5"></div>
            {/* profile info */}
            <div className="absolute w-[80%] h-25 text-white text-center md:text-left left-10 md:left-50 top-[65%] md:top-[75%]">
                {/* user details  */}
                <h1 className="text-2xl font-bold">Parashar Das</h1>
                <p className="text-xl">Web developer at upwork</p>
                <p>A passionate Mern stack developer with 5+ years of experience</p>
            </div>
        </div>
        {/* user funcionality */}
        <ProfileData/>
      </div>
    </div>
  )
}

export default page
