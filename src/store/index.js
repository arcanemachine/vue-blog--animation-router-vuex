import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let showIntro = true;

export default new Vuex.Store({
  state: {
    postTitle: 'Blog Posts',
    styles: {
      titleTextStyle: [
        {'intro-title-text': showIntro}
      ],
      postContainerStyle: [
        {
          'post-container-center': true,
          'post-container-margin-transition': true,
          'is-hidden': showIntro,
          'intro-post-container': showIntro
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
  },
  getters: {
    postTitle (state) {
      return state.postTitle;
    },
    styles (state) {
      return state.styles;
    },
    blogPosts (state) {
      return state.blogPosts;
    },
  }
})
