"use client";

import useCountries from "@/app/_common/hooks/useCountries";
import { SafeUser } from "@/app/_common/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

type ListingHeadProps = {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
};

const ListingHead = ({ title, locationValue, imageSrc, id, currentUser }: ListingHeadProps) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading title={title} subtitle={`${location?.region}, ${location?.label}`} />
      <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
        <Image alt="Image" src={imageSrc} fill className="w-full object-cover" />
        <div className="absolute right-5 top-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
