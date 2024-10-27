import { Color, FENChar } from "./models";
import { Queen } from "./pieces/Queen";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Pawn } from "./pieces/pawn";
import { Pices } from "./pieces/pices";
import { Rook } from "./pieces/rook";

export class ChessBoard{

    private chessBorad:(Pices|null)[][];
    constructor(){
        this.chessBorad=[
            [new Rook(Color.White),new Knight(Color.White),new Bishop(Color.White),new King(Color.White),new Queen(Color.White),new Bishop(Color.White),new Knight(Color.White),new Rook(Color.White)],
            [new Pawn(Color.White),new Pawn(Color.White),new Pawn(Color.White),new Pawn(Color.White),new Pawn(Color.White),new Pawn(Color.White),new Pawn(Color.White),new Pawn(Color.White)],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [new Pawn(Color.Black),new Pawn(Color.Black),new Pawn(Color.Black),new Pawn(Color.Black),new Pawn(Color.Black),new Pawn(Color.Black),new Pawn(Color.Black),new Pawn(Color.Black)],
            [new Rook(Color.Black),new Knight(Color.Black),new Bishop(Color.Black),new King(Color.Black),new Queen(Color.Black),new Bishop(Color.Black),new Knight(Color.Black),new Rook(Color.Black)],
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
            return true;
        }
        else{
            return false;
        }
    }

}
