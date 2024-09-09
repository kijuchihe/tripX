import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'

import AuthForm from '../../../components/features/AuthForm'
import { useEffect } from 'react'

const RegisterPage = () => {
  const { state } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (state.isAuthenticated) navigate('/')
  }, [])
  return (
    <div className="flex max-h-screen overflow-y-hidden">
      <div className="w-full md:w-[50%] hidden md:block h-screen">
        <img src="/login-bg.webp" alt="" className='w-full h-full max-h-screen' />
        <div>
          This is supposed to work
        </div>
      </div>
      <div className="w-full h-screen max-h-screen md:w-[50%]  flex flex-col items-center justify-center px-4 bg-[url('/login-bg.webp')] bg-cover bg-no-repeat bg-center md:bg-none">
        <h1 className="mb-10 text-3xl font-bold">Register</h1>
        <AuthForm variant='register'/>
      </div>
    </div>
  )
}

export default RegisterPage
