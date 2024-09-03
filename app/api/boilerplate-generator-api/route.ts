import supabase from '@/lib/supabase'
import { createWriteStream } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import generateJavaBoilerPlate from './java-boilerplate-generator'

type problemDetailsType = {
  problem_name: String
  function_name: String
  input_fields: Array<string>
  output_field: String
}

export async function POST(req: Request, res: Response) {
  const body: problemDetailsType = await req.json()
  const boilerPlate: string = await generateJavaBoilerPlate(body)
  return NextResponse.json('Executed')
}
