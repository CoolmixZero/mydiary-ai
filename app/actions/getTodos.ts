"use server"

import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getTodos() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    let query: any = {};
    if (currentUser.id) {
      query = {
          userId: {
            in: currentUser.id,
          },
      };
    }

    const todos = await prisma.todo.findMany({
      where: query
    });

    const safeTodos = todos.map((todo) => ({
      ...todo,
      createdAt: todo.createdAt.toString(),
    }));
    console.log(safeTodos);
    return safeTodos;
  } catch (error: any) {
    throw new Error(error);
  }
}