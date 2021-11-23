import React from 'react';

// class Childcomponent extends React.Component {

//     // re-render
//     render() {
//         console.log('>>> check props: ', this.props)
//         // let name = this.props.name 

//         )
//     }
// }

const Childcomponent = (props) => {
    let { arrJobs } = props;

    return (
        <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Childcomponent;