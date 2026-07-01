/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language, CandidateInfo } from '../types';
import { User, Phone, Key, RefreshCw, ClipboardCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface CandidateRegistrationProps {
  language: Language;
  onRegister: (info: CandidateInfo) => void;
}

export default function CandidateRegistration({ language, onRegister }: CandidateRegistrationProps) {
  const t = TRANSLATIONS[language];
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tokenNumber, setTokenNumber] = useState('');

  // Form error states
  const [errors, setErrors] = useState<{
    fullName?: string;
    phoneNumber?: string;
    tokenNumber?: string;
  }>({});

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setTokenNumber('');
    setErrors({});
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!fullName.trim()) {
      newErrors.fullName = t.name_required;
    }
    
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = t.phone_required;
    } else if (!/^\d{10}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = t.phone_invalid;
    }

    if (!tokenNumber.trim()) {
      newErrors.tokenNumber = t.token_required;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onRegister({
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        tokenNumber: tokenNumber.trim()
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-2xl mx-auto px-4 py-6"
    >
      <div id="registration_card" className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Government Style Header Strip */}
        <div className="bg-red-600 text-white px-6 py-3 text-center flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* National Flag of Nepal SVG Icon */}
            <svg viewBox="0 0 54 60" className="w-8 h-9 shrink-0 drop-shadow-md">
              <path d="M0,0 L0,60 L36,44 L11,44 L39,12 L0,0 Z" fill="#DC2626" />
              <path d="M0,0 L0,60 L36,44 L11,44 L39,12 L0,0 Z" fill="none" stroke="#1D4ED8" strokeWidth="3" />
              {/* Sun in the lower part */}
              <circle cx="9" cy="40" r="5" fill="#FFFFFF" />
              <path d="M9,32 L9,48 M5,40 L13,40 M6,35 L12,45 M6,45 L12,35" stroke="#FFFFFF" strokeWidth="1.5" />
              {/* Crescent Moon in upper part */}
              <path d="M6,16 A5,5 0 0,0 14,21 A6,6 0 0,1 6,16" fill="#FFFFFF" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-bold tracking-wider uppercase opacity-90">{t.gov_nepal}</p>
              <p className="text-[11px] font-semibold leading-tight opacity-90">{t.ministry_transport}</p>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
              <Award className="w-4.5 h-4.5 text-yellow-300" />
              लिखित परीक्षा / WRITTEN TEST
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-sans text-slate-800 leading-tight">
              {t.candidate_registration}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
            <p className="text-sm text-slate-500 mt-2 font-medium">
              Please enter your valid registration credentials to initialize the computer-based driving license test.
            </p>
          </div>

          <form onSubmit={handleStart} className="space-y-6">
            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                {t.full_name} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t.full_name_placeholder}
                  className={`w-full px-4 py-3 bg-slate-50 rounded-xl border font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-xs font-semibold text-red-500 mt-1 flex items-center gap-1">
                  • {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone Number Input */}
            <div className="space-y-1.5">
              <label htmlFor="phoneNumber" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                {t.phone_number} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="phoneNumber"
                  type="tel"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder={t.phone_placeholder}
                  className={`w-full px-4 py-3 bg-slate-50 rounded-xl border font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.phoneNumber
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-xs font-semibold text-red-500 mt-1 flex items-center gap-1">
                  • {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Exam Token Input */}
            <div className="space-y-1.5">
              <label htmlFor="tokenNumber" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Key className="w-4 h-4 text-blue-600" />
                {t.token_number} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="tokenNumber"
                  type="text"
                  value={tokenNumber}
                  onChange={(e) => setTokenNumber(e.target.value)}
                  placeholder={t.token_placeholder}
                  className={`w-full px-4 py-3 bg-slate-50 rounded-xl border uppercase font-mono font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-sans focus:outline-none focus:ring-2 transition-all ${
                    errors.tokenNumber
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />
              </div>
              {errors.tokenNumber && (
                <p className="text-xs font-semibold text-red-500 mt-1 flex items-center gap-1">
                  • {errors.tokenNumber}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 my-4"></div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                id="reset_button"
                type="button"
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl transition-all cursor-pointer active:scale-98"
              >
                <RefreshCw className="w-4 h-4 text-slate-500" />
                {t.reset_btn}
              </button>

              <button
                id="start_exam_button"
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all cursor-pointer active:scale-98"
              >
                <ClipboardCheck className="w-5 h-5 text-white" />
                {t.start_exam_btn}
              </button>
            </div>
          </form>
        </div>

        {/* Guidelines section */}
        <div className="bg-slate-50 border-t border-slate-100 px-8 py-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-blue-50 rounded-lg shrink-0 text-blue-600 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Departmental Guidelines</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                By starting this examination, you acknowledge that you are the registered applicant listed above. Any form of communication, external assistance, or recording is strictly prohibited during the 30-minute exam duration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
