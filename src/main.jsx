import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
//import data from './data/employees-list.js'
//import model from './data/DataTableModel.js'

//const NbInitialEntries = 1000 // nombres d'entrées initiales sur les mille à utiliser initialement

let initial_data = []
/*if (localStorage.getItem(model.id)) {
    initial_data = JSON.parse(localStorage.getItem(model.id))
    console.log('Récupération des données initiales dans le localStorage')
} else if (data) {
    initial_data = data.slice(0, NbInitialEntries)
    console.log(
        'Pas de localStorage initial, utilisation des données jointes dans employees-list.js'
    )
}*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App data={initial_data} />
    </React.StrictMode>
)
