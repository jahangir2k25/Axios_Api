import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm  bg-linear-to-l from-primary to-[#ff008c] transition-all text-white/70">
                <p>Copyright © 2025 LoGo. All rights reservered.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-white transition-all">
                        Contact Us
                    </a>
                    <a href="#" className="hover:text-white transition-all">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-all">
                        Trademark Policy
                    </a>
                </div>
            </footer>
        </div>
        
    )
}

export default Footer;
