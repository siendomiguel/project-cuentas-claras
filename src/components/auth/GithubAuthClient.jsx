"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import styles from './GithubAuthClient.module.css'
import GithubIcon from '@/icons/github.jsx'
import { useRouter } from 'next/navigation'

export function GithubAuth() {
  const [session, setSession] = useState(null);
  const supabase = createClientComponentClient();
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    router.refresh()
  };
  
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: "http://localhost:3000/auth/callback" },
    });
  };


  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();
  }, []);

  return (
     <div className={styles.containerButtonsLoginGithub}>
      {session === null ? (
        <button className={styles.login} onClick={handleSignIn}><GithubIcon />Iniciar sesión con Github</button>
      ) : (
        <button className={styles.logout} onClick={handleSignOut}>Cerrar sesión</button>
      ) }
    </div>
  );
}

export default GithubAuth;
