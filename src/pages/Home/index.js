import React, { PureComponent } from 'react';
import {} from 'antd';
import { connect } from 'dva';
import styles from './index.less';
import MyCarousel from '../../components/Carousel';

@connect(({ list }) => ({
  list,
}))
class Home extends PureComponent {
  render() {
    return <MyCarousel />;
  }
}

export default Home;
