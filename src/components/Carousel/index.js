import React from 'react';
import { Carousel } from 'antd';
import styles from './index.less';
const data = [
  {
    title: 'A diverse and inclusive workplace',
    img:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=131288021,2325464851&fm=26&gp=0.jpg',
    desc:
      'Come help us make collaboration even better. We’ve built a company we truly love working for, and we think you will too.',
  },
  {
    title: 'Work happier',
    img:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=131288021,2325464851&fm=26&gp=0.jpg',
    desc:
      'Build amazing things with autonomy, self-direction, and a healthy work-life balance. We offer flexible work schedules for all of our employees and unlimited PTO. We also believe that if a job allows for it, you should work wherever you’re happiest.',
  },
  {
    title: 'Put your health and family first',
    img:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=131288021,2325464851&fm=26&gp=0.jpg',
    desc:
      'You’ll enjoy 100% coverage of health insurance premiums across our medical, dental, and vision plan offerings, including coverage for dependents. We also offer five months of paid family leave to all new parents with the option to use it all at once or throughout the baby’s first year.',
  },
];
export default class MyCarousel extends React.Component {
  renderItem(data) {
    return data.map(item => {
      return (
        <div className={styles.item}>
          <h3>{item.title}</h3>
          <img src={item.img} />
          <div className={styles.desc}>
            <span>{item.desc}</span>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <Carousel autoplay className={styles.carousel}>
        {this.renderItem(data)}
      </Carousel>
    );
  }
}
