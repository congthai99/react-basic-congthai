import React from 'react';
import './Demo.scss'
class Childcomponent extends React.Component {

    state = {
        showJob: false,
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> deletejob:',job)
        this.props.deleteAJob(job)
    }
    // re-render
    render() {

        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === false ?
                <div>
                    <button className = "btn-show"
                    onClick={() => this.handleShowHide()}>Show</button>
                </div> 
                :
                <>
                    <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} 
                                    <> </> <span onClick={()=> this.handleOnclickDelete(item)}> x </span> 
                                </div>
                            )
                        })
                    }
                    </div>
                    <div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                    </div> 
                </>
                }
            </>
        )
    }
}

// const Childcomponent = (props) => {
//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500){
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default Childcomponent;