import React from "react";
import { Upload as UploadIcon, Image } from "lucide-react";

const Upload = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-gray-400 bg-clip-text text-transparent">
          Upload your image
        </h2>

        <p className="text-center text-slate-600 max-w-xl mx-auto mb-14">
          Upload an image and let our AI remove the background in seconds.
        </p>

        {/* Upload Card */}
        <label
          className="group relative flex flex-col items-center justify-center
                     h-[260px] rounded-3xl border-2 border-dashed border-slate-300
                     bg-white/70 backdrop-blur-xl
                     shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                     cursor-pointer hover:border-indigo-400
                     transition-all duration-300 hover:-translate-y-1"
        >
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400
                          flex items-center justify-center text-white shadow-xl
                          group-hover:scale-110 transition-transform"
          >
            <UploadIcon size={32} />
          </div>

          <p className="mt-6 text-lg font-semibold text-slate-800">
            Click to upload or drag & drop
          </p>

          <p className="mt-2 text-sm text-slate-500">
            PNG, JPG or WEBP (max 10MB)
          </p>

          <input type="file" className="hidden" />
        </label>

        {/* Supported platforms */}
        <div className="flex justify-center items-center gap-6 mt-10 text-slate-500 text-sm">
          <Image size={18} />
          <span>Perfect for social media, e-commerce & creatives</span>
        </div>
      </div>
    </section>
  );
};

export default Upload;
