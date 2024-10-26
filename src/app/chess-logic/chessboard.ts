import { FENChar } from "./models";
import { Pices } from "./pieces/pices";

export class ChessBoard{

    private chessBorad:(Pices|null)[][];
    constructor(){
        this.chessBorad=[
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
        ]
    }

    public get chessBoardView():(FENChar|null)[][]{
        return this.chessBorad.map(
            row => {
                return row.map(piece => piece instanceof Pices ? piece.FENChar : null);
            }
        );
    }

    public static isSquareDark(x:number,y:number):boolean{
        if((x+y)%2 == 0){
            return false;
        }
        else{
            return true;
        }
    }

}
