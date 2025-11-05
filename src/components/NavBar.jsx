import React from 'react'
import Container from './Container';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <>
            <nav className="bg-primary py-4">
                <Container>
                    <div className="flex flex-wrap items-center justify-between">
                        <h1 className="text-2xl font-semibold text-white">LoGo</h1>

                        <ul className="flex gap-x-10 p-4 text-white font-medium ">
                            <NavLink to='/'>
                                <li className='hover:text-amber-300 cursor-pointer'>Home</li>
                            </NavLink>
                            <NavLink to='About'>
                                <li className='hover:text-amber-300 cursor-pointer'>About</li>
                            </NavLink>
                            <NavLink to='Shop'>
                                <li className='hover:text-amber-300 cursor-pointer'>Shop</li>
                            </NavLink>
                            <NavLink to='Contact'>
                                <li className='hover:text-amber-300 cursor-pointer'>Contact</li>
                            </NavLink>
                        </ul>

                        <div>
                            <button className="text-white border border-white px-3.5 py-1.5 rounded-sm  font-medium text-center cursor-pointer" >Login</button>
                        </div>
                    </div>
                </Container>
            </nav>

        </>
    )
}

export default NavBar;
