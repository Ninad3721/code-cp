import Navbar from '@/components/ui/navbar'
import ProblemForm from '@/components/ui/problemForm'
import ProblemDetailForm from '@/components/ui/ProblemDetailForm'
export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center  w-[100%] mt-6">
        <div className="w-[30%]">
          <h1 className="font-medium text-3xl pb-6">Problem Details </h1>
          <ProblemDetailForm />
        </div>
      </div>
    </div>
  )
}
