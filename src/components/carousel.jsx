import Contact from "./Contact";

function Carousel() {
    return (
        <div className=" item grid grid-cols-1 md:grid-cols-2  gap-6 w-full rounded-3xl py-12 px-6  lg:relative lg:h-[100vh] lg:gap-16 lg:p-20 3xl:h-[70vh]">
            <div className="item-img overflow-hidden">
                <img src="src/assets/26.webp" alt="Oussama Bouras Image" className="w-full h-full object-cover rounded-[30px] "/>
            </div>

            <div className="item-content lg:relative ">
                <div className="item-desc">
                    <div className="title text-3xl mb-3 text-center lg:text-[50px]">
                        <h1 className="font-bold lg:mt-5">(title here)</h1>
                    </div>

                    <div className="sub-title mb-12 text-lg lg:text-3xl lg:mt-6">
                        <h4>
                            blida ou jsp, écris n'importe quoi selon la personne (sous-titre ici)
                        </h4>
                    </div>

                    <div>
                        <h1 className="font-bold text-3xl text-center mb-4 lg:text-[40px]">Description</h1>
                        <p className="text-lg font-semibold lg:text-xl">
                            Électricien bâtiment et industrielle Les pannes électriques, modification, installation.....etc  (description ici)
                        </p>
                    </div>
                </div>

                <div >
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
