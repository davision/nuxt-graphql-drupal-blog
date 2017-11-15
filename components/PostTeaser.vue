<!-- view a single post as teaser -->
<template>
  <div class="post">
    <div class="columns">
      <div class="column is-2 is-offset-2">
        <img v-if="post.fieldImage" :src="post.fieldImage.derivative.url" />
      </div>
      <div class="column is-6">
        <h3>{{ post.title }}</h3>
        <div class="date">{{ post.created | formatDate }}</div>
        <div class="body" v-html="post.body.summary"></div>
        <ButtonLink :to="{ name: 'blog-slug', params: { slug: post.url.path.replace('/', '') } }"> Read more</ButtonLink>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from '~/components/ButtonLink'
export default {
  components: { ButtonLink },
  props: {
    post: { type: Object, default: {} }
  }
}
</script>

<style media="screen">
  h3 {
    font-weight: 600;
    font-size: 2rem;
    margin: 0 0 .5rem;
    line-height: 1.2;
  }

  .date {
    margin-bottom: 1rem;
    color: gray;
  }

  p {
    margin-bottom: 1rem;
  }
</style>
