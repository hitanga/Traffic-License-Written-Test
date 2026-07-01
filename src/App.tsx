/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, CandidateInfo, ExamQuestion, ExamAttempt } from './types';
import { TRANSLATIONS } from './data/translations';
import { generateRandomExam } from './data/questions';
import CandidateRegistration from './components/CandidateRegistration';
import ExaminationInstructions from './components/ExaminationInstructions';
import ExaminationScreen from './components/ExaminationScreen';
import ResultScreen from './components/ResultScreen';
import HistoryPanel from './components/HistoryPanel';
import { Globe, Award, History, Heart, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type AppScreen = 'register' | 'instructions' | 'exam' | 'result';

export default function App() {
  const [language, setLanguage] = useState<Language>('ne');
  const [screen, setScreen] = useState<AppScreen>('register');
  
  // Registration and candidates details
  const [candidateInfo, setCandidateInfo] = useState<CandidateInfo | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load history from localStorage
  useEffect(() => {
    const savedAttempts = localStorage.getItem('nepal_driving_license_attempts');
    if (savedAttempts) {
      try {
        setAttempts(JSON.parse(savedAttempts));
      } catch (e) {
        console.error('Failed to parse attempts history', e);
      }
    }
  }, []);

  // Save history to localStorage
  const saveAttempts = (newAttempts: ExamAttempt[]) => {
    setAttempts(newAttempts);
    localStorage.setItem('nepal_driving_license_attempts', JSON.stringify(newAttempts));
  };

  const handleRegister = (info: CandidateInfo) => {
    setCandidateInfo(info);
    setScreen('instructions');
  };

  const handleStartExam = () => {
    // Generate randomized exam set of 25 questions
    const freshExam = generateRandomExam(25);
    setQuestions(freshExam);
    setScreen('exam');
  };

  const handleSelectOption = (questionIndex: number, originalOptionIndex: number) => {
    setQuestions((prev) => {
      const updated = [...prev];
      updated[questionIndex] = {
        ...updated[questionIndex],
        userSelectedIndex: originalOptionIndex
      };
      return updated;
    });
  };

  const handleSubmitExam = (timeSpentSeconds: number) => {
    if (!candidateInfo) return;

    // Evaluate result
    let correctCount = 0;
    let wrongCount = 0;
    const responses = questions.map((q) => {
      const isCorrect = q.userSelectedIndex !== null && q.userSelectedIndex === q.question.correctIndex;
      if (isCorrect) correctCount++;
      else wrongCount++;

      return {
        questionId: q.question.id,
        selectedOriginalIndex: q.userSelectedIndex,
        isCorrect
      };
    });

    const passed = correctCount >= 15;
    const attemptNo = attempts.filter((att) => att.tokenNumber === candidateInfo.tokenNumber).length + 1;

    const newAttempt: ExamAttempt = {
      id: `attempt_${Date.now()}`,
      candidateName: candidateInfo.fullName,
      phoneNumber: candidateInfo.phoneNumber,
      tokenNumber: candidateInfo.tokenNumber,
      date: new Date().toLocaleString(),
      score: correctCount,
      totalQuestions: 25,
      passed,
      correctCount,
      wrongCount,
      timeSpentSeconds,
      responses
    };

    const updatedAttempts = [...attempts, newAttempt];
    saveAttempts(updatedAttempts);
    setScreen('result');
  };

  const handleRetakeExam = () => {
    // Reset questions and return to registration to verify token
    // Keep candidate info, but allow them to click start immediately
    setScreen('instructions');
  };

  const handleClearHistory = () => {
    saveAttempts([]);
    setShowHistory(false);
  };

  const activeAttemptCount = candidateInfo
    ? attempts.filter((att) => att.tokenNumber === candidateInfo.tokenNumber).length + 1
    : 1;

  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none pb-12">
      {/* GLOBAL HEADER BAR */}
      <header className="bg-white border-b border-slate-200/80 shadow-xs sticky top-0 z-30 px-4 sm:px-6 py-3.5 print:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo / Title Area */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => screen !== 'exam' && setScreen('register')}>
            {/* National emblem style circular logo drawing */}
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center border-2 border-red-600/30 shadow-xs shrink-0">
              <Award className="w-7 h-7 text-red-600 animate-pulse" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-black text-slate-800 tracking-tight flex items-center gap-1.5 leading-none">
                {t.dept_transport}
              </h1>
              <p className="text-[10px] text-slate-500 font-bold tracking-wider mt-1 uppercase leading-none">
                {t.ministry_transport}
              </p>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="flex items-center space-x-2.5">

            {/* Language Toggle Button */}
            <button
              id="language_toggle_button"
              onClick={() => setLanguage(language === 'ne' ? 'en' : 'ne')}
              className="px-3 py-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-black rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span>{language === 'ne' ? 'ENGLISH' : 'नेपाली'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* SUBTITLE MARQUEE / HERO ANNOUNCEMENT */}
      <div className="bg-blue-900 text-white text-center py-2.5 px-4 text-xs font-bold leading-tight uppercase print:hidden">
        🇳🇵 {t.app_title} • {t.app_subtitle} 🇳🇵
      </div>

      {/* MAIN CONTAINER CONTENT VIEW */}
      <main className="flex-1 flex items-center justify-center py-6 sm:py-10">
        <AnimatePresence mode="wait">
          {screen === 'register' && (
            <div key="register_screen_wrapper" className="w-full">
              <CandidateRegistration
                language={language}
                onRegister={handleRegister}
              />
            </div>
          )}

          {screen === 'instructions' && candidateInfo && (
            <div key="instructions_screen_wrapper" className="w-full">
              <ExaminationInstructions
                language={language}
                candidateInfo={candidateInfo}
                onBack={() => setScreen('register')}
                onStartExam={handleStartExam}
              />
            </div>
          )}

          {screen === 'exam' && candidateInfo && (
            <div key="exam_screen_wrapper" className="w-full">
              <ExaminationScreen
                language={language}
                candidateInfo={candidateInfo}
                questions={questions}
                onSelectOption={handleSelectOption}
                onSubmitExam={handleSubmitExam}
              />
            </div>
          )}

          {screen === 'result' && candidateInfo && (
            <div key="result_screen_wrapper" className="w-full">
              <ResultScreen
                language={language}
                candidateInfo={candidateInfo}
                questions={questions}
                attemptNumber={activeAttemptCount - 1}
                onRetake={handleRetakeExam}
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* DRAWER DRAWS SIDEBAR PANEL */}
      <AnimatePresence>
        {showHistory && (
          <HistoryPanel
            language={language}
            attempts={attempts}
            onClose={() => setShowHistory(false)}
            onClearHistory={handleClearHistory}
          />
        )}
      </AnimatePresence>

      {/* SYSTEM FOOTER */}
      <footer className="mt-auto text-center text-slate-400 text-xs py-6 px-4 border-t border-slate-200/60 font-semibold space-y-2 print:hidden">
        <div className="flex items-center justify-center space-x-1">
          <span>{t.app_title} © 2026. All Rights Reserved.</span>
        </div>
        <p className="max-w-xl mx-auto text-[10px] text-slate-400 leading-relaxed font-medium">
          Disclaimer: This online written exam prep portal is designed for candidate educational self-evaluation and licensing pre-qualification practice only. All curriculum details, traffic signal symbols, and score valuations strictly mirror Nepalese transport guidelines.
        </p>
        <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 mt-2 font-medium">
          <span>Developed with pride in Nepal</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
        </div>
      </footer>
    </div>
  );
}
