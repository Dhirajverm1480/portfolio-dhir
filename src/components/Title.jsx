import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const Title = ({title}) => {
  const titleHead = useRef()
  useGSAP(() => {
    const titleSplit = new SplitText( titleHead.current, {type : 'chars, words'})

    gsap.from(titleSplit.chars, {
      opacity: 0,
      duration: 1.8,
      yPercent: 100,
      ease: 'expo.out',
      stagger: 0.08
    })
  },[])
  return (
    <div className='border-b overflow-hidden'>
      <h2 ref={titleHead} className='text-2xl font-sarif py-5'>{title}</h2>
    </div>
  )
}

export default Title
