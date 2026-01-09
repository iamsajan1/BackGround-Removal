import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
   const handleSliderChange=(e)=>{
        setSliderPosition(e.target.value)
    }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white py-24">
      {/* Soft background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-slate-900 to-gray-400 bg-clip-text text-transparent">
          Background Removal Preview
        </h2>

        <p className="text-center mb-14 text-lg text-slate-600">
          Drag the slider to see the magic ✨
        </p>
      </div>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
<img
  src={assets.image_w_bg}
  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
  alt=""
/>

<img className="absolute top-0 left-0 w-full h-full" src={assets.image_without_bg} style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }} alt="" />
{/* slider */}
<input className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2
w-full z-10 slider" type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
      </div>
    </section>
  );
};

export default BgSlider;
