import Footer from '../components/Footer.component'
import Header from '../components/Header.component'
import Slide from '../components/Slide.component';
import { slideData1, slideData2, slideData3, slideData4, slideData5 } from '../data/InfoContent';



export default function MasInfo() {

    return (
        <>
            <Header />

            <main className="container-fluid">
                {/* INDICADORES DEL CARRUCEL */}

                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators d-flex py-2">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                    </div>

                    <div className="container p-5 carousel-inner">
                        {/* PRIMER SLIDE */}
                        <Slide
                            title={slideData1.title}
                            active={"active"}
                            subtitle={slideData1.subtitle}
                            listItems={slideData1.listItems}

                        />

                        {/*  SEGUNDO SLIDE */}

                        <Slide
                            title={slideData2.title}
                            subtitle={slideData2.subtitle}
                            listItems={slideData2.listItems}
                        />

                        {/*  TERCER SLIDE */}
                        <Slide
                            title={slideData3.title}
                            subtitle={slideData3.subtitle}
                            listItems={slideData3.listItems}
                        />

                        {/*  CUARTO SLIDE */}
                        <Slide
                            title={slideData4.title}
                            subtitle={slideData4.subtitle}
                            listItems={slideData4.listItems}
                        />

                        {/*  QUINTO SLIDE */}
                        <Slide
                            title={slideData5.title}
                            subtitle={slideData5.subtitle}
                            listItems={slideData5.listItems}
                        />
                    </div>
                    {/*  BOTONES DEL CARRUCEL */}

                </div>
            </main>

            <Footer />
        </>
    )
};
