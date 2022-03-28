let users = []

const getEmplyeesData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    return data
}

getEmplyeesData().then(response => {
    users = [...response]
    loadTable()
    loadCompanyData()
})

const getPersonalData = () => {
    return users.map(user => {
        return {
            nombre: user.name,
            correo: user.email,
            telefono: user.phone,
            calle: user.address.street,
            direccion: user.address.suite,
            ciudad: user.address.city,
            latitud: user.address.geo.lat,
            longitud: user.address.geo.lng
        }
    })
}

const getCompanyData = () => {
    return users.map(user => {
        return {
            nombreEmpresa: user.company.name,
            slogan: user.company.catchPhrase
        }
    })
}

const loadTable = () => {
    let container = document.querySelector('#cuerpoTabla')
    let data = getPersonalData()

    data.forEach(item => {
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
        <td>${correo}</td>
        <td>${telefono}</td>
        <td>${calle} - ${direccion} (Coord: ${latitud}, ${longitud})</td>
        <td>${ciudad}</td>
        `

        tr.innerHTML = content
        container.appendChild(tr)
    })
}

const loadCompanyData = () => {
    const container = document.querySelector('#containerQuotes')
    const companyData = getCompanyData()

    companyData.forEach(item => {
        const { nombreEmpresa, slogan } = item

        const figure = document.createElement('figure')
        const content = `
        <blockquote class="blockquote">
        <p>${slogan}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
        ${nombreEmpresa}
        </figcaption>
        `

        figure.innerHTML = content
        container.appendChild(figure)
    })
}
