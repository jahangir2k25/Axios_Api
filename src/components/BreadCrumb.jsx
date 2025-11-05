import React from 'react'
import { useLocation } from 'react-router';

const BreadCrumb = () => {
    let { pathname } = useLocation()
    let PathnameLocation = pathname.split('/')


    return (
        <>
            <div className='flex gap-2.5 py-5'>
                <h2> Home </h2>
                <h2> / </h2>
                <h2> {PathnameLocation} </h2>
            </div>
        </>
    )
}

export default BreadCrumb;
