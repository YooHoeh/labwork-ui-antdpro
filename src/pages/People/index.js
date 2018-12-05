import React from 'react';
import PeopleCard from '../../components/PeopleCard';
import { FormattedMessage } from 'umi/locale';
import { Collapse } from 'antd';
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
      <Panel header={typeName} style={{ padding: 15 }}>
        {type.map(item => {
          // return <p>jkl</p>;
          return <PeopleCard {...item} />;
        })}
      </Panel>
    );
  }
  render() {
    return (
      <div>
        <h2>
          <FormattedMessage id="People" defaultMessage="People" />
        </h2>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          {this.renderPanel(people)}
        </Collapse>
      </div>
    );
  }
}
