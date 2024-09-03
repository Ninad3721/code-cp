import { Button } from '@/components/ui/button'

import Link from 'next/link'

export default function Page() {
  function handleClick() {}
  return (
    <>
      <div className=" flex justify-center h-screen  items-center">
        <div className="block">
          <h1 className="text-6xl font-bold m-2">Welcome !!! </h1>
          <div className="flex justify-center p-2 mt-8">
            <Link rel="stylesheet" href="/sign-in">
              <Button>Sign in</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
