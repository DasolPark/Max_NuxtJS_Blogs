<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
  components:{
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'David',
        title: 'Awesome post',
        content: 'Super amazing!',
        thumbnailLink: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmsolutions.biz%2Fwp-content%2Fgallery%2Fhi-tech%2FHi%2520-%2520Tech%25203.jpg&f=1&nofb=1'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
