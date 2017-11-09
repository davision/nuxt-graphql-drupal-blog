<template>
  <nuxt-link :to="post.url.path" @click.native="isLoading = !isLoading" :class="[buttonClass, {'is-loading' : isLoading }]">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    buttonClass: { type: String, default: 'button is-primary' },
    post: { type: Object, default: [] }
  },
  data () {
    return {
      isLoading: false
    }
  }
}
</script>

<style scoped>
.button {
  margin-top: 4vh;
}
</style>
