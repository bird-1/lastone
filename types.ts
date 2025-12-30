
export enum Category {
  NUMBER_ALGEBRA = '数与代数',
  GEOMETRY_SPACE = '图形与几何',
  STATISTICS_PROBABILITY = '统计与概率',
  COMPREHENSIVE_PRACTICE = '综合与运用'
}

export interface KnowledgePoint {
  id: string;
  category: Category;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  sourceQuestion?: string;
  pitfall?: string;
}

export interface AnalysisSummary {
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}
