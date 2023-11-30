import getCurrentUser from "@/app/_common/actions/getCurrentUser";
import getListingById from "@/app/_common/actions/getListingById";

import EmptyState from "@/app/_components/EmptyState";
import ListingClient from "./ListingClient";

type IParams = {
  listingId?: string;
};

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
    />
  )
};

export default ListingPage;
