import React, { useContext, useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);
  const navigate = useNavigate();

  // redirect if /result directly open
  useEffect(() => {
    if (!image) navigate("/");
  }, [image, navigate]);

  return (
    <div className="mx-4 my-6 lg:mx-44 pt-28 min-h-[75vh]">
      <div className="bg-white rounded-2xl px-8 py-8 shadow-md">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">

          {/* LEFT – ORIGINAL */}
          <div>
            <p className="font-semibold text-gray-600 mb-3">Original</p>
            {image && (
              <img
                className="rounded-lg border w-full"
                src={URL.createObjectURL(image)}
                alt="Original"
              />
            )}
          </div>

          {/* RIGHT – BG REMOVED */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-3">
              Background Removed
            </p>

            <div
              className="relative w-full h-full min-h-[300px] rounded-lg border
              bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%),linear-gradient(-45deg,#f3f4f6_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f3f4f6_75%),linear-gradient(-45deg,transparent_75%,#f3f4f6_75%)]
              bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]
              flex items-center justify-center overflow-hidden"
            >
              {!resultImage && image && (
                <LoaderCircle size={36} className="animate-spin text-indigo-500" />
              )}

              {resultImage && (
                <img
                  src={resultImage}
                  alt="Removed"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">

            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-8 py-4
                rounded-full border border-slate-300
                text-violet-700 font-semibold
                hover:bg-slate-100 transition"
            >
              Try another image
            </button>

            <a
              href={resultImage}
              download="removed-bg.png"
              className="flex items-center justify-center gap-2 px-8 py-4
                rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400
                text-black font-semibold shadow-lg
                hover:scale-105 transition"
            >
              Download Image
            </a>
          </div>
        )}

        {!resultImage && (
          <p className="text-center mt-6 text-gray-500">Processing image...</p>
        )}
      </div>
    </div>
  );
};

export default Result;
