import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBlock,
    CardTitle, CardText ,Container,CardDeck,ListGroup,ListGroupItem ,Col,Row} from 'reactstrap';
import '../css/AboutMe.css'
import me from '../images/me.jpg'
const AboutMe = (props) => {

    return (
        <Container className="AboutMeContainer">
                <CardDeck>
                    <Card >
                        <CardBlock>
                        <Container>
                                <Col>
                                    <Row>
                                        <Card className="cards">
                                            <CardTitle>Gist</CardTitle>
                                            <CardText>I am a Full stack web developer and ML enthusiast with special interest in making apps that consume data and solve real world problems.</CardText>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card className="cards">
                                            <CardTitle>Interests</CardTitle>
                                            <CardText>
                                                <div className="chip">Machine Learning</div>
                                                <div className="chip">Web Apps</div>
                                                <div className="chip">Artifical Intelligence</div>
                                            </CardText>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card className="cards">
                                            <CardTitle>What I Enjoy</CardTitle>
                                            <CardText>
                                                <div className="chip">Everything About Soccer</div>
                                            </CardText>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <Card className="cards">
                                            <CardTitle>Technology Stacks</CardTitle>
                                            <CardText>
                                                <div className="chip">Python Frameworks</div>
                                                <div className="chip">Qt</div>
                                                <div className="chip">Nodejs Frameworks</div>
                                                <div className="chip">Reactjs</div>
                                            </CardText>
                                        </Card>
                                    </Row>
                                </Col>
                            </Container>
                            </CardBlock>
                    </Card>
                    <Card >
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
                    <Card >
                        <CardBlock>
                            <CardTitle>Details</CardTitle>
                            <ListGroup className="list">
                                <ListGroupItem className="list"><b>Name</b>  :  Rahul Yadav</ListGroupItem>
                                <ListGroupItem className="list"><b>Age</b>  :  21</ListGroupItem>
                                <ListGroupItem className="list"><b>Current Status</b>  :  Student</ListGroupItem>
                                <ListGroupItem className="list"><b>College : </b>Delhi Technological University</ListGroupItem>
                                <ListGroupItem className="list"><b>Email : </b>rahulyadav170923@gmail.com</ListGroupItem>
                            </ListGroup>
                        </CardBlock>
                        </Card>
                </CardDeck>
        </Container>
    );
};

export default AboutMe;