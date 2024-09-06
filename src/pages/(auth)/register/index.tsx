import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'

import AuthForm from '../../../components/features/AuthForm'

const RegisterPage = () => {
  //   const { state } = useAuth()
  //   const navigate = useNavigate()

  //   if (state.isAuthenticated) navigate('/')
  return (
    <div className="flex">
      <div className="w-full md:w-[50%]">
        <img src="/login-bg.webp" alt="" />
      </div>
      <div className="w-full md:w-[50%]  flex flex-col items-center justify-center p-4">
        <h1 className="mb-10 text-3xl font-bold">Register</h1>
        <AuthForm variant="register" />
      </div>
    </div>
  )
}

export default RegisterPage
