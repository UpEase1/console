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
import { Textarea } from "@/components/ui/textarea"


import { Input } from "@/components/ui/input"
import { DialogTrigger, DialogTitle, DialogDescription, DialogContent, Dialog } from "@/components/ui/dialog"
import { CourseInfoSchema } from "@/types/zod-schemas"
import { addCourse, addStudent } from "@/services/data-fetch"
import { departments, programs, course_dept_code, coursetypes } from "@/lib/dropdownlabels"


export default function CourseForm() {
    const form = useForm<z.infer<typeof CourseInfoSchema>>({
        resolver: zodResolver(CourseInfoSchema),
        defaultValues: {
            course_name: "",
            course_department_identifier: "",
            course_code: "",
            course_description: "",
            course_department: "",
            course_program: "",
            course_type: "",
        },
    })

    async function onSubmit(data: z.infer<typeof CourseInfoSchema>) {
        addCourse(data)    
    }

    return (
        <div className="max-w-sm space-y-2">
            <Dialog>
                <DialogTrigger>
                    {/* <Button className="w-full">Add Student</Button> */}
                    Add Course
                </DialogTrigger>
                <DialogContent className="space-y-2 overflow-y-auto max-h-[70vh]">
                    <DialogTitle className="text-center text-3xl font-bold">
                        Add Course
                    </DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6`">
                            <FormField
                                control={form.control}
                                name="course_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Course Name" {...field} />
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
                                name="course_department_identifier"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Department Code</FormLabel>
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
                                                            ? course_dept_code.find(
                                                                (code) => code.value === field.value
                                                            )?.label
                                                            : "Select Code"}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[400px] p-0 overflow-y-scroll h-80">
                                                <Command>
                                                    <CommandInput placeholder="Search Branch..." />
                                                    <CommandEmpty>No Code found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {course_dept_code.map((code) => (
                                                            <CommandItem
                                                                value={code.label}
                                                                key={code.value}
                                                                onSelect={() => {
                                                                    form.setValue("course_department_identifier", code.value)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        code.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {code.label}
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
                                name="course_code"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Course Code " {...field} />
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
                                name="course_description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Description</FormLabel>
                                        <FormControl>
                                        <Textarea placeholder="Course Description" className="resize-none" {...field} />
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
                                name="course_department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Department</FormLabel>
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
                                                                    form.setValue("course_department", department.value)
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
                            <FormField
                                control={form.control}
                                name="course_program"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Branch</FormLabel>
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
                                                                    form.setValue("course_program", program.value)
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
                                name="course_type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course type</FormLabel>
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
                                                            ? coursetypes.find(
                                                                (type) => type.value === field.value
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
                                                        {coursetypes.map((type) => (
                                                            <CommandItem
                                                                value={type.label}
                                                                key={type.value}
                                                                onSelect={() => {
                                                                    form.setValue("course_type", type.value)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        type.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />{type.label}
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
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}