import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function UpComing(props) {

    const modal = require('../Assets/Images/modal.png');

    return (
        <Fragment>
            <Container fluid="true" className="upcoming text-center mt-5 p-2">
                <h2 className="blackTitle">Our Upcoming project</h2>
                <Row className="mt-4">
                   <Col sm={6} md={6} lg={6}>
                       <h2 className="blueSubtitle">Advance Modal</h2>
                       <img className="modalImg" src={modal} alt=""/>
                       <div className="codeSection">

                       </div>
                   </Col>
                   <Col sm={6} md={6} lg={6}>
                       <h3 className="blueSubtitle">Modal Description</h3>
                   </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default UpComing;