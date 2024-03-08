import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveGame from './components/ActiveGame'
import ActiveGameInfo from './types/ActiveGameInfo';
import { fetchActiveGames } from './server/RestApi';
import React from 'react';

import { useState, useEffect } from 'react';

function Home() {

    const [ activeGamesInfo, setActiveGamesInfo ] = useState<ActiveGameInfo[]>([]);

    const listActiveGames = activeGamesInfo.map(activeGameInfo =>
        <ListGroup.Item>
            <ActiveGame
                gameId={activeGameInfo.gameId}
                maxPlayers={activeGameInfo.maxPlayers}
                currPlayers={activeGameInfo.currPlayers}
            />
        </ListGroup.Item>
    );

    useEffect(() => {
        fetchActiveGames(setActiveGamesInfo);
    });

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Dinosaur Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>       
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <h2>Active Games</h2>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <ListGroup>
                            {listActiveGames}
                        </ListGroup>  
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <h2>New Game</h2>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <Button variant="primary">Start New Game</Button>                        
                    </Col>
                    <Col></Col>
                </Row>
            </Container>        
        </>
    );
}

export default Home;