// import { defineStore } from 'pinia'

// // Define the structure of the store state
// interface CounterState {
//   count: number
// }

// // Define the structure of the store actions
// interface CounterActions {
//   increment(): void
//   decrement(): void
// }

// // Define the Pinia store with proper types
// export const useCounterStore = defineStore<string, CounterState, {}, CounterActions>({
//   id: 'counterStore',

//   // Define the initial state
//   state: (): CounterState => ({
//     count: 0 // Define the count state
//   }),

//   getters: {},

//   // Define your actions (thunks)
//   actions: {
//     // Define the action to increment count
//     increment() {
//       this.count++ // Increment count
//     },

//     // Define the action to decrement count
//     decrement() {
//       this.count-- // Decrement count
//     }
//   },

//   // Enable persistence
//   persist: {
//     enabled: true,
//     strategies: [
//       {
//         key: 'counterStore',
//         storage: localStorage
//       }
//     ]
//   }
// })

import { defineStore } from 'pinia'

// Define the structure of the store state
interface CounterState {
  count: number
}

// Define the structure of the store actions
interface CounterActions {
  increment(): void
  decrement(): void
}

// Define the Pinia store with proper types
export const useCounterStore = defineStore({
  id: 'counterStore',

  // Define the initial state
  state: (): CounterState => ({
    count: 0 // Define the count state
  }),

  getters: {},

  // Define your actions (thunks)
  actions: {
    // Define the action to increment count
    increment() {
      this.$state.count++ // Increment count
    },

    // Define the action to decrement count
    decrement() {
      this.$state.count-- // Decrement count
    }
  },

  // Enable persistence
  persist: true
})
