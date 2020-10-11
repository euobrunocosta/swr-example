import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const EmployeeDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data } = useFetch<TEmployee>(`http://localhost:4000/employees/${id}`)

  if (!data) return <p>Loading details ...</p>
  return (
    <ul>
      <li>ID: {data.id}</li>
      <li>Name: {data.name}</li>
      <li>Salary: $ {data.salary}</li>
      <li>Age: {data.age}</li>
    </ul>
  )
}

export default EmployeeDetails
