'use client'
import CodeEditor from '@/components/ui/CodeEditor'
import { CommonSkeleton } from '@/components/ui/CommonSkeleton'
import LanguageSelector from '@/components/ui/languageSelector'
import ProblemsSidePanel from '@/components/ui/ProblemsSidePanel'
import { CodeRunningSkeleton } from '@/components/ui/CodeRunningSkeleton'
import axios from 'axios'
import { useEffect, useState } from 'react'

type problemDataType = {
  id: number
  description: string
  difficulty: string
  title: string
}
export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id)
  const [language, setLanguage] = useState('java')
  const [loading, setLoading] = useState(true)
  const [code, setCode] = useState<String>('')
  const [problemData, setProblemData] = useState<problemDataType>({
    id: 0,
    description: '',
    difficulty: '',
    title: '',
  })
  const [codeSubmissionLoading, setCodeSubmissionLoading] = useState(false)
  const handleLanguageSelection = (data: string) => {
    setLanguage(data)
  }

  const handleCodeSubmission = async (data: string) => {
    setCodeSubmissionLoading(true)
    const response = await axios.post('/api/code-runner-api', {
      code: data,
    })
    console.log(response.data)
    setCodeSubmissionLoading(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('/api/problem-api', params.id)
      setProblemData(response.data[0])
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return <CommonSkeleton />
  } else {
    return (
      <>
        <div className="w-[100%] flex m-2">
          <div className="w-[50%]">
            <ProblemsSidePanel
              problemData={{
                id: problemData?.id,
                title: problemData?.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
              }}
            />
            {codeSubmissionLoading ? (
              <div className="m-2 ml-3">
                <CodeRunningSkeleton />
              </div>
            ) : null}
          </div>
          <div className="w-[48%] block">
            <div className="p-2">
              <LanguageSelector
                handleLanguageSelection={handleLanguageSelection}
              />
            </div>
            <div className="p-2">
              <CodeEditor
                language={language}
                handleCodeSubmission={handleCodeSubmission}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}
