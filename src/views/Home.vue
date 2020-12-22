<template>
  <div class="post-container"> <!-- :class="styles.postContainerStyle" ref="postContainer" -->
    <div class="post-title">Blog Posts</div>
    <div v-for="post in this.$store.getters.blogPosts" :key="post.id" class="post-item">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  data: function () {
    return {blogPosts: [{id: 0, title: 'deleteme', body: 'deleteme'}]}
  }
}
</script>
