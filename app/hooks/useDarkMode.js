import { useState, useEffect } from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // On component mount, check user's previously selected theme from localStorage
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.add(storedTheme)
    } else {
      // Default to light theme
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return [theme, toggleTheme]
}
