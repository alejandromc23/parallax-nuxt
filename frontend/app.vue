<template>
  <div id="app" class="bg-yellow min-h-screen text-yellow">
    <Navbar />
    <NuxtPage />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
/* Styles */
</style>
