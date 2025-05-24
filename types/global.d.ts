import { ReadTimeResults } from "reading-time";

export type CategoryType =
  | "code"
  | "project"
  | "archive"
  | "thoughts"
  | "faith"
  | "life"
  | "idea";

// Use it in the interface
export interface ArticleMetadata {
  title: string;
  slug: string;
  publishedAt: string;
  description?: string;
  category?: string; //CategoryType; // Now using the extracted type
  wordCount?: number;
  readingTime?: ReadTimeResults;
}
