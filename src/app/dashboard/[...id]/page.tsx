"use client";

import * as React from "react";
import { useParams } from "next/navigation";

export default function UserDashboardPage() {
  const params = useParams();
  const id = params.id;
  return <section className="flex min-h-screen px-4">id: {id}</section>;
}
