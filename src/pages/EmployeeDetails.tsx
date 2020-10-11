import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EmployeeDetails = () => {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<TEmployee>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:4000/employees/${id}`)
      if (!response) return
      const _data = await response.json()
      setData(_data)
    }

    getData()
  }, [id])

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
