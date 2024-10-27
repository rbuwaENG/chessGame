import { Color, Coords, FENChar } from "../models";
import { Pices } from "./pices";

export class Knight extends Pices{
        protected override _FENChar: FENChar;
        protected override _directions: Coords[] = [
            {x:1,y:2},
            {x:-1,y:2},
            {x:2,y:1},
            {x:2,y:-1},
            {x:1,y:-2},
            {x:-1,y:-2},
            {x:-2,y:1},
            {x:-2,y:-1},
        ];

        constructor(private piceColor:Color){
            super(piceColor);
            this._FENChar = piceColor == Color.White ? FENChar.WhiteKnight : FENChar.BlackKnight;
        }




}