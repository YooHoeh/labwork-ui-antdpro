import React from 'react';
import { List, Avatar, Icon, Card, Tabs, Select } from 'antd';
import { formatMessage } from 'umi/locale';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality n principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class Project extends React.Component {
  render() {
    return (
      <Card title={formatMessage({ id: 'Projects' })}>
        <Tabs tabPosition="left">
          <TabPane tab="人工智能" key="1">
            <List
              itemLayout="vertical"
              size="small"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={listData}
              renderItem={item => (
                <Card style={{ margin: 5 }}>
                  <List.Item
                    key={item.title}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                </Card>
              )}
            />
          </TabPane>
          <TabPane tab="应用开发" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="其他类别" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}
