import React from 'react';
import { Carousel, Card, Col, Row } from 'antd';
import styles from './index.less';
const data = [
  {
    title: 'A diverse and inclusive workplace',
    img:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=131288021,2325464851&fm=26&gp=0.jpg',
    desc:
      'No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1No.1',
  },
  {
    title: 'Work happier',
    img:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=131288021,2325464851&fm=26&gp=0.jpg',
    desc:
      'No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2No.2',
  },
  {
    title: 'Put your health and family first',
    img:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=131288021,2325464851&fm=26&gp=0.jpg',
    desc: 'No.3No.3No.3No.3No.3No.3No.3No.3No.3',
  },
];
export default class MyCarousel extends React.Component {
  renderItem(data) {
    return data.map(item => {
      return (
        <div className={styles.item}>
          <img src={item.img} />
          <div className={styles.desc}>
            <p>{item.title}</p>
            <span>{item.desc}</span>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <Row gutter={16}>
        <Col span={16}>
          <Carousel autoplay className={styles.carousel}>
            {this.renderItem(data)}
          </Carousel>
        </Col>
        <Col span={8}>
          <p>sdf</p>
        </Col>
      </Row>
    );
  }
}
