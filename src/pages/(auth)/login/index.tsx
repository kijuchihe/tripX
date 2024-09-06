import { useNavigate } from 'react-router-dom'
import AuthForm from '../../../components/features/AuthForm'
import { useAuth } from '../../../context/authContext'
import { useEffect } from 'react'

const LoginPage = () => {
  const { state } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (state.isAuthenticated) navigate('/')
  }, [])
  return (
    <div className="flex">
      <div className="w-full md:w-[50%] hidden md:block">
        <img src="/login-bg.webp" alt="" />
      </div>
      <div className="w-full md:w-[50%]  flex flex-col items-center justify-center p-4 bg-[url('/login.webp')] md:bg-white">
        <h1 className="mb-10 text-3xl font-bold">Login</h1>
        <AuthForm />
      </div>
    </div>
  )
}

export default LoginPage
