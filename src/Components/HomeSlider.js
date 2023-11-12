import React, { Fragment } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeSlider(props) {
    const imgs = {
        img1: require('../Assets/Images/slide1.jpg'),
        img2: require('../Assets/Images/slide2.jpg'),
        img3: require('../Assets/Images/slide3.jpg'),
        img4: require('../Assets/Images/slide4.jpg'),
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        autoplaySpeed:3000,
    };

    return (
        <Fragment>
            <Container fluid={true} className="slideBack">
                <Row>
                    <div className="overlay"/>
                    <Col className="slideDiv">
                        <Slider {...settings}>
                            <div>
                                <img className="slide" src={imgs.img1} alt="" />
                                <input className="btn btn-outline-danger" type="button" value="Contact me"/>
                            </div>
                            <div>
                                <img className="slide" src={imgs.img2} alt="" />
                                <input className="btn btn-outline-danger" type="button" value="Contact me"/>
                            </div>
                            <div>
                                <img className="slide" src={imgs.img3} alt="" />
                                <input className="btn btn-outline-danger" type="button" value="Contact me"/>
                            </div>
                            <div>
                                <img className="slide" src={imgs.img4} alt="" />
                                <input className="btn btn-outline-danger" type="button" value="Contact me"/>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default HomeSlider;
