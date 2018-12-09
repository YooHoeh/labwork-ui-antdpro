import React from 'react';
import { Timeline, Card, Icon, Row, Col } from 'antd';
import { formatMessage } from 'umi/locale';

const publicationsList = [
  {
    title: 'Cascaded Hand Pose Regression',
    type: { pdf: 'http://github.com/yoohoeh' },
    author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
    book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
    time: ' June 2015',
  },
  {
    title: 'Cascaded Hand Pose Regression',
    type: { web: 'http://github.com/yoohoeh' },
    author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
    book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
    time: ' June 2015',
  },
  {
    title: 'Cascaded Hand Pose Regression',
    type: { pdf: 'http://github.com/yoohoeh' },
    author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
    book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
    time: ' June 2015',
  },
  {
    title: 'Cascaded Hand Pose Regression',
    type: {
      web: 'http://github.com/yoohoeh',
      pdf: 'http://github.com/yoohoeh',
    },
    author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
    book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
    time: ' June 2015',
  },
  {
    title: 'Cascaded Hand Pose Regression',
    type: { pdf: 'http://github.com/yoohoeh' },
    author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
    book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
    time: ' June 2015',
  },
];

export default class Publications extends React.Component {
  state = {
    reverse: false,
  };
  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };
  itemRender(item) {
    const renderIcon = type => {
      const out = [];
      for (const key in type) {
        if (key == 'pdf') {
          out.push(
            <a href={type[key]}>
              <Icon type="file-pdf" style={{ color: 'red', marginLeft: 18 }} />
            </a>
          );
        }
        if (key == 'web') {
          out.push(
            <a href={item.url}>
              <Icon type="global" />
            </a>
          );
        }
      }
      return out;
    };
    return (
      <Card
        title={
          <b>
            <Icon type="book" theme="filled" style={{ marginRight: 8 }} />
            {item.title}
          </b>
        }
        extra={renderIcon(item.type)}
        style={{ minHeight: 120 }}
      >
        <Row gutter={12}>
          <Icon type="book" style={{ marginRight: 8 }} />
          <i>{item.book}</i>
        </Row>
        <Row gutter={12}>
          <Icon type="team" style={{ marginRight: 8 }} /> {item.author}
        </Row>
        <Row gutter={12}>
          <Icon type="calendar" style={{ marginRight: 8 }} />
          {item.time}
        </Row>
      </Card>
    );
  }
  publicationsMap(publications) {
    return publications.map((item, index) => {
      return <Timeline.Item key={index}>{this.itemRender(item)}</Timeline.Item>;
    });
  }
  render() {
    return (
      <Card
        title={formatMessage({ id: 'Publications' })}
        extra={<Icon type="ordered-list" onClick={this.handleClick.bind(this)} />}
      >
        <Timeline
          pending="Is Coming..."
          // mode="alternate"
          reverse={this.state.reverse}
        >
          {this.publicationsMap(publicationsList)}
        </Timeline>
      </Card>
    );
  }
}
