<!-- Posts paginated list -->
<template>
  <section class="section">
    <PostTeaser :key="post.uid" v-for="post in posts" :post="post" />
  </section>
</template>

<script>
import PostTeaser from '~/components/PostTeaser'
export default {
  components: { PostTeaser },
  props: {
    posts: { type: Array, default: [] }
  }
}
</script>
