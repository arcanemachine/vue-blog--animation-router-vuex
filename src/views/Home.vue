<template>
  <div class="post-container" :class="styles.postContainerStyle" ref="postContainer">
    <div class="post-title">Blog Posts</div>
    <div v-for="post in blogPosts" :key="post.id" class="post-item">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  props: {
  }
}
</script>
