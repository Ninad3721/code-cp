import supabase from '@/lib/supabase'
import { NextResponse } from 'next/server'

type responseType = {
  alertType: string
  message: string
}
type problemDetailsType = {
  problemTitle: string
  problemDescription: string
  input1: string
  output1: string
  input2: string
  output2: string
}
export async function POST(req: Request, res: Response) {
  const body: problemDetailsType = await req.json()
  console.log(body)
  const { data, error } = await supabase.from('contributed-problems').insert({
    title: body.problemTitle,
    description: body.problemDescription,
    input1: body.input1,
    output1: body.output1,
    input2: body.input2,
    output2: body.output2,
  })
  if (error) {
    console.log(error)
    return NextResponse.json({
      alertType: 'error',
      message: error.message,
    } as responseType)
  }

  return NextResponse.json({
    alertType: 'success',
    message: 'Problem details saved successfully',
  })
}
