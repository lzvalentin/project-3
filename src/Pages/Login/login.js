import React from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

class Login extends React.Component{
  state={
    email:'',
    pwd:''
  }
  handleChange = (e)=>{
    const {name,value} = e.target
    this.setState({[name]:value})
  }
  handleSubmit = (e) =>{
    e.preventDefault()
  }

  render() {
      return (
          <div className="login">
            <Form onSubmit= {this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required onChange={this.handleChange}/>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="pwd" type="password" placeholder="Password" required onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button onSubmit={this.handleSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </div>
      )
    }
}
export default Login;