import { useState } from 'react'
  import toast from 'react-hot-toast'
  import Input from './Input'
  
  export default function RegisterForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = async(e: React.FormEvent) => {
      e.preventDefault()
      if (!username || !password) {
        toast.error('Please fill in all fields')
        return
      }
      
      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          toast.success('Registration successful!');
          // Additional logic after successful registration can go here
        } else {
          toast.error('Registration failed!');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
      }
      // Add your registration logic here
    }
  
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Create Account
          </h2>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:translate-y-[-1px] transition-all"
        >
          Register
        </button>
      </form>
    )
  }