import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "./../assets/css/components/Nav.module.css";

const Nav = () => {
  return (
      <Container>
        <div className={styles.navWrapper}>
            <ul data-testid="nav-container">
                <li><Link to="/" data-testid="nav-link">Video Games</Link> </li>
                <li><Link to="/contact" data-testid="nav-link">Contact</Link> </li>
            </ul>
        </div>
    </Container>
  )
}

export default Nav