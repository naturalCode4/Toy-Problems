import React, { Component, useState } from 'react'

const Palindrome = () => {

    const palindromeCheck = (string) => {
        let stringArray = string.toLowerCase().split('')
        let reversedStringArray = []
        for (let i=stringArray.length - 1; i>=0; i--) {
          reversedStringArray.push(stringArray[i])
        }
        return stringArray.join('') === reversedStringArray.join('')
      }

    const [status, setStatus] = useState('Result:')
    const [userInput, setUserInput] = useState('')

    const handleInputChange = (typing) => {
        setUserInput(() => typing.target.value)
    }

    const handleSubmit = (submit) => {
        submit.preventDefault()
        palindromeCheck(userInput) ? setStatus(() => `"${userInput}" IS a palindrome!`) : setStatus(() => `"${userInput}" is NOT a palindrome!`)
    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome Checker</h4>
            <input className="inputLine placeholder" onChange={handleInputChange} placeholder="Check if a word is a palindrome" type="text"></input>
            <button className="confirmationButton" onClick={handleSubmit}>Check</button>
            <span className="resultsBox">{status}</span>
        </div>
    )
}

export default Palindrome