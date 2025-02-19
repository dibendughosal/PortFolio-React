import { Link } from "react-router-dom"
import { FaGithub, FaLinkedinIn , FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="w-full bg-[#343d68] h-auto">
      <div className="w-[1200px] mx-auto py-2">
        <div className="flex justify-between w-full items-center py-[30px] text-white">
          <p>&copy; 2025  Dibendu Ghosal. All rights reserved.</p>
          <div className="flex gap-[10px]">
            <Link to="#" className="text-white">About</Link>
            <Link href="#" className="text-white">Contact</Link>
            <Link href="#" className="text-white">Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-col w-[90%] mx-auto py-5 gap-3">
          <h2 className="text-white font-bold text-2xl">Connect with me!</h2>
          <div className="flex pl-5 gap-2">
            <a href="https://www.linkedin.com/in/dibendughosal/">
              <FaLinkedinIn className="text-[35px] text-white"/>
            </a>
            <a href="https://www.instagram.com/dibendughosal/">
              <FaInstagram className="text-[35px] text-white" />
            </a>
            <a href="https://github.com/dibendughosal">     
                <FaGithub className="text-[35px] text-white hover:text-black hover:bg-white hover:rounded-[50%]"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
