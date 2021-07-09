import React from 'react';

class Game extends React.Component 
{
        render()
        {
            return(
                <React.Fragment>
                     <Board />
                </React.Fragment>
            );
        }
}

class Board extends React.Component 
{
    constructor(props)
    {
       super(props);
       this.state = {squares: Array(9).fill(null), xIsNext: true};
    }

    renderSquare(i)
    {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    handleClick = (i) => {
        const squares = this.state.squares.slice();

        if(CalculateWinner(squares) || squares[i])
        {
            return;
        }

        squares[i] = this.state.isNext ? 'X' : 'O';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    }

    render()
    {
        const winner =  CalculateWinner(this.state.squares);
        let status;

        if(winner)
        {
            status = 'winner: ' + winner;
        }
        else 
        {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

        }

        return(
                 <div>
                     <div>{status}</div>
                     <div>
                         {this.renderSquare(1)}
                         {this.renderSquare(2)}
                         {this.renderSquare(3)}
                     </div>

                     <div>
                     {this.renderSquare(4)}
                     {this.renderSquare(5)}
                     {this.renderSquare(6)}
                     </div>

                     <div>
                     {this.renderSquare(7)}
                     {this.renderSquare(8)}
                     {this.renderSquare(9)}
                     </div>
                 </div>
        );
    }
}

function Square(props)
{
    return(
        <button className="square" onClick={props.onClick}>
                {props.value}
        </button>
    );
}

function CalculateWinner(squares)
{
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(let i=0; i<lines.length; i++)
  {
      const [a,b,c] = lines[i];

      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      {
          return squares[a];
      }
  }
  return null;

}

export default Game;