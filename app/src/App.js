import React, { Component } from 'react';
import { Grid, Row, Col , FormGroup, ControlLabel, FormControl, HelpBlock,Button} from 'react-bootstrap';
import './App.css';
import {
  Link
} from 'react-router-dom'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class App extends Component {
  render() {
    return (
      <div className="login-backround">
      <Grid>
      <Row className="show-grid">
        <Col xs={4} xsOffset={4} className="company-logo">
        </Col>
      </Row>
        <Row className="show-grid">
            <Col xs={4} xsOffset={4} className="login-panel">
              <form className="form-panel ">
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="User Name"
                  placeholder="User Name"
                />
                <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Password"/>
                <Link to="/dashboard"><Button type="submit">Login </Button></Link>
              </form>
            </Col>
          </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
