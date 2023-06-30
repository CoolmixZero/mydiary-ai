import getCurrentUser from "./actions/getCurrentUser";
import getTodos from "./actions/getTodos";

import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import Landing from "./components/landing/Landing";
import Today from "./components/workspace/Today";
import Sidebar from "./components/workspace/sidebar/Sidebar";

export default async function Home() {
  const todo = await getTodos();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <Landing />
      </ClientOnly>
    );
  }
  if (todo.length === 0) { 
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Sidebar />
      <Today data={todo} currentUser={currentUser} />
    </ClientOnly>
  );
}
