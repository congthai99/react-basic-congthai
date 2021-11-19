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
        this.setState({ 
            name: event.target.value
        });
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
            </>
        )
    }
}

export default Mycomponent;