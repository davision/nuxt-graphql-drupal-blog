<template>
  <div class="posts">
    <div class="post" v-for="post in posts">
      <div class="columns">
        <div class="column is-2">
          <img vi-if="post.fieldImage" :src="post.fieldImage.derivative.url" />
        </div>
        <div class="column">
          <h3 class="title is-3">{{ post.entityLabel }}</h3>
          <div class="body" v-html="post.body"></div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: { type: Array, default: [] }
  }
}
</script>
