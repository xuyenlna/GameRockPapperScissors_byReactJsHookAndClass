import React from "react";
import { useSelector } from "react-redux";
import "../index.css";

export default function Computer() {
  const computerPlayer = useSelector((state) => state.game.computerPlayer);
  return (
    <div className="col-4 playerComputer">
      <div className="thinking computerThinking">
        <img src={computerPlayer.src} alt="computer's choice"></img>
      </div>
      <div className="speech-bubble"></div>
      <img
        className="playerImage"
        src="./assets/img/playerComputer.png"
        alt="computer"
      ></img>
    </div>
  );
}

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "../index.css";

// class Computer extends Component {
//   render() {
//     return (
//       <div className="col-4 playerComputer">
//         <div className="thinking computerThinking">
//           <img
//             src={this.props.computerPlayer.src}
//             alt="computer's choice"
//           ></img>
//         </div>
//         <div className="speech-bubble"></div>
//         <img
//           className="playerImage"
//           src="./assets/img/playerComputer.png"
//           alt="computer"
//         ></img>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     computerPlayer: state.game.computerPlayer,
//   };
// };

// export default connect(mapStateToProps)(Computer);
