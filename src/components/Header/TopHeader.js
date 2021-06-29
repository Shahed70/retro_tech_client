import './TopHeader.css';

import React from 'react';

import {
  Col,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap';

import logo from '../../assets/image/RetroTech1.png';

const TopHeader = () => {
  return (
    <div fluid="true" className="headr_top" bg="light">
      <div>
        <Row className="justify-content-between ">
          <Col sm={12} md={4} lg={4}>
            <div className="d-flex justify-content-center header_icon">
              <a href="/#">
             
                <div className="icon border rounded-circle">
            
                  <i className="fab fa-facebook"></i>
                </div>
              </a>
              <a href="/#">
              
                <div className="icon border mx-2 rounded-circle">
                 
                  <i className="fab fa-twitter"></i>
                </div>
              </a>
              <a href="/#">
                <div className="icon border rounded-circle">
               
                  <i className="fab fa-instagram"></i>
                </div>
              </a>
              <a href="/#">
                <div className="icon border ml-2 rounded-circle">
                
                  <i className="fab fa-pinterest"></i>
                </div>
              </a>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="header_sm">
          
            <img src={logo} alt="Retro tech" />
            <p className="pl-5 text-success">Live With Tech</p>
          </Col>
          <Col sm={12} md={4} lg={4} className="header_sm">
            <Form className="d-flex sm-form">
              <FormControl
                type="search"
                placeholder="Search"
                className="w-75"
                aria-label="Search"
              />
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopHeader;
