// Add this to a file named "vite-env.d.ts" in your project
interface ImportMeta {
  readonly env: {
    // Developer Options
    readonly NODE_ENV: string
    readonly VITE_VUE_APP_ENABLE_LOGS: string
    readonly VITE_VUE_APP_ENABLE_DEBUG: string
    readonly VITE_VUE_APP_ENABLE_SCRIPTS: string

    // Backend URL
    readonly VITE_VUE_APP_BACKEND_HOST: string

    // AWS Configurations
    readonly AWS_ACCESS_KEY_ID: string
    readonly AWS_SECRET_ACCESS_KEY: string
    readonly AWS_DEFAULT_REGION: string
    readonly AWS_S3_BUCKET_NAME: string
    // Add other environment variables here if needed
  }
}
