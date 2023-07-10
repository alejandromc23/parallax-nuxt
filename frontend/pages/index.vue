<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-primary">
    <div class="text-center text-3xl text-white font-bold mb-8">
      Welcome to Pixel TaIe
    </div>
    <div class="text-xl text-white mb-8">
      Generate stories from your images. Upload your image and start creating!
    </div>
    <form @submit.prevent="submitForm" class="w-full max-w-lg p-8 bg-red rounded-lg shadow-md">
      <div class="flex flex-col mb-4">
        <label for="token" class="mb-2">Enter your token:</label>
        <input type="text" id="token" v-model="token" class="border-2 border-secondary px-3 py-2 rounded">
      </div>
      <div class="flex flex-col mb-4">
        <label for="image" class="mb-2">Upload your image:</label>
        <input type="file" id="image" @change="updateImage" accept="image/*" class="border-2 border-secondary px-3 py-2 rounded">
      </div>
      <button type="submit" class="w-full bg-secondary text-white py-2 rounded hover:bg-accent transition-colors">
        Generate Story
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      image: null,
    };
  },
  methods: {
    updateImage(event) {
      this.image = event.target.files[0];
    },
    submitForm() {
      console.log(this.token);
      console.log(this.image);
    },
  },
};
</script>
