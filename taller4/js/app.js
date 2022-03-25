const getData = async () => {
    const response = await fetch("../data/data.json")

    const data = await response.json()

    return data
}

getData().then(data => console.log(data))