const FooTemplate = readFile('./public/html/foo.html');
const BarTemplate = readFile('./public/html/bar.html');


const Foo = { template: FooTemplate };
const Bar = { template: BarTemplate };
// const User = { template: '<div>User {{ $route.params.id }}</div>' };
const User = { template: `
    <div>
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  ` };
const UserHome = { template: '<div>UserHome</div>' };
const UserProfile = { template: '<div>UserProfile {{ $route.params.id }}</div>' };
const UserPosts = { template: '<div>UserPosts {{ $route.params.id }}</div>' };


// 重定向 redirect: '/b', redirect: { name: 'foo' } 也可用 alias: '/b'
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:id', component: User,
        // /user/:id/profile, /user/:id/posts
        children: [
            {
                path: '/',
                name: 'userHome',
                component: UserHome
            },
            {
                path: 'profile',
                component: UserProfile
            },
            {
                path: 'posts',
                component: UserPosts
            }
        ]
    }
];

// 要在後端直接換網址可以用 router.push()

// literal string path
// router.push('home')

// object
// router.push({ path: 'home' })

// named route
// router.push({ name: 'user', params: { userId: '123' } })

// with query, resulting in /register?plan=private
// router.push({ path: 'register', query: { plan: 'private' } })

// mode: 'history' 為了呈現完整的網址(而不是帶有#的)
const router = new VueRouter({ 
    mode: 'history',
    routes 
});


const app = new Vue({ router }).$mount('#app');