import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log(context.req);
          console.log(context.req.session);
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: "1",
                title: "First post!",
                previewText: "First preview post!",
                thumbnail:
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1",
              },
              {
                id: "2",
                title: "Second post!",
                previewText: "Second preview post!",
                thumbnail:
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1",
              },
            ])
            resolve();
          }, 1000);
        })
          .then((data) => {
            context.store.commit("setPosts", data.loadedPosts);
          })
          .catch((e) => {
            context.error(e);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  })
}

export default createStore;
