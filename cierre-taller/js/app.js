const getData = async () => {
    const response = await fetch('https://swapi.dev/api/people')
    const data = await response.json()
    return data
}

let characters = []
getData().then(data => {
    characters = getCharacters(data)
    console.log(characters)
    document.querySelector('#loading').remove()
    loadAccordions()
})

const getCharacters = ({results}) => {
    return results
}

const loadAccordions = () => {
    const characters_data = characters.map((character, index) => {
        const {name, birth_year, gender, hair_color, height, mass, homeworld} = character

        if (character) {
            let div = document.createElement('div')

            const accordion = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index+1}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index+1}" aria-expanded="false" aria-controls="collapse${index+1}">
                            ${name}
                        </button>
                    </h2>
                    <div id="collapse${index+1}" class="accordion-collapse collapse" aria-labelledby="${name}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <img class="flex-column" />
                            <div class="flex-column">
                                <p><b>Birth year:</b> ${birth_year}</p>
                                <p><b>Gender:</b> ${gender}</p>
                                <p><b>Hair color:</b> ${hair_color}</p>
                                <p><b>Height:</b> ${height}</p>
                                <p><b>Mass:</b> ${mass}</p>
                                    <button id="button${index}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Planet</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            div.innerHTML = accordion

            document.querySelector('#accordionExample').appendChild(div)
            const planetButton = document.getElementById(`button${index}`)
            planetButton.addEventListener('click', () => getPlanetInfo(homeworld))
        }
    })
}

const getPlanetInfo = async (url) => {
    console.log(url)
    const response = await fetch(url)
    return response.json()
}

getPlanetInfo().then(response => {
    console.log(response)
    loadPlanetInfo(response)
})

const loadPlanetInfo = response => {
    const {name, population, climate, gravity, terrain} = response

    alert('hi')

    let div = document.createElement('div')

    const modal = `
        
    `
    div.innerHTML = modal
    document.querySelector('#exampleModal').appendChild(div)
}


