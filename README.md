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
