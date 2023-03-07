const axios = require("axios")

// fetch(API)
//     .then(res => {
//         if(!res.ok) {
//             throw Error(res.statusText)
//         } return res.json()
//     })
//     .then (data => people = data.results)
//     .catch (err => console.log(`Error, ${err}`))

const getContact = () => {

    try {
       const res = axios.get('https://randomuser.me/api/') 
       .then(res => {console.log(res.data.results)})

    } catch(error) {
        console.log("ERROR", error)
    }

}

console.log(getContact())

// https://swapi.dev/api/people/1 // but I want to pick different numbers

const getStarWarsPerson = (id) => {

    try {
        const res = axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {console.log(res.data)})

    } catch(error) {
        console.log("ERROR", error)
    }


}



const getStarWarsPlanet = async (planet) => {

    try {
        const res = await axios.get(`https://swapi.dev/api/planets/${planet}`)
        console.log(res.data)

    } catch(error) {
        console.log("ERROR", error)
    }


}

console.log(getContact())

console.log(getStarWarsPerson(7))

console.log(getStarWarsPlanet(10))