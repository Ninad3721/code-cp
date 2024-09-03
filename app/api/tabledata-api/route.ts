import supabase from '@/lib/supabase'
import { NextResponse } from 'next/server'

type problemInfo = {
  id: number
  title: string
  difficulty: string
  url: string
}
export async function POST(req: Request, res: Response) {
  const arrayOfDetailsOfQuestion: Array<problemInfo> = []
  const arrayOfQuestionsSolved: Array<number> = await req.json()
  try {
    const { data, error } = await supabase
      .from('problems')
      .select('id , title, difficulty, url')
      .in('id', arrayOfQuestionsSolved)
    data?.map((problem: any) => {
      arrayOfDetailsOfQuestion.push({
        id: problem.id,
        title: problem.title,
        difficulty: problem.difficulty,
        url: problem.url,
      })
    })
    if (error) {
      return NextResponse.json(error, { status: 200 })
    }
  } catch (error) {
    console.log(error)
  }

  return NextResponse.json(arrayOfDetailsOfQuestion, { status: 200 })
}
