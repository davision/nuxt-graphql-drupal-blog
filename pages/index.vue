<template>
  <div class="container">
  
    <section class="section">
      <h1 class="title is-1">Example client implementation of a
        <a href="https://github.com/nyl-auster/drupal8-graphql-demo-blog-docs">D8 graphql blog API</a>
      </h1>
    </section>
  
    <section class="section">
      <div v-if="nodeQuery">
        <div class="post" v-for="post in nodeQuery.entities">
          <div class="columns">
            <div class="column">
              <img :src="post.fieldImage.derivative.url" />
            </div>
            <div class="column">
              <h3 class="title is-3">{{ post.entityLabel }}</h3>
              <div class="body" v-html="post.body"></div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div v-else> Loading ... </div>
    </section>

  </div>
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