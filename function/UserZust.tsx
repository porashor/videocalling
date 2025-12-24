import { create } from 'zustand'


export const userHandle = create((set)=>({
    signOrLog: false,
    loading: false,
    name: "",
    email: "",
    password: "",
    user: {},
    setSignOrLog: (a: boolean)=>set({signOrLog: a}),
    setName: (a: string)=>set({name: a}),
    setEmail: (a: string)=>set({email: a}),
    setPassword: (a: string)=>({password: a}),
    Sigin: async()=>{
        set({loading: true})
        try{
            //
        }catch{
            //
        }finally{
            set({loading: false})
        }
    }
}))


