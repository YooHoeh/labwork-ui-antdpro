import React from 'react';
import PeopleCard from '../../components/PeopleCard';
import { FormattedMessage, formatMessage } from 'umi/locale';
import { Collapse, Card } from 'antd';
const { Panel } = Collapse;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
const people = {
  Doctor: [
    {
      img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
      name: 'Xiaoou Sean TANG 1',
      desc: 'Professor ',
      url: 'http://www.github.com/YooHoeh',
    },
    {
      img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
      name: 'Xiaoou Sean TANG2 ',
      desc: 'Professor ',
      url: 'http://www.github.com/YooHoeh',
    },
  ],
  Students: [
    {
      img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
      name: 'Xiaoou Sean TANG 1',
      desc: 'Professor ',
      url: 'http://www.github.com/YooHoeh',
    },
    {
      img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
      name: 'Xiaoou Sean TANG2 ',
      desc: 'Professor ',
      url: 'http://www.github.com/YooHoeh',
    },
  ],
  'Academic Staff': [
    {
      img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
      name: 'Xiaoou Sean TANG 1',
      desc: 'Professor ',
      url: 'http://www.github.com/YooHoeh',
    },
    {
      img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
      name: 'Xiaoou Sean TANG 1',
      desc: 'Professor ',
      url: 'http://www.github.com/YooHoeh',
    },
    {
      img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
      name: 'Xiaoou Sean TANG2 ',
      desc: 'Professor ',
      url: 'http://www.github.com/YooHoeh',
    },
  ],
};
export default class People extends React.Component {
  renderPanel(peopleList) {
    const out = [];
    for (const type in peopleList) {
      if (peopleList.hasOwnProperty(type)) {
        out.push(this.renderType(peopleList[type], type));
      }
    }
    return out;
  }
  renderType(type, typeName) {
    return (
      <Panel header={formatMessage({ id: 'people.' + typeName })} style={{ padding: 15 }}>
        {type.map((item, index) => {
          // return <p>jkl</p>;
          return <PeopleCard {...item} key={index} />;
        })}
      </Panel>
    );
  }
  render() {
    return (
      <Card title={formatMessage({ id: 'People', defaultMessage: 'People' })}>
        <Collapse bordered={false} defaultActiveKey={['0', '1', '2']}>
          {this.renderPanel(people)}
        </Collapse>
      </Card>
    );
  }
}
