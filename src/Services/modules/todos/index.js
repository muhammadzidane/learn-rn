import { api } from '@/Services/api'

export const todoApi = api.injectEndpoints({
  endpoints: builder => ({
    getTodo: builder.query({
      query: () => '/todo',
    }),
  }),
  overrideExisting: false,
})

export const { useLazyGetTodoQuery } = todoApi
