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
import Vercel from "../assets/images/stack/Vercel.svg"

const Projects = () => {
    
  return (
    <div className="bg-[rgb(231,211,231)] mt-[3rem]">
        <h1 className="text-[var(--bgOrange)] text-center font-bold text-[90px] pt-8">Projects</h1>
        {/* Project Container */}
        <div className="max-w-[1200px] mx-auto py-[3rem] flex flex-col gap-30">
            {/* Project Cards */}
            <div className="h-[550px] w-[90%] group project bg-cover bg-no-repeat bg-[url('./Project1.png')] relative">
                <div className='font-semibold absolute numberRight z-10 text-white text-[200px] opacity-0 group-hover:opacity-100 right-[10%]'>01</div>
                {/* content(projects) */}
                <div className='absolute flex flex-col text-white p-8 bottom-[20%]
                z-10 gap-[1em] transition-all duration-400 left-[10%]'>
                    {/* Skills Container */}
                    <div className='flex w-[60%] gap-2.5 flex-wrap'>
                        <img src={html} alt="" className='SkillWidth' />
                        <img src={css} alt="" className='SkillWidth'/>
                        <img src={js} alt="" className='SkillWidth'/>
                        <img src={eXpress} alt="" className='SkillWidth'/>
                        <img src={nextjs} alt="" className='SkillWidth'/>
                        <img src={tailwind} alt="" className='SkillWidth'/>
                        <img src={NodeJS} alt="" className='SkillWidth'/>
                        <img src={mongoDB} alt="" className='SkillWidth'/>
                        <img src={redux} alt="" className='SkillWidth'/>
                        <img src={Vercel} alt="" className='SkillWidth'/>
                    </div>
                    <h1 className='text-[50px] font-bold leading-[48px]'>Tint & Orange</h1>
                    <p className='w-[70%] text-[16px] italic'>Its is a car modification copany which provide you sheets to protect your car from scratch</p>
                    <div className='flex gap-3 items-center'>
                        <button className="btn-pink">Read More</button>
                        <a href="https://github.com/dibendughosal"><i className="fa-brands fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/dibendughosal/"><i class="fa-brands fa-linkedin icon"></i></a>
                        <a href="https://dibendughosal.vercel.app/"><i className="fa-solid fa-link icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="h-[550px] w-[90%] project bg-cover group bg-no-repeat bg-[url('./Project2.png')]">
                <div className='font-semibold absolute numberLeft z-10 text-white text-[200px] opacity-0 group-hover:opacity-100'>02</div>
                {/* content(projects) */}
                <div className='absolute flex flex-col text-white p-8 bottom-[20%]
                z-10 gap-[1em] transition-all duration-400 right-[10%]'>
                    {/* Skills Container */}
                    <div className='flex w-[60%] gap-2.5 flex-wrap'>
                        <img src={html} alt="" className='SkillWidth'/>
                        <img src={css} alt="" className='SkillWidth'/>
                        <img src={js} alt="" className='SkillWidth'/>                     
                        <img src={nextjs} alt="" className='SkillWidth'/>
                        <img src={tailwind} alt="" className='SkillWidth'/>  
                        <img src={redux} alt="" className='SkillWidth'/>
                        <img src={Vercel} alt="" className='SkillWidth'/>
                    </div>
                    <h1 className='text-[50px] font-bold leading-[48px]'>Breaking Copyrights</h1>
                    <p className='w-[70%] text-[16px] italic'>A platform to download copyrights free youtube music</p>
                    <div className='flex gap-3 items-center'>
                        <button className="btn-pink">Read More</button>
                        <a href="https://github.com/dibendughosal"><i className="fa-brands fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/dibendughosal/"><i class="fa-brands fa-linkedin icon"></i></a>
                        <a href="https://dibendughosal.vercel.app/"><i className="fa-solid fa-link icon"></i></a>
                        
                    </div>
                </div>
            </div>
            <div className="h-[550px] w-[90%] project bg-cover group bg-no-repeat bg-[url('./Project3.png')]">
                <div className="font-semibold absolute numberRight z-10 text-white text-[200px] opacity-0 group-hover:opacity-100" >03</div>
                {/* content(projects) */}
                <div className='absolute flex flex-col text-white p-8 bottom-[20%]
                z-10 gap-[1em] transition-all duration-400 left-[10%]'>
                    {/* Skills Container */}
                    <div className='flex w-[60%] gap-2.5 flex-wrap'>
                        <img src={html} alt="" className='SkillWidth'/>
                        <img src={css} alt="" className='SkillWidth'/>
                        <img src={js} alt="" className='SkillWidth'/>    
                        <img src={nextjs} alt="" className='SkillWidth'/>
                        <img src={tailwind} alt="" className='SkillWidth'/>
                        <img src={Vercel} alt="" className='SkillWidth'/>
                    </div>
                    <h1 className='text-[50px] font-bold leading-[48px]'>Isha Tattva</h1>
                    <p className='w-[70%] text-[16px] italic'>A Website for interior designer to showcase her works and samples</p>
                    <div className='flex gap-3 items-center'>
                        <button className="btn-pink">Read More</button>
                        <a href="https://github.com/dibendughosal"><i className="fa-brands fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/dibendughosal/"><i class="fa-brands fa-linkedin icon"></i></a>
                        <a href="https://dibendughosal.vercel.app/"><i className="fa-solid fa-link icon"></i></a>
                        
                    </div>
                </div>
            </div>
            <div className="h-[550px] w-[90%] project bg-cover group bg-no-repeat bg-[url('./Project4.png')]">
                <div className="font-semibold absolute numberLeft z-10 text-white text-[200px] opacity-0 group-hover:opacity-100">04</div>
                {/* content(projects) */}
                <div>
                    {/* Skills Container */}
                    <div className='flex '>
                        <img src={html} alt="" className='SkillWidth'/>
                        <img src={css} alt="" className='SkillWidth'/>
                        <img src={js} alt="" className='SkillWidth'/>
                        <img src={eXpress} alt="" className='SkillWidth'/>
                        <img src={nextjs} alt="" className='SkillWidth'/>
                        <img src={tailwind} alt="" className='SkillWidth'/>
                        <img src={NodeJS} alt="" className='SkillWidth'/>
                        <img src={mongoDB} alt="" className='SkillWidth'/>
                        <img src={redux} alt="" className='SkillWidth'/>
                        <img src={Vercel} alt="" className='SkillWidth'/>
                    </div>
                    <h1>Granit</h1>
                    <p>A architectural website to plan your building or home (Hebrew Language)</p>
                    <div>
                        <button className="btn-pink">Read More</button>
                        <a href="https://github.com/dibendughosal"><i className="fa-brands fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/dibendughosal/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://dibendughosal.vercel.app/"><i className="fa-solid fa-link icon"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects; 
