<template>
  <div class="ThemeSwitcher absolute right-4 top-4">
    <button
      @click="toggleDarkMode"
      :class="[
        'ThemeSwitcher w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none',
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-black text-white'
      ]"
    >
      <template v-if="isDarkMode">
        <i class="pi pi-moon" style="color: whitesmoke"></i>
      </template>
      <template v-else>
        <i class="pi pi-sun" style="color: whitesmoke"></i>
      </template>
    </button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useAppPreferencesStore } from '../../stores/appPreferences.ts'

export default {
  setup() {
    const store = useAppPreferencesStore()
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
      const newMode = !isDarkMode.value
      isDarkMode.value = newMode
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      document.getElementById('root').classList.toggle('dark', newMode)
      store.dispatch('toggleTheme', newMode ? 'dark' : 'light')
    }

    // Watch for changes in local storage or system preferences
    watchEffect(() => {
      const storedTheme = localStorage.getItem('theme')
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = storedTheme ? storedTheme === 'dark' : prefersDarkMode
      isDarkMode.value = initialTheme
      document.getElementById('root').classList.toggle('dark', initialTheme)
    })

    return {
      isDarkMode,
      toggleDarkMode
    }
  }
}
</script>

<style scoped>
/* Add your scoped styles here */
</style>
