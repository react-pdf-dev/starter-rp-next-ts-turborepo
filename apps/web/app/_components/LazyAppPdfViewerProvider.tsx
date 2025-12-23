"use client";
import dynamic from "next/dynamic";
import { RPConfigProps } from "@repo/ui/AppPdfViewerProvider";
import { PropsWithChildren } from "react";

export const LazyAppPdfViewerProvider = dynamic<PropsWithChildren<RPConfigProps>>(
  () => import("@repo/ui/AppPdfViewerProvider").then((mod) => mod.default),
  {
    ssr: false,
  }
);
