const TableBody = (props) => {
    const {persons} = props
    return (
        <tbody>
            {
                persons.map(person => {
                    return (
                        <tr key={person.PersonId}>
                            <td>{person.FirstName}</td>
                            <td>{person.LastName}</td>
                            <td>{person.BirthDate}</td>
                            <td>{person.Age}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export default TableBody;
