import { useState } from "react";
import DATA from "./_data";
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const [query, setQuery] = useState('')
  const viewedData = DATA.filter(data => query === '' || data.name.toLowerCase().includes(query) )

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input onChange={value => setQuery(value.toLowerCase())} />
      <div>
        <Table data={viewedData} />
      </div>
    </div>
  )
}

export default Test4;