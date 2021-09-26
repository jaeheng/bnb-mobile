import { raf } from "../../../utils/util";

export function scrollLeftTo(scroller, to, duration) {
  let count = 0
  const from = scroller.scrollLeft
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)

  function animate() {
    scroller.scrollLeft += (to - from) / frames

    if (++count < frames) {
      raf(animate)
    }
  }

  animate()
}
