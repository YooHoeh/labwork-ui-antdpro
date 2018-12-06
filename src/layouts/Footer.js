import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import TitleBar from '../components/TitleBar';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0, marginTop: 24 }}>
    <TitleBar />
    <GlobalFooter
      links={[
        {
          key: '首页',
          title: '首页',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'HENU',
          title: ' HENU',
          href: 'https://www.henu.edu.cn',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> Artificial Intelligence Research and Application Group
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
