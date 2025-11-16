import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#FFFCF6]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="logooo.png"
              alt="Logo"
              className="h-[30px] w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#about" className="text-gray-600 
            hover:text-gray-900 transition duration-150 font-medium text-sm lg:text-base">
              О НАС
            </a>
            <a href="#catalog" className="text-gray-600 
            hover:text-gray-900 transition duration-150 font-medium text-sm lg:text-base">
              КАТАЛОГ
            </a>
            <a href="#masterclass" className="text-gray-600 
            hover:text-gray-900 transition duration-150 font-medium text-sm lg:text-base">
              МАСТЕР КЛАСС
            </a>
            <a href="#contacts" className="text-gray-600 
            hover:text-gray-900 transition duration-150 font-medium text-sm lg:text-base">
              КОНТАКТЫ
            </a>
          </nav>
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition duration-150 font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
              О НАС
            </a>
            <a href="#catalog" className="text-gray-600 hover:text-gray-900 transition duration-150 font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
              КАТАЛОГ
            </a>
            <a href="#masterclass" className="text-gray-600 hover:text-gray-900 transition duration-150 font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
              МАСТЕР КЛАСС
            </a>
            <a href="#contacts" className="text-gray-600 hover:text-gray-900 transition duration-150 font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
              КОНТАКТЫ
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

