<template>
  <div class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
    <h2 class="text-xl font-semibold mb-4 text-center dark:text-white">Counter</h2>
    <div class="flex flex-col items-center justify-center">
      <!-- Display the count from the store directly -->
      <span class="text-5xl mb-8">{{ counterStore.count }}</span>

      <div class="flex items-center justify-between gap-4 w-full">
        <button
          class="bg-red-500 hover:bg-red-600 text-white rounded-md w-full h-10 flex items-center justify-center mr-2 transition-colors"
          @click="handleDecrement"
        >
          <span class="dark:text-gray-100">Decrement -</span>
        </button>
        <button
          class="bg-green-500 hover:bg-green-600 text-white rounded-md w-full h-10 flex items-center justify-center ml-2 transition-colors"
          @click="handleIncrement"
        >
          <span class="dark:text-gray-100">Increment +</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

// Import the counter store
const counterStore = useCounterStore()

// Define the methods to handle increment and decrement
const handleIncrement = () => {
  counterStore.increment()
}

const handleDecrement = () => {
  if (counterStore.count > 0) {
    counterStore.decrement()
  }
}
</script>

<style scoped>
/* Add your scoped styles here */
</style>
