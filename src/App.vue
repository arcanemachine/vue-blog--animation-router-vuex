<template>
  <div class="page-container">

    <div class="title-text" :class="$store.getters.styles.titleTextStyle" ref="titleText">
      Vue Blog
    </div>

    <router-view :key="$route.path">
    </router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$store.getters.showIntro) {
        this.$refs.titleText.classList.add('intro-title-text');
        this.$refs.postContainer.classList.add('is-hidden', 'intro-post-container');
      }
    })
  },
  methods: {
  }
}
</script>

