
const Home = () => {
  return (
    <div className='flex justify-between items-center h-[100vh] p-4 bg-cover bg-no-repeat bg-fixed bg-center'>
      <div className='w-[50%] flex flex-col gap-3'>
        <h2 className='text-3xl'>Hi, I'm <span>Dhiraj Verma.</span></h2>
        <h4 className='text-xl'>Frontend Developer| HTML5, CSS3, JS, React.js Enthusiast</h4>
        <p className='text-8'>I create seamless, interactive web experiences that bring your ideas to life.</p>
        <button className='bg-red-400 w-44 p-2'>Download CV</button>
      </div>
      <div className='w-[50%]'></div>
    </div>
  )
}

export default Home
