'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import styles from './ModalAuth.module.css'

export default function ModalAuth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <label htmlFor="email" className={styles.labelLogin}>
        Email
      </label>
      <input
        className={styles.inputLogin}
        placeholder="Coloca tu email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password" className={styles.labelLogin}>
        Contraseña
      </label>
      <input
        className={styles.inputLogin}
        id="password"
        type="password"
        name="password"
        placeholder="Coloca tu contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className={styles.btnLoginContainer}>
        <button onClick={handleSignUp} className={styles.btnRegister}>
          Registrarse
        </button>
        <button onClick={handleSignIn} className={styles.btnSignIn}>
          Iniciar sesión
        </button>
        <button onClick={handleSignOut} className={styles.btnSignOut}>
          Cerrar sesión
        </button>
      </div>
    </>
  )
}
