import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact (){

    return(
        <div className="text-center mb-5">
            <h1 className='text-green text-3xl font-bold mt-6 lg:text-[60px]'>Contact me</h1>
            <div className='buttons flex justify-center mt-4 gap-5 lg:mt-12'>
                <a href="tel:+213541520675">
                <button className='bg-green  text-black border-2 border-green rounded-lg flex gap-2 items-center p-3 text-lg lg:text-3xl'><img src="src/assets/phone-regular-24.png"/>Appeler</button>
                </a>
                <a href="https://wa.me/2130551063100">
                <button className='bg-green  text-black border-2 border-green rounded-lg flex gap-2 items-center p-3 text-lg lg:text-3xl'><img src="src/assets/whatsapp-logo-24.png"/>Whatsapp</button>
                </a>
            </div>
        </div>
    )
}
export default Contact