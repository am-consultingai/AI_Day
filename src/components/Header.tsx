import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, X, CreditCard } from 'lucide-react';
import { Session } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  cartItems: Session[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItems, onRemoveItem, onCheckout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cartItems.length > 0) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleCheckoutClick = () => {
    setIsDropdownOpen(false);
    onCheckout();
  };

  return (
    <header className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="https://www.amconsultingai.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/AM_Logo.png" 
            alt="AM Consulting Logo" 
            className="h-12 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>

        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center gap-2 md:gap-4">
            {cartItems.length > 0 && (
              <button 
                onClick={handleCheckoutClick}
                className="flex items-center gap-1 md:gap-2 bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
              >
                <CreditCard className="w-3 h-3 md:w-4 md:h-4" />
                <span className="whitespace-nowrap">תשלום והרשמה</span>
              </button>
            )}
            
            <button 
              className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Cart"
              onClick={handleCartClick}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 -translate-y-1 translate-x-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          <AnimatePresence>
            {isDropdownOpen && cartItems.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 w-screen max-w-[280px] sm:max-w-xs md:w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
              >
                <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-slate-900">הסל שלי</span>
                  <span className="text-xs text-slate-500">{cartItems.length} מפגשים</span>
                </div>
                
                <div className="max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 border-b border-slate-50 flex justify-between items-start gap-3 hover:bg-slate-50 transition-colors group">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate" dir="rtl">{item.title}</p>
                        <p className="text-xs text-slate-500 mt-1">₪{item.price}</p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveItem(item.id);
                          if (cartItems.length <= 1) setIsDropdownOpen(false);
                        }}
                        className="p-1 text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4">
                  <button 
                    onClick={handleCheckoutClick}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    מעבר לתשלום והרשמה
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
