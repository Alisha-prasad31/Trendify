import React, { useContext, useEffect, useState } from 'react'; // Import useState
import { ShopContext } from '../context/ShopContext'; // Import ShopContext
import Title from '../components/Title';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) { // Check if products are available
            const bestProduct = products.filter((item) => item.bestseller); // Fixed typo
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]); // Add products to the dependency array

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title test1={'BEST'} test2={' SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptatem fugiat? </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {bestSeller.map((item) => (
                    <div 
                        key={item._id} 
                        className='border p-4 rounded cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg'
                    >
                        <img src={item.image[0]} alt={item.name} className='w-full h-auto' />
                        <h3 className='text-lg'>{item.name}</h3>
                        <p className='text-sm font-medium'>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                            }).format(item.price)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
