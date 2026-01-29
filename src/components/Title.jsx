import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Title = ({ title }) => {
  const titleHead = useRef()

  useEffect(() => {
    const titleSplit = new SplitText(titleHead.current, { type: 'chars, words' })

    const tl = gsap.from(titleSplit.chars, {
      opacity: 0,
      duration: 1.8,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.08
    })

    return () => {
      tl.kill()
      titleSplit.revert()
    }
  }, [])
  return (
    <div className='border-b'>
      <h2 ref={titleHead} className='text-2xl font-serif py-5 overflow-hidden'>{title}</h2>
    </div>
  )
}

export default Title
