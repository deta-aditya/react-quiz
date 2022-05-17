

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map(data => (
          <tr key={data.name}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
