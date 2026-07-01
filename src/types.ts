/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ne' | 'en';

export type QuestionCategory = 'traffic_rules' | 'driving_knowledge' | 'road_safety' | 'traffic_symbols';

export interface Question {
  id: string;
  category: QuestionCategory;
  questionText: {
    en: string;
    ne: string;
  };
  options: {
    en: string[];
    ne: string[];
  };
  correctIndex: number; // Index in the original unshuffled array
  symbolId?: string; // If it is a traffic sign question, this points to our SVG sign renderer
}

export interface ShuffledOption {
  originalIndex: number;
  textEn: string;
  textNe: string;
}

export interface ExamQuestion {
  question: Question;
  shuffledOptions: ShuffledOption[];
  userSelectedIndex: number | null; // Stores the original index of the selected option, or null if unanswered
}

export interface ExamAttempt {
  id: string;
  candidateName: string;
  phoneNumber: string;
  tokenNumber: string;
  date: string;
  score: number;
  totalQuestions: number;
  passed: boolean;
  correctCount: number;
  wrongCount: number;
  timeSpentSeconds: number;
  responses: {
    questionId: string;
    selectedOriginalIndex: number | null;
    isCorrect: boolean;
  }[];
}

export interface CandidateInfo {
  fullName: string;
  phoneNumber: string;
  tokenNumber: string;
}
