import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FilterResult from '../components/FilterResult'
import GameContent from '../components/GameContent'
import styles from '../../src/assets/css/pages/Home.module.css';

const Home = () => {
    const gameContent = [1,2,3,4];

    return (
        <div>
            <Container className={styles.HomeContainer}>
                <Row>
                    <Col md={4}>
                        <div className={styles.FilterResultWrap}>
                            <FilterResult />
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.GameContentWrap}>
                            {
                                gameContent && gameContent.map((item, index)=>(
                                    <GameContent key={index}/>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home