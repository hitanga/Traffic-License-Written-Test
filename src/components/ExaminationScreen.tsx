/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language, CandidateInfo, ExamQuestion, Question } from '../types';
import TrafficSignRenderer from './TrafficSignRenderer';
import { ChevronLeft, ChevronRight, Send, Clock, HelpCircle, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExaminationScreenProps {
  language: Language;
  candidateInfo: CandidateInfo;
  questions: ExamQuestion[];
  onSelectOption: (questionIndex: number, originalOptionIndex: number) => void;
  onSubmitExam: (timeSpentSeconds: number) => void;
}

export default function ExaminationScreen({
  language,
  candidateInfo,
  questions,
  onSelectOption,
  onSubmitExam
}: ExaminationScreenProps) {
  const t = TRANSLATIONS[language];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmittingLoader, setIsSubmittingLoader] = useState(false);

  // Timer Countdown Effect
  useEffect(() => {
    if (timeLeft <= 0) {
      // Auto-submit when time expires
      handleForceSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format seconds to MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remains = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remains.toString().padStart(2, '0')}`;
  };

  const handleForceSubmit = () => {
    setIsSubmittingLoader(true);
    setTimeout(() => {
      onSubmitExam(1800 - timeLeft);
    }, 2000);
  };

  const triggerSubmitFlow = () => {
    setShowSubmitModal(true);
  };

  const confirmAndSubmit = () => {
    setShowSubmitModal(false);
    setIsSubmittingLoader(true);
    setTimeout(() => {
      onSubmitExam(1800 - timeLeft);
    }, 2000);
  };

  const activeQuestionPack = questions[currentIdx];
  const activeQuestion = activeQuestionPack.question;

  // Calculate answering stats
  const answeredCount = questions.filter((q) => q.userSelectedIndex !== null).length;
  const remainingCount = questions.length - answeredCount;

  // Get color for category badges
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'traffic_rules':
        return language === 'ne' ? 'यातायात नियमहरू' : 'Traffic Rules';
      case 'driving_knowledge':
        return language === 'ne' ? 'सवारी साधन ज्ञान' : 'Driving Knowledge';
      case 'road_safety':
        return language === 'ne' ? 'सडक सुरक्षा' : 'Road Safety';
      case 'traffic_symbols':
        return language === 'ne' ? 'सवारी चिन्हहरू' : 'Traffic Symbols';
      default:
        return cat;
    }
  };

  const getCategoryClass = (cat: string) => {
    switch (cat) {
      case 'traffic_rules':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'driving_knowledge':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'road_safety':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'traffic_symbols':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 space-y-4">
      {/* LOADING OVERLAY */}
      <AnimatePresence>
        {isSubmittingLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 text-center"
          >
            <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-slate-100 flex flex-col items-center">
              {/* Spinning Loader */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 border-r-blue-600 animate-spin"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 leading-snug">
                {t.submitting_loader}
              </h3>
              <p className="text-sm text-slate-500 mt-2 font-medium">
                {t.please_wait}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONFIRMATION MODAL */}
      <AnimatePresence>
        {showSubmitModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-xl text-red-600 shrink-0">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-800 leading-tight">
                    {t.submit_confirm_title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {t.submit_confirm_desc}
                  </p>

                  {/* Summary Inside Confirmation */}
                  <div className="bg-slate-50 rounded-xl p-4 mt-4 grid grid-cols-2 gap-4 text-xs font-bold border border-slate-100">
                    <div>
                      <span className="text-slate-400 block uppercase tracking-wider">{t.answered_count}</span>
                      <span className="text-lg text-green-600 font-extrabold">{answeredCount} / 25</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase tracking-wider">{t.unanswered_count}</span>
                      <span className="text-lg text-slate-500 font-extrabold">{remainingCount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end mt-8 border-t border-slate-100 pt-5">
                <button
                  id="cancel_submit_button"
                  onClick={() => setShowSubmitModal(false)}
                  className="w-full sm:w-auto px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl transition-all active:scale-98"
                >
                  {t.cancel_btn}
                </button>
                <button
                  id="confirm_submit_button"
                  onClick={confirmAndSubmit}
                  className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-lg shadow-red-500/10 hover:shadow-red-500/25 transition-all active:scale-98"
                >
                  {t.confirm_submit_btn}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOP HEADER SUMMARY BAR */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="font-extrabold text-blue-700 uppercase font-mono">{candidateInfo.fullName.slice(0, 2)}</span>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider leading-none">Registered Candidate</p>
            <p className="text-base font-extrabold text-slate-700 leading-tight mt-1">{candidateInfo.fullName}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          {/* Token Display */}
          <div className="hidden sm:block">
            <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-widest leading-none">Token Number</span>
            <span className="text-sm font-black text-slate-600 font-mono mt-1 block uppercase">{candidateInfo.tokenNumber}</span>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

          {/* TIMER COMPONENT */}
          <div className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border ${
            timeLeft < 300 // less than 5 minutes
              ? 'bg-red-50 text-red-700 border-red-200 animate-pulse'
              : 'bg-amber-50 text-amber-800 border-amber-200'
          }`}>
            <Clock className="w-5 h-5 shrink-0" />
            <div>
              <span className="text-[9px] block font-extrabold uppercase tracking-widest leading-none">{t.remaining_time}</span>
              <span className="text-lg font-black font-mono tracking-tight block mt-0.5 leading-none">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SCREEN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: ACTIVE QUESTION CARD */}
        <div className="lg:col-span-8 space-y-4">
          {/* Question Box */}
          <div id="active_question_card" className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col min-h-[480px]">
            {/* Header with Progress Bar */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <span className={`px-3 py-1 text-xs font-bold rounded-md border ${getCategoryClass(activeQuestion.category)}`}>
                {getCategoryLabel(activeQuestion.category)}
              </span>

              <span className="text-xs font-bold text-slate-500 font-sans">
                {t.question_label} {currentIdx + 1} {t.of} 25
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-1.5 bg-slate-100 relative">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Multilingual Text */}
              <div className="space-y-2 mb-6">
                {/* Active Choice Question (Primary Language) */}
                <h3 className="text-lg sm:text-xl font-bold font-sans text-slate-800 leading-snug">
                  {language === 'ne' ? activeQuestion.questionText.ne : activeQuestion.questionText.en}
                </h3>
                {/* Alternative Helper Translation */}
                <p className="text-sm font-medium text-slate-400 italic">
                  {language === 'ne' ? activeQuestion.questionText.en : activeQuestion.questionText.ne}
                </p>
              </div>

              {/* Render Sign Image if present */}
              {activeQuestion.symbolId && (
                <div className="my-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center shrink-0 self-center">
                  <TrafficSignRenderer symbolId={activeQuestion.symbolId} size={160} />
                </div>
              )}

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3.5 mt-auto">
                {activeQuestionPack.shuffledOptions.map((opt, oIdx) => {
                  const isSelected = activeQuestionPack.userSelectedIndex === opt.originalIndex;
                  return (
                    <button
                      key={oIdx}
                      id={`option_${oIdx}`}
                      onClick={() => onSelectOption(currentIdx, opt.originalIndex)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 font-medium text-sm sm:text-base flex items-center gap-4 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-600 text-blue-900 shadow-md shadow-blue-500/5 font-bold'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-300 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <div>
                        {/* Primary Language Option */}
                        <p className="leading-snug">
                          {language === 'ne' ? opt.textNe : opt.textEn}
                        </p>
                        {/* Backup Translation Option */}
                        <p className={`text-xs mt-0.5 ${isSelected ? 'text-blue-500/80 font-semibold' : 'text-slate-400'}`}>
                          {language === 'ne' ? opt.textEn : opt.textNe}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions inside Card */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
              <button
                id="prev_question_button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((prev) => prev - 1)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  currentIdx === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-200 active:scale-95'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                {t.prev_btn}
              </button>

              {currentIdx < questions.length - 1 ? (
                <button
                  id="next_question_button"
                  onClick={() => setCurrentIdx((prev) => prev + 1)}
                  className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-all active:scale-95"
                >
                  {t.next_btn}
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  id="submit_exam_now_button"
                  onClick={triggerSubmitFlow}
                  className="flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-extrabold shadow-md shadow-green-500/10 transition-all active:scale-95 animate-bounce-short"
                >
                  <Send className="w-4 h-4 text-white" />
                  {t.submit_exam_btn}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PALETTE & METRICS */}
        <div className="lg:col-span-4 space-y-4">
          {/* Answer Metrics Widget */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 grid grid-cols-2 gap-4">
            <div className="bg-green-50/50 rounded-xl p-3 border border-green-100 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{t.answered_count}</span>
              <span className="text-2xl font-black text-green-700 mt-1 block">{answeredCount}</span>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{t.unanswered_count}</span>
              <span className="text-2xl font-black text-slate-500 mt-1 block">{remainingCount}</span>
            </div>
          </div>

          {/* PALETTE PANEL */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5">
            <h4 className="text-sm font-bold text-slate-700 border-b border-slate-100 pb-3 flex items-center gap-2">
              <HelpCircle className="w-4.5 h-4.5 text-blue-600" />
              {t.palette_title}
            </h4>

            {/* Grid Palette */}
            <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2.5 mt-4">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = q.userSelectedIndex !== null;

                let btnClass = 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100';
                if (isAnswered) {
                  btnClass = 'bg-green-100 border-green-300 text-green-800 hover:bg-green-200';
                }
                if (isCurrent) {
                  btnClass = 'bg-blue-600 border-blue-700 text-white ring-4 ring-blue-100 font-extrabold scale-110';
                }

                return (
                  <button
                    key={idx}
                    id={`palette_btn_${idx}`}
                    onClick={() => setCurrentIdx(idx)}
                    className={`aspect-square rounded-xl border-2 font-bold text-sm flex items-center justify-center transition-all cursor-pointer ${btnClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Submit Quick Link */}
            <div className="mt-6 border-t border-slate-100 pt-4">
              <button
                id="palette_quick_submit_btn"
                onClick={triggerSubmitFlow}
                className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-extrabold rounded-xl transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
              >
                <Send className="w-4.5 h-4.5 text-white/90" />
                {t.submit_exam_btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
