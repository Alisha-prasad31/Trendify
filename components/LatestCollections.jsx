import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext'; // Ensure you import the context correctly
import Title from '../components/Title';
import Productitems from '../components/Productitems';

const LatestCollections = () => {
  const { products } = useContext(ShopContext); // Use the context
  const [LatestProducts ,setLatestProducts] = useState([])

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));

  },[])

  console.log(products); // This will log the products to the console

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title test1={'LATEST'} test2={' COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt tenetur autem qui vo    
        </p>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          LatestProducts.map((item,index)=>(
            <Productitems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }

      </div>
    </div>
  );
};

export default LatestCollections;