import React from 'react';
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import Logo from "../../assets/images/logoApple.png";


// HOC : higher order component 
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     },3000)
    // }

    render() {
        return(
            <>
                <div>
                    Hello world from Homepage with Cong Thai
                </div>

                <div>
                    <img style={{width: '400px'}}src={Logo}/>
                </div>
            </>
        )
    }
}

export default Color (Home);