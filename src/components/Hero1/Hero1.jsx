import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return (
      <Carousel interval={5000}>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/cebate-un-mate.appspot.com/o/hero1.jpg?alt=media&token=29e16988-c699-4970-86e8-c03d093f778c'
            alt="First-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Comprar' to='/productos' />
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1 imgHero3"
            src='https://firebasestorage.googleapis.com/v0/b/cebate-un-mate.appspot.com/o/hero2.jpg?alt=media&token=d078af5e-f035-4f0a-9624-26469ff23972'
            alt="Third-slide"
          />
          <Carousel.Caption className='HeroCaption hero12'>
            <Button label='Ver Yerbas' to='/categoria/yerbas'  />
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    );
}
export default Hero1