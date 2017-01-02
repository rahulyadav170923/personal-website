import React from 'react';
import image1 from '../images/image1.jpg'
import '../css/App.css'
import { CardImg} from 'reactstrap';


const IntroImage = (props) => {
    return (
            <CardImg top width="100%"  src={image1} alt="Card image cap" />
    );
};

export default IntroImage;