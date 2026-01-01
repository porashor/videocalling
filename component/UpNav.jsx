"use client";
import { upnav } from "@/function/UpnavStore";
const UpNav = () => {
  const { open, setOpen } = upnav();
  console.log(open);
  const nav = ["profile update", "profile view", "chatting", "find user"];
  return (
    <div className="mt-5 text-slate-300">
      <ul className="flex items-center gap-2">
        {
          nav.map((a, i) => (
            <li
              key={i}
              className={`py-3 px-2 cursor-pointer border-b-2 border-black/0 ${
                open == i + 1 ? "text-cyan-400 border-cyan-400" : "rounded-xl hover:bg-[#3B3D3E]"
              }`}
              onClick={() => setOpen(i + 1)}
            >
              {a}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UpNav;
