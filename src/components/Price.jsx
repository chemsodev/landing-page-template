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
        <div className='flex flex-col justify-center items-center mt-12'>
            <p className='font-bold text-center text-5xl'>Prix</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 w-full max-w-6xl text-center my-12'>
                {priceItems.map((item, index) => (
                    <div
                        key={index}
                        className='text-white p-5 flex flex-row justify-between hover:scale-105 duration-300 bg-slate-600 h-[60px] w-[350px] rounded-xl mx-auto'
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
