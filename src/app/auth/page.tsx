import SignInWithGithub from "@/app/components/SignInWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div>
      <h2>Please Sign In</h2>
      <div>
        <SignInWithGithub />
      </div>
    </div>
  );
}
