import { useState, useEffect } from 'react'
import axios from '@/lib/axiosInstance'
import fetchBookList from './api'
import { useQuery } from 'react-query'
type Book = { title: string; author: string }
type Me = {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}

export const useGetMe = (bearer: string) =>
  useQuery<Me>('/api/me', async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'api/me', {
      headers: { Authorization: `Bearer ${bearer}` },
    })
    return res.data
  })
