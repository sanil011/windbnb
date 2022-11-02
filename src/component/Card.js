import React,{useState} from 'react'
import Right from '../assest/rightarrow.svg';
import Left from '../assest/leftarrow.svg';
import { Link } from 'react-router-dom';
import { detail } from '../redux/action';
import { useDispatch } from 'react-redux';
const Card = ({ photo, photo1, superHost, type, star, title ,data}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();

  return (  

    <div onClick={() => { console.log("sanil"); dispatch(detail(data)) }} className='mobile:w-1/2 animate-slideup tablet:w-1/3 laptop:w-1/4 aspect-square p-4 mb-4 '>
      <div className='w-full '>
        <Link to='/detail'>
        <div className='relative  group hover'>
          <section className={`${!currentSlide ? "block":" hidden"}`}>
            <img className='rounded-2xl object-cover my-2 aspect-[1/.7] ' src={photo} alt="src" /> 
          </section>
          <section className={`${currentSlide ? "block":" hidden"} `}>
            <img className='rounded-2xl object-cover my-2 aspect-[1/.7]' src={photo1} alt="src" />  
          </section>
          <div className='invisible group-hover:visible'>
             <img className='cursor-pointer absolute top-1/2 rounded-lg left-4   bg-white opacity-80 ' onClick={() => setCurrentSlide(!currentSlide)} src={Left} alt="arrow"/> 
             <img className='cursor-pointer absolute top-1/2 rounded-lg   right-4 bg-white opacity-80 ' onClick={()=>setCurrentSlide(!currentSlide)} src={Right} alt="arrow"/>
          </div>
          <div>
             <span className={`w-2 h-2 rounded-lg ${currentSlide ? "bg-white opacity-80 ":" bg-gray-400 opacity-50"}  absolute top-[90%] left-[43%]`} ></span>
            <span className={`w-2 h-2 rounded-lg ${!currentSlide ? "bg-white opacity-80 ":" bg-gray-400 opacity-50"} absolute top-[90%] left-[50%]`}></span>
          </div>
      </div>
          <div className='flex justify-between'>
          {superHost && <h6 className='font-bold text-sm text-[#4F4F4F] border-2 py-0.5 px-2 rounded-2xl'>SUPER HOST</h6>}
          <p className='font-medium text-sm text-[#828282]'>{type}</p>
          <p>⭐️  { star}</p>
          </div>
          <p className='text-[#333333] text-base'>{ title}</p></Link>
        </div>
      </div>

  )
}

export default Card