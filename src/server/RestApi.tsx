import ActiveGameInfo from '../types/ActiveGameInfo';

const API_URL: string = '';

export async function fetchActiveGames(setActiveGames: React.Dispatch<React.SetStateAction<ActiveGameInfo[]>>) {;
    // TODO replace with API call

    const testActiveGames: ActiveGameInfo[] = [
        {gameId: 'test1', maxPlayers: 2, currPlayers: 0},
        {gameId: 'test2', maxPlayers: 3, currPlayers: 1},
    ];
    setActiveGames(testActiveGames);
}