import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function ActiveGame(props: {gameId: string, maxPlayers: number, currPlayers: number}) {
    return (
        <Row>
            <Col>
                {props.gameId}
            </Col>
            <Col>
                {props.maxPlayers}
            </Col>
            <Col>
                {props.currPlayers}
            </Col>
            <Col>
                <Button variant="success">Join</Button>
            </Col>
        </Row>
    )
}

export default ActiveGame;