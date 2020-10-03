# max-nuxt-pages

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## created

- 여기서 데이터를 fetching하면 크롤링이 불가한 형태로 됨

## asyncData

- 완성된 페이지를 보낼 수 있음
- this 를 사용할 수 없음(component가 만들어지기 전이기 때문)
- callback or promise로 this 문제를 해결 가능

- 처음에는 SPA이기 때문에 chrome에서 console.log()를 볼 수 있다
- 하지만, 새로고침을 하거나 새로운 url로 진입하면(?) 서버에서 console.log를 볼 수 있다
- asyncData는 컴포넌트가 생성될 때 딱 한 번만 실행되기 때문(?)이다

## Vuex

- Classic Mode: index.js 하나에서 모두 해결
- Modules Mode: multiple .js files, Every .js file becomes a namespaced module

## fetch

- asyncData를 대체?

## nuxtServerInit

- Server가 시작할 때마다 항상 실행

## firebase

- New project - Realtime Database - Rules: read/write "true"

## context.params.postId VS this.$route.params.postId

## Server에는 update to date but, 화면에는 적용되지 않은 문제

- store를 변경시키면 가능(서버 로딩 or 부담 X)
- Actions에서 axios, Mutations에서 기존 data에 push 혹은 update
