import React from 'react';
import MarkdownEditor from 'src/components/home/markdown';

import * as S from "./style";

const Index = () => {
  return (
        <S.MarkdownEditorWrap>
            <MarkdownEditor />
        </S.MarkdownEditorWrap>
  );
};

export default Index;