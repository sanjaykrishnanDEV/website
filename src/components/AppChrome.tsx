import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AppChrome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const optionsList =[
    {
      linkTo : "/",
      linkText : "Home"
    },
        {
      linkTo : "/posts",
      linkText : "posts"
    },
    {
      linkTo : "/about",
      linkText : "About"
    },
    {
      linkTo : "/resume",
      linkText : "Resume"
    }
  ]
  return (
    <div className="flex min-h-screen bg-background text-text">
      {isSidebarOpen && (
        <nav className="w-56 bg-sidebar border-r border-zinc-200 pt-16">
          <div className="flex flex-col px-4">
            {optionsList.map((option)=>
              <Link
               to={option.linkTo}
               className="rounded px-3 py-2 hover:bg-background hover:text-accent transition-colors"
             >
               {option.linkText}
             </Link>
            )}
          </div>
        </nav>
      )}

      <div className="flex-1 relative">
        <header className="fixed top-0 left-0 right-0 h-12 bg-header text-white border-b border-zinc-800 flex items-center justify-between px-4 z-50">
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="p-2 rounded-md hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5 text-zinc-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="font-mono text-sm text-zinc-300 right-0">
            sanjay@portfolio:~$ currently_learning go
          </div>

   
        </header>

        <main className="max-w-3xl mx-auto px-8 pt-24 pb-16">
          <Outlet />
        </main>
      </div>
    </div>
  )
}