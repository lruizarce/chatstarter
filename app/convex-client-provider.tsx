"use client";

import {
  ConvexProvider as OriginalConvexProvider,
  ConvexReactClient,
} from "convex/react";

const client = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function CustomConvexProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OriginalConvexProvider client={client}>{children}</OriginalConvexProvider>
  );
}
