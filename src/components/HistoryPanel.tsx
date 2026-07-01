/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language, ExamAttempt } from '../types';
import { X, Trash2, Calendar, Award, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface HistoryPanelProps {
  language: Language;
  attempts: ExamAttempt[];
  onClose: () => void;
  onClearHistory: () => void;
}

export default function HistoryPanel({
  language,
  attempts,
  onClose,
  onClearHistory
}: HistoryPanelProps) {
  const t = TRANSLATIONS[language];

  // Calculations for graph plotting
  const maxScore = 25;
  const padding = 30;
  const chartHeight = 120;
  const chartWidth = 320;

  // Render SVG Line Chart representing score progress over attempts
  const renderProgressChart = () => {
    if (attempts.length < 2) return null;

    const points = attempts.map((att, idx) => {
      const x = padding + (idx * (chartWidth - padding * 2)) / (attempts.length - 1);
      const y = chartHeight - padding - (att.score * (chartHeight - padding * 2)) / maxScore;
      return { x, y, score: att.score };
    });

    // Create SVG Path line
    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    return (
      <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 mt-2">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mb-3">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          Score Progression (प्रगति ग्राफ)
        </h4>
        <div className="relative">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto overflow-visible">
            {/* Guide line for Pass Marks (15) */}
            <line
              x1={padding}
              y1={chartHeight - padding - (15 * (chartHeight - padding * 2)) / maxScore}
              x2={chartWidth - padding}
              y2={chartHeight - padding - (15 * (chartHeight - padding * 2)) / maxScore}
              stroke="#10B981"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            <text
              x={chartWidth - padding + 5}
              y={chartHeight - padding - (15 * (chartHeight - padding * 2)) / maxScore + 3}
              fill="#10B981"
              fontSize="7"
              fontWeight="bold"
            >
              Pass (15)
            </text>

            {/* Connecting line */}
            <path d={pathD} fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Individual score points */}
            {points.map((p, i) => (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="5"
                  fill="#FFFFFF"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  className="transition-all hover:scale-125 hover:fill-blue-50 cursor-pointer"
                />
                <text x={p.x} y={p.y - 8} fill="#1E293B" fontSize="8" fontWeight="bold" textAnchor="middle">
                  {p.score}
                </text>
                <text x={p.x} y={chartHeight - 8} fill="#64748B" fontSize="7" fontWeight="semibold" textAnchor="middle">
                  #{i + 1}
                </text>
              </g>
            ))}

            {/* X Axis boundary */}
            <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#CBD5E1" strokeWidth="1" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-slate-200"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-black text-slate-800 tracking-tight">
              {t.history_title}
            </h3>
          </div>
          <button
            id="close_history_panel"
            onClick={onClose}
            className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Attempt history Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-6">
          {/* Progress graph for multi-attempts */}
          {renderProgressChart()}

          {/* Attempts List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Exam Log ({attempts.length})
            </h4>

            {attempts.length === 0 ? (
              <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-2xl p-6">
                <AlertTriangle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-400 text-sm font-semibold">{t.history_empty}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {attempts
                  .slice()
                  .reverse()
                  .map((attempt, index) => {
                    const originalIdx = attempts.length - index;
                    return (
                      <div
                        key={attempt.id}
                        className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-between"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{attempt.date}</span>
                          </div>
                          <p className="font-bold text-slate-700 text-sm uppercase">
                            {attempt.candidateName} <span className="text-slate-400 font-normal">({attempt.tokenNumber})</span>
                          </p>
                          <p className="text-xs text-slate-500 font-semibold">
                            Score: <span className="font-extrabold">{attempt.score}/25</span> ({Math.round((attempt.score/25)*100)}%)
                          </p>
                        </div>

                        {/* Pass/Fail indicator stamp */}
                        {attempt.passed ? (
                          <span className="px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-200 text-xs font-black uppercase flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" /> Pass
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200 text-xs font-black uppercase flex items-center gap-1">
                            <X className="w-3.5 h-3.5 stroke-[2.5]" /> Fail
                          </span>
                        )}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        {/* Clear History footer action */}
        {attempts.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50">
            <button
              id="clear_history_now_button"
              onClick={onClearHistory}
              className="w-full flex items-center justify-center gap-2 py-3 border border-red-200 hover:bg-red-50 hover:border-red-300 text-red-600 hover:text-red-700 font-bold rounded-xl transition-all cursor-pointer text-sm"
            >
              <Trash2 className="w-4 h-4" />
              {t.clear_history_btn}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
