import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

function Login() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#283747] to-[#17202a] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex mb-8 border-b border-gray-200">
          <button
            className={`flex-1 pb-4 text-lg font-semibold transition-all ${
              isLogin
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 pb-4 text-lg font-semibold transition-all ${
              !isLogin
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default Login