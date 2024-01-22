import React from 'react'
import { infotypes, columns } from './typedef'
import { StudentTable } from './table'
import { getAllStudents } from '@/services/data-fetch'


export default async function Page() {
  const students = await getAllStudents()
  return (
    <div>
      <div className='p-8'>
      <StudentTable columns={columns} data={students} />
      </div>
    </div>
  )
}