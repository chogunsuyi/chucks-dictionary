document.querySelector('button').addEventListener('click', displayDefinition)

function displayDefinition() {
    const word = document.querySelector('input').value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('#container').innerHTML = ''

            data.forEach(word => {

                document.querySelector('#container').innerHTML += `<h2>${word.word}</h2>`
            
                word.meanings.forEach(meaning => {
                    document.querySelector('#container').innerHTML += `<h3>${meaning.partOfSpeech}</h3>`
                    meaning.definitions.forEach((def,i) => {
                        document.querySelector('#container').innerHTML += `<p>${i + 1}. ${def.definition}</p>`
                    })
            })

        })
            
            
            
        })
        .catch(err => {console.log(err)})
}