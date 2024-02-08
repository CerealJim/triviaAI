import SignInWithGithub from "@/app/components/SignInWithGithub";
import SignInForm from "@/app/components/SignInForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div className="">
      <h2>Please Sign In</h2>
      <p>to access the private page you have to be authenticated</p>
      <div className="">
        <SignInForm />
      </div>
      {/* <SignInWithGithub /> */}
    </div>
  );
}
