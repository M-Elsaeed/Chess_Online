import { TeamEnum } from "./Common";
export default class ChessPiece {
    public id: string
    public iconPath: string
    public team: TeamEnum
    constructor(id: string, iconPath: string, team: TeamEnum) {
        this.id = id
        this.iconPath = iconPath;
        this.team = team
    }
}