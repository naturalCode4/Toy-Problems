import React, { Component, useState } from 'react'

const FilterObject = () => {

    const unFilteredArray = [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]
    const unFilteredArrayString = '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]'
    let userInput = ''
    const [filteredArray, setFilteredArray] = useState([])

    const updateInput = (e) => {
        userInput = e.target.value
    }

    const submitFilter = () => {

        setFilteredArray(prev => [])

        unFilteredArray.forEach(object => {
            if (object[userInput]) {
                console.log('property exists in object')
                setFilteredArray(prev => [...prev, object])
            }
        })

        console.log('filtered array: ', filteredArray)

        document.getElementsByClassName('filterObject')[0].value = ''
    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Unfiltered array: {unFilteredArrayString}</span>
            <input className="inputLine filterObject placeholder" placeholder="Enter key to filter by" onChange={updateInput}></input>
            <button className="confirmationButton" onClick={submitFilter}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered array: {JSON.stringify(filteredArray)}</span>
        </div>
    )
}

export default FilterObject