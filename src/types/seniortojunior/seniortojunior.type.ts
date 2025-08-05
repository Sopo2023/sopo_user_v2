export interface SeniortojuniorTypes {
  boardId: number;
  boardTitle: string;
  boardContent: string;
  boardLikeCount: number;
  boardCreatedAt?: string;
  boardUpdatedAt?: string;
  authorName?: string;
  authorId?: string;
}

export interface SeniortojuniorResponse {
  data: SeniortojuniorTypes[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface SeniortojuniorPostData {
  boardTitle: string;
  boardContent: string;
}

export interface SeniortojuniorUpdateData extends SeniortojuniorPostData {
  boardId: number;
}

