/**
 * Player reference to a player (Computer or Human)
 */
export default abstract class Player {

    /**
     * Is the player a computer ?
     *
     * @protected
     */
    protected abstract _isComputer: boolean;

    /**
     * Name of the player
     *
     * @private
     */
    private readonly _name: string;

    /**
     * Is active
     *
     * @private
     */
    private _active: boolean = false;

    /**
     * Token of the player
     *
     * @private
     */
    private readonly _token: string;

    /**
     * Construct a player
     *
     * @param name
     * @param token
     */
    constructor(name: string, token: string) {
        this._name = name;
        this._token = token;
    }

    /**
     * Get Token
     */
    public get token(): string {
        return this._token;
    }

    /**
     * Is the player active ?
     */
    public get isActive(): boolean {
        return this._active;
    }

    /**
     * Set the player to active
     *
     * @param isActive
     */
    public set isActive(isActive: boolean) {
        this._active = isActive;
    }

    /**
     * Player is a computer ?
     */
    public get isComputer(): boolean {
        return this._isComputer;
    }

    /**
     * Get name
     */
    public get name(): string {
        return this._name;
    }

}