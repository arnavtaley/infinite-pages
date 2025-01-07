export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  category: string;
  readTime: string;
  author: Author;
}