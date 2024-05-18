import axios from 'axios'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import { initializeBackendHost, axiosHeaders } from '../../utils/functions/config'

// Define your Pinia store
export const useAppPreferencesStore = defineStore({
  id: 'appPreferencesStore',

  // Define the initial state
  state: () => ({
    theme: 'light'
  }),

  // Define your actions (thunks)
  actions: {
    async updateSetting(data: any) {
      try {
        // Ensure backendHost is initialized before making the API call
        const backendHost = await initializeBackendHost()
        const headers = await axiosHeaders()

        const body = {}

        // Make the POST request using axios or any other library
        const response = await axios.post(`${backendHost}/api/endpoint`, body, {
          headers
        })

        if (response) {
          this.toggleTheme('dark')
        }

        toast.success('Successfull!')
        // Return the response data
        return response?.data
      } catch (error: any) {
        // Handle any errors
        toast.error(error?.response?.data)
        throw error
      }
    },

    // Define the action to toggle theme
    toggleTheme(theme: string) {
      this.theme = theme
    },

    // Define the action to reset app preferences
    resetAppPreferences() {
      // Reset state to initial state
      this.theme = 'light'
    }
  }
})
