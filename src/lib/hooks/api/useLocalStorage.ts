type Me = {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}

const useLocalStorage = () => {
  const setValue = (key: string, value: string) => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(key, value)
  }

  const getValue = (key: string) => {
    if (typeof window === 'undefined') return
    return window.localStorage.getItem(key)
  }

  const removeItem = (key: string) => {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem(key)
  }

  const clear = () => {
    if (typeof window === 'undefined') return
    window.localStorage.clear()
  }

  const setAccessToken = (accessToken: string) => {
    setValue('accessToken', accessToken)
  }

  const getAccessToken = () => {
    return getValue('accessToken')
  }

  const setUser = (me: Me | undefined) => {
    if (!me) return
    setValue('me', JSON.stringify(me))
  }

  const getUser = () => {
    return JSON.parse(getValue('me') ?? '{}') as Me
  }

  return {
    clear,
    removeItem,
    setAccessToken,
    getAccessToken,
    setUser,
    getUser,
  }
}

export default useLocalStorage
