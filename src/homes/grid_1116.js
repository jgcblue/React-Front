

import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import { Collapse, CardBody, Card, CardHeader} from 'reactstrap';

import React, {useState} from 'react';
const [toggleQuestion, setToggequestion] = useState(1);//1 is the default id to be opened by default


class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Box> .col </Box>
            </Col>
          </Row>

          <Row>
            <Col xs="6">
              <Box> .col-6 </Box>
            </Col>

            <Col xs="6">
              <Box> .col-6 </Box>
            </Col>
          </Row>

          <Row>
            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>

            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>

            <Col xs="4">
              <Box> .col-4 </Box>
            </Col>
          </Row>

          <Row>
            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
             <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>

            <Col>
              <Box> .col </Box>
            </Col>
          </Row>

          <Row>
            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>

            <Col xs="auto">
              <Box> .col-auto with variable content</Box>
            </Col>

            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 6, order: 2, offset: 1 }}>
              <Box> .col-sm-6 .col-sm-order-2 .col-sm-offset-2 </Box>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Box> .col-sm-12 .col-md-6 .col-md-offset-3 </Box>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

const Box = props => <div className="box">{props.children} </div>;

render(<App />, document.getElementById("root")); 
