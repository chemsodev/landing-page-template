import image from "../assets/6.webp";
import Contact from "./Contact";

function Carousel() {

    return (
        <div className="  grid grid-cols-1 md:grid-cols-2  gap-6 w-full rounded-3xl p-6 h-[100%] relative md:p-10 lg:mb-10 lg:h-[100vh] lg:gap-12 lg:p-14 3xl:h-[80vh]">
            <div className="item-img overflow-hidden hover:scale-105 duration-700">
                <img src={image} alt="Oussama Bouras Image" className="w-full h-80 md:h-full lg:h-full object-cover rounded-[60px] p-2 lg:p-9 "/>
            </div>

            <div className="item-content p-2 lg:relative flex flex-col justify-between">
                <div className="item-desc">
                    <div className="title text-3xl mb-3 text-left lg:text-[40px]">
                        <h1 className="font-bold lg:mt-5">Mohamed Reda </h1>
                    </div>

                    <div className="sub-title mb-4 text-lg lg:text-xl lg:mt-2">
                        <h2>
                        Électricien : Expert en installations et maintenance des systèmes électriques
                        </h2>
                    </div>

                    <div>
                        <h1 className="font-bold text-3xl text-left mb-2 lg:text-[30px]">Description</h1>
                        <p className="text-lg  lg:text-lg">
                        En tant qu'électricien, j'installe, répare et entretiens des systèmes électriques dans différents types de bâtiments, qu'ils soient résidentiels, commerciaux ou industriels. Je pose les câbles, raccorde les prises, interrupteurs et appareils, tout en veillant à respecter les normes de sécurité. Je réalise aussi des tests pour diagnostiquer les pannes et effectue la maintenance régulière des systèmes. Lorsque je fais de nouvelles installations, je lis et interprète les plans électriques pour m'assurer que le réseau fonctionne correctement.
                        </p>
                    </div>
                </div>

                <div className="mt-auto mr-auto">
                    <Contact/>
                </div>
            </div>
        </div>
    );
}

export default Carousel;

