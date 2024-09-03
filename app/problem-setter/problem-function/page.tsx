'use client'
import Navbar from '@/components/ui/navbar'
import ProblemForm from '@/components/ui/problemForm'

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center  w-[100%] mt-6">
        <div className="w-[30%] ">
          <h1 className="font-medium text-3xl pb-6">Function Details </h1>
          <ProblemForm />
        </div>
      </div>
    </div>
  )
}
