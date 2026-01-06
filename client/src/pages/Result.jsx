import React from "react";
import { assets } from "../assets/assets";
import { LoaderCircle } from "lucide-react";

const Result = () => {
  return (
   <div className="mx-4 my-6 lg:mx-44 pt-28 min-h-[75vh]">

      <div className="bg-white rounded-2xl px-8 py-8 shadow-md">

        {/* Image Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">

          {/* LEFT – Original */}
          <div>
            <p className="font-semibold text-gray-600 mb-3">
              Original
            </p>
            <img
              className="rounded-lg border w-full"
              src={assets.image_w_bg}
              alt="Original"
            />
          </div>

          {/* RIGHT – Background Removed */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-3">
              Background Removed
            </p>

            <div className="relative w-full h-full min-h-[300px] rounded-lg border
                            bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%),linear-gradient(-45deg,#f3f4f6_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f3f4f6_75%),linear-gradient(-45deg,transparent_75%,#f3f4f6_75%)]
                            bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]
                            flex items-center justify-center overflow-hidden">

              {/* Loader (jab tak image ready nahi ho) */}
              <LoaderCircle
                size={36}
                className="animate-spin text-indigo-500"
              />

              {/* Jab image ready ho to ye uncomment karna */}
              
              <img
                src={assets.image_wo_bg}
                alt="Removed"
                className="absolute inset-0 w-full h-full object-contain"
              />
             
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button className="flex items-center justify-center gap-2 px-8 py-4
                     rounded-full border border-slate-300
                     text-violet-700 font-semibold
                     hover:bg-slate-100 transition">
            Try another image
          </button>
          <a className="flex items-center justify-center gap-2 px-8 py-4
                     rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400
                     text-black font-semibold shadow-lg
                     hover:scale-105 transition" href=""> Download Image </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
