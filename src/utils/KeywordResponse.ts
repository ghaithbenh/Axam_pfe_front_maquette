export interface KeywordResponse {
	keywords: Keyword[];
	totalCount: number;
}

interface Keyword {
	word: string;
	count: number;
}