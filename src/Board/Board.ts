import Cell from "../Cell/Cell";

/**
 * Manage the board of the game
 */
export default class Board {

    /**
     * Our board
     *
     * @private
     */
    private readonly _board: any[];

    /**
     * Size of our board
     *
     * @private
     */
    private readonly _size: number;

    constructor(size: number) {
        this._size = size;
        this._board = new Array(size);
        this.createCells();
    }

    /**
     * Get our board
     */
    public get board() {
        return this._board;
    }

    /**
     * Get size of our board
     *
     * @private
     */
    private get size(): number {
        return this._size;
    }

    /**
     * Get our cells
     */
    public getCells(): Cell[] {
        return this.board;
    }

    /**
     * Get inactive cells
     */
    public getInactiveCells(): Cell[] {
        let inactiveCells = [];

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (!this.board[i][j].isActive) inactiveCells.push(this.board[i][j]);
            }
        }

        return inactiveCells;
    }

    /**
     * Get active cells
     */
    public getActiveCells(): Cell[] {
        let activeCells = [];

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j].isActive) activeCells.push(this.board[i][j]);
            }
        }

        return activeCells;
    }

    /**
     * Get the Cell at a certain position in the board
     *
     * @param col
     * @param row
     */
    public getCell(col: number, row: number): Cell {
        return this.board[col][row];
    }

    /**
     * Create cells
     *
     * @private
     */
    private createCells(): void {
        for (let i = 0; i < this._board.length; i++) {
            this._board[i] = new Array(this.size);
        }

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                this.board[i][j] = new Cell();
            }
        }
    }

}