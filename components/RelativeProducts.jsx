import { ShopContext } from '../context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import Productitems from '../components/Productitems'

const RelativeProducts = ({category,subcategory}) => {
    const{products}=useContext(ShopContext)
    const[related,setRelated]=useState([])

    useEffect(()=>{
        if(products.length >0){
            let productsCopy=products.slice();
            productsCopy=productsCopy.filter((item)=>category===item.category);
            productsCopy=productsCopy.filter((item)=>subcategory===item.subcategory);
            setRelated(productsCopy.slice(0,5));
            
            

        }
        

    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title test1={'RELATED'} test2={' PRODUCTS'}/>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    
                }
                
            
                  
            </div>
        </div>

    </div>
  )
}

export default RelativeProducts