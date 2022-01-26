import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselTooltip = () => {
  return (
    <Carousel showStatus={false} showThumbs={false}>
      <div>
        <p>1111</p>
      </div>
      <div>
        <p>2222</p>
        <p>2222</p>
        <p>2222</p>
        <p>2222</p>
        <p>2222</p>
      </div>
      <div>
        <p>3333</p>
        <p>3333</p>
        <p>3333</p>
        <p>3333</p>
        <p>3333</p>
      </div>
    </Carousel>
  );
};
export default CarouselTooltip;
