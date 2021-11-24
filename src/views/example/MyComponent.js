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

    
    addNewJob = (job) => {
        console.log('check job from parent:', job)
        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job)
        
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currenJobs
        })
    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs
        let newcurrenJobs = currenJobs.filter(item => item.id !== job.id)
        
        this.setState({
            arrJobs: newcurrenJobs
        })
        console.log('>>>>>>> job.id check:',job.id,newcurrenJobs)
    }


    /** 
      JSX => return block 
    */
    
    
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <Addcomponent
                addNewJob={this.addNewJob}
                />
                
                <Childcomponent 
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
                />
                
            </>
        )
    }
}

export default Mycomponent;