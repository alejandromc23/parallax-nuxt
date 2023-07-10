<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold text-gray-900">Pixel-Tale</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <form @submit.prevent="onSubmit">
                <div class="flex flex-col mb-4">
                  <label for="image" class="mb-2">Upload your image:</label>
                  <input type="file" id="image" accept="image/*" @change="handleFileUpload">
                </div>
                <div class="flex flex-col mb-4">
                  <label for="token" class="mb-2">Input your token:</label>
                  <input type="text" id="token" v-model="token" class="p-2 border rounded-md">
                </div>
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      token: '',
    };
  },
  methods: {
    onSubmit() {
      console.log('Image:', this.image);
      console.log('Token:', this.token);
      // You can then process the image and token as needed
    },
    handleFileUpload(event) {
      this.image = event.target.files[0];
    },
  },
};
</script>
