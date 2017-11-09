<template>
  <div>
    <AppHeader class="section has-text-centered" />
    <Intro />
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppNavigation from '~/components/AppNavigation'
import Intro from '~/components/Intro'
export default {
  components: { AppHeader, AppNavigation, Intro }
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
