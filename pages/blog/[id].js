import Layout from '../../components/Layout';
import React from 'react';
import { timeConverter } from '../../helpers/utils/timeConverter';
import Head from 'next/head';

export default function BlogDetail(props) {
  const { post } = props;

  return (
    <Layout>
      <Head>
        <title>{post?.title} | Bilal Uçar</title>
      </Head>
      <section className={`container py-5 blog-detail ${!post ? 'skeleton' : ''}`}>
        <div className="row">
          <div className="col-12">
            <h1 className="blog-detail__title">{post?.title}</h1>
            <div className="blog-detail__meta">
              <img
                className="blog-detail__avatar"
                src={post?.authorInfo?.avatar}
                alt={post?.authorInfo?.fullName}
              />
              <div>
                <div className="blog-detail__meta-item">{post?.authorInfo?.fullName}</div>
                <div className="blog-detail__meta-item">
                  {timeConverter(post?.created?._seconds)}
                </div>
              </div>
            </div>
            <p className="blog-detail__summary">{post?.summary}</p>
            <div className="blog-detail__image">
              <img src={post?.featuredImage} alt={post?.title} className="img-fluid" />
            </div>
            <div
              className="blog-detail__content"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            />
            <div className="blog-detail__tag-box">
              <div className="blog-detail__tag-text">Etiketler:</div>
              {post?.tags?.map(item => (
                <span className="blog-detail__tag" key={item}>
                  #{item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('https://us-central1-blog-269208.cloudfunctions.net/blog/api/v1/posts');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { id: post.url },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const res = await fetch(`https://us-central1-blog-269208.cloudfunctions.net/blog/api/v1/posts`);
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: posts.find(item => item.url === params.id),
    },
  };
}
