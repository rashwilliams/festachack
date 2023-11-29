import React, { Fragment } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <>
      <Fragment>
        <Container className={styles.container}>
          <Row>
            <Col></Col>
            <Col>
              {/* <div>
                  <h1>Sign Up</h1>
                </div> */}
              <Button className={styles.button2} variant="secondary" size="lg">
                Sign Up
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>

        <Row>
          <Col></Col>
          <Col>
            <Container>
              <Form onSubmit>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter First Name" />
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter Last Name" />
                <Form.Label>Country</Form.Label>
                <Form.Control placeholder="Enter Country from the list" />
                <Form.Label>Phonenumber</Form.Label>
                <Form.Control placeholder="Enter Phonenumber" />
                <Form.Label>username</Form.Label>
                <Form.Control placeholder="Enter Username" />
                <Form.Label>Email Address</Form.Label>
                <Form.Control placeholder="Enter Email" />
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Enter Password" type="password" />
                <div>
                  <Button type="submit"></Button>
                </div>
              </Form>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Fragment>
    </>
  );
};

export default Register;
