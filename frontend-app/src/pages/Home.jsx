import React from 'react'
import Header from '../components/Header'
import BgRemovalSteps from '../components/BgRemovalSteps'
import BgSlider from '../components/BgSlider'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import TryNow from '../components/TryNow'

const Home = () => {
    return (
        <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit]">
            {/* Hero Section */}
            <Header />

            {/*background removal steps*/}
            <BgRemovalSteps />

            {/*Background removal slider section*/}
            <BgSlider/>

            {/*Buy credit plan section*/}
            <Pricing/>

            {/*User testimonial section*/}
            <Testimonials/>

            {/*Try now section*/}
            <TryNow/>
        </div>
    )
}

export default Home
