import img1 from "../assets/images/myImg/AAMI2890.JPG";
import img2 from "../assets/images/myImg/BLZO2245.JPG";
import img3 from "../assets/images/myImg/dib-edit.JPG";
import img4 from "../assets/images/myImg/IMG_1340.JPG";
import img5 from "../assets/images/myImg/IMG_1341.JPG";
import img6 from "../assets/images/myImg/IMG_1347.JPG";
import img7 from "../assets/images/myImg/IMG_1350.JPG";
import img8 from "../assets/images/myImg/IMG_1351.JPG";
import img9 from "../assets/images/userAsset/_myPhoto.jpg";
import img10 from "../assets/images/myImg/IMG_E1327.JPG";
import img11 from "../assets/images/myImg/IMG_E1328.JPG";
import img12 from "../assets/images/myImg/IMG_E1331.JPG";
import img13 from "../assets/images/myImg/RCZBE3264.JPG";
import img14 from "../assets/images/myImg/SWQN6866.JPG";
import img15 from "../assets/images/myImg/UWFFE7662.JPG";



function Gallery(){

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
    return (
        <div className="w-full
       py-20 h-auto">
            <div className="w-[1200px] mx-auto">
                <hr className="text-gray-400"/>
                <h2 className="py-5 text-center text-[42px] text-[var(--bgOrange)] font-bold">Gallery</h2>
                {/* Gallery Images */}
                <div className="flex flex-wrap gap-4 justify-center cursor-zoom-in">
                   {
                    images.map((img, index) => (
                        <img key={index} src={img} alt="gallery" className="h-[250px] w-[250px] object-cover rounded-xl grayscale hover:grayscale-0 hover:scale-[1.04] transition duration-200 hover:z-10" />
                    ))
                   }
                </div>
            </div>

        </div>
    )
}
export default Gallery;