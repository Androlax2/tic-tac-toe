import Board from "./Board/Board";
import Player from "./Players/Player";
import Human from "./Players/Types/Human";
import Players from "./Players/Players";
import Dispatcher from "./Events/Dispatcher";

/**
 * Manage the game
 */
class TicTacToe extends Dispatcher {

    /**
     * Players of our game
     *
     * @private
     */
    private readonly _players: Players;

    /**
     * Board of the game
     *
     * @private
     */
    private readonly _board: Board;

    /**
     * Game is over ?
     *
     * @private
     */
    private _isOver: boolean = false;

    /**
     * Number of turn in the game
     *
     * @private
     */
    private _turn: number;

    /**
     * Winner of the game
     *
     * @private
     */
    private _winner: Player | null;

    /**
     * Init the tic tac toe game
     *
     * @param board
     * @param players
     */
    constructor(board: Board, players: Player[]) {
        super(['boardUpdated']);
        this._board = board;
        this._players = new Players();
        this._turn = 0;

        players.forEach(player => this.players.add(player));
        this.players.shuffle();
    }

    /**
     * Get our board
     *
     * @private
     */
    public get board(): Board {
        return this._board;
    }

    /**
     * Is first turn
     */
    public get isFirstTurn(): boolean {
        return this._turn === 0;
    }

    /**
     * Get the turn
     */
    public get turn(): number {
        return this._turn;
    }

    /**
     * Is the game over
     */
    public get isOver(): boolean {
        return this._isOver;
    }

    /**
     * Get the winner
     */
    public get winner(): Player {
        return this._winner;
    }

    /**
     * Get our players
     *
     * @private
     */
    private get players(): Players {
        return this._players;
    }

    /**
     * Start our game
     */
    public startGame(): void {
        if (this.isFirstTurn) this.players.get(0).isActive = true;
    }

    /**
     * Play at a cell
     * Return false if the cell is active
     *
     * @param col
     * @param row
     */
    public play(col: number, row: number): false | void {
        const cell = this.board.getCell(col, row);
        if (cell.owner) return;

        const activePlayer = this.getActivePlayer();
        this._turn++;

        cell.owner = activePlayer;
        this.switchPlayer();
        this.emit('boardUpdated', {
            col,
            row
        });

        if (this.canBeOver()) {
            console.log('ok');
        }
    }

    /**
     * Get active player
     *
     * @private
     */
    public getActivePlayer(): Player {
        return this.players.getActive();
    }

    private isDraw(): boolean {

    }

    private haveWinner(): boolean {

    }

    /**
     * Switch player, next player in the players collection will be the next active player
     * Else, if it is the last player in the players collection,
     * we active the first one in the players collection
     *
     * @private
     */
    private switchPlayer(): void {
        const activePlayer: Player = this.getActivePlayer();
        activePlayer.isActive = false;

        let playerIndex: number = this.players.getIndexOf(activePlayer);
        if (playerIndex === (this.players.length() - 1)) {
            playerIndex = 0;
        } else {
            playerIndex++;
        }
        this.players.get(playerIndex).isActive = true;
    }

    /**
     * The game could be finished
     *
     * @private
     */
    private canBeOver(): boolean {
        return this.turn >= 3;
    }

    private reset(): void {

    }

}

(window as any).TicTacToe = TicTacToe;
(window as any).Board = Board;
(window as any).Human = Human;