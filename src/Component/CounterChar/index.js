import {useState} from 'react'
import {v4} from 'uuid'

import CharacterDetails from '../CharacterDetails'

import './index.css'

const CounterChar = () => {
  const [textInput, setTextInput] = useState('')
  const [characterList, setCharacterList] = useState([])

  const onChangeTextInput = event => {
    setTextInput(event.target.value)
  }

  const onAddButton = event => {
    event.preventDefault()
    const newList = {
      id: v4(),
      textInput,
      textLength: textInput.length,
    }
    setCharacterList(prevCharacterList => [...prevCharacterList, newList])
    setTextInput('')
  }

  return (
    <div className="bg-container">
      <div className="sub-card">
        <div className="yellow-side">
          <div className="boss-character">
            <h1>Count the Characters like a Boss...</h1>
          </div>

          {characterList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="img"
            />
          ) : (
            <ul className="ul-list">
              <li>
                {characterList.map(eachList => (
                  <CharacterDetails
                    characterCard={eachList}
                    key={eachList.id}
                  />
                ))}
              </li>
            </ul>
          )}
        </div>
        <div className="black-side">
          <h1 className="char-heading">Character Counter</h1>
          <form onSubmit={onAddButton} className="character-text">
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input"
              value={textInput}
              onChange={onChangeTextInput}
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CounterChar
