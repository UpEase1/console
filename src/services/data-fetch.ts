const BASIC_URL = 'http://127.0.0.1:8000'



async function getAllCourses() {
    const res = await fetch(`${BASIC_URL}/api/v1/courses`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error('Failed to fetch course data')
    }

    return res.json() as Promise<{
        id: string,
        name: string,
    }[]>;
}

async function getAllStudents() {
    const res = await fetch(`${BASIC_URL}/api/v1/students`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error('Failed to fetch student data')
    }

    return res.json() as Promise<{
        id: string,
        name: string,
        mail: string,
    }[]>;
}

async function getCourse({ courseId }: { courseId: string }) {
    const res =  await fetch(`${BASIC_URL}/api/v1/courses/${courseId}`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        course_id: string,
        name: string,
    }>;
}

async function getCourseStudents({ courseId }: { courseId: string }) {
    console.log(courseId);
    const res = await fetch(`${BASIC_URL}/api/v1/courses/${courseId}/students`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        id: string,
        name: string,
        mail: string,
    }[]>;
}

export { getAllCourses, getCourseStudents, getCourse, getAllStudents }