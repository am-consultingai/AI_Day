import React from 'react';
import { Session } from '../types';
import { X, CheckCircle2, Info, Calendar, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SessionDetailsModalProps {
  session: Session | null;
  onClose: () => void;
}

export const SessionDetailsModal: React.FC<SessionDetailsModalProps> = ({ session, onClose }) => {
  if (!session) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-10 p-2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="aspect-[21/9] relative overflow-hidden">
          <img 
            src={session.image} 
            alt={session.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 right-8 left-8">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold mb-3 inline-block">
              {session.level}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight">
              {session.title}
            </h2>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Calendar className="w-6 h-6 text-emerald-600" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">תאריך</p>
                <p className="font-bold text-slate-900">{session.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Clock className="w-6 h-6 text-emerald-600" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">שעה ומשך</p>
                <p className="font-bold text-slate-900">{session.time} ({session.duration})</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Tag className="w-6 h-6 text-emerald-600" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">מחיר</p>
                <p className="font-bold text-slate-900">{session.price} ₪</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                סקירה כללית
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                {session.overview}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold font-display mb-4">דרישות קדם</h3>
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-amber-900">
                {session.requirements}
              </div>
            </section>

            {session.topics && (
              <section>
                <h3 className="text-xl font-bold font-display mb-4">נושאי לימוד</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {session.topics.map((topic, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <span className="text-emerald-600 font-bold">#</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h3 className="text-xl font-bold font-display mb-4">מה תקבלו מהמפגש?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {session.takeaways.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-blue-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="p-8 bg-slate-50 border-t border-slate-100">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors"
          >
            סגור פרטים
          </button>
        </div>
      </motion.div>
    </div>
  );
};
