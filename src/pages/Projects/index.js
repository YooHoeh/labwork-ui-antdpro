import React from 'react';
export default class Help extends React.Component {
  render() {
    const content = `
  <pre style="font-size:14px">
  新闻=[{
    href: 'http://github.com/yoohoeh',
    title: title1
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',

    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }],
  轮播= [
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
  著作：[
    {
      title: 'Cascaded Hand Pose Regression',
      type: { pdf: 'http://github.com/yoohoeh' },
      author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
      book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
      time: ' June 2015',
    },
    {
      title: 'Cascaded Hand Pose Regression',
      type: { web: 'http://github.com/yoohoeh' },
      author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
      book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
      time: ' June 2015',
    },
    {
      title: 'Cascaded Hand Pose Regression',
      type: { pdf: 'http://github.com/yoohoeh' },
      author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
      book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
      time: ' June 2015',
    },
    {
      title: 'Cascaded Hand Pose Regression',
      type: {
        web: 'http://github.com/yoohoeh',
        pdf: 'http://github.com/yoohoeh',
      },
      author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
      book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
      time: ' June 2015',
    },
    {
      title: 'Cascaded Hand Pose Regression',
      type: { pdf: 'http://github.com/yoohoeh' },
      author: 'Xiao Sun, Yichen Wei, Shuang Liang, Xiaoou Tang, Jian Sun',
      book: 'IEEE Conf. on Computer Vision and Pattern Recognition',
      time: ' June 2015',
    },
  ]
  人员={
    Doctor: [
      {
        img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
        name: 'Xiaoou Sean TANG 1',
        desc: 'Professor ',
        url: 'http://www.github.com/YooHoeh',
      },
      {
        img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
        name: 'Xiaoou Sean TANG2 ',
        desc: 'Professor ',
        url: 'http://www.github.com/YooHoeh',
      },
    ],
    Students: [
      {
        img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
        name: 'Xiaoou Sean TANG 1',
        desc: 'Professor ',
        url: 'http://www.github.com/YooHoeh',
      },
      {
        img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
        name: 'Xiaoou Sean TANG2 ',
        desc: 'Professor ',
        url: 'http://www.github.com/YooHoeh',
      },
    ],
    'Academic Staff': [
      {
        img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
        name: 'Xiaoou Sean TANG 1',
        desc: 'Professor ',
        url: 'http://www.github.com/YooHoeh',
      },
      {
        img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
        name: 'Xiaoou Sean TANG 1',
        desc: 'Professor ',
        url: 'http://www.github.com/YooHoeh',
      },
      {
        img: 'http://mmlab.ie.cuhk.edu.hk/images/people/director/xtang.jpg',
        name: 'Xiaoou Sean TANG2 ',
        desc: 'Professor ',
        url: 'http://www.github.com/YooHoeh',
      },
    ],
  };
      </pre>`;
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
}
