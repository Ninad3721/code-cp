'use client'
import { string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import axios from 'axios'

const formSchema = z.object({
  problem_name: z.string().min(2).max(50),
  function_name: z.string(),
  input_fields: z.string(),
  output_field: z.string(),
})
export default function ProblemForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problem_name: '',
      function_name: '',
      input_fields: '',
      output_field: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const inputFieldsArray = values.input_fields
      .split('\n')
      .map((field) => field.trim())
    try {
      const { data } = await axios.post('/api/boilerplate-generator-api', {
        problem_name: values.problem_name,
        function_name: values.function_name,
        input_fields: inputFieldsArray,
        output_field: values.output_field,
      })
      // Handle the response data here
    } catch (error) {
      // Handle the error here
      alert(error)
    }
  }
  return (
    <div>
      <div className="flex justify-center  "></div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="problem_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Problem name</FormLabel>
                <FormControl>
                  <Input placeholder="Two Sum" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of your problem
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="function_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Function name</FormLabel>
                <FormControl>
                  <Input placeholder="TwoSum" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of your function
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input_fields"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Input fields</FormLabel>
                <FormControl>
                  <Textarea placeholder={`int arr[] \nint num \n`} {...field} />
                </FormControl>
                <FormDescription>
                  Strictly follow the given format in the example
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="output_field"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Output Type</FormLabel>
                <FormControl>
                  <Input placeholder="ex. int" {...field} />
                </FormControl>
                <FormDescription>
                  Type of the expected output i.e int int[] string ...
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
