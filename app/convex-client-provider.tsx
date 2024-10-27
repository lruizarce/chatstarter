"use client";

import {
  ConvexProvider as OriginalConvexProvider,
  ConvexReactClient,
} from "convex/react";

import { ConvexProviderwithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

const client = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexProviderwithClerk client={client} useAuth={useAuth}>
      {children}
    </ConvexProviderwithClerk>
  );
}
