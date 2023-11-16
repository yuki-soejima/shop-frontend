import { useLogin } from '@/lib/hooks/api/useLogin'
import { AxiosError } from 'axios'
import { useState } from 'react'

type LoginInput = { email: string; password: string }

const LoginForm = () => {
  const { mutate } = useLogin({
    onSuccess: (res) => {
      console.log(res)
    },
    onError: (error: AxiosError) => {
      //   console.log(error.code)
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
        submit
      </button>
    </div>
  )
}

export default LoginForm
