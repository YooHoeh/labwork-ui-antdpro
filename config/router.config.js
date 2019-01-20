export default [
  { path: '/api', component: '../pages/apiDoc' },
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  // backend
  {
    path: '/admin',
    Routes: ['src/pages/Authorized'],
    authority: ['admin'],
    component: '../layouts/Backend',
    routes: [
      { path: '/admin', redirect: 'home' },
      {
        name: 'Home Setting',
        icon: 'home',
        path: '/admin/home',
        component: './Admin/home',
      },
      {
        name: 'Projects Manager',
        icon: 'gold',
        path: '/admin/projects',
        component: './Admin/projects',
      },
      {
        name: 'Publications Manager',
        icon: 'book',
        path: '/admin/publications',
        component: './Admin/projects',
      },

      {
        name: 'People Manager',
        icon: 'team',
        path: '/admin/people',
        component: './Admin/people',
      },
      {
        name: 'Contact Info Manager',
        icon: 'message',
        path: '/admin/contact',
        component: './Admin/contactUs',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
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
