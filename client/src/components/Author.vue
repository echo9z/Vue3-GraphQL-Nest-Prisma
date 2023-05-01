<!--
* @description 请求
* @fileName Graphql.vue
* @author echo9z
* @date 2023/04/29 11:46:01
!-->
<template>
  <a-button type="primary" @click="showModal">添加作者</a-button>
  <div v-if="loading">Loading...</div>
  <a-table v-else-if="result && result.authors" :dataSource="result?.authors" :columns="columns" />

  <!-- 对话框 -->
  <a-modal v-model:visible="visible" title="添加作者" @ok="handleOk">
    <a-form
      :model="formState"
      name="basic"
      ref="formRef"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="作者"
        name="name"
        :rules="[{ required: true, message: '请输入作者名' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item
        label="邮箱"
        name="email"
        :rules="[{ type: 'email', required: true, message: '请输入正确邮箱' }]"
      >
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item label="性别" name="gender">
        <a-radio-group v-model:value="formState.gender">
          <a-radio value="MAN">男</a-radio>
          <a-radio value="WOMAN">女</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'ant-design-vue';
import { message } from 'ant-design-vue';
import { useAuthors, useAddAuthor } from '@/hooks'
const { result, loading, refetch } = useAuthors()
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'MAN', value: 'man' },
      { text: 'WOMAN', value: 'woman' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
console.log(result);

// 添加作者
const visible = ref<boolean>(false);
const showModal = () => visible.value = true

interface FormState {
  name: string;
  email: string;
  gender: Gender | string;
}
enum Gender {
  MAN,
  WOMAN
}
const formState = reactive<FormState>({
  name: '',
  email: '',
  gender: Gender[0],
});
const { createAuthor, onDone } = useAddAuthor()
const formRef = ref<FormInstance>();
// 点击确认触发函数，添加作者
const handleOk = async () => {
  try {
    await formRef.value?.validateFields();
    // 发起graphql mutation请求
    createAuthor({ createAuthorInput: formState })
    // console.log('Success:', values);
    // 执行完毕返回
    onDone((data) => {
      console.log(data);
      message.success('添加作者成功');
      formState.name = ''
      formState.email = ''
      formState.gender = Gender[0]
      visible.value = false;
      // 调用userAuthors 重新发起所有作者graphql请求
      refetch()
    })
  } catch (errorInfo) {
    // 验证失败
    console.log('Failed:', errorInfo);
  }
};
console.log(formState);

</script>
<style lang="scss" scoped>
</style>
