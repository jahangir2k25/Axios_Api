import React from 'react'
import { useNavigate } from 'react-router';
import { FaStar } from "react-icons/fa";


const Card = ({ product = {}, ...props }) => {

    const { thumbnail, title, rating, price, id } = product
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/product/${id}`);
        // console.log(id);
    }

    return (
        <>
            <div {...props} onClick={handleClick} className="mx-auto mt-20 mb-20 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
                <div>
                    <img className="p-8 rounded-t-lg" src={thumbnail} alt='' />
                </div>
                <div className="px-5 pb-5">
                    <h5 onClick={() => navigate(`/product/${id}`)} className="text-xl font-semibold text-gray-900 cursor-pointer">{title}</h5>

                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center">
                            {Array.from({ length: Math.floor(rating) }, (_, index) => (
                                <span key={index} className="w-5 h-5 text-yellow-400" >
                                    <title>Star</title>
                                    <FaStar />
                                </span>
                            ))}
                        </div>
                        <span className="bg-blue-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">{rating}</span>
                        {/* <span className="bg-blue-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">{reviews}</span> */}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className='flex gap-4 justify-center items-center'>
                            <span className="text-3xl font-bold text-gray-900">${price}</span>
                            <span className='text-2xl text-primary font-bold line-through'>${Math.floor(price / (1 - product.discountPercentage / 100))}</span>
                        </div>
                        <button className="text-white bg-primary hover:bg-[#a1114f] font-medium rounded-sm text-sm px-5 py-2.5 text-center cursor-pointer">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
