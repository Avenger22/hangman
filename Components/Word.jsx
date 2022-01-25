export default function Word(props) {

    const rightGuesses = getRightGuesses()

    return (

        <>

            <div className="word">
                {
                    rightGuesses.map(span =>
                        
                        
                        
                    )

                }
            </div>

        </>

    )
    const wordEl = document.createElement('div')
    wordEl.setAttribute('class', 'word')

    // const rightGuesses = getRightGuesses()

    for (const letter of state.word) {
      const letterEl = document.createElement('span')

      if (rightGuesses.includes(letter)) {
        letterEl.textContent = letter
      } else {
        letterEl.textContent = '_'
      }

      wordEl.append(letterEl)
    }

    document.body.append(wordEl)
  }