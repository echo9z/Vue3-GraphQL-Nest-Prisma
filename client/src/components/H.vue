<!--
* @description h
* @fileName H.vue
* @author echo9z
* @date 2023/04/29 02:15:50
!-->
<template>
  <H text="文本">
    <p>123</p>
    123
  </H>
</template>

<script lang="ts" setup>
import { h } from 'vue';
type Props = {
    text: string
}
const H = (props: Props, ctx: any) => {
  console.log(ctx);
  console.log(ctx.slots.default()); // 返回作用域插槽数组
  return h('div', null, `组件内容HHHHH组件 ${props.text} ${ctx.slots.default()[1].children
}`)
}

</script>
<style lang="scss" scoped>
</style>
