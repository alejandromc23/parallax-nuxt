<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-8">
    <div class="text-center text-3xl font-bold mb-8">
      Pricing
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
      <div v-for="(tier, index) in tiers" :key="index" class="flex flex-col items-center p-8 bg-white text-primary rounded-lg shadow-md">
        <div class="text-2xl font-bold mb-4">
          {{ tier.name }}
        </div>
        <div class="text-xl mb-4">
          {{ tier.price }} Tokens
        </div>
        <div>
          {{ tier.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiers: [
        { name: 'Free Tier', price: 0, description: 'Basic functionalities, limited image generation.' },
        { name: 'Middle Tier', price: 50, description: 'Extended functionalities, more image generations.' },
        { name: 'Top Tier', price: 100, description: 'All functionalities, unlimited image generations.' },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background-color: #22A699;
}
</style>
