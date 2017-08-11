<!-- view a single post as teaser -->
<template>
  <div class="post">
    <div class="columns">
      <div class="column is-2">
        <img v-if="post.fieldImage" :src="post.fieldImage.derivative.url" />
      </div>
      <div class="column">
        <h3 class="title is-3">{{ post.entityLabel }}</h3>
        <div class="body" v-html="post.body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: {} }
  }
}
</script>