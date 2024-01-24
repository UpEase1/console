// pages/courses/index.tsx
import Link from 'next/link';
import React from 'react';
import { getAllCourses } from '@/services/data-fetch'

const Courses = async () => {
  // any thrown error will be caught by the nearest error boundary (error.js)
  const courses = await getAllCourses();

  return (
    <div>
      <div className='p-10'>
        <div className='grid grid-cols-4 gap-6'>
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${encodeURIComponent(course.id)}`} className='w-100 h-28 flex rounded-lg border-2 border-solid border-gray-300 items-center justify-center text-wrap text-center p-3'>
                {course.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;