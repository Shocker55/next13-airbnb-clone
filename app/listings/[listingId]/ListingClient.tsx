"use client";

import { useMemo } from "react";
import { Reservation } from "@prisma/client";

import { SafeListing, SafeUser } from "@/app/_common/types";
import { categories } from "@/app/_components/navbar/Categories";
import Container from "@/app/_components/Container";
import ListingHead from "@/app/_components/listings/ListingHead";
import ListingInfo from "@/app/_components/listings/ListingInfo";

type ListingClientProps = {
  reservations?: Reservation[];
  // actionsでlist取得時にuserをincludeしているため下記のように書く(userをマージ)
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
};

const ListingClient = ({ listing, currentUser }: ListingClientProps) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-7 md:gap-10">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
