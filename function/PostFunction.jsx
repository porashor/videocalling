import {create} from 'zustand'

export const postHandles = create((set) => ({
    post: '',
    loading: false,
    setPost: (post) => set({post: post}),
    postNow: async (e, post) => {
        e.preventDefault();
        console.log(process.env.NEXT_PUBLIC_API_URL )
        set({loading: true});
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/post", {method: "POST", headers: {"Content-Type": "application/json"},credentials: "include" ,body: JSON.stringify({post: post})});
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }finally {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/post", {method: "GET", headers: {"Content-Type": "application/json"},credentials: "include"});
            const data = await res.json();
            set({allPosts: data});
            set({loading: false});
        }
    },
    allPosts: [],
    getPost: async () => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/post", {method: "GET", headers: {"Content-Type": "application/json"},credentials: "include"});
            const data = await res.json();
            console.log(data);
            set({allPosts: data});
        } catch (error) {
            console.log(error);
        }
    }
}))