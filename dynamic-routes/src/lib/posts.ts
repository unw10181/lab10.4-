export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My first Post",
    content: "Welcome to my very first Post!!",
  },
  {
    id: 2,
    slug: "learning-react-router",
    title: "Learning React router",
    content: "Dynamic routes make appes powerful!",
  },
  {
    id: 3,
    slug: "auth-with-context",
    title: "Authentication with Context",
    content: "React context is great for global state",
  },
];
