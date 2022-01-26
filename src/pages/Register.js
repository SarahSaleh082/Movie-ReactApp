import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

export default function Register() {
  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [formValuesErrors, setFormValuesErrors] = useState({
    NameErr: null,
    EmailErr: null,
    userNameErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
  });
  const handleFormChange = (event) => {
    switch (event.target.name) {
    case "Name":
      setFormValues({
        ...formValues,
        Name: event.target.value,
      });
      setFormValuesErrors({
        ...formValuesErrors,
        NameErr:
          event.target.value.length === 0
            ? "This field is required"
            : null,
      });
      break;
      case "userName":
        setFormValues({
          ...formValues,
          userName: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          userNameErr:
          event.target.value.length === 0
          ? "This field is required"
          : event.target.value.includes(' ')
          ? "Enter a vaild username without spaces"
          : null,
        });
        break;
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
      
      case "confirmPassword":
        setFormValues({
          ...formValues,
          confirmPassword: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          confirmPasswordErr:
            event.target.value.length === 0
              
              ? "This field is required"
              
              :event.target.value !== formValues.password?
              `password doesn't match`:
               null,
        });
        break;
      default:
        break;
    }
  };
  const handleSubmitForm = (e) => {
    // console.log('first');
    e.preventDefault();
    if (
      !formValuesErrors.NameErr &&
      !formValuesErrors.userNameErr &&
      !formValuesErrors.EmailErr &&
      !formValuesErrors.passwordErr&&
      !formValuesErrors.confirmPasswordErr 
      
    ) {
      console.log(formValues);
    }
  };
  return <Form className="w-50 mx-auto" onSubmit={(e) => handleSubmitForm(e)}>
    <h1>Register</h1>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="Name"
    value={formValues.Name}
    onChange={(e) => handleFormChange(e)}
     placeholder="Enter Name" />
    <Form.Text className="text-muted">
      We'll never share your name with anyone else.
    </Form.Text>
    {formValuesErrors.NameErr && (
    <div id="NameHelp" className="form-text text-danger">
      {formValuesErrors.NameErr}
    </div>
  )}
  </Form.Group>

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

  <Form.Group className="mb-3" controlId="formBasicuserName">
    <Form.Label>UserName</Form.Label>
    <Form.Control type="text" name="userName"
    value={formValues.userName}
    onChange={(e) => handleFormChange(e)}
     placeholder="Enter userName" />
    <Form.Text className="text-muted">
      We'll never share your username with anyone else.
    </Form.Text>
    {formValuesErrors.userNameErr && (
    <div id="userNameHelp" className="form-text text-danger">
      {formValuesErrors.userNameErr}
    </div>
  )}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password"
    value={formValues.password}
    onChange={(e) => handleFormChange(e)}
     placeholder="Password" />
     {formValuesErrors.passwordErr && (
    <div id="passwordHelp" className="form-text text-danger">
      {formValuesErrors.passwordErr}
    </div>
  )}

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    <Form.Label>confirmPassword</Form.Label>
    <Form.Control type="password" name="confirmPassword"
    value={formValues.confirmPassword}
    onChange={(e) => handleFormChange(e)}
     placeholder="confirmPassword" />
     {formValuesErrors.confirmPasswordErr && (
    <div id="confirmPasswordHelp" className="form-text text-danger">
      {formValuesErrors.confirmPasswordErr}
    </div>
  )}

  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;
}
