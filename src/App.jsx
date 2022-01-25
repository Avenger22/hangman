import { useState } from "react"
import Word from "../Components/Word"
import WrongGuesses from "../Components/WrongGuesses"

export default function App() {

  // #region 'State Object and pieces'
  const words = [
    'interista',
    'working',
    'tomatoes',
    'rice',
    'sapiens',
    'JavaScript',
    'layouts'
  ]

  const [word, setWord] = useState(getRandomWord())
  const [guesses, setGuesses] = useState([])

  const [previousWords, setPreviousWords] = useState([])
  const [maximumNumberOfWrongGuesses, setMaximumNumberOfWrongGuesses] = useState(5)
  // #endregion

  // #region 'Helper Functions'
  function getRightGuesses() {

    return guesses.filter(function (letter) {
      return word.includes(letter)
    })

  }

  function getWrongGuesses() {

    return guesses.filter(function (letter) {
      return word.includes(letter)
    })

  }

  function checkIfLost() {

    const numberOfWrongGuesses = getWrongGuesses().length
    return numberOfWrongGuesses >= maximumNumberOfWrongGuesses

  }


  function checkIfWon() {

    return word.split('').every(function (letter) {
      return guesses.includes(letter)
    })

  }

  function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]

  }

  function listenForKeypresses() {

    document.addEventListener('keypress', function (event) {
      // if the key pressed is not already guessed
      const haventLost = !checkIfLost()
      const keyIsNotAlreadyGuessed = !guesses.includes(event.key)

      if (keyIsNotAlreadyGuessed && haventLost) {
        // add it to the guesses
        // guesses.push(event.key)

      }
    })

  }
  // #endregion

  return (

    <>
      <Word />
      <WrongGuesses />    
    </>

  )

}