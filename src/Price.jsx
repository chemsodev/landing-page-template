import React from 'react';

const priceItems = [
    { label: 'Déplacement', price: '1000 DA', unit: '10 KM' },
    { label: 'Devis gratuit', price: '1 DA' },
    { label: 'Mentage prise', price: '500 DA', unit: '1' },
    { label: 'Détecté la panne', price: '2000 DA' },
    { label: 'Métrage câble 1.5', price: '200 DA', unit: '1 M' },
    { label: 'Métrage câble 2.5', price: '300 DA', unit: '1 M' },
];

const Price = () => {
    return (
        <div className='m-8'>
            <p className='font-bold flex justify-center items-center text-5xl'>Prix</p>
            <div className='flex flex-col md:grid md:grid-cols-3 gap-4'>
                {priceItems.map((item, index) => (
                    <div
                        key={index}
                        className='text-white p-5 flex flex-row justify-between bg-slate-600 mt-12 h-[60px] w-[350px] rounded-xl'
                    >
                        <p>{item.label}</p>
                        <p className='text-amber-300'>
                            {item.price} {item.unit && <span className='text-white'>/</span>} {item.unit}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;
