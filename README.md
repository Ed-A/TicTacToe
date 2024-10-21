# Tic-Tac-Toe Web Game

This is a simple implementation of the classic Tic-Tac-Toe game, created using basic HTML, CSS, and JavaScript. The game allows two players to play against each other on the same device.

## Features
- Classic 3x3 Tic-Tac-Toe board.
- Two players take turns to place their mark ('X' and 'O').
- The game automatically checks for wins (horizontal, vertical, and diagonal).
- Displays a message for a win or draw.
- Option to reset the game and play again.

## How to Play
1. Open the webpage.
2. Players take turns by clicking on the empty cells of the grid.
3. The first player to get three of their marks in a row (vertically, horizontally, or diagonally) wins.
4. If all cells are filled and no player has won, the game ends in a draw.
5. Click the "Reload" button to restart the game.

## Files
- `index.html`: The main HTML structure for the game.
- `style.css`: Contains the styling for the game board and display.
- `script.js`: Handles the game logic (turns, win conditions, and game reset).
- `X.png`: PNG format image for X piece.
- `O.png`: PNG format image for O piece.

## How it Works
- Each player's move is handled through a click event, and the game board is updated in real-time.
- Win conditions (horizontal, vertical, diagonal) are checked after each move.
- If a player wins or the game ends in a draw, the game stops and displays the result.
- The game is reset when the reload button is clicked.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/tictactoe.git
    ```
2. Open `index.html` in your browser to start playing the game.

## Contributions
Feel free to open issues or submit pull requests if you'd like to improve the project!

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
