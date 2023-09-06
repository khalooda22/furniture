

// eslint-disable-next-line react/prop-types
function Advertisment({title,buttonTitle,background,src}) {
  return (
    <div className="flex  w-1/2 p-10 h-[300px] " style={{'backgroundColor':background}} >
      <img className="max-w-[400px] max-h-[300px]" src={src} alt="" />
      <div  className='flex flex-col  w-3/2  items-center justify-center pt-2 gap-4'>
          <h1 className='text-3xl ml-6 font-bold text-white w-[70%]'>{title}</h1>
          <button className='w-auto border bg-white px-4 py-2 rounded-full text-black font-bold'>{buttonTitle}</button>
      </div>
    </div>
  )
}

export default Advertisment
