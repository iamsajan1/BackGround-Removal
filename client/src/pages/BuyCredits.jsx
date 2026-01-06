import React from "react";
import { plans } from "../assets/assets";
import { Check, Sparkles } from "lucide-react";

const BuyCredits = () => {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      
      {/* Soft glow */}
      <div className="absolute -top-28 -left-28 w-[350px] h-[350px] bg-indigo-200/25 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-28 -right-28 w-[350px] h-[350px] bg-cyan-200/25 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-indigo-100 text-indigo-600 text-sm font-semibold">
            <Sparkles size={14} />
            Pricing Plans
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold
                         bg-gradient-to-r from-slate-900 to-gray-400
                         bg-clip-text text-transparent">
            Buy Credits
          </h1>

          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm">
            One-time payment. Credits never expire.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const isPopular = plan.id === "Advanced";

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 border bg-white/80 backdrop-blur
                  shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                  ${isPopular ? "border-indigo-400" : "border-slate-200"}
                `}
              >
                {/* Popular badge */}
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2
                                   px-3 py-1 rounded-full text-[11px] font-semibold
                                   bg-gradient-to-r from-indigo-500 to-cyan-400
                                   text-black shadow">
                    Most Popular
                  </span>
                )}

                {/* Plan title */}
                <h3 className="text-lg font-bold text-slate-800">
                  {plan.id}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ${plan.price}
                  </span>
                  <span className="text-slate-500 text-sm mb-0.5">
                    one-time
                  </span>
                </div>

                {/* Credits */}
                <p className="mt-3 text-slate-600 text-sm">
                  {plan.credits} background removals
                </p>

                {/* Description */}
                <p className="mt-1 text-xs text-slate-500">
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-indigo-500" />
                    HD quality images
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-indigo-500" />
                    Transparent PNG
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-indigo-500" />
                    Commercial use
                  </li>
                </ul>

                {/* CTA */}
                <button
                  className={`mt-6 w-full py-3 rounded-full font-semibold transition text-sm
                    ${
                      isPopular
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-black shadow-md hover:scale-105"
                        : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                    }
                  `}
                >
                  Buy Credits
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-500 mt-10">
          Secure payment • Instant access • Credits never expire
        </p>
      </div>
    </section>
  );
};

export default BuyCredits;
