import React from 'react';
import NBBanner from '../../assets/nb-banner.jpg';
import CarharttBanner from '../../assets/carhartt-banner.jpg';
import NSBanner from '../../assets/nike-x-stussy-banner.jpg';

const Carousel = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarharttBanner}
                alt="Carhartt Banner "
                />
                <Carousel.Caption>
                <h5>CARHARTT</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={NBBanner}
                alt="New Balance 550 Banner"
                />
                <Carousel.Caption>
                <h5>New Balance 550</h5>
                <p>Ya podés conseguir la tendecia en sneakers para esta temporada, sólo en FYAH</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={NSBanner}
                alt="Nike x Stussy Banner"
                />
                <Carousel.Caption>
                <h5>Nike x Stussy Air Zoom Spiridon</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Carousel;