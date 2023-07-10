<template>
    <form @submit.prevent="submitForm" class="bg-tertiary p-6 rounded-lg">
      <div class="flex flex-col mb-4">
        <label for="image" class="mb-2">Upload your image:</label>
        <input type="file" id="image" @change="onFileChange" accept="image/*">
      </div>
      <div class="flex flex-col mb-4">
        <label for="token" class="mb-2">Enter your token:</label>
        <input type="text" id="token" v-model="token" class="px-3 py-2 border border-primary rounded-md">
      </div>
      <button type="submit" class="px-4 py-2 bg-primary text-quaternary font-semibold rounded-md">Create story</button>
    </form>
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
