# Vue-router

*  <a href="basic">Basic</a>
*  <a href="history-mode">History Mode</a>
*  <a href="router-link">router-link</a>
*  <a href="router-view">router-view</a>
*  <a href="router-push">router.push()</a>
*  <a href="$route.params">$route.params</a>
*  <a href="children">children</a>

## Basic
```
const Foo = { template: `<h1>Foo</h1>` };

const routes = [
    { path: '/foo', name: 'foo', component: Foo },
];

const router = new VueRouter({ 
    mode: 'history',
    routes 
});

const app = new Vue({ router }).$mount('#app');
```

## History Mode


## router-link
**前端顯示連結的標籤**
```
<router-link :to="foo">
```

## router-view
**該路徑對應元件的template顯示處**
```
<router-link :to="foo">
<router-view></router-view>
```
## router.push()
**換網址(不重整)**  
in other components use  
```
this.$router.push('pathname');
this.$router.push('path/to/foo');
```

##  $route.params
**可以獲取網址上給的參數值(要有在router設置好)**  

router.js  
```
{ 
    path: '/user/:id', component: User,
}
```
template  
```{{ $route.params.id }}```

other components  
```
this.$route.params.id
```

##  

```
// /user/:id/profile, /user/:id/posts
{ 
    path: '/user/:id', component: User,
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
```