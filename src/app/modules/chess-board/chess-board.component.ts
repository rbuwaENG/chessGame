import { Component } from '@angular/core';
import { ChessBoard } from 'src/app/chess-logic/chessboard';
import { FENChar, piecePath } from 'src/app/chess-logic/models';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent {
  private chessboard = new ChessBoard();
  public chessboardview:(FENChar| null)[][] = this.chessboard.chessBoardView;

  public pieceImagePath = piecePath ;
  public isSquareDark(x:number,y:number):boolean{
    return ChessBoard.isSquareDark(x,y);
  }

}
