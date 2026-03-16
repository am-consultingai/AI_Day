import React, { useState, useEffect } from 'react';
import { Session, RegistrationData } from '../types';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REGISTRATION_API_URL } from '../constants';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Session[];
  onSuccess: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, items, onSuccess }) => {
  const [coupon, setCoupon] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    marketingOptIn: false,
    recordingConsent: false
  });

  const originalTotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = isCouponValid ? 0 : originalTotal;

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleApplyCoupon = () => {
    if (!coupon.trim()) return;
    
    setIsApplyingCoupon(true);
    setCouponError('');
    
    // Simulate server call
    setTimeout(() => {
      const validCodes = ['data_and_ai', 'emek_hefer', 'halhatz', 'shavot', 'emek hefer', 'data and ai', 'police', 'lion', 'cyber', 'niv', 'mor'];
      if (validCodes.includes(coupon.trim())) {
        setIsCouponValid(true);
      } else {
        setCouponError('קוד לא תקף');
        setIsCouponValid(false);
      }
      setIsApplyingCoupon(false);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.recordingConsent) return;

    setIsSubmitting(true);

    const payload: RegistrationData = {
      ...formData,
      regBeginners: items.some(item => item.apiField === 'regBeginners'),
      regIntermediate: items.some(item => item.apiField === 'regIntermediate'),
      regAdvanced: items.some(item => item.apiField === 'regAdvanced'),
      couponCode: isCouponValid ? coupon : undefined,
    };

    try {
      await fetch(REGISTRATION_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      // Since no-cors doesn't return body, we assume success if no exception
      onSuccess();
    } catch (error) {
      console.error('Registration error:', error);
      alert('אירעה שגיאה בשליחת הטופס. אנא נסו שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-2xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] mx-auto"
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h2 className="text-xl font-bold font-display">הרשמה ל־AI Day</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          {/* Cart Summary */}
          <div className="bg-blue-50 rounded-2xl p-4 mb-8 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">סיכום הזמנה</h3>
            <ul className="space-y-1 mb-3">
              {items.map(item => (
                <li key={item.id} className="text-sm text-blue-800 flex justify-between">
                  <span>{item.title}</span>
                  <span className="font-medium">{item.price} ₪</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-blue-200 flex justify-between items-center">
              <span className="font-bold text-blue-900">סה"כ לתשלום:</span>
              <span className={`text-lg font-bold ${isCouponValid ? 'text-blue-600' : 'text-blue-900'}`}>
                {isCouponValid ? (
                  <span className="flex items-center gap-2">
                    <span className="line-through text-slate-400 text-sm">{originalTotal} ₪</span>
                    0 ₪
                  </span>
                ) : `${originalTotal} ₪`}
              </span>
            </div>
          </div>

          {/* Coupon */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-slate-700 mb-2">קוד קופון</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="הזן קוד קופון"
                className="flex-grow min-w-0 px-3 md:px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm md:text-base"
                disabled={isCouponValid || isApplyingCoupon}
              />
              <button 
                onClick={handleApplyCoupon}
                disabled={isCouponValid || isApplyingCoupon || !coupon}
                className="px-4 md:px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 flex items-center gap-2 whitespace-nowrap text-sm md:text-base"
              >
                {isApplyingCoupon ? <Loader2 className="w-4 h-4 animate-spin" /> : 'הפעל קופון'}
              </button>
            </div>
            {couponError && <p className="text-red-500 text-xs mt-1">{couponError}</p>}
            {isCouponValid && <p className="text-emerald-600 text-xs mt-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> קופון הופעל בהצלחה</p>}
          </div>

          {/* Payment Providers */}
          <div className="mb-8">
            <p className="text-sm font-bold text-slate-700 mb-3">אמצעי תשלום נתמכים</p>
            <div className="flex gap-4">
              <img src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/payment/pp.png" alt="PayPal" className="h-8 w-auto grayscale opacity-70" referrerPolicy="no-referrer" />
              <img src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/payment/google_pay.png" alt="Google Pay" className="h-8 w-auto grayscale opacity-70" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Registration Form */}
          <form id="registrationForm" onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">שם מלא *</label>
                <input 
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="relative group/email">
                <label className="block text-sm font-bold text-slate-700 mb-1">אימייל *</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {/* Email Tooltip */}
                <div className="absolute bottom-full left-0 right-0 mb-2 opacity-0 group-hover/email:opacity-100 pointer-events-none transition-opacity duration-300 z-30">
                  <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl text-xs border border-slate-700 text-center">
                    לכאן נשלח את הקבלה וההזמנה למפגשים
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group/phone">
              <label className="block text-sm font-bold text-slate-700 mb-1">טלפון</label>
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {/* Phone Tooltip */}
              <div className="absolute bottom-full left-0 right-0 mb-2 opacity-0 group-hover/phone:opacity-100 pointer-events-none transition-opacity duration-300 z-30">
                <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl text-xs border border-slate-700 text-center">
                  אם תמלאו את המספר, נשלח לכם תזכורת כמה ימים לפני המפגשים
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">שם החברה</label>
                <input 
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">תפקיד</label>
                <input 
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={formData.marketingOptIn}
                  onChange={(e) => setFormData({...formData, marketingOptIn: e.target.checked})}
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                  מעוניין/ת שנציג AM Consulting ייצור איתי קשר לגבי ייעוץ AI
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  required
                  type="checkbox"
                  checked={formData.recordingConsent}
                  onChange={(e) => setFormData({...formData, recordingConsent: e.target.checked})}
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                  אני מאשר/ת שהמפגש יוקלט ויעלה לערוצי מדיה כדי שאחרים יוכלו לצפות בו *
                </span>
              </label>
            </div>

            <div className="pt-6 space-y-4 relative group/submit">
              <button
                id="submitBtn"
                type="submit"
                disabled={isSubmitting || !formData.recordingConsent || !isCouponValid || !formData.fullName || !isValidEmail(formData.email)}
                className="w-full py-4 bg-blue-700 text-white rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    שולח...
                  </>
                ) : (
                  'תשלום והרשמה'
                )}
              </button>

              {/* Hover Explanation Frame */}
              {(isSubmitting || !formData.recordingConsent || !isCouponValid || !formData.fullName || !isValidEmail(formData.email)) && (
                <div className="absolute bottom-full left-0 right-0 mb-4 opacity-0 group-hover/submit:opacity-100 pointer-events-none transition-opacity duration-300 z-20">
                  <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl text-sm border border-slate-700 backdrop-blur-md bg-opacity-95">
                    <p className="font-bold mb-2 text-blue-400">כדי להשלים את ההרשמה עליך:</p>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                      {!isCouponValid && <li>להשלים תשלום או להזין קוד קופון תקין</li>}
                      {(!formData.fullName || !isValidEmail(formData.email)) && <li>למלא את כל פרטי ההרשמה (כולל אימייל תקין)</li>}
                      {!formData.recordingConsent && <li>לאשר את הקלטת המפגש</li>}
                    </ul>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
                  </div>
                </div>
              )}

              <a 
                href={`mailto:office@amconsultingai.com?subject=${encodeURIComponent('לא מצליח להירשם\\לשלם ליום הבינה')}&body=${encodeURIComponent('שלום. אני מנסה להירשם ליום הבינה אבל נראה שמשהו לא עובד.')}`}
                className="block text-center text-sm text-slate-500 hover:text-blue-600 transition-colors py-2"
              >
                Having trouble in registration? contact us office@amconsultingai.com
              </a>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
