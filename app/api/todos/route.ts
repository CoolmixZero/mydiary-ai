import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    NextResponse.error();
  }

  const body = await request.json();
  const { 
    title, 
    content,  
    status    
   } = body;

   Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });


   const todo = await prisma.todo.create({
    data: {
      title,
      content,
      status,
      userId: currentUser.id
    }
  });

  return NextResponse.json(todo);
}

