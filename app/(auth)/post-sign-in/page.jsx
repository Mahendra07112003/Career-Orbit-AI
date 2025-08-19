import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";
import { checkUser } from "@/lib/checkUser";

const PostSignInPage = async () => {
  await checkUser();
  const { isOnboarded } = await getUserOnboardingStatus();
  if (!isOnboarded) {
    redirect("/onboarding");
  }
  redirect("/dashboard");
};

export default PostSignInPage;

