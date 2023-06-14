"use client";

import { SafeUser } from "@/app/types";
import Workspace from "./workspace/Workspace";
import Landing from "./landing/Landing";
import ClientOnly from "./ClientOnly";
import EmptyState from "./EmptyState";

interface PageProps {
  currentUser?: SafeUser | null;
}

const Page: React.FC<PageProps> = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <ClientOnly>
        <Landing />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Workspace />
    </ClientOnly>
  );
};

export default Page;
