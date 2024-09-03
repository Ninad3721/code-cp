import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserButton } from '@clerk/nextjs'
export default function ProfileCard(props: { name: string; username: string }) {
  return (
    <div>
      <div className="flex p-4 rounded-sm min-w-96 bg-[#282828] items-center">
        <div>
          <Avatar className="">
            <UserButton />
          </Avatar>
        </div>
        <div className=" ml-6">
          <a className="font-bold text-4xl text-white">{props.name}</a>
          <br />
          <a className="from-neutral-600 text-white">@{props.username}</a>
        </div>
      </div>
    </div>
  )
}
