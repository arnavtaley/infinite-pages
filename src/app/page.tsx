"use client";

import * as React from "react";
import { FixedNavbar } from "@/components/custom/fixed-navbar";
import { MoveVertical } from "lucide-react";
import { Footer } from "@/components/custom/footer";
import { Hero } from "@/components/custom/hero";
import { BlogCard } from '@/components/custom/blog-card';
import { BlogPost } from '@/types/blog';
import { mockBlogs } from '@/data/mock-blogs';

interface FetchError {
  message: string;
}

export default function LandingPage(): React.ReactElement {
  const [blogs, setBlogs] = React.useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<FetchError | null>(null);

  React.useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setBlogs(mockBlogs);
      } catch (err) {
        setError({ 
          message: err instanceof Error ? err.message : 'Failed to fetch blogs' 
        });
      } finally {
        setIsLoading(false);
      }
    };

    void fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen" role="status" aria-label="Loading blogs">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-destructive" role="alert">
        {error.message}
      </div>
    );
  }

  return (
    <section className="flex flex-col min-h-screen space-y-4">
      <FixedNavbar />
      <div className="flex flex-col w-full h-full px-4">
        <Hero />
        <MoveVertical 
          className="h-8 w-8 self-center my-10" 
          aria-hidden="true"
        />
        <main className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div 
                key={`${blog.id}-${index}`} 
                className="w-full"
              >
                <BlogCard
                  orientation={'vertical'}
                  info={{
                    title: blog.title,
                    description: blog.description,
                    date: blog.date,
                    thumbnail: blog.thumbnail,
                    category: blog.category,
                    upload: blog.readTime,
                    author: blog.author
                  }}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </section>
  );
}