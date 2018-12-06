import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import styles from './index.less';
import MyCarousel from '../../components/Carousel';

@connect(({ list }) => ({
  list,
}))
class Home extends PureComponent {
  render() {
    return (
      <Card>
        <MyCarousel />
      </Card>
    );
  }
}

export default Home;
