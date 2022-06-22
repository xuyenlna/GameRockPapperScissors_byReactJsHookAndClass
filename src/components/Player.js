import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { placeABet } from "../redux/RockPaperScissorsGameReducer";

// functional component
export default function Player() {
  const dispatch = useDispatch();
  const gameArray = useSelector((state) => state.game.gameArray);
  return (
    <div className="col-4 player">
      <div className="thinking playerThinking">
        <img
          src={gameArray.find((item) => item.status === true).src}
          alt="player's choice"
        ></img>
      </div>
      <div className="speech-bubble"></div>
      <img
        className="playerImage"
        src="./assets/img/player.png"
        alt="player"
      ></img>
      <div className="rockPaperScissors">
        {gameArray.map((item, index) => {
          return (
            <button
              class="button"
              key={index}
              onClick={() => {
                dispatch(placeABet(item.id));
              }}
            >
              <img src={item.src} alt=""></img>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// import React, { Component } from "react";
// import "../index.css";
// import { connect } from "react-redux";
// import { placeABet } from "../redux/RockPaperScissorsGameReducer";

// class Player extends Component {
//   render() {
//     return (
//       <div className="col-4 player">
//         <div className="thinking playerThinking">
//           <img
//             src={this.props.gameArray.find((item) => item.status === true).src}
//             alt="player's choice"
//           ></img>
//         </div>
//         <div className="speech-bubble"></div>
//         <img
//           className="playerImage"
//           src="./assets/img/player.png"
//           alt="player"
//         ></img>
//         <div className="rockPaperScissors">
//           {this.props.gameArray.map((item, index) => {
//             return (
//               <button
//                 class="button"
//                 key={index}
//                 onClick={() => {
//                   this.props.dispatch(placeABet(item.id));
//                 }}
//               >
//                 <img src={item.src} alt=""></img>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     gameArray: state.game.gameArray,
//   };
// };

// export default connect(mapStateToProps)(Player);
