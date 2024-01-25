import * as z from "zod";

export const StudentInfoSchema = z.object({
  student_name: z.string(),
  // first_name: z.string(),
  // last_name: z.string(),
  registration_number: z.string(), // Assuming registration is a string
  // student_date_of_birth: z.date(), // Assuming date of birth is a string in date format
  student_email_address: z.string().email(),
  student_contact_number: z.string(), // Assuming phone number is a string
  student_program: z.string(),
  student_gender: z.string(),
  student_department: z.string(),
  // student_academic_year: z.number(),
});