// import SignInWithGithub from "@/app/components/SignInWithGithub";
import SignInForm from "@/app/components/SignInForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import styles from "../styles/AuthRoute.module.scss";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Sign In</h2>
        <p className={styles.subtitle}>
          To access the the dashboard, you have to be authenticated.
        </p>
        <div className={styles.signInForm}>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
