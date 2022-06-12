import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'xiaohao-cli',
          content: '我是一些内容'
        }
      }
    })
  ],
  server: {
    port: 9001
  }
})