
const Home = () => {
  return (
    <div className='w-full flex items-center px-6 h-[90vh]'>
      <div className=' flex flex-col gap-4'>
        <h2 className='text-[9vw] sm:text-[10vh]'>Hi, I'm <span>Dhiraj Verma.</span></h2>
        <h4 className='sm:text-xl'>Frontend Developer| HTML5, CSS3, JS, React.js Enthusiast</h4>
        <p className='sm:text-8'>I create seamless, interactive web experiences that bring your ideas to life.</p>
        <div className="flex gap-3">
          <button className='bg-red-400 sm:w-44 p-2 mt-4'>Download CV</button>
          <button className='border sm:w-44 p-2 mt-4 btn-hover'>Contact Me</button>
        </div>
      </div>
      {/* <div className='w-[50%]'></div> */}
    </div>
  )
}

export default Home
