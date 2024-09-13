import { useState } from 'react'
import {
  //   getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { useAuth } from '../../context/authContext'
import { auth } from '../../firebase/config'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AuthForm = ({
  variant = 'login',
}: {
  variant?: 'login' | 'register'
}) => {
  const navigate = useNavigate()
  const { dispatch } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkValidFields = () => {
    if (!email) {
      toast('Please enter email', { type: 'error' })
      return false
    }
    if (!password) {
      toast('Please enter password', { type: 'error' })
      return false
    }
    if (password.length < 6) {
      toast('Password must be at least 6 characters', { type: 'error' })
      return false
    }
    return true
  }
  const handleGoogleLogin = async (e: any) => {
    e.preventDefault()
    setIsLoading(() => true)
    // const googleAuth = getAuth()
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      dispatch!({ type: 'AUTHENTICATE', payload: result.user })
      toast('Login successful', { type: 'success' })
      navigate('/')
    } catch (error) {
      toast('An error occurred', { type: 'error' })
      console.error(error)
    } finally {
      setIsLoading(() => false)
    }
  }
  const handleLogin = async (e: any) => {
    e.preventDefault()
    const isValid = checkValidFields()
    if (isValid) {
      setIsLoading(() => true)
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        dispatch!({ type: 'AUTHENTICATE', payload: userCredential.user })
        toast('Login successful', { type: 'success' })
        navigate('/')
      } catch (error) {
        console.error(error)
        toast('An error occurred', { type: 'error' })
      } finally {
        setIsLoading(() => false)
      }
    }
  }

  const handleRegister = async (e: any) => {
    e.preventDefault()
    const isValid = checkValidFields()
    if (isValid) {
      setIsLoading(() => true)
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        dispatch!({ type: 'AUTHENTICATE', payload: userCredential.user })
        toast('Registration successful', { type: 'success' })
        navigate('/')
      } catch (error) {
        toast('An error occurred', { type: 'error' })
        console.error(error)
      } finally {
        setIsLoading(() => false)
      }
    }
  }

  const Spinner = () => {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <>
      <form className="p-4 mx-auto w-full text-black bg-white rounded-xl">
        <div>
          <button
            onClick={handleGoogleLogin}
            className="flex gap-2 items-center p-2 w-full rounded border"
            type="button"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_13183_10121)">
                <path
                  d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                  fill="#3F83F8"
                ></path>
                <path
                  d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                  fill="#EA4335"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_13183_10121">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <span>Log in with Google</span>
          </button>
        </div>

        <div className="flex items-center my-2 w-full">
          <div className="w-[45%]">
            <hr />
          </div>
          <div className="mx-2">OR</div>
          <div className="w-[45%]">
            <hr />
          </div>
        </div>

        <div className="my-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md">
              {/* dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 */}
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              id="email"
              required
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-primary outline-none focus:border block flex-1 min-w-0 w-full text-sm p-2.5"
              //   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              placeholder="jon@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="my-2">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <div>
            <span></span>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md">
                {/* dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 */}
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                id="password"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-primary outline-none block flex-1 min-w-0 w-full text-sm p-2.5  "
                placeholder="Password"
                required
                // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        {variant === 'login' ? (
          <>
            <div className="flex justify-between items-center">
              <p>Don't have an account with us?</p>
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </div>
            <div>
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-2 my-2 w-full text-white rounded-lg bg-primary"
                type="submit"
              >
                {isLoading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <p>Already have an account with us?</p>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <button
                onClick={handleRegister}
                className="flex items-center justify-center px-4 py-2 my-2 w-full text-white rounded-lg bg-primary"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  'Register'
                )}
              </button>
            </div>
          </>
        )}
      </form>
    </>
  )
}

export default AuthForm
