import { Color, Coords, FENChar } from "../models";
import { Pices } from "./pices";

export class King extends Pices {
    private _hasMoved = false;
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: -1, y: 1 },
        { x: -1, y: 0 },
        { x: -1, y: -1 },
        { x: 0, y: -1 },
        { x: 1, y: -1 }
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteKing : FENChar.BlackKing;
    }

    public get hasMoved():boolean{
        return this._hasMoved;
    }

    public set hasMoved(_){
       this._hasMoved = true;
    }
}

