import axios from 'axios'
import useLocalStorage from './hooks/api/useLocalStorage'

const GetAccessToken = () => {
  const { getAccessToken } = useLocalStorage()
  return getAccessToken()
}
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export default axiosInstance
