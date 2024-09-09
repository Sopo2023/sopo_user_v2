export const renderEmptyMessage = (selected: number) => {
    switch (selected) {
        case 0:
            return "게시물이 없습니다.";
        case 1:
            return "저장된 포트폴리오가 없습니다.";
        case 2:
            return "참가한 대회가 없습니다.";
        case 3:
            return "저장된 북마크가 없습니다.";
        default:
            return "";
    }
};