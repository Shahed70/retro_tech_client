import './TopBanner.css';

import React from 'react';

import {
  Carousel,
  Container,
} from 'react-bootstrap';

function TopBanner() {
  return (
    <Container fluid className="top_banner">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/07/15/19/42/manipulation-smartphone-2507499__340.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="banner_title">Lorem ipsum dolor sit amet.</h3>
            <p className="banner_title">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="banner_title">Lorem ipsum dolor sit amet.</h3>
            <p className="banner_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2014/05/02/21/50/blogging-336376__340.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="banner_title">Lorem ipsum dolor sit amet.</h3>
            <p className="banner_title">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default TopBanner;
