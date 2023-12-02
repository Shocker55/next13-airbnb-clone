import getCurrentUser from "./_common/actions/getCurrentUser";
import getListings, { IListingsParams } from "./_common/actions/getListings";

import Container from "./_components/Container";
import EmptyState from "./_components/EmptyState";
import ListingCard from "./_components/listings/ListingCard";

type HomeProps = {
  searchParams: IListingsParams;
};

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  // currentUserがいなかったとしてもnullを返すようにしているためエラーにはならない
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => {
          return <ListingCard currentUser={currentUser} key={listing.id} data={listing} />;
        })}
      </div>
    </Container>
  );
};

export default Home;
