import React from 'react';

class Addcomponent extends React.Component {

    state = {
        titleJob: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        });
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ',this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">job's title:</label><br />
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} />
                <br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}

export default Addcomponent;