<template>
  <div class="container mx-auto px-4">
    <div class="parallax-container">
    <div class="parallax-layer layer-0" data-parallax-speed="0.05" data-max-scroll="565"></div>
    <div class="parallax-layer layer-1" data-parallax-speed="0.1" data-max-scroll="565"></div>
    <div class="parallax-layer layer-2" data-parallax-speed="0.3" data-max-scroll="565"></div>
    <div class="parallax-layer layer-3" data-parallax-speed="0.5" data-max-scroll="565"></div>
    <div class="parallax-layer layer-4" data-parallax-speed="0.7" data-max-scroll="565"></div>
    <div class="parallax-layer layer-5" data-parallax-speed="0.9" data-max-scroll="565"></div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      token: '',
    }
  },
  methods: {
    onFileChange(e) {
      this.image = e.target.files[0];
    },
    submitForm() {
      // Handle form submission
    }
  }
}
</script>
