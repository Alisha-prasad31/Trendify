import React from 'react';

const Title = ({ test1, test2 }) => { // Destructure props correctly
    return (
        <div className='inline-flex gap-2 items-center mb-3'>
            <p className='text-gray-500'>
                {test1}
                <span className='text-gray-700 font-medium'>{test2}</span> {/* Fixed font class */}
            </p>
        
        </div>
    );
};

export default Title;