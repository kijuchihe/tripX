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
    <div className="flex max-h-screen overflow-y-hidden">
      <div className="w-full md:w-[50%] hidden md:block h-screen">
        <img src="/login-bg.webp" alt="" className='w-full h-full max-h-screen'/>
      </div>
      <div className="w-full h-screen max-h-screen md:w-[50%]  flex flex-col items-center justify-center px-4 bg-[url('/login-bg.webp')] bg-cover bg-no-repeat bg-center md:bg-none">
        <h1 className="mb-10 text-3xl font-bold">Login</h1>
        <AuthForm />
      </div>
    </div>
  )
}

export default LoginPage
