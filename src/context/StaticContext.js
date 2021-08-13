import React from 'react'

//Le paso un objeto por si no hay ningun Provider del Context
const Context  = React.createContext({
    name: 'madio',
    queOnda: true 
})

export default Context