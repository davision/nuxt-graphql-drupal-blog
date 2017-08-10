<template>
  <section class="container">
    <h1 class="title is-1">Blog</h1>
  
    <div v-if="nodeQuery">
      <div class="post" v-for="post in nodeQuery.entities">
        <h3 class="title is-3">{{ post.entityLabel }}</h3>
        <div class="body" v-html="post.body"></div>
        <hr />
      </div>
    </div>
    <div v-else> Loading ... </div>
  
  </section>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts'
export default {
  apollo: {
    nodeQuery: {
      query: allPosts
    }
  }
}
</script>