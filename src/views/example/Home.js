import React from 'react';
import { withRouter } from "react-router";
import Color from "../HOC/Color";


// HOC : higher order component 
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     },3000)
    // }

    render() {
        return(
            <div>
                Hello world from Homepage with Cong Thai
            </div>
        )
    }
}

export default Color (Home);