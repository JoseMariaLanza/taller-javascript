// Obtener toda la data
const getData = async () => {
    const response = await fetch('./data.json')
    const {data} = await response.json()
    return data
}

let nfts = []
getData().then(data => {
    nfts = getNfts(data)
    console.log(nfts)
    loadGallery()
    // console.log(loadGallery())
})

// Obtener los objetos que sean nft (type)
const getNfts = ({items}) => {
    return items.filter(item => item.type === 'nft')
}

// Traer imagen y nombre
const loadGallery = () => {
    // nft_data -> [external_data]
    const nft_data = nfts.map(nft => {
        const {nft_data} = nft

        if (nft.nft_data) {
            let div = document.createElement('div')

            const card = `
                <div class='card'>
                    <img src=${nft_data[0].external_data.image_256} class='card-img-top alt=${nft_data[0].external_data.name} />
                    <div class='card-body'>
                        <h5 class="card-title">${nft_data[0].external_data.name}</h5>
                    </div>
                </div>
            `
            div.innerHTML = card

            document.querySelector('#contenedor').appendChild(div)
        }

        // return nft.nft_data ? nft.nft_data : ''
        // crear un elemento div
        // class = "card"
        // img
        // class = "card-body"
        //<p>nombre del nft</p>
        // id = "contenedor" agregar el elemento
    })
    return nft_data
}