import '../Footer/footer.css'
import Logo from '../Logo/Logo.jsx'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';


const Footer = () => {
    return(
        <footer>
            <div className='footer1'>
                
                <div className='footerLinks'>
                    <Link to="https://wa.me/5491157182967"className="dark" label="Atencion al Cliente">Atencion al Cliente</Link>
                    <Link  to="https://wa.me/5491157182967"className="dark"label="Preguntas Frecuentes">Preguntas Frecuentes</Link>
                    <Link to="https://wa.me/5491157182967" className="dark" label="Terminos & Condiciones">Terminos & Condiciones</Link>
                    <Link to="https://wa.me/5491157182967" className="dark" label="Quienes Somos">Quienes Somos</Link>
                </div>
                <Logo className='logo light' />
            </div>
            <div className='footer2'>
                <a href='https://www.instagram.com/tegno_magdalena'><InstagramIcon/></a>
                <a><FacebookIcon/></a>
                <a href='https://www.tiktok.com/@tecno_magdalena'><img src='tiktok-icon.png'/></a>
                <a><LinkedInIcon/></a>
            </div>
            <h5>©Tecno Magdalena Copyright  todos los derechos reservados</h5>
            <h5>Develop by:   <a>JuanBonadeo</a></h5>

            
        </footer>
    )
}
export default Footer