import { useGetMe } from '@/lib/hooks/api/useGetMe'
import useLocalStorage from '@/lib/hooks/api/useLocalStorage'
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

  return (
    <div>
      <p>ようこそ！{data?.name}</p>
    </div>
  )
}
