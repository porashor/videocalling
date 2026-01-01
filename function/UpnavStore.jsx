import {create} from 'zustand'


export const upnav = create((set)=>({
    open: 1,
    setOpen: (a) => set({ open: a }),
}))