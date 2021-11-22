import React from 'react';

class Childcomponent extends React.Component {
    
    // state is a object 
    state = {
       firstName: '',
       lastName: '',
    }

    /** 
      JSX => return block 
    */
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <div>
                    Childcomponent : {this.props.name}
                </div>
            </>
        )
    }
}

export default Childcomponent;