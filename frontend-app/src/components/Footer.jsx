import React from 'react'
import { assets, FOOTER_CONSTANT } from '../assets/assets'

const Footer = () => {
    return (
        <footer className="flex item-center justify-between gap-4 px-4 lg:px-44 py-3">
            <img src={assets.logo} alt="logo" width={32} />
            <p className="flex-1 border-l border-gray-100 max-sm:hidden">
                &copy;{new Date().getFullYear()} Uttaran | ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-3">
                {FOOTER_CONSTANT.map((footer, index) => (
                    <a href={footer.url} key={index} target='_blank' rel='noopener noreferrer'>
                        <img src={footer.logo} alt="logo" width={32} />
                    </a>
                ))}
            </div>
            <p className="text-center text-gray-700 font-medium"></p>
        </footer>
    )
}

export default Footer
