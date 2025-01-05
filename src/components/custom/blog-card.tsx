"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  orientation: "horizontal" | "vertical";
  info: {
    title: string;
    description: string;
    date: string;
    thumbnail: string;
    category?: string;
    upload?: string;
    author?: {
      name: string;
      avatar?: string;
    };
  };
}

export function BlogCard({
  orientation,
  info: { title, description, date, thumbnail, category, upload, author },
}: BlogCardProps) {
  return (
    <Card className={`bg-sidebar/40 rounded-md border-none ${ orientation === "horizontal" ? "flex items-center" : "" }`}>
      <CardHeader className={` ${ orientation === "horizontal" ? "w-1/2" : "" }`}>
        <Image className="object-cover transition-transform duration-300 group-hover:scale-105" src={thumbnail} alt={title} width={800} height={400} />
      </CardHeader>
      <CardContent className={`space-y-4 ${ orientation === "horizontal" ? "w-1/2 p-0" : "" }`}>
        <CardTitle className={`md:text-4xl ${ orientation === "horizontal" ? "text-xl" : "text-2xl" }`}>{title}</CardTitle>
        <CardDescription className={`text-lg ${ orientation === "horizontal" ? "hidden" : "block"}`}>{description}</CardDescription>
      </CardContent>
      <CardFooter className={`text-foreground ${ orientation === "horizontal" ? "hidden" : ""}`}>{upload}</CardFooter>
    </Card>
  );
}
