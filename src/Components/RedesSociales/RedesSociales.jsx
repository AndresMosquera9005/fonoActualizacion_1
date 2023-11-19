import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import "../Estilos/Home.css"

const phoneNumber =`573102384126`;

const RedesSociales = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`

    const intagramLink = `https://instagram.com/centrofonorehabil?igshid=NGVhN2U2NjQ0Yg==`

    const tiktokLink = `https://www.tiktok.com/@centrofonoaudiolg?_t=8gn675dplt0&_r=1`

    return (
        <div>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faWhatsapp} id='wtp' className='separacionIconos' />
            </a>
            
            <a href={intagramLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram } id='itm' className='separacionIconos' /> 
            </a>

            <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} id='tk' className='separacionIconos' />
            </a>

        </div>
    )
}

export default RedesSociales