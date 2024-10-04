import React from 'react'

const Price = () => {
    return (
        <div className='m-8  '>
            <p className='font-bold text-5xl'>Prix</p>
            <div className='flex flex-col md:grid md:grid-cols-3 gap-4'>
                <div className=' text-white p-5 flex flex-row justify-between bg-slate-600  mt-12 h-[60px] w-[350px] rounded-xl'>
                    <p>Déplacement</p>
                    <p className='text-amber-300'>1000 DA <span className='text-white'>/</span> 10 KM</p>
                </div>
                <div className=' text-white p-5 flex flex-row justify-between bg-slate-600  mt-12 h-[60px] w-[350px] rounded-xl'>
                    <p>Devis gratuit</p>
                    <p className='text-amber-300'>1 DA</p>
                </div>
                <div className=' text-white p-5 flex flex-row justify-between bg-slate-600  mt-12 h-[60px] w-[350px] rounded-xl'>
                    <p>Mentage prise</p>
                    <p className='text-amber-300'>500 DA <span className='text-white'>/</span> 1</p>
                </div>
                <div className=' text-white p-5 flex flex-row justify-between bg-slate-600  mt-12 h-[60px] w-[350px] rounded-xl'>
                    <p>Détecté la panne</p>
                    <p className='text-amber-300'>2000 DA</p>
                </div>
                <div className=' text-white p-5 flex flex-row justify-between bg-slate-600  mt-12 h-[60px] w-[350px] rounded-xl'>
                    <p>Métrage capble 1.5</p>
                    <p className='text-amber-300'>200 DA <span className='text-white'>/</span> 1 M</p>
                </div>
                <div className=' text-white p-5 flex flex-row justify-between bg-slate-600  mt-12 h-[60px] w-[350px] rounded-xl'>
                    <p>Métrage capble 2.5</p>
                    <p className='text-amber-300'>300 DA <span className='text-white'>/</span> 1 M</p>
                </div>
            </div>
        </div>
    )
}

export default Price