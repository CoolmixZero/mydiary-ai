import getCurrentUser from "./actions/getCurrentUser";
import Page from "./components/Page";
import { SafeUser } from "./types";

interface HomeProps {
  currentUser?: SafeUser | null;
}

export default async function Home() {
  const currentUser = await getCurrentUser();

  return <Page currentUser={currentUser} />;
}
