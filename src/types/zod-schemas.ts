import * as z from "zod";

export const StudentInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
  dob: z.string(), // Assuming date of birth is a string in date format
  registration: z.string(), // Assuming registration is a string
  email: z.string().email(),
  branch: z.string(),
  gender: z.enum(["male", "female", "other"]),
  bloodgroup: z.string(),
  nationality: z.string(),
  admission_category: z.string(),
  social_category: z.string(),
  mothertongue: z.string(),
  maritalstatus: z.enum(["single", "married", "other"]), // Adjust as needed
  domicile: z.string(),
  phone: z.string(), // Assuming phone number is a string
  academicyear: z.string(), // Assuming academic year is a string
  department: z.string(),
  rollno: z.string(),
  program: z.string(),
  semester: z.number(),
  enrolledcourses: z.array(z.string()), // Assuming courses are strings
  Applicationno: z.string(),
  dateofjoining: z.string(), // Assuming date of joining is a string in date format
});