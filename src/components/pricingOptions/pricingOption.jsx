import React, { use } from 'react';

const pricingOption = ({ PricingPromise }) => {
    const PricingData = use
    (PricingPromise)
     console.log(PricingData)
    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>
            <div>
                {
                    PricingData.map(pricing => <pricingCard
                        key={pricing.id}
                        pricing={pricing}></pricingCard>)
                }
            </div>
        </div>
    );
};

export default pricingOption;
