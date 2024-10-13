import phone from '../assets/phone-regular-24.png'
import whatsapp from '../assets/whatsapp-logo-24.png'

function Contact (){

    return(
        <div className="text-center mb-5">
            <h1 className='text-green text-3xl font-bold mt-6 lg:text-[50px]'>Contactez-nous</h1>
            <div className='buttons flex justify-center mt-4 gap-5 lg:mt-12'>
                <a href="tel:+213541520675">
                <button className='bg-blue text-black hover:bg-green hover:text-white hover:border-green hover:scale-110 border-4 border-blue rounded-lg flex gap-2 items-center p-3 text-lg lg:text-3xl'><img src={phone} alt='phone'/>Appeler</button>
                </a>
                <a href="https://wa.me/2130551063100">
                <button className='bg-green text-black  border-4 border-green  hover:text-white hover:scale-110 rounded-lg flex gap-2 items-center p-3 text-lg lg:text-3xl'><img src={whatsapp} alt='whatsapp'/>Whatsapp</button>
                </a>
            </div>
        </div>
    )
}
export default Contact
