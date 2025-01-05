"use client";

import { FixedNavbar } from "@/components/custom/fixed-navbar";
import { MoveVertical } from "lucide-react";
import { Footer } from "@/components/custom/footer";
import { Hero } from "@/components/custom/hero";
import { useEffect, useState } from 'react';
import { BlogPost } from '@/types/blog';
import { mockBlogs } from '@/data/mock-blogs';
import { BlogCard } from '@/components/custom/blog-card';

export default function LandingPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setBlogs(mockBlogs);
      } catch (err) {
        setError('Failed to fetch blogs');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="flex flex-col min-h-screen space-y-4">
      <FixedNavbar />
      <div className="flex flex-col w-full h-full px-4">
        <Hero />
        <MoveVertical className="h-8 w-8 self-center my-10" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div 
                key={blog.id} 
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
        </div>
      </div>
      <Footer />
    </section>
  );
}
