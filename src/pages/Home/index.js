import React, { PureComponent } from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import styles from './index.less';
import MyCarousel from '../../components/Carousel';
import MyList from '../../components/MyList';

const carouselData = [
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
const newsList = [];
for (let i = 0; i < 5; i++) {
  newsList.push({
    href: 'http://github.com/yoohoeh',
    title: `标题 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',

    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

@connect(({ list }) => ({
  list,
}))
class Home extends PureComponent {
  componentDidMount() {
    const { dispath } = this.props;
  }

  render() {
    return (
      <Row gutter={18}>
        <Col md={14} sm={24}>
          <MyCarousel data={carouselData} />
        </Col>
        <Col md={10} sm={24}>
          <Card
            title={formatMessage({ id: 'home.news', defaultMessage: 'News' })}
            style={{ maxHeight: 600 }}
          >
            <MyList data={newsList} />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Home;
