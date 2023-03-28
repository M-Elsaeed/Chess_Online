import { genUID, TeamEnum } from "./Common";
import Pawn from "./Pawn";
import Theme from "./Theme";

export default class Match {
    private board
    private pieces
    private theme = new Theme()
    constructor() {
        // Chess board initialized with undefined = empty 1st dimension: is row 2nd is col.
        this.board = new Array(8)
        this.board.forEach(r => r = new Array(8))

        // Fill the board
        this.pieces = new Array(32);
        for (let index = 0; index < 8; index++) {
            this.pieces.push(new Pawn(genUID(), `../../public/pawn_${this.theme.getHomePieceColor()}.svg`, TeamEnum.Home));
            this.pieces.push(new Pawn(genUID(), `../../public/pawn_${this.theme.getEnemyPieceColor()}.svg`, TeamEnum.Enemy));
        }
    }
}