// src/shims-vue.d.ts

// The shims-vue.d.ts file will tell TypeScript how to handle .vue files, which should eliminate the implicit 'any' type error.

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
