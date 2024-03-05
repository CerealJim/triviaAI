import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import TriviaForm from "./components/form";
import Link from "next/link";
import styles from "./styles/Home.module.scss";

// Default function representing the home page
export default async function Home() {
  // Retrieve the user's session on the server side
  const session = await getServerSession(authOptions);

  return (
    // Main content container with defined styless
    <main className={styles.main}>
      <h1>Trivia AI</h1>

      <div>{/* <p>Hello 😎</p> */}</div>

      {session && session.user ? (
        <div>
          {/* <h2>Welcome {`${session.user.name}`}. You are logged in</h2> */}
          {/* <LogoutButton /> */}
          <TriviaForm />
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button>
            <Link href="/auth">Login</Link>
          </button>
        </div>
      )}
      {/* <TriviaForm /> */}
    </main>
  );
}
