import { useRouter } from "next/router";

export default function useMoveToPage() {
  const router = useRouter();

  const moveToLogin = () => {
    router.push("/login");
  };

  const moveToSignup = () => {
    router.push("/signup");
  };

  const moveToMain = () => {
    router.push("/main");
  };

  const moveToProfileEdit = () => {
    router.push(`/profile/edit`);
  };

  const moveToProfile = () => {
    router.push("/profile");
  };

  const moveToMyProject = () => {
    router.push("/profile/list");
  };

  const moveToChatting = () => {
    router.push("/chatting");
  };

  const moveToPayment = () => {
    router.push("/payment");
  };

  const moveToOnboarding = () => {
    router.push("/onboarding");
  };

  const moveToProjectManagement = (_id: string) => {
    router.push(`/project/management/${_id}`);
  };

  const moveToBack = () => {
    history.back();
  };

  return {
    moveToChatting,
    moveToMyProject,
    moveToLogin,
    moveToSignup,
    moveToMain,
    moveToProfileEdit,
    moveToProfile,
    moveToPayment,
    moveToBack,
    moveToOnboarding,
    moveToProjectManagement,
  };
}
