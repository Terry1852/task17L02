import React from 'react';

const Help = () => {

    const handleClick = () => {
        alert(`
        1.By default the game thinks of a word or phrase and creates a blank line for each letter in the word or phrase.
        2.The player take turns guessing letters that might be in the word or phrase.
        3.If a guessed letter is correct, the game fills it in the blanks.
        4.If a guessed letter is wrong, the games returns34 a part of a hangman on a gallow.
        5.The game ends when the word or phrase is guessed completely or the hangman is drawn completely.
        `)
    }

    return (
        <div>
            <button onClick={handleClick} className="HelpButton">H</button> 
            <p>Click the H button for the game instructions.</p>
        </div>

    );

    };

export default Help;


