import Player from "./Player";

/**
 * Players will manage collection of player
 */
export default class Players {

    /**
     * Players
     *
     * @private
     */
    private readonly _players: Player[];

    constructor() {
        this._players = [];
    }

    /**
     * Get our players
     *
     * @private
     */
    public get players(): Player[] {
        return this._players;
    }

    /**
     * Get all players
     *
     * @private
     */
    public get all(): Player[] {
        return this.players;
    }

    /**
     * Get a player
     *
     * @param index
     */
    public get(index: number): Player {
        return this.players[index];
    }

    /**
     * Get length of our array
     */
    public length(): number {
        return this.players.length;
    }

    /**
     * Get index of our player
     *
     * @param player
     */
    public getIndexOf(player: Player): number {
        return this.players.findIndex(playerArray => playerArray === player);
    }

    /**
     * Add a player in our players collection
     *
     * @param player the player
     * @private
     */
    public add(player: Player): void {
        if (this.tokenExists(player.token)) throw new Error(`The token ${player.token} already exists in our players collection.`);
        this.players.push(player);
    }

    /**
     * Shuffle our array
     */
    public shuffle(): void {
        this.players.sort(() => 0.5 - Math.random());
    }

    /**
     * Get active player
     */
    public getActive(): Player | null {
        const activePlayer = this.players.filter(player => player.isActive);
        if (!activePlayer) return null;
        return activePlayer[0];
    }

    /**
     * Verify if the token already exists
     *
     * @param token to verify
     * @private
     */
    private tokenExists(token: string): boolean {
        return this.players.filter(player => player.token === token).length !== 0;
    }

}