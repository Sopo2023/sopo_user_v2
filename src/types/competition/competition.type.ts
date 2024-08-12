export interface competitionType{
    contestId: number,
    contestTitle: string,
    contestContent: string,
    contestMax: number,
    contestPerson: number,
    contestDateTime: Date,
    memberName: string,
    memberIdList: [
      string
    ]
}
export interface competitionResponse extends Response{
    data:competitionType[];
}