<template>
  <Post :post="route.nodeContext" />
</template>

<script>
import Post from '~/components/Post'
import postByAlias from '~/apollo/queries/postByAlias'
export default {
  transition: 'page',
  layout: 'post',
  components: { Post },
  data () {
    return {
      route: {}
    }
  },
  apollo: {
    route: {
      query: postByAlias,
      prefetch: ({ route }) => ({ path: '/' + route.params.slug }),
      variables () {
        return { path: '/' + this.$route.params.slug }
      }
    }
  }
}
</script>
