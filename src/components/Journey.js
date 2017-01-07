import React from 'react';
import { Media,Container,Card,Row,Col,CardTitle,CardText,CardImg,CardSubtitle } from 'reactstrap';
import GCI from '../images/GCI.png'
const Journey = (props) => {
    return (
        <Container>
        <Container>
            <h2>----------- Journey So Far------------</h2>
        </Container>
            <Row>
                <Col sm="3">
                    <Card block>
                        <CardImg top width="100%"  src={GCI} alt="Card image cap" />
                    </Card>
                </Col>
                <Col sm="9">
                    <Card block>
                        <CardTitle>Google Code-In Mentor</CardTitle>
                        <CardSubtitle> Nov - Jan </CardSubtitle>
                        <CardText>  With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Journey;