import React from "react";
// import {pic1} from "../assets/images/pic1.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <div className="h-full flex  flex-col bg-slate-600">
      <div>
        <div className=" p-[10rem]">
          <header className=" uppercase font-serif text-5xl font-bold text-red-400">

            <h1 className="">hello!</h1>
          </header>

          <div className="p-1 text-2xl font-bold font-serif text-white capitalize">
            <h4 className="pb-5 border-r-2 inline-block pr-5">
              i am owusu victor
            </h4>
          </div>

          <div className="p-1">
            <p className="break-words text-white font-serif">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Ipsam totam eligendi necessitatibus, alias iusto
              eum dolore, <br />
              nihil consequatur cupiditate nobis assumenda dolorum officiis vitae,
              at qui<br/> ipsum. Eos, sit ut.
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Ipsam totam eligendi necessitatibus, alias iusto
              eum dolore, <br />
              nihil consequatur cupiditate nobis assumenda dolorum officiis vitae,
              at qui<br/> ipsum. Eos, sit ut.
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Ipsam totam eligendi necessitatibus, alias iusto
              eum dolore, <br />
              nihil consequatur cupiditate nobis assumenda dolorum officiis vitae,
              at qui <br/> ipsum. Eos, sit ut.
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Ipsam totam eligendi necessitatibus, alias iusto
              eum dolore, <br />
              nihil consequatur cupiditate nobis assumenda dolorum officiis vitae,
              at qui<br/> ipsum. Eos, sit ut.
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Ipsam totam eligendi necessitatibus, alias iusto
              eum dolore, <br />
              nihil consequatur cupiditate nobis assumenda dolorum officiis vitae,
              at qui<br/> ipsum. Eos, sit ut.
            </p>
          </div>

          {/* button */}
          <div className="p-5 font-serif flex gap-[80px] text-green-100 ">
            <button className="hover:bg-gray-400 px-4 py-1 bg-red-400 border-1 rounded-full capitalize">
              view work
            </button>

            <button className="p-5 hover:bg-gray-400 px-4 py-1 bg-red-400 border-1 rounded-full capitalize">
              hire me
            </button>
            </div>
        </div>
      </div>
      {/* Footer */}
      <div>
        {<Footer />}
      
      </div>
      
    </div>
  );
}

export default Home;
