"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { DialogTrigger, DialogTitle, DialogDescription, DialogContent, Dialog } from "@/components/ui/dialog"
import { StudentInfoSchema } from "@/types/zod-schemas"
import { addStudent } from "@/services/data-fetch"
import { departments, programs } from "@/lib/dropdownlabels"
import { useState } from "react"
import { toast } from "sonner"


export default function InputForm() {
    const form = useForm<z.infer<typeof StudentInfoSchema>>({
        resolver: zodResolver(StudentInfoSchema),
        defaultValues: {
            student_name: "",
            registration_number: "",
            student_email_address: "",
            student_contact_number: "",
            student_program: "",
            student_gender: "",
            student_department: "",
        },
    })

    async function onSubmit(data: z.infer<typeof StudentInfoSchema>) {
        addStudent(data)    
        setOpen(false);
        toast.success("Student Added Successfully")
          
    }
    const [open, setOpen] = useState(false);


    return (
        <div className="max-w-sm space-y-2">
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogTrigger  className="bg-upease_blue text-white p-2 rounded-sm ">
                    {/* <Button className="w-full">Add Student</Button> */}
                    Add Student
                </DialogTrigger>
                <DialogContent className="space-y-2 overflow-y-auto max-h-[70vh]">
                    <DialogTitle className="text-center text-3xl font-bold">
                        Add Student
                    </DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6`">
                            <FormField
                                control={form.control}
                                name="student_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Student Name" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="registration_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Registration Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Registration Number " {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="student_email_address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Personal Email Id</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Email Id " {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="student_contact_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Contact Number " {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="student_program"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Student Branch</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn(
                                                            "w-[800px] justify-between",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value
                                                            ? programs.find(
                                                                (program) => program.value === field.value
                                                            )?.label
                                                            : "Select Branch"}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[400px] p-0 overflow-y-scroll h-80">
                                                <Command>
                                                    <CommandInput placeholder="Search Branch..." />
                                                    <CommandEmpty>No Branch found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {programs.map((program) => (
                                                            <CommandItem
                                                                value={program.label}
                                                                key={program.value}
                                                                onSelect={() => {
                                                                    form.setValue("student_program", program.value)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        program.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {program.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            <FormField
                                control={form.control}
                                name="student_gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Gender</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Gender" {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="student_department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Student Department</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn(
                                                            "w-[800px] justify-between",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value
                                                            ? departments.find(
                                                                (department) => department.value === field.value
                                                            )?.label
                                                            : "Select Department"}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[400px] p-0 overflow-y-scroll h-80">
                                                <Command>
                                                    <CommandInput placeholder="Search Department..." />
                                                    <CommandEmpty>No Department found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {departments.map((department) => (
                                                            <CommandItem
                                                                value={department.label}
                                                                key={department.value}
                                                                onSelect={() => {
                                                                    form.setValue("student_department", department.value)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        department.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />{department.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="bg-upease_blue text-white p-4 my-5 rounded-sm">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}