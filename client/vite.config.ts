import { UserConfigExport, ConfigEnv, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import path from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // 本地反向代理解决浏览器跨域限制
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      open: true, // 运行自动打开浏览器
      proxy: {
        // 匹配到 /api，进行反向代理
        [env.VITE_APP_BASE_API]: {
          // 线上API地址
          // target: 'http://vapi.youlai.tech',
          // 本地API地址
          target: 'http://localhost:3000/graphql',
          changeOrigin: true,
          // secure: true, // 是否https接口
          // ws: true, // 是否代理websockets
          // rewrite target目标地址 + '/abc'，如果接口是这样的，那么不用重写
          // rewrite: (path) => path.replace(/^\/snow/, '') // 路径重写，本项目不需要重写
          // 将请求地址前缀 /graphql 替换为 空的，比如请求/api/db.json，替换为/db.json
          rewrite: path =>
            path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    },
    resolve: {
      // Vite路径别名配置
      alias: {
        '@': path.resolve('./src')
      },
      extensions:['.js','.ts','.jsx','.tsx','.vue', '.scss']
    }
  }
}
