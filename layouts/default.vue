<template>
  <div>
   
    <Navigation />
    <Header />
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
