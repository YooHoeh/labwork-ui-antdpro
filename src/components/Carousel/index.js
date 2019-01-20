import React from 'react';
import { Carousel } from 'antd';
import styles from './index.less';

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
    const { data } = this.props;
    return (
      <Carousel autoplay className={styles.carousel}>
        {this.renderItem(data)}
      </Carousel>
    );
  }
}
