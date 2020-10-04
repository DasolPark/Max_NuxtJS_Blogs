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

## Plugins

- context.app.$axios or this.$axios 처럼 쓴다.
- filter를 만들었다면 {{ variable | filter }} 형식으로 사용

## Middleware

- script에서 middleware: 'file name', 를 작성하여 사용 가능
- Reload했을 경우 browser의 console.log()에는 해당 메시지가 뜨지 않는다.
- 처음에는 server측 console.log()에 뜨기 때문, 그 후부터는 browser에서 확인 가능
- nuxt.config.js의 router: { middleware: 'file name' }을 사용하면 전역에서 사용된다

## Authenticate

- firebase Auth REST API 검색해서 sign up/sign in 등 이용하면 됨
- web api key는 project 설정에 있음
- auth 또한 store에 집중시켜서 사용하면 좋음
- firebase auth는 1시간 유지될 것임(문서 참고)

- Data Base의 rules/write를 'auth != null'로 선언해줘야 auth된 사용자만 글을 쓰거나 수정할 수 있음
- search 'firebase rest api auth'
- 'Authenticate REST Requests' - 'Firebase ID tokens'
- 뒤에 auth=ID_TOKEN 을 붙여줘야 인증 후 작성 가능

- log In 상태일 때만 admin page를 보여주고 싶으면, middleware를 이용하면 됨
- expire time 을 세팅하는 방법(in store)
- refresh돼도 auth를 유지하는 방법(Local Storage) - but, refresh하면 깨짐
- Browser feature와 Server를 잘 구분해야 한다(ex. Local Storage)
- process.client를 이용하면 된다(client단이라는 것을 의미 - 이제 알아서 인식할 수도? 에러가 안남)

- server가 local storage를 이용할 수 없다는 이슈 발생 - Cookie로 해결 가능
- context.req 를 이용해 client와 server를 분리하여 auth 처리(in store)
- Logout은 token과 expirationDate을 지워주면 된다(Cookie & LocalStorage)
