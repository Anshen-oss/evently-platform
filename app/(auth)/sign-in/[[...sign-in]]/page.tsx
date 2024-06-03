import { SignIn } from "@clerk/nextjs";
import { pages } from "next/dist/build/templates/app-page";

export default function Page() {
  return <SignIn />;
}
