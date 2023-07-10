<template>
  <div class="container mx-auto px-4">
  <header class="text-center my-4">
    <div class="flex items-center justify-center mb-4 md:mb-0">
      <img src="/images/pixeled-lightbulb.png" class="h-16 mr-3" alt="Logo" />
      <h1 class="text-5xl font-bold text-primary">Pixel TaIe</h1>
    </div>
    <p class="text-xl">Crafting Narratives From Pixels</p>
  </header>
  <StoryCreator />
  <StoryTeller />
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

<style scoped>
.container {
  max-width: 800px;
}
</style>

