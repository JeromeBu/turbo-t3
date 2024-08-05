"use client";

import { useEffect } from "react";

import { Alert, AlertTitle, AlertDescription } from "@acme/ui/alert";
import { Button } from "@acme/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full max-w-2xl items-center gap-4">
      <Alert>
        <ExclamationTriangleIcon />
        <AlertTitle>Something went wrong !</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
