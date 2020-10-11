import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const EmployeesList = () => {
  const [data, setData] = useState<TEmployee[]>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:4000/employees')
      if (!response) return
      const _data = await response.json()
      setData(_data)
    }

    getData()
  }, [])

  if (!data) return <p>Loading list ...</p>
  return (
    <ul>
      {data.map((employee) => {
        return (
          <li key={employee.id}>
            <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default EmployeesList
