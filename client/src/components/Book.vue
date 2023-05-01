<!--
* @description Book
* @fileName Book.vue
* @author echo9z
* @date 2023/04/29 11:46:01
!-->
<template>
  <div>
    <a-button type="primary" @click="showModal">添加书籍</a-button>
    <a-button type="primary" @click="selectBook('2')">查询书籍</a-button>
  </div>
  <a-table :dataSource="result?.books" :columns="columns" >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'author'">
        <span>
          {{ record.author.name }}
        </span>
      </template>
    </template>
  </a-table>
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
        label="书名"
        name="name"
        :rules="[{ required: true, message: '请输入书名' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item
        label="类型"
        name="type"
        :rules="[{ required: true, message: '请输入正确类型' }]"
      >
        <a-input v-model:value="formState.type" />
      </a-form-item>

      <a-form-item
        label="作者" 
        name="authorId"
        :rules="[{ required: true, message: '请选择作者' }]"
      >
        <a-select v-model:value="formState.authorId" placeholder="请选择作者">
          <a-select-option v-for="author in authors" :key="author.id" :value="author.id">
            {{ author.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>

import { useAddBook, useBooks, useAuthors, useGetBook } from '@/hooks'
import { FormInstance, message } from 'ant-design-vue';
import { reactive, ref } from 'vue';

const { result: resBook, selectBook } = useGetBook(ref({ bookId: '1' }))
console.log(resBook);
// selectBook('2') 传入的bookId 发送变化时

// 发起graphql query查询请求
const { result, refetch } = useBooks()
const columns = [
  {
    title: '书名',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: '类型',
    dataIndex: 'type',
    filters: [
      { text: 'MAN', value: 'man' },
      { text: 'WOMAN', value: 'woman' },
    ],
    width: '20%',
  },
  {
    title: '作者',
    dataIndex: 'author',
  },
];

// 添加作者
const visible = ref<boolean>(false);
const { result:res } = useAuthors()
const authors = ref()
// 显示对话框
const showModal = () => {
  authors.value = res.value.authors
  visible.value = true
}

interface FormState {
  name: string;
  type: string;
  authorId: string;
}

const formState = reactive<FormState>({
  name: '',
  type: '',
  authorId: '',
});
const { createBook, onDone } = useAddBook()
const formRef = ref<FormInstance>();
// 点击确认触发函数，添加作者
const handleOk = async () => {
  try {
    await formRef.value?.validateFields();
    // 发起graphql mutation请求
    createBook({ createBookInput: formState })
    // // console.log('Success:', values);
    // 执行完毕返回
    onDone((data) => {
      console.log(data);
      message.success('添加作者成功');
      formState.name = ''
      formState.type = ''
      formState.authorId = ''
      visible.value = false;
      // 调用userAuthors 重新发起所有作者graphql请求
      refetch()
    })
  } catch (errorInfo) {
    // 验证失败
    console.log('Failed:', errorInfo);
  }
};

</script>
<style lang="scss" scoped>
</style>
