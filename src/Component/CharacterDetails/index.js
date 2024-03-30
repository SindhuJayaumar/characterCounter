import './index.css'

const CharacterDetails = props => {
  const {characterCard} = props
  const {textInput, textLength} = characterCard

  return (
    <div className="text-card">
      <ul className="ul-list">
        <li>
          <p className="text">
            {textInput} : {textLength}
          </p>
        </li>
      </ul>
    </div>
  )
}

export default CharacterDetails
