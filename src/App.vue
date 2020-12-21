<template>
  <div class="page-container">

    <div class="title-text" :class="styles.titleTextStyle" ref="titleText">
      Vue Blog
    </div>

    <router-view :key="$route.path">
    </router-view>

  </div>
</template>

<script>

// import BlogPost from './components/BlogPost.vue'

export default {
  name: 'App',
  components: {
    // BlogPost
  },
  data: function () {
    return {
      showIntro: false,
      showPosts: true,
      styles: {
        titleTextStyle: [
          {'intro-title-text': this.showIntro}
        ],
        postContainerStyle: [
          {
            'is-hidden': this.showIntro,
            'intro-post-container': this.showIntro
          }
        ],
      },
      blogPosts: [
        {
          id: 0,
          title: "Hello World!",
          body: 'Hello, my name is Nic.'
        },
        {
          id: 1,
          title: "About Me",
          body: 'I like writing blogs.'
        },
        {
          id: 2,
          title: "My Big Plan",
          body: 'We should be friends and make blog posts together.'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.showIntro) {
        this.$refs.titleText.classList.add('intro-title-text');
        this.$refs.postContainer.classList.add('is-hidden', 'intro-post-container');
      }
    })
  },
  methods: {
  }
}
</script>

