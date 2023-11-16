import axios from '@/lib/axiosInstance'
import { useMutation } from 'react-query'

type LoginInput = { email: string; password: string }
type QueryOptionsType = {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}
export const useLogin = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: LoginInput) => {
      const response = await axios.post<any>('api/login', postData)
      return response.data
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    }
  )
}
