import { SearchResult } from "./search-result";

export interface ApiResponse {
  results: SearchResult[]
  count: number;
  next: string | null;
  previous: string | null;
}