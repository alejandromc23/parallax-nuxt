<template>
  <nav class="bg-primary">
    <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div class="flex items-center ">
          <img src="/images/pixeled-lightbulb.png" class="h-8 mr-3" alt="Logo" />
          <a class="text-2xl font-bold text-quaternary hover:text-tertiary md:text-2xl" href="/">Pixel Tale</a>
        </div>
        <div>
          <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-quaternary hover:text-tertiary rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-quinary" @click="isMenuOpen = !isMenuOpen">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="md:flex hidden md:block" v-show="isMenuOpen || isDesktop">
        <a class="px-5 py-2 mt-2 text-sm font-semibold text-primary rounded bg-tertiary hover:bg-quaternary md:mx-2 md:mt-0" href="/">Home</a>
        <a class="px-5 py-2 mt-2 text-sm font-semibold text-primary rounded bg-tertiary hover:bg-quaternary md:mx-2 md:mt-0" href="/pricing">Pricing</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const isMenuOpen = ref(false)
    const isDesktop = computed(() => window.innerWidth > 768)

    return {
      isMenuOpen,
      isDesktop
    }
  }
}
</script>

