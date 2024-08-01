export interface SeniortojuniorTypes {
  boardId: number;
  boardTitle: string;
  boardContent: string;
  boardLikeCount: number;
}
export interface SeniortojuniorResponse extends Response{
    data:SeniortojuniorTypes[];
}

