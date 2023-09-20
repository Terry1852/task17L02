import React, { Component } from "react";
import Help from "./help";
import { randomWord } from "../Store/dictionary";
import StartButton from "./StartButton"
import '../Store/Hangman.css';
import image4 from "../Images/state4.GIF";
import image5 from "../Images/state5.GIF";
import image6 from "../Images/state6.GIF";
import image7 from "../Images/state7.GIF";
import image8 from "../Images/state8.GIF";
import image9 from "../Images/state9.GIF";
import image10 from "../Images/state10.gif";
import image11 from "../Images/state11.GIF";

class Hangman extends Component {
    static defaultProps = {
        //The number of guessing a user has.
        maxWrong:7,
        images: [image4, image5, image6, image7, image8, image9, image10, image11 ]

    };
    

    constructor(props) {
        super(props);
        this.state = {gameStarted: false,
        };
        this.state = {
            noOfWrong: 0, 
            guessed: new Set(),
            answer: randomWord(),
        };
        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this);

    }

    //This function is for restarting the game.
    reset() {
        this.setState({
            noOfWrong: 0, 
            guessed: new Set(),
            answer: randomWord(),
        });

    }

    guessedWord() {
        return this.state.answer.split("")
        .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
    }

    handleGuess(evt) {
        let letter = evt.target.value;
        this.setState((st) => ({
            guessed: st.guessed.add(letter),
            noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
        }))
    }

    generateKeypad() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
            <button
            key={letter} 
            value={letter} 
            onClick={this.handleGuess} 
            disabled={this.state.guessed.has()}
            >
                {letter}
            </button>
        ))
    }

    handleStartClick = () => {
        this.setState({gameStarted: true});
    }

    render() {
        const gameOver = this.state.noOfWrong >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameState = this.generateKeypad();
        if(isWinner) gameState = "Congrats, You have won the game";
        if(gameOver) gameState = "You lost";
        let restart = gameOver || isWinner;
        return (
            <div className="Hangman">
                {this.state.gameStarted ? (
                                 <div>
                                 <h2>Hangman</h2>
                                 <img src={this.props.images[this.state.noOfWrong]} alt="Hangman" />
                                 <Help className="HelpButton"/>
                                 <p className="guessedLetters">
                                     {/* This code shows how many chances/guesses are left. */}
                                     Chances Left: {this.props.maxWrong - this.state.noOfWrong} / {this.props.maxWrong}
                                 </p>
                                 <p className="PLanguage">Guess the Programming Language</p>
                                 <p className="Hangman-word">
                                     {/* If the game is not over the user can keep on guessing */}
                                     {!gameOver ? this.guessedWord() : this.state.answer}
                                 </p>
                                 <p className="Hangman-button">{gameState}</p>
                                 {restart && (
                                     <button id="reset" onClick={this.reset}>
                                         Restart?
                                     </button>
                                 )}
                 
                                 </div>

                ) : (
                    <StartButton onStartClick={this.handleStartClick} />

                )}
            </div>   
        );
    }

}

export default Hangman;