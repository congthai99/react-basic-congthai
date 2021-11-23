import React from 'react';

class Childcomponent extends React.Component {
    
    // re-render
    render() {
        console.log('>>> check props: ', this.props)
        // let name = this.props.name 
        let {arrJobs} = this.props;

        return (
            <>
                <div className="job-lists">
                    {
                        arrJobs.map((item,index) => {
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
}

export default Childcomponent;