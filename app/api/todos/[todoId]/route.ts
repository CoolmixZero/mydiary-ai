import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  todoId?: string;
}

export async function DELETE(
   request: Request, 
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { todoId } = params;

  if (!todoId || typeof todoId !== 'string') {
    throw new Error('Invalid ID');
  }

  const todo = await prisma.todo.deleteMany({
    where: {
      id: todoId,
      userId: currentUser.id
    }
  });

  return NextResponse.json(todo);
}