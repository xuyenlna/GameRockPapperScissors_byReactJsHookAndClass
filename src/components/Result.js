import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { playGame } from "../redux/RockPaperScissorsGameReducer";

export default function Result() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.game.result);
  const numberOfWin = useSelector((state) => state.game.numberOfWin);
  const totalPlayTurn = useSelector((state) => state.game.totalPlayTurn);
  return (
    <div className="col-4 result text-white ">
      <h1 id="informResult">{result}</h1>
      <div id="numbersOfWin">
        Number of Win-game: <span>{numberOfWin}</span>
      </div>
      <div id="totalGames">
        Total of play turns: <span>{totalPlayTurn}</span>
      </div>
      <button
        className="btn btn-success mt-3 playButton"
        onClick={() => dispatch(playGame())}
      >
        PLAY GAME
      </button>
      <div className="inform hide">Please place a bet!!!</div>
    </div>
  );
}

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "../index.css";
// import { playGame } from "../redux/RockPaperScissorsGameReducer";

// class Result extends Component {
//   render() {
//     return (
//       <div className="col-4 result text-white ">
//         <h1 id="informResult">{this.props.result}</h1>
//         <div id="numbersOfWin">
//           Number of Win-game: <span>{this.props.numberOfWin}</span>
//         </div>
//         <div id="totalGames">
//           Total of play turns: <span>{this.props.totalPlayTurn}</span>
//         </div>
//         <button
//           className="btn btn-success mt-3 playButton"
//           onClick={() => {
//             this.props.dispatch(playGame());
//           }}
//         >
//           PLAY GAME
//         </button>
//         <div className="inform hide">Please place a bet!!!</div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     result: state.game.result,
//     numberOfWin: state.game.numberOfWin,
//     totalPlayTurn: state.game.totalPlayTurn,
//   };
// };

// export default connect(mapStateToProps)(Result);
