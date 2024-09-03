import supabase from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  console.log(body)
  const { data, error } = await supabase
    .from('problems')
    .select('*')
    .eq('id', body)
  if (error) {
    return NextResponse.json(error, {
      status: 400,
    })
  }
  return NextResponse.json(data, {
    status: 200,
  })
}
