<template>
  <div>
    <Navigation />
    <Logo />
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
export default {
  components: { Navigation }
}
</script>

<style>
/* PAGE TRANSITIONS */

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
