import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            
            <Container fluid={true} className="footerBottom">
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Walt Ribeiro
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Copyright &copy; 2020 Walt Ribeiro
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;