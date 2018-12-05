import React from 'react';
import { Card } from 'antd';
import { formatMessage } from 'umi/locale';
const { Meta } = Card;

const PeopleCard = props => (
  <a href={props.url} target="_blank">
    <Card
      hoverable
      style={{ width: 240, margin: 15, float: 'left' }}
      cover={<img alt={formatMessage({ id: 'people.clickformore' })} src={props.img} />}
    >
      <Meta title={props.name} description={props.desc} />
    </Card>
  </a>
);
export default PeopleCard;
