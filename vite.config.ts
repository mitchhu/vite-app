import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/types/auto-import.d.ts'
    }),
    Components({
      resolvers: [VantResolver()],
      dts: 'src/types/components.d.ts'
    }),
  ],
  server: {
    port: 5000,
    proxy: {
      '/apiagg': {
        target: 'https://api-i5.yit.com/apiagg/m.api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiagg/, '')
      },
      '/apigw': {
        target: 'https://api-i5.yit.com/apigw/m.api'
      }
    }
  }
})
