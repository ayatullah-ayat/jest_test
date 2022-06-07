import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../src/assets/css/pages/Contact.module.css';
import ContactForm from './../components/ContactForm';

const Contact = () => {
  return (
    <Container>
        <Row>
          <Col md={2}></Col>
            <Col md={8}>
                <div className={styles.ContactContainer}>
                    <ContactForm />
                </div>
            </Col>
          <Col md={2}></Col>
        </Row>
    </Container>
  )
}

export default Contact