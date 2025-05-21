// Define common types used across the application

export type DifficultyLevel = 'Easy' | 'Moderate' | 'Difficult';

export interface HistoryItem {
  id: string;
  score: number;
  percentile: number;
  difficulty: DifficultyLevel;
  timestamp: Date;
}