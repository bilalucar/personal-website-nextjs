import Layout from '../components/Layout';
import React from 'react';
import BlogItem from '../components/BlogItem';
import Head from 'next/head';

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Bilal Uçar - Front-end Developer | JavaScript</title>
      </Head>
      <section className="container py-5">
        <div className="row mb-3">
          <div className="col-12 col-lg-4">
            <h3
              className="home__title wow fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              Blog
            </h3>
          </div>
        </div>
        {posts.sort((a, b) => b.created._seconds - a.created._seconds).length ? (
          posts.map(post => <BlogItem item={post} key={post.id} />)
        ) : (
          <div className="skeleton">
            <div className="row mb-5 blog-item">
              <div className="col-12 col-lg-4" />
              <div
                className="col-12 col-lg-8 blog-item__content wow fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="blog-item__title"></div>
                <div className="blog-item__meta"></div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="row mb-5 blog-item">
              <div className="col-12 col-lg-4"></div>
              <div
                className="col-12 col-lg-8 blog-item__content wow fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="blog-item__title"></div>
                <div className="blog-item__meta"></div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://us-central1-blog-269208.cloudfunctions.net/blog/api/v1/posts`);
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
  };
}
