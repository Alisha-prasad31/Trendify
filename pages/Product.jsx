import RelativeProducts from '../components/RelativeProducts';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-12'>
        {/* Product images */}
        <div className='flex flex-col-reverse gap-2 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[25%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[30%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer h-auto'
                alt=""
              />
            ))}
          </div>
          <div className='flex flex-col items-start sm:w-[75%]'>
            <img className='w-full h-auto mb-4' src={image} alt="" />
            <div className='flex flex-col justify-start'>
              <h1 className='font-medium text-2xl'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img className='w-4' src={assets.star_icon} alt="" />
                <img className='w-4' src={assets.star_icon} alt="" />
                <img className='w-4' src={assets.star_icon} alt="" />
                <img className='w-4' src={assets.star_icon} alt="" />
                <img className='w-4' src={assets.star_dull_icon} alt="" />
                <p className='pl-2'>(124)</p>
              </div>
              <p className='mt-5 text-2xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-4'>
                <p className='font-medium'>Select Size</p>
                <div className='flex flex-wrap gap-2'>
                  {productData.sizes.map((item, index) => (
                    <button 
                      onClick={() => setSize(item)} 
                      className={`border py-2 px-4 bg-gray-300 ${item === size ? 'border-orange-500' : ''}`} 
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-4'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product</p>
                <p>Cash on delivery also available on this product</p>
                <p>Easy return policy within 7 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (123)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quod. Facilis commodi culpa illo, explicabo ipsam molestiae iure nostrum dolore totam non! Suscipit eveniet odit tempore unde! Odio beatae quo, repellendus molestiae suscipit debitis vitae similique minima. Eaque ullam consectetur soluta aliquid! Quae, sint?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates repellendus maiores ullam aspernatur necessitatibus est, corrupti inventore id quidem reprehenderit voluptatem.</p>
        </div>

      </div>
      {/*displlying related objexcts */}
      <RelativeProducts  category={productData.category} subcategory={productData.subcategory}/>
    </div>
  
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;