import React from 'react'
import { infotypes, columns } from './typedef'
import { StudentTable } from './table'


async function getData(): Promise<infotypes[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      name: "Lance Barreto",
      dob: '07/11/2002',
      registration: '220968016',
      email: "Lance.barreto@learner.manipal.edu",
      branch: "Computer and Communication Engineering",
      gender: 'Male',
      bloodgroup: 'A+',
      nationality: 'Indian',
      admission_category: "General",
      social_category: "",
      mothertongue: "",
      maritalstatus: "",
      domicile: "",
      phone: "+91 9807890987",
      academicyear: "",
      department: "CCE",
      rollno: '8',
      program: "",
      semester: "6",
      enrolledcourses: [
        "Fundamentals of Computer Programming",
        "Mathematics for Artificial Intelligence"
      ],
      Applicationno: "",
      dateofjoining: "",

    },
    {
      id: '2',
      name: "Sri Manikanth Martha",
      registration: '220968016',
      dob: '05/03/2004',
      email: "martha.mitmpl2022@learner.manipal.edu",
      branch: "Data Science and Engineering",
      gender: 'Male',
      bloodgroup: 'A+',
      nationality: 'Indian',
      admission_category: "General",
      social_category: "",
      mothertongue: "",
      maritalstatus: "",
      domicile: "",
      phone: "+91 9807890987",
      academicyear: "",
      department: "CCE",
      rollno: '8',
      program: "",
      semester: "6",
      enrolledcourses: [
        "Fundamentals of Computer Programming",
        "Mathematics for Artificial Intelligence"
      ],
      Applicationno: "",
      dateofjoining: "",
    },
    {
      id: '3',
      name: "Karthik Prabhu Bantwal",
      registration: '220968016',
      dob: '05/03/2004',
      email: "karhik.bantwal@learner.manipal.edu",
      branch: "Civil Engineering",
      gender: 'Male',
      bloodgroup: 'A+',
      nationality: 'Indian',
      admission_category: "General",
      social_category: "",
      mothertongue: "",
      maritalstatus: "",
      domicile: "",
      phone: "+91 9807890987",
      academicyear: "",
      department: "CCE",
      rollno: '8',
      program: "",
      semester: "6",
      enrolledcourses: [
        "Fundamentals of Computer Programming",
        "Mathematics for Artificial Intelligence"
      ],
      Applicationno: "",
      dateofjoining: "",
    },
    {
      id: '4',
      name: "Sri Manikanth Martha",
      registration: '220968016',
      dob: '05/03/2004',
      email: "martha.mitmpl2022@learner.manipal.edu",
      branch: "Data Science and Engineering",
      gender: 'Male',
      bloodgroup: 'A+',
      nationality: 'Indian',
      admission_category: "General",
      social_category: "",
      mothertongue: "",
      maritalstatus: "",
      domicile: "",
      phone: "+91 9807890987",
      academicyear: "",
      department: "CCE",
      rollno: '8',
      program: "",
      semester: "6",
      enrolledcourses: [
        "Fundamentals of Computer Programming",
        "Mathematics for Artificial Intelligence"
      ],
      Applicationno: "",
      dateofjoining: "",
    },
    

  ]
}
export default async function Page() {
  const data = await getData()
  return (
    <div>
      <div className='p-8'>
      <StudentTable columns={columns} data={data} />
      </div>
    </div>
  )
}