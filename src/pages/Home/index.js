import React, { PureComponent } from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import styles from './index.less';
import MyCarousel from '../../components/Carousel';
import MyList from '../../components/MyList';

@connect(({ list }) => ({
  list,
}))
class Home extends PureComponent {
  render() {
    return (
      <Row gutter={18}>
        <Col md={14} sm={24}>
          <MyCarousel />
        </Col>
        <Col md={10} sm={24}>
          <Card
            title={formatMessage({ id: 'home.news', defaultMessage: 'News' })}
            style={{ maxHeight: 600 }}
          >
            <MyList />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Home;
