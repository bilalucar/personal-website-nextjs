const apiUrl = 'https://us-central1-blog-269208.cloudfunctions.net/api';
// const apiUrl = 'http://localhost:5001/blog/us-central1/api';

export async function getPosts() {
  return await fetch(`${apiUrl}/posts`);
}

export async function getPost(slug) {
  return await fetch(`${apiUrl}/posts/${slug}`);
}

export async function getPostPaths() {
  return await fetch(`${apiUrl}/posts/paths`);
}
