import getCurrentUser from "./actions/getCurrentUser";
import Landing from "./components/landing/Landing";
import { SafeUser } from "./types";

interface HomeProps {
  currentUser?: SafeUser | null;
}

export default async function Home() {
  const currentUser = await getCurrentUser();

  return <Landing currentUser={currentUser} />;
}
