import Contact from "./contact";

function Carousel() {
    return (
        <div className="item">
            {/* Section image */}
            <div className="item-img">
                <img src="src/assets/26.webp" alt="Oussama Bouras Image" />
            </div>

            {/* Section contenu */}
            <div className="item-content">
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
