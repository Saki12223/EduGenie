export type Screen = 'home' | 'ask' | 'flashcards' | 'quizzes' | 'planner' | 'profile' | 'focustimer' | 'chat';

export interface SolutionStep {
  step: number;
  title: string;
  explanation: string;
}

export interface Solution {
  title: string;
  summary: string;
  steps: SolutionStep[];
}

// Study Planner types
export interface StudyDay {
    day: number;
    daily_focus: string;
    tasks: string[];
}

export interface StudyPlan {
    plan: StudyDay[];
}

// Quiz types
export interface QuizQuestion {
    question: string;
    options: string[];
    correct_answer: string;
}

export interface Quiz {
    quiz: QuizQuestion[];
}

// Flashcard types
export interface Flashcard {
    front: string;
    back: string;
}

export interface FlashcardDeck {
    flashcards: Flashcard[];
}

// Chat types
export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}