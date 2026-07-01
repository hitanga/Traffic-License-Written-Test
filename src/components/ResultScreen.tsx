/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language, CandidateInfo, ExamQuestion, ExamAttempt } from '../types';
import TrafficSignRenderer from './TrafficSignRenderer';
import { Check, X, Printer, RefreshCw, FileText, Calendar, Award, ChevronDown, ChevronUp, User, Key, Phone, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResultScreenProps {
  language: Language;
  candidateInfo: CandidateInfo;
  questions: ExamQuestion[];
  attemptNumber: number;
  onRetake: () => void;
}

export default function ResultScreen({
  language,
  candidateInfo,
  questions,
  attemptNumber,
  onRetake
}: ResultScreenProps) {
  const t = TRANSLATIONS[language];
  const [showReview, setShowReview] = useState(false);

  // Evaluate Score
  const totalQuestions = questions.length;
  let correctCount = 0;
  let wrongCount = 0;

  questions.forEach((q) => {
    if (q.userSelectedIndex !== null && q.userSelectedIndex === q.question.correctIndex) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = correctCount >= 15;

  // Feedback Message
  const getFeedbackMessage = () => {
    if (correctCount >= 22) return t.feedback_excellent;
    if (correctCount >= 15) return t.feedback_good;
    return t.feedback_fail;
  };

  // Format Current Date/Time
  const examDateString = new Date().toLocaleString(language === 'ne' ? 'ne-NP' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Handle printing
  const handlePrint = () => {
    window.print();
  };

  // Simulating PDF Download
  const handleDownloadPDF = () => {
    // Generate text content representation
    const content = `
NEPAL DRIVING LICENSE WRITTEN TEST RESULT
------------------------------------------
Candidate Name  : ${candidateInfo.fullName.toUpperCase()}
Phone Number    : ${candidateInfo.phoneNumber}
Token Number    : ${candidateInfo.tokenNumber.toUpperCase()}
Attempt Number  : ${attemptNumber}
Exam Date       : ${examDateString}

TEST METRICS:
Total Questions : ${totalQuestions}
Correct Answers : ${correctCount}
Wrong Answers   : ${wrongCount}
Obtained Score  : ${correctCount}/${totalQuestions}
Percentage      : ${percentage}%
STATUS          : ${passed ? 'PASS' : 'FAIL'}
------------------------------------------
Department of Transport Management, Nepal
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `License_Exam_Result_${candidateInfo.tokenNumber}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl mx-auto px-4 py-4 space-y-6 print:p-0"
    >
      {/* RESULT SCORECARD CARD */}
      <div id="result_scorecard" className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden print:shadow-none print:border-none">
        
        {/* Banner with Pass/Fail color */}
        <div className={`p-8 text-center text-white relative overflow-hidden ${
          passed
            ? 'bg-gradient-to-r from-green-600 to-emerald-700'
            : 'bg-gradient-to-r from-red-600 to-rose-700'
        }`}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full transform translate-x-24 -translate-y-24"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {passed ? (
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg mb-4">
                <Check className="w-9 h-9 text-white stroke-[3.5]" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg mb-4">
                <X className="w-9 h-9 text-white stroke-[3.5]" />
              </div>
            )}

            <h2 className="text-sm font-bold uppercase tracking-widest opacity-90">{t.result_title}</h2>
            
            <h1 className="text-4xl sm:text-5xl font-black mt-2 tracking-tight">
              {passed ? t.status_pass : t.status_fail}
            </h1>

            <p className="text-sm sm:text-base font-medium mt-3 max-w-xl opacity-90 leading-relaxed">
              {passed ? t.pass_msg : t.fail_msg}
            </p>

            <span className="mt-4 px-4 py-1.5 bg-black/15 text-xs font-bold rounded-full border border-white/10 uppercase tracking-wider flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
              {getFeedbackMessage()}
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-slate-100">
          {/* Candidate Card */}
          <div className="md:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200/60 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Official Records
            </h3>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Name</span>
              <span className="text-lg font-bold text-slate-800 uppercase">{candidateInfo.fullName}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Phone</span>
              <span className="text-sm font-semibold text-slate-600 font-mono">{candidateInfo.phoneNumber}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Token Number</span>
              <span className="text-sm font-extrabold text-blue-700 font-mono uppercase">{candidateInfo.tokenNumber}</span>
            </div>
          </div>

          {/* Core Metrics grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            <div className="p-4 border border-slate-100 bg-white rounded-xl text-center shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider leading-none">Correct</span>
              <span className="text-2xl font-black text-green-600 mt-2 block">{correctCount}</span>
            </div>

            <div className="p-4 border border-slate-100 bg-white rounded-xl text-center shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider leading-none">Wrong</span>
              <span className="text-2xl font-black text-red-500 mt-2 block">{wrongCount}</span>
            </div>

            <div className="p-4 border border-slate-100 bg-white rounded-xl text-center shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider leading-none">{t.score_label}</span>
              <span className="text-2xl font-black text-slate-700 mt-2 block">{correctCount}/25</span>
            </div>

            <div className="p-4 border border-slate-100 bg-white rounded-xl text-center shadow-xs">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider leading-none">{t.percentage_label}</span>
              <span className="text-2xl font-black text-blue-700 mt-2 block">{percentage}%</span>
            </div>
          </div>
        </div>

        {/* Meta details footer */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-slate-100 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>{t.date_time}: {examDateString}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-slate-400" />
            <span>{t.attempt_no}: #{attemptNumber}</span>
          </div>
        </div>

        {/* Action Buttons bar */}
        <div className="bg-white px-6 sm:px-8 py-5 flex flex-wrap gap-3 items-center justify-between print:hidden">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              id="print_result_button"
              onClick={handlePrint}
              className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all active:scale-98 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              <Printer className="w-4.5 h-4.5 text-slate-500" />
              {t.print_btn}
            </button>

            <button
              id="download_pdf_button"
              onClick={handleDownloadPDF}
              className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all active:scale-98 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              <FileText className="w-4.5 h-4.5 text-slate-500" />
              {t.download_pdf_btn}
            </button>
          </div>

          <button
            id="retake_exam_button"
            onClick={onRetake}
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
          >
            <RefreshCw className="w-4.5 h-4.5 text-white animate-spin-hover" />
            {t.retake_btn}
          </button>
        </div>
      </div>

      {/* DETAILED QUESTION REVIEW ACCORDION */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden print:hidden">
        <button
          id="toggle_review_button"
          onClick={() => setShowReview(!showReview)}
          className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100/70 border-b border-slate-100 flex items-center justify-between transition-all cursor-pointer font-bold text-slate-700"
        >
          <span className="flex items-center gap-2">
            <FileText className="w-4.5 h-4.5 text-blue-600" />
            Review Your Responses (प्रश्नोत्तर पुनरावलोकन)
          </span>
          {showReview ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {showReview && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="divide-y divide-slate-100"
            >
              <div className="p-4 bg-blue-50/20 text-xs text-blue-700 font-semibold flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600 fill-blue-100" />
                Below is a detailed breakdown of all questions. Correct options are highlighted in green, while incorrect choices are shown in red.
              </div>

              {questions.map((item, idx) => {
                const q = item.question;
                const isCorrect = item.userSelectedIndex === q.correctIndex;
                const userSelectedOptionText = item.userSelectedIndex !== null
                  ? q.options[language][item.userSelectedIndex]
                  : null;
                const correctOptionText = q.options[language][q.correctIndex];

                return (
                  <div key={idx} className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-widest">
                          Question {idx + 1} • {q.category.replace('_', ' ').toUpperCase()}
                        </span>
                        {/* Primary and Alternative text */}
                        <h4 className="text-base font-bold text-slate-800 font-sans">
                          {language === 'ne' ? q.questionText.ne : q.questionText.en}
                        </h4>
                        <p className="text-xs text-slate-400 italic">
                          {language === 'ne' ? q.questionText.en : q.questionText.ne}
                        </p>
                      </div>

                      {/* Correct / Wrong icon flag */}
                      {isCorrect ? (
                        <span className="px-2.5 py-1 bg-green-50 text-green-700 border border-green-200 rounded-md text-xs font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 stroke-[3]" /> Correct
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 rounded-md text-xs font-bold flex items-center gap-1">
                          <X className="w-3.5 h-3.5 stroke-[3]" /> Incorrect
                        </span>
                      )}
                    </div>

                    {/* Rendering the sign image in review if it exists */}
                    {q.symbolId && (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 inline-block">
                        <TrafficSignRenderer symbolId={q.symbolId} size={100} />
                      </div>
                    )}

                    {/* Options list inside review */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.shuffledOptions.map((opt, oIdx) => {
                        const isCorrectOpt = opt.originalIndex === q.correctIndex;
                        const isUserOpt = opt.originalIndex === item.userSelectedIndex;

                        let cardClass = 'bg-slate-50 border-slate-200 text-slate-600';
                        if (isCorrectOpt) {
                          cardClass = 'bg-green-50 border-green-300 text-green-900 font-bold';
                        } else if (isUserOpt && !isCorrectOpt) {
                          cardClass = 'bg-red-50 border-red-300 text-red-900 font-bold';
                        }

                        return (
                          <div
                            key={oIdx}
                            className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center gap-3 ${cardClass}`}
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
                              isCorrectOpt
                                ? 'bg-green-600 text-white'
                                : isUserOpt
                                ? 'bg-red-600 text-white'
                                : 'bg-slate-200 text-slate-500'
                            }`}>
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <div>
                              <p className="leading-snug">{language === 'ne' ? opt.textNe : opt.textEn}</p>
                              <p className="text-[10px] opacity-70 italic mt-0.5">
                                {language === 'ne' ? opt.textEn : opt.textNe}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
