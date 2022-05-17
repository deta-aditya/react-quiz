import { useContext } from "react";
import { AppContext } from "./context";
import DATA from "./_data";

const Table = () => {
  const { query } = useContext(AppContext)

  const viewedData = DATA.filter(data => 
    query === '' || 
    data.name.toLowerCase().includes(query.toLowerCase())
  )

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
        {viewedData.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
