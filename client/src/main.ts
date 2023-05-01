import { createApp, h, provide } from 'vue'
import './style.css'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径
  uri: '/graphql',
  // uri: 'http://localhost:3000/graphql', 通过vite进行反向代理
})

// 缓存实现
const cache = new InMemoryCache()

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

createApp({
  setup() {
    // 注入
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
}).mount('#app')
