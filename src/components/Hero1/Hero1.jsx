import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () => {
  return (
    <Carousel interval={5000}>
      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1"
          src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/portadas%2Fhero1.jpg?alt=media&token=0fab9fd0-ebdd-409c-a4ba-6ba0fc7b47eb'
          alt="First-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>
          <Button label='Catalogo' to='/productos' />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/portadas%2Fhero2.jpg?alt=media&token=b9447b65-52c7-4e76-aef5-ca06dbed0811'
          alt="Third-slide"
        />
      </Carousel.Item>

      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/portadas%2Fhero3.jpg?alt=media&token=7fbcf6c1-c1e3-4cea-a8ba-b6f290724d7a'
          alt="Third-slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}
export default Hero1