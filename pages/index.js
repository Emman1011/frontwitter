import { useEffect, useState } from 'react';
import { fetchFromExpressAPI } from '../utils/api';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const postsData = await fetchFromExpressAPI('/tweets/negros');
        setPosts(postsData);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    }

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
