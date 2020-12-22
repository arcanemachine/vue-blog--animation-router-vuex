import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let showIntro = false;

export default new Vuex.Store({
  state: {
    showPosts: true,
    deleteme: () => {debugger;}, // eslint-disable-line no-debugger
    styles: {
      titleTextStyle: [
        {'intro-title-text': showIntro}
      ],
      postContainerStyle: [
        {
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
    showIntro (state) {
      return state.showIntro;
    },
    showPosts (state) {
      return state.showPosts;
    },
    styles (state) {
      return state.styles;
    },
    blogPosts (state) {
      return state.blogPosts;
    },
  }
})
