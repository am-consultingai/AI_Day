import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ThankYouProps {
  onBack: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 text-center"
      >
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-blue-600" />
        </div>
        
        <h1 className="text-3xl font-bold font-display mb-4">תודה שנרשמת!</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          ההרשמה ל־AI Day התקבלה. נשלח אליך אימייל עם אישור והזמנה ללוח השנה.
        </p>

        <div className="bg-blue-50 rounded-2xl p-6 mb-10 border border-blue-100 text-right">
          <h3 className="font-bold text-blue-900 mb-2">הצטרפו לקבוצת הוואטסאפ הסודית שלנו</h3>
          <p className="text-sm text-blue-800 mb-4">
            קבוצה למנהלים ובכירים להישאר מעודכנים עם "פניני" בינה מלאכותית ועדכונים חמים.
          </p>
          <a 
            href="https://chat.whatsapp.com/KJeipwuCx1CA5sgaCv9rc3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors"
          >
            להצטרפות לקבוצה
            <ArrowRight className="w-4 h-4 rotate-180" />
          </a>
        </div>
        
        <button
          onClick={onBack}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
        >
          חזרה לעמוד AI Day
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
