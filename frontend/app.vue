<template>
  <div id="app" class="min-h-screen bg-quaternary text-primary">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
