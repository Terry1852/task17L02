import React from 'react'
import '../Store/StartButton.css';

class StartButton extends React.Component {
    render() {
        return (
            <div>
                <button className='StartButton' onClick={this.props.onStartClick}>S</button>
                <p>Please click the S button to START the game.</p>
            </div>
        );
    }
}

export default StartButton;

