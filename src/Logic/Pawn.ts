import ChessPiece from "./ChessPiece";
import { TeamEnum } from "./Common";


export default class Pawn extends ChessPiece{
    constructor(id: string, iconPath: string, team: TeamEnum){
        super(id, iconPath, team)
    }
}