import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact (){

    return(
        <div className="contact">
            <h1 className='text-blue'>Contact me</h1>
            <div className='buttons'>
                <a href="tel:+213541520675">
                <button className='bg-blue  text-black border-2 border-black '><img src="src/assets/phone-regular-24.png"/>Appeler</button>
                </a>
                <a href="https://wa.me/2130551063100">
                <button className='bg-blue  text-black border-2 border-black '><img src="src/assets/whatsapp-logo-24.png"/>Whatsapp</button>
                </a>
            </div>
        </div>
    )
}
export default Contact