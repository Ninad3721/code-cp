'use client'

import DashboardTable from '@/components/ui/DashboardTable'
import { useAuth, useUser } from '@clerk/nextjs'
import ProfileCard from '@/components/ui/ProfileCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '@/components/ui/navbar'
import { CommonSkeleton } from '@/components/ui/CommonSkeleton'

interface userType {
  id: string
  created_at: Date
  email: string
  username: string
  name: string
  questionSolved: number
  idOfQuestionsSolved: number[]
  points: number
}
type problemInfo = {
  id: number
  title: string
  difficulty: string
  url: string
}

export default function Page() {
  const [userData, setUserData] = useState<userType>({
    name: '',
    id: '',
    created_at: new Date(),
    email: '',
    username: '',
    questionSolved: 0,
    idOfQuestionsSolved: [],
    points: 0,
  })

  const [problemInfo, setProblemInfo] = useState<problemInfo[]>([])
  const { isSignedIn, user, isLoaded } = useUser()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/api/dashboard-api')
        setUserData(response.data)
        const { data } = await axios.post(
          '/api/tabledata-api',
          response.data.idOfQuestionsSolved
        )
        setProblemInfo(data)
        setLoading(false)
      } catch (error) {
        // Handle the error here
        console.log(error)
      }
    }

    fetchData()
  }, [])

  if (!isLoaded || !isSignedIn) {
    return <div>User not signed in or data not loaded</div>
  }

  if (loading || !isLoaded || !isSignedIn) {
    return <CommonSkeleton />
  } else {
    return (
      <>
        <div className="block">
          <Navbar />
          <div className="flex justify-center mt-8">
            <div className="m-2">
              <ProfileCard
                name={userData?.name}
                username={userData?.username}
              />
            </div>
            <div className="w-[50%]  m-2 rounded-md">
              <DashboardTable problemInfo={problemInfo} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
