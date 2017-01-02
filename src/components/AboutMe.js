import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBlock,
    CardTitle, CardText ,Container} from 'reactstrap';
import '../css/AboutMe.css'
const AboutMe = (props) => {

    return (
        <Container className="mainContainer">
            <h2> --------About Me--------</h2>
            <div>
                <Card>
                    <CardHeader tag="h3">Current Status</CardHeader>
                    <CardBlock>
                        <CardText>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and more. As the saying goes: 'two heads are better than one'.</CardText>
                    </CardBlock>
                </Card>

                <Card>
                    <CardHeader tag="h3">Interests</CardHeader>
                    <CardBlock>
                        <CardTitle>Interests</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBlock>
                    <CardFooter className="text-muted">Footer</CardFooter>
                </Card>
            </div>
        </Container>
    );
};

export default AboutMe;