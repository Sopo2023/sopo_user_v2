import React from 'react';
import Layout from 'src/components/common/layout/layout';
import MarkdownEditor from 'src/components/home/markdown';

import * as S from "src/pages/wirte/page.style"

const Index: React.FC = () => {
  return (
        <S.MarkdownEditorWrap>
            <MarkdownEditor />
        </S.MarkdownEditorWrap>
  );
};

export default Index;