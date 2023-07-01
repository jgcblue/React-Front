import React from 'react';
import '../App.css'
import '../You_styles.css'
import {Fragment} from 'react'

import {Collapse, Card, CardBody,Button, Container, Jumbotron } from "reactstrap";

//Not sure if this import will work (its for styling the react-strap stuff)
import 'bootstrap/dist/css/bootstrap.min.css';


function ToggleExample(){
        return(
                <Fragment>
                <div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
    style={{
      marginBottom: '1rem'
    }}
  >
          YouToggle
  </Button>
  <h5>
    Current state: Closed
  </h5>
  <Collapse
    onEntered={function noRefCheck(){}}
    onEntering={function noRefCheck(){}}
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <Card>
      <CardBody>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </CardBody>
    </Card>
  </Collapse>
</div>

                        </Fragment>
)
}
export default ToggleExample;
