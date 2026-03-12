import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <img 
                src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/avishay_casual_nw.png" 
                alt="אבישי מרון" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl relative z-10 border-2 border-slate-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold font-display">על המרצה</h2>
              <a 
                href="https://www.linkedin.com/in/avishay-meron/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/linkedin.png" 
                  alt="LinkedIn" 
                  className="w-8 h-8"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              אבישי מרון "מאלף" בינה מלאכותית ומנווט בנבכי כלכלת הנתונים מזה למעלה מעשור, תוך הבאת פרספקטיבה עשירה וייחודית לנקודת המפגש שבין טכנולוגיה לאסטרטגיה עסקית. כמנכ"ל ומייסד AM Consulting, אבישי משמש הן כסמכות טכנולוגית והן כיועץ אסטרטגי, המנחה ארגונים להתייחס לנתונים שלהם לא רק כתוצר לוואי, אלא כנכס עסקי בעל ערך עליון. עם למעלה מ-10 פטנטים רשומים בתחום ה-AI על שמו, הוא מתמחה בזיהוי הפוטנציאל המסחרי החבוי בתוך אקו-סיסטם של דאטה – והופך מידע גולמי לתובנות קנייניות וליצירת "חפיר" (Moat) עסקי בר-קיימא. באמצעות הנגשת ארכיטקטורות מורכבות של AI ודאטה לכל קהל, אבישי מעצים עסקים במעבר מ"מחזיקי מידע" למובילי שוק, והופך טכנולוגיה מורכבת לתזרים מזומנים.
            </p>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} AM Consulting. כל הזכויות שמורות.</p>
          <a href="https://www.amconsultingai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            www.amconsultingai.com
          </a>
        </div>
      </div>
    </footer>
  );
};
