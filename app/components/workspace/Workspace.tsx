"use client";

import { SafeUser } from "@/app/types";
import ClientOnly from "../ClientOnly";
import Sidebar from "./sidebar/Sidebar";
import Today from "./Today";

interface WorkspaceProps {
  currentUser?: SafeUser | null;
}

const Workspace: React.FC<WorkspaceProps> = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <ClientOnly>
        <Sidebar />
        <Today />
      </ClientOnly>
    );
  }
  return <div>Hello</div>;
};

export default Workspace;
