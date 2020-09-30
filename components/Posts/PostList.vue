<template>
  <section class="post-list">
    <PostPreview
      :is-admin="isAdmin"
      id="1"
      thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1"
      title="Hello there!"
      previewText="This my first post!"
    />
    <PostPreview
      :is-admin="isAdmin"
      id="2"
      thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1"
      title="hi there!"
      previewText="This my second post!"
    />
    <PostPreview
      :is-admin="isAdmin"
      id="3"
      thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1"
      title="bye there!"
      previewText="This my third post!"
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
