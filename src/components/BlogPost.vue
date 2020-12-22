<template>
  <div>
    <h1>{{ post.title }}</h1>

    <div style="text-align: center">{{ post.body }}</div>
  </div>
</template>

<script>
 
export default {
  name: 'BlogPost',
  props: ['postId'],
  data: function () {
    return {
      post: this.$store.getters.blogPosts[this.postId]
    }
  }
}
</script>
