import React from 'react';

class Mycomponent extends React.Component {
    
    // state is a object 
    state = {
        name: 'Thai',
        channel: 'channel'
    }

    /** 
      JSX => return block 
    */
    
    handleOnChangeName = (event) => {
        // merge 
        this.setState({ 
            name: event.target.value
        });
    }

    handleClickButton = () => {
        alert('click me')
    }

    render() {


        return (
            <>
            <div className="first">
                <input value = {this.state.name} type="text" 
                    onChange={(event) => this.handleOnChangeName(event)}
                />
                My name is {this.state['name']}
            </div>
            <div className= 'second'>
                My channel : {this.state.channel}
            </div>
            <div className= 'third'>
                <button onClick={() => this.handleClickButton() }>Click me</button> 
            </div>
            </>
        )
    }
}

export default Mycomponent;