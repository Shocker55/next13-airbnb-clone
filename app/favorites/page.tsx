import EmptyState from "../_components/EmptyState";
import FavoriteClient from "./FavoriteClient";

import getCurrentUser from "../_common/actions/getCurrentUser";
import getFavoriteListings from "../_common/actions/getFavoriteListings";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState title="No favorites found" subtitle="Looks like you have no favorite listings." />
    );
  }

  return <FavoriteClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
