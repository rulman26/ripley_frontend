
const listPersons = async () => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/list`)
    response = await response.json()
    return response
}

const average = async () => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/average`)
    response = await response.json()
    return response
}


const api = {
    listPersons,
    average
}

export default api