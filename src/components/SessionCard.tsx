import React from 'react';
import { Session } from '../types';
import { Calendar, Clock, Tag, ChevronLeft, CreditCard } from 'lucide-react';

interface SessionCardProps {
  session: Session;
  onAddToCart: (session: Session) => void;
  onShowDetails: (session: Session) => void;
  isInCart: boolean;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session, onAddToCart, onShowDetails, isInCart }) => {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={session.image} 
          alt={session.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-slate-900 text-xs font-bold shadow-sm">
            {session.level}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <h2 className="text-2xl font-bold font-display mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
          {session.title}
        </h2>
        
        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {session.overview}
        </p>

        <div className="mt-auto space-y-4">
          <button
            onClick={() => onShowDetails(session)}
            className="w-full py-3 rounded-xl font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            לפרטים נוספים
          </button>

          <button
            onClick={() => onAddToCart(session)}
            disabled={isInCart}
            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
              isInCart 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 active:scale-[0.98]'
            }`}
          >
            {isInCart ? 'כבר בעגלה' : 'הוסף לעגלה'}
            {!isInCart && <CreditCard className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
