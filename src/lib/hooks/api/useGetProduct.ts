import axios from '@/lib/axiosInstance'
import { useQuery } from 'react-query'
// type Me = {
//   id: number
//   name: string
//   email: string
//   email_verified_at: string
//   created_at: string
//   updated_at: string
// }

type Product = {
  id: number
  name: string
  price: number
  thumbnail: string
  created_at: string
  updated_at: string
}

export const useGetProductList = (bearer: string) =>
  useQuery<Product[]>('api/products', async () => {
    const res = await axios.get('api/products', {
      headers: { Authorization: `Bearer ${bearer}` },
    })
    return res.data
  })
