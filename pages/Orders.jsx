import React, { useContext } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  // Mock data for demonstration
  const mockOrders = products.slice(1, 4).map((item, index) => ({
    ...item,
    quantity: index + 1,
    size: index % 2 === 0 ? 'M' : 'L',
    date: '2025-05-03',
  }));

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title test1={'MY'} test2={' ORDERS'} />
      </div>

      <div>
        {mockOrders.map((item, index) => (
          <div
            key={index}
            className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            {/* Product Info */}
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20 rounded-md' src={item.image[0]} alt={item.name} />

              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <p className='text-gray-600 mt-1'>Size: <span className='font-medium'>{item.size}</span></p>
                <p className='text-gray-600'>Quantity: <span className='font-medium'>{item.quantity}</span></p>
                <p className='text-gray-600'>Date: <span className='font-medium'>{item.date}</span></p>

                {/* Ready to Ship Tag */}
                <div className='mt-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full'>
                  Ready to Ship
                </div>
              </div>
            </div>

            {/* Price + Track Now */}
            <div className='flex flex-col items-start md:items-end gap-2'>
              <div className='text-sm sm:text-base font-semibold text-gray-800'>
                {currency} {(item.price * item.quantity).toFixed(2)}
              </div>

              <button className='mt-1 text-blue-600 text-sm font-medium hover:underline'>
                Track Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
