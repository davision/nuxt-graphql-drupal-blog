<template>
  <div>
    <AppHeader class="section has-text-centered" />
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppNavigation from '~/components/AppNavigation'
export default {
  components: { AppHeader, AppNavigation }
}
</script>

<style>
/* PAGE TRANSITIONS */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
