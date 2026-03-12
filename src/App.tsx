import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { SessionCard } from './components/SessionCard';
import { Cart } from './components/Cart';
import { RegistrationModal } from './components/RegistrationModal';
import { SessionDetailsModal } from './components/SessionDetailsModal';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';
import { SESSIONS } from './constants';
import { Session } from './types';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<Session[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [isThankYou, setIsThankYou] = useState(false);
  const [cartMessage, setCartMessage] = useState('');

  const addToCart = (session: Session) => {
    if (cart.find(s => s.id === session.id)) return;
    
    if (cart.length >= 2) {
      setCartMessage('ניתן להירשם לכל היותר לשני מפגשים');
      setTimeout(() => setCartMessage(''), 3000);
      return;
    }
    
    setCart([...cart, session]);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(s => s.id !== id));
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleShowDetails = (session: Session) => {
    setSelectedSession(session);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    setIsThankYou(true);
    setCart([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isThankYou) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        <Header />
        <ThankYou onBack={() => setIsThankYou(false)} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      <main>
        <Hero />
        
        <Authority />
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {SESSIONS.map((session) => (
                <SessionCard 
                  key={session.id} 
                  session={session} 
                  onAddToCart={addToCart}
                  onShowDetails={handleShowDetails}
                  isInCart={cart.some(s => s.id === session.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FOMO / Sell Section */}
        <section className="py-16 bg-[#001a3d] text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">אל תשארו מאחור</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              המקומות מוגבלים והביקוש גבוה. הצטרפו למחזור הקרוב ורכשו את המיומנויות שיבדילו אתכם בשוק העבודה.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                מקומות מוגבלים
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Cart 
        items={cart} 
        onRemove={removeFromCart} 
        onCheckout={handleCheckout} 
      />

      <AnimatePresence>
        {cartMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-xl"
          >
            {cartMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <RegistrationModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            items={cart}
            onSuccess={handleSuccess}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedSession && (
          <SessionDetailsModal 
            session={selectedSession} 
            onClose={() => setSelectedSession(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
