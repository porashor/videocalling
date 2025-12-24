import Login from '@/component/Login'
import Singin from '@/component/Singin'
const page = () => {
  return (
    <div className='w-full h-screen  bg-cyan-700 text-white overflow-auto '>
      {/* main container  */}
      <div className='border-2 border-slate-700 rounded-2xl h-screen flex items-center justify-center m-5'>
       <Login/>
       <Singin/>
      </div>
    </div>
  )
}

export default page
