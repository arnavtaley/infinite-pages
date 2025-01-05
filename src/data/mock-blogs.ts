import { BlogPost } from '@/types/blog';

export const mockBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Clean Code: Best Practices for Modern Development',
    description: 'Discover the principles of writing clean, maintainable code that stands the test of time...',
    date: '2024-03-15',
    thumbnail: '/assets/clean-code.jpg',
    category: 'Programming',
    readTime: '12 min read',
    author: {
      name: 'John Doe',
      avatar: '/assets/avatars/john.jpg',
    },
  },
  {
    id: '2',
    title: 'Understanding React Server Components',
    description: 'Deep dive into React Server Components and how they revolutionize web development...',
    date: '2024-03-14',
    thumbnail: '/assets/react-server.jpg',
    category: 'React',
    readTime: '8 min read',
    author: {
      name: 'Sarah Johnson',
      avatar: '/assets/avatars/sarah.jpg',
    },
  },
  {
    id: '3',
    title: 'The Future of AI in Software Development',
    description: 'Exploring how artificial intelligence is reshaping the landscape of software development...',
    date: '2024-03-13',
    thumbnail: '/assets/ai-dev.jpg',
    category: 'AI',
    readTime: '15 min read',
    author: {
      name: 'Michael Chen',
      avatar: '/assets/avatars/michael.jpg',
    },
  },
  {
    id: '4',
    title: 'Building Scalable Microservices with Node.js',
    description: 'Learn how to design and implement robust microservices architecture using Node.js...',
    date: '2024-03-12',
    thumbnail: '/assets/microservices.jpg',
    category: 'Backend',
    readTime: '10 min read',
    author: {
      name: 'Emma Wilson',
      avatar: '/assets/avatars/emma.jpg',
    },
  },
  {
    id: '5',
    title: 'Modern CSS Techniques for Better Web Design',
    description: 'Discover the latest CSS features and techniques for creating stunning web interfaces...',
    date: '2024-03-11',
    thumbnail: '/assets/css-modern.jpg',
    category: 'CSS',
    readTime: '7 min read',
    author: {
      name: 'Alex Turner',
      avatar: '/assets/avatars/alex.jpg',
    },
  },
  {
    id: '6',
    title: 'TypeScript Best Practices in 2024',
    description: 'Stay ahead with the latest TypeScript patterns and practices for large-scale applications...',
    date: '2024-03-10',
    thumbnail: '/assets/typescript.jpg',
    category: 'TypeScript',
    readTime: '11 min read',
    author: {
      name: 'Lisa Park',
      avatar: '/assets/avatars/lisa.jpg',
    },
  }
];