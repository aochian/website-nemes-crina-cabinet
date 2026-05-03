import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAVBAR_OFFSET = 96

function scrollToHashTarget(rawHash: string) {
  if (!rawHash) return false

  const id = decodeURIComponent(rawHash.replace('#', ''))
  const element = document.getElementById(id)
  if (!element) return false

  const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
  return true
}

export default function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    if (scrollToHashTarget(hash)) return

    // If route content renders after navigation, retry on next frame.
    const rafId = requestAnimationFrame(() => {
      scrollToHashTarget(hash)
    })

    return () => cancelAnimationFrame(rafId)
  }, [hash])

  useEffect(() => {
    const onForceHashScroll = (event: Event) => {
      const customEvent = event as CustomEvent<{ hash?: string }>
      const forcedHash = customEvent.detail?.hash
      if (!forcedHash) return

      scrollToHashTarget(forcedHash)
    }

    window.addEventListener('force-hash-scroll', onForceHashScroll)
    return () => window.removeEventListener('force-hash-scroll', onForceHashScroll)
  }, [])

  return null
}
