import React, { useState, useRef } from 'react'
import Search from './Search'
import Logo from '../assest/logo.svg';
import Searc from '../assest/search1.svg';
import Location from '../assest/location.svg';
import Globe from '../assest/globe.svg';
import Profile from '../assest/profile.svg';
import Sidebar from '../assest/sidebar.svg';
import { showSearch, citySearch, guestSearch, showSideBar } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const dispatch = useDispatch();
  const { show, showSide } = useSelector((state) => state.reducer)
  const [value, setValue] = useState('');
  const ref = useRef();
  const loc = useRef();
  const City = ['Mumbai', 'Delhi', 'Goa', 'Banglore'];
  const changeHandler = () => {
    dispatch(citySearch(ref.current.value));
    dispatch(guestSearch(loc.current.value));
    dispatch(showSearch(false));
  }

  const searchClickHandler = () => {
    dispatch(showSearch(true));
    dispatch(citySearch(''));
    dispatch(guestSearch(''));
  }
  const handleLogo = () => {
    dispatch(citySearch(''));
    dispatch(guestSearch(''));
  }

  return (
    <>

      {/* when we click to search */}
      {!show && <div className=" mt-8 px-12 flex justify-between z-0  relative mb-4 mx-4">
        <div className=' hidden pt-2 w-1/4 mobile:block'>
          <Link to='/'>
            <img className="w-32 " src={Logo} onClick={() => handleLogo()} alt="logo" />
          </Link>
        </div>

        <div onClick={searchClickHandler} className="w-full mobile:w-1/2 cursor-pointer tablet:w-[40%] text-center ">  <Search setValue={setValue} /> </div>


        <div className=' hidden  justify-around w-1/4 items-center  tablet:flex'>
          <div className=' cursor-pointer hover:bg-gray-100 hover:border-1 p-2 rounded-full  '>
            <p >Become a host</p>
          </div>
          <div className='w-12 hover:bg-gray-100 hover:border-1  cursor-pointer rounded-full p-3  '>
            <img src={Globe} alt="globe" />
          </div>
          <div onClick={() => dispatch(showSideBar(!showSide))} className='grid grid-cols-2 gap-1 p-2 cursor-pointer border-2 rounded-full hover:shadow-lg shadow-slate-900'>
            <img className='w-8 px-1' src={Sidebar} alt='icon' />
            <img className='w-8 px-1' src={Profile} alt='profile' />
          </div>
        </div>
      </div>}
      <hr className='w-full mb-8' />
      {/* when we search */}
      {show &&
        <div className=' absolute animate-pop h-[24em] bg-white z-20 px-4 mobile:px-20 w-full  mobile:h-1/4 '>
          <div className='flex justify-around border-2 rounded-lg py-1'>
            <input type="text" className='w-1/3  outline-2 pl-3' ref={ref} value={value} onChange={() => console.log('asdfghjkl')} placeholder="Location" ></input>
            <div className='border-l-4 p-0'></div>
            <input type="text" className='w-1/3 outline-2 pl-3' ref={loc} placeholder="Add guests" ></input>
            <div className='border-l-4 p-0'></div>
            <div className='w-1/3 flex justify-center'>
              <button onClick={changeHandler} className='flex  bg-[#EB5757] py-1 px-3 w-32 justify-between align-middle text-xl rounded-xl text-[#F2F2F2]'><img src={Searc} alt="ram ram" /> Search</button>
            </div>
          </div>
          {/* suggesting cities to search */}
          {City.map((datas, i) => <div className='flex w-1/3'>
            <img className='w-4' src={Location} alt="location" />
            <h3 className='text-[#4F4F4F]  text-base my-4 pl-4 cursor-pointer tracking-[1px]' onClick={() => { setValue(datas) }} key={i}>{datas},India</h3>
          </div>)}
        </div>}

    </>
  )
}

export default Navbar;