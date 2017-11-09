<!-- Posts paginated list -->
<template>
  <section class="section">
    <PostTeaser :key="post.uid" v-for="post in reversePosts" :post="post" />
  </section>
</template>

<script>
import PostTeaser from '~/components/PostTeaser'
export default {
  components: { PostTeaser },
  props: {
    posts: { type: Array, default: [] }
  },
  computed: {
    reversePosts () {
      return this.posts.slice().reverse()
    }
  }
}
</script>
