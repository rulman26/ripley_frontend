import React, {useState, useEffect} from 'react'
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import api from './api/index';


const App = () => {
    const [persons, setPersons] = useState([])
    const [average , setAverage ] = useState(0)

    const apiPersons = async () => {
        let response = await api.listPersons()
        setPersons(response)
    }

    const apiAverage = async () => {
        let response = await api.average()
        setAverage(response.average)
    }

    useEffect(() => {
        apiPersons()
        apiAverage()
    }, [])

    return (
        <div className="container mt-5">
            <div className="table-responsive">
                <table className="table caption-top">
                    <caption>Lista de personas</caption>
                    <TableHead/>
                    <TableBody persons={persons}/>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Promedio de edad</td>
                            <td>{average.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default App;
