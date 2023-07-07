export interface SearchResult {
  title: string;
  authors: [
    {
      name: string
    }
  ];
  subjects: string[];
  formats: {
    [key: string]: string;
  }
}