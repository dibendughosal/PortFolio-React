import dImg from '../assets/images/userAsset/Letter_D_Cleaned.png';
import gIMG from '../assets/images/userAsset/G_cleaned.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center justify-between pt-4 font-serif w-[1200px] mx-auto">
            <div className='flex w-[200px] items-center relative px-4'>          
                <img src={dImg} alt="D Letter" className='w-[80px] absolute'/>
                <img src={gIMG} alt="G Letter" className='w-20 ml-10' />             
            </div>
            <div className='flex justify-between'>
                <ul className='flex justify-between gap-4 text-[20px] font-[500] px-4 '>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><Link to="/about">About</Link></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><Link to="/projects">Services</Link></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><Link to='/gallery'>Gallery</Link></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><Link to='/contact'>Contact</Link></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]' ><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Header; 