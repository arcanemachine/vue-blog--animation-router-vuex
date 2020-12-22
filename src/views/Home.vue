<template>

  <div class="post-container" :class="$store.getters.styles.postContainerStyle" ref="postContainer">

    <transition name="fade">
      <div class="post-title">{{ $store.getters.postTitle }}</div>
    </transition>

    <div v-for="post in this.$store.getters.blogPosts" :key="post.id" class="post-item">
      <router-link @click="fadeOutOtherItems" :to="'/posts/' + post.id + '/'" class="unstyled-link">{{ post.title }}</router-link>
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
  },
  methods: {
    fadeOutOtherItems: function () {
      return false;
    }
  }
}
</script>
