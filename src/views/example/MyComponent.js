import React from 'react';
import Childcomponent from './ChildComponent';
import Addcomponent from './AddComponent';

class Mycomponent extends React.Component {
    
    // state is a object 
    state = {
       arrJobs : [
           { id:'abcjob1', title: 'Developers', salary: '500'},
           { id:'abcjob2', title: 'Testers', salary: '400'},
           { id:'abcjob3', title: 'Project manager', salary: '5000'}
       ]
    }

    /** 
      JSX => return block 
    */
    
    
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <Addcomponent/>
                
                <Childcomponent 
                arrJobs={this.state.arrJobs}
                />
                
            </>
        )
    }
}

export default Mycomponent;