import axios from '@/lib/axiosInstance'
import { useMutation } from 'react-query'

type RegisterInput = { name: string; email: string; password: string }
type QueryOptionsType = {
  onSuccess?: (data: any) => void
  onError?: (error: any, variables?: any, context?: any) => void
}
export const useRegister = (queryOptions?: QueryOptionsType) => {
  return useMutation(
    async (postData: RegisterInput) => {
      const response = await axios.post<any>('api/register', postData)
      return response.data
    },
    {
      onSuccess: queryOptions?.onSuccess,
      onError: queryOptions?.onError,
    }
  )
}
