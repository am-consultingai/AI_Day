import React from 'react';
import { Session } from '../types';
import { ShoppingCart, X, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartProps {
  items: Session[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 md:left-auto md:right-8 md:bottom-8 md:w-96">
      <AnimatePresence>
        {items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="p-6 bg-[#001a3d] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold">העגלה שלך ({items.length})</h3>
              </div>
              <span className="text-blue-400 font-bold">{total} ₪</span>
            </div>
            
            <div className="p-6 max-h-60 overflow-y-auto">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <p className="font-bold text-sm leading-tight">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.date} | {item.time}</p>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={onCheckout}
                className="w-full py-4 bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
              >
                <CreditCard className="w-5 h-5" />
                לתשלום והרשמה
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {items.length === 0 && (
        <div className="hidden md:block bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200 text-slate-500 text-center text-sm">
          העגלה ריקה. בחר עד שני מפגשים להרשמה.
        </div>
      )}
    </div>
  );
};
