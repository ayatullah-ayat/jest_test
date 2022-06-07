import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "./../assets/css/components/Nav.module.css";

const Nav = () => {
  return (
      <Container>
        <div className={styles.navWrapper}>
            <ul>
                <li><Link to="/">Video Games</Link> </li>
                <li><Link to="/contact">Contact</Link> </li>
            </ul>
        </div>
    </Container>
  )
}

export default Nav