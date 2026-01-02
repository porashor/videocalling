import { create } from 'zustand'
import { toast } from "react-toastify";
import {UserHandleState} from "./typesact"



export const userHandle = create<UserHandleState>((set)=>({
    signOrLog : false,
    loading: false,
    showPass: true,
    userOrEmail: false,
    name: "",
    email: "",
    password: "",
    user: null,
    phone: "",
    address: "",
    about: "",
    service: "",
    profilePic: null as File | null,
    coverPic: null as File | null,
    setPhone: (a: string)=>set({phone: a}),
    setAddress: (a: string)=>set({address: a}),
    setAbout: (a: string)=>set({about: a}),
    setService: (a: string)=>set({service: a}),
    setProfilePic: (a: File)=>set({profilePic: a}),
    setCoverPic: (a: File)=>set({coverPic: a}),
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
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "DELETE"})
            const data = await res.json()
            toast.success(data.message)
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
    updateProfile: async(e, phone: string, address: string, about: string, service: string, profilePic: File, coverPic: File)=> {
        e.preventDefault()
        set({loading: true})
        const formData = new FormData();
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("about", about);
        formData.append("service", service);
        formData.append("profilePic", profilePic);
        formData.append("coverPic", coverPic);
        try{
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/registery", {method: "PUT", body: formData})
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


