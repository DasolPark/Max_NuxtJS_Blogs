<template>
  <div class="posts-page">
    <PostList :posts="loadPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadPosts: [
            {
              id: '1',
              title: 'First post!',
              previewText: 'First preview post!',
              thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1"
            },
            {
              id: '2',
              title: 'Second post!',
              previewText: 'Second preview post!',
              thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1"
            }
          ]
        })
      }, 1000);
    })
    then(data => {
      return data;
    })
    .catch(e => {
      context.error(new Error())
    })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
    console.log(this.$store.getters.loadedPosts); // why do i get 'undefined'?
    console.log(this.loadPosts);
  }
}
</script>

<style scoped>
.posts-page{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
