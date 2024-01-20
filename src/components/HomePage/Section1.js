import React , {useRef} from 'react'
import { SECTION1DATA_IMAGE_BASE_URL } from '../../utils/constants';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Section1 = ({prop}) => {

  const scrollContRef = React.useRef();
 //console.log("propData",prop[0]?.action?.text);
  

  const leftScroll = () => {
    const scrollCont = scrollContRef.current;
    //console.log("vhvh",scrollCont)
    let width = scrollCont.clientWidth/3;
    
    scrollCont.scrollLeft -= width;
  }
  const rightScroll = () => {
    const scrollCont = scrollContRef.current;
    let width = scrollCont.clientWidth/3;
    //console.log(width)
    scrollCont.scrollLeft += width;
  }


  return (
    <div className='w-11/12 mx-auto  mt-4 flex flex-col gap-7'>
        <div className='w-full mx-auto font-bold flex justify-between'>
            <div className='text-xl ml-0'>What's in you Heart ?</div>
            <div className='flex gap-4 mr-12'>
                <button className='rounded-full h-8 w-8 bg-gray-200 flex justify-center items-center hover:bg-gray-300' onClick={leftScroll}><IoIosArrowRoundBack /></button>
                <button className="rounded-full h-8 w-8 bg-gray-200 flex justify-center items-center hover:bg-gray-300" onClick={rightScroll}><IoIosArrowRoundForward /></button>
            </div>
        </div>
        <div className=' w-full mx-auto mb-2 flex gap-6 scroll-smooth overflow-x-hidden' ref={scrollContRef}>
            {prop.map((data,idx) => (
                <div key={idx}>
                    <div className="bg-slate-300 w-36 h-36  flex flex-shrink-0 justify-center items-center overflow-y-hidden">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${data?.imageId}`}/>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
    
  )
}

export default Section1;
