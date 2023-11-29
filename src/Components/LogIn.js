import React, { Fragment } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <Fragment>
        <Container className={styles.container6}>
          <Row>
            <Col></Col>
            <Col>
              <Button className={styles.button2} variant="secondary" size="lg">
                Log In
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Row>
          <Col></Col>
          <Col>
            <Container>
              <Form>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Usernamel" />
                <Form.Label>Email Address</Form.Label>
                <Form.Control placeholder="Enter Email" />
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Enter password" type="password" />
                <div>
                  <Button type="submit"> Login </Button>{" "}
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

export default Login;
