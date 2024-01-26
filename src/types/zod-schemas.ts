import * as z from "zod";

export const StudentInfoSchema = z.object({
  // id: z.string(),
  student_name: z.string(),
  // dob: z.string(), // Assuming date of birth is a string in date format
  registration_number: z.string(), // Assuming registration is a string
  student_email_address: z.string().email(),
  // branch: z.string(),
  student_gender: z.string(),
  // bloodgroup: z.string(),
  // nationality: z.string(),
  // admission_category: z.string(),
  // social_category: z.string(),
  // mothertongue: z.string(),
  // maritalstatus: z.enum(["single", "married", "other"]), // Adjust as needed
  // domicile: z.string(),
  student_contact_number: z.string(), // Assuming phone number is a string
  // academicyear: z.string(), // Assuming academic year is a string
  student_department: z.string(),
  // rollno: z.string(),
  student_program: z.string(),
  // semester: z.number(),
  // enrolledcourses: z.array(z.string()), // Assuming courses are strings
  // Applicationno: z.string(),
  // dateofjoining: z.string(), // Assuming date of joining is a string in date format
  // student_date_of_birth: z.date(), // Assuming date of birth is a string in date format
  // student_academic_year: z.number(),
});

export const CourseInfoSchema = z.object({
  course_name: z.string(),
  course_department_identifier: z.string(),
  course_code: z.string(),
  course_description: z.string(),
  course_department: z.string(),
  course_program: z.string(),
  course_type: z.string(),
})