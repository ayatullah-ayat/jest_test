import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FilterResult from '../components/FilterResult'
import GameContent from '../components/GameContent'
import styles from '../../src/assets/css/pages/Home.module.css';
import useFetch from '../Hooks/useFetch';

const Home = () => {

    const { data, loading, error } = useFetch("https://public.connectnow.org.uk/applicant-test/");

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
                                !loading ? (
                                    data ? data.map((item, index)=>(
                                        <GameContent key={index} game={item}/>
                                    ))
                                    : <p>No Content Found </p>
                                )
                                : (
                                  <p>Loading ... </p>  
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home