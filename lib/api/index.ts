const apiUrl = 'https://us-central1-blog-269208.cloudfunctions.net/api';
// const apiUrl = 'http://localhost:5001/blog/us-central1/api';

export async function getPosts() {
  console.log(':GELDI');
  const res = await fetch(`${apiUrl}/posts`);
  console.log('res:', res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getPost(slug: string) {
  return await fetch(`${apiUrl}/posts/${slug}`);
}

export async function getPostPaths() {
  return await fetch(`${apiUrl}/posts/paths`);
}
