import React from 'react';
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import Logo from "../../assets/images/logoApple.png";
import { connect } from 'react-redux'

// HOC : higher order component 
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     },3000)
    // }

    // HOC: higher order component

    handleDelelteUser = (user) => {
        console.log('>>> check user delelte', user);
        this.props.deleteUserRedux(user)
    }

    handleCreateUser= () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props:', this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>
                    Hello world from Homepage with Cong Thai
                </div>

                <div>
                    <img style={{ width: '400px' }} src={Logo} />
                </div>

                <div>
                    {listUsers && listUsers.length > 0 &&

                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} 
                                    <span onClick= {() => this.handleDelelteUser(item)}> x </span>
                                </div>
                            )
                        })
                    }
                <button onClick= {() => this.handleCreateUser()}> Add new</button>
                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapstateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload:userDelete }),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }

}

export default connect(mapstateToProps,mapDispatchToProps)(Color(Home));