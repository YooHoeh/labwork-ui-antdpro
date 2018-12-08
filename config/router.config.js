export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user', 'guest'],
    routes: [
      { path: '/', redirect: '/home' },

      {
        name: 'Home',
        icon: 'home',
        path: '/home',
        component: './Home',
      },
      {
        name: 'Projects',
        icon: 'gold',
        path: '/projects',
        component: '/Projects',
      },
      {
        name: 'Publications',
        icon: 'book',
        path: '/publications',
        component: '/Publications',
      },
      {
        name: 'People',
        icon: 'team',
        path: '/people',
        component: '/People',
      },
      {
        name: 'Contact Us',
        icon: 'message',
        path: '/contact',
        component: '/ContactUs',
      },
      {
        component: '404',
      },
    ],
  },
];
