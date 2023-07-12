<template>
  <Parallax />
</template>

<script>
import ParallaxManager from '~/utils/parallaxManager'

export default {
  mounted() {
    new ParallaxManager('.parallax-layer');
  }
}
</script>
