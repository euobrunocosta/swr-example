import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const EmployeesList = () => {
  const { data } = useFetch<TEmployee[]>('http://localhost:4000/employees')

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
