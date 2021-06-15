import Player from "../Players/Player";
import CellHaveOwnerException from "./Exceptions/CellHaveOwnerException";

/**
 * Manage a cell in the game
 */
export default class Cell {

    /**
     * Owner of the cell
     *
     * @private
     */
    private _owner: Player;

    /**
     * Get the owner
     *
     * @private
     */
    public get owner(): Player | null {
        if (!this._owner) return null;
        return this._owner;
    }


    /**
     * Set an owner
     *
     * @param owner
     * @private
     */
    public set owner(owner: Player) {
        if (this._owner) throw new CellHaveOwnerException('Owner already exists.');
        this._owner = owner;
    }

}