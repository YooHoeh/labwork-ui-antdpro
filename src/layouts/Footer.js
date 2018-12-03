import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
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
