<template>
  <div class="page-container">

    <div @click="toggleLargeText" class="title-text" ref="titleText">
      Hello World!
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
      clicked: false
    }
  },
  methods: {
    showIntroAnimation: function () {
      if (!localStorage.getItem('intro-seen')) {
        this.$refs.titleText.classList.add('show-intro');
        // localStorage.setItem('intro-seen', true);
        localStorage.removeItem('intro-seen')
      }
    },
    toggleLargeText: function () {
      let titleText = this.$refs.titleText;
      if (!titleText.classList.contains('text-move-up')) {
        titleText.classList.add('text-move-up');
      } else {
        titleText.classList.remove('text-move-up');
      }
    }
  }
}
</script>

<style>

body {
  margin: 0;
  font-family: Helvetica;
}

.page-container {
  display: flex;

  height: 100vh;
  width: 100vw;

  justify-content: center;
  align-items: center;
}

.title-text-centered {
  margin-bottom: 45vh;
}

.title-text {
  font-size: 1rem;
  transition: margin-bottom 1s;
}

.text-move-up-more {
  transform: translate(0, -200px);
}

.text-move {
}


</style>
