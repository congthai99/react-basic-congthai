import React from 'react';
import Childcomponent from './ChildComponent';

class Mycomponent extends React.Component {
    
    // state is a object 
    state = {
       firstName: '',
       lastName: '',
       arrJobs : [
           { id:'abcjob1', title: 'Developers', salary: '500'},
           { id:'abcjob2', title: 'Testers', salary: '400'},
           { id:'abcjob3', title: 'Project manager', salary: '5000'}
       ]
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
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}/>
                    <br/><br/>
                    <input type="submit" 
                    onClick={(event) => this.handleSubmit(event)}
                    />

                    
                </form>

                <Childcomponent 
                name={this.state.firstName}
                age={'22'}
                arrJobs={this.state.arrJobs}
                />
                
            </>
        )
    }
}

export default Mycomponent;