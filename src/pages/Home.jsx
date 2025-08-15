import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Home = () => {

  useGSAP(() => {
    const heroSplit = new SplitText('#hero-heading', { type: 'chars, words' });
    const subtitleSplit = new SplitText('#hero-subtitle', { type: 'lines' });
    const paraSplit = new SplitText('#hero-para', { type: 'lines' })

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    })

    gsap.from(subtitleSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1.4,
    })
  }, [])

  return (
    <div className='page-frame flex items-center h-[90vh]'>
      <div className=' flex flex-col gap-4'>
        <h2 id="hero-heading" className='text-[9vw] sm:text-[10vh]'>Hi, I'm <span>Dhiraj Verma.</span></h2>
        <h4 id="hero-subtitle" className='sm:text-xl'>Frontend Developer| HTML5, CSS3, JS, React.js Enthusiast</h4>
        <p id="hero-para" className='sm:text-8'>I create seamless, interactive web experiences that bring your ideas to life.</p>
        <div className="flex gap-3">
          <button className='bg-red-400 btn'>Download CV</button>
          <button className='btn border btn-hover'>Contact Me</button>
        </div>
      </div>
      {/* <div className='w-[50%]'></div> */}
    </div>
  )
}


export default Home
