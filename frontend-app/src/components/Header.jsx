import { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Header = () => {
    const{removeBg} = useContext(AppContext);
    return (
        <div className="grid grid-col-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Video Banner */}
            <div className="order-2 md:order-1 flex justify-center">
                <div className='shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden'>
                    <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400px] h-auto object-cover" />
                </div>
            </div>

            {/* Content */}

            <div className="order1 md:order-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    The fastest <span className="text-indigo-700">background removal app</span>
                </h1>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">Transform your images instantly with our powerful background removal tool. Effortlessly highlight your subject and eliminate unwanted backgrounds to create clean, transparent images ready for any design, presentation, or creative project. Whether you're designing for business or personal use, this tool lets you place your subject in entirely new environments with precision and ease. Try it now to elevate your visuals and unlock endless creative possibilities.
                </p>

                <div>
                    <input type="file" accept='image/*' id='upload1' hidden onChange={(e) => removeBg(e.target.files[0])}/>
                    <label htmlFor="upload1" className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-lg">
                        Upload your image
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header;
