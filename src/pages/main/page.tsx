import React from 'react';
import SideBar from 'src/components/common/sidebar';
import Header from 'src/components/common/header';
import Layout from 'src/components/layout/layout';
import MarkdownWrite from 'src/components/wirte/index';

const Index: React.FC = () => {
  return (
    <Layout>
      <MarkdownWrite/>
    </Layout>
  );
};

export default Index;