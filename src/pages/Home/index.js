import React, { PureComponent } from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import styles from './index.less';
import MyCarousel from '../../components/Carousel';
import MyList from '../../components/Mylist';

@connect(({ list }) => ({
  list,
}))
class Home extends PureComponent {
  render() {
    return (
      <div>
        <MyCarousel />
        <Card
          title={formatMessage({ id: 'home.news', defaultMessage: 'News' })}
          style={{ top: 18, bottom: 18 }}
        >
          <MyList />
        </Card>
      </div>
    );
  }
}

export default Home;
