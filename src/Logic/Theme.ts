import { Color, ColorSelection } from "./Common";

export default class Theme {
    public readonly boardStyle: ColorSelection
    public readonly piecesStyle: ColorSelection
    constructor(boardStyle: ColorSelection = ColorSelection.BlackWhite, piecesStyle: ColorSelection = ColorSelection.BlackWhite) {
        this.boardStyle = boardStyle
        this.piecesStyle = piecesStyle
    }

    public getHomePieceColor = () => {
        return this.piecesStyle == ColorSelection.BlackWhite ? Color.White : Color.Gold;
    }

    public getEnemyPieceColor = () => {
        return this.piecesStyle == ColorSelection.RedGold ? Color.White : Color.Gold;
    }

    public getHomeBoradColor = () => {
        return this.boardStyle == ColorSelection.BlackWhite ? Color.White : Color.Gold;
    }

    public getEnemyBoardColor = () => {
        return this.boardStyle == ColorSelection.RedGold ? Color.White : Color.Gold;
    }
}