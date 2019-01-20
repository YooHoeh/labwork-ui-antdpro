import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

class MyList extends Component {
  render() {
    const { data } = this.props;
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
        dataSource={data}
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
            <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}

export default MyList;
