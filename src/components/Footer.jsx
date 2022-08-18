import React from 'react';
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <div className='mt-[12rem] h-[10rem] py-2 px-5 w-full shadow-xl  bg-[#01011dfa] text-green-200'>
      {/* <div className="  divide-y flex justify-center items-center">line</div> */}
      <footer>
           {/* logos */}
          <div className='p-5 text-3xl flex justify-center gap-20 space-between'>
            <a href="https://web.facebook.com/owusu.victor2" className="flex py-1 px-5 rounded-full border-1 hover:bg-red-400">< BsFacebook/></a>
            <a href="https://github.com/owusuvictorjnr" className="flex py-1 px-5 rounded-full border-1 hover:bg-red-400"><BsGithub/></a>
            <a href="https://twitter.com/owusuvictor80" className="flex py-1 px-5 rounded-full border-1 hover:bg-red-400"><BsTwitter/></a>
            <a href="https://www.linkedin.com/in/owusu-victor-3699031a1/" className="flex py-1 px-5 rounded-full border-1 hover:bg-red-400"><BsLinkedin/></a>
          </div>

          {/* copyright */}
      <div className=" bg-black p-4 flex justify-center items-between">
        
            <h5>
            <a href="#"><AiOutlineCopyright/>2022 copyright: vitech Solutions </a>
              
            </h5> 
      </div>
      </footer>
      
    </div>
  )
}

export default Footer