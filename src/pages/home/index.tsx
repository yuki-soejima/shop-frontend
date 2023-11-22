import { ProductItem } from '@/compornents/molecules/ProductItem'
import { ProductItems } from '@/compornents/organism/ProductItems'
import { useGetMe } from '@/lib/hooks/api/useGetMe'
import useLocalStorage from '@/lib/hooks/api/useLocalStorage'
import { Product } from '@/types/Product'
import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect, useState } from 'react'
type Me = {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}

export default function Home() {
  const { getAccessToken, setUser, removeItem } = useLocalStorage()
  const { data, refetch } = useGetMe(getAccessToken() ?? '')
  const router = useRouter()

  useLayoutEffect(() => {
    removeItem('me')
    refetch()
    setUser(data)
  }, [])

  const product: Product = {
    id: 1,
    price: 100,
    name: '輪ゴム',
    // thumbnail:
    //'http://localhost:8000/storage/product/MXpVd2fLHIqJYfqZIaPq3ustKFE646ZU0zM7ShtQ.jpg',
  }
  return (
    <div>
      <p>ようこそ！{data?.name}</p>
      <ProductItems productList={[product]} />
    </div>
  )
}
