import React from "react";
import { Upload, Eye, Download } from "lucide-react";

const Steps = () => {
  const steps = [
    {
      icon: <Upload />,
      title: "Upload",
      description: "Upload your image to start editing"
    },
    {
      icon: <Eye />,
      title: "Remove Background",
      description: "AI automatically removes the background"
    },
    {
      icon: <Download />,
      title: "Download",
      description: "Download your processed image instantly"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-50 py-32 overflow-hidden">
      {/* Abstract floating shapes */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl sm:text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-slate-900 to-gray-400 bg-clip-text text-transparent">
          Steps to remove background
        </h2>

        {/* Subtitle */}
        <p className="text-center mb-16 text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-black/80 to-black/50">
          Follow these 3 simple steps to get a clean image in seconds
        </p>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16">

          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative group w-full md:w-72 flex flex-col items-center text-center transform transition-transform duration-500
                ${idx === 1 ? "md:translate-y-8" : idx === 2 ? "md:-translate-y-4" : ""}`}
            >
              {/* Glass Card */}
              <div className="bg-white/20 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_100px_rgba(0,0,0,0.25)] transition-transform duration-300 transform group-hover:-translate-y-3">
                
                {/* Icon Bubble */}
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-400 text-white rounded-full shadow-2xl mb-4 mx-auto transform transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-700">{step.description}</p>
              </div>

              {/* Decorative dot */}
              <div className="absolute -bottom-6 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-70"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Steps;
