import React from "react";

export function Hero() {
  return (
    <section className="h-1/2 flex items-center justify-center bg-background">
      <div className="container mx-auto py-16">
        <div className="flex flex-col w-full h-full">
          <h1 className="text-foreground font-semibold uppercase text-[4.5rem] md:text-[6rem] text-center leading-tight px-4">
            Infinite Pages.
          </h1>
          <h2 className="text-foreground font-semibold uppercase text-[1.8rem] md:text-[2rem] text-center leading-tight px-6 md:px-32 mt-10">
            A Boundless Collection of Ideas, Insights, and Stories to Inspire and Inform Every Reader.
          </h2>
        </div>
      </div>
    </section>
  );
}
