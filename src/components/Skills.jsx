import '../App.css';
import mongoDB from "../assets/images/stack/MongoDB.svg"
import html from "../assets/images/stack/HTML.png"
import css from "../assets/images/stack/CSS.png"
import js from "../assets/images/stack/Javascript.svg"
import eXpress from "../assets/images/stack/Express.png"
import nextjs from "../assets/images/stack/NextJsCircle.png"
import tailwind from "../assets/images/stack/Tailwind.png"
import NodeJS from "../assets/images/stack/NodeJs.svg"
import redux from "../assets/images/stack/Redux.svg"
import Vercel from "../assets/images/stack/Vercel.svg";
import reactIcon from '../assets/images/stack/React.png';
import gitIcon from '../assets/images/stack/Git.svg';
import sass from '../assets/images/stack/Saas.svg';
import MUI from "../assets/images/stack/MaterialUI.svg";
import Bootstrap from "../assets/images/stack/Bootstrap.svg";
import blobImg from "../assets/images/userAsset/blobVector.png";
import github from "../assets/images/stack/Github.svg";
import GSAP from "../assets/images/stack/GSAP.png";

function Skills() {
  return (
    <div className='flex p-[5rem] my-[10rem] mx-auto gap-8 relative'>
        {/* left */}
        <div className='w-[50%] relative flex flex-col gap-10 p-6'>
            <h2 className='text-[var(--bgOrange)] font-bold leading-[50px] text-[50px]'><span className=' text-[90px]'>M</span>e and <br />
            MyTech Stack
            </h2>
            <div className='text-justify flex flex-col gap-3'>
            <p>
            Hey! This Side Dibendu Ghosal, I am a full-stack developer with a strong background in JavaScript and Node.js. I have worked with various frameworks, libraries, and technologies such as React, Next.js, Express, MongoDB, and Redux.
            </p>
            <p>
                I love to share my knowledge and experiences with others. I am always open to discussing new technologies, best practices, and challenges I face while working on projects.
            </p>
            <p>
            I am currently working remotely and focusing on developing new projects. I am always eager to learn and improve my skills, so feel free to reach out if you have any questions or need assistance.
            </p>
            </div>
            

        </div>
        {/* right Container */}
        <div className='flex justify-center w-[50%] gap-8 flex-wrap relative'>
          <img src={blobImg} alt="blob" className='BlobImg'/>
          <img src={html} alt="icon1" className='SkillIcon '/>
          <img src={css} alt="icon2" className='SkillIcon'/>
          <img src={js} alt="icon3" className='SkillIcon'/>
          <img src={Bootstrap} alt="icon4" className='SkillIcon'/>
          <img src={tailwind} alt="icon5" className='SkillIcon'/>
          <img src={reactIcon} alt="icon6" className='SkillIcon'/>
          <img src={redux} alt="icon7" className='SkillIcon'/>
          <img src={gitIcon} alt="icon13" className='SkillIcon'/>
          <img src={github} alt="icon13" className='SkillIcon'/>
          <img src={MUI} alt="icon14" className='SkillIcon'/>
          <img src={mongoDB} alt="icon8" className='SkillIcon'/>
          <img src={nextjs} alt="icon9" className='SkillIcon'/>
          <img src={Vercel} alt="icon10" className='SkillIcon'/>
          <img src={eXpress} alt="icon11" className='SkillIcon'/>
          <img src={NodeJS} alt="icon12" className='SkillIcon'/>
          <img src={sass} alt="icon15" className='SkillIcon'/>
          <img src={GSAP} alt="" className='SkillIcon'/>

        </div>

        <div className='absolute select-none text-[7em] text-[rgb(231,231,231)] font-bold -bottom-[34.5%] right-3'>
            Skills
        </div>
    </div>
  )
}

export default Skills;
