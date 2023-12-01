import prisma from "@/app/_common/libs/prismadb";

type IParams = {
  listingId?: string;
  userId?: string;
  authorId?: string;
};

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    // 送られてきたparamsによってクエリを作る
    // reservationは、listingページでも、userのreservationページでも使い、
    // authorはその物件の全てのreservationを取得する。
    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // reservationsを返したいのだが、listingにはDateオブジェクトが含まれるため値を文字列に変える
    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
