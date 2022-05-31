import React, { Component } from 'react'

class EvenAndOdd extends Component {

    constructor() {

        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleInputChange(event) {
        this.setState({ userInput: event.target.value });
      }

    handleSubmit(userInput) {
        let evens = []
        let odds = []
        const numberString = userInput.split(',')
        numberString.forEach(number => {
            // +number % 2 === 0 ? this.state.evenArray.push(number) : this.state.oddArray.push(number)
            number % 2 === 0 ? evens.push(number) : odds.push(number)
        })
        this.setState({evenArray: evens, oddArray: odds})
   }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even And Odds</h4>
                <input type='text' placeholder="Enter whole numbers separated by commas" className="inputLine placeholder" onChange={(event) => this.handleInputChange(event)}></input>
                <button className="confirmationButton" onClick={() => this.handleSubmit(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {this.state.evenArray.join(', ')}</span>
                <span className="resultsBox">Odds: {this.state.oddArray.join(', ')}</span>
            </div>
        )
    }
}

export default EvenAndOdd