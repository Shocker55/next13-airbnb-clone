import { SafeListing, SafeUser } from "../_common/types";
import Container from "../_components/Container";
import Heading from "../_components/Heading";
import ListingCard from "../_components/listings/ListingCard";

type FavoriteClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};

const FavoriteClient = ({ listings, currentUser }: FavoriteClientProps) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited!" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
        ))}
      </div>
    </Container>
  );
};

export default FavoriteClient;
