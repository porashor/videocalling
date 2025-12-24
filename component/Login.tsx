'use client'
import {userHandle} from "@/function/UserZust"

const Login = () => {
  const {signOrLog, setSignOrLog} = userHandle()
  return (
    <div className={'w-87.5 bg-white text-black min-h-80 p-5 hover:shadow-[0_0_50px_10px] shadow-cyan-200 transition-all duration-200 border-2 border-slate-400' + (signOrLog ? "block": "hidden")}>
      {/* main container  */}
      <div className='border-l border-slate-400 min-h-85 w- pl-2'>
        <h1 className='text-center py-2 text-2xl font-bold uppercase text-slate-600'>Log In</h1>
        {/* form  */}
        <form className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-slate-400 my-2'>
                username or email address
                <input type="text" name="email" id="email"  className='bg-slate-200 w-full py-2 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='username & email'/>
            </label>
            <label htmlFor="pass" className='text-slate-400 my-2'>
                Password
                <input type="password" name="pass" id="pass"  className='bg-slate-200 w-full py-2 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400' placeholder='password'/>
            </label>
            {/* button */}
            <button className="py-2 bg-cyan-700 text-white uppercase font-bold rounded-xl hover:bg-cyan-400 transition-all duration-200 mt-3">Log in</button>
        </form>
        <p className='text-slate-400 py-1'>Don`t you have account? <span className="hover:text-red-500 " onClick={()=>setSignOrLog(false)}>Sign in</span></p>
        <h4>Create account from google?</h4>
      </div>
    </div>
  )
}

export default Login
