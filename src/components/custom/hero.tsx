import React from "react";
import { cn } from "@/lib/utils";

export function Hero(): React.ReactElement {
  return (
    <section 
      className="h-1/2 flex items-center justify-center bg-background"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto py-12">
        <div className="flex flex-col w-full h-full">
          <h1 
            id="hero-heading"
            className={cn(
              "text-foreground font-semibold uppercase",
              "text-[3.2rem] md:text-[6rem]",
              "text-center leading-tight px-4"
            )}
          >
            Infinite Pages.
          </h1>
          <h2 
            className={cn(
              "text-foreground font-semibold",
              "text-[1.25em] md:text-[2rem]",
              "text-center leading-tight",
              "px-6 md:px-32 mt-10"
            )}
          >
            Step into a limitless world of stories, insights, and inspiration, 
            where every page turns into a new journey, and the possibilities 
            for discovery are endless—welcome to Infinite Pages.
          </h2>
        </div>
      </div>
    </section>
  );
}