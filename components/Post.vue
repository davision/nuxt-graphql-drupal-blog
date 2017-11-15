<!-- Display a full post object -->
<template>
  <div>
    <div class="container is-fluid">
      <section class="hero hero-title is-bold">
        <div class="hero-body" :style="titleStyle">
          <h1 class="title is-1" v-html="post.title"></h1>
        </div>
      </section>
    </div>

    <div class="container is-narrow">
      <section class="post section column is-offset-2 is-8">
        <div v-html="post.body.processed" class="content"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: {} }
  },
  computed: {
    titleStyle: function () {
      let style = {}
      if (this.post.image) {
        style = { 'background-image': 'url(' + this.post.image.derivative.url + ')' }
      }
      return style
    }
  }
}
</script>

<style scoped>
.hero-title .hero-body {
  padding: 4rem 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hero-title .title {
  color: white;
  background-color: rgba(0, 0, 0, .5);
  padding: 1rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
  text-align: center;
}
</style>
