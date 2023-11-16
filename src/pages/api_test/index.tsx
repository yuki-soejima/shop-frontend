import React, { useState, useEffect } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import { useGetBookList } from '@/lib/hooks/api/useGetBookList'
import { usePostBook } from '@/lib/hooks/api/usePostBook'
import axios from '@/lib/axiosInstance'
// import { Modal } from "@/compornents/Modal/Modal";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useMutation,
} from 'react-query'

const baseURL = '/api/books'
type Book = { title: string; author: string }

const Main = () => {
  const [newBookTitle, setNewBookTitle] = useState('')
  const [newBookBody, setNewBookBody] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  const { data, isLoading, isError, refetch, error } = useGetBookList()
  console.log(data)

  const { mutate } = usePostBook({
    onSuccess: (data) => {
      refetch()
      console.log('POSTが成功しました。')
      setNewBookTitle('')
      setNewBookBody('')
    },
    onError: (error) => {
      console.error('Error creating data:', error)
      console.error('Error posting data:', error)
      console.log('POSTが失敗しました。')
    },
  })

  return (
    <div>
      {data?.map((elem, index) => {
        return (
          <div key={index}>
            <div>タイトル：{elem.title}</div>
            <div>著者：{elem.author}</div>
          </div>
        )
      })}

      <div>
        <div>新規に本を追加する</div>
        <input
          type='text'
          value={newBookTitle}
          onChange={(event) => setNewBookTitle(event.target.value)}
        />
        <br />
        <input
          type='text'
          value={newBookBody}
          onChange={(event) => setNewBookBody(event.target.value)}
        />

        <button
          disabled={!(newBookTitle && newBookBody)}
          onClick={() => {
            const requestBody: Book = {
              title: newBookTitle,
              author: newBookBody,
            }

            mutate(requestBody)
          }}
        >
          投稿
        </button>
      </div>

      {/* <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <Modal isOpen={isOpen}>
        <div>
          <button onClick={() => setIsOpen(false)}>モーダルを閉じる</button>
        </div>
      </Modal> */}
    </div>
  )
}

export default Main
