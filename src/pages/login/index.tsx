import useLocalStorage from '@/lib/hooks/api/useLocalStorage'
import { useLogin } from '@/lib/hooks/api/useLogin'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type LoginInput = { email: string; password: string }
type Token = { access_token: string; token_type: string }

const LoginForm = () => {
  const router = useRouter()
  const { setAccessToken, clear } = useLocalStorage()

  useEffect(() => {
    clear()
  }, [])
  const { mutate } = useLogin({
    onSuccess: (res: Token) => {
      setAccessToken(res.access_token)
      router.push({
        pathname: '/home',
      })
    },
    onError: (error: AxiosError) => {
      if (error.code === 'ERR_BAD_REQUEST') {
        alert('メールアドレスかパスワードが間違っています。')
      }
    },
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <p>ログイン画面</p>
      <input
        type='text'
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />
      <br />
      <input
        type='password'
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />
      <br />
      <button
        onClick={() => {
          const input: LoginInput = { email: email, password: password }
          mutate(input)
        }}
      >
        ログイン
      </button>
      <br />
      <button
        onClick={() =>
          router.push({
            pathname: '/register',
          })
        }
      >
        新規会員登録
      </button>
    </div>
  )
}

export default LoginForm
