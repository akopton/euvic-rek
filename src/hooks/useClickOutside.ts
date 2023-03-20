import { useEffect } from 'react'

export const useClickOutside = (ref: any) => {
  let clickedOutside = false

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // return false
        clickedOutside = true
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return clickedOutside
}
