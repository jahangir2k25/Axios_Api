import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import Skeleton from "../components/Skeleton";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
        // .catch((err) => console.error("Error:", err));
    }, [id]);

    if (!product) {
        return (
            <div className="flex justify-center items-center w-full min-h-screen">
                <Skeleton />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:flex gap-10">
                {/*  Product Image */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full max-w-sm rounded-xl shadow-md"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                        {product.title}
                    </h1>
                    <p className="text-gray-500 text-sm mb-4 capitalize">{product.category}</p>
                    <p className="text-gray-700 leading-relaxed mb-5">{product.description}</p>

                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-3xl font-bold text-primary">
                            ${product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                            ${Math.floor(product.price / (1 - product.discountPercentage / 100))}
                        </span>
                        <span className="text-sm text-rose-500 font-semibold">
                            -{product.discountPercentage}% off
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-lg mr-2"><FaStar /></span>
                        <span className="text-gray-600">{product.rating}</span>
                    </div>

                    {/* Select Size Example */}
                    <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-2">Select Size:</h3>
                        <div className="flex gap-3">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    className="border border-gray-300 rounded-lg px-4 py-2 hover:bg-primary hover:text-white transition"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="flex items-center gap-2.5 bg-primary hover:bg-[#8a0e44] text-white px-6 py-3 rounded-lg font-medium transition w-full md:w-auto cursor-pointer">
                        <GiShoppingCart className="text-2xl" /> Add to Cart
                    </button>
                </div>
            </div>

            {/* Extra Images */}
            <div className="max-w-6xl mx-auto mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">More Images</h2>
                <div className="flex gap-4 flex-wrap">
                    {product.images.map((img, id) => (
                        <img
                            key={id}
                            src={img}
                            alt=""
                            className="w-28 h-28 object-cover rounded-lg border border-gray-200 hover:scale-105 transition"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
