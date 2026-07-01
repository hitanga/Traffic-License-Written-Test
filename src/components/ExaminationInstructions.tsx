/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language, CandidateInfo } from '../types';
import { User, Phone, Key, Clock, Award, HelpCircle, CheckCircle, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

interface ExaminationInstructionsProps {
  language: Language;
  candidateInfo: CandidateInfo;
  onStartExam: () => void;
  onBack: () => void;
}

export default function ExaminationInstructions({
  language,
  candidateInfo,
  onStartExam,
  onBack
}: ExaminationInstructionsProps) {
  const t = TRANSLATIONS[language];

  // Animation variants for cascading text
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-4xl mx-auto px-4 py-6"
    >
      <div id="instructions_card" className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
              {t.instructions_title}
            </h2>
            <p className="text-blue-100 mt-2 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Please review your details and examination rules thoroughly before triggering the system timer.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Candidate Card Panel */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full transform translate-x-12 translate-y-6"></div>
              
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <User className="w-4 h-4 text-blue-600" />
                {t.candidate_info}
              </h3>

              <div className="space-y-4 relative z-10">
                <div className="pb-3 border-b border-slate-200">
                  <p className="text-xs text-slate-500 font-bold">{t.full_name}</p>
                  <p className="text-lg font-bold text-slate-800 leading-tight mt-0.5 uppercase">
                    {candidateInfo.fullName}
                  </p>
                </div>

                <div className="pb-3 border-b border-slate-200 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-500 font-bold">{t.phone_number}</p>
                    <p className="text-base font-semibold text-slate-700 font-mono mt-0.5">
                      {candidateInfo.phoneNumber}
                    </p>
                  </div>
                  <Phone className="w-5 h-5 text-slate-400" />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-500 font-bold">{t.token_number}</p>
                    <p className="text-lg font-extrabold text-blue-700 font-mono tracking-wide mt-0.5 uppercase">
                      {candidateInfo.tokenNumber}
                    </p>
                  </div>
                  <Key className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-600 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-slate-500 leading-none">{t.total_questions}</p>
                  <p className="text-xl font-extrabold text-blue-900 mt-1">25</p>
                </div>
              </div>

              <div className="bg-green-50/50 rounded-xl p-3 border border-green-100 flex items-center gap-3">
                <Award className="w-8 h-8 text-green-600 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-slate-500 leading-none">{t.pass_marks}</p>
                  <p className="text-xl font-extrabold text-green-900 mt-1">15 / 25</p>
                </div>
              </div>

              <div className="bg-amber-50/50 rounded-xl p-3 border border-amber-100 flex items-center gap-3">
                <Clock className="w-8 h-8 text-amber-600 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-slate-500 leading-none">{t.exam_duration}</p>
                  <p className="text-sm font-bold text-amber-900 mt-1">{t.minutes_30}</p>
                </div>
              </div>

              <div className="bg-purple-50/50 rounded-xl p-3 border border-purple-100 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-purple-600 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-slate-500 leading-none">{t.attempts}</p>
                  <p className="text-sm font-bold text-purple-900 mt-1">{t.unlimited}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rules and Guidelines Panel */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 pb-2 border-b border-slate-100">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              Examination Directives
            </h3>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-3.5"
            >
              {t.rules_list.map((rule, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed"
                >
                  <CheckCircle className="w-4.5 h-4.5 text-green-600 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Warning Message Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 text-xs text-amber-800 leading-relaxed">
              <strong>Notice:</strong> Closing or refreshing this tab during an active session will invalidate your ongoing test token and record it as a 0-score attempt. Ensure you have a stable network before launching.
            </div>
          </div>
        </div>

        {/* Action Bar Footer */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 sm:px-8 py-5 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button
            id="back_to_registration"
            onClick={onBack}
            className="text-slate-500 hover:text-slate-700 text-sm font-bold hover:underline py-2 px-4 transition-all"
          >
            ← Modify Candidate Details
          </button>

          <button
            id="start_exam_now_button"
            onClick={onStartExam}
            className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-base font-extrabold rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/25 transition-all cursor-pointer text-center active:scale-98"
          >
            {t.start_button_large}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
