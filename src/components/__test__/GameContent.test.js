import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import GameContent from "../GameContent";

jest.mock('axios');

const games = [
    {
        "id": 109596,
        "first_release_date": 1540944000000,
        "name": "SEGA AGES Phantasy Star",
        "rating": 90,
        "summary": "The classic galactical adventure arrives on Nintendo Switch! \n \nThe tyrant Lassic rules the cosmos, and it is up to you to defeat his evil reign. Witness the revival of this defining RPG in SEGA AGES Phantasy Star. \n \nTake advantage of the new dungeon map display and the acclaimed “Ages Mode” as you traverse tricky dungeon mazes and battle ferocious 8-bit beasts. Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit is sure to find a home in the hearts of old and new fans alike."
    },
    {
        "id": 1095926,
        "first_release_date": 1542944000000,
        "name": "starddss",
        "rating": 80,
        "summary": "The arrives on Nintendo Switch! \n \nThe tyrant Lassic rules the cosmos, and it is up to you to defeat his evil reign. Witness the revival of this defining RPG in SEGA AGES Phantasy Star. \n \nTake advantage of the new dungeon map display and the acclaimed “Ages Mode” as you traverse tricky dungeon mazes and battle ferocious 8-bit beasts. Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit is sure to find a home in the hearts of old and new fans alike."
    }
];

const MockGameContent = ({index, game}) => {
    return (<BrowserRouter>
        <GameContent index={index} game={game}/>
    </BrowserRouter>)
}

describe('GameContent', () => {

    it('Fetch All Game Items', async () => {
        axios.get.mockResolvedValue({ data: games });    
        games.forEach((game, index) => {
            render(<MockGameContent index={index} game={game} />);
        });
        const gameList = await waitFor(() => screen.findAllByTestId('game-item'));
        expect(gameList).toHaveLength(2);
    });

    
    
});
