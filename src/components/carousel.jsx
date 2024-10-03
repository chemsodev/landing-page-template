import Contact from "./Contact";

function Carousel() {
    return (
        <div className="item text-black">
            {/* Section image */}
            <div className="item-img  border-4 border-gray border-double p-4 rounded-lg w-1/2   ">
                <img src="src/assets/26.webp" alt="Oussama Bouras Image" />
            </div>

            {/* Section contenu */}
            <div className="item-content border-4 border-gray border-double p-4 rounded-lg w-1/2 text-center  ">
                <div className="item-desc">
                    {/* Titre */}
                    <div className="title">
                        <h1>Oussama Bouras (title here)</h1>
                    </div>

                    {/* Sous-titre */}
                    <div className="sub-title">
                        <h4>
                            blida ou jsp, écris n'importe quoi selon la personne (sous-titre ici)<br />
                            blida ou jsp, écris n'importe quoi selon la personne (sous-titre ici)<br />
                            blida ou jsp, écris n'importe quoi selon la personne (sous-titre ici)
                        </h4>
                    </div>

                    {/* Description */}
                    <div className="description">
                        <p>
                            Électricien bâtiment et industrielle Les pannes électriques, modification, installation.....etc<br />
                            Électricien bâtiment et industrielle Les pannes électriques, modification, installation.....etc<br />
                            (description ici)(description ici)
                        </p>
                    </div>
                </div>

                {/* Composant Contact */}
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
