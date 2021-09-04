import React, { useEffect, useState } from 'react'
import debounce from 'utils/debounce'

export default function useScroll<T extends HTMLElement>(
  elementRef: React.RefObject<T>
) {
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0, top: 0 })

  const onScroll = debounce(() => {
    if (!elementRef.current) return
    const { scrollX, scrollY, scrollTop } = elementRef.current
    if (
      scrollPos.x !== scrollX ||
      scrollPos.y !== scrollY ||
      scrollPos.top !== scrollTop
    ) {
      setScrollPos({ x: scrollX, y: scrollY, top: scrollTop })
    }
  }, 10)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    element.addEventListener('scroll', onScroll)
    return () => {
      element.removeEventListener('scroll', onScroll)
    }
  }, [elementRef, onScroll])

  return [scrollPos.x, scrollPos.y, scrollPos.top]
}
