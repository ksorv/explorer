'use client';

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Card className='p-4 my-8 mx-auto max-w-[300px] gap-2 flex flex-col text-center'>
      <CardTitle>Something went wrong!</CardTitle>
      <p>{error.message}</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Card>
  );
}
