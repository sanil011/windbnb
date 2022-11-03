import "./output.css"
import Card from './component/Card';
import { useSelector,useDispatch } from "react-redux";
import Data from './stays.json';
import Footer from './component/Footer';
import { showSearch , showSideBar } from './redux/action';


function Home() {
 
  const dispatch = useDispatch();
  const {show,city,guest,showSide} = useSelector((state) => state.reducer)

  
  // collecting customize data according to search
  const datas = city ? Data.filter((data) =>  guest ? data.city === city && data.maxGuests.toString() === guest :data.city === city  ) : Data;
  return (
   
    <div onClick={  ()=> showSide && dispatch(showSideBar(false))} className={` z-0  relative font-sans `} >
     

      <div className={`flex ${show && 'backdrop-blur-sm'} justify-between px-12 mx-4`}>
      <h6 className=" text-[#333333] font-bold text-3xl">Stays in  {Data[0].country } </h6>
     <p className="text-sm pt-2">12+stays</p>
      </div>

      <div className={`flex px-12 flex-wrap ${show && 'backdrop-blur-sm'}`}>
        {/* showing all data */}
        { datas.length ?
          datas.map((data, i) =>
            <Card
              data={data}
              key={i}
              photo={data.photo}
              photo1={data.photo1}
              type={data.type}
              star={data.rating}
              title={data.title}
              superHost={data.superHost}
          /> 
          ) : <div className="flex text-[#333333] justify-center w-full pt-20 text-center flex-col">
            <h1 className="text-4xl font-bold capitalize "> searched data  is not found try to search another thing</h1>
             <h4 className="text-2xl">(2,3,6 guest)</h4>
          </div>}
      </div>
      { showSide && <div className='w-52 h-60 px-4 flex flex-col justify-around right-20 rounded-lg z-50 -top-5 absolute bg-white shadow-lg shadow-slate-900' >
        <p className="font-bold">Signup</p>
        <p className="font-[100]">Log in</p>
        <hr/>
        <p>Host your home</p>
        <p>Host an experience</p>
        <p>Help</p>
      </div>}

      {show && <div className="bg-black w-full absolute h-full opacity-30 top-96 z-50" onClick={() => dispatch(showSearch(false))}></div>}
      <div className={`bg-white fixed top-[94.2vh] w-full `}> <hr className="w-full  text-black"/><Footer /></div> 
{/* ${show && "mt-[max(30.2vh,1px)]"} */}
    </div>
  );
}

export default Home;
