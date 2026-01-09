import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </motion.div>
  );
}
