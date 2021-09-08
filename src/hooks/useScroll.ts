import React, { useEffect, useState } from 'react'
import debounce from 'utils/debounce'

export default function useScroll<T extends HTMLElement>(
  elementRef: React.RefObject<T>
) {
  const [scrollPos, setScrollPos] = useState({ top: 0, left: 0 })

  const onScroll = debounce(() => {
    if (!elementRef.current) return
    const { scrollTop, scrollLeft } = elementRef.current

    if (scrollPos.left !== scrollLeft || scrollPos.top !== scrollTop) {
      setScrollPos({ top: scrollTop, left: scrollLeft })
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

  return scrollPos
}
