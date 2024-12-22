"use client";

import * as React from "react";
import { NextUIProvider as OriginalNextUIProvider } from "@nextui-org/system";

export function NextUIProvider({
  children,
  ...props
}: React.ComponentProps<typeof OriginalNextUIProvider>) {
  return <OriginalNextUIProvider {...props}>{children}</OriginalNextUIProvider>;
}
