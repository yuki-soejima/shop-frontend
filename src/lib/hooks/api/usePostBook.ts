import axios from '@/lib/axiosInstance'
import { useMutation } from 'react-query'

type Book = { title: string; author: string }
type QueryOptionsType = {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}
export const usePostBook = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: Book) => {
      const response = await axios.post<Book>('api/books', postData)
      return response.data
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    }
  )
}
