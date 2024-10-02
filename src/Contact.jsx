import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact (){

    return(
        <div className="contact">
            <h1>Contact me</h1>
            <div className='buttons'>
                <a href="tel:+213541520675">
                <button><img src="src/assets/phone-regular-24.png"/>Appeler</button>
                </a>
                <a href="https://wa.me/2130551063100">
                <button><img src="src/assets/whatsapp-logo-24.png"/>Whatsapp</button>
                </a>
            </div>
        </div>
    )
}
export default Contact