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
                <div className='font-semibold absolute numberRight z-10 text-white text-[200px] opacity-0 group-hover:opacity-100 '>01</div>
                {/* content(projects) */}
                <div>
                    {/* Skills Container */}
                    <div>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={eXpress} alt="" />
                        <img src={nextjs} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={NodeJS} alt="" />
                        <img src={mongoDB} alt="" />
                        <img src={redux} alt="" />
                        <img src={Vercel} alt="" />
                    </div>
                    <h1>Tint & Orange</h1>
                    <p>It is a car modification company which provide your car from scratch </p>
                    <div>
                        <button className="btn-pink">Read More</button>
                        <a href="https://github.com/dibendughosal"><i className="fa-brands fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/dibendughosal/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://dibendughosal.vercel.app/"><i className="fa-solid fa-link icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="h-[550px] w-[90%] project bg-cover group bg-no-repeat bg-[url('./Project2.png')]">
                <div className='font-semibold absolute numberLeft z-10 text-white text-[200px] opacity-0 group-hover:opacity-100'>02</div>
                {/* content(projects) */}
                <div>
                    {/* Skills Container */}
                    <div>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={eXpress} alt="" />
                        <img src={nextjs} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={NodeJS} alt="" />
                        <img src={mongoDB} alt="" />
                        <img src={redux} alt="" />
                        <img src={Vercel} alt="" />
                    </div>
                    <h1>Breaking Copyrights</h1>
                    <p>A platform to download copyrights free youtube music</p>
                    <div>
                        <button className="btn-pink">Read More</button>
                        <a href="https://github.com/dibendughosal"><i className="fa-brands fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/dibendughosal/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://dibendughosal.vercel.app/"><i className="fa-solid fa-link icon"></i></a>
                        
                    </div>
                </div>
            </div>
            <div className="h-[550px] w-[90%] project bg-cover group bg-no-repeat bg-[url('./Project3.png')]">
                <div className="font-semibold absolute numberRight z-10 text-white text-[200px] opacity-0 group-hover:opacity-100" >03</div>
                {/* content(projects) */}
                <div>
                    {/* Skills Container */}
                    <div>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={eXpress} alt="" />
                        <img src={nextjs} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={NodeJS} alt="" />
                        <img src={mongoDB} alt="" />
                        <img src={redux} alt="" />
                        <img src={Vercel} alt="" />
                    </div>
                    <h1>Isha Tattva</h1>
                    <p>A Website for interior designer to showcase her works and samples</p>
                    <div>
                        <button className="btn-pink">Read More</button>
                        <a href="https://github.com/dibendughosal"><i className="fa-brands fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/dibendughosal/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://dibendughosal.vercel.app/"><i className="fa-solid fa-link icon"></i></a>
                        
                    </div>
                </div>
            </div>
            <div className="h-[550px] w-[90%] project bg-cover bg-no-repeat bg-[url('./Project4.png')]">
                <div className="font-semibold absolute numberLeft z-10 text-white text-[200px] opacity-0 group-hover:opacity-100">04</div>
                {/* content(projects) */}
                <div>
                    {/* Skills Container */}
                    <div>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={eXpress} alt="" />
                        <img src={nextjs} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={NodeJS} alt="" />
                        <img src={mongoDB} alt="" />
                        <img src={redux} alt="" />
                        <img src={Vercel} alt="" />
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
