import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    Email: "",
    password: "",
    
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    EmailErr: null,
    passwordErr: null,
   
  });
  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "Email":
        setFormValues({
          ...formValues,
          Email: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          EmailErr:
          event.target.value.length === 0
          ? "This field is required"
          : !/^\S+@\S+\.\S+$/.test(event.target.value)
          ? "Enter a vaild email"
          : null,
        });
        break;

      case "password":
        setFormValues({
          ...formValues,
          password: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          passwordErr:
          event.target.value.length === 0
          ? "This field is required"
          : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(event.target.value)
          ? "input at least one upper&&lower case&&special char"
          : null,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    console.log('first');
    e.preventDefault();
    if (
      !formValuesErrors.EmailErr &&
      !formValuesErrors.passwordErr 
      
    ) {
      console.log(formValues);
    }
  };

  const togglePassword = ()=>{
    setShowPassword(!showPassword);
  }
  return (
    
      <Form className="w-50 mx-auto"  onSubmit={(e) => handleSubmitForm(e)}>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="Email"
          value={formValues.Email}
          onChange={(e) => handleFormChange(e)}
           placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          {formValuesErrors.EmailErr && (
          <div id="EmailHelp" className="form-text text-danger">
            {formValuesErrors.EmailErr}
          </div>
        )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <div className="d-flex align-items-center">
          
          <Form.Control type={showPassword? "text": "password"} name="password"
          value={formValues.password}
          onChange={(e) => handleFormChange(e)}
           placeholder="Password" />
           {formValuesErrors.passwordErr && (
          <div id="passwordHelp" className="form-text text-danger">
            {formValuesErrors.passwordErr}
          </div>
        )}
        <span onClick={togglePassword}>
          {showPassword &&(
            <AiFillEyeInvisible color="royalblue" size={25} />
            
          )}
          {!showPassword &&(
            <AiFillEye color="royalblue" size={25} />
            
          )}
        </span>

          </div>
        
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
  );
}
