import React from 'react';
import Layout from 'src/components/common/layout/layout';
import MarkdownEditor from 'src/components/markdown';

import * as S from "src/pages/wirte/page.style"

const Index: React.FC = () => {
  return (
    <Layout>
        <S.MarkdownEditorWrap>
            <MarkdownEditor />
        </S.MarkdownEditorWrap>
    </Layout>
  );
};

export default Index;