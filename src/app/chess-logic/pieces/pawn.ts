import { Color, Coords, FENChar } from "../models";
import { Pices } from "./pices";

export class Pawn extends Pices {
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 0 } ,
        { x:2 , y: 0 } ,
        {x:1,y:1},
        {x:1,y:-1}
    ];

    constructor(pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhitePawn : FENChar.BlackPawn;
    }
}
