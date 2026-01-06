import React from 'react'
import {
  Upload,
  Instagram,
  Youtube,
  Linkedin,
  Sparkles
} from 'lucide-react'

const Header = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white/80 via-white/70 to-white/80 text-black">

      {/* Elegant soft glow */}
      <div className="absolute -top-48 -left-48 w-[700px] h-[700px] bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-48 w-[700px] h-[700px] bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/30 backdrop-blur border border-white/10 text-sm">
            <Sparkles size={16} />
            AI Background Removal
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Backgrounds,
            <span className="block text-indigo-500">
              Perfectly Removed.
            </span>
          </h1>

          <p className="text-lg text-slate-700 max-w-xl">
            Remove image backgrounds with precision AI.
            Clean cutouts ready for social media,
            ads & professional use.
          </p>

          <label className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold shadow-[0_20px_60px_rgba(99,102,241,0.45)] hover:scale-105 transition cursor-pointer">
            <Upload size={20} />
            Upload Image
            <input type="file" hidden />
          </label>
        </div>

        {/* RIGHT – CLASSY GLOSSY STACK */}
        <div className="relative h-[460px]">

          {/* Card 1 */}
          <GlassCard
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            icon={<Instagram />}
            position="top-0 left-28 -rotate-6"
          />

          {/* Card 2 */}
          <GlassCard
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
            icon={<Linkedin />}
            position="top-32 left-0 rotate-6"
          />

          {/* Card 3 */}
          <GlassCard
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            icon={<Youtube />}
            position="top-20 right-0 -rotate-2"
          />

        </div>
      </div>
    </section>
  )
}

const GlassCard = ({ src, icon, position }) => (
  <div
    className={`absolute ${position}
      w-64 rounded-[28px] overflow-hidden
      bg-white/20 backdrop-blur-xl
      border border-white/15
      shadow-[0_30px_90px_rgba(0,0,0,0.25)]
      animate-float`}
  >
    <img src={src} alt="" className="w-full" />

    {/* Perfectly aligned icon */}
    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-indigo-600 shadow-md">
      {icon}
    </div>
  </div>
)

export default Header
