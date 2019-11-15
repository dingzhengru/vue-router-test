# Vue-router

*  <a href="#basic">Base</a>
*  <a href="#history-mode">History Mode</a>
*  <a href="#router-link">router-link</a>
*  <a href="#router-view">router-view</a>
*  <a href="#routerpush">router.push()</a>
*  <a href="#routeparams">$route.params</a>
*  <a href="#routequery">$route.query</a>
*  <a href="#children">children</a>

## Base
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
**取消網址上的#號，改用完整網址呈現**
```
const router = new VueRouter({ 
    mode: 'history',
    routes 
});
```

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
**換網址(前端的router-link其實就是調用這個方法)**  
in other components use  
```
// path
router.push('home') // /home

// object
router.push({ path: 'home' }) // /home

// object by name & send params
router.push({ name: 'user', params: { userId: '123' }})

// object by path & send query (/register?plan=private)
router.push({ path: 'register', query: { plan: 'private' }})
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
```this.$route.params.id```

##  $route.query
**跟上面不同的是，這是取網址最後面放這種的 ?a=1&b=2**  

template  
```{{ $route.query.a }}```

other components  
```this.$route.query.a```

## children
**可以建立網址間的父子關係**  

```
// UserHome: /user/:id
// UserProfile: /user/:id/profile
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
            name: 'userProfile',
            component: UserProfile
        }
    ]
}
```
User.template  
```
<div>
    <h1>User {{ $route.params.id }}</h1>
    <router-view></router-view>
</div>
```
UserHome.template(會顯示在User.template的router-view中)  
```<h2>UserHome</h2>```  

UserProfile.template(會顯示在User.template的router-view中)  
```<h2>UserProfile</h2>```  