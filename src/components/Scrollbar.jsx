import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Scrollbar = ({ direction = 'horizontal' }) => {
  const barRef = useRef(null)

  const isHorizontal = direction === 'horizontal'

  useEffect(() => {
    if (!barRef.current) return

    const transformOrigin = isHorizontal ? 'left' : 'top'
    const scaleProperty = isHorizontal ? 'scaleX' : 'scaleY'
    const start = isHorizontal ? 'left left' : 'top top'
    const end = isHorizontal ? 'right right' : 'bottom bottom'

    gsap.set(barRef.current, {
      [scaleProperty]: 0,
      transformOrigin,
    })

    gsap.to(barRef.current, {
      [scaleProperty]: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start,
        end,
        scrub: true,
      },
    })
  }, [isHorizontal])

  return (
    <div
      ref={barRef}
      className={
        isHorizontal
          ? 'h-[3px] w-full fixed bottom-0 top-0 bg-foreground'
          : 'w-[2px] h-full sm:h-3/5 fixed top-0 sm:top-1/5 right-0 sm:right-4 bg-foreground'
      }
    />
  )
}

export default Scrollbar
