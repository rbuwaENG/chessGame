import { Color, Coords, FENChar } from "../models";
import { Pices } from "./pices";

export class Pawn extends Pices {
    private _hasMoved = false;
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        { x: 1, y: 0 } ,
        { x:2 , y: 0 } ,
        {x:1,y:1},
        {x:1,y:-1}
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        if(pieceColor == Color.Black){
            this.setBlackPawnDirections();
        }
        this._FENChar = pieceColor === Color.White ? FENChar.WhitePawn : FENChar.BlackPawn;
    }

    private setBlackPawnDirections():void{
       this._directions = this._directions.map(({x,y})=>({x:-1*x,y}))
    }

    public get hasMoved():boolean{
        return this._hasMoved;
    }

    public set hasMoved(_){
       this._hasMoved = true;
       this._directions = [
        { x: 1, y: 0 } ,
        {x:1,y:1},
        {x:1,y:-1}
    ];
    if(this.pieceColor == Color.Black){
        this.setBlackPawnDirections();
    }
    }
}
