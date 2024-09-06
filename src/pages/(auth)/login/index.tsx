import React from 'react'
import AuthForm from '../../../components/features/AuthForm'

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-[50%]">
        <img src="/login-bg.webp" alt="" />
      </div>
      <div className="w-full md:w-[50%]  flex flex-col items-center justify-center p-4">
        <h1 className="mb-10 text-3xl font-bold">Login</h1>
        <AuthForm />
      </div>
    </div>
  )
}

export default LoginPage
