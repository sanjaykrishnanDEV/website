import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AppChrome() {
  const [toggleState, setToggleState] = useState(false)
  const handleToggle = () => {
    setToggleState((prev) => !prev)
  }
  return (
    <div className="flex min-h-screen bg-blue-50">

      {toggleState &&
        <nav className="flex flex-col w-64 p-4 gap-4 bg-orange-800 text-white">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </nav>
      }

      <div className="flex-1 relative">
        <div className="absolute top-0 left-0 right-0 h-12 w-full bg-black text-white border-b flex items-center justify-between px-4 z-10">
          <button className="p-2 hover:bg-gray-200 rounded-md cursor-pointer bg-white" onClick={handleToggle}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="font-mono text-sm">
            sanjay@portfolio:~$ currently_learning go
          </div>

       
        </div>


        <main className="pt-12 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}