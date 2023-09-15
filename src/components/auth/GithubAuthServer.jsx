import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import {GithubAuth} from './GithubAuthClient'

export const dynamic = 'force-dynamic'

export async function GithubAuthServer() {
  const supabase = createClientComponentClient({cookies})
  const { data: {session} } = await supabase.auth.getSession()
 
  console.log(session)
  return (
    <GithubAuth session={session} />
  )
}