import Dots from '../assets/images/userAsset/dots.png';
import HeroImage from '../assets/images/userAsset/plus.png';
import myImg from '../assets/images/userAsset/_myImg.jpg';
import blobVector from '../assets/images/userAsset/blobVector.png';
import zigzagImg from '../assets/images/userAsset/zigzags.png';
import circleImg from '../assets/images/userAsset/circle.png';
import cubeImg from '../assets/images/userAsset/cube.png'
import TypingEffect from './Typed';

const HeroSection = () => {
  return (
    <div className="h-[80%] w-full flex justify-center items-center gap-[80px] my-[64px] mx-auto pb-[8rem] relative">
        {/* Left Part */}
      <div className='flex flex-col justify-center gap-[2rem]'>
        <h1 className='text-[#343d68] font-[500] text-[35px]'>Hey! Dibendu Ghosal</h1>
        <TypingEffect/>
        <div className='w-[70%] mt-4 font-[500]'>
            I'm a <span>Software Engineer</span> and it is my portfolio website. Here you'll know about my journey as a software Engineer.    
        </div>
        <div className='bg-[var(--bgOrange)] w-fit  text-white font-[500] px-[36px] py-3 shadowHireBtn relative transition duration-500 border-[3px] border-solid border-transparent py-[0.8rem] px-[2.3rem] btn-pink'>Hire Me</div>
      </div>
      {/* Right Part */}
      <div className="relative ">
        <img src={Dots} alt="" className='absolute -bottom-4 -right-4 animate-bounce z-10'  />
        <img src={HeroImage} alt="" className='absolute z-10 -top-[0.8rem] left-[50%] blobVct' />
        <img src={myImg} alt="" className='w-[355px] h-[384px] object-cover object-top p-[2.5rem]  transition-all imgAnimation -z-[9]' />
        <img src={zigzagImg} alt="" className='absolute z-10 top-[1.5em] -left-[0.3em] zigzagAnm' />
        <img src={circleImg} alt=""  className='absolute circleAnm bottom-0 left-0 z-10'/>
        <img src={cubeImg} alt="" className='absolute cubeAnm top-0 right-0 z-10' />
      </div>
      {/* Faded Text */}
      <div className='absolute select-none text-[7em] text-[rgb(231,231,231)] font-bold -bottom-[16%] left-[5%]'>Dibendu Ghosal</div>
    </div>
    
  )
}

export default HeroSection
