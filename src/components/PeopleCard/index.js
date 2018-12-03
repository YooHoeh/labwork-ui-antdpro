import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const PeopleCard = ({ img, name, desc, url }) => (
  <a href={url}>
    <Card hoverable style={{ width: 240 }} cover={<img alt="了解更多" src={img} />}>
      <Meta title={name} description={desc} />
    </Card>
  </a>
);
export default PeopleCard;
