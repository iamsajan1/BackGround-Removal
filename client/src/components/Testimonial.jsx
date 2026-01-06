import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      
      {/* Soft white gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-gray-400 bg-clip-text text-transparent">
          Loved by creators
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-20">
          People trust BG-Magify to remove backgrounds quickly and accurately.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto ">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white/70 backdrop-blur-xl
                         border border-white/40 rounded-3xl p-8
                         shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                         hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                         transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <span className="absolute -top-5 -right-5 w-12 h-12 rounded-full
                               bg-gradient-to-br from-indigo-500 to-cyan-400
                               flex items-center justify-center text-white text-2xl shadow-lg">
                “
              </span>

              {/* Text */}
              <p className="text-slate-700 leading-relaxed mb-8">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="p-[2px] rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-14 h-14 rounded-full object-cover bg-white"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.author}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {item.jobTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
