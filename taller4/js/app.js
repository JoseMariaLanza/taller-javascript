const getData = async () => {
    const response = await fetch("../data/data.json")

    const data = await response.json()

    return data
}

getData().then(data => {
    heroes = { ...data }
    console.log(heroes)
    showData(heroes)
})

// let num = [1, 2, 3]
// const [num1, num2, num3] = num

const showData = ({ squadName, homeTown, formed, members }) => {
    // obtener los datos del titulo y subtitulo
    // mostrarlos
    const title = document.getElementById('title')
    title.innerText = squadName

    const subtitle = document.getElementById('subtitle')
    subtitle.innerHTML = `<h3><b>HomeTown: </b>${homeTown} | <b>Formed: </b>${formed}</h3>`

    // obtener los miembros y mostrar los datos:
    // nombre, identidad secreta, edad, poderes
    members.forEach((hero) => {
        const { name, secretIdentity, age, powers } = hero;
        let col = document.createElement("div");
        col.classList = "col";

        let contenido = `<h2>${name}</h2>
        <p><b>Secret Identity:</b> ${secretIdentity}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Superpowers:</b></p>
        <ul id=${name.replace(' ', '-')}>

        </ul>
        `;

        col.innerHTML = contenido;
        document.querySelector("#container").appendChild(col);

        powers.forEach(power => {
            const nameId = name.replace(' ', '-')
            let superPowers = document.querySelector(`#${nameId}`)

            let superPower = `${power}`

            const li = document.createElement('li')
            li.innerHTML = superPower

            superPowers.appendChild(li)
        })
    });
}
