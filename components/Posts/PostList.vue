<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :is-admin="isAdmin"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :previewText="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
