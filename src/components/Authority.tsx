import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Authority: React.FC = () => {
  const points = [
    {
      title: 'מומחים ב AI וארכיטקטורת נתונים',
      elaboration: 'ניסיון עשיר בתכנון מערכות דאטה מורכבות המזינות מודלי שפה מתקדמים.'
    },
    {
      title: 'מעל 10 פטנטים רשומים בתחום AI.',
      elaboration: 'חדשנות מוכחת ופורצת דרך הרשומה כקניין רוחני גלובלי.'
    },
    {
      title: 'מובילים אירגונים בשימוש והטמעת AI.',
      elaboration: 'ליווי אסטרטגי וטכנולוגי של חברות Fortune 500 וסטארטאפים בצמיחה מהירה.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
            בואו ללמוד ממי שעובד עם AI ביום יום
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {points.map((point, index) => (
              <motion.div 
                key={index} 
                className="relative group p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <p className="text-lg text-slate-900 font-bold leading-tight">{point.title}</p>
                </div>
                
                {/* Elaboration Frame */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-blue-900/90 backdrop-blur-md rounded-2xl p-6 flex items-center justify-center text-center opacity-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-10"
                >
                  <p className="text-white font-medium leading-relaxed">
                    {point.elaboration}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
