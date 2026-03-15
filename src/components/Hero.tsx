import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#000b1d] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/AI_Chamber_Stage.jpeg" 
          alt="AI Day Hero" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000b1d]/90 via-[#000b1d]/70 to-[#000b1d]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-display font-black leading-none tracking-tighter flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="text-[15vw] md:text-[10rem] text-white">
              Day
            </span>
            <span className="text-[20vw] md:text-[12rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
              AI
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-xl md:text-3xl font-medium text-blue-100 mb-8 max-w-3xl mx-auto leading-tight">
            סדרת סדנאות הנדסת AI: מפרוטוטיפינג למערכות אוטונומיות
          </p>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-blue-900/40 backdrop-blur-md border border-blue-500/30 text-blue-300 font-bold text-xl md:text-3xl mb-12 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
            23/3/26
          </div>

          <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
            משימוש בכלי AI בדפדפן ועד ארכיטקטורת סוכנים מתקדמת — המסלול המעשי שמכשיר מקצה לקצה.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements - Navy/Blue themed */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
    </section>
  );
};
