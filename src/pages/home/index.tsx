import { ProductItem } from '@/compornents/molecules/ProductItem'
import { ProductItems } from '@/compornents/organism/ProductItems'
import { useGetMe } from '@/lib/hooks/api/useGetMe'
import { useGetProductList } from '@/lib/hooks/api/useGetProduct'
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

  const accessToken = getAccessToken() ?? ''
  // if (!accessToken) return

  const { data: meData, refetch } = useGetMe(accessToken)
  const { data: productDataList } = useGetProductList(accessToken)

  console.log(productDataList)
  const router = useRouter()

  useLayoutEffect(() => {
    removeItem('me')
    refetch()
    setUser(meData)
  }, [])

  return (
    <div>
      <p>ようこそ！{meData?.name} さん</p>
      <br />
      {productDataList && <ProductItems productList={productDataList} />}
    </div>
  )
}
