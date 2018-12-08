import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `标题 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',

    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class MyList extends Component {
  render() {
    return (
      <List
        style={{ maxHeight: 600 }}
        itemLayout="vertical"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={listData}
        renderItem={item => (
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
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}

export default MyList;
