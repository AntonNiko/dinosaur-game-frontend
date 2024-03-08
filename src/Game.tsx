import { useParams } from "react-router-dom";

function Game() {
    const { gameId } = useParams();

    return (
        <>
        <h1>{gameId}</h1>
        </>
    )
}

export default Game;