
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { globName } from './package.json';
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      // 暴露的全局变量名称
      name: globName,
      // 输入包的名称，默认是package.json 的 name 选项
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-demi'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-demi': 'vue-demi'
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  plugins: [createVuePlugin()]
});