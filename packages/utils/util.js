export const inBrowser = typeof window !== 'undefined'

export function raf(fn) {
  return inBrowser ? requestAnimationFrame(fn) : -1
}

export function cancelRaf(id) {
  if (inBrowser) {
    cancelAnimationFrame(id)
  }
}
