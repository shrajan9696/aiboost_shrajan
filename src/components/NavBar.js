import React from "react";

function Navbar(){
    return(
        <div style={{display:"flex",justifyContent:"start"}}>
    <button class="bg-white hover:bg-black hover:text-white text-slate-400 font-semibold px-4 border border-gray-400 rounded-full shadow m-2 w-20 h-8 py-0">
   All
  </button>
  <button class="bg-white hover:bg-black hover:text-white  text-slate-400 font-semibold  px-4 border border-gray-400 rounded-full shadow m-2 w-24 h-8 py-0">
    Content
  </button>
  <button class="bg-white hover:bg-black hover:text-white text-slate-400 font-semibold  px-4 border border-gray-400 rounded-full shadow m-2 w-20 h-8 py-0">
    Blog
  </button>
  <button class="bg-white hover:bg-black  hover:text-white  text-slate-400 font-semibold px-4 border border-gray-400 rounded-full shadow m-2 w-24 h-8 py-0">
    Website
  </button>
  <button class="bg-white hover:bg-black hover:text-white  text-slate-400 font-semibold  px-4 border border-gray-400 rounded-full shadow m-2 w-36 h-8 py-0">
   Social Media
  </button>
  <button class="bg-white hover:bg-black hover:text-white text-slate-400  font-semibold  px-4 border border-gray-400 rounded-full shadow m-2 w-20 h-8 py-0">
    Email
  </button>
  <button class="bg-white hover:bg-black hover:text-white text-slate-400 font-semibold  px-4 border border-gray-400 rounded-full shadow m-2 w-20 h-8 py-0">
    Vedio
  </button>
  <button class="bg-white hover:bg-black hover:text-white text-slate-400 font-semibold  px-4 border border-gray-400 rounded-full shadow m-2 w-20 h-8 py-0">
    Other
  </button>
        </div>
    )
}

export default Navbar;