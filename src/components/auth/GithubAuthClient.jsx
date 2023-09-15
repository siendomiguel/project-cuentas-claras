'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export function GithubAuth () {
  const [session, setSession] = useState(null)
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: 'http://localhost:3000/auth/callback' }
    })
    console.log(session)
  console.log(setSession)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    console.log(session)
  console.log(setSession)
  }

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    }
    getSession()
  }, [supabase.auth])
  
  return (
    <div>
      {session === null ? (
        <button onClick={handleSignIn}>Iniciar sesión con Github</button>
      ) : (
        <button onClick={handleSignOut}>Cerrar sesión</button>
      )}
    </div>
  )
}

export default GithubAuth
