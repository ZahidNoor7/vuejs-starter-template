<script setup lang="ts">
import CounterCard from '/src/components/Cards/CounterCard.vue'
</script>

<template>
  <div class="about flex flex-col gap-4 justify-center">
    <p class="text-2xl">This is Pinia Counter Example!</p>
    <CounterCard />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
