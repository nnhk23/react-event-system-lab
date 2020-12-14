import React from 'react';

export default class Keypad extends React.Component{

    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
                <label>Password: </label>
                <input type="password" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
