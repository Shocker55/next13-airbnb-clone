"use client";

import { useEffect } from "react";
import EmptyState from "./_components/EmptyState";

type ErrorStateProps = {
  error: Error;
};

const ErrorState = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
