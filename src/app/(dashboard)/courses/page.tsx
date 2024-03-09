// pages/courses/index.tsx
import Link from 'next/link';
import React from 'react';
import { getAllCourses } from '@/services/data-fetch'
import CourseForm from './addcourse';
export const dynamic = "force-dynamic"
const Courses = async () => {
  // any thrown error will be caught by the nearest error boundary (error.js)
  const courses = await getAllCourses();

  return (

      <div className='p-10'>
        <div className='w-full flex justify-end '>
          <CourseForm />
        </div>
        <div className='grid grid-cols-4 gap-3 my-5'>
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${encodeURIComponent(course.id)}`} className='h-32 bg-white flex flex-col rounded-lg border-2 border-solid border-gray-300 justify-between text-wrap text-center p-3 hover:shadow-md hover:shadow-gray-300 transition-all'>
              <div className='font-medium text-left text-sm'>
                {course.name}
              </div>
              <div className='font-medium text-left text-sm text-gray-500'>
                <p> B. Tech </p>
                <div className='flex flex-row text-black mt-2'>
                  <div className='bg-[#EFF2FB] px-2 py-1 mr-2 rounded-md'> AAE </div>
                  <div className='bg-[#EFF2FB] px-2 py-1 mr-2 rounded-md'> 4000 </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Courses;