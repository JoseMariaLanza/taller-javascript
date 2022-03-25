let users = []

const getEmplyeesData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    return data
}

getEmplyeesData().then(response => {
    users = [...response]
    console.log(getPersonalData())
    // loadTable()
})

const getPersonalData = () => {

    const personalData = users.map(user => {
        return {
            nombre: user.name,
            correo: user.email,
            telefono: user.phone
        }
    })

    return personalData

    // const personalData = []
    // users.map(user => {
    //     const {
    //         name: nombre,
    //         email,
    //         phone,
    //         address: {
    //             street,
    //             suite,
    //             city,
    //             geo: { lat, lng }
    //         }
    //     } = user

    //     personalData.push({
    //         nombre,
    //         correo: email,
    //         telefono: phone,
    //         calle: street,
    //         direccion: suite,
    //         latitud: lat,
    //         longitud: lng,
    //         ciudad: city,
    //     })
    // })
    // return personalData
}


const loadTable = () => {
    let container = document.querySelector('#cuerpoTabla')
    let data = getPersonalData()

    data.map(item => {
        const {
            nombre,
            correo,
            telefono,
            calle,
            direccion,
            latitud,
            longitud,
            ciudad
        } = item

        let tr = document.createElement('tr')
        let content = `
        <td>${nombre}</td>
        td>${correo}</td>
        <td>${telefono}</td>
        <td>${calle} - ${direccion} (Coord: ${latitud}, ${longitud})</td>
        <td>${ciudad}</td>
        `

        tr.innerHTML = content
        container.appendChild(tr)
    })
}
