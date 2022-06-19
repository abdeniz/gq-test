import "./index.css";
import {useState, useEffect} from "react";
import {supabase} from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";
import {Button} from "@chakra-ui/react";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  async function signInWithGithub() {
    const {user, session, error} = await supabase.auth.signIn({
      provider: "github",
    });

    console.log(session);

    setSession(session);
  }

  return (
    <div className="container" style={{padding: "50px 0 100px 0"}}>
      {!session ? (
        <Button onClick={() => signInWithGithub()}>Log in Github</Button>
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}
