import Link from 'next/link'
import { Button } from './button'

export default function Navbar() {
  return (
    <div className="flex justify-center mt-4 w-[100%]">
      <div className="flex justify-around w-[30%]">
        <Link href={'/dashboard'}>
          <Button>Dashboard</Button>
        </Link>
        <Link href={'/problem-setter/problem-details'}>
          <Button>Contribute</Button>
        </Link>
        <Link href={'/problems'}>
          <Button>Problems</Button>
        </Link>
      </div>
    </div>
  )
}
