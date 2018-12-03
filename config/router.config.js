export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user', 'guest'],
    routes: [
      { path: '/', redirect: '/dashboard' },

      {
        name: 'Home',
        icon: 'home',
        path: '/home',
        component: './Home',
      },
      {
        name: 'People',
        icon: 'team',
        path: '/people',
      },
      {
        name: 'Projects',
        icon: 'gold',
        path: '/projects',
      },
      {
        name: 'Publications',
        icon: 'book',
        path: '/publications',
      },
      {
        name: 'Contact Us',
        icon: 'message',
        path: '/contact',
      },
      {
        component: '404',
      },
    ],
  },
];
