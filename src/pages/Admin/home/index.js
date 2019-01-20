import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Tabs } from 'antd';
import { formatMessage } from 'umi/locale';

const TabPane = Tabs.TabPane;

function mapStateToProps(state) {
  return {};
}

class index extends Component {
  render() {
    return (
      <Card title={formatMessage({ id: 'Home Setting' })}>
        <Tabs defaultActiveKey="1">
          <TabPane tab={formatMessage({ id: 'Carousel Config' })} key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab={formatMessage({ id: 'News Config' })} key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(index);
