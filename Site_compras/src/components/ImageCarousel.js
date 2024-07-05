import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false}>
      <div>
        <img src="imagens/imgdesconto.png" alt="Desconto" />
        <p className="legend">Desconto Especial</p>
      </div>
      <div>
        <img src="imagens/criançasvendotv.jpg" alt="Promoção" />
        <p className="legend">Promoção Imperdível</p>
      </div>
      <div>
        <img src="imagens/gatocobertor.jpg" alt="Novidade" />
        <p className="legend">Novidade no Site</p>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
