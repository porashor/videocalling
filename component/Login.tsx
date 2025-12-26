'use client'
import {userHandle} from "@/function/UserZust"
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const Login = () => {
  const {signOrLog, setSignOrLog, showPass, setShowPass, email, setEmail, password, setPassword, loading, LogIn} = userHandle()
  return (
    <div className={`w-87.5 bg-white text-black min-h-80 p-5 hover:shadow-[0_0_50px_10px] shadow-cyan-200 transition-all duration-200 border-2 border-slate-400 ${signOrLog ? "block": "hidden"}`}>
      {/* main container  */}
      <div className='border-l border-slate-400 min-h-85 w- pl-2'>
        <h1 className='text-center py-2 text-2xl font-bold uppercase text-slate-600'>Log In</h1>
        {/* form  */}
        <form onSubmit={(e)=>LogIn(e, email, password)} className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-slate-400 my-2'>
                username or email address
                <input type='text' name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='bg-slate-200 w-full py-2 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400 text-black' placeholder='username & email'/>
            </label>
            <label htmlFor="pass" className='text-slate-400 my-2 relative'>
                Password
                <input type={showPass ? "password" : "text"} name="pass" id="pass" value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-slate-200 w-full py-2 px-3 rounded-lg outline-0 focus:ring-2 ring-cyan-400 text-black' placeholder='password'/>
                <div className='absolute right-0 top-[42%]'>
                    {showPass ? <GoEyeClosed size={20} className='absolute right-2 top-2 cursor-pointer' onClick={()=>setShowPass(false)}/> :<GoEye size={20} className='absolute right-2 top-2 cursor-pointer' onClick={()=>setShowPass(true)}/>}
                  </div>
            </label>
            {/* button */}
            <button type="submit" className="py-2 bg-cyan-700 text-white uppercase font-bold rounded-xl hover:bg-cyan-400 transition-all duration-200 mt-3">{loading? "loading...": "Log in"}</button>
        </form>
        <p className='text-slate-400 py-1'>Don`t you have account? <span className="hover:text-red-500 " onClick={()=>setSignOrLog(false)}>Sign in</span></p>
        <h4>Login from google?</h4>
      </div>
    </div>
  )
}

export default Login
