import React, { useState } from 'react'

const FilterString = () => {

    const arrayOfStrings = [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]
    const [arrayOfFits, setArrayOfFits] = useState([])
    let userInput = ''

    const handleInputChange = (e) => {
        userInput = e.target.value
        // console.log(userInput)
    }

    const handleSubmit = e => {
        setArrayOfFits(prev => [])
        console.log('boop', arrayOfFits)
        for (let i=0; i<arrayOfStrings.length; i++) {
            let currentWord = arrayOfStrings[i]
            console.log(currentWord, userInput, currentWord.includes(userInput))
            if (currentWord.includes(userInput)) {
                console.log('bleep')
                setArrayOfFits(prev => [...prev, currentWord])
            }
        }
        console.log('array of fits => ', arrayOfFits)
        document.getElementsByClassName('filterString')[0].value = ''

    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">"James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"</span>
            <input className="inputLine filterString" onChange={handleInputChange}></input>
            <button className="confirmationButton" onClick={handleSubmit}>Filter</button>
            <span className="resultsBox filterStringRB">Names containing that string: {JSON.stringify(arrayOfFits)}</span>
        </div>
    )
}

export default FilterString