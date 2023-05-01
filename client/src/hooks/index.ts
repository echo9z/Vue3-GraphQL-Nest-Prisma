import { useMutation, useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { Ref } from 'vue'

export const useBooks = () => {
  const { result, loading, refetch } = useQuery(gql`
    query getBooks {
      books {
        id
        name
        type
        author {
          name
        }
      }
    }
  `)
  return { result, loading, refetch }
}
/**
 * 
 * @param variables 传入的是一个ref对象
 * @returns 
 */
export const useGetBook = (variables: Ref<any>) => {
  // const variables = ref({
  //   id: 'abc-abc-abc',
  // })
  const { result } = useQuery(gql`
    query getUserById($bookId: ID!) {
      book(id: $bookId) {
        id
        name
        type
        author {
          email
          gender
          id
          name
        }
      }
    }
    `,
    variables // 查询查询参数
  )
  const selectBook = (bookId: string) => {
    variables.value = {
      bookId,
    }
  }
  return { result, selectBook }
}

export const useAuthors = () => {
  const { result, loading, refetch } = useQuery(gql`
    query getAuthors {
      authors {
        email
        gender
        id
        name
        books {
          id
          name
          type
        }
      }
    }
  `)
  return { result, loading, refetch }
}
// 创建author
export const useAddAuthor = () => {
  // mutate用来做请求，onDone当请求结束后执行的回调函数
  const { mutate: createAuthor, onDone } = useMutation(gql`
    mutation createAuthor($createAuthorInput: CreateAuthorInput!) {
      createAuthor(createAuthorInput: $createAuthorInput) {
        id
        name
        gender
        email
      }
    }
  `)
  return { createAuthor, onDone }
}

// 创建book
export const useAddBook = () => {
  // mutate用来做请求，onDone当请求结束后执行的回调函数
  const { mutate: createBook, onDone } = useMutation(gql`
    mutation createBook($createBookInput: CreateBookInput!) {
      createBook(createBookInput: $createBookInput) {
        id
        name
        type
        author {
          email
          id
          gender
          name
        }
      }
    }
  `)
  return { createBook, onDone }
}