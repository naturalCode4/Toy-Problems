import React, { Component } from 'react'

class Sum extends Component {
    constructor() {

        super()

        this.state = {
            number1: '',
            number2: '',
            sum: ''
        }

        //binding
        this.handleNumber2Change=this.handleNumber2Change.bind(this)

    }
    //weird thing where arrow functions behave different in classes. arrowfuncs BIND by default. a javascript thing -- not just a react thing
    handleNumber2Change (event) {
        this.setState({number2: event.target.value}, () => console.log(this.state.number2))
        // this.setState({number2: 5})
    }

    handleSubmit(event) {
        // this.setState({sum: this.state.number1 + this.state.number2})
        this.setState(
            {
                sum: +this.state.number1 + +this.state.number2,
                number1: '',
                number2: ''
            }, 
            () => console.log(this.state.sum)
        )
        // setState altogether. Doing 2 setStates wont get you the job because it shows you dont understand how state works.
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" className="inputLine" value={this.state.number1} onChange={event => this.setState({number1: event.target.value})}></input>
                {/* the below 2 lines of code are the same. event as an argument is implied */}
                {/* <input type="number" className="inputLine" value={this.state.number2} onChange={event => this.handleNumber2Change(event)}></input> */}
                <input type="number" className="inputLine" value={this.state.number2} onChange={this.handleNumber2Change}></input>
                <button className="confirmationButton" onClick={e => this.handleSubmit(e)}>Add 'em up!</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum