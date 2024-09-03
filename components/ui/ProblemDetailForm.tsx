'use client'
interface responseType {
  data: {
    alertType: string
    message: string
  }
}

import { z } from 'zod'
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
import { Input } from '@/components/ui/input'
import supabase from '@/lib/supabase'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  problemTitle: z.string().min(2).max(50),
  problemDescription: z.string().min(2),
  input1: z.string().max(50),
  output1: z.string().max(50),
  input2: z.string().max(50),
  output2: z.string().max(50),
})

export default function ProblemDetailForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problemTitle: '',
      problemDescription: '',
      input1: '',
      output1: '',
      input2: '',
      output2: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data }: responseType = await axios.post(
      '/api/problem-api/problem-contribution',
      values
    )
    console.log(data.alertType)
    if (data.alertType === 'success') {
      router.push('/problem-setter/problem-function')
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="problemTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Problem Title</FormLabel>
                <FormControl>
                  <Input placeholder="Two Sum" {...field} />
                </FormControl>
                <FormDescription>Title for your problem</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="problemDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Problem Description</FormLabel>
                <FormControl>
                  <Input placeholder="Add the two numbers ....." {...field} />
                </FormControl>
                <FormDescription>Description for your problem</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Example Input 1 </FormLabel>
                <FormControl>
                  <Input
                    placeholder="nums = [2,7,11,15],target = 9"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="output1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Example Output 1 </FormLabel>
                <FormControl>
                  <Input placeholder="[0,1]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Example Input 2 </FormLabel>
                <FormControl>
                  <Input placeholder="nums = [3,2,4], target = 6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="output2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Example Output 2</FormLabel>
                <FormControl>
                  <Input placeholder="[1,2]" {...field} />
                </FormControl>
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
