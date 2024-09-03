import { Badge } from '@/components/ui/badge'

type problemData = {
  id: number
  title: string
  description: string
  difficulty: string
}

export default function Page(props: { problemData: problemData }) {
  return (
    <div className="p-5">
      <div className="flex align-baseline justify-between">
        <div className="flex">
          <h1 className="text-2xl font-bold">{props.problemData.id}.</h1>
          <h1 className="text-2xl font-bold">{props.problemData.title}</h1>
        </div>
        <div>
          <Badge variant="outline">{props.problemData.difficulty}</Badge>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold">Description</h1>
        <p>{props.problemData.description}</p>
      </div>
    </div>
  )
}
