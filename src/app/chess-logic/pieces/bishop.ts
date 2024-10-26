import { Color, Coords, FENChar } from "../models";
import { Pices } from "./pices";

export class Bishop extends Pices {
       protected override _FENChar: FENChar;
       protected override _directions: Coords[] = [
            {x:1,y:1},
            {x:1,y:-1},
            {x:-1,y:1},
            {x:-1,y:-1}
        ];
       
       constructor(private pieceColor:Color){
         super(pieceColor);
         this._FENChar  = pieceColor == Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;

       } 
        

}