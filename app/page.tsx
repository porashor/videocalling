import { MdVideoCall } from "react-icons/md";
import Link from 'next/link';
const page = () => {
  return (
    <div className='bg-cyan-800 w-full h-screen relative flex items-center justify-center'>
      <div className='w-50 aspect-square bg-cyan-300 rounded-full absolute shadow-[0_0_20px_10px] shadow-cyan-300 animate-ping'></div>
      <div className='bg-red-500 w-25 aspect-square rounded-full flex items-center justify-center z-100 border-2 border-slate-600'>
        <Link href="/profile"><MdVideoCall size={50} /></Link>
      </div>
    </div>
  )
}

export default page
