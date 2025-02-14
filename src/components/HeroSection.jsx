import Dots from '../assets/images/userAsset/dots.png';
import HeroImage from '../assets/images/userAsset/plus.png';
import myImg from '../assets/images/userAsset/_myPhoto.jpg';
import blobVector from '../assets/images/userAsset/blobVector.png';
import zigzagImg from '../assets/images/userAsset/zigzags.png';
import circleImg from '../assets/images/userAsset/circle.png';
import cubeImg from '../assets/images/userAsset/cube.png'
import TypingEffect from './Typed';

const HeroSection = () => {
  return (
    <div className="h-[80%] w-full flex justify-center items-center gap-[80px] my-[64px] mx-auto pb-[8rem] overflow-x-hidden">
        {/* Left Part */}
      <div className='flex flex-col justify-center gap-[2rem]'>
        <h1>Hey! Dibendu Ghosal</h1>
        <TypingEffect/>
        <div>
            I'm a <span>Software Engineer</span> and it is my portfolio website. Here you'll know about my journey as a software Engineer.    
        </div>
        <button>Hire Me</button>
      </div>
      {/* Right Part */}
      <div className="relative">
        <img src={Dots} alt="" />
        <img src={HeroImage} alt="" />
        <img src={myImg} alt="" />
        <img src={blobVector} alt="" />
        <img src={zigzagImg} alt="" />
        <img src={circleImg} alt="" />
        <img src={cubeImg} alt="" />
      </div>
      {/* Faded Text */}
      <div className='absolute select-none text-[7em] text-[rgb(231,231,231)] font-bold -bottom-[16%] left-[5%]'>Dibendu Ghosal</div>
    </div>
    
  )
}

export default HeroSection
