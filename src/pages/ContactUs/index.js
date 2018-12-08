import React from 'react';
import { Card, Icon } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import './index.less';

export default class ContactUs extends React.Component {
  render() {
    return (
      <Card title={formatMessage({ id: 'Contact Us' })}>
        <div className="main">
          <h3><FormattedMessage id="title.name" /></h3>
          <p>
            <Icon type="environment" style={{ marginRight: 8 }} />
            <FormattedMessage id="contact.address" />
          </p>
          <p>
            <Icon type="mail" style={{ marginRight: 8 }} />
            <FormattedMessage id="contact.zipCode" />
          </p>
          <p><Icon type="message" style={{ marginRight: 8 }} /><a href="xxxxxxx@xxx.com" >xxxxxxx@xxx.com</a></p>
          <p>Artificial Intelligence Research and Application Group</p>
        </div>
      </Card>
    );
  }
}
