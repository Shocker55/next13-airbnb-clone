import { NextResponse } from "next/server";

import getCurrentUser from "@/app/_common/actions/getCurrentUser";
import prisma from "@/app/_common/libs/prismadb";

type IParams = {
  reservationId?: string;
};

export async function DELETE(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { reservationId } = params;

  if (!reservationId || typeof reservationId !== "string") {
    throw new Error("Invalid ID");
  }

  // reservationをした人か、その物件のオーナーがreservationを削除する
  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });

  return NextResponse.json(reservation);
}
