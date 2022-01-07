import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "components/LoginButton";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <LoginButton />
    </>
  );
}
