import React from 'react';

const pricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div>
            <div className='border bg-amber-600'>
                <h1 className='text-7xl'>{pricing.name}</h1>
                <h4 className='text-3xl'>{pricing.price}</h4>
            </div>
        </div>
    );
};

export default pricingCard;