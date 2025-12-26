import { create } from 'zustand'
import { toast } from "react-toastify";




export const userHandle = create((set)=>({
    signOrLog : false,
    loading: false,
    showPass: true,
    userOrEmail: false,
    name: "",
    email: "",
    password: "",
    user: {},
    setUserOrEmail: (a: boolean)=>set({userOrEmail: a}),
    setShowPass: (a: boolean)=>set({showPass: a}),
    setSignOrLog: (a: boolean)=>set({signOrLog: a}),
    setName: (a: string)=>set({name: a}),
    setEmail: (a: string)=>set({email: a}),
    setPassword: (a: string)=>set({password: a}),
    Sigin: async(e, name: string, email: string, password: string)=> {
        e.preventDefault()
        console.log(name, email, password)
        set({loading: true})
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "POST", body: JSON.stringify({
                name,
                email,
                password,
                phone: "",
                address: "",
                about: "",
                service: "",
                profilePic: "",
                coverPic: ""
            })})
            const data = await res.json()
            console.log(data)
            toast.success(data.data.message)
            if(data.success){
                window.location.href = "/profile"
            }
        }catch(err){
            console.log(err)
            toast.error("failed to register")
        }finally{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "GET"})
            const user = await res.json()
            set({loading: false, email: "", password: "" , user: user })
        }
    },
    LogIn: async(e, email: string, password: string)=> {
        e.preventDefault()
        console.log(email, password)
        set({loading: true})
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {method: "POST", body: JSON.stringify({
                email,
                password
            })})
            const data = await res.json()
            toast.success(data.data.message)
            //redirecting to profile page 
            if(data.success){
                window.location.href = "/profile"
            }
            console.log(data)
        }catch(err){
            console.log(err)
            toast.error("failed to login")
        }finally{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "GET"})
            const user = await res.json()
            set({loading: false, email: "", password: "" , user: user })
        }
    },
    LogOut: async()=> {
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/logout", {method: "DELETE"})
            const data = await res.json()
            console.log(data)
            toast.success(data.data.message)
            if(!data.success){
                window.location.href = "/user"
            }
        }catch(err){
            console.log(err)
            toast.error("failed to logout")
        }
    },
    getUser: async()=> {
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "GET"})
            const data = await res.json()
            console.log(data)
            set({user: data.user})
        }catch(err){
            console.log(err)
        }
    },
    updateProfile: async(email: string, phone: string, address: string, about: string, service: string, profilePic, coverPic)=> {
        set({loading: true})
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "PUT", body: JSON.stringify({
                email,
                phone,
                address,
                about,
                service,
                profilePic,
                coverPic
            })})
            const data = await res.json()
            console.log(data)
            toast.success(data.data.message)
        }catch(err){
            console.log(err)
            toast.error("failed to update profile")
        }finally{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "GET"})
            const user = await res.json()
            set({loading: false, email: "", password: "" , user: user })
        }
    }
}))


