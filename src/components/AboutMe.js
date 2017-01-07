import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBlock,
    CardTitle, CardText ,Container,CardDeck,ListGroup,ListGroupItem     ,CardSubtitle} from 'reactstrap';
import '../css/AboutMe.css'
import me from '../images/me.jpg'
const AboutMe = (props) => {

    return (
        <Container className="AboutMeContainer">
                <CardDeck>
                    <Card>
                        <CardBlock>
                            <CardTitle>About Me</CardTitle>
                            <Card>
                                <CardBlock> 
                                    <CardText>
                                        <div className="chip">
                                            John Doe
                                        </div>
                                    </CardText>
                                </CardBlock>
                            </Card>
                         </CardBlock>
                    </Card>
                    <Card>
                        <CardBlock>
                                <img src={me} className="img-circle me" />
                        </CardBlock>
                        <CardBlock>
                            <div className="social-buttons">
                                <a href="https://www.facebook.com/rahul170923" className="social-button facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/rahul170923" className="social-button twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="social-button google">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a href="https://github.com/rahulyadav170923" className="social-button github">
                                    <i className="fa fa-github"></i>
                                </a>
                            </div>
                        </CardBlock>
                    </Card>
                    <Card>
                        <CardBlock>
                            <CardTitle>Details</CardTitle>
                            <ListGroup className="list">
                                <ListGroupItem className="list"><b>Name</b>  :  Rahul Yadav</ListGroupItem>
                                <ListGroupItem className="list"><b>Age</b>  :  21</ListGroupItem>
                                <ListGroupItem className="list"><b>Current Status</b>  :  Student</ListGroupItem>
                                <ListGroupItem className="list"><b>College : </b>Delhi Technological University</ListGroupItem>
                            </ListGroup>
                        </CardBlock>
                        </Card>
                </CardDeck>
        </Container>
    );
};

export default AboutMe;