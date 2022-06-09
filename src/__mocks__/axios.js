
const mockResponse = [
    {
        "id": 109596,
        "first_release_date": 1540944000000,
        "name": "SEGA AGES Phantasy Star",
        "rating": 90,
        "summary": "The classic galactical adventure arrives on Nintendo Switch! \n \nThe tyrant Lassic rules the cosmos, and it is up to you to defeat his evil reign. Witness the revival of this defining RPG in SEGA AGES Phantasy Star. \n \nTake advantage of the new dungeon map display and the acclaimed “Ages Mode” as you traverse tricky dungeon mazes and battle ferocious 8-bit beasts. Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit is sure to find a home in the hearts of old and new fans alike."
    }
];


export default {
    get: jest.fn().mockResolvedValue(mockResponse) 
}