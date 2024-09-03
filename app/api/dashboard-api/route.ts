'user-server'
import { auth, currentUser } from '@clerk/nextjs/server'
import supabase from '@/lib/supabase'
import { error } from 'console'
import { NextResponse } from 'next/server'
export async function POST(req: Request, res: Response) {
  // Get the userId from auth() -- if null, the user is not signed in
  const user = await currentUser()
  const responseArray = await supabase
    .from('user-profile')
    .select('*')
    .eq('id', user?.id.slice(5)) // Remove the user_prefix
  if (responseArray.data?.length === 0) {
    const { error } = await supabase.from('user-profile').insert({
      id: user?.id.slice(5), // Remove the user_prefix
      username: user?.username,
      name: user?.fullName,
      email: user?.emailAddresses[0].emailAddress,
    })
    if (error) {
      NextResponse.json(error, { status: 200 })
    }
  }
  const { data, error } = await supabase
    .from('user-profile')
    .select('*')
    .eq('id', user?.id.slice(5))
  if (error) {
    NextResponse.json(error, { status: 404 })
  }
  return NextResponse.json(data?.[0], { status: 200 })
}
