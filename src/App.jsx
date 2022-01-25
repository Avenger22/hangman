// #region 'Importing'

import { useEffect, useState } from 'react'
import './styles.css'

// #endregion

// #region 'Objectives of App'

  // Building a game:
  // Break it down into small comments
  // Figure out what state is needed <<<<
  // Figure out what state can be derived <<<<<
  // Create any functions needed to update state
  // Put stuff on the screen depending on state and derived state

// #endregion

// #region 'Global Varibales to use state helpers'

const letters = 'abcdefghijklmnopqrstuvwxyz'

const words = [
  'user',
  'artisan',
  'river',
  'newspaper',
  'confusion',
  'charity',
  'ladder',
  'president',
  'delivery',
  'engineering',
  'revolution',
  'map',
  'math',
  'phone',
  'understanding',
  'drawing',
  'growth',
  'protection',
  'significance',
  'outcome',
  'celebration',
  'magazine',
  'hat',
  'situation',
  'elevator',
  'control',
  'breath',
  'analyst',
  'atmosphere',
  'election',
  'song',
  'employee',
  'assumption',
  'camera',
  'inflation',
  'success',
  'penalty',
  'thing',
  'depression',
  'audience',
  'soup',
  'lake',
  'gene',
  'meal',
  'obligation',
  'activity',
  'drawer',
  'version',
  'salad',
  'direction'
]

function getRandomWord() {

  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]

}

// #endregion

export default function App() {

  // #region 'State Object'

  // there's a word we need to guess // TODO: Make it random
  const [word, setWord] = useState(getRandomWord())

  // we need to keep track of guesses
  const [guesses, setGuesses] = useState([])

  // #endregion

  // #region 'Derived State, helper functions'
  // These things we can derive:
  // an incorrect guess is a guess that's not in the word
  const wrongGuesses = guesses.filter(guess => !word.includes(guess))

  // a correct guess is a guess that it's in the word
  const rightGuesses = guesses.filter(guess => word.includes(guess))

  // lives is 6 minus the wrong guesses
  const lives = 6 - wrongGuesses.length

  // we lose when we have no more lives
  const lost = lives === 0

  // we win when every character in the word has been guessed
  const won = word.split('').every(char => rightGuesses.includes(char))

  function reset() {

    setGuesses([])
    setWord(getRandomWord())

  }
  // #endregion

  // #region 'UseEffect on key event listener new concept'

  // Essential:
  useEffect(() => {

    if (lost || won) return

    const listener = e => {

      // only letters can be gussed　✅
      const guess = e.key.toLowerCase()
      if (!letters.includes(guess)) return

      // only new guesses count
      if (guesses.includes(guess)) return

      // add new guess to state
      setGuesses([...guesses, guess])

    }

    // we can guess by typing
    // each character typed is guess
    window.addEventListener('keydown', listener)

    return () => window.removeEventListener('keydown', listener)
  }, [guesses, lost, won])

  // #endregion

  // #region 'Additional extra features to have'

    // Nice to have:
    // when the game ends, we can restart it by pressing a button
    // a drawing of a hangman is shown
    // when losing, characters not guessed should be displayed in red in the word
  
    // #endregion

  // #region 'App html return'

  return (

    <div className="App">

      {/* // the word should be displayed on the screen */}
      {/* // any character not yet guessed should be shown as an underscore */}
      <div className="word">

        {word.split('').map((char, index) => (
          <span key={index}>{rightGuesses.includes(char) ? char : '_'}</span>
        ))}
      </div>

      <p>Wrong guesses: {wrongGuesses}</p>
      <p>Lives: {lives}</p>

      {lost ? (

        <div>
          <p>You lost 🤕</p>
          <p>The word was: {word}</p>
          <button onClick={reset}>RESET</button>
        </div>
        
      ) : null}

      {won ? (

        <div>
          <p>You won! 🎉</p>
          <button onClick={reset}>RESET</button>
        </div>

      ) : null}
    </div>
  )
  
  // #endregion

}