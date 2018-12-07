import React from 'react';
import { Card, Icon } from 'antd';
import { formatMessage } from 'umi/locale';
import './index.less';

export default class ContactUs extends React.Component {
  render() {
    return (
      <Card title={formatMessage({ id: 'Contact Us' })}>
        <div className="main">
          <h3>人工智能技术及应用研究组</h3>
          <p>
            <Icon type="environment" style={{ marginRight: 8 }} />
            地址:河南省开封市龙亭区金明大道河南大学金明校区计算机与信息工程学院
          </p>
          <p>
            <Icon type="mail" style={{ marginRight: 8 }} />
            邮编:475004
          </p>
          <p>Artificial Intelligence Research and Application Group</p>
        </div>
      </Card>
    );
  }
}
