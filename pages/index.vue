<template>
  <div class="container">
  
    <section class="section">
      <Posts v-if="nodeQuery" :posts="nodeQuery.entities" />
      <div v-else>Loading ... </div>
    </section>
  
  </div>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts'
import Posts from '~/components/Posts'
export default {
  components: { Posts },
  apollo: {
    nodeQuery: {
      query: allPosts
      //  Server side rendering will work once https://github.com/nuxt-community/apollo-module/pull/10 is merged
      //  prefetch: true, 
    }
  }
}
</script>
