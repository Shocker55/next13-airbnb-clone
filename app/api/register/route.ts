import bcrypt from "bcrypt";

import prisma from "@/app/_common/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: { email, name, hashedPassword },
  });

  // ここはおそらく任意。returnがなくてもNext.jsは自動的にレスポンスを返すようにはしない。
  return NextResponse.json(user);
}
