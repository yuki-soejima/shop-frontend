import useLocalStorage from '@/lib/hooks/api/useLocalStorage'
import { useRegister } from '@/lib/hooks/api/useRegister'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

type Token = { access_token: string; token_type: string }
type RegisterInput = { name: string; email: string; password: string }

export default function Register() {
  const { setAccessToken } = useLocalStorage()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const { mutate } = useRegister({
    onSuccess: (res: Token) => {
      setAccessToken(res.access_token)
      router.push({
        pathname: '/home',
      })
    },
    onError: (error: AxiosError, v, c) => {
      type Data = { errors?: any; message?: any }
      const response = error?.response?.data as Data
      if (error.response?.status === 422) alert(response.message)
      console.log(error)
      console.log(v)
      console.log(c)
    },
  })

  return (
    <div>
      名前 :
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />{' '}
      <br />
      email :
      <input
        type='text'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      パスワード :
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button
        onClick={() => mutate({ name: name, email: email, password: password })}
      >
        登録する
      </button>
    </div>
  )
}
