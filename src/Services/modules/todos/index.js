import { api } from '@/Services/api'

export const todoApi = api.injectEndpoints({
  endpoints: () => ({
    getTodo: build =>
      build.query({
        query: () => '/todo',
      }),
  }),
  overrideExisting: false,
})

export const { useLazyGetTodoQuery } = todoApi
